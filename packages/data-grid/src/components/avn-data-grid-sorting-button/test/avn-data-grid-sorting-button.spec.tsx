import { newSpecPage } from '@stencil/core/testing';
import { AvnDataGridSortingButton } from '../avn-data-grid-sorting-button';

describe('avn-data-grid-sorting-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AvnDataGridSortingButton],
      html: `<avn-data-grid-sorting-button></avn-data-grid-sorting-button>`,
    });
    expect(page.root).toEqualHtml(`
      <avn-data-grid-sorting-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </avn-data-grid-sorting-button>
    `);
  });
});
