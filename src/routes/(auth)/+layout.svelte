<script lang="ts">
	let { children } = $props()
</script>

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
