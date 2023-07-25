<script lang="ts">
	export let leadId: string;
	export let currValue: string | null;
	import { createSelect } from '@melt-ui/svelte';
	import { onMount } from 'svelte';

	const { label, trigger, menu, option, group } = createSelect();

	const options = {
		status: ['NOVÝ DOPYT', 'NAPLÁNOVANÁ KONZULTÁCIA', 'ABSOLVOVANÁ KONZULTÁCIA', 'NEZASTIHNUTEĽNÝ']
	};

	onMount(() => {
		if (!currValue) return;
		label.set(currValue);
	});
</script>

<button class="trigger" melt={$trigger} aria-label="Food">
	{$label || 'Select an option'}
</button>

<div class="menu shadow-lg" melt={$menu}>
	{#each Object.entries(options) as [key, arr]}
		<div melt={$group(key)} class="divide-y">
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
		@apply relative w-full cursor-pointer px-2 py-1 text-left text-neutral-800;
		@apply focus:z-10;
	}
	.trigger {
		@apply flex h-10 min-w-[220px] items-center rounded-md bg-white px-2 text-left;
		@apply py-2 transition-opacity hover:opacity-90;
	}
</style>
