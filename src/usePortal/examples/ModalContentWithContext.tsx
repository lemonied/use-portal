import { Modal, type ModalProps } from 'antd';
import React from 'react';

export const Context = React.createContext('');

export default (props: ModalProps) => {

  const contextValue = React.useContext(Context);

  return (
    <Modal
      {...props}
    >
      {props.children}
      <div>ContextValue:{contextValue}</div>
    </Modal>
  );
};
