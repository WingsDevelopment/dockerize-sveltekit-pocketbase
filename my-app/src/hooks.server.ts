import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
	console.log('handle is called!!');
	const pb = new PocketBase('http://pocketbase:8090');
	console.log({ pb });
	event.locals.pocketbase = pb;

	const response = await resolve(event);

	return response;
};
