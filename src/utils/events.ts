interface LayerConfig {
  layer: string;
  layerOnRefresh?: string;
  props?: object;
}

export const openLayer = (layerConfig: LayerConfig) => {
  const openLayerEvent = new CustomEvent('OdbOpenLayer', {
    bubbles: true,
    detail: {
      layer: layerConfig.layer,
      layerOnRefresh: layerConfig.layerOnRefresh,
      props: layerConfig.props,
    },
  });
  document.dispatchEvent(openLayerEvent);
};

export const navigateOnLayer = (layerConfig: LayerConfig) => {
  const navigateOnLayerEvent = new CustomEvent('OdbNavigateOnLayer', {
    bubbles: true,
    detail: {
      layer: layerConfig.layer,
      layerOnRefresh: layerConfig.layerOnRefresh,
      props: layerConfig.props,
    },
  });
  document.dispatchEvent(navigateOnLayerEvent);
};

export const closeLayer = () => {
  const closeLayerEvent = new CustomEvent('OdbCloseLayer', {
    bubbles: true,
  });
  document.dispatchEvent(closeLayerEvent);
};

export const closeAllLayers = () => {
  const closeAllLayersEvent = new CustomEvent('OdbCloseAllLayers', {
    bubbles: true,
  });
  document.dispatchEvent(closeAllLayersEvent);
};
