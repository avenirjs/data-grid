import { Component, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

/**
 * This component represents a row in an `avn-data-grid` component.
 */
@Component({
  tag: 'avn-data-grid-row',
  styleUrl: 'avn-data-grid-row.css',
  shadow: true,
})
export class AvnDataGridRow {
  @Element() el: HTMLAvnDataGridRowElement;

  /** Indicates whether the row is a heading row or not. */
  @Prop({ reflect: true }) heading: boolean = false;

  /** Indicates whether the row is currently selected or not. */
  @Prop({ reflect: true }) selected: boolean;

  /**
   * Emitted when a user clicks on a sortable cell to sort the grid by that column.
   * 
   * @event avnDataGridSorting
   * @composed true
   * @cancelable true
   * @bubbles true
   * @type {EventEmitter<{ cellIndex: number, direction: 'ascending' | 'descending' }>}
   */
  @Event({
    eventName: 'avnDataGridSorting',
    composed: true,
    cancelable: true,
    bubbles: true
  }) avnDataGridSorting: EventEmitter;

  private rowContainer: HTMLDivElement;

  private cells: HTMLAvnDataGridCellElement[] = [];

  connectedCallback() {
    this.sortColumn = this.sortColumn.bind(this);
  }

  componentDidLoad() {
    this.rowContainer = this.el.shadowRoot.querySelector('.row-container');
    const rowSlot = this.rowContainer.firstElementChild as HTMLSlotElement;

    this.cells = rowSlot.assignedElements() as HTMLAvnDataGridCellElement[];

    if (this.heading) {
      this.cells.forEach((cell) => {
        if (cell.sortable) {
          const sortingBtn = document.createElement('avn-data-grid-sorting-button');
          cell.append(sortingBtn);
        }
      });
    }

    this.rowContainer.addEventListener('click', this.sortColumn);
  }

  disconnectedCallback() {
    this.rowContainer.removeEventListener('click', this.sortColumn);
  }

  /**
   * Handles sorting of the grid by the clicked column.
   * 
   * @param {Event} event - The click event object.
   * @returns {void}
   */
  private sortColumn(event: Event): void {
    const cell = (event.target as HTMLElement).closest('avn-data-grid-cell') as HTMLAvnDataGridCellElement;

    if (!cell.sortable) return;

    this.cells
      .filter((cell) => cell.sortable)
      .filter((c) => c !== cell)
      .forEach((cell) => {
        const sortingBtn = cell.querySelector('avn-data-grid-sorting-button');
        sortingBtn.value = undefined;
      });

    const sortingBtn = cell.querySelector('avn-data-grid-sorting-button');

    this.avnDataGridSorting.emit({
      cellIndex: this.cells.findIndex((c) => c === cell),
      direction: sortingBtn.value
    });
  }

  render() {
    return (
      <Host>
        <div class='row-container'>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
