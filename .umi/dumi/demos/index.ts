// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index1.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index.less?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index2.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index3.tsx?dumi-raw-code';

export default {
  'box-index1': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.less":{"import":"./index.less","content":rawCode2}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Box","identifier":"box-index1"},
  },
  'Box-1-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    var style = {
      width: 150,
      height: 80,
      background: '#2d8cf0',
      borderRadius: 18,
      margin: 12
    };
    return /*#__PURE__*/_react["default"].createElement(_components.Box, {
      direction: "row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }), /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Box } from '@sciopro/components';\n\nexport default () => {\n  const style = {\n    width: 150,\n    height: 80,\n    background: '#2d8cf0',\n    borderRadius: 18,\n    margin: 12,\n  };\n  return (\n    <Box direction=\"row\">\n      <div style={style}></div>\n      <div style={style}></div>\n    </Box>\n  );\n};"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Box","title":"基本使用","description":"<div class=\"markdown\"><p>可代替div,作为flex布局的容器</p></div>","identifier":"Box-1-demo"},
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
  'box-index2': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index2.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode3},"index.less":{"import":"./index.less","content":rawCode2}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Box","identifier":"box-index2"},
  },
  'box-index3': {
    component: (require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/demos/index3.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode4},"index.less":{"import":"./index.less","content":rawCode2}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Box","identifier":"box-index3"},
  },
};
