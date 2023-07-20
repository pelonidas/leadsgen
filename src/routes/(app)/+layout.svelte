<script>
	import Sidebar from '$lib/components/sidebar.svelte';
	import Topbar from '$lib/components/topbar.svelte';
</script>

<div class="flex justify-between h-[100dvh] px-7 pt-5">
	<Sidebar/>
	<div>
		<Topbar />
		<slot />
	</div>
</div>
