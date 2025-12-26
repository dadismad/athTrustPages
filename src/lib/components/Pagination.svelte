<script lang="ts">
	import IconButton from '~lib/components/IconButton.svelte';

	export let currentUrl: string;
	export let previousPage: number;
	export let currentPage: number;
	export let nextPage: number;
	export let totalPages: number;
	export let addHead = false;

</script>

<svelte:head>
	{#if addHead}
		{#if currentPage !== 1}
			<link rel="prev" href={`${currentUrl}/page/${previousPage}`} />
		{/if}
		{#if currentPage !== totalPages}
			<link rel="next" href={`${currentUrl}/page/${nextPage}`} />
		{/if}
	{/if}
</svelte:head>

<div class="pagination">
	<a href={`${currentUrl}/page/1`}>
		<IconButton disabled={currentPage === 1}>
			<i class="ri-skip-left-line"></i>
		</IconButton>
	</a>
	<a href={`${currentUrl}/page/${previousPage}`}>
		<IconButton disabled={currentPage === 1}>
			<i class="ri-arrow-left-s-line"></i>
		</IconButton>
	</a>
	<div class="px-2">
		{currentPage}/{totalPages}
	</div>
	<a href={`${currentUrl}/page/${nextPage}`}>
		<IconButton disabled={currentPage === totalPages || totalPages === 0}>
			<i class="ri-arrow-right-s-line"></i>
		</IconButton>
	</a>
	<a href={`${currentUrl}/page/${totalPages}`}>
		<IconButton disabled={currentPage === totalPages || totalPages === 0}>
			<i class="ri-skip-right-line"></i>
		</IconButton>
	</a>
</div>

<style lang="scss">
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 600;
  }
</style>
