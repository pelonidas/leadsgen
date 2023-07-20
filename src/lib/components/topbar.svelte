<script>
	import Icon from '@iconify/svelte';
	import { Popover } from 'flowbite-svelte';
</script>

<div class="flex h-20 w-full items-center gap-16 rounded-[2rem] bg-white px-6 text-white shadow-md">
	<div class="ml-auto flex gap-5">
		<Icon icon="akar-icons:chat-bubble" color="#B9BBBD" width="1.75rem" height="1.75rem" />
		<Icon icon="octicon:bell-16" color="#B9BBBD" width="1.75rem" height="1.75rem" />
	</div>
	<form method="post" class="flex items-center">
		<button formaction="/signout" type="submit">
			<Icon icon="wpf:shutdown" color="#B9BBBD" width="1.5rem" height="1.5rem" id="logout" />
		</button>
		<Popover triggeredBy="#logout" placement="bottom">Log out</Popover>
	</form>
</div>
