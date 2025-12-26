<script lang='ts'>
	import { browser } from '$app/environment';
	import type { Image } from './Carousel';
	export let image: Image;
	export let width: number;
	export let height: number;

	let x1 = 0;
	let y1 = 0;

	const mouseDownHandler = (event: MouseEvent) => {
		x1 = event.screenX;
		y1 = event.screenY;
	}

	const mouseUpHandler = (event: MouseEvent) => {

		let diffX = Math.abs( x1 - event.screenX );
		let diffY = Math.abs( y1 - event.screenY );

		if (diffX < 2 && diffY < 2) {
			if (browser) {
				window.open(image.link as string, '_blank');
			}
		}

	}


</script>

<div
	role="button"
	tabindex="-1"
	on:mousedown={mouseDownHandler}
	on:mouseup={mouseUpHandler}
	class="CarouselImage"
	style={`
      background-image: url('${image?.img}');
      min-width: ${width}px;
      max-width: ${width}px;
      width: ${width}px;
      height: ${height}px;
    `}
></div>


<style lang='scss'>
  .CarouselImage {
    background-size: cover;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 25em;
    position: relative;
    cursor: pointer;
		background-position: 50% 50%;
  }
</style>
