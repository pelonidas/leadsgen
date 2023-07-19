import { db } from '$lib/db';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { z } from 'zod';
import { analytics, lead } from '../../../drizzle/schema';

const BodySchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phoneNumber: z.string(),
	status: z.string().optional(),
	service: z.string().optional()
});

export const POST = (async ({ request }) => {
	const body = BodySchema.parse(await request.json());

	await db.transaction(async () => {
		const [{ leadId }] = await db
			.insert(lead)
			.values({
				name: body.name,
				email: body.email,
				phoneNumber: body.phoneNumber,
				status: body.status,
				service: body.service
			})
			.returning({
				leadId: lead.id
			});

		const res = await db.insert(analytics).values({
			leadId
		});
	});

	// const [{ insertedId }] = await db
	// 	.insert(lead)
	// 	.values({
	// 		name: body.name
	// 	})
	// 	.returning({
	// 		insertedId: lead.id
	// 	});
}) satisfies RequestHandler;
