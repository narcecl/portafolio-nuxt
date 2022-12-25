import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import { state, getters, mutations, actions } from '../../store/index';
import Projects from './Projects';

const viewport = jest.fn();
const scrollto = jest.fn();

const localVue = createLocalVue();
localVue.use(Vuex);
// eslint-disable-next-line import/no-named-as-default-member
const store = new Vuex.Store({ state, mutations, getters, actions });

describe('Projects page', () => {
    test('Basic render', () => {
        const wrapper = shallowMount(Projects, {
            localVue,
            store,
            directives: {
                viewport, scrollto
            },
            stubs: ['nuxt-img', 'font-awesome-icon', 'Social', 'Button', 'ClickToAction', 'LangList', 'Card', 'viewport']
        });
        const component = wrapper.vm;
        expect(wrapper.exists()).toBe(true);
        component.ga();
    });
});