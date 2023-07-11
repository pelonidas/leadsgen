import { db } from '$lib/db';
import { json } from '@sveltejs/kit';
import { leads } from '../../../drizzle/schema';
import type { RequestHandler } from './$types';
import { z } from 'zod';

const BodySchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phoneNum: z.string(),
	status: z.string().optional(),
	service: z.string().optional()
});

export const GET = (async () => {
	const allLeads = await db.select().from(leads);

	return json(allLeads);
}) satisfies RequestHandler;

export const POST = (async ({ request }) => {
	const body = BodySchema.parse(await request.json());

	const [{ insertedId }] = await db
		.insert(leads)
		.values({
			...body
		})
		.returning({
			insertedId: leads.id
		});

	return json({ insertedId });
}) satisfies RequestHandler;
