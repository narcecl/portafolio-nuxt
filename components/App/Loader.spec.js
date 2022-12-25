import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import { state, getters, mutations } from '../../store/index';

import AppLoader from './Loader';

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({ state, mutations, getters }); // eslint-disable-line import/no-named-as-default-member

describe('AppLoader', () => {
    test('Basic render', () => {
        const wrapper = shallowMount(AppLoader);
        expect(wrapper.exists()).toBe(true);
    });

    test('trigger start and finish method', async () => {
        const wrapper = shallowMount(AppLoader, {localVue, store});
        const component = wrapper.vm;
        expect(wrapper.exists()).toBe(true);

        // Trigger start and waits for re-render
        component.start();
        await component.$nextTick();

        // Check if HTML element is on DOM
        expect(wrapper.find('.loading').exists()).toBe(true);

        // Trigger finish
        component.finish();
        await component.$nextTick();
        expect(wrapper.find('.loading').exists()).toBe(false);
    });
});