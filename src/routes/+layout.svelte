<script>
	import Icon from '@iconify/svelte';
	import '../app.css';
</script>

<main>
	<div class="flex h-12 w-full items-center bg-slate-700 text-white" />
	<div class="flex h-[calc(100dvh-3rem)]">
		<!-- Sidebar goes here -->
		<slot />
	</div>
</main>
