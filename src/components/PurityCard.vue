<script setup lang='ts'>
import { reactive, ref, useSlots } from 'vue';

const slots = useSlots();

export interface CardProps {
	dark?: boolean;
}

const props = withDefaults(defineProps<CardProps>(), {
	dark: false,
});

const { dark } = reactive(props);

const hasHeaderSlot = ref<boolean>(false);
if (slots.header && slots.header().length) hasHeaderSlot.value = true;

const hasImageSlot = ref<boolean>(false);
if (slots.image && slots.image().length) hasImageSlot.value = true;

const hasContentSlot = ref<boolean>(false);
if (slots.default && slots.default().length) hasContentSlot.value = true;

const hasFooterSlot = ref<boolean>(false);
if (slots.footer && slots.footer().length) hasFooterSlot.value = true;

const classes = ref({ dark });
</script>

<template>
	<div class='card' :class='classes'>
		<div class='card-header' v-if='hasHeaderSlot'>
			<slot name='header' />
		</div>
		<div class='card-image' v-if='hasImageSlot'>
			<slot name='image' />
		</div>
		<div class='card-content' v-if='hasContentSlot'>
			<slot />
		</div>
		<div class='card-footer' v-if='hasFooterSlot'>
			<slot name='footer' />
		</div>
	</div>
</template>

<style scoped lang='scss'>
@import '../styles/vars';
@import '../styles/mixins';

.card {
	border-radius: $border-radius-sm;
	display: flex;
	flex-direction: column;
	background-color: $background-light-base;

	> * {
		@include respectParentBorderRadius()
	}

	&.dark {
		background-color: $background-dark-base;
		color: #fff;

		.card-header, .card-footer {
			background-color: $background-dark-section;
		}
	}

	.card-header, .card-footer {
		flex-grow: 0;
		background-color: $background-light-section;
		display: flex;
		padding: $padding-2;
		align-items: center;
	}

	.card-image {
		flex-grow: 0;
		width: 100%;
		height: auto;
	}

	.card-content {
		flex-grow: 1;
	}
}
</style>