export const CIDADE_SEND = 'CIDADE_SEND';
export const CIDADE_SAVED_SUCCESS = 'CIDADE_SAVED_SUCCESS';
export const CIDADE_FETCH = 'CIDADE_FETCH';
export const CIDADE_FULLFILLED = 'CIDADE_FULLFILLED';
export const CIDADE_DELETE = 'CIDADE_DELETE';
export const CIDADE_SHOW_EDIT = 'CIDADE_SHOW_EDIT';
export const CIDADE_EDIT_FULLFILLED = 'CIDADE_EDIT_FULLFILLED';
export const CIDADE_OPEN_FORM = 'CIDADE_OPEN_FORM';
export const CIDADE_CLOSE_FORM = 'CIDADE_CLOSE_FORM';
export const CIDADE_UPDATE = 'CIDADE_UPDATE';
export const CIDADE_UPDATE_LIST = 'CIDADE_UPDATE_LIST';
export const CIDADE_FETCH_SEARCH = 'CIDADE_FETCH_SEARCH';
export const CIDADE_FETCH_SEARCH_SUCCESS = 'CIDADE_FETCH_SEARCH_SUCCESS';


export const cidadeSend = (payload) => ({
	type: CIDADE_SEND,
	payload
});

export const cidadeSavedSuccess = (payload) => ({
	type: CIDADE_SAVED_SUCCESS,
	payload
});

export const cidadeFetch = () => ({
	type: CIDADE_FETCH
});

export const cidadeFullFilled = (list, last, endInfiniteScroll) => ({
	type: CIDADE_FULLFILLED,
	payload: {
		list,
		last,
		endInfiniteScroll
	}
});

export const cidadeDelete = (payload) => ({
	type: CIDADE_DELETE,
	payload
});

export const cidadeShowEdit = (payload) => ({
	type: CIDADE_SHOW_EDIT,
	payload
});

export const cidadeEditFullFilled = (payload) => ({
	type: CIDADE_EDIT_FULLFILLED,
	payload: {
		payload
	}
});

export const cidadeOpenForm = () => ({
	type: CIDADE_OPEN_FORM
});

export const cidadeCloseForm = () => ({
	type: CIDADE_CLOSE_FORM,
	payload: {}
});

export const cidadeUpdate = (payload) => ({
	type: CIDADE_UPDATE,
	payload
});

export const cidadeUpdateList = (list) => ({
	type: CIDADE_UPDATE_LIST,
	payload: {
		list
	}
});

export const cidadeFetchSearch = () => ({
	type: CIDADE_FETCH_SEARCH
});

export const cidadeFetchSearchSuccess = (listSearch) => ({
	type: CIDADE_FETCH_SEARCH_SUCCESS,
	payload: {
		listSearch
	}
});