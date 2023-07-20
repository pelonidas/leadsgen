<script>
	import Sidebar from '$lib/components/sidebar.svelte';
	import Topbar from '$lib/components/topbar.svelte';
</script>

<div class="flex h-[100dvh] flex-col gap-5 p-5">
	<Topbar />
	<div class="flex h-full gap-5">
		<Sidebar />
		<slot />
	</div>
</div>
