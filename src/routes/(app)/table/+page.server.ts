import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const leads = await prisma.lead.findMany({
		include: {
			analytics: {
				select: {
					city: true,
					page_visits: true,
					time_zone: true,
					page_visited_list: true,
					browser: true,
					os: true,
					lc_landing: true,
					lc_campaign: true,
					lc_channel: true,
					lc_content: true,
					lc_medium: true,
					lc_referrer: true,
					lc_source: true,
					lc_term: true,
					device: true,
					time_passed: true
				}
			}
		}
	});

	return {
		leads
	};
};
