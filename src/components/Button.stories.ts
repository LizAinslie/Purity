import PurityButton from './PurityButton.vue';

import type { Story } from '@storybook/vue3';
import type { ButtonProps } from '@/components/PurityButton.vue';

export default {
	title: 'Button',
	component: PurityButton,
	argTypes: {},
};

const Template : Story<ButtonProps> = (args: ButtonProps) => ({
	components: { PurityButton },
	setup() {
		return { args };
	},
	template: `<purity-button v-bind='args'>Click Me!</purity-button>`,
});

export const Default = Template.bind({});

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