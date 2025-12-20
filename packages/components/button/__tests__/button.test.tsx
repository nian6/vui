import { nextTick, ref } from 'vue';
import { mount } from '@vue/test-utils';

import Button from '../src/button.vue';
import ButtonGroup from '../src/button-group.vue';
import type { ButtonType, ButtonSize } from 'vui';

describe('Button.vue', () => {
  it('render', () => {
    const wrapper = mount(() => <Button />);
    expect(wrapper.classes()).toContain('v-button');
  });

  test('render text', () => {
    const text = 'default-slot-text';

    const wrapper = mount(() => (
      <Button
        v-slots={{
          default: () => text,
        }}
      />
    ));

    expect(wrapper.text()).toEqual(text);
  });

  it('type', () => {
    const wrapper = mount(() => <Button type="primary" />);
    expect(wrapper.classes()).toContain('v-button--primary');
  });

  it('size', () => {
    const wrapper = mount(() => <Button size="large" />);
    expect(wrapper.classes()).toContain('v-button--large');
  });

  it('plain', () => {
    const wrapper = mount(() => <Button plain />);
    expect(wrapper.classes()).toContain('is-plain');
  });

  it('round', () => {
    const wrapper = mount(() => <Button round />);
    expect(wrapper.classes()).toContain('is-round');
  });

  it('disabled', async () => {
    const disabled = ref(true);

    const wrapper = mount(() => <Button disabled={disabled.value} />);
    expect(wrapper.attributes('disabled')).toBeDefined();

    disabled.value = false;
    await nextTick();
    expect(wrapper.attributes('disabled')).toBeUndefined();
  });

  it('text', async () => {
    const bg = ref(false);

    const wrapper = mount(() => <Button text bg={bg.value} />);
    expect(wrapper.classes()).not.toContain('is-bg');
    expect(wrapper.classes()).toContain('is-text');

    bg.value = true;
    await nextTick();
    expect(wrapper.classes()).toContain('is-bg');
  });

  it('tag', () => {
    const link = '/';
    const text = 'Link';

    const wrapper = mount(() => (
      <Button tag="a" href={link}>
        {text}
      </Button>
    ));

    expect(wrapper.text()).toEqual(text);
    expect(wrapper.element.nodeName).toBe('A');
    expect(wrapper.attributes('href')).toBe(link);
  });
});

describe('ButtonGroup.vue', () => {
  it('render', () => {
    const wrapper = mount(() => (
      <ButtonGroup>
        <Button type="primary">Prev</Button>
        <Button type="primary">Next</Button>
      </ButtonGroup>
    ));
    expect(wrapper.classes()).toContain('v-button-group');
    expect(wrapper.findAll('button').length).toBe(2);
  });

  it('type', async () => {
    const type = ref<ButtonType>('primary');

    const wrapper = mount(() => (
      <ButtonGroup type={type.value}>
        <Button type="success">Prev</Button>
        <Button>Next</Button>
      </ButtonGroup>
    ));

    expect(wrapper.classes()).toContain('v-button-group');
    expect(
      wrapper.findAll('.v-button-group button.v-button--primary').length,
    ).toBe(1);
    expect(
      wrapper.findAll('.v-button-group button.v-button--success').length,
    ).toBe(1);

    type.value = 'info';
    await nextTick();
    expect(
      wrapper.findAll('.v-button-group button.v-button--info').length,
    ).toBe(1);
    expect(
      wrapper.findAll('.v-button-group button.v-button--success').length,
    ).toBe(1);
  });

  it('size', async () => {
    const size = ref<ButtonSize>('small');

    const wrapper = mount(() => (
      <ButtonGroup size={size.value}>
        <Button type="primary" size="small">
          Prev
        </Button>
        <Button type="primary" size="large">
          Next
        </Button>
      </ButtonGroup>
    ));

    expect(wrapper.classes()).toContain('v-button-group');
    expect(
      wrapper.findAll('.v-button-group button.v-button--small').length,
    ).toBe(2);

    size.value = 'large';
    await nextTick();
    expect(
      wrapper.findAll('.v-button-group button.v-button--large').length,
    ).toBe(2);
  });
});
