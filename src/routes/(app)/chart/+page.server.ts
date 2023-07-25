import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const statusPieChart = await prisma.lead.groupBy({
		by: ['status'],
		_count: true
	});

	console.log(statusPieChart);

	return {
		statusPieChart
	};
};
