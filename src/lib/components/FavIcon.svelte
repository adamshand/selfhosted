<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/state';
	import { getOpenmojiUrl } from '$lib';

	const staging = $derived(page.url.hostname.startsWith('dev.'));
</script>

<svelte:head>
	{#if dev}
		<!-- red square -->
		<link href={getOpenmojiUrl('1F7E5')} rel="icon" />
	{:else if staging}
		<!-- yellow square -->
		<link href={getOpenmojiUrl('1F7E8')} rel="icon" />
	{:else}
		<!-- green circle with + -->
		<link href={getOpenmojiUrl('E25F')} rel="icon" />

		<script
			data-website-id="810e003c-211e-47f0-9bcb-d4ba614a93cf"
			defer
			src="https://umami.haume.nz/script.js"
		>
		</script>
	{/if}
</svelte:head>

<style>
</style>
