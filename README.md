# ODB 3rd-party app template

In this repo, we're showcasing a basic setup of an app that uses the mui theme from our theming pipeline and some basic components that make use of our design token.

- **Paper**: Our wrapper of the MUI Paper.
- **Segment**: A segment is a block within a Paper where we can define a minHeight to improve the vertical flow of elements.
- **Text**: The Text component wraps MUI's Typography and adds the different variants that our design concept knows.
- **Link**: The Link component wraps MUI's Link component and makes use of our design token.
- **Button**: The Button component wraps MUI's Button component and makes use of our design token.
- **IconButton**: The IconButton wraps MUI's IconButton.

## Example with web components for handling layers.
In `src/examples` you'll find examples for integrating into our layer concept. There are several custom events that can be fired:
- opening of a layer
- navigating on a layer (replacing the currently open one)
- closing a layer
- closing all layers

Custom events can be triggered as follows:
```javascript
const event = new CustomEvent('OdbOpenLayer', {
  bubbles: true,
  detail: {
    layer: 'myCustomLayer',
  },
});
document.dispatchEvent(event);
```
For more, check out the mentioned examples.

This setup uses [rsbuild](https://rsbuild.dev/) to build the app, as this is a faster bundler than webpack but still supports module federation, which we heavily rely on. As we could imagine that we'd offer an integration into our ecosystem through module federation, we decided to use rsbuild right away in this template too.
