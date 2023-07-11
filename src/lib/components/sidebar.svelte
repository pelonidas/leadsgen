<script>
	import { isSidebarOpen } from '$lib/stores';
	import Icon from '@iconify/svelte';
	$: sidebarClass = $isSidebarOpen ? 'max-w-[20%]' : 'max-w-[6%]';

	const links = ['Home', 'Dashboard', 'Profile', 'Chart', 'Calendar'];
</script>

<aside class="relative w-full {sidebarClass} bg-slate-600 p-6 text-white shadow-lg shadow-black">
	<ul class="my-8 flex flex-col gap-3">
		{#each links as link (link)}
			<li
				class="flex items-center gap-2 rounded-xl border-2 border-slate-400 p-2"
				class:gap-2={$isSidebarOpen}
			>
				<div class:mx-auto={!$isSidebarOpen}>
					<Icon icon="material-symbols:home-outline" class="text-2xl" />
				</div>
				{#if $isSidebarOpen}
					<strong class="text-lg">{link}</strong>
				{/if}
			</li>
		{/each}
	</ul>
</aside>
