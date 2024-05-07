import type { Meta, StoryObj } from '@storybook/vue3';
import SectionHero from './SectionHero.vue';

const meta = {
  title: 'content/SectionHero',
  component: SectionHero as Record<keyof typeof SectionHero, unknown>,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Unleashing the potential of Ireland.',
  },
};

export const ActualHeadline: Story = {
  args: {
    title: 'Helping Ireland reach its potential.',
  },
};
