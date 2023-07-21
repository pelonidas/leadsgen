<script>
	import Icon from '@iconify/svelte';
	import { Popover } from 'flowbite-svelte';
	const links = [
		{
			name: 'Dashboard',
			icon: 'material-symbols:dashboard-outline',
			href: '/'
		},
		{
			name: 'Chart',
			icon: 'gg:chart',
			href: '/chart'
		},
		{
			name: 'Table',
			icon: 'uil:table',
			href: '/table'
		}
	];
</script>

<div class="flex h-full flex-col gap-7 rounded-[2rem] bg-white px-5 py-7 text-[#464255] shadow-md">
	{#each links as { icon, name, href }, i}
		<a {href} id="b{i}" class="flex items-center gap-5 rounded-2xl">
			<Icon {icon} color={'#B9BBBD'} width="1.5rem" height="1.5rem" aria-label={name} />
		</a>
		<Popover placement="right" triggeredBy="#b{i}">
			{name}
		</Popover>
	{/each}
	<button class="mt-auto flex items-center" id="settings">
		<Icon icon="solar:settings-outline" color="#B9BBBD" width="1.75rem" height="1.75rem" />
	</button>
	<Popover placement="right" triggeredBy="#settings">Settings</Popover>
	<button id="profile" class="flex items-center gap-5 rounded-2xl">
		<Icon icon="iconamoon:profile-circle-fill" color="#B9BBBD" width="1.75rem" height="1.75rem" />
	</button>
	<Popover placement="right" triggeredBy="#profile">Profile</Popover>
</div>
