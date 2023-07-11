<script lang="ts">
	import { writable } from 'svelte/store';
	import { createSvelteTable, getCoreRowModel, flexRender } from '@tanstack/svelte-table';
	import type { TableOptions } from '@tanstack/svelte-table';
	import type { Lead } from '../drizzle/schema';

	export let data;

	const options = writable<TableOptions<Lead>>({
		data: data.leads,
		columns: [
			{
				accessorKey: 'name',
				header: 'Name'
			},
			{
				accessorKey: 'email',
				header: 'Age'
			},
			{
				accessorKey: 'email',
				header: 'Email'
			},
			{
				accessorKey: 'phoneNum',
				header: 'Phone Number'
			},
			{
				accessorKey: 'service',
				header: 'Service'
			},
			{
				accessorKey: 'status',
				header: 'Status'
			},
			{
				accessorKey: 'createdAt',
				accessorFn: (row) => {
					if (!row.createdAt) return '';
					const locale: Intl.LocalesArgument = 'sk-SK';
					const date = new Date(row.createdAt);
					return `${date.toLocaleDateString(locale)} ${date.toLocaleTimeString(locale, {
						hour: '2-digit',
						minute: '2-digit'
					})}`;
				},
				header: 'Created At'
			}
		],
		getCoreRowModel: getCoreRowModel()
	});

	const table = createSvelteTable(options);
</script>

<div class="p-2">
	<table>
		<thead class="border">
			{#each $table.getHeaderGroups() as headerGroup}
				<tr>
					{#each headerGroup.headers as header}
						<th class="border">
							{#if !header.isPlaceholder}
								<svelte:component
									this={flexRender(header.column.columnDef.header, header.getContext())}
								/>
							{/if}
						</th>
					{/each}
				</tr>
			{/each}
		</thead>
		<tbody class="border">
			{#each $table.getRowModel().rows as row}
				<tr>
					{#each row.getVisibleCells() as cell}
						<td class="border">
							<svelte:component this={flexRender(cell.column.columnDef.cell, cell.getContext())} />
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
	<div class="h-4" />
</div>
