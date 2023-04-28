# avn-data-grid-sorting-button



<!-- Auto Generated Below -->


## Overview

A button component for sorting data grid columns in ascending or descending order.

## Properties

| Property | Attribute | Description                                                        | Type              | Default     |
| -------- | --------- | ------------------------------------------------------------------ | ----------------- | ----------- |
| `value`  | `value`   | The current sorting direction, can be 'asc', 'desc', or undefined. | `"asc" \| "desc"` | `undefined` |


## Events

| Event                | Description                                                                   | Type                           |
| -------------------- | ----------------------------------------------------------------------------- | ------------------------------ |
| `avnDataGridSorting` | Triggered when the button is clicked, emitting the current sorting direction. | `CustomEvent<"asc" \| "desc">` |


## CSS Custom Properties

| Name                  | Description                             |
| --------------------- | --------------------------------------- |
| `--button-background` | Background colour to use for the button |
| `--button-padding`    | Padding that applies for the button     |
| `--button-radius`     | Radius for the button                   |


## Dependencies

### Used by

 - [avn-data-grid-row](../avn-data-grid-row)

### Graph
```mermaid
graph TD;
  avn-data-grid-row --> avn-data-grid-sorting-button
  style avn-data-grid-sorting-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
