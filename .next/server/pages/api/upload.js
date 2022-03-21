module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/upload.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next-connect/dist/index.cjs":
/*!**************************************************!*\
  !*** ./node_modules/next-connect/dist/index.cjs ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Trouter = __webpack_require__(/*! trouter */ \"trouter\");\n\nconst onerror = (err, req, res) =>\n  (res.statusCode = err.status || 500) && res.end(err.message);\nconst isResSent = (res) => res.finished || res.headersSent || res.writableEnded;\nconst mount = (fn) => (fn.routes ? fn.handle.bind(fn) : fn);\n\nmodule.exports = function factory({\n  onError = onerror,\n  onNoMatch = onerror.bind(null, { status: 404, message: \"not found\" }),\n  attachParams = false,\n  disableResponseWait = false,\n} = {}) {\n  async function nc(req, res) {\n    let finishP;\n    if (!disableResponseWait && \"once\" in res)\n      finishP = new Promise((resolve) => {\n        res.once(\"finish\", resolve);\n        if (isResSent(res)) resolve();\n      });\n    nc.handle(req, res, (err, next) =>\n      err\n        ? onError(err, req, res, () => next())\n        : !isResSent(res) && onNoMatch(req, res)\n    );\n    await finishP;\n  }\n  nc.routes = [];\n  const _use = Trouter.prototype.use.bind(nc);\n  const _find = Trouter.prototype.find.bind(nc);\n  const _add = Trouter.prototype.add.bind(nc);\n  function add(method, base, ...fns) {\n    if (typeof base === \"function\") return add(method, \"*\", base, ...fns);\n    _add(method, base, ...fns);\n    return nc;\n  }\n  nc.use = function use(base, ...fns) {\n    if (typeof base === \"function\") return this.use(\"/\", base, ...fns);\n    if (typeof base === \"string\" && base !== \"/\") {\n      let slashAdded = false;\n      fns.unshift((req, _, next) => {\n        req.url = req.url.substring(base.length);\n        if ((slashAdded = req.url[0] !== \"/\")) req.url = \"/\" + req.url;\n        next();\n      });\n      fns.push(\n        (req, _, next) =>\n          (req.url = base + (slashAdded ? req.url.substring(1) : req.url)) &&\n          next()\n      );\n    }\n\n    _use(base, ...fns.map(mount));\n    return nc;\n  };\n  nc.all = add.bind(nc, \"\");\n  nc.get = add.bind(nc, \"GET\");\n  nc.head = add.bind(nc, \"HEAD\");\n  nc.post = add.bind(nc, \"POST\");\n  nc.put = add.bind(nc, \"PUT\");\n  nc.delete = add.bind(nc, \"DELETE\");\n  nc.options = add.bind(nc, \"OPTIONS\");\n  nc.trace = add.bind(nc, \"TRACE\");\n  nc.patch = add.bind(nc, \"PATCH\");\n  nc.run = function run(req, res) {\n    return new Promise((resolve, reject) => {\n      this.handle(req, res, (err) => (err ? reject(err) : resolve()));\n    });\n  };\n  nc.handle = function handle(req, res, done) {\n    const idx = req.url.indexOf(\"?\");\n    const { handlers, params } = _find(\n      req.method,\n      idx !== -1 ? req.url.substring(0, idx) : req.url\n    );\n    if (attachParams) req.params = params;\n    let i = 0;\n    const len = handlers.length;\n    const loop = async (next) => handlers[i++](req, res, next);\n    const next = (err) => {\n      i < len && !err ? loop(next).catch(next) : done(err, next);\n    };\n    next();\n  };\n  return nc;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC1jb25uZWN0L2Rpc3QvaW5kZXguY2pzPzAwMmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLG1CQUFPLENBQUMsd0JBQVM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DO0FBQ3RFO0FBQ0E7QUFDQSxDQUFDLEtBQUs7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0LWNvbm5lY3QvZGlzdC9pbmRleC5janMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUcm91dGVyID0gcmVxdWlyZShcInRyb3V0ZXJcIik7XG5cbmNvbnN0IG9uZXJyb3IgPSAoZXJyLCByZXEsIHJlcykgPT5cbiAgKHJlcy5zdGF0dXNDb2RlID0gZXJyLnN0YXR1cyB8fCA1MDApICYmIHJlcy5lbmQoZXJyLm1lc3NhZ2UpO1xuY29uc3QgaXNSZXNTZW50ID0gKHJlcykgPT4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudCB8fCByZXMud3JpdGFibGVFbmRlZDtcbmNvbnN0IG1vdW50ID0gKGZuKSA9PiAoZm4ucm91dGVzID8gZm4uaGFuZGxlLmJpbmQoZm4pIDogZm4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZhY3Rvcnkoe1xuICBvbkVycm9yID0gb25lcnJvcixcbiAgb25Ob01hdGNoID0gb25lcnJvci5iaW5kKG51bGwsIHsgc3RhdHVzOiA0MDQsIG1lc3NhZ2U6IFwibm90IGZvdW5kXCIgfSksXG4gIGF0dGFjaFBhcmFtcyA9IGZhbHNlLFxuICBkaXNhYmxlUmVzcG9uc2VXYWl0ID0gZmFsc2UsXG59ID0ge30pIHtcbiAgYXN5bmMgZnVuY3Rpb24gbmMocmVxLCByZXMpIHtcbiAgICBsZXQgZmluaXNoUDtcbiAgICBpZiAoIWRpc2FibGVSZXNwb25zZVdhaXQgJiYgXCJvbmNlXCIgaW4gcmVzKVxuICAgICAgZmluaXNoUCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHJlcy5vbmNlKFwiZmluaXNoXCIsIHJlc29sdmUpO1xuICAgICAgICBpZiAoaXNSZXNTZW50KHJlcykpIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIG5jLmhhbmRsZShyZXEsIHJlcywgKGVyciwgbmV4dCkgPT5cbiAgICAgIGVyclxuICAgICAgICA/IG9uRXJyb3IoZXJyLCByZXEsIHJlcywgKCkgPT4gbmV4dCgpKVxuICAgICAgICA6ICFpc1Jlc1NlbnQocmVzKSAmJiBvbk5vTWF0Y2gocmVxLCByZXMpXG4gICAgKTtcbiAgICBhd2FpdCBmaW5pc2hQO1xuICB9XG4gIG5jLnJvdXRlcyA9IFtdO1xuICBjb25zdCBfdXNlID0gVHJvdXRlci5wcm90b3R5cGUudXNlLmJpbmQobmMpO1xuICBjb25zdCBfZmluZCA9IFRyb3V0ZXIucHJvdG90eXBlLmZpbmQuYmluZChuYyk7XG4gIGNvbnN0IF9hZGQgPSBUcm91dGVyLnByb3RvdHlwZS5hZGQuYmluZChuYyk7XG4gIGZ1bmN0aW9uIGFkZChtZXRob2QsIGJhc2UsIC4uLmZucykge1xuICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gYWRkKG1ldGhvZCwgXCIqXCIsIGJhc2UsIC4uLmZucyk7XG4gICAgX2FkZChtZXRob2QsIGJhc2UsIC4uLmZucyk7XG4gICAgcmV0dXJuIG5jO1xuICB9XG4gIG5jLnVzZSA9IGZ1bmN0aW9uIHVzZShiYXNlLCAuLi5mbnMpIHtcbiAgICBpZiAodHlwZW9mIGJhc2UgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRoaXMudXNlKFwiL1wiLCBiYXNlLCAuLi5mbnMpO1xuICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gXCJzdHJpbmdcIiAmJiBiYXNlICE9PSBcIi9cIikge1xuICAgICAgbGV0IHNsYXNoQWRkZWQgPSBmYWxzZTtcbiAgICAgIGZucy51bnNoaWZ0KChyZXEsIF8sIG5leHQpID0+IHtcbiAgICAgICAgcmVxLnVybCA9IHJlcS51cmwuc3Vic3RyaW5nKGJhc2UubGVuZ3RoKTtcbiAgICAgICAgaWYgKChzbGFzaEFkZGVkID0gcmVxLnVybFswXSAhPT0gXCIvXCIpKSByZXEudXJsID0gXCIvXCIgKyByZXEudXJsO1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcbiAgICAgIGZucy5wdXNoKFxuICAgICAgICAocmVxLCBfLCBuZXh0KSA9PlxuICAgICAgICAgIChyZXEudXJsID0gYmFzZSArIChzbGFzaEFkZGVkID8gcmVxLnVybC5zdWJzdHJpbmcoMSkgOiByZXEudXJsKSkgJiZcbiAgICAgICAgICBuZXh0KClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3VzZShiYXNlLCAuLi5mbnMubWFwKG1vdW50KSk7XG4gICAgcmV0dXJuIG5jO1xuICB9O1xuICBuYy5hbGwgPSBhZGQuYmluZChuYywgXCJcIik7XG4gIG5jLmdldCA9IGFkZC5iaW5kKG5jLCBcIkdFVFwiKTtcbiAgbmMuaGVhZCA9IGFkZC5iaW5kKG5jLCBcIkhFQURcIik7XG4gIG5jLnBvc3QgPSBhZGQuYmluZChuYywgXCJQT1NUXCIpO1xuICBuYy5wdXQgPSBhZGQuYmluZChuYywgXCJQVVRcIik7XG4gIG5jLmRlbGV0ZSA9IGFkZC5iaW5kKG5jLCBcIkRFTEVURVwiKTtcbiAgbmMub3B0aW9ucyA9IGFkZC5iaW5kKG5jLCBcIk9QVElPTlNcIik7XG4gIG5jLnRyYWNlID0gYWRkLmJpbmQobmMsIFwiVFJBQ0VcIik7XG4gIG5jLnBhdGNoID0gYWRkLmJpbmQobmMsIFwiUEFUQ0hcIik7XG4gIG5jLnJ1biA9IGZ1bmN0aW9uIHJ1bihyZXEsIHJlcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZShyZXEsIHJlcywgKGVycikgPT4gKGVyciA/IHJlamVjdChlcnIpIDogcmVzb2x2ZSgpKSk7XG4gICAgfSk7XG4gIH07XG4gIG5jLmhhbmRsZSA9IGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcywgZG9uZSkge1xuICAgIGNvbnN0IGlkeCA9IHJlcS51cmwuaW5kZXhPZihcIj9cIik7XG4gICAgY29uc3QgeyBoYW5kbGVycywgcGFyYW1zIH0gPSBfZmluZChcbiAgICAgIHJlcS5tZXRob2QsXG4gICAgICBpZHggIT09IC0xID8gcmVxLnVybC5zdWJzdHJpbmcoMCwgaWR4KSA6IHJlcS51cmxcbiAgICApO1xuICAgIGlmIChhdHRhY2hQYXJhbXMpIHJlcS5wYXJhbXMgPSBwYXJhbXM7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGxlbiA9IGhhbmRsZXJzLmxlbmd0aDtcbiAgICBjb25zdCBsb29wID0gYXN5bmMgKG5leHQpID0+IGhhbmRsZXJzW2krK10ocmVxLCByZXMsIG5leHQpO1xuICAgIGNvbnN0IG5leHQgPSAoZXJyKSA9PiB7XG4gICAgICBpIDwgbGVuICYmICFlcnIgPyBsb29wKG5leHQpLmNhdGNoKG5leHQpIDogZG9uZShlcnIsIG5leHQpO1xuICAgIH07XG4gICAgbmV4dCgpO1xuICB9O1xuICByZXR1cm4gbmM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next-connect/dist/index.cjs\n");

