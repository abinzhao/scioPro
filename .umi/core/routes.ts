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
        "path": "/components/badge",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Badge/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Badge/index.md",
          "updatedTime": 1667815149448,
          "componentName": "Badge",
          "title": "Badge",
          "order": 8,
          "nav": {
            "title": "Components",
            "path": "/components",
            "order": 2
          },
          "group": {
            "title": "Common components",
            "order": 2,
            "__fallback": true,
            "path": "/components/badge"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Badge logo",
              "heading": "badge-logo"
            },
            {
              "depth": 2,
              "value": "When to use",
              "heading": "when-to-use"
            },
            {
              "depth": 2,
              "value": "When to use",
              "heading": "when-to-use-1"
            },
            {
              "depth": 2,
              "value": "capped figures",
              "heading": "capped-figures"
            },
            {
              "depth": 2,
              "value": "nasty little red dot",
              "heading": "nasty-little-red-dot"
            },
            {
              "depth": 2,
              "value": "Customize icons, colors, and more",
              "heading": "customize-icons-colors-and-more"
            },
            {
              "depth": 2,
              "value": "Standalone use",
              "heading": "standalone-use"
            },
            {
              "depth": 2,
              "value": "Logo click",
              "heading": "logo-click"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Badge - scioPro"
      },
      {
        "path": "/zh-CN/components/badge",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Badge/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Badge/index.zh-CN.md",
          "updatedTime": 1667815153809,
          "componentName": "Badge",
          "title": "Badge ??????",
          "order": 8,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "????????????",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/badge"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Badge ??????",
              "heading": "badge-??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "??????????????????",
              "heading": "??????????????????"
            },
            {
              "depth": 2,
              "value": "???????????????????????????",
              "heading": "????????????????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
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
        "title": "Badge ?????? - scioPro"
      },
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
          "title": "Box ????????????",
          "order": 1,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "????????????",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/components/box"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Box ????????????",
              "heading": "box-????????????"
            },
            {
              "depth": 3,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 3,
              "value": "??????????????????",
              "heading": "??????????????????"
            },
            {
              "depth": 3,
              "value": "??????????????????",
              "heading": "??????????????????"
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
        "title": "Box ???????????? - scioPro"
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
          "title": "Button ??????",
          "order": 2,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "????????????",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/button"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Button ??????",
              "heading": "button-??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "?????????????????????",
              "heading": "?????????????????????"
            },
            {
              "depth": 2,
              "value": "??????",
              "heading": "??????"
            },
            {
              "depth": 2,
              "value": "???????????????",
              "heading": "???????????????"
            },
            {
              "depth": 2,
              "value": "???????????????",
              "heading": "???????????????"
            },
            {
              "depth": 2,
              "value": "??????/?????????????????????",
              "heading": "???????????????????????????"
            },
            {
              "depth": 2,
              "value": "loading ??????",
              "heading": "loading-??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
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
        "title": "Button ?????? - scioPro"
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
          "title": "CheckBox ??????",
          "order": 4,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "????????????",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/check-box"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "CheckBox ?????????",
              "heading": "checkbox-?????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "??????",
              "heading": "??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "???????????????????????????",
              "heading": "???????????????????????????"
            },
            {
              "depth": 2,
              "value": "???????????????????????????",
              "heading": "???????????????????????????"
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
        "title": "CheckBox ?????? - scioPro"
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
          "title": "Icon ??????",
          "order": 1,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "????????????",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/icon"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Icon ??????",
              "heading": "icon-??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 3,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 3,
              "value": "???????????????",
              "heading": "???????????????"
            },
            {
              "depth": 3,
              "value": "??????????????????",
              "heading": "??????????????????"
            },
            {
              "depth": 3,
              "value": "???????????????",
              "heading": "???????????????"
            },
            {
              "depth": 3,
              "value": "???????????????",
              "heading": "???????????????"
            },
            {
              "depth": 3,
              "value": "???????????????",
              "heading": "???????????????"
            },
            {
              "depth": 3,
              "value": "??????????????????",
              "heading": "??????????????????"
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
        "title": "Icon ?????? - scioPro"
      },
      {
        "path": "/components/input",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Input/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Input/index.md",
          "updatedTime": 1667807575000,
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
              "value": "Custom size",
              "heading": "custom-size"
            },
            {
              "depth": 2,
              "value": "Custom state",
              "heading": "custom-state"
            },
            {
              "depth": 2,
              "value": "Search bar",
              "heading": "search-bar"
            },
            {
              "depth": 2,
              "value": "Text Field",
              "heading": "text-field"
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
          "updatedTime": 1665482508000,
          "componentName": "Input",
          "title": "Input ?????????",
          "order": 6,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "????????????",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/input"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Input ?????????",
              "heading": "input-?????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "???????????????",
              "heading": "???????????????"
            },
            {
              "depth": 2,
              "value": "???????????????",
              "heading": "???????????????"
            },
            {
              "depth": 2,
              "value": "?????????",
              "heading": "?????????"
            },
            {
              "depth": 2,
              "value": "?????????",
              "heading": "?????????"
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
        "title": "Input ????????? - scioPro"
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
          "title": "Placeholder ????????????",
          "order": 3,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "????????????",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/components/placeholder"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "?????????",
              "heading": "?????????"
            },
            {
              "depth": 2,
              "value": "??????????????????",
              "heading": "??????????????????"
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
        "title": "Placeholder ???????????? - scioPro"
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
          "title": "Radio ??????",
          "order": 3,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "????????????",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/radio"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Radio ??????",
              "heading": "radio-??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "??????",
              "heading": "??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "???????????????????????????",
              "heading": "???????????????????????????"
            },
            {
              "depth": 2,
              "value": "???????????????????????????",
              "heading": "???????????????????????????"
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
        "title": "Radio ?????? - scioPro"
      },
      {
        "path": "/components/signature",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Signature/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Signature/index.md",
          "updatedTime": 1665309152000,
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
          "updatedTime": 1665309152000,
          "componentName": "Signature",
          "title": "Signature ????????????",
          "order": 1,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "????????????",
            "order": 3,
            "__fallback": true,
            "path": "/zh-CN/components/signature"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Signature ????????????",
              "heading": "signature-????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            }
          ],
          "hasPreviewer": true,
          "locale": "zh-CN"
        },
        "title": "Signature ???????????? - scioPro"
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
          "title": "Space ??????",
          "order": 2,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "????????????",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/components/space"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Space ??????",
              "heading": "space-??????"
            },
            {
              "depth": 4,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "??????",
              "heading": "??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
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
        "title": "Space ?????? - scioPro"
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
          "title": "Switch ??????",
          "order": 5,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "????????????",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/switch"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Switch ??????",
              "heading": "switch-??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "???????????????",
              "heading": "???????????????"
            },
            {
              "depth": 2,
              "value": "??????",
              "heading": "??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
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
        "title": "Switch ?????? - scioPro"
      },
      {
        "path": "/components/tag",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Tag/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Tag/index.md",
          "updatedTime": 1667807575000,
          "componentName": "Tag",
          "title": "Tag",
          "order": 7,
          "nav": {
            "title": "Components",
            "path": "/components",
            "order": 2
          },
          "group": {
            "title": "Common components",
            "order": 2,
            "__fallback": true,
            "path": "/components/tag"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Tag Tags",
              "heading": "tag-tags"
            },
            {
              "depth": 2,
              "value": "When to use",
              "heading": "when-to-use"
            },
            {
              "depth": 2,
              "value": "When to use",
              "heading": "when-to-use-1"
            },
            {
              "depth": 2,
              "value": "custom size",
              "heading": "custom-size"
            },
            {
              "depth": 2,
              "value": "with icon",
              "heading": "with-icon"
            },
            {
              "depth": 2,
              "value": "custom color",
              "heading": "custom-color"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
        "title": "Tag - scioPro"
      },
      {
        "path": "/zh-CN/components/tag",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Tag/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Tag/index.zh-CN.md",
          "updatedTime": 1667807575000,
          "componentName": "Tag",
          "title": "Tag ??????",
          "order": 7,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "????????????",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/components/tag"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Tag ??????",
              "heading": "tag-??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "???????????????",
              "heading": "???????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "???????????????",
              "heading": "???????????????"
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
        "title": "Tag ?????? - scioPro"
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
          "title": "Color ??????",
          "order": 1,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "????????????",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/components/theme"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Color ??????",
              "heading": "color-??????"
            },
            {
              "depth": 2,
              "value": "??????",
              "heading": "??????"
            },
            {
              "depth": 2,
              "value": "??????",
              "heading": "??????"
            },
            {
              "depth": 1,
              "value": "?????????",
              "heading": "?????????"
            },
            {
              "depth": 1,
              "value": "?????????",
              "heading": "?????????"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Color ?????? - scioPro"
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
            "title": "React ??????",
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
          "title": "Cookie ??????",
          "order": 2,
          "nav": {
            "title": "????????????",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "?????????????????????",
            "order": 3,
            "__fallback": true,
            "path": "/zh-CN/utils/cookie-storage"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Cookie ??????",
              "heading": "cookie-??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Cookie ?????? - scioPro"
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
          "title": "Debounce ??????",
          "order": 2,
          "nav": {
            "title": "????????????",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "????????????",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/debounce"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Debounce ??????",
              "heading": "debounce-??????"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Debounce ?????? - scioPro"
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
          "title": "DetectDeviceType ????????????/PC??????",
          "order": 7,
          "nav": {
            "title": "????????????",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "????????????",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/detect-device-type"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "DetectDeviceType ????????????/PC ??????",
              "heading": "detectdevicetype-????????????pc-??????"
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
        "title": "DetectDeviceType ????????????/PC?????? - scioPro"
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
          "title": "EscapeHTML ??????HTML(???XSS??????)",
          "order": 6,
          "nav": {
            "title": "????????????",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "????????????",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/escape-html"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "EscapeHTML ?????? HTML(??? XSS ??????)",
              "heading": "escapehtml-??????-html???-xss-??????"
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
        "title": "EscapeHTML ??????HTML(???XSS??????) - scioPro"
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
          "title": "FileToBase64 ??????Base64??????",
          "order": 1,
          "nav": {
            "title": "????????????",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "????????????",
            "order": 4,
            "__fallback": true,
            "path": "/zh-CN/utils/file-to-base64"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "FileToBase64 ?????? Base64 ??????",
              "heading": "filetobase64-??????-base64-??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
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
        "title": "FileToBase64 ??????Base64?????? - scioPro"
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
          "title": "GetTimeInterval ???????????????",
          "order": 1,
          "nav": {
            "title": "????????????",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "????????????",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/utils/get-time-interval"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "GetTimeInterval ???????????????",
              "heading": "gettimeinterval-???????????????"
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
        "title": "GetTimeInterval ??????????????? - scioPro"
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
          "title": "GetdataTimeSec ?????????????????????",
          "order": 2,
          "nav": {
            "title": "????????????",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "????????????",
            "order": 2,
            "__fallback": true,
            "path": "/zh-CN/utils/getdata-time-sec"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "GetdataTimeSec ?????????????????????",
              "heading": "getdatatimesec-?????????????????????"
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
        "title": "GetdataTimeSec ????????????????????? - scioPro"
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
          "title": "LocalStorage ??????",
          "order": 1,
          "nav": {
            "title": "????????????",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "?????????????????????",
            "order": 3,
            "__fallback": true,
            "path": "/zh-CN/utils/local-storage-storage"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "LocalStorage ??????",
              "heading": "localstorage-??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "LocalStorage ?????? - scioPro"
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
          "title": "RandomColor ????????????",
          "order": 1,
          "nav": {
            "title": "????????????",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "????????????",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/random-color"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "RandomColor ????????????",
              "heading": "randomcolor-????????????"
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
        "title": "RandomColor ???????????? - scioPro"
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
          "title": "Session ??????",
          "order": 2,
          "nav": {
            "title": "????????????",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "?????????????????????",
            "order": 3,
            "__fallback": true,
            "path": "/zh-CN/utils/session-storage"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Session ??????",
              "heading": "session-??????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Session ?????? - scioPro"
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
          "title": "Throttle ??????",
          "order": 3,
          "nav": {
            "title": "????????????",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "????????????",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/throttle"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Throttle ??????",
              "heading": "throttle-??????"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Throttle ?????? - scioPro"
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
          "title": "Trim ????????????",
          "order": 3,
          "nav": {
            "title": "????????????",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "????????????",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/trim"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Trim ????????????",
              "heading": "trim-????????????"
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
        "title": "Trim ???????????? - scioPro"
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
          "title": "TurnCase ???????????????",
          "order": 5,
          "nav": {
            "title": "????????????",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "????????????",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/turn-case"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "TurnCase ???????????????",
              "heading": "turncase-???????????????"
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
        "title": "TurnCase ??????????????? - scioPro"
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
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright ?? 2022<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "???? Browser Compatibility",
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
          "title": "???? Browser Compatibility"
        },
        "title": "???? Browser Compatibility - scioPro"
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
            "desc": "<div class=\"markdown\"><p>scioPro ????????????????????????????????????????????? React UI ?????????????????????????????????????????????????????????</p></div>",
            "actions": [
              {
                "text": "????????????",
                "link": "/components"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "????????????",
              "desc": "<div class=\"markdown\"><p>??????????????????????????????????????????,???????????????????????????????????????????????????,????????????,??????????????????</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "????????????",
              "desc": "<div class=\"markdown\"><p>??????????????????????????? Bug,??????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "????????????",
              "desc": "<div class=\"markdown\"><p>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????,??????????????????,????????????????????????</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg",
              "title": "TypeScript",
              "desc": "<div class=\"markdown\"><p>?????? TypeScript ??????????????????????????????????????????</p></div>"
            },
            {
              "icon": "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr",
              "title": "????????????",
              "desc": "<div class=\"markdown\"><p>?????????????????????????????????????????????????????????????????????</p></div>"
            },
            {
              "icon": "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr",
              "title": "????????????",
              "desc": "<div class=\"markdown\"><p>?????????????????????????????????????????????????????????????????????????????????????????????</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright ?? 2022<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "???? ??????????????????",
              "heading": "-??????????????????"
            },
            {
              "depth": 2,
              "value": "????????????/TypeScript",
              "heading": "????????????typescript"
            },
            {
              "depth": 2,
              "value": "??????",
              "heading": "??????"
            },
            {
              "depth": 3,
              "value": "????????????pnpm??????",
              "heading": "????????????pnpm??????"
            },
            {
              "depth": 3,
              "value": "??????????????????",
              "heading": "??????????????????"
            },
            {
              "depth": 3,
              "value": "hooks ????????????",
              "heading": "hooks-????????????"
            },
            {
              "depth": 3,
              "value": "utils ???????????? ????????????",
              "heading": "utils-????????????-????????????"
            }
          ],
          "title": "???? ??????????????????",
          "locale": "zh-CN"
        },
        "title": "???? ?????????????????? - scioPro"
      },
      {
        "path": "/blog/algorithm/algorithm",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/algorithm/algorithm.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/algorithm/algorithm.md",
          "updatedTime": 1665569240000,
          "title": "95% ???????????????????????? 6 ???????????????",
          "order": 1,
          "nav": {
            "title": "??????",
            "path": "/blog",
            "order": 1
          },
          "group": {
            "title": "????????????",
            "order": 2,
            "path": "/blog/algorithm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "95% ???????????????????????? 6 ???????????????",
              "heading": "95-????????????????????????-6-???????????????"
            },
            {
              "depth": 1,
              "value": "1???????????????",
              "heading": "1????????????"
            },
            {
              "depth": 3,
              "value": "1.1 ????????????",
              "heading": "11-????????????"
            },
            {
              "depth": 3,
              "value": "1.2 ????????????",
              "heading": "12-????????????"
            },
            {
              "depth": 3,
              "value": "1.3 ?????????????????????????????????????????????",
              "heading": "13-?????????????????????????????????????????????"
            },
            {
              "depth": 4,
              "value": "DOM ?????????",
              "heading": "dom-?????????"
            },
            {
              "depth": 2,
              "value": "2 ????????????",
              "heading": "2-????????????"
            },
            {
              "depth": 3,
              "value": "2.1 ????????????",
              "heading": "21-????????????"
            },
            {
              "depth": 3,
              "value": "2.2 ????????????",
              "heading": "22-????????????"
            },
            {
              "depth": 3,
              "value": "2.3????????????????????????????????????????????",
              "heading": "23??????????????????????????????????????????"
            },
            {
              "depth": 4,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "3 ????????????",
              "heading": "3-????????????"
            },
            {
              "depth": 3,
              "value": "3.1 ????????????",
              "heading": "31-????????????"
            },
            {
              "depth": 3,
              "value": "3.2 ????????????",
              "heading": "32-????????????"
            },
            {
              "depth": 3,
              "value": "3.3 ?????????????????????????????????",
              "heading": "33-??????????????????????????????"
            },
            {
              "depth": 2,
              "value": "4 ????????????",
              "heading": "4-????????????"
            },
            {
              "depth": 3,
              "value": "4.1 ????????????",
              "heading": "41-????????????"
            },
            {
              "depth": 3,
              "value": "4.2 ????????????",
              "heading": "42-????????????"
            },
            {
              "depth": 3,
              "value": "4.3 ?????????????????????????????????",
              "heading": "43-?????????????????????????????????"
            },
            {
              "depth": 4,
              "value": "?????????????????????",
              "heading": "?????????????????????"
            },
            {
              "depth": 2,
              "value": "5 ????????????",
              "heading": "5-????????????"
            },
            {
              "depth": 3,
              "value": "5.1 ????????????",
              "heading": "51-????????????"
            },
            {
              "depth": 3,
              "value": "5.2 ????????????",
              "heading": "52-????????????"
            },
            {
              "depth": 3,
              "value": "5.3 ?????????????????????????????????????????????",
              "heading": "53-?????????????????????????????????????????????"
            },
            {
              "depth": 4,
              "value": "???????????????",
              "heading": "???????????????"
            },
            {
              "depth": 2,
              "value": "6 ????????????",
              "heading": "6-????????????"
            },
            {
              "depth": 3,
              "value": "6.1 ????????????",
              "heading": "61-????????????"
            },
            {
              "depth": 3,
              "value": "6.2 ????????????",
              "heading": "62-????????????"
            },
            {
              "depth": 1,
              "value": "??????",
              "heading": "??????"
            }
          ]
        },
        "title": "95% ???????????????????????? 6 ??????????????? - scioPro"
      },
      {
        "path": "/blog/algorithm/bubble-sort",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/algorithm/bubbleSort.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/algorithm/bubbleSort.md",
          "updatedTime": 1665569240000,
          "title": "????????????",
          "order": 2,
          "nav": {
            "title": "??????",
            "path": "/blog",
            "order": 1
          },
          "group": {
            "title": "????????????",
            "order": 3,
            "path": "/blog/algorithm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "????????????--??????????????? n^2",
              "heading": "????????????--???????????????-n2"
            },
            {
              "depth": 1,
              "value": "????????????",
              "heading": "????????????"
            }
          ]
        },
        "title": "???????????? - scioPro"
      },
      {
        "path": "/blog/algorithm/insertion-sort",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/algorithm/insertionSort.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/algorithm/insertionSort.md",
          "updatedTime": 1665569240000,
          "title": "????????????",
          "order": 4,
          "nav": {
            "title": "??????",
            "path": "/blog",
            "order": 1
          },
          "group": {
            "title": "????????????",
            "order": 3,
            "path": "/blog/algorithm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "????????????--??????????????? n^2",
              "heading": "????????????--???????????????-n2"
            },
            {
              "depth": 1,
              "value": "????????????",
              "heading": "????????????"
            }
          ]
        },
        "title": "???????????? - scioPro"
      },
      {
        "path": "/blog/algorithm/merge-sort",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/algorithm/mergeSort.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/algorithm/mergeSort.md",
          "updatedTime": 1665569240000,
          "title": "????????????",
          "order": 4,
          "nav": {
            "title": "??????",
            "path": "/blog",
            "order": 1
          },
          "group": {
            "title": "????????????",
            "order": 3,
            "path": "/blog/algorithm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "????????????--??????????????? nlog(n)",
              "heading": "????????????--???????????????-nlogn"
            },
            {
              "depth": 1,
              "value": "????????????",
              "heading": "????????????"
            }
          ]
        },
        "title": "???????????? - scioPro"
      },
      {
        "path": "/blog/algorithm/quick-sort",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/algorithm/quickSort.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/algorithm/quickSort.md",
          "updatedTime": 1665569240000,
          "title": "????????????",
          "order": 4,
          "nav": {
            "title": "??????",
            "path": "/blog",
            "order": 1
          },
          "group": {
            "title": "????????????",
            "order": 3,
            "path": "/blog/algorithm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "????????????--??????????????? nlogn~ n^2 ??????",
              "heading": "????????????--???????????????-nlogn-n2-??????"
            },
            {
              "depth": 1,
              "value": "????????????",
              "heading": "????????????"
            }
          ]
        },
        "title": "???????????? - scioPro"
      },
      {
        "path": "/blog/algorithm/selection-sort",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/algorithm/selectionSort.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/algorithm/selectionSort.md",
          "updatedTime": 1665569240000,
          "title": "????????????",
          "order": 3,
          "nav": {
            "title": "??????",
            "path": "/blog",
            "order": 1
          },
          "group": {
            "title": "????????????",
            "order": 3,
            "path": "/blog/algorithm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "????????????--??????????????? n^2",
              "heading": "????????????--???????????????-n2"
            },
            {
              "depth": 1,
              "value": "????????????",
              "heading": "????????????"
            }
          ]
        },
        "title": "???????????? - scioPro"
      },
      {
        "path": "/blog/audition/handwriting",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/audition/handwriting.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/audition/handwriting.md",
          "updatedTime": 1665569240000,
          "title": "??????????????????",
          "order": 1,
          "nav": {
            "title": "??????",
            "path": "/blog",
            "order": 1
          },
          "group": {
            "title": "?????????????????????",
            "order": 2,
            "path": "/blog/audition"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "??????????????????",
              "heading": "??????????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            }
          ]
        },
        "title": "?????????????????? - scioPro"
      },
      {
        "path": "/blog/audition/promise",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/audition/promise.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/audition/promise.md",
          "updatedTime": 1665569240000,
          "title": "Promise",
          "order": 1,
          "nav": {
            "title": "??????",
            "path": "/blog",
            "order": 1
          },
          "group": {
            "title": "?????????????????????",
            "order": 2,
            "path": "/blog/audition"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Promise",
              "heading": "promise"
            }
          ]
        },
        "title": "Promise - scioPro"
      },
      {
        "path": "/zh-CN/blog/algorithm/algorithm",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/algorithm/algorithm.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/algorithm/algorithm.md",
          "updatedTime": 1665569240000,
          "title": "95% ???????????????????????? 6 ???????????????",
          "order": 1,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/blog",
            "order": 1
          },
          "group": {
            "title": "????????????",
            "order": 2,
            "path": "/zh-CN/blog/algorithm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "95% ???????????????????????? 6 ???????????????",
              "heading": "95-????????????????????????-6-???????????????"
            },
            {
              "depth": 1,
              "value": "1???????????????",
              "heading": "1????????????"
            },
            {
              "depth": 3,
              "value": "1.1 ????????????",
              "heading": "11-????????????"
            },
            {
              "depth": 3,
              "value": "1.2 ????????????",
              "heading": "12-????????????"
            },
            {
              "depth": 3,
              "value": "1.3 ?????????????????????????????????????????????",
              "heading": "13-?????????????????????????????????????????????"
            },
            {
              "depth": 4,
              "value": "DOM ?????????",
              "heading": "dom-?????????"
            },
            {
              "depth": 2,
              "value": "2 ????????????",
              "heading": "2-????????????"
            },
            {
              "depth": 3,
              "value": "2.1 ????????????",
              "heading": "21-????????????"
            },
            {
              "depth": 3,
              "value": "2.2 ????????????",
              "heading": "22-????????????"
            },
            {
              "depth": 3,
              "value": "2.3????????????????????????????????????????????",
              "heading": "23??????????????????????????????????????????"
            },
            {
              "depth": 4,
              "value": "????????????",
              "heading": "????????????"
            },
            {
              "depth": 2,
              "value": "3 ????????????",
              "heading": "3-????????????"
            },
            {
              "depth": 3,
              "value": "3.1 ????????????",
              "heading": "31-????????????"
            },
            {
              "depth": 3,
              "value": "3.2 ????????????",
              "heading": "32-????????????"
            },
            {
              "depth": 3,
              "value": "3.3 ?????????????????????????????????",
              "heading": "33-??????????????????????????????"
            },
            {
              "depth": 2,
              "value": "4 ????????????",
              "heading": "4-????????????"
            },
            {
              "depth": 3,
              "value": "4.1 ????????????",
              "heading": "41-????????????"
            },
            {
              "depth": 3,
              "value": "4.2 ????????????",
              "heading": "42-????????????"
            },
            {
              "depth": 3,
              "value": "4.3 ?????????????????????????????????",
              "heading": "43-?????????????????????????????????"
            },
            {
              "depth": 4,
              "value": "?????????????????????",
              "heading": "?????????????????????"
            },
            {
              "depth": 2,
              "value": "5 ????????????",
              "heading": "5-????????????"
            },
            {
              "depth": 3,
              "value": "5.1 ????????????",
              "heading": "51-????????????"
            },
            {
              "depth": 3,
              "value": "5.2 ????????????",
              "heading": "52-????????????"
            },
            {
              "depth": 3,
              "value": "5.3 ?????????????????????????????????????????????",
              "heading": "53-?????????????????????????????????????????????"
            },
            {
              "depth": 4,
              "value": "???????????????",
              "heading": "???????????????"
            },
            {
              "depth": 2,
              "value": "6 ????????????",
              "heading": "6-????????????"
            },
            {
              "depth": 3,
              "value": "6.1 ????????????",
              "heading": "61-????????????"
            },
            {
              "depth": 3,
              "value": "6.2 ????????????",
              "heading": "62-????????????"
            },
            {
              "depth": 1,
              "value": "??????",
              "heading": "??????"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "95% ???????????????????????? 6 ??????????????? - scioPro"
      },
      {
        "path": "/zh-CN/blog/algorithm/bubble-sort",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/algorithm/bubbleSort.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/algorithm/bubbleSort.md",
          "updatedTime": 1665569240000,
          "title": "????????????",
          "order": 2,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/blog",
            "order": 1
          },
          "group": {
            "title": "????????????",
            "order": 3,
            "path": "/zh-CN/blog/algorithm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "????????????--??????????????? n^2",
              "heading": "????????????--???????????????-n2"
            },
            {
              "depth": 1,
              "value": "????????????",
              "heading": "????????????"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "???????????? - scioPro"
      },
      {
        "path": "/zh-CN/blog/algorithm/insertion-sort",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/algorithm/insertionSort.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/algorithm/insertionSort.md",
          "updatedTime": 1665569240000,
          "title": "????????????",
          "order": 4,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/blog",
            "order": 1
          },
          "group": {
            "title": "????????????",
            "order": 3,
            "path": "/zh-CN/blog/algorithm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "????????????--??????????????? n^2",
              "heading": "????????????--???????????????-n2"
            },
            {
              "depth": 1,
              "value": "????????????",
              "heading": "????????????"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "???????????? - scioPro"
      },
      {
        "path": "/zh-CN/blog/algorithm/merge-sort",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/algorithm/mergeSort.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/algorithm/mergeSort.md",
          "updatedTime": 1665569240000,
          "title": "????????????",
          "order": 4,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/blog",
            "order": 1
          },
          "group": {
            "title": "????????????",
            "order": 3,
            "path": "/zh-CN/blog/algorithm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "????????????--??????????????? nlog(n)",
              "heading": "????????????--???????????????-nlogn"
            },
            {
              "depth": 1,
              "value": "????????????",
              "heading": "????????????"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "???????????? - scioPro"
      },
      {
        "path": "/zh-CN/blog/algorithm/quick-sort",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/algorithm/quickSort.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/algorithm/quickSort.md",
          "updatedTime": 1665569240000,
          "title": "????????????",
          "order": 4,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/blog",
            "order": 1
          },
          "group": {
            "title": "????????????",
            "order": 3,
            "path": "/zh-CN/blog/algorithm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "????????????--??????????????? nlogn~ n^2 ??????",
              "heading": "????????????--???????????????-nlogn-n2-??????"
            },
            {
              "depth": 1,
              "value": "????????????",
              "heading": "????????????"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "???????????? - scioPro"
      },
      {
        "path": "/zh-CN/blog/algorithm/selection-sort",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/algorithm/selectionSort.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/algorithm/selectionSort.md",
          "updatedTime": 1665569240000,
          "title": "????????????",
          "order": 3,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/blog",
            "order": 1
          },
          "group": {
            "title": "????????????",
            "order": 3,
            "path": "/zh-CN/blog/algorithm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "????????????--??????????????? n^2",
              "heading": "????????????--???????????????-n2"
            },
            {
              "depth": 1,
              "value": "????????????",
              "heading": "????????????"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "???????????? - scioPro"
      },
      {
        "path": "/zh-CN/blog/audition/handwriting",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/audition/handwriting.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/audition/handwriting.md",
          "updatedTime": 1665569240000,
          "title": "??????????????????",
          "order": 1,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/blog",
            "order": 1
          },
          "group": {
            "title": "?????????????????????",
            "order": 2,
            "path": "/zh-CN/blog/audition"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "??????????????????",
              "heading": "??????????????????"
            },
            {
              "depth": 2,
              "value": "????????????",
              "heading": "????????????"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "?????????????????? - scioPro"
      },
      {
        "path": "/zh-CN/blog/audition/promise",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/audition/promise.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/audition/promise.md",
          "updatedTime": 1665569240000,
          "title": "Promise",
          "order": 1,
          "nav": {
            "title": "??????",
            "path": "/zh-CN/blog",
            "order": 1
          },
          "group": {
            "title": "?????????????????????",
            "order": 2,
            "path": "/zh-CN/blog/audition"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Promise",
              "heading": "promise"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Promise - scioPro"
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
        "path": "/blog/algorithm",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/blog/algorithm/algorithm"
      },
      {
        "path": "/blog",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/blog/algorithm/algorithm"
      },
      {
        "path": "/blog/audition",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/blog/audition/handwriting"
      },
      {
        "path": "/zh-CN/blog/algorithm",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/zh-CN/blog/algorithm/algorithm"
      },
      {
        "path": "/zh-CN/blog",
        "meta": {
          "order": 1
        },
        "exact": true,
        "redirect": "/zh-CN/blog/algorithm/algorithm"
      },
      {
        "path": "/zh-CN/blog/audition",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/zh-CN/blog/audition/handwriting"
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
