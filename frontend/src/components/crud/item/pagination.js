import React, {useState, useEffect} from 'react';
import {db} from 'services/firebase';

function Pagination(){
	const [values, setValues] = useState([]);
	const [last, setLast] = useState();
	const [isFetching, setIsFetching] = useState(false);

	function handleScroll() {
		if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
		setIsFetching(true);
	}

	let item = [];
	const fetchMoreListItems = (last) => {
		db.collection('item').orderBy('createdAt', 'desc').startAfter(last).limit(3).get().then(querySnapshot => {
			querySnapshot.forEach(doc => {
				item.push({
					id: doc.id,
					...doc.data()
				});
			});
			setValues([...values, ...item]);
			console.log("item next", item);
			setIsFetching(false);

			let lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
			setLast(lastVisible);


		});
	};

	useEffect(() => {
		fetchMoreListItems('');
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (!isFetching) return;
		fetchMoreListItems(last);
	}, [isFetching]);

	return(
		<>
		<ul className="list-group mb-2">
			{values.map((item, index) => <li className="list-group-item" key={index} style={{color:'#000'}}>List Item {item.nome}</li>)}
		</ul>
		{isFetching && 'Fetching more list items...'}
		</>
	)
}

export default Pagination;