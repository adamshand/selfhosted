<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1>👋🏻 Hello {data.user?.name}!</h1>
