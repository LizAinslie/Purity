<script setup lang='ts'>
const props = defineProps({
	vertical: {
		type: Boolean,
		default: false,
	},
	dark: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<div class='toolbar' :class='{ vertical, dark }'>
		<slot></slot>
	</div>
</template>

<style scoped lang='scss'>
@import '../styles/vars';

.toolbar {
	&.dark {
		// todo: dark styles
	}

	&.vertical {
		flex-direction: column;
	}

	background-color: $background-light-toolbar;
	display: flex;
	padding: $padding-2;
	align-items: center;

	&::v-deep(> *) {
		font-size: 1rem;
		line-height: 1.25rem;
		margin: 0;
	}
}
</style>