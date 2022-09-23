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
        "path": "/components/foo",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Foo/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Foo/index.md",
          "updatedTime": 1663840739000,
          "componentName": "Foo",
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
            "path": "/components/foo"
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
        "title": "Box box container - scioPro"
      },
      {
        "path": "/zh-CN/components/foo",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/components/src/Foo/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/components/src/Foo/index.zh-CN.md",
          "updatedTime": 1663840739000,
          "componentName": "Foo",
          "title": "Box 盒子容器",
          "order": 1,
          "nav": {
            "title": "组件库",
            "path": "/zh-CN/components",
            "order": 2
          },
          "group": {
            "title": "布局组件",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/components/foo"
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
        "title": "Box 盒子容器 - scioPro"
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
        "path": "/utils/add",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/add/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/add/index.md",
          "updatedTime": 1663840739000,
          "title": "Add",
          "order": 1,
          "nav": {
            "title": "Utils",
            "path": "/utils",
            "order": 4
          },
          "group": {
            "title": "Computational correlation",
            "order": 1,
            "__fallback": true,
            "path": "/utils/add"
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
        "title": "Add - scioPro"
      },
      {
        "path": "/zh-CN/utils/add",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/packages/utils/src/add/index.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "packages/utils/src/add/index.zh-CN.md",
          "updatedTime": 1663840739000,
          "title": "Add",
          "order": 1,
          "nav": {
            "title": "工具函数",
            "path": "/zh-CN/utils",
            "order": 4
          },
          "group": {
            "title": "计算相关",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/utils/add"
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
        "title": "Add - scioPro"
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
          "updatedTime": 1663840739000,
          "title": "What's new in React 18",
          "order": 1,
          "nav": {
            "title": "Blog",
            "path": "/blog/react",
            "order": 2
          },
          "group": {
            "title": "React related",
            "order": 1,
            "__fallback": true,
            "path": "/blog/react"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "What's new in React 18",
              "heading": "whats-new-in-react-18"
            }
          ]
        },
        "title": "What's new in React 18 - scioPro"
      },
      {
        "path": "/zh-CN/blog/react/react18",
        "component": require('/Users/zhaojianbin/Desktop/demo/scioPro/docs/blog/react/react18.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/react/react18.zh-CN.md",
          "updatedTime": 1663840739000,
          "title": "React 18 新特性",
          "order": 1,
          "nav": {
            "title": "博客",
            "path": "/zh-CN/blog/react",
            "order": 2
          },
          "group": {
            "title": "React相关",
            "order": 1,
            "__fallback": true,
            "path": "/zh-CN/blog/react"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "React 18 新特性",
              "heading": "react-18-新特性"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "React 18 新特性 - scioPro"
      },
      {
        "path": "/components",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/components/foo"
      },
      {
        "path": "/zh-CN/components",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/zh-CN/components/foo"
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
        "redirect": "/utils/add"
      },
      {
        "path": "/zh-CN/utils",
        "meta": {
          "order": 4
        },
        "exact": true,
        "redirect": "/zh-CN/utils/add"
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
