import {db} from 'services/firebase';

export default class item{
	static getItens = () => {
		let item = [];
		return new Promise((res, rej) => {
			db.collection('item').orderBy('nome').get().then(querySnapshot => {
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
