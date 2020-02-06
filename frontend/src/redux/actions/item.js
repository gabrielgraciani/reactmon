export const ITEM_SEND = 'ITEM_SEND';
export const ITEM_SAVED_SUCCESS = 'ITEM_SAVED_SUCCESS';

export const itemSend = (payload) => ({
	type: ITEM_SEND,
	payload
});

export const itemSavedSuccess = () => ({
	type: ITEM_SAVED_SUCCESS
});
