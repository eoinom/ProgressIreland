import type { Meta, StoryObj } from '@storybook/vue3';
import Job from './Job.vue';
import { Colours } from '../../types/coloursEnum';

const meta = {
  title: 'content/Job',
  component: Job as Record<keyof typeof Job, unknown>,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    bgColour: { control: 'select', options: Object.values(Colours) },
  },
} satisfies Meta<typeof Job>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bgColour: Colours.Transparent,
    title: 'Head of Science & Innovation Research',
    attributes: ['Dublin', 'Hybrid', 'Full Time'],
  },
};
