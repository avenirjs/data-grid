import { newSpecPage } from '@stencil/core/testing';
import { AvnDataGridCheckbox } from '../avn-data-grid-checkbox';

describe('avn-data-grid-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AvnDataGridCheckbox],
      html: `<avn-data-grid-checkbox></avn-data-grid-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <avn-data-grid-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </avn-data-grid-checkbox>
    `);
  });
});
