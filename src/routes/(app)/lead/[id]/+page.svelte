<script lang="ts">
	export let data;
</script>

<section>
	<h4>ID: {data.lead.id}</h4>
	<h4>Name: {data.lead.name}</h4>
	<h4>Email: {data.lead.email}</h4>
	<h4>Phone Number: {data.lead.phone_number}</h4>
	<h4>Service: {data.lead.service}</h4>
	<h4>Status: {data.lead.status}</h4>
	<h4>City: {data.lead.analytics?.city}</h4>
</section>
