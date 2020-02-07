export const ITEM_SEND = 'ITEM_SEND';
export const ITEM_SAVED_SUCCESS = 'ITEM_SAVED_SUCCESS';
export const ITEM_FETCH = 'ITEM_FETCH';
export const ITEM_FULLFILLED = 'ITEM_FULLFILLED';

export const itemSend = (payload) => ({
	type: ITEM_SEND,
	payload
});

export const itemSavedSuccess = () => ({
	type: ITEM_SAVED_SUCCESS
});

export const itemFetch = () => ({
	type: ITEM_FETCH,
	payload: {}
});

export const itemFullFilled = (data) => ({
	type: ITEM_FULLFILLED,
	payload: {
		data
	}
});
