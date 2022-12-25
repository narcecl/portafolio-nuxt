import { mount } from '@vue/test-utils';
import Hero from './Hero';

describe('Hero', () => {
    test('Basic render', () => {
        const wrapper = mount(Hero);
        expect(wrapper.exists()).toBe(true);
    });
});