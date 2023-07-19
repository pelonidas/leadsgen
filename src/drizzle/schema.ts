import { pgTable, text, uuid, timestamp, uniqueIndex, integer } from 'drizzle-orm/pg-core';

import { sql } from 'drizzle-orm';

export const lead = pgTable('lead', {
	name: text('name').notNull(),
	id: uuid('id')
		.default(sql`uuid_generate_v4()`)
		.primaryKey()
		.notNull(),
	phoneNumber: text('phone_number'),
	email: text('email'),
	status: text('status'),
	service: text('service'),
	createdAt: timestamp('created_at', { mode: 'string' }).defaultNow()
});

export const analytics = pgTable(
	'analytics',
	{
		id: uuid('id')
			.default(sql`uuid_generate_v4()`)
			.primaryKey()
			.notNull(),
		allTrafficSources: text('all_traffic_sources'),
		browser: text('browser'),
		city: text('city'),
		country: text('country'),
		countryCode: text('country_code'),
		device: text('device'),
		fcCampaign: text('fc_campaign'),
		fcChannel: text('fc_channel'),
		fcContent: text('fc_content'),
		fcLanding: text('fc_landing'),
		fcMedium: text('fc_medium'),
		fcReferrer: text('fc_referrer'),
		fcSource: text('fc_source'),
		fcTerm: text('fc_term'),
		ipAddress: text('ip_address'),
		latitude: text('latitude'),
		lcCampaign: text('lc_campaign'),
		lcChannel: text('lc_channel'),
		lcContent: text('lc_content'),
		lcLanding: text('lc_landing'),
		lcMedium: text('lc_medium'),
		lcReferrer: text('lc_referrer'),
		lcSource: text('lc_source'),
		lcTerm: text('lc_term'),
		longtitude: text('longtitude'),
		os: text('os'),
		pageVisits: integer('page_visits'),
		pageVisitedList: text('page_visited_list'),
		region: text('region'),
		timePassed: integer('time_passed'),
		timeZone: text('time_zone'),
		createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
		leadId: uuid('lead_id')
			.notNull()
			.references(() => lead.id, { onDelete: 'cascade' })
	},
	(table) => {
		return {
			leadIdUniqueContstraint: uniqueIndex('lead_id_unique_contstraint').on(table.leadId)
		};
	}
);
