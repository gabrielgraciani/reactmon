import {db} from 'services/firebase';

export default class item{
	static getItens = (last) => {
		let item = [];
		return new Promise((res, rej) => {
			db.collection('item').orderBy('createdAt', 'desc').startAfter(last).limit(3).get().then(querySnapshot => {
				querySnapshot.forEach(doc => {
					item.push({
						id: doc.id,
						...doc.data()
					})
				});
				let lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];

				res({item, lastVisible});
			}).catch(rej)
		});

	};
}
