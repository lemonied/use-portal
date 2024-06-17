import React from 'react';
import { createPortal } from 'react-dom';
import { Holder } from './Holder';
import type { HolderInstance } from './Holder';
import { render, canUseDom } from './util';

export const usePortal = () => {

  const [container, setContainer] = React.useState<DocumentFragment | void>(() => {
    if (canUseDom()) {
      return document.createDocumentFragment();
    }
  });
  const rootHolderRef = React.useRef<HolderInstance>(null);
  const portalHolderRef = React.useRef<HolderInstance>(null);
  const stateRef = React.useRef<React.ReactNode>(null);

  const holder = React.useMemo(() => {
    if (!container) return null;
    return createPortal(
      <Holder ref={portalHolderRef} />,
      container,
    );
  }, [container]);

  const renderPortal = React.useCallback((state: React.ReactNode | ((pre: React.ReactNode) => React.ReactNode)) => {
    const nextState = typeof state === 'function' ? state(stateRef.current) : state;
    stateRef.current = nextState;
    if (portalHolderRef.current) {
      portalHolderRef.current.setState(nextState);
      rootHolderRef.current?.setState(null);
    } else {
      rootHolderRef.current?.setState(nextState);
    }
  }, []);

  React.useEffect(() => {
    // Initialization, executed only once
    if (!container) {
      setContainer(document.createDocumentFragment());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    return render(
      document.createDocumentFragment(),
      <Holder ref={rootHolderRef} />,
      () => {
        renderPortal(stateRef.current);
      },
    );
  }, [renderPortal]);

  return React.useMemo(() => {
    return [renderPortal, holder] as const;
  }, [holder, renderPortal]);
};
