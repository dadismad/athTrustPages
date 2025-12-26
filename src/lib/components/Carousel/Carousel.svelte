<!--

  + Swipe
  + Correct image position for small devices
  + Make next previous on the sides of the slide
  + Break down to smaller components
  + Turn off transition when user is resizing window
  + If click too fast bad transition from last to one and from one to last (Unable to change slide when animation)
  + Custom ratio (not 25%)

  - Auto change
  - Two slides inside the Carousel



  -

-->

<svelte:window bind:innerWidth={windowWidth} on:resize={windowResize}/>

<script lang="ts">

	import type { Image } from './Carousel';

	import Indicators from './CIndicators.svelte';
	import Controls from './CControls.svelte';
	import CImage from './CImage.svelte';

	import { onMount, onDestroy } from 'svelte';

	export let images: Image[] = [] as Image[];
	export let ratio = 0.25;
	export let interval = 0;
	export let hideIndicators = false;

	// BASE
	let windowWidth = 0;
	let width = 0;
	let height = 0;
	let containerTransitionDefault = 'transform .3s ease-in-out';
	let containerTransition = '';
	let inTransition = false;

	let carouselRef: HTMLDivElement;
	let currentSlide = 1;
	let slideCount = images.length;

	// SMOOTHER
	let slideFrom = -1;
	let slideTo   = -1;
	let animate   = false;
	let animationDirection = '';
	let left: boolean;

	// SWIPE
	let isSwiping = false;
	let initialPosition = 0;
	let offset = 0;
	let leftSwipe = false;

	// Deactivate transitions when resize window
	let timeOut: ReturnType<typeof setTimeout>;
	let intervalEntity: ReturnType<typeof setInterval>;
	let timeOutP = 0;

	// Deactivate animations while user is resizing the window
	const windowResize = () => {
		if (timeOutP === 0) { containerTransition = '' }
		timeOutP = 1;
		clearTimeout(timeOut);
		timeOut = setTimeout(() => resEnded(), 500);
	}

	const resEnded = () => {
		containerTransition = containerTransitionDefault;
		timeOutP = 0;
	}

	// BASE
	onMount(() => {
		setTimeout(() => {
			containerTransition = containerTransitionDefault;
		});

		if (interval) {
			intervalEntity = setInterval(() => {
				if (!isSwiping) {
					stepForward();
				}
			}, interval);
		}
	});

	onDestroy(() => {
		clearInterval(intervalEntity);
	});

	$: {
		left = animationDirection === 'left';
	}

	$: {
		if (windowWidth) {
			width = carouselRef?.getBoundingClientRect().width;
			height = ratio * width;
		}
	}

	const stepForward = () => {
		if (!inTransition) {
			inTransition = true;
			if (currentSlide < slideCount + 1) {
				currentSlide++;
			} else {
				currentSlide = 0;
			}
		}
	}

	const stepBack = () => {
		if (!inTransition) {
			inTransition = true;
			if (currentSlide > 0) {
				currentSlide--;
			} else {
				currentSlide = slideCount - 1;
			}
		}
	}

	const transitionEnd = () => {

		if (currentSlide === 0) {
			containerTransition = 'none';
			currentSlide = slideCount;
			setTimeout(() => {
				containerTransition = containerTransitionDefault;
			});
		}

		if (currentSlide === slideCount + 1) {
			containerTransition = 'none';
			currentSlide = 1;
			setTimeout(() => {
				containerTransition = containerTransitionDefault;
			});
		}

		inTransition = false;

	}

	const setSlide = (slide: number) => {
		if (!animate && !inTransition) {
			if (Math.abs(slide - (currentSlide - 1)) > 1) {

				slideFrom = currentSlide - 1;
				slideTo   = slide;

				if ((slideFrom - slideTo) > 0) {
					animationDirection = 'left';
				}

				setTimeout(() => {
					animate = true;
				});
			}

			if (slide >= 0 && slide < slideCount) {
				inTransition = true;
				currentSlide = slide + 1;
			}

		}
	}

	const hideAnimation = () => {
		slideFrom = -1;
		slideTo = -1;
		animate   = false;
		animationDirection = '';
	}

	// SWIPE
	$: {
		leftSwipe = offset > 0;
	}

	$: {
		if (Math.abs(offset) > width/4) {
			windowMouseUpHandler();
			windowTouchEndHandler();
			if (leftSwipe) {
				stepBack();
			} else {
				stepForward();
			}
		}
	}

	const windowMouseMoveHandler = (e: MouseEvent) => {
		containerTransition = 'none';
		offset = e.pageX - initialPosition;
	}

	const windowMouseUpHandler = () => {
		isSwiping = false;
		containerTransition = containerTransitionDefault;
		window.removeEventListener('mousemove', windowMouseMoveHandler);
		window.removeEventListener('mouseup', windowMouseUpHandler);
		offset = 0;
	}

	const windowTouchMoveHandler = (e: TouchEvent) => {
		e.stopPropagation();
		containerTransition = 'none';
		offset = e.touches[0].pageX - initialPosition;
	}

	const windowTouchEndHandler = () => {
		isSwiping = false;
		containerTransition = containerTransitionDefault;
		window.removeEventListener('touchmove', windowTouchMoveHandler);
		window.removeEventListener('touchend', windowTouchEndHandler);
		offset = 0;
	}

	const mouseDownHandler = (e: MouseEvent) => {
		isSwiping = true;
		initialPosition = e.pageX;
		window.addEventListener('mousemove', windowMouseMoveHandler);
		window.addEventListener('mouseup', windowMouseUpHandler);
	}

	const touchStartHandler = (e: TouchEvent) => {
		isSwiping = true;
		initialPosition = e.touches[0].pageX;
		window.addEventListener('touchmove', windowTouchMoveHandler);
		window.addEventListener('touchend', windowTouchEndHandler);
	}

