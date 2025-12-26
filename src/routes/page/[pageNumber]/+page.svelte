<script lang="ts">
	import { ArticlesBlock, Pagination, Head, Footer } from '~lib';
	import type { IArticleResponse } from '~lib/types';

	const host = import.meta.env.VITE_HOST;
	const apiHost = import.meta.env.VITE_API_HOST;

	export let data: IArticleResponse;

	$: currentUrl = `${host}`;
	$: pageSize = data.meta?.pagination?.pageSize || 0;
	$: total = data.meta?.pagination?.total || 0;
	$: totalPages = Math.ceil(total / pageSize);
	$: currentPage = data.meta?.pagination?.page || 0;

	$: previousPage = currentPage !== 1 && currentPage <= totalPages ? currentPage-1 : currentPage;
	$: nextPage = currentPage !== totalPages && currentPage >= 1 ? currentPage + 1 : currentPage;

</script>

<Head
	title={`All Time High`}
	description="All-Time High: The new crypto media for digital nomads! We are growing a new generation of cryptocurrency users! Make your brain! info@ath.live"
	imageUrl={`${apiHost}/uploads/u4568294993_create_a_cover_for_an_article_with_this_title_The_3ace17b7_28c0_476f_af99_99117e0dfec0_0_2_1bc715056d.png`}
	imageWidth="1000"
	imageHeight="1000"
	articleLink={host}
	og_type="website"
	canonical={`${host}/page/${currentPage}}`}
/>



<div class="container mt-5">
	<div class="row align-items-center mb-3">
		<div class="col-md-16">
			<h2>Recent News</h2>
		</div>
		<div class="col-md-8">
			{#if totalPages !== 0}
				<Pagination addHead={true} {currentUrl} {previousPage} {currentPage} {nextPage} {totalPages} />
			{/if}
		</div>
	</div>
</div>

<div class="container">
	<ArticlesBlock articles={data.data} />
</div>

<div class="container">
	<Footer />
</div>
