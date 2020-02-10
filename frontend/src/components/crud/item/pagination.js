import React, {useState, useEffect} from 'react';
import {db} from 'services/firebase';


function Pagination(){
	const [values, setValues] = useState([]);
	const [last, setLast] = useState();
	const [first, setFirst] = useState();

	let pageSize = 3;
	let field = 'nome';

		let item = [];
	const fetchData = () => {
		db.collection('item').orderBy(field).limit(pageSize).get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				item.push({
					id: doc.id,
					...doc.data()
				})
			});

			let lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
			console.log('last', lastVisible);

			setValues(item);
			setLast(lastVisible);
		});
	};

	const nextData = (last) => {
		console.log(last);
		db.collection('item').orderBy(field).startAfter(last).limit(pageSize).get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				item.push({
					id: doc.id,
					...doc.data()
				});
				console.log('data next', doc.data());
			});
			setValues(item);
			console.log("item next", item);

			let firstVisible = querySnapshot.docs[querySnapshot.docs.length-querySnapshot.docs.length];
			console.log('first', firstVisible);
			setFirst(firstVisible);

		});
	};

	const prevData = (first) => {
		console.log(first);

		db.collection('item').orderBy(field).endBefore(first).limitToLast(pageSize).get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				item.push({
					id: doc.id,
					...doc.data()
				});
				console.log('data prev', doc.data());
			});
			setValues(item);
			console.log("item prev", item);
		});
	};



/*	function nextPage(last){
		let query = db.collection('item').orderBy(field).startAfter(last[field]).limit(pageSize).get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				item.push({
					id: doc.id,
					...doc.data()
				})
			});
			console.log(item);
		});
	}

	function prevPage(first){
		let query = db.collection('item').orderBy(field).endBefore(first[field]).limitToLast(pageSize).get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				item.push({
					id: doc.id,
					...doc.data()
				})
			});
			console.log(item);
		});
	}*/

	useEffect(() => {
		fetchData();
	}, []);

	console.log(values);
	return(

		<>
		EITA CUZAO
		{values.map((item) => (
			<div key={item.id}>{item.nome}</div>
		))}

		<button type="button" onClick={() => {nextData(last)}}>next</button>
		<button type="button" onClick={() => {prevData(first)}}>prev</button>
		</>
	)
}

export default Pagination;