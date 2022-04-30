import PurityModal from './PurityModal.vue';
import PurityToolbar from './PurityToolbar.vue';
import PurityButton from './PurityButton.vue';

import type { Story } from '@storybook/vue3';
import type { ModalProps } from '@/components/PurityModal.vue';
import { ref } from 'vue';

export default {
	title: 'Modal',
	component: PurityModal,
	argTypes: {},
};

const Template : Story<ModalProps> = (args: ModalProps) => ({
	components: { PurityModal, PurityToolbar, PurityButton },
	setup() {
		// const open = ref<boolean>(false)
		return { args };
	},
	template: `
		<purity-button @click='args.open = true'>Open Modal</purity-button>
		<purity-modal v-bind='args'>
			<template #toolbar>
				<h1>Modal Title</h1>
			</template>
			
			<h1>Test</h1>
		</purity-modal>
	`,
});

export const Default = Template.bind({});

export const Sizes = Template.bind({});
Sizes.args = {
	width: '50%',
	height: '25%',
};

export const Dark = Template.bind({});
Dark.args = {
	dark: true,
};
