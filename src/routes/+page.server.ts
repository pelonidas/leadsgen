import { db } from '$lib/db';
import { leads } from '../drizzle/schema';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const _leads = await db.select().from(leads);

	return {
		leads: _leads
	};
}) satisfies PageServerLoad;
