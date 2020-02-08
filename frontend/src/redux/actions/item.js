export const ITEM_SEND = 'ITEM_SEND';
export const ITEM_SAVED_SUCCESS = 'ITEM_SAVED_SUCCESS';
export const ITEM_FETCH = 'ITEM_FETCH';
export const ITEM_FULLFILLED = 'ITEM_FULLFILLED';
export const ITEM_DELETE = 'ITEM_DELETE';
export const ITEM_UPDATE = 'ITEM_UPDATE';

export const itemSend = (payload) => ({
	type: ITEM_SEND,
	payload
});

export const itemSavedSuccess = (payload) => ({
	type: ITEM_SAVED_SUCCESS,
	payload
});

export const itemFetch = () => ({
	type: ITEM_FETCH,
	payload: {}
});

export const itemFullFilled = (list) => ({
	type: ITEM_FULLFILLED,
	payload: {
		list
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