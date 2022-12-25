import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import { state, getters, mutations } from '../../store/index';
import DarkMode from './DarkMode';

const localVue = createLocalVue();
localVue.use(Vuex);
// eslint-disable-next-line import/no-named-as-default-member
const store = new Vuex.Store({ state, mutations, getters });
const wrapper = shallowMount(DarkMode, {localVue, store, stubs: ['font-awesome-icon']});

describe('DarkMode', () => {
    test('Basic render', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Enable dark mode', async () => {
        const component = wrapper.vm;
        expect(wrapper.exists()).toBe(true);

        // Toggle dark mode
        component.toggleDarkMode();
        await component.$nextTick();
        const value = wrapper.find('#switch').element.value;
        expect(value).toBe('on');
    });
});