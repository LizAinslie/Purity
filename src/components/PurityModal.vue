<script setup lang="ts">
import '../styles/base.scss';

const props = defineProps({
	open: {
		type: Boolean,
		default: false,
	},
	width: {
		type: String,
		default: '75%',
	},
	height: {
		type: String,
		default: '75%',
	},
});
</script>

<template>
  <div class="modal-container" :class='{ open }'>
    <div class="modal" :style='{ width, height }'>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/vars';

.modal-container {
	display: none;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	align-items: center;
	justify-content: center;
	background-color: rgba(38, 38, 38, .8);
	z-index: $layer-modal;

	&.open {
		display: flex;
	}

	.modal {
		&.dark {
			// todo: dark styles
		}

		border-radius: $border-radius-big;
		background-color: $background-light-base;
		display: flex;
		flex-direction: column;

		&::v-deep(> *) {
			&:first-child {
				border-top-left-radius: $border-radius-big;
				border-top-right-radius: $border-radius-big;
			}

			&:last-child {
				border-bottom-left-radius: $border-radius-big;
				border-bottom-right-radius: $border-radius-big;
			}
		}

		&::v-deep(> .toolbar), &::v-deep(> .modal-footer) {
			flex-grow: 0;
		}
	}
}
</style>