/***/ }),

/***/ "./src/pages/api/upload.ts":
/*!*********************************!*\
  !*** ./src/pages/api/upload.ts ***!
  \*********************************/
/*! exports provided: default, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"./node_modules/next-connect/dist/index.cjs\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n  storage: multer__WEBPACK_IMPORTED_MODULE_0___default.a.diskStorage({\n    destination: './public/uploads',\n    filename: (req, file, cb) => cb(null, file.originalname)\n  })\n});\nconst apiRoute = next_connect__WEBPACK_IMPORTED_MODULE_1___default()({\n  onError(error, req, res) {\n    res.status(501).json({\n      error: `Sorry something Happened! ${error.message}`\n    });\n  },\n\n  onNoMatch(req, res) {\n    res.status(405).json({\n      error: `Method '${req.method}' Not Allowed`\n    });\n  }\n\n});\nconst uploadMiddleware = upload.single('image');\napiRoute.post(uploadMiddleware, async (req, res) => {\n  const url = req.file.path.replace('public', '');\n  return res.status(201).json({\n    url\n  });\n});\napiRoute.get(async (req, res) => {\n  try {\n    fs__WEBPACK_IMPORTED_MODULE_3___default.a.opendir('./public/uploads', async (err, dir) => {\n      if (err) {\n        return res.json({\n          message: err.message\n        });\n      }\n\n      if (dir) {\n        const file = (await dir.read()).name;\n        const result = {\n          _id: '1',\n          name: file,\n          size: '123',\n          url: path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(__dirname, 'uploads', file)\n        };\n        return res.json(result);\n      }\n    });\n  } catch (error) {\n    return res.json({\n      message: 'Nenhuma imagem encontrada'\n    });\n  }\n});\napiRoute.delete((req, res) => {\n  try {\n    const {\n      fileName\n    } = req.query;\n    fs__WEBPACK_IMPORTED_MODULE_3___default.a.rm(`./public/uploads/${fileName}`, async () => {\n      return res.json({\n        message: 'Imagem apagada com sucesso!'\n      });\n    });\n  } catch (error) {\n    return res.json({\n      message: 'Nenhuma imagem encontrada'\n    });\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiRoute);\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL3VwbG9hZC50cz9iZDM5Il0sIm5hbWVzIjpbInVwbG9hZCIsIm11bHRlciIsInN0b3JhZ2UiLCJkaXNrU3RvcmFnZSIsImRlc3RpbmF0aW9uIiwiZmlsZW5hbWUiLCJyZXEiLCJmaWxlIiwiY2IiLCJvcmlnaW5hbG5hbWUiLCJhcGlSb3V0ZSIsIm5leHRDb25uZWN0Iiwib25FcnJvciIsImVycm9yIiwicmVzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJvbk5vTWF0Y2giLCJtZXRob2QiLCJ1cGxvYWRNaWRkbGV3YXJlIiwic2luZ2xlIiwicG9zdCIsInVybCIsInBhdGgiLCJyZXBsYWNlIiwiZ2V0IiwiZnMiLCJvcGVuZGlyIiwiZXJyIiwiZGlyIiwicmVhZCIsIm5hbWUiLCJyZXN1bHQiLCJfaWQiLCJzaXplIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImRlbGV0ZSIsImZpbGVOYW1lIiwicXVlcnkiLCJybSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFlQSxNQUFNQSxNQUFNLEdBQUdDLDZDQUFNLENBQUM7QUFDckJDLFNBQU8sRUFBRUQsNkNBQU0sQ0FBQ0UsV0FBUCxDQUFtQjtBQUMzQkMsZUFBVyxFQUFFLGtCQURjO0FBRTNCQyxZQUFRLEVBQUUsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLEVBQVosS0FBbUJBLEVBQUUsQ0FBQyxJQUFELEVBQU9ELElBQUksQ0FBQ0UsWUFBWjtBQUZKLEdBQW5CO0FBRFksQ0FBRCxDQUFyQjtBQU9BLE1BQU1DLFFBQVEsR0FBR0MsbURBQVcsQ0FBa0M7QUFDN0RDLFNBQU8sQ0FBQ0MsS0FBRCxFQUFRUCxHQUFSLEVBQTZCUSxHQUE3QixFQUFtRDtBQUN6REEsT0FBRyxDQUNEQyxNQURGLENBQ1MsR0FEVCxFQUVFQyxJQUZGLENBRU87QUFBRUgsV0FBSyxFQUFHLDZCQUE0QkEsS0FBSyxDQUFDSSxPQUFRO0FBQXBELEtBRlA7QUFHQSxHQUw0RDs7QUFNN0RDLFdBQVMsQ0FBQ1osR0FBRCxFQUFzQlEsR0FBdEIsRUFBNEM7QUFDcERBLE9BQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVILFdBQUssRUFBRyxXQUFVUCxHQUFHLENBQUNhLE1BQU87QUFBL0IsS0FBckI7QUFDQTs7QUFSNEQsQ0FBbEMsQ0FBNUI7QUFXQSxNQUFNQyxnQkFBZ0IsR0FBR3BCLE1BQU0sQ0FBQ3FCLE1BQVAsQ0FBYyxPQUFkLENBQXpCO0FBRUFYLFFBQVEsQ0FBQ1ksSUFBVCxDQUFjRixnQkFBZCxFQUFnQyxPQUFPZCxHQUFQLEVBQWtCUSxHQUFsQixLQUEyQztBQUMxRSxRQUFNUyxHQUFHLEdBQUdqQixHQUFHLENBQUNDLElBQUosQ0FBU2lCLElBQVQsQ0FBY0MsT0FBZCxDQUFzQixRQUF0QixFQUFnQyxFQUFoQyxDQUFaO0FBQ0EsU0FBT1gsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDM0JPO0FBRDJCLEdBQXJCLENBQVA7QUFHQSxDQUxEO0FBT0FiLFFBQVEsQ0FBQ2dCLEdBQVQsQ0FBYSxPQUFPcEIsR0FBUCxFQUE0QlEsR0FBNUIsS0FBcUQ7QUFDakUsTUFBSTtBQUNIYSw2Q0FBRSxDQUFDQyxPQUFILENBQVcsa0JBQVgsRUFBK0IsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2xELFVBQUlELEdBQUosRUFBUztBQUNSLGVBQU9mLEdBQUcsQ0FBQ0UsSUFBSixDQUFTO0FBQUVDLGlCQUFPLEVBQUVZLEdBQUcsQ0FBQ1o7QUFBZixTQUFULENBQVA7QUFDQTs7QUFFRCxVQUFJYSxHQUFKLEVBQVM7QUFDUixjQUFNdkIsSUFBSSxHQUFHLENBQUMsTUFBTXVCLEdBQUcsQ0FBQ0MsSUFBSixFQUFQLEVBQW1CQyxJQUFoQztBQUVBLGNBQU1DLE1BQU0sR0FBRztBQUNkQyxhQUFHLEVBQUUsR0FEUztBQUVkRixjQUFJLEVBQUV6QixJQUZRO0FBR2Q0QixjQUFJLEVBQUUsS0FIUTtBQUlkWixhQUFHLEVBQUVDLDJDQUFJLENBQUNZLE9BQUwsQ0FBYUMsU0FBYixFQUF3QixTQUF4QixFQUFtQzlCLElBQW5DO0FBSlMsU0FBZjtBQU9BLGVBQU9PLEdBQUcsQ0FBQ0UsSUFBSixDQUFTaUIsTUFBVCxDQUFQO0FBQ0E7QUFDRCxLQWpCRDtBQWtCQSxHQW5CRCxDQW1CRSxPQUFPcEIsS0FBUCxFQUFjO0FBQ2YsV0FBT0MsR0FBRyxDQUFDRSxJQUFKLENBQVM7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBVCxDQUFQO0FBQ0E7QUFDRCxDQXZCRDtBQXlCQVAsUUFBUSxDQUFDNEIsTUFBVCxDQUFnQixDQUFDaEMsR0FBRCxFQUFzQlEsR0FBdEIsS0FBK0M7QUFDOUQsTUFBSTtBQUNILFVBQU07QUFBRXlCO0FBQUYsUUFBZWpDLEdBQUcsQ0FBQ2tDLEtBQXpCO0FBRUFiLDZDQUFFLENBQUNjLEVBQUgsQ0FBTyxvQkFBbUJGLFFBQVMsRUFBbkMsRUFBc0MsWUFBWTtBQUNqRCxhQUFPekIsR0FBRyxDQUFDRSxJQUFKLENBQVM7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBVCxDQUFQO0FBQ0EsS0FGRDtBQUdBLEdBTkQsQ0FNRSxPQUFPSixLQUFQLEVBQWM7QUFDZixXQUFPQyxHQUFHLENBQUNFLElBQUosQ0FBUztBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFULENBQVA7QUFDQTtBQUNELENBVkQ7QUFZZVAsdUVBQWY7QUFFTyxNQUFNZ0MsTUFBTSxHQUFHO0FBQ3JCQyxLQUFHLEVBQUU7QUFDSkMsY0FBVSxFQUFFO0FBRFI7QUFEZ0IsQ0FBZixDIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS91cGxvYWQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBtdWx0ZXIgZnJvbSAnbXVsdGVyJ1xuaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmludGVyZmFjZSBJUmVxIGV4dGVuZHMgTmV4dEFwaVJlcXVlc3Qge1xuXHRmaWxlPzoge1xuXHRcdGZpZWxkbmFtZTogc3RyaW5nXG5cdFx0b3JpZ2luYWxuYW1lOiBzdHJpbmdcblx0XHRlbmNvZGluZzogc3RyaW5nXG5cdFx0bWltZXR5cGU6IHN0cmluZ1xuXHRcdGRlc3RpbmF0aW9uOiBzdHJpbmdcblx0XHRmaWxlbmFtZTogc3RyaW5nXG5cdFx0cGF0aDogc3RyaW5nXG5cdFx0c2l6ZTogbnVtYmVyXG5cdH1cbn1cblxuY29uc3QgdXBsb2FkID0gbXVsdGVyKHtcblx0c3RvcmFnZTogbXVsdGVyLmRpc2tTdG9yYWdlKHtcblx0XHRkZXN0aW5hdGlvbjogJy4vcHVibGljL3VwbG9hZHMnLFxuXHRcdGZpbGVuYW1lOiAocmVxLCBmaWxlLCBjYikgPT4gY2IobnVsbCwgZmlsZS5vcmlnaW5hbG5hbWUpXG5cdH0pXG59KVxuXG5jb25zdCBhcGlSb3V0ZSA9IG5leHRDb25uZWN0PE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2U+KHtcblx0b25FcnJvcihlcnJvciwgcmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcblx0XHRyZXNcblx0XHRcdC5zdGF0dXMoNTAxKVxuXHRcdFx0Lmpzb24oeyBlcnJvcjogYFNvcnJ5IHNvbWV0aGluZyBIYXBwZW5lZCEgJHtlcnJvci5tZXNzYWdlfWAgfSlcblx0fSxcblx0b25Ob01hdGNoKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG5cdFx0cmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogYE1ldGhvZCAnJHtyZXEubWV0aG9kfScgTm90IEFsbG93ZWRgIH0pXG5cdH1cbn0pXG5cbmNvbnN0IHVwbG9hZE1pZGRsZXdhcmUgPSB1cGxvYWQuc2luZ2xlKCdpbWFnZScpXG5cbmFwaVJvdXRlLnBvc3QodXBsb2FkTWlkZGxld2FyZSwgYXN5bmMgKHJlcTogSVJlcSwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcblx0Y29uc3QgdXJsID0gcmVxLmZpbGUucGF0aC5yZXBsYWNlKCdwdWJsaWMnLCAnJylcblx0cmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcblx0XHR1cmxcblx0fSlcbn0pXG5cbmFwaVJvdXRlLmdldChhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRmcy5vcGVuZGlyKCcuL3B1YmxpYy91cGxvYWRzJywgYXN5bmMgKGVyciwgZGlyKSA9PiB7XG5cdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdHJldHVybiByZXMuanNvbih7IG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pXG5cdFx0XHR9XG5cblx0XHRcdGlmIChkaXIpIHtcblx0XHRcdFx0Y29uc3QgZmlsZSA9IChhd2FpdCBkaXIucmVhZCgpKS5uYW1lXG5cblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdFx0XHRcdF9pZDogJzEnLFxuXHRcdFx0XHRcdG5hbWU6IGZpbGUsXG5cdFx0XHRcdFx0c2l6ZTogJzEyMycsXG5cdFx0XHRcdFx0dXJsOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAndXBsb2FkcycsIGZpbGUpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gcmVzLmpzb24ocmVzdWx0KVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuIHJlcy5qc29uKHsgbWVzc2FnZTogJ05lbmh1bWEgaW1hZ2VtIGVuY29udHJhZGEnIH0pXG5cdH1cbn0pXG5cbmFwaVJvdXRlLmRlbGV0ZSgocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB7IGZpbGVOYW1lIH0gPSByZXEucXVlcnlcblxuXHRcdGZzLnJtKGAuL3B1YmxpYy91cGxvYWRzLyR7ZmlsZU5hbWV9YCwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIHJlcy5qc29uKHsgbWVzc2FnZTogJ0ltYWdlbSBhcGFnYWRhIGNvbSBzdWNlc3NvIScgfSlcblx0XHR9KVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiByZXMuanNvbih7IG1lc3NhZ2U6ICdOZW5odW1hIGltYWdlbSBlbmNvbnRyYWRhJyB9KVxuXHR9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBhcGlSb3V0ZVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuXHRhcGk6IHtcblx0XHRib2R5UGFyc2VyOiBmYWxzZVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/upload.ts\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtdWx0ZXJcIj9hNzA0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im11bHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm11bHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///multer\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "trouter":
/*!**************************!*\
  !*** external "trouter" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"trouter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0cm91dGVyXCI/Y2FlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ0cm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///trouter\n");

/***/ })

/******/ });