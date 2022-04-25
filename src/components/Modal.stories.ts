import PurityModal from './PurityModal.vue';
import PurityToolbar from './PurityToolbar.vue';
import PurityModalBody from './PurityModalBody.vue';

import type { Story } from '@storybook/vue3';

export default {
	title: 'Modal',
	component: PurityModal,
	argTypes: {},
};

const Template : Story<{open: boolean}> = (args: any) => ({
	components: { PurityModal, PurityToolbar, PurityModalBody },
	setup() {
		return { args };
	},
	template: `
		<purity-modal v-bind='args'>
			<purity-toolbar>
				<h1>Modal Title</h1>
			</purity-toolbar>
			<purity-modal-body>
				<h1>Test</h1>
			</purity-modal-body>
		</purity-modal>
	`,
});

export const Open = Template.bind({});
Open.args = {
	open: true,
};