<script lang="ts">

	import type { IEvent } from '~lib/types';
	import { Image } from '~lib';

	export let data: IEvent;

	const apiHost = import.meta.env.VITE_API_HOST;
	const host = import.meta.env.VITE_HOST;

</script>

<a href={`${host}/events/${data.slug}`}>
	<div class="EventCard">
		<div class="row">
			<div class="col-md-6">
				<p class="date">{data.date}</p>
				<p>{data.time?.slice(0,5)}</p>
			</div>
			<div class="col-md-8">
				<div class="mb-4">
					<Image roundedCorners imageUrl={apiHost + data.cover_picture[0].url} image={data.cover_picture[0]} />
				</div>
			</div>
			<div class="col-md-10">
				<h2>{data.title}</h2>
				<p>{data.description}</p>
			</div>
		</div>

	</div>
</a>

<style lang="scss">

	.EventCard {
    margin-bottom: 1rem;
	}

	.date {
    font-size: 32px;
    line-height: 1;
    font-weight: 700;
    margin-bottom: .25rem;
	}
</style>
