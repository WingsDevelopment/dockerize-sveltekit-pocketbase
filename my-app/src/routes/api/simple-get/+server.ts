import type { RequestHandler } from '@sveltejs/kit';

export const GET = (async ({ locals }) => {
	try {
		console.log('get is called');
		const result = await locals.pocketbase.collection('tags').getList();
		console.log('tag is fetched');

		return new Response(JSON.stringify({ success: true, data: result }), {
			status: 200,
			headers: { 'content-type': 'application/json' }
		});
	} catch (error) {
		console.log(error);
		return new Response(JSON.stringify({ success: false }), {
			status: 500,
			headers: { 'content-type': 'application/json' }
		});
	}
}) as RequestHandler;
