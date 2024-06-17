import React from 'react';

export function rootContainer(container: React.ReactElement) {
  if (process.env.NODE_ENV === 'production') {
    return container;
  }
  return React.createElement(React.StrictMode, null, container);
}
