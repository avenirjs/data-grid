import { Component, Element, Host, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'avn-data-grid',
  styleUrl: 'avn-data-grid.css',
  shadow: true,
})
export class AvnDataGrid {
  @Element() el: HTMLAvnDataGridElement;

  @Prop() mode: 'single-select' | 'multi-select' | undefined;

  @Listen('avnDataGridSorting')
  sortingHandler(event: CustomEvent) {
    const { cellIndex, direction } = event.detail;

    if (!direction) return;

    const sortedRowValues = [...this.initialRowState];

    sortedRowValues.sort((a, b) => {
      if (a.index === b.index) return 0;
      if (a.index === '0') return -1;
      if (b.index === '0') return 1;

      if (a.cells[cellIndex].value < b.cells[cellIndex].value) {
        return direction === 'asc' ? -1 : 1;
      } else if (a.cells[cellIndex].value > b.cells[cellIndex].value) {
        return direction === 'asc' ? 1 : -1;
      }

      return 0;
    });

    (this.gridContainer.firstElementChild as HTMLSlotElement).assignedElements().forEach((row, index) => {
      if (index !== 0) {
        Array.from(row.children).forEach((cell, idx) => {
          cell.textContent = sortedRowValues[index].cells[idx].value;
        });
      }
    });
  }

  private gridContainer: HTMLDivElement;

  private rows: HTMLAvnDataGridRowElement[] = [];

  private initialRowState = [];

  connectedCallback() {
    this.selectRow = this.selectRow.bind(this);
  }

  componentDidLoad() {
    this.gridContainer = this.el.shadowRoot.querySelector('.data-grid-container');
    const gridSlot = this.gridContainer.firstElementChild as HTMLSlotElement;

    this.rows = gridSlot.assignedElements() as HTMLAvnDataGridRowElement[];

    this.rows.forEach((row, index) => {
      row.dataset.index = String(index);

      if (this.mode === 'single-select') {
        const radioBtn = document.createElement('avn-data-grid-radio');

        if (index === 0) {
          radioBtn.style.visibility = 'collapse';
        }

        row.firstElementChild.prepend(radioBtn);
      } else if (this.mode === 'multi-select') {
        const checkboxBtn = document.createElement('avn-data-grid-checkbox');
        row.firstElementChild.prepend(checkboxBtn);
      }
    });

    this.initialRowState = [...this.rows].map((row) => ({
      index: row.dataset.index,
      cells: Array.from(row.children).map((cell) => ({
        value: cell.textContent
      }))
    }));

    this.gridContainer.addEventListener('click', this.selectRow);
  }

  disconnectedCallback() {
    this.gridContainer.removeEventListener('click', this.selectRow);
  }

  private selectRow(event: Event): void {
    const row = (event.target as HTMLElement).closest('avn-data-grid-row') as HTMLAvnDataGridRowElement;

    if (this.mode === 'single-select') {
      if (row.heading) return;

      this.rows.forEach((r) => {
        const c = r.querySelector('avn-data-grid-cell');
        const rBtn = c.querySelector('avn-data-grid-radio');

        r.selected = false;
        rBtn.checked = false;
      });

      const cell = row.querySelector('avn-data-grid-cell');
      const radioBtn = cell.querySelector('avn-data-grid-radio');

      radioBtn.checked = !radioBtn.checked;

      row.selected = radioBtn.checked;
    }

    if (this.mode === 'multi-select') {
      const cell = row.querySelector('avn-data-grid-cell');
      const checkbox = cell.querySelector('avn-data-grid-checkbox');

      checkbox.checked = !checkbox.checked;
      row.selected = checkbox.checked;

      if (row.heading) {
        const rowsWithoutHeader = [, ...this.rows];
        rowsWithoutHeader.forEach((r) => {
          const c = r.querySelector('avn-data-grid-cell');
          const cBtn = c.querySelector('avn-data-grid-checkbox');
  
          r.selected = !row.selected;
          cBtn.checked = !row.selected;
        });
      } else {
        const [headingRow] = this.rows;
        const hCell = headingRow.querySelector('avn-data-grid-cell');
        const hCheckboxBtn = hCell.querySelector('avn-data-grid-checkbox');

        headingRow.selected = false;
        hCheckboxBtn.checked = false;
      }
    }
  }

  render() {
    return (
      <Host>
        <div class="data-grid-container">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
