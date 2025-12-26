<script lang="ts">
	import { page } from '$app/stores';
	import SvelteMarkdown from 'svelte-markdown';
	import type { IArticle, IPictureFormat, IArticleLayout, IMeta } from '~lib/types';
	import { Image, Footer, Head, Carousel } from '~lib';

	interface ISingleArticle {
		article: {
			currentArticle: IArticle,
		},
		recentArticles: {
			result: {
				data: IArticle[],
				meta: IMeta
			}
		}
	}

	export let data: ISingleArticle;

	const host = import.meta.env.VITE_HOST;
	const apiHost = import.meta.env.VITE_API_HOST;

	let articleLink = '';
	let article: IArticle;
	let imageObject: IPictureFormat;
	let imageUrl: string;
	let imageWidth: string;
	let imageHeight: string;

	export let layout: IArticleLayout;

	$: recentArticles = data.recentArticles.result.data;

	$: {
		articleLink = $page.url.href;
		article = data.article.currentArticle;
		layout = article.layout;
		imageObject = article.cover_picture?.formats?.large || article.cover_picture?.formats?.medium || article.cover_picture?.formats?.small || article.cover_picture?.formats?.thumbnail;
		imageUrl = imageObject?.url || '';
		imageWidth = (imageObject?.width || 0).toString();
		imageHeight = (imageObject?.height || 0).toString();
	}

</script>

<Head
	title={article.title + ' | All Time High'}
	description={article.description}
	tags={ article?.tags?.map((tag) => tag.tag) }
	section={article.category.category_name}
	imageUrl={`${apiHost}${imageUrl}`}
	imageWidth={imageWidth}
	imageHeight={imageHeight}
	articleLink={articleLink}
	og_type="article"
	updatedAt={article.updatedAt}
	createdAt={article.createdAt}
	canonical={articleLink}
/>


<div class="Article">

	<div class="mb-3">
		<div class="container">
			<div class="d-none d-sm-block">
				<Carousel
					interval={7000}
					hideIndicators={true}
					images={[{
						img: '/img/banners/banner_v2_1.png',
						link: 'https://okx.com/join/ATHLIVE'
					}, {
						img: '/img/banners/banner_v2_2.png',
						link: `${host}/events`
					}
				]}
					ratio={0.1666666}
				/>
			</div>

			<div class="d-block d-sm-none">
				<Carousel
					interval={7000}
					hideIndicators={true}
					images={[{
						img: '/img/banners/banner_v2_1_mobile.png',
						link: 'https://okx.com/join/ATHLIVE'
					}, {
						img: '/img/banners/banner_v2_2_mobile.png',
						link: `${host}/events`
					}
				]}
					ratio={0.8}
				/>
			</div>
		</div>
	</div>

	<div class="container">
		<div class="breadcrumbs">
			<a href={`${host}/`}>Home</a> • {article.category.category_name}
		</div>
	</div>
	<div class="container">
		<div>
			<h1>{article.title}</h1>
		</div>
		<div class="created">
			{new Date (article.createdAt).toDateString()}
		</div>

		<div class="row mb-5">
			<div class="col-md-12 order-2 order-md-1">

				<div class="mb-3">
					{article.description}
				</div>

				<hr class="divider" />

				<div class="mb-3">
					<div class="markdown-wrapper">
						<SvelteMarkdown source={article.text} />
					</div>
				</div>

			</div>
			<div class="col-md-12 order-1 order-md-2">
				<div class="mb-2">
					<Image roundedCorners={true} imageUrl={`${apiHost}${imageUrl || ''}`} image={article.cover_picture} />
				</div>
			</div>
		</div>

		<div>
			<div class="my-3">
				<h3>Recent News</h3>
			</div>
			<div class="row">
				{#each recentArticles as recentArticle}
					<div class="col-12 col-md-6 col-lg-4 mb-4">
						<a href={`${host}/article/${recentArticle.slug}`}>
							<div class="mb-2">
								<Image roundedCorners={true} imageUrl={`${apiHost}${recentArticle.cover_picture.url || ''}`} image={recentArticle.cover_picture} />
							</div>
							{recentArticle.title}
						</a>
					</div>

				{/each}
			</div>
		</div>

		<Footer/>
	</div>


</div>

<style lang="scss">
	.Article {
    position: relative;
	}

	.breadcrumbs {
    text-transform: uppercase;
    font-size: 0.75rem;
		letter-spacing: 4px;
    margin-bottom: 2rem;
	}

	.created {
    padding: 2rem 0;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 4px;
	}
</style>
