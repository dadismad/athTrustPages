<script lang="ts">
	import type { IEvent, IGetEventsReturn, IPictureFormat } from '~lib/types';
	import { Footer, Head, Image } from '~lib';
	import SvelteMarkdown from 'svelte-markdown';
	import { page } from '$app/stores';

	export let data: {
		article: {
			currentEvent: IEvent
		},
		upcomingEvents: IGetEventsReturn
	}

	const host = import.meta.env.VITE_HOST;
	const apiHost = import.meta.env.VITE_API_HOST;

	let currentEvent: IEvent;
	let articleLink = '';
	let imageObject: IPictureFormat;
	let imageUrl: string;
	let imageWidth: string;
	let imageHeight: string;

	$: {
		currentEvent = data.article.currentEvent;
		articleLink = $page.url.href;
		imageObject = currentEvent.cover_picture[0]?.formats?.large || currentEvent.cover_picture[0]?.formats?.medium || currentEvent.cover_picture[0]?.formats?.small || currentEvent.cover_picture[0]?.formats?.thumbnail;
		imageUrl = imageObject?.url || '';
		imageWidth = (imageObject?.width || 0).toString();
		imageHeight = (imageObject?.height || 0).toString();
	}

</script>


<Head
	title={currentEvent.title + ' | All Time High'}
	description={currentEvent.description}
	tags={ currentEvent?.tags?.map((tag) => tag.tag) }
	section={currentEvent.category.category_name}
	imageUrl={`${apiHost}${imageUrl}`}
	imageWidth={imageWidth}
	imageHeight={imageHeight}
	articleLink={articleLink}
	og_type="article"
	updatedAt={currentEvent.updatedAt}
	createdAt={currentEvent.createdAt}
/>


<div class="Article">
	<div class="container">
		<div class="breadcrumbs">
			<a href={`${host}/`}>Home</a> • {currentEvent.category.category_name}
		</div>
	</div>
	<div class="container">

		<div class="event-date">
			{new Date(currentEvent.date).toDateString()}
		</div>

		<div>
			<h1 class="mb-5">{currentEvent.title}</h1>
		</div>

		<div class="row">
			<div class="col-md-12 order-2 order-md-1">

				<div class="mb-3">
					{currentEvent.description}
				</div>

				<hr class="divider" />

				<div class="mb-3">
					<div class="markdown-wrapper">
						<SvelteMarkdown source={currentEvent.text} />
					</div>
				</div>

			</div>
			<div class="col-md-12 order-1 order-md-2">
				<div class="mb-2">
					<Image roundedCorners={true} imageUrl={`${apiHost}${imageUrl || ''}`} image={currentEvent.cover_picture[0]} />
				</div>
			</div>
		</div>

		<div class="my-5">

			<div class="my-3">
				<h3>Upcoming Events</h3>
			</div>

			<hr/>

			<div class="row">
				{#each data.upcomingEvents.result.data as recentArticle}
					<div class="col-12 col-md-6 col-lg-4 mb-4">
						<a href={`${host}/events/${recentArticle.slug}`}>
							<div class="mb-2">
								<Image roundedCorners={true} imageUrl={`${apiHost}${recentArticle.cover_picture[0].url || ''}`} image={recentArticle.cover_picture[0]} />
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
    padding-top: 4rem;
  }

  .breadcrumbs {
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 4px;
    margin-bottom: 2rem;
  }

  .event-date {
		display: inline-block;
    padding: .25rem .5rem;
		border-radius: var(--border-radius-panel);
    margin-bottom: 3rem;
		background: var(--color-bg-primary-100);
		color: var(--color-text-inv-100);
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 4px;
  }
</style>
