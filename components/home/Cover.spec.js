import { shallowMount } from '@vue/test-utils';
import Cover from './Cover';

const viewport = jest.fn();
const scrollto = jest.fn();
jest.useFakeTimers();

describe('Cover page', () => {
    test('Basic render', async () => {
        const wrapper = shallowMount(Cover, {
            directives: {
                viewport, scrollto
            },
            stubs: ['nuxt-img', 'font-awesome-icon', 'Social', 'Button', 'ClickToAction', 'LangList', 'Card', 'Hero']
        });
        const component = wrapper.vm;
        expect(wrapper.exists()).toBe(true);

        await component.$nextTick();
        jest.advanceTimersByTime(5400);
    });
});