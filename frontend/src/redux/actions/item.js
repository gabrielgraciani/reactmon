export const ITEM_SEND = 'ITEM_SEND';
export const ITEM_SAVED_SUCCESS = 'ITEM_SAVED_SUCCESS';
export const ITEM_FETCH = 'ITEM_FETCH';
export const ITEM_FULLFILLED = 'ITEM_FULLFILLED';
export const ITEM_DELETE = 'ITEM_DELETE';
export const ITEM_SHOW_EDIT = 'ITEM_SHOW_EDIT';
export const ITEM_EDIT_FULLFILLED = 'ITEM_EDIT_FULLFILLED';
export const ITEM_UPDATE = 'ITEM_UPDATE';
export const ITEM_OPEN_FORM = 'ITEM_OPEN_FORM';
export const ITEM_CLOSE_FORM = 'ITEM_CLOSE_FORM';
export const ITEM_UPDATE_LIST = 'ITEM_UPDATE_LIST';

export const itemSend = (payload) => ({
	type: ITEM_SEND,
	payload
});

export const itemSavedSuccess = (payload) => ({
	type: ITEM_SAVED_SUCCESS,
	payload
});

export const itemFetch = (last) => ({
	type: ITEM_FETCH,
	last
});

export const itemFullFilled = (list) => ({
	type: ITEM_FULLFILLED,
	payload: {
		list
	}
});

export const itemShowEdit = (payload) => ({
	type: ITEM_SHOW_EDIT,
	payload
});

export const itemEditFullFilled = (payload) => ({
	type: ITEM_EDIT_FULLFILLED,
	payload: {
		payload
	}
});

export const itemDelete = (payload) => ({
	type: ITEM_DELETE,
	payload
});

export const itemUpdate = (payload) => ({
	type: ITEM_UPDATE,
	payload
});

export const itemUpdateList = (list) => ({
	type: ITEM_UPDATE_LIST,
	payload: {
		list
	}
});

export const itemOpenForm = () => ({
	type: ITEM_OPEN_FORM
});

export const itemCloseForm = () => ({
	type: ITEM_CLOSE_FORM,
	payload: {}
});
