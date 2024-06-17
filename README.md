# @lemonied/use-portal

[![NPM version](https://img.shields.io/npm/v/@lemonied/use-portal.svg?style=flat)](https://npmjs.org/package/@lemonied/use-portal)
[![NPM downloads](http://img.shields.io/npm/dm/@lemonied/use-portal.svg?style=flat)](https://npmjs.org/package/@lemonied/use-portal)

## Install
```bash
npm install @lemonied/use-portal
```

## Usage

### General Use

```tsx
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
```

### Use with antd Modal

```tsx
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
```

## Options

```tsx
type renderPortal = (node: React.ReactNode) => void;

type holder = React.ReactElement;

type usePortal = () => [renderPortal, holder] as const;
```

## Development

```bash
# install dependencies
$ npm install

# develop library by docs demo
$ npm start

# build library source code
$ npm run build

# build library source code in watch mode
$ npm run build:watch

# build docs
$ npm run docs:build

# Locally preview the production build.
$ npm run docs:preview

# check your project for potential problems
$ npm run doctor
```

## LICENSE

MIT
