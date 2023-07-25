<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let data;
	let statusPieChart: HTMLCanvasElement;

	onMount(() => {
		new Chart(statusPieChart, {
			type: 'pie',
			data: {
				labels: data.statusPieChart.map((val) => val.status),
				datasets: [
					{
						data: data.statusPieChart.map((val) => val._count)
					}
				]
			}
		});
	});
</script>

<main class="grid w-full grid-cols-3">
	<div class="w-full border">
		<canvas bind:this={statusPieChart} />
	</div>
	<div class="border" />
	<div class="border" />
</main>
