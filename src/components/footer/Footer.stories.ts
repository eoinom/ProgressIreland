import type { Meta, StoryObj } from '@storybook/vue3';
import Footer from './Footer.vue';

const meta = {
  title: 'layout/Footer',
  component: Footer as Record<keyof typeof Footer, unknown>,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
