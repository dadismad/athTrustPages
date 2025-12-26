<script lang="ts">

	import { page } from '$app/stores';
	const host = import.meta.env.VITE_HOST;

	export let href: string;
	export let inverted = false;
	export let onClick: (e: MouseEvent) => unknown = () => {};

	let currentPath = '';
	let isActive = false;

	$: currentPath = `${host}${$page.url.pathname}`;
	$: isActive =
		`${host}${currentPath}` === href ||
		(currentPath === `${host}/` && href === `${host}/`) ||
		(currentPath !== `${host}/` && href !== `${host}/` && currentPath.includes(href));

	const handleLinkClick = (e: MouseEvent) => onClick(e);
</script>

<a
	class={`Link ${inverted ? 'Link-inverted' : ''}
  ${isActive ? 'Link-active' : ''}`}
	{href}
	on:click={handleLinkClick}
>
	<slot />
</a>

<style lang="scss">
  a.Link,
  a:visited.Link,
  a:link.Link {
    text-decoration: none;
    color: var(--color-text-muted-100);
    position: relative;
    padding: 1px 6px;
    font-weight: 600;
    border-radius: var(--border-radius-control);

    &:hover {
      text-decoration: none;
      color: var(--color-text-base-100);
      opacity: 0.9;
    }

    &.Link-inverted {
      color: var(--color-text-inv-muted-100);

      &:hover {
        color: var(--color-text-inv-100);
        opacity: 0.9;
      }
      &.Link-active {
        color: var(--color-text-inv-100);
      }
    }

    &.Link-active {
      color: var(--color-text-inv-100);
      background-color: var(--color-bg-primary-100);
      border-radius: 5px;
    }
  }
</style>
