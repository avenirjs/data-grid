import { newE2EPage } from '@stencil/core/testing';

describe('avn-data-grid-cell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<avn-data-grid-cell></avn-data-grid-cell>');

    const element = await page.find('avn-data-grid-cell');
    expect(element).toHaveClass('hydrated');
  });
});
