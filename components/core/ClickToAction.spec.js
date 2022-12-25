import { mount } from '@vue/test-utils';
import ClickToAction from './ClickToAction';

describe('ClickToAction', () => {
    test('Basic render', () => {
        const wrapper = mount(ClickToAction, {
            stubs: ['font-awesome-icon']
        });
        expect(wrapper.exists()).toBe(true);
    });
});