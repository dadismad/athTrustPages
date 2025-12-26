<script lang="ts">
	import type { IGetAllCategoriesReturn } from '~lib/services';
	import type { ICategoryEntity } from '~/lib/types';
	import { Head, Image } from '~lib';

	const apiHost = import.meta.env.VITE_API_HOST;
	const host = import.meta.env.VITE_HOST;

	export let data: { categories: IGetAllCategoriesReturn };

	let error = data.categories.result.error?.message;
	let categories: ICategoryEntity[] = data.categories.result.data;

</script>

<Head
	title="All Time High"
	description="All-Time High: The new crypto media for digital nomads! We are growing a new generation of cryptocurrency users! Make your brain! info@ath.live"
	imageUrl={`${apiHost}/uploads/u4568294993_create_a_cover_for_an_article_with_this_title_The_3ace17b7_28c0_476f_af99_99117e0dfec0_0_2_1bc715056d.png`}
	imageWidth="1000px"
	imageHeight="1000px"
	articleLink={host}
	og_type="website"
/>


<div class="container pt-5">

	{#if error}
		<p>Couldn't retrieve category data</p>
	{:else}
		{#each categories as category}
			{#if category.articles?.length}
				<h4 class="mb-3">{category.category_name}</h4>
				<div class="articles mb-3">
					<div class="row">
						{#if category.articles}
							{#each category.articles.slice(0, category.articles.length <= 8 ? category.articles.length : 8) as article}
								<div class="col-md-6">
									<a href={`${host}/article/${article.slug}`}>
										<div class="mb-2">
											<Image
												roundedCorners={true}
												imageUrl={`${apiHost}${article.cover_picture.formats.medium?.url || ''}`}
												image={article.cover_picture}
												alt={article.title}
											/>
										</div>
										<div class="mb-3">
											<b>{article.title}</b>
										</div>
									</a>
								</div>
							{/each}
						{/if}
					</div>
				</div>
				<a class="show-more-button mb-5" href={`${host}/categories/${category.category_code}`}>
					Show more
					<i class="ri-arrow-right-up-line" style="font-size: 1.125rem"></i>
				</a>
				<hr class="my-5"/>
			{/if}
		{/each}
	{/if}


</div>

<style>
	.show-more-button {
		display: inline-flex;
		align-items: center;
		align-content: center;
		text-align: right;
    padding: 1rem;
    border-radius: var(--border-radius-control);
		background: var(--color-bg-primary-100);
		color: var(--color-text-inv-100);
	}
</style>
