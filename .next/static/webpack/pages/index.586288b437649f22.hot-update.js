"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/.pnpm/next@13.5.6_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mqtt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mqtt */ \"./node_modules/.pnpm/mqtt@5.1.3/node_modules/mqtt/build/mqtt.js\");\n/* harmony import */ var mqtt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mqtt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/.pnpm/@nextui-org+react@2.1.13_@types+react@18.2.31_framer-motion@10.16.4_react-dom@18.2.0_react@18.2.0_tailwindcss@3.3.3/node_modules/@nextui-org/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [client, setClient] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,mqtt__WEBPACK_IMPORTED_MODULE_2__.connect)(\"ws://localhost:8083/mqtt\", {\n        username: \"user\",\n        password: \"abcd1234.\"\n    }));\n    const [connectStatus, setConnectStatus] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Disconnected\");\n    const [payload, setPayload] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (client) {\n            console.log(client);\n            client.on(\"connect\", ()=>{\n                setConnectStatus(\"Connected\");\n                client.subscribe(\"#\");\n            });\n            client.on(\"error\", (err)=>{\n                console.error(\"Connection error: \", err);\n                client.end();\n            });\n            client.on(\"reconnect\", ()=>{\n                setConnectStatus(\"Reconnecting\");\n            });\n            client.on(\"message\", (topic, message)=>{\n                const payload = {\n                    topic,\n                    message: message.toString()\n                };\n                setPayload(payload);\n            });\n        }\n    }, [\n        client\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center self-center items-center align-middle p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {\n                    content: \"I am a tooltip\",\n                    classNames: {\n                        base: \"py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-neutral-400\",\n                        arrow: \"bg-neutral-400 dark:bg-white\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        children: \"Hover me\"\n                    }, void 0, false, {\n                        fileName: \"/Users/donaedhelwen/codeProjects\\uD83D\\uDCA1/mqtt-unified-namespace-hacktoberfest-10/src/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/donaedhelwen/codeProjects\\uD83D\\uDCA1/mqtt-unified-namespace-hacktoberfest-10/src/pages/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    width: 5000,\n                    height: 5000,\n                    alt: \"creadores del proyecto\",\n                    className: \"aspect-video object-contain md:w-1/2 w-full\",\n                    src: \"/us.jpg\"\n                }, void 0, false, {\n                    fileName: \"/Users/donaedhelwen/codeProjects\\uD83D\\uDCA1/mqtt-unified-namespace-hacktoberfest-10/src/pages/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/donaedhelwen/codeProjects\\uD83D\\uDCA1/mqtt-unified-namespace-hacktoberfest-10/src/pages/index.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/donaedhelwen/codeProjects\\uD83D\\uDCA1/mqtt-unified-namespace-hacktoberfest-10/src/pages/index.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"W/ILP/CIBdka4Fxt4jKo5WOpCXs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNRO0FBQ0M7QUFFYztBQUUzQyxTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUNsQ0YsNkNBQU9BLENBQUMsNEJBQTRCO1FBQ2xDUSxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtJQUVGLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQyxDQUFDO0lBRXhDRCxnREFBU0EsQ0FBQztRQUNSLElBQUlLLFFBQVE7WUFDVlEsUUFBUUMsR0FBRyxDQUFDVDtZQUNaQSxPQUFPVSxFQUFFLENBQUMsV0FBVztnQkFDbkJMLGlCQUFpQjtnQkFDakJMLE9BQU9XLFNBQVMsQ0FBQztZQUNuQjtZQUNBWCxPQUFPVSxFQUFFLENBQUMsU0FBUyxDQUFDRTtnQkFDbEJKLFFBQVFLLEtBQUssQ0FBQyxzQkFBc0JEO2dCQUNwQ1osT0FBT2MsR0FBRztZQUNaO1lBQ0FkLE9BQU9VLEVBQUUsQ0FBQyxhQUFhO2dCQUNyQkwsaUJBQWlCO1lBQ25CO1lBQ0FMLE9BQU9VLEVBQUUsQ0FBQyxXQUFXLENBQUNLLE9BQU9DO2dCQUMzQixNQUFNVixVQUFVO29CQUFFUztvQkFBT0MsU0FBU0EsUUFBUUMsUUFBUTtnQkFBRztnQkFDckRWLFdBQVdEO1lBQ2I7UUFDRjtJQUNGLEdBQUc7UUFBQ047S0FBTztJQUVYLHFCQUNFLDhEQUFDa0I7a0JBQ0MsNEVBQUNDO1lBQUlDLFdBQVk7OzhCQUNmLDhEQUFDdkIsc0RBQU9BO29CQUFDd0IsU0FBUTtvQkFBaUJDLFlBQVk7d0JBQzVDQyxNQUFNO3dCQUNOQyxPQUFPO29CQUNUOzhCQUNFLDRFQUFDMUIscURBQU1BO2tDQUFDOzs7Ozs7Ozs7Ozs4QkFFViw4REFBQ0wsbURBQVNBO29CQUNSZ0MsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsS0FBSztvQkFDTFAsV0FBVTtvQkFDVlEsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZjtHQWxEd0I3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgTXF0dENsaWVudCwgY29ubmVjdCB9IGZyb20gXCJtcXR0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEltYWdlLCBUb29sdGlwLCBCdXR0b24gfSBmcm9tICdAbmV4dHVpLW9yZy9yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NsaWVudCwgc2V0Q2xpZW50XSA9IHVzZVN0YXRlPE1xdHRDbGllbnQgfCBudWxsPihcbiAgICBjb25uZWN0KFwid3M6Ly9sb2NhbGhvc3Q6ODA4My9tcXR0XCIsIHtcbiAgICAgIHVzZXJuYW1lOiBcInVzZXJcIixcbiAgICAgIHBhc3N3b3JkOiBcImFiY2QxMjM0LlwiLFxuICAgIH0pXG4gICk7XG4gIGNvbnN0IFtjb25uZWN0U3RhdHVzLCBzZXRDb25uZWN0U3RhdHVzXSA9IHVzZVN0YXRlKFwiRGlzY29ubmVjdGVkXCIpO1xuICBjb25zdCBbcGF5bG9hZCwgc2V0UGF5bG9hZF0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2xpZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhjbGllbnQpO1xuICAgICAgY2xpZW50Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICAgIHNldENvbm5lY3RTdGF0dXMoXCJDb25uZWN0ZWRcIik7XG4gICAgICAgIGNsaWVudC5zdWJzY3JpYmUoXCIjXCIpO1xuICAgICAgfSk7XG4gICAgICBjbGllbnQub24oXCJlcnJvclwiLCAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb25uZWN0aW9uIGVycm9yOiBcIiwgZXJyKTtcbiAgICAgICAgY2xpZW50LmVuZCgpO1xuICAgICAgfSk7XG4gICAgICBjbGllbnQub24oXCJyZWNvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgICBzZXRDb25uZWN0U3RhdHVzKFwiUmVjb25uZWN0aW5nXCIpO1xuICAgICAgfSk7XG4gICAgICBjbGllbnQub24oXCJtZXNzYWdlXCIsICh0b3BpYywgbWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXlsb2FkID0geyB0b3BpYywgbWVzc2FnZTogbWVzc2FnZS50b1N0cmluZygpIH07XG4gICAgICAgIHNldFBheWxvYWQocGF5bG9hZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtjbGllbnRdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyIHNlbGYtY2VudGVyIGl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUgcC02YH0+XG4gICAgICAgIDxUb29sdGlwIGNvbnRlbnQ9XCJJIGFtIGEgdG9vbHRpcFwiIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICBiYXNlOiBcInB5LTIgcHgtNCBzaGFkb3cteGwgdGV4dC1ibGFjayBiZy1ncmFkaWVudC10by1iciBmcm9tLXdoaXRlIHRvLW5ldXRyYWwtNDAwXCIsXG4gICAgICAgICAgYXJyb3c6IFwiYmctbmV1dHJhbC00MDAgZGFyazpiZy13aGl0ZVwiLFxuICAgICAgICB9fT5cbiAgICAgICAgICA8QnV0dG9uPkhvdmVyIG1lPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPE5leHRJbWFnZVxuICAgICAgICAgIHdpZHRoPXs1MDAwfVxuICAgICAgICAgIGhlaWdodD17NTAwMH1cbiAgICAgICAgICBhbHQ9eydjcmVhZG9yZXMgZGVsIHByb3llY3RvJ31cbiAgICAgICAgICBjbGFzc05hbWU9XCJhc3BlY3QtdmlkZW8gb2JqZWN0LWNvbnRhaW4gbWQ6dy0xLzIgdy1mdWxsXCJcbiAgICAgICAgICBzcmM9eycvdXMuanBnJ31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0SW1hZ2UiLCJjb25uZWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUb29sdGlwIiwiQnV0dG9uIiwiSG9tZSIsImNsaWVudCIsInNldENsaWVudCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25uZWN0U3RhdHVzIiwic2V0Q29ubmVjdFN0YXR1cyIsInBheWxvYWQiLCJzZXRQYXlsb2FkIiwiY29uc29sZSIsImxvZyIsIm9uIiwic3Vic2NyaWJlIiwiZXJyIiwiZXJyb3IiLCJlbmQiLCJ0b3BpYyIsIm1lc3NhZ2UiLCJ0b1N0cmluZyIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50IiwiY2xhc3NOYW1lcyIsImJhc2UiLCJhcnJvdyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});