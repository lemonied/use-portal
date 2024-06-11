import React from 'react';
import { createPortal } from 'react-dom';
import { Holder } from './Holder';
import type { HolderInstance } from './Holder';
import { render, canUseDom } from './util';

type ContainerType = DocumentFragment | Element;

interface ContainerGroup {
  portal: ContainerType;
  root: ContainerType;
}

const createDefaultFragment = () => {
  const container = document.createDocumentFragment();
  document.body.appendChild(container);
  return container;
};

export const usePortal = () => {

  const [defaultContainer, setDefaultContainer] = React.useState<ContainerGroup | void>(() => {
    if (canUseDom()) {
      // Non-SSR mode
      return {
        portal: createDefaultFragment(),
        root: createDefaultFragment(),
      };
    }
  });
  const [container, setContainer] = React.useState<ContainerGroup>();
  const rootHolderRef = React.useRef<HolderInstance>(null);
  const portalHolderRef = React.useRef<HolderInstance>(null);

  const PortalHolder = React.useMemo(() => {
    const mergedPortalContainer = container?.portal ?? defaultContainer?.portal;
    if (!mergedPortalContainer) {
      return null;
    }
    return createPortal(
      <Holder ref={portalHolderRef} />,
      mergedPortalContainer,
    );
  }, [container?.portal, defaultContainer?.portal]);

  const getHolderRef = React.useCallback(() => {
    return portalHolderRef.current ? portalHolderRef : rootHolderRef;
  }, []);

  const mount = React.useCallback((options: Partial<ContainerGroup>) => {
    setContainer(pre => Object.assign({}, pre, options));
  }, []);

  React.useEffect(() => {
    // Initialization, executed only once
    if (!defaultContainer) {
      setDefaultContainer({
        portal: createDefaultFragment(),
        root: createDefaultFragment(),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const mergedRootContainer = container?.root ?? defaultContainer?.root;
    if (mergedRootContainer) {
      return render(
        mergedRootContainer,
        <Holder ref={rootHolderRef} />,
      );
    }
  }, [container?.root, defaultContainer?.root]);

  return React.useMemo(() => {
    return {
      mount,
      holder: PortalHolder,
      getHolderRef,
    };
  }, [PortalHolder, getHolderRef, mount]);
};
