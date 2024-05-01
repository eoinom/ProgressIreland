import type { Meta, StoryObj } from '@storybook/vue3';
import Header from './HeaderMobile.vue';
import { headerLinks } from './headerLinks';

const meta = {
  title: 'Header/HeaderMobile',
  component: Header as Record<keyof typeof Header, unknown>,
  parameters: {
    layout: 'fullscreen',
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
