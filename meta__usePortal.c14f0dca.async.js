"use strict";(self.webpackChunk_lemonied_use_portal=self.webpackChunk_lemonied_use_portal||[]).push([[883],{71823:function(P,t,n){n.r(t),n.d(t,{demos:function(){return p}});var f=n(15009),r=n.n(f),o=n(99289),a=n.n(o),l=n(67294),p={"src-use-portal-demo-mounttodom":{component:l.memo(l.lazy(function(){return n.e(433).then(n.bind(n,9805))})),asset:{type:"BLOCK",id:"src-use-portal-demo-mounttodom",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(39876).Z},react:{type:"NPM",value:"18.3.1"},"react-dom":{type:"NPM",value:"18.3.1"},"@lemonied/use-portal":{type:"NPM",value:"0.0.2"}},entry:"index.tsx"},context:{react:n(67294),"react-dom":n(73935),"@lemonied/use-portal":n(73408)},renderOpts:{compile:function(){var d=a()(r()().mark(function C(){var m,E=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(19).then(n.bind(n,4019));case 2:return e.abrupt("return",(m=e.sent).default.apply(m,E));case 3:case"end":return e.stop()}},C)}));function s(){return d.apply(this,arguments)}return s}()}},"src-use-portal-demo-withantdmodal":{component:l.memo(l.lazy(function(){return n.e(433).then(n.bind(n,42731))})),asset:{type:"BLOCK",id:"src-use-portal-demo-withantdmodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(47202).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.18.1"},"@lemonied/use-portal":{type:"NPM",value:"0.0.2"}},entry:"index.tsx"},context:{react:n(67294),antd:n(62141),"@lemonied/use-portal":n(73408)},renderOpts:{compile:function(){var d=a()(r()().mark(function C(){var m,E=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(19).then(n.bind(n,4019));case 2:return e.abrupt("return",(m=e.sent).default.apply(m,E));case 3:case"end":return e.stop()}},C)}));function s(){return d.apply(this,arguments)}return s}()}},"src-use-portal-demo-withcontext":{component:l.memo(l.lazy(function(){return n.e(433).then(n.bind(n,86989))})),asset:{type:"BLOCK",id:"src-use-portal-demo-withcontext",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(61679).Z},react:{type:"NPM",value:"18.3.1"},"@lemonied/use-portal":{type:"NPM",value:"0.0.2"},antd:{type:"NPM",value:"5.18.1"},"./ModalContentWithContext.tsx":{type:"FILE",value:n(23970).Z}},entry:"index.tsx"},context:{react:n(67294),"@lemonied/use-portal":n(73408),antd:n(62141),"./ModalContentWithContext.tsx":n(79863)},renderOpts:{compile:function(){var d=a()(r()().mark(function C(){var m,E=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(19).then(n.bind(n,4019));case 2:return e.abrupt("return",(m=e.sent).default.apply(m,E));case 3:case"end":return e.stop()}},C)}));function s(){return d.apply(this,arguments)}return s}()}}}},73408:function(P,t,n){n.r(t),n.d(t,{usePortal:function(){return f.v}});var f=n(15583)},79863:function(P,t,n){n.r(t),n.d(t,{Context:function(){return p}});var f=n(97857),r=n.n(f),o=n(85576),a=n(67294),l=n(85893),p=a.createContext("");t.default=function(d){var s=a.useContext(p);return(0,l.jsxs)(o.Z,r()(r()({},d),{},{children:[d.children,(0,l.jsxs)("div",{children:["ContextValue:",s]})]}))}},15583:function(P,t,n){n.d(t,{v:function(){return N}});var f=n(5574),r=n.n(f),o=n(67294),a=n(73935),l=n.t(a,2),p=n(85893),d=o.forwardRef(function(v,i){var M=o.useState(),h=r()(M,2),R=h[0],c=h[1];return o.useImperativeHandle(i,function(){return{state:R,setState:c}},[R,c]),(0,p.jsx)(p.Fragment,{children:R})}),s=o.memo(d),C=n(52677),m=n.n(C),E=n(97857),S=n.n(E),e=S()({},l);function B(v){var i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;i&&m()(i)==="object"&&(i.usingClientEntryPoint=v)}function T(v,i,M){var h=a.version||"",R=parseInt(h.split(".")[0],10),c,y=null;if(R>=18&&(y=e.createRoot),y){B(!0);var O=y(v);B(!1),O.render(i);var D,x;new Promise(function(u,j){D=u,x=j}).then(M).catch(function(){});var I=window.setTimeout(D,20);c=function(){window.clearTimeout(I),x(),Promise.resolve().then(function(){return O.unmount()})}}else a.render(i,v,M),c=function(){a.unmountComponentAtNode(v)};return function(){var u;c(),(u=v.parentNode)===null||u===void 0||u.removeChild(v)}}function g(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}var N=function(){var i=o.useState(function(){if(g())return document.createDocumentFragment()}),M=r()(i,2),h=M[0],R=M[1],c=o.useRef(null),y=o.useRef(null),O=o.useRef(null),D=o.useMemo(function(){return h?(0,a.createPortal)((0,p.jsx)(s,{ref:y}),h):null},[h]),x=o.useCallback(function(I){var u=typeof I=="function"?I(O.current):I;if(O.current=u,y.current){var j;y.current.setState(u),(j=c.current)===null||j===void 0||j.setState(null)}else{var L;(L=c.current)===null||L===void 0||L.setState(u)}},[]);return o.useEffect(function(){h||R(document.createDocumentFragment())},[]),o.useEffect(function(){return T(document.createDocumentFragment(),(0,p.jsx)(s,{ref:c}),function(){x(O.current)})},[x]),o.useMemo(function(){return[x,D]},[D,x])}},64777:function(P,t,n){n.r(t),n.d(t,{texts:function(){return f}});const f=[{value:`type renderPortal = (node: React.ReactNode) => void;

type holder = React.ReactElement;

type usePortal = () => [renderPortal, holder];
`,paraId:0,tocIndex:3}]},23970:function(P,t){t.Z=`import { Modal, type ModalProps } from 'antd';
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
`},39876:function(P,t){t.Z=`import React from 'react';
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
};`},47202:function(P,t){t.Z=`import React from 'react';
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
};`},61679:function(P,t){t.Z=`import React from 'react';
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
`}}]);
