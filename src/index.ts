import * as components from './components';
import './styles/base.scss';

import type { App, Component, Plugin } from 'vue';

const plugin: Plugin = {
    install (vue: App) {
        // fuck you ts
        const componentsTyped = components as {[prop: string]: Component}
        for (const prop in componentsTyped) {
            const component = componentsTyped[prop];
            vue.component(component.name || prop, component);
        }
    },
};

export default plugin;
