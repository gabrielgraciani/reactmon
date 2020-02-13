import React, {useState, useEffect} from 'react';
/*import {db} from 'services/firebase';*/


/*function Pagination(){
	const [values, setValues] = useState([]);
	const [last, setLast] = useState();
	const [first, setFirst] = useState();

	let pageSize = 3;
	let field = 'createdAt';

		let item = [];
	const fetchData = () => {
		db.collection('item').orderBy(field, 'desc').limit(pageSize).get().then(querySnapshot => {
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
		db.collection('item').orderBy(field, 'desc').startAfter(last).limit(pageSize).get().then(querySnapshot => {
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
			let lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
			console.log('first', firstVisible);
			setFirst(firstVisible);
			setLast(lastVisible);


		});
	};

	const prevData = (first) => {
		console.log(first);

		db.collection('item').orderBy(field, 'desc').endBefore(first).limitToLast(pageSize).get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				item.push({
					id: doc.id,
					...doc.data()
				});
				console.log('data prev', doc.data());
			});
			setValues(item);
			console.log("item prev", item);

			let firstVisible = querySnapshot.docs[querySnapshot.docs.length-querySnapshot.docs.length];
			let lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
			console.log('first', firstVisible);
			setFirst(firstVisible);
			setLast(lastVisible);
		});
	};


	useEffect(() => {
		fetchData();
	}, []);

	console.log(values);
	return(

		<>
		{values.map((item) => (
			<div key={item.id}>{item.nome}</div>
		))}

		<button type="button" onClick={() => {nextData(last)}}>next</button>
		<button type="button" onClick={() => {prevData(first)}}>prev</button>
		</>
	)
}*/

function Pagination(){
	const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
	const [isFetching, setIsFetching] = useState(false);

	function handleScroll() {
		if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
		setIsFetching(true);
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	function fetchMoreListItems() {
		setTimeout(() => {
			setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
			setIsFetching(false);
		}, 2000);
	}

	useEffect(() => {
		if (!isFetching) return;
		fetchMoreListItems();
	}, [isFetching]);

	return(
		<>
		<ul className="list-group mb-2">
			{listItems.map((listItem, index) => <li className="list-group-item" key={index} style={{color:'#000'}}>List Item {listItem}</li>)}
		</ul>
		{isFetching && 'Fetching more list items...'}
		</>
	)
}

export default Pagination;