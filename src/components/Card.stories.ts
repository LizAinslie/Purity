import type { Story } from '@storybook/vue3';
import PurityCard from './PurityCard.vue';
import type { CardProps } from './PurityCard.vue';

export default {
	title: 'Card',
	component: PurityCard,
	argTypes: {},
};

const Template : Story<CardProps> = (args: CardProps) => ({
	components: { PurityCard },
	setup() {
		return { args };
	},
	template: `
		<purity-card v-bind='args'>
			<template #header>
				Example card
			</template>
		</purity-card>
	`,
});

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.args = {
	dark: true,
};