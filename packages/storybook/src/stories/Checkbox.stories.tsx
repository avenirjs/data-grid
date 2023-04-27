import type { Meta, StoryObj } from '@storybook/react';
import { AvnDataGridCheckbox } from 'data-grid-react';

const meta = {
  title: 'components/Checkbox',
  component: AvnDataGridCheckbox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} satisfies Meta<typeof AvnDataGridCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  render: ({ checked }) => (
    <AvnDataGridCheckbox checked={checked}>
      Text
    </AvnDataGridCheckbox>
  ),
  args: {
    checked: true
  },
};
