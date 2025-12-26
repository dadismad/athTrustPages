<script lang="ts">
	import type { IGetArticlesReturn } from '~lib/types';
	import { ArticlesBlock, Pagination, Head } from '~lib';
	import { page } from '$app/stores';

	const host = import.meta.env.VITE_HOST;
	const apiHost = import.meta.env.VITE_API_HOST;

	export let data: IGetArticlesReturn;

	$: currentUrl = $page.url.pathname;
	$: categoryName = data.result.data[0].category.category_name;
	$: articles = data.result.data;
	$: pageSize = data.result.meta?.pagination?.pageSize || 0;
	$: total = data.result.meta?.pagination?.total || 0;
	$: totalPages = Math.ceil(total / pageSize);
	$: currentPage = data.result.meta?.pagination?.page || 0;

	$: previousPage = currentPage !== 1 && currentPage <= totalPages ? currentPage-1 : currentPage;
	$: nextPage = currentPage !== totalPages && currentPage >= 1 ? currentPage + 1 : currentPage;

</script>

<Head
	title={`ATH • All Time High | ${categoryName}`}
	description="All-Time High: The new crypto media for digital nomads! We are growing a new generation of cryptocurrency users! Make your brain! info@ath.live"
	imageUrl={`${apiHost}/uploads/u4568294993_create_a_cover_for_an_article_with_this_title_The_3ace17b7_28c0_476f_af99_99117e0dfec0_0_2_1bc715056d.png`}
	imageWidth="1000"
	imageHeight="1000"
	articleLink={`${host}/categories/${categoryName}`}
	og_type="website"
/>

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
