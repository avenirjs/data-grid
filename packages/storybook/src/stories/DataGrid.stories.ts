import type { Meta, StoryObj } from '@storybook/react';
import { AvnDataGrid } from 'data-grid-react';

const meta = {
  title: 'components/DataGrid',
  component: AvnDataGrid,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} satisfies Meta<typeof AvnDataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DataGrid: Story = {
  args: {
    children: `Hello World!`
  },
};
