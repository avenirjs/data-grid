import { newSpecPage } from '@stencil/core/testing';
import { AvnDataGrid } from '../avn-data-grid';

describe('avn-data-grid', () => {
  it.skip('renders', async () => {
    const page = await newSpecPage({
      components: [AvnDataGrid],
      html: `<avn-data-grid></avn-data-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <avn-data-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </avn-data-grid>
    `);
  });
});
