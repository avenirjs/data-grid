import { newE2EPage } from '@stencil/core/testing';

describe('avn-data-grid-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<avn-data-grid-row></avn-data-grid-row>');

    const element = await page.find('avn-data-grid-row');
    expect(element).toHaveClass('hydrated');
  });
});
