<script lang="ts">

	import type { IGetEventsReturn } from "~lib/types";
	import { EventsPage, Footer, Pagination } from '~/lib';

	const host = import.meta.env.VITE_HOST;

	export let data: {
		events: IGetEventsReturn
	};

	$: currentUrl = `${host}/events`;
	$: pageSize = data.events.result.meta?.pagination?.pageSize || 0;
	$: total = data.events.result.meta?.pagination?.total || 0;
	$: totalPages = Math.ceil(total / pageSize);
	$: currentPage = data.events.result.meta?.pagination?.page || 0;

	$: previousPage = currentPage !== 1 && currentPage <= totalPages ? currentPage-1 : currentPage;
	$: nextPage = currentPage !== totalPages && currentPage >= 1 ? currentPage + 1 : currentPage;

</script>

{#if totalPages !== 0}
	<Pagination addHead={true} {currentUrl} {previousPage} {currentPage} {nextPage} {totalPages} />
{/if}

<EventsPage {data} />

<div class="container">
	<Footer/>
</div>
