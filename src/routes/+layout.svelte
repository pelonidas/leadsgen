<script>
	import Sidebar from '$lib/components/sidebar.svelte';
	import Icon from '@iconify/svelte';
	import '../app.css';
	import { isSidebarOpen } from '$lib/stores';
</script>

<main>
	<div class="flex h-12 w-full items-center bg-slate-700 text-white">
		<div class="flex w-full max-w-[20%] items-center px-6">
			<button on:click={() => ($isSidebarOpen = !$isSidebarOpen)} class="ml-auto">
				<Icon icon="ph:sidebar-duotone" class="text-3xl" />
			</button>
		</div>
	</div>
	<div class="flex h-[calc(100dvh-3rem)]">
		<Sidebar />
		<slot />
	</div>
</main>
