import type { RequestHandler } from '@sveltejs/kit';

export const POST = (async ({ locals }) => {
	try {
		console.log('post is called');
		const result = await locals.pocketbase.collection('tags').create({
			name: 'tag1'
		});
		console.log('tag is saved');

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
