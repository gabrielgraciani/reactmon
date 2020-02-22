import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const Search = ({className, placeholder, active, searchTerm, handleChange}) => (
	<div id="wrap_search" className={className}>
		<div className="indent">
			<div className="search">
				<input className={`search-input ${active}`} type="text" name="" value={searchTerm} onChange={handleChange} placeholder={placeholder} />
				<div className="search-btn">
					<SearchIcon />
				</div>
			</div>
		</div>
	</div>
);

export default Search;