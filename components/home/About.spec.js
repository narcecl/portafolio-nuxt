import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import { state, getters, actions, mutations } from '../../store/index';

import About from './About';

const viewport = jest.fn();
const localVue = createLocalVue();
localVue.use(Vuex);

// eslint-disable-next-line import/no-named-as-default-member
const store = new Vuex.Store({ state, mutations, actions, getters });

describe('About page', () => {
    test('Basic render', () => {
        const wrapper = shallowMount(About, {
            localVue,
            store,
            directives: {
                viewport
            },
            stubs: ['nuxt-img', 'font-awesome-icon', 'Social', 'Button', 'ClickToAction', 'LangList', 'Card', 'viewport']
        });
        const component = wrapper.vm;
        component.ga();
        expect(wrapper.exists()).toBe(true);
        expect(viewport).toHaveBeenCalled();
    });
});