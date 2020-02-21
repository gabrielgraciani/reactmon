import firebase, {db} from 'services/firebase';

export default class cidade{
	static getCidades = (last) => {
		let cidade = [];
		return new Promise((res, rej) => {
			db.collection('cidade').orderBy('createdAt', 'desc').startAfter(last).limit(12).get().then(querySnapshot => {
				querySnapshot.forEach(doc => {
					cidade.push({
						id: doc.id,
						...doc.data()
					})
				});
				const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
				let end;

				if(lastVisible){
					end = false;
					res({cidade, lastVisible, end});
				}else{
					end = true;
					res({cidade, end});
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
		const uploadTask = storageRef.child('images/cidades/' + id + '/' + file.name).put(file, metadata);

		return new Promise((res, rej) => {
			uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
				function(snapshot) {
					//const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
						db.collection('cidade').doc(id).update({
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

	static getFullCidades = () => {
		let cidade = [];
		return new Promise((res, rej) => {
			db.collection('cidade').orderBy('nome', 'asc').get().then(querySnapshot => {
				querySnapshot.forEach(doc => {
					cidade.push({
						id: doc.id,
						...doc.data()
					})
				});

				res({cidade});
			}).catch(rej)
		});
	};
}
