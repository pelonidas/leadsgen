import { auth } from '$lib/server/lucia';
import { fail, redirect, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals }) => {
	const { session } = await locals.auth.validateUser();
	if (!session) throw fail(401);
	await auth.invalidateSession(session.sessionId); // invalidate session
	locals.auth.setSession(null); // remove cookie
	throw redirect(302, '/');
};
