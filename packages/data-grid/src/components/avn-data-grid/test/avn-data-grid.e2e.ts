import { newE2EPage } from '@stencil/core/testing';

describe('avn-data-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<avn-data-grid></avn-data-grid>');

    const element = await page.find('avn-data-grid');
    expect(element).toHaveClass('hydrated');
  });
});
