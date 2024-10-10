import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import registerWebComponents from './examples/register-web-components';

registerWebComponents();

const rootElement = document.querySelector('#thirdpartyapp');
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(<App />);
}
