import React from 'react';
import { createPortal } from 'react-dom';
import { Holder } from './Holder';
import type { HolderInstance } from './Holder';
import { render } from './util';

type ContainerType = DocumentFragment | Element;

const createDefaultFragment = () => {
  const container = document.createDocumentFragment();
  document.body.appendChild(container);
  return container;
};
const createServerDefaultFragment = () => {
  if (typeof window !== 'undefined') {
    return createDefaultFragment();
  }
};

export const usePortal = () => {

  const [portalContainer, setPortalContainer] = React.useState<ContainerType | void>(createServerDefaultFragment);
  const [rootContainer, setRootContainer] = React.useState<ContainerType | void>(createServerDefaultFragment);
  const rootHolderRef = React.useRef<HolderInstance>(null);
  const portalHolderRef = React.useRef<HolderInstance>(null);

  React.useEffect(() => {
    // Initialization, executed only once
    if (!portalContainer) {
      setPortalContainer(createDefaultFragment());
    }
    if (!rootContainer) {
      setRootContainer(createDefaultFragment());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const PortalHolder = React.useMemo(() => {
    if (!portalContainer) {
      return null;
    }
    return createPortal(
      <Holder ref={portalHolderRef} />,
      portalContainer,
    );
  }, [portalContainer]);

  const getHolderRef = React.useCallback(() => {
    return portalHolderRef.current ? portalHolderRef : rootHolderRef;
  }, []);

  const mount = React.useCallback((options: { portal?: ContainerType; root?: ContainerType }) => {
    const { portal, root } = options;
    if (portal) {
      setPortalContainer(portal);
    }
    if (root) {
      setRootContainer(root);
    }
  }, []);

  React.useEffect(() => {
    if (rootContainer) {
      return render(
        rootContainer,
        <Holder ref={rootHolderRef} />,
      );
    }
  }, [rootContainer]);

  return React.useMemo(() => {
    return {
      mount,
      holder: PortalHolder,
      getHolderRef,
    };
  }, [PortalHolder, getHolderRef, mount]);
};
