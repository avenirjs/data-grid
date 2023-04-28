import type { Meta } from '@storybook/react';
import { AvnDataGrid, AvnDataGridCell, AvnDataGridRow } from 'data-grid-react';

const meta = {
  title: 'example/Table',
  component: AvnDataGrid,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} satisfies Meta<typeof AvnDataGrid>;

export default meta;

export const Table = {
  render: ({ data }: any) => (
    <AvnDataGrid>
      {data.map(({ heading, cells }: any, index: number, arr: any) => (
        <AvnDataGridRow heading={heading}>
          {cells.map(({ label }: any) => (
            <AvnDataGridCell line={arr.length -1 !== index}>
              {label}
            </AvnDataGridCell>
          ))}
        </AvnDataGridRow>
      ))}
    </AvnDataGrid>
  ),
  args: {
    data: [
      {
        heading: true,
        cells: [
          {
            label: 'Operator'
          },
          {
            label: 'Headset Display'
          },
          {
            label: '3G Availability'
          },
        ]
      },
      {
        cells: [
          {
            label: '*Celcom Axiata (LTE)'
          },
          {
            label: 'CELCOM / My Celcom / 502 19'
          },
          {
            label: 'Yes'
          },
        ]
      },
      {
        cells: [
          {
            label: '*DiGi Telecom (LTE)'
          },
          {
            label: 'DiGi 1800 / DiGi / MYMY18'
          },
          {
            label: 'Yes'
          },
        ]
      },
      {
        cells: [
          {
            label: '*Maxis (LTE)'
          },
          {
            label: 'U Mobile / MYS 18 / MY 18'
          },
          {
            label: 'Yes'
          },
        ]
      },
      {
        cells: [
          {
            label: 'U Mobile (LTE)'
          },
          {
            label: 'U Mobile / MYS 18 / MY 18'
          },
          {
            label: 'Yes'
          },
        ]
      },
    ]
  },
};

export const TableWithSorting = {
  render: ({ data }: any) => (
    <AvnDataGrid>
      {data.map(({ heading, cells }: any, index: number, arr: any) => (
        <AvnDataGridRow heading={heading}>
          {cells.map(({ label }: any) => (
            <AvnDataGridCell line={arr.length -1 !== index} sortable={!!heading}>
              {label}
            </AvnDataGridCell>
          ))}
        </AvnDataGridRow>
      ))}
    </AvnDataGrid>
  ),
  args: {
    ...Table.args
  },
};

export const TableWithRadio = {
  render: ({ data }: any) => (
    <AvnDataGrid mode='single-select'>
      {data.map(({ heading, cells }: any, index: number, arr: any) => (
        <AvnDataGridRow heading={heading}>
          {cells.map(({ label }: any) => (
            <AvnDataGridCell line={arr.length -1 !== index}>
              {label}
            </AvnDataGridCell>
          ))}
        </AvnDataGridRow>
      ))}
    </AvnDataGrid>
  ),
  args: {
    data: [
      {
        heading: true,
        cells: [
          {
            label: 'Name'
          },
          {
            label: 'Mobile'
          },
          {
            label: 'Expiry'
          },
          {
            label: 'Penalty'
          },
        ]
      },
      {
        cells: [
          {
            label: 'Mavis Chen'
          },
          {
            label: '8899 7654'
          },
          {
            label: 'Dec 2022'
          },
          {
            label: '$600'
          },
        ]
      },
      {
        cells: [
          {
            label: 'Rodney Artichoke'
          },
          {
            label: '9988 7676'
          },
          {
            label: 'Dec 2022'
          },
          {
            label: '$300'
          },
        ]
      },
      {
        cells: [
          {
            label: 'Valentino Morose'
          },
          {
            label: '8900 7654'
          },
          {
            label: 'Dec 2022'
          },
          {
            label: '$300'
          },
        ]
      },
      {
        cells: [
          {
            label: 'Eric Widget'
          },
          {
            label: '8900 7654'
          },
          {
            label: 'Dec 2022'
          },
          {
            label: '$300'
          },
        ]
      },
    ]
  },
};

export const TableWithCheckbox = {
  render: ({ data }: any) => (
    <AvnDataGrid mode='multi-select'>
      {data.map(({ heading, cells }: any, index: number, arr: any) => (
        <AvnDataGridRow heading={heading}>
          {cells.map(({ label }: any) => (
            <AvnDataGridCell line={arr.length -1 !== index}>
              {label}
            </AvnDataGridCell>
          ))}
        </AvnDataGridRow>
      ))}
    </AvnDataGrid>
  ),
  args: {
    data: [
      {
        heading: true,
        cells: [
          {
            label: 'BRN'
          },
          {
            label: 'Company Name'
          },
        ]
      },
      {
        cells: [
          {
            label: '198702333K'
          },
          {
            label: 'Blue Ocean International'
          },
        ]
      },
      {
        cells: [
          {
            label: '198900364N'
          },
          {
            label: 'Red Electronics'
          },
        ]
      },
      {
        cells: [
          {
            label: '196700335H'
          },
          {
            label: 'Yellow Gaming'
          },
        ]
      },
      {
        cells: [
          {
            label: '196800306E'
          },
          {
            label: 'Purple Automobiles'
          },
        ]
      },
      {
        cells: [
          {
            label: '199131124V'
          },
          {
            label: 'Diamond Interiors Holdings'
          },
        ]
      },
      {
        cells: [
          {
            label: '200201664D'
          },
          {
            label: 'Omnichannel Solutions International'
          },
        ]
      },
    ]
  },
};
