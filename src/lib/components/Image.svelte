<script lang="ts">
	import { onMount } from "svelte";
	import type { IPictureEntity } from '~lib/types';

	export let imageUrl: string = '';
	export let image: IPictureEntity;
	export let roundedCorners = false;
	export let borderStyle = 'none';
	export let alt = '';

	const apiHost = import.meta.env.VITE_API_HOST;

	let imageWrapper: HTMLDivElement;
	let isLoading = true;

	onMount(() => {
		isLoading = false;
	});

	function ImageWrapper(node: HTMLDivElement) {
		imageWrapper = node;
	}

	let imagePreloaderHeight = 0;

	$: isLoading = !!imageUrl;
	let imageSrc: string;

	const getImageUrl = (image: IPictureEntity) => {
		let largeUrl = image.formats.large?.url;
		let mediumUrl = image.formats.medium?.url;
		let smallUrl = image.formats.small?.url;
		let thumbnailUrl = image.formats.thumbnail?.url;
		let baseUrl = image.url;
		return apiHost + (largeUrl || mediumUrl || smallUrl || thumbnailUrl || baseUrl);
	}

	$: {
		let wrapperWidth = imageWrapper?.getBoundingClientRect().width;
		let imageWidth = image.width;
		let imageHeight = image.height;
		imageSrc = imageUrl ? imageUrl : getImageUrl(image);
		imagePreloaderHeight = (wrapperWidth / imageWidth) * imageHeight;
	}

	const handleOnLoad = () => {
		isLoading = false;
	}

</script>

<div class="ImageWrapper" use:ImageWrapper style={isLoading ? `height: ${imagePreloaderHeight}px` : 'auto'}>
	<img
		alt={alt}
		class="Image"
		src={imageSrc}
		on:load={handleOnLoad}
		style={`
			border-radius: ${roundedCorners ? '12px' : '0'};
			border: ${borderStyle};
			aspect-ratio: ${image.width}/${image.height};
		`}>
	{#if isLoading }
		<div class="ImagePreloader"></div>
	{/if}
</div>

<style lang="scss">
  .ImageWrapper {
    position: relative;
    //background-color: var(--bg-base-100);
  }

  .ImagePreloader {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    border: 1px solid var(--line-base-100);
  }

  .Image {
    width: 100%;
  }
</style>
