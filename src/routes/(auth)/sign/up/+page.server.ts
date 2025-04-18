import { dev } from '$app/environment'
import { pbError } from '$lib/pocketbase.svelte'
import { redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
	if (locals.user) redirect(307, '/verify')
}

export const actions = {
	default: async ({ locals, request }) => {
		const form = Object.fromEntries(await request.formData()) as {
			email: string
			name: string
			password: string
			passwordConfirm: string
		}

		if (dev) console.log('(auth)/sign/up/+page.server', form)

		const user = {
			email: form.email,
			name: form.name,
			password: form.password,
			passwordConfirm: form.passwordConfirm,
			username: form.name.toLowerCase().replace(/[^A-Za-z0-9]/g, ''),
		}

		if (dev) console.log('user', user)

		try {
			if (user.email && user.password) {
				await locals.pb.collection('users').create(user)
				await locals.pb.collection('users').requestVerification(user.email)
				await locals.pb.collection('users').authWithPassword(user.email, user.password)
			}
		} catch (err: unknown) {
			pbError(err)
		}
		redirect(307, '/verify')
	},
}

// async function handleForm() {
// 	isLoading = true;

// 	const user = {
// 		email,
// 		name,
// 		password,
// 		passwordConfirm,
// 		username: name.toLowerCase().replace(/\s/g, '')
// 	};

// 	try {
// 		if (email && password) {
// 			await pb.collection('users').create(user);
// 			await pb.collection('users').requestVerification(email);
// 			await pb.collection('users').authWithPassword(email, password);
// 			goto('/verify');
// 		}
// 		// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	} catch (err: any) {
// 		dev && console.error('(dev) login/+page.svelte: ', err.message);
// 		message = err.message;
// 	} finally {
// 		isLoading = false;
// 	}
// }
