import type { Meta, StoryObj } from '@storybook/react';
import { AvnDataGridCell, AvnDataGridCheckbox, AvnDataGridRadio } from 'data-grid-react';

const meta = {
  title: 'components/Cell',
  component: AvnDataGridCell,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} satisfies Meta<typeof AvnDataGridCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cell: Story = {
  render: ({ line }) => (
    <AvnDataGridCell line={line}>
      Text
    </AvnDataGridCell>
  ),
  args: {
    line: true
  },
};

export const CellWithRadio: Story = {
  render: ({ line }) => (
    <AvnDataGridCell line={line}>
      <AvnDataGridRadio checked={true}>
        Text
      </AvnDataGridRadio>
    </AvnDataGridCell>
  ),
  args: {
    line: true,
  },
};

export const CellWithCheckbox: Story = {
  render: ({ line }) => (
    <AvnDataGridCell line={line}>
      <AvnDataGridCheckbox checked={true}>
        Text
      </AvnDataGridCheckbox>
    </AvnDataGridCell>
  ),
  args: {
    line: true,
  },
};
