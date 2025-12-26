<script lang="ts">
	import { onMount } from 'svelte';
	import { TextInput, Pagination } from '~lib/components';
	import { goto } from '$app/navigation';
	import type { ISearchData, IPagination, IArticle } from '~lib/types';
	import SvelteMarkdown from 'svelte-markdown';
	import { formatDate } from '~lib';

	export let data : ISearchData;

	const host = import.meta.env.VITE_HOST;
	let isLoading = false;
	let value = data?.searchText || '';
	let searchInput: HTMLInputElement;
	let searchResults: IArticle[];
	let pagination: IPagination | undefined;
	let totalPages = pagination?.pageCount || 0;
	let currentPage = pagination?.page || 1;
	let currentUrl = `${host}/article/search/${value}`;

	$: {
		totalPages = pagination?.pageCount || 0;
		currentPage = pagination?.page || 1;
		currentUrl = `${host}/article/search/${value}`
	}

	onMount(() => setTimeout(() => searchInput && searchInput.focus(), 100));

	$: {
		searchResults = data?.searchResults?.data || [];
		pagination = data?.searchResults?.meta.pagination;
		isLoading = false;
		setTimeout(() => searchInput && searchInput.focus(), 100);
	}

	const handleSearch = () => {
		if (value?.trim()) {
			goto(`/article/search/${encodeURIComponent(value.trim())}`);
		}
	};

	const handleKeyUp = (e: KeyboardEvent) => {
		value = (e.target as HTMLInputElement).value;
		if (e.key === 'Enter') {
			isLoading = true;
			handleSearch();
		}
	};

	const getResultBlock = (text: string, searchString: string) => {
		return text;
	}

	$: previousPage = currentPage !== 1 && currentPage <= totalPages ? currentPage-1 : currentPage;
	$: nextPage = currentPage !== totalPages && currentPage >= 1 ? currentPage + 1 : currentPage;

</script>

<div class="container">
	<div class="my-4">
		<TextInput
			{value}
			onKeyup={handleKeyUp}
			placeholder="Type the text and press Enter"
			variant="contained"
			type="text"
			name="search"
			bind:inputEl={searchInput}
		>
			<svelte:fragment slot="prefix"><i class="ri-search-line"></i></svelte:fragment>
		</TextInput>
	</div>

	{#if data?.searchText}
		<h1 style="margin-bottom: .75em; color: var(--color-text-placeholder);">Search results for "{data.searchText}"</h1>
	{/if}

	<div class="mb-3">
		{#if isLoading}
			<p>Searching...</p>
		{:else}
			{#if searchResults.length === 0}
				{#if data.searchText}
					<p>Nothing found</p>
				{/if}
			{:else}
				{#each searchResults as result}
					<a href={`/article/${result.slug}`}>
						<h3><SvelteMarkdown source={value ? getResultBlock(result.title, value) : result.title} /></h3>
					</a>
					{#if result.publishedAt}
						<div class="created">{ formatDate(new Date(result.publishedAt)) }</div>
					{/if}
					<p class="mt-3">{value ? getResultBlock(result.description, value) : result.description}</p>
					<hr class="my-6 border-gray-200"/>
				{/each}
			{/if}
		{/if}
	</div>

	{#if (totalPages !== 0 && !isLoading)}
		<div class="mb-3">
			<Pagination {currentUrl} {previousPage} {currentPage} {nextPage} {totalPages} addHead={true} />
		</div>
	{/if}


</div>

<style lang="scss">
  .created {
    padding: .25rem 0;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 4px;
  }
</style>
