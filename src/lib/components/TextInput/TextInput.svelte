<script lang="ts">
	import type { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler } from "svelte/elements";
	import type { KEvent } from "~lib/types";
	import type { TextInputType, TextInputVariant, TextInputSize } from "./TextInput";

	export let variant: TextInputVariant = "underlined";
	export let size: TextInputSize = "md";
	export let value = "";
	export let onKeydown: KeyboardEventHandler<HTMLInputElement> = () => {};
	export let onKeyup: KeyboardEventHandler<HTMLInputElement> = () => {};

	export let onFocus = () => {}; // e: FocusEvent
	export let onBlur: FocusEventHandler<HTMLInputElement> = () => {}; // e: FocusEvent
	export let onChange: ChangeEventHandler<HTMLInputElement> = () => {}; // e: Event

	export let placeholder: string = "";
	export let type: TextInputType = "text";
	export let disabled = false;
	export let readonly = false;
	export let label = "";
	export let labelBadgeText = '';
	export let name: string | null = null;
	export let id: string | null = null;
	export let errors: boolean = false;

	export let inputEl: HTMLInputElement | null = null;
	export let isActive = false;

	let textInputClassNames: string;

	let keydownHandler: KeyboardEventHandler<HTMLInputElement> = (e: KEvent) => onKeydown(e);
	let keyupHandler: KeyboardEventHandler<HTMLInputElement> = (e: KEvent) => onKeyup(e);

	$: textInputClassNames = getClassNames(disabled, readonly, variant, size, isActive, errors);

	const getClassNames = (
		disabled: boolean,
		readonly: boolean,
		variant: TextInputVariant,
		size: TextInputSize,
		isActive: boolean,
		errors: boolean
	) => {
		let textInputClassName = "TextInput ";
		textInputClassName += disabled ? "TextInput-disabled " : "";
		textInputClassName += readonly ? "TextInput-readonly " : "";
		textInputClassName += `TextInput-variant-${variant} `;
		textInputClassName += `TextInput-size-${size} `;
		textInputClassName += errors ? 'TextInput-has-errors' : '';
		if (isActive) {
			textInputClassName += "TextInput-active ";
		}
		return textInputClassName;
	};
</script>

<label class="TextInput-label-wrapper">

	{#if label}
    <span class="TextInput-label">
	    {label}
			{#if labelBadgeText}
        <span class='TextInput-label-badge'>
          {labelBadgeText}
        </span>
      {/if}
    </span>
	{/if}



	<div class={textInputClassNames}>
		{#if $$slots.prefix}
      <span class="TextInput-prefix">
        <slot name="prefix" />
      </span>
		{/if}

		<input
			{disabled}
			{readonly}
			{placeholder}
			class="TextInput-el"
			{type}
			{value}
			on:keydown={keydownHandler}
			on:keyup={keyupHandler}
			on:focus={onFocus}
			on:blur={onBlur}
			on:change={onChange}
			{name}
			{id}
			bind:this={inputEl}
		/>
		{#if $$slots.suffix}
      <span class="TextInput-suffix">
        <slot name="suffix" />
      </span>
		{/if}
	</div>
</label>

<style lang="scss">

  @use "./TextInput.scss";

</style>
