<script>
	import Topbar from '$lib/components/topbar.svelte';
</script>

<div class="flex h-[100dvh] flex-col px-7 pt-5">
	<Topbar />
	<slot />
</div>
