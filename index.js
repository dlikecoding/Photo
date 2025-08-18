// @bun
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// node_modules/tslib/tslib.js
var require_tslib = __commonJS((exports, module) => {
  var __extends;
  var __assign;
  var __rest;
  var __decorate;
  var __param;
  var __esDecorate;
  var __runInitializers;
  var __propKey;
  var __setFunctionName;
  var __metadata;
  var __awaiter;
  var __generator;
  var __exportStar;
  var __values;
  var __read;
  var __spread;
  var __spreadArrays;
  var __spreadArray;
  var __await;
  var __asyncGenerator;
  var __asyncDelegator;
  var __asyncValues;
  var __makeTemplateObject;
  var __importStar;
  var __importDefault;
  var __classPrivateFieldGet;
  var __classPrivateFieldSet;
  var __classPrivateFieldIn;
  var __createBinding;
  var __addDisposableResource;
  var __disposeResources;
  var __rewriteRelativeImportExtension;
  (function(factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
      define("tslib", ["exports"], function(exports2) {
        factory(createExporter(root, createExporter(exports2)));
      });
    } else if (typeof module === "object" && typeof exports === "object") {
      factory(createExporter(root, createExporter(exports)));
    } else {
      factory(createExporter(root));
    }
    function createExporter(exports2, previous) {
      if (exports2 !== root) {
        if (typeof Object.create === "function") {
          Object.defineProperty(exports2, "__esModule", { value: true });
        } else {
          exports2.__esModule = true;
        }
      }
      return function(id, v) {
        return exports2[id] = previous ? previous(id, v) : v;
      };
    }
  })(function(exporter) {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
      d.__proto__ = b;
    } || function(d, b) {
      for (var p in b)
        if (Object.prototype.hasOwnProperty.call(b, p))
          d[p] = b[p];
    };
    __extends = function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
    };
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length;i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    __decorate = function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1;i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    __param = function(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    };
    __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) {
        if (f !== undefined && typeof f !== "function")
          throw new TypeError("Function expected");
        return f;
      }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1;i >= 0; i--) {
        var context = {};
        for (var p in contextIn)
          context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access)
          context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
          if (done)
            throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
          if (result === undefined)
            continue;
          if (result === null || typeof result !== "object")
            throw new TypeError("Object expected");
          if (_ = accept(result.get))
            descriptor.get = _;
          if (_ = accept(result.set))
            descriptor.set = _;
          if (_ = accept(result.init))
            initializers.unshift(_);
        } else if (_ = accept(result)) {
          if (kind === "field")
            initializers.unshift(_);
          else
            descriptor[key] = _;
        }
      }
      if (target)
        Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
    };
    __runInitializers = function(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0;i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : undefined;
    };
    __propKey = function(x) {
      return typeof x === "symbol" ? x : "".concat(x);
    };
    __setFunctionName = function(f, name, prefix) {
      if (typeof name === "symbol")
        name = name.description ? "[".concat(name.description, "]") : "";
      return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    };
    __metadata = function(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
    };
    __awaiter = function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    __generator = function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : undefined, done: true };
      }
    };
    __exportStar = function(m, o) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
          __createBinding(o, m, p);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === undefined)
        k2 = k;
      o[k2] = m[k];
    };
    __values = function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = undefined;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    __read = function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === undefined || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    __spread = function() {
      for (var ar = [], i = 0;i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
      return ar;
    };
    __spreadArrays = function() {
      for (var s = 0, i = 0, il = arguments.length;i < il; i++)
        s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0;i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length;j < jl; j++, k++)
          r[k] = a[j];
      return r;
    };
    __spreadArray = function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar;i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    __await = function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    __asyncGenerator = function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function awaitReturn(f) {
        return function(v) {
          return Promise.resolve(v).then(f, reject);
        };
      }
      function verb(n, f) {
        if (g[n]) {
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
          if (f)
            i[n] = f(i[n]);
        }
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    __asyncDelegator = function(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function() {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function(v) {
          return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
        } : f;
      }
    };
    __asyncValues = function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({ value: v2, done: d });
        }, reject);
      }
    };
    __makeTemplateObject = function(cooked, raw2) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw2 });
      } else {
        cooked.raw = raw2;
      }
      return cooked;
    };
    var __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    var ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2)
          if (Object.prototype.hasOwnProperty.call(o2, k))
            ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    __importStar = function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k = ownKeys(mod), i = 0;i < k.length; i++)
          if (k[i] !== "default")
            __createBinding(result, mod, k[i]);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    __importDefault = function(mod) {
      return mod && mod.__esModule ? mod : { default: mod };
    };
    __classPrivateFieldGet = function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    __classPrivateFieldSet = function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    __classPrivateFieldIn = function(state, receiver) {
      if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof state === "function" ? receiver === state : state.has(receiver);
    };
    __addDisposableResource = function(env, value, async) {
      if (value !== null && value !== undefined) {
        if (typeof value !== "object" && typeof value !== "function")
          throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
          if (!Symbol.asyncDispose)
            throw new TypeError("Symbol.asyncDispose is not defined.");
          dispose = value[Symbol.asyncDispose];
        }
        if (dispose === undefined) {
          if (!Symbol.dispose)
            throw new TypeError("Symbol.dispose is not defined.");
          dispose = value[Symbol.dispose];
          if (async)
            inner = dispose;
        }
        if (typeof dispose !== "function")
          throw new TypeError("Object not disposable.");
        if (inner)
          dispose = function() {
            try {
              inner.call(this);
            } catch (e) {
              return Promise.reject(e);
            }
          };
        env.stack.push({ value, dispose, async });
      } else if (async) {
        env.stack.push({ async: true });
      }
      return value;
    };
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    __disposeResources = function(env) {
      function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      var r, s = 0;
      function next() {
        while (r = env.stack.pop()) {
          try {
            if (!r.async && s === 1)
              return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
              var result = r.dispose.call(r.value);
              if (r.async)
                return s |= 2, Promise.resolve(result).then(next, function(e) {
                  fail(e);
                  return next();
                });
            } else
              s |= 1;
          } catch (e) {
            fail(e);
          }
        }
        if (s === 1)
          return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
    __rewriteRelativeImportExtension = function(path2, preserveJsx) {
      if (typeof path2 === "string" && /^\.\.?\//.test(path2)) {
        return path2.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
      }
      return path2;
    };
    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    exporter("__addDisposableResource", __addDisposableResource);
    exporter("__disposeResources", __disposeResources);
    exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension);
  });
});

// node_modules/ipaddr.js/lib/ipaddr.js
var require_ipaddr = __commonJS((exports, module) => {
  (function(root) {
    const ipv4Part = "(0?\\d+|0x[a-f0-9]+)";
    const ipv4Regexes = {
      fourOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, "i"),
      threeOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, "i"),
      twoOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}$`, "i"),
      longValue: new RegExp(`^${ipv4Part}$`, "i")
    };
    const octalRegex = new RegExp(`^0[0-7]+$`, "i");
    const hexRegex = new RegExp(`^0x[a-f0-9]+$`, "i");
    const zoneIndex = "%[0-9a-z]{1,}";
    const ipv6Part = "(?:[0-9a-f]+::?)+";
    const ipv6Regexes = {
      zoneIndex: new RegExp(zoneIndex, "i"),
      native: new RegExp(`^(::)?(${ipv6Part})?([0-9a-f]+)?(::)?(${zoneIndex})?$`, "i"),
      deprecatedTransitional: new RegExp(`^(?:::)(${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?)$`, "i"),
      transitional: new RegExp(`^((?:${ipv6Part})|(?:::)(?:${ipv6Part})?)${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?$`, "i")
    };
    function expandIPv6(string, parts) {
      if (string.indexOf("::") !== string.lastIndexOf("::")) {
        return null;
      }
      let colonCount = 0;
      let lastColon = -1;
      let zoneId = (string.match(ipv6Regexes.zoneIndex) || [])[0];
      let replacement, replacementCount;
      if (zoneId) {
        zoneId = zoneId.substring(1);
        string = string.replace(/%.+$/, "");
      }
      while ((lastColon = string.indexOf(":", lastColon + 1)) >= 0) {
        colonCount++;
      }
      if (string.substr(0, 2) === "::") {
        colonCount--;
      }
      if (string.substr(-2, 2) === "::") {
        colonCount--;
      }
      if (colonCount > parts) {
        return null;
      }
      replacementCount = parts - colonCount;
      replacement = ":";
      while (replacementCount--) {
        replacement += "0:";
      }
      string = string.replace("::", replacement);
      if (string[0] === ":") {
        string = string.slice(1);
      }
      if (string[string.length - 1] === ":") {
        string = string.slice(0, -1);
      }
      parts = function() {
        const ref = string.split(":");
        const results = [];
        for (let i = 0;i < ref.length; i++) {
          results.push(parseInt(ref[i], 16));
        }
        return results;
      }();
      return {
        parts,
        zoneId
      };
    }
    function matchCIDR(first, second, partSize, cidrBits) {
      if (first.length !== second.length) {
        throw new Error("ipaddr: cannot match CIDR for objects with different lengths");
      }
      let part = 0;
      let shift;
      while (cidrBits > 0) {
        shift = partSize - cidrBits;
        if (shift < 0) {
          shift = 0;
        }
        if (first[part] >> shift !== second[part] >> shift) {
          return false;
        }
        cidrBits -= partSize;
        part += 1;
      }
      return true;
    }
    function parseIntAuto(string) {
      if (hexRegex.test(string)) {
        return parseInt(string, 16);
      }
      if (string[0] === "0" && !isNaN(parseInt(string[1], 10))) {
        if (octalRegex.test(string)) {
          return parseInt(string, 8);
        }
        throw new Error(`ipaddr: cannot parse ${string} as octal`);
      }
      return parseInt(string, 10);
    }
    function padPart(part, length) {
      while (part.length < length) {
        part = `0${part}`;
      }
      return part;
    }
    const ipaddr = {};
    ipaddr.IPv4 = function() {
      function IPv4(octets) {
        if (octets.length !== 4) {
          throw new Error("ipaddr: ipv4 octet count should be 4");
        }
        let i, octet;
        for (i = 0;i < octets.length; i++) {
          octet = octets[i];
          if (!(0 <= octet && octet <= 255)) {
            throw new Error("ipaddr: ipv4 octet should fit in 8 bits");
          }
        }
        this.octets = octets;
      }
      IPv4.prototype.SpecialRanges = {
        unspecified: [[new IPv4([0, 0, 0, 0]), 8]],
        broadcast: [[new IPv4([255, 255, 255, 255]), 32]],
        multicast: [[new IPv4([224, 0, 0, 0]), 4]],
        linkLocal: [[new IPv4([169, 254, 0, 0]), 16]],
        loopback: [[new IPv4([127, 0, 0, 0]), 8]],
        carrierGradeNat: [[new IPv4([100, 64, 0, 0]), 10]],
        private: [
          [new IPv4([10, 0, 0, 0]), 8],
          [new IPv4([172, 16, 0, 0]), 12],
          [new IPv4([192, 168, 0, 0]), 16]
        ],
        reserved: [
          [new IPv4([192, 0, 0, 0]), 24],
          [new IPv4([192, 0, 2, 0]), 24],
          [new IPv4([192, 88, 99, 0]), 24],
          [new IPv4([198, 18, 0, 0]), 15],
          [new IPv4([198, 51, 100, 0]), 24],
          [new IPv4([203, 0, 113, 0]), 24],
          [new IPv4([240, 0, 0, 0]), 4]
        ],
        as112: [
          [new IPv4([192, 175, 48, 0]), 24],
          [new IPv4([192, 31, 196, 0]), 24]
        ],
        amt: [
          [new IPv4([192, 52, 193, 0]), 24]
        ]
      };
      IPv4.prototype.kind = function() {
        return "ipv4";
      };
      IPv4.prototype.match = function(other, cidrRange) {
        let ref;
        if (cidrRange === undefined) {
          ref = other;
          other = ref[0];
          cidrRange = ref[1];
        }
        if (other.kind() !== "ipv4") {
          throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
        }
        return matchCIDR(this.octets, other.octets, 8, cidrRange);
      };
      IPv4.prototype.prefixLengthFromSubnetMask = function() {
        let cidr = 0;
        let stop = false;
        const zerotable = {
          0: 8,
          128: 7,
          192: 6,
          224: 5,
          240: 4,
          248: 3,
          252: 2,
          254: 1,
          255: 0
        };
        let i, octet, zeros;
        for (i = 3;i >= 0; i -= 1) {
          octet = this.octets[i];
          if (octet in zerotable) {
            zeros = zerotable[octet];
            if (stop && zeros !== 0) {
              return null;
            }
            if (zeros !== 8) {
              stop = true;
            }
            cidr += zeros;
          } else {
            return null;
          }
        }
        return 32 - cidr;
      };
      IPv4.prototype.range = function() {
        return ipaddr.subnetMatch(this, this.SpecialRanges);
      };
      IPv4.prototype.toByteArray = function() {
        return this.octets.slice(0);
      };
      IPv4.prototype.toIPv4MappedAddress = function() {
        return ipaddr.IPv6.parse(`::ffff:${this.toString()}`);
      };
      IPv4.prototype.toNormalizedString = function() {
        return this.toString();
      };
      IPv4.prototype.toString = function() {
        return this.octets.join(".");
      };
      return IPv4;
    }();
    ipaddr.IPv4.broadcastAddressFromCIDR = function(string) {
      try {
        const cidr = this.parseCIDR(string);
        const ipInterfaceOctets = cidr[0].toByteArray();
        const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
        const octets = [];
        let i = 0;
        while (i < 4) {
          octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
          i++;
        }
        return new this(octets);
      } catch (e) {
        throw new Error("ipaddr: the address does not have IPv4 CIDR format");
      }
    };
    ipaddr.IPv4.isIPv4 = function(string) {
      return this.parser(string) !== null;
    };
    ipaddr.IPv4.isValid = function(string) {
      try {
        new this(this.parser(string));
        return true;
      } catch (e) {
        return false;
      }
    };
    ipaddr.IPv4.isValidCIDR = function(string) {
      try {
        this.parseCIDR(string);
        return true;
      } catch (e) {
        return false;
      }
    };
    ipaddr.IPv4.isValidFourPartDecimal = function(string) {
      if (ipaddr.IPv4.isValid(string) && string.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) {
        return true;
      } else {
        return false;
      }
    };
    ipaddr.IPv4.networkAddressFromCIDR = function(string) {
      let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
      try {
        cidr = this.parseCIDR(string);
        ipInterfaceOctets = cidr[0].toByteArray();
        subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
        octets = [];
        i = 0;
        while (i < 4) {
          octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
          i++;
        }
        return new this(octets);
      } catch (e) {
        throw new Error("ipaddr: the address does not have IPv4 CIDR format");
      }
    };
    ipaddr.IPv4.parse = function(string) {
      const parts = this.parser(string);
      if (parts === null) {
        throw new Error("ipaddr: string is not formatted like an IPv4 Address");
      }
      return new this(parts);
    };
    ipaddr.IPv4.parseCIDR = function(string) {
      let match;
      if (match = string.match(/^(.+)\/(\d+)$/)) {
        const maskLength = parseInt(match[2]);
        if (maskLength >= 0 && maskLength <= 32) {
          const parsed = [this.parse(match[1]), maskLength];
          Object.defineProperty(parsed, "toString", {
            value: function() {
              return this.join("/");
            }
          });
          return parsed;
        }
      }
      throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range");
    };
    ipaddr.IPv4.parser = function(string) {
      let match, part, value;
      if (match = string.match(ipv4Regexes.fourOctet)) {
        return function() {
          const ref = match.slice(1, 6);
          const results = [];
          for (let i = 0;i < ref.length; i++) {
            part = ref[i];
            results.push(parseIntAuto(part));
          }
          return results;
        }();
      } else if (match = string.match(ipv4Regexes.longValue)) {
        value = parseIntAuto(match[1]);
        if (value > 4294967295 || value < 0) {
          throw new Error("ipaddr: address outside defined range");
        }
        return function() {
          const results = [];
          let shift;
          for (shift = 0;shift <= 24; shift += 8) {
            results.push(value >> shift & 255);
          }
          return results;
        }().reverse();
      } else if (match = string.match(ipv4Regexes.twoOctet)) {
        return function() {
          const ref = match.slice(1, 4);
          const results = [];
          value = parseIntAuto(ref[1]);
          if (value > 16777215 || value < 0) {
            throw new Error("ipaddr: address outside defined range");
          }
          results.push(parseIntAuto(ref[0]));
          results.push(value >> 16 & 255);
          results.push(value >> 8 & 255);
          results.push(value & 255);
          return results;
        }();
      } else if (match = string.match(ipv4Regexes.threeOctet)) {
        return function() {
          const ref = match.slice(1, 5);
          const results = [];
          value = parseIntAuto(ref[2]);
          if (value > 65535 || value < 0) {
            throw new Error("ipaddr: address outside defined range");
          }
          results.push(parseIntAuto(ref[0]));
          results.push(parseIntAuto(ref[1]));
          results.push(value >> 8 & 255);
          results.push(value & 255);
          return results;
        }();
      } else {
        return null;
      }
    };
    ipaddr.IPv4.subnetMaskFromPrefixLength = function(prefix) {
      prefix = parseInt(prefix);
      if (prefix < 0 || prefix > 32) {
        throw new Error("ipaddr: invalid IPv4 prefix length");
      }
      const octets = [0, 0, 0, 0];
      let j = 0;
      const filledOctetCount = Math.floor(prefix / 8);
      while (j < filledOctetCount) {
        octets[j] = 255;
        j++;
      }
      if (filledOctetCount < 4) {
        octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
      }
      return new this(octets);
    };
    ipaddr.IPv6 = function() {
      function IPv6(parts, zoneId) {
        let i, part;
        if (parts.length === 16) {
          this.parts = [];
          for (i = 0;i <= 14; i += 2) {
            this.parts.push(parts[i] << 8 | parts[i + 1]);
          }
        } else if (parts.length === 8) {
          this.parts = parts;
        } else {
          throw new Error("ipaddr: ipv6 part count should be 8 or 16");
        }
        for (i = 0;i < this.parts.length; i++) {
          part = this.parts[i];
          if (!(0 <= part && part <= 65535)) {
            throw new Error("ipaddr: ipv6 part should fit in 16 bits");
          }
        }
        if (zoneId) {
          this.zoneId = zoneId;
        }
      }
      IPv6.prototype.SpecialRanges = {
        unspecified: [new IPv6([0, 0, 0, 0, 0, 0, 0, 0]), 128],
        linkLocal: [new IPv6([65152, 0, 0, 0, 0, 0, 0, 0]), 10],
        multicast: [new IPv6([65280, 0, 0, 0, 0, 0, 0, 0]), 8],
        loopback: [new IPv6([0, 0, 0, 0, 0, 0, 0, 1]), 128],
        uniqueLocal: [new IPv6([64512, 0, 0, 0, 0, 0, 0, 0]), 7],
        ipv4Mapped: [new IPv6([0, 0, 0, 0, 0, 65535, 0, 0]), 96],
        discard: [new IPv6([256, 0, 0, 0, 0, 0, 0, 0]), 64],
        rfc6145: [new IPv6([0, 0, 0, 0, 65535, 0, 0, 0]), 96],
        rfc6052: [new IPv6([100, 65435, 0, 0, 0, 0, 0, 0]), 96],
        "6to4": [new IPv6([8194, 0, 0, 0, 0, 0, 0, 0]), 16],
        teredo: [new IPv6([8193, 0, 0, 0, 0, 0, 0, 0]), 32],
        benchmarking: [new IPv6([8193, 2, 0, 0, 0, 0, 0, 0]), 48],
        amt: [new IPv6([8193, 3, 0, 0, 0, 0, 0, 0]), 32],
        as112v6: [
          [new IPv6([8193, 4, 274, 0, 0, 0, 0, 0]), 48],
          [new IPv6([9760, 79, 32768, 0, 0, 0, 0, 0]), 48]
        ],
        deprecated: [new IPv6([8193, 16, 0, 0, 0, 0, 0, 0]), 28],
        orchid2: [new IPv6([8193, 32, 0, 0, 0, 0, 0, 0]), 28],
        droneRemoteIdProtocolEntityTags: [new IPv6([8193, 48, 0, 0, 0, 0, 0, 0]), 28],
        reserved: [
          [new IPv6([8193, 0, 0, 0, 0, 0, 0, 0]), 23],
          [new IPv6([8193, 3512, 0, 0, 0, 0, 0, 0]), 32]
        ]
      };
      IPv6.prototype.isIPv4MappedAddress = function() {
        return this.range() === "ipv4Mapped";
      };
      IPv6.prototype.kind = function() {
        return "ipv6";
      };
      IPv6.prototype.match = function(other, cidrRange) {
        let ref;
        if (cidrRange === undefined) {
          ref = other;
          other = ref[0];
          cidrRange = ref[1];
        }
        if (other.kind() !== "ipv6") {
          throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
        }
        return matchCIDR(this.parts, other.parts, 16, cidrRange);
      };
      IPv6.prototype.prefixLengthFromSubnetMask = function() {
        let cidr = 0;
        let stop = false;
        const zerotable = {
          0: 16,
          32768: 15,
          49152: 14,
          57344: 13,
          61440: 12,
          63488: 11,
          64512: 10,
          65024: 9,
          65280: 8,
          65408: 7,
          65472: 6,
          65504: 5,
          65520: 4,
          65528: 3,
          65532: 2,
          65534: 1,
          65535: 0
        };
        let part, zeros;
        for (let i = 7;i >= 0; i -= 1) {
          part = this.parts[i];
          if (part in zerotable) {
            zeros = zerotable[part];
            if (stop && zeros !== 0) {
              return null;
            }
            if (zeros !== 16) {
              stop = true;
            }
            cidr += zeros;
          } else {
            return null;
          }
        }
        return 128 - cidr;
      };
      IPv6.prototype.range = function() {
        return ipaddr.subnetMatch(this, this.SpecialRanges);
      };
      IPv6.prototype.toByteArray = function() {
        let part;
        const bytes = [];
        const ref = this.parts;
        for (let i = 0;i < ref.length; i++) {
          part = ref[i];
          bytes.push(part >> 8);
          bytes.push(part & 255);
        }
        return bytes;
      };
      IPv6.prototype.toFixedLengthString = function() {
        const addr = function() {
          const results = [];
          for (let i = 0;i < this.parts.length; i++) {
            results.push(padPart(this.parts[i].toString(16), 4));
          }
          return results;
        }.call(this).join(":");
        let suffix = "";
        if (this.zoneId) {
          suffix = `%${this.zoneId}`;
        }
        return addr + suffix;
      };
      IPv6.prototype.toIPv4Address = function() {
        if (!this.isIPv4MappedAddress()) {
          throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
        }
        const ref = this.parts.slice(-2);
        const high = ref[0];
        const low = ref[1];
        return new ipaddr.IPv4([high >> 8, high & 255, low >> 8, low & 255]);
      };
      IPv6.prototype.toNormalizedString = function() {
        const addr = function() {
          const results = [];
          for (let i = 0;i < this.parts.length; i++) {
            results.push(this.parts[i].toString(16));
          }
          return results;
        }.call(this).join(":");
        let suffix = "";
        if (this.zoneId) {
          suffix = `%${this.zoneId}`;
        }
        return addr + suffix;
      };
      IPv6.prototype.toRFC5952String = function() {
        const regex = /((^|:)(0(:|$)){2,})/g;
        const string = this.toNormalizedString();
        let bestMatchIndex = 0;
        let bestMatchLength = -1;
        let match;
        while (match = regex.exec(string)) {
          if (match[0].length > bestMatchLength) {
            bestMatchIndex = match.index;
            bestMatchLength = match[0].length;
          }
        }
        if (bestMatchLength < 0) {
          return string;
        }
        return `${string.substring(0, bestMatchIndex)}::${string.substring(bestMatchIndex + bestMatchLength)}`;
      };
      IPv6.prototype.toString = function() {
        return this.toRFC5952String();
      };
      return IPv6;
    }();
    ipaddr.IPv6.broadcastAddressFromCIDR = function(string) {
      try {
        const cidr = this.parseCIDR(string);
        const ipInterfaceOctets = cidr[0].toByteArray();
        const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
        const octets = [];
        let i = 0;
        while (i < 16) {
          octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
          i++;
        }
        return new this(octets);
      } catch (e) {
        throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`);
      }
    };
    ipaddr.IPv6.isIPv6 = function(string) {
      return this.parser(string) !== null;
    };
    ipaddr.IPv6.isValid = function(string) {
      if (typeof string === "string" && string.indexOf(":") === -1) {
        return false;
      }
      try {
        const addr = this.parser(string);
        new this(addr.parts, addr.zoneId);
        return true;
      } catch (e) {
        return false;
      }
    };
    ipaddr.IPv6.isValidCIDR = function(string) {
      if (typeof string === "string" && string.indexOf(":") === -1) {
        return false;
      }
      try {
        this.parseCIDR(string);
        return true;
      } catch (e) {
        return false;
      }
    };
    ipaddr.IPv6.networkAddressFromCIDR = function(string) {
      let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
      try {
        cidr = this.parseCIDR(string);
        ipInterfaceOctets = cidr[0].toByteArray();
        subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
        octets = [];
        i = 0;
        while (i < 16) {
          octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
          i++;
        }
        return new this(octets);
      } catch (e) {
        throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`);
      }
    };
    ipaddr.IPv6.parse = function(string) {
      const addr = this.parser(string);
      if (addr.parts === null) {
        throw new Error("ipaddr: string is not formatted like an IPv6 Address");
      }
      return new this(addr.parts, addr.zoneId);
    };
    ipaddr.IPv6.parseCIDR = function(string) {
      let maskLength, match, parsed;
      if (match = string.match(/^(.+)\/(\d+)$/)) {
        maskLength = parseInt(match[2]);
        if (maskLength >= 0 && maskLength <= 128) {
          parsed = [this.parse(match[1]), maskLength];
          Object.defineProperty(parsed, "toString", {
            value: function() {
              return this.join("/");
            }
          });
          return parsed;
        }
      }
      throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range");
    };
    ipaddr.IPv6.parser = function(string) {
      let addr, i, match, octet, octets, zoneId;
      if (match = string.match(ipv6Regexes.deprecatedTransitional)) {
        return this.parser(`::ffff:${match[1]}`);
      }
      if (ipv6Regexes.native.test(string)) {
        return expandIPv6(string, 8);
      }
      if (match = string.match(ipv6Regexes.transitional)) {
        zoneId = match[6] || "";
        addr = match[1];
        if (!match[1].endsWith("::")) {
          addr = addr.slice(0, -1);
        }
        addr = expandIPv6(addr + zoneId, 6);
        if (addr.parts) {
          octets = [
            parseInt(match[2]),
            parseInt(match[3]),
            parseInt(match[4]),
            parseInt(match[5])
          ];
          for (i = 0;i < octets.length; i++) {
            octet = octets[i];
            if (!(0 <= octet && octet <= 255)) {
              return null;
            }
          }
          addr.parts.push(octets[0] << 8 | octets[1]);
          addr.parts.push(octets[2] << 8 | octets[3]);
          return {
            parts: addr.parts,
            zoneId: addr.zoneId
          };
        }
      }
      return null;
    };
    ipaddr.IPv6.subnetMaskFromPrefixLength = function(prefix) {
      prefix = parseInt(prefix);
      if (prefix < 0 || prefix > 128) {
        throw new Error("ipaddr: invalid IPv6 prefix length");
      }
      const octets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      let j = 0;
      const filledOctetCount = Math.floor(prefix / 8);
      while (j < filledOctetCount) {
        octets[j] = 255;
        j++;
      }
      if (filledOctetCount < 16) {
        octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
      }
      return new this(octets);
    };
    ipaddr.fromByteArray = function(bytes) {
      const length = bytes.length;
      if (length === 4) {
        return new ipaddr.IPv4(bytes);
      } else if (length === 16) {
        return new ipaddr.IPv6(bytes);
      } else {
        throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
      }
    };
    ipaddr.isValid = function(string) {
      return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
    };
    ipaddr.isValidCIDR = function(string) {
      return ipaddr.IPv6.isValidCIDR(string) || ipaddr.IPv4.isValidCIDR(string);
    };
    ipaddr.parse = function(string) {
      if (ipaddr.IPv6.isValid(string)) {
        return ipaddr.IPv6.parse(string);
      } else if (ipaddr.IPv4.isValid(string)) {
        return ipaddr.IPv4.parse(string);
      } else {
        throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
      }
    };
    ipaddr.parseCIDR = function(string) {
      try {
        return ipaddr.IPv6.parseCIDR(string);
      } catch (e) {
        try {
          return ipaddr.IPv4.parseCIDR(string);
        } catch (e2) {
          throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format");
        }
      }
    };
    ipaddr.process = function(string) {
      const addr = this.parse(string);
      if (addr.kind() === "ipv6" && addr.isIPv4MappedAddress()) {
        return addr.toIPv4Address();
      } else {
        return addr;
      }
    };
    ipaddr.subnetMatch = function(address, rangeList, defaultName) {
      let i, rangeName, rangeSubnets, subnet;
      if (defaultName === undefined || defaultName === null) {
        defaultName = "unicast";
      }
      for (rangeName in rangeList) {
        if (Object.prototype.hasOwnProperty.call(rangeList, rangeName)) {
          rangeSubnets = rangeList[rangeName];
          if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) {
            rangeSubnets = [rangeSubnets];
          }
          for (i = 0;i < rangeSubnets.length; i++) {
            subnet = rangeSubnets[i];
            if (address.kind() === subnet[0].kind() && address.match.apply(address, subnet)) {
              return rangeName;
            }
          }
        }
      }
      return defaultName;
    };
    if (typeof module !== "undefined" && module.exports) {
      module.exports = ipaddr;
    } else {
      root.ipaddr = ipaddr;
    }
  })(exports);
});

// server/db/main.ts
var {$: $2 } = globalThis.Bun;

// server/db/index.ts
var {SQL } = globalThis.Bun;
var sql = new SQL({
  url: Bun.env.DB_URL,
  maxLifetime: 0,
  connectionTimeout: 30,
  max: 10,
  idleTimeout: 60
});

// server/db/module/system.ts
var checkInitialized = async () => {
  try {
    const result = await sql`SELECT * FROM multi_schema."ServerSystem" LIMIT 1`;
    return result.length;
  } catch (error) {
    return false;
  }
};
var initializeSystem = async () => {
  try {
    const system = { system_id: Bun.randomUUIDv7() };
    const [result] = await sql`INSERT INTO multi_schema."ServerSystem" ${sql(system)} RETURNING system_id`;
    return result;
  } catch (error) {
    console.error("Error initializing the system:", error);
    await insertErrorLog("system.ts", "initializeSystem", error);
  }
};
var updateProcessMediaStatus = async (status = true) => {
  try {
    return await sql`UPDATE multi_schema."ServerSystem" SET process_medias = ${status}`;
  } catch (error) {
    await insertErrorLog("system.ts", "updateProcessMediaStatus", error);
    console.log("updateProcessMediaStatus", error);
  }
};
var insertErrorLog = async (fileName, funcName, errMegs) => {
  try {
    const error = { file_error: fileName, func_occur: funcName, stack_trace: errMegs };
    await sql`INSERT INTO multi_schema."ErrorLog" ${sql(error)}`;
  } catch (error) {
    console.log(error);
  }
};

// server/service/helper.ts
import * as fs from "fs/promises";
var {$ } = globalThis.Bun;
import path, { basename, dirname } from "path";
import { rename } from "fs/promises";
var isExist = async (path2) => {
  try {
    await fs.access(path2);
    return true;
  } catch {
    return false;
  }
};
var createFolder = async (dePath, isRecursive = true) => {
  try {
    if (path.extname(dePath)) {
      dePath = path.dirname(dePath);
    }
    if (await isExist(dePath))
      return;
    await fs.mkdir(dePath, { recursive: isRecursive });
  } catch (error) {
    console.log("service/helper.ts", "createFolder", error);
    await insertErrorLog("service/helper.ts", "createFolder", error);
  }
};
var deleteFile = async (filePath) => {
  const { exitCode, stderr } = await $`rm ${filePath}`.nothrow();
  if (exitCode === 0)
    return true;
  console.log("service/helper.ts", "deleteFile", stderr);
  await insertErrorLog("service/helper.ts", "deleteFile", stderr);
  return false;
};
var copyFile = async (source, destination) => {
  const { exitCode, stderr } = await $`rsync -ahv ${source} ${destination}`.quiet().nothrow();
  if (exitCode === 0)
    return true;
  console.log("service/helper.ts", "copyFile", stderr);
  await insertErrorLog("service/helper.ts", "copyFile", stderr);
  return false;
};
var moveFile = async (oldPath, newPath) => {
  const copyTatus = await copyFile(oldPath, newPath);
  if (copyTatus)
    return await deleteFile(oldPath);
  return false;
};
var sanitizeFileName = (name) => {
  return name.replace(/[^\w.-]/g, "_");
};
var renameIfInvalid = async (sourcePath) => {
  try {
    const name = basename(sourcePath);
    const dir = dirname(sourcePath);
    const cleanName = sanitizeFileName(name);
    if (cleanName === name)
      return sourcePath;
    const oldPath = path.join(dir, name);
    const newPath = path.join(dir, cleanName);
    await rename(oldPath, newPath);
    return path.join(dir, cleanName);
  } catch (error) {
    await insertErrorLog("service/helper.ts", "renameIfInvalid", error);
    console.log("renameIfInvalid", error);
    return "";
  }
};
var moveUnsupportFile = async (source) => {
  const movePath = path.join(Bun.env.UNSUPPORT_PATH, nameFolderByTime(true));
  await createFolder(movePath);
  return await moveFile(source, path.join(movePath, basename(source)));
};
var createRandomId = (length) => {
  return Math.random().toString(36).substring(2, 2 + length);
};
var formatDate = (component) => {
  return String(component).padStart(2, "0");
};
var reducePath = (absolutePath) => absolutePath.startsWith(Bun.env.MAIN_PATH) ? absolutePath.slice(Bun.env.MAIN_PATH.length) : absolutePath;
var nameFolderByTime = (isShort = false) => {
  const currentDate = new Date;
  const year = currentDate.getFullYear();
  const month = formatDate(currentDate.getMonth() + 1);
  const day = formatDate(currentDate.getDate());
  if (isShort)
    return `${year}-${month}-${day}`;
  const hour = formatDate(currentDate.getHours());
  const minute = formatDate(currentDate.getMinutes());
  const second = formatDate(currentDate.getSeconds());
  return `${year}-${month}-${day}_${hour}-${minute}-${second}`;
};
var diskCapacity = async (pathToCheck) => {
  try {
    const { stdout } = await $`df -k ${pathToCheck}`.quiet();
    const output = new TextDecoder().decode(stdout);
    const lines = output.trim().split(`
`);
    const parts = lines[1].split(/\s+/);
    const total = parseInt(parts[1]) * 1024;
    const used = parseInt(parts[2]) * 1024;
    const free = parseInt(parts[3]) * 1024;
    return { total, used, free };
  } catch (error) {
    await insertErrorLog("service/helper.ts", "diskCapacity", error);
    return null;
  }
};
var getDirName = (dirPath) => dirPath.split("/").at(-1);
var removeDirRecursive = async (targetPath) => {
  await fs.rm(targetPath, { recursive: true, force: true });
};
var isDirEmpty = async (targetPath) => {
  const files = await fs.readdir(targetPath);
  return files.length === 0;
};
var removeEmptyDirs = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (!await isExist(fullPath))
      continue;
    if (entry.isDirectory()) {
      await removeEmptyDirs(fullPath);
      if (await isDirEmpty(fullPath)) {
        await removeDirRecursive(fullPath);
        console.log(`[Cleanup] Removed empty directory: ${fullPath}`);
      }
    }
  }
};
var startWithDot = (filePath) => {
  const basename2 = path.basename(filePath);
  return basename2.startsWith(".");
};

// server/db/main.ts
var createDBMS = async () => {
  try {
    const { exitCode } = await $2`PGPASSWORD=$DB_PASS psql -U $DB_USER -d postgres -h $DB_HOST -v name_db=$DB_NAME -v user_db=$DB_USER -f $DB_CREATE`;
    if (exitCode !== 0)
      return false;
    await sql.file(Bun.env.DB_MODEL);
    await sql.file(Bun.env.DB_VIEW);
    await sql.file(Bun.env.DB_TRIGGER);
    return true;
  } catch (error) {
    console.log("createDBMS", error);
    return false;
  }
};
var backupToDB = async () => {
  const { stderr, exitCode } = await $2`pg_dump $DB_URL > $DB_BACKUP`.quiet();
  exitCode !== 0 ? await insertErrorLog("db/main.ts", `backupToDB`, stderr) : console.log(`BACKUP successfully to the DB!`);
  return exitCode === 0;
};
var backupFiles = async (stream) => {
  const [isMainExist, isBackupExist] = await Promise.all([isExist(Bun.env.MAIN_PATH), isExist(Bun.env.BACKUP_DATA)]);
  if (!isMainExist || !isBackupExist) {
    await stream.writeln(`\u274C Failed! ${!isMainExist ? "Source" : "Backup"} directory path is not exist`);
    return false;
  }
  const [mainDisk, backupDisk] = await Promise.all([diskCapacity(Bun.env.MAIN_PATH), diskCapacity(Bun.env.BACKUP_DATA)]);
  if (mainDisk?.used > backupDisk?.total) {
    await stream.writeln(`\u274C Failed! Backup storage does not have enough spaces.`);
    return false;
  }
  const process2 = Bun.spawn(["rsync", "-ahv", "--delete", '--exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*"}', `${Bun.env.MAIN_PATH}/`, `${Bun.env.BACKUP_DATA}/`], {
    stderr: "pipe",
    stdout: "pipe"
  });
  try {
    const reader = process2.stdout.getReader();
    const decoder = new TextDecoder;
    while (true) {
      const { value, done } = await reader.read();
      if (done)
        break;
      const eachLine = decoder.decode(value, { stream: true }).trim();
      await stream.writeln(eachLine);
    }
  } catch (error) {
    await insertErrorLog("db/main.ts", `backupFiles`, error);
  } finally {
    process2.kill();
  }
  return await process2.exited === 0;
};
var restoreToDB = async () => {
  const { stderr, exitCode } = await $2`psql $DB_URL -f $DB_BACKUP`.quiet();
  exitCode !== 0 ? await insertErrorLog("db/main.ts", `restoreToDB`, stderr) : console.log(`RESTORE successfully to the DB!`);
  return exitCode === 0;
};

// server/init_sys.ts
var isNotDevMode = Bun.env.NODE_ENV !== "dev";
var isProduction = Bun.env.NODE_ENV === "production";
var isSystemInitialized = await checkInitialized();
if (!isSystemInitialized) {
  console.log("\uD83D\uDD27 Initializing Server...");
  const dbCreated = await createDBMS();
  console.log("\uD83D\uDCE6 Database created:", dbCreated);
  const systemInitialized = await initializeSystem();
  if (!systemInitialized) {
    console.error("\u274C Failed to initialize the system.");
    process.exit(1);
  }
}

// node_modules/hono/dist/adapter/bun/serve-static.js
import { stat } from "fs/promises";

// node_modules/hono/dist/utils/compress.js
var COMPRESSIBLE_CONTENT_TYPE_REGEX = /^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i;

// node_modules/hono/dist/utils/filepath.js
var getFilePath = (options) => {
  let filename = options.filename;
  const defaultDocument = options.defaultDocument || "index.html";
  if (filename.endsWith("/")) {
    filename = filename.concat(defaultDocument);
  } else if (!filename.match(/\.[a-zA-Z0-9_-]+$/)) {
    filename = filename.concat("/" + defaultDocument);
  }
  const path2 = getFilePathWithoutDefaultDocument({
    root: options.root,
    filename
  });
  return path2;
};
var getFilePathWithoutDefaultDocument = (options) => {
  let root = options.root || "";
  let filename = options.filename;
  if (/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(filename)) {
    return;
  }
  filename = filename.replace(/^\.?[\/\\]/, "");
  filename = filename.replace(/\\/, "/");
  root = root.replace(/\/$/, "");
  let path2 = root ? root + "/" + filename : filename;
  path2 = path2.replace(/^\.?\//, "");
  if (root[0] !== "/" && path2[0] === "/") {
    return;
  }
  return path2;
};

// node_modules/hono/dist/utils/mime.js
var getMimeType = (filename, mimes = baseMimes) => {
  const regexp = /\.([a-zA-Z0-9]+?)$/;
  const match = filename.match(regexp);
  if (!match) {
    return;
  }
  let mimeType = mimes[match[1]];
  if (mimeType && mimeType.startsWith("text")) {
    mimeType += "; charset=utf-8";
  }
  return mimeType;
};
var _baseMimes = {
  aac: "audio/aac",
  avi: "video/x-msvideo",
  avif: "image/avif",
  av1: "video/av1",
  bin: "application/octet-stream",
  bmp: "image/bmp",
  css: "text/css",
  csv: "text/csv",
  eot: "application/vnd.ms-fontobject",
  epub: "application/epub+zip",
  gif: "image/gif",
  gz: "application/gzip",
  htm: "text/html",
  html: "text/html",
  ico: "image/x-icon",
  ics: "text/calendar",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  js: "text/javascript",
  json: "application/json",
  jsonld: "application/ld+json",
  map: "application/json",
  mid: "audio/x-midi",
  midi: "audio/x-midi",
  mjs: "text/javascript",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mpeg: "video/mpeg",
  oga: "audio/ogg",
  ogv: "video/ogg",
  ogx: "application/ogg",
  opus: "audio/opus",
  otf: "font/otf",
  pdf: "application/pdf",
  png: "image/png",
  rtf: "application/rtf",
  svg: "image/svg+xml",
  tif: "image/tiff",
  tiff: "image/tiff",
  ts: "video/mp2t",
  ttf: "font/ttf",
  txt: "text/plain",
  wasm: "application/wasm",
  webm: "video/webm",
  weba: "audio/webm",
  webmanifest: "application/manifest+json",
  webp: "image/webp",
  woff: "font/woff",
  woff2: "font/woff2",
  xhtml: "application/xhtml+xml",
  xml: "application/xml",
  zip: "application/zip",
  "3gp": "video/3gpp",
  "3g2": "video/3gpp2",
  gltf: "model/gltf+json",
  glb: "model/gltf-binary"
};
var baseMimes = _baseMimes;

// node_modules/hono/dist/middleware/serve-static/index.js
var ENCODINGS = {
  br: ".br",
  zstd: ".zst",
  gzip: ".gz"
};
var ENCODINGS_ORDERED_KEYS = Object.keys(ENCODINGS);
var DEFAULT_DOCUMENT = "index.html";
var defaultPathResolve = (path2) => path2;
var serveStatic = (options) => {
  let isAbsoluteRoot = false;
  let root;
  if (options.root) {
    if (options.root.startsWith("/")) {
      isAbsoluteRoot = true;
      root = new URL(`file://${options.root}`).pathname;
    } else {
      root = options.root;
    }
  }
  return async (c, next) => {
    if (c.finalized) {
      await next();
      return;
    }
    let filename = options.path ?? decodeURI(c.req.path);
    filename = options.rewriteRequestPath ? options.rewriteRequestPath(filename) : filename;
    if (!filename.endsWith("/") && options.isDir) {
      const path22 = getFilePathWithoutDefaultDocument({
        filename,
        root
      });
      if (path22 && await options.isDir(path22)) {
        filename += "/";
      }
    }
    let path2 = getFilePath({
      filename,
      root,
      defaultDocument: DEFAULT_DOCUMENT
    });
    if (!path2) {
      return await next();
    }
    if (isAbsoluteRoot) {
      path2 = "/" + path2;
    }
    const getContent = options.getContent;
    const pathResolve = options.pathResolve ?? defaultPathResolve;
    path2 = pathResolve(path2);
    let content = await getContent(path2, c);
    if (!content) {
      let pathWithoutDefaultDocument = getFilePathWithoutDefaultDocument({
        filename,
        root
      });
      if (!pathWithoutDefaultDocument) {
        return await next();
      }
      pathWithoutDefaultDocument = pathResolve(pathWithoutDefaultDocument);
      if (pathWithoutDefaultDocument !== path2) {
        content = await getContent(pathWithoutDefaultDocument, c);
        if (content) {
          path2 = pathWithoutDefaultDocument;
        }
      }
    }
    if (content instanceof Response) {
      return c.newResponse(content.body, content);
    }
    if (content) {
      const mimeType = options.mimes && getMimeType(path2, options.mimes) || getMimeType(path2);
      c.header("Content-Type", mimeType || "application/octet-stream");
      if (options.precompressed && (!mimeType || COMPRESSIBLE_CONTENT_TYPE_REGEX.test(mimeType))) {
        const acceptEncodingSet = new Set(c.req.header("Accept-Encoding")?.split(",").map((encoding) => encoding.trim()));
        for (const encoding of ENCODINGS_ORDERED_KEYS) {
          if (!acceptEncodingSet.has(encoding)) {
            continue;
          }
          const compressedContent = await getContent(path2 + ENCODINGS[encoding], c);
          if (compressedContent) {
            content = compressedContent;
            c.header("Content-Encoding", encoding);
            c.header("Vary", "Accept-Encoding", { append: true });
            break;
          }
        }
      }
      await options.onFound?.(path2, c);
      return c.body(content);
    }
    await options.onNotFound?.(path2, c);
    await next();
    return;
  };
};

// node_modules/hono/dist/adapter/bun/serve-static.js
var serveStatic2 = (options) => {
  return async function serveStatic2(c, next) {
    const getContent = async (path2) => {
      path2 = path2.startsWith("/") ? path2 : `./${path2}`;
      const file = Bun.file(path2);
      return await file.exists() ? file : null;
    };
    const pathResolve = (path2) => {
      return path2.startsWith("/") ? path2 : `./${path2}`;
    };
    const isDir = async (path2) => {
      let isDir2;
      try {
        const stats = await stat(path2);
        isDir2 = stats.isDirectory();
      } catch {}
      return isDir2;
    };
    return serveStatic({
      ...options,
      getContent,
      pathResolve,
      isDir
    })(c, next);
  };
};

// node_modules/hono/dist/helper/ssg/middleware.js
var X_HONO_DISABLE_SSG_HEADER_KEY = "x-hono-disable-ssg";
var SSG_DISABLED_RESPONSE = (() => {
  try {
    return new Response("SSG is disabled", {
      status: 404,
      headers: { [X_HONO_DISABLE_SSG_HEADER_KEY]: "true" }
    });
  } catch {
    return null;
  }
})();

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/utils/constants.js
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";
// node_modules/hono/dist/adapter/bun/ssg.js
var { write } = Bun;

// node_modules/hono/dist/helper/websocket/index.js
var WSContext = class {
  #init;
  constructor(init) {
    this.#init = init;
    this.raw = init.raw;
    this.url = init.url ? new URL(init.url) : null;
    this.protocol = init.protocol ?? null;
  }
  send(source, options) {
    this.#init.send(source, options ?? {});
  }
  raw;
  binaryType = "arraybuffer";
  get readyState() {
    return this.#init.readyState;
  }
  url;
  protocol;
  close(code, reason) {
    this.#init.close(code, reason);
  }
};

// node_modules/hono/dist/adapter/bun/server.js
var getBunServer = (c) => ("server" in c.env) ? c.env.server : c.env;

// node_modules/hono/dist/adapter/bun/conninfo.js
var getConnInfo = (c) => {
  const server = getBunServer(c);
  if (!server) {
    throw new TypeError("env has to include the 2nd argument of fetch.");
  }
  if (typeof server.requestIP !== "function") {
    throw new TypeError("server.requestIP is not a function.");
  }
  const info = server.requestIP(c.req.raw);
  return {
    remote: {
      address: info.address,
      addressType: info.family === "IPv6" || info.family === "IPv4" ? info.family : undefined,
      port: info.port
    }
  };
};

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || undefined;
      }
      if (handler) {
        try {
          res = await handler(context, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// node_modules/hono/dist/request/constants.js
var GET_MATCH_RESULT = Symbol();

// node_modules/hono/dist/utils/body.js
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== undefined) {
    if (Array.isArray(form[key])) {
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    if (!key.endsWith("[]")) {
      form[key] = value;
    } else {
      form[key] = [value];
    }
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// node_modules/hono/dist/utils/url.js
var splitPath = (path2) => {
  const paths = path2.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path: path2 } = extractGroupsFromPath(routePath);
  const paths = splitPath(path2);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path2) => {
  const groups = [];
  path2 = path2.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path: path2 };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1;i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1;j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label, next) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match[1], new RegExp(`^${match[2]}(?=/${next})`)] : [label, match[1], new RegExp(`^${match[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
};
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
};
var tryDecodeURI = (str) => tryDecode(str, decodeURI);
var getPath = (request) => {
  const url = request.url;
  const start = url.indexOf("/", url.charCodeAt(9) === 58 ? 13 : 8);
  let i = start;
  for (;i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path2 = url.slice(start, queryIndex === -1 ? undefined : queryIndex);
      return tryDecodeURI(path2.includes("%25") ? path2.replace(/%25/g, "%2525") : path2);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
};
var mergePath = (base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
};
var checkOptionalParameter = (path2) => {
  if (path2.charCodeAt(path2.length - 1) !== 63 || !path2.includes(":")) {
    return null;
  }
  const segments = path2.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? undefined : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(keyIndex + 1, valueIndex === -1 ? nextKeyIndex === -1 ? undefined : nextKeyIndex : valueIndex);
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? undefined : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_);
var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path2 = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path2;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : undefined;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? undefined;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw[key]();
  };
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then((res) => Promise.all(res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))).then(() => buffer[0]));
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = (contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
};
var Context = class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    return this.#res ||= new Response(null, {
      headers: this.#preparedHeaders ??= new Headers
    });
  }
  set res(_res) {
    if (this.#res && _res) {
      _res = new Response(_res.body, _res);
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "content-type") {
          continue;
        }
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (this.finalized) {
      this.#res = new Response(this.#res.body, this.#res);
    }
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers;
    if (value === undefined) {
      headers.delete(name);
    } else if (options?.append) {
      headers.append(name, value);
    } else {
      headers.set(name, value);
    }
  };
  status = (status) => {
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map;
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : undefined;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    const responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers;
    if (typeof arg === "object" && "headers" in arg) {
      const argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (const [key, value] of argHeaders) {
        if (key.toLowerCase() === "set-cookie") {
          responseHeaders.append(key, value);
        } else {
          responseHeaders.set(key, value);
        }
      }
    }
    if (headers) {
      for (const [k, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          responseHeaders.set(k, v);
        } else {
          responseHeaders.delete(k);
          for (const v2 of v) {
            responseHeaders.append(k, v2);
          }
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return new Response(data, { status, headers: responseHeaders });
  }
  newResponse = (...args) => this.#newResponse(...args);
  body = (data, arg, headers) => this.#newResponse(data, arg, headers);
  text = (text, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(text, arg, setDefaultContentType(TEXT_PLAIN, headers));
  };
  json = (object, arg, headers) => {
    return this.#newResponse(JSON.stringify(object), arg, setDefaultContentType("application/json", headers));
  };
  html = (html, arg, headers) => {
    const res = (html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers));
    return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
  };
  redirect = (location, status) => {
    this.header("Location", String(location));
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response;
    return this.#notFoundHandler(this);
  };
};

// node_modules/hono/dist/hono-base.js
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path2, ...handlers) => {
      for (const p of [path2].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path2, app) {
    const subApp = this.basePath(path2);
    app.routes.map((r) => {
      let handler;
      if (app.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await compose([], app.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path2) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path2);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
  mount(path2, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = (request) => request;
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = undefined;
      try {
        executionContext = c.executionCtx;
      } catch {}
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path2);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    };
    this.#addRoute(METHOD_NAME_ALL, mergePath(path2, "*"), handler);
    return this;
  }
  #addRoute(method, path2, handler) {
    method = method.toUpperCase();
    path2 = mergePath(this._basePath, path2);
    const r = { basePath: this._basePath, path: path2, method, handler };
    this.router.add(method, path2, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path2 = this.getPath(request, { env });
    const matchResult = this.router.match(method, path2);
    const c = new Context(request, {
      path: path2,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then((resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(new Request(/^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`, requestInit), Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, undefined, event.request.method));
    });
  };
};

// node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node = class {
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== undefined) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some((k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node;
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some((k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node;
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  #context = { varIndex: 0 };
  #root = new Node;
  insert(path2, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0;; ) {
      let replaced = false;
      path2 = path2.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path2.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1;i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1;j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== undefined) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== undefined) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path2) {
  return wildcardRegExpCache[path2] ??= new RegExp(path2 === "*" ? "" : `^${path2.replace(/\/\*$|([.\\+*[^\]$()])/g, (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)")}$`);
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie;
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map((route) => [!/\*|\/:/.test(route[0]), ...route]).sort(([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length);
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length;i < len; i++) {
    const [pathErrorCheckOnly, path2, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path2] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path2, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path2) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (;paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length;i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length;j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length;k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path2) {
  if (!middleware) {
    return;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path2)) {
      return [...middleware[k]];
    }
  }
  return;
}
var RegExpRouter = class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path2, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path2 === "/*") {
      path2 = "*";
    }
    const paramCount = (path2.match(/\/:/g) || []).length;
    if (/\*$/.test(path2)) {
      const re = buildWildcardRegExp(path2);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path2] ||= findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || [];
        });
      } else {
        middleware[method][path2] ||= findMiddleware(middleware[method], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach((p) => re.test(p) && routes[m][p].push([handler, paramCount]));
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path2) || [path2];
    for (let i = 0, len = paths.length;i < len; i++) {
      const path22 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path22] ||= [
            ...findMiddleware(middleware[m], path22) || findMiddleware(middleware[METHOD_NAME_ALL], path22) || []
          ];
          routes[m][path22].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path2) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path22) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path22];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path22.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path2);
  }
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = undefined;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path2) => [path2, r[method][path2]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(...Object.keys(r[METHOD_NAME_ALL]).map((path2) => [path2, r[METHOD_NAME_ALL][path2]]));
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path2, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path2, handler]);
  }
  match(method, path2) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (;i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length;i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path2);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = undefined;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/node.js
var emptyParams = /* @__PURE__ */ Object.create(null);
var Node2 = class {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path2, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path2);
    const possibleKeys = [];
    for (let i = 0, len = parts.length;i < len; i++) {
      const p = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p;
      if (key in curNode.#children) {
        curNode = curNode.#children[key];
        if (pattern) {
          possibleKeys.push(pattern[1]);
        }
        continue;
      }
      curNode.#children[key] = new Node2;
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    curNode.#methods.push({
      [method]: {
        handler,
        possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
        score: this.#order
      }
    });
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length;i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== undefined) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length;i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path2) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path2);
    const curNodesQueue = [];
    for (let i = 0, len = parts.length;i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length;j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(...this.#getHandlerSets(nextNode.#children["*"], method, node.#params));
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length;k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          if (!part) {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp) {
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
              if (Object.keys(child.#children).length) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(...this.#getHandlerSets(child.#children["*"], method, params, node.#params));
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes.concat(curNodesQueue.shift() ?? []);
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2;
  }
  add(method, path2, handler) {
    const results = checkOptionalParameter(path2);
    if (results) {
      for (let i = 0, len = results.length;i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path2, handler);
  }
  match(method, path2) {
    return this.#node.search(method, path2);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter, new TrieRouter]
    });
  }
};

// node_modules/hono/dist/middleware/cors/index.js
var cors = (options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  const findAllowMethods = ((optsAllowMethods) => {
    if (typeof optsAllowMethods === "function") {
      return optsAllowMethods;
    } else if (Array.isArray(optsAllowMethods)) {
      return () => optsAllowMethods;
    } else {
      return () => [];
    }
  })(opts.allowMethods);
  return async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    const allowOrigin = findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.origin !== "*") {
      const existingVary = c.req.header("Vary");
      if (existingVary) {
        set("Vary", existingVary);
      } else {
        set("Vary", "Origin");
      }
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      const allowMethods = findAllowMethods(c.req.header("origin") || "", c);
      if (allowMethods.length) {
        set("Access-Control-Allow-Methods", allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
  };
};

// node_modules/hono/dist/http-exception.js
var HTTPException = class extends Error {
  res;
  status;
  constructor(status = 500, options) {
    super(options?.message, { cause: options?.cause });
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      const newResponse = new Response(this.res.body, {
        status: this.status,
        headers: this.res.headers
      });
      return newResponse;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};

// node_modules/hono/dist/middleware/csrf/index.js
var isSafeMethodRe = /^(GET|HEAD)$/;
var isRequestedByFormElementRe = /^\b(application\/x-www-form-urlencoded|multipart\/form-data|text\/plain)\b/i;
var csrf = (options) => {
  const handler = ((optsOrigin) => {
    if (!optsOrigin) {
      return (origin, c) => origin === new URL(c.req.url).origin;
    } else if (typeof optsOrigin === "string") {
      return (origin) => origin === optsOrigin;
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin);
    }
  })(options?.origin);
  const isAllowedOrigin = (origin, c) => {
    if (origin === undefined) {
      return false;
    }
    return handler(origin, c);
  };
  return async function csrf2(c, next) {
    if (!isSafeMethodRe.test(c.req.method) && isRequestedByFormElementRe.test(c.req.header("content-type") || "text/plain") && !isAllowedOrigin(c.req.header("origin"), c)) {
      const res = new Response("Forbidden", {
        status: 403
      });
      throw new HTTPException(403, { res });
    }
    await next();
  };
};

// node_modules/hono/dist/utils/color.js
function getColorEnabled() {
  const { process: process2, Deno } = globalThis;
  const isNoColor = typeof Deno?.noColor === "boolean" ? Deno.noColor : process2 !== undefined ? "NO_COLOR" in process2?.env : false;
  return !isNoColor;
}
async function getColorEnabledAsync() {
  const { navigator } = globalThis;
  const cfWorkers = "cloudflare:workers";
  const isNoColor = navigator !== undefined && navigator.userAgent === "Cloudflare-Workers" ? await (async () => {
    try {
      return "NO_COLOR" in ((await import(cfWorkers)).env ?? {});
    } catch {
      return false;
    }
  })() : !getColorEnabled();
  return !isNoColor;
}

// node_modules/hono/dist/middleware/logger/index.js
var humanize = (times) => {
  const [delimiter, separator] = [",", "."];
  const orderTimes = times.map((v) => v.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter));
  return orderTimes.join(separator);
};
var time = (start) => {
  const delta = Date.now() - start;
  return humanize([delta < 1000 ? delta + "ms" : Math.round(delta / 1000) + "s"]);
};
var colorStatus = async (status) => {
  const colorEnabled = await getColorEnabledAsync();
  if (colorEnabled) {
    switch (status / 100 | 0) {
      case 5:
        return `\x1B[31m${status}\x1B[0m`;
      case 4:
        return `\x1B[33m${status}\x1B[0m`;
      case 3:
        return `\x1B[36m${status}\x1B[0m`;
      case 2:
        return `\x1B[32m${status}\x1B[0m`;
    }
  }
  return `${status}`;
};
async function log(fn, prefix, method, path2, status = 0, elapsed) {
  const out = prefix === "<--" ? `${prefix} ${method} ${path2}` : `${prefix} ${method} ${path2} ${await colorStatus(status)} ${elapsed}`;
  fn(out);
}
var logger = (fn = console.log) => {
  return async function logger2(c, next) {
    const { method, url } = c.req;
    const path2 = url.slice(url.indexOf("/", 8));
    await log(fn, "<--", method, path2);
    const start = Date.now();
    await next();
    await log(fn, "-->", method, path2, c.res.status, time(start));
  };
};

// node_modules/hono/dist/middleware/secure-headers/secure-headers.js
var HEADERS_MAP = {
  crossOriginEmbedderPolicy: ["Cross-Origin-Embedder-Policy", "require-corp"],
  crossOriginResourcePolicy: ["Cross-Origin-Resource-Policy", "same-origin"],
  crossOriginOpenerPolicy: ["Cross-Origin-Opener-Policy", "same-origin"],
  originAgentCluster: ["Origin-Agent-Cluster", "?1"],
  referrerPolicy: ["Referrer-Policy", "no-referrer"],
  strictTransportSecurity: ["Strict-Transport-Security", "max-age=15552000; includeSubDomains"],
  xContentTypeOptions: ["X-Content-Type-Options", "nosniff"],
  xDnsPrefetchControl: ["X-DNS-Prefetch-Control", "off"],
  xDownloadOptions: ["X-Download-Options", "noopen"],
  xFrameOptions: ["X-Frame-Options", "SAMEORIGIN"],
  xPermittedCrossDomainPolicies: ["X-Permitted-Cross-Domain-Policies", "none"],
  xXssProtection: ["X-XSS-Protection", "0"]
};
var DEFAULT_OPTIONS = {
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: true,
  crossOriginOpenerPolicy: true,
  originAgentCluster: true,
  referrerPolicy: true,
  strictTransportSecurity: true,
  xContentTypeOptions: true,
  xDnsPrefetchControl: true,
  xDownloadOptions: true,
  xFrameOptions: true,
  xPermittedCrossDomainPolicies: true,
  xXssProtection: true,
  removePoweredBy: true,
  permissionsPolicy: {}
};
var secureHeaders = (customOptions) => {
  const options = { ...DEFAULT_OPTIONS, ...customOptions };
  const headersToSet = getFilteredHeaders(options);
  const callbacks = [];
  if (options.contentSecurityPolicy) {
    const [callback, value] = getCSPDirectives(options.contentSecurityPolicy);
    if (callback) {
      callbacks.push(callback);
    }
    headersToSet.push(["Content-Security-Policy", value]);
  }
  if (options.contentSecurityPolicyReportOnly) {
    const [callback, value] = getCSPDirectives(options.contentSecurityPolicyReportOnly);
    if (callback) {
      callbacks.push(callback);
    }
    headersToSet.push(["Content-Security-Policy-Report-Only", value]);
  }
  if (options.permissionsPolicy && Object.keys(options.permissionsPolicy).length > 0) {
    headersToSet.push([
      "Permissions-Policy",
      getPermissionsPolicyDirectives(options.permissionsPolicy)
    ]);
  }
  if (options.reportingEndpoints) {
    headersToSet.push(["Reporting-Endpoints", getReportingEndpoints(options.reportingEndpoints)]);
  }
  if (options.reportTo) {
    headersToSet.push(["Report-To", getReportToOptions(options.reportTo)]);
  }
  return async function secureHeaders2(ctx, next) {
    const headersToSetForReq = callbacks.length === 0 ? headersToSet : callbacks.reduce((acc, cb) => cb(ctx, acc), headersToSet);
    await next();
    setHeaders(ctx, headersToSetForReq);
    if (options?.removePoweredBy) {
      ctx.res.headers.delete("X-Powered-By");
    }
  };
};
function getFilteredHeaders(options) {
  return Object.entries(HEADERS_MAP).filter(([key]) => options[key]).map(([key, defaultValue]) => {
    const overrideValue = options[key];
    return typeof overrideValue === "string" ? [defaultValue[0], overrideValue] : defaultValue;
  });
}
function getCSPDirectives(contentSecurityPolicy) {
  const callbacks = [];
  const resultValues = [];
  for (const [directive, value] of Object.entries(contentSecurityPolicy)) {
    const valueArray = Array.isArray(value) ? value : [value];
    valueArray.forEach((value2, i) => {
      if (typeof value2 === "function") {
        const index = i * 2 + 2 + resultValues.length;
        callbacks.push((ctx, values) => {
          values[index] = value2(ctx, directive);
        });
      }
    });
    resultValues.push(directive.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (match, offset) => offset ? "-" + match.toLowerCase() : match.toLowerCase()), ...valueArray.flatMap((value2) => [" ", value2]), "; ");
  }
  resultValues.pop();
  return callbacks.length === 0 ? [undefined, resultValues.join("")] : [
    (ctx, headersToSet) => headersToSet.map((values) => {
      if (values[0] === "Content-Security-Policy" || values[0] === "Content-Security-Policy-Report-Only") {
        const clone = values[1].slice();
        callbacks.forEach((cb) => {
          cb(ctx, clone);
        });
        return [values[0], clone.join("")];
      } else {
        return values;
      }
    }),
    resultValues
  ];
}
function getPermissionsPolicyDirectives(policy) {
  return Object.entries(policy).map(([directive, value]) => {
    const kebabDirective = camelToKebab(directive);
    if (typeof value === "boolean") {
      return `${kebabDirective}=${value ? "*" : "none"}`;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return `${kebabDirective}=()`;
      }
      if (value.length === 1 && (value[0] === "*" || value[0] === "none")) {
        return `${kebabDirective}=${value[0]}`;
      }
      const allowlist = value.map((item) => ["self", "src"].includes(item) ? item : `"${item}"`);
      return `${kebabDirective}=(${allowlist.join(" ")})`;
    }
    return "";
  }).filter(Boolean).join(", ");
}
function camelToKebab(str) {
  return str.replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
}
function getReportingEndpoints(reportingEndpoints = []) {
  return reportingEndpoints.map((endpoint) => `${endpoint.name}="${endpoint.url}"`).join(", ");
}
function getReportToOptions(reportTo = []) {
  return reportTo.map((option) => JSON.stringify(option)).join(", ");
}
function setHeaders(ctx, headersToSet) {
  headersToSet.forEach(([header, value]) => {
    ctx.res.headers.set(header, value);
  });
}

// node_modules/hono/dist/utils/cookie.js
var algorithm = { name: "HMAC", hash: "SHA-256" };
var getCryptoKey = async (secret) => {
  const secretBuf = typeof secret === "string" ? new TextEncoder().encode(secret) : secret;
  return await crypto.subtle.importKey("raw", secretBuf, algorithm, false, ["sign", "verify"]);
};
var makeSignature = async (value, secret) => {
  const key = await getCryptoKey(secret);
  const signature = await crypto.subtle.sign(algorithm.name, key, new TextEncoder().encode(value));
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
};
var verifySignature = async (base64Signature, value, secret) => {
  try {
    const signatureBinStr = atob(base64Signature);
    const signature = new Uint8Array(signatureBinStr.length);
    for (let i = 0, len = signatureBinStr.length;i < len; i++) {
      signature[i] = signatureBinStr.charCodeAt(i);
    }
    return await crypto.subtle.verify(algorithm, secret, signature, new TextEncoder().encode(value));
  } catch {
    return false;
  }
};
var validCookieNameRegEx = /^[\w!#$%&'*.^`|~+-]+$/;
var validCookieValueRegEx = /^[ !#-:<-[\]-~]*$/;
var parse = (cookie, name) => {
  if (name && cookie.indexOf(name) === -1) {
    return {};
  }
  const pairs = cookie.trim().split(";");
  const parsedCookie = {};
  for (let pairStr of pairs) {
    pairStr = pairStr.trim();
    const valueStartPos = pairStr.indexOf("=");
    if (valueStartPos === -1) {
      continue;
    }
    const cookieName = pairStr.substring(0, valueStartPos).trim();
    if (name && name !== cookieName || !validCookieNameRegEx.test(cookieName)) {
      continue;
    }
    let cookieValue = pairStr.substring(valueStartPos + 1).trim();
    if (cookieValue.startsWith('"') && cookieValue.endsWith('"')) {
      cookieValue = cookieValue.slice(1, -1);
    }
    if (validCookieValueRegEx.test(cookieValue)) {
      parsedCookie[cookieName] = decodeURIComponent_(cookieValue);
      if (name) {
        break;
      }
    }
  }
  return parsedCookie;
};
var parseSigned = async (cookie, secret, name) => {
  const parsedCookie = {};
  const secretKey = await getCryptoKey(secret);
  for (const [key, value] of Object.entries(parse(cookie, name))) {
    const signatureStartPos = value.lastIndexOf(".");
    if (signatureStartPos < 1) {
      continue;
    }
    const signedValue = value.substring(0, signatureStartPos);
    const signature = value.substring(signatureStartPos + 1);
    if (signature.length !== 44 || !signature.endsWith("=")) {
      continue;
    }
    const isVerified = await verifySignature(signature, signedValue, secretKey);
    parsedCookie[key] = isVerified ? signedValue : false;
  }
  return parsedCookie;
};
var _serialize = (name, value, opt = {}) => {
  let cookie = `${name}=${value}`;
  if (name.startsWith("__Secure-") && !opt.secure) {
    throw new Error("__Secure- Cookie must have Secure attributes");
  }
  if (name.startsWith("__Host-")) {
    if (!opt.secure) {
      throw new Error("__Host- Cookie must have Secure attributes");
    }
    if (opt.path !== "/") {
      throw new Error('__Host- Cookie must have Path attributes with "/"');
    }
    if (opt.domain) {
      throw new Error("__Host- Cookie must not have Domain attributes");
    }
  }
  if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
    if (opt.maxAge > 34560000) {
      throw new Error("Cookies Max-Age SHOULD NOT be greater than 400 days (34560000 seconds) in duration.");
    }
    cookie += `; Max-Age=${opt.maxAge | 0}`;
  }
  if (opt.domain && opt.prefix !== "host") {
    cookie += `; Domain=${opt.domain}`;
  }
  if (opt.path) {
    cookie += `; Path=${opt.path}`;
  }
  if (opt.expires) {
    if (opt.expires.getTime() - Date.now() > 34560000000) {
      throw new Error("Cookies Expires SHOULD NOT be greater than 400 days (34560000 seconds) in the future.");
    }
    cookie += `; Expires=${opt.expires.toUTCString()}`;
  }
  if (opt.httpOnly) {
    cookie += "; HttpOnly";
  }
  if (opt.secure) {
    cookie += "; Secure";
  }
  if (opt.sameSite) {
    cookie += `; SameSite=${opt.sameSite.charAt(0).toUpperCase() + opt.sameSite.slice(1)}`;
  }
  if (opt.priority) {
    cookie += `; Priority=${opt.priority}`;
  }
  if (opt.partitioned) {
    if (!opt.secure) {
      throw new Error("Partitioned Cookie must have Secure attributes");
    }
    cookie += "; Partitioned";
  }
  return cookie;
};
var serialize = (name, value, opt) => {
  value = encodeURIComponent(value);
  return _serialize(name, value, opt);
};
var serializeSigned = async (name, value, secret, opt = {}) => {
  const signature = await makeSignature(value, secret);
  value = `${value}.${signature}`;
  value = encodeURIComponent(value);
  return _serialize(name, value, opt);
};

// node_modules/hono/dist/helper/cookie/index.js
var getCookie = (c, key, prefix) => {
  const cookie = c.req.raw.headers.get("Cookie");
  if (typeof key === "string") {
    if (!cookie) {
      return;
    }
    let finalKey = key;
    if (prefix === "secure") {
      finalKey = "__Secure-" + key;
    } else if (prefix === "host") {
      finalKey = "__Host-" + key;
    }
    const obj2 = parse(cookie, finalKey);
    return obj2[finalKey];
  }
  if (!cookie) {
    return {};
  }
  const obj = parse(cookie);
  return obj;
};
var getSignedCookie = async (c, secret, key, prefix) => {
  const cookie = c.req.raw.headers.get("Cookie");
  if (typeof key === "string") {
    if (!cookie) {
      return;
    }
    let finalKey = key;
    if (prefix === "secure") {
      finalKey = "__Secure-" + key;
    } else if (prefix === "host") {
      finalKey = "__Host-" + key;
    }
    const obj2 = await parseSigned(cookie, secret, finalKey);
    return obj2[finalKey];
  }
  if (!cookie) {
    return {};
  }
  const obj = await parseSigned(cookie, secret);
  return obj;
};
var setCookie = (c, name, value, opt) => {
  let cookie;
  if (opt?.prefix === "secure") {
    cookie = serialize("__Secure-" + name, value, { path: "/", ...opt, secure: true });
  } else if (opt?.prefix === "host") {
    cookie = serialize("__Host-" + name, value, {
      ...opt,
      path: "/",
      secure: true,
      domain: undefined
    });
  } else {
    cookie = serialize(name, value, { path: "/", ...opt });
  }
  c.header("Set-Cookie", cookie, { append: true });
};
var setSignedCookie = async (c, name, value, secret, opt) => {
  let cookie;
  if (opt?.prefix === "secure") {
    cookie = await serializeSigned("__Secure-" + name, value, secret, {
      path: "/",
      ...opt,
      secure: true
    });
  } else if (opt?.prefix === "host") {
    cookie = await serializeSigned("__Host-" + name, value, secret, {
      ...opt,
      path: "/",
      secure: true,
      domain: undefined
    });
  } else {
    cookie = await serializeSigned(name, value, secret, { path: "/", ...opt });
  }
  c.header("set-cookie", cookie, { append: true });
};
var deleteCookie = (c, name, opt) => {
  const deletedCookie = getCookie(c, name, opt?.prefix);
  setCookie(c, name, "", { ...opt, maxAge: 0 });
  return deletedCookie;
};

// node_modules/hono/dist/helper/factory/index.js
var Factory = class {
  initApp;
  #defaultAppOptions;
  constructor(init) {
    this.initApp = init?.initApp;
    this.#defaultAppOptions = init?.defaultAppOptions;
  }
  createApp = (options) => {
    const app = new Hono2(options && this.#defaultAppOptions ? { ...this.#defaultAppOptions, ...options } : options ?? this.#defaultAppOptions);
    if (this.initApp) {
      this.initApp(app);
    }
    return app;
  };
  createMiddleware = (middleware) => middleware;
  createHandlers = (...handlers) => {
    return handlers.filter((handler) => handler !== undefined);
  };
};
var createMiddleware = (middleware) => middleware;

// server/routes/authHelper/_cookies.ts
import crypto2 from "crypto";

// node_modules/zod/dist/esm/v3/external.js
var exports_external = {};
__export(exports_external, {
  void: () => voidType,
  util: () => util,
  unknown: () => unknownType,
  union: () => unionType,
  undefined: () => undefinedType,
  tuple: () => tupleType,
  transformer: () => effectsType,
  symbol: () => symbolType,
  string: () => stringType,
  strictObject: () => strictObjectType,
  setErrorMap: () => setErrorMap,
  set: () => setType,
  record: () => recordType,
  quotelessJson: () => quotelessJson,
  promise: () => promiseType,
  preprocess: () => preprocessType,
  pipeline: () => pipelineType,
  ostring: () => ostring,
  optional: () => optionalType,
  onumber: () => onumber,
  oboolean: () => oboolean,
  objectUtil: () => objectUtil,
  object: () => objectType,
  number: () => numberType,
  nullable: () => nullableType,
  null: () => nullType,
  never: () => neverType,
  nativeEnum: () => nativeEnumType,
  nan: () => nanType,
  map: () => mapType,
  makeIssue: () => makeIssue,
  literal: () => literalType,
  lazy: () => lazyType,
  late: () => late,
  isValid: () => isValid,
  isDirty: () => isDirty,
  isAsync: () => isAsync,
  isAborted: () => isAborted,
  intersection: () => intersectionType,
  instanceof: () => instanceOfType,
  getParsedType: () => getParsedType,
  getErrorMap: () => getErrorMap,
  function: () => functionType,
  enum: () => enumType,
  effect: () => effectsType,
  discriminatedUnion: () => discriminatedUnionType,
  defaultErrorMap: () => en_default,
  datetimeRegex: () => datetimeRegex,
  date: () => dateType,
  custom: () => custom,
  coerce: () => coerce,
  boolean: () => booleanType,
  bigint: () => bigIntType,
  array: () => arrayType,
  any: () => anyType,
  addIssueToContext: () => addIssueToContext,
  ZodVoid: () => ZodVoid,
  ZodUnknown: () => ZodUnknown,
  ZodUnion: () => ZodUnion,
  ZodUndefined: () => ZodUndefined,
  ZodType: () => ZodType,
  ZodTuple: () => ZodTuple,
  ZodTransformer: () => ZodEffects,
  ZodSymbol: () => ZodSymbol,
  ZodString: () => ZodString,
  ZodSet: () => ZodSet,
  ZodSchema: () => ZodType,
  ZodRecord: () => ZodRecord,
  ZodReadonly: () => ZodReadonly,
  ZodPromise: () => ZodPromise,
  ZodPipeline: () => ZodPipeline,
  ZodParsedType: () => ZodParsedType,
  ZodOptional: () => ZodOptional,
  ZodObject: () => ZodObject,
  ZodNumber: () => ZodNumber,
  ZodNullable: () => ZodNullable,
  ZodNull: () => ZodNull,
  ZodNever: () => ZodNever,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNaN: () => ZodNaN,
  ZodMap: () => ZodMap,
  ZodLiteral: () => ZodLiteral,
  ZodLazy: () => ZodLazy,
  ZodIssueCode: () => ZodIssueCode,
  ZodIntersection: () => ZodIntersection,
  ZodFunction: () => ZodFunction,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodError: () => ZodError,
  ZodEnum: () => ZodEnum,
  ZodEffects: () => ZodEffects,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodDefault: () => ZodDefault,
  ZodDate: () => ZodDate,
  ZodCatch: () => ZodCatch,
  ZodBranded: () => ZodBranded,
  ZodBoolean: () => ZodBoolean,
  ZodBigInt: () => ZodBigInt,
  ZodArray: () => ZodArray,
  ZodAny: () => ZodAny,
  Schema: () => ZodType,
  ParseStatus: () => ParseStatus,
  OK: () => OK,
  NEVER: () => NEVER,
  INVALID: () => INVALID,
  EMPTY_PATH: () => EMPTY_PATH,
  DIRTY: () => DIRTY,
  BRAND: () => BRAND
});

// node_modules/zod/dist/esm/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {};
  function assertIs(_arg) {}
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error;
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/dist/esm/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};

class ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/dist/esm/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/zod/dist/esm/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
// node_modules/zod/dist/esm/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path: path2, errorMaps, issueData } = params;
  const fullPath = [...path2, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== undefined) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      overrideMap,
      overrideMap === en_default ? undefined : en_default
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}

class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
// node_modules/zod/dist/esm/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/dist/esm/v3/types.js
class ParseInputLazyPath {
  constructor(parent, value, path2, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path2;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}

class ZodType {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus,
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}

class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}

class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};

class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};

class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};

class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};

class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};

class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};

class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};

class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};

class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};

class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};

class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};

class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : undefined,
          maximum: tooBig ? def.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}

class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {} else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== undefined ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};

class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = undefined;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [undefined];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [undefined, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};

class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = new Map;
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0;index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}

class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};

class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};

class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}

class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = new Map;
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = new Map;
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};

class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = new Set;
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};

class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}

class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};

class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}

class ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
}
ZodEnum.create = createZodEnum;

class ZodNativeEnum extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};

class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};

class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(undefined);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};

class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};

class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};

class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};

class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");

class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}

class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}

class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
// server/routes/authHelper/_cookies.ts
var SESSION_KEY = "auth_token";
var SET_USER_SESSION = "user_session_id";
var sessionStore = new Map;
var userAuthSchema = exports_external.object({
  username: exports_external.string().regex(/^[a-zA-Z0-9\s]*$/, "The string should not contain special characters").optional(),
  email: exports_external.string().email("Invalid email address")
});
var setSecureCookie = async (c, name, value) => {
  await setSignedCookie(c, name, JSON.stringify(value), Bun.env.SECRET_KEY, {
    httpOnly: true,
    maxAge: 15,
    sameSite: isNotDevMode ? "Strict" : "Lax",
    secure: isProduction,
    ...isProduction ? { domain: Bun.env.DOMAIN_NAME } : {}
  });
};
var getSecureCookie = async (c, name) => {
  const cookie = await getSignedCookie(c, Bun.env.SECRET_KEY, name);
  return cookie && typeof cookie === "string" ? JSON.parse(cookie) : null;
};
var clearCookie = (c, name) => {
  deleteCookie(c, name);
};
var createAuthSession = async (c, user) => {
  deleteOldUserSession(user.userEmail);
  const sessionId = generateSid();
  sessionStore.set(sessionId, user);
  await setSignedCookie(c, SESSION_KEY, sessionId, Bun.env.SECRET_KEY, {
    httpOnly: true,
    path: "/",
    maxAge: 24 * 60 * 60,
    sameSite: isNotDevMode ? "Strict" : "Lax",
    secure: isProduction,
    ...isProduction ? { domain: Bun.env.DOMAIN_NAME } : {}
  });
};
var generateSid = () => crypto2.randomBytes(32).toString("hex");
var deleteOldUserSession = (userEmail) => {
  sessionStore.forEach((userValue, sessionId) => {
    if (userValue.userEmail === userEmail)
      sessionStore.delete(sessionId);
  });
};

// server/middleware/validateAuth.ts
var getUserBySession = (c) => {
  const sessionId = c.get(SET_USER_SESSION);
  if (!sessionId)
    return {};
  return sessionStore.get(sessionId);
};
var logUserInDB = (isLoggedIn = false) => createMiddleware(async (c, next) => {
  try {
    const info = getConnInfo(c);
    const uAgent = c.req.header("user-agent");
    let userLog = { user_agent: uAgent, ip_address: info.remote.address };
    if (isLoggedIn) {
      userLog = { ...userLog, ...{ last_logged_in: "NOW()" } };
    }
    await sql`INSERT INTO "multi_schema"."UserLog" ${sql(userLog)}`.catch((e) => console.log("Failed to Log User on Login", e));
    return await next();
  } catch (error) {
    console.log("middleware/validate - logUserInDB error");
    return c.json({ error: "An error occurs while user is trying to sign in" }, 500);
  }
});
var isAuthenticate = createMiddleware(async (c, next) => {
  const sessionId = await getSignedCookie(c, Bun.env.SECRET_KEY, SESSION_KEY);
  if (sessionId && sessionStore.has(sessionId)) {
    c.set(SET_USER_SESSION, sessionId);
    return await next();
  }
  return c.json({ error: "Warning: Unauthorized Access" }, 401);
});
var isAdmin = createMiddleware(async (c, next) => {
  const adminInfo = getUserBySession(c);
  if (adminInfo && adminInfo.roleType === "admin")
    return await next();
  return c.json({ error: "Warning:  Unauthorized Access Attempt \u2013 Permission Denied" }, 403);
});

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js
var exports_isoBase64URL = {};
__export(exports_isoBase64URL, {
  trimPadding: () => trimPadding,
  toUTF8String: () => toUTF8String,
  toBuffer: () => toBuffer,
  toBase64: () => toBase64,
  isBase64URL: () => isBase64URL,
  isBase64: () => isBase64,
  fromUTF8String: () => fromUTF8String,
  fromBuffer: () => fromBuffer
});

// node_modules/@hexagon/base64/src/base64.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var charsUrl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
var genLookup = (target) => {
  const lookupTemp = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
  const len = chars.length;
  for (let i = 0;i < len; i++) {
    lookupTemp[target.charCodeAt(i)] = i;
  }
  return lookupTemp;
};
var lookup = genLookup(chars);
var lookupUrl = genLookup(charsUrl);
var base64UrlPattern = /^[-A-Za-z0-9\-_]*$/;
var base64Pattern = /^[-A-Za-z0-9+/]*={0,3}$/;
var base64 = {};
base64.toArrayBuffer = (data, urlMode) => {
  const len = data.length;
  let bufferLength = data.length * 0.75, i, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (data[data.length - 1] === "=") {
    bufferLength--;
    if (data[data.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer), target = urlMode ? lookupUrl : lookup;
  for (i = 0;i < len; i += 4) {
    encoded1 = target[data.charCodeAt(i)];
    encoded2 = target[data.charCodeAt(i + 1)];
    encoded3 = target[data.charCodeAt(i + 2)];
    encoded4 = target[data.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};
base64.fromArrayBuffer = (arrBuf, urlMode) => {
  const bytes = new Uint8Array(arrBuf);
  let i, result = "";
  const len = bytes.length, target = urlMode ? charsUrl : chars;
  for (i = 0;i < len; i += 3) {
    result += target[bytes[i] >> 2];
    result += target[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    result += target[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    result += target[bytes[i + 2] & 63];
  }
  const remainder = len % 3;
  if (remainder === 2) {
    result = result.substring(0, result.length - 1) + (urlMode ? "" : "=");
  } else if (remainder === 1) {
    result = result.substring(0, result.length - 2) + (urlMode ? "" : "==");
  }
  return result;
};
base64.toString = (str, urlMode) => {
  return new TextDecoder().decode(base64.toArrayBuffer(str, urlMode));
};
base64.fromString = (str, urlMode) => {
  return base64.fromArrayBuffer(new TextEncoder().encode(str), urlMode);
};
base64.validate = (encoded, urlMode) => {
  if (!(typeof encoded === "string" || encoded instanceof String)) {
    return false;
  }
  try {
    return urlMode ? base64UrlPattern.test(encoded) : base64Pattern.test(encoded);
  } catch (_e) {
    return false;
  }
};
base64.base64 = base64;
var base64_default = base64;

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoBase64URL.js
function toBuffer(base64urlString, from = "base64url") {
  const _buffer = base64_default.toArrayBuffer(base64urlString, from === "base64url");
  return new Uint8Array(_buffer);
}
function fromBuffer(buffer, to = "base64url") {
  return base64_default.fromArrayBuffer(buffer, to === "base64url");
}
function toBase64(base64urlString) {
  const fromBase64Url = base64_default.toArrayBuffer(base64urlString, true);
  const toBase642 = base64_default.fromArrayBuffer(fromBase64Url);
  return toBase642;
}
function fromUTF8String(utf8String) {
  return base64_default.fromString(utf8String, true);
}
function toUTF8String(base64urlString) {
  return base64_default.toString(base64urlString, true);
}
function isBase64(input) {
  return base64_default.validate(input, false);
}
function isBase64URL(input) {
  input = trimPadding(input);
  return base64_default.validate(input, true);
}
function trimPadding(input) {
  return input.replace(/=/g, "");
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCBOR.js
var exports_isoCBOR = {};
__export(exports_isoCBOR, {
  encode: () => encode,
  decodeFirst: () => decodeFirst
});

// node_modules/@levischuck/tiny-cbor/esm/cbor/cbor_internal.js
function decodeLength(data, argument, index) {
  if (argument < 24) {
    return [argument, 1];
  }
  const remainingDataLength = data.byteLength - index - 1;
  const view = new DataView(data.buffer, index + 1);
  let output;
  let bytes = 0;
  switch (argument) {
    case 24: {
      if (remainingDataLength > 0) {
        output = view.getUint8(0);
        bytes = 2;
      }
      break;
    }
    case 25: {
      if (remainingDataLength > 1) {
        output = view.getUint16(0, false);
        bytes = 3;
      }
      break;
    }
    case 26: {
      if (remainingDataLength > 3) {
        output = view.getUint32(0, false);
        bytes = 5;
      }
      break;
    }
    case 27: {
      if (remainingDataLength > 7) {
        const bigOutput = view.getBigUint64(0, false);
        if (bigOutput >= 24n && bigOutput <= Number.MAX_SAFE_INTEGER) {
          return [Number(bigOutput), 9];
        }
      }
      break;
    }
  }
  if (output && output >= 24) {
    return [output, bytes];
  }
  throw new Error("Length not supported or not well formed");
}
var MAJOR_TYPE_UNSIGNED_INTEGER = 0;
var MAJOR_TYPE_NEGATIVE_INTEGER = 1;
var MAJOR_TYPE_BYTE_STRING = 2;
var MAJOR_TYPE_TEXT_STRING = 3;
var MAJOR_TYPE_ARRAY = 4;
var MAJOR_TYPE_MAP = 5;
var MAJOR_TYPE_TAG = 6;
var MAJOR_TYPE_SIMPLE_OR_FLOAT = 7;
function encodeLength(major, argument) {
  const majorEncoded = major << 5;
  if (argument < 0) {
    throw new Error("CBOR Data Item argument must not be negative");
  }
  let bigintArgument;
  if (typeof argument == "number") {
    if (!Number.isInteger(argument)) {
      throw new Error("CBOR Data Item argument must be an integer");
    }
    bigintArgument = BigInt(argument);
  } else {
    bigintArgument = argument;
  }
  if (major == MAJOR_TYPE_NEGATIVE_INTEGER) {
    if (bigintArgument == 0n) {
      throw new Error("CBOR Data Item argument cannot be zero when negative");
    }
    bigintArgument = bigintArgument - 1n;
  }
  if (bigintArgument > 18446744073709551615n) {
    throw new Error("CBOR number out of range");
  }
  const buffer = new Uint8Array(8);
  const view = new DataView(buffer.buffer);
  view.setBigUint64(0, bigintArgument, false);
  if (bigintArgument <= 23) {
    return [majorEncoded | buffer[7]];
  } else if (bigintArgument <= 255) {
    return [majorEncoded | 24, buffer[7]];
  } else if (bigintArgument <= 65535) {
    return [majorEncoded | 25, ...buffer.slice(6)];
  } else if (bigintArgument <= 4294967295) {
    return [
      majorEncoded | 26,
      ...buffer.slice(4)
    ];
  } else {
    return [
      majorEncoded | 27,
      ...buffer
    ];
  }
}

// node_modules/@levischuck/tiny-cbor/esm/cbor/cbor.js
class CBORTag {
  constructor(tag, value) {
    Object.defineProperty(this, "tagId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: undefined
    });
    Object.defineProperty(this, "tagValue", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: undefined
    });
    this.tagId = tag;
    this.tagValue = value;
  }
  get tag() {
    return this.tagId;
  }
  get value() {
    return this.tagValue;
  }
}
function decodeUnsignedInteger(data, argument, index) {
  return decodeLength(data, argument, index);
}
function decodeNegativeInteger(data, argument, index) {
  const [value, length] = decodeUnsignedInteger(data, argument, index);
  return [-value - 1, length];
}
function decodeByteString(data, argument, index) {
  const [lengthValue, lengthConsumed] = decodeLength(data, argument, index);
  const dataStartIndex = index + lengthConsumed;
  return [
    new Uint8Array(data.buffer.slice(dataStartIndex, dataStartIndex + lengthValue)),
    lengthConsumed + lengthValue
  ];
}
var TEXT_DECODER = new TextDecoder;
function decodeString(data, argument, index) {
  const [value, length] = decodeByteString(data, argument, index);
  return [TEXT_DECODER.decode(value), length];
}
function decodeArray(data, argument, index) {
  if (argument === 0) {
    return [[], 1];
  }
  const [length, lengthConsumed] = decodeLength(data, argument, index);
  let consumedLength = lengthConsumed;
  const value = [];
  for (let i = 0;i < length; i++) {
    const remainingDataLength = data.byteLength - index - consumedLength;
    if (remainingDataLength <= 0) {
      throw new Error("array is not supported or well formed");
    }
    const [decodedValue, consumed] = decodeNext(data, index + consumedLength);
    value.push(decodedValue);
    consumedLength += consumed;
  }
  return [value, consumedLength];
}
var MAP_ERROR = "Map is not supported or well formed";
function decodeMap(data, argument, index) {
  if (argument === 0) {
    return [new Map, 1];
  }
  const [length, lengthConsumed] = decodeLength(data, argument, index);
  let consumedLength = lengthConsumed;
  const result = new Map;
  for (let i = 0;i < length; i++) {
    let remainingDataLength = data.byteLength - index - consumedLength;
    if (remainingDataLength <= 0) {
      throw new Error(MAP_ERROR);
    }
    const [key, keyConsumed] = decodeNext(data, index + consumedLength);
    consumedLength += keyConsumed;
    remainingDataLength -= keyConsumed;
    if (remainingDataLength <= 0) {
      throw new Error(MAP_ERROR);
    }
    if (typeof key !== "string" && typeof key !== "number") {
      throw new Error(MAP_ERROR);
    }
    if (result.has(key)) {
      throw new Error(MAP_ERROR);
    }
    const [value, valueConsumed] = decodeNext(data, index + consumedLength);
    consumedLength += valueConsumed;
    result.set(key, value);
  }
  return [result, consumedLength];
}
function decodeFloat16(data, index) {
  if (index + 3 > data.byteLength) {
    throw new Error("CBOR stream ended before end of Float 16");
  }
  const result = data.getUint16(index + 1, false);
  if (result == 31744) {
    return [Infinity, 3];
  } else if (result == 32256) {
    return [NaN, 3];
  } else if (result == 64512) {
    return [-Infinity, 3];
  }
  throw new Error("Float16 data is unsupported");
}
function decodeFloat32(data, index) {
  if (index + 5 > data.byteLength) {
    throw new Error("CBOR stream ended before end of Float 32");
  }
  const result = data.getFloat32(index + 1, false);
  return [result, 5];
}
function decodeFloat64(data, index) {
  if (index + 9 > data.byteLength) {
    throw new Error("CBOR stream ended before end of Float 64");
  }
  const result = data.getFloat64(index + 1, false);
  return [result, 9];
}
function decodeTag(data, argument, index) {
  const [tag, tagBytes] = decodeLength(data, argument, index);
  const [value, valueBytes] = decodeNext(data, index + tagBytes);
  return [new CBORTag(tag, value), tagBytes + valueBytes];
}
function decodeNext(data, index) {
  if (index >= data.byteLength) {
    throw new Error("CBOR stream ended before tag value");
  }
  const byte = data.getUint8(index);
  const majorType = byte >> 5;
  const argument = byte & 31;
  switch (majorType) {
    case MAJOR_TYPE_UNSIGNED_INTEGER: {
      return decodeUnsignedInteger(data, argument, index);
    }
    case MAJOR_TYPE_NEGATIVE_INTEGER: {
      return decodeNegativeInteger(data, argument, index);
    }
    case MAJOR_TYPE_BYTE_STRING: {
      return decodeByteString(data, argument, index);
    }
    case MAJOR_TYPE_TEXT_STRING: {
      return decodeString(data, argument, index);
    }
    case MAJOR_TYPE_ARRAY: {
      return decodeArray(data, argument, index);
    }
    case MAJOR_TYPE_MAP: {
      return decodeMap(data, argument, index);
    }
    case MAJOR_TYPE_TAG: {
      return decodeTag(data, argument, index);
    }
    case MAJOR_TYPE_SIMPLE_OR_FLOAT: {
      switch (argument) {
        case 20:
          return [false, 1];
        case 21:
          return [true, 1];
        case 22:
          return [null, 1];
        case 23:
          return [undefined, 1];
        case 25:
          return decodeFloat16(data, index);
        case 26:
          return decodeFloat32(data, index);
        case 27:
          return decodeFloat64(data, index);
      }
    }
  }
  throw new Error(`Unsupported or not well formed at ${index}`);
}
function encodeSimple(data) {
  if (data === true) {
    return 245;
  } else if (data === false) {
    return 244;
  } else if (data === null) {
    return 246;
  }
  return 247;
}
function encodeFloat(data) {
  if (Math.fround(data) == data || !Number.isFinite(data) || Number.isNaN(data)) {
    const output = new Uint8Array(5);
    output[0] = 250;
    const view = new DataView(output.buffer);
    view.setFloat32(1, data, false);
    return output;
  } else {
    const output = new Uint8Array(9);
    output[0] = 251;
    const view = new DataView(output.buffer);
    view.setFloat64(1, data, false);
    return output;
  }
}
function encodeNumber(data) {
  if (typeof data == "number") {
    if (Number.isSafeInteger(data)) {
      if (data < 0) {
        return encodeLength(MAJOR_TYPE_NEGATIVE_INTEGER, Math.abs(data));
      } else {
        return encodeLength(MAJOR_TYPE_UNSIGNED_INTEGER, data);
      }
    }
    return [encodeFloat(data)];
  } else {
    if (data < 0n) {
      return encodeLength(MAJOR_TYPE_NEGATIVE_INTEGER, data * -1n);
    } else {
      return encodeLength(MAJOR_TYPE_UNSIGNED_INTEGER, data);
    }
  }
}
var ENCODER = new TextEncoder;
function encodeString(data, output) {
  output.push(...encodeLength(MAJOR_TYPE_TEXT_STRING, data.length));
  output.push(ENCODER.encode(data));
}
function encodeBytes(data, output) {
  output.push(...encodeLength(MAJOR_TYPE_BYTE_STRING, data.length));
  output.push(data);
}
function encodeArray(data, output) {
  output.push(...encodeLength(MAJOR_TYPE_ARRAY, data.length));
  for (const element of data) {
    encodePartialCBOR(element, output);
  }
}
function encodeMap(data, output) {
  output.push(new Uint8Array(encodeLength(MAJOR_TYPE_MAP, data.size)));
  for (const [key, value] of data.entries()) {
    encodePartialCBOR(key, output);
    encodePartialCBOR(value, output);
  }
}
function encodeTag(tag, output) {
  output.push(...encodeLength(MAJOR_TYPE_TAG, tag.tag));
  encodePartialCBOR(tag.value, output);
}
function encodePartialCBOR(data, output) {
  if (typeof data == "boolean" || data === null || data == undefined) {
    output.push(encodeSimple(data));
    return;
  }
  if (typeof data == "number" || typeof data == "bigint") {
    output.push(...encodeNumber(data));
    return;
  }
  if (typeof data == "string") {
    encodeString(data, output);
    return;
  }
  if (data instanceof Uint8Array) {
    encodeBytes(data, output);
    return;
  }
  if (Array.isArray(data)) {
    encodeArray(data, output);
    return;
  }
  if (data instanceof Map) {
    encodeMap(data, output);
    return;
  }
  if (data instanceof CBORTag) {
    encodeTag(data, output);
    return;
  }
  throw new Error("Not implemented");
}
function decodePartialCBOR(data, index) {
  if (data.byteLength === 0 || data.byteLength <= index || index < 0) {
    throw new Error("No data");
  }
  if (data instanceof Uint8Array) {
    return decodeNext(new DataView(data.buffer), index);
  } else if (data instanceof ArrayBuffer) {
    return decodeNext(new DataView(data), index);
  }
  return decodeNext(data, index);
}
function encodeCBOR(data) {
  const results = [];
  encodePartialCBOR(data, results);
  let length = 0;
  for (const result of results) {
    if (typeof result == "number") {
      length += 1;
    } else {
      length += result.length;
    }
  }
  const output = new Uint8Array(length);
  let index = 0;
  for (const result of results) {
    if (typeof result == "number") {
      output[index] = result;
      index += 1;
    } else {
      output.set(result, index);
      index += result.length;
    }
  }
  return output;
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCBOR.js
function decodeFirst(input) {
  const _input = new Uint8Array(input);
  const decoded = decodePartialCBOR(_input, 0);
  const [first] = decoded;
  return first;
}
function encode(input) {
  return encodeCBOR(input);
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/index.js
var exports_isoCrypto = {};
__export(exports_isoCrypto, {
  verify: () => verify,
  getRandomValues: () => getRandomValues,
  digest: () => digest
});

// node_modules/@simplewebauthn/server/esm/helpers/cose.js
function isCOSEPublicKeyOKP(cosePublicKey) {
  const kty = cosePublicKey.get(COSEKEYS.kty);
  return isCOSEKty(kty) && kty === COSEKTY.OKP;
}
function isCOSEPublicKeyEC2(cosePublicKey) {
  const kty = cosePublicKey.get(COSEKEYS.kty);
  return isCOSEKty(kty) && kty === COSEKTY.EC2;
}
function isCOSEPublicKeyRSA(cosePublicKey) {
  const kty = cosePublicKey.get(COSEKEYS.kty);
  return isCOSEKty(kty) && kty === COSEKTY.RSA;
}
var COSEKEYS;
(function(COSEKEYS2) {
  COSEKEYS2[COSEKEYS2["kty"] = 1] = "kty";
  COSEKEYS2[COSEKEYS2["alg"] = 3] = "alg";
  COSEKEYS2[COSEKEYS2["crv"] = -1] = "crv";
  COSEKEYS2[COSEKEYS2["x"] = -2] = "x";
  COSEKEYS2[COSEKEYS2["y"] = -3] = "y";
  COSEKEYS2[COSEKEYS2["n"] = -1] = "n";
  COSEKEYS2[COSEKEYS2["e"] = -2] = "e";
})(COSEKEYS || (COSEKEYS = {}));
var COSEKTY;
(function(COSEKTY2) {
  COSEKTY2[COSEKTY2["OKP"] = 1] = "OKP";
  COSEKTY2[COSEKTY2["EC2"] = 2] = "EC2";
  COSEKTY2[COSEKTY2["RSA"] = 3] = "RSA";
})(COSEKTY || (COSEKTY = {}));
function isCOSEKty(kty) {
  return Object.values(COSEKTY).indexOf(kty) >= 0;
}
var COSECRV;
(function(COSECRV2) {
  COSECRV2[COSECRV2["P256"] = 1] = "P256";
  COSECRV2[COSECRV2["P384"] = 2] = "P384";
  COSECRV2[COSECRV2["P521"] = 3] = "P521";
  COSECRV2[COSECRV2["ED25519"] = 6] = "ED25519";
  COSECRV2[COSECRV2["SECP256K1"] = 8] = "SECP256K1";
})(COSECRV || (COSECRV = {}));
function isCOSECrv(crv) {
  return Object.values(COSECRV).indexOf(crv) >= 0;
}
var COSEALG;
(function(COSEALG2) {
  COSEALG2[COSEALG2["ES256"] = -7] = "ES256";
  COSEALG2[COSEALG2["EdDSA"] = -8] = "EdDSA";
  COSEALG2[COSEALG2["ES384"] = -35] = "ES384";
  COSEALG2[COSEALG2["ES512"] = -36] = "ES512";
  COSEALG2[COSEALG2["PS256"] = -37] = "PS256";
  COSEALG2[COSEALG2["PS384"] = -38] = "PS384";
  COSEALG2[COSEALG2["PS512"] = -39] = "PS512";
  COSEALG2[COSEALG2["ES256K"] = -47] = "ES256K";
  COSEALG2[COSEALG2["RS256"] = -257] = "RS256";
  COSEALG2[COSEALG2["RS384"] = -258] = "RS384";
  COSEALG2[COSEALG2["RS512"] = -259] = "RS512";
  COSEALG2[COSEALG2["RS1"] = -65535] = "RS1";
})(COSEALG || (COSEALG = {}));
function isCOSEAlg(alg) {
  return Object.values(COSEALG).indexOf(alg) >= 0;
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/mapCoseAlgToWebCryptoAlg.js
function mapCoseAlgToWebCryptoAlg(alg) {
  if ([COSEALG.RS1].indexOf(alg) >= 0) {
    return "SHA-1";
  } else if ([COSEALG.ES256, COSEALG.PS256, COSEALG.RS256].indexOf(alg) >= 0) {
    return "SHA-256";
  } else if ([COSEALG.ES384, COSEALG.PS384, COSEALG.RS384].indexOf(alg) >= 0) {
    return "SHA-384";
  } else if ([COSEALG.ES512, COSEALG.PS512, COSEALG.RS512, COSEALG.EdDSA].indexOf(alg) >= 0) {
    return "SHA-512";
  }
  throw new Error(`Could not map COSE alg value of ${alg} to a WebCrypto alg`);
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getWebCrypto.js
var webCrypto = undefined;
function getWebCrypto() {
  const toResolve = new Promise((resolve, reject) => {
    if (webCrypto) {
      return resolve(webCrypto);
    }
    const _globalThisCrypto = _getWebCryptoInternals.stubThisGlobalThisCrypto();
    if (_globalThisCrypto) {
      webCrypto = _globalThisCrypto;
      return resolve(webCrypto);
    }
    return reject(new MissingWebCrypto);
  });
  return toResolve;
}

class MissingWebCrypto extends Error {
  constructor() {
    const message = "An instance of the Crypto API could not be located";
    super(message);
    this.name = "MissingWebCrypto";
  }
}
var _getWebCryptoInternals = {
  stubThisGlobalThisCrypto: () => globalThis.crypto,
  setCachedCrypto: (newCrypto) => {
    webCrypto = newCrypto;
  }
};

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/digest.js
async function digest(data, algorithm2) {
  const WebCrypto = await getWebCrypto();
  const subtleAlgorithm = mapCoseAlgToWebCryptoAlg(algorithm2);
  const hashed = await WebCrypto.subtle.digest(subtleAlgorithm, data);
  return new Uint8Array(hashed);
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/getRandomValues.js
async function getRandomValues(array) {
  const WebCrypto = await getWebCrypto();
  WebCrypto.getRandomValues(array);
  return array;
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/importKey.js
async function importKey(opts) {
  const WebCrypto = await getWebCrypto();
  const { keyData, algorithm: algorithm2 } = opts;
  return WebCrypto.subtle.importKey("jwk", keyData, algorithm2, false, [
    "verify"
  ]);
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyEC2.js
async function verifyEC2(opts) {
  const { cosePublicKey, signature, data, shaHashOverride } = opts;
  const WebCrypto = await getWebCrypto();
  const alg = cosePublicKey.get(COSEKEYS.alg);
  const crv = cosePublicKey.get(COSEKEYS.crv);
  const x = cosePublicKey.get(COSEKEYS.x);
  const y = cosePublicKey.get(COSEKEYS.y);
  if (!alg) {
    throw new Error("Public key was missing alg (EC2)");
  }
  if (!crv) {
    throw new Error("Public key was missing crv (EC2)");
  }
  if (!x) {
    throw new Error("Public key was missing x (EC2)");
  }
  if (!y) {
    throw new Error("Public key was missing y (EC2)");
  }
  let _crv;
  if (crv === COSECRV.P256) {
    _crv = "P-256";
  } else if (crv === COSECRV.P384) {
    _crv = "P-384";
  } else if (crv === COSECRV.P521) {
    _crv = "P-521";
  } else {
    throw new Error(`Unexpected COSE crv value of ${crv} (EC2)`);
  }
  const keyData = {
    kty: "EC",
    crv: _crv,
    x: exports_isoBase64URL.fromBuffer(x),
    y: exports_isoBase64URL.fromBuffer(y),
    ext: false
  };
  const keyAlgorithm = {
    name: "ECDSA",
    namedCurve: _crv
  };
  const key = await importKey({
    keyData,
    algorithm: keyAlgorithm
  });
  let subtleAlg = mapCoseAlgToWebCryptoAlg(alg);
  if (shaHashOverride) {
    subtleAlg = mapCoseAlgToWebCryptoAlg(shaHashOverride);
  }
  const verifyAlgorithm = {
    name: "ECDSA",
    hash: { name: subtleAlg }
  };
  return WebCrypto.subtle.verify(verifyAlgorithm, key, signature, data);
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/mapCoseAlgToWebCryptoKeyAlgName.js
function mapCoseAlgToWebCryptoKeyAlgName(alg) {
  if ([COSEALG.EdDSA].indexOf(alg) >= 0) {
    return "Ed25519";
  } else if ([COSEALG.ES256, COSEALG.ES384, COSEALG.ES512, COSEALG.ES256K].indexOf(alg) >= 0) {
    return "ECDSA";
  } else if ([COSEALG.RS256, COSEALG.RS384, COSEALG.RS512, COSEALG.RS1].indexOf(alg) >= 0) {
    return "RSASSA-PKCS1-v1_5";
  } else if ([COSEALG.PS256, COSEALG.PS384, COSEALG.PS512].indexOf(alg) >= 0) {
    return "RSA-PSS";
  }
  throw new Error(`Could not map COSE alg value of ${alg} to a WebCrypto key alg name`);
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyRSA.js
async function verifyRSA(opts) {
  const { cosePublicKey, signature, data, shaHashOverride } = opts;
  const WebCrypto = await getWebCrypto();
  const alg = cosePublicKey.get(COSEKEYS.alg);
  const n = cosePublicKey.get(COSEKEYS.n);
  const e = cosePublicKey.get(COSEKEYS.e);
  if (!alg) {
    throw new Error("Public key was missing alg (RSA)");
  }
  if (!isCOSEAlg(alg)) {
    throw new Error(`Public key had invalid alg ${alg} (RSA)`);
  }
  if (!n) {
    throw new Error("Public key was missing n (RSA)");
  }
  if (!e) {
    throw new Error("Public key was missing e (RSA)");
  }
  const keyData = {
    kty: "RSA",
    alg: "",
    n: exports_isoBase64URL.fromBuffer(n),
    e: exports_isoBase64URL.fromBuffer(e),
    ext: false
  };
  const keyAlgorithm = {
    name: mapCoseAlgToWebCryptoKeyAlgName(alg),
    hash: { name: mapCoseAlgToWebCryptoAlg(alg) }
  };
  const verifyAlgorithm = {
    name: mapCoseAlgToWebCryptoKeyAlgName(alg)
  };
  if (shaHashOverride) {
    keyAlgorithm.hash.name = mapCoseAlgToWebCryptoAlg(shaHashOverride);
  }
  if (keyAlgorithm.name === "RSASSA-PKCS1-v1_5") {
    if (keyAlgorithm.hash.name === "SHA-256") {
      keyData.alg = "RS256";
    } else if (keyAlgorithm.hash.name === "SHA-384") {
      keyData.alg = "RS384";
    } else if (keyAlgorithm.hash.name === "SHA-512") {
      keyData.alg = "RS512";
    } else if (keyAlgorithm.hash.name === "SHA-1") {
      keyData.alg = "RS1";
    }
  } else if (keyAlgorithm.name === "RSA-PSS") {
    let saltLength = 0;
    if (keyAlgorithm.hash.name === "SHA-256") {
      keyData.alg = "PS256";
      saltLength = 32;
    } else if (keyAlgorithm.hash.name === "SHA-384") {
      keyData.alg = "PS384";
      saltLength = 48;
    } else if (keyAlgorithm.hash.name === "SHA-512") {
      keyData.alg = "PS512";
      saltLength = 64;
    }
    verifyAlgorithm.saltLength = saltLength;
  } else {
    throw new Error(`Unexpected RSA key algorithm ${alg} (${keyAlgorithm.name})`);
  }
  const key = await importKey({
    keyData,
    algorithm: keyAlgorithm
  });
  return WebCrypto.subtle.verify(verifyAlgorithm, key, signature, data);
}

// node_modules/@simplewebauthn/server/esm/helpers/convertAAGUIDToString.js
function convertAAGUIDToString(aaguid) {
  const hex = exports_isoUint8Array.toHex(aaguid);
  const segments = [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20, 32)
  ];
  return segments.join("-");
}
// node_modules/@simplewebauthn/server/esm/helpers/convertCertBufferToPEM.js
function convertCertBufferToPEM(certBuffer) {
  let b64cert;
  if (typeof certBuffer === "string") {
    if (exports_isoBase64URL.isBase64URL(certBuffer)) {
      b64cert = exports_isoBase64URL.toBase64(certBuffer);
    } else if (exports_isoBase64URL.isBase64(certBuffer)) {
      b64cert = certBuffer;
    } else {
      throw new Error("Certificate is not a valid base64 or base64url string");
    }
  } else {
    b64cert = exports_isoBase64URL.fromBuffer(certBuffer, "base64");
  }
  let PEMKey = "";
  for (let i = 0;i < Math.ceil(b64cert.length / 64); i += 1) {
    const start = 64 * i;
    PEMKey += `${b64cert.substr(start, 64)}
`;
  }
  PEMKey = `-----BEGIN CERTIFICATE-----
${PEMKey}-----END CERTIFICATE-----
`;
  return PEMKey;
}
// node_modules/@simplewebauthn/server/esm/helpers/convertCOSEtoPKCS.js
function convertCOSEtoPKCS(cosePublicKey) {
  const struct = exports_isoCBOR.decodeFirst(cosePublicKey);
  const tag = Uint8Array.from([4]);
  const x = struct.get(COSEKEYS.x);
  const y = struct.get(COSEKEYS.y);
  if (!x) {
    throw new Error("COSE public key was missing x");
  }
  if (y) {
    return exports_isoUint8Array.concat([tag, x, y]);
  }
  return exports_isoUint8Array.concat([tag, x]);
}
// node_modules/@simplewebauthn/server/esm/helpers/decodeAttestationObject.js
function decodeAttestationObject(attestationObject) {
  return _decodeAttestationObjectInternals.stubThis(exports_isoCBOR.decodeFirst(attestationObject));
}
var _decodeAttestationObjectInternals = {
  stubThis: (value) => value
};
// node_modules/@simplewebauthn/server/esm/helpers/decodeClientDataJSON.js
function decodeClientDataJSON(data) {
  const toString = exports_isoBase64URL.toUTF8String(data);
  const clientData = JSON.parse(toString);
  return _decodeClientDataJSONInternals.stubThis(clientData);
}
var _decodeClientDataJSONInternals = {
  stubThis: (value) => value
};
// node_modules/@simplewebauthn/server/esm/helpers/decodeCredentialPublicKey.js
function decodeCredentialPublicKey(publicKey) {
  return _decodeCredentialPublicKeyInternals.stubThis(exports_isoCBOR.decodeFirst(publicKey));
}
var _decodeCredentialPublicKeyInternals = {
  stubThis: (value) => value
};
// node_modules/@simplewebauthn/server/esm/helpers/generateUserID.js
async function generateUserID() {
  const newUserID = new Uint8Array(32);
  await exports_isoCrypto.getRandomValues(newUserID);
  return _generateUserIDInternals.stubThis(newUserID);
}
var _generateUserIDInternals = {
  stubThis: (value) => value
};
// node_modules/asn1js/build/index.es.js
var exports_index_es = {};
__export(exports_index_es, {
  verifySchema: () => verifySchema,
  fromBER: () => fromBER,
  compareSchema: () => compareSchema,
  VisibleString: () => VisibleString,
  ViewWriter: () => ViewWriter,
  VideotexString: () => VideotexString,
  ValueBlock: () => ValueBlock,
  Utf8String: () => Utf8String,
  UniversalString: () => UniversalString,
  UTCTime: () => UTCTime,
  TimeOfDay: () => TimeOfDay,
  TeletexString: () => TeletexString,
  TIME: () => TIME,
  Set: () => Set2,
  Sequence: () => Sequence,
  Repeated: () => Repeated,
  RelativeObjectIdentifier: () => RelativeObjectIdentifier,
  RawData: () => RawData,
  PrintableString: () => PrintableString,
  Primitive: () => Primitive,
  OctetString: () => OctetString,
  ObjectIdentifier: () => ObjectIdentifier,
  NumericString: () => NumericString,
  Null: () => Null,
  Integer: () => Integer,
  IA5String: () => IA5String,
  HexBlock: () => HexBlock,
  GraphicString: () => GraphicString,
  GeneralizedTime: () => GeneralizedTime,
  GeneralString: () => GeneralString,
  Enumerated: () => Enumerated,
  EndOfContent: () => EndOfContent,
  Duration: () => Duration,
  DateTime: () => DateTime,
  DATE: () => DATE,
  Constructed: () => Constructed,
  Choice: () => Choice,
  CharacterString: () => CharacterString,
  Boolean: () => Boolean2,
  BmpString: () => BmpString,
  BitString: () => BitString,
  BaseStringBlock: () => BaseStringBlock,
  BaseBlock: () => BaseBlock,
  Any: () => Any
});

// node_modules/pvtsutils/build/index.es.js
/*!
 * MIT License
 * 
 * Copyright (c) 2017-2024 Peculiar Ventures, LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
var ARRAY_BUFFER_NAME = "[object ArrayBuffer]";

class BufferSourceConverter {
  static isArrayBuffer(data) {
    return Object.prototype.toString.call(data) === ARRAY_BUFFER_NAME;
  }
  static toArrayBuffer(data) {
    if (this.isArrayBuffer(data)) {
      return data;
    }
    if (data.byteLength === data.buffer.byteLength) {
      return data.buffer;
    }
    if (data.byteOffset === 0 && data.byteLength === data.buffer.byteLength) {
      return data.buffer;
    }
    return this.toUint8Array(data.buffer).slice(data.byteOffset, data.byteOffset + data.byteLength).buffer;
  }
  static toUint8Array(data) {
    return this.toView(data, Uint8Array);
  }
  static toView(data, type) {
    if (data.constructor === type) {
      return data;
    }
    if (this.isArrayBuffer(data)) {
      return new type(data);
    }
    if (this.isArrayBufferView(data)) {
      return new type(data.buffer, data.byteOffset, data.byteLength);
    }
    throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
  }
  static isBufferSource(data) {
    return this.isArrayBufferView(data) || this.isArrayBuffer(data);
  }
  static isArrayBufferView(data) {
    return ArrayBuffer.isView(data) || data && this.isArrayBuffer(data.buffer);
  }
  static isEqual(a, b) {
    const aView = BufferSourceConverter.toUint8Array(a);
    const bView = BufferSourceConverter.toUint8Array(b);
    if (aView.length !== bView.byteLength) {
      return false;
    }
    for (let i = 0;i < aView.length; i++) {
      if (aView[i] !== bView[i]) {
        return false;
      }
    }
    return true;
  }
  static concat(...args) {
    let buffers;
    if (Array.isArray(args[0]) && !(args[1] instanceof Function)) {
      buffers = args[0];
    } else if (Array.isArray(args[0]) && args[1] instanceof Function) {
      buffers = args[0];
    } else {
      if (args[args.length - 1] instanceof Function) {
        buffers = args.slice(0, args.length - 1);
      } else {
        buffers = args;
      }
    }
    let size = 0;
    for (const buffer of buffers) {
      size += buffer.byteLength;
    }
    const res = new Uint8Array(size);
    let offset = 0;
    for (const buffer of buffers) {
      const view = this.toUint8Array(buffer);
      res.set(view, offset);
      offset += view.length;
    }
    if (args[args.length - 1] instanceof Function) {
      return this.toView(res, args[args.length - 1]);
    }
    return res.buffer;
  }
}
var STRING_TYPE = "string";
var HEX_REGEX = /^[0-9a-f\s]+$/i;
var BASE64_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
var BASE64URL_REGEX = /^[a-zA-Z0-9-_]+$/;

class Utf8Converter {
  static fromString(text) {
    const s = unescape(encodeURIComponent(text));
    const uintArray = new Uint8Array(s.length);
    for (let i = 0;i < s.length; i++) {
      uintArray[i] = s.charCodeAt(i);
    }
    return uintArray.buffer;
  }
  static toString(buffer) {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    let encodedString = "";
    for (let i = 0;i < buf.length; i++) {
      encodedString += String.fromCharCode(buf[i]);
    }
    const decodedString = decodeURIComponent(escape(encodedString));
    return decodedString;
  }
}

class Utf16Converter {
  static toString(buffer, littleEndian = false) {
    const arrayBuffer = BufferSourceConverter.toArrayBuffer(buffer);
    const dataView = new DataView(arrayBuffer);
    let res = "";
    for (let i = 0;i < arrayBuffer.byteLength; i += 2) {
      const code = dataView.getUint16(i, littleEndian);
      res += String.fromCharCode(code);
    }
    return res;
  }
  static fromString(text, littleEndian = false) {
    const res = new ArrayBuffer(text.length * 2);
    const dataView = new DataView(res);
    for (let i = 0;i < text.length; i++) {
      dataView.setUint16(i * 2, text.charCodeAt(i), littleEndian);
    }
    return res;
  }
}

class Convert {
  static isHex(data) {
    return typeof data === STRING_TYPE && HEX_REGEX.test(data);
  }
  static isBase64(data) {
    return typeof data === STRING_TYPE && BASE64_REGEX.test(data);
  }
  static isBase64Url(data) {
    return typeof data === STRING_TYPE && BASE64URL_REGEX.test(data);
  }
  static ToString(buffer, enc = "utf8") {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    switch (enc.toLowerCase()) {
      case "utf8":
        return this.ToUtf8String(buf);
      case "binary":
        return this.ToBinary(buf);
      case "hex":
        return this.ToHex(buf);
      case "base64":
        return this.ToBase64(buf);
      case "base64url":
        return this.ToBase64Url(buf);
      case "utf16le":
        return Utf16Converter.toString(buf, true);
      case "utf16":
      case "utf16be":
        return Utf16Converter.toString(buf);
      default:
        throw new Error(`Unknown type of encoding '${enc}'`);
    }
  }
  static FromString(str, enc = "utf8") {
    if (!str) {
      return new ArrayBuffer(0);
    }
    switch (enc.toLowerCase()) {
      case "utf8":
        return this.FromUtf8String(str);
      case "binary":
        return this.FromBinary(str);
      case "hex":
        return this.FromHex(str);
      case "base64":
        return this.FromBase64(str);
      case "base64url":
        return this.FromBase64Url(str);
      case "utf16le":
        return Utf16Converter.fromString(str, true);
      case "utf16":
      case "utf16be":
        return Utf16Converter.fromString(str);
      default:
        throw new Error(`Unknown type of encoding '${enc}'`);
    }
  }
  static ToBase64(buffer) {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    if (typeof btoa !== "undefined") {
      const binary = this.ToString(buf, "binary");
      return btoa(binary);
    } else {
      return Buffer.from(buf).toString("base64");
    }
  }
  static FromBase64(base642) {
    const formatted = this.formatString(base642);
    if (!formatted) {
      return new ArrayBuffer(0);
    }
    if (!Convert.isBase64(formatted)) {
      throw new TypeError("Argument 'base64Text' is not Base64 encoded");
    }
    if (typeof atob !== "undefined") {
      return this.FromBinary(atob(formatted));
    } else {
      return new Uint8Array(Buffer.from(formatted, "base64")).buffer;
    }
  }
  static FromBase64Url(base64url) {
    const formatted = this.formatString(base64url);
    if (!formatted) {
      return new ArrayBuffer(0);
    }
    if (!Convert.isBase64Url(formatted)) {
      throw new TypeError("Argument 'base64url' is not Base64Url encoded");
    }
    return this.FromBase64(this.Base64Padding(formatted.replace(/\-/g, "+").replace(/\_/g, "/")));
  }
  static ToBase64Url(data) {
    return this.ToBase64(data).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
  }
  static FromUtf8String(text, encoding = Convert.DEFAULT_UTF8_ENCODING) {
    switch (encoding) {
      case "ascii":
        return this.FromBinary(text);
      case "utf8":
        return Utf8Converter.fromString(text);
      case "utf16":
      case "utf16be":
        return Utf16Converter.fromString(text);
      case "utf16le":
      case "usc2":
        return Utf16Converter.fromString(text, true);
      default:
        throw new Error(`Unknown type of encoding '${encoding}'`);
    }
  }
  static ToUtf8String(buffer, encoding = Convert.DEFAULT_UTF8_ENCODING) {
    switch (encoding) {
      case "ascii":
        return this.ToBinary(buffer);
      case "utf8":
        return Utf8Converter.toString(buffer);
      case "utf16":
      case "utf16be":
        return Utf16Converter.toString(buffer);
      case "utf16le":
      case "usc2":
        return Utf16Converter.toString(buffer, true);
      default:
        throw new Error(`Unknown type of encoding '${encoding}'`);
    }
  }
  static FromBinary(text) {
    const stringLength = text.length;
    const resultView = new Uint8Array(stringLength);
    for (let i = 0;i < stringLength; i++) {
      resultView[i] = text.charCodeAt(i);
    }
    return resultView.buffer;
  }
  static ToBinary(buffer) {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    let res = "";
    for (let i = 0;i < buf.length; i++) {
      res += String.fromCharCode(buf[i]);
    }
    return res;
  }
  static ToHex(buffer) {
    const buf = BufferSourceConverter.toUint8Array(buffer);
    let result = "";
    const len = buf.length;
    for (let i = 0;i < len; i++) {
      const byte = buf[i];
      if (byte < 16) {
        result += "0";
      }
      result += byte.toString(16);
    }
    return result;
  }
  static FromHex(hexString) {
    let formatted = this.formatString(hexString);
    if (!formatted) {
      return new ArrayBuffer(0);
    }
    if (!Convert.isHex(formatted)) {
      throw new TypeError("Argument 'hexString' is not HEX encoded");
    }
    if (formatted.length % 2) {
      formatted = `0${formatted}`;
    }
    const res = new Uint8Array(formatted.length / 2);
    for (let i = 0;i < formatted.length; i = i + 2) {
      const c = formatted.slice(i, i + 2);
      res[i / 2] = parseInt(c, 16);
    }
    return res.buffer;
  }
  static ToUtf16String(buffer, littleEndian = false) {
    return Utf16Converter.toString(buffer, littleEndian);
  }
  static FromUtf16String(text, littleEndian = false) {
    return Utf16Converter.fromString(text, littleEndian);
  }
  static Base64Padding(base642) {
    const padCount = 4 - base642.length % 4;
    if (padCount < 4) {
      for (let i = 0;i < padCount; i++) {
        base642 += "=";
      }
    }
    return base642;
  }
  static formatString(data) {
    return (data === null || data === undefined ? undefined : data.replace(/[\n\r\t ]/g, "")) || "";
  }
}
Convert.DEFAULT_UTF8_ENCODING = "utf8";
function isEqual(bytes1, bytes2) {
  if (!(bytes1 && bytes2)) {
    return false;
  }
  if (bytes1.byteLength !== bytes2.byteLength) {
    return false;
  }
  const b1 = new Uint8Array(bytes1);
  const b2 = new Uint8Array(bytes2);
  for (let i = 0;i < bytes1.byteLength; i++) {
    if (b1[i] !== b2[i]) {
      return false;
    }
  }
  return true;
}

// node_modules/pvutils/build/utils.es.js
/*!
 Copyright (c) Peculiar Ventures, LLC
*/
function utilFromBase(inputBuffer, inputBase) {
  let result = 0;
  if (inputBuffer.length === 1) {
    return inputBuffer[0];
  }
  for (let i = inputBuffer.length - 1;i >= 0; i--) {
    result += inputBuffer[inputBuffer.length - 1 - i] * Math.pow(2, inputBase * i);
  }
  return result;
}
function utilToBase(value, base, reserved = -1) {
  const internalReserved = reserved;
  let internalValue = value;
  let result = 0;
  let biggest = Math.pow(2, base);
  for (let i = 1;i < 8; i++) {
    if (value < biggest) {
      let retBuf;
      if (internalReserved < 0) {
        retBuf = new ArrayBuffer(i);
        result = i;
      } else {
        if (internalReserved < i) {
          return new ArrayBuffer(0);
        }
        retBuf = new ArrayBuffer(internalReserved);
        result = internalReserved;
      }
      const retView = new Uint8Array(retBuf);
      for (let j = i - 1;j >= 0; j--) {
        const basis = Math.pow(2, j * base);
        retView[result - j - 1] = Math.floor(internalValue / basis);
        internalValue -= retView[result - j - 1] * basis;
      }
      return retBuf;
    }
    biggest *= Math.pow(2, base);
  }
  return new ArrayBuffer(0);
}
function utilConcatView(...views) {
  let outputLength = 0;
  let prevLength = 0;
  for (const view of views) {
    outputLength += view.length;
  }
  const retBuf = new ArrayBuffer(outputLength);
  const retView = new Uint8Array(retBuf);
  for (const view of views) {
    retView.set(view, prevLength);
    prevLength += view.length;
  }
  return retView;
}
function utilDecodeTC() {
  const buf = new Uint8Array(this.valueHex);
  if (this.valueHex.byteLength >= 2) {
    const condition1 = buf[0] === 255 && buf[1] & 128;
    const condition2 = buf[0] === 0 && (buf[1] & 128) === 0;
    if (condition1 || condition2) {
      this.warnings.push("Needlessly long format");
    }
  }
  const bigIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
  const bigIntView = new Uint8Array(bigIntBuffer);
  for (let i = 0;i < this.valueHex.byteLength; i++) {
    bigIntView[i] = 0;
  }
  bigIntView[0] = buf[0] & 128;
  const bigInt = utilFromBase(bigIntView, 8);
  const smallIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
  const smallIntView = new Uint8Array(smallIntBuffer);
  for (let j = 0;j < this.valueHex.byteLength; j++) {
    smallIntView[j] = buf[j];
  }
  smallIntView[0] &= 127;
  const smallInt = utilFromBase(smallIntView, 8);
  return smallInt - bigInt;
}
function utilEncodeTC(value) {
  const modValue = value < 0 ? value * -1 : value;
  let bigInt = 128;
  for (let i = 1;i < 8; i++) {
    if (modValue <= bigInt) {
      if (value < 0) {
        const smallInt = bigInt - modValue;
        const retBuf2 = utilToBase(smallInt, 8, i);
        const retView2 = new Uint8Array(retBuf2);
        retView2[0] |= 128;
        return retBuf2;
      }
      let retBuf = utilToBase(modValue, 8, i);
      let retView = new Uint8Array(retBuf);
      if (retView[0] & 128) {
        const tempBuf = retBuf.slice(0);
        const tempView = new Uint8Array(tempBuf);
        retBuf = new ArrayBuffer(retBuf.byteLength + 1);
        retView = new Uint8Array(retBuf);
        for (let k = 0;k < tempBuf.byteLength; k++) {
          retView[k + 1] = tempView[k];
        }
        retView[0] = 0;
      }
      return retBuf;
    }
    bigInt *= Math.pow(2, 8);
  }
  return new ArrayBuffer(0);
}
function isEqualBuffer(inputBuffer1, inputBuffer2) {
  if (inputBuffer1.byteLength !== inputBuffer2.byteLength) {
    return false;
  }
  const view1 = new Uint8Array(inputBuffer1);
  const view2 = new Uint8Array(inputBuffer2);
  for (let i = 0;i < view1.length; i++) {
    if (view1[i] !== view2[i]) {
      return false;
    }
  }
  return true;
}
function padNumber(inputNumber, fullLength) {
  const str = inputNumber.toString(10);
  if (fullLength < str.length) {
    return "";
  }
  const dif = fullLength - str.length;
  const padding = new Array(dif);
  for (let i = 0;i < dif; i++) {
    padding[i] = "0";
  }
  const paddingString = padding.join("");
  return paddingString.concat(str);
}
var log2 = Math.log(2);

// node_modules/asn1js/build/index.es.js
/*!
 * Copyright (c) 2014, GMO GlobalSign
 * Copyright (c) 2015-2022, Peculiar Ventures
 * All rights reserved.
 * 
 * Author 2014-2019, Yury Strozhevsky
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * 
 * * Redistributions in binary form must reproduce the above copyright notice, this
 *   list of conditions and the following disclaimer in the documentation and/or
 *   other materials provided with the distribution.
 * 
 * * Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */
function assertBigInt() {
  if (typeof BigInt === "undefined") {
    throw new Error("BigInt is not defined. Your environment doesn't implement BigInt.");
  }
}
function concat(buffers) {
  let outputLength = 0;
  let prevLength = 0;
  for (let i = 0;i < buffers.length; i++) {
    const buffer = buffers[i];
    outputLength += buffer.byteLength;
  }
  const retView = new Uint8Array(outputLength);
  for (let i = 0;i < buffers.length; i++) {
    const buffer = buffers[i];
    retView.set(new Uint8Array(buffer), prevLength);
    prevLength += buffer.byteLength;
  }
  return retView.buffer;
}
function checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength) {
  if (!(inputBuffer instanceof Uint8Array)) {
    baseBlock.error = "Wrong parameter: inputBuffer must be 'Uint8Array'";
    return false;
  }
  if (!inputBuffer.byteLength) {
    baseBlock.error = "Wrong parameter: inputBuffer has zero length";
    return false;
  }
  if (inputOffset < 0) {
    baseBlock.error = "Wrong parameter: inputOffset less than zero";
    return false;
  }
  if (inputLength < 0) {
    baseBlock.error = "Wrong parameter: inputLength less than zero";
    return false;
  }
  if (inputBuffer.byteLength - inputOffset - inputLength < 0) {
    baseBlock.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
    return false;
  }
  return true;
}

class ViewWriter {
  constructor() {
    this.items = [];
  }
  write(buf) {
    this.items.push(buf);
  }
  final() {
    return concat(this.items);
  }
}
var powers2 = [new Uint8Array([1])];
var digitsString = "0123456789";
var NAME = "name";
var VALUE_HEX_VIEW = "valueHexView";
var IS_HEX_ONLY = "isHexOnly";
var ID_BLOCK = "idBlock";
var TAG_CLASS = "tagClass";
var TAG_NUMBER = "tagNumber";
var IS_CONSTRUCTED = "isConstructed";
var FROM_BER = "fromBER";
var TO_BER = "toBER";
var LOCAL = "local";
var EMPTY_STRING = "";
var EMPTY_BUFFER = new ArrayBuffer(0);
var EMPTY_VIEW = new Uint8Array(0);
var END_OF_CONTENT_NAME = "EndOfContent";
var OCTET_STRING_NAME = "OCTET STRING";
var BIT_STRING_NAME = "BIT STRING";
function HexBlock(BaseClass) {
  var _a;
  return _a = class Some extends BaseClass {
    constructor(...args) {
      var _a2;
      super(...args);
      const params = args[0] || {};
      this.isHexOnly = (_a2 = params.isHexOnly) !== null && _a2 !== undefined ? _a2 : false;
      this.valueHexView = params.valueHex ? BufferSourceConverter.toUint8Array(params.valueHex) : EMPTY_VIEW;
    }
    get valueHex() {
      return this.valueHexView.slice().buffer;
    }
    set valueHex(value) {
      this.valueHexView = new Uint8Array(value);
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
      const view = inputBuffer instanceof ArrayBuffer ? new Uint8Array(inputBuffer) : inputBuffer;
      if (!checkBufferParams(this, view, inputOffset, inputLength)) {
        return -1;
      }
      const endLength = inputOffset + inputLength;
      this.valueHexView = view.subarray(inputOffset, endLength);
      if (!this.valueHexView.length) {
        this.warnings.push("Zero buffer length");
        return inputOffset;
      }
      this.blockLength = inputLength;
      return endLength;
    }
    toBER(sizeOnly = false) {
      if (!this.isHexOnly) {
        this.error = "Flag 'isHexOnly' is not set, abort";
        return EMPTY_BUFFER;
      }
      if (sizeOnly) {
        return new ArrayBuffer(this.valueHexView.byteLength);
      }
      return this.valueHexView.byteLength === this.valueHexView.buffer.byteLength ? this.valueHexView.buffer : this.valueHexView.slice().buffer;
    }
    toJSON() {
      return {
        ...super.toJSON(),
        isHexOnly: this.isHexOnly,
        valueHex: Convert.ToHex(this.valueHexView)
      };
    }
  }, _a.NAME = "hexBlock", _a;
}

class LocalBaseBlock {
  constructor({ blockLength = 0, error = EMPTY_STRING, warnings = [], valueBeforeDecode = EMPTY_VIEW } = {}) {
    this.blockLength = blockLength;
    this.error = error;
    this.warnings = warnings;
    this.valueBeforeDecodeView = BufferSourceConverter.toUint8Array(valueBeforeDecode);
  }
  static blockName() {
    return this.NAME;
  }
  get valueBeforeDecode() {
    return this.valueBeforeDecodeView.slice().buffer;
  }
  set valueBeforeDecode(value) {
    this.valueBeforeDecodeView = new Uint8Array(value);
  }
  toJSON() {
    return {
      blockName: this.constructor.NAME,
      blockLength: this.blockLength,
      error: this.error,
      warnings: this.warnings,
      valueBeforeDecode: Convert.ToHex(this.valueBeforeDecodeView)
    };
  }
}
LocalBaseBlock.NAME = "baseBlock";

class ValueBlock extends LocalBaseBlock {
  fromBER(inputBuffer, inputOffset, inputLength) {
    throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'");
  }
  toBER(sizeOnly, writer) {
    throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'");
  }
}
ValueBlock.NAME = "valueBlock";

class LocalIdentificationBlock extends HexBlock(LocalBaseBlock) {
  constructor({ idBlock = {} } = {}) {
    var _a, _b, _c, _d;
    super();
    if (idBlock) {
      this.isHexOnly = (_a = idBlock.isHexOnly) !== null && _a !== undefined ? _a : false;
      this.valueHexView = idBlock.valueHex ? BufferSourceConverter.toUint8Array(idBlock.valueHex) : EMPTY_VIEW;
      this.tagClass = (_b = idBlock.tagClass) !== null && _b !== undefined ? _b : -1;
      this.tagNumber = (_c = idBlock.tagNumber) !== null && _c !== undefined ? _c : -1;
      this.isConstructed = (_d = idBlock.isConstructed) !== null && _d !== undefined ? _d : false;
    } else {
      this.tagClass = -1;
      this.tagNumber = -1;
      this.isConstructed = false;
    }
  }
  toBER(sizeOnly = false) {
    let firstOctet = 0;
    switch (this.tagClass) {
      case 1:
        firstOctet |= 0;
        break;
      case 2:
        firstOctet |= 64;
        break;
      case 3:
        firstOctet |= 128;
        break;
      case 4:
        firstOctet |= 192;
        break;
      default:
        this.error = "Unknown tag class";
        return EMPTY_BUFFER;
    }
    if (this.isConstructed)
      firstOctet |= 32;
    if (this.tagNumber < 31 && !this.isHexOnly) {
      const retView2 = new Uint8Array(1);
      if (!sizeOnly) {
        let number = this.tagNumber;
        number &= 31;
        firstOctet |= number;
        retView2[0] = firstOctet;
      }
      return retView2.buffer;
    }
    if (!this.isHexOnly) {
      const encodedBuf = utilToBase(this.tagNumber, 7);
      const encodedView = new Uint8Array(encodedBuf);
      const size = encodedBuf.byteLength;
      const retView2 = new Uint8Array(size + 1);
      retView2[0] = firstOctet | 31;
      if (!sizeOnly) {
        for (let i = 0;i < size - 1; i++)
          retView2[i + 1] = encodedView[i] | 128;
        retView2[size] = encodedView[size - 1];
      }
      return retView2.buffer;
    }
    const retView = new Uint8Array(this.valueHexView.byteLength + 1);
    retView[0] = firstOctet | 31;
    if (!sizeOnly) {
      const curView = this.valueHexView;
      for (let i = 0;i < curView.length - 1; i++)
        retView[i + 1] = curView[i] | 128;
      retView[this.valueHexView.byteLength] = curView[curView.length - 1];
    }
    return retView.buffer;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
      return -1;
    }
    const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
    if (intBuffer.length === 0) {
      this.error = "Zero buffer length";
      return -1;
    }
    const tagClassMask = intBuffer[0] & 192;
    switch (tagClassMask) {
      case 0:
        this.tagClass = 1;
        break;
      case 64:
        this.tagClass = 2;
        break;
      case 128:
        this.tagClass = 3;
        break;
      case 192:
        this.tagClass = 4;
        break;
      default:
        this.error = "Unknown tag class";
        return -1;
    }
    this.isConstructed = (intBuffer[0] & 32) === 32;
    this.isHexOnly = false;
    const tagNumberMask = intBuffer[0] & 31;
    if (tagNumberMask !== 31) {
      this.tagNumber = tagNumberMask;
      this.blockLength = 1;
    } else {
      let count = 1;
      let intTagNumberBuffer = this.valueHexView = new Uint8Array(255);
      let tagNumberBufferMaxLength = 255;
      while (intBuffer[count] & 128) {
        intTagNumberBuffer[count - 1] = intBuffer[count] & 127;
        count++;
        if (count >= intBuffer.length) {
          this.error = "End of input reached before message was fully decoded";
          return -1;
        }
        if (count === tagNumberBufferMaxLength) {
          tagNumberBufferMaxLength += 255;
          const tempBufferView2 = new Uint8Array(tagNumberBufferMaxLength);
          for (let i = 0;i < intTagNumberBuffer.length; i++)
            tempBufferView2[i] = intTagNumberBuffer[i];
          intTagNumberBuffer = this.valueHexView = new Uint8Array(tagNumberBufferMaxLength);
        }
      }
      this.blockLength = count + 1;
      intTagNumberBuffer[count - 1] = intBuffer[count] & 127;
      const tempBufferView = new Uint8Array(count);
      for (let i = 0;i < count; i++)
        tempBufferView[i] = intTagNumberBuffer[i];
      intTagNumberBuffer = this.valueHexView = new Uint8Array(count);
      intTagNumberBuffer.set(tempBufferView);
      if (this.blockLength <= 9)
        this.tagNumber = utilFromBase(intTagNumberBuffer, 7);
      else {
        this.isHexOnly = true;
        this.warnings.push("Tag too long, represented as hex-coded");
      }
    }
    if (this.tagClass === 1 && this.isConstructed) {
      switch (this.tagNumber) {
        case 1:
        case 2:
        case 5:
        case 6:
        case 9:
        case 13:
        case 14:
        case 23:
        case 24:
        case 31:
        case 32:
        case 33:
        case 34:
          this.error = "Constructed encoding used for primitive type";
          return -1;
      }
    }
    return inputOffset + this.blockLength;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      tagClass: this.tagClass,
      tagNumber: this.tagNumber,
      isConstructed: this.isConstructed
    };
  }
}
LocalIdentificationBlock.NAME = "identificationBlock";

class LocalLengthBlock extends LocalBaseBlock {
  constructor({ lenBlock = {} } = {}) {
    var _a, _b, _c;
    super();
    this.isIndefiniteForm = (_a = lenBlock.isIndefiniteForm) !== null && _a !== undefined ? _a : false;
    this.longFormUsed = (_b = lenBlock.longFormUsed) !== null && _b !== undefined ? _b : false;
    this.length = (_c = lenBlock.length) !== null && _c !== undefined ? _c : 0;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const view = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, view, inputOffset, inputLength)) {
      return -1;
    }
    const intBuffer = view.subarray(inputOffset, inputOffset + inputLength);
    if (intBuffer.length === 0) {
      this.error = "Zero buffer length";
      return -1;
    }
    if (intBuffer[0] === 255) {
      this.error = "Length block 0xFF is reserved by standard";
      return -1;
    }
    this.isIndefiniteForm = intBuffer[0] === 128;
    if (this.isIndefiniteForm) {
      this.blockLength = 1;
      return inputOffset + this.blockLength;
    }
    this.longFormUsed = !!(intBuffer[0] & 128);
    if (this.longFormUsed === false) {
      this.length = intBuffer[0];
      this.blockLength = 1;
      return inputOffset + this.blockLength;
    }
    const count = intBuffer[0] & 127;
    if (count > 8) {
      this.error = "Too big integer";
      return -1;
    }
    if (count + 1 > intBuffer.length) {
      this.error = "End of input reached before message was fully decoded";
      return -1;
    }
    const lenOffset = inputOffset + 1;
    const lengthBufferView = view.subarray(lenOffset, lenOffset + count);
    if (lengthBufferView[count - 1] === 0)
      this.warnings.push("Needlessly long encoded length");
    this.length = utilFromBase(lengthBufferView, 8);
    if (this.longFormUsed && this.length <= 127)
      this.warnings.push("Unnecessary usage of long length form");
    this.blockLength = count + 1;
    return inputOffset + this.blockLength;
  }
  toBER(sizeOnly = false) {
    let retBuf;
    let retView;
    if (this.length > 127)
      this.longFormUsed = true;
    if (this.isIndefiniteForm) {
      retBuf = new ArrayBuffer(1);
      if (sizeOnly === false) {
        retView = new Uint8Array(retBuf);
        retView[0] = 128;
      }
      return retBuf;
    }
    if (this.longFormUsed) {
      const encodedBuf = utilToBase(this.length, 8);
      if (encodedBuf.byteLength > 127) {
        this.error = "Too big length";
        return EMPTY_BUFFER;
      }
      retBuf = new ArrayBuffer(encodedBuf.byteLength + 1);
      if (sizeOnly)
        return retBuf;
      const encodedView = new Uint8Array(encodedBuf);
      retView = new Uint8Array(retBuf);
      retView[0] = encodedBuf.byteLength | 128;
      for (let i = 0;i < encodedBuf.byteLength; i++)
        retView[i + 1] = encodedView[i];
      return retBuf;
    }
    retBuf = new ArrayBuffer(1);
    if (sizeOnly === false) {
      retView = new Uint8Array(retBuf);
      retView[0] = this.length;
    }
    return retBuf;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      isIndefiniteForm: this.isIndefiniteForm,
      longFormUsed: this.longFormUsed,
      length: this.length
    };
  }
}
LocalLengthBlock.NAME = "lengthBlock";
var typeStore = {};

class BaseBlock extends LocalBaseBlock {
  constructor({ name = EMPTY_STRING, optional = false, primitiveSchema, ...parameters } = {}, valueBlockType) {
    super(parameters);
    this.name = name;
    this.optional = optional;
    if (primitiveSchema) {
      this.primitiveSchema = primitiveSchema;
    }
    this.idBlock = new LocalIdentificationBlock(parameters);
    this.lenBlock = new LocalLengthBlock(parameters);
    this.valueBlock = valueBlockType ? new valueBlockType(parameters) : new ValueBlock(parameters);
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm ? inputLength : this.lenBlock.length);
    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }
    if (!this.idBlock.error.length)
      this.blockLength += this.idBlock.blockLength;
    if (!this.lenBlock.error.length)
      this.blockLength += this.lenBlock.blockLength;
    if (!this.valueBlock.error.length)
      this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  }
  toBER(sizeOnly, writer) {
    const _writer = writer || new ViewWriter;
    if (!writer) {
      prepareIndefiniteForm(this);
    }
    const idBlockBuf = this.idBlock.toBER(sizeOnly);
    _writer.write(idBlockBuf);
    if (this.lenBlock.isIndefiniteForm) {
      _writer.write(new Uint8Array([128]).buffer);
      this.valueBlock.toBER(sizeOnly, _writer);
      _writer.write(new ArrayBuffer(2));
    } else {
      const valueBlockBuf = this.valueBlock.toBER(sizeOnly);
      this.lenBlock.length = valueBlockBuf.byteLength;
      const lenBlockBuf = this.lenBlock.toBER(sizeOnly);
      _writer.write(lenBlockBuf);
      _writer.write(valueBlockBuf);
    }
    if (!writer) {
      return _writer.final();
    }
    return EMPTY_BUFFER;
  }
  toJSON() {
    const object = {
      ...super.toJSON(),
      idBlock: this.idBlock.toJSON(),
      lenBlock: this.lenBlock.toJSON(),
      valueBlock: this.valueBlock.toJSON(),
      name: this.name,
      optional: this.optional
    };
    if (this.primitiveSchema)
      object.primitiveSchema = this.primitiveSchema.toJSON();
    return object;
  }
  toString(encoding = "ascii") {
    if (encoding === "ascii") {
      return this.onAsciiEncoding();
    }
    return Convert.ToHex(this.toBER());
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${Convert.ToHex(this.valueBlock.valueBeforeDecodeView)}`;
  }
  isEqual(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof this.constructor)) {
      return false;
    }
    const thisRaw = this.toBER();
    const otherRaw = other.toBER();
    return isEqualBuffer(thisRaw, otherRaw);
  }
}
BaseBlock.NAME = "BaseBlock";
function prepareIndefiniteForm(baseBlock) {
  if (baseBlock instanceof typeStore.Constructed) {
    for (const value of baseBlock.valueBlock.value) {
      if (prepareIndefiniteForm(value)) {
        baseBlock.lenBlock.isIndefiniteForm = true;
      }
    }
  }
  return !!baseBlock.lenBlock.isIndefiniteForm;
}

class BaseStringBlock extends BaseBlock {
  constructor({ value = EMPTY_STRING, ...parameters } = {}, stringValueBlockType) {
    super(parameters, stringValueBlockType);
    if (value) {
      this.fromString(value);
    }
  }
  getValue() {
    return this.valueBlock.value;
  }
  setValue(value) {
    this.valueBlock.value = value;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm ? inputLength : this.lenBlock.length);
    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }
    this.fromBuffer(this.valueBlock.valueHexView);
    if (!this.idBlock.error.length)
      this.blockLength += this.idBlock.blockLength;
    if (!this.lenBlock.error.length)
      this.blockLength += this.lenBlock.blockLength;
    if (!this.valueBlock.error.length)
      this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : '${this.valueBlock.value}'`;
  }
}
BaseStringBlock.NAME = "BaseStringBlock";

class LocalPrimitiveValueBlock extends HexBlock(ValueBlock) {
  constructor({ isHexOnly = true, ...parameters } = {}) {
    super(parameters);
    this.isHexOnly = isHexOnly;
  }
}
LocalPrimitiveValueBlock.NAME = "PrimitiveValueBlock";
var _a$w;

class Primitive extends BaseBlock {
  constructor(parameters = {}) {
    super(parameters, LocalPrimitiveValueBlock);
    this.idBlock.isConstructed = false;
  }
}
_a$w = Primitive;
(() => {
  typeStore.Primitive = _a$w;
})();
Primitive.NAME = "PRIMITIVE";
function localChangeType(inputObject, newType) {
  if (inputObject instanceof newType) {
    return inputObject;
  }
  const newObject = new newType;
  newObject.idBlock = inputObject.idBlock;
  newObject.lenBlock = inputObject.lenBlock;
  newObject.warnings = inputObject.warnings;
  newObject.valueBeforeDecodeView = inputObject.valueBeforeDecodeView;
  return newObject;
}
function localFromBER(inputBuffer, inputOffset = 0, inputLength = inputBuffer.length) {
  const incomingOffset = inputOffset;
  let returnObject = new BaseBlock({}, ValueBlock);
  const baseBlock = new LocalBaseBlock;
  if (!checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength)) {
    returnObject.error = baseBlock.error;
    return {
      offset: -1,
      result: returnObject
    };
  }
  const intBuffer = inputBuffer.subarray(inputOffset, inputOffset + inputLength);
  if (!intBuffer.length) {
    returnObject.error = "Zero buffer length";
    return {
      offset: -1,
      result: returnObject
    };
  }
  let resultOffset = returnObject.idBlock.fromBER(inputBuffer, inputOffset, inputLength);
  if (returnObject.idBlock.warnings.length) {
    returnObject.warnings.concat(returnObject.idBlock.warnings);
  }
  if (resultOffset === -1) {
    returnObject.error = returnObject.idBlock.error;
    return {
      offset: -1,
      result: returnObject
    };
  }
  inputOffset = resultOffset;
  inputLength -= returnObject.idBlock.blockLength;
  resultOffset = returnObject.lenBlock.fromBER(inputBuffer, inputOffset, inputLength);
  if (returnObject.lenBlock.warnings.length) {
    returnObject.warnings.concat(returnObject.lenBlock.warnings);
  }
  if (resultOffset === -1) {
    returnObject.error = returnObject.lenBlock.error;
    return {
      offset: -1,
      result: returnObject
    };
  }
  inputOffset = resultOffset;
  inputLength -= returnObject.lenBlock.blockLength;
  if (!returnObject.idBlock.isConstructed && returnObject.lenBlock.isIndefiniteForm) {
    returnObject.error = "Indefinite length form used for primitive encoding form";
    return {
      offset: -1,
      result: returnObject
    };
  }
  let newASN1Type = BaseBlock;
  switch (returnObject.idBlock.tagClass) {
    case 1:
      if (returnObject.idBlock.tagNumber >= 37 && returnObject.idBlock.isHexOnly === false) {
        returnObject.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard";
        return {
          offset: -1,
          result: returnObject
        };
      }
      switch (returnObject.idBlock.tagNumber) {
        case 0:
          if (returnObject.idBlock.isConstructed && returnObject.lenBlock.length > 0) {
            returnObject.error = "Type [UNIVERSAL 0] is reserved";
            return {
              offset: -1,
              result: returnObject
            };
          }
          newASN1Type = typeStore.EndOfContent;
          break;
        case 1:
          newASN1Type = typeStore.Boolean;
          break;
        case 2:
          newASN1Type = typeStore.Integer;
          break;
        case 3:
          newASN1Type = typeStore.BitString;
          break;
        case 4:
          newASN1Type = typeStore.OctetString;
          break;
        case 5:
          newASN1Type = typeStore.Null;
          break;
        case 6:
          newASN1Type = typeStore.ObjectIdentifier;
          break;
        case 10:
          newASN1Type = typeStore.Enumerated;
          break;
        case 12:
          newASN1Type = typeStore.Utf8String;
          break;
        case 13:
          newASN1Type = typeStore.RelativeObjectIdentifier;
          break;
        case 14:
          newASN1Type = typeStore.TIME;
          break;
        case 15:
          returnObject.error = "[UNIVERSAL 15] is reserved by ASN.1 standard";
          return {
            offset: -1,
            result: returnObject
          };
        case 16:
          newASN1Type = typeStore.Sequence;
          break;
        case 17:
          newASN1Type = typeStore.Set;
          break;
        case 18:
          newASN1Type = typeStore.NumericString;
          break;
        case 19:
          newASN1Type = typeStore.PrintableString;
          break;
        case 20:
          newASN1Type = typeStore.TeletexString;
          break;
        case 21:
          newASN1Type = typeStore.VideotexString;
          break;
        case 22:
          newASN1Type = typeStore.IA5String;
          break;
        case 23:
          newASN1Type = typeStore.UTCTime;
          break;
        case 24:
          newASN1Type = typeStore.GeneralizedTime;
          break;
        case 25:
          newASN1Type = typeStore.GraphicString;
          break;
        case 26:
          newASN1Type = typeStore.VisibleString;
          break;
        case 27:
          newASN1Type = typeStore.GeneralString;
          break;
        case 28:
          newASN1Type = typeStore.UniversalString;
          break;
        case 29:
          newASN1Type = typeStore.CharacterString;
          break;
        case 30:
          newASN1Type = typeStore.BmpString;
          break;
        case 31:
          newASN1Type = typeStore.DATE;
          break;
        case 32:
          newASN1Type = typeStore.TimeOfDay;
          break;
        case 33:
          newASN1Type = typeStore.DateTime;
          break;
        case 34:
          newASN1Type = typeStore.Duration;
          break;
        default: {
          const newObject = returnObject.idBlock.isConstructed ? new typeStore.Constructed : new typeStore.Primitive;
          newObject.idBlock = returnObject.idBlock;
          newObject.lenBlock = returnObject.lenBlock;
          newObject.warnings = returnObject.warnings;
          returnObject = newObject;
        }
      }
      break;
    case 2:
    case 3:
    case 4:
    default: {
      newASN1Type = returnObject.idBlock.isConstructed ? typeStore.Constructed : typeStore.Primitive;
    }
  }
  returnObject = localChangeType(returnObject, newASN1Type);
  resultOffset = returnObject.fromBER(inputBuffer, inputOffset, returnObject.lenBlock.isIndefiniteForm ? inputLength : returnObject.lenBlock.length);
  returnObject.valueBeforeDecodeView = inputBuffer.subarray(incomingOffset, incomingOffset + returnObject.blockLength);
  return {
    offset: resultOffset,
    result: returnObject
  };
}
function fromBER(inputBuffer) {
  if (!inputBuffer.byteLength) {
    const result = new BaseBlock({}, ValueBlock);
    result.error = "Input buffer has zero length";
    return {
      offset: -1,
      result
    };
  }
  return localFromBER(BufferSourceConverter.toUint8Array(inputBuffer).slice(), 0, inputBuffer.byteLength);
}
function checkLen(indefiniteLength, length) {
  if (indefiniteLength) {
    return 1;
  }
  return length;
}

class LocalConstructedValueBlock extends ValueBlock {
  constructor({ value = [], isIndefiniteForm = false, ...parameters } = {}) {
    super(parameters);
    this.value = value;
    this.isIndefiniteForm = isIndefiniteForm;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const view = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, view, inputOffset, inputLength)) {
      return -1;
    }
    this.valueBeforeDecodeView = view.subarray(inputOffset, inputOffset + inputLength);
    if (this.valueBeforeDecodeView.length === 0) {
      this.warnings.push("Zero buffer length");
      return inputOffset;
    }
    let currentOffset = inputOffset;
    while (checkLen(this.isIndefiniteForm, inputLength) > 0) {
      const returnObject = localFromBER(view, currentOffset, inputLength);
      if (returnObject.offset === -1) {
        this.error = returnObject.result.error;
        this.warnings.concat(returnObject.result.warnings);
        return -1;
      }
      currentOffset = returnObject.offset;
      this.blockLength += returnObject.result.blockLength;
      inputLength -= returnObject.result.blockLength;
      this.value.push(returnObject.result);
      if (this.isIndefiniteForm && returnObject.result.constructor.NAME === END_OF_CONTENT_NAME) {
        break;
      }
    }
    if (this.isIndefiniteForm) {
      if (this.value[this.value.length - 1].constructor.NAME === END_OF_CONTENT_NAME) {
        this.value.pop();
      } else {
        this.warnings.push("No EndOfContent block encoded");
      }
    }
    return currentOffset;
  }
  toBER(sizeOnly, writer) {
    const _writer = writer || new ViewWriter;
    for (let i = 0;i < this.value.length; i++) {
      this.value[i].toBER(sizeOnly, _writer);
    }
    if (!writer) {
      return _writer.final();
    }
    return EMPTY_BUFFER;
  }
  toJSON() {
    const object = {
      ...super.toJSON(),
      isIndefiniteForm: this.isIndefiniteForm,
      value: []
    };
    for (const value of this.value) {
      object.value.push(value.toJSON());
    }
    return object;
  }
}
LocalConstructedValueBlock.NAME = "ConstructedValueBlock";
var _a$v;

class Constructed extends BaseBlock {
  constructor(parameters = {}) {
    super(parameters, LocalConstructedValueBlock);
    this.idBlock.isConstructed = true;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
    const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, this.lenBlock.isIndefiniteForm ? inputLength : this.lenBlock.length);
    if (resultOffset === -1) {
      this.error = this.valueBlock.error;
      return resultOffset;
    }
    if (!this.idBlock.error.length)
      this.blockLength += this.idBlock.blockLength;
    if (!this.lenBlock.error.length)
      this.blockLength += this.lenBlock.blockLength;
    if (!this.valueBlock.error.length)
      this.blockLength += this.valueBlock.blockLength;
    return resultOffset;
  }
  onAsciiEncoding() {
    const values = [];
    for (const value of this.valueBlock.value) {
      values.push(value.toString("ascii").split(`
`).map((o) => `  ${o}`).join(`
`));
    }
    const blockName = this.idBlock.tagClass === 3 ? `[${this.idBlock.tagNumber}]` : this.constructor.NAME;
    return values.length ? `${blockName} :
${values.join(`
`)}` : `${blockName} :`;
  }
}
_a$v = Constructed;
(() => {
  typeStore.Constructed = _a$v;
})();
Constructed.NAME = "CONSTRUCTED";

class LocalEndOfContentValueBlock extends ValueBlock {
  fromBER(inputBuffer, inputOffset, inputLength) {
    return inputOffset;
  }
  toBER(sizeOnly) {
    return EMPTY_BUFFER;
  }
}
LocalEndOfContentValueBlock.override = "EndOfContentValueBlock";
var _a$u;

class EndOfContent extends BaseBlock {
  constructor(parameters = {}) {
    super(parameters, LocalEndOfContentValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 0;
  }
}
_a$u = EndOfContent;
(() => {
  typeStore.EndOfContent = _a$u;
})();
EndOfContent.NAME = END_OF_CONTENT_NAME;
var _a$t;

class Null extends BaseBlock {
  constructor(parameters = {}) {
    super(parameters, ValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 5;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    if (this.lenBlock.length > 0)
      this.warnings.push("Non-zero length of value block for Null type");
    if (!this.idBlock.error.length)
      this.blockLength += this.idBlock.blockLength;
    if (!this.lenBlock.error.length)
      this.blockLength += this.lenBlock.blockLength;
    this.blockLength += inputLength;
    if (inputOffset + inputLength > inputBuffer.byteLength) {
      this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
      return -1;
    }
    return inputOffset + inputLength;
  }
  toBER(sizeOnly, writer) {
    const retBuf = new ArrayBuffer(2);
    if (!sizeOnly) {
      const retView = new Uint8Array(retBuf);
      retView[0] = 5;
      retView[1] = 0;
    }
    if (writer) {
      writer.write(retBuf);
    }
    return retBuf;
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME}`;
  }
}
_a$t = Null;
(() => {
  typeStore.Null = _a$t;
})();
Null.NAME = "NULL";

class LocalBooleanValueBlock extends HexBlock(ValueBlock) {
  constructor({ value, ...parameters } = {}) {
    super(parameters);
    if (parameters.valueHex) {
      this.valueHexView = BufferSourceConverter.toUint8Array(parameters.valueHex);
    } else {
      this.valueHexView = new Uint8Array(1);
    }
    if (value) {
      this.value = value;
    }
  }
  get value() {
    for (const octet of this.valueHexView) {
      if (octet > 0) {
        return true;
      }
    }
    return false;
  }
  set value(value) {
    this.valueHexView[0] = value ? 255 : 0;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
      return -1;
    }
    this.valueHexView = inputView.subarray(inputOffset, inputOffset + inputLength);
    if (inputLength > 1)
      this.warnings.push("Boolean value encoded in more then 1 octet");
    this.isHexOnly = true;
    utilDecodeTC.call(this);
    this.blockLength = inputLength;
    return inputOffset + inputLength;
  }
  toBER() {
    return this.valueHexView.slice();
  }
  toJSON() {
    return {
      ...super.toJSON(),
      value: this.value
    };
  }
}
LocalBooleanValueBlock.NAME = "BooleanValueBlock";
var _a$s;

class Boolean2 extends BaseBlock {
  constructor(parameters = {}) {
    super(parameters, LocalBooleanValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 1;
  }
  getValue() {
    return this.valueBlock.value;
  }
  setValue(value) {
    this.valueBlock.value = value;
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.getValue}`;
  }
}
_a$s = Boolean2;
(() => {
  typeStore.Boolean = _a$s;
})();
Boolean2.NAME = "BOOLEAN";

class LocalOctetStringValueBlock extends HexBlock(LocalConstructedValueBlock) {
  constructor({ isConstructed = false, ...parameters } = {}) {
    super(parameters);
    this.isConstructed = isConstructed;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    let resultOffset = 0;
    if (this.isConstructed) {
      this.isHexOnly = false;
      resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
      if (resultOffset === -1)
        return resultOffset;
      for (let i = 0;i < this.value.length; i++) {
        const currentBlockName = this.value[i].constructor.NAME;
        if (currentBlockName === END_OF_CONTENT_NAME) {
          if (this.isIndefiniteForm)
            break;
          else {
            this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only";
            return -1;
          }
        }
        if (currentBlockName !== OCTET_STRING_NAME) {
          this.error = "OCTET STRING may consists of OCTET STRINGs only";
          return -1;
        }
      }
    } else {
      this.isHexOnly = true;
      resultOffset = super.fromBER(inputBuffer, inputOffset, inputLength);
      this.blockLength = inputLength;
    }
    return resultOffset;
  }
  toBER(sizeOnly, writer) {
    if (this.isConstructed)
      return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly, writer);
    return sizeOnly ? new ArrayBuffer(this.valueHexView.byteLength) : this.valueHexView.slice().buffer;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      isConstructed: this.isConstructed
    };
  }
}
LocalOctetStringValueBlock.NAME = "OctetStringValueBlock";
var _a$r;

class OctetString extends BaseBlock {
  constructor({ idBlock = {}, lenBlock = {}, ...parameters } = {}) {
    var _b, _c;
    (_b = parameters.isConstructed) !== null && _b !== undefined || (parameters.isConstructed = !!((_c = parameters.value) === null || _c === undefined ? undefined : _c.length));
    super({
      idBlock: {
        isConstructed: parameters.isConstructed,
        ...idBlock
      },
      lenBlock: {
        ...lenBlock,
        isIndefiniteForm: !!parameters.isIndefiniteForm
      },
      ...parameters
    }, LocalOctetStringValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 4;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    this.valueBlock.isConstructed = this.idBlock.isConstructed;
    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
    if (inputLength === 0) {
      if (this.idBlock.error.length === 0)
        this.blockLength += this.idBlock.blockLength;
      if (this.lenBlock.error.length === 0)
        this.blockLength += this.lenBlock.blockLength;
      return inputOffset;
    }
    if (!this.valueBlock.isConstructed) {
      const view = inputBuffer instanceof ArrayBuffer ? new Uint8Array(inputBuffer) : inputBuffer;
      const buf = view.subarray(inputOffset, inputOffset + inputLength);
      try {
        if (buf.byteLength) {
          const asn = localFromBER(buf, 0, buf.byteLength);
          if (asn.offset !== -1 && asn.offset === inputLength) {
            this.valueBlock.value = [asn.result];
          }
        }
      } catch (e) {}
    }
    return super.fromBER(inputBuffer, inputOffset, inputLength);
  }
  onAsciiEncoding() {
    if (this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length) {
      return Constructed.prototype.onAsciiEncoding.call(this);
    }
    return `${this.constructor.NAME} : ${Convert.ToHex(this.valueBlock.valueHexView)}`;
  }
  getValue() {
    if (!this.idBlock.isConstructed) {
      return this.valueBlock.valueHexView.slice().buffer;
    }
    const array = [];
    for (const content of this.valueBlock.value) {
      if (content instanceof OctetString) {
        array.push(content.valueBlock.valueHexView);
      }
    }
    return BufferSourceConverter.concat(array);
  }
}
_a$r = OctetString;
(() => {
  typeStore.OctetString = _a$r;
})();
OctetString.NAME = OCTET_STRING_NAME;

class LocalBitStringValueBlock extends HexBlock(LocalConstructedValueBlock) {
  constructor({ unusedBits = 0, isConstructed = false, ...parameters } = {}) {
    super(parameters);
    this.unusedBits = unusedBits;
    this.isConstructed = isConstructed;
    this.blockLength = this.valueHexView.byteLength;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    if (!inputLength) {
      return inputOffset;
    }
    let resultOffset = -1;
    if (this.isConstructed) {
      resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
      if (resultOffset === -1)
        return resultOffset;
      for (const value of this.value) {
        const currentBlockName = value.constructor.NAME;
        if (currentBlockName === END_OF_CONTENT_NAME) {
          if (this.isIndefiniteForm)
            break;
          else {
            this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only";
            return -1;
          }
        }
        if (currentBlockName !== BIT_STRING_NAME) {
          this.error = "BIT STRING may consists of BIT STRINGs only";
          return -1;
        }
        const valueBlock = value.valueBlock;
        if (this.unusedBits > 0 && valueBlock.unusedBits > 0) {
          this.error = 'Using of "unused bits" inside constructive BIT STRING allowed for least one only';
          return -1;
        }
        this.unusedBits = valueBlock.unusedBits;
      }
      return resultOffset;
    }
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
      return -1;
    }
    const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
    this.unusedBits = intBuffer[0];
    if (this.unusedBits > 7) {
      this.error = "Unused bits for BitString must be in range 0-7";
      return -1;
    }
    if (!this.unusedBits) {
      const buf = intBuffer.subarray(1);
      try {
        if (buf.byteLength) {
          const asn = localFromBER(buf, 0, buf.byteLength);
          if (asn.offset !== -1 && asn.offset === inputLength - 1) {
            this.value = [asn.result];
          }
        }
      } catch (e) {}
    }
    this.valueHexView = intBuffer.subarray(1);
    this.blockLength = intBuffer.length;
    return inputOffset + inputLength;
  }
  toBER(sizeOnly, writer) {
    if (this.isConstructed) {
      return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly, writer);
    }
    if (sizeOnly) {
      return new ArrayBuffer(this.valueHexView.byteLength + 1);
    }
    if (!this.valueHexView.byteLength) {
      return EMPTY_BUFFER;
    }
    const retView = new Uint8Array(this.valueHexView.length + 1);
    retView[0] = this.unusedBits;
    retView.set(this.valueHexView, 1);
    return retView.buffer;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      unusedBits: this.unusedBits,
      isConstructed: this.isConstructed
    };
  }
}
LocalBitStringValueBlock.NAME = "BitStringValueBlock";
var _a$q;

class BitString extends BaseBlock {
  constructor({ idBlock = {}, lenBlock = {}, ...parameters } = {}) {
    var _b, _c;
    (_b = parameters.isConstructed) !== null && _b !== undefined || (parameters.isConstructed = !!((_c = parameters.value) === null || _c === undefined ? undefined : _c.length));
    super({
      idBlock: {
        isConstructed: parameters.isConstructed,
        ...idBlock
      },
      lenBlock: {
        ...lenBlock,
        isIndefiniteForm: !!parameters.isIndefiniteForm
      },
      ...parameters
    }, LocalBitStringValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 3;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    this.valueBlock.isConstructed = this.idBlock.isConstructed;
    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
    return super.fromBER(inputBuffer, inputOffset, inputLength);
  }
  onAsciiEncoding() {
    if (this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length) {
      return Constructed.prototype.onAsciiEncoding.call(this);
    } else {
      const bits = [];
      const valueHex = this.valueBlock.valueHexView;
      for (const byte of valueHex) {
        bits.push(byte.toString(2).padStart(8, "0"));
      }
      const bitsStr = bits.join("");
      return `${this.constructor.NAME} : ${bitsStr.substring(0, bitsStr.length - this.valueBlock.unusedBits)}`;
    }
  }
}
_a$q = BitString;
(() => {
  typeStore.BitString = _a$q;
})();
BitString.NAME = BIT_STRING_NAME;
var _a$p;
function viewAdd(first, second) {
  const c = new Uint8Array([0]);
  const firstView = new Uint8Array(first);
  const secondView = new Uint8Array(second);
  let firstViewCopy = firstView.slice(0);
  const firstViewCopyLength = firstViewCopy.length - 1;
  const secondViewCopy = secondView.slice(0);
  const secondViewCopyLength = secondViewCopy.length - 1;
  let value = 0;
  const max = secondViewCopyLength < firstViewCopyLength ? firstViewCopyLength : secondViewCopyLength;
  let counter = 0;
  for (let i = max;i >= 0; i--, counter++) {
    switch (true) {
      case counter < secondViewCopy.length:
        value = firstViewCopy[firstViewCopyLength - counter] + secondViewCopy[secondViewCopyLength - counter] + c[0];
        break;
      default:
        value = firstViewCopy[firstViewCopyLength - counter] + c[0];
    }
    c[0] = value / 10;
    switch (true) {
      case counter >= firstViewCopy.length:
        firstViewCopy = utilConcatView(new Uint8Array([value % 10]), firstViewCopy);
        break;
      default:
        firstViewCopy[firstViewCopyLength - counter] = value % 10;
    }
  }
  if (c[0] > 0)
    firstViewCopy = utilConcatView(c, firstViewCopy);
  return firstViewCopy;
}
function power2(n) {
  if (n >= powers2.length) {
    for (let p = powers2.length;p <= n; p++) {
      const c = new Uint8Array([0]);
      let digits = powers2[p - 1].slice(0);
      for (let i = digits.length - 1;i >= 0; i--) {
        const newValue = new Uint8Array([(digits[i] << 1) + c[0]]);
        c[0] = newValue[0] / 10;
        digits[i] = newValue[0] % 10;
      }
      if (c[0] > 0)
        digits = utilConcatView(c, digits);
      powers2.push(digits);
    }
  }
  return powers2[n];
}
function viewSub(first, second) {
  let b = 0;
  const firstView = new Uint8Array(first);
  const secondView = new Uint8Array(second);
  const firstViewCopy = firstView.slice(0);
  const firstViewCopyLength = firstViewCopy.length - 1;
  const secondViewCopy = secondView.slice(0);
  const secondViewCopyLength = secondViewCopy.length - 1;
  let value;
  let counter = 0;
  for (let i = secondViewCopyLength;i >= 0; i--, counter++) {
    value = firstViewCopy[firstViewCopyLength - counter] - secondViewCopy[secondViewCopyLength - counter] - b;
    switch (true) {
      case value < 0:
        b = 1;
        firstViewCopy[firstViewCopyLength - counter] = value + 10;
        break;
      default:
        b = 0;
        firstViewCopy[firstViewCopyLength - counter] = value;
    }
  }
  if (b > 0) {
    for (let i = firstViewCopyLength - secondViewCopyLength + 1;i >= 0; i--, counter++) {
      value = firstViewCopy[firstViewCopyLength - counter] - b;
      if (value < 0) {
        b = 1;
        firstViewCopy[firstViewCopyLength - counter] = value + 10;
      } else {
        b = 0;
        firstViewCopy[firstViewCopyLength - counter] = value;
        break;
      }
    }
  }
  return firstViewCopy.slice();
}

class LocalIntegerValueBlock extends HexBlock(ValueBlock) {
  constructor({ value, ...parameters } = {}) {
    super(parameters);
    this._valueDec = 0;
    if (parameters.valueHex) {
      this.setValueHex();
    }
    if (value !== undefined) {
      this.valueDec = value;
    }
  }
  setValueHex() {
    if (this.valueHexView.length >= 4) {
      this.warnings.push("Too big Integer for decoding, hex only");
      this.isHexOnly = true;
      this._valueDec = 0;
    } else {
      this.isHexOnly = false;
      if (this.valueHexView.length > 0) {
        this._valueDec = utilDecodeTC.call(this);
      }
    }
  }
  set valueDec(v) {
    this._valueDec = v;
    this.isHexOnly = false;
    this.valueHexView = new Uint8Array(utilEncodeTC(v));
  }
  get valueDec() {
    return this._valueDec;
  }
  fromDER(inputBuffer, inputOffset, inputLength, expectedLength = 0) {
    const offset = this.fromBER(inputBuffer, inputOffset, inputLength);
    if (offset === -1)
      return offset;
    const view = this.valueHexView;
    if (view[0] === 0 && (view[1] & 128) !== 0) {
      this.valueHexView = view.subarray(1);
    } else {
      if (expectedLength !== 0) {
        if (view.length < expectedLength) {
          if (expectedLength - view.length > 1)
            expectedLength = view.length + 1;
          this.valueHexView = view.subarray(expectedLength - view.length);
        }
      }
    }
    return offset;
  }
  toDER(sizeOnly = false) {
    const view = this.valueHexView;
    switch (true) {
      case (view[0] & 128) !== 0:
        {
          const updatedView = new Uint8Array(this.valueHexView.length + 1);
          updatedView[0] = 0;
          updatedView.set(view, 1);
          this.valueHexView = updatedView;
        }
        break;
      case (view[0] === 0 && (view[1] & 128) === 0):
        {
          this.valueHexView = this.valueHexView.subarray(1);
        }
        break;
    }
    return this.toBER(sizeOnly);
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const resultOffset = super.fromBER(inputBuffer, inputOffset, inputLength);
    if (resultOffset === -1) {
      return resultOffset;
    }
    this.setValueHex();
    return resultOffset;
  }
  toBER(sizeOnly) {
    return sizeOnly ? new ArrayBuffer(this.valueHexView.length) : this.valueHexView.slice().buffer;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      valueDec: this.valueDec
    };
  }
  toString() {
    const firstBit = this.valueHexView.length * 8 - 1;
    let digits = new Uint8Array(this.valueHexView.length * 8 / 3);
    let bitNumber = 0;
    let currentByte;
    const asn1View = this.valueHexView;
    let result = "";
    let flag = false;
    for (let byteNumber = asn1View.byteLength - 1;byteNumber >= 0; byteNumber--) {
      currentByte = asn1View[byteNumber];
      for (let i = 0;i < 8; i++) {
        if ((currentByte & 1) === 1) {
          switch (bitNumber) {
            case firstBit:
              digits = viewSub(power2(bitNumber), digits);
              result = "-";
              break;
            default:
              digits = viewAdd(digits, power2(bitNumber));
          }
        }
        bitNumber++;
        currentByte >>= 1;
      }
    }
    for (let i = 0;i < digits.length; i++) {
      if (digits[i])
        flag = true;
      if (flag)
        result += digitsString.charAt(digits[i]);
    }
    if (flag === false)
      result += digitsString.charAt(0);
    return result;
  }
}
_a$p = LocalIntegerValueBlock;
LocalIntegerValueBlock.NAME = "IntegerValueBlock";
(() => {
  Object.defineProperty(_a$p.prototype, "valueHex", {
    set: function(v) {
      this.valueHexView = new Uint8Array(v);
      this.setValueHex();
    },
    get: function() {
      return this.valueHexView.slice().buffer;
    }
  });
})();
var _a$o;

class Integer extends BaseBlock {
  constructor(parameters = {}) {
    super(parameters, LocalIntegerValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 2;
  }
  toBigInt() {
    assertBigInt();
    return BigInt(this.valueBlock.toString());
  }
  static fromBigInt(value) {
    assertBigInt();
    const bigIntValue = BigInt(value);
    const writer = new ViewWriter;
    const hex = bigIntValue.toString(16).replace(/^-/, "");
    const view = new Uint8Array(Convert.FromHex(hex));
    if (bigIntValue < 0) {
      const first = new Uint8Array(view.length + (view[0] & 128 ? 1 : 0));
      first[0] |= 128;
      const firstInt = BigInt(`0x${Convert.ToHex(first)}`);
      const secondInt = firstInt + bigIntValue;
      const second = BufferSourceConverter.toUint8Array(Convert.FromHex(secondInt.toString(16)));
      second[0] |= 128;
      writer.write(second);
    } else {
      if (view[0] & 128) {
        writer.write(new Uint8Array([0]));
      }
      writer.write(view);
    }
    const res = new Integer({
      valueHex: writer.final()
    });
    return res;
  }
  convertToDER() {
    const integer = new Integer({ valueHex: this.valueBlock.valueHexView });
    integer.valueBlock.toDER();
    return integer;
  }
  convertFromDER() {
    return new Integer({
      valueHex: this.valueBlock.valueHexView[0] === 0 ? this.valueBlock.valueHexView.subarray(1) : this.valueBlock.valueHexView
    });
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.valueBlock.toString()}`;
  }
}
_a$o = Integer;
(() => {
  typeStore.Integer = _a$o;
})();
Integer.NAME = "INTEGER";
var _a$n;

class Enumerated extends Integer {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 10;
  }
}
_a$n = Enumerated;
(() => {
  typeStore.Enumerated = _a$n;
})();
Enumerated.NAME = "ENUMERATED";

class LocalSidValueBlock extends HexBlock(ValueBlock) {
  constructor({ valueDec = -1, isFirstSid = false, ...parameters } = {}) {
    super(parameters);
    this.valueDec = valueDec;
    this.isFirstSid = isFirstSid;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    if (!inputLength) {
      return inputOffset;
    }
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
      return -1;
    }
    const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
    this.valueHexView = new Uint8Array(inputLength);
    for (let i = 0;i < inputLength; i++) {
      this.valueHexView[i] = intBuffer[i] & 127;
      this.blockLength++;
      if ((intBuffer[i] & 128) === 0)
        break;
    }
    const tempView = new Uint8Array(this.blockLength);
    for (let i = 0;i < this.blockLength; i++) {
      tempView[i] = this.valueHexView[i];
    }
    this.valueHexView = tempView;
    if ((intBuffer[this.blockLength - 1] & 128) !== 0) {
      this.error = "End of input reached before message was fully decoded";
      return -1;
    }
    if (this.valueHexView[0] === 0)
      this.warnings.push("Needlessly long format of SID encoding");
    if (this.blockLength <= 8)
      this.valueDec = utilFromBase(this.valueHexView, 7);
    else {
      this.isHexOnly = true;
      this.warnings.push("Too big SID for decoding, hex only");
    }
    return inputOffset + this.blockLength;
  }
  set valueBigInt(value) {
    assertBigInt();
    let bits = BigInt(value).toString(2);
    while (bits.length % 7) {
      bits = "0" + bits;
    }
    const bytes = new Uint8Array(bits.length / 7);
    for (let i = 0;i < bytes.length; i++) {
      bytes[i] = parseInt(bits.slice(i * 7, i * 7 + 7), 2) + (i + 1 < bytes.length ? 128 : 0);
    }
    this.fromBER(bytes.buffer, 0, bytes.length);
  }
  toBER(sizeOnly) {
    if (this.isHexOnly) {
      if (sizeOnly)
        return new ArrayBuffer(this.valueHexView.byteLength);
      const curView = this.valueHexView;
      const retView2 = new Uint8Array(this.blockLength);
      for (let i = 0;i < this.blockLength - 1; i++)
        retView2[i] = curView[i] | 128;
      retView2[this.blockLength - 1] = curView[this.blockLength - 1];
      return retView2.buffer;
    }
    const encodedBuf = utilToBase(this.valueDec, 7);
    if (encodedBuf.byteLength === 0) {
      this.error = "Error during encoding SID value";
      return EMPTY_BUFFER;
    }
    const retView = new Uint8Array(encodedBuf.byteLength);
    if (!sizeOnly) {
      const encodedView = new Uint8Array(encodedBuf);
      const len = encodedBuf.byteLength - 1;
      for (let i = 0;i < len; i++)
        retView[i] = encodedView[i] | 128;
      retView[len] = encodedView[len];
    }
    return retView;
  }
  toString() {
    let result = "";
    if (this.isHexOnly)
      result = Convert.ToHex(this.valueHexView);
    else {
      if (this.isFirstSid) {
        let sidValue = this.valueDec;
        if (this.valueDec <= 39)
          result = "0.";
        else {
          if (this.valueDec <= 79) {
            result = "1.";
            sidValue -= 40;
          } else {
            result = "2.";
            sidValue -= 80;
          }
        }
        result += sidValue.toString();
      } else
        result = this.valueDec.toString();
    }
    return result;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      valueDec: this.valueDec,
      isFirstSid: this.isFirstSid
    };
  }
}
LocalSidValueBlock.NAME = "sidBlock";

class LocalObjectIdentifierValueBlock extends ValueBlock {
  constructor({ value = EMPTY_STRING, ...parameters } = {}) {
    super(parameters);
    this.value = [];
    if (value) {
      this.fromString(value);
    }
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    let resultOffset = inputOffset;
    while (inputLength > 0) {
      const sidBlock = new LocalSidValueBlock;
      resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);
      if (resultOffset === -1) {
        this.blockLength = 0;
        this.error = sidBlock.error;
        return resultOffset;
      }
      if (this.value.length === 0)
        sidBlock.isFirstSid = true;
      this.blockLength += sidBlock.blockLength;
      inputLength -= sidBlock.blockLength;
      this.value.push(sidBlock);
    }
    return resultOffset;
  }
  toBER(sizeOnly) {
    const retBuffers = [];
    for (let i = 0;i < this.value.length; i++) {
      const valueBuf = this.value[i].toBER(sizeOnly);
      if (valueBuf.byteLength === 0) {
        this.error = this.value[i].error;
        return EMPTY_BUFFER;
      }
      retBuffers.push(valueBuf);
    }
    return concat(retBuffers);
  }
  fromString(string) {
    this.value = [];
    let pos1 = 0;
    let pos2 = 0;
    let sid = "";
    let flag = false;
    do {
      pos2 = string.indexOf(".", pos1);
      if (pos2 === -1)
        sid = string.substring(pos1);
      else
        sid = string.substring(pos1, pos2);
      pos1 = pos2 + 1;
      if (flag) {
        const sidBlock = this.value[0];
        let plus = 0;
        switch (sidBlock.valueDec) {
          case 0:
            break;
          case 1:
            plus = 40;
            break;
          case 2:
            plus = 80;
            break;
          default:
            this.value = [];
            return;
        }
        const parsedSID = parseInt(sid, 10);
        if (isNaN(parsedSID))
          return;
        sidBlock.valueDec = parsedSID + plus;
        flag = false;
      } else {
        const sidBlock = new LocalSidValueBlock;
        if (sid > Number.MAX_SAFE_INTEGER) {
          assertBigInt();
          const sidValue = BigInt(sid);
          sidBlock.valueBigInt = sidValue;
        } else {
          sidBlock.valueDec = parseInt(sid, 10);
          if (isNaN(sidBlock.valueDec))
            return;
        }
        if (!this.value.length) {
          sidBlock.isFirstSid = true;
          flag = true;
        }
        this.value.push(sidBlock);
      }
    } while (pos2 !== -1);
  }
  toString() {
    let result = "";
    let isHexOnly = false;
    for (let i = 0;i < this.value.length; i++) {
      isHexOnly = this.value[i].isHexOnly;
      let sidStr = this.value[i].toString();
      if (i !== 0)
        result = `${result}.`;
      if (isHexOnly) {
        sidStr = `{${sidStr}}`;
        if (this.value[i].isFirstSid)
          result = `2.{${sidStr} - 80}`;
        else
          result += sidStr;
      } else
        result += sidStr;
    }
    return result;
  }
  toJSON() {
    const object = {
      ...super.toJSON(),
      value: this.toString(),
      sidArray: []
    };
    for (let i = 0;i < this.value.length; i++) {
      object.sidArray.push(this.value[i].toJSON());
    }
    return object;
  }
}
LocalObjectIdentifierValueBlock.NAME = "ObjectIdentifierValueBlock";
var _a$m;

class ObjectIdentifier extends BaseBlock {
  constructor(parameters = {}) {
    super(parameters, LocalObjectIdentifierValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 6;
  }
  getValue() {
    return this.valueBlock.toString();
  }
  setValue(value) {
    this.valueBlock.fromString(value);
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.valueBlock.toString() || "empty"}`;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      value: this.getValue()
    };
  }
}
_a$m = ObjectIdentifier;
(() => {
  typeStore.ObjectIdentifier = _a$m;
})();
ObjectIdentifier.NAME = "OBJECT IDENTIFIER";

class LocalRelativeSidValueBlock extends HexBlock(LocalBaseBlock) {
  constructor({ valueDec = 0, ...parameters } = {}) {
    super(parameters);
    this.valueDec = valueDec;
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    if (inputLength === 0)
      return inputOffset;
    const inputView = BufferSourceConverter.toUint8Array(inputBuffer);
    if (!checkBufferParams(this, inputView, inputOffset, inputLength))
      return -1;
    const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
    this.valueHexView = new Uint8Array(inputLength);
    for (let i = 0;i < inputLength; i++) {
      this.valueHexView[i] = intBuffer[i] & 127;
      this.blockLength++;
      if ((intBuffer[i] & 128) === 0)
        break;
    }
    const tempView = new Uint8Array(this.blockLength);
    for (let i = 0;i < this.blockLength; i++)
      tempView[i] = this.valueHexView[i];
    this.valueHexView = tempView;
    if ((intBuffer[this.blockLength - 1] & 128) !== 0) {
      this.error = "End of input reached before message was fully decoded";
      return -1;
    }
    if (this.valueHexView[0] === 0)
      this.warnings.push("Needlessly long format of SID encoding");
    if (this.blockLength <= 8)
      this.valueDec = utilFromBase(this.valueHexView, 7);
    else {
      this.isHexOnly = true;
      this.warnings.push("Too big SID for decoding, hex only");
    }
    return inputOffset + this.blockLength;
  }
  toBER(sizeOnly) {
    if (this.isHexOnly) {
      if (sizeOnly)
        return new ArrayBuffer(this.valueHexView.byteLength);
      const curView = this.valueHexView;
      const retView2 = new Uint8Array(this.blockLength);
      for (let i = 0;i < this.blockLength - 1; i++)
        retView2[i] = curView[i] | 128;
      retView2[this.blockLength - 1] = curView[this.blockLength - 1];
      return retView2.buffer;
    }
    const encodedBuf = utilToBase(this.valueDec, 7);
    if (encodedBuf.byteLength === 0) {
      this.error = "Error during encoding SID value";
      return EMPTY_BUFFER;
    }
    const retView = new Uint8Array(encodedBuf.byteLength);
    if (!sizeOnly) {
      const encodedView = new Uint8Array(encodedBuf);
      const len = encodedBuf.byteLength - 1;
      for (let i = 0;i < len; i++)
        retView[i] = encodedView[i] | 128;
      retView[len] = encodedView[len];
    }
    return retView.buffer;
  }
  toString() {
    let result = "";
    if (this.isHexOnly)
      result = Convert.ToHex(this.valueHexView);
    else {
      result = this.valueDec.toString();
    }
    return result;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      valueDec: this.valueDec
    };
  }
}
LocalRelativeSidValueBlock.NAME = "relativeSidBlock";

class LocalRelativeObjectIdentifierValueBlock extends ValueBlock {
  constructor({ value = EMPTY_STRING, ...parameters } = {}) {
    super(parameters);
    this.value = [];
    if (value) {
      this.fromString(value);
    }
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    let resultOffset = inputOffset;
    while (inputLength > 0) {
      const sidBlock = new LocalRelativeSidValueBlock;
      resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);
      if (resultOffset === -1) {
        this.blockLength = 0;
        this.error = sidBlock.error;
        return resultOffset;
      }
      this.blockLength += sidBlock.blockLength;
      inputLength -= sidBlock.blockLength;
      this.value.push(sidBlock);
    }
    return resultOffset;
  }
  toBER(sizeOnly, writer) {
    const retBuffers = [];
    for (let i = 0;i < this.value.length; i++) {
      const valueBuf = this.value[i].toBER(sizeOnly);
      if (valueBuf.byteLength === 0) {
        this.error = this.value[i].error;
        return EMPTY_BUFFER;
      }
      retBuffers.push(valueBuf);
    }
    return concat(retBuffers);
  }
  fromString(string) {
    this.value = [];
    let pos1 = 0;
    let pos2 = 0;
    let sid = "";
    do {
      pos2 = string.indexOf(".", pos1);
      if (pos2 === -1)
        sid = string.substring(pos1);
      else
        sid = string.substring(pos1, pos2);
      pos1 = pos2 + 1;
      const sidBlock = new LocalRelativeSidValueBlock;
      sidBlock.valueDec = parseInt(sid, 10);
      if (isNaN(sidBlock.valueDec))
        return true;
      this.value.push(sidBlock);
    } while (pos2 !== -1);
    return true;
  }
  toString() {
    let result = "";
    let isHexOnly = false;
    for (let i = 0;i < this.value.length; i++) {
      isHexOnly = this.value[i].isHexOnly;
      let sidStr = this.value[i].toString();
      if (i !== 0)
        result = `${result}.`;
      if (isHexOnly) {
        sidStr = `{${sidStr}}`;
        result += sidStr;
      } else
        result += sidStr;
    }
    return result;
  }
  toJSON() {
    const object = {
      ...super.toJSON(),
      value: this.toString(),
      sidArray: []
    };
    for (let i = 0;i < this.value.length; i++)
      object.sidArray.push(this.value[i].toJSON());
    return object;
  }
}
LocalRelativeObjectIdentifierValueBlock.NAME = "RelativeObjectIdentifierValueBlock";
var _a$l;

class RelativeObjectIdentifier extends BaseBlock {
  constructor(parameters = {}) {
    super(parameters, LocalRelativeObjectIdentifierValueBlock);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 13;
  }
  getValue() {
    return this.valueBlock.toString();
  }
  setValue(value) {
    this.valueBlock.fromString(value);
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.valueBlock.toString() || "empty"}`;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      value: this.getValue()
    };
  }
}
_a$l = RelativeObjectIdentifier;
(() => {
  typeStore.RelativeObjectIdentifier = _a$l;
})();
RelativeObjectIdentifier.NAME = "RelativeObjectIdentifier";
var _a$k;

class Sequence extends Constructed {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 16;
  }
}
_a$k = Sequence;
(() => {
  typeStore.Sequence = _a$k;
})();
Sequence.NAME = "SEQUENCE";
var _a$j;

class Set2 extends Constructed {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 17;
  }
}
_a$j = Set2;
(() => {
  typeStore.Set = _a$j;
})();
Set2.NAME = "SET";

class LocalStringValueBlock extends HexBlock(ValueBlock) {
  constructor({ ...parameters } = {}) {
    super(parameters);
    this.isHexOnly = true;
    this.value = EMPTY_STRING;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      value: this.value
    };
  }
}
LocalStringValueBlock.NAME = "StringValueBlock";

class LocalSimpleStringValueBlock extends LocalStringValueBlock {
}
LocalSimpleStringValueBlock.NAME = "SimpleStringValueBlock";

class LocalSimpleStringBlock extends BaseStringBlock {
  constructor({ ...parameters } = {}) {
    super(parameters, LocalSimpleStringValueBlock);
  }
  fromBuffer(inputBuffer) {
    this.valueBlock.value = String.fromCharCode.apply(null, BufferSourceConverter.toUint8Array(inputBuffer));
  }
  fromString(inputString) {
    const strLen = inputString.length;
    const view = this.valueBlock.valueHexView = new Uint8Array(strLen);
    for (let i = 0;i < strLen; i++)
      view[i] = inputString.charCodeAt(i);
    this.valueBlock.value = inputString;
  }
}
LocalSimpleStringBlock.NAME = "SIMPLE STRING";

class LocalUtf8StringValueBlock extends LocalSimpleStringBlock {
  fromBuffer(inputBuffer) {
    this.valueBlock.valueHexView = BufferSourceConverter.toUint8Array(inputBuffer);
    try {
      this.valueBlock.value = Convert.ToUtf8String(inputBuffer);
    } catch (ex) {
      this.warnings.push(`Error during "decodeURIComponent": ${ex}, using raw string`);
      this.valueBlock.value = Convert.ToBinary(inputBuffer);
    }
  }
  fromString(inputString) {
    this.valueBlock.valueHexView = new Uint8Array(Convert.FromUtf8String(inputString));
    this.valueBlock.value = inputString;
  }
}
LocalUtf8StringValueBlock.NAME = "Utf8StringValueBlock";
var _a$i;

class Utf8String extends LocalUtf8StringValueBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 12;
  }
}
_a$i = Utf8String;
(() => {
  typeStore.Utf8String = _a$i;
})();
Utf8String.NAME = "UTF8String";

class LocalBmpStringValueBlock extends LocalSimpleStringBlock {
  fromBuffer(inputBuffer) {
    this.valueBlock.value = Convert.ToUtf16String(inputBuffer);
    this.valueBlock.valueHexView = BufferSourceConverter.toUint8Array(inputBuffer);
  }
  fromString(inputString) {
    this.valueBlock.value = inputString;
    this.valueBlock.valueHexView = new Uint8Array(Convert.FromUtf16String(inputString));
  }
}
LocalBmpStringValueBlock.NAME = "BmpStringValueBlock";
var _a$h;

class BmpString extends LocalBmpStringValueBlock {
  constructor({ ...parameters } = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 30;
  }
}
_a$h = BmpString;
(() => {
  typeStore.BmpString = _a$h;
})();
BmpString.NAME = "BMPString";

class LocalUniversalStringValueBlock extends LocalSimpleStringBlock {
  fromBuffer(inputBuffer) {
    const copyBuffer = ArrayBuffer.isView(inputBuffer) ? inputBuffer.slice().buffer : inputBuffer.slice(0);
    const valueView = new Uint8Array(copyBuffer);
    for (let i = 0;i < valueView.length; i += 4) {
      valueView[i] = valueView[i + 3];
      valueView[i + 1] = valueView[i + 2];
      valueView[i + 2] = 0;
      valueView[i + 3] = 0;
    }
    this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(copyBuffer));
  }
  fromString(inputString) {
    const strLength = inputString.length;
    const valueHexView = this.valueBlock.valueHexView = new Uint8Array(strLength * 4);
    for (let i = 0;i < strLength; i++) {
      const codeBuf = utilToBase(inputString.charCodeAt(i), 8);
      const codeView = new Uint8Array(codeBuf);
      if (codeView.length > 4)
        continue;
      const dif = 4 - codeView.length;
      for (let j = codeView.length - 1;j >= 0; j--)
        valueHexView[i * 4 + j + dif] = codeView[j];
    }
    this.valueBlock.value = inputString;
  }
}
LocalUniversalStringValueBlock.NAME = "UniversalStringValueBlock";
var _a$g;

class UniversalString extends LocalUniversalStringValueBlock {
  constructor({ ...parameters } = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 28;
  }
}
_a$g = UniversalString;
(() => {
  typeStore.UniversalString = _a$g;
})();
UniversalString.NAME = "UniversalString";
var _a$f;

class NumericString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 18;
  }
}
_a$f = NumericString;
(() => {
  typeStore.NumericString = _a$f;
})();
NumericString.NAME = "NumericString";
var _a$e;

class PrintableString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 19;
  }
}
_a$e = PrintableString;
(() => {
  typeStore.PrintableString = _a$e;
})();
PrintableString.NAME = "PrintableString";
var _a$d;

class TeletexString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 20;
  }
}
_a$d = TeletexString;
(() => {
  typeStore.TeletexString = _a$d;
})();
TeletexString.NAME = "TeletexString";
var _a$c;

class VideotexString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 21;
  }
}
_a$c = VideotexString;
(() => {
  typeStore.VideotexString = _a$c;
})();
VideotexString.NAME = "VideotexString";
var _a$b;

class IA5String extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 22;
  }
}
_a$b = IA5String;
(() => {
  typeStore.IA5String = _a$b;
})();
IA5String.NAME = "IA5String";
var _a$a;

class GraphicString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 25;
  }
}
_a$a = GraphicString;
(() => {
  typeStore.GraphicString = _a$a;
})();
GraphicString.NAME = "GraphicString";
var _a$9;

class VisibleString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 26;
  }
}
_a$9 = VisibleString;
(() => {
  typeStore.VisibleString = _a$9;
})();
VisibleString.NAME = "VisibleString";
var _a$8;

class GeneralString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 27;
  }
}
_a$8 = GeneralString;
(() => {
  typeStore.GeneralString = _a$8;
})();
GeneralString.NAME = "GeneralString";
var _a$7;

class CharacterString extends LocalSimpleStringBlock {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 29;
  }
}
_a$7 = CharacterString;
(() => {
  typeStore.CharacterString = _a$7;
})();
CharacterString.NAME = "CharacterString";
var _a$6;

class UTCTime extends VisibleString {
  constructor({ value, valueDate, ...parameters } = {}) {
    super(parameters);
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    if (value) {
      this.fromString(value);
      this.valueBlock.valueHexView = new Uint8Array(value.length);
      for (let i = 0;i < value.length; i++)
        this.valueBlock.valueHexView[i] = value.charCodeAt(i);
    }
    if (valueDate) {
      this.fromDate(valueDate);
      this.valueBlock.valueHexView = new Uint8Array(this.toBuffer());
    }
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 23;
  }
  fromBuffer(inputBuffer) {
    this.fromString(String.fromCharCode.apply(null, BufferSourceConverter.toUint8Array(inputBuffer)));
  }
  toBuffer() {
    const str = this.toString();
    const buffer = new ArrayBuffer(str.length);
    const view = new Uint8Array(buffer);
    for (let i = 0;i < str.length; i++)
      view[i] = str.charCodeAt(i);
    return buffer;
  }
  fromDate(inputDate) {
    this.year = inputDate.getUTCFullYear();
    this.month = inputDate.getUTCMonth() + 1;
    this.day = inputDate.getUTCDate();
    this.hour = inputDate.getUTCHours();
    this.minute = inputDate.getUTCMinutes();
    this.second = inputDate.getUTCSeconds();
  }
  toDate() {
    return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second));
  }
  fromString(inputString) {
    const parser = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/ig;
    const parserArray = parser.exec(inputString);
    if (parserArray === null) {
      this.error = "Wrong input string for conversion";
      return;
    }
    const year = parseInt(parserArray[1], 10);
    if (year >= 50)
      this.year = 1900 + year;
    else
      this.year = 2000 + year;
    this.month = parseInt(parserArray[2], 10);
    this.day = parseInt(parserArray[3], 10);
    this.hour = parseInt(parserArray[4], 10);
    this.minute = parseInt(parserArray[5], 10);
    this.second = parseInt(parserArray[6], 10);
  }
  toString(encoding = "iso") {
    if (encoding === "iso") {
      const outputArray = new Array(7);
      outputArray[0] = padNumber(this.year < 2000 ? this.year - 1900 : this.year - 2000, 2);
      outputArray[1] = padNumber(this.month, 2);
      outputArray[2] = padNumber(this.day, 2);
      outputArray[3] = padNumber(this.hour, 2);
      outputArray[4] = padNumber(this.minute, 2);
      outputArray[5] = padNumber(this.second, 2);
      outputArray[6] = "Z";
      return outputArray.join("");
    }
    return super.toString(encoding);
  }
  onAsciiEncoding() {
    return `${this.constructor.NAME} : ${this.toDate().toISOString()}`;
  }
  toJSON() {
    return {
      ...super.toJSON(),
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second
    };
  }
}
_a$6 = UTCTime;
(() => {
  typeStore.UTCTime = _a$6;
})();
UTCTime.NAME = "UTCTime";
var _a$5;

class GeneralizedTime extends UTCTime {
  constructor(parameters = {}) {
    var _b;
    super(parameters);
    (_b = this.millisecond) !== null && _b !== undefined || (this.millisecond = 0);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 24;
  }
  fromDate(inputDate) {
    super.fromDate(inputDate);
    this.millisecond = inputDate.getUTCMilliseconds();
  }
  toDate() {
    return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond));
  }
  fromString(inputString) {
    let isUTC = false;
    let timeString = "";
    let dateTimeString = "";
    let fractionPart = 0;
    let parser;
    let hourDifference = 0;
    let minuteDifference = 0;
    if (inputString[inputString.length - 1] === "Z") {
      timeString = inputString.substring(0, inputString.length - 1);
      isUTC = true;
    } else {
      const number = new Number(inputString[inputString.length - 1]);
      if (isNaN(number.valueOf()))
        throw new Error("Wrong input string for conversion");
      timeString = inputString;
    }
    if (isUTC) {
      if (timeString.indexOf("+") !== -1)
        throw new Error("Wrong input string for conversion");
      if (timeString.indexOf("-") !== -1)
        throw new Error("Wrong input string for conversion");
    } else {
      let multiplier = 1;
      let differencePosition = timeString.indexOf("+");
      let differenceString = "";
      if (differencePosition === -1) {
        differencePosition = timeString.indexOf("-");
        multiplier = -1;
      }
      if (differencePosition !== -1) {
        differenceString = timeString.substring(differencePosition + 1);
        timeString = timeString.substring(0, differencePosition);
        if (differenceString.length !== 2 && differenceString.length !== 4)
          throw new Error("Wrong input string for conversion");
        let number = parseInt(differenceString.substring(0, 2), 10);
        if (isNaN(number.valueOf()))
          throw new Error("Wrong input string for conversion");
        hourDifference = multiplier * number;
        if (differenceString.length === 4) {
          number = parseInt(differenceString.substring(2, 4), 10);
          if (isNaN(number.valueOf()))
            throw new Error("Wrong input string for conversion");
          minuteDifference = multiplier * number;
        }
      }
    }
    let fractionPointPosition = timeString.indexOf(".");
    if (fractionPointPosition === -1)
      fractionPointPosition = timeString.indexOf(",");
    if (fractionPointPosition !== -1) {
      const fractionPartCheck = new Number(`0${timeString.substring(fractionPointPosition)}`);
      if (isNaN(fractionPartCheck.valueOf()))
        throw new Error("Wrong input string for conversion");
      fractionPart = fractionPartCheck.valueOf();
      dateTimeString = timeString.substring(0, fractionPointPosition);
    } else
      dateTimeString = timeString;
    switch (true) {
      case dateTimeString.length === 8:
        parser = /(\d{4})(\d{2})(\d{2})/ig;
        if (fractionPointPosition !== -1)
          throw new Error("Wrong input string for conversion");
        break;
      case dateTimeString.length === 10:
        parser = /(\d{4})(\d{2})(\d{2})(\d{2})/ig;
        if (fractionPointPosition !== -1) {
          let fractionResult = 60 * fractionPart;
          this.minute = Math.floor(fractionResult);
          fractionResult = 60 * (fractionResult - this.minute);
          this.second = Math.floor(fractionResult);
          fractionResult = 1000 * (fractionResult - this.second);
          this.millisecond = Math.floor(fractionResult);
        }
        break;
      case dateTimeString.length === 12:
        parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/ig;
        if (fractionPointPosition !== -1) {
          let fractionResult = 60 * fractionPart;
          this.second = Math.floor(fractionResult);
          fractionResult = 1000 * (fractionResult - this.second);
          this.millisecond = Math.floor(fractionResult);
        }
        break;
      case dateTimeString.length === 14:
        parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/ig;
        if (fractionPointPosition !== -1) {
          const fractionResult = 1000 * fractionPart;
          this.millisecond = Math.floor(fractionResult);
        }
        break;
      default:
        throw new Error("Wrong input string for conversion");
    }
    const parserArray = parser.exec(dateTimeString);
    if (parserArray === null)
      throw new Error("Wrong input string for conversion");
    for (let j = 1;j < parserArray.length; j++) {
      switch (j) {
        case 1:
          this.year = parseInt(parserArray[j], 10);
          break;
        case 2:
          this.month = parseInt(parserArray[j], 10);
          break;
        case 3:
          this.day = parseInt(parserArray[j], 10);
          break;
        case 4:
          this.hour = parseInt(parserArray[j], 10) + hourDifference;
          break;
        case 5:
          this.minute = parseInt(parserArray[j], 10) + minuteDifference;
          break;
        case 6:
          this.second = parseInt(parserArray[j], 10);
          break;
        default:
          throw new Error("Wrong input string for conversion");
      }
    }
    if (isUTC === false) {
      const tempDate = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
      this.year = tempDate.getUTCFullYear();
      this.month = tempDate.getUTCMonth();
      this.day = tempDate.getUTCDay();
      this.hour = tempDate.getUTCHours();
      this.minute = tempDate.getUTCMinutes();
      this.second = tempDate.getUTCSeconds();
      this.millisecond = tempDate.getUTCMilliseconds();
    }
  }
  toString(encoding = "iso") {
    if (encoding === "iso") {
      const outputArray = [];
      outputArray.push(padNumber(this.year, 4));
      outputArray.push(padNumber(this.month, 2));
      outputArray.push(padNumber(this.day, 2));
      outputArray.push(padNumber(this.hour, 2));
      outputArray.push(padNumber(this.minute, 2));
      outputArray.push(padNumber(this.second, 2));
      if (this.millisecond !== 0) {
        outputArray.push(".");
        outputArray.push(padNumber(this.millisecond, 3));
      }
      outputArray.push("Z");
      return outputArray.join("");
    }
    return super.toString(encoding);
  }
  toJSON() {
    return {
      ...super.toJSON(),
      millisecond: this.millisecond
    };
  }
}
_a$5 = GeneralizedTime;
(() => {
  typeStore.GeneralizedTime = _a$5;
})();
GeneralizedTime.NAME = "GeneralizedTime";
var _a$4;

class DATE extends Utf8String {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 31;
  }
}
_a$4 = DATE;
(() => {
  typeStore.DATE = _a$4;
})();
DATE.NAME = "DATE";
var _a$3;

class TimeOfDay extends Utf8String {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 32;
  }
}
_a$3 = TimeOfDay;
(() => {
  typeStore.TimeOfDay = _a$3;
})();
TimeOfDay.NAME = "TimeOfDay";
var _a$2;

class DateTime extends Utf8String {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 33;
  }
}
_a$2 = DateTime;
(() => {
  typeStore.DateTime = _a$2;
})();
DateTime.NAME = "DateTime";
var _a$1;

class Duration extends Utf8String {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 34;
  }
}
_a$1 = Duration;
(() => {
  typeStore.Duration = _a$1;
})();
Duration.NAME = "Duration";
var _a;

class TIME extends Utf8String {
  constructor(parameters = {}) {
    super(parameters);
    this.idBlock.tagClass = 1;
    this.idBlock.tagNumber = 14;
  }
}
_a = TIME;
(() => {
  typeStore.TIME = _a;
})();
TIME.NAME = "TIME";

class Any {
  constructor({ name = EMPTY_STRING, optional = false } = {}) {
    this.name = name;
    this.optional = optional;
  }
}

class Choice extends Any {
  constructor({ value = [], ...parameters } = {}) {
    super(parameters);
    this.value = value;
  }
}

class Repeated extends Any {
  constructor({ value = new Any, local = false, ...parameters } = {}) {
    super(parameters);
    this.value = value;
    this.local = local;
  }
}

class RawData {
  constructor({ data = EMPTY_VIEW } = {}) {
    this.dataView = BufferSourceConverter.toUint8Array(data);
  }
  get data() {
    return this.dataView.slice().buffer;
  }
  set data(value) {
    this.dataView = BufferSourceConverter.toUint8Array(value);
  }
  fromBER(inputBuffer, inputOffset, inputLength) {
    const endLength = inputOffset + inputLength;
    this.dataView = BufferSourceConverter.toUint8Array(inputBuffer).subarray(inputOffset, endLength);
    return endLength;
  }
  toBER(sizeOnly) {
    return this.dataView.slice().buffer;
  }
}
function compareSchema(root, inputData, inputSchema) {
  if (inputSchema instanceof Choice) {
    for (let j = 0;j < inputSchema.value.length; j++) {
      const result = compareSchema(root, inputData, inputSchema.value[j]);
      if (result.verified) {
        return {
          verified: true,
          result: root
        };
      }
    }
    {
      const _result = {
        verified: false,
        result: {
          error: "Wrong values for Choice type"
        }
      };
      if (inputSchema.hasOwnProperty(NAME))
        _result.name = inputSchema.name;
      return _result;
    }
  }
  if (inputSchema instanceof Any) {
    if (inputSchema.hasOwnProperty(NAME))
      root[inputSchema.name] = inputData;
    return {
      verified: true,
      result: root
    };
  }
  if (root instanceof Object === false) {
    return {
      verified: false,
      result: { error: "Wrong root object" }
    };
  }
  if (inputData instanceof Object === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 data" }
    };
  }
  if (inputSchema instanceof Object === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (ID_BLOCK in inputSchema === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (FROM_BER in inputSchema.idBlock === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (TO_BER in inputSchema.idBlock === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  const encodedId = inputSchema.idBlock.toBER(false);
  if (encodedId.byteLength === 0) {
    return {
      verified: false,
      result: { error: "Error encoding idBlock for ASN.1 schema" }
    };
  }
  const decodedOffset = inputSchema.idBlock.fromBER(encodedId, 0, encodedId.byteLength);
  if (decodedOffset === -1) {
    return {
      verified: false,
      result: { error: "Error decoding idBlock for ASN.1 schema" }
    };
  }
  if (inputSchema.idBlock.hasOwnProperty(TAG_CLASS) === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (inputSchema.idBlock.tagClass !== inputData.idBlock.tagClass) {
    return {
      verified: false,
      result: root
    };
  }
  if (inputSchema.idBlock.hasOwnProperty(TAG_NUMBER) === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (inputSchema.idBlock.tagNumber !== inputData.idBlock.tagNumber) {
    return {
      verified: false,
      result: root
    };
  }
  if (inputSchema.idBlock.hasOwnProperty(IS_CONSTRUCTED) === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (inputSchema.idBlock.isConstructed !== inputData.idBlock.isConstructed) {
    return {
      verified: false,
      result: root
    };
  }
  if (!(IS_HEX_ONLY in inputSchema.idBlock)) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema" }
    };
  }
  if (inputSchema.idBlock.isHexOnly !== inputData.idBlock.isHexOnly) {
    return {
      verified: false,
      result: root
    };
  }
  if (inputSchema.idBlock.isHexOnly) {
    if (VALUE_HEX_VIEW in inputSchema.idBlock === false) {
      return {
        verified: false,
        result: { error: "Wrong ASN.1 schema" }
      };
    }
    const schemaView = inputSchema.idBlock.valueHexView;
    const asn1View = inputData.idBlock.valueHexView;
    if (schemaView.length !== asn1View.length) {
      return {
        verified: false,
        result: root
      };
    }
    for (let i = 0;i < schemaView.length; i++) {
      if (schemaView[i] !== asn1View[1]) {
        return {
          verified: false,
          result: root
        };
      }
    }
  }
  if (inputSchema.name) {
    inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
    if (inputSchema.name)
      root[inputSchema.name] = inputData;
  }
  if (inputSchema instanceof typeStore.Constructed) {
    let admission = 0;
    let result = {
      verified: false,
      result: {
        error: "Unknown error"
      }
    };
    let maxLength = inputSchema.valueBlock.value.length;
    if (maxLength > 0) {
      if (inputSchema.valueBlock.value[0] instanceof Repeated) {
        maxLength = inputData.valueBlock.value.length;
      }
    }
    if (maxLength === 0) {
      return {
        verified: true,
        result: root
      };
    }
    if (inputData.valueBlock.value.length === 0 && inputSchema.valueBlock.value.length !== 0) {
      let _optional = true;
      for (let i = 0;i < inputSchema.valueBlock.value.length; i++)
        _optional = _optional && (inputSchema.valueBlock.value[i].optional || false);
      if (_optional) {
        return {
          verified: true,
          result: root
        };
      }
      if (inputSchema.name) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
        if (inputSchema.name)
          delete root[inputSchema.name];
      }
      root.error = "Inconsistent object length";
      return {
        verified: false,
        result: root
      };
    }
    for (let i = 0;i < maxLength; i++) {
      if (i - admission >= inputData.valueBlock.value.length) {
        if (inputSchema.valueBlock.value[i].optional === false) {
          const _result = {
            verified: false,
            result: root
          };
          root.error = "Inconsistent length between ASN.1 data and schema";
          if (inputSchema.name) {
            inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
            if (inputSchema.name) {
              delete root[inputSchema.name];
              _result.name = inputSchema.name;
            }
          }
          return _result;
        }
      } else {
        if (inputSchema.valueBlock.value[0] instanceof Repeated) {
          result = compareSchema(root, inputData.valueBlock.value[i], inputSchema.valueBlock.value[0].value);
          if (result.verified === false) {
            if (inputSchema.valueBlock.value[0].optional)
              admission++;
            else {
              if (inputSchema.name) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                if (inputSchema.name)
                  delete root[inputSchema.name];
              }
              return result;
            }
          }
          if (NAME in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].name.length > 0) {
            let arrayRoot = {};
            if (LOCAL in inputSchema.valueBlock.value[0] && inputSchema.valueBlock.value[0].local)
              arrayRoot = inputData;
            else
              arrayRoot = root;
            if (typeof arrayRoot[inputSchema.valueBlock.value[0].name] === "undefined")
              arrayRoot[inputSchema.valueBlock.value[0].name] = [];
            arrayRoot[inputSchema.valueBlock.value[0].name].push(inputData.valueBlock.value[i]);
          }
        } else {
          result = compareSchema(root, inputData.valueBlock.value[i - admission], inputSchema.valueBlock.value[i]);
          if (result.verified === false) {
            if (inputSchema.valueBlock.value[i].optional)
              admission++;
            else {
              if (inputSchema.name) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                if (inputSchema.name)
                  delete root[inputSchema.name];
              }
              return result;
            }
          }
        }
      }
    }
    if (result.verified === false) {
      const _result = {
        verified: false,
        result: root
      };
      if (inputSchema.name) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
        if (inputSchema.name) {
          delete root[inputSchema.name];
          _result.name = inputSchema.name;
        }
      }
      return _result;
    }
    return {
      verified: true,
      result: root
    };
  }
  if (inputSchema.primitiveSchema && VALUE_HEX_VIEW in inputData.valueBlock) {
    const asn1 = localFromBER(inputData.valueBlock.valueHexView);
    if (asn1.offset === -1) {
      const _result = {
        verified: false,
        result: asn1.result
      };
      if (inputSchema.name) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
        if (inputSchema.name) {
          delete root[inputSchema.name];
          _result.name = inputSchema.name;
        }
      }
      return _result;
    }
    return compareSchema(root, asn1.result, inputSchema.primitiveSchema);
  }
  return {
    verified: true,
    result: root
  };
}
function verifySchema(inputBuffer, inputSchema) {
  if (inputSchema instanceof Object === false) {
    return {
      verified: false,
      result: { error: "Wrong ASN.1 schema type" }
    };
  }
  const asn1 = localFromBER(BufferSourceConverter.toUint8Array(inputBuffer));
  if (asn1.offset === -1) {
    return {
      verified: false,
      result: asn1.result
    };
  }
  return compareSchema(asn1.result, asn1.result, inputSchema);
}

// node_modules/@peculiar/asn1-schema/build/es2015/enums.js
var AsnTypeTypes;
(function(AsnTypeTypes2) {
  AsnTypeTypes2[AsnTypeTypes2["Sequence"] = 0] = "Sequence";
  AsnTypeTypes2[AsnTypeTypes2["Set"] = 1] = "Set";
  AsnTypeTypes2[AsnTypeTypes2["Choice"] = 2] = "Choice";
})(AsnTypeTypes || (AsnTypeTypes = {}));
var AsnPropTypes;
(function(AsnPropTypes2) {
  AsnPropTypes2[AsnPropTypes2["Any"] = 1] = "Any";
  AsnPropTypes2[AsnPropTypes2["Boolean"] = 2] = "Boolean";
  AsnPropTypes2[AsnPropTypes2["OctetString"] = 3] = "OctetString";
  AsnPropTypes2[AsnPropTypes2["BitString"] = 4] = "BitString";
  AsnPropTypes2[AsnPropTypes2["Integer"] = 5] = "Integer";
  AsnPropTypes2[AsnPropTypes2["Enumerated"] = 6] = "Enumerated";
  AsnPropTypes2[AsnPropTypes2["ObjectIdentifier"] = 7] = "ObjectIdentifier";
  AsnPropTypes2[AsnPropTypes2["Utf8String"] = 8] = "Utf8String";
  AsnPropTypes2[AsnPropTypes2["BmpString"] = 9] = "BmpString";
  AsnPropTypes2[AsnPropTypes2["UniversalString"] = 10] = "UniversalString";
  AsnPropTypes2[AsnPropTypes2["NumericString"] = 11] = "NumericString";
  AsnPropTypes2[AsnPropTypes2["PrintableString"] = 12] = "PrintableString";
  AsnPropTypes2[AsnPropTypes2["TeletexString"] = 13] = "TeletexString";
  AsnPropTypes2[AsnPropTypes2["VideotexString"] = 14] = "VideotexString";
  AsnPropTypes2[AsnPropTypes2["IA5String"] = 15] = "IA5String";
  AsnPropTypes2[AsnPropTypes2["GraphicString"] = 16] = "GraphicString";
  AsnPropTypes2[AsnPropTypes2["VisibleString"] = 17] = "VisibleString";
  AsnPropTypes2[AsnPropTypes2["GeneralString"] = 18] = "GeneralString";
  AsnPropTypes2[AsnPropTypes2["CharacterString"] = 19] = "CharacterString";
  AsnPropTypes2[AsnPropTypes2["UTCTime"] = 20] = "UTCTime";
  AsnPropTypes2[AsnPropTypes2["GeneralizedTime"] = 21] = "GeneralizedTime";
  AsnPropTypes2[AsnPropTypes2["DATE"] = 22] = "DATE";
  AsnPropTypes2[AsnPropTypes2["TimeOfDay"] = 23] = "TimeOfDay";
  AsnPropTypes2[AsnPropTypes2["DateTime"] = 24] = "DateTime";
  AsnPropTypes2[AsnPropTypes2["Duration"] = 25] = "Duration";
  AsnPropTypes2[AsnPropTypes2["TIME"] = 26] = "TIME";
  AsnPropTypes2[AsnPropTypes2["Null"] = 27] = "Null";
})(AsnPropTypes || (AsnPropTypes = {}));

// node_modules/@peculiar/asn1-schema/build/es2015/types/bit_string.js
class BitString2 {
  constructor(params, unusedBits = 0) {
    this.unusedBits = 0;
    this.value = new ArrayBuffer(0);
    if (params) {
      if (typeof params === "number") {
        this.fromNumber(params);
      } else if (BufferSourceConverter.isBufferSource(params)) {
        this.unusedBits = unusedBits;
        this.value = BufferSourceConverter.toArrayBuffer(params);
      } else {
        throw TypeError("Unsupported type of 'params' argument for BitString");
      }
    }
  }
  fromASN(asn) {
    if (!(asn instanceof BitString)) {
      throw new TypeError("Argument 'asn' is not instance of ASN.1 BitString");
    }
    this.unusedBits = asn.valueBlock.unusedBits;
    this.value = asn.valueBlock.valueHex;
    return this;
  }
  toASN() {
    return new BitString({ unusedBits: this.unusedBits, valueHex: this.value });
  }
  toSchema(name) {
    return new BitString({ name });
  }
  toNumber() {
    let res = "";
    const uintArray = new Uint8Array(this.value);
    for (const octet of uintArray) {
      res += octet.toString(2).padStart(8, "0");
    }
    res = res.split("").reverse().join("");
    if (this.unusedBits) {
      res = res.slice(this.unusedBits).padStart(this.unusedBits, "0");
    }
    return parseInt(res, 2);
  }
  fromNumber(value) {
    let bits = value.toString(2);
    const octetSize = bits.length + 7 >> 3;
    this.unusedBits = (octetSize << 3) - bits.length;
    const octets = new Uint8Array(octetSize);
    bits = bits.padStart(octetSize << 3, "0").split("").reverse().join("");
    let index = 0;
    while (index < octetSize) {
      octets[index] = parseInt(bits.slice(index << 3, (index << 3) + 8), 2);
      index++;
    }
    this.value = octets.buffer;
  }
}
// node_modules/@peculiar/asn1-schema/build/es2015/types/octet_string.js
class OctetString2 {
  get byteLength() {
    return this.buffer.byteLength;
  }
  get byteOffset() {
    return 0;
  }
  constructor(param) {
    if (typeof param === "number") {
      this.buffer = new ArrayBuffer(param);
    } else {
      if (BufferSourceConverter.isBufferSource(param)) {
        this.buffer = BufferSourceConverter.toArrayBuffer(param);
      } else if (Array.isArray(param)) {
        this.buffer = new Uint8Array(param);
      } else {
        this.buffer = new ArrayBuffer(0);
      }
    }
  }
  fromASN(asn) {
    if (!(asn instanceof OctetString)) {
      throw new TypeError("Argument 'asn' is not instance of ASN.1 OctetString");
    }
    this.buffer = asn.valueBlock.valueHex;
    return this;
  }
  toASN() {
    return new OctetString({ valueHex: this.buffer });
  }
  toSchema(name) {
    return new OctetString({ name });
  }
}
// node_modules/@peculiar/asn1-schema/build/es2015/converters.js
var AsnAnyConverter = {
  fromASN: (value) => value instanceof Null ? null : value.valueBeforeDecodeView,
  toASN: (value) => {
    if (value === null) {
      return new Null;
    }
    const schema = fromBER(value);
    if (schema.result.error) {
      throw new Error(schema.result.error);
    }
    return schema.result;
  }
};
var AsnIntegerConverter = {
  fromASN: (value) => value.valueBlock.valueHexView.byteLength >= 4 ? value.valueBlock.toString() : value.valueBlock.valueDec,
  toASN: (value) => new Integer({ value: +value })
};
var AsnEnumeratedConverter = {
  fromASN: (value) => value.valueBlock.valueDec,
  toASN: (value) => new Enumerated({ value })
};
var AsnIntegerArrayBufferConverter = {
  fromASN: (value) => value.valueBlock.valueHexView,
  toASN: (value) => new Integer({ valueHex: value })
};
var AsnBitStringConverter = {
  fromASN: (value) => value.valueBlock.valueHexView,
  toASN: (value) => new BitString({ valueHex: value })
};
var AsnObjectIdentifierConverter = {
  fromASN: (value) => value.valueBlock.toString(),
  toASN: (value) => new ObjectIdentifier({ value })
};
var AsnBooleanConverter = {
  fromASN: (value) => value.valueBlock.value,
  toASN: (value) => new Boolean2({ value })
};
var AsnOctetStringConverter = {
  fromASN: (value) => value.valueBlock.valueHexView,
  toASN: (value) => new OctetString({ valueHex: value })
};
function createStringConverter(Asn1Type) {
  return {
    fromASN: (value) => value.valueBlock.value,
    toASN: (value) => new Asn1Type({ value })
  };
}
var AsnUtf8StringConverter = createStringConverter(Utf8String);
var AsnBmpStringConverter = createStringConverter(BmpString);
var AsnUniversalStringConverter = createStringConverter(UniversalString);
var AsnNumericStringConverter = createStringConverter(NumericString);
var AsnPrintableStringConverter = createStringConverter(PrintableString);
var AsnTeletexStringConverter = createStringConverter(TeletexString);
var AsnVideotexStringConverter = createStringConverter(VideotexString);
var AsnIA5StringConverter = createStringConverter(IA5String);
var AsnGraphicStringConverter = createStringConverter(GraphicString);
var AsnVisibleStringConverter = createStringConverter(VisibleString);
var AsnGeneralStringConverter = createStringConverter(GeneralString);
var AsnCharacterStringConverter = createStringConverter(CharacterString);
var AsnUTCTimeConverter = {
  fromASN: (value) => value.toDate(),
  toASN: (value) => new UTCTime({ valueDate: value })
};
var AsnGeneralizedTimeConverter = {
  fromASN: (value) => value.toDate(),
  toASN: (value) => new GeneralizedTime({ valueDate: value })
};
var AsnNullConverter = {
  fromASN: () => null,
  toASN: () => {
    return new Null;
  }
};
function defaultConverter(type) {
  switch (type) {
    case AsnPropTypes.Any:
      return AsnAnyConverter;
    case AsnPropTypes.BitString:
      return AsnBitStringConverter;
    case AsnPropTypes.BmpString:
      return AsnBmpStringConverter;
    case AsnPropTypes.Boolean:
      return AsnBooleanConverter;
    case AsnPropTypes.CharacterString:
      return AsnCharacterStringConverter;
    case AsnPropTypes.Enumerated:
      return AsnEnumeratedConverter;
    case AsnPropTypes.GeneralString:
      return AsnGeneralStringConverter;
    case AsnPropTypes.GeneralizedTime:
      return AsnGeneralizedTimeConverter;
    case AsnPropTypes.GraphicString:
      return AsnGraphicStringConverter;
    case AsnPropTypes.IA5String:
      return AsnIA5StringConverter;
    case AsnPropTypes.Integer:
      return AsnIntegerConverter;
    case AsnPropTypes.Null:
      return AsnNullConverter;
    case AsnPropTypes.NumericString:
      return AsnNumericStringConverter;
    case AsnPropTypes.ObjectIdentifier:
      return AsnObjectIdentifierConverter;
    case AsnPropTypes.OctetString:
      return AsnOctetStringConverter;
    case AsnPropTypes.PrintableString:
      return AsnPrintableStringConverter;
    case AsnPropTypes.TeletexString:
      return AsnTeletexStringConverter;
    case AsnPropTypes.UTCTime:
      return AsnUTCTimeConverter;
    case AsnPropTypes.UniversalString:
      return AsnUniversalStringConverter;
    case AsnPropTypes.Utf8String:
      return AsnUtf8StringConverter;
    case AsnPropTypes.VideotexString:
      return AsnVideotexStringConverter;
    case AsnPropTypes.VisibleString:
      return AsnVisibleStringConverter;
    default:
      return null;
  }
}
// node_modules/@peculiar/asn1-schema/build/es2015/helper.js
function isConvertible(target) {
  if (typeof target === "function" && target.prototype) {
    if (target.prototype.toASN && target.prototype.fromASN) {
      return true;
    } else {
      return isConvertible(target.prototype);
    }
  } else {
    return !!(target && typeof target === "object" && ("toASN" in target) && ("fromASN" in target));
  }
}
function isTypeOfArray(target) {
  var _a2;
  if (target) {
    const proto = Object.getPrototypeOf(target);
    if (((_a2 = proto === null || proto === undefined ? undefined : proto.prototype) === null || _a2 === undefined ? undefined : _a2.constructor) === Array) {
      return true;
    }
    return isTypeOfArray(proto);
  }
  return false;
}
function isArrayEqual(bytes1, bytes2) {
  if (!(bytes1 && bytes2)) {
    return false;
  }
  if (bytes1.byteLength !== bytes2.byteLength) {
    return false;
  }
  const b1 = new Uint8Array(bytes1);
  const b2 = new Uint8Array(bytes2);
  for (let i = 0;i < bytes1.byteLength; i++) {
    if (b1[i] !== b2[i]) {
      return false;
    }
  }
  return true;
}

// node_modules/@peculiar/asn1-schema/build/es2015/schema.js
class AsnSchemaStorage {
  constructor() {
    this.items = new WeakMap;
  }
  has(target) {
    return this.items.has(target);
  }
  get(target, checkSchema = false) {
    const schema = this.items.get(target);
    if (!schema) {
      throw new Error(`Cannot get schema for '${target.prototype.constructor.name}' target`);
    }
    if (checkSchema && !schema.schema) {
      throw new Error(`Schema '${target.prototype.constructor.name}' doesn't contain ASN.1 schema. Call 'AsnSchemaStorage.cache'.`);
    }
    return schema;
  }
  cache(target) {
    const schema = this.get(target);
    if (!schema.schema) {
      schema.schema = this.create(target, true);
    }
  }
  createDefault(target) {
    const schema = {
      type: AsnTypeTypes.Sequence,
      items: {}
    };
    const parentSchema = this.findParentSchema(target);
    if (parentSchema) {
      Object.assign(schema, parentSchema);
      schema.items = Object.assign({}, schema.items, parentSchema.items);
    }
    return schema;
  }
  create(target, useNames) {
    const schema = this.items.get(target) || this.createDefault(target);
    const asn1Value = [];
    for (const key in schema.items) {
      const item = schema.items[key];
      const name = useNames ? key : "";
      let asn1Item;
      if (typeof item.type === "number") {
        const Asn1TypeName = AsnPropTypes[item.type];
        const Asn1Type = exports_index_es[Asn1TypeName];
        if (!Asn1Type) {
          throw new Error(`Cannot get ASN1 class by name '${Asn1TypeName}'`);
        }
        asn1Item = new Asn1Type({ name });
      } else if (isConvertible(item.type)) {
        const instance = new item.type;
        asn1Item = instance.toSchema(name);
      } else if (item.optional) {
        const itemSchema = this.get(item.type);
        if (itemSchema.type === AsnTypeTypes.Choice) {
          asn1Item = new Any({ name });
        } else {
          asn1Item = this.create(item.type, false);
          asn1Item.name = name;
        }
      } else {
        asn1Item = new Any({ name });
      }
      const optional = !!item.optional || item.defaultValue !== undefined;
      if (item.repeated) {
        asn1Item.name = "";
        const Container = item.repeated === "set" ? Set2 : Sequence;
        asn1Item = new Container({
          name: "",
          value: [
            new Repeated({
              name,
              value: asn1Item
            })
          ]
        });
      }
      if (item.context !== null && item.context !== undefined) {
        if (item.implicit) {
          if (typeof item.type === "number" || isConvertible(item.type)) {
            const Container = item.repeated ? Constructed : Primitive;
            asn1Value.push(new Container({
              name,
              optional,
              idBlock: {
                tagClass: 3,
                tagNumber: item.context
              }
            }));
          } else {
            this.cache(item.type);
            const isRepeated = !!item.repeated;
            let value = !isRepeated ? this.get(item.type, true).schema : asn1Item;
            value = "valueBlock" in value ? value.valueBlock.value : value.value;
            asn1Value.push(new Constructed({
              name: !isRepeated ? name : "",
              optional,
              idBlock: {
                tagClass: 3,
                tagNumber: item.context
              },
              value
            }));
          }
        } else {
          asn1Value.push(new Constructed({
            optional,
            idBlock: {
              tagClass: 3,
              tagNumber: item.context
            },
            value: [asn1Item]
          }));
        }
      } else {
        asn1Item.optional = optional;
        asn1Value.push(asn1Item);
      }
    }
    switch (schema.type) {
      case AsnTypeTypes.Sequence:
        return new Sequence({ value: asn1Value, name: "" });
      case AsnTypeTypes.Set:
        return new Set2({ value: asn1Value, name: "" });
      case AsnTypeTypes.Choice:
        return new Choice({ value: asn1Value, name: "" });
      default:
        throw new Error(`Unsupported ASN1 type in use`);
    }
  }
  set(target, schema) {
    this.items.set(target, schema);
    return this;
  }
  findParentSchema(target) {
    const parent = Object.getPrototypeOf(target);
    if (parent) {
      const schema = this.items.get(parent);
      return schema || this.findParentSchema(parent);
    }
    return null;
  }
}

// node_modules/@peculiar/asn1-schema/build/es2015/storage.js
var schemaStorage = new AsnSchemaStorage;

// node_modules/@peculiar/asn1-schema/build/es2015/decorators.js
var AsnType = (options) => (target) => {
  let schema;
  if (!schemaStorage.has(target)) {
    schema = schemaStorage.createDefault(target);
    schemaStorage.set(target, schema);
  } else {
    schema = schemaStorage.get(target);
  }
  Object.assign(schema, options);
};
var AsnProp = (options) => (target, propertyKey) => {
  let schema;
  if (!schemaStorage.has(target.constructor)) {
    schema = schemaStorage.createDefault(target.constructor);
    schemaStorage.set(target.constructor, schema);
  } else {
    schema = schemaStorage.get(target.constructor);
  }
  const copyOptions = Object.assign({}, options);
  if (typeof copyOptions.type === "number" && !copyOptions.converter) {
    const defaultConverter2 = defaultConverter(options.type);
    if (!defaultConverter2) {
      throw new Error(`Cannot get default converter for property '${propertyKey}' of ${target.constructor.name}`);
    }
    copyOptions.converter = defaultConverter2;
  }
  schema.items[propertyKey] = copyOptions;
};
// node_modules/@peculiar/asn1-schema/build/es2015/errors/schema_validation.js
class AsnSchemaValidationError extends Error {
  constructor() {
    super(...arguments);
    this.schemas = [];
  }
}
// node_modules/@peculiar/asn1-schema/build/es2015/parser.js
class AsnParser {
  static parse(data, target) {
    const asn1Parsed = fromBER(data);
    if (asn1Parsed.result.error) {
      throw new Error(asn1Parsed.result.error);
    }
    const res = this.fromASN(asn1Parsed.result, target);
    return res;
  }
  static fromASN(asn1Schema, target) {
    var _a2;
    try {
      if (isConvertible(target)) {
        const value = new target;
        return value.fromASN(asn1Schema);
      }
      const schema = schemaStorage.get(target);
      schemaStorage.cache(target);
      let targetSchema = schema.schema;
      if (asn1Schema.constructor === Constructed && schema.type !== AsnTypeTypes.Choice) {
        targetSchema = new Constructed({
          idBlock: {
            tagClass: 3,
            tagNumber: asn1Schema.idBlock.tagNumber
          },
          value: schema.schema.valueBlock.value
        });
        for (const key in schema.items) {
          delete asn1Schema[key];
        }
      }
      const asn1ComparedSchema = compareSchema({}, asn1Schema, targetSchema);
      if (!asn1ComparedSchema.verified) {
        throw new AsnSchemaValidationError(`Data does not match to ${target.name} ASN1 schema. ${asn1ComparedSchema.result.error}`);
      }
      const res = new target;
      if (isTypeOfArray(target)) {
        if (!(("value" in asn1Schema.valueBlock) && Array.isArray(asn1Schema.valueBlock.value))) {
          throw new Error(`Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.`);
        }
        const itemType = schema.itemType;
        if (typeof itemType === "number") {
          const converter = defaultConverter(itemType);
          if (!converter) {
            throw new Error(`Cannot get default converter for array item of ${target.name} ASN1 schema`);
          }
          return target.from(asn1Schema.valueBlock.value, (element) => converter.fromASN(element));
        } else {
          return target.from(asn1Schema.valueBlock.value, (element) => this.fromASN(element, itemType));
        }
      }
      for (const key in schema.items) {
        const asn1SchemaValue = asn1ComparedSchema.result[key];
        if (!asn1SchemaValue) {
          continue;
        }
        const schemaItem = schema.items[key];
        const schemaItemType = schemaItem.type;
        if (typeof schemaItemType === "number" || isConvertible(schemaItemType)) {
          const converter = (_a2 = schemaItem.converter) !== null && _a2 !== undefined ? _a2 : isConvertible(schemaItemType) ? new schemaItemType : null;
          if (!converter) {
            throw new Error("Converter is empty");
          }
          if (schemaItem.repeated) {
            if (schemaItem.implicit) {
              const Container = schemaItem.repeated === "sequence" ? Sequence : Set2;
              const newItem = new Container;
              newItem.valueBlock = asn1SchemaValue.valueBlock;
              const newItemAsn = fromBER(newItem.toBER(false));
              if (newItemAsn.offset === -1) {
                throw new Error(`Cannot parse the child item. ${newItemAsn.result.error}`);
              }
              if (!(("value" in newItemAsn.result.valueBlock) && Array.isArray(newItemAsn.result.valueBlock.value))) {
                throw new Error("Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.");
              }
              const value = newItemAsn.result.valueBlock.value;
              res[key] = Array.from(value, (element) => converter.fromASN(element));
            } else {
              res[key] = Array.from(asn1SchemaValue, (element) => converter.fromASN(element));
            }
          } else {
            let value = asn1SchemaValue;
            if (schemaItem.implicit) {
              let newItem;
              if (isConvertible(schemaItemType)) {
                newItem = new schemaItemType().toSchema("");
              } else {
                const Asn1TypeName = AsnPropTypes[schemaItemType];
                const Asn1Type = exports_index_es[Asn1TypeName];
                if (!Asn1Type) {
                  throw new Error(`Cannot get '${Asn1TypeName}' class from asn1js module`);
                }
                newItem = new Asn1Type;
              }
              newItem.valueBlock = value.valueBlock;
              value = fromBER(newItem.toBER(false)).result;
            }
            res[key] = converter.fromASN(value);
          }
        } else {
          if (schemaItem.repeated) {
            if (!Array.isArray(asn1SchemaValue)) {
              throw new Error("Cannot get list of items from the ASN.1 parsed value. ASN.1 value should be iterable.");
            }
            res[key] = Array.from(asn1SchemaValue, (element) => this.fromASN(element, schemaItemType));
          } else {
            res[key] = this.fromASN(asn1SchemaValue, schemaItemType);
          }
        }
      }
      return res;
    } catch (error) {
      if (error instanceof AsnSchemaValidationError) {
        error.schemas.push(target.name);
      }
      throw error;
    }
  }
}
// node_modules/@peculiar/asn1-schema/build/es2015/serializer.js
class AsnSerializer {
  static serialize(obj) {
    if (obj instanceof BaseBlock) {
      return obj.toBER(false);
    }
    return this.toASN(obj).toBER(false);
  }
  static toASN(obj) {
    if (obj && typeof obj === "object" && isConvertible(obj)) {
      return obj.toASN();
    }
    if (!(obj && typeof obj === "object")) {
      throw new TypeError("Parameter 1 should be type of Object.");
    }
    const target = obj.constructor;
    const schema = schemaStorage.get(target);
    schemaStorage.cache(target);
    let asn1Value = [];
    if (schema.itemType) {
      if (!Array.isArray(obj)) {
        throw new TypeError("Parameter 1 should be type of Array.");
      }
      if (typeof schema.itemType === "number") {
        const converter = defaultConverter(schema.itemType);
        if (!converter) {
          throw new Error(`Cannot get default converter for array item of ${target.name} ASN1 schema`);
        }
        asn1Value = obj.map((o) => converter.toASN(o));
      } else {
        asn1Value = obj.map((o) => this.toAsnItem({ type: schema.itemType }, "[]", target, o));
      }
    } else {
      for (const key in schema.items) {
        const schemaItem = schema.items[key];
        const objProp = obj[key];
        if (objProp === undefined || schemaItem.defaultValue === objProp || typeof schemaItem.defaultValue === "object" && typeof objProp === "object" && isArrayEqual(this.serialize(schemaItem.defaultValue), this.serialize(objProp))) {
          continue;
        }
        const asn1Item = AsnSerializer.toAsnItem(schemaItem, key, target, objProp);
        if (typeof schemaItem.context === "number") {
          if (schemaItem.implicit) {
            if (!schemaItem.repeated && (typeof schemaItem.type === "number" || isConvertible(schemaItem.type))) {
              const value = {};
              value.valueHex = asn1Item instanceof Null ? asn1Item.valueBeforeDecodeView : asn1Item.valueBlock.toBER();
              asn1Value.push(new Primitive({
                optional: schemaItem.optional,
                idBlock: {
                  tagClass: 3,
                  tagNumber: schemaItem.context
                },
                ...value
              }));
            } else {
              asn1Value.push(new Constructed({
                optional: schemaItem.optional,
                idBlock: {
                  tagClass: 3,
                  tagNumber: schemaItem.context
                },
                value: asn1Item.valueBlock.value
              }));
            }
          } else {
            asn1Value.push(new Constructed({
              optional: schemaItem.optional,
              idBlock: {
                tagClass: 3,
                tagNumber: schemaItem.context
              },
              value: [asn1Item]
            }));
          }
        } else if (schemaItem.repeated) {
          asn1Value = asn1Value.concat(asn1Item);
        } else {
          asn1Value.push(asn1Item);
        }
      }
    }
    let asnSchema;
    switch (schema.type) {
      case AsnTypeTypes.Sequence:
        asnSchema = new Sequence({ value: asn1Value });
        break;
      case AsnTypeTypes.Set:
        asnSchema = new Set2({ value: asn1Value });
        break;
      case AsnTypeTypes.Choice:
        if (!asn1Value[0]) {
          throw new Error(`Schema '${target.name}' has wrong data. Choice cannot be empty.`);
        }
        asnSchema = asn1Value[0];
        break;
    }
    return asnSchema;
  }
  static toAsnItem(schemaItem, key, target, objProp) {
    let asn1Item;
    if (typeof schemaItem.type === "number") {
      const converter = schemaItem.converter;
      if (!converter) {
        throw new Error(`Property '${key}' doesn't have converter for type ${AsnPropTypes[schemaItem.type]} in schema '${target.name}'`);
      }
      if (schemaItem.repeated) {
        if (!Array.isArray(objProp)) {
          throw new TypeError("Parameter 'objProp' should be type of Array.");
        }
        const items = Array.from(objProp, (element) => converter.toASN(element));
        const Container = schemaItem.repeated === "sequence" ? Sequence : Set2;
        asn1Item = new Container({
          value: items
        });
      } else {
        asn1Item = converter.toASN(objProp);
      }
    } else {
      if (schemaItem.repeated) {
        if (!Array.isArray(objProp)) {
          throw new TypeError("Parameter 'objProp' should be type of Array.");
        }
        const items = Array.from(objProp, (element) => this.toASN(element));
        const Container = schemaItem.repeated === "sequence" ? Sequence : Set2;
        asn1Item = new Container({
          value: items
        });
      } else {
        asn1Item = this.toASN(objProp);
      }
    }
    return asn1Item;
  }
}
// node_modules/@peculiar/asn1-schema/build/es2015/objects.js
class AsnArray extends Array {
  constructor(items = []) {
    if (typeof items === "number") {
      super(items);
    } else {
      super();
      for (const item of items) {
        this.push(item);
      }
    }
  }
}
// node_modules/@peculiar/asn1-schema/build/es2015/convert.js
class AsnConvert {
  static serialize(obj) {
    return AsnSerializer.serialize(obj);
  }
  static parse(data, target) {
    return AsnParser.parse(data, target);
  }
  static toString(data) {
    const buf = BufferSourceConverter.isBufferSource(data) ? BufferSourceConverter.toArrayBuffer(data) : AsnConvert.serialize(data);
    const asn = fromBER(buf);
    if (asn.offset === -1) {
      throw new Error(`Cannot decode ASN.1 data. ${asn.result.error}`);
    }
    return asn.result.toString();
  }
}
// node_modules/tslib/modules/index.js
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension
} = import_tslib.default;

// node_modules/@peculiar/asn1-x509/build/es2015/ip_converter.js
var ip = __toESM(require_ipaddr(), 1);
class IpConverter {
  static decodeIP(value) {
    if (value.length === 64 && parseInt(value, 16) === 0) {
      return "::/0";
    }
    if (value.length !== 16) {
      return value;
    }
    const mask = parseInt(value.slice(8), 16).toString(2).split("").reduce((a, k) => a + +k, 0);
    let ip2 = value.slice(0, 8).replace(/(.{2})/g, (match) => `${parseInt(match, 16)}.`);
    ip2 = ip2.slice(0, -1);
    return `${ip2}/${mask}`;
  }
  static toString(buf) {
    if (buf.byteLength === 4 || buf.byteLength === 16) {
      const uint8 = new Uint8Array(buf);
      const addr = ip.fromByteArray(Array.from(uint8));
      return addr.toString();
    }
    return this.decodeIP(Convert.ToHex(buf));
  }
  static fromString(text) {
    const addr = ip.parse(text);
    return new Uint8Array(addr.toByteArray()).buffer;
  }
}

// node_modules/@peculiar/asn1-x509/build/es2015/name.js
var RelativeDistinguishedName_1;
var RDNSequence_1;
var Name_1;
var DirectoryString = class DirectoryString2 {
  constructor(params = {}) {
    Object.assign(this, params);
  }
  toString() {
    return this.bmpString || this.printableString || this.teletexString || this.universalString || this.utf8String || "";
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.TeletexString })
], DirectoryString.prototype, "teletexString", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.PrintableString })
], DirectoryString.prototype, "printableString", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.UniversalString })
], DirectoryString.prototype, "universalString", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Utf8String })
], DirectoryString.prototype, "utf8String", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BmpString })
], DirectoryString.prototype, "bmpString", undefined);
DirectoryString = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], DirectoryString);
var AttributeValue = class AttributeValue2 extends DirectoryString {
  constructor(params = {}) {
    super(params);
    Object.assign(this, params);
  }
  toString() {
    return this.ia5String || (this.anyValue ? Convert.ToHex(this.anyValue) : super.toString());
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.IA5String })
], AttributeValue.prototype, "ia5String", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Any })
], AttributeValue.prototype, "anyValue", undefined);
AttributeValue = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], AttributeValue);
class AttributeTypeAndValue {
  constructor(params = {}) {
    this.type = "";
    this.value = new AttributeValue;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], AttributeTypeAndValue.prototype, "type", undefined);
__decorate([
  AsnProp({ type: AttributeValue })
], AttributeTypeAndValue.prototype, "value", undefined);
var RelativeDistinguishedName = RelativeDistinguishedName_1 = class RelativeDistinguishedName2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, RelativeDistinguishedName_1.prototype);
  }
};
RelativeDistinguishedName = RelativeDistinguishedName_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Set, itemType: AttributeTypeAndValue })
], RelativeDistinguishedName);
var RDNSequence = RDNSequence_1 = class RDNSequence2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, RDNSequence_1.prototype);
  }
};
RDNSequence = RDNSequence_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: RelativeDistinguishedName })
], RDNSequence);
var Name = Name_1 = class Name2 extends RDNSequence {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, Name_1.prototype);
  }
};
Name = Name_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], Name);

// node_modules/@peculiar/asn1-x509/build/es2015/general_name.js
var AsnIpConverter = {
  fromASN: (value) => IpConverter.toString(AsnOctetStringConverter.fromASN(value)),
  toASN: (value) => AsnOctetStringConverter.toASN(IpConverter.fromString(value))
};

class OtherName {
  constructor(params = {}) {
    this.typeId = "";
    this.value = new ArrayBuffer(0);
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], OtherName.prototype, "typeId", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Any, context: 0 })
], OtherName.prototype, "value", undefined);

class EDIPartyName {
  constructor(params = {}) {
    this.partyName = new DirectoryString;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: DirectoryString, optional: true, context: 0, implicit: true })
], EDIPartyName.prototype, "nameAssigner", undefined);
__decorate([
  AsnProp({ type: DirectoryString, context: 1, implicit: true })
], EDIPartyName.prototype, "partyName", undefined);
var GeneralName = class GeneralName2 {
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: OtherName, context: 0, implicit: true })
], GeneralName.prototype, "otherName", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.IA5String, context: 1, implicit: true })
], GeneralName.prototype, "rfc822Name", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.IA5String, context: 2, implicit: true })
], GeneralName.prototype, "dNSName", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Any, context: 3, implicit: true })
], GeneralName.prototype, "x400Address", undefined);
__decorate([
  AsnProp({ type: Name, context: 4, implicit: false })
], GeneralName.prototype, "directoryName", undefined);
__decorate([
  AsnProp({ type: EDIPartyName, context: 5 })
], GeneralName.prototype, "ediPartyName", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.IA5String, context: 6, implicit: true })
], GeneralName.prototype, "uniformResourceIdentifier", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.OctetString, context: 7, implicit: true, converter: AsnIpConverter })
], GeneralName.prototype, "iPAddress", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier, context: 8, implicit: true })
], GeneralName.prototype, "registeredID", undefined);
GeneralName = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], GeneralName);

// node_modules/@peculiar/asn1-x509/build/es2015/object_identifiers.js
var id_pkix = "1.3.6.1.5.5.7";
var id_pe = `${id_pkix}.1`;
var id_qt = `${id_pkix}.2`;
var id_kp = `${id_pkix}.3`;
var id_ad = `${id_pkix}.48`;
var id_qt_csp = `${id_qt}.1`;
var id_qt_unotice = `${id_qt}.2`;
var id_ad_ocsp = `${id_ad}.1`;
var id_ad_caIssuers = `${id_ad}.2`;
var id_ad_timeStamping = `${id_ad}.3`;
var id_ad_caRepository = `${id_ad}.5`;
var id_ce = "2.5.29";

// node_modules/@peculiar/asn1-x509/build/es2015/extensions/authority_information_access.js
var AuthorityInfoAccessSyntax_1;
var id_pe_authorityInfoAccess = `${id_pe}.1`;

class AccessDescription {
  constructor(params = {}) {
    this.accessMethod = "";
    this.accessLocation = new GeneralName;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], AccessDescription.prototype, "accessMethod", undefined);
__decorate([
  AsnProp({ type: GeneralName })
], AccessDescription.prototype, "accessLocation", undefined);
var AuthorityInfoAccessSyntax = AuthorityInfoAccessSyntax_1 = class AuthorityInfoAccessSyntax2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, AuthorityInfoAccessSyntax_1.prototype);
  }
};
AuthorityInfoAccessSyntax = AuthorityInfoAccessSyntax_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: AccessDescription })
], AuthorityInfoAccessSyntax);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/authority_key_identifier.js
var id_ce_authorityKeyIdentifier = `${id_ce}.35`;

class KeyIdentifier extends OctetString2 {
}

class AuthorityKeyIdentifier {
  constructor(params = {}) {
    if (params) {
      Object.assign(this, params);
    }
  }
}
__decorate([
  AsnProp({ type: KeyIdentifier, context: 0, optional: true, implicit: true })
], AuthorityKeyIdentifier.prototype, "keyIdentifier", undefined);
__decorate([
  AsnProp({ type: GeneralName, context: 1, optional: true, implicit: true, repeated: "sequence" })
], AuthorityKeyIdentifier.prototype, "authorityCertIssuer", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 2,
    optional: true,
    implicit: true,
    converter: AsnIntegerArrayBufferConverter
  })
], AuthorityKeyIdentifier.prototype, "authorityCertSerialNumber", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/basic_constraints.js
var id_ce_basicConstraints = `${id_ce}.19`;

class BasicConstraints {
  constructor(params = {}) {
    this.cA = false;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Boolean, defaultValue: false })
], BasicConstraints.prototype, "cA", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, optional: true })
], BasicConstraints.prototype, "pathLenConstraint", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/general_names.js
var GeneralNames_1;
var GeneralNames = GeneralNames_1 = class GeneralNames2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, GeneralNames_1.prototype);
  }
};
GeneralNames = GeneralNames_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: GeneralName })
], GeneralNames);

// node_modules/@peculiar/asn1-x509/build/es2015/extensions/certificate_issuer.js
var CertificateIssuer_1;
var id_ce_certificateIssuer = `${id_ce}.29`;
var CertificateIssuer = CertificateIssuer_1 = class CertificateIssuer2 extends GeneralNames {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CertificateIssuer_1.prototype);
  }
};
CertificateIssuer = CertificateIssuer_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], CertificateIssuer);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/certificate_policies.js
var CertificatePolicies_1;
var id_ce_certificatePolicies = `${id_ce}.32`;
var id_ce_certificatePolicies_anyPolicy = `${id_ce_certificatePolicies}.0`;
var DisplayText = class DisplayText2 {
  constructor(params = {}) {
    Object.assign(this, params);
  }
  toString() {
    return this.ia5String || this.visibleString || this.bmpString || this.utf8String || "";
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.IA5String })
], DisplayText.prototype, "ia5String", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.VisibleString })
], DisplayText.prototype, "visibleString", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BmpString })
], DisplayText.prototype, "bmpString", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Utf8String })
], DisplayText.prototype, "utf8String", undefined);
DisplayText = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], DisplayText);
class NoticeReference {
  constructor(params = {}) {
    this.organization = new DisplayText;
    this.noticeNumbers = [];
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: DisplayText })
], NoticeReference.prototype, "organization", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, repeated: "sequence" })
], NoticeReference.prototype, "noticeNumbers", undefined);

class UserNotice {
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: NoticeReference, optional: true })
], UserNotice.prototype, "noticeRef", undefined);
__decorate([
  AsnProp({ type: DisplayText, optional: true })
], UserNotice.prototype, "explicitText", undefined);
var Qualifier = class Qualifier2 {
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.IA5String })
], Qualifier.prototype, "cPSuri", undefined);
__decorate([
  AsnProp({ type: UserNotice })
], Qualifier.prototype, "userNotice", undefined);
Qualifier = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], Qualifier);
class PolicyQualifierInfo {
  constructor(params = {}) {
    this.policyQualifierId = "";
    this.qualifier = new ArrayBuffer(0);
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PolicyQualifierInfo.prototype, "policyQualifierId", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Any })
], PolicyQualifierInfo.prototype, "qualifier", undefined);

class PolicyInformation {
  constructor(params = {}) {
    this.policyIdentifier = "";
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PolicyInformation.prototype, "policyIdentifier", undefined);
__decorate([
  AsnProp({ type: PolicyQualifierInfo, repeated: "sequence", optional: true })
], PolicyInformation.prototype, "policyQualifiers", undefined);
var CertificatePolicies = CertificatePolicies_1 = class CertificatePolicies2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CertificatePolicies_1.prototype);
  }
};
CertificatePolicies = CertificatePolicies_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: PolicyInformation })
], CertificatePolicies);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/crl_number.js
var id_ce_cRLNumber = `${id_ce}.20`;
var CRLNumber = class CRLNumber2 {
  constructor(value = 0) {
    this.value = value;
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], CRLNumber.prototype, "value", undefined);
CRLNumber = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], CRLNumber);

// node_modules/@peculiar/asn1-x509/build/es2015/extensions/crl_delta_indicator.js
var id_ce_deltaCRLIndicator = `${id_ce}.27`;
var BaseCRLNumber = class BaseCRLNumber2 extends CRLNumber {
};
BaseCRLNumber = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], BaseCRLNumber);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/crl_distribution_points.js
var CRLDistributionPoints_1;
var id_ce_cRLDistributionPoints = `${id_ce}.31`;
var ReasonFlags;
(function(ReasonFlags2) {
  ReasonFlags2[ReasonFlags2["unused"] = 1] = "unused";
  ReasonFlags2[ReasonFlags2["keyCompromise"] = 2] = "keyCompromise";
  ReasonFlags2[ReasonFlags2["cACompromise"] = 4] = "cACompromise";
  ReasonFlags2[ReasonFlags2["affiliationChanged"] = 8] = "affiliationChanged";
  ReasonFlags2[ReasonFlags2["superseded"] = 16] = "superseded";
  ReasonFlags2[ReasonFlags2["cessationOfOperation"] = 32] = "cessationOfOperation";
  ReasonFlags2[ReasonFlags2["certificateHold"] = 64] = "certificateHold";
  ReasonFlags2[ReasonFlags2["privilegeWithdrawn"] = 128] = "privilegeWithdrawn";
  ReasonFlags2[ReasonFlags2["aACompromise"] = 256] = "aACompromise";
})(ReasonFlags || (ReasonFlags = {}));

class Reason extends BitString2 {
  toJSON() {
    const res = [];
    const flags = this.toNumber();
    if (flags & ReasonFlags.aACompromise) {
      res.push("aACompromise");
    }
    if (flags & ReasonFlags.affiliationChanged) {
      res.push("affiliationChanged");
    }
    if (flags & ReasonFlags.cACompromise) {
      res.push("cACompromise");
    }
    if (flags & ReasonFlags.certificateHold) {
      res.push("certificateHold");
    }
    if (flags & ReasonFlags.cessationOfOperation) {
      res.push("cessationOfOperation");
    }
    if (flags & ReasonFlags.keyCompromise) {
      res.push("keyCompromise");
    }
    if (flags & ReasonFlags.privilegeWithdrawn) {
      res.push("privilegeWithdrawn");
    }
    if (flags & ReasonFlags.superseded) {
      res.push("superseded");
    }
    if (flags & ReasonFlags.unused) {
      res.push("unused");
    }
    return res;
  }
  toString() {
    return `[${this.toJSON().join(", ")}]`;
  }
}
var DistributionPointName = class DistributionPointName2 {
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: GeneralName, context: 0, repeated: "sequence", implicit: true })
], DistributionPointName.prototype, "fullName", undefined);
__decorate([
  AsnProp({ type: RelativeDistinguishedName, context: 1, implicit: true })
], DistributionPointName.prototype, "nameRelativeToCRLIssuer", undefined);
DistributionPointName = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], DistributionPointName);
class DistributionPoint {
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: DistributionPointName, context: 0, optional: true })
], DistributionPoint.prototype, "distributionPoint", undefined);
__decorate([
  AsnProp({ type: Reason, context: 1, optional: true, implicit: true })
], DistributionPoint.prototype, "reasons", undefined);
__decorate([
  AsnProp({ type: GeneralName, context: 2, optional: true, repeated: "sequence", implicit: true })
], DistributionPoint.prototype, "cRLIssuer", undefined);
var CRLDistributionPoints = CRLDistributionPoints_1 = class CRLDistributionPoints2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, CRLDistributionPoints_1.prototype);
  }
};
CRLDistributionPoints = CRLDistributionPoints_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: DistributionPoint })
], CRLDistributionPoints);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/crl_freshest.js
var FreshestCRL_1;
var id_ce_freshestCRL = `${id_ce}.46`;
var FreshestCRL = FreshestCRL_1 = class FreshestCRL2 extends CRLDistributionPoints {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, FreshestCRL_1.prototype);
  }
};
FreshestCRL = FreshestCRL_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: DistributionPoint })
], FreshestCRL);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/crl_issuing_distribution_point.js
var id_ce_issuingDistributionPoint = `${id_ce}.28`;

class IssuingDistributionPoint {
  constructor(params = {}) {
    this.onlyContainsUserCerts = IssuingDistributionPoint.ONLY;
    this.onlyContainsCACerts = IssuingDistributionPoint.ONLY;
    this.indirectCRL = IssuingDistributionPoint.ONLY;
    this.onlyContainsAttributeCerts = IssuingDistributionPoint.ONLY;
    Object.assign(this, params);
  }
}
IssuingDistributionPoint.ONLY = false;
__decorate([
  AsnProp({ type: DistributionPointName, context: 0, optional: true })
], IssuingDistributionPoint.prototype, "distributionPoint", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Boolean, context: 1, defaultValue: IssuingDistributionPoint.ONLY, implicit: true })
], IssuingDistributionPoint.prototype, "onlyContainsUserCerts", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Boolean, context: 2, defaultValue: IssuingDistributionPoint.ONLY, implicit: true })
], IssuingDistributionPoint.prototype, "onlyContainsCACerts", undefined);
__decorate([
  AsnProp({ type: Reason, context: 3, optional: true, implicit: true })
], IssuingDistributionPoint.prototype, "onlySomeReasons", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Boolean, context: 4, defaultValue: IssuingDistributionPoint.ONLY, implicit: true })
], IssuingDistributionPoint.prototype, "indirectCRL", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Boolean, context: 5, defaultValue: IssuingDistributionPoint.ONLY, implicit: true })
], IssuingDistributionPoint.prototype, "onlyContainsAttributeCerts", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/crl_reason.js
var id_ce_cRLReasons = `${id_ce}.21`;
var CRLReasons;
(function(CRLReasons2) {
  CRLReasons2[CRLReasons2["unspecified"] = 0] = "unspecified";
  CRLReasons2[CRLReasons2["keyCompromise"] = 1] = "keyCompromise";
  CRLReasons2[CRLReasons2["cACompromise"] = 2] = "cACompromise";
  CRLReasons2[CRLReasons2["affiliationChanged"] = 3] = "affiliationChanged";
  CRLReasons2[CRLReasons2["superseded"] = 4] = "superseded";
  CRLReasons2[CRLReasons2["cessationOfOperation"] = 5] = "cessationOfOperation";
  CRLReasons2[CRLReasons2["certificateHold"] = 6] = "certificateHold";
  CRLReasons2[CRLReasons2["removeFromCRL"] = 8] = "removeFromCRL";
  CRLReasons2[CRLReasons2["privilegeWithdrawn"] = 9] = "privilegeWithdrawn";
  CRLReasons2[CRLReasons2["aACompromise"] = 10] = "aACompromise";
})(CRLReasons || (CRLReasons = {}));
var CRLReason = class CRLReason2 {
  constructor(reason = CRLReasons.unspecified) {
    this.reason = CRLReasons.unspecified;
    this.reason = reason;
  }
  toJSON() {
    return CRLReasons[this.reason];
  }
  toString() {
    return this.toJSON();
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], CRLReason.prototype, "reason", undefined);
CRLReason = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], CRLReason);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/extended_key_usage.js
var ExtendedKeyUsage_1;
var id_ce_extKeyUsage = `${id_ce}.37`;
var ExtendedKeyUsage = ExtendedKeyUsage_1 = class ExtendedKeyUsage2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, ExtendedKeyUsage_1.prototype);
  }
};
ExtendedKeyUsage = ExtendedKeyUsage_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: AsnPropTypes.ObjectIdentifier })
], ExtendedKeyUsage);
var anyExtendedKeyUsage = `${id_ce_extKeyUsage}.0`;
var id_kp_serverAuth = `${id_kp}.1`;
var id_kp_clientAuth = `${id_kp}.2`;
var id_kp_codeSigning = `${id_kp}.3`;
var id_kp_emailProtection = `${id_kp}.4`;
var id_kp_timeStamping = `${id_kp}.8`;
var id_kp_OCSPSigning = `${id_kp}.9`;
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/inhibit_any_policy.js
var id_ce_inhibitAnyPolicy = `${id_ce}.54`;
var InhibitAnyPolicy = class InhibitAnyPolicy2 {
  constructor(value = new ArrayBuffer(0)) {
    this.value = value;
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], InhibitAnyPolicy.prototype, "value", undefined);
InhibitAnyPolicy = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], InhibitAnyPolicy);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/invalidity_date.js
var id_ce_invalidityDate = `${id_ce}.24`;
var InvalidityDate = class InvalidityDate2 {
  constructor(value) {
    this.value = new Date;
    if (value) {
      this.value = value;
    }
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.GeneralizedTime })
], InvalidityDate.prototype, "value", undefined);
InvalidityDate = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], InvalidityDate);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/issuer_alternative_name.js
var IssueAlternativeName_1;
var id_ce_issuerAltName = `${id_ce}.18`;
var IssueAlternativeName = IssueAlternativeName_1 = class IssueAlternativeName2 extends GeneralNames {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, IssueAlternativeName_1.prototype);
  }
};
IssueAlternativeName = IssueAlternativeName_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], IssueAlternativeName);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/key_usage.js
var id_ce_keyUsage = `${id_ce}.15`;
var KeyUsageFlags;
(function(KeyUsageFlags2) {
  KeyUsageFlags2[KeyUsageFlags2["digitalSignature"] = 1] = "digitalSignature";
  KeyUsageFlags2[KeyUsageFlags2["nonRepudiation"] = 2] = "nonRepudiation";
  KeyUsageFlags2[KeyUsageFlags2["keyEncipherment"] = 4] = "keyEncipherment";
  KeyUsageFlags2[KeyUsageFlags2["dataEncipherment"] = 8] = "dataEncipherment";
  KeyUsageFlags2[KeyUsageFlags2["keyAgreement"] = 16] = "keyAgreement";
  KeyUsageFlags2[KeyUsageFlags2["keyCertSign"] = 32] = "keyCertSign";
  KeyUsageFlags2[KeyUsageFlags2["cRLSign"] = 64] = "cRLSign";
  KeyUsageFlags2[KeyUsageFlags2["encipherOnly"] = 128] = "encipherOnly";
  KeyUsageFlags2[KeyUsageFlags2["decipherOnly"] = 256] = "decipherOnly";
})(KeyUsageFlags || (KeyUsageFlags = {}));
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/name_constraints.js
var GeneralSubtrees_1;
var id_ce_nameConstraints = `${id_ce}.30`;

class GeneralSubtree {
  constructor(params = {}) {
    this.base = new GeneralName;
    this.minimum = 0;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: GeneralName })
], GeneralSubtree.prototype, "base", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, context: 0, defaultValue: 0, implicit: true })
], GeneralSubtree.prototype, "minimum", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, context: 1, optional: true, implicit: true })
], GeneralSubtree.prototype, "maximum", undefined);
var GeneralSubtrees = GeneralSubtrees_1 = class GeneralSubtrees2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, GeneralSubtrees_1.prototype);
  }
};
GeneralSubtrees = GeneralSubtrees_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: GeneralSubtree })
], GeneralSubtrees);
class NameConstraints {
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: GeneralSubtrees, context: 0, optional: true, implicit: true })
], NameConstraints.prototype, "permittedSubtrees", undefined);
__decorate([
  AsnProp({ type: GeneralSubtrees, context: 1, optional: true, implicit: true })
], NameConstraints.prototype, "excludedSubtrees", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/policy_constraints.js
var id_ce_policyConstraints = `${id_ce}.36`;

class PolicyConstraints {
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 0,
    implicit: true,
    optional: true,
    converter: AsnIntegerArrayBufferConverter
  })
], PolicyConstraints.prototype, "requireExplicitPolicy", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 1,
    implicit: true,
    optional: true,
    converter: AsnIntegerArrayBufferConverter
  })
], PolicyConstraints.prototype, "inhibitPolicyMapping", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/policy_mappings.js
var PolicyMappings_1;
var id_ce_policyMappings = `${id_ce}.33`;

class PolicyMapping {
  constructor(params = {}) {
    this.issuerDomainPolicy = "";
    this.subjectDomainPolicy = "";
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PolicyMapping.prototype, "issuerDomainPolicy", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], PolicyMapping.prototype, "subjectDomainPolicy", undefined);
var PolicyMappings = PolicyMappings_1 = class PolicyMappings2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, PolicyMappings_1.prototype);
  }
};
PolicyMappings = PolicyMappings_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: PolicyMapping })
], PolicyMappings);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/subject_alternative_name.js
var SubjectAlternativeName_1;
var id_ce_subjectAltName = `${id_ce}.17`;
var SubjectAlternativeName = SubjectAlternativeName_1 = class SubjectAlternativeName2 extends GeneralNames {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SubjectAlternativeName_1.prototype);
  }
};
SubjectAlternativeName = SubjectAlternativeName_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], SubjectAlternativeName);
// node_modules/@peculiar/asn1-x509/build/es2015/attribute.js
class Attribute {
  constructor(params = {}) {
    this.type = "";
    this.values = [];
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], Attribute.prototype, "type", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Any, repeated: "set" })
], Attribute.prototype, "values", undefined);

// node_modules/@peculiar/asn1-x509/build/es2015/extensions/subject_directory_attributes.js
var SubjectDirectoryAttributes_1;
var id_ce_subjectDirectoryAttributes = `${id_ce}.9`;
var SubjectDirectoryAttributes = SubjectDirectoryAttributes_1 = class SubjectDirectoryAttributes2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SubjectDirectoryAttributes_1.prototype);
  }
};
SubjectDirectoryAttributes = SubjectDirectoryAttributes_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: Attribute })
], SubjectDirectoryAttributes);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/subject_key_identifier.js
var id_ce_subjectKeyIdentifier = `${id_ce}.14`;

class SubjectKeyIdentifier extends KeyIdentifier {
}
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/private_key_usage_period.js
var id_ce_privateKeyUsagePeriod = `${id_ce}.16`;

class PrivateKeyUsagePeriod {
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.GeneralizedTime, context: 0, implicit: true, optional: true })
], PrivateKeyUsagePeriod.prototype, "notBefore", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.GeneralizedTime, context: 1, implicit: true, optional: true })
], PrivateKeyUsagePeriod.prototype, "notAfter", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/entrust_version_info.js
var EntrustInfoFlags;
(function(EntrustInfoFlags2) {
  EntrustInfoFlags2[EntrustInfoFlags2["keyUpdateAllowed"] = 1] = "keyUpdateAllowed";
  EntrustInfoFlags2[EntrustInfoFlags2["newExtensions"] = 2] = "newExtensions";
  EntrustInfoFlags2[EntrustInfoFlags2["pKIXCertificate"] = 4] = "pKIXCertificate";
})(EntrustInfoFlags || (EntrustInfoFlags = {}));

class EntrustInfo extends BitString2 {
  toJSON() {
    const res = [];
    const flags = this.toNumber();
    if (flags & EntrustInfoFlags.pKIXCertificate) {
      res.push("pKIXCertificate");
    }
    if (flags & EntrustInfoFlags.newExtensions) {
      res.push("newExtensions");
    }
    if (flags & EntrustInfoFlags.keyUpdateAllowed) {
      res.push("keyUpdateAllowed");
    }
    return res;
  }
  toString() {
    return `[${this.toJSON().join(", ")}]`;
  }
}

class EntrustVersionInfo {
  constructor(params = {}) {
    this.entrustVers = "";
    this.entrustInfoFlags = new EntrustInfo;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.GeneralString })
], EntrustVersionInfo.prototype, "entrustVers", undefined);
__decorate([
  AsnProp({ type: EntrustInfo })
], EntrustVersionInfo.prototype, "entrustInfoFlags", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/extensions/subject_info_access.js
var SubjectInfoAccessSyntax_1;
var id_pe_subjectInfoAccess = `${id_pe}.11`;
var SubjectInfoAccessSyntax = SubjectInfoAccessSyntax_1 = class SubjectInfoAccessSyntax2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, SubjectInfoAccessSyntax_1.prototype);
  }
};
SubjectInfoAccessSyntax = SubjectInfoAccessSyntax_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: AccessDescription })
], SubjectInfoAccessSyntax);
// node_modules/@peculiar/asn1-x509/build/es2015/algorithm_identifier.js
class AlgorithmIdentifier {
  constructor(params = {}) {
    this.algorithm = "";
    Object.assign(this, params);
  }
  isEqual(data) {
    return data instanceof AlgorithmIdentifier && data.algorithm == this.algorithm && (data.parameters && this.parameters && isEqual(data.parameters, this.parameters) || data.parameters === this.parameters);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.ObjectIdentifier
  })
], AlgorithmIdentifier.prototype, "algorithm", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Any,
    optional: true
  })
], AlgorithmIdentifier.prototype, "parameters", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/subject_public_key_info.js
class SubjectPublicKeyInfo {
  constructor(params = {}) {
    this.algorithm = new AlgorithmIdentifier;
    this.subjectPublicKey = new ArrayBuffer(0);
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], SubjectPublicKeyInfo.prototype, "algorithm", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BitString })
], SubjectPublicKeyInfo.prototype, "subjectPublicKey", undefined);

// node_modules/@peculiar/asn1-x509/build/es2015/time.js
var Time = class Time2 {
  constructor(time2) {
    if (time2) {
      if (typeof time2 === "string" || typeof time2 === "number" || time2 instanceof Date) {
        const date = new Date(time2);
        if (date.getUTCFullYear() > 2049) {
          this.generalTime = date;
        } else {
          this.utcTime = date;
        }
      } else {
        Object.assign(this, time2);
      }
    }
  }
  getTime() {
    const time2 = this.utcTime || this.generalTime;
    if (!time2) {
      throw new Error("Cannot get time from CHOICE object");
    }
    return time2;
  }
};
__decorate([
  AsnProp({
    type: AsnPropTypes.UTCTime
  })
], Time.prototype, "utcTime", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.GeneralizedTime
  })
], Time.prototype, "generalTime", undefined);
Time = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], Time);

// node_modules/@peculiar/asn1-x509/build/es2015/validity.js
class Validity {
  constructor(params) {
    this.notBefore = new Time(new Date);
    this.notAfter = new Time(new Date);
    if (params) {
      this.notBefore = new Time(params.notBefore);
      this.notAfter = new Time(params.notAfter);
    }
  }
}
__decorate([
  AsnProp({ type: Time })
], Validity.prototype, "notBefore", undefined);
__decorate([
  AsnProp({ type: Time })
], Validity.prototype, "notAfter", undefined);

// node_modules/@peculiar/asn1-x509/build/es2015/extension.js
var Extensions_1;

class Extension {
  constructor(params = {}) {
    this.extnID = "";
    this.critical = Extension.CRITICAL;
    this.extnValue = new OctetString2;
    Object.assign(this, params);
  }
}
Extension.CRITICAL = false;
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], Extension.prototype, "extnID", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Boolean,
    defaultValue: Extension.CRITICAL
  })
], Extension.prototype, "critical", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], Extension.prototype, "extnValue", undefined);
var Extensions = Extensions_1 = class Extensions2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, Extensions_1.prototype);
  }
};
Extensions = Extensions_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: Extension })
], Extensions);

// node_modules/@peculiar/asn1-x509/build/es2015/types.js
var Version;
(function(Version2) {
  Version2[Version2["v1"] = 0] = "v1";
  Version2[Version2["v2"] = 1] = "v2";
  Version2[Version2["v3"] = 2] = "v3";
})(Version || (Version = {}));

// node_modules/@peculiar/asn1-x509/build/es2015/tbs_certificate.js
class TBSCertificate {
  constructor(params = {}) {
    this.version = Version.v1;
    this.serialNumber = new ArrayBuffer(0);
    this.signature = new AlgorithmIdentifier;
    this.issuer = new Name;
    this.validity = new Validity;
    this.subject = new Name;
    this.subjectPublicKeyInfo = new SubjectPublicKeyInfo;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    context: 0,
    defaultValue: Version.v1
  })
], TBSCertificate.prototype, "version", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.Integer,
    converter: AsnIntegerArrayBufferConverter
  })
], TBSCertificate.prototype, "serialNumber", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], TBSCertificate.prototype, "signature", undefined);
__decorate([
  AsnProp({ type: Name })
], TBSCertificate.prototype, "issuer", undefined);
__decorate([
  AsnProp({ type: Validity })
], TBSCertificate.prototype, "validity", undefined);
__decorate([
  AsnProp({ type: Name })
], TBSCertificate.prototype, "subject", undefined);
__decorate([
  AsnProp({ type: SubjectPublicKeyInfo })
], TBSCertificate.prototype, "subjectPublicKeyInfo", undefined);
__decorate([
  AsnProp({
    type: AsnPropTypes.BitString,
    context: 1,
    implicit: true,
    optional: true
  })
], TBSCertificate.prototype, "issuerUniqueID", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BitString, context: 2, implicit: true, optional: true })
], TBSCertificate.prototype, "subjectUniqueID", undefined);
__decorate([
  AsnProp({ type: Extensions, context: 3, optional: true })
], TBSCertificate.prototype, "extensions", undefined);

// node_modules/@peculiar/asn1-x509/build/es2015/certificate.js
class Certificate {
  constructor(params = {}) {
    this.tbsCertificate = new TBSCertificate;
    this.signatureAlgorithm = new AlgorithmIdentifier;
    this.signatureValue = new ArrayBuffer(0);
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: TBSCertificate })
], Certificate.prototype, "tbsCertificate", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], Certificate.prototype, "signatureAlgorithm", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BitString })
], Certificate.prototype, "signatureValue", undefined);
// node_modules/@peculiar/asn1-x509/build/es2015/tbs_cert_list.js
class RevokedCertificate {
  constructor(params = {}) {
    this.userCertificate = new ArrayBuffer(0);
    this.revocationDate = new Time;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RevokedCertificate.prototype, "userCertificate", undefined);
__decorate([
  AsnProp({ type: Time })
], RevokedCertificate.prototype, "revocationDate", undefined);
__decorate([
  AsnProp({ type: Extension, optional: true, repeated: "sequence" })
], RevokedCertificate.prototype, "crlEntryExtensions", undefined);

class TBSCertList {
  constructor(params = {}) {
    this.signature = new AlgorithmIdentifier;
    this.issuer = new Name;
    this.thisUpdate = new Time;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, optional: true })
], TBSCertList.prototype, "version", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], TBSCertList.prototype, "signature", undefined);
__decorate([
  AsnProp({ type: Name })
], TBSCertList.prototype, "issuer", undefined);
__decorate([
  AsnProp({ type: Time })
], TBSCertList.prototype, "thisUpdate", undefined);
__decorate([
  AsnProp({ type: Time, optional: true })
], TBSCertList.prototype, "nextUpdate", undefined);
__decorate([
  AsnProp({ type: RevokedCertificate, repeated: "sequence", optional: true })
], TBSCertList.prototype, "revokedCertificates", undefined);
__decorate([
  AsnProp({ type: Extension, optional: true, context: 0, repeated: "sequence" })
], TBSCertList.prototype, "crlExtensions", undefined);

// node_modules/@peculiar/asn1-x509/build/es2015/certificate_list.js
class CertificateList {
  constructor(params = {}) {
    this.tbsCertList = new TBSCertList;
    this.signatureAlgorithm = new AlgorithmIdentifier;
    this.signature = new ArrayBuffer(0);
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: TBSCertList })
], CertificateList.prototype, "tbsCertList", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], CertificateList.prototype, "signatureAlgorithm", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BitString })
], CertificateList.prototype, "signature", undefined);
// node_modules/@simplewebauthn/server/esm/helpers/getCertificateInfo.js
var issuerSubjectIDKey = {
  "2.5.4.6": "C",
  "2.5.4.10": "O",
  "2.5.4.11": "OU",
  "2.5.4.3": "CN"
};
function getCertificateInfo(leafCertBuffer) {
  const x509 = AsnParser.parse(leafCertBuffer, Certificate);
  const parsedCert = x509.tbsCertificate;
  const issuer = { combined: "" };
  parsedCert.issuer.forEach(([iss]) => {
    const key = issuerSubjectIDKey[iss.type];
    if (key) {
      issuer[key] = iss.value.toString();
    }
  });
  issuer.combined = issuerSubjectToString(issuer);
  const subject = { combined: "" };
  parsedCert.subject.forEach(([iss]) => {
    const key = issuerSubjectIDKey[iss.type];
    if (key) {
      subject[key] = iss.value.toString();
    }
  });
  subject.combined = issuerSubjectToString(subject);
  let basicConstraintsCA = false;
  if (parsedCert.extensions) {
    for (const ext of parsedCert.extensions) {
      if (ext.extnID === id_ce_basicConstraints) {
        const basicConstraints = AsnParser.parse(ext.extnValue, BasicConstraints);
        basicConstraintsCA = basicConstraints.cA;
      }
    }
  }
  return {
    issuer,
    subject,
    version: parsedCert.version,
    basicConstraintsCA,
    notBefore: parsedCert.validity.notBefore.getTime(),
    notAfter: parsedCert.validity.notAfter.getTime(),
    parsedCertificate: x509
  };
}
function issuerSubjectToString(input) {
  const parts = [];
  if (input.C) {
    parts.push(input.C);
  }
  if (input.O) {
    parts.push(input.O);
  }
  if (input.OU) {
    parts.push(input.OU);
  }
  if (input.CN) {
    parts.push(input.CN);
  }
  return parts.join(" : ");
}
// node_modules/@simplewebauthn/server/esm/helpers/fetch.js
function fetch(url) {
  return _fetchInternals.stubThis(url);
}
var _fetchInternals = {
  stubThis: (url) => globalThis.fetch(url)
};

// node_modules/@simplewebauthn/server/esm/helpers/isCertRevoked.js
var cacheRevokedCerts = {};
async function isCertRevoked(cert) {
  const { extensions: extensions2 } = cert.tbsCertificate;
  if (!extensions2) {
    return false;
  }
  let extAuthorityKeyID;
  let extSubjectKeyID;
  let extCRLDistributionPoints;
  extensions2.forEach((ext) => {
    if (ext.extnID === id_ce_authorityKeyIdentifier) {
      extAuthorityKeyID = AsnParser.parse(ext.extnValue, AuthorityKeyIdentifier);
    } else if (ext.extnID === id_ce_subjectKeyIdentifier) {
      extSubjectKeyID = AsnParser.parse(ext.extnValue, SubjectKeyIdentifier);
    } else if (ext.extnID === id_ce_cRLDistributionPoints) {
      extCRLDistributionPoints = AsnParser.parse(ext.extnValue, CRLDistributionPoints);
    }
  });
  let keyIdentifier = undefined;
  if (extAuthorityKeyID && extAuthorityKeyID.keyIdentifier) {
    keyIdentifier = exports_isoUint8Array.toHex(new Uint8Array(extAuthorityKeyID.keyIdentifier.buffer));
  } else if (extSubjectKeyID) {
    keyIdentifier = exports_isoUint8Array.toHex(new Uint8Array(extSubjectKeyID.buffer));
  }
  const certSerialHex = exports_isoUint8Array.toHex(new Uint8Array(cert.tbsCertificate.serialNumber));
  if (keyIdentifier) {
    const cached = cacheRevokedCerts[keyIdentifier];
    if (cached) {
      const now = new Date;
      if (!cached.nextUpdate || cached.nextUpdate > now) {
        return cached.revokedCerts.indexOf(certSerialHex) >= 0;
      }
    }
  }
  const crlURL = extCRLDistributionPoints?.[0].distributionPoint?.fullName?.[0].uniformResourceIdentifier;
  if (!crlURL) {
    return false;
  }
  let certListBytes;
  try {
    const respCRL = await fetch(crlURL);
    certListBytes = await respCRL.arrayBuffer();
  } catch (_err) {
    return false;
  }
  let data;
  try {
    data = AsnParser.parse(certListBytes, CertificateList);
  } catch (_err) {
    return false;
  }
  const newCached = {
    revokedCerts: [],
    nextUpdate: undefined
  };
  if (data.tbsCertList.nextUpdate) {
    newCached.nextUpdate = data.tbsCertList.nextUpdate.getTime();
  }
  const revokedCerts = data.tbsCertList.revokedCertificates;
  if (revokedCerts) {
    for (const cert2 of revokedCerts) {
      const revokedHex = exports_isoUint8Array.toHex(new Uint8Array(cert2.userCertificate));
      newCached.revokedCerts.push(revokedHex);
    }
    if (keyIdentifier) {
      cacheRevokedCerts[keyIdentifier] = newCached;
    }
    return newCached.revokedCerts.indexOf(certSerialHex) >= 0;
  }
  return false;
}
// node_modules/@simplewebauthn/server/esm/helpers/decodeAuthenticatorExtensions.js
function decodeAuthenticatorExtensions(extensionData) {
  let toCBOR;
  try {
    toCBOR = exports_isoCBOR.decodeFirst(extensionData);
  } catch (err) {
    const _err = err;
    throw new Error(`Error decoding authenticator extensions: ${_err.message}`);
  }
  return convertMapToObjectDeep(toCBOR);
}
function convertMapToObjectDeep(input) {
  const mapped = {};
  for (const [key, value] of input) {
    if (value instanceof Map) {
      mapped[key] = convertMapToObjectDeep(value);
    } else {
      mapped[key] = value;
    }
  }
  return mapped;
}

// node_modules/@simplewebauthn/server/esm/helpers/parseAuthenticatorData.js
function parseAuthenticatorData(authData) {
  if (authData.byteLength < 37) {
    throw new Error(`Authenticator data was ${authData.byteLength} bytes, expected at least 37 bytes`);
  }
  let pointer = 0;
  const dataView = exports_isoUint8Array.toDataView(authData);
  const rpIdHash = authData.slice(pointer, pointer += 32);
  const flagsBuf = authData.slice(pointer, pointer += 1);
  const flagsInt = flagsBuf[0];
  const flags = {
    up: !!(flagsInt & 1 << 0),
    uv: !!(flagsInt & 1 << 2),
    be: !!(flagsInt & 1 << 3),
    bs: !!(flagsInt & 1 << 4),
    at: !!(flagsInt & 1 << 6),
    ed: !!(flagsInt & 1 << 7),
    flagsInt
  };
  const counterBuf = authData.slice(pointer, pointer + 4);
  const counter = dataView.getUint32(pointer, false);
  pointer += 4;
  let aaguid = undefined;
  let credentialID = undefined;
  let credentialPublicKey = undefined;
  if (flags.at) {
    aaguid = authData.slice(pointer, pointer += 16);
    const credIDLen = dataView.getUint16(pointer);
    pointer += 2;
    credentialID = authData.slice(pointer, pointer += credIDLen);
    const badEdDSACBOR = exports_isoUint8Array.fromHex("a301634f4b500327206745643235353139");
    const bytesAtCurrentPosition = authData.slice(pointer, pointer + badEdDSACBOR.byteLength);
    let foundBadCBOR = false;
    if (exports_isoUint8Array.areEqual(badEdDSACBOR, bytesAtCurrentPosition)) {
      foundBadCBOR = true;
      authData[pointer] = 164;
    }
    const firstDecoded = exports_isoCBOR.decodeFirst(authData.slice(pointer));
    const firstEncoded = Uint8Array.from(exports_isoCBOR.encode(firstDecoded));
    if (foundBadCBOR) {
      authData[pointer] = 163;
    }
    credentialPublicKey = firstEncoded;
    pointer += firstEncoded.byteLength;
  }
  let extensionsData = undefined;
  let extensionsDataBuffer = undefined;
  if (flags.ed) {
    const firstDecoded = exports_isoCBOR.decodeFirst(authData.slice(pointer));
    extensionsDataBuffer = Uint8Array.from(exports_isoCBOR.encode(firstDecoded));
    extensionsData = decodeAuthenticatorExtensions(extensionsDataBuffer);
    pointer += extensionsDataBuffer.byteLength;
  }
  if (authData.byteLength > pointer) {
    throw new Error("Leftover bytes detected while parsing authenticator data");
  }
  return _parseAuthenticatorDataInternals.stubThis({
    rpIdHash,
    flagsBuf,
    flags,
    counter,
    counterBuf,
    aaguid,
    credentialID,
    credentialPublicKey,
    extensionsData,
    extensionsDataBuffer
  });
}
var _parseAuthenticatorDataInternals = {
  stubThis: (value) => value
};
// node_modules/@simplewebauthn/server/esm/helpers/toHash.js
function toHash(data, algorithm2 = -7) {
  if (typeof data === "string") {
    data = exports_isoUint8Array.fromUTF8String(data);
  }
  const digest2 = exports_isoCrypto.digest(data, algorithm2);
  return digest2;
}
// node_modules/@peculiar/asn1-ecc/build/es2015/object_identifiers.js
var id_ecPublicKey = "1.2.840.10045.2.1";
var id_ecdsaWithSHA1 = "1.2.840.10045.4.1";
var id_ecdsaWithSHA224 = "1.2.840.10045.4.3.1";
var id_ecdsaWithSHA256 = "1.2.840.10045.4.3.2";
var id_ecdsaWithSHA384 = "1.2.840.10045.4.3.3";
var id_ecdsaWithSHA512 = "1.2.840.10045.4.3.4";
var id_secp256r1 = "1.2.840.10045.3.1.7";
var id_secp384r1 = "1.3.132.0.34";

// node_modules/@peculiar/asn1-ecc/build/es2015/algorithms.js
function create(algorithm2) {
  return new AlgorithmIdentifier({ algorithm: algorithm2 });
}
var ecdsaWithSHA1 = create(id_ecdsaWithSHA1);
var ecdsaWithSHA224 = create(id_ecdsaWithSHA224);
var ecdsaWithSHA256 = create(id_ecdsaWithSHA256);
var ecdsaWithSHA384 = create(id_ecdsaWithSHA384);
var ecdsaWithSHA512 = create(id_ecdsaWithSHA512);
// node_modules/@peculiar/asn1-ecc/build/es2015/rfc3279.js
var FieldID = class FieldID2 {
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], FieldID.prototype, "fieldType", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Any })
], FieldID.prototype, "parameters", undefined);
FieldID = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], FieldID);
class ECPoint extends OctetString2 {
}
var Curve = class Curve2 {
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.OctetString })
], Curve.prototype, "a", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.OctetString })
], Curve.prototype, "b", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BitString, optional: true })
], Curve.prototype, "seed", undefined);
Curve = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], Curve);
var ECPVer;
(function(ECPVer2) {
  ECPVer2[ECPVer2["ecpVer1"] = 1] = "ecpVer1";
})(ECPVer || (ECPVer = {}));
var SpecifiedECDomain = class SpecifiedECDomain2 {
  constructor(params = {}) {
    this.version = ECPVer.ecpVer1;
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], SpecifiedECDomain.prototype, "version", undefined);
__decorate([
  AsnProp({ type: FieldID })
], SpecifiedECDomain.prototype, "fieldID", undefined);
__decorate([
  AsnProp({ type: Curve })
], SpecifiedECDomain.prototype, "curve", undefined);
__decorate([
  AsnProp({ type: ECPoint })
], SpecifiedECDomain.prototype, "base", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], SpecifiedECDomain.prototype, "order", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, optional: true })
], SpecifiedECDomain.prototype, "cofactor", undefined);
SpecifiedECDomain = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence })
], SpecifiedECDomain);

// node_modules/@peculiar/asn1-ecc/build/es2015/ec_parameters.js
var ECParameters = class ECParameters2 {
  constructor(params = {}) {
    Object.assign(this, params);
  }
};
__decorate([
  AsnProp({ type: AsnPropTypes.ObjectIdentifier })
], ECParameters.prototype, "namedCurve", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Null })
], ECParameters.prototype, "implicitCurve", undefined);
__decorate([
  AsnProp({ type: SpecifiedECDomain })
], ECParameters.prototype, "specifiedCurve", undefined);
ECParameters = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], ECParameters);
// node_modules/@peculiar/asn1-ecc/build/es2015/ec_private_key.js
class ECPrivateKey {
  constructor(params = {}) {
    this.version = 1;
    this.privateKey = new OctetString2;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], ECPrivateKey.prototype, "version", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], ECPrivateKey.prototype, "privateKey", undefined);
__decorate([
  AsnProp({ type: ECParameters, context: 0, optional: true })
], ECPrivateKey.prototype, "parameters", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.BitString, context: 1, optional: true })
], ECPrivateKey.prototype, "publicKey", undefined);
// node_modules/@peculiar/asn1-ecc/build/es2015/ec_signature_value.js
class ECDSASigValue {
  constructor(params = {}) {
    this.r = new ArrayBuffer(0);
    this.s = new ArrayBuffer(0);
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], ECDSASigValue.prototype, "r", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], ECDSASigValue.prototype, "s", undefined);
// node_modules/@peculiar/asn1-rsa/build/es2015/object_identifiers.js
var id_pkcs_1 = "1.2.840.113549.1.1";
var id_rsaEncryption = `${id_pkcs_1}.1`;
var id_RSAES_OAEP = `${id_pkcs_1}.7`;
var id_pSpecified = `${id_pkcs_1}.9`;
var id_RSASSA_PSS = `${id_pkcs_1}.10`;
var id_md2WithRSAEncryption = `${id_pkcs_1}.2`;
var id_md5WithRSAEncryption = `${id_pkcs_1}.4`;
var id_sha1WithRSAEncryption = `${id_pkcs_1}.5`;
var id_sha224WithRSAEncryption = `${id_pkcs_1}.14`;
var id_sha256WithRSAEncryption = `${id_pkcs_1}.11`;
var id_sha384WithRSAEncryption = `${id_pkcs_1}.12`;
var id_sha512WithRSAEncryption = `${id_pkcs_1}.13`;
var id_sha512_224WithRSAEncryption = `${id_pkcs_1}.15`;
var id_sha512_256WithRSAEncryption = `${id_pkcs_1}.16`;
var id_sha1 = "1.3.14.3.2.26";
var id_sha224 = "2.16.840.1.101.3.4.2.4";
var id_sha256 = "2.16.840.1.101.3.4.2.1";
var id_sha384 = "2.16.840.1.101.3.4.2.2";
var id_sha512 = "2.16.840.1.101.3.4.2.3";
var id_sha512_224 = "2.16.840.1.101.3.4.2.5";
var id_sha512_256 = "2.16.840.1.101.3.4.2.6";
var id_md2 = "1.2.840.113549.2.2";
var id_md5 = "1.2.840.113549.2.5";
var id_mgf1 = `${id_pkcs_1}.8`;

// node_modules/@peculiar/asn1-rsa/build/es2015/algorithms.js
function create2(algorithm2) {
  return new AlgorithmIdentifier({ algorithm: algorithm2, parameters: null });
}
var md2 = create2(id_md2);
var md4 = create2(id_md5);
var sha1 = create2(id_sha1);
var sha224 = create2(id_sha224);
var sha256 = create2(id_sha256);
var sha384 = create2(id_sha384);
var sha512 = create2(id_sha512);
var sha512_224 = create2(id_sha512_224);
var sha512_256 = create2(id_sha512_256);
var mgf1SHA1 = new AlgorithmIdentifier({
  algorithm: id_mgf1,
  parameters: AsnConvert.serialize(sha1)
});
var pSpecifiedEmpty = new AlgorithmIdentifier({
  algorithm: id_pSpecified,
  parameters: AsnConvert.serialize(AsnOctetStringConverter.toASN(new Uint8Array([218, 57, 163, 238, 94, 107, 75, 13, 50, 85, 191, 239, 149, 96, 24, 144, 175, 216, 7, 9]).buffer))
});
var rsaEncryption = create2(id_rsaEncryption);
var md2WithRSAEncryption = create2(id_md2WithRSAEncryption);
var md5WithRSAEncryption = create2(id_md5WithRSAEncryption);
var sha1WithRSAEncryption = create2(id_sha1WithRSAEncryption);
var sha224WithRSAEncryption = create2(id_sha512_224WithRSAEncryption);
var sha256WithRSAEncryption = create2(id_sha512_256WithRSAEncryption);
var sha384WithRSAEncryption = create2(id_sha384WithRSAEncryption);
var sha512WithRSAEncryption = create2(id_sha512WithRSAEncryption);
var sha512_224WithRSAEncryption = create2(id_sha512_224WithRSAEncryption);
var sha512_256WithRSAEncryption = create2(id_sha512_256WithRSAEncryption);

// node_modules/@peculiar/asn1-rsa/build/es2015/parameters/rsaes_oaep.js
class RsaEsOaepParams {
  constructor(params = {}) {
    this.hashAlgorithm = new AlgorithmIdentifier(sha1);
    this.maskGenAlgorithm = new AlgorithmIdentifier({
      algorithm: id_mgf1,
      parameters: AsnConvert.serialize(sha1)
    });
    this.pSourceAlgorithm = new AlgorithmIdentifier(pSpecifiedEmpty);
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AlgorithmIdentifier, context: 0, defaultValue: sha1 })
], RsaEsOaepParams.prototype, "hashAlgorithm", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier, context: 1, defaultValue: mgf1SHA1 })
], RsaEsOaepParams.prototype, "maskGenAlgorithm", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier, context: 2, defaultValue: pSpecifiedEmpty })
], RsaEsOaepParams.prototype, "pSourceAlgorithm", undefined);
var RSAES_OAEP = new AlgorithmIdentifier({
  algorithm: id_RSAES_OAEP,
  parameters: AsnConvert.serialize(new RsaEsOaepParams)
});
// node_modules/@peculiar/asn1-rsa/build/es2015/parameters/rsassa_pss.js
class RsaSaPssParams {
  constructor(params = {}) {
    this.hashAlgorithm = new AlgorithmIdentifier(sha1);
    this.maskGenAlgorithm = new AlgorithmIdentifier({
      algorithm: id_mgf1,
      parameters: AsnConvert.serialize(sha1)
    });
    this.saltLength = 20;
    this.trailerField = 1;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AlgorithmIdentifier, context: 0, defaultValue: sha1 })
], RsaSaPssParams.prototype, "hashAlgorithm", undefined);
__decorate([
  AsnProp({ type: AlgorithmIdentifier, context: 1, defaultValue: mgf1SHA1 })
], RsaSaPssParams.prototype, "maskGenAlgorithm", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, context: 2, defaultValue: 20 })
], RsaSaPssParams.prototype, "saltLength", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, context: 3, defaultValue: 1 })
], RsaSaPssParams.prototype, "trailerField", undefined);
var RSASSA_PSS = new AlgorithmIdentifier({
  algorithm: id_RSASSA_PSS,
  parameters: AsnConvert.serialize(new RsaSaPssParams)
});
// node_modules/@peculiar/asn1-rsa/build/es2015/parameters/rsassa_pkcs1_v1_5.js
class DigestInfo {
  constructor(params = {}) {
    this.digestAlgorithm = new AlgorithmIdentifier;
    this.digest = new OctetString2;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AlgorithmIdentifier })
], DigestInfo.prototype, "digestAlgorithm", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], DigestInfo.prototype, "digest", undefined);
// node_modules/@peculiar/asn1-rsa/build/es2015/other_prime_info.js
var OtherPrimeInfos_1;

class OtherPrimeInfo {
  constructor(params = {}) {
    this.prime = new ArrayBuffer(0);
    this.exponent = new ArrayBuffer(0);
    this.coefficient = new ArrayBuffer(0);
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], OtherPrimeInfo.prototype, "prime", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], OtherPrimeInfo.prototype, "exponent", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], OtherPrimeInfo.prototype, "coefficient", undefined);
var OtherPrimeInfos = OtherPrimeInfos_1 = class OtherPrimeInfos2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, OtherPrimeInfos_1.prototype);
  }
};
OtherPrimeInfos = OtherPrimeInfos_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: OtherPrimeInfo })
], OtherPrimeInfos);
// node_modules/@peculiar/asn1-rsa/build/es2015/rsa_private_key.js
class RSAPrivateKey {
  constructor(params = {}) {
    this.version = 0;
    this.modulus = new ArrayBuffer(0);
    this.publicExponent = new ArrayBuffer(0);
    this.privateExponent = new ArrayBuffer(0);
    this.prime1 = new ArrayBuffer(0);
    this.prime2 = new ArrayBuffer(0);
    this.exponent1 = new ArrayBuffer(0);
    this.exponent2 = new ArrayBuffer(0);
    this.coefficient = new ArrayBuffer(0);
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], RSAPrivateKey.prototype, "version", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "modulus", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "publicExponent", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "privateExponent", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "prime1", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "prime2", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "exponent1", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "exponent2", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "coefficient", undefined);
__decorate([
  AsnProp({ type: OtherPrimeInfos, optional: true })
], RSAPrivateKey.prototype, "otherPrimeInfos", undefined);
// node_modules/@peculiar/asn1-rsa/build/es2015/rsa_public_key.js
class RSAPublicKey {
  constructor(params = {}) {
    this.modulus = new ArrayBuffer(0);
    this.publicExponent = new ArrayBuffer(0);
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPublicKey.prototype, "modulus", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer, converter: AsnIntegerArrayBufferConverter })
], RSAPublicKey.prototype, "publicExponent", undefined);
// node_modules/@simplewebauthn/server/esm/helpers/mapX509SignatureAlgToCOSEAlg.js
function mapX509SignatureAlgToCOSEAlg(signatureAlgorithm) {
  let alg;
  if (signatureAlgorithm === "1.2.840.10045.4.3.2") {
    alg = COSEALG.ES256;
  } else if (signatureAlgorithm === "1.2.840.10045.4.3.3") {
    alg = COSEALG.ES384;
  } else if (signatureAlgorithm === "1.2.840.10045.4.3.4") {
    alg = COSEALG.ES512;
  } else if (signatureAlgorithm === "1.2.840.113549.1.1.11") {
    alg = COSEALG.RS256;
  } else if (signatureAlgorithm === "1.2.840.113549.1.1.12") {
    alg = COSEALG.RS384;
  } else if (signatureAlgorithm === "1.2.840.113549.1.1.13") {
    alg = COSEALG.RS512;
  } else if (signatureAlgorithm === "1.2.840.113549.1.1.5") {
    alg = COSEALG.RS1;
  } else {
    throw new Error(`Unable to map X.509 signature algorithm ${signatureAlgorithm} to a COSE algorithm`);
  }
  return alg;
}

// node_modules/@simplewebauthn/server/esm/helpers/convertX509PublicKeyToCOSE.js
function convertX509PublicKeyToCOSE(x509Certificate) {
  let cosePublicKey = new Map;
  const x509 = AsnParser.parse(x509Certificate, Certificate);
  const { tbsCertificate } = x509;
  const { subjectPublicKeyInfo, signature: _tbsSignature } = tbsCertificate;
  const signatureAlgorithm = _tbsSignature.algorithm;
  const publicKeyAlgorithmID = subjectPublicKeyInfo.algorithm.algorithm;
  if (publicKeyAlgorithmID === id_ecPublicKey) {
    if (!subjectPublicKeyInfo.algorithm.parameters) {
      throw new Error("Certificate public key was missing parameters (EC2)");
    }
    const ecParameters = AsnParser.parse(new Uint8Array(subjectPublicKeyInfo.algorithm.parameters), ECParameters);
    let crv = -999;
    const { namedCurve } = ecParameters;
    if (namedCurve === id_secp256r1) {
      crv = COSECRV.P256;
    } else if (namedCurve === id_secp384r1) {
      crv = COSECRV.P384;
    } else {
      throw new Error(`Certificate public key contained unexpected namedCurve ${namedCurve} (EC2)`);
    }
    const subjectPublicKey = new Uint8Array(subjectPublicKeyInfo.subjectPublicKey);
    let x;
    let y;
    if (subjectPublicKey[0] === 4) {
      let pointer = 1;
      const halfLength = (subjectPublicKey.length - 1) / 2;
      x = subjectPublicKey.slice(pointer, pointer += halfLength);
      y = subjectPublicKey.slice(pointer);
    } else {
      throw new Error('TODO: Figure out how to handle public keys in "compressed form"');
    }
    const coseEC2PubKey = new Map;
    coseEC2PubKey.set(COSEKEYS.kty, COSEKTY.EC2);
    coseEC2PubKey.set(COSEKEYS.alg, mapX509SignatureAlgToCOSEAlg(signatureAlgorithm));
    coseEC2PubKey.set(COSEKEYS.crv, crv);
    coseEC2PubKey.set(COSEKEYS.x, x);
    coseEC2PubKey.set(COSEKEYS.y, y);
    cosePublicKey = coseEC2PubKey;
  } else if (publicKeyAlgorithmID === "1.2.840.113549.1.1.1") {
    const rsaPublicKey = AsnParser.parse(subjectPublicKeyInfo.subjectPublicKey, RSAPublicKey);
    const coseRSAPubKey = new Map;
    coseRSAPubKey.set(COSEKEYS.kty, COSEKTY.RSA);
    coseRSAPubKey.set(COSEKEYS.alg, mapX509SignatureAlgToCOSEAlg(signatureAlgorithm));
    coseRSAPubKey.set(COSEKEYS.n, new Uint8Array(rsaPublicKey.modulus));
    coseRSAPubKey.set(COSEKEYS.e, new Uint8Array(rsaPublicKey.publicExponent));
    cosePublicKey = coseRSAPubKey;
  } else {
    throw new Error(`Certificate public key contained unexpected algorithm ID ${publicKeyAlgorithmID}`);
  }
  return cosePublicKey;
}

// node_modules/@simplewebauthn/server/esm/helpers/verifySignature.js
function verifySignature2(opts) {
  const { signature, data, credentialPublicKey, x509Certificate, hashAlgorithm } = opts;
  if (!x509Certificate && !credentialPublicKey) {
    throw new Error('Must declare either "leafCert" or "credentialPublicKey"');
  }
  if (x509Certificate && credentialPublicKey) {
    throw new Error('Must not declare both "leafCert" and "credentialPublicKey"');
  }
  let cosePublicKey = new Map;
  if (credentialPublicKey) {
    cosePublicKey = decodeCredentialPublicKey(credentialPublicKey);
  } else if (x509Certificate) {
    cosePublicKey = convertX509PublicKeyToCOSE(x509Certificate);
  }
  return _verifySignatureInternals.stubThis(exports_isoCrypto.verify({
    cosePublicKey,
    signature,
    data,
    shaHashOverride: hashAlgorithm
  }));
}
var _verifySignatureInternals = {
  stubThis: (value) => value
};

// node_modules/@simplewebauthn/server/esm/helpers/convertPEMToBytes.js
function convertPEMToBytes(pem) {
  const certBase64 = pem.replace("-----BEGIN CERTIFICATE-----", "").replace("-----END CERTIFICATE-----", "").replace(/[\n ]/g, "");
  return exports_isoBase64URL.toBuffer(certBase64, "base64");
}

// node_modules/@simplewebauthn/server/esm/helpers/validateCertificatePath.js
async function validateCertificatePath(x5cCertsPEM, trustAnchorsPEM = []) {
  if (trustAnchorsPEM.length === 0) {
    return true;
  }
  let invalidSubjectAndIssuerError = false;
  let certificateNotYetValidOrExpiredErrorMessage = undefined;
  for (const anchorPEM of trustAnchorsPEM) {
    try {
      const certsWithTrustAnchor = x5cCertsPEM.concat([anchorPEM]);
      await _validatePath(certsWithTrustAnchor);
      invalidSubjectAndIssuerError = false;
      certificateNotYetValidOrExpiredErrorMessage = undefined;
      break;
    } catch (err) {
      if (err instanceof InvalidSubjectAndIssuer) {
        invalidSubjectAndIssuerError = true;
      } else if (err instanceof CertificateNotYetValidOrExpired) {
        certificateNotYetValidOrExpiredErrorMessage = err.message;
      } else {
        throw err;
      }
    }
  }
  if (invalidSubjectAndIssuerError) {
    throw new InvalidSubjectAndIssuer;
  } else if (certificateNotYetValidOrExpiredErrorMessage) {
    throw new CertificateNotYetValidOrExpired(certificateNotYetValidOrExpiredErrorMessage);
  }
  return true;
}
async function _validatePath(x5cCertsWithTrustAnchorPEM) {
  if (new Set(x5cCertsWithTrustAnchorPEM).size !== x5cCertsWithTrustAnchorPEM.length) {
    throw new Error("Invalid certificate path: found duplicate certificates");
  }
  for (const certificatePEM of x5cCertsWithTrustAnchorPEM) {
    const certInfo = getCertificateInfo(convertPEMToBytes(certificatePEM));
    await assertCertNotRevoked(certInfo.parsedCertificate);
    assertCertIsWithinValidTimeWindow(certInfo, certificatePEM);
  }
  for (let i = 0;i < x5cCertsWithTrustAnchorPEM.length - 1; i += 1) {
    const subjectPem = x5cCertsWithTrustAnchorPEM[i];
    const issuerPem = x5cCertsWithTrustAnchorPEM[i + 1];
    const subjectInfo = getCertificateInfo(convertPEMToBytes(subjectPem));
    const issuerInfo = getCertificateInfo(convertPEMToBytes(issuerPem));
    if (subjectInfo.issuer.combined !== issuerInfo.subject.combined) {
      throw new InvalidSubjectAndIssuer;
    }
    const issuerCertIsRootCert = issuerInfo.issuer.combined === issuerInfo.subject.combined;
    await assertSubjectIsSignedByIssuer(subjectInfo.parsedCertificate, issuerPem);
    if (issuerCertIsRootCert) {
      await assertSubjectIsSignedByIssuer(issuerInfo.parsedCertificate, issuerPem);
    }
  }
  return true;
}
async function assertCertNotRevoked(certificate2) {
  const subjectCertRevoked = await isCertRevoked(certificate2);
  if (subjectCertRevoked) {
    throw new Error(`Found revoked certificate in certificate path`);
  }
}
function assertCertIsWithinValidTimeWindow(certInfo, certPEM) {
  const { notBefore, notAfter } = certInfo;
  const now = new Date(Date.now());
  if (notBefore > now || notAfter < now) {
    throw new CertificateNotYetValidOrExpired(`Certificate is not yet valid or expired: ${certPEM}`);
  }
}
async function assertSubjectIsSignedByIssuer(subjectCert, issuerPEM) {
  const data = AsnSerializer.serialize(subjectCert.tbsCertificate);
  const signature = subjectCert.signatureValue;
  const signatureAlgorithm = mapX509SignatureAlgToCOSEAlg(subjectCert.signatureAlgorithm.algorithm);
  const issuerCertBytes = convertPEMToBytes(issuerPEM);
  const verified = await verifySignature2({
    data: new Uint8Array(data),
    signature: new Uint8Array(signature),
    x509Certificate: issuerCertBytes,
    hashAlgorithm: signatureAlgorithm
  });
  if (!verified) {
    throw new InvalidSubjectSignatureForIssuer;
  }
}

class InvalidSubjectAndIssuer extends Error {
  constructor() {
    const message = "Subject issuer did not match issuer subject";
    super(message);
    this.name = "InvalidSubjectAndIssuer";
  }
}

class InvalidSubjectSignatureForIssuer extends Error {
  constructor() {
    const message = "Subject signature was invalid for issuer";
    super(message);
    this.name = "InvalidSubjectSignatureForIssuer";
  }
}

class CertificateNotYetValidOrExpired extends Error {
  constructor(message) {
    super(message);
    this.name = "CertificateNotYetValidOrExpired";
  }
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verifyOKP.js
async function verifyOKP(opts) {
  const { cosePublicKey, signature, data } = opts;
  const WebCrypto = await getWebCrypto();
  const alg = cosePublicKey.get(COSEKEYS.alg);
  const crv = cosePublicKey.get(COSEKEYS.crv);
  const x = cosePublicKey.get(COSEKEYS.x);
  if (!alg) {
    throw new Error("Public key was missing alg (OKP)");
  }
  if (!isCOSEAlg(alg)) {
    throw new Error(`Public key had invalid alg ${alg} (OKP)`);
  }
  if (!crv) {
    throw new Error("Public key was missing crv (OKP)");
  }
  if (!x) {
    throw new Error("Public key was missing x (OKP)");
  }
  let _crv;
  if (crv === COSECRV.ED25519) {
    _crv = "Ed25519";
  } else {
    throw new Error(`Unexpected COSE crv value of ${crv} (OKP)`);
  }
  const keyData = {
    kty: "OKP",
    crv: _crv,
    alg: "EdDSA",
    x: exports_isoBase64URL.fromBuffer(x),
    ext: false
  };
  const keyAlgorithm = {
    name: _crv,
    namedCurve: _crv
  };
  const key = await importKey({
    keyData,
    algorithm: keyAlgorithm
  });
  const verifyAlgorithm = {
    name: _crv
  };
  return WebCrypto.subtle.verify(verifyAlgorithm, key, signature, data);
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/unwrapEC2Signature.js
function unwrapEC2Signature(signature, crv) {
  const parsedSignature = AsnParser.parse(signature, ECDSASigValue);
  const rBytes = new Uint8Array(parsedSignature.r);
  const sBytes = new Uint8Array(parsedSignature.s);
  const componentLength = getSignatureComponentLength(crv);
  const rNormalizedBytes = toNormalizedBytes(rBytes, componentLength);
  const sNormalizedBytes = toNormalizedBytes(sBytes, componentLength);
  const finalSignature = exports_isoUint8Array.concat([
    rNormalizedBytes,
    sNormalizedBytes
  ]);
  return finalSignature;
}
function getSignatureComponentLength(crv) {
  switch (crv) {
    case COSECRV.P256:
      return 32;
    case COSECRV.P384:
      return 48;
    case COSECRV.P521:
      return 66;
    default:
      throw new Error(`Unexpected COSE crv value of ${crv} (EC2)`);
  }
}
function toNormalizedBytes(bytes, componentLength) {
  let normalizedBytes;
  if (bytes.length < componentLength) {
    normalizedBytes = new Uint8Array(componentLength);
    normalizedBytes.set(bytes, componentLength - bytes.length);
  } else if (bytes.length === componentLength) {
    normalizedBytes = bytes;
  } else if (bytes.length === componentLength + 1 && bytes[0] === 0 && (bytes[1] & 128) === 128) {
    normalizedBytes = bytes.subarray(1);
  } else {
    throw new Error(`Invalid signature component length ${bytes.length}, expected ${componentLength}`);
  }
  return normalizedBytes;
}

// node_modules/@simplewebauthn/server/esm/helpers/iso/isoCrypto/verify.js
function verify(opts) {
  const { cosePublicKey, signature, data, shaHashOverride } = opts;
  if (isCOSEPublicKeyEC2(cosePublicKey)) {
    const crv = cosePublicKey.get(COSEKEYS.crv);
    if (!isCOSECrv(crv)) {
      throw new Error(`unknown COSE curve ${crv}`);
    }
    const unwrappedSignature = unwrapEC2Signature(signature, crv);
    return verifyEC2({
      cosePublicKey,
      signature: unwrappedSignature,
      data,
      shaHashOverride
    });
  } else if (isCOSEPublicKeyRSA(cosePublicKey)) {
    return verifyRSA({ cosePublicKey, signature, data, shaHashOverride });
  } else if (isCOSEPublicKeyOKP(cosePublicKey)) {
    return verifyOKP({ cosePublicKey, signature, data });
  }
  const kty = cosePublicKey.get(COSEKEYS.kty);
  throw new Error(`Signature verification with public key of kty ${kty} is not supported by this method`);
}
// node_modules/@simplewebauthn/server/esm/helpers/iso/isoUint8Array.js
var exports_isoUint8Array = {};
__export(exports_isoUint8Array, {
  toUTF8String: () => toUTF8String2,
  toHex: () => toHex,
  toDataView: () => toDataView,
  fromUTF8String: () => fromUTF8String2,
  fromHex: () => fromHex,
  fromASCIIString: () => fromASCIIString,
  concat: () => concat2,
  areEqual: () => areEqual
});
function areEqual(array1, array2) {
  if (array1.length != array2.length) {
    return false;
  }
  return array1.every((val, i) => val === array2[i]);
}
function toHex(array) {
  const hexParts = Array.from(array, (i) => i.toString(16).padStart(2, "0"));
  return hexParts.join("");
}
function fromHex(hex) {
  if (!hex) {
    return Uint8Array.from([]);
  }
  const isValid2 = hex.length !== 0 && hex.length % 2 === 0 && !/[^a-fA-F0-9]/u.test(hex);
  if (!isValid2) {
    throw new Error("Invalid hex string");
  }
  const byteStrings = hex.match(/.{1,2}/g) ?? [];
  return Uint8Array.from(byteStrings.map((byte) => parseInt(byte, 16)));
}
function concat2(arrays) {
  let pointer = 0;
  const totalLength = arrays.reduce((prev, curr) => prev + curr.length, 0);
  const toReturn = new Uint8Array(totalLength);
  arrays.forEach((arr) => {
    toReturn.set(arr, pointer);
    pointer += arr.length;
  });
  return toReturn;
}
function toUTF8String2(array) {
  const decoder = new globalThis.TextDecoder("utf-8");
  return decoder.decode(array);
}
function fromUTF8String2(utf8String) {
  const encoder = new globalThis.TextEncoder;
  return encoder.encode(utf8String);
}
function fromASCIIString(value) {
  return Uint8Array.from(value.split("").map((x) => x.charCodeAt(0)));
}
function toDataView(array) {
  return new DataView(array.buffer, array.byteOffset, array.length);
}
// node_modules/@simplewebauthn/server/esm/helpers/generateChallenge.js
async function generateChallenge2() {
  const challenge = new Uint8Array(32);
  await exports_isoCrypto.getRandomValues(challenge);
  return _generateChallengeInternals.stubThis(challenge);
}
var _generateChallengeInternals = {
  stubThis: (value) => value
};

// node_modules/@simplewebauthn/server/esm/registration/generateRegistrationOptions.js
var supportedCOSEAlgorithmIdentifiers = [
  -8,
  -7,
  -36,
  -37,
  -38,
  -39,
  -257,
  -258,
  -259,
  -65535
];
var defaultAuthenticatorSelection = {
  residentKey: "preferred",
  userVerification: "preferred"
};
var defaultSupportedAlgorithmIDs = [-8, -7, -257];
async function generateRegistrationOptions(options) {
  const { rpName, rpID, userName, userID, challenge = await generateChallenge2(), userDisplayName = "", timeout = 60000, attestationType = "none", excludeCredentials = [], authenticatorSelection = defaultAuthenticatorSelection, extensions: extensions2, supportedAlgorithmIDs = defaultSupportedAlgorithmIDs, preferredAuthenticatorType } = options;
  const pubKeyCredParams = supportedAlgorithmIDs.map((id) => ({
    alg: id,
    type: "public-key"
  }));
  if (authenticatorSelection.residentKey === undefined) {
    if (authenticatorSelection.requireResidentKey) {
      authenticatorSelection.residentKey = "required";
    } else {}
  } else {
    authenticatorSelection.requireResidentKey = authenticatorSelection.residentKey === "required";
  }
  let _challenge = challenge;
  if (typeof _challenge === "string") {
    _challenge = exports_isoUint8Array.fromUTF8String(_challenge);
  }
  if (typeof userID === "string") {
    throw new Error(`String values for \`userID\` are no longer supported. See https://simplewebauthn.dev/docs/advanced/server/custom-user-ids`);
  }
  let _userID = userID;
  if (!_userID) {
    _userID = await generateUserID();
  }
  const hints = [];
  if (preferredAuthenticatorType) {
    if (preferredAuthenticatorType === "securityKey") {
      hints.push("security-key");
      authenticatorSelection.authenticatorAttachment = "cross-platform";
    } else if (preferredAuthenticatorType === "localDevice") {
      hints.push("client-device");
      authenticatorSelection.authenticatorAttachment = "platform";
    } else if (preferredAuthenticatorType === "remoteDevice") {
      hints.push("hybrid");
      authenticatorSelection.authenticatorAttachment = "cross-platform";
    }
  }
  return {
    challenge: exports_isoBase64URL.fromBuffer(_challenge),
    rp: {
      name: rpName,
      id: rpID
    },
    user: {
      id: exports_isoBase64URL.fromBuffer(_userID),
      name: userName,
      displayName: userDisplayName
    },
    pubKeyCredParams,
    timeout,
    attestation: attestationType,
    excludeCredentials: excludeCredentials.map((cred) => {
      if (!exports_isoBase64URL.isBase64URL(cred.id)) {
        throw new Error(`excludeCredential id "${cred.id}" is not a valid base64url string`);
      }
      return {
        ...cred,
        id: exports_isoBase64URL.trimPadding(cred.id),
        type: "public-key"
      };
    }),
    authenticatorSelection,
    extensions: {
      ...extensions2,
      credProps: true
    },
    hints
  };
}
// node_modules/@simplewebauthn/server/esm/helpers/parseBackupFlags.js
function parseBackupFlags({ be, bs }) {
  const credentialBackedUp = bs;
  let credentialDeviceType = "singleDevice";
  if (be) {
    credentialDeviceType = "multiDevice";
  }
  if (credentialDeviceType === "singleDevice" && credentialBackedUp) {
    throw new InvalidBackupFlags("Single-device credential indicated that it was backed up, which should be impossible.");
  }
  return { credentialDeviceType, credentialBackedUp };
}

class InvalidBackupFlags extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidBackupFlags";
  }
}

// node_modules/@simplewebauthn/server/esm/helpers/matchExpectedRPID.js
async function matchExpectedRPID(rpIDHash, expectedRPIDs) {
  try {
    const matchedRPID = await Promise.any(expectedRPIDs.map((expected) => {
      return new Promise((resolve, reject) => {
        toHash(exports_isoUint8Array.fromASCIIString(expected)).then((expectedRPIDHash) => {
          if (exports_isoUint8Array.areEqual(rpIDHash, expectedRPIDHash)) {
            resolve(expected);
          } else {
            reject();
          }
        });
      });
    }));
    return matchedRPID;
  } catch (err) {
    const _err = err;
    if (_err.name === "AggregateError") {
      throw new UnexpectedRPIDHash;
    }
    throw err;
  }
}

class UnexpectedRPIDHash extends Error {
  constructor() {
    const message = "Unexpected RP ID hash";
    super(message);
    this.name = "UnexpectedRPIDHash";
  }
}

// node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/android-safetynet.js
var GlobalSign_Root_CA = `-----BEGIN CERTIFICATE-----
MIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkG
A1UEBhMCQkUxGTAXBgNVBAoTEEdsb2JhbFNpZ24gbnYtc2ExEDAOBgNVBAsTB1Jv
b3QgQ0ExGzAZBgNVBAMTEkdsb2JhbFNpZ24gUm9vdCBDQTAeFw05ODA5MDExMjAw
MDBaFw0yODAxMjgxMjAwMDBaMFcxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9i
YWxTaWduIG52LXNhMRAwDgYDVQQLEwdSb290IENBMRswGQYDVQQDExJHbG9iYWxT
aWduIFJvb3QgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDaDuaZ
jc6j40+Kfvvxi4Mla+pIH/EqsLmVEQS98GPR4mdmzxzdzxtIK+6NiY6arymAZavp
xy0Sy6scTHAHoT0KMM0VjU/43dSMUBUc71DuxC73/OlS8pF94G3VNTCOXkNz8kHp
1Wrjsok6Vjk4bwY8iGlbKk3Fp1S4bInMm/k8yuX9ifUSPJJ4ltbcdG6TRGHRjcdG
snUOhugZitVtbNV4FpWi6cgKOOvyJBNPc1STE4U6G7weNLWLBYy5d4ux2x8gkasJ
U26Qzns3dLlwR5EiUWMWea6xrkEmCMgZK9FGqkjWZCrXgzT/LCrBbBlDSgeF59N8
9iFo7+ryUp9/k5DPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8E
BTADAQH/MB0GA1UdDgQWBBRge2YaRQ2XyolQL30EzTSo//z9SzANBgkqhkiG9w0B
AQUFAAOCAQEA1nPnfE920I2/7LqivjTFKDK1fPxsnCwrvQmeU79rXqoRSLblCKOz
yj1hTdNGCbM+w6DjY1Ub8rrvrTnhQ7k4o+YviiY776BQVvnGCv04zcQLcFGUl5gE
38NflNUVyRRBnMRddWQVDf9VMOyGj/8N7yy5Y0b2qvzfvGn9LhJIZJrglfCm7ymP
AbEVtQwdpf5pLGkkeB6zpxxxYu7KyJesF12KwvhHhm4qxFYxldBniYUr+WymXUad
DKqC5JlR3XC321Y9YeRq4VzW9v493kHMB65jUr9TU/Qr6cf9tveCX4XSQRjbgbME
HMUfpIBvFSDJ3gyICh3WZlXi/EjJKSZp4A==
-----END CERTIFICATE-----
`;

// node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/android-key.js
var Google_Hardware_Attestation_Root_1 = `-----BEGIN CERTIFICATE-----
MIIFYDCCA0igAwIBAgIJAOj6GWMU0voYMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV
BAUTEGY5MjAwOWU4NTNiNmIwNDUwHhcNMTYwNTI2MTYyODUyWhcNMjYwNTI0MTYy
ODUyWjAbMRkwFwYDVQQFExBmOTIwMDllODUzYjZiMDQ1MIICIjANBgkqhkiG9w0B
AQEFAAOCAg8AMIICCgKCAgEAr7bHgiuxpwHsK7Qui8xUFmOr75gvMsd/dTEDDJdS
Sxtf6An7xyqpRR90PL2abxM1dEqlXnf2tqw1Ne4Xwl5jlRfdnJLmN0pTy/4lj4/7
tv0Sk3iiKkypnEUtR6WfMgH0QZfKHM1+di+y9TFRtv6y//0rb+T+W8a9nsNL/ggj
nar86461qO0rOs2cXjp3kOG1FEJ5MVmFmBGtnrKpa73XpXyTqRxB/M0n1n/W9nGq
C4FSYa04T6N5RIZGBN2z2MT5IKGbFlbC8UrW0DxW7AYImQQcHtGl/m00QLVWutHQ
oVJYnFPlXTcHYvASLu+RhhsbDmxMgJJ0mcDpvsC4PjvB+TxywElgS70vE0XmLD+O
JtvsBslHZvPBKCOdT0MS+tgSOIfga+z1Z1g7+DVagf7quvmag8jfPioyKvxnK/Eg
sTUVi2ghzq8wm27ud/mIM7AY2qEORR8Go3TVB4HzWQgpZrt3i5MIlCaY504LzSRi
igHCzAPlHws+W0rB5N+er5/2pJKnfBSDiCiFAVtCLOZ7gLiMm0jhO2B6tUXHI/+M
RPjy02i59lINMRRev56GKtcd9qO/0kUJWdZTdA2XoS82ixPvZtXQpUpuL12ab+9E
aDK8Z4RHJYYfCT3Q5vNAXaiWQ+8PTWm2QgBR/bkwSWc+NpUFgNPN9PvQi8WEg5Um
AGMCAwEAAaOBpjCBozAdBgNVHQ4EFgQUNmHhAHyIBQlRi0RsR/8aTMnqTxIwHwYD
VR0jBBgwFoAUNmHhAHyIBQlRi0RsR/8aTMnqTxIwDwYDVR0TAQH/BAUwAwEB/zAO
BgNVHQ8BAf8EBAMCAYYwQAYDVR0fBDkwNzA1oDOgMYYvaHR0cHM6Ly9hbmRyb2lk
Lmdvb2dsZWFwaXMuY29tL2F0dGVzdGF0aW9uL2NybC8wDQYJKoZIhvcNAQELBQAD
ggIBACDIw41L3KlXG0aMiS//cqrG+EShHUGo8HNsw30W1kJtjn6UBwRM6jnmiwfB
Pb8VA91chb2vssAtX2zbTvqBJ9+LBPGCdw/E53Rbf86qhxKaiAHOjpvAy5Y3m00m
qC0w/Zwvju1twb4vhLaJ5NkUJYsUS7rmJKHHBnETLi8GFqiEsqTWpG/6ibYCv7rY
DBJDcR9W62BW9jfIoBQcxUCUJouMPH25lLNcDc1ssqvC2v7iUgI9LeoM1sNovqPm
QUiG9rHli1vXxzCyaMTjwftkJLkf6724DFhuKug2jITV0QkXvaJWF4nUaHOTNA4u
JU9WDvZLI1j83A+/xnAJUucIv/zGJ1AMH2boHqF8CY16LpsYgBt6tKxxWH00XcyD
CdW2KlBCeqbQPcsFmWyWugxdcekhYsAWyoSf818NUsZdBWBaR/OukXrNLfkQ79Iy
ZohZbvabO/X+MVT3rriAoKc8oE2Uws6DF+60PV7/WIPjNvXySdqspImSN78mflxD
qwLqRBYkA3I75qppLGG9rp7UCdRjxMl8ZDBld+7yvHVgt1cVzJx9xnyGCC23Uaic
MDSXYrB4I4WHXPGjxhZuCuPBLTdOLU8YRvMYdEvYebWHMpvwGCF6bAx3JBpIeOQ1
wDB5y0USicV3YgYGmi+NZfhA4URSh77Yd6uuJOJENRaNVTzk
-----END CERTIFICATE-----
`;
var Google_Hardware_Attestation_Root_2 = `-----BEGIN CERTIFICATE-----
MIIFHDCCAwSgAwIBAgIJANUP8luj8tazMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV
BAUTEGY5MjAwOWU4NTNiNmIwNDUwHhcNMTkxMTIyMjAzNzU4WhcNMzQxMTE4MjAz
NzU4WjAbMRkwFwYDVQQFExBmOTIwMDllODUzYjZiMDQ1MIICIjANBgkqhkiG9w0B
AQEFAAOCAg8AMIICCgKCAgEAr7bHgiuxpwHsK7Qui8xUFmOr75gvMsd/dTEDDJdS
Sxtf6An7xyqpRR90PL2abxM1dEqlXnf2tqw1Ne4Xwl5jlRfdnJLmN0pTy/4lj4/7
tv0Sk3iiKkypnEUtR6WfMgH0QZfKHM1+di+y9TFRtv6y//0rb+T+W8a9nsNL/ggj
nar86461qO0rOs2cXjp3kOG1FEJ5MVmFmBGtnrKpa73XpXyTqRxB/M0n1n/W9nGq
C4FSYa04T6N5RIZGBN2z2MT5IKGbFlbC8UrW0DxW7AYImQQcHtGl/m00QLVWutHQ
oVJYnFPlXTcHYvASLu+RhhsbDmxMgJJ0mcDpvsC4PjvB+TxywElgS70vE0XmLD+O
JtvsBslHZvPBKCOdT0MS+tgSOIfga+z1Z1g7+DVagf7quvmag8jfPioyKvxnK/Eg
sTUVi2ghzq8wm27ud/mIM7AY2qEORR8Go3TVB4HzWQgpZrt3i5MIlCaY504LzSRi
igHCzAPlHws+W0rB5N+er5/2pJKnfBSDiCiFAVtCLOZ7gLiMm0jhO2B6tUXHI/+M
RPjy02i59lINMRRev56GKtcd9qO/0kUJWdZTdA2XoS82ixPvZtXQpUpuL12ab+9E
aDK8Z4RHJYYfCT3Q5vNAXaiWQ+8PTWm2QgBR/bkwSWc+NpUFgNPN9PvQi8WEg5Um
AGMCAwEAAaNjMGEwHQYDVR0OBBYEFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMB8GA1Ud
IwQYMBaAFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMA8GA1UdEwEB/wQFMAMBAf8wDgYD
VR0PAQH/BAQDAgIEMA0GCSqGSIb3DQEBCwUAA4ICAQBOMaBc8oumXb2voc7XCWnu
XKhBBK3e2KMGz39t7lA3XXRe2ZLLAkLM5y3J7tURkf5a1SutfdOyXAmeE6SRo83U
h6WszodmMkxK5GM4JGrnt4pBisu5igXEydaW7qq2CdC6DOGjG+mEkN8/TA6p3cno
L/sPyz6evdjLlSeJ8rFBH6xWyIZCbrcpYEJzXaUOEaxxXxgYz5/cTiVKN2M1G2ok
QBUIYSY6bjEL4aUN5cfo7ogP3UvliEo3Eo0YgwuzR2v0KR6C1cZqZJSTnghIC/vA
D32KdNQ+c3N+vl2OTsUVMC1GiWkngNx1OO1+kXW+YTnnTUOtOIswUP/Vqd5SYgAI
mMAfY8U9/iIgkQj6T2W6FsScy94IN9fFhE1UtzmLoBIuUFsVXJMTz+Jucth+IqoW
Fua9v1R93/k98p41pjtFX+H8DslVgfP097vju4KDlqN64xV1grw3ZLl4CiOe/A91
oeLm2UHOq6wn3esB4r2EIQKb6jTVGu5sYCcdWpXr0AUVqcABPdgL+H7qJguBw09o
jm6xNIrw2OocrDKsudk/okr/AwqEyPKw9WnMlQgLIKw1rODG2NvU9oR3GVGdMkUB
ZutL8VuFkERQGt6vQ2OCw0sV47VMkuYbacK/xyZFiRcrPJPb41zgbQj9XAEyLKCH
ex0SdDrx+tWUDqG8At2JHA==
-----END CERTIFICATE-----
`;
var Google_Hardware_Attestation_Root_3 = `
-----BEGIN CERTIFICATE-----
MIIFHDCCAwSgAwIBAgIJAMNrfES5rhgxMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV
BAUTEGY5MjAwOWU4NTNiNmIwNDUwHhcNMjExMTE3MjMxMDQyWhcNMzYxMTEzMjMx
MDQyWjAbMRkwFwYDVQQFExBmOTIwMDllODUzYjZiMDQ1MIICIjANBgkqhkiG9w0B
AQEFAAOCAg8AMIICCgKCAgEAr7bHgiuxpwHsK7Qui8xUFmOr75gvMsd/dTEDDJdS
Sxtf6An7xyqpRR90PL2abxM1dEqlXnf2tqw1Ne4Xwl5jlRfdnJLmN0pTy/4lj4/7
tv0Sk3iiKkypnEUtR6WfMgH0QZfKHM1+di+y9TFRtv6y//0rb+T+W8a9nsNL/ggj
nar86461qO0rOs2cXjp3kOG1FEJ5MVmFmBGtnrKpa73XpXyTqRxB/M0n1n/W9nGq
C4FSYa04T6N5RIZGBN2z2MT5IKGbFlbC8UrW0DxW7AYImQQcHtGl/m00QLVWutHQ
oVJYnFPlXTcHYvASLu+RhhsbDmxMgJJ0mcDpvsC4PjvB+TxywElgS70vE0XmLD+O
JtvsBslHZvPBKCOdT0MS+tgSOIfga+z1Z1g7+DVagf7quvmag8jfPioyKvxnK/Eg
sTUVi2ghzq8wm27ud/mIM7AY2qEORR8Go3TVB4HzWQgpZrt3i5MIlCaY504LzSRi
igHCzAPlHws+W0rB5N+er5/2pJKnfBSDiCiFAVtCLOZ7gLiMm0jhO2B6tUXHI/+M
RPjy02i59lINMRRev56GKtcd9qO/0kUJWdZTdA2XoS82ixPvZtXQpUpuL12ab+9E
aDK8Z4RHJYYfCT3Q5vNAXaiWQ+8PTWm2QgBR/bkwSWc+NpUFgNPN9PvQi8WEg5Um
AGMCAwEAAaNjMGEwHQYDVR0OBBYEFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMB8GA1Ud
IwQYMBaAFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMA8GA1UdEwEB/wQFMAMBAf8wDgYD
VR0PAQH/BAQDAgIEMA0GCSqGSIb3DQEBCwUAA4ICAQBTNNZe5cuf8oiq+jV0itTG
zWVhSTjOBEk2FQvh11J3o3lna0o7rd8RFHnN00q4hi6TapFhh4qaw/iG6Xg+xOan
63niLWIC5GOPFgPeYXM9+nBb3zZzC8ABypYuCusWCmt6Tn3+Pjbz3MTVhRGXuT/T
QH4KGFY4PhvzAyXwdjTOCXID+aHud4RLcSySr0Fq/L+R8TWalvM1wJJPhyRjqRCJ
erGtfBagiALzvhnmY7U1qFcS0NCnKjoO7oFedKdWlZz0YAfu3aGCJd4KHT0MsGiL
Zez9WP81xYSrKMNEsDK+zK5fVzw6jA7cxmpXcARTnmAuGUeI7VVDhDzKeVOctf3a
0qQLwC+d0+xrETZ4r2fRGNw2YEs2W8Qj6oDcfPvq9JySe7pJ6wcHnl5EZ0lwc4xH
7Y4Dx9RA1JlfooLMw3tOdJZH0enxPXaydfAD3YifeZpFaUzicHeLzVJLt9dvGB0b
HQLE4+EqKFgOZv2EoP686DQqbVS1u+9k0p2xbMA105TBIk7npraa8VM0fnrRKi7w
lZKwdH+aNAyhbXRW9xsnODJ+g8eF452zvbiKKngEKirK5LGieoXBX7tZ9D1GNBH2
Ob3bKOwwIWdEFle/YF/h6zWgdeoaNGDqVBrLr2+0DtWoiB1aDEjLWl9FmyIUyUm7
mD/vFDkzF+wm7cyWpQpCVQ==
-----END CERTIFICATE-----
`;
var Google_Hardware_Attestation_Root_4 = `
-----BEGIN CERTIFICATE-----
MIIFHDCCAwSgAwIBAgIJAPHBcqaZ6vUdMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV
BAUTEGY5MjAwOWU4NTNiNmIwNDUwHhcNMjIwMzIwMTgwNzQ4WhcNNDIwMzE1MTgw
NzQ4WjAbMRkwFwYDVQQFExBmOTIwMDllODUzYjZiMDQ1MIICIjANBgkqhkiG9w0B
AQEFAAOCAg8AMIICCgKCAgEAr7bHgiuxpwHsK7Qui8xUFmOr75gvMsd/dTEDDJdS
Sxtf6An7xyqpRR90PL2abxM1dEqlXnf2tqw1Ne4Xwl5jlRfdnJLmN0pTy/4lj4/7
tv0Sk3iiKkypnEUtR6WfMgH0QZfKHM1+di+y9TFRtv6y//0rb+T+W8a9nsNL/ggj
nar86461qO0rOs2cXjp3kOG1FEJ5MVmFmBGtnrKpa73XpXyTqRxB/M0n1n/W9nGq
C4FSYa04T6N5RIZGBN2z2MT5IKGbFlbC8UrW0DxW7AYImQQcHtGl/m00QLVWutHQ
oVJYnFPlXTcHYvASLu+RhhsbDmxMgJJ0mcDpvsC4PjvB+TxywElgS70vE0XmLD+O
JtvsBslHZvPBKCOdT0MS+tgSOIfga+z1Z1g7+DVagf7quvmag8jfPioyKvxnK/Eg
sTUVi2ghzq8wm27ud/mIM7AY2qEORR8Go3TVB4HzWQgpZrt3i5MIlCaY504LzSRi
igHCzAPlHws+W0rB5N+er5/2pJKnfBSDiCiFAVtCLOZ7gLiMm0jhO2B6tUXHI/+M
RPjy02i59lINMRRev56GKtcd9qO/0kUJWdZTdA2XoS82ixPvZtXQpUpuL12ab+9E
aDK8Z4RHJYYfCT3Q5vNAXaiWQ+8PTWm2QgBR/bkwSWc+NpUFgNPN9PvQi8WEg5Um
AGMCAwEAAaNjMGEwHQYDVR0OBBYEFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMB8GA1Ud
IwQYMBaAFDZh4QB8iAUJUYtEbEf/GkzJ6k8SMA8GA1UdEwEB/wQFMAMBAf8wDgYD
VR0PAQH/BAQDAgIEMA0GCSqGSIb3DQEBCwUAA4ICAQB8cMqTllHc8U+qCrOlg3H7
174lmaCsbo/bJ0C17JEgMLb4kvrqsXZs01U3mB/qABg/1t5Pd5AORHARs1hhqGIC
W/nKMav574f9rZN4PC2ZlufGXb7sIdJpGiO9ctRhiLuYuly10JccUZGEHpHSYM2G
tkgYbZba6lsCPYAAP83cyDV+1aOkTf1RCp/lM0PKvmxYN10RYsK631jrleGdcdkx
oSK//mSQbgcWnmAEZrzHoF1/0gso1HZgIn0YLzVhLSA/iXCX4QT2h3J5z3znluKG
1nv8NQdxei2DIIhASWfu804CA96cQKTTlaae2fweqXjdN1/v2nqOhngNyz1361mF
mr4XmaKH/ItTwOe72NI9ZcwS1lVaCvsIkTDCEXdm9rCNPAY10iTunIHFXRh+7KPz
lHGewCq/8TOohBRn0/NNfh7uRslOSZ/xKbN9tMBtw37Z8d2vvnXq/YWdsm1+JLVw
n6yYD/yacNJBlwpddla8eaVMjsF6nBnIgQOf9zKSe06nSTqvgwUHosgOECZJZ1Eu
zbH4yswbt02tKtKEFhx+v+OTge/06V+jGsqTWLsfrOCNLuA8H++z+pUENmpqnnHo
vaI47gC+TNpkgYGkkBT6B/m/U01BuOBBTzhIlMEZq9qkDWuM2cA5kW5V3FJUcfHn
w1IdYIg2Wxg7yHcQZemFQg==
-----END CERTIFICATE-----
`;

// node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/apple.js
var Apple_WebAuthn_Root_CA = `-----BEGIN CERTIFICATE-----
MIICEjCCAZmgAwIBAgIQaB0BbHo84wIlpQGUKEdXcTAKBggqhkjOPQQDAzBLMR8w
HQYDVQQDDBZBcHBsZSBXZWJBdXRobiBSb290IENBMRMwEQYDVQQKDApBcHBsZSBJ
bmMuMRMwEQYDVQQIDApDYWxpZm9ybmlhMB4XDTIwMDMxODE4MjEzMloXDTQ1MDMx
NTAwMDAwMFowSzEfMB0GA1UEAwwWQXBwbGUgV2ViQXV0aG4gUm9vdCBDQTETMBEG
A1UECgwKQXBwbGUgSW5jLjETMBEGA1UECAwKQ2FsaWZvcm5pYTB2MBAGByqGSM49
AgEGBSuBBAAiA2IABCJCQ2pTVhzjl4Wo6IhHtMSAzO2cv+H9DQKev3//fG59G11k
xu9eI0/7o6V5uShBpe1u6l6mS19S1FEh6yGljnZAJ+2GNP1mi/YK2kSXIuTHjxA/
pcoRf7XkOtO4o1qlcaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUJtdk
2cV4wlpn0afeaxLQG2PxxtcwDgYDVR0PAQH/BAQDAgEGMAoGCCqGSM49BAMDA2cA
MGQCMFrZ+9DsJ1PW9hfNdBywZDsWDbWFp28it1d/5w2RPkRX3Bbn/UbDTNLx7Jr3
jAGGiQIwHFj+dJZYUJR786osByBelJYsVZd2GbHQu209b5RCmGQ21gpSAk9QZW4B
1bWeT0vT
-----END CERTIFICATE-----
`;

// node_modules/@simplewebauthn/server/esm/services/defaultRootCerts/mds.js
var GlobalSign_Root_CA_R3 = `-----BEGIN CERTIFICATE-----
 MIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4G
 A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNp
 Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDkwMzE4MTAwMDAwWhcNMjkwMzE4
 MTAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEG
 A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
 hvcNAQEBBQADggEPADCCAQoCggEBAMwldpB5BngiFvXAg7aEyiie/QV2EcWtiHL8
 RgJDx7KKnQRfJMsuS+FggkbhUqsMgUdwbN1k0ev1LKMPgj0MK66X17YUhhB5uzsT
 gHeMCOFJ0mpiLx9e+pZo34knlTifBtc+ycsmWQ1z3rDI6SYOgxXG71uL0gRgykmm
 KPZpO/bLyCiR5Z2KYVc3rHQU3HTgOu5yLy6c+9C7v/U9AOEGM+iCK65TpjoWc4zd
 QQ4gOsC0p6Hpsk+QLjJg6VfLuQSSaGjlOCZgdbKfd/+RFO+uIEn8rUAVSNECMWEZ
 XriX7613t2Saer9fwRPvm2L7DWzgVGkWqQPabumDk3F2xmmFghcCAwEAAaNCMEAw
 DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFI/wS3+o
 LkUkrk1Q+mOai97i3Ru8MA0GCSqGSIb3DQEBCwUAA4IBAQBLQNvAUKr+yAzv95ZU
 RUm7lgAJQayzE4aGKAczymvmdLm6AC2upArT9fHxD4q/c2dKg8dEe3jgr25sbwMp
 jjM5RcOO5LlXbKr8EpbsU8Yt5CRsuZRj+9xTaGdWPoO4zzUhw8lo/s7awlOqzJCK
 6fBdRoyV3XpYKBovHd7NADdBj+1EbddTKJd+82cEHhXXipa0095MJ6RMG3NzdvQX
 mcIfeg7jLQitChws/zyrVQ4PkX4268NXSb7hLi18YIvDQVETI53O9zJrlAGomecs
 Mx86OyXShkDOOyyGeMlhLxS67ttVb9+E7gUJTb0o2HLO02JQZR7rkpeDMdmztcpH
 WD9f
 -----END CERTIFICATE-----
 `;

// node_modules/@simplewebauthn/server/esm/services/settingsService.js
class BaseSettingsService {
  constructor() {
    Object.defineProperty(this, "pemCertificates", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: undefined
    });
    this.pemCertificates = new Map;
  }
  setRootCertificates(opts) {
    const { identifier, certificates } = opts;
    const newCertificates = [];
    for (const cert of certificates) {
      if (cert instanceof Uint8Array) {
        newCertificates.push(convertCertBufferToPEM(cert));
      } else {
        newCertificates.push(cert);
      }
    }
    this.pemCertificates.set(identifier, newCertificates);
  }
  getRootCertificates(opts) {
    const { identifier } = opts;
    return this.pemCertificates.get(identifier) ?? [];
  }
}
var SettingsService = new BaseSettingsService;
SettingsService.setRootCertificates({
  identifier: "android-key",
  certificates: [
    Google_Hardware_Attestation_Root_1,
    Google_Hardware_Attestation_Root_2,
    Google_Hardware_Attestation_Root_3,
    Google_Hardware_Attestation_Root_4
  ]
});
SettingsService.setRootCertificates({
  identifier: "android-safetynet",
  certificates: [GlobalSign_Root_CA]
});
SettingsService.setRootCertificates({
  identifier: "apple",
  certificates: [Apple_WebAuthn_Root_CA]
});
SettingsService.setRootCertificates({
  identifier: "mds",
  certificates: [GlobalSign_Root_CA_R3]
});

// node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationFIDOU2F.js
async function verifyAttestationFIDOU2F(options) {
  const { attStmt, clientDataHash, rpIdHash, credentialID, credentialPublicKey, aaguid, rootCertificates } = options;
  const reservedByte = Uint8Array.from([0]);
  const publicKey = convertCOSEtoPKCS(credentialPublicKey);
  const signatureBase = exports_isoUint8Array.concat([
    reservedByte,
    rpIdHash,
    clientDataHash,
    credentialID,
    publicKey
  ]);
  const sig = attStmt.get("sig");
  const x5c = attStmt.get("x5c");
  if (!x5c) {
    throw new Error("No attestation certificate provided in attestation statement (FIDOU2F)");
  }
  if (!sig) {
    throw new Error("No attestation signature provided in attestation statement (FIDOU2F)");
  }
  const aaguidToHex = Number.parseInt(exports_isoUint8Array.toHex(aaguid), 16);
  if (aaguidToHex !== 0) {
    throw new Error(`AAGUID "${aaguidToHex}" was not expected value`);
  }
  try {
    await validateCertificatePath(x5c.map(convertCertBufferToPEM), rootCertificates);
  } catch (err) {
    const _err = err;
    throw new Error(`${_err.message} (FIDOU2F)`);
  }
  return verifySignature2({
    signature: sig,
    data: signatureBase,
    x509Certificate: x5c[0],
    hashAlgorithm: COSEALG.ES256
  });
}

// node_modules/@simplewebauthn/server/esm/helpers/validateExtFIDOGenCEAAGUID.js
var id_fido_gen_ce_aaguid = "1.3.6.1.4.1.45724.1.1.4";
function validateExtFIDOGenCEAAGUID(certExtensions, aaguid) {
  if (!certExtensions) {
    return true;
  }
  const extFIDOGenCEAAGUID = certExtensions.find((ext) => ext.extnID === id_fido_gen_ce_aaguid);
  if (!extFIDOGenCEAAGUID) {
    return true;
  }
  const parsedExtFIDOGenCEAAGUID = AsnParser.parse(extFIDOGenCEAAGUID.extnValue, OctetString2);
  const extValue = new Uint8Array(parsedExtFIDOGenCEAAGUID.buffer);
  const aaguidAndExtAreEqual = exports_isoUint8Array.areEqual(aaguid, extValue);
  if (!aaguidAndExtAreEqual) {
    const _debugExtHex = exports_isoUint8Array.toHex(extValue);
    const _debugAAGUIDHex = exports_isoUint8Array.toHex(aaguid);
    throw new Error(`Certificate extension id-fido-gen-ce-aaguid (${id_fido_gen_ce_aaguid}) value of "${_debugExtHex}" was present but not equal to attestation statement AAGUID value of "${_debugAAGUIDHex}"`);
  }
  return true;
}

// node_modules/@simplewebauthn/server/esm/helpers/logging.js
function getLogger(_name) {
  return (_message, ..._rest) => {};
}

// node_modules/@simplewebauthn/server/esm/metadata/parseJWT.js
function parseJWT(jwt) {
  const parts = jwt.split(".");
  return [
    JSON.parse(exports_isoBase64URL.toUTF8String(parts[0])),
    JSON.parse(exports_isoBase64URL.toUTF8String(parts[1])),
    parts[2]
  ];
}

// node_modules/@simplewebauthn/server/esm/metadata/verifyJWT.js
function verifyJWT(jwt, leafCert) {
  const [header, payload, signature] = jwt.split(".");
  const certCOSE = convertX509PublicKeyToCOSE(leafCert);
  const data = exports_isoUint8Array.fromUTF8String(`${header}.${payload}`);
  const signatureBytes = exports_isoBase64URL.toBuffer(signature);
  if (isCOSEPublicKeyEC2(certCOSE)) {
    return verifyEC2({
      data,
      signature: signatureBytes,
      cosePublicKey: certCOSE,
      shaHashOverride: COSEALG.ES256
    });
  } else if (isCOSEPublicKeyRSA(certCOSE)) {
    return verifyRSA({
      data,
      signature: signatureBytes,
      cosePublicKey: certCOSE
    });
  }
  const kty = certCOSE.get(COSEKEYS.kty);
  throw new Error(`JWT verification with public key of kty ${kty} is not supported by this method`);
}

// node_modules/@simplewebauthn/server/esm/services/metadataService.js
var defaultURLMDS = "https://mds.fidoalliance.org/";
var SERVICE_STATE;
(function(SERVICE_STATE2) {
  SERVICE_STATE2[SERVICE_STATE2["DISABLED"] = 0] = "DISABLED";
  SERVICE_STATE2[SERVICE_STATE2["REFRESHING"] = 1] = "REFRESHING";
  SERVICE_STATE2[SERVICE_STATE2["READY"] = 2] = "READY";
})(SERVICE_STATE || (SERVICE_STATE = {}));
var log3 = getLogger("MetadataService");

class BaseMetadataService {
  constructor() {
    Object.defineProperty(this, "mdsCache", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "statementCache", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "state", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: SERVICE_STATE.DISABLED
    });
    Object.defineProperty(this, "verificationMode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "strict"
    });
  }
  async initialize(opts = {}) {
    const { mdsServers = [defaultURLMDS], statements, verificationMode } = opts;
    this.setState(SERVICE_STATE.REFRESHING);
    if (statements?.length) {
      let statementsAdded = 0;
      statements.forEach((statement) => {
        if (statement.aaguid) {
          this.statementCache[statement.aaguid] = {
            entry: {
              metadataStatement: statement,
              statusReports: [],
              timeOfLastStatusChange: "1970-01-01"
            },
            url: ""
          };
          statementsAdded += 1;
        }
      });
      log3(`Cached ${statementsAdded} local statements`);
    }
    if (mdsServers?.length) {
      const currentCacheCount = Object.keys(this.statementCache).length;
      let numServers = mdsServers.length;
      for (const url of mdsServers) {
        try {
          await this.downloadBlob({
            url,
            no: 0,
            nextUpdate: new Date(0)
          });
        } catch (err) {
          log3(`Could not download BLOB from ${url}:`, err);
          numServers -= 1;
        }
      }
      const newCacheCount = Object.keys(this.statementCache).length;
      const cacheDiff = newCacheCount - currentCacheCount;
      log3(`Cached ${cacheDiff} statements from ${numServers} metadata server(s)`);
    }
    if (verificationMode) {
      this.verificationMode = verificationMode;
    }
    this.setState(SERVICE_STATE.READY);
  }
  async getStatement(aaguid) {
    if (this.state === SERVICE_STATE.DISABLED) {
      return;
    }
    if (!aaguid) {
      return;
    }
    if (aaguid instanceof Uint8Array) {
      aaguid = convertAAGUIDToString(aaguid);
    }
    await this.pauseUntilReady();
    const cachedStatement = this.statementCache[aaguid];
    if (!cachedStatement) {
      if (this.verificationMode === "strict") {
        throw new Error(`No metadata statement found for aaguid "${aaguid}"`);
      }
      return;
    }
    if (cachedStatement.url) {
      const mds = this.mdsCache[cachedStatement.url];
      const now = new Date;
      if (now > mds.nextUpdate) {
        try {
          this.setState(SERVICE_STATE.REFRESHING);
          await this.downloadBlob(mds);
        } finally {
          this.setState(SERVICE_STATE.READY);
        }
      }
    }
    const { entry } = cachedStatement;
    for (const report of entry.statusReports) {
      const { status } = report;
      if (status === "USER_VERIFICATION_BYPASS" || status === "ATTESTATION_KEY_COMPROMISE" || status === "USER_KEY_REMOTE_COMPROMISE" || status === "USER_KEY_PHYSICAL_COMPROMISE") {
        throw new Error(`Detected compromised aaguid "${aaguid}"`);
      }
    }
    return entry.metadataStatement;
  }
  async downloadBlob(mds) {
    const { url, no } = mds;
    const resp = await fetch(url);
    const data = await resp.text();
    const parsedJWT = parseJWT(data);
    const header = parsedJWT[0];
    const payload = parsedJWT[1];
    if (payload.no <= no) {
      throw new Error(`Latest BLOB no. "${payload.no}" is not greater than previous ${no}`);
    }
    const headerCertsPEM = header.x5c.map(convertCertBufferToPEM);
    try {
      const rootCerts = SettingsService.getRootCertificates({
        identifier: "mds"
      });
      await validateCertificatePath(headerCertsPEM, rootCerts);
    } catch (error) {
      const _error = error;
      throw new Error(`BLOB certificate path could not be validated: ${_error.message}`);
    }
    const leafCert = headerCertsPEM[0];
    const verified = await verifyJWT(data, convertPEMToBytes(leafCert));
    if (!verified) {
      throw new Error("BLOB signature could not be verified");
    }
    for (const entry of payload.entries) {
      if (entry.aaguid) {
        this.statementCache[entry.aaguid] = { entry, url };
      }
    }
    const [year, month, day] = payload.nextUpdate.split("-");
    this.mdsCache[url] = {
      ...mds,
      no: payload.no,
      nextUpdate: new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10))
    };
  }
  pauseUntilReady() {
    if (this.state === SERVICE_STATE.READY) {
      return new Promise((resolve) => {
        resolve();
      });
    }
    const readyPromise = new Promise((resolve, reject) => {
      const totalTimeoutMS = 70000;
      const intervalMS = 100;
      let iterations = totalTimeoutMS / intervalMS;
      const intervalID = globalThis.setInterval(() => {
        if (iterations < 1) {
          clearInterval(intervalID);
          reject(`State did not become ready in ${totalTimeoutMS / 1000} seconds`);
        } else if (this.state === SERVICE_STATE.READY) {
          clearInterval(intervalID);
          resolve();
        }
        iterations -= 1;
      }, intervalMS);
    });
    return readyPromise;
  }
  setState(newState) {
    this.state = newState;
    if (newState === SERVICE_STATE.DISABLED) {
      log3("MetadataService is DISABLED");
    } else if (newState === SERVICE_STATE.REFRESHING) {
      log3("MetadataService is REFRESHING");
    } else if (newState === SERVICE_STATE.READY) {
      log3("MetadataService is READY");
    }
  }
}
var MetadataService = new BaseMetadataService;

// node_modules/@simplewebauthn/server/esm/metadata/verifyAttestationWithMetadata.js
async function verifyAttestationWithMetadata({ statement, credentialPublicKey, x5c, attestationStatementAlg }) {
  const { authenticationAlgorithms, authenticatorGetInfo, attestationRootCertificates } = statement;
  const keypairCOSEAlgs = new Set;
  authenticationAlgorithms.forEach((algSign) => {
    const algSignCOSEINFO = algSignToCOSEInfoMap[algSign];
    if (algSignCOSEINFO) {
      keypairCOSEAlgs.add(algSignCOSEINFO);
    }
  });
  const decodedPublicKey = decodeCredentialPublicKey(credentialPublicKey);
  const kty = decodedPublicKey.get(COSEKEYS.kty);
  const alg = decodedPublicKey.get(COSEKEYS.alg);
  if (!kty) {
    throw new Error("Credential public key was missing kty");
  }
  if (!alg) {
    throw new Error("Credential public key was missing alg");
  }
  if (!kty) {
    throw new Error("Credential public key was missing kty");
  }
  const publicKeyCOSEInfo = { kty, alg };
  if (isCOSEPublicKeyEC2(decodedPublicKey)) {
    const crv = decodedPublicKey.get(COSEKEYS.crv);
    publicKeyCOSEInfo.crv = crv;
  }
  let foundMatch = false;
  for (const keypairAlg of keypairCOSEAlgs) {
    if (keypairAlg.alg === publicKeyCOSEInfo.alg && keypairAlg.kty === publicKeyCOSEInfo.kty) {
      if ((keypairAlg.kty === COSEKTY.EC2 || keypairAlg.kty === COSEKTY.OKP) && keypairAlg.crv === publicKeyCOSEInfo.crv) {
        foundMatch = true;
      } else {
        foundMatch = true;
      }
    }
    if (foundMatch) {
      break;
    }
  }
  if (!foundMatch) {
    const debugMDSAlgs = authenticationAlgorithms.map((algSign) => `'${algSign}' (COSE info: ${stringifyCOSEInfo(algSignToCOSEInfoMap[algSign])})`);
    const strMDSAlgs = JSON.stringify(debugMDSAlgs, null, 2).replace(/"/g, "");
    const strPubKeyAlg = stringifyCOSEInfo(publicKeyCOSEInfo);
    throw new Error(`Public key parameters ${strPubKeyAlg} did not match any of the following metadata algorithms:
${strMDSAlgs}`);
  }
  if (attestationStatementAlg !== undefined && authenticatorGetInfo?.algorithms !== undefined) {
    const getInfoAlgs = authenticatorGetInfo.algorithms.map((_alg) => _alg.alg);
    if (getInfoAlgs.indexOf(attestationStatementAlg) < 0) {
      throw new Error(`Attestation statement alg ${attestationStatementAlg} did not match one of ${getInfoAlgs}`);
    }
  }
  const authenticatorCerts = x5c.map(convertCertBufferToPEM);
  const statementRootCerts = attestationRootCertificates.map(convertCertBufferToPEM);
  let authenticatorIsSelfReferencing = false;
  if (authenticatorCerts.length === 1 && statementRootCerts.indexOf(authenticatorCerts[0]) >= 0) {
    authenticatorIsSelfReferencing = true;
  }
  if (!authenticatorIsSelfReferencing) {
    try {
      await validateCertificatePath(authenticatorCerts, statementRootCerts);
    } catch (err) {
      const _err = err;
      throw new Error(`Could not validate certificate path with any metadata root certificates: ${_err.message}`);
    }
  }
  return true;
}
var algSignToCOSEInfoMap = {
  secp256r1_ecdsa_sha256_raw: { kty: 2, alg: -7, crv: 1 },
  secp256r1_ecdsa_sha256_der: { kty: 2, alg: -7, crv: 1 },
  rsassa_pss_sha256_raw: { kty: 3, alg: -37 },
  rsassa_pss_sha256_der: { kty: 3, alg: -37 },
  secp256k1_ecdsa_sha256_raw: { kty: 2, alg: -47, crv: 8 },
  secp256k1_ecdsa_sha256_der: { kty: 2, alg: -47, crv: 8 },
  rsassa_pss_sha384_raw: { kty: 3, alg: -38 },
  rsassa_pkcsv15_sha256_raw: { kty: 3, alg: -257 },
  rsassa_pkcsv15_sha384_raw: { kty: 3, alg: -258 },
  rsassa_pkcsv15_sha512_raw: { kty: 3, alg: -259 },
  rsassa_pkcsv15_sha1_raw: { kty: 3, alg: -65535 },
  secp384r1_ecdsa_sha384_raw: { kty: 2, alg: -35, crv: 2 },
  secp512r1_ecdsa_sha256_raw: { kty: 2, alg: -36, crv: 3 },
  ed25519_eddsa_sha512_raw: { kty: 1, alg: -8, crv: 6 }
};
function stringifyCOSEInfo(info) {
  const { kty, alg, crv } = info;
  let toReturn = "";
  if (kty !== COSEKTY.RSA) {
    toReturn = `{ kty: ${kty}, alg: ${alg}, crv: ${crv} }`;
  } else {
    toReturn = `{ kty: ${kty}, alg: ${alg} }`;
  }
  return toReturn;
}

// node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationPacked.js
async function verifyAttestationPacked(options) {
  const { attStmt, clientDataHash, authData, credentialPublicKey, aaguid, rootCertificates } = options;
  const sig = attStmt.get("sig");
  const x5c = attStmt.get("x5c");
  const alg = attStmt.get("alg");
  if (!sig) {
    throw new Error("No attestation signature provided in attestation statement (Packed)");
  }
  if (!alg) {
    throw new Error("Attestation statement did not contain alg (Packed)");
  }
  if (!isCOSEAlg(alg)) {
    throw new Error(`Attestation statement contained invalid alg ${alg} (Packed)`);
  }
  const signatureBase = exports_isoUint8Array.concat([authData, clientDataHash]);
  let verified = false;
  if (x5c) {
    const { subject, basicConstraintsCA, version, notBefore, notAfter, parsedCertificate } = getCertificateInfo(x5c[0]);
    const { OU, CN, O, C } = subject;
    if (OU !== "Authenticator Attestation") {
      throw new Error('Certificate OU was not "Authenticator Attestation" (Packed|Full)');
    }
    if (!CN) {
      throw new Error("Certificate CN was empty (Packed|Full)");
    }
    if (!O) {
      throw new Error("Certificate O was empty (Packed|Full)");
    }
    if (!C || C.length !== 2) {
      throw new Error("Certificate C was not two-character ISO 3166 code (Packed|Full)");
    }
    if (basicConstraintsCA) {
      throw new Error("Certificate basic constraints CA was not `false` (Packed|Full)");
    }
    if (version !== 2) {
      throw new Error("Certificate version was not `3` (ASN.1 value of 2) (Packed|Full)");
    }
    let now = new Date;
    if (notBefore > now) {
      throw new Error(`Certificate not good before "${notBefore.toString()}" (Packed|Full)`);
    }
    now = new Date;
    if (notAfter < now) {
      throw new Error(`Certificate not good after "${notAfter.toString()}" (Packed|Full)`);
    }
    try {
      await validateExtFIDOGenCEAAGUID(parsedCertificate.tbsCertificate.extensions, aaguid);
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (Packed|Full)`);
    }
    const statement = await MetadataService.getStatement(aaguid);
    if (statement) {
      if (statement.attestationTypes.indexOf("basic_full") < 0) {
        throw new Error("Metadata does not indicate support for full attestations (Packed|Full)");
      }
      try {
        await verifyAttestationWithMetadata({
          statement,
          credentialPublicKey,
          x5c,
          attestationStatementAlg: alg
        });
      } catch (err) {
        const _err = err;
        throw new Error(`${_err.message} (Packed|Full)`);
      }
    } else {
      try {
        await validateCertificatePath(x5c.map(convertCertBufferToPEM), rootCertificates);
      } catch (err) {
        const _err = err;
        throw new Error(`${_err.message} (Packed|Full)`);
      }
    }
    verified = await verifySignature2({
      signature: sig,
      data: signatureBase,
      x509Certificate: x5c[0]
    });
  } else {
    verified = await verifySignature2({
      signature: sig,
      data: signatureBase,
      credentialPublicKey,
      hashAlgorithm: alg
    });
  }
  return verified;
}

// node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationAndroidSafetyNet.js
async function verifyAttestationAndroidSafetyNet(options) {
  const { attStmt, clientDataHash, authData, aaguid, rootCertificates, verifyTimestampMS = true, credentialPublicKey } = options;
  const alg = attStmt.get("alg");
  const response = attStmt.get("response");
  const ver = attStmt.get("ver");
  if (!ver) {
    throw new Error("No ver value in attestation (SafetyNet)");
  }
  if (!response) {
    throw new Error("No response was included in attStmt by authenticator (SafetyNet)");
  }
  const jwt = exports_isoUint8Array.toUTF8String(response);
  const jwtParts = jwt.split(".");
  const HEADER = JSON.parse(exports_isoBase64URL.toUTF8String(jwtParts[0]));
  const PAYLOAD = JSON.parse(exports_isoBase64URL.toUTF8String(jwtParts[1]));
  const SIGNATURE = jwtParts[2];
  const { nonce, ctsProfileMatch, timestampMs } = PAYLOAD;
  if (verifyTimestampMS) {
    let now = Date.now();
    if (timestampMs > Date.now()) {
      throw new Error(`Payload timestamp "${timestampMs}" was later than "${now}" (SafetyNet)`);
    }
    const timestampPlusDelay = timestampMs + 60 * 1000;
    now = Date.now();
    if (timestampPlusDelay < now) {
      throw new Error(`Payload timestamp "${timestampPlusDelay}" has expired (SafetyNet)`);
    }
  }
  const nonceBase = exports_isoUint8Array.concat([authData, clientDataHash]);
  const nonceBuffer = await toHash(nonceBase);
  const expectedNonce = exports_isoBase64URL.fromBuffer(nonceBuffer, "base64");
  if (nonce !== expectedNonce) {
    throw new Error("Could not verify payload nonce (SafetyNet)");
  }
  if (!ctsProfileMatch) {
    throw new Error("Could not verify device integrity (SafetyNet)");
  }
  const leafCertBuffer = exports_isoBase64URL.toBuffer(HEADER.x5c[0], "base64");
  const leafCertInfo = getCertificateInfo(leafCertBuffer);
  const { subject } = leafCertInfo;
  if (subject.CN !== "attest.android.com") {
    throw new Error('Certificate common name was not "attest.android.com" (SafetyNet)');
  }
  const statement = await MetadataService.getStatement(aaguid);
  if (statement) {
    try {
      await verifyAttestationWithMetadata({
        statement,
        credentialPublicKey,
        x5c: HEADER.x5c,
        attestationStatementAlg: alg
      });
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (SafetyNet)`);
    }
  } else {
    try {
      await validateCertificatePath(HEADER.x5c.map(convertCertBufferToPEM), rootCertificates);
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (SafetyNet)`);
    }
  }
  const signatureBaseBuffer = exports_isoUint8Array.fromUTF8String(`${jwtParts[0]}.${jwtParts[1]}`);
  const signatureBuffer = exports_isoBase64URL.toBuffer(SIGNATURE);
  const verified = await verifySignature2({
    signature: signatureBuffer,
    data: signatureBaseBuffer,
    x509Certificate: leafCertBuffer
  });
  return verified;
}

// node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/constants.js
var TPM_ST = {
  196: "TPM_ST_RSP_COMMAND",
  32768: "TPM_ST_NULL",
  32769: "TPM_ST_NO_SESSIONS",
  32770: "TPM_ST_SESSIONS",
  32788: "TPM_ST_ATTEST_NV",
  32789: "TPM_ST_ATTEST_COMMAND_AUDIT",
  32790: "TPM_ST_ATTEST_SESSION_AUDIT",
  32791: "TPM_ST_ATTEST_CERTIFY",
  32792: "TPM_ST_ATTEST_QUOTE",
  32793: "TPM_ST_ATTEST_TIME",
  32794: "TPM_ST_ATTEST_CREATION",
  32801: "TPM_ST_CREATION",
  32802: "TPM_ST_VERIFIED",
  32803: "TPM_ST_AUTH_SECRET",
  32804: "TPM_ST_HASHCHECK",
  32805: "TPM_ST_AUTH_SIGNED",
  32809: "TPM_ST_FU_MANIFEST"
};
var TPM_ALG = {
  0: "TPM_ALG_ERROR",
  1: "TPM_ALG_RSA",
  4: "TPM_ALG_SHA",
  4: "TPM_ALG_SHA1",
  5: "TPM_ALG_HMAC",
  6: "TPM_ALG_AES",
  7: "TPM_ALG_MGF1",
  8: "TPM_ALG_KEYEDHASH",
  10: "TPM_ALG_XOR",
  11: "TPM_ALG_SHA256",
  12: "TPM_ALG_SHA384",
  13: "TPM_ALG_SHA512",
  16: "TPM_ALG_NULL",
  18: "TPM_ALG_SM3_256",
  19: "TPM_ALG_SM4",
  20: "TPM_ALG_RSASSA",
  21: "TPM_ALG_RSAES",
  22: "TPM_ALG_RSAPSS",
  23: "TPM_ALG_OAEP",
  24: "TPM_ALG_ECDSA",
  25: "TPM_ALG_ECDH",
  26: "TPM_ALG_ECDAA",
  27: "TPM_ALG_SM2",
  28: "TPM_ALG_ECSCHNORR",
  29: "TPM_ALG_ECMQV",
  32: "TPM_ALG_KDF1_SP800_56A",
  33: "TPM_ALG_KDF2",
  34: "TPM_ALG_KDF1_SP800_108",
  35: "TPM_ALG_ECC",
  37: "TPM_ALG_SYMCIPHER",
  38: "TPM_ALG_CAMELLIA",
  64: "TPM_ALG_CTR",
  65: "TPM_ALG_OFB",
  66: "TPM_ALG_CBC",
  67: "TPM_ALG_CFB",
  68: "TPM_ALG_ECB"
};
var TPM_ECC_CURVE = {
  0: "TPM_ECC_NONE",
  1: "TPM_ECC_NIST_P192",
  2: "TPM_ECC_NIST_P224",
  3: "TPM_ECC_NIST_P256",
  4: "TPM_ECC_NIST_P384",
  5: "TPM_ECC_NIST_P521",
  16: "TPM_ECC_BN_P256",
  17: "TPM_ECC_BN_P638",
  32: "TPM_ECC_SM2_P256"
};
var TPM_MANUFACTURERS = {
  "id:414D4400": { name: "AMD", id: "AMD" },
  "id:414E5400": { name: "Ant Group", id: "ANT" },
  "id:41544D4C": { name: "Atmel", id: "ATML" },
  "id:4252434D": { name: "Broadcom", id: "BRCM" },
  "id:4353434F": { name: "Cisco", id: "CSCO" },
  "id:464C5953": { name: "Flyslice Technologies", id: "FLYS" },
  "id:524F4343": { name: "Fuzhou Rockchip", id: "ROCC" },
  "id:474F4F47": { name: "Google", id: "GOOG" },
  "id:48504900": { name: "HPI", id: "HPI" },
  "id:48504500": { name: "HPE", id: "HPE" },
  "id:48495349": { name: "Huawei", id: "HISI" },
  "id:49424d00": { name: "IBM", id: "IBM" },
  "id:49424D00": { name: "IBM", id: "IBM" },
  "id:49465800": { name: "Infineon", id: "IFX" },
  "id:494E5443": { name: "Intel", id: "INTC" },
  "id:4C454E00": { name: "Lenovo", id: "LEN" },
  "id:4D534654": { name: "Microsoft", id: "MSFT" },
  "id:4E534D20": { name: "National Semiconductor", id: "NSM" },
  "id:4E545A00": { name: "Nationz", id: "NTZ" },
  "id:4E534700": { name: "NSING", id: "NSG" },
  "id:4E544300": { name: "Nuvoton Technology", id: "NTC" },
  "id:51434F4D": { name: "Qualcomm", id: "QCOM" },
  "id:534D534E": { name: "Samsung", id: "SMSN" },
  "id:53454345": { name: "SecEdge", id: "SECE" },
  "id:534E5300": { name: "Sinosun", id: "SNS" },
  "id:534D5343": { name: "SMSC", id: "SMSC" },
  "id:53544D20": { name: "STMicroelectronics", id: "STM" },
  "id:54584E00": { name: "Texas Instruments", id: "TXN" },
  "id:57454300": { name: "Winbond", id: "WEC" },
  "id:5345414C": { name: "Wisekey", id: "SEAL" },
  "id:FFFFF1D0": { name: "FIDO Alliance", id: "FIDO" }
};
var TPM_ECC_CURVE_COSE_CRV_MAP = {
  TPM_ECC_NIST_P256: 1,
  TPM_ECC_NIST_P384: 2,
  TPM_ECC_NIST_P521: 3,
  TPM_ECC_BN_P256: 1,
  TPM_ECC_SM2_P256: 1
};

// node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/parseCertInfo.js
function parseCertInfo(certInfo) {
  let pointer = 0;
  const dataView = exports_isoUint8Array.toDataView(certInfo);
  const magic = dataView.getUint32(pointer);
  pointer += 4;
  const typeBuffer = dataView.getUint16(pointer);
  pointer += 2;
  const type = TPM_ST[typeBuffer];
  const qualifiedSignerLength = dataView.getUint16(pointer);
  pointer += 2;
  const qualifiedSigner = certInfo.slice(pointer, pointer += qualifiedSignerLength);
  const extraDataLength = dataView.getUint16(pointer);
  pointer += 2;
  const extraData = certInfo.slice(pointer, pointer += extraDataLength);
  const clock = certInfo.slice(pointer, pointer += 8);
  const resetCount = dataView.getUint32(pointer);
  pointer += 4;
  const restartCount = dataView.getUint32(pointer);
  pointer += 4;
  const safe = !!certInfo.slice(pointer, pointer += 1);
  const clockInfo = { clock, resetCount, restartCount, safe };
  const firmwareVersion = certInfo.slice(pointer, pointer += 8);
  const attestedNameLength = dataView.getUint16(pointer);
  pointer += 2;
  const attestedName = certInfo.slice(pointer, pointer += attestedNameLength);
  const attestedNameDataView = exports_isoUint8Array.toDataView(attestedName);
  const qualifiedNameLength = dataView.getUint16(pointer);
  pointer += 2;
  const qualifiedName = certInfo.slice(pointer, pointer += qualifiedNameLength);
  const attested = {
    nameAlg: TPM_ALG[attestedNameDataView.getUint16(0)],
    nameAlgBuffer: attestedName.slice(0, 2),
    name: attestedName,
    qualifiedName
  };
  return {
    magic,
    type,
    qualifiedSigner,
    extraData,
    clockInfo,
    firmwareVersion,
    attested
  };
}

// node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/parsePubArea.js
function parsePubArea(pubArea) {
  let pointer = 0;
  const dataView = exports_isoUint8Array.toDataView(pubArea);
  const type = TPM_ALG[dataView.getUint16(pointer)];
  pointer += 2;
  const nameAlg = TPM_ALG[dataView.getUint16(pointer)];
  pointer += 2;
  const objectAttributesInt = dataView.getUint32(pointer);
  pointer += 4;
  const objectAttributes = {
    fixedTPM: !!(objectAttributesInt & 1),
    stClear: !!(objectAttributesInt & 2),
    fixedParent: !!(objectAttributesInt & 8),
    sensitiveDataOrigin: !!(objectAttributesInt & 16),
    userWithAuth: !!(objectAttributesInt & 32),
    adminWithPolicy: !!(objectAttributesInt & 64),
    noDA: !!(objectAttributesInt & 512),
    encryptedDuplication: !!(objectAttributesInt & 1024),
    restricted: !!(objectAttributesInt & 32768),
    decrypt: !!(objectAttributesInt & 65536),
    signOrEncrypt: !!(objectAttributesInt & 131072)
  };
  const authPolicyLength = dataView.getUint16(pointer);
  pointer += 2;
  const authPolicy = pubArea.slice(pointer, pointer += authPolicyLength);
  const parameters2 = {};
  let unique = Uint8Array.from([]);
  if (type === "TPM_ALG_RSA") {
    const symmetric = TPM_ALG[dataView.getUint16(pointer)];
    pointer += 2;
    const scheme = TPM_ALG[dataView.getUint16(pointer)];
    pointer += 2;
    const keyBits = dataView.getUint16(pointer);
    pointer += 2;
    const exponent = dataView.getUint32(pointer);
    pointer += 4;
    parameters2.rsa = { symmetric, scheme, keyBits, exponent };
    const uniqueLength = dataView.getUint16(pointer);
    pointer += 2;
    unique = pubArea.slice(pointer, pointer += uniqueLength);
  } else if (type === "TPM_ALG_ECC") {
    const symmetric = TPM_ALG[dataView.getUint16(pointer)];
    pointer += 2;
    const scheme = TPM_ALG[dataView.getUint16(pointer)];
    pointer += 2;
    const curveID = TPM_ECC_CURVE[dataView.getUint16(pointer)];
    pointer += 2;
    const kdf = TPM_ALG[dataView.getUint16(pointer)];
    pointer += 2;
    parameters2.ecc = { symmetric, scheme, curveID, kdf };
    const uniqueXLength = dataView.getUint16(pointer);
    pointer += 2;
    const uniqueX = pubArea.slice(pointer, pointer += uniqueXLength);
    const uniqueYLength = dataView.getUint16(pointer);
    pointer += 2;
    const uniqueY = pubArea.slice(pointer, pointer += uniqueYLength);
    unique = exports_isoUint8Array.concat([uniqueX, uniqueY]);
  } else {
    throw new Error(`Unexpected type "${type}" (TPM)`);
  }
  return {
    type,
    nameAlg,
    objectAttributes,
    authPolicy,
    parameters: parameters2,
    unique
  };
}

// node_modules/@simplewebauthn/server/esm/registration/verifications/tpm/verifyAttestationTPM.js
async function verifyAttestationTPM(options) {
  const { aaguid, attStmt, authData, credentialPublicKey, clientDataHash, rootCertificates } = options;
  const ver = attStmt.get("ver");
  const sig = attStmt.get("sig");
  const alg = attStmt.get("alg");
  const x5c = attStmt.get("x5c");
  const pubArea = attStmt.get("pubArea");
  const certInfo = attStmt.get("certInfo");
  if (ver !== "2.0") {
    throw new Error(`Unexpected ver "${ver}", expected "2.0" (TPM)`);
  }
  if (!sig) {
    throw new Error("No attestation signature provided in attestation statement (TPM)");
  }
  if (!alg) {
    throw new Error(`Attestation statement did not contain alg (TPM)`);
  }
  if (!isCOSEAlg(alg)) {
    throw new Error(`Attestation statement contained invalid alg ${alg} (TPM)`);
  }
  if (!x5c) {
    throw new Error("No attestation certificate provided in attestation statement (TPM)");
  }
  if (!pubArea) {
    throw new Error("Attestation statement did not contain pubArea (TPM)");
  }
  if (!certInfo) {
    throw new Error("Attestation statement did not contain certInfo (TPM)");
  }
  const parsedPubArea = parsePubArea(pubArea);
  const { unique, type: pubType, parameters: parameters2 } = parsedPubArea;
  const cosePublicKey = decodeCredentialPublicKey(credentialPublicKey);
  if (pubType === "TPM_ALG_RSA") {
    if (!isCOSEPublicKeyRSA(cosePublicKey)) {
      throw new Error(`Credential public key with kty ${cosePublicKey.get(COSEKEYS.kty)} did not match ${pubType}`);
    }
    const n = cosePublicKey.get(COSEKEYS.n);
    const e = cosePublicKey.get(COSEKEYS.e);
    if (!n) {
      throw new Error("COSE public key missing n (TPM|RSA)");
    }
    if (!e) {
      throw new Error("COSE public key missing e (TPM|RSA)");
    }
    if (!exports_isoUint8Array.areEqual(unique, n)) {
      throw new Error("PubArea unique is not same as credentialPublicKey (TPM|RSA)");
    }
    if (!parameters2.rsa) {
      throw new Error(`Parsed pubArea type is RSA, but missing parameters.rsa (TPM|RSA)`);
    }
    const eBuffer = e;
    const pubAreaExponent = parameters2.rsa.exponent || 65537;
    const eSum = eBuffer[0] + (eBuffer[1] << 8) + (eBuffer[2] << 16);
    if (pubAreaExponent !== eSum) {
      throw new Error(`Unexpected public key exp ${eSum}, expected ${pubAreaExponent} (TPM|RSA)`);
    }
  } else if (pubType === "TPM_ALG_ECC") {
    if (!isCOSEPublicKeyEC2(cosePublicKey)) {
      throw new Error(`Credential public key with kty ${cosePublicKey.get(COSEKEYS.kty)} did not match ${pubType}`);
    }
    const crv = cosePublicKey.get(COSEKEYS.crv);
    const x = cosePublicKey.get(COSEKEYS.x);
    const y = cosePublicKey.get(COSEKEYS.y);
    if (!crv) {
      throw new Error("COSE public key missing crv (TPM|ECC)");
    }
    if (!x) {
      throw new Error("COSE public key missing x (TPM|ECC)");
    }
    if (!y) {
      throw new Error("COSE public key missing y (TPM|ECC)");
    }
    if (!exports_isoUint8Array.areEqual(unique, exports_isoUint8Array.concat([x, y]))) {
      throw new Error("PubArea unique is not same as public key x and y (TPM|ECC)");
    }
    if (!parameters2.ecc) {
      throw new Error(`Parsed pubArea type is ECC, but missing parameters.ecc (TPM|ECC)`);
    }
    const pubAreaCurveID = parameters2.ecc.curveID;
    const pubAreaCurveIDMapToCOSECRV = TPM_ECC_CURVE_COSE_CRV_MAP[pubAreaCurveID];
    if (pubAreaCurveIDMapToCOSECRV !== crv) {
      throw new Error(`Public area key curve ID "${pubAreaCurveID}" mapped to "${pubAreaCurveIDMapToCOSECRV}" which did not match public key crv of "${crv}" (TPM|ECC)`);
    }
  } else {
    throw new Error(`Unsupported pubArea.type "${pubType}"`);
  }
  const parsedCertInfo = parseCertInfo(certInfo);
  const { magic, type: certType, attested, extraData } = parsedCertInfo;
  if (magic !== 4283712327) {
    throw new Error(`Unexpected magic value "${magic}", expected "0xff544347" (TPM)`);
  }
  if (certType !== "TPM_ST_ATTEST_CERTIFY") {
    throw new Error(`Unexpected type "${certType}", expected "TPM_ST_ATTEST_CERTIFY" (TPM)`);
  }
  const pubAreaHash = await toHash(pubArea, attestedNameAlgToCOSEAlg(attested.nameAlg));
  const attestedName = exports_isoUint8Array.concat([
    attested.nameAlgBuffer,
    pubAreaHash
  ]);
  if (!exports_isoUint8Array.areEqual(attested.name, attestedName)) {
    throw new Error(`Attested name comparison failed (TPM)`);
  }
  const attToBeSigned = exports_isoUint8Array.concat([authData, clientDataHash]);
  const attToBeSignedHash = await toHash(attToBeSigned, alg);
  if (!exports_isoUint8Array.areEqual(extraData, attToBeSignedHash)) {
    throw new Error("CertInfo extra data did not equal hashed attestation (TPM)");
  }
  if (x5c.length < 1) {
    throw new Error("No certificates present in x5c array (TPM)");
  }
  const leafCertInfo = getCertificateInfo(x5c[0]);
  const { basicConstraintsCA, version, subject, notAfter, notBefore } = leafCertInfo;
  if (basicConstraintsCA) {
    throw new Error("Certificate basic constraints CA was not `false` (TPM)");
  }
  if (version !== 2) {
    throw new Error("Certificate version was not `3` (ASN.1 value of 2) (TPM)");
  }
  if (subject.combined.length > 0) {
    throw new Error("Certificate subject was not empty (TPM)");
  }
  let now = new Date;
  if (notBefore > now) {
    throw new Error(`Certificate not good before "${notBefore.toString()}" (TPM)`);
  }
  now = new Date;
  if (notAfter < now) {
    throw new Error(`Certificate not good after "${notAfter.toString()}" (TPM)`);
  }
  const parsedCert = AsnParser.parse(x5c[0], Certificate);
  if (!parsedCert.tbsCertificate.extensions) {
    throw new Error("Certificate was missing extensions (TPM)");
  }
  let subjectAltNamePresent;
  let extKeyUsage;
  parsedCert.tbsCertificate.extensions.forEach((ext) => {
    if (ext.extnID === id_ce_subjectAltName) {
      subjectAltNamePresent = AsnParser.parse(ext.extnValue, SubjectAlternativeName);
    } else if (ext.extnID === id_ce_extKeyUsage) {
      extKeyUsage = AsnParser.parse(ext.extnValue, ExtendedKeyUsage);
    }
  });
  if (!subjectAltNamePresent) {
    throw new Error("Certificate did not contain subjectAltName extension (TPM)");
  }
  if (!subjectAltNamePresent[0].directoryName?.[0].length) {
    throw new Error("Certificate subjectAltName extension directoryName was empty (TPM)");
  }
  const { tcgAtTpmManufacturer, tcgAtTpmModel, tcgAtTpmVersion } = getTcgAtTpmValues(subjectAltNamePresent[0].directoryName);
  if (!tcgAtTpmManufacturer || !tcgAtTpmModel || !tcgAtTpmVersion) {
    throw new Error("Certificate contained incomplete subjectAltName data (TPM)");
  }
  if (!extKeyUsage) {
    throw new Error("Certificate did not contain ExtendedKeyUsage extension (TPM)");
  }
  if (!TPM_MANUFACTURERS[tcgAtTpmManufacturer]) {
    throw new Error(`Could not match TPM manufacturer "${tcgAtTpmManufacturer}" (TPM)`);
  }
  if (extKeyUsage[0] !== "2.23.133.8.3") {
    throw new Error(`Unexpected extKeyUsage "${extKeyUsage[0]}", expected "2.23.133.8.3" (TPM)`);
  }
  try {
    await validateExtFIDOGenCEAAGUID(parsedCert.tbsCertificate.extensions, aaguid);
  } catch (err) {
    const _err = err;
    throw new Error(`${_err.message} (TPM)`);
  }
  const statement = await MetadataService.getStatement(aaguid);
  if (statement) {
    try {
      await verifyAttestationWithMetadata({
        statement,
        credentialPublicKey,
        x5c,
        attestationStatementAlg: alg
      });
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (TPM)`);
    }
  } else {
    try {
      await validateCertificatePath(x5c.map(convertCertBufferToPEM), rootCertificates);
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (TPM)`);
    }
  }
  return verifySignature2({
    signature: sig,
    data: certInfo,
    x509Certificate: x5c[0],
    hashAlgorithm: alg
  });
}
function getTcgAtTpmValues(root) {
  const oidManufacturer = "2.23.133.2.1";
  const oidModel = "2.23.133.2.2";
  const oidVersion = "2.23.133.2.3";
  let tcgAtTpmManufacturer;
  let tcgAtTpmModel;
  let tcgAtTpmVersion;
  root.forEach((relName) => {
    relName.forEach((attr) => {
      if (attr.type === oidManufacturer) {
        tcgAtTpmManufacturer = attr.value.toString();
      } else if (attr.type === oidModel) {
        tcgAtTpmModel = attr.value.toString();
      } else if (attr.type === oidVersion) {
        tcgAtTpmVersion = attr.value.toString();
      }
    });
  });
  return {
    tcgAtTpmManufacturer,
    tcgAtTpmModel,
    tcgAtTpmVersion
  };
}
function attestedNameAlgToCOSEAlg(alg) {
  if (alg === "TPM_ALG_SHA256") {
    return COSEALG.ES256;
  } else if (alg === "TPM_ALG_SHA384") {
    return COSEALG.ES384;
  } else if (alg === "TPM_ALG_SHA512") {
    return COSEALG.ES512;
  }
  throw new Error(`Unexpected TPM attested name alg ${alg}`);
}

// node_modules/@peculiar/asn1-android/build/es2015/key_description.js
var IntegerSet_1;
var id_ce_keyDescription = "1.3.6.1.4.1.11129.2.1.17";
var VerifiedBootState;
(function(VerifiedBootState2) {
  VerifiedBootState2[VerifiedBootState2["verified"] = 0] = "verified";
  VerifiedBootState2[VerifiedBootState2["selfSigned"] = 1] = "selfSigned";
  VerifiedBootState2[VerifiedBootState2["unverified"] = 2] = "unverified";
  VerifiedBootState2[VerifiedBootState2["failed"] = 3] = "failed";
})(VerifiedBootState || (VerifiedBootState = {}));

class RootOfTrust {
  constructor(params = {}) {
    this.verifiedBootKey = new OctetString2;
    this.deviceLocked = false;
    this.verifiedBootState = VerifiedBootState.verified;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: OctetString2 })
], RootOfTrust.prototype, "verifiedBootKey", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Boolean })
], RootOfTrust.prototype, "deviceLocked", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], RootOfTrust.prototype, "verifiedBootState", undefined);
__decorate([
  AsnProp({ type: OctetString2, optional: true })
], RootOfTrust.prototype, "verifiedBootHash", undefined);
var IntegerSet = IntegerSet_1 = class IntegerSet2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, IntegerSet_1.prototype);
  }
};
IntegerSet = IntegerSet_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Set, itemType: AsnPropTypes.Integer })
], IntegerSet);
class AuthorizationList {
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ context: 1, type: IntegerSet, optional: true })
], AuthorizationList.prototype, "purpose", undefined);
__decorate([
  AsnProp({ context: 2, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "algorithm", undefined);
__decorate([
  AsnProp({ context: 3, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "keySize", undefined);
__decorate([
  AsnProp({ context: 5, type: IntegerSet, optional: true })
], AuthorizationList.prototype, "digest", undefined);
__decorate([
  AsnProp({ context: 6, type: IntegerSet, optional: true })
], AuthorizationList.prototype, "padding", undefined);
__decorate([
  AsnProp({ context: 10, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "ecCurve", undefined);
__decorate([
  AsnProp({ context: 200, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "rsaPublicExponent", undefined);
__decorate([
  AsnProp({ context: 203, type: IntegerSet, optional: true })
], AuthorizationList.prototype, "mgfDigest", undefined);
__decorate([
  AsnProp({ context: 303, type: AsnPropTypes.Null, optional: true })
], AuthorizationList.prototype, "rollbackResistance", undefined);
__decorate([
  AsnProp({ context: 305, type: AsnPropTypes.Null, optional: true })
], AuthorizationList.prototype, "earlyBootOnly", undefined);
__decorate([
  AsnProp({ context: 400, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "activeDateTime", undefined);
__decorate([
  AsnProp({ context: 401, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "originationExpireDateTime", undefined);
__decorate([
  AsnProp({ context: 402, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "usageExpireDateTime", undefined);
__decorate([
  AsnProp({ context: 405, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "usageCountLimit", undefined);
__decorate([
  AsnProp({ context: 503, type: AsnPropTypes.Null, optional: true })
], AuthorizationList.prototype, "noAuthRequired", undefined);
__decorate([
  AsnProp({ context: 504, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "userAuthType", undefined);
__decorate([
  AsnProp({ context: 505, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "authTimeout", undefined);
__decorate([
  AsnProp({ context: 506, type: AsnPropTypes.Null, optional: true })
], AuthorizationList.prototype, "allowWhileOnBody", undefined);
__decorate([
  AsnProp({ context: 507, type: AsnPropTypes.Null, optional: true })
], AuthorizationList.prototype, "trustedUserPresenceRequired", undefined);
__decorate([
  AsnProp({ context: 508, type: AsnPropTypes.Null, optional: true })
], AuthorizationList.prototype, "trustedConfirmationRequired", undefined);
__decorate([
  AsnProp({ context: 509, type: AsnPropTypes.Null, optional: true })
], AuthorizationList.prototype, "unlockedDeviceRequired", undefined);
__decorate([
  AsnProp({ context: 600, type: AsnPropTypes.Null, optional: true })
], AuthorizationList.prototype, "allApplications", undefined);
__decorate([
  AsnProp({ context: 601, type: OctetString2, optional: true })
], AuthorizationList.prototype, "applicationId", undefined);
__decorate([
  AsnProp({ context: 701, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "creationDateTime", undefined);
__decorate([
  AsnProp({ context: 702, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "origin", undefined);
__decorate([
  AsnProp({ context: 703, type: AsnPropTypes.Null, optional: true })
], AuthorizationList.prototype, "rollbackResistant", undefined);
__decorate([
  AsnProp({ context: 704, type: RootOfTrust, optional: true })
], AuthorizationList.prototype, "rootOfTrust", undefined);
__decorate([
  AsnProp({ context: 705, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "osVersion", undefined);
__decorate([
  AsnProp({ context: 706, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "osPatchLevel", undefined);
__decorate([
  AsnProp({ context: 709, type: OctetString2, optional: true })
], AuthorizationList.prototype, "attestationApplicationId", undefined);
__decorate([
  AsnProp({ context: 710, type: OctetString2, optional: true })
], AuthorizationList.prototype, "attestationIdBrand", undefined);
__decorate([
  AsnProp({ context: 711, type: OctetString2, optional: true })
], AuthorizationList.prototype, "attestationIdDevice", undefined);
__decorate([
  AsnProp({ context: 712, type: OctetString2, optional: true })
], AuthorizationList.prototype, "attestationIdProduct", undefined);
__decorate([
  AsnProp({ context: 713, type: OctetString2, optional: true })
], AuthorizationList.prototype, "attestationIdSerial", undefined);
__decorate([
  AsnProp({ context: 714, type: OctetString2, optional: true })
], AuthorizationList.prototype, "attestationIdImei", undefined);
__decorate([
  AsnProp({ context: 715, type: OctetString2, optional: true })
], AuthorizationList.prototype, "attestationIdMeid", undefined);
__decorate([
  AsnProp({ context: 716, type: OctetString2, optional: true })
], AuthorizationList.prototype, "attestationIdManufacturer", undefined);
__decorate([
  AsnProp({ context: 717, type: OctetString2, optional: true })
], AuthorizationList.prototype, "attestationIdModel", undefined);
__decorate([
  AsnProp({ context: 718, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "vendorPatchLevel", undefined);
__decorate([
  AsnProp({ context: 719, type: AsnPropTypes.Integer, optional: true })
], AuthorizationList.prototype, "bootPatchLevel", undefined);
__decorate([
  AsnProp({ context: 720, type: AsnPropTypes.Null, optional: true })
], AuthorizationList.prototype, "deviceUniqueAttestation", undefined);
var SecurityLevel;
(function(SecurityLevel2) {
  SecurityLevel2[SecurityLevel2["software"] = 0] = "software";
  SecurityLevel2[SecurityLevel2["trustedEnvironment"] = 1] = "trustedEnvironment";
  SecurityLevel2[SecurityLevel2["strongBox"] = 2] = "strongBox";
})(SecurityLevel || (SecurityLevel = {}));
var Version2;
(function(Version3) {
  Version3[Version3["KM2"] = 1] = "KM2";
  Version3[Version3["KM3"] = 2] = "KM3";
  Version3[Version3["KM4"] = 3] = "KM4";
  Version3[Version3["KM4_1"] = 4] = "KM4_1";
  Version3[Version3["keyMint1"] = 100] = "keyMint1";
  Version3[Version3["keyMint2"] = 200] = "keyMint2";
})(Version2 || (Version2 = {}));

class KeyDescription {
  constructor(params = {}) {
    this.attestationVersion = Version2.KM4;
    this.attestationSecurityLevel = SecurityLevel.software;
    this.keymasterVersion = 0;
    this.keymasterSecurityLevel = SecurityLevel.software;
    this.attestationChallenge = new OctetString2;
    this.uniqueId = new OctetString2;
    this.softwareEnforced = new AuthorizationList;
    this.teeEnforced = new AuthorizationList;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], KeyDescription.prototype, "attestationVersion", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], KeyDescription.prototype, "attestationSecurityLevel", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], KeyDescription.prototype, "keymasterVersion", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], KeyDescription.prototype, "keymasterSecurityLevel", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], KeyDescription.prototype, "attestationChallenge", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], KeyDescription.prototype, "uniqueId", undefined);
__decorate([
  AsnProp({ type: AuthorizationList })
], KeyDescription.prototype, "softwareEnforced", undefined);
__decorate([
  AsnProp({ type: AuthorizationList })
], KeyDescription.prototype, "teeEnforced", undefined);
// node_modules/@peculiar/asn1-android/build/es2015/nonstandard.js
var NonStandardAuthorizationList_1;
var NonStandardAuthorization = class NonStandardAuthorization2 extends AuthorizationList {
};
NonStandardAuthorization = __decorate([
  AsnType({ type: AsnTypeTypes.Choice })
], NonStandardAuthorization);
var NonStandardAuthorizationList = NonStandardAuthorizationList_1 = class NonStandardAuthorizationList2 extends AsnArray {
  constructor(items) {
    super(items);
    Object.setPrototypeOf(this, NonStandardAuthorizationList_1.prototype);
  }
  findProperty(key) {
    const prop = this.find((o) => (key in o));
    if (prop) {
      return prop[key];
    }
    return;
  }
};
NonStandardAuthorizationList = NonStandardAuthorizationList_1 = __decorate([
  AsnType({ type: AsnTypeTypes.Sequence, itemType: NonStandardAuthorization })
], NonStandardAuthorizationList);
class NonStandardKeyDescription {
  constructor(params = {}) {
    this.attestationVersion = Version2.KM4;
    this.attestationSecurityLevel = SecurityLevel.software;
    this.keymasterVersion = 0;
    this.keymasterSecurityLevel = SecurityLevel.software;
    this.attestationChallenge = new OctetString2;
    this.uniqueId = new OctetString2;
    this.softwareEnforced = new NonStandardAuthorizationList;
    this.teeEnforced = new NonStandardAuthorizationList;
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], NonStandardKeyDescription.prototype, "attestationVersion", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], NonStandardKeyDescription.prototype, "attestationSecurityLevel", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], NonStandardKeyDescription.prototype, "keymasterVersion", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Enumerated })
], NonStandardKeyDescription.prototype, "keymasterSecurityLevel", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], NonStandardKeyDescription.prototype, "attestationChallenge", undefined);
__decorate([
  AsnProp({ type: OctetString2 })
], NonStandardKeyDescription.prototype, "uniqueId", undefined);
__decorate([
  AsnProp({ type: NonStandardAuthorizationList })
], NonStandardKeyDescription.prototype, "softwareEnforced", undefined);
__decorate([
  AsnProp({ type: NonStandardAuthorizationList })
], NonStandardKeyDescription.prototype, "teeEnforced", undefined);
// node_modules/@peculiar/asn1-android/build/es2015/attestation.js
class AttestationPackageInfo {
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AsnPropTypes.OctetString })
], AttestationPackageInfo.prototype, "packageName", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.Integer })
], AttestationPackageInfo.prototype, "version", undefined);

class AttestationApplicationId {
  constructor(params = {}) {
    Object.assign(this, params);
  }
}
__decorate([
  AsnProp({ type: AttestationPackageInfo, repeated: "set" })
], AttestationApplicationId.prototype, "packageInfos", undefined);
__decorate([
  AsnProp({ type: AsnPropTypes.OctetString, repeated: "set" })
], AttestationApplicationId.prototype, "signatureDigests", undefined);
// node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationAndroidKey.js
async function verifyAttestationAndroidKey(options) {
  const { authData, clientDataHash, attStmt, credentialPublicKey, aaguid, rootCertificates } = options;
  const x5c = attStmt.get("x5c");
  const sig = attStmt.get("sig");
  const alg = attStmt.get("alg");
  if (!x5c) {
    throw new Error("No attestation certificate provided in attestation statement (Android Key)");
  }
  if (!sig) {
    throw new Error("No attestation signature provided in attestation statement (Android Key)");
  }
  if (!alg) {
    throw new Error(`Attestation statement did not contain alg (Android Key)`);
  }
  if (!isCOSEAlg(alg)) {
    throw new Error(`Attestation statement contained invalid alg ${alg} (Android Key)`);
  }
  const parsedCert = AsnParser.parse(x5c[0], Certificate);
  const parsedCertPubKey = new Uint8Array(parsedCert.tbsCertificate.subjectPublicKeyInfo.subjectPublicKey);
  const credPubKeyPKCS = convertCOSEtoPKCS(credentialPublicKey);
  if (!exports_isoUint8Array.areEqual(credPubKeyPKCS, parsedCertPubKey)) {
    throw new Error("Credential public key does not equal leaf cert public key (Android Key)");
  }
  const extKeyStore = parsedCert.tbsCertificate.extensions?.find((ext) => ext.extnID === id_ce_keyDescription);
  if (!extKeyStore) {
    throw new Error("Certificate did not contain extKeyStore (Android Key)");
  }
  const parsedExtKeyStore = AsnParser.parse(extKeyStore.extnValue, KeyDescription);
  const { attestationChallenge, teeEnforced, softwareEnforced } = parsedExtKeyStore;
  if (!exports_isoUint8Array.areEqual(new Uint8Array(attestationChallenge.buffer), clientDataHash)) {
    throw new Error("Attestation challenge was not equal to client data hash (Android Key)");
  }
  if (teeEnforced.allApplications !== undefined) {
    throw new Error('teeEnforced contained "allApplications [600]" tag (Android Key)');
  }
  if (softwareEnforced.allApplications !== undefined) {
    throw new Error('teeEnforced contained "allApplications [600]" tag (Android Key)');
  }
  const statement = await MetadataService.getStatement(aaguid);
  if (statement) {
    try {
      await verifyAttestationWithMetadata({
        statement,
        credentialPublicKey,
        x5c,
        attestationStatementAlg: alg
      });
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (Android Key)`);
    }
  } else {
    const x5cNoRootPEM = x5c.slice(0, -1).map(convertCertBufferToPEM);
    const x5cRootPEM = x5c.slice(-1).map(convertCertBufferToPEM);
    try {
      await validateCertificatePath(x5cNoRootPEM, x5cRootPEM);
    } catch (err) {
      const _err = err;
      throw new Error(`${_err.message} (Android Key)`);
    }
    if (rootCertificates.length > 0 && rootCertificates.indexOf(x5cRootPEM[0]) < 0) {
      throw new Error("x5c root certificate was not a known root certificate (Android Key)");
    }
  }
  const signatureBase = exports_isoUint8Array.concat([authData, clientDataHash]);
  return verifySignature2({
    signature: sig,
    data: signatureBase,
    x509Certificate: x5c[0],
    hashAlgorithm: alg
  });
}

// node_modules/@simplewebauthn/server/esm/registration/verifications/verifyAttestationApple.js
async function verifyAttestationApple(options) {
  const { attStmt, authData, clientDataHash, credentialPublicKey, rootCertificates } = options;
  const x5c = attStmt.get("x5c");
  if (!x5c) {
    throw new Error("No attestation certificate provided in attestation statement (Apple)");
  }
  try {
    await validateCertificatePath(x5c.map(convertCertBufferToPEM), rootCertificates);
  } catch (err) {
    const _err = err;
    throw new Error(`${_err.message} (Apple)`);
  }
  const parsedCredCert = AsnParser.parse(x5c[0], Certificate);
  const { extensions: extensions2, subjectPublicKeyInfo } = parsedCredCert.tbsCertificate;
  if (!extensions2) {
    throw new Error("credCert missing extensions (Apple)");
  }
  const extCertNonce = extensions2.find((ext) => ext.extnID === "1.2.840.113635.100.8.2");
  if (!extCertNonce) {
    throw new Error('credCert missing "1.2.840.113635.100.8.2" extension (Apple)');
  }
  const nonceToHash = exports_isoUint8Array.concat([authData, clientDataHash]);
  const nonce = await toHash(nonceToHash);
  const extNonce = new Uint8Array(extCertNonce.extnValue.buffer).slice(6);
  if (!exports_isoUint8Array.areEqual(nonce, extNonce)) {
    throw new Error(`credCert nonce was not expected value (Apple)`);
  }
  const credPubKeyPKCS = convertCOSEtoPKCS(credentialPublicKey);
  const credCertSubjectPublicKey = new Uint8Array(subjectPublicKeyInfo.subjectPublicKey);
  if (!exports_isoUint8Array.areEqual(credPubKeyPKCS, credCertSubjectPublicKey)) {
    throw new Error("Credential public key does not equal credCert public key (Apple)");
  }
  return true;
}

// node_modules/@simplewebauthn/server/esm/registration/verifyRegistrationResponse.js
async function verifyRegistrationResponse(options) {
  const { response, expectedChallenge, expectedOrigin, expectedRPID, expectedType, requireUserPresence = true, requireUserVerification = true, supportedAlgorithmIDs = supportedCOSEAlgorithmIdentifiers } = options;
  const { id, rawId, type: credentialType, response: attestationResponse } = response;
  if (!id) {
    throw new Error("Missing credential ID");
  }
  if (id !== rawId) {
    throw new Error("Credential ID was not base64url-encoded");
  }
  if (credentialType !== "public-key") {
    throw new Error(`Unexpected credential type ${credentialType}, expected "public-key"`);
  }
  const clientDataJSON = decodeClientDataJSON(attestationResponse.clientDataJSON);
  const { type, origin, challenge, tokenBinding } = clientDataJSON;
  if (Array.isArray(expectedType)) {
    if (!expectedType.includes(type)) {
      const joinedExpectedType = expectedType.join(", ");
      throw new Error(`Unexpected registration response type "${type}", expected one of: ${joinedExpectedType}`);
    }
  } else if (expectedType) {
    if (type !== expectedType) {
      throw new Error(`Unexpected registration response type "${type}", expected "${expectedType}"`);
    }
  } else if (type !== "webauthn.create") {
    throw new Error(`Unexpected registration response type: ${type}`);
  }
  if (typeof expectedChallenge === "function") {
    if (!await expectedChallenge(challenge)) {
      throw new Error(`Custom challenge verifier returned false for registration response challenge "${challenge}"`);
    }
  } else if (challenge !== expectedChallenge) {
    throw new Error(`Unexpected registration response challenge "${challenge}", expected "${expectedChallenge}"`);
  }
  if (Array.isArray(expectedOrigin)) {
    if (!expectedOrigin.includes(origin)) {
      throw new Error(`Unexpected registration response origin "${origin}", expected one of: ${expectedOrigin.join(", ")}`);
    }
  } else {
    if (origin !== expectedOrigin) {
      throw new Error(`Unexpected registration response origin "${origin}", expected "${expectedOrigin}"`);
    }
  }
  if (tokenBinding) {
    if (typeof tokenBinding !== "object") {
      throw new Error(`Unexpected value for TokenBinding "${tokenBinding}"`);
    }
    if (["present", "supported", "not-supported"].indexOf(tokenBinding.status) < 0) {
      throw new Error(`Unexpected tokenBinding.status value of "${tokenBinding.status}"`);
    }
  }
  const attestationObject = exports_isoBase64URL.toBuffer(attestationResponse.attestationObject);
  const decodedAttestationObject = decodeAttestationObject(attestationObject);
  const fmt = decodedAttestationObject.get("fmt");
  const authData = decodedAttestationObject.get("authData");
  const attStmt = decodedAttestationObject.get("attStmt");
  const parsedAuthData = parseAuthenticatorData(authData);
  const { aaguid, rpIdHash, flags, credentialID, counter, credentialPublicKey, extensionsData } = parsedAuthData;
  let matchedRPID;
  if (expectedRPID) {
    let expectedRPIDs = [];
    if (typeof expectedRPID === "string") {
      expectedRPIDs = [expectedRPID];
    } else {
      expectedRPIDs = expectedRPID;
    }
    matchedRPID = await matchExpectedRPID(rpIdHash, expectedRPIDs);
  }
  if (requireUserPresence && !flags.up) {
    throw new Error("User presence was required, but user was not present");
  }
  if (requireUserVerification && !flags.uv) {
    throw new Error("User verification was required, but user could not be verified");
  }
  if (!credentialID) {
    throw new Error("No credential ID was provided by authenticator");
  }
  if (!credentialPublicKey) {
    throw new Error("No public key was provided by authenticator");
  }
  if (!aaguid) {
    throw new Error("No AAGUID was present during registration");
  }
  const decodedPublicKey = decodeCredentialPublicKey(credentialPublicKey);
  const alg = decodedPublicKey.get(COSEKEYS.alg);
  if (typeof alg !== "number") {
    throw new Error("Credential public key was missing numeric alg");
  }
  if (!supportedAlgorithmIDs.includes(alg)) {
    const supported = supportedAlgorithmIDs.join(", ");
    throw new Error(`Unexpected public key alg "${alg}", expected one of "${supported}"`);
  }
  const clientDataHash = await toHash(exports_isoBase64URL.toBuffer(attestationResponse.clientDataJSON));
  const rootCertificates = SettingsService.getRootCertificates({
    identifier: fmt
  });
  const verifierOpts = {
    aaguid,
    attStmt,
    authData,
    clientDataHash,
    credentialID,
    credentialPublicKey,
    rootCertificates,
    rpIdHash
  };
  let verified = false;
  if (fmt === "fido-u2f") {
    verified = await verifyAttestationFIDOU2F(verifierOpts);
  } else if (fmt === "packed") {
    verified = await verifyAttestationPacked(verifierOpts);
  } else if (fmt === "android-safetynet") {
    verified = await verifyAttestationAndroidSafetyNet(verifierOpts);
  } else if (fmt === "android-key") {
    verified = await verifyAttestationAndroidKey(verifierOpts);
  } else if (fmt === "tpm") {
    verified = await verifyAttestationTPM(verifierOpts);
  } else if (fmt === "apple") {
    verified = await verifyAttestationApple(verifierOpts);
  } else if (fmt === "none") {
    if (attStmt.size > 0) {
      throw new Error("None attestation had unexpected attestation statement");
    }
    verified = true;
  } else {
    throw new Error(`Unsupported Attestation Format: ${fmt}`);
  }
  const toReturn = {
    verified
  };
  if (toReturn.verified) {
    const { credentialDeviceType, credentialBackedUp } = parseBackupFlags(flags);
    toReturn.registrationInfo = {
      fmt,
      aaguid: convertAAGUIDToString(aaguid),
      credentialType,
      credential: {
        id: exports_isoBase64URL.fromBuffer(credentialID),
        publicKey: credentialPublicKey,
        counter,
        transports: response.response.transports
      },
      attestationObject,
      userVerified: flags.uv,
      credentialDeviceType,
      credentialBackedUp,
      origin: clientDataJSON.origin,
      rpID: matchedRPID,
      authenticatorExtensionResults: extensionsData
    };
  }
  return toReturn;
}
// node_modules/@simplewebauthn/server/esm/authentication/generateAuthenticationOptions.js
async function generateAuthenticationOptions(options) {
  const { allowCredentials, challenge = await generateChallenge2(), timeout = 60000, userVerification = "preferred", extensions: extensions2, rpID } = options;
  let _challenge = challenge;
  if (typeof _challenge === "string") {
    _challenge = exports_isoUint8Array.fromUTF8String(_challenge);
  }
  return {
    rpId: rpID,
    challenge: exports_isoBase64URL.fromBuffer(_challenge),
    allowCredentials: allowCredentials?.map((cred) => {
      if (!exports_isoBase64URL.isBase64URL(cred.id)) {
        throw new Error(`excludeCredential id "${cred.id}" is not a valid base64url string`);
      }
      return {
        ...cred,
        id: exports_isoBase64URL.trimPadding(cred.id),
        type: "public-key"
      };
    }),
    timeout,
    userVerification,
    extensions: extensions2
  };
}
// node_modules/@simplewebauthn/server/esm/authentication/verifyAuthenticationResponse.js
async function verifyAuthenticationResponse(options) {
  const { response, expectedChallenge, expectedOrigin, expectedRPID, expectedType, credential, requireUserVerification = true, advancedFIDOConfig } = options;
  const { id, rawId, type: credentialType, response: assertionResponse } = response;
  if (!id) {
    throw new Error("Missing credential ID");
  }
  if (id !== rawId) {
    throw new Error("Credential ID was not base64url-encoded");
  }
  if (credentialType !== "public-key") {
    throw new Error(`Unexpected credential type ${credentialType}, expected "public-key"`);
  }
  if (!response) {
    throw new Error("Credential missing response");
  }
  if (typeof assertionResponse?.clientDataJSON !== "string") {
    throw new Error("Credential response clientDataJSON was not a string");
  }
  const clientDataJSON = decodeClientDataJSON(assertionResponse.clientDataJSON);
  const { type, origin, challenge, tokenBinding } = clientDataJSON;
  if (Array.isArray(expectedType)) {
    if (!expectedType.includes(type)) {
      const joinedExpectedType = expectedType.join(", ");
      throw new Error(`Unexpected authentication response type "${type}", expected one of: ${joinedExpectedType}`);
    }
  } else if (expectedType) {
    if (type !== expectedType) {
      throw new Error(`Unexpected authentication response type "${type}", expected "${expectedType}"`);
    }
  } else if (type !== "webauthn.get") {
    throw new Error(`Unexpected authentication response type: ${type}`);
  }
  if (typeof expectedChallenge === "function") {
    if (!await expectedChallenge(challenge)) {
      throw new Error(`Custom challenge verifier returned false for registration response challenge "${challenge}"`);
    }
  } else if (challenge !== expectedChallenge) {
    throw new Error(`Unexpected authentication response challenge "${challenge}", expected "${expectedChallenge}"`);
  }
  if (Array.isArray(expectedOrigin)) {
    if (!expectedOrigin.includes(origin)) {
      const joinedExpectedOrigin = expectedOrigin.join(", ");
      throw new Error(`Unexpected authentication response origin "${origin}", expected one of: ${joinedExpectedOrigin}`);
    }
  } else {
    if (origin !== expectedOrigin) {
      throw new Error(`Unexpected authentication response origin "${origin}", expected "${expectedOrigin}"`);
    }
  }
  if (!exports_isoBase64URL.isBase64URL(assertionResponse.authenticatorData)) {
    throw new Error("Credential response authenticatorData was not a base64url string");
  }
  if (!exports_isoBase64URL.isBase64URL(assertionResponse.signature)) {
    throw new Error("Credential response signature was not a base64url string");
  }
  if (assertionResponse.userHandle && typeof assertionResponse.userHandle !== "string") {
    throw new Error("Credential response userHandle was not a string");
  }
  if (tokenBinding) {
    if (typeof tokenBinding !== "object") {
      throw new Error("ClientDataJSON tokenBinding was not an object");
    }
    if (["present", "supported", "notSupported"].indexOf(tokenBinding.status) < 0) {
      throw new Error(`Unexpected tokenBinding status ${tokenBinding.status}`);
    }
  }
  const authDataBuffer = exports_isoBase64URL.toBuffer(assertionResponse.authenticatorData);
  const parsedAuthData = parseAuthenticatorData(authDataBuffer);
  const { rpIdHash, flags, counter, extensionsData } = parsedAuthData;
  let expectedRPIDs = [];
  if (typeof expectedRPID === "string") {
    expectedRPIDs = [expectedRPID];
  } else {
    expectedRPIDs = expectedRPID;
  }
  const matchedRPID = await matchExpectedRPID(rpIdHash, expectedRPIDs);
  if (advancedFIDOConfig !== undefined) {
    const { userVerification: fidoUserVerification } = advancedFIDOConfig;
    if (fidoUserVerification === "required") {
      if (!flags.uv) {
        throw new Error("User verification required, but user could not be verified");
      }
    } else if (fidoUserVerification === "preferred" || fidoUserVerification === "discouraged") {}
  } else {
    if (!flags.up) {
      throw new Error("User not present during authentication");
    }
    if (requireUserVerification && !flags.uv) {
      throw new Error("User verification required, but user could not be verified");
    }
  }
  const clientDataHash = await toHash(exports_isoBase64URL.toBuffer(assertionResponse.clientDataJSON));
  const signatureBase = exports_isoUint8Array.concat([authDataBuffer, clientDataHash]);
  const signature = exports_isoBase64URL.toBuffer(assertionResponse.signature);
  if ((counter > 0 || credential.counter > 0) && counter <= credential.counter) {
    throw new Error(`Response counter value ${counter} was lower than expected ${credential.counter}`);
  }
  const { credentialDeviceType, credentialBackedUp } = parseBackupFlags(flags);
  const toReturn = {
    verified: await verifySignature2({
      signature,
      data: signatureBase,
      credentialPublicKey: credential.publicKey
    }),
    authenticationInfo: {
      newCounter: counter,
      credentialID: credential.id,
      userVerified: flags.uv,
      credentialDeviceType,
      credentialBackedUp,
      authenticatorExtensionResults: extensionsData,
      origin: clientDataJSON.origin,
      rpID: matchedRPID
    }
  };
  return toReturn;
}
// server/db/module/regUser.ts
var createAdminOrUsers = async (user_name, user_email) => {
  const result = await sql.begin(async (tx) => {
    const [isAdminExist] = await tx`
      SELECT reg_user_id FROM multi_schema."RegisteredUser" LIMIT 1`;
    const userId = Bun.randomUUIDv7();
    const [serverId] = await sql`
      SELECT * FROM multi_schema."ServerSystem" LIMIT 1`;
    const insertUser = {
      reg_user_id: userId,
      user_name,
      user_email,
      role_type: !isAdminExist ? "admin" : "user",
      status: !isAdminExist,
      ServerSystem: serverId.system_id
    };
    await tx`
      INSERT INTO multi_schema."RegisteredUser" ${sql(insertUser)}`;
    return userId;
  });
  return result;
};
var createPasskey = async (cred_id, cred_public_key, RegisteredUser, counter, registered_device, backup_eligible, transports) => {
  try {
    const [result] = await sql`
      INSERT INTO multi_schema."Passkeys" ( cred_id,  cred_public_key,  "RegisteredUser",  counter,  registered_device,  backup_eligible,  transports) 
    VALUES (${cred_id}, ${cred_public_key}, ${RegisteredUser}, ${counter}, ${registered_device}, ${backup_eligible}, ${JSON.stringify(transports)}::jsonb ) RETURNING *`;
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
var findRegUser = async (user_email) => {
  const [user] = await sql`
    SELECT reg_user_id, user_email, status, role_type FROM multi_schema."RegisteredUser" 
    WHERE user_email = ${user_email} LIMIT 1`;
  return user;
};
var userPassKeyByEmail = async (user_email) => {
  const [rows] = await sql`
    SELECT reg.reg_user_id, reg.user_email, reg.user_name, reg.role_type, reg.status, pks.cred_id, pks.cred_public_key, pks.counter, pks.transports 
    FROM multi_schema."RegisteredUser" reg 
    JOIN multi_schema."Passkeys" pks ON reg.reg_user_id = pks."RegisteredUser"
    WHERE reg.user_email = ${user_email}`;
  return rows;
};
var countSuspendedUsers = async () => {
  const [result] = await sql`
    SELECT COUNT(reg_user_id) AS count_users 
    FROM multi_schema."RegisteredUser" 
    WHERE status = false`;
  return result.count_users;
};
var updateAccountStatus = async (userEmail) => {
  const [result] = await sql`
    UPDATE multi_schema."RegisteredUser" SET status = NOT status 
    WHERE user_email = ${userEmail} RETURNING reg_user_id`;
  return result;
};

// node_modules/hono/dist/utils/buffer.js
var bufferToFormData = (arrayBuffer, contentType) => {
  const response = new Response(arrayBuffer, {
    headers: {
      "Content-Type": contentType
    }
  });
  return response.formData();
};

// node_modules/hono/dist/validator/validator.js
var jsonRegex = /^application\/([a-z-\.]+\+)?json(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/;
var multipartRegex = /^multipart\/form-data(;\s?boundary=[a-zA-Z0-9'"()+_,\-./:=?]+)?$/;
var urlencodedRegex = /^application\/x-www-form-urlencoded(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/;
var validator = (target, validationFunc) => {
  return async (c, next) => {
    let value = {};
    const contentType = c.req.header("Content-Type");
    switch (target) {
      case "json":
        if (!contentType || !jsonRegex.test(contentType)) {
          break;
        }
        try {
          value = await c.req.json();
        } catch {
          const message = "Malformed JSON in request body";
          throw new HTTPException(400, { message });
        }
        break;
      case "form": {
        if (!contentType || !(multipartRegex.test(contentType) || urlencodedRegex.test(contentType))) {
          break;
        }
        let formData;
        if (c.req.bodyCache.formData) {
          formData = await c.req.bodyCache.formData;
        } else {
          try {
            const arrayBuffer = await c.req.arrayBuffer();
            formData = await bufferToFormData(arrayBuffer, contentType);
            c.req.bodyCache.formData = formData;
          } catch (e) {
            let message = "Malformed FormData request.";
            message += e instanceof Error ? ` ${e.message}` : ` ${String(e)}`;
            throw new HTTPException(400, { message });
          }
        }
        const form = {};
        formData.forEach((value2, key) => {
          if (key.endsWith("[]")) {
            (form[key] ??= []).push(value2);
          } else if (Array.isArray(form[key])) {
            form[key].push(value2);
          } else if (key in form) {
            form[key] = [form[key], value2];
          } else {
            form[key] = value2;
          }
        });
        value = form;
        break;
      }
      case "query":
        value = Object.fromEntries(Object.entries(c.req.queries()).map(([k, v]) => {
          return v.length === 1 ? [k, v[0]] : [k, v];
        }));
        break;
      case "param":
        value = c.req.param();
        break;
      case "header":
        value = c.req.header();
        break;
      case "cookie":
        value = getCookie(c);
        break;
    }
    const res = await validationFunc(value, c);
    if (res instanceof Response) {
      return res;
    }
    c.req.addValidatedData(target, res);
    await next();
  };
};

// node_modules/@hono/zod-validator/dist/index.js
var zValidator = (target, schema, hook) => validator(target, async (value, c) => {
  let validatorValue = value;
  if (target === "header" && schema instanceof ZodObject) {
    const schemaKeys = Object.keys(schema.shape);
    const caseInsensitiveKeymap = Object.fromEntries(schemaKeys.map((key) => [key.toLowerCase(), key]));
    validatorValue = Object.fromEntries(Object.entries(value).map(([key, value2]) => [caseInsensitiveKeymap[key] || key, value2]));
  }
  const result = await schema.safeParseAsync(validatorValue);
  if (hook) {
    const hookResult = await hook({ data: validatorValue, ...result, target }, c);
    if (hookResult) {
      if (hookResult instanceof Response) {
        return hookResult;
      }
      if ("response" in hookResult) {
        return hookResult.response;
      }
    }
  }
  if (!result.success) {
    return c.json(result, 400);
  }
  return result.data;
});

// server/modules/validateSchema.ts
var validateSchema = (type, schema) => zValidator(type, schema, (result, c) => {
  if (!result.success)
    return c.json({ error: result.error.errors[0].message }, 400);
});

// server/routes/auth.ts
var auth = new Hono2;
var WEBSITE_TITLE = "Photos Gallery X";
var LIMIT_NUMBER_REGISTER = 2;
auth.get("/init-register", logUserInDB(false), validateSchema("query", userAuthSchema), async (c) => {
  try {
    const result = await countSuspendedUsers();
    if (result.waiting >= LIMIT_NUMBER_REGISTER)
      return c.json({ error: "User creation have reached limited." }, 400);
    const { username, email } = c.req.valid("query");
    if (!email)
      return c.json({ error: "Email is required" }, 400);
    if (await findRegUser(email))
      return c.json({ error: "User already exists" }, 400);
    const options = await generateRegistrationOptions({
      rpName: WEBSITE_TITLE,
      rpID: Bun.env.DOMAIN_NAME,
      userName: email,
      userDisplayName: username,
      authenticatorSelection: {
        residentKey: "required",
        userVerification: "preferred"
      }
    });
    const registerInfor = { username, email, challenge: options.challenge };
    await setSecureCookie(c, "regInfo", registerInfor);
    return c.json(options, 200);
  } catch (error) {
    console.error(error);
    await insertErrorLog("auth.ts", "init-register", error);
    return c.json({ error: "Failed to fetch Account" }, 500);
  }
});
auth.post("/verify-register", async (c) => {
  try {
    const regInfo = await getSecureCookie(c, "regInfo");
    if (!regInfo)
      return c.json({ error: "Registration info not found" }, 403);
    const reqJson = await c.req.json();
    const verification = await verifyRegistrationResponse({
      response: reqJson,
      expectedChallenge: regInfo.challenge,
      expectedOrigin: Bun.env.ORIGIN_URL,
      expectedRPID: Bun.env.DOMAIN_NAME,
      requireUserVerification: true
    });
    if (!(verification.verified && verification.registrationInfo)) {
      return c.json({ verified: false, error: "Verification failed" }, 400);
    }
    const lastInsertId = await createAdminOrUsers(regInfo.username, regInfo.email);
    if (!lastInsertId)
      return c.json({ error: "User creation failed" }, 400);
    const createPK = await createPasskey(verification.registrationInfo.credential.id, verification.registrationInfo.credential.publicKey, lastInsertId, verification.registrationInfo.credential.counter, verification.registrationInfo.credentialDeviceType, verification.registrationInfo.credentialBackedUp, verification.registrationInfo.credential.transports);
    if (!createPK)
      return c.json({ error: "Passkey creation failed" }, 400);
    clearCookie(c, "regInfo");
    return c.json({ verified: verification.verified }, 200);
  } catch (error) {
    await insertErrorLog("auth.ts", "verify-register", error);
    return c.json({ error: "Error with verification" }, 500);
  }
});
auth.get("/init-auth", logUserInDB(true), validateSchema("query", userAuthSchema), async (c) => {
  try {
    const { email } = c.req.valid("query");
    if (!email)
      return c.json({ error: "Email is required" }, 400);
    const userAccount = await findRegUser(email);
    if (!userAccount)
      return c.json({ error: "No user for this email" }, 400);
    if (!userAccount.status)
      return c.json({ error: `You don't have permission to log in at the moment. Please wait for admin approval` }, 400);
    const userPasskeys = await userPassKeyByEmail(email);
    if (!userPasskeys)
      return c.json({ error: "No passkey created for this email" }, 400);
    const options = await generateAuthenticationOptions({
      rpID: Bun.env.DOMAIN_NAME,
      allowCredentials: [
        {
          id: userPasskeys.cred_id,
          transports: JSON.parse(userPasskeys.transports)
        }
      ],
      userVerification: "required"
    });
    await setSecureCookie(c, "authInfo", { email, challenge: options.challenge });
    return c.json(options, 200);
  } catch (error) {
    await insertErrorLog("auth.ts", "init-auth", error);
    return c.json({ error: "Failed to auth " }, 500);
  }
});
auth.post("/verify-auth", async (c) => {
  try {
    const authInfo = await getSecureCookie(c, "authInfo");
    if (!authInfo)
      return c.json({ error: "Authentication info not found" }, 400);
    const userPasskeys = await userPassKeyByEmail(authInfo.email);
    if (!userPasskeys)
      return c.json({ error: "Invalid user credentials" }, 401);
    const reqJsonBody = await c.req.json();
    let verification;
    try {
      verification = await verifyAuthenticationResponse({
        response: reqJsonBody,
        expectedChallenge: authInfo.challenge,
        expectedOrigin: Bun.env.ORIGIN_URL,
        expectedRPID: Bun.env.DOMAIN_NAME,
        credential: {
          id: userPasskeys.cred_id,
          publicKey: userPasskeys.cred_public_key,
          counter: userPasskeys.counter,
          transports: JSON.parse(userPasskeys.transports)
        },
        requireUserVerification: true
      });
    } catch (error) {
      console.error(error);
      return c.json({ error: "Unauthorized access" }, 401);
    }
    const userLoggedIn = {
      userId: userPasskeys.reg_user_id,
      userEmail: userPasskeys.user_email,
      userName: userPasskeys.user_name,
      roleType: userPasskeys.role_type,
      status: userPasskeys.status
    };
    if (!verification.verified)
      return c.json({ verified: false, error: "Verification failed" }, 400);
    clearCookie(c, "authInfo");
    await createAuthSession(c, userLoggedIn);
    return c.json({ verified: verification.verified });
  } catch (error) {
    await insertErrorLog("auth.ts", "verify-auth", error);
    return c.json({ error: "Failed to auth" }, 500);
  }
});
var auth_default = auth;

// server/db/module/media.ts
import path2 from "path";
var {$: $3 } = globalThis.Bun;
var importedMediasThumbHash = async () => {
  return await sql`
    SELECT media_id, source_file, thumb_path, file_type, selected_frame, duration 
    FROM multi_schema."Media" 
    WHERE thumb_created = FALSE OR hash_code IS NULL
    ORDER BY media_id`;
};
var rescanThumbnail = async () => {
  return await sql`
    SELECT media_id, source_file, thumb_path, file_type, selected_frame, duration 
    FROM multi_schema."Media"
    ORDER BY media_id`;
};
var importedMediasCaption = async () => {
  return await sql`
    SELECT media_id, thumb_path FROM multi_schema."Media"
    WHERE caption IS NULL OR caption = '' ORDER BY media_id`;
};
var importedMediasLocation = async () => {
  return await sql`
    SELECT media_id, gps_latitude, gps_longitude 
    FROM multi_schema."Media" md
    LEFT JOIN multi_schema."LocationMedia" lm ON md.media_id = lm.media
    WHERE lm.media IS NULL AND md.gps_latitude IS NOT NULL
    ORDER BY media_id`;
};
var updateHashThumb = async (media_id, hashCode) => {
  return await sql.begin(async (tx) => {
    const [dupMedia] = await tx`
      SELECT media_id, hash_code 
      FROM multi_schema."Media" 
      WHERE hash_code = ${hashCode} AND media_id <> ${media_id} LIMIT 1`;
    if (dupMedia) {
      const insertDups = [
        { media: dupMedia.media_id, hash_code: dupMedia.hash_code },
        { media: media_id, hash_code: hashCode }
      ];
      await tx`
          INSERT INTO "multi_schema"."Duplicate" ${sql(insertDups)} 
          ON CONFLICT DO NOTHING`;
    }
    return await tx`
      UPDATE multi_schema."Media" SET hash_code = ${hashCode}, thumb_created = TRUE 
      WHERE media_id = ${media_id}`;
  });
};
var fetchCameraType = async () => {
  return await sql`
    SELECT camera_id, model FROM multi_schema."CameraType" 
    ORDER BY model ASC`;
};
var updateMedias = async (mediaIds, updateKey, updateValue) => {
  const result = await sql`
    UPDATE multi_schema."Media" SET ${sql(updateKey)} = ${updateValue} 
    WHERE media_id IN ${sql(mediaIds)}`;
  return result.count === mediaIds.length;
};
var updateMediaCaption = async (media) => {
  return await sql`
    UPDATE multi_schema."Media" SET caption = ${media.caption} 
    WHERE media_id = ${media.media_id}`;
};
var updateSelectFrameLivePhoto = async (mediaId, framePos) => {
  return await sql`
    UPDATE multi_schema."Media" SET selected_frame = ${framePos} 
    WHERE media_id = ${mediaId}`;
};
var groupMonthsByYear = async () => {
  return await sql`
    WITH ranked_media AS (
      SELECT media_id, thumb_path, file_type, create_year, create_month, create_date,
            ROW_NUMBER() OVER (
              PARTITION BY create_year, create_month
              ORDER BY create_date ) AS rn
        FROM multi_schema."Media" as md
        WHERE hidden = FALSE AND deleted = FALSE
    )
    SELECT * FROM ranked_media
    WHERE rn = 1
    ORDER BY create_year DESC, create_month DESC`;
};
var deleteMedias = async (mediaIds) => {
  try {
    const mediaDeleted = await sql.begin(async (tx) => {
      const deletePaths = await tx`
        SELECT media_id, source_file, thumb_path FROM "multi_schema"."Media" 
        WHERE media_id IN ${sql(mediaIds)}`;
      const result = await tx`
        DELETE FROM "multi_schema"."Media" 
        WHERE media_id IN ${sql(mediaIds)} 
        RETURNING media_id`;
      const countDelted = await deleteHelper(deletePaths);
      return result.length === countDelted ? countDelted : 0;
    });
    return mediaDeleted === mediaIds.length;
  } catch (error) {
    await insertErrorLog("db/module/media.ts", "deleteMedias", error);
    console.error("deleteMedias", error);
  }
};
var deleteAllInRecently = async () => {
  try {
    const mediaDeleted = await sql.begin(async (tx) => {
      const deletePaths = await tx`
        SELECT media_id, source_file, thumb_path FROM "multi_schema"."Media" 
        WHERE deleted = TRUE`;
      const result = await tx`
        DELETE FROM "multi_schema"."Media" 
        WHERE deleted = TRUE RETURNING media_id`;
      const countDelted = await deleteHelper(deletePaths);
      return result.length === countDelted;
    });
    return mediaDeleted;
  } catch (error) {
    await insertErrorLog("db/module/media.ts", "deleteMedias", error);
    console.error("deleteMedias", error);
  }
};
var deleteHelper = async (deletePaths) => {
  let count = 0;
  for (const each of deletePaths) {
    const thumbPath = path2.join(Bun.env.MAIN_PATH, each.thumb_path);
    const sourcePath = path2.join(Bun.env.MAIN_PATH, each.source_file);
    const { stderr, exitCode } = await $3`rm ${thumbPath} ${sourcePath}`;
    exitCode === 0 ? ++count : console.warn(stderr);
  }
  return count;
};
var createAlbum = async (regUserId, albumTitle) => {
  const [albumId] = await sql`
    INSERT INTO "multi_schema"."Album" ("RegisteredUser", title) 
    VALUES (${regUserId}, ${albumTitle}) RETURNING album_id`;
  return albumId.album_id;
};
var fetchAlbums = async () => {
  return await sql`
    SELECT al.album_id, al.title as title, COUNT(am.media) AS media_count, MIN(md.thumb_path) as thumb_path
    FROM multi_schema."Album" al
    LEFT JOIN multi_schema."AlbumMedia" am ON am.album = al.album_id
    LEFT JOIN multi_schema."Media" md ON am.media = md.media_id
    WHERE md.deleted = FALSE AND md.hidden = FALSE
    GROUP BY al.album_id
    ORDER BY al.title ASC`;
};
var fetchLocations = async () => {
  return await sql`
    SELECT loc.location_id, loc.city, loc.country, COUNT(lm.media) AS media_count, MIN(md.thumb_path) as thumb_path
    FROM multi_schema."Location" loc
    LEFT JOIN multi_schema."LocationMedia" lm ON loc.location_id = lm.location
    LEFT JOIN multi_schema."Media" md ON lm.media = md.media_id
    WHERE md.deleted = FALSE AND md.hidden = FALSE
    GROUP BY loc.location_id
    ORDER BY loc.location_id ASC`;
};
var fetchAddToAlbum = async (mediaIds, albumId) => {
  const insertIds = mediaIds.map((id) => ({
    album: albumId,
    media: id
  }));
  return await sql`
    INSERT INTO "multi_schema"."AlbumMedia" ${sql(insertIds)} 
    ON CONFLICT DO NOTHING`;
};
var fetchRemoveFromAlbum = async (mediaIds, albumId) => {
  return await sql`
    DELETE FROM "multi_schema"."AlbumMedia" 
    WHERE album = ${albumId} AND media IN ${sql(mediaIds)}`;
};
var fetchMediaCount = async () => {
  const mediaCount = await sql`
    SELECT 
      SUM(CASE WHEN "favorite" = TRUE AND "hidden" = FALSE AND "deleted" = FALSE THEN 1 ELSE 0 END) AS "Favorite",
      SUM(CASE WHEN "hidden" = TRUE AND "deleted" = FALSE THEN 1 ELSE 0 END) AS "Hidden",
      ( SELECT COUNT("media") FROM "multi_schema"."Duplicate") AS "Duplicate",
      SUM(CASE WHEN "deleted" = TRUE THEN 1 ELSE 0 END) AS "Recently Deleted"
    FROM "multi_schema"."Media"`;
  return mediaCount;
};
var sumSizeMediaType = async () => {
  const [mediaCount] = await sql`
    SELECT
        COALESCE(SUM(file_size) FILTER (WHERE file_type = 'Photo'), 0)::BIGINT AS "photo",
        COALESCE(SUM(file_size) FILTER (WHERE file_type = 'Live'), 0)::BIGINT AS "live",
        COALESCE(SUM(file_size) FILTER (WHERE file_type = 'Video'), 0)::BIGINT AS "video",
        SUM(file_size)::BIGINT AS "all"
    FROM "multi_schema"."Media"`;
  return mediaCount;
};
var getSourceFiles = async (mediaIds) => {
  return await sql`
    SELECT source_file FROM "multi_schema"."Media" 
    WHERE media_id IN ${sql(mediaIds)}`;
};
var mergeMedias = async () => {
  return await sql`
    SELECT media FROM (
      SELECT dp.media, dp.hash_code, md.file_size, 
      ROW_NUMBER() OVER (PARTITION BY dp.hash_code ORDER BY md.file_size DESC, dp.media ASC) rn
      FROM multi_schema."Duplicate" dp
      LEFT JOIN multi_schema."Media" md ON md.media_id = dp.media
    ) ranked
    WHERE rn > 1`.values();
};

// server/routes/user.ts
var user = new Hono2;
user.get("/verified", async (c) => {
  const userInfo = getUserBySession(c);
  if (userInfo)
    return c.json(userInfo, 200);
  await insertErrorLog("routes/user.ts", "get/verified", "User infor not found");
  return c.json({ error: "Failed to verified account" }, 500);
});
user.get("/logout", async (c) => {
  try {
    const sessionId = c.get(SET_USER_SESSION);
    sessionStore.delete(sessionId);
    clearCookie(c, SESSION_KEY);
    return c.json("Successfully logout!", 200);
  } catch (error) {
    console.error(error);
    await insertErrorLog("routes/user.ts", "get/logout", error);
    return c.json({ error: "Failed to logout account" }, 500);
  }
});
user.get("/serverCapacity", async (c) => {
  try {
    const diskCap = diskCapacity(Bun.env.MAIN_PATH);
    const sizeFileType = sumSizeMediaType();
    const [diskInfo, typesInfo] = await Promise.all([diskCap, sizeFileType]);
    if (diskInfo && typesInfo)
      return c.json({ ...diskInfo, ...typesInfo });
  } catch (err) {
    console.error(err);
    await insertErrorLog("routes/user.ts", "get/logout", err);
  }
  return c.json({ error: "Failed to fetch Account" }, 500);
});
var user_default = user;

// server/routes/album.ts
var album = new Hono2;
var albumSchema = exports_external.object({
  mediaIds: exports_external.array(exports_external.coerce.number()),
  albumId: exports_external.coerce.number().optional(),
  albumTitle: exports_external.string().optional()
});
album.get("/", async (c) => {
  try {
    return c.json(await fetchAlbums());
  } catch (error) {
    console.log("fetchAlbums/", error);
    await insertErrorLog("album.ts", "get/fetchAlbums", error);
    return c.json({ error: "Error fetch albums" }, 500);
  }
});
album.get("/collection", async (c) => {
  try {
    const [albums, locations] = await Promise.all([fetchAlbums(), fetchLocations()]);
    return c.json({ albums, locations });
  } catch (error) {
    console.log("fetchAlbums/collection", error);
    await insertErrorLog("routes/album.ts", "get/collection", error);
    return c.json({ error: "Error fetch albums" }, 500);
  }
});
album.get("/statistic", async (c) => {
  try {
    return c.json(await fetchMediaCount(), 200);
  } catch (error) {
    console.error("Error fetching statistic:", error);
    await insertErrorLog("album.ts", "statistic", error);
    return c.json({ error: "Failed to fetch media" }, 500);
  }
});
album.put("/add", validateSchema("json", albumSchema), async (c) => {
  try {
    const { mediaIds, albumId, albumTitle } = c.req.valid("json");
    if (!albumId && !albumTitle)
      return c.json({ error: "Missing Album ID or Album Title" }, 400);
    const user2 = getUserBySession(c);
    if (!user2 || !user2.userId)
      return c.json({ error: "User not found" }, 500);
    const targetAlbumId = !albumId && albumTitle ? await createAlbum(user2.userId, albumTitle) : albumId;
    if (!targetAlbumId)
      return c.json({ error: "Album creation failed" }, 500);
    const addStatus = await fetchAddToAlbum(mediaIds, targetAlbumId);
    if (addStatus)
      return c.json(204);
    return c.json(201);
  } catch (error) {
    console.error("add Albums", error);
    await insertErrorLog("album.ts", "add to album", error);
    return c.json({ error: "Failed to add media to album" }, 500);
  }
});
album.put("/remove", validateSchema("json", albumSchema), async (c) => {
  try {
    const { mediaIds, albumId } = c.req.valid("json");
    if (!albumId)
      return c.json({ error: "Missing Album ID" }, 400);
    const removeStatus = await fetchRemoveFromAlbum(mediaIds, albumId);
    if (removeStatus)
      return c.json(204);
  } catch (error) {
    console.error("fetchRemoveFromAlbum ", error);
    await insertErrorLog("album.ts", "remove from album", error);
    return c.json({ error: "Failed to remove media from album" }, 500);
  }
});
var album_default = album;

// server/routes/admin.ts
import * as fs4 from "fs/promises";
import path9 from "path";

// node_modules/hono/dist/utils/stream.js
var StreamingApi = class {
  writer;
  encoder;
  writable;
  abortSubscribers = [];
  responseReadable;
  aborted = false;
  closed = false;
  constructor(writable, _readable) {
    this.writable = writable;
    this.writer = writable.getWriter();
    this.encoder = new TextEncoder;
    const reader = _readable.getReader();
    this.abortSubscribers.push(async () => {
      await reader.cancel();
    });
    this.responseReadable = new ReadableStream({
      async pull(controller) {
        const { done, value } = await reader.read();
        done ? controller.close() : controller.enqueue(value);
      },
      cancel: () => {
        this.abort();
      }
    });
  }
  async write(input) {
    try {
      if (typeof input === "string") {
        input = this.encoder.encode(input);
      }
      await this.writer.write(input);
    } catch {}
    return this;
  }
  async writeln(input) {
    await this.write(input + `
`);
    return this;
  }
  sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
  async close() {
    try {
      await this.writer.close();
    } catch {}
    this.closed = true;
  }
  async pipe(body) {
    this.writer.releaseLock();
    await body.pipeTo(this.writable, { preventClose: true });
    this.writer = this.writable.getWriter();
  }
  onAbort(listener) {
    this.abortSubscribers.push(listener);
  }
  abort() {
    if (!this.aborted) {
      this.aborted = true;
      this.abortSubscribers.forEach((subscriber) => subscriber());
    }
  }
};

// node_modules/hono/dist/helper/streaming/utils.js
var isOldBunVersion = () => {
  const version = typeof Bun !== "undefined" ? Bun.version : undefined;
  if (version === undefined) {
    return false;
  }
  const result = version.startsWith("1.1") || version.startsWith("1.0") || version.startsWith("0.");
  isOldBunVersion = () => result;
  return result;
};

// node_modules/hono/dist/helper/streaming/stream.js
var contextStash = /* @__PURE__ */ new WeakMap;
var stream = (c, cb, onError) => {
  const { readable, writable } = new TransformStream;
  const stream2 = new StreamingApi(writable, readable);
  if (isOldBunVersion()) {
    c.req.raw.signal.addEventListener("abort", () => {
      if (!stream2.closed) {
        stream2.abort();
      }
    });
  }
  contextStash.set(stream2.responseReadable, c);
  (async () => {
    try {
      await cb(stream2);
    } catch (e) {
      if (e === undefined) {} else if (e instanceof Error && onError) {
        await onError(e, stream2);
      } else {
        console.error(e);
      }
    } finally {
      stream2.close();
    }
  })();
  return c.newResponse(stream2.responseReadable);
};

// node_modules/hono/dist/helper/streaming/text.js
var streamText = (c, cb, onError) => {
  c.header("Content-Type", TEXT_PLAIN);
  c.header("X-Content-Type-Options", "nosniff");
  c.header("Transfer-Encoding", "chunked");
  return stream(c, cb, onError);
};

// server/middleware/isRuningTask.ts
var activeTasks = { captioning: false, editing: false, importing: false };
var isTaskRunning = (key) => activeTasks[key];
var taskStatusMiddleware = (taskName) => createMiddleware(async (c, next) => {
  const taskRunningId = isTaskRunning(taskName);
  const user2 = getUserBySession(c);
  if (!user2 || !user2.userId)
    return c.json({ error: "\u274C User not found. Please login and try again" }, 503);
  if (!taskRunningId || user2.userId === taskRunningId)
    return await next();
  return c.json({ error: "\u274C Background processing. Try again shortly." }, 503);
});
var isCaptioningRunning = () => createMiddleware(async (c, next) => {
  const taskRunningId = isTaskRunning("captioning");
  if (!taskRunningId)
    return await next();
  return c.json({ error: "\u274C Captioning images is processing. Try again shortly." }, 503);
});
var markTaskStart = (key, userId) => {
  activeTasks[key] = userId || true;
};
var markTaskEnd = (key) => {
  activeTasks[key] = false;
};

// server/routes/importHelper/_imports.ts
import path7 from "path";

// server/service/index.ts
import path6 from "path";

// server/service/workers/index.ts
import os from "os";
var MAX_CONCURRENT_WORKERS = Math.max(1, os.cpus().length - 2);
var workerQueue = async (tasks, workerLimit = MAX_CONCURRENT_WORKERS) => {
  const executing = [];
  for (const task of tasks) {
    const promise = task().finally(() => {
      executing.splice(executing.indexOf(promise), 1);
    });
    executing.push(promise);
    if (executing.length >= workerLimit) {
      await Promise.race(executing);
    }
  }
  await Promise.allSettled(executing);
};

// server/service/generators/hashcode.ts
import fs2 from "fs";
var createHash = async (input) => {
  try {
    if (!await isExist(input))
      return "";
    const hasher = new Bun.CryptoHasher("sha256");
    const stream2 = fs2.createReadStream(input);
    await stream2.forEach(async (chunk) => {
      hasher.update(new Uint16Array(chunk));
    });
    return hasher.digest("hex");
  } catch (error) {
    console.error(`createHash ${input}: ${error}`);
    await insertErrorLog("generators/hashcode.ts", "createHash", `${error}`);
    return "";
  }
};

// server/service/generators/thumbnails.ts
var {$: $4 } = globalThis.Bun;
var SIZE_THUMBNAIL = "512x512\\>";
var QUALITY = 80;
var createThumbnail = async (input, output, media) => {
  try {
    if (!await isExist(input))
      return false;
    const fileType = media.file_type;
    const duration = fileType === "Video" ? 1 : Math.min(media.selected_frame, media.duration);
    const command = fileType === "Photo" ? $4`magick ${input.concat("[0]")} -auto-orient -thumbnail ${SIZE_THUMBNAIL} -quality ${QUALITY} ${output}` : $4`ffmpeg -hide_banner -loglevel error -i ${input} \
        -ss 00:00:0${duration} -vframes 1 -f image2pipe -vcodec png - | magick - -auto-orient \
        -thumbnail ${SIZE_THUMBNAIL} -quality ${QUALITY} ${output}`;
    await command.quiet();
    return await isExist(output);
  } catch (error) {
    console.error(`createThumbnail Throw ${input}: ${error}`);
    await insertErrorLog("service/generators/thumbnails.ts", "createThumbnail", error);
    return false;
  }
};

// server/service/generators/caption.ts
import path3 from "path";

// server/service/generators/_sendTaskHelper.ts
var BATCH_SIZE_UPDATE_CAPTION = 200;
var sendTask = async (mediaObj, childProc, reader) => {
  const encoder = new TextEncoder;
  const decoder = new TextDecoder;
  childProc.stdin.write(encoder.encode(JSON.stringify(mediaObj) + `
`));
  while (true) {
    const { value, done } = await reader.read();
    if (done)
      break;
    const text = decoder.decode(value, { stream: true }).trim();
    for (const line of text.split(`
`)) {
      try {
        return JSON.parse(line);
      } catch {}
    }
  }
  throw new Error("Child process closed before sending a JSON response");
};

// server/service/generators/caption.ts
var createCaption = async (medias) => {
  const pythonFilePath = "models/ai_model/image_captioning.py";
  const totalFile = medias.length;
  if (!totalFile)
    return;
  let count = 0;
  const childProc = Bun.spawn(["python3", pythonFilePath], {
    stdout: "pipe",
    stdin: "pipe"
  });
  const captions = [];
  try {
    console.log(childProc.pid);
    const reader = childProc.stdout.getReader();
    for (const media of medias) {
      const resData = await sendTask({ id: media.media_id, path: path3.join(Bun.env.MAIN_PATH, media.thumb_path) }, childProc, reader);
      console.log(`Generating Caption: ${++count}/${totalFile}`);
      if (captions.length >= BATCH_SIZE_UPDATE_CAPTION) {
        await workerUpdateCaption(captions);
        captions.length = 0;
      }
      captions.push(resData);
    }
    if (captions.length >= 0)
      await workerUpdateCaption(captions);
  } catch (error) {
    await insertErrorLog("service/generate/captions.ts", "createCaption", error);
    console.log(error);
  } finally {
    childProc.kill();
  }
};
var workerUpdateCaption = async (captions) => {
  const tasks = captions.map((media) => () => updateMediaCaption(media));
  await workerQueue(tasks);
};

// server/service/generators/metadata.ts
var {$: $5 } = globalThis.Bun;
import path5 from "path";
import * as fs3 from "fs/promises";

// server/middleware/validateFiles.ts
import path4 from "path";
var GB = 1024 * 1024 * 1024;
var ALLOWED_FILE_SIZE = 1 * GB;
var ALLOWED_MIME_TYPES = [".3gp", ".webp", ".m4v", ".jpg", ".gif", ".mov", ".mp4", ".heif", ".heic", ".jpeg", ".png"];
var MAX_BODY_SIZE = 2 * GB;
var VALIDATED_RESULT = "validated_result";
var validateFiles = createMiddleware(async (c, next) => {
  const formData = await c.req.formData();
  const files = formData.getAll("uploadFiles");
  if (!files.length)
    return c.json({ error: "\u274C Bad request. No files uploaded." }, 400);
  let validFiles = 0;
  const writeToDir = path4.join(Bun.env.UPLOAD_PATH, nameFolderByTime());
  await createFolder(writeToDir);
  for (const file of files) {
    const extValid = validateFileExt(file);
    const sizeValid = file.size <= ALLOWED_FILE_SIZE;
    if (!extValid || !sizeValid)
      continue;
    const filePath = path4.join(writeToDir, file.name);
    await Bun.write(filePath, file);
    validFiles++;
  }
  if (!validFiles) {
    return c.json({ error: "\u274C Bad request. No valid files uploaded." }, 400);
  }
  const validResult = {
    totalFile: files.length,
    validatedFiles: validFiles,
    safeFileDir: writeToDir
  };
  c.set(VALIDATED_RESULT, validResult);
  return await next();
});
var fileExt = (file) => {
  return path4.extname(file.name).toLowerCase();
};
var validateFileExt = (file) => {
  return ALLOWED_MIME_TYPES.includes(fileExt(file));
};

// server/db/module/imported.ts
var DURATION_OF_SHORT = 5;
var insertImportedToMedia = async (newMedia, RegisteredUser) => {
  try {
    const sourceFilePath = reducePath(newMedia.SourceFile);
    const mediaType = fileType(newMedia.MIMEType, newMedia.Duration);
    const cameraId = await insertCameraToDb(newMedia.Make, newMedia.Model);
    await sql.begin(async (tx) => {
      const smallestDate = getSmallestDate(newMedia);
      const durationDisplay = convertDuration(newMedia.Duration);
      const mediaToInsert = {
        file_name: newMedia.FileName,
        file_type: mediaType,
        file_ext: newMedia.FileType,
        software: newMedia.Software,
        file_size: newMedia.FileSize,
        camera_type: cameraId,
        create_date: smallestDate,
        source_file: sourceFilePath,
        mime_type: newMedia.MIMEType,
        thumb_path: createThumbPath(smallestDate),
        orientation: newMedia.Orientation,
        image_width: newMedia.ImageWidth,
        image_height: newMedia.ImageHeight,
        megapixels: newMedia.Megapixels,
        lens_model: newMedia.LensModel,
        duration: newMedia.Duration,
        video_duration: durationDisplay,
        title: newMedia.Title,
        frame_rate: rountInt(newMedia.VideoFrameRate),
        gps_latitude: newMedia.GPSLatitude,
        gps_longitude: newMedia.GPSLongitude
      };
      const [mediaId] = await tx`
        INSERT INTO multi_schema."Media" ${sql(mediaToInsert)} 
        ON CONFLICT (source_file) DO NOTHING 
        RETURNING media_id`;
      if (!mediaId)
        return console.log("File had imported in the system");
      const lastMediaId = mediaId.media_id;
      await tx`
        INSERT INTO multi_schema."UploadBy" ("RegisteredUser", media) VALUES (${RegisteredUser}, ${lastMediaId})`;
      return lastMediaId;
    });
  } catch (error) {
    console.log("insertImportedToMedia", error);
    await insertErrorLog("db/module/imported.ts", "insertImportedToMedia", error);
  }
};
var insertCameraToDb = async (make, model) => {
  if (!model)
    return null;
  const camId = await sql.begin(async (tx) => {
    const [getCamera] = await tx`
          SELECT camera_id FROM multi_schema."CameraType" 
          WHERE model = ${model}`;
    if (getCamera)
      return getCamera.camera_id;
    const insertCamera = { make: make ?? null, model };
    const [idInserted] = await tx`
          INSERT INTO "multi_schema"."CameraType" ${sql(insertCamera)} 
          ON CONFLICT DO NOTHING
          RETURNING camera_id`;
    if (idInserted)
      return idInserted.camera_id;
  });
  if (camId)
    return camId;
  const [getCameraId] = await sql`
          SELECT camera_id FROM multi_schema."CameraType"
          WHERE model = ${model}`;
  if (getCameraId)
    return getCameraId.camera_id;
  console.log("Race condition failed to add camera type", model, make);
  return null;
};
var getSmallestDate = (newMedia) => {
  const validDates = [
    newMedia.CreateDate,
    newMedia.DateCreated,
    newMedia.CreationDate,
    newMedia.DateTimeOriginal,
    newMedia.FileModifyDate,
    newMedia.MediaCreateDate,
    newMedia.MediaModifyDate
  ].map((date) => new Date(date).getTime()).filter((date) => date > 0);
  const smallestDate = validDates.length ? new Date(Math.min(...validDates)) : new Date;
  return smallestDate;
};
var fileType = (MIMEType, duration) => {
  const prefix = MIMEType.split("/")[0];
  if (prefix === "image")
    return "Photo";
  if (prefix === "video")
    return duration && duration > DURATION_OF_SHORT ? "Video" : "Live";
  return "Unknown";
};
var createThumbPath = (inputDate) => {
  const randomId = createRandomId(9);
  return `/Thumbnails/${inputDate.getFullYear()}/${inputDate.toLocaleString("default", { month: "long" })}/${randomId}.webp`;
};
var convertDuration = (inputSecond) => {
  if (!inputSecond)
    return null;
  const hours = Math.floor(inputSecond / 3600);
  const minutes = Math.floor(inputSecond % 3600 / 60);
  const seconds = Math.round(inputSecond % 60);
  const formattedHours = hours === 0 ? "" : `${hours}:`;
  const formattedMinutes = minutes === 0 ? "0" : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
};
var rountInt = (input) => {
  if (!input)
    return 0;
  return Math.round(parseInt(input));
};

// server/service/generators/metadata.ts
var recursiveDir = async (dePath, tracking, RegisteredUser, stream2) => {
  try {
    const files = await fs3.readdir(dePath);
    for (const file of files) {
      const sourcePath = path5.join(dePath, file);
      if (startWithDot(sourcePath))
        continue;
      const stat3 = await fs3.stat(sourcePath);
      if (stat3.isDirectory()) {
        await recursiveDir(sourcePath, tracking, RegisteredUser, stream2);
      } else {
        await updateTrackingAndFileValidate(sourcePath, tracking);
        if (tracking.sourcePaths.length >= BATCH_SIZE_INSERT) {
          await insertMetadataToDB(tracking, RegisteredUser);
          await stream2.writeln(`\uD808\uDC4B Extracted Metadata of ${tracking.count} files...`);
        }
      }
    }
  } catch (error) {
    console.log("service/generator/metadata.ts", "recursiveDir", error);
    await insertErrorLog("service/generator/metadata.ts", "recursiveDir", error);
  }
};
var insertMetadataToDB = async (tracking, RegisteredUser) => {
  try {
    const metadatas = await extractMetadata(tracking.sourcePaths);
    const tasks = metadatas.map((media) => () => insertImportedToMedia(media, RegisteredUser));
    await workerQueue(tasks);
    tracking.sourcePaths.length = 0;
  } catch (error) {
    console.log("service/generator/metadata.ts", "recursiveDir", error);
    await insertErrorLog("service/generator/metadata.ts", "recursiveDir", error);
  }
};
var extractMetadata = async (sourcePaths) => {
  const { stdout, stderr, exitCode } = await $5`exiftool -json -d "%Y-%m-%dT%H:%M:%S" \
      -SourceFile -FileName -FileType -MIMEType \
      -Software -Title -FileSize# -Make -Model -LensModel -Orientation -CreateDate -DateCreated \
      -CreationDate -DateTimeOriginal -FileModifyDate -MediaCreateDate -MediaModifyDate -Duration# \
      -GPSLatitude# -GPSLongitude# -ImageWidth -ImageHeight -Megapixels -VideoFrameRate ${sourcePaths}`.quiet();
  if (exitCode !== 0) {
    console.log("service/generator/metadata.ts", "extractMetadata", stderr);
    await insertErrorLog("service/generator/metadata.ts", "extractMetadata", stderr);
  }
  return JSON.parse(stdout.toString().trim());
};
var updateTrackingAndFileValidate = async (sourcePath, tracking) => {
  const process2 = await validateFileExt2(sourcePath);
  if (!process2) {
    await moveUnsupportFile(sourcePath);
    return;
  }
  const sourceFile = await renameIfInvalid(sourcePath);
  ++tracking.count;
  tracking.sourcePaths.push(sourceFile);
};
var validateFileExt2 = async (file) => {
  const fileExt2 = path5.extname(file).toLowerCase();
  return ALLOWED_MIME_TYPES.includes(fileExt2);
};
var copyFileToExternalDir = async (copyToPath, dest) => {
  const files = await fs3.readdir(copyToPath);
  for (const file of files) {
    const sourcePath = path5.join(copyToPath, file);
    if (startWithDot(sourcePath))
      continue;
    const stat3 = await fs3.stat(sourcePath);
    if (stat3.isDirectory()) {
      await copyFileToExternalDir(sourcePath, dest);
    } else {
      const isValidExt = await validateFileExt2(sourcePath);
      if (isValidExt) {
        const copyStatus = await copyFile(sourcePath, dest);
        if (!copyStatus)
          console.log("\u274C Failed to copy files to system.");
      }
    }
  }
};

// server/service/generators/location.ts
var findLocation = async (medias) => {
  const pythonFilePath = "models/ai_model/get_location.py";
  const totalFile = medias.length;
  if (!totalFile)
    return;
  let count = 0;
  const childProc = Bun.spawn(["python3", pythonFilePath], {
    stdout: "pipe",
    stdin: "pipe"
  });
  const responseLocs = [];
  try {
    console.log(childProc.pid);
    const reader = childProc.stdout.getReader();
    for (const media of medias) {
      const resData = await sendTask({ id: media.media_id, latitude: media.gps_latitude, longitude: media.gps_longitude }, childProc, reader);
      console.log(`Getting Location: ${++count}/${totalFile}`);
      if (responseLocs.length >= BATCH_SIZE_UPDATE_CAPTION) {
        await workerUpdateLocation(responseLocs);
        responseLocs.length = 0;
      }
      responseLocs.push(resData);
    }
    if (responseLocs.length >= 0)
      await workerUpdateLocation(responseLocs);
  } catch (error) {
    await insertErrorLog("service/generate/location.ts", "findLocation", error);
    console.log(error);
  } finally {
    childProc.kill();
  }
};
var insertLocation = async (location) => {
  let locId = await sql.begin(async (tx) => {
    const [getExistLoc] = await tx`
          SELECT location_id FROM multi_schema."Location" 
          WHERE city = ${location.name} AND state = ${location.admin1} AND country = ${location.cc}`;
    if (getExistLoc)
      return getExistLoc.location_id;
    const insertLocation2 = { city: location.name, state: location.admin1, county: location.admin2, country: location.cc };
    const [idInserted] = await tx`
          INSERT INTO "multi_schema"."Location" ${sql(insertLocation2)} 
          ON CONFLICT (city, state) DO NOTHING RETURNING location_id`;
    if (idInserted)
      return idInserted.location_id;
  });
  if (!locId) {
    const [getExistLoc] = await sql`
          SELECT location_id FROM multi_schema."Location" 
          WHERE city = ${location.name} AND state = ${location.admin1} AND country = ${location.cc}`;
    if (getExistLoc)
      locId = getExistLoc.location_id;
  }
  const insertData = { location: locId, media: location.media_id };
  await sql`INSERT INTO "multi_schema"."LocationMedia" ${sql(insertData)} ON CONFLICT DO NOTHING`;
};
var workerUpdateLocation = async (responseLocs) => {
  const tasks = responseLocs.map((resLoc) => () => insertLocation(resLoc));
  await workerQueue(tasks);
};

// server/service/index.ts
var BATCH_SIZE_INSERT = 500;
var processMetadataExif = async (sourcePath, RegisteredUser, stream2) => {
  try {
    const tracking = { count: 0, sourcePaths: [] };
    await recursiveDir(sourcePath, tracking, RegisteredUser, stream2);
    if (tracking.sourcePaths.length > 0)
      await insertMetadataToDB(tracking, RegisteredUser);
    await stream2.writeln(`\uD808\uDC4B Extracted Metadata of ${tracking.count} files...`);
    console.log("------- PROCESS EXTRACTED METADATA COMPLETED -------");
    return tracking.count;
  } catch (error) {
    await insertErrorLog("service/index.ts", "processMetadataExif", error);
    console.log(`processMetadataExif: ${error}`);
    return 0;
  }
};
var thumbAndHashGenerate = async (media, overwrite = false) => {
  try {
    const input = path6.join(Bun.env.MAIN_PATH, media.source_file);
    const output = path6.join(Bun.env.MAIN_PATH, media.thumb_path);
    if (!await isExist(output) || overwrite) {
      await createFolder(output);
      const existCode = await createThumbnail(input, output, media);
      if (!existCode)
        return;
    }
    const hash = await createHash(output);
    if (!hash)
      return;
    await updateHashThumb(media.media_id, hash);
  } catch (error) {
    console.error(`thumbAndHashGenerate - Source: ${media.source_file}: ${error}`);
    await insertErrorLog("service/index.ts", "thumbAndHashGenerate", `error - ${media.source_file}`);
  }
};
var processThumbAndHash = async (loadedmedias, stream2) => {
  if (!loadedmedias.length)
    return false;
  let completedCount = 0;
  try {
    const tasks = loadedmedias.map((media) => async () => {
      await thumbAndHashGenerate(media);
      await stream2.writeln(`Scanning: ${++completedCount}/${loadedmedias.length}`);
    });
    await workerQueue(tasks);
    console.log("======= PROCESS THUMBNAIL AND HASH COMPLETED =======");
    return true;
  } catch (error) {
    console.error("preprocessMedia worker", error);
    await insertErrorLog("service/index.ts", "preprocessMedia", error);
    return false;
  }
};
var preprocessMedia = async (stream2) => {
  const loadedmedias = await importedMediasThumbHash();
  return await processThumbAndHash(loadedmedias, stream2);
};
var rescanningThumbs = async (stream2) => {
  const loadedmedias = await rescanThumbnail();
  return await processThumbAndHash(loadedmedias, stream2);
};
var processLocations = async () => {
  try {
    const medias = await importedMediasLocation();
    if (!medias.length)
      return;
    await findLocation(medias);
    console.log("++++++++ IMPORT LOCATION HAS BEEN COMPLETED ++++++++");
    return true;
  } catch (error) {
    console.error("processLocations", error);
    await insertErrorLog("service/index.ts", "processLocations", error);
    return false;
  }
};
var processCaptioning = async () => {
  try {
    markTaskStart("captioning");
    const medias = await importedMediasCaption();
    if (!medias.length)
      return;
    await createCaption(medias);
    console.log("******* PROCESS CAPTION HAS BEEN COMPLETED *******");
  } catch (error) {
    console.error("processCaptioning", error);
    await insertErrorLog("service/index.ts", "processCaptioning", error);
  } finally {
    markTaskEnd("captioning");
  }
};

// server/routes/importHelper/_imports.ts
var streamingImportMedia = async (dirPath, userId, stream2) => {
  stream2.onAbort(() => console.warn("Client aborted the stream!"));
  await stream2.writeln("\uD83D\uDCE5 Sanitizing files ...");
  if (!await isExist(dirPath)) {
    await stream2.writeln("\u274C Directory not found. Please ensure the directory exists");
    return false;
  }
  await stream2.writeln("\u23F3 Importing/Uploading files to system...");
  const totalFile = await processMetadataExif(dirPath, userId, stream2);
  if (!totalFile) {
    await stream2.writeln("\u274C Failed to importing medias to database.");
    return false;
  }
  if (!await preprocessMedia(stream2)) {
    await stream2.writeln("\u274C Failed to compressing medias and create hashcode");
    return false;
  }
  await processLocations();
  return true;
};
var importExternalPath = async (sourcePath, stream2) => {
  const writeToDir = path7.join(Bun.env.UPLOAD_PATH, nameFolderByTime());
  await createFolder(writeToDir);
  try {
    if (await isExist(writeToDir) && await isExist(sourcePath)) {
      await copyFileToExternalDir(sourcePath, writeToDir);
      return writeToDir;
    }
  } catch (error) {
    console.log("routes/importHelper/_imports.ts", "importExternalPath", error);
    await insertErrorLog("routes/importHelper/_imports.ts", "importExternalPath", error);
    await stream2.writeln(`\u274C An Error occors while transfering data to system!`);
    return "";
  }
};

// server/service/generators/reduceFps.ts
import path8 from "path";
var reduceFPS = async (sourcePath, stream2) => {
  const newSourcePath = sourcePath.split(".")[0] + ".mp4";
  const basename2 = path8.basename(sourcePath);
  const process2 = Bun.spawn(["ffmpeg", "-i", sourcePath, "-r", "30", "-c:v", "libx264", "-preset", "medium", "-crf", "28", "-c:a", "copy", "-map_metadata", "0", newSourcePath], {
    stderr: "pipe",
    stdout: "pipe"
  });
  try {
    const reader = process2.stderr.getReader();
    const decoder = new TextDecoder;
    while (true) {
      const { value, done } = await reader.read();
      if (done)
        break;
      const eachLine = decoder.decode(value, { stream: true }).trim();
      if (!eachLine.startsWith("frame="))
        continue;
      const timeIndex = eachLine.indexOf("time=");
      const timeStr = eachLine.substring(timeIndex + 5, timeIndex + 13);
      await stream2.writeln(`Process @ ${timeStr} - ${basename2}`);
    }
  } catch (error) {
    console.warn("Unexpected error reducing fps:", error);
    await insertErrorLog("service/generator/fps", "reduceFPS", error);
  } finally {
    process2.kill();
  }
  return await process2.exited === 0 ? newSourcePath : "";
};
var mediaUpdate = (absPath) => {
  const file = Bun.file(absPath);
  const file_size = file.size;
  const file_name = path8.basename(absPath);
  const file_ext = "MP4";
  const source_file = reducePath(absPath);
  const mime_type = "video/mp4";
  return { frame_rate: 30, source_file, file_size, mime_type, file_name, file_ext };
};

// server/routes/admin.ts
var admin = new Hono2;
var userAuthSchema2 = exports_external.object({
  userEmail: exports_external.string().email()
});
var sourcePathSchema = exports_external.string().max(256, "Path too long").regex(/^\/(Volumes|home|Users)(\/[a-zA-Z0-9_-]+)*\/?$/, "Path must be under /Volumes or /home and contain valid characters").refine((p) => !p.includes(".."), {
  message: "Path must not contain parent directory traversal"
}).optional();
var internalSchema = exports_external.object({
  aimode: exports_external.coerce.number().min(0).max(1).default(0).optional()
});
var externalSchema = exports_external.object({
  aimode: exports_external.coerce.number().min(0).max(1).default(0).optional(),
  sourcePath: sourcePathSchema
});
admin.get("/dashboard", async (c) => {
  try {
    const sysStatus = sql`
      SELECT process_medias, last_restore_time FROM multi_schema."ServerSystem" LIMIT 1`;
    const allUsers = sql`
      SELECT user_name, user_email, status, reg_user_id FROM multi_schema."RegisteredUser" reg WHERE role_type = 'user'`;
    const countMissed = sql`
      SELECT 
        COUNT(media_id) FILTER (WHERE thumb_created = FALSE) AS thumbnail,
        COUNT(media_id) FILTER (WHERE hash_code IS NULL) AS hashcode,
        COUNT(media_id) FILTER (WHERE caption IS NULL OR caption = '') AS caption
      FROM multi_schema."Media"`;
    const [[sys], users, [count]] = await Promise.all([sysStatus, allUsers, countMissed]);
    let lastbackupTime = "N/A";
    const stat4 = await isExist(Bun.env.DB_BACKUP) ? await fs4.stat(Bun.env.DB_BACKUP) : "";
    if (stat4 && stat4.mtime)
      lastbackupTime = stat4.mtime.toLocaleString();
    return c.json({ users, sysStatus: sys.process_medias, lastBackup: lastbackupTime, lastRestore: sys.last_restore_time, missedData: count }, 200);
  } catch (error) {
    console.log("admin.ts", "dashboard", error);
    await insertErrorLog("admin.ts", "dashboard", error);
    return c.json({ error: "Failed to fetch dashboard admin" }, 500);
  }
});
admin.post("/internal", taskStatusMiddleware("importing"), isCaptioningRunning(), validateSchema("json", internalSchema), async (c) => {
  return streamText(c, async (stream2) => {
    try {
      const userId = getUserBySession(c).userId;
      const { aimode } = c.req.valid("json");
      markTaskStart("importing", userId);
      const importing = await streamingImportMedia(Bun.env.PHOTO_PATH, userId, stream2);
      if (!importing)
        return;
      await updateProcessMediaStatus();
      await stream2.writeln(`\u2705 Finished Importing Multimedia! ${aimode ? "Images Analysis is running in background..." : ""}`);
      await stream2.close();
      if (!aimode)
        return;
      return await processCaptioning();
    } catch (error) {
      console.log(error);
      await stream2.writeln(`\u274C 500 Internal Server Error`);
      await insertErrorLog("admin.ts", "admin.post/import", error);
    } finally {
      if (!stream2.closed)
        await stream2.close();
      markTaskEnd("importing");
    }
  });
});
admin.post("/external", taskStatusMiddleware("importing"), isCaptioningRunning(), validateSchema("json", externalSchema), async (c) => {
  return streamText(c, async (stream2) => {
    try {
      const userId = getUserBySession(c).userId;
      const { sourcePath, aimode } = c.req.valid("json");
      const processPath = await importExternalPath(sourcePath, stream2);
      if (!processPath)
        return;
      markTaskStart("importing", userId);
      const importing = await streamingImportMedia(processPath, userId, stream2);
      if (!importing)
        return;
      await updateProcessMediaStatus();
      await stream2.writeln(`\u2705 Finished Importing Multimedia! ${aimode ? "Images Analysis is running in background..." : ""}`);
      await stream2.close();
      if (!aimode)
        return;
      return await processCaptioning();
    } catch (error) {
      console.log("admin.ts", "admin.post/import", error);
      await stream2.writeln(`\u274C 500 Internal Server Error`);
      await insertErrorLog("admin.ts", "admin.post/import", error);
    } finally {
      if (!stream2.closed)
        await stream2.close();
      markTaskEnd("importing");
    }
  });
});
admin.get("/reindex", taskStatusMiddleware("importing"), isCaptioningRunning(), async (c) => {
  return streamText(c, async (stream2) => {
    try {
      const userId = getUserBySession(c).userId;
      markTaskStart("importing", userId);
      await preprocessMedia(stream2);
      await stream2.writeln(`\u2705 Finished Importing Multimedia!`);
      await stream2.close();
      return await processCaptioning();
    } catch (error) {
      console.log("admin.ts", "admin.post/reindex", error);
      await stream2.writeln(`\u274C 500 Internal Server Error`);
      await insertErrorLog("admin.ts", "admin.post/reindex", error);
    } finally {
      if (!stream2.closed)
        await stream2.close();
      markTaskEnd("importing");
    }
  });
});
admin.get("/backup", async (c) => {
  return streamText(c, async (stream2) => {
    try {
      await cleanUpCameraType();
      await removeEmptyDirs(Bun.env.UPLOAD_PATH);
      const backupStatus = await backupToDB();
      const verifyBackup = await isExist(Bun.env.DB_BACKUP);
      if (!backupStatus || !verifyBackup) {
        await stream2.writeln(`\u274C Failed to backup data`);
        return;
      }
      if (!await backupFiles(stream2))
        return;
      await stream2.writeln(`\u2705 Backup processing had been completed successfully`);
      await stream2.close();
      return;
    } catch (error) {
      console.log("admin.ts", "admin.post/reindex", error);
      await stream2.writeln(`\u274C 500 Internal Server Error`);
      await insertErrorLog("admin.ts", "admin.post/reindex", error);
    } finally {
      if (!stream2.closed)
        await stream2.close();
    }
  });
});
admin.get("/restore", async (c) => {
  try {
    if (!await isExist(Bun.env.DB_BACKUP))
      return c.json({ error: "Backup before restore file" }, 200);
    const restoreStatus = await restoreToDB();
    if (!restoreStatus)
      return c.json({ error: "Failed to restore data" }, 500);
    await sql`
      UPDATE multi_schema."ServerSystem" SET last_restore_time = NOW() 
      WHERE system_id = (
        SELECT system_id FROM multi_schema."ServerSystem" LIMIT 1)`;
    return c.json({ message: "Restore data successfully!" }, 200);
  } catch (err) {
    await insertErrorLog("admin.ts", "get/restore", err);
    console.error(err);
    return c.json({ error: "Failed to restore data" }, 500);
  }
});
admin.put("/changeStatus", validateSchema("json", userAuthSchema2), async (c) => {
  try {
    const { userEmail } = c.req.valid("json");
    const updatedUser = await updateAccountStatus(userEmail);
    if (!updatedUser)
      return c.json({ error: "Failed to update user status" }, 500);
    deleteOldUserSession(userEmail);
    return c.json("Success!", 200);
  } catch (err) {
    await insertErrorLog("admin.ts", "put/changeStatus", err);
    console.error(err);
    return c.json({ error: "Failed to fetch Account" }, 500);
  }
});
admin.get("/all-logs", async (c) => {
  try {
    const sysLogs = sql`SELECT * FROM multi_schema."ErrorLog" ORDER BY mark_at DESC`;
    const userLogs = sql`SELECT * FROM multi_schema."UserLog" ORDER BY logged_at DESC`;
    const result = await Promise.all([sysLogs, userLogs]);
    if (!result)
      return c.json({ error: "Failed to get logs System or User" }, 500);
    return c.json({ system: result[0], user: result[1] }, 200);
  } catch (err) {
    await insertErrorLog("admin.ts", "get/all-logs", err);
    console.error(err);
    return c.json({ error: "Failed to get logs System and User" }, 500);
  }
});
var logsSchema = exports_external.object({
  ids: exports_external.array(exports_external.coerce.number().min(1)),
  logType: exports_external.enum(["system", "user"])
});
admin.delete("/all-logs", validateSchema("json", logsSchema), async (c) => {
  try {
    const { ids, logType } = c.req.valid("json");
    const logIdsDeleted = logType === "system" ? await sql`DELETE FROM multi_schema."ErrorLog"
        WHERE error_log_id IN ${sql(ids)} RETURNING error_log_id` : await sql`DELETE FROM multi_schema."UserLog"
        WHERE user_log_id IN ${sql(ids)} RETURNING user_log_id`;
    if (ids.length === logIdsDeleted.length)
      return c.json(204);
    return c.json(500);
  } catch (err) {
    await insertErrorLog("admin.ts", "delete/all-logs", err);
    console.error(err);
    return c.json({ error: "Failed to delete logs System/Account" }, 500);
  }
});
admin.get("/storageOptimize", taskStatusMiddleware("importing"), async (c) => {
  return streamText(c, async (stream2) => {
    try {
      const userId = getUserBySession(c).userId;
      markTaskStart("importing", userId);
      const largeVideos = await sql`SELECT media_id, source_file, duration FROM multi_schema."Media" WHERE frame_rate > 60`;
      if (!largeVideos.length) {
        await stream2.writeln(`\u2705 Finished Importing Multimedia!`);
        return;
      }
      for (const each of largeVideos) {
        const originalSource = path9.join(Bun.env.MAIN_PATH, each.source_file);
        const convertedPath = await reduceFPS(originalSource, stream2);
        if (!convertedPath) {
          await stream2.writeln(`\u274C ${each.media_id}`);
          continue;
        }
        const mediaObj = mediaUpdate(convertedPath);
        await sql`UPDATE multi_schema."Media" SET ${sql(mediaObj)} WHERE media_id = ${each.media_id}`;
        await deleteFile(originalSource);
      }
      await stream2.writeln(`\u2705 Finished Optimizing Multimedia's Storage!`);
      return;
    } catch (error) {
      console.log("admin.ts", "admin.get/storageOptimize", error);
      await stream2.writeln(`\u274C 500 Internal Server Error`);
      await insertErrorLog("admin.ts", "admin.get/storageOptimize", error);
    } finally {
      if (!stream2.closed)
        await stream2.close();
      markTaskEnd("importing");
    }
  });
});
admin.get("/rescan-thumb", async (c) => {
  return streamText(c, async (stream2) => {
    try {
      const userId = getUserBySession(c).userId;
      markTaskStart("importing", userId);
      await rescanningThumbs(stream2);
      await stream2.writeln(`\u2705 Finished Recreating Thumbnails!`);
      await stream2.close();
      return;
    } catch (error) {
      console.log("admin.ts", "admin.get/rescan-thumb", error);
      await stream2.writeln(`\u274C 500 Internal Server Error`);
      await insertErrorLog("admin.ts", "admin.get/rescan-thumb", error);
    } finally {
      if (!stream2.closed)
        await stream2.close();
      markTaskEnd("importing");
    }
  });
});
var admin_default = admin;
var cleanUpCameraType = async () => {
  return await sql`
    DELETE FROM multi_schema."CameraType" AS cm 
    WHERE cm.camera_id = (
        SELECT cm.camera_id FROM multi_schema."CameraType" AS cm 
        LEFT JOIN multi_schema."Media" AS md ON md.camera_type = cm.camera_id
        WHERE media_id IS NULL
    )`;
};

// node_modules/hono/dist/middleware/body-limit/index.js
var ERROR_MESSAGE = "Payload Too Large";
var BodyLimitError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "BodyLimitError";
  }
};
var bodyLimit = (options) => {
  const onError = options.onError || (() => {
    const res = new Response(ERROR_MESSAGE, {
      status: 413
    });
    throw new HTTPException(413, { res });
  });
  const maxSize = options.maxSize;
  return async function bodyLimit2(c, next) {
    if (!c.req.raw.body) {
      return next();
    }
    if (c.req.raw.headers.has("content-length")) {
      const contentLength = parseInt(c.req.raw.headers.get("content-length") || "0", 10);
      return contentLength > maxSize ? onError(c) : next();
    }
    let size = 0;
    const rawReader = c.req.raw.body.getReader();
    const reader = new ReadableStream({
      async start(controller) {
        try {
          for (;; ) {
            const { done, value } = await rawReader.read();
            if (done) {
              break;
            }
            size += value.length;
            if (size > maxSize) {
              controller.error(new BodyLimitError(ERROR_MESSAGE));
              break;
            }
            controller.enqueue(value);
          }
        } finally {
          controller.close();
        }
      }
    });
    const requestInit = { body: reader, duplex: "half" };
    c.req.raw = new Request(c.req.raw, requestInit);
    await next();
    if (c.error instanceof BodyLimitError) {
      c.res = await onError(c);
    }
  };
};

// server/routes/upload.ts
var upload = new Hono2;
var isAiModeSchema = exports_external.object({
  aimode: exports_external.coerce.number().min(0).max(1).default(0)
});
upload.post("/", taskStatusMiddleware("importing"), isCaptioningRunning(), validateSchema("query", isAiModeSchema), bodyLimit({
  maxSize: MAX_BODY_SIZE,
  onError: (c) => {
    return c.json({ error: "\u274C File(s) too large. Try a smaller file." }, 413);
  }
}), validateFiles, async (c) => {
  const user2 = getUserBySession(c);
  if (!user2 || !user2.userId)
    return c.json({ error: "\u274C User not found. Please login" }, 413);
  return streamText(c, async (stream2) => {
    try {
      const { totalFile, validatedFiles, safeFileDir } = c.get(VALIDATED_RESULT);
      const { aimode } = c.req.valid("query");
      markTaskStart("importing", user2.userId);
      const importing = await streamingImportMedia(safeFileDir, user2.userId, stream2);
      if (!importing)
        return;
      await stream2.writeln(`\u2705 Finished Uploading: ${validatedFiles}/${totalFile} files! ${aimode ? "Images Analysis is running in background..." : ""}`);
      await stream2.close();
      if (!aimode)
        return;
      return await processCaptioning();
    } catch (error) {
      await stream2.writeln(`\u274C 500 Internal Server Error`);
      console.log("upload.post:", error);
      await insertErrorLog("routes/upload.ts", "upload.post", error);
    } finally {
      if (!stream2.closed)
        await stream2.close();
      markTaskEnd("importing");
    }
  });
});
var upload_default = upload;

// server/db/module/search.ts
var refreshView = async () => {
  return await sql`
    REFRESH MATERIALIZED VIEW multi_schema.suggest_words`;
};

// server/routes/search.ts
var search = new Hono2;
var querySchema = exports_external.object({
  keywords: exports_external.string().trim().max(50).regex(/^[a-zA-Z0-9 -]*$/, "Only letters, numbers, spaces, and hyphens are allowed").optional()
});
search.get("/refreshView", async (c) => {
  await refreshView();
  return c.json({ status: "success" }, 200);
});
search.get("/", validateSchema("query", querySchema), async (c) => {
  const { keywords } = c.req.valid("query");
  if (!keywords) {
    const searchResults2 = sql`
      SELECT media_id, caption, favorite, thumb_path, COUNT(*) OVER() AS total_count
      FROM multi_schema."Media"
      WHERE hidden = FALSE AND deleted = FALSE
      LIMIT 9`;
    const result2 = { suggestCount: [], data: await searchResults2 };
    return c.json(result2, 200);
  }
  const lastWord = keywords.split(" ").at(-1);
  const suggestCount = sql`
    SELECT sw.word, sw.ndoc FROM multi_schema.suggest_words AS sw
      WHERE similarity(sw.word, ${lastWord}::text) > 0.3
      ORDER BY similarity(sw.word, ${lastWord}::text) DESC
      LIMIT 5`;
  const searchResults = sql`
    SELECT media_id, caption, favorite, thumb_path, COUNT(*) OVER() AS total_count
      FROM multi_schema."Media"
      WHERE caption_eng_tsv @@ (websearch_to_tsquery ('english', ${keywords}::text) 
        || websearch_to_tsquery ('simple', ${keywords}::text))
        AND hidden = FALSE AND deleted = FALSE
      LIMIT 9`;
  const [wordCount, searchResult] = await Promise.all([suggestCount, searchResults]);
  const result = {
    suggestCount: wordCount,
    data: searchResult
  };
  return c.json(result, 200);
});
var search_default = search;

// server/routes/media.ts
var media = new Hono2;
var infoSchema = exports_external.object({
  id: exports_external.coerce.number().min(1)
});
media.get("/", validateSchema("query", infoSchema), async (c) => {
  try {
    const { id } = c.req.valid("query");
    const [media2] = await sql`
    SELECT md.file_type, md.file_name, md.create_date, md.file_size, md.upload_at, md.file_ext, 
          md.software, md.mime_type, md.caption, md.image_width, md.image_height, md.megapixels, 
          md.lens_model, md.frame_rate, md.title, md.video_duration, md.media_id,
          ru.user_name, 
          cm.make, cm.model,
          lc.city, lc.state FROM "multi_schema"."Media" as md 
    LEFT JOIN multi_schema."UploadBy" as upl ON upl.media = md.media_id
    LEFT JOIN multi_schema."RegisteredUser" as ru ON ru.reg_user_id = upl."RegisteredUser"
    LEFT JOIN multi_schema."CameraType" as cm ON cm.camera_id = md.camera_type
    LEFT JOIN multi_schema."LocationMedia" as lm ON lm.media = md.media_id
    LEFT JOIN multi_schema."Location" as lc ON lc.location_id = lm.location
    WHERE md.media_id = ${id}`;
    return c.json(media2);
  } catch (error) {
    await insertErrorLog("routes/media.ts", "get/", error);
    console.log("routes/media.ts", "get/", error);
    return c.json({ error: "Server error" }, 500);
  }
});
var specialChars = /[^a-zA-Z0-9.,!?;:"'$()%\- ]/;
var captionSchema = exports_external.object({
  mediaId: exports_external.coerce.number().min(1),
  caption: exports_external.coerce.string().trim().refine((input) => !specialChars.test(input), {
    message: "Caption must not contain invalid characters <>{}[]"
  })
});
media.put("/caption", validateSchema("json", captionSchema), async (c) => {
  try {
    const { mediaId, caption } = c.req.valid("json");
    await updateMediaCaption({ media_id: mediaId, caption });
    return c.json("Success", 202);
  } catch (error) {
    await insertErrorLog("routes/media.ts", "put/caption", error);
    return c.json({ error: "Server error" }, 500);
  }
});
var frameSchema = exports_external.object({
  mediaId: exports_external.coerce.number().min(1),
  framePos: exports_external.coerce.number().min(0).max(5)
});
media.put("/live-frame", validateSchema("json", frameSchema), async (c) => {
  try {
    const { mediaId, framePos } = c.req.valid("json");
    await updateSelectFrameLivePhoto(mediaId, framePos);
    return c.json("Success", 202);
  } catch (error) {
    await insertErrorLog("routes/media.ts", "put/caption", error);
    return c.json({ error: "Server error" }, 500);
  }
});
var media_default = media;

// server/routes/medias.ts
import path10 from "path";
var medias = new Hono2;
var updateSchema = exports_external.object({
  mediaIds: exports_external.array(exports_external.coerce.number()),
  updateKey: exports_external.enum(["favorite", "deleted", "hidden"]),
  updateValue: exports_external.coerce.number().min(0).max(1)
});
var deleteSchema = exports_external.object({
  mediaIds: exports_external.array(exports_external.coerce.number())
});
medias.get("/", async (c) => {
  try {
    return c.json(await groupMonthsByYear(), 200);
  } catch (error) {
    console.error("medias.get: await groupMonthsByYear()", error);
    await insertErrorLog("routes/medias.ts", "get/", error);
    return c.json({ error: "Failed to fetch media of each month" }, 500);
  }
});
medias.get("/devices", async (c) => {
  try {
    return c.json(await fetchCameraType(), 200);
  } catch (error) {
    console.error("Error fetching devices:", error);
    await insertErrorLog("routes/medias.ts", "devices", error);
    return c.json({ error: "Failed to fetch media" }, 500);
  }
});
medias.put("/", validateSchema("json", updateSchema), async (c) => {
  try {
    const { mediaIds, updateKey, updateValue } = c.req.valid("json");
    const result = await updateMedias(mediaIds, updateKey, updateValue ? true : false);
    if (result)
      return c.json("Success", 202);
    return c.json({ error: "Failed to update media" }, 403);
  } catch (error) {
    await insertErrorLog("routes/medias.ts", "put/", error);
    return c.json({ error: "Server error" }, 500);
  }
});
medias.delete("/", validateSchema("json", deleteSchema), async (c) => {
  const { mediaIds } = c.req.valid("json");
  try {
    const result = await deleteMedias(mediaIds);
    if (result)
      return c.json("Success", 202);
  } catch (error) {
    await insertErrorLog("routes/medias.ts", "delete/", error);
    return c.json({ error: "Failed to delete medias" }, 500);
  }
});
medias.get("/recently", async (c) => {
  try {
    const result = await deleteAllInRecently();
    if (result)
      return c.json("Success", 202);
  } catch (error) {
    await insertErrorLog("routes/medias.ts", "delete/recently", error);
    return c.json({ error: "Failed to delete all medias in Recently Delete" }, 500);
  }
});
medias.get("/merge-all", async (c) => {
  try {
    const dupIdsToDel = (await mergeMedias()).flat(1);
    const result = await deleteMedias(dupIdsToDel);
    if (result)
      return c.json("Success", 202);
  } catch (error) {
    await insertErrorLog("routes/medias.ts", "get/merge-all", error);
    return c.json({ error: "Failed to merge all medias" }, 500);
  }
});
medias.post("/download", validateSchema("json", deleteSchema), async (c) => {
  try {
    const { mediaIds } = c.req.valid("json");
    if (!mediaIds || !mediaIds.length) {
      return new Response(JSON.stringify({ error: "No mediaIds provided" }), { status: 400 });
    }
    const sourceFiles = await getSourceFiles(mediaIds);
    if (!sourceFiles || !sourceFiles.length) {
      return new Response(JSON.stringify({ error: "No source files found for provided photos/video" }), { status: 404 });
    }
    const absPaths = sourceFiles.map((each) => path10.join(Bun.env.MAIN_PATH, each.source_file));
    const zipProc = Bun.spawn({
      cmd: [
        "zip",
        "-j",
        "-q",
        "-0",
        "-",
        ...absPaths
      ],
      stdout: "pipe",
      stderr: "inherit"
    });
    const exitCode = await zipProc.exited;
    if (exitCode !== 0) {
      await insertErrorLog("routes/medias.ts", "post/download", "Failed to create zip archive");
      return new Response(JSON.stringify({ error: "Failed to create zip archive" }), {
        status: 500
      });
    }
    return new Response(zipProc.stdout, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="archive.zip"'
      }
    });
  } catch (err) {
    await insertErrorLog("routes/medias.ts", "post/download", err);
    return new Response(JSON.stringify({ error: "Internal server error", details: err.message }), {
      status: 500
    });
  }
});
var medias_default = medias;

// server/routes/stream.ts
var PAGE_SIZE = 250;
var streamApi = new Hono2;
var querySchema2 = exports_external.object({
  year: exports_external.coerce.number().min(1800).max(9999).optional(),
  month: exports_external.coerce.number().min(1).max(12).optional(),
  pageNumber: exports_external.coerce.number().min(0).max(1000).default(0).optional(),
  filterDevice: exports_external.coerce.number().min(1).max(1000).optional(),
  filterType: exports_external.enum(["Video", "Photo", "Live"]).optional(),
  sortKey: exports_external.enum(["file_size", "create_date", "upload_at"]).optional(),
  sortOrder: exports_external.coerce.number().min(0).max(1).default(0).optional(),
  searchKey: exports_external.string().trim().max(50).regex(/^[a-zA-Z0-9 -]*$/, "Only letters, numbers, spaces, and hyphens are allowed").optional(),
  favorite: exports_external.coerce.number().min(0).max(1).optional(),
  hidden: exports_external.coerce.number().min(0).max(1).optional(),
  deleted: exports_external.coerce.number().min(0).max(1).optional(),
  duplicate: exports_external.coerce.number().min(0).max(1).optional(),
  albumId: exports_external.coerce.number().min(1).max(999999).optional(),
  locationId: exports_external.coerce.number().min(1).max(999999).optional()
});
streamApi.get("/", validateSchema("query", querySchema2), async (c) => {
  try {
    const { year, month, pageNumber, filterDevice, filterType, sortKey, sortOrder, searchKey, favorite, hidden, deleted, duplicate, albumId, locationId } = c.req.valid("query");
    const isYear = year && month ? sql`AND create_year = ${year} AND create_month = ${month} ` : sql``;
    const isDevice = filterDevice ? sql`AND camera_type = ${filterDevice} ` : sql``;
    const isType = filterType ? sql`AND file_type = ${filterType} ` : sql``;
    const isFavorite = favorite ? sql`AND favorite = TRUE ` : sql``;
    const isHidden = hidden ? sql`AND hidden = TRUE ` : sql`AND hidden = FALSE `;
    const isDeleted = deleted ? sql`AND deleted = TRUE ` : sql`AND deleted = FALSE `;
    const sortOrders = sortOrder ? sql` ASC ` : sql` DESC `;
    const orderBy = sortKey ? sql`ORDER BY ${sql(sortKey)} ${sortOrders}, media_id ASC ` : sql`ORDER BY create_date ${sortOrders}, media_id ASC`;
    const limitOffset = sql`LIMIT ${PAGE_SIZE} OFFSET ${pageNumber * PAGE_SIZE}`;
    const getMedias = sql`
      SELECT media_id, thumb_path, source_file, create_month, create_year, video_duration, duration,
              mime_type, file_type, favorite, file_size, upload_at, create_date, selected_frame, frame_rate
      FROM multi_schema."Media"
      WHERE 1=1 ${isYear} ${isDevice} ${isType}
      ${isFavorite} ${isHidden} ${isDeleted}`;
    let result;
    if (albumId) {
      result = await sql`
        SELECT md.* FROM (
            SELECT am.media FROM "multi_schema"."AlbumMedia" AS am WHERE am.album = ${albumId}
        ) as media_in_album
        JOIN (${getMedias}) as md ON md."media_id" = media_in_album.media
        ${orderBy}
        ${limitOffset}`;
    } else if (locationId) {
      result = await sql`
        SELECT md.* FROM (
            SELECT lm.media FROM "multi_schema"."LocationMedia" AS lm WHERE lm.location = ${locationId}
        ) as media_in_album
        JOIN (${getMedias}) as md ON md."media_id" = media_in_album.media
        ${orderBy}
        ${limitOffset}`;
    } else if (duplicate) {
      result = await sql`
        SELECT md.* FROM "multi_schema"."Duplicate" AS dup
        JOIN (${getMedias}) as md ON md."media_id" = dup.media
        ORDER BY hash_code, media_id ASC
        ${limitOffset}`;
    } else if (searchKey) {
      result = await sql`
        SELECT md.* FROM (
            SELECT media_id FROM multi_schema."Media"
            WHERE caption_eng_tsv @@ (websearch_to_tsquery ('english', ${searchKey}::text) 
        || websearch_to_tsquery ('simple', ${searchKey}::text))
        ) as search_medias
        JOIN (${getMedias}) as md ON md."media_id" = search_medias.media_id
        ORDER BY media_id ASC
        ${limitOffset}`;
    } else {
      result = await sql`${getMedias}
      ${orderBy}
      ${limitOffset}`;
    }
    return c.json(result);
  } catch (error) {
    console.error("Unexpected loading medias:", error);
    await insertErrorLog("routes/stream.ts", "streamApis", error);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});
var stream_default = streamApi;

// server/routes/serveStatic/thumbnails.ts
import path11 from "path";
var thumbnails = async (c) => {
  const reqUrl = new URL(c.req.url);
  const filePath = path11.join(Bun.env.MAIN_PATH, reqUrl.pathname);
  const file = Bun.file(filePath);
  if (!await file.exists()) {
    return c.text("Not Found", 404);
  }
  const etag = path11.basename(reqUrl.pathname);
  const lastModified = new Date(file.lastModified).toUTCString();
  let resHeaders = {
    "Access-Control-Allow-Origin": isNotDevMode ? "" : "*",
    ETag: etag,
    "Last-Modified": lastModified,
    "Cache-Control": "public, max-age=3600"
  };
  if (c.req.header("if-none-match") === etag || c.req.header("if-modified-since") === lastModified) {
    return c.body(null, 304, resHeaders);
  }
  return c.body(file.stream(), 200, {
    ...resHeaders,
    "Content-Type": file.type,
    "Content-Length": file.size.toString()
  });
};
var thumbnails_default = thumbnails;

// server/middleware/streamLargeVid.ts
import path12 from "path";
import * as fs5 from "fs";
var VIDEO_EXT = [".mov", ".mp4"];
var MB = 1024 * 1024;
var RESPONSE_IN_MB = 50 * MB;
var streamLargeVid = createMiddleware(async (c, next) => {
  const reqUrl = new URL(c.req.url);
  const isVideo = VIDEO_EXT.some((ext) => c.req.url.toLowerCase().endsWith(ext));
  if (!isVideo)
    return await next();
  const filePath = path12.join(Bun.env.MAIN_PATH, reqUrl.pathname);
  const videoFile = Bun.file(filePath);
  if (!await videoFile.exists())
    return c.json({ error: "File not found" }, 404);
  const fileSize = videoFile.size;
  if (videoFile.size <= RESPONSE_IN_MB)
    return await next();
  const range = c.req.header("range") || "";
  const match = range.match(/bytes=(\d+)-(\d*)/);
  if (!match)
    return c.text("Invalid Range Header", 416);
  const [_, startStr, endStr] = match;
  const start = parseInt(startStr, 10);
  const getEnd = endStr ? parseInt(endStr, 10) : fileSize - 1;
  const end = Math.min(getEnd, start + RESPONSE_IN_MB - 1);
  if (start >= fileSize || end >= fileSize || start > end) {
    return c.text("Requested Range Not Satisfiable", 416);
  }
  const chunkSize = end - start + 1;
  const fileStream = fs5.createReadStream(filePath, { start, end });
  return new Response(fileStream, {
    status: 206,
    headers: {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Content-Length": chunkSize.toString(),
      "Content-Type": videoFile.type,
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=3600, immutable"
    }
  });
});

// server/app.ts
var app = new Hono2;
app.use("*", logger());
if (!isNotDevMode) {
  app.use("/*", cors({
    origin: Bun.env.ORIGIN_URL,
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "PUT", "DELETE"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
    credentials: true
  }));
}
app.use(csrf({
  origin: Bun.env.ORIGIN_URL
}));
app.use(secureHeaders());
app.basePath("api/v1").route("/auth", auth_default).use(isAuthenticate).route("/search", search_default).route("/upload", upload_default).route("/stream", stream_default).route("/user", user_default).route("/medias", medias_default).route("/media", media_default).route("/album", album_default).use(isAdmin).route("/admin", admin_default);
app.get(`/${getDirName(Bun.env.THUMB_PATH)}/*`, isAuthenticate, thumbnails_default);
app.on("GET", [`/${getDirName(Bun.env.PHOTO_PATH)}/*`, `/${getDirName(Bun.env.UPLOAD_PATH)}/*`], isAuthenticate, streamLargeVid, serveStatic2({ root: Bun.env.MAIN_PATH }));
app.get("/assets/*", serveStatic2({ root: "./dist" }));
app.get("/*", serveStatic2({ root: "./dist", path: "index.html" }));
var app_default = app;

// server/index.ts
var server = Bun.serve({
  development: !isNotDevMode,
  port: Bun.env.PORT,
  fetch: app_default.fetch,
  maxRequestBodySize: MAX_BODY_SIZE,
  idleTimeout: 30
});
console.log(`Listening on http://localhost:${server.port} ...`);
