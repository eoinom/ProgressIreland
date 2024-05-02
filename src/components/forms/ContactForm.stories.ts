import type { Meta, StoryObj } from '@storybook/vue3';
import ContactForm from '../forms/ContactForm.vue';

const meta = {
  title: 'forms/Contact Form',
  component: ContactForm as Record<keyof typeof ContactForm, unknown>,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
