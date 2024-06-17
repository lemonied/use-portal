---
title: usePortal
---

## General Use

<code src="./examples/MountToDom.tsx"></code>

## Use with Antd Modal

<code src="./examples/WithAntdModal.tsx"></code>

## Get context

<code src="./examples/WithContext.tsx"></code>

## Types

```tsx | pure
type renderPortal = (node: React.ReactNode) => void;

type holder = React.ReactElement;

type usePortal = () => [renderPortal, holder];
```
