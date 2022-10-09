// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default, require('/Users/zhaojianbin/Desktop/demo/scioPro/.dumi/theme/layouts/demo.tsx').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/Users/zhaojianbin/Desktop/demo/scioPro/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('/Users/zhaojianbin/Desktop/demo/scioPro/.dumi/theme/builtins/Previewer.tsx');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/Users/zhaojianbin/Desktop/demo/scioPro/.dumi/theme/layout.tsx').default],
    "routes": [
      {
        "path": "/components/box",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Box/index.md",
          "updatedTime": 1663928185000,
          "componentName": "Box",
          "title": "Box box container",
          "order": 1,
          "nav": {
            "title": "Components",
            "path": "/components",
            "order": 2
          },
          "group": {
            "title": "layout component",
            "order": 1,
            "__fallback": true,
            "path": "/components/box"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Box box container",
              "heading": "box-box-container"
            },
            {
              "depth": 3,
              "value": "usage example",
              "heading": "usage-example"
            },
            {
              "depth": 3,
              "value": "Arranged in different directions",
              "heading": "arranged-in-different-directions"
            },
            {
              "depth": 3,
              "value": "Spindle alignment direction",
              "heading": "spindle-alignment-direction"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Box box container - scioPro"
      },
      {
        "path": "/zh-CN/components/box",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Box/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Box/index.zh-CN.md",
          "updatedTime": 1664162790000,
          "componentName": "Box",
          "title": "Box 盒子容器",
          "order": 1,
          "nav": {
            "title": "组件",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "布局组件",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/components/box"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Box 盒子容器",
              "heading": "box-盒子容器"
            },
            {
              "depth": 3,
              "value": "使用示例",
              "heading": "使用示例"
            },
            {
              "depth": 3,
              "value": "不同方向排列",
              "heading": "不同方向排列"
            },
            {
              "depth": 3,
              "value": "主轴对齐方向",
              "heading": "主轴对齐方向"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "Box 盒子容器 - scioPro"
      },
      {
        "path": "/components/button",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Button/index.md",
          "updatedTime": 1664360875000,
          "componentName": "Button",
          "title": "Button",
          "order": 2,
          "nav": {
            "title": "Components",
            "path": "/components",
            "order": 2
          },
          "group": {
            "title": "Common components",
            "order": 2,
            "__fallback": true,
            "path": "/components/button"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 2,
              "value": "basic use",
              "heading": "basic-use"
            },
            {
              "depth": 2,
              "value": "buttons of different sizes",
              "heading": "buttons-of-different-sizes"
            },
            {
              "depth": 2,
              "value": "Disabled",
              "heading": "disabled"
            },
            {
              "depth": 2,
              "value": "Dotted frame button",
              "heading": "dotted-frame-button"
            },
            {
              "depth": 2,
              "value": "custom background",
              "heading": "custom-background"
            },
            {
              "depth": 2,
              "value": "Icon/Custom Icon Position",
              "heading": "iconcustom-icon-position"
            },
            {
              "depth": 2,
              "value": "loading",
              "heading": "loading"
            },
            {
              "depth": 2,
              "value": "block-level buttons",
              "heading": "block-level-buttons"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Button - scioPro"
      },
      {
        "path": "/zh-CN/components/button",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Button/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Button/index.zh-CN.md",
          "updatedTime": 1664360875000,
          "componentName": "Button",
          "title": "Button 按钮",
          "order": 2,
          "nav": {
            "title": "组件",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "通用组件",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/button"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Button 按钮",
              "heading": "button-按钮"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "不同大小的按钮",
              "heading": "不同大小的按钮"
            },
            {
              "depth": 2,
              "value": "禁用",
              "heading": "禁用"
            },
            {
              "depth": 2,
              "value": "虚线框按钮",
              "heading": "虚线框按钮"
            },
            {
              "depth": 2,
              "value": "自定义背景",
              "heading": "自定义背景"
            },
            {
              "depth": 2,
              "value": "图标/自定义图标位置",
              "heading": "图标自定义图标位置"
            },
            {
              "depth": 2,
              "value": "loading 加载",
              "heading": "loading-加载"
            },
            {
              "depth": 2,
              "value": "块级按钮",
              "heading": "块级按钮"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "Button 按钮 - scioPro"
      },
      {
        "path": "/components/check-box",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/CheckBox/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/CheckBox/index.md",
          "updatedTime": 1664360875000,
          "componentName": "CheckBox",
          "title": "CheckBox",
          "order": 4,
          "nav": {
            "title": "Components",
            "path": "/components",
            "order": 2
          },
          "group": {
            "title": "Common components",
            "order": 2,
            "__fallback": true,
            "path": "/components/check-box"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "CheckBox",
              "heading": "checkbox"
            },
            {
              "depth": 2,
              "value": "basic use",
              "heading": "basic-use"
            },
            {
              "depth": 2,
              "value": "Disabled",
              "heading": "disabled"
            },
            {
              "depth": 2,
              "value": "Arrangement",
              "heading": "arrangement"
            },
            {
              "depth": 2,
              "value": "Default checked and custom value",
              "heading": "default-checked-and-custom-value"
            },
            {
              "depth": 2,
              "value": "Select background and mouse over",
              "heading": "select-background-and-mouse-over"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "CheckBox - scioPro"
      },
      {
        "path": "/zh-CN/components/check-box",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/CheckBox/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/CheckBox/index.zh-CN.md",
          "updatedTime": 1664360875000,
          "componentName": "CheckBox",
          "title": "CheckBox 多选",
          "order": 4,
          "nav": {
            "title": "组件",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "通用组件",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/check-box"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "CheckBox 多选框",
              "heading": "checkbox-多选框"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "禁用",
              "heading": "禁用"
            },
            {
              "depth": 2,
              "value": "排列方式",
              "heading": "排列方式"
            },
            {
              "depth": 2,
              "value": "默认选中与自定义值",
              "heading": "默认选中与自定义值"
            },
            {
              "depth": 2,
              "value": "选中背景与鼠标滑过",
              "heading": "选中背景与鼠标滑过"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "CheckBox 多选 - scioPro"
      },
      {
        "path": "/components/icon",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Icon/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Icon/index.md",
          "updatedTime": 1664433489000,
          "componentName": "Icon",
          "title": "Icon",
          "order": 1,
          "nav": {
            "title": "Components",
            "path": "/components",
            "order": 2
          },
          "group": {
            "title": "Common components",
            "order": 2,
            "__fallback": true,
            "path": "/components/icon"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Icon",
              "heading": "icon"
            },
            {
              "depth": 2,
              "value": "when to use",
              "heading": "when-to-use"
            },
            {
              "depth": 3,
              "value": "basic use",
              "heading": "basic-use"
            },
            {
              "depth": 3,
              "value": "Directional icons",
              "heading": "directional-icons"
            },
            {
              "depth": 3,
              "value": "prompt suggestion icon",
              "heading": "prompt-suggestion-icon"
            },
            {
              "depth": 3,
              "value": "edit icon",
              "heading": "edit-icon"
            },
            {
              "depth": 3,
              "value": "data icon",
              "heading": "data-icon"
            },
            {
              "depth": 3,
              "value": "Brand and Identity",
              "heading": "brand-and-identity"
            },
            {
              "depth": 3,
              "value": "Website Universal Icons",
              "heading": "website-universal-icons"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Icon - scioPro"
      },
      {
        "path": "/zh-CN/components/icon",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Icon/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Icon/index.zh-CN.md",
          "updatedTime": 1664433489000,
          "componentName": "Icon",
          "title": "Icon 图标",
          "order": 1,
          "nav": {
            "title": "组件",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "通用组件",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/icon"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Icon 图标",
              "heading": "icon-图标"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 3,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 3,
              "value": "方向性图标",
              "heading": "方向性图标"
            },
            {
              "depth": 3,
              "value": "提示建议图标",
              "heading": "提示建议图标"
            },
            {
              "depth": 3,
              "value": "编辑类图标",
              "heading": "编辑类图标"
            },
            {
              "depth": 3,
              "value": "数据类图标",
              "heading": "数据类图标"
            },
            {
              "depth": 3,
              "value": "品牌和标识",
              "heading": "品牌和标识"
            },
            {
              "depth": 3,
              "value": "网站通用图标",
              "heading": "网站通用图标"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "Icon 图标 - scioPro"
      },
      {
        "path": "/components/input",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Input/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Input/index.md",
          "updatedTime": 1665308864839,
          "componentName": "Input",
          "title": "Input",
          "order": 6,
          "nav": {
            "title": "Components",
            "path": "/components",
            "order": 2
          },
          "group": {
            "title": "Common components",
            "order": 2,
            "__fallback": true,
            "path": "/components/input"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Input input box",
              "heading": "input-input-box"
            },
            {
              "depth": 2,
              "value": "When to use",
              "heading": "when-to-use"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Input - scioPro"
      },
      {
        "path": "/zh-CN/components/input",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Input/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Input/index.zh-CN.md",
          "updatedTime": 1665308820895,
          "componentName": "Input",
          "title": "Input 输入框",
          "order": 6,
          "nav": {
            "title": "组件",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "通用组件",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/input"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Input 输入框",
              "heading": "input-输入框"
            },
            {
              "depth": 2,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "Input 输入框 - scioPro"
      },
      {
        "path": "/components/placeholder",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Placeholder/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Placeholder/index.md",
          "updatedTime": 1664441593000,
          "componentName": "Placeholder",
          "title": "Page Placeholder",
          "order": 3,
          "nav": {
            "title": "Components",
            "path": "/components",
            "order": 2
          },
          "group": {
            "title": "layout component",
            "order": 1,
            "__fallback": true,
            "path": "/components/placeholder"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Page Placeholder",
              "heading": "page-placeholder"
            },
            {
              "depth": 2,
              "value": "basic use",
              "heading": "basic-use"
            },
            {
              "depth": 2,
              "value": "with copywriting",
              "heading": "with-copywriting"
            },
            {
              "depth": 2,
              "value": "different placeholder pages",
              "heading": "different-placeholder-pages"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Page Placeholder - scioPro"
      },
      {
        "path": "/zh-CN/components/placeholder",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Placeholder/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Placeholder/index.zh-CN.md",
          "updatedTime": 1664441593000,
          "componentName": "Placeholder",
          "title": "Placeholder 页面占位",
          "order": 3,
          "nav": {
            "title": "组件",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "布局组件",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/components/placeholder"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "页面占位",
              "heading": "页面占位"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "带文案",
              "heading": "带文案"
            },
            {
              "depth": 2,
              "value": "不同占位页面",
              "heading": "不同占位页面"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "Placeholder 页面占位 - scioPro"
      },
      {
        "path": "/components/radio",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Radio/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Radio/index.md",
          "updatedTime": 1664360875000,
          "componentName": "Radio",
          "title": "Radio",
          "order": 3,
          "nav": {
            "title": "Components",
            "path": "/components",
            "order": 2
          },
          "group": {
            "title": "Common components",
            "order": 2,
            "__fallback": true,
            "path": "/components/radio"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Radio",
              "heading": "radio"
            },
            {
              "depth": 2,
              "value": "basic use",
              "heading": "basic-use"
            },
            {
              "depth": 2,
              "value": "Disabled",
              "heading": "disabled"
            },
            {
              "depth": 2,
              "value": "Arrangement",
              "heading": "arrangement"
            },
            {
              "depth": 2,
              "value": "Default checked and custom value",
              "heading": "default-checked-and-custom-value"
            },
            {
              "depth": 2,
              "value": "Select background and mouse over",
              "heading": "select-background-and-mouse-over"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Radio - scioPro"
      },
      {
        "path": "/zh-CN/components/radio",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Radio/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Radio/index.zh-CN.md",
          "updatedTime": 1664360875000,
          "componentName": "Radio",
          "title": "Radio 单选",
          "order": 3,
          "nav": {
            "title": "组件",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "通用组件",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/radio"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Radio 单选",
              "heading": "radio-单选"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "禁用",
              "heading": "禁用"
            },
            {
              "depth": 2,
              "value": "排列方式",
              "heading": "排列方式"
            },
            {
              "depth": 2,
              "value": "默认选中与自定义值",
              "heading": "默认选中与自定义值"
            },
            {
              "depth": 2,
              "value": "选中背景与鼠标滑过",
              "heading": "选中背景与鼠标滑过"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "Radio 单选 - scioPro"
      },
      {
        "path": "/components/signature",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Signature/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Signature/index.md",
          "updatedTime": 1664532835000,
          "componentName": "Signature",
          "title": "Signature",
          "order": 1,
          "nav": {
            "title": "Components",
            "path": "/components",
            "order": 2
          },
          "group": {
            "title": "Complex components",
            "order": 3,
            "__fallback": true,
            "path": "/components/signature"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Signature",
              "heading": "signature"
            },
            {
              "depth": 2,
              "value": "basic use",
              "heading": "basic-use"
            },
            {
              "depth": 2,
              "value": "basic method",
              "heading": "basic-method"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Signature - scioPro"
      },
      {
        "path": "/zh-CN/components/signature",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Signature/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Signature/index.zh-CN.md",
          "updatedTime": 1664532835000,
          "componentName": "Signature",
          "title": "Signature 电子签名",
          "order": 1,
          "nav": {
            "title": "组件",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "复杂组件",
            "order": 3,
            "__fallback": true,
            "path": "/zh-CN/components/signature"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Signature 电子签名",
              "heading": "signature-电子签名"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "基础方法",
              "heading": "基础方法"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "Signature 电子签名 - scioPro"
      },
      {
        "path": "/components/space",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Space/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Space/index.md",
          "updatedTime": 1664274403000,
          "componentName": "Space",
          "title": "Space",
          "order": 2,
          "nav": {
            "title": "Components",
            "path": "/components",
            "order": 2
          },
          "group": {
            "title": "layout component",
            "order": 1,
            "__fallback": true,
            "path": "/components/space"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Space",
              "heading": "space"
            },
            {
              "depth": 4,
              "value": "when to use",
              "heading": "when-to-use"
            },
            {
              "depth": 2,
              "value": "basic use",
              "heading": "basic-use"
            },
            {
              "depth": 2,
              "value": "vertical spacing",
              "heading": "vertical-spacing"
            },
            {
              "depth": 2,
              "value": "Size",
              "heading": "size"
            },
            {
              "depth": 2,
              "value": "Align",
              "heading": "align"
            },
            {
              "depth": 2,
              "value": "Surround spacing",
              "heading": "surround-spacing"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Space - scioPro"
      },
      {
        "path": "/zh-CN/components/space",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Space/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Space/index.zh-CN.md",
          "updatedTime": 1664274403000,
          "componentName": "Space",
          "title": "Space 间距",
          "order": 2,
          "nav": {
            "title": "组件",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "布局组件",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/components/space"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Space 间距",
              "heading": "space-间距"
            },
            {
              "depth": 4,
              "value": "何时使用",
              "heading": "何时使用"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "垂直间距",
              "heading": "垂直间距"
            },
            {
              "depth": 2,
              "value": "尺寸",
              "heading": "尺寸"
            },
            {
              "depth": 2,
              "value": "对齐方式",
              "heading": "对齐方式"
            },
            {
              "depth": 2,
              "value": "环绕间距",
              "heading": "环绕间距"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "Space 间距 - scioPro"
      },
      {
        "path": "/components/switch",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Switch/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Switch/index.md",
          "updatedTime": 1664441593000,
          "componentName": "Switch",
          "title": "Switch",
          "order": 5,
          "nav": {
            "title": "Components",
            "path": "/components",
            "order": 2
          },
          "group": {
            "title": "Common components",
            "order": 2,
            "__fallback": true,
            "path": "/components/switch"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Switch",
              "heading": "switch"
            },
            {
              "depth": 2,
              "value": "basic use",
              "heading": "basic-use"
            },
            {
              "depth": 2,
              "value": "Display with text",
              "heading": "display-with-text"
            },
            {
              "depth": 2,
              "value": "Disabled",
              "heading": "disabled"
            },
            {
              "depth": 2,
              "value": "different size",
              "heading": "different-size"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Switch - scioPro"
      },
      {
        "path": "/zh-CN/components/switch",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Switch/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Switch/index.zh-CN.md",
          "updatedTime": 1664360875000,
          "componentName": "Switch",
          "title": "Switch 开关",
          "order": 5,
          "nav": {
            "title": "组件",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "通用组件",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/switch"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Switch 开关",
              "heading": "switch-开关"
            },
            {
              "depth": 2,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 2,
              "value": "带文本显示",
              "heading": "带文本显示"
            },
            {
              "depth": 2,
              "value": "禁用",
              "heading": "禁用"
            },
            {
              "depth": 2,
              "value": "不同大小",
              "heading": "不同大小"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "Switch 开关 - scioPro"
      },
      {
        "path": "/components/theme",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/theme/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/theme/index.md",
          "updatedTime": 1663928185000,
          "title": "Color",
          "order": 1,
          "nav": {
            "title": "Components",
            "path": "/components",
            "order": 2
          },
          "group": {
            "title": "global basis",
            "order": 1,
            "__fallback": true,
            "path": "/components/theme"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Color",
              "heading": "color"
            },
            {
              "depth": 2,
              "value": "Overview",
              "heading": "overview"
            },
            {
              "depth": 2,
              "value": "main color",
              "heading": "main-color"
            },
            {
              "depth": 1,
              "value": "secondary color",
              "heading": "secondary-color"
            },
            {
              "depth": 1,
              "value": "neutral color",
              "heading": "neutral-color"
            }
          ]
        },
        "title": "Color - scioPro"
      },
      {
        "path": "/zh-CN/components/theme",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/theme/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/theme/index.zh-CN.md",
          "updatedTime": 1664162790000,
          "title": "Color 色彩",
          "order": 1,
          "nav": {
            "title": "组件",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "全局基础",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/components/theme"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Color 色彩",
              "heading": "color-色彩"
            },
            {
              "depth": 2,
              "value": "概述",
              "heading": "概述"
            },
            {
              "depth": 2,
              "value": "主色",
              "heading": "主色"
            },
            {
              "depth": 1,
              "value": "辅助色",
              "heading": "辅助色"
            },
            {
              "depth": 1,
              "value": "中性色",
              "heading": "中性色"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Color 色彩 - scioPro"
      },
      {
        "path": "/hooks/foo",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/hooks/src/Foo/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/Foo/index.md",
          "updatedTime": 1663840739000,
          "componentName": "Foo",
          "title": "Foo hooks",
          "order": 1,
          "nav": {
            "title": "Hooks",
            "path": "/hooks",
            "order": 3
          },
          "group": {
            "title": "React related",
            "order": 1,
            "__fallback": true,
            "path": "/hooks/foo"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Foo",
              "heading": "foo"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Foo hooks - scioPro"
      },
      {
        "path": "/zh-CN/hooks/foo",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/hooks/src/Foo/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/Foo/index.zh-CN.md",
          "updatedTime": 1663840739000,
          "componentName": "Foo",
          "title": "Foo hooks",
          "order": 1,
          "nav": {
            "title": "Hooks",
            "path": "/zh-CN/hooks",
            "order": 3
          },
          "group": {
            "title": "React 相关",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/hooks/foo"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Foo",
              "heading": "foo"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "Foo hooks - scioPro"
      },
      {
        "path": "/utils/cookie-storage",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/CookieStorage/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/CookieStorage/index.md",
          "updatedTime": 1665300332000,
          "title": "Cookie Storage",
          "order": 3,
          "nav": {
            "title": "Utility function",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "Browser storage related",
            "order": 3,
            "__fallback": true,
            "path": "/utils/cookie-storage"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Cookie Storage",
              "heading": "cookie-storage"
            },
            {
              "depth": 2,
              "value": "Instructions",
              "heading": "instructions"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "Cookie Storage - scioPro"
      },
      {
        "path": "/zh-CN/utils/cookie-storage",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/CookieStorage/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/CookieStorage/index.zh-CN.md",
          "updatedTime": 1665300332000,
          "title": "Cookie 存储",
          "order": 2,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "浏览器存储相关",
            "order": 3,
            "__fallback": true,
            "path": "/zh-CN/utils/cookie-storage"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Cookie 存储",
              "heading": "cookie-存储"
            },
            {
              "depth": 2,
              "value": "使用方法",
              "heading": "使用方法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Cookie 存储 - scioPro"
      },
      {
        "path": "/utils/debounce",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/Debounce/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/Debounce/index.md",
          "updatedTime": 1665218631000,
          "title": "Debounce",
          "order": 2,
          "nav": {
            "title": "Utility function",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "Base Function",
            "order": 1,
            "__fallback": true,
            "path": "/utils/debounce"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Debounce",
              "heading": "debounce"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "Debounce - scioPro"
      },
      {
        "path": "/zh-CN/utils/debounce",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/Debounce/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/Debounce/index.zh-CN.md",
          "updatedTime": 1665218631000,
          "title": "Debounce 防抖",
          "order": 2,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "基础函数",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/debounce"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Debounce 防抖",
              "heading": "debounce-防抖"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Debounce 防抖 - scioPro"
      },
      {
        "path": "/utils/detect-device-type",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/DetectDeviceType/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/DetectDeviceType/index.md",
          "updatedTime": 1665306493000,
          "title": "DetectDeviceType",
          "order": 7,
          "nav": {
            "title": "Utility function",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "Base Function",
            "order": 1,
            "__fallback": true,
            "path": "/utils/detect-device-type"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "DetectDeviceType",
              "heading": "detectdevicetype"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "DetectDeviceType - scioPro"
      },
      {
        "path": "/zh-CN/utils/detect-device-type",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/DetectDeviceType/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/DetectDeviceType/index.zh-CN.md",
          "updatedTime": 1665306493000,
          "title": "DetectDeviceType 检测移动/PC设备",
          "order": 7,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "基础函数",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/detect-device-type"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "DetectDeviceType 检测移动/PC 设备",
              "heading": "detectdevicetype-检测移动pc-设备"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "DetectDeviceType 检测移动/PC设备 - scioPro"
      },
      {
        "path": "/utils/escape-html",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/EscapeHTML/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/EscapeHTML/index.md",
          "updatedTime": 1665306493000,
          "title": "EscapeHTML",
          "order": 6,
          "nav": {
            "title": "Utility function",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "Base Function",
            "order": 1,
            "__fallback": true,
            "path": "/utils/escape-html"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "EscapeHTML",
              "heading": "escapehtml"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "EscapeHTML - scioPro"
      },
      {
        "path": "/zh-CN/utils/escape-html",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/EscapeHTML/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/EscapeHTML/index.zh-CN.md",
          "updatedTime": 1665306493000,
          "title": "EscapeHTML 转义HTML(防XSS攻击)",
          "order": 6,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "基础函数",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/escape-html"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "EscapeHTML 转义 HTML(防 XSS 攻击)",
              "heading": "escapehtml-转义-html防-xss-攻击"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "EscapeHTML 转义HTML(防XSS攻击) - scioPro"
      },
      {
        "path": "/utils/file-to-base64",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/FileToBase64/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/FileToBase64/index.md",
          "updatedTime": 1665300332000,
          "title": "FileToBase64",
          "order": 1,
          "nav": {
            "title": "Utility function",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "File related",
            "order": 4,
            "__fallback": true,
            "path": "/utils/file-to-base64"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "FileToBase64",
              "heading": "filetobase64"
            },
            {
              "depth": 2,
              "value": "Instructions",
              "heading": "instructions"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "FileToBase64 - scioPro"
      },
      {
        "path": "/zh-CN/utils/file-to-base64",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/FileToBase64/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/FileToBase64/index.zh-CN.md",
          "updatedTime": 1665300332000,
          "title": "FileToBase64 获取Base64编码",
          "order": 1,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "文件相关",
            "order": 4,
            "__fallback": true,
            "path": "/zh-CN/utils/file-to-base64"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "FileToBase64 获取 Base64 编码",
              "heading": "filetobase64-获取-base64-编码"
            },
            {
              "depth": 2,
              "value": "使用方法",
              "heading": "使用方法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "FileToBase64 获取Base64编码 - scioPro"
      },
      {
        "path": "/utils/get-time-interval",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/GetTimeInterval/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/GetTimeInterval/index.md",
          "updatedTime": 1665218631000,
          "title": "GetTimeInterval",
          "order": 1,
          "nav": {
            "title": "Utility function",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "time dependent",
            "order": 2,
            "__fallback": true,
            "path": "/utils/get-time-interval"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "GetTimeInterval",
              "heading": "gettimeinterval"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "GetTimeInterval - scioPro"
      },
      {
        "path": "/zh-CN/utils/get-time-interval",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/GetTimeInterval/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/GetTimeInterval/index.zh-CN.md",
          "updatedTime": 1665218631000,
          "title": "GetTimeInterval 时间戳间隔",
          "order": 1,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "时间相关",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/utils/get-time-interval"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "GetTimeInterval 时间戳间隔",
              "heading": "gettimeinterval-时间戳间隔"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "GetTimeInterval 时间戳间隔 - scioPro"
      },
      {
        "path": "/utils/getdata-time-sec",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/GetdataTimeSec/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/GetdataTimeSec/index.md",
          "updatedTime": 1665285445000,
          "title": "GetdataTimeSec",
          "order": 2,
          "nav": {
            "title": "Utility function",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "time dependent",
            "order": 2,
            "__fallback": true,
            "path": "/utils/getdata-time-sec"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "GetdataTimeSec",
              "heading": "getdatatimesec"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "GetdataTimeSec - scioPro"
      },
      {
        "path": "/zh-CN/utils/getdata-time-sec",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/GetdataTimeSec/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/GetdataTimeSec/index.zh-CN.md",
          "updatedTime": 1665285445000,
          "title": "GetdataTimeSec 当前时间格式化",
          "order": 2,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "时间相关",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/utils/getdata-time-sec"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "GetdataTimeSec 当前时间格式化",
              "heading": "getdatatimesec-当前时间格式化"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "GetdataTimeSec 当前时间格式化 - scioPro"
      },
      {
        "path": "/utils/local-storage-storage",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/LocalStorageStorage/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/LocalStorageStorage/index.md",
          "updatedTime": 1665285445000,
          "title": "LocalStorage Storage",
          "order": 1,
          "nav": {
            "title": "Utility function",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "Browser storage related",
            "order": 3,
            "__fallback": true,
            "path": "/utils/local-storage-storage"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "LocalStorage Storage",
              "heading": "localstorage-storage"
            },
            {
              "depth": 2,
              "value": "Instructions",
              "heading": "instructions"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "LocalStorage Storage - scioPro"
      },
      {
        "path": "/zh-CN/utils/local-storage-storage",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/LocalStorageStorage/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/LocalStorageStorage/index.zh-CN.md",
          "updatedTime": 1665285445000,
          "title": "LocalStorage 存储",
          "order": 1,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "浏览器存储相关",
            "order": 3,
            "__fallback": true,
            "path": "/zh-CN/utils/local-storage-storage"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "LocalStorage 存储",
              "heading": "localstorage-存储"
            },
            {
              "depth": 2,
              "value": "使用方法",
              "heading": "使用方法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "LocalStorage 存储 - scioPro"
      },
      {
        "path": "/utils/random-color",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/RandomColor/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/RandomColor/index.md",
          "updatedTime": 1665218631000,
          "title": "RandomColor",
          "order": 1,
          "nav": {
            "title": "Utility function",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "Base Function",
            "order": 1,
            "__fallback": true,
            "path": "/utils/random-color"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "RandomColor",
              "heading": "randomcolor"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "RandomColor - scioPro"
      },
      {
        "path": "/zh-CN/utils/random-color",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/RandomColor/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/RandomColor/index.zh-CN.md",
          "updatedTime": 1665218631000,
          "title": "RandomColor 随机颜色",
          "order": 1,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "基础函数",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/random-color"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "RandomColor 随机颜色",
              "heading": "randomcolor-随机颜色"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "RandomColor 随机颜色 - scioPro"
      },
      {
        "path": "/utils/session-storage",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/SessionStorage/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/SessionStorage/index.md",
          "updatedTime": 1665300332000,
          "title": "Session Storage",
          "order": 2,
          "nav": {
            "title": "Utility function",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "Browser storage related",
            "order": 3,
            "__fallback": true,
            "path": "/utils/session-storage"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Session Storage",
              "heading": "session-storage"
            },
            {
              "depth": 2,
              "value": "Instructions",
              "heading": "instructions"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "Session Storage - scioPro"
      },
      {
        "path": "/zh-CN/utils/session-storage",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/SessionStorage/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/SessionStorage/index.zh-CN.md",
          "updatedTime": 1665300332000,
          "title": "Session 存储",
          "order": 2,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "浏览器存储相关",
            "order": 3,
            "__fallback": true,
            "path": "/zh-CN/utils/session-storage"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Session 存储",
              "heading": "session-存储"
            },
            {
              "depth": 2,
              "value": "使用方法",
              "heading": "使用方法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Session 存储 - scioPro"
      },
      {
        "path": "/utils/throttle",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/Throttle/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/Throttle/index.md",
          "updatedTime": 1665218631000,
          "title": "FormatDate",
          "order": 3,
          "nav": {
            "title": "Utility function",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "Base Function",
            "order": 1,
            "__fallback": true,
            "path": "/utils/throttle"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "FormatDate",
              "heading": "formatdate"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "FormatDate - scioPro"
      },
      {
        "path": "/zh-CN/utils/throttle",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/Throttle/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/Throttle/index.zh-CN.md",
          "updatedTime": 1665218631000,
          "title": "Throttle 节流",
          "order": 3,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "基础函数",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/throttle"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Throttle 节流",
              "heading": "throttle-节流"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Throttle 节流 - scioPro"
      },
      {
        "path": "/utils/trim",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/Trim/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/Trim/index.md",
          "updatedTime": 1665306493000,
          "title": "Trim",
          "order": 4,
          "nav": {
            "title": "Utility function",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "Base Function",
            "order": 1,
            "__fallback": true,
            "path": "/utils/trim"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Trim",
              "heading": "trim"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Trim - scioPro"
      },
      {
        "path": "/zh-CN/utils/trim",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/Trim/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/Trim/index.zh-CN.md",
          "updatedTime": 1665306493000,
          "title": "Trim 去除空格",
          "order": 3,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "基础函数",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/trim"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Trim 去除空格",
              "heading": "trim-去除空格"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "Trim 去除空格 - scioPro"
      },
      {
        "path": "/utils/turn-case",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/TurnCase/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/TurnCase/index.md",
          "updatedTime": 1665306493000,
          "title": "TurnCase",
          "order": 5,
          "nav": {
            "title": "Utility function",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "Base Function",
            "order": 1,
            "__fallback": true,
            "path": "/utils/turn-case"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "TurnCase",
              "heading": "turncase"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "TurnCase - scioPro"
      },
      {
        "path": "/zh-CN/utils/turn-case",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/TurnCase/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/TurnCase/index.zh-CN.md",
          "updatedTime": 1665306493000,
          "title": "TurnCase 大小写转换",
          "order": 5,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "基础函数",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/turn-case"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "TurnCase 大小写转换",
              "heading": "turncase-大小写转换"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "TurnCase 大小写转换 - scioPro"
      },
      {
        "path": "/",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1663840739000,
          "hero": {
            "title": "scioPro",
            "desc": "<div class=\"markdown\"><p>scioPro is a React UI component library based on the current popular design system, mainly used for modern and personalized products.</p></div>",
            "actions": [
              {
                "text": "Get started quickly",
                "link": "/components"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "out of the box",
              "desc": "<div class=\"markdown\"><p>Simple and easy to use, reduce the amount of code for users, reduce development costs, encapsulate according to usage habits, easier to use, and reduce learning costs</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "default behavior",
              "desc": "<div class=\"markdown\"><p>Less code, less bugs, more efficient development efficiency, consistent with real-life processes and logic, and follow the language and concepts that users are used to</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "efficiency feedback",
              "desc": "<div class=\"markdown\"><p>Through the interface style and interactive dynamic effects, users can clearly perceive their own operations, design a simple and intuitive operation process, and the interface is simple and straightforward, reducing the user's memory burden</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg",
              "title": "TypeScript",
              "desc": "<div class=\"markdown\"><p>Developed with TypeScript, providing a complete type definition file</p></div>"
            },
            {
              "icon": "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr",
              "title": "Simple to use",
              "desc": "<div class=\"markdown\"><p>The components precipitated through practice are more suitable for the market and development needs</p></div>"
            },
            {
              "icon": "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr",
              "title": "tool collection",
              "desc": "<div class=\"markdown\"><p>By extracting various code fragments and function sets, development is more convenient and the amount of code is less</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2022<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "🖥 Browser Compatibility",
              "heading": "-browser-compatibility"
            },
            {
              "depth": 2,
              "value": "On-demand loading/TypeScript",
              "heading": "on-demand-loadingtypescript"
            },
            {
              "depth": 2,
              "value": "Install",
              "heading": "install"
            },
            {
              "depth": 3,
              "value": "It is recommended to use pnpm to install",
              "heading": "it-is-recommended-to-use-pnpm-to-install"
            },
            {
              "depth": 3,
              "value": "Component usage example",
              "heading": "component-usage-example"
            },
            {
              "depth": 3,
              "value": "Hooks usage example",
              "heading": "hooks-usage-example"
            },
            {
              "depth": 3,
              "value": "Utils usage example",
              "heading": "utils-usage-example"
            }
          ],
          "title": "🖥 Browser Compatibility"
        },
        "title": "🖥 Browser Compatibility - scioPro"
      },
      {
        "path": "/zh-CN",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.zh-CN.md",
          "updatedTime": 1663840739000,
          "hero": {
            "title": "scioPro",
            "desc": "<div class=\"markdown\"><p>scioPro 是基于目前流行的设计体系而生的 React UI 组件库，主要用于现代化、个性化的产品。</p></div>",
            "actions": [
              {
                "text": "快速上手",
                "link": "/components"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "开箱即用",
              "desc": "<div class=\"markdown\"><p>简单易用，降低使用者的代码量,降低开发成本，根据使用习惯进行封装,更加易用,减少学习成本</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "预设行为",
              "desc": "<div class=\"markdown\"><p>更少的代码，更少的 Bug,更加高效的开发效率，与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "效率反馈",
              "desc": "<div class=\"markdown\"><p>通过界面样式和交互动效让用户可以清晰的感知自己的操作，设计简洁直观的操作流程,界面简单直白,减少用户记忆负担</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg",
              "title": "TypeScript",
              "desc": "<div class=\"markdown\"><p>使用 TypeScript 开发，提供完整的类型定义文件</p></div>"
            },
            {
              "icon": "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr",
              "title": "简单易用",
              "desc": "<div class=\"markdown\"><p>通过实践沉淀出的组件，更加适合市场以及开发需求</p></div>"
            },
            {
              "icon": "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr",
              "title": "工具集合",
              "desc": "<div class=\"markdown\"><p>通过抽离各种代码片段与功能集合，使开发上手更加方便，代码量更少</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2022<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "🖥 浏览器兼容性",
              "heading": "-浏览器兼容性"
            },
            {
              "depth": 2,
              "value": "按需加载/TypeScript",
              "heading": "按需加载typescript"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 3,
              "value": "推荐使用pnpm安装",
              "heading": "推荐使用pnpm安装"
            },
            {
              "depth": 3,
              "value": "组件使用示例",
              "heading": "组件使用示例"
            },
            {
              "depth": 3,
              "value": "hooks 使用示例",
              "heading": "hooks-使用示例"
            },
            {
              "depth": 3,
              "value": "utils 工具函数 使用示例",
              "heading": "utils-工具函数-使用示例"
            }
          ],
          "title": "🖥 浏览器兼容性",
          "locale": "zh-CN"
        },
        "title": "🖥 浏览器兼容性 - scioPro"
      },
      {
        "path": "/blog/react/react18",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/react/react18.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/react/react18.md",
          "updatedTime": 1664433489000,
          "title": "95% 的算法都是基于这 6 种算法思想",
          "order": 1,
          "nav": {
            "title": "博客",
            "path": "/blog/react",
            "order": 1
          },
          "group": {
            "title": "算法相关",
            "order": 1,
            "__fallback": true,
            "path": "/blog/react"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "95% 的算法都是基于这 6 种算法思想",
              "heading": "95-的算法都是基于这-6-种算法思想"
            },
            {
              "depth": 1,
              "value": "1、递归算法",
              "heading": "1递归算法"
            },
            {
              "depth": 3,
              "value": "1.1 算法策略",
              "heading": "11-算法策略"
            },
            {
              "depth": 3,
              "value": "1.2 适用场景",
              "heading": "12-适用场景"
            },
            {
              "depth": 3,
              "value": "1.3 使用递归算法求解的一些经典问题",
              "heading": "13-使用递归算法求解的一些经典问题"
            },
            {
              "depth": 4,
              "value": "DOM 树为例",
              "heading": "dom-树为例"
            },
            {
              "depth": 2,
              "value": "2 分治算法",
              "heading": "2-分治算法"
            },
            {
              "depth": 3,
              "value": "2.1 算法策略",
              "heading": "21-算法策略"
            },
            {
              "depth": 3,
              "value": "2.2 适用场景",
              "heading": "22-适用场景"
            },
            {
              "depth": 3,
              "value": "2.3 使用分治法求解的一些经典问题",
              "heading": "23使用分治法求解的一些经典问题"
            },
            {
              "depth": 4,
              "value": "二分查找",
              "heading": "二分查找"
            },
            {
              "depth": 2,
              "value": "3 贪心算法",
              "heading": "3-贪心算法"
            },
            {
              "depth": 3,
              "value": "3.1 算法策略",
              "heading": "31-算法策略"
            },
            {
              "depth": 3,
              "value": "3.2 适用场景",
              "heading": "32-适用场景"
            },
            {
              "depth": 3,
              "value": "3.3 经典案例：活动选择问题",
              "heading": "33-经典案例活动选择问题"
            },
            {
              "depth": 2,
              "value": "4 回溯算法",
              "heading": "4-回溯算法"
            },
            {
              "depth": 3,
              "value": "4.1 算法策略",
              "heading": "41-算法策略"
            },
            {
              "depth": 3,
              "value": "4.2 适用场景",
              "heading": "42-适用场景"
            },
            {
              "depth": 3,
              "value": "4.3 使用回溯算法的经典案例",
              "heading": "43-使用回溯算法的经典案例"
            },
            {
              "depth": 4,
              "value": "正则表达式匹配",
              "heading": "正则表达式匹配"
            },
            {
              "depth": 2,
              "value": "5 动态规划",
              "heading": "5-动态规划"
            },
            {
              "depth": 3,
              "value": "5.1 算法策略",
              "heading": "51-算法策略"
            },
            {
              "depth": 3,
              "value": "5.2 适用场景",
              "heading": "52-适用场景"
            },
            {
              "depth": 3,
              "value": "5.3 使用动态规划求解的一些经典问题",
              "heading": "53-使用动态规划求解的一些经典问题"
            },
            {
              "depth": 4,
              "value": "爬楼梯问题",
              "heading": "爬楼梯问题"
            },
            {
              "depth": 2,
              "value": "6 枚举算法",
              "heading": "6-枚举算法"
            },
            {
              "depth": 3,
              "value": "6.1 算法策略",
              "heading": "61-算法策略"
            },
            {
              "depth": 3,
              "value": "6.2 解题思路",
              "heading": "62-解题思路"
            },
            {
              "depth": 1,
              "value": "总结",
              "heading": "总结"
            }
          ]
        },
        "title": "95% 的算法都是基于这 6 种算法思想 - scioPro"
      },
      {
        "path": "/zh-CN/blog/react/react18",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/react/react18.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/react/react18.md",
          "updatedTime": 1664433489000,
          "title": "95% 的算法都是基于这 6 种算法思想",
          "order": 1,
          "nav": {
            "title": "博客",
            "path": "/zh-CN/blog/react",
            "order": 1
          },
          "group": {
            "title": "算法相关",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/blog/react"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "95% 的算法都是基于这 6 种算法思想",
              "heading": "95-的算法都是基于这-6-种算法思想"
            },
            {
              "depth": 1,
              "value": "1、递归算法",
              "heading": "1递归算法"
            },
            {
              "depth": 3,
              "value": "1.1 算法策略",
              "heading": "11-算法策略"
            },
            {
              "depth": 3,
              "value": "1.2 适用场景",
              "heading": "12-适用场景"
            },
            {
              "depth": 3,
              "value": "1.3 使用递归算法求解的一些经典问题",
              "heading": "13-使用递归算法求解的一些经典问题"
            },
            {
              "depth": 4,
              "value": "DOM 树为例",
              "heading": "dom-树为例"
            },
            {
              "depth": 2,
              "value": "2 分治算法",
              "heading": "2-分治算法"
            },
            {
              "depth": 3,
              "value": "2.1 算法策略",
              "heading": "21-算法策略"
            },
            {
              "depth": 3,
              "value": "2.2 适用场景",
              "heading": "22-适用场景"
            },
            {
              "depth": 3,
              "value": "2.3 使用分治法求解的一些经典问题",
              "heading": "23使用分治法求解的一些经典问题"
            },
            {
              "depth": 4,
              "value": "二分查找",
              "heading": "二分查找"
            },
            {
              "depth": 2,
              "value": "3 贪心算法",
              "heading": "3-贪心算法"
            },
            {
              "depth": 3,
              "value": "3.1 算法策略",
              "heading": "31-算法策略"
            },
            {
              "depth": 3,
              "value": "3.2 适用场景",
              "heading": "32-适用场景"
            },
            {
              "depth": 3,
              "value": "3.3 经典案例：活动选择问题",
              "heading": "33-经典案例活动选择问题"
            },
            {
              "depth": 2,
              "value": "4 回溯算法",
              "heading": "4-回溯算法"
            },
            {
              "depth": 3,
              "value": "4.1 算法策略",
              "heading": "41-算法策略"
            },
            {
              "depth": 3,
              "value": "4.2 适用场景",
              "heading": "42-适用场景"
            },
            {
              "depth": 3,
              "value": "4.3 使用回溯算法的经典案例",
              "heading": "43-使用回溯算法的经典案例"
            },
            {
              "depth": 4,
              "value": "正则表达式匹配",
              "heading": "正则表达式匹配"
            },
            {
              "depth": 2,
              "value": "5 动态规划",
              "heading": "5-动态规划"
            },
            {
              "depth": 3,
              "value": "5.1 算法策略",
              "heading": "51-算法策略"
            },
            {
              "depth": 3,
              "value": "5.2 适用场景",
              "heading": "52-适用场景"
            },
            {
              "depth": 3,
              "value": "5.3 使用动态规划求解的一些经典问题",
              "heading": "53-使用动态规划求解的一些经典问题"
            },
            {
              "depth": 4,
              "value": "爬楼梯问题",
              "heading": "爬楼梯问题"
            },
            {
              "depth": 2,
              "value": "6 枚举算法",
              "heading": "6-枚举算法"
            },
            {
              "depth": 3,
              "value": "6.1 算法策略",
              "heading": "61-算法策略"
            },
            {
              "depth": 3,
              "value": "6.2 解题思路",
              "heading": "62-解题思路"
            },
            {
              "depth": 1,
              "value": "总结",
              "heading": "总结"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "95% 的算法都是基于这 6 种算法思想 - scioPro"
      },
      {
        "path": "/components",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/components/box"
      },
      {
        "path": "/zh-CN/components",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/zh-CN/components/box"
      },
      {
        "path": "/hooks",
        "meta": {
          "order": 3
        },
        "exact": true,
        "redirect": "/hooks/foo"
      },
      {
        "path": "/zh-CN/hooks",
        "meta": {
          "order": 3
        },
        "exact": true,
        "redirect": "/zh-CN/hooks/foo"
      },
      {
        "path": "/utils",
        "meta": {
          "order": 4
        },
        "exact": true,
        "redirect": "/utils/debounce"
      },
      {
        "path": "/zh-CN/utils",
        "meta": {
          "order": 4
        },
        "exact": true,
        "redirect": "/zh-CN/utils/debounce"
      },
      {
        "path": "/blog/react",
        "meta": {
          "order": 1,
          "__fallback": true
        },
        "exact": true,
        "redirect": "/blog/react/react18"
      },
      {
        "path": "/zh-CN/blog/react",
        "meta": {
          "order": 1,
          "__fallback": true
        },
        "exact": true,
        "redirect": "/zh-CN/blog/react/react18"
      }
    ],
    "title": "scioPro",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
