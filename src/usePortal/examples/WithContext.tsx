import React from 'react';
import { usePortal } from '@lemonied/use-portal';
import { Button, Space } from 'antd';
import ModalContent, { Context } from './ModalContentWithContext';

export default () => {

  const [renderPortal] = usePortal();
  const [renderPortal2, holder] = usePortal();

  return (
    <Context.Provider value="Hello World">
      {holder}
      <Space>
        <Button
          onClick={() => {
            const render = (open = true) => {
              renderPortal(
                <ModalContent
                  open={open}
                  title="modal without holder"
                  onCancel={() => render(false)}
                  afterClose={() => {
                    renderPortal(null);
                  }}
                >modal without holder</ModalContent>,
              );
            };
            render();
          }}
        >open without holder</Button>
        <Button
          onClick={() => {
            const render = (open = true) => {
              renderPortal2(
                <ModalContent
                  open={open}
                  title="modal with holder"
                  onCancel={() => render(false)}
                  afterClose={() => {
                    renderPortal2(null);
                  }}
                >modal with holder</ModalContent>,
              );
            };
            render();
          }}
        >open without holder</Button>
      </Space>
    </Context.Provider>
  );
};
