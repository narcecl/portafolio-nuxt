import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import { state, getters, mutations, actions } from '../../store/index';
import Experience from './Experience';

const viewport = jest.fn();
const scrollto = jest.fn();

const localVue = createLocalVue();
localVue.use(Vuex);
// eslint-disable-next-line import/no-named-as-default-member
const store = new Vuex.Store({ state, mutations, getters, actions });

describe('Experience page', () => {
    test('Basic render', async () => {
        const wrapper = shallowMount(Experience, {
            localVue,
            store,
            directives: { viewport, scrollto },
            stubs: ['nuxt-img', 'font-awesome-icon', 'Social', 'Button', 'ClickToAction', 'LangList', 'Card', 'viewport']
        });
        const component = wrapper.vm;
        expect(wrapper.exists()).toBe(true);
        component.ga();

        // Enable animation
        component.initExperience();
        await component.$nextTick();
        expect(wrapper.find('.experience-list').classes()).toContain('experience-list--ready');
    });
});