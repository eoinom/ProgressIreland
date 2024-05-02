import type { Meta, StoryObj } from '@storybook/vue3';
import SectionTwoColumn from './SectionTwoColumn.vue';
import Job from './Job.vue';

const meta = {
  title: 'content/SectionTwoColumn',
  component: SectionTwoColumn as Record<keyof typeof SectionTwoColumn, unknown>,
  parameters: {
    layout: 'padded',
    slots: {
      leftColumn: {
        description: 'Left Column Content',
        template: `Default left slot content`,
      },
      rightColumn: {
        description: 'Right Column Content',
        template: `Default right slot content`,
      },
    },
  },
  tags: ['autodocs'],
  // argTypes: {
  //   bgColour: { control: 'select', options: Object.values(Colours) },
  // },
} satisfies Meta<typeof SectionTwoColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MissionStatement: Story = {
  args: {
    title: 'Mission Statement',
  },
  parameters: {
    layout: 'padded',
    slots: {
      leftColumn: {
        template: `
        <h3 class="text-pi-heading-4 lg:text-pi-heading-3 text-charcoal-bright lg:max-w-[620px]">
          Cities have long served as engines for prosperity, innovation, culture
          and mobility.
        </h3>
        `,
      },
      rightColumn: {
        template: `
        <div
          class="flex flex-col lg:flex-row lg:gap-x-pi-20 mb-pi-15 lg:mb-pi-20"
        >
          <div class="w-full lg:w-1/3">
            <h4 class="text-pi-body-3-bold text-charcoal-bright">
              Introducing the Metropolitan Abundance Project.
            </h4>
          </div>
          <div class="w-full lg:w-2/3">
            <p class="text-pi-body-3-light text-charcoal-bright">
              A new policy center that will arm the urban wing of the abundance
              movement with the tools necessary to create the prosperous,
              vibrant, small-d democratic cities of the future.
            </p>
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row lg:gap-x-pi-20 mb-pi-15 lg:mb-pi-20"
        >
          <div class="w-full lg:w-1/3">
            <h4 class="text-pi-body-3-bold text-charcoal-bright">
              We believe cities are humanity's greatest invention.
            </h4>
          </div>
          <div class="w-full lg:w-2/3">
            <p class="text-pi-body-3-light text-charcoal-bright">
              But entrenched interests have been preventing America’s cities
              from realizing their full potential. We aim to break down the
              barriers that stop cities from building abundant housing, great
              transportation systems, and responsive and effective governments.
            </p>
          </div>
        </div>
        <div class="w-full">
          <p class="text-pi-body-3-light text-charcoal-bright">
            Stay tuned as for our forthcoming reports, events, communications
            tools, model legislation, and more.
          </p>
          <p class="text-pi-body-3-bold text-charcoal-bright">
            Read our introductory blog post here.
          </p>
        </div>
        `,
      },
    },
  },
};

export const MissionStatementWithActualContent: Story = {
  args: {
    title: 'Mission Statement',
  },
  parameters: {
    layout: 'padded',
    slots: {
      leftColumn: {
        template: `
        <h3 class="text-pi-heading-4 lg:text-pi-heading-3 text-charcoal-bright lg:max-w-[620px]">
        Building Irish capacity for the next stage of growth.
        </h3>
        `,
      },
      rightColumn: {
        template: `
        <div class="w-full">
          <p class="text-pi-body-3-light text-charcoal-bright">
          Ireland has enjoyed huge economic success in the past few decades. But the housing crisis and high infrastructure costs fuel worries about our international competitiveness. Progress Ireland exists to bring best-in-class policy solutions to the Irish sphere. We will share new ideas to help Ireland reach the next stage of growth.
          </p>
        </div>
        `,
      },
    },
  },
};

export const MeetOurTeamWithActualContent: Story = {
  args: {
    title: 'Our Staff',
  },
  parameters: {
    layout: 'padded',
    slots: {
      leftColumn: {
        template: `
        <h3 class="text-pi-heading-4 lg:text-pi-heading-3 text-charcoal-bright">
          Meet our team.
        </h3>
        `,
      },
      rightColumn: {
        components: { Job },
        template: `
        <Job title="Sean Keyes (Executive Director)" />
        <Job title="Sean McPartlin (Director of Housing Policy)" />
        <Job title="Luke Fehily (Director of Science and Innovation Policy)" />
        <Job title="Fergus McCullough (Director of Operations)" />
        `,
      },
    },
  },
};

export const Opportunities: Story = {
  args: {
    title: 'Opportunities',
  },
  parameters: {
    layout: 'padded',
    slots: {
      leftColumn: {
        template: `
        <h3 class="text-pi-heading-4 lg:text-pi-heading-3 text-charcoal-bright lg:max-w-[572px]">
          Help abundance advocates succeed nationwide.
        </h3>
        `,
      },
      rightColumn: {
        components: { Job },
        template: `
        <Job title="Head of Science & Innovation Research" :attributes="['Dublin', 'Hybrid', 'Full Time']" />
        <Job title="Housing Research Associate" :attributes="['Dublin', 'Remote only', 'Full Time']" />
        <Job title="Research Fellow" :attributes="['Dublin', 'Hybrid', 'Full Time']" />
        <Job title="Office Manager" :attributes="['Dublin', 'Office based', 'Full Time']" />
        `,
      },
    },
  },
};

export const OpportunitiesWithActualContent: Story = {
  args: {
    title: 'Opportunities',
  },
  parameters: {
    layout: 'padded',
    slots: {
      leftColumn: {
        template: `
        <h3 class="text-pi-heading-4 lg:text-pi-heading-3 text-charcoal-bright lg:max-w-[572px] mb-pi-15 lg:mb-pb-10">
          We're always on the lookout for talented policy experts to join our team.
        </h3>
        <p class="text-pi-body-3-bold text-charcoal-bright lg:max-w-[572px]">
          Click on the open roles or reach us at <a href="mailto:jobs@progressireland.org">jobs@progressireland.org.</a>
        </p>
        `,
      },
      rightColumn: {
        components: { Job },
        template: `
        <Job title="Senior Economist" :attributes="['Dublin', 'Hybrid', 'Full Time']" />
        <Job title="Design your own role" :attributes="['Dublin', 'Hybrid', 'Full Time']" />
        `,
      },
    },
  },
};
