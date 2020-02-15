import firebase, {db} from 'services/firebase';

export default class item{
	static getItens = (last) => {
		let item = [];
		return new Promise((res, rej) => {
			db.collection('item').orderBy('createdAt', 'desc').startAfter(last).limit(12).get().then(querySnapshot => {
				querySnapshot.forEach(doc => {
					item.push({
						id: doc.id,
						...doc.data()
					})
				});
				const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
				let end;

				if(lastVisible){
					end = false;
					res({item, lastVisible, end});
				}else{
					end = true;
					res({item, end});
				}
			}).catch(rej)
		});
	};

	static saveImage = (imagem, id) => {
		const storageRef = firebase.storage().ref();
		const file = imagem;
		const metadata = {
			contentType: 'image/jpeg'
		};
		const uploadTask = storageRef.child('images/itens/' + id + '/' + file.name).put(file, metadata);

		return new Promise((res, rej) => {
			uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
				function(snapshot) {
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					//console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED:
							//console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING:
							//console.log('Upload is running');
							break;
						default:
							console.log('certo');
					}
				}, function(error) {

					switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
						default:
							alert(`Erro, tente novamente mais tarde`);

					}
				}, function() {
					uploadTask.snapshot.ref.getDownloadURL().then(function(url) {
						//console.log('File available at', url);
						db.collection('item').doc(id).update({
							imagem: {
								url,
								name: imagem.name
							},
						});

						const name = imagem.name;
						res({url, name});
					}).catch(rej)
				})
		});
	};
}
