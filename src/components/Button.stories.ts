import PurityButton from './PurityButton.vue';

import type { Story } from '@storybook/vue3';

export default {
	title: 'Button',
	component: PurityButton,
	argTypes: {},
};

const Template : Story<{
	faint?: boolean,
	icon?: boolean,
	link?: string,
}> = (args: any) => ({
	components: { PurityButton },
	setup() {
		return { args };
	},
	template: `<purity-button v-bind='args'>Click Me!</purity-button>`,
});

export const Faint = Template.bind({});
Faint.args = {
	faint: true,
};

export const Icon = Template.bind({});
Icon.args = {
	icon: true,
};

export const Link = Template.bind({});
Link.args = {
	link: 'https://google.com',
};