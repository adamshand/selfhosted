<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';

	let username = $state('');
	let password = $state('');
	let message = $state(page.url.searchParams.get('message'));
	let disabled = $derived(!username || !password);
</script>

<h1>Sign in to your account</h1>

<form method="POST" use:enhance>
	<label for="username">Email </label>
	<input
		autocomplete="email"
		bind:value={username}
		id="username"
		name="username"
		type="email"
		required
	/>

	<label for="password">Password</label>
	<input
		autocomplete="on"
		bind:value={password}
		id="password"
		name="password"
		type="password"
		required
	/>

	<button {disabled} type="submit">Sign in</button>
</form>
<p>Not a member? <a href="/sign/up">Sign up for an account</a>.</p>

{#if message}
	<div class="error">
		{message}
	</div>
{/if}

<style>
</style>
