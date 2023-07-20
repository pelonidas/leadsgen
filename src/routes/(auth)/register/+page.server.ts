import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();

	if (session) {
		throw redirect(302, '/');
	}
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const password = form.get('password');
		const name = form.get('name');
		const email = form.get('email');

		// check for empty values
		if (typeof email !== 'string' || typeof password !== 'string' || typeof name !== 'string') {
			return fail(400);
		}

		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'email',
					providerUserId: email,
					password
				},
				attributes: {
					email,
					name,
				}
			});
			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);
		} catch (error) {
			console.error(error);
			return fail(400, { message: 'Could not create user' });
		}

		throw redirect(302, '/login');
	}
};
