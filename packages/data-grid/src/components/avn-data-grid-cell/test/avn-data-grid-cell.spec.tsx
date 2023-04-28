import { newSpecPage } from '@stencil/core/testing';
import { AvnDataGridCell } from '../avn-data-grid-cell';

describe('avn-data-grid-cell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AvnDataGridCell],
      html: `<avn-data-grid-cell></avn-data-grid-cell>`,
    });
    expect(page.root).toEqualHtml(`
      <avn-data-grid-cell>
        <mock:shadow-root>
          <div class="cell-container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </avn-data-grid-cell>
    `);
  });
});
