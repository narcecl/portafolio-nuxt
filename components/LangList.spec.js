import { shallowMount } from '@vue/test-utils';
import LangList from './LangList';

describe('LangList', () => {
    test('Basic render with options', () => {
        const wrapper = shallowMount(LangList, {
            propsData: {
                langs: ['Nuxt', 'Vue', 'HTML5', 'CSS3']
            },
            stubs: ['font-awesome-icon']
        });
        expect(wrapper.exists()).toBe(true);
    });

    test('Basic render empty', () => {
        const wrapper = shallowMount(LangList, {
            stubs: ['font-awesome-icon']
        });
        expect(wrapper.exists()).toBe(true);
    });
});