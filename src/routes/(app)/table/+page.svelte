<script lang="ts">
	import { writable } from 'svelte/store';
	import { createSvelteTable, getCoreRowModel, flexRender } from '@tanstack/svelte-table';
	import type { TableOptions } from '@tanstack/svelte-table';
	import type { lead } from '@prisma/client';

	export let data;

	const options = writable<TableOptions<lead>>({
		data: data.leads,
		columns: [
			{
				accessorKey: 'id',
				header: 'ID'
			},
			{
				accessorKey: 'name',
				header: 'Name'
			},
			{
				accessorKey: 'email',
				header: 'Email'
			},
			{
				accessorKey: 'phone_number',
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

			// {
			// 	accessorKey: 'createdAt',
			// 	accessorFn: (row) => {
			// 		if (!row.created_at) return '';
			// 		const locale: Intl.LocalesArgument = 'sk-SK';
			// 		const date = new Date(row.created_at);
			// 		return `${date.toLocaleDateString(locale)} ${date.toLocaleTimeString(locale, {
			// 			hour: '2-digit',
			// 			minute: '2-digit'
			// 		})}`;
			// 	},
			// 	header: 'Created At'
			// },
			{
				accessorKey: 'analytics.device',
				header: 'Device'
			},

			{
				accessorKey: 'analytics.lc_medium',
				header: 'Medium'
			},
			{
				accessorKey: 'analytics.lc_source',
				header: 'Source'
			}
		],
		getCoreRowModel: getCoreRowModel()
	});

	const table = createSvelteTable(options);
</script>

<div class="m-auto h-full w-full">
	<table class="w-full text-body">
		<thead>
			{#each $table.getHeaderGroups() as headerGroup}
				<tr>
					{#each headerGroup.headers as header}
						<th class="bg-white px-5 py-2 text-left first:rounded-tl-3xl last:rounded-tr-3xl">
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
						<td class="border px-5 py-2">
							<a href="/lead/{row.original.id}">
								<svelte:component
									this={flexRender(cell.column.columnDef.cell, cell.getContext())}
								/>
							</a>
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
