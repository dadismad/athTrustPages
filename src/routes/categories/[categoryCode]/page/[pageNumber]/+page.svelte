<script lang="ts">
	import type { IGetArticlesReturn } from '~lib/types';
	import { ArticlesBlock, Pagination } from '~lib';

	export let data: IGetArticlesReturn;
	const host = import.meta.env.VITE_HOST;

	$: categoryName = data.result.data[0].category.category_name;
	$: categoryCode = data.result.data[0].category.category_code;
	$: currentUrl = `${host}/categories/${categoryCode}`;
	$: articles = data.result.data;
	$: pageSize = data.result.meta?.pagination?.pageSize || 0;
	$: total = data.result.meta?.pagination?.total || 0;
	$: totalPages = Math.ceil(total / pageSize);
	$: currentPage = data.result.meta?.pagination?.page || 0;

	$: previousPage = currentPage !== 1 && currentPage <= totalPages ? currentPage-1 : currentPage;
	$: nextPage = currentPage !== totalPages && currentPage >= 1 ? currentPage + 1 : currentPage;

</script>


<div class="py-3">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h5>Category articles: {categoryName}</h5>
			</div>

			<div class="col-md-12">
				{#if totalPages !== 0}
					<Pagination addHead={true} {currentUrl} {previousPage} {currentPage} {nextPage} {totalPages} />
				{/if}
			</div>

		</div>
	</div>
</div>

<div class="container">
	<ArticlesBlock {articles} />
</div>
