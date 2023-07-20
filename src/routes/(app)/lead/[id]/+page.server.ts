import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const lead = await prisma.lead.findFirst({
		where: {
			id: params.id
		},
		include: {
			analytics: true
		}
	});

	if (!lead) throw fail(404);

	return {
		lead
	};
};
