import { Component, Event, EventEmitter, Host, Prop, State, Watch, h } from '@stencil/core';

/**
 * A button component for sorting data grid columns in ascending or descending order.
 * @tag avn-data-grid-sorting-button
 * @style avn-data-grid-sorting-button.css
 * @shadow true
 */
@Component({
  tag: 'avn-data-grid-sorting-button',
  styleUrl: 'avn-data-grid-sorting-button.css',
  shadow: true,
})
export class AvnDataGridSortingButton {
  /**
   * The current sorting direction, can be 'asc', 'desc', or undefined.
   * @prop {boolean} mutable
   * @prop {boolean} reflect
   */
  @Prop({ mutable: true, reflect: true }) value: 'asc' | 'desc' | undefined;

  /**
   * Update the direction of sorting.
   * @param {string} newValue - The new sorting direction.
   */
  @Watch('value')
  updateDirection(newValue: 'asc' | 'desc' | undefined) {
    this.direction = newValue;
  }

  /**
   * The current sorting direction, can be 'asc', 'desc', or undefined.
   * @state {boolean}
   */
  @State() direction: 'asc' | 'desc' | undefined;

  /**
   * Triggered when the button is clicked, emitting the current sorting direction.
   * @event avnDataGridSorting
   * @composed true
   * @cancelable true
   * @bubbles true
   */
  @Event({
    eventName: 'avnDataGridSorting',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) avnDataGridSorting: EventEmitter<'asc' | 'desc'>;
  sortingHandler() {
    this.avnDataGridSorting.emit(this.direction);
  }

  connectedCallback() {
    this.toggleDirection = this.toggleDirection.bind(this);
  }

  private toggleDirection() {
    this.direction = this.direction !== 'asc' ? 'asc' : 'desc';
    this.value = this.direction;
  }

  render() {
    return (
      <Host>
        <button onClick={this.toggleDirection}>
          {this.direction === 'asc' && (
            <svg width="12" height="22" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9393 0.93934C11.5251 0.353554 12.4748 0.353554 13.0606 0.93934L22.6066 10.4853C23.1923 11.0711 23.1923 12.0208 22.6066 12.6066C22.0208 13.1924 21.071 13.1924 20.4852 12.6066L13.5 5.62132L13.5 32C13.5 32.8284 12.8284 33.5 12 33.5C11.1715 33.5 10.5 32.8284 10.5 32L10.5 5.62132L3.51468 12.6066C2.92889 13.1924 1.97914 13.1924 1.39336 12.6066C0.80757 12.0208 0.80757 11.0711 1.39336 10.4853L10.9393 0.93934Z" fill="#222222"/>
            </svg>
          )}

          {this.direction === 'desc' && (
            <svg width="12" height="22" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6066 23.5147L13.0606 33.0607C12.4748 33.6464 11.5251 33.6464 10.9393 33.0607L1.39336 23.5147C0.80757 22.9289 0.80757 21.9792 1.39336 21.3934C1.97914 20.8076 2.92889 20.8076 3.51468 21.3934L10.5 28.3787L10.5 2C10.5 1.17157 11.1715 0.5 12 0.5C12.8284 0.5 13.5 1.17157 13.5 2L13.5 28.3787L20.4852 21.3934C21.071 20.8076 22.0208 20.8076 22.6066 21.3934C23.1923 21.9792 23.1923 22.9289 22.6066 23.5147Z" fill="#222222"/>
            </svg>
          )}

          {!this.direction && (
            <svg width="12" height="22" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.05718 0.93934C9.57788 0.353554 10.4221 0.353554 10.9428 0.93934L19.4281 10.4853C19.9488 11.0711 19.9488 12.0208 19.4281 12.6066C18.9074 13.1924 18.0632 13.1924 17.5425 12.6066L11.3333 5.62132L11.3333 28.3787L17.5425 21.3934C18.0632 20.8076 18.9074 20.8076 19.4281 21.3934C19.9488 21.9792 19.9488 22.9289 19.4281 23.5147L10.9428 33.0607C10.4221 33.6464 9.57788 33.6464 9.05718 33.0607L0.571898 23.5147C0.0511997 22.9289 0.0511996 21.9792 0.571898 21.3934C1.0926 20.8076 1.93682 20.8076 2.45752 21.3934L8.66666 28.3787L8.66665 5.62132L2.45752 12.6066C1.93682 13.1924 1.0926 13.1924 0.571898 12.6066C0.0511993 12.0208 0.0511993 11.0711 0.571898 10.4853L9.05718 0.93934Z" fill="#222222"/>
            </svg>
          )}
        </button>
      </Host>
    );
  }

}
