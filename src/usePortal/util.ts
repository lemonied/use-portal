import type * as React from 'react';
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

export function render(container: Element | DocumentFragment, children: React.ReactElement, callback?: () => void) {
  const reactVersion = ReactDOM.version || '';
  const majorVersion = parseInt(reactVersion.split('.')[0], 10);
  let unmount: () => void;
  let createRoot: null | ((c: typeof container) => any) = null;

  if (majorVersion >= 18) {
    createRoot = fullClone.createRoot;
  }

  if (createRoot) {
    toggleWarning(true);
    const root = createRoot(container);
    toggleWarning(false);
    root.render(children);
    let resolve: () => void;
    let reject: () => void;
    new Promise<void>((_resolve, _reject) => {
      resolve = _resolve;
      reject = _reject;
    }).then(callback).catch(() => { /** ignore error */ });
    const timer = window.setTimeout(resolve!, 20);
    unmount = () => {
      window.clearTimeout(timer);
      reject();
      // Delay to unmount to avoid React 18 sync warning
      Promise.resolve().then(() => root.unmount());
    };
  } else {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(children, container, callback);
    unmount = () => {
      // eslint-disable-next-line react/no-deprecated
      ReactDOM.unmountComponentAtNode(container);
    };
  }

  return () => {
    unmount();
    container.parentNode?.removeChild(container);
  };
}

export function canUseDom() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}
