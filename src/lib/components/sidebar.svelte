<script>
	import Icon from '@iconify/svelte';

  let currentlyClicked = 'dashboard';

</script>

<div class="w-full max-w-xs h-full rounded-[2rem] bg-white px-6 text-[#464255] shadow-md ">
	<div class="ml-auto flex flex-col gap-3">
    <h2 class="text-5xl my-10">Logo here</h2>
    <button on:click={() => currentlyClicked = 'dashboard'} class="{currentlyClicked === 'dashboard' && 'bg-[#AB54DB26] text-[#AB54DB]'} flex items-center gap-5 py-5 pl-7 rounded-2xl ">
		  <Icon icon="material-symbols:dashboard-outline" color="{currentlyClicked === 'dashboard' ? '#AB54DB': "#B9BBBD"}"width="1.75rem" height="1.75rem" />
      <span>Dashboard</span>
    </button>
    <button on:click={() => currentlyClicked = 'chart'}  class="{currentlyClicked === 'chart' && 'bg-[#AB54DB26] text-[#AB54DB]'} flex items-center gap-5 py-5 pl-7 rounded-2xl">
		  <Icon icon="gg:chart" color="{currentlyClicked === 'chart' ? '#AB54DB': "#B9BBBD"}" width="1.75rem" height="1.75rem" />
      <span>Chart</span>
    </button>
    <button on:click={() => currentlyClicked = 'table'} class="{currentlyClicked === 'table' && 'bg-[#AB54DB26] text-[#AB54DB]'} flex items-center gap-5 py-5 pl-7 rounded-2xl">
      <Icon icon="uil:table" color="{currentlyClicked === 'table' ? '#AB54DB': "#B9BBBD"}"width="1.75rem" height="1.75rem" />
      <span>Table</span>
    </button>
	</div>
</div>
