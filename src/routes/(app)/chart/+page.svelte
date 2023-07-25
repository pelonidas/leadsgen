<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let data;
	let statusPieChart: HTMLCanvasElement;
	let leadsCountChart: HTMLCanvasElement;
	let devicePieChart: HTMLCanvasElement;

	onMount(() => {
		new Chart(statusPieChart, {
			type: 'pie',
			data: {
				labels: data.statusPieChart.map((val) => val.status),
				datasets: [
					{
						data: data.statusPieChart.map((val) => val._count.toString())
					}
				]
			}
		});

		new Chart(devicePieChart, {
			type: 'pie',
			data: {
				labels: data.devicePieChart.map((val) => val.device),
				datasets: [
					{
						data: data.devicePieChart.map((val) => val._count)
					}
				]
			}
		});

		new Chart(leadsCountChart, {
			type: 'bar',
			data: {
				labels: data.dailyLeads.map((val) => val.date),
				datasets: [
					{
						label: 'Daily Leads',
						data: data.dailyLeads.map((val) => val.count),
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(255, 159, 64, 0.2)',
							'rgba(255, 205, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(201, 203, 207, 0.2)'
						]
					}
				]
			}
		});
	});
</script>

<main class="grid w-full grid-cols-3 gap-6">
	<div class="w-full border">
		<canvas bind:this={statusPieChart} />
	</div>
	<div class="w-full border">
		<canvas bind:this={leadsCountChart} />
	</div>
	<div class="w-full border">
		<canvas bind:this={devicePieChart} />
	</div>
</main>
