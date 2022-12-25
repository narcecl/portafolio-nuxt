import { shallowMount } from '@vue/test-utils';
import Card from './Card';

describe('Card', () => {
    test('Basic render', () => {
        const wrapper = shallowMount(Card, {
            stubs: ['font-awesome-icon']
        });
        expect(wrapper.exists()).toBe(true);
    });
});