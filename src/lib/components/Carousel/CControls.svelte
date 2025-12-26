<script lang='ts'>
	export let stepForward: () => void;
	export let stepBack: () => void;
</script>

<div class="controlForward" on:mousedown={stepForward} role="button" tabindex="-1">
	<i class="ri-arrow-right-s-line control-icon"></i>
</div>
<div class="controlBack" on:mousedown={stepBack} role="button" tabindex="-1">
	<i class="ri-arrow-left-s-line control-icon"></i>
</div>

<style lang='scss'>
  .controlBack, .controlForward {
    display: flex;
    position: absolute;
    z-index: 1;
    width: 48px;
    height: 100%;
    background: rgba(255, 255, 255, 0);
    opacity: 0.2;
    top: 0;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.4);
      opacity: 1;
    }
  }

  .controlBack {
    left: 0;
  }

  .controlForward {
    right: 0;
  }

  .control-icon {
    margin: auto;
  }
</style>
