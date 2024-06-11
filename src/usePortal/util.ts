import type React from 'react';
import * as ReactDOM from 'react-dom';

// Let compiler not to search module usage
const fullClone = {
  ...ReactDOM,
} as any;

function toggleWarning(skip: boolean) {
  const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = fullClone;
  if (
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
    typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object'
  ) {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}

export function render(container: Element | DocumentFragment, children: React.ReactElement) {
  const reactVersion = ReactDOM.version;
  const majorVersion = parseInt(reactVersion.split('.')[0], 10);
  let unmount: () => void;

  if (majorVersion < 18) {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(children, container);
    unmount = () => {
      // eslint-disable-next-line react/no-deprecated
      ReactDOM.unmountComponentAtNode(container);
    };
  } else {
    toggleWarning(true);
    const root = fullClone.createRoot(container);
    toggleWarning(false);
    root.render(children);
    unmount = () => {
      // Delay to unmount to avoid React 18 sync warning
      Promise.resolve().then(() => root.unmount());
    };
  }

  return () => {
    unmount();
    container.parentNode?.removeChild(container);
  };
}
