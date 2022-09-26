// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index1.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index.less?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index2.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index3.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Space/demos/index1.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Space/demos/index.less?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Space/demos/index2.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Space/demos/index3.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Radio/demos/index1.tsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Radio/demos/index2.tsx?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Radio/demos/index3.tsx?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Radio/demos/index4.tsx?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Radio/demos/index5.tsx?dumi-raw-code';

export default {
  'box-index1': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.less":{"import":"./index.less","content":rawCode2}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Box","identifier":"box-index1"},
  },
  'box-index2': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index2.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode3},"index.less":{"import":"./index.less","content":rawCode2}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Box","identifier":"box-index2"},
  },
  'box-index3': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index3.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode4},"index.less":{"import":"./index.less","content":rawCode2}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Box","identifier":"box-index3"},
  },
  'Space-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    var style = {
      background: '2d8cf0',
      width: 24,
      height: 12
    };
    return /*#__PURE__*/_react["default"].createElement(_components.Space, null, /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div1"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div2"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div3"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Space } from '@sciopro/components';\n\nexport default () => {\n  const style = { background: '2d8cf0', width: 24, height: 12 };\n  return (\n    <Space>\n      <div style={style}>div1</div>\n      <div style={style}>div2</div>\n      <div style={style}>div3</div>\n    </Space>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Space","identifier":"Space-demo"},
  },
  'Space-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    var style = {
      background: '2d8cf0',
      width: 24,
      height: 12
    };
    return /*#__PURE__*/_react["default"].createElement(_components.Space, {
      direction: "vertical"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div1"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div2"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div3"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Space } from '@sciopro/components';\n\nexport default () => {\n  const style = { background: '2d8cf0', width: 24, height: 12 };\n  return (\n    <Space direction=\"vertical\">\n      <div style={style}>div1</div>\n      <div style={style}>div2</div>\n      <div style={style}>div3</div>\n    </Space>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Space","identifier":"Space-demo-1"},
  },
  'Space-demo-2': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_components.Space, {
      size: [12, 18],
      wrap: true
    }, new Array(30).fill('').map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index,
        style: {
          background: '2d8cf0',
          width: 24,
          height: 12
        }
      }, "Button", index + 1);
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Space } from '@sciopro/components';\n\nexport default () => {\n  return (\n    <Space size={[12, 18]} wrap>\n      {new Array(30).fill('').map((item, index) => {\n        return (\n          <div key={index} style={{ background: '2d8cf0', width: 24, height: 12 }}>\n            Button{index + 1}\n          </div>\n        );\n      })}\n    </Space>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Space","identifier":"Space-demo-2"},
  },
  'space-index1': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Space/demos/index1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode5},"index.less":{"import":"./index.less","content":rawCode6}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Space","identifier":"space-index1"},
  },
  'space-index2': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Space/demos/index2.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode7},"index.less":{"import":"./index.less","content":rawCode6}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Space","identifier":"space-index2"},
  },
  'space-index3': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Space/demos/index3.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode8},"index.less":{"import":"./index.less","content":rawCode6}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Space","identifier":"space-index3"},
  },
  'Foo-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _hooks = require("@sciopro/hooks");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_hooks.Foo, {
      title: "First Demo"
    });
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Foo } from '@sciopro/hooks';\n\nexport default () => <Foo title=\"First Demo\" />;"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/hooks":{"version":"0.0.1"}},"componentName":"Foo","identifier":"Foo-demo"},
  },
  'Foo-1-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _hooks = require("@sciopro/hooks");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_hooks.Foo, {
      title: "First Demo"
    });
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Foo } from '@sciopro/hooks';\n\nexport default () => <Foo title=\"First Demo\" />;"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/hooks":{"version":"0.0.1"}},"componentName":"Foo","identifier":"Foo-1-demo"},
  },
  'add-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _slicedToArray2 = _interopRequireDefault(require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));

  var _react = _interopRequireDefault(require("react"));

  var _utils = require("@sciopro/utils");

  var data = 1;

  var _default = function _default() {
    var _React$useState = _react["default"].useState(1),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        num = _React$useState2[0],
        setNum = _React$useState2[1];

    _react["default"].useEffect(function () {
      data = (0, _utils.Add)(num);
      return function () {
        return data = 1;
      };
    }, [num]);

    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return setNum(num + 1);
      }
    }, "\u70B9\u6211"), /*#__PURE__*/_react["default"].createElement("h2", null, data));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Add } from '@sciopro/utils';\n\nlet data = 1;\nexport default () => {\n  const [num, setNum] = React.useState(1);\n  React.useEffect(() => {\n    data = Add(num);\n    return () => (data = 1);\n  }, [num]);\n  return (\n    <div>\n      <button onClick={() => setNum(num + 1)}>点我</button>\n      <h2>{data}</h2>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/utils":{"version":"0.0.1"}},"identifier":"add-demo"},
  },
  'add.zh-CN-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _slicedToArray2 = _interopRequireDefault(require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));

  var _react = _interopRequireDefault(require("react"));

  var _utils = require("@sciopro/utils");

  var data = 1;

  var _default = function _default() {
    var _React$useState = _react["default"].useState(1),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        num = _React$useState2[0],
        setNum = _React$useState2[1];

    _react["default"].useEffect(function () {
      data = (0, _utils.Add)(num);
      return function () {
        return data = 1;
      };
    }, [num]);

    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return setNum(num + 1);
      }
    }, "\u70B9\u6211"), /*#__PURE__*/_react["default"].createElement("h2", null, data));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Add } from '@sciopro/utils';\n\nlet data = 1;\nexport default () => {\n  const [num, setNum] = React.useState(1);\n  React.useEffect(() => {\n    data = Add(num);\n    return () => (data = 1);\n  }, [num]);\n  return (\n    <div>\n      <button onClick={() => setNum(num + 1)}>点我</button>\n      <h2>{data}</h2>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/utils":{"version":"0.0.1"}},"identifier":"add.zh-CN-demo"},
  },
  'Space-1-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    var style = {
      width: 120,
      height: 60,
      margin: 12,
      lineHeight: 60,
      textAlign: 'center',
      background: '#2d8cf0',
      borderRadius: 18
    };
    return /*#__PURE__*/_react["default"].createElement(_components.Space, null, /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div1"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div2"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div3"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Space } from '@sciopro/components';\n\nexport default () => {\n  const style = {\n    width: 120,\n    height: 60,\n    margin: 12,\n    lineHeight: 60,\n    textAlign: 'center',\n    background: '#2d8cf0',\n    borderRadius: 18,\n  };\n  return (\n    <Space>\n      <div style={style}>div1</div>\n      <div style={style}>div2</div>\n      <div style={style}>div3</div>\n    </Space>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Space","identifier":"Space-1-demo"},
  },
  'Space-1-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    var style = {
      width: 120,
      height: 60,
      margin: 12,
      lineHeight: 60,
      textAlign: 'center',
      background: '#2d8cf0',
      borderRadius: 18
    };
    return /*#__PURE__*/_react["default"].createElement(_components.Space, {
      direction: "vertical"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div1"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div2"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div3"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Space } from '@sciopro/components';\n\nexport default () => {\n  const style = {\n    width: 120,\n    height: 60,\n    margin: 12,\n    lineHeight: 60,\n    textAlign: 'center',\n    background: '#2d8cf0',\n    borderRadius: 18,\n  };\n  return (\n    <Space direction=\"vertical\">\n      <div style={style}>div1</div>\n      <div style={style}>div2</div>\n      <div style={style}>div3</div>\n    </Space>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Space","identifier":"Space-1-demo-1"},
  },
  'Space-1-demo-2': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    var style = {
      width: 120,
      height: 60,
      margin: 12,
      lineHeight: 60,
      textAlign: 'center',
      background: '#2d8cf0',
      borderRadius: 18
    };
    return /*#__PURE__*/_react["default"].createElement(_components.Space, {
      size: [12, 18],
      wrap: true
    }, new Array(12).fill('').map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index,
        style: style
      }, "Button", index + 1);
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Space } from '@sciopro/components';\n\nexport default () => {\n  const style = {\n    width: 120,\n    height: 60,\n    margin: 12,\n    lineHeight: 60,\n    textAlign: 'center',\n    background: '#2d8cf0',\n    borderRadius: 18,\n  };\n  return (\n    <Space size={[12, 18]} wrap>\n      {new Array(12).fill('').map((item, index) => {\n        return (\n          <div key={index} style={style}>\n            Button{index + 1}\n          </div>\n        );\n      })}\n    </Space>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Space","identifier":"Space-1-demo-2"},
  },
  'Space copy-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    var style = {
      background: '2d8cf0',
      width: 24,
      height: 12
    };
    return /*#__PURE__*/_react["default"].createElement(_components.Space, null, /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div1"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div2"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div3"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Space } from '@sciopro/components';\n\nexport default () => {\n  const style = { background: '2d8cf0', width: 24, height: 12 };\n  return (\n    <Space>\n      <div style={style}>div1</div>\n      <div style={style}>div2</div>\n      <div style={style}>div3</div>\n    </Space>\n  );\n};"}},"dependencies":{},"componentName":"Space copy","identifier":"Space copy-demo"},
  },
  'Space copy-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    var style = {
      background: '2d8cf0',
      width: 24,
      height: 12
    };
    return /*#__PURE__*/_react["default"].createElement(_components.Space, {
      direction: "vertical"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div1"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div2"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div3"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Space } from '@sciopro/components';\n\nexport default () => {\n  const style = { background: '2d8cf0', width: 24, height: 12 };\n  return (\n    <Space direction=\"vertical\">\n      <div style={style}>div1</div>\n      <div style={style}>div2</div>\n      <div style={style}>div3</div>\n    </Space>\n  );\n};"}},"dependencies":{},"componentName":"Space copy","identifier":"Space copy-demo-1"},
  },
  'Space copy-demo-2': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_components.Space, {
      size: [12, 18],
      wrap: true
    }, new Array(30).fill('').map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          background: '2d8cf0',
          width: 24,
          height: 12
        }
      }, "Button", index + 1);
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Space } from '@sciopro/components';\n\nexport default () => {\n  return (\n    <Space size={[12, 18]} wrap>\n      {new Array(30).fill('').map((item, index) => {\n        return <div style={{ background: '2d8cf0', width: 24, height: 12 }}>Button{index + 1}</div>;\n      })}\n    </Space>\n  );\n};"}},"dependencies":{},"componentName":"Space copy","identifier":"Space copy-demo-2"},
  },
  'Radio-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.Radio, null));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Radio } from '@sciopro/components';\n\nexport default () => {\n  return (\n    <div>\n      <Radio></Radio>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Radio","identifier":"Radio-demo"},
  },
  'Radio-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    var style = {
      background: '2d8cf0',
      width: 24,
      height: 12
    };
    return /*#__PURE__*/_react["default"].createElement(_components.Space, {
      direction: "vertical"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div1"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div2"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div3"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Space } from '@sciopro/components';\n\nexport default () => {\n  const style = { background: '2d8cf0', width: 24, height: 12 };\n  return (\n    <Space direction=\"vertical\">\n      <div style={style}>div1</div>\n      <div style={style}>div2</div>\n      <div style={style}>div3</div>\n    </Space>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Radio","identifier":"Radio-demo-1"},
  },
  'Radio-demo-2': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_components.Space, {
      size: [12, 18],
      wrap: true
    }, new Array(30).fill('').map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          background: '2d8cf0',
          width: 24,
          height: 12
        }
      }, "Button", index + 1);
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Space } from '@sciopro/components';\n\nexport default () => {\n  return (\n    <Space size={[12, 18]} wrap>\n      {new Array(30).fill('').map((item, index) => {\n        return <div style={{ background: '2d8cf0', width: 24, height: 12 }}>Button{index + 1}</div>;\n      })}\n    </Space>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Radio","identifier":"Radio-demo-2"},
  },
  'Radio-1-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    var dataSource = [{
      label: 'Html',
      value: 'html'
    }, {
      label: 'Css',
      value: 'css'
    }, {
      label: 'Javascript',
      value: 'javascript'
    }];
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.Radio, {
      name: "scio-radio",
      direction: "row",
      dataSource: dataSource,
      isCheckedBG: true,
      defaultChecked: true
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Radio } from '@sciopro/components';\n\nexport default () => {\n  const dataSource = [\n    { label: 'Html', value: 'html' },\n    { label: 'Css', value: 'css' },\n    { label: 'Javascript', value: 'javascript' },\n  ];\n  return (\n    <div>\n      <Radio\n        name=\"scio-radio\"\n        direction=\"row\"\n        dataSource={dataSource}\n        isCheckedBG\n        defaultChecked\n      ></Radio>\n    </div>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Radio","identifier":"Radio-1-demo"},
  },
  'Radio-1-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    var style = {
      width: 120,
      height: 60,
      margin: 12,
      lineHeight: 60,
      textAlign: 'center',
      background: '#2d8cf0',
      borderRadius: 18
    };
    return /*#__PURE__*/_react["default"].createElement(_components.Space, {
      direction: "vertical"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div1"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div2"), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, "div3"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Space } from '@sciopro/components';\n\nexport default () => {\n  const style = {\n    width: 120,\n    height: 60,\n    margin: 12,\n    lineHeight: 60,\n    textAlign: 'center',\n    background: '#2d8cf0',\n    borderRadius: 18,\n  };\n  return (\n    <Space direction=\"vertical\">\n      <div style={style}>div1</div>\n      <div style={style}>div2</div>\n      <div style={style}>div3</div>\n    </Space>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Radio","identifier":"Radio-1-demo-1"},
  },
  'Radio-1-demo-2': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    var style = {
      width: 120,
      height: 60,
      margin: 12,
      lineHeight: 60,
      textAlign: 'center',
      background: '#2d8cf0',
      borderRadius: 18
    };
    return /*#__PURE__*/_react["default"].createElement(_components.Space, {
      size: [12, 18],
      wrap: true
    }, new Array(12).fill('').map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: style
      }, "Button", index + 1);
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Space } from '@sciopro/components';\n\nexport default () => {\n  const style = {\n    width: 120,\n    height: 60,\n    margin: 12,\n    lineHeight: 60,\n    textAlign: 'center',\n    background: '#2d8cf0',\n    borderRadius: 18,\n  };\n  return (\n    <Space size={[12, 18]} wrap>\n      {new Array(12).fill('').map((item, index) => {\n        return <div style={style}>Button{index + 1}</div>;\n      })}\n    </Space>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Radio","identifier":"Radio-1-demo-2"},
  },
  'radio-index1': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Radio/demos/index1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode9}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Radio","identifier":"radio-index1"},
  },
  'radio-index2': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Radio/demos/index2.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode10}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Radio","identifier":"radio-index2"},
  },
  'radio-index3': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Radio/demos/index3.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode11}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Radio","identifier":"radio-index3"},
  },
  'radio-index4': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Radio/demos/index4.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode12}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Radio","identifier":"radio-index4"},
  },
  'radio-index5': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Radio/demos/index5.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode13}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Radio","identifier":"radio-index5"},
  },
};
