import React from 'react';
import { render } from 'react-dom';
import CustomDetailLayer from './CustomDetailLayerWebComponent';
import DashboardElement from './DashboardElementWebComponent';
import NextStepLayer from './NextStepLayerWebComponent';

const registerWebComponents = () => {
  class CustomDetailLayerWebComponent extends HTMLElement {
    connectedCallback() {
      const root = document.createElement('div');

      this.appendChild(root);
      render(<CustomDetailLayer />, root);
    }
  }

  class DashboardElementWebComponent extends HTMLElement {
    connectedCallback() {
      const root = document.createElement('div');

      this.appendChild(root);
      render(<DashboardElement />, root);
    }
  }

  class NextStepLayerWebComponent extends HTMLElement {
    connectedCallback() {
      const root = document.createElement('div');

      this.appendChild(root);
      render(<NextStepLayer />, root);
    }
  }

  customElements.define('custom-detail-layer', CustomDetailLayerWebComponent);
  customElements.define('dashboard-element', DashboardElementWebComponent);
  customElements.define('next-step-layer', NextStepLayerWebComponent);
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'custom-detail-layer': any;
      'dashboard-element': any;
      'next-step-layer': any;
    }
  }
}

export default registerWebComponents;
