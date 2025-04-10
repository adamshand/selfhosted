import { env } from '$env/dynamic/public';
export const load = async ({ locals, }) => {
	const user = locals.user ?? null

	if (env.PUBLIC_DEBUG) console.log('/+layout.server: ', { user })

	return { user }
}
