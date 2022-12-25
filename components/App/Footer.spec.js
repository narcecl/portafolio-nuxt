import { shallowMount } from '@vue/test-utils';
import AppFooter from './Footer';

describe('AppFooter', () => {
    test('Basic render', () => {
        const wrapper = shallowMount(AppFooter, {
            stubs: ['DarkMode', 'Social'],
            components: {},
        });
        expect(wrapper.exists()).toBe(true);
    });
});