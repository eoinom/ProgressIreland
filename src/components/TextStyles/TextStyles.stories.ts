import type { Meta, StoryObj } from '@storybook/vue3';
import TextStyles from './TextStyles.vue';

const meta = {
  title: 'Text Styles',
  component: TextStyles as Record<keyof typeof TextStyles, unknown>,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextStyles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {};
