<script lang="ts">
	export let leadId: string;
	export let currValue: string | null;
	import { createSelect } from '@melt-ui/svelte';
	import { onMount } from 'svelte';

	const { label, trigger, menu, option, group } = createSelect();

	const options = {
		status: ['new lead', 'option 2', 'Strawberry', 'Cookies & Cream']
	};

	onMount(() => {
		if (!currValue) return;
		label.set(currValue);
	});
</script>

<button class="trigger" melt={$trigger} aria-label="Food">
	{$label || 'Select an option'}
</button>

<div class="menu" melt={$menu}>
	{#each Object.entries(options) as [key, arr]}
		<div melt={$group(key)}>
			<!-- <div class="label" melt={$groupLabel(key)}>{key}</div> -->
			{#each arr as item}
				<button
					on:click={() =>
						fetch('/table', {
							method: 'PUT',
							body: JSON.stringify({
								status: item,
								leadId
							})
						})}
					class="option"
					melt={$option({ value: item, label: item })}
				>
					{item}
				</button>
			{/each}
		</div>
	{/each}
</div>

<style lang="postcss">
	.label {
		@apply py-1 pl-4 pr-4 font-semibold capitalize text-neutral-800;
	}

	.menu {
		@apply z-10 flex max-h-[360px]  flex-col overflow-y-auto;
		@apply rounded-md bg-white p-1;
		@apply ring-0 !important;
	}
	.option {
		@apply relative cursor-pointer rounded-md py-1 pl-8 pr-4 text-neutral-800;
		@apply focus:z-10;
	}
	.trigger {
		@apply flex h-10 min-w-[220px] items-center justify-between rounded-md bg-white px-3;
		@apply py-2 transition-opacity hover:opacity-90;
	}
	.check {
		@apply absolute left-2 top-1/2 z-20;
		translate: 0 calc(-50% + 1px);
	}
</style>
