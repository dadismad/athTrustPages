<script lang="ts">

	export let title: string;
	export let description: string;
	export let tags: string[] | undefined = [];
	export let section: string | null = null;
	export let imageUrl: string;
	export let imageWidth: string;
	export let imageHeight: string;
	export let articleLink: string;
	export let locale = 'en_EN';
	export let og_type = 'article';
	export let updatedAt: string | null = null;
	export let createdAt: string | null = null;
	export let canonical: string | null = null;

</script>

<svelte:head>

	<!-- MAIN TAGS -->
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if tags?.length}
		{#each tags as tag}
			<meta property="article:tag" content={ tag } />
		{/each}
	{/if}
	{#if section}
		<meta property="article:section" content={section} />
	{/if}
	<meta property="article:content_tier" content="free">

	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:secure_url" content={imageUrl} />
	<meta property="og:image:width" content={imageWidth} />
	<meta property="og:image:height" content={imageHeight} />
	<meta property="og:image:alt" content={title}>
	<meta property="og:image:type" content="image/jpeg">
	{#if articleLink}
		<meta property="og:url" content={articleLink} />
	{/if}
	<meta property="og:locale" content={locale} />
	<meta property="og:type" content={og_type} />
	<meta property="og:site_name" content="ATH • All Time High" />
	{#if updatedAt}
		<meta property="og:updated_time" content={updatedAt} />
		<meta property="og:modified_time" content={updatedAt} />
	{/if}
	{#if createdAt}
		<meta property="article:published_time" content={createdAt} />
	{/if}
	<meta property="description" content={description} />

	<!-- TWITTER -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content={title}>
	<meta name="twitter:description" content={description}>
	<meta name="twitter:image" content={imageUrl}>

</svelte:head>
