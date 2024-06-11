import React from 'react';

export interface HolderInstance {
  state: React.ReactNode;
  setState: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

const HolderFC = React.forwardRef<HolderInstance>((_, ref) => {

  const [state, setState] = React.useState<React.ReactNode>();

  React.useImperativeHandle(ref, () => {
    return { state, setState };
  }, [state, setState]);

  return (
    <>{state}</>
  );
});

export const Holder = React.memo(HolderFC);
