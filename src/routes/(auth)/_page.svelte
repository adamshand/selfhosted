<script lang="ts">
	import { getAvatarUrl } from '$lib/pocketbase.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const isSignedIn = $derived(data.user !== null);
	const isAdmin = $derived(data.user?.admin);
	const firstName = $derived(data.user?.name.split(' ')[0]);
</script>

{#if isSignedIn}
	<img src={getAvatarUrl(data.user)} alt="avatar" />
{/if}

<h1>👋🏻 Kiaora {isSignedIn ? firstName : 'Stranger'}!</h1>

<ul>
	{#if isAdmin}
		<li>⚙️<a href="/admin">Admin panel</a></li>
		<p></p>
	{/if}

	{#if isSignedIn}
		<li>✅ <a href="/verify">Verify your email</a></li>
		<li>👎 <a href="/sign/out">Sign out</a></li>
	{:else}
		<li>🤙 <a href="/sign/in">Sign in</a></li>

		<li>👤 <a href="/sign/up">Create account</a></li>
		<li>🧚‍♀️ <a href="/reset">Reset your password</a></li>
	{/if}
</ul>

<ul>
	<p></p>
	<li>🗞️ <a href="/rss">RSS Feed</a></li>
	<li>🕸️ <a href="/sitemap.xml">Sitemap for Search Engines</a></li>
	<li>🤖 <a href="/robots.txt">robots.txt</a></li>
</ul>

<style>
	img {
		max-width: 30ch;
	}
</style>
