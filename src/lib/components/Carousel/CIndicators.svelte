<script lang='ts'>
	import type { Image } from './Carousel';

	export let images: Image[] = [];
	export let currentSlide: number = 0;
	export let setSlide: (i: number) => void;
</script>

<div class="slidesControl">
	{#each images as image, i}
		<div role="button" tabindex="-1" class={`slideIndicator ${currentSlide === i+1 ? 'slideIndicatorActive' : ''}`} on:mousedown={() => setSlide(i)}></div>
	{/each}
</div>

<style lang='scss'>

  .slidesControl {
    display: flex;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    gap: .5rem;

    .slideIndicator {
      width: 32px;
      height: 4px;
      background-color: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.08);
      transition: box-shadow .3s ease-in-out;

      &.slideIndicatorActive {
        background-color: rgba(255, 255, 255, 1);
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.8);
      }
    }
  }

</style>
