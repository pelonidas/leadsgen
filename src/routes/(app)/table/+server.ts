import { z } from 'zod';
import type { RequestHandler } from './$types';
import prisma from '$lib/prisma';

const Schema = z.object({
	status: z.string(),
	leadId: z.string()
});

export const PUT: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const parsed = Schema.parse(body);

	await prisma.lead.update({
		where: {
			id: parsed.leadId
		},
		data: {
			status: parsed.status
		}
	});

	return new Response();
};
