import { newE2EPage } from '@stencil/core/testing';

describe('avn-data-grid-sorting-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<avn-data-grid-sorting-button></avn-data-grid-sorting-button>');

    const element = await page.find('avn-data-grid-sorting-button');
    expect(element).toHaveClass('hydrated');
  });
});
