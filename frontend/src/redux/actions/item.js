export const SEND_ITEM = 'SEND_ITEM';
export const SAVED_SUCCESS = 'SAVED_SUCCESS';

export const sendItem = (payload) => ({
	type: SEND_ITEM,
	payload
});

export const savedSuccess = () => ({
	type: SAVED_SUCCESS
});
