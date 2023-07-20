<script lang="ts">
	import { onMount } from 'svelte';

	export let data;

	const analytics = data.lead.analytics;

	let map: google.maps.Map;

	async function initMap(): Promise<void> {
		const { AdvancedMarkerElement } = (await google.maps.importLibrary(
			'marker'
		)) as google.maps.MarkerLibrary;
		const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
		const position = { lat: 48.14889854004167, lng: 17.115311877718547 };
		map = new Map(document.getElementById('map') as HTMLElement, {
			center: { lat: 48.156, lng: 17.138 },
			zoom: 8,
			mapId: '29623ef80228a6b'
		});

		const marker = new AdvancedMarkerElement({
			map: map,
			position: position,
			title: 'Uluru'
		});
	}
	onMount(() => {
		initMap();
	});
</script>

<svelte:head>
	<script>
		((g) => {
			var h,
				a,
				k,
				p = 'The Google Maps JavaScript API',
				c = 'google',
				l = 'importLibrary',
				q = '__ib__',
				m = document,
				b = window;
			b = b[c] || (b[c] = {});
			var d = b.maps || (b.maps = {}),
				r = new Set(),
				e = new URLSearchParams(),
				u = () =>
					h ||
					(h = new Promise(async (f, n) => {
						await (a = m.createElement('script'));
						e.set('libraries', [...r] + '');
						for (k in g)
							e.set(
								k.replace(/[A-Z]/g, (t) => '_' + t[0].toLowerCase()),
								g[k]
							);
						e.set('callback', c + '.maps.' + q);
						a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
						d[q] = f;
						a.onerror = () => (h = n(Error(p + ' could not load.')));
						a.nonce = m.querySelector('script[nonce]')?.nonce || '';
						m.head.append(a);
					}));
			d[l]
				? console.warn(p + ' only loads once. Ignoring:', g)
				: (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
		})({
			key: 'AIzaSyDWNURdmepBHio1VXvov8HuIS25YeKPbUY',
			v: 'weekly'
			// Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
			// Add other bootstrap parameters as needed, using camel case.
		});
	</script>
</svelte:head>

<section>
	<h4>ID: {data.lead.id}</h4>
	<h4>Name: {data.lead.name}</h4>
	<h4>Email: {data.lead.email}</h4>
	<h4>Phone Number: {data.lead.phone_number}</h4>
	<h4>Service: {data.lead.service}</h4>
	<h4>Status: {data.lead.status}</h4>
</section>

{#if analytics}
	<section>
		<h4>Browser: {analytics.browser}</h4>
		<h4>Device: {analytics.device}</h4>
		<h4>OS: {analytics.os}</h4>
		<h4>City: {analytics.city}</h4>
		<h4>Region: {analytics.region}</h4>
		<h4>Country: {analytics.country}</h4>
		<h4>Country Code: {analytics.country_code}</h4>
		<h4>Time Zone: {analytics.time_zone}</h4>
		<h4>IP Address: {analytics.ip_address}</h4>
		<h4>Campaign: {analytics.lc_campaign}</h4>
		<h4>Channel: {analytics.lc_channel}</h4>
		<h4>Content: {analytics.lc_content}</h4>
		<h4>Landing: {analytics.lc_landing}</h4>
		<h4>Medium: {analytics.lc_medium}</h4>
		<h4>Referrer: {analytics.lc_referrer}</h4>
		<h4>Source: {analytics.lc_source}</h4>
		<h4>Term: {analytics.lc_term}</h4>
		<h4>Created At: {analytics.created_at}</h4>
		<h4>All Traffic Sources: {analytics.all_traffic_sources}</h4>
		<h4>Page Visited List: {analytics.page_visited_list}</h4>
		<h4>Page Visits: {analytics.page_visits}</h4>
		<h4>Time Passed: {analytics.time_passed}</h4>
	</section>
	<div class="h-[400px] w-[400px]" id="map" />
{/if}
