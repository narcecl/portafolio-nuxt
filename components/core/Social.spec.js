import { shallowMount } from '@vue/test-utils';
import Social from './Social';

describe('Social', () => {
    test('Basic render', () => {
        const wrapper = shallowMount(Social, {
            stubs: ['font-awesome-icon']
        });
        expect(wrapper.exists()).toBe(true);
    });
});