import type { Meta, StoryObj } from '@storybook/vue3';
import TextAreaInput from './TextAreaInput.vue';

const meta = {
  title: 'Forms/TextArea Input',
  component: TextAreaInput as Record<keyof typeof TextAreaInput, unknown>,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Name',
    rows: 4,
  },
} satisfies Meta<typeof TextAreaInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Message',
    rows: 3,
    onInput: (event: InputEvent) => {
      console.log('value: ', (event.target as HTMLInputElement).value);
    },
  },
};
