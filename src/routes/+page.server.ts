import { db } from '$lib/db';
import { lead } from '../drizzle/schema';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const leads = await db.select().from(lead);
	return {
		leads
	};
}) satisfies PageServerLoad;
