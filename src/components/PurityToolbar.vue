<script setup lang='ts'>
import { reactive } from 'vue';

export interface ToolbarProps {
	dark?: boolean;
	vertical?: boolean;
}

const props = withDefaults(defineProps<ToolbarProps>(), {
	dark: false,
	vertical: false,
});

const { vertical, dark } = reactive(props);
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
		background-color: $background-dark-toolbar;
		color: #fff;
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