import { newE2EPage } from '@stencil/core/testing';

describe('avn-data-grid-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<avn-data-grid-radio></avn-data-grid-radio>');

    const element = await page.find('avn-data-grid-radio');
    expect(element).toHaveClass('hydrated');
  });
});
