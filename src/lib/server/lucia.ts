import lucia from 'lucia-auth';
import prismaAdapter from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import { PrismaClient } from '@prisma/client';
import { sveltekit } from 'lucia-auth/middleware';

export const auth = lucia({
	adapter: prismaAdapter(new PrismaClient() as any),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			email: userData.email,
			name: userData.name
		};
	}
});

export type Auth = typeof auth;
