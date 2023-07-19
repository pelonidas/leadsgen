<script>
	import Topbar from '$lib/components/topbar.svelte';
	import '../app.css';
</script>

<main class="bg-background px-12 pt-5">
	<!-- Topbar goes here -->
	<Topbar />
	<div class="flex h-[calc(100dvh-6.25rem)]">
		<!-- Sidebar goes here -->
		<slot />
	</div>
</main>
