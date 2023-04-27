import { newSpecPage } from '@stencil/core/testing';
import { AvnDataGridRadio } from '../avn-data-grid-radio';

describe('avn-data-grid-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AvnDataGridRadio],
      html: `<avn-data-grid-radio></avn-data-grid-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <avn-data-grid-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </avn-data-grid-radio>
    `);
  });
});
