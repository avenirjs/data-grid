import { Component, Host, Prop, h } from '@stencil/core';

/**
 * @description A custom checkbox component for an avn-data-grid
 * @slot - Default slot for content
 * @example
 * <avn-data-grid-checkbox checked={true}>Checked</avn-data-grid-checkbox>
 * <avn-data-grid-checkbox checked={false}>Unchecked</avn-data-grid-checkbox>
 */
@Component({
  tag: 'avn-data-grid-checkbox',
  styleUrl: 'avn-data-grid-checkbox.css',
  shadow: true,
})
export class AvnDataGridCheckbox {
  /**
   * @description The state of the checkbox (checked or unchecked)
   * @default false
   * @type {boolean}
   * @memberof AvnDataGridCheckbox
   */
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;

  render() {
    return (
      <Host>
        <input class="checkbox" type="checkbox" checked={this.checked} />
        <span class="checkmark" onClick={() => this.checked = !this.checked}></span>
        <label>
          <slot></slot>
        </label>
      </Host>
    );
  }

}
