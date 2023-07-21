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
		const position = {
			lat: parseFloat(analytics?.latitude ?? '0'),
			lng: parseFloat(analytics?.longtitude ?? '0')
		};
		map = new Map(document.getElementById('map') as HTMLElement, {
			center: position,
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

<section class="flex w-full flex-col">
	<div class="flex items-center justify-between">
		<h1 class="text-4xl font-bold">
			{data.lead.name}
		</h1>
		<div class="flex flex-col text-sm text-body/40">
			<span>
				<strong>ID: </strong>{data.lead.id}
			</span>
			<span>
				<strong>Created: </strong>{data.lead.created_at?.toLocaleDateString('sk-SK')}
			</span>
		</div>
	</div>
	<hr class="my-4 w-full border-body/20" />
	<div class="grid grid-cols-3 gap-4">
		<article class="flex flex-col gap-2 rounded-3xl bg-white p-4 shadow-md">
			<h3 class="text-xl font-medium">Contact Information</h3>
			<p><strong>Email:</strong> {data.lead.email}</p>
			<p><strong>Phone Number:</strong> {data.lead.phone_number}</p>
			<p><strong>Service:</strong> {data.lead.service}</p>
			<p><strong>Status:</strong> {data.lead.status}</p>
			<p>
				<strong>Location: </strong>{analytics?.city}, {analytics?.country}, {analytics?.country_code}
			</p>
			<p><strong>Time Zone:</strong> {analytics?.time_zone}</p>
		</article>
		{#if analytics}
			<article class="flex flex-col gap-2 rounded-3xl bg-white p-4 shadow-md">
				<h3 class="text-xl font-medium">Device Information</h3>
				<p><strong>Browser: </strong>{analytics.browser?.replace('undefined', '')}</p>
				<p><strong>Device: </strong>{analytics.device}</p>
				<p><strong>IP Address: </strong>{analytics.ip_address}</p>
				<p><strong>OS: </strong>{analytics.os}</p>
				<p><strong>Page Visits: </strong>{analytics.page_visits}</p>
				<p>
					<strong>Time Passed: </strong>{((analytics.time_passed || 0) / 1000 / 60).toFixed(2)} min
				</p>
			</article>
			<article class="flex flex-col gap-2 rounded-3xl bg-white p-4 shadow-md">
				<h3 class="text-xl font-medium">Analytics Information</h3>
				<p><strong>Campaign: </strong>{analytics.lc_campaign}</p>
				<p><strong>Channel: </strong>{analytics.lc_channel}</p>
				<p><strong>Content: </strong>{analytics.lc_content}</p>
				<p><strong>Landing: </strong>{analytics.lc_landing}</p>
				<p><strong>Medium: </strong>{analytics.lc_medium}</p>
				<p><strong>Referrer: </strong>{analytics.lc_referrer}</p>
				<p><strong>Source: </strong>{analytics.lc_source}</p>
				<p><strong>Term: </strong>{analytics.lc_term}</p>
			</article>
		{/if}

		<div class="col-span-3 h-[280px] max-h-fit w-full shrink">
			<div id="map" class="h-full w-full" />
		</div>
	</div>
</section>
