<script lang="ts">

	export let onClick: () => void = () => null;
	export let buttonElement: HTMLButtonElement | null = null;
	export let disabled = false;

	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	}

	let iconButtonClassNames = '';

	$: {
		iconButtonClassNames = 'IconButton';
	}
</script>

<button {disabled} class={iconButtonClassNames} on:click={handleClick} bind:this={buttonElement}>
	<slot/>
</button>

<style lang="scss">
  .IconButton {
    font-size: 1rem;
    line-height: 0;
    border: 1px solid transparent;
    padding: .375rem;
    height: 30px;
    background-color: transparent;
    border-radius: var(--border-radius-control);

    &:disabled {
      opacity: .6;
      background-color: transparent;
      &:hover {
        background-color: transparent;
      }
    }

    &:hover {
      background-color: var(--color-bg-base-200);
    }
  }
</style>
