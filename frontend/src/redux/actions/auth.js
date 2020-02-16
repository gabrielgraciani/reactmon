export const AUTH_OPEN_FORM = 'AUTH_OPEN_FORM';
export const AUTH_CLOSE_FORM = 'AUTH_CLOSE_FORM';

export const authOpenForm = () => ({
	type: AUTH_OPEN_FORM
});

export const authCloseForm = () => ({
	type: AUTH_CLOSE_FORM,
	payload: {}
});