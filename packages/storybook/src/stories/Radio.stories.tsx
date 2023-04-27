import type { Meta, StoryObj } from '@storybook/react';
import { AvnDataGridRadio } from 'data-grid-react';

const meta = {
  title: 'components/Radio',
  component: AvnDataGridRadio,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} satisfies Meta<typeof AvnDataGridRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Radio: Story = {
  render: ({ checked }) => (
    <AvnDataGridRadio checked={checked}>
      Text
    </AvnDataGridRadio>
  ),
  args: {
    checked: true
  },
};