</script>

<div
	class="Carousel"
	bind:this={carouselRef}
	style={`height: ${height}px`}

>

	<div
		role="button"
		tabindex="-1"
		class="CarouselImagesWrapper"
		style={`width: ${width}px`}
		on:mousedown={mouseDownHandler}
		on:touchstart={touchStartHandler}
	>

		<div class="CarouselImageContainer" style={`
      width: ${width * slideCount}px;
      transform: translateX(${-1 * width * (currentSlide) + (leftSwipe ? Math.sqrt(offset*10) : -1 * Math.sqrt(Math.abs(offset*10)))}px);
      transition: ${containerTransition};
    `} on:transitionend={transitionEnd}>

			<CImage {width} {height} image={images[slideCount - 1]} />
			{#each images as image}
				<CImage {width} {height} image={image} />
			{/each}
			<CImage {width} {height} image={images[0]} />

		</div>
	</div>

	{#if slideFrom !== -1 && slideTo !== -1}
		<div class="slideAnimationWrapper" style={`
      width: ${width}px;
      height: ${height}px;
    `}>
			<div class={`slideAnimation`} style={`
        left: ${left ? `${-1 * width}px` : 'auto'};
        width: ${2 * width}px;
        height: ${height}px;
        flex-direction: ${left ? 'row-reverse' : 'row'};
        transform: ${animate
        ? left ? 'translateX(50%)' : 'translateX(-50%)'
        : 'translateX(0)'};
      `} on:transitionend={hideAnimation} on:animationend={hideAnimation}>

				<CImage {width} {height} image={images[slideFrom]} />
				<CImage {width} {height} image={images[slideTo]} />

			</div>
		</div>
	{/if}

	{#if width && height}
		<Controls {stepBack} {stepForward} />
		{#if !hideIndicators}
			<Indicators {images} {currentSlide} {setSlide} />
		{/if}
	{/if}

</div>

<style lang="scss">

  $gray-100: grey;
  $border-radius-panel: 12px;
  //$border-radius-panel: 20px;

  .Carousel {
    background-color: $gray-100;
    width: 100%;
    position: relative;
    border-radius: $border-radius-panel;


    .CarouselImagesWrapper {
      width: 100%;
      overflow-x: hidden;
      scroll-behavior: smooth;
      border-radius: $border-radius-panel;
    }

    .CarouselImageContainer {
      display: flex;
      position: relative;
    }

    .slideAnimationWrapper {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }

    .slideAnimation {
      background-color: rgba(255, 255, 255, 1);
      display: flex;
      transition: transform .3s ease-in-out;
      position: relative;
    }

  }

</style>
