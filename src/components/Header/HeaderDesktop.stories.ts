import type { Meta, StoryObj } from '@storybook/vue3';
import Header from './HeaderDesktop.vue';
import { headerLinks } from './headerLinks';

const meta = {
  title: 'Header',
  component: Header as Record<keyof typeof Header, unknown>,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: headerLinks,
  },
};
