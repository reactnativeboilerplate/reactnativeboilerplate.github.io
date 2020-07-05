(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(196)),i={id:"editor",title:"Setting Up Your Editor"},c={id:"general/editor",isDocsHomePage:!1,title:"Setting Up Your Editor",description:"You can edit React Boilerplate using any editor or IDE, but there are a few extra steps that you can take to make sure your coding experience is as good as it can be.",source:"@site/docs/general/editor.md",permalink:"/docs/general/editor",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/general/editor.md"},s=[{value:"VS Code",id:"vs-code",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can edit React Boilerplate using any editor or IDE, but there are a few extra steps that you can take to make sure your coding experience is as good as it can be."),Object(a.b)("h2",{id:"vs-code"},"VS Code"),Object(a.b)("p",null,"To get the best editing experience with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com"}),"VS Code"),", create a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/Docs/languages/javascript#_javascript-projects-jsconfigjson"}),Object(a.b)("inlineCode",{parentName:"a"},"jsconfig.json"))," file at the root of your project:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "baseUrl": "app",\n    "module": "commonjs",\n    "target": "es2016",\n    "jsx": "react"\n  },\n  "exclude": ["node_modules", "**/node_modules/*"]\n}\n')),Object(a.b)("p",null,"This ",Object(a.b)("inlineCode",{parentName:"p"},"jsconfig.json")," file tells VS Code to treat all JS files as part of the same project, improving IntelliSense, code navigation, and refactoring. You can configure project wide settings in using the ",Object(a.b)("inlineCode",{parentName:"p"},"jsconfig.json"),", such as only allowing functions from the ES5 standard library, or even enable ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/languages/javascript#_type-checking"}),"more advanced type checking for JS files")),Object(a.b)("h1",{id:"eslint--prettier-integration"},"ESLint + Prettier integration"),Object(a.b)("p",null,"You can also get VSCode to understand your project's static code analysis setup. If you do this:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You'll see any warnings or errors directly within VSCode"),Object(a.b)("li",{parentName:"ul"},"VSCode can also automatically fix or format your code for you")),Object(a.b)("p",null,"To make this happen, install both the ESLint and Prettier extensions for VSCode and add the following to either your User or Workspace Settings:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "editor.formatOnSave": true,\n  "prettier.eslintIntegration": true,\n  "eslint.run": "onSave"\n}\n')),Object(a.b)("p",null,"Here's also a detailed video on the topic: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=YIvjKId9m2c"}),"How to Setup VS Code + Prettier + ESLint")))}u.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);