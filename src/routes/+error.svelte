<script lang="ts">
	import { page } from '$app/state';
</script>

<h1>{page.status}</h1>

<p>
	<!--  eslint-disable svelte/no-at-html-tags -->
	{@html page.error?.message.replace('signed in', '<a href="/sign/in">signed in</a>')}
</p>

<style>
	p {
		margin-inline: auto;
		text-align: center;
	}
</style>
