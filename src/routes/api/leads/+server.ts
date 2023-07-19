import { db } from '$lib/db';
import type { RequestHandler } from './$types';
import { z } from 'zod';
import { analytics, lead } from '../../../drizzle/schema';

const PostSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phoneNumber: z.string(),
	status: z.string().optional(),
	service: z.string().optional(),
	analytics: z.object({
		allTrafficSources: z.string().optional(),
		browser: z.string().optional(),
		city: z.string().optional(),
		country: z.string().optional(),
		countryCode: z.string().optional(),
		device: z.string().optional(),
		fcCampaign: z.string().optional(),
		fcChannel: z.string().optional(),
		fcContent: z.string().optional(),
		fcLanding: z.string().optional(),
		fcMedium: z.string().optional(),
		fcReferrer: z.string().optional(),
		fcSource: z.string().optional(),
		fcTerm: z.string().optional(),
		ipAddress: z.string().optional(),
		latitude: z.string().optional(),
		lcCampaign: z.string().optional(),
		lcChannel: z.string().optional(),
		lcContent: z.string().optional(),
		lcLanding: z.string().optional(),
		lcMedium: z.string().optional(),
		lcReferrer: z.string().optional(),
		lcSource: z.string().optional(),
		lcTerm: z.string().optional(),
		longitude: z.string().optional(),
		os: z.string().optional(),
		pageVisits: z.number().optional(),
		pageVisitedList: z.string().optional(),
		region: z.string().optional(),
		timePassed: z.number().optional(),
		timeZone: z.string().optional()
	})
});

export const POST = (async ({ request }) => {
	const body = PostSchema.parse(await request.json());

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

		await db.insert(analytics).values({
			leadId,
			...body.analytics,
			device: 'desktop'
		});
	});
	return new Response(
		JSON.stringify({
			message: 'Lead created successfully'
		}),
		{
			status: 201
		}
	);
}) satisfies RequestHandler;
