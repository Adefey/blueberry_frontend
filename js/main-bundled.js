(() => {
  var e = {
      528: (e, t, r) => {
        var n = r(633);
        e.exports = (n.default || n).template({
          1: function (e, t, r, n, o) {
            var a,
              i = null != t ? t : e.nullContext || {},
              l = e.hooks.helperMissing,
              s = "function",
              u = e.escapeExpression,
              c =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '    <div class="recipe-list-element border" data-id="' +
              u(
                typeof (a =
                  null != (a = c(r, "id") || (null != t ? c(t, "id") : t))
                    ? a
                    : l) === s
                  ? a.call(i, {
                      name: "id",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 7, column: 53 },
                        end: { line: 7, column: 59 },
                      },
                    })
                  : a,
              ) +
              '">\n      <div class="recipe-image">\n        <img src="' +
              u(
                typeof (a =
                  null !=
                  (a = c(r, "image_url") || (null != t ? c(t, "image_url") : t))
                    ? a
                    : l) === s
                  ? a.call(i, {
                      name: "image_url",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 9, column: 18 },
                        end: { line: 9, column: 31 },
                      },
                    })
                  : a,
              ) +
              '" alt="' +
              u(
                typeof (a =
                  null !=
                  (a = c(r, "caption") || (null != t ? c(t, "caption") : t))
                    ? a
                    : l) === s
                  ? a.call(i, {
                      name: "caption",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 9, column: 38 },
                        end: { line: 9, column: 49 },
                      },
                    })
                  : a,
              ) +
              '" />\n      </div>\n      <div class="caption-description">\n        <div class="caption"><b>' +
              u(
                typeof (a =
                  null !=
                  (a = c(r, "caption") || (null != t ? c(t, "caption") : t))
                    ? a
                    : l) === s
                  ? a.call(i, {
                      name: "caption",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 12, column: 32 },
                        end: { line: 12, column: 43 },
                      },
                    })
                  : a,
              ) +
              '</b></div>\n        <div class="description">' +
              u(
                typeof (a =
                  null !=
                  (a =
                    c(r, "description") ||
                    (null != t ? c(t, "description") : t))
                    ? a
                    : l) === s
                  ? a.call(i, {
                      name: "description",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 13, column: 33 },
                        end: { line: 13, column: 48 },
                      },
                    })
                  : a,
              ) +
              "</div>\n      </div>\n    </div>\n"
            );
          },
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, r, n, o) {
            var a,
              i =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="search-container">\n  <input type="text" class="searchbar" placeholder="Search recipes.." />\n  <button type="button" class="button-search">Search</button>\n</div>\n<div class="recipe-container">\n' +
              (null !=
              (a = i(r, "each").call(
                null != t ? t : e.nullContext || {},
                null != t ? i(t, "recipes") : t,
                {
                  name: "each",
                  hash: {},
                  fn: e.program(1, o, 0),
                  inverse: e.noop,
                  data: o,
                  loc: {
                    start: { line: 6, column: 2 },
                    end: { line: 16, column: 11 },
                  },
                },
              ))
                ? a
                : "") +
              "</div>"
            );
          },
          useData: !0,
        });
      },
      781: (e, t, r) => {
        var n = r(633);
        e.exports = (n.default || n).template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, r, n, o) {
            var a,
              i = null != t ? t : e.nullContext || {},
              l = e.hooks.helperMissing,
              s = "function",
              u = e.escapeExpression,
              c =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="recipe border">\n  <div class="recipe-flex-row">\n    <div class="recipe-image">\n      <img src="' +
              u(
                typeof (a =
                  null !=
                  (a = c(r, "image_url") || (null != t ? c(t, "image_url") : t))
                    ? a
                    : l) === s
                  ? a.call(i, {
                      name: "image_url",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 4, column: 16 },
                        end: { line: 4, column: 29 },
                      },
                    })
                  : a,
              ) +
              '" alt="' +
              u(
                typeof (a =
                  null !=
                  (a = c(r, "caption") || (null != t ? c(t, "caption") : t))
                    ? a
                    : l) === s
                  ? a.call(i, {
                      name: "caption",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 4, column: 36 },
                        end: { line: 4, column: 47 },
                      },
                    })
                  : a,
              ) +
              '" />\n    </div>\n    <div class="caption-description">\n      <div class="caption"><b>' +
              u(
                typeof (a =
                  null !=
                  (a = c(r, "caption") || (null != t ? c(t, "caption") : t))
                    ? a
                    : l) === s
                  ? a.call(i, {
                      name: "caption",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 7, column: 30 },
                        end: { line: 7, column: 41 },
                      },
                    })
                  : a,
              ) +
              '</b></div>\n      <div class="description">' +
              u(
                typeof (a =
                  null !=
                  (a =
                    c(r, "description") ||
                    (null != t ? c(t, "description") : t))
                    ? a
                    : l) === s
                  ? a.call(i, {
                      name: "description",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 8, column: 31 },
                        end: { line: 8, column: 46 },
                      },
                    })
                  : a,
              ) +
              '</div>\n    </div>\n  </div>\n  <div class="recipe-flex-row">\n    <div class="timer border"><div>' +
              u(
                typeof (a =
                  null !=
                  (a = c(r, "duration") || (null != t ? c(t, "duration") : t))
                    ? a
                    : l) === s
                  ? a.call(i, {
                      name: "duration",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 12, column: 35 },
                        end: { line: 12, column: 47 },
                      },
                    })
                  : a,
              ) +
              '</div></div>\n    <button type="button" class="button-previous">Previous step</button>\n    <button type="button" class="button-pause">Pause</button>\n    <button type="button" class="button-next">Next step</button>\n    <button type="button" class="button-exit">Back to menu</button>\n  </div>\n</div>'
            );
          },
          useData: !0,
        });
      },
      261: (e, t, r) => {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return (t.default = e), t;
        }
        t.__esModule = !0;
        var a = o(r(871)),
          i = n(r(613)),
          l = n(r(769)),
          s = o(r(849)),
          u = o(r(624)),
          c = n(r(148));
        function p() {
          var e = new a.HandlebarsEnvironment();
          return (
            s.extend(e, a),
            (e.SafeString = i.default),
            (e.Exception = l.default),
            (e.Utils = s),
            (e.escapeExpression = s.escapeExpression),
            (e.VM = u),
            (e.template = function (t) {
              return u.template(t, e);
            }),
            e
          );
        }
        var d = p();
        (d.create = p),
          c.default(d),
          (d.default = d),
          (t.default = d),
          (e.exports = t.default);
      },
      871: (e, t, r) => {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.__esModule = !0), (t.HandlebarsEnvironment = p);
        var o = r(849),
          a = n(r(769)),
          i = r(277),
          l = r(940),
          s = n(r(566)),
          u = r(865);
        (t.VERSION = "4.7.8"),
          (t.COMPILER_REVISION = 8),
          (t.LAST_COMPATIBLE_COMPILER_REVISION = 7),
          (t.REVISION_CHANGES = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1",
            7: ">= 4.0.0 <4.3.0",
            8: ">= 4.3.0",
          });
        var c = "[object Object]";
        function p(e, t, r) {
          (this.helpers = e || {}),
            (this.partials = t || {}),
            (this.decorators = r || {}),
            i.registerDefaultHelpers(this),
            l.registerDefaultDecorators(this);
        }
        p.prototype = {
          constructor: p,
          logger: s.default,
          log: s.default.log,
          registerHelper: function (e, t) {
            if (o.toString.call(e) === c) {
              if (t)
                throw new a.default("Arg not supported with multiple helpers");
              o.extend(this.helpers, e);
            } else this.helpers[e] = t;
          },
          unregisterHelper: function (e) {
            delete this.helpers[e];
          },
          registerPartial: function (e, t) {
            if (o.toString.call(e) === c) o.extend(this.partials, e);
            else {
              if (void 0 === t)
                throw new a.default(
                  'Attempting to register a partial called "' +
                    e +
                    '" as undefined',
                );
              this.partials[e] = t;
            }
          },
          unregisterPartial: function (e) {
            delete this.partials[e];
          },
          registerDecorator: function (e, t) {
            if (o.toString.call(e) === c) {
              if (t)
                throw new a.default(
                  "Arg not supported with multiple decorators",
                );
              o.extend(this.decorators, e);
            } else this.decorators[e] = t;
          },
          unregisterDecorator: function (e) {
            delete this.decorators[e];
          },
          resetLoggedPropertyAccesses: function () {
            u.resetLoggedProperties();
          },
        };
        var d = s.default.log;
        (t.log = d), (t.createFrame = o.createFrame), (t.logger = s.default);
      },
      940: (e, t, r) => {
        "use strict";
        (t.__esModule = !0),
          (t.registerDefaultDecorators = function (e) {
            o.default(e);
          });
        var n,
          o = (n = r(430)) && n.__esModule ? n : { default: n };
      },
      430: (e, t, r) => {
        "use strict";
        t.__esModule = !0;
        var n = r(849);
        (t.default = function (e) {
          e.registerDecorator("inline", function (e, t, r, o) {
            var a = e;
            return (
              t.partials ||
                ((t.partials = {}),
                (a = function (o, a) {
                  var i = r.partials;
                  r.partials = n.extend({}, i, t.partials);
                  var l = e(o, a);
                  return (r.partials = i), l;
                })),
              (t.partials[o.args[0]] = o.fn),
              a
            );
          });
        }),
          (e.exports = t.default);
      },
      769: (e, t) => {
        "use strict";
        t.__esModule = !0;
        var r = [
          "description",
          "fileName",
          "lineNumber",
          "endLineNumber",
          "message",
          "name",
          "number",
          "stack",
        ];
        function n(e, t) {
          var o = t && t.loc,
            a = void 0,
            i = void 0,
            l = void 0,
            s = void 0;
          o &&
            ((a = o.start.line),
            (i = o.end.line),
            (l = o.start.column),
            (s = o.end.column),
            (e += " - " + a + ":" + l));
          for (
            var u = Error.prototype.constructor.call(this, e), c = 0;
            c < r.length;
            c++
          )
            this[r[c]] = u[r[c]];
          Error.captureStackTrace && Error.captureStackTrace(this, n);
          try {
            o &&
              ((this.lineNumber = a),
              (this.endLineNumber = i),
              Object.defineProperty
                ? (Object.defineProperty(this, "column", {
                    value: l,
                    enumerable: !0,
                  }),
                  Object.defineProperty(this, "endColumn", {
                    value: s,
                    enumerable: !0,
                  }))
                : ((this.column = l), (this.endColumn = s)));
          } catch (e) {}
        }
        (n.prototype = new Error()), (t.default = n), (e.exports = t.default);
      },
      277: (e, t, r) => {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.__esModule = !0),
          (t.registerDefaultHelpers = function (e) {
            o.default(e),
              a.default(e),
              i.default(e),
              l.default(e),
              s.default(e),
              u.default(e),
              c.default(e);
          }),
          (t.moveHelperToHooks = function (e, t, r) {
            e.helpers[t] &&
              ((e.hooks[t] = e.helpers[t]), r || delete e.helpers[t]);
          });
        var o = n(r(97)),
          a = n(r(785)),
          i = n(r(353)),
          l = n(r(355)),
          s = n(r(300)),
          u = n(r(466)),
          c = n(r(908));
      },
      97: (e, t, r) => {
        "use strict";
        t.__esModule = !0;
        var n = r(849);
        (t.default = function (e) {
          e.registerHelper("blockHelperMissing", function (t, r) {
            var o = r.inverse,
              a = r.fn;
            if (!0 === t) return a(this);
            if (!1 === t || null == t) return o(this);
            if (n.isArray(t))
              return t.length > 0
                ? (r.ids && (r.ids = [r.name]), e.helpers.each(t, r))
                : o(this);
            if (r.data && r.ids) {
              var i = n.createFrame(r.data);
              (i.contextPath = n.appendContextPath(r.data.contextPath, r.name)),
                (r = { data: i });
            }
            return a(t, r);
          });
        }),
          (e.exports = t.default);
      },
      785: (e, t, r) => {
        "use strict";
        t.__esModule = !0;
        var n,
          o = r(849),
          a = (n = r(769)) && n.__esModule ? n : { default: n };
        (t.default = function (e) {
          e.registerHelper("each", function (e, t) {
            if (!t) throw new a.default("Must pass iterator to #each");
            var r,
              n = t.fn,
              i = t.inverse,
              l = 0,
              s = "",
              u = void 0,
              c = void 0;
            function p(t, r, a) {
              u &&
                ((u.key = t),
                (u.index = r),
                (u.first = 0 === r),
                (u.last = !!a),
                c && (u.contextPath = c + t)),
                (s += n(e[t], {
                  data: u,
                  blockParams: o.blockParams([e[t], t], [c + t, null]),
                }));
            }
            if (
              (t.data &&
                t.ids &&
                (c = o.appendContextPath(t.data.contextPath, t.ids[0]) + "."),
              o.isFunction(e) && (e = e.call(this)),
              t.data && (u = o.createFrame(t.data)),
              e && "object" == typeof e)
            )
              if (o.isArray(e))
                for (var d = e.length; l < d; l++)
                  l in e && p(l, l, l === e.length - 1);
              else if ("function" == typeof Symbol && e[Symbol.iterator]) {
                for (
                  var f = [], h = e[Symbol.iterator](), m = h.next();
                  !m.done;
                  m = h.next()
                )
                  f.push(m.value);
                for (d = (e = f).length; l < d; l++)
                  p(l, l, l === e.length - 1);
              } else
                (r = void 0),
                  Object.keys(e).forEach(function (e) {
                    void 0 !== r && p(r, l - 1), (r = e), l++;
                  }),
                  void 0 !== r && p(r, l - 1, !0);
            return 0 === l && (s = i(this)), s;
          });
        }),
          (e.exports = t.default);
      },
      353: (e, t, r) => {
        "use strict";
        t.__esModule = !0;
        var n,
          o = (n = r(769)) && n.__esModule ? n : { default: n };
        (t.default = function (e) {
          e.registerHelper("helperMissing", function () {
            if (1 !== arguments.length)
              throw new o.default(
                'Missing helper: "' +
                  arguments[arguments.length - 1].name +
                  '"',
              );
          });
        }),
          (e.exports = t.default);
      },
      355: (e, t, r) => {
        "use strict";
        t.__esModule = !0;
        var n,
          o = r(849),
          a = (n = r(769)) && n.__esModule ? n : { default: n };
        (t.default = function (e) {
          e.registerHelper("if", function (e, t) {
            if (2 != arguments.length)
              throw new a.default("#if requires exactly one argument");
            return (
              o.isFunction(e) && (e = e.call(this)),
              (!t.hash.includeZero && !e) || o.isEmpty(e)
                ? t.inverse(this)
                : t.fn(this)
            );
          }),
            e.registerHelper("unless", function (t, r) {
              if (2 != arguments.length)
                throw new a.default("#unless requires exactly one argument");
              return e.helpers.if.call(this, t, {
                fn: r.inverse,
                inverse: r.fn,
                hash: r.hash,
              });
            });
        }),
          (e.exports = t.default);
      },
      300: (e, t) => {
        "use strict";
        (t.__esModule = !0),
          (t.default = function (e) {
            e.registerHelper("log", function () {
              for (
                var t = [void 0], r = arguments[arguments.length - 1], n = 0;
                n < arguments.length - 1;
                n++
              )
                t.push(arguments[n]);
              var o = 1;
              null != r.hash.level
                ? (o = r.hash.level)
                : r.data && null != r.data.level && (o = r.data.level),
                (t[0] = o),
                e.log.apply(e, t);
            });
          }),
          (e.exports = t.default);
      },
      466: (e, t) => {
        "use strict";
        (t.__esModule = !0),
          (t.default = function (e) {
            e.registerHelper("lookup", function (e, t, r) {
              return e ? r.lookupProperty(e, t) : e;
            });
          }),
          (e.exports = t.default);
      },
      908: (e, t, r) => {
        "use strict";
        t.__esModule = !0;
        var n,
          o = r(849),
          a = (n = r(769)) && n.__esModule ? n : { default: n };
        (t.default = function (e) {
          e.registerHelper("with", function (e, t) {
            if (2 != arguments.length)
              throw new a.default("#with requires exactly one argument");
            o.isFunction(e) && (e = e.call(this));
            var r = t.fn;
            if (o.isEmpty(e)) return t.inverse(this);
            var n = t.data;
            return (
              t.data &&
                t.ids &&
                ((n = o.createFrame(t.data)).contextPath = o.appendContextPath(
                  t.data.contextPath,
                  t.ids[0],
                )),
              r(e, {
                data: n,
                blockParams: o.blockParams([e], [n && n.contextPath]),
              })
            );
          });
        }),
          (e.exports = t.default);
      },
      726: (e, t, r) => {
        "use strict";
        (t.__esModule = !0),
          (t.createNewLookupObject = function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return n.extend.apply(void 0, [Object.create(null)].concat(t));
          });
        var n = r(849);
      },
      865: (e, t, r) => {
        "use strict";
        (t.__esModule = !0),
          (t.createProtoAccessControl = function (e) {
            var t = Object.create(null);
            (t.constructor = !1),
              (t.__defineGetter__ = !1),
              (t.__defineSetter__ = !1),
              (t.__lookupGetter__ = !1);
            var r = Object.create(null);
            return (
              (r.__proto__ = !1),
              {
                properties: {
                  whitelist: o.createNewLookupObject(
                    r,
                    e.allowedProtoProperties,
                  ),
                  defaultValue: e.allowProtoPropertiesByDefault,
                },
                methods: {
                  whitelist: o.createNewLookupObject(t, e.allowedProtoMethods),
                  defaultValue: e.allowProtoMethodsByDefault,
                },
              }
            );
          }),
          (t.resultIsAllowed = function (e, t, r) {
            return (function (e, t) {
              return void 0 !== e.whitelist[t]
                ? !0 === e.whitelist[t]
                : void 0 !== e.defaultValue
                  ? e.defaultValue
                  : ((function (e) {
                      !0 !== i[e] &&
                        ((i[e] = !0),
                        a.default.log(
                          "error",
                          'Handlebars: Access has been denied to resolve the property "' +
                            e +
                            '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details',
                        ));
                    })(t),
                    !1);
            })("function" == typeof e ? t.methods : t.properties, r);
          }),
          (t.resetLoggedProperties = function () {
            Object.keys(i).forEach(function (e) {
              delete i[e];
            });
          });
        var n,
          o = r(726),
          a = (n = r(566)) && n.__esModule ? n : { default: n },
          i = Object.create(null);
      },
      614: (e, t) => {
        "use strict";
        (t.__esModule = !0),
          (t.wrapHelper = function (e, t) {
            return "function" != typeof e
              ? e
              : function () {
                  return (
                    (arguments[arguments.length - 1] = t(
                      arguments[arguments.length - 1],
                    )),
                    e.apply(this, arguments)
                  );
                };
          });
      },
      566: (e, t, r) => {
        "use strict";
        t.__esModule = !0;
        var n = r(849),
          o = {
            methodMap: ["debug", "info", "warn", "error"],
            level: "info",
            lookupLevel: function (e) {
              if ("string" == typeof e) {
                var t = n.indexOf(o.methodMap, e.toLowerCase());
                e = t >= 0 ? t : parseInt(e, 10);
              }
              return e;
            },
            log: function (e) {
              if (
                ((e = o.lookupLevel(e)),
                "undefined" != typeof console && o.lookupLevel(o.level) <= e)
              ) {
                var t = o.methodMap[e];
                console[t] || (t = "log");
                for (
                  var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1;
                  a < r;
                  a++
                )
                  n[a - 1] = arguments[a];
                console[t].apply(console, n);
              }
            },
          };
        (t.default = o), (e.exports = t.default);
      },
      148: (e, t) => {
        "use strict";
        (t.__esModule = !0),
          (t.default = function (e) {
            "object" != typeof globalThis &&
              (Object.prototype.__defineGetter__("__magic__", function () {
                return this;
              }),
              (__magic__.globalThis = __magic__),
              delete Object.prototype.__magic__);
            var t = globalThis.Handlebars;
            e.noConflict = function () {
              return (
                globalThis.Handlebars === e && (globalThis.Handlebars = t), e
              );
            };
          }),
          (e.exports = t.default);
      },
      624: (e, t, r) => {
        "use strict";
        (t.__esModule = !0),
          (t.checkRevision = function (e) {
            var t = (e && e[0]) || 1,
              r = i.COMPILER_REVISION;
            if (
              !(
                t >= i.LAST_COMPATIBLE_COMPILER_REVISION &&
                t <= i.COMPILER_REVISION
              )
            ) {
              if (t < i.LAST_COMPATIBLE_COMPILER_REVISION) {
                var n = i.REVISION_CHANGES[r],
                  o = i.REVISION_CHANGES[t];
                throw new a.default(
                  "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                    n +
                    ") or downgrade your runtime to an older version (" +
                    o +
                    ").",
                );
              }
              throw new a.default(
                "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
                  e[1] +
                  ").",
              );
            }
          }),
          (t.template = function (e, t) {
            if (!t) throw new a.default("No environment passed to template");
            if (!e || !e.main)
              throw new a.default("Unknown template object: " + typeof e);
            (e.main.decorator = e.main_d), t.VM.checkRevision(e.compiler);
            var r = e.compiler && 7 === e.compiler[0],
              n = {
                strict: function (e, t, r) {
                  if (!e || !(t in e))
                    throw new a.default('"' + t + '" not defined in ' + e, {
                      loc: r,
                    });
                  return n.lookupProperty(e, t);
                },
                lookupProperty: function (e, t) {
                  var r = e[t];
                  return null == r ||
                    Object.prototype.hasOwnProperty.call(e, t) ||
                    u.resultIsAllowed(r, n.protoAccessControl, t)
                    ? r
                    : void 0;
                },
                lookup: function (e, t) {
                  for (var r = e.length, o = 0; o < r; o++)
                    if (null != (e[o] && n.lookupProperty(e[o], t)))
                      return e[o][t];
                },
                lambda: function (e, t) {
                  return "function" == typeof e ? e.call(t) : e;
                },
                escapeExpression: o.escapeExpression,
                invokePartial: function (r, n, i) {
                  i.hash &&
                    ((n = o.extend({}, n, i.hash)), i.ids && (i.ids[0] = !0)),
                    (r = t.VM.resolvePartial.call(this, r, n, i));
                  var l = o.extend({}, i, {
                      hooks: this.hooks,
                      protoAccessControl: this.protoAccessControl,
                    }),
                    s = t.VM.invokePartial.call(this, r, n, l);
                  if (
                    (null == s &&
                      t.compile &&
                      ((i.partials[i.name] = t.compile(
                        r,
                        e.compilerOptions,
                        t,
                      )),
                      (s = i.partials[i.name](n, l))),
                    null != s)
                  ) {
                    if (i.indent) {
                      for (
                        var u = s.split("\n"), c = 0, p = u.length;
                        c < p && (u[c] || c + 1 !== p);
                        c++
                      )
                        u[c] = i.indent + u[c];
                      s = u.join("\n");
                    }
                    return s;
                  }
                  throw new a.default(
                    "The partial " +
                      i.name +
                      " could not be compiled when running in runtime-only mode",
                  );
                },
                fn: function (t) {
                  var r = e[t];
                  return (r.decorator = e[t + "_d"]), r;
                },
                programs: [],
                program: function (e, t, r, n, o) {
                  var a = this.programs[e],
                    i = this.fn(e);
                  return (
                    t || o || n || r
                      ? (a = c(this, e, i, t, r, n, o))
                      : a || (a = this.programs[e] = c(this, e, i)),
                    a
                  );
                },
                data: function (e, t) {
                  for (; e && t--; ) e = e._parent;
                  return e;
                },
                mergeIfNeeded: function (e, t) {
                  var r = e || t;
                  return e && t && e !== t && (r = o.extend({}, t, e)), r;
                },
                nullContext: Object.seal({}),
                noop: t.VM.noop,
                compilerInfo: e.compiler,
              };
            function p(t) {
              var r =
                  arguments.length <= 1 || void 0 === arguments[1]
                    ? {}
                    : arguments[1],
                o = r.data;
              p._setup(r),
                !r.partial &&
                  e.useData &&
                  (o = (function (e, t) {
                    return (
                      (t && "root" in t) ||
                        ((t = t ? i.createFrame(t) : {}).root = e),
                      t
                    );
                  })(t, o));
              var a = void 0,
                l = e.useBlockParams ? [] : void 0;
              function s(t) {
                return "" + e.main(n, t, n.helpers, n.partials, o, l, a);
              }
              return (
                e.useDepths &&
                  (a = r.depths
                    ? t != r.depths[0]
                      ? [t].concat(r.depths)
                      : r.depths
                    : [t]),
                (s = d(e.main, s, n, r.depths || [], o, l))(t, r)
              );
            }
            return (
              (p.isTop = !0),
              (p._setup = function (a) {
                if (a.partial)
                  (n.protoAccessControl = a.protoAccessControl),
                    (n.helpers = a.helpers),
                    (n.partials = a.partials),
                    (n.decorators = a.decorators),
                    (n.hooks = a.hooks);
                else {
                  var i = o.extend({}, t.helpers, a.helpers);
                  !(function (e, t) {
                    Object.keys(e).forEach(function (r) {
                      var n = e[r];
                      e[r] = (function (e, t) {
                        var r = t.lookupProperty;
                        return s.wrapHelper(e, function (e) {
                          return o.extend({ lookupProperty: r }, e);
                        });
                      })(n, t);
                    });
                  })(i, n),
                    (n.helpers = i),
                    e.usePartial &&
                      (n.partials = n.mergeIfNeeded(a.partials, t.partials)),
                    (e.usePartial || e.useDecorators) &&
                      (n.decorators = o.extend({}, t.decorators, a.decorators)),
                    (n.hooks = {}),
                    (n.protoAccessControl = u.createProtoAccessControl(a));
                  var c = a.allowCallsToHelperMissing || r;
                  l.moveHelperToHooks(n, "helperMissing", c),
                    l.moveHelperToHooks(n, "blockHelperMissing", c);
                }
              }),
              (p._child = function (t, r, o, i) {
                if (e.useBlockParams && !o)
                  throw new a.default("must pass block params");
                if (e.useDepths && !i)
                  throw new a.default("must pass parent depths");
                return c(n, t, e[t], r, 0, o, i);
              }),
              p
            );
          }),
          (t.wrapProgram = c),
          (t.resolvePartial = function (e, t, r) {
            return (
              e
                ? e.call || r.name || ((r.name = e), (e = r.partials[e]))
                : (e =
                    "@partial-block" === r.name
                      ? r.data["partial-block"]
                      : r.partials[r.name]),
              e
            );
          }),
          (t.invokePartial = function (e, t, r) {
            var n = r.data && r.data["partial-block"];
            (r.partial = !0),
              r.ids && (r.data.contextPath = r.ids[0] || r.data.contextPath);
            var l = void 0;
            if (
              (r.fn &&
                r.fn !== p &&
                (function () {
                  r.data = i.createFrame(r.data);
                  var e = r.fn;
                  (l = r.data["partial-block"] =
                    function (t) {
                      var r =
                        arguments.length <= 1 || void 0 === arguments[1]
                          ? {}
                          : arguments[1];
                      return (
                        (r.data = i.createFrame(r.data)),
                        (r.data["partial-block"] = n),
                        e(t, r)
                      );
                    }),
                    e.partials &&
                      (r.partials = o.extend({}, r.partials, e.partials));
                })(),
              void 0 === e && l && (e = l),
              void 0 === e)
            )
              throw new a.default(
                "The partial " + r.name + " could not be found",
              );
            if (e instanceof Function) return e(t, r);
          }),
          (t.noop = p);
        var n,
          o = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          })(r(849)),
          a = (n = r(769)) && n.__esModule ? n : { default: n },
          i = r(871),
          l = r(277),
          s = r(614),
          u = r(865);
        function c(e, t, r, n, o, a, i) {
          function l(t) {
            var o =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? {}
                  : arguments[1],
              l = i;
            return (
              !i ||
                t == i[0] ||
                (t === e.nullContext && null === i[0]) ||
                (l = [t].concat(i)),
              r(
                e,
                t,
                e.helpers,
                e.partials,
                o.data || n,
                a && [o.blockParams].concat(a),
                l,
              )
            );
          }
          return (
            ((l = d(r, l, e, i, n, a)).program = t),
            (l.depth = i ? i.length : 0),
            (l.blockParams = o || 0),
            l
          );
        }
        function p() {
          return "";
        }
        function d(e, t, r, n, a, i) {
          if (e.decorator) {
            var l = {};
            (t = e.decorator(t, l, r, n && n[0], a, i, n)), o.extend(t, l);
          }
          return t;
        }
      },
      613: (e, t) => {
        "use strict";
        function r(e) {
          this.string = e;
        }
        (t.__esModule = !0),
          (r.prototype.toString = r.prototype.toHTML =
            function () {
              return "" + this.string;
            }),
          (t.default = r),
          (e.exports = t.default);
      },
      849: (e, t) => {
        "use strict";
        (t.__esModule = !0),
          (t.extend = i),
          (t.indexOf = function (e, t) {
            for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
            return -1;
          }),
          (t.escapeExpression = function (e) {
            if ("string" != typeof e) {
              if (e && e.toHTML) return e.toHTML();
              if (null == e) return "";
              if (!e) return e + "";
              e = "" + e;
            }
            return o.test(e) ? e.replace(n, a) : e;
          }),
          (t.isEmpty = function (e) {
            return (!e && 0 !== e) || !(!u(e) || 0 !== e.length);
          }),
          (t.createFrame = function (e) {
            var t = i({}, e);
            return (t._parent = e), t;
          }),
          (t.blockParams = function (e, t) {
            return (e.path = t), e;
          }),
          (t.appendContextPath = function (e, t) {
            return (e ? e + "." : "") + t;
          });
        var r = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;",
            "=": "&#x3D;",
          },
          n = /[&<>"'`=]/g,
          o = /[&<>"'`=]/;
        function a(e) {
          return r[e];
        }
        function i(e) {
          for (var t = 1; t < arguments.length; t++)
            for (var r in arguments[t])
              Object.prototype.hasOwnProperty.call(arguments[t], r) &&
                (e[r] = arguments[t][r]);
          return e;
        }
        var l = Object.prototype.toString;
        t.toString = l;
        var s = function (e) {
          return "function" == typeof e;
        };
        s(/x/) &&
          (t.isFunction = s =
            function (e) {
              return (
                "function" == typeof e && "[object Function]" === l.call(e)
              );
            }),
          (t.isFunction = s);
        var u =
          Array.isArray ||
          function (e) {
            return (
              !(!e || "object" != typeof e) && "[object Array]" === l.call(e)
            );
          };
        t.isArray = u;
      },
      633: (e, t, r) => {
        e.exports = r(261).default;
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var a = (t[n] = { exports: {} });
    return e[n](a, a.exports, r), a.exports;
  }
  (() => {
    "use strict";
    const e = document.getElementById("root"),
      t = r(528),
      n = r(781);
    let o = 0;
    function a() {
      let r = (function (e = 0, t = 0, r = null) {
        if (0 === e) return { recipes: [] };
        console.log(e, t, r);
        const n = {
          recipes: [
            {
              caption: "Mac-N-Cheese",
              description:
                "Macaroni with cheese cooked in a saucepan. Traditional American meal.",
              image_url:
                "https://massystorestt.com/wp-content/uploads/2014/10/STOVE-TOP-MAC-AND-CHEESE-1024x768.jpg",
              id: 1,
            },
            {
              caption: "Soup Yay Tsun",
              description:
                "Chinese morning meal. Consists of eggs and tomatoes",
              image_url:
                "https://travel-dom.ru/wp-content/uploads/2020/06/ayEsk7D7g4A.jpg",
              id: 2,
            },
            {
              caption: "Cabbage with chicken",
              description:
                "Dmitrov city cuisine, very nutricious dish. Simple to prepare and tasty to consume",
              image_url: "https://5pirogov.ru/wp-content/uploads/3-76.jpg",
              id: 3,
            },
          ],
        };
        return (
          r &&
            (n.recipes = n.recipes.filter(
              (e) => e.caption.includes(r) || e.description.includes(r),
            )),
          n
        );
      })(10, 0, "");
      (e.innerHTML = t(r)),
        e && (e.innerHTML = t(r)),
        e.querySelector(".searchbar"),
        e.querySelector(".button-search").addEventListener("click", () => {
          a();
        }),
        e.querySelectorAll(".recipe-list-element").forEach((t) => {
          t.addEventListener("click", (r) => {
            (e.innerHTML = ""),
              t.getAttribute("data-id"),
              (o = 0),
              i({
                caption: "Mac-N-Cheese",
                description:
                  "Macaroni with cheese cooked in a saucepan. Traditional American meal.",
                image_url:
                  "https://massystorestt.com/wp-content/uploads/2014/10/STOVE-TOP-MAC-AND-CHEESE-1024x768.jpg",
                steps: [
                  {
                    caption: "Prepare thyself",
                    description:
                      "Now we well cook Mac-N-Cheese. Prepare saucepan with boiling water, macaroni of your choise, grated cheese and some butter",
                    image_url:
                      "https://versiya.info/uploads/posts/2020-04/1586278312_airbrush_20200407194850.jpg",
                    duration: 60,
                  },
                  {
                    caption: "Boil macaroni",
                    description:
                      "Boil macaroni in boiling water for 10 minutes",
                    image_url:
                      "https://ketokotleta.ru/wp-content/uploads/9/a/8/9a86279d376c3a68fba78745fa578b79.jpeg",
                    duration: 600,
                  },
                  {
                    caption: "Drain almost all water",
                    description:
                      "Drain almost all the water from the macaroni. They should remain in the saucepan in the remaining amount of water",
                    image_url: "https://fb.ru/media/i/4/7/8/0/4/0/i/478040.jpg",
                    duration: 60,
                  },
                  {
                    caption: "Add cheese and butter",
                    description:
                      "Add 150 grams of grated cheese and 15 grams of butter",
                    image_url:
                      "https://img.povar.ru/uploads/7a/41/03/30/spagetti_s_sirom-84792.jpg",
                    duration: 45,
                  },
                  {
                    caption: "Stir well",
                    description:
                      "Stir all together until it all mixes and gives you finished dish",
                    image_url:
                      "https://cdn.idntimes.com/content-images/post/20210621/opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseatscom-recipes-images-2015-10-20151006-macaroni-and-cheese-stovetop-food-lab-18-20kenji-401e7a44dba5478d866cdda7e6c48bf2-f5ba829bc421e77ede03054370bf5861.jpg",
                    duration: 180,
                  },
                  {
                    caption: "Congratulations!",
                    description: "Enjoy your meal!",
                    image_url:
                      "https://images.iptv.rt.ru/images/c6u67rjir4ssllttbseg.jpg",
                    duration: 180,
                  },
                ],
              });
          });
        });
    }
    function i(t) {
      (e.innerHTML = n(t.steps[o])),
        e.querySelector(".button-previous").addEventListener("click", (e) => {
          o > 0 && --o, i(t);
        }),
        e.querySelector(".button-pause").addEventListener("click", (e) => {
          console.log("Not implemented");
        }),
        e.querySelector(".button-next").addEventListener("click", (e) => {
          o < t.steps.length - 1 && ++o, i(t);
        }),
        e.querySelector(".button-exit").addEventListener("click", (e) => {
          a();
        });
    }
    a();
  })();
})();
