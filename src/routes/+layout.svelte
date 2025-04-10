<script lang="ts">
	import 'open-props/buttons.min.css';
	// import 'open-props/masks.edges.min.css';
	// import 'open-props/masks/corner-cuts';
	// import 'open-props/masks/edges';
	import 'open-props/open-props.min.css';
	// import 'open-props/src/props.masks.edges.css';
	import 'open-props/normalize.min.css';
	import '$lib/style.css';

	import FavIcon from '$lib/components/FavIcon.svelte';

	let { children } = $props();
</script>

<FavIcon />

<section>
	{@render children()}
</section>

<style>
	section {
		margin-inline: auto;
		margin-top: 3rem;
		width: 40ch;
		background-color: var(--surface-1);
	}
</style>
