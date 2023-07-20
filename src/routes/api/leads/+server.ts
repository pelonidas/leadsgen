import type { RequestHandler } from './$types';
import { z } from 'zod';
import prisma from '$lib/prisma';

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

	await prisma.lead.create({
		data: {
			name: body.name,
			email: body.email,
			phone_number: body.phoneNumber,
			status: body.status,
			service: body.service,
			analytics: {
				create: {
					all_traffic_sources: body.analytics.allTrafficSources,
					browser: body.analytics.browser,
					city: body.analytics.city,
					country: body.analytics.country,
					country_code: body.analytics.countryCode,
					device: body.analytics.device,
					fc_campaign: body.analytics.fcCampaign,
					fc_channel: body.analytics.fcChannel,
					fc_content: body.analytics.fcContent,
					fc_landing: body.analytics.fcLanding,
					fc_medium: body.analytics.fcMedium,
					fc_referrer: body.analytics.fcReferrer,
					fc_source: body.analytics.fcSource,
					fc_term: body.analytics.fcTerm,
					ip_address: body.analytics.ipAddress,
					latitude: body.analytics.latitude,
					lc_campaign: body.analytics.lcCampaign,
					lc_channel: body.analytics.lcChannel,
					lc_content: body.analytics.lcContent,
					lc_landing: body.analytics.lcLanding,
					lc_medium: body.analytics.lcMedium,
					lc_referrer: body.analytics.lcReferrer,
					lc_source: body.analytics.lcSource,
					lc_term: body.analytics.lcTerm,
					longtitude: body.analytics.longitude,
					os: body.analytics.os,
					page_visits: body.analytics.pageVisits,
					page_visited_list: body.analytics.pageVisitedList,
					region: body.analytics.region,
					time_passed: body.analytics.timePassed,
					time_zone: body.analytics.timeZone
				}
			}
		},
		include: {
			analytics: true
		}
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
