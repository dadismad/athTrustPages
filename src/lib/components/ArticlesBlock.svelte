<script lang="ts">

	import { Image } from '~lib';
	import type { IArticle } from '~lib/types';

	const host = import.meta.env.VITE_HOST;
	const apiHost = import.meta.env.VITE_API_HOST;

	export let articles: IArticle[];

</script>

<div class="row">
	{#if articles && articles.length > 0}
		{#each articles as article}
			<div class="col-md-8">
				<a href={`${host}/article/${article.slug}`}>
					<div class="article">
						<div class="mb-3">
							<Image roundedCorners={true} imageUrl={`${apiHost}${article.cover_picture.url || ''}`} image={article.cover_picture} />
						</div>
						<h4 class="mb-3">{article.title}</h4>
						<p>{article.description || 'No description'}</p>
					</div>
				</a>
			</div>
		{/each}
	{/if}
</div>

<style>
	.article {
    margin-bottom: 2rem;
	}
</style>
