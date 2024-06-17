import React from 'react';
import { Button, Modal } from 'antd';
import { usePortal } from '@lemonied/use-portal';

export default () => {
  const [renderPortal] = usePortal();
  return (
    <>
      <Button
        onClick={() => {
          const render = (open = true) => {
            renderPortal(
              <Modal
                open={open}
                title="Use with antd Modal"
                onCancel={() => render(false)}
                afterClose={() => {
                  renderPortal(null);
                }}
              >Modal Content</Modal>,
            );
          };
          render();
        }}
      >Open Modal</Button>
    </>
  );
};