import {db} from 'services/firebase';

export default class item{
	static getItens = (last) => {
		let item = [];
		return new Promise((res, rej) => {
			db.collection('item').orderBy('createdAt', 'desc').startAfter(last).limit(5).get().then(querySnapshot => {
				querySnapshot.forEach(doc => {
					item.push({
						id: doc.id,
						...doc.data()
					})
				});
				res(item)
			}).catch(rej)
		});

	};
}
