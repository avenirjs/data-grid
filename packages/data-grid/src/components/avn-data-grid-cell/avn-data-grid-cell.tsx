import { Component, Host, Prop, h } from '@stencil/core';

/**
 * Represents a single cell in an AvnDataGrid.
 */
@Component({
  tag: 'avn-data-grid-cell',
  styleUrl: 'avn-data-grid-cell.css',
  shadow: true,
})
export class AvnDataGridCell {
  /**
   * Indicates whether the cell should display a horizontal line separator.
   */
  @Prop() line: boolean;

  /**
   * Indicates whether the column is sortable.
   */
  @Prop() sortable: boolean;

  render() {
    return (
      <Host>
        <div class="cell-container">
          <slot />
        </div>
      </Host>
    );
  }

}
