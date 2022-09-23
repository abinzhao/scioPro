// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'Foo-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_components.Foo, {
      title: "First Demo"
    });
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Foo } from '@sciopro/components';\n\nexport default () => <Foo title=\"First Demo\" />;"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Foo","identifier":"Foo-demo"},
  },
  'Foo-1-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _components = require("@sciopro/components");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_components.Foo, {
      title: "First Demo"
    });
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Foo } from '@sciopro/components';\n\nexport default () => <Foo title=\"First Demo\" />;"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/components":{"version":"0.0.1"}},"componentName":"Foo","identifier":"Foo-1-demo"},
  },
  'Foo-2-demo': {
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
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Foo } from '@sciopro/hooks';\n\nexport default () => <Foo title=\"First Demo\" />;"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/hooks":{"version":"0.0.1"}},"componentName":"Foo","identifier":"Foo-2-demo"},
  },
  'Foo-3-demo': {
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
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Foo } from '@sciopro/hooks';\n\nexport default () => <Foo title=\"First Demo\" />;"}},"dependencies":{"react":{"version":"18.2.0"},"@sciopro/hooks":{"version":"0.0.1"}},"componentName":"Foo","identifier":"Foo-3-demo"},
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
};
