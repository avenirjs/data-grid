import { newE2EPage } from '@stencil/core/testing';

describe('avn-data-grid-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<avn-data-grid-checkbox></avn-data-grid-checkbox>');

    const element = await page.find('avn-data-grid-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
