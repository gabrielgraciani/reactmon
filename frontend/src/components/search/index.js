import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const Search = ({placeholder}) => (
	<div id="wrap_search">
		<div className="indent">
			<div className="search">
				<input className="search-input" type="text" name="" placeholder={placeholder} />
				<div className="search-btn">
					<SearchIcon />
				</div>
			</div>
		</div>
	</div>
);

export default Search;