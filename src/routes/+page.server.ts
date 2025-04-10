import { redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
	if (locals.user && !locals.user.verified) redirect(307, '/verify')
	if (locals.user?.verified) redirect(307, '/app')
}

