<script lang="ts">
	import { Header, MobileNavigator } from '~lib/components';
	import '../lib/styles/index.scss';
	import favicon from '../lib/assets/favicon.svg';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="App">
	<Header />
	<div class="d-block d-lg-none">
		<MobileNavigator />
	</div>
	<slot/>
</div>
