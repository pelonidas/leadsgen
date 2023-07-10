<script lang="ts">
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	import { createSvelteTable, getCoreRowModel, flexRender } from '@tanstack/svelte-table';
	import type { TableOptions } from '@tanstack/svelte-table';
	import type { Lead } from '../drizzle/schema';

	export let data: PageData;

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
			}
		],
		getCoreRowModel: getCoreRowModel()
	});

	const table = createSvelteTable(options);
</script>

<div class="p-2">
	<table>
		<thead>
			{#each $table.getHeaderGroups() as headerGroup}
				<tr>
					{#each headerGroup.headers as header}
						<th>
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
						<td>
							<svelte:component this={flexRender(cell.column.columnDef.cell, cell.getContext())} />
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
	<div class="h-4" />
</div>
