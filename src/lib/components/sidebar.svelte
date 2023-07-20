<script>
	import Icon from '@iconify/svelte';
	import { Popover } from 'flowbite-svelte';
	const links = [
		{
			name: 'Dashboard',
			icon: 'material-symbols:dashboard-outline'
		},
		{
			name: 'Chart',
			icon: 'gg:chart'
		},
		{
			name: 'Table',
			icon: 'uil:table'
		}
	];
</script>

<div class="flex h-full flex-col gap-7 rounded-[2rem] bg-white px-5 py-7 text-[#464255] shadow-md">
	{#each links as { icon, name }, i}
		<button id="b{i}" class="flex items-center gap-5 rounded-2xl">
			<Icon {icon} color={'#B9BBBD'} width="1.5rem" height="1.5rem" aria-label={name} />
		</button>
		<Popover placement="right" triggeredBy="#b{i}">
			{name}
		</Popover>
	{/each}
</div>
