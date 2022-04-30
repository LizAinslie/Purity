<script setup lang='ts'>
import { computed, reactive } from 'vue';

export interface ButtonProps {
	faint?: boolean;
	icon?: boolean;
	link?: string;
}

const emit = defineEmits(["click"])
const props = withDefaults(defineProps<ButtonProps>(), {
	faint: false,
	icon: false,
});

const { link, faint, icon } = reactive(props);

const className = computed(() => ({
	faint,
	icon,
}));

function click(e: MouseEvent) {
	emit("click", e);
}
</script>

<template>
	<a v-if='link' :href='link' @click.stop='click' class='button' :class='className'>
		<slot />
	</a>
	<button v-else @click.stop='click' class='button' :class='className'>
		<slot />
	</button>
</template>

<style scoped lang='scss'>
@import '../styles/vars';

.button {
	--bg-opacity: .3;
	transition: all 160ms ease-in-out;
	background-color: rgba($background-button-secondary, var(--bg-opacity));
	padding: $padding-2 $padding-3;
	appearance: none;
	border-radius: $border-radius-sm;
	border: none;
	color: inherit;
	text-decoration: none;
	margin: 0;
	cursor: pointer;

	&.icon {
		padding-left: $padding-2;
		padding-right: $padding-2;
	}

	&.faint {
		--bg-opacity: 0;
		//background-color: rgba($background-button-secondary, 0);
	}

	&:hover {
		--bg-opacity: .5;
		//background-color: rgba($background-button-secondary, .75);
	}
}
</style>