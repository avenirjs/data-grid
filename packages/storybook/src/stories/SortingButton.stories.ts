import type { Meta, StoryObj } from '@storybook/react';
import { AvnDataGridSortingButton } from 'data-grid-react';

const meta = {
  title: 'components/SortingButton',
  component: AvnDataGridSortingButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    direction: {
      options: ['asc', 'desc', undefined],
      control: { type: 'radio' }
    }
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} satisfies Meta<typeof AvnDataGridSortingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SortingButton: Story = {
  args: {
    direction: 'asc'
  },
};
