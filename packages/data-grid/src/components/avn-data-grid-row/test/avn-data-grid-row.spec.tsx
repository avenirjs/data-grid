import { newSpecPage } from '@stencil/core/testing';
import { AvnDataGridRow } from '../avn-data-grid-row';

describe('avn-data-grid-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AvnDataGridRow],
      html: `<avn-data-grid-row></avn-data-grid-row>`,
    });
    expect(page.root).toEqualHtml(`
      <avn-data-grid-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </avn-data-grid-row>
    `);
  });
});
