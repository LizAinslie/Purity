<template>
	<div class='modal-body'>
		<slot />
	</div>
</template>

<style scoped lang='scss'>
@import '../styles/vars';

.modal-body {
	&.dark {
		// todo: dark styles
	}

	background-color: $background-light-base;
	padding: $padding-2;
	flex-grow: 1;
}
</style>