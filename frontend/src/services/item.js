import {db} from 'services/firebase';

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
}
