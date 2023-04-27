import { Component, Host, Prop, h } from '@stencil/core';

/**
 * @description A custom radio button component for use in an Avanade data grid.
 * @slot - The content to be displayed inside the radio button label.
 * @example
 * <avn-data-grid-radio checked={true}>Radio Button Label</avn-data-grid-radio>
 */
@Component({
  tag: 'avn-data-grid-radio',
  styleUrl: 'avn-data-grid-radio.css',
  shadow: true,
})
export class AvnDataGridRadio {
  /**
   * @description Indicates whether the radio button is checked or not.
   * @default false
   * @type boolean
   * @mutable
   * @reflect
   */
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;

  render() {
    return (
      <Host>
        <input class="radio" type="radio" checked={this.checked} />
        <span class="checkmark" onClick={() => this.checked = !this.checked}></span>
        <label>
          <slot></slot>
        </label>
      </Host>
    );
  }

}
