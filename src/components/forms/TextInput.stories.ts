import type { Meta, StoryObj } from '@storybook/vue3';
import TextInput from './TextInput.vue';

const meta = {
  title: 'Forms/Text Input',
  component: TextInput as Record<keyof typeof TextInput, unknown>,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Name',
    onInput: (event: InputEvent) => {
      console.log('value: ', (event.target as HTMLInputElement).value);
    },
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'E-mail Address',
    onInput: (event: InputEvent) => {
      console.log('value: ', (event.target as HTMLInputElement).value);
    },
  },
};

export const TextArea: Story = {
  args: {
    type: 'text-area',
    placeholder: 'Message',
    onInput: (event: InputEvent) => {
      console.log('value: ', (event.target as HTMLInputElement).value);
    },
    rows: 3,
  },
};
