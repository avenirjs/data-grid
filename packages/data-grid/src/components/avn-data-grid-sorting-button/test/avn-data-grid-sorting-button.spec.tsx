import { newSpecPage } from '@stencil/core/testing';
import { AvnDataGridSortingButton } from '../avn-data-grid-sorting-button';

describe('avn-data-grid-sorting-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AvnDataGridSortingButton],
      html: `<avn-data-grid-sorting-button></avn-data-grid-sorting-button>`,
    });
    expect(page.root).toEqualHtml(`
      <avn-data-grid-sorting-button>
        <mock:shadow-root>
          <button>
            <svg fill="none" height="22" viewBox="0 0 20 34" width="12" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" d="M9.05718 0.93934C9.57788 0.353554 10.4221 0.353554 10.9428 0.93934L19.4281 10.4853C19.9488 11.0711 19.9488 12.0208 19.4281 12.6066C18.9074 13.1924 18.0632 13.1924 17.5425 12.6066L11.3333 5.62132L11.3333 28.3787L17.5425 21.3934C18.0632 20.8076 18.9074 20.8076 19.4281 21.3934C19.9488 21.9792 19.9488 22.9289 19.4281 23.5147L10.9428 33.0607C10.4221 33.6464 9.57788 33.6464 9.05718 33.0607L0.571898 23.5147C0.0511997 22.9289 0.0511996 21.9792 0.571898 21.3934C1.0926 20.8076 1.93682 20.8076 2.45752 21.3934L8.66666 28.3787L8.66665 5.62132L2.45752 12.6066C1.93682 13.1924 1.0926 13.1924 0.571898 12.6066C0.0511993 12.0208 0.0511993 11.0711 0.571898 10.4853L9.05718 0.93934Z" fill="#222222" fill-rule="evenodd"></path>
            </svg>
          </button>
        </mock:shadow-root>
      </avn-data-grid-sorting-button>
    `);
  });
});
