import prisma from '$lib/prisma';
import { z } from 'zod';
import type { PageServerLoad } from './$types';

const dailyLeadsQuerySchema = z.array(
	z.object({
		date: z.date(),
		count: z.bigint()
	})
);

export const load: PageServerLoad = async () => {
	const statusPieChart = await prisma.lead.groupBy({
		by: ['status'],
		_count: true
	});

	const devicePieChart = await prisma.analytics.groupBy({
		by: ['device'],
		_count: true
	});

	const dailyLeadsQuery = await prisma.$queryRaw`
    SELECT DATE(created_at) AS date, COUNT(*) AS count
    FROM lead
    GROUP BY DATE(created_at);
  `;

	const dailyLeads = dailyLeadsQuerySchema.parse(dailyLeadsQuery).map((d) => ({
		date: new Date(d.date).toLocaleDateString(),
		count: Number(d.count)
	}));

	// console.log(res.map((r) => new Date(r.created_at).toLocaleTimeString()));

	return {
		statusPieChart,
		dailyLeads,
		devicePieChart
	};
};
