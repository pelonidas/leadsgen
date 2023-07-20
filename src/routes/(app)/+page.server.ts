import prisma from '$lib/prisma';
import type { PageServerLoad } from '../$types';

export const load = (async () => {
	const leads = await prisma.lead.findMany();
	return {
		leads
	};
}) satisfies PageServerLoad;
