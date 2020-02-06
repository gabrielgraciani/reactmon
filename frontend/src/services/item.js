import {db} from 'services/firebase';

export default class item{
	static getItens = () => {
		let item = [];
		db.collection('item').get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				item.push({
					id: doc.id,
					...doc.data()
				})
			});
			console.log("item: ", item);
			return item;
		});
	};
}
