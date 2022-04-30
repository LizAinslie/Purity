<script setup lang="ts">
import { reactive, ref, useSlots } from 'vue';
import PurityToolbar from './PurityToolbar.vue';

const slots = useSlots();

export interface ModalProps {
	open?: boolean;
	width?: string;
	height?: string;
	dark?: boolean;
}

const props = withDefaults(defineProps<ModalProps>(), {
	open: false,
	width: '75%',
	height: '75%',
	dark: false,
});

const { width, height, open, dark } = reactive(props);

const hasBodySlot = ref<boolean>(false);
if (slots.default && slots.default().length) hasBodySlot.value = true;

const hasToolbarSlot = ref<boolean>(false);
if (slots.toolbar && slots.toolbar().length) hasToolbarSlot.value = true;

const hasFooterSlot = ref<boolean>(false);
if (slots.footer && slots.footer().length) hasFooterSlot.value = true;
</script>

<template>
	<div class="modal-container" :class='{ open }'>
		<div class="modal" :style='{ width, height }' :class='{ dark }'>
			<purity-toolbar :dark='dark' v-if='hasToolbarSlot'>
				<slot name='toolbar' />
			</purity-toolbar>
			<div class='modal-body' v-if='hasBodySlot'>
				<slot />
			</div>
			<div class='modal-footer' v-if='hasFooterSlot'>
				<slot name='footer' />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '../styles/vars';
@import '../styles/mixins';

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
			background-color: $background-dark-base;
			color: #fff;
		}

		.modal-body {
			padding: $padding-2;
			flex-grow: 1;
		}

		border-radius: $border-radius-md;
		background-color: $background-light-base;
		display: flex;
		flex-direction: column;

		&::v-deep(> *) {
			@include respectParentBorderRadius()
		}

		&::v-deep(> .toolbar), > .modal-footer {
			flex-grow: 0;
		}
	}
}
</style>