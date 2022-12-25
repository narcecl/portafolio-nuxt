import { shallowMount } from '@vue/test-utils';
import Button from './Button';

describe('Button', () => {
    test('Basic render', () => {
        const wrapper = shallowMount(Button, {
            stubs: ['font-awesome-icon']
        });
        expect(wrapper.exists()).toBe(true);
    });
});