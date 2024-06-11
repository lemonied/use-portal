import React from 'react';
import { usePortal } from '@lemonied/use-portal';
import { Button, Space } from 'antd';
import ModalContent, { Context } from './ModalContentWithContext';

export default () => {

  const { getHolderRef } = usePortal();
  const { getHolderRef: getHolderRef2, holder } = usePortal();

  return (
    <Context.Provider value="Hello World">
      {holder}
      <Space>
        <Button
          onClick={() => {
            const holderRef = getHolderRef();
            const render = (open = true) => {
              holderRef.current?.setState(
                <ModalContent
                  open={open}
                  title="modal without holder"
                  onCancel={() => render(false)}
                  afterClose={() => {
                    holderRef.current?.setState(null);
                  }}
                >modal without holder</ModalContent>,
              );
            };
            render();
          }}
        >open without holder</Button>
        <Button
          onClick={() => {
            const holderRef = getHolderRef2();
            const render = (open = true) => {
              holderRef.current?.setState(
                <ModalContent
                  open={open}
                  title="modal with holder"
                  onCancel={() => render(false)}
                  afterClose={() => {
                    holderRef.current?.setState(null);
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
