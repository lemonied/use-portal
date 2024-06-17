import React from 'react';
import ReactDOM from 'react-dom';
import { usePortal } from '@lemonied/use-portal';

export default () => {
  const domRef = React.useRef<HTMLDivElement>(null);
  const [renderPortal] = usePortal();

  React.useEffect(() => {
    renderPortal(
      ReactDOM.createPortal(
        <div>Hello World</div>,
        domRef.current!,
      ),
    );
  }, [renderPortal]);

  return (
    <>
      <div ref={domRef} />
    </>
  );
};