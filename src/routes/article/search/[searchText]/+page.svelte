<script lang="ts">
	import { SearchPage } from '~/lib';
	import { type ISearchData } from '~lib/types';
	export let data: ISearchData;

</script>

<SearchPage {data} />
