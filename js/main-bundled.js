(() => {
  var e = {
      338: (e) => {
        e.exports = function (e) {
          if (e <= 0) return "Done!";
          let t = Math.floor(e / 3600),
            r = Math.floor((e - 3600 * t) / 60),
            n = e - 3600 * t - 60 * r;
          return (
            t < 10 && (t = "0" + t),
            r < 10 && (r = "0" + r),
            n < 10 && (n = "0" + n),
            `Timer: ${t}:${r}:${n}`
          );
        };
      },
      528: (e, t, r) => {
        var n = r(633);
        e.exports = (n.default || n).template({
          1: function (e, t, r, n, o) {
            var a,
              l = null != t ? t : e.nullContext || {},
              i = e.hooks.helperMissing,
              s = "function",
              u = e.escapeExpression,
              c =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '    <div\n      class="recipe-container adaptive-element-width adaptive-element-height flex-row shadow-border"\n      data-id="' +
              u(
                typeof (a =
                  null != (a = c(r, "id") || (null != t ? c(t, "id") : t))
                    ? a
                    : i) === s
                  ? a.call(l, {
                      name: "id",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 5, column: 15 },
                        end: { line: 5, column: 21 },
                      },
                    })
                  : a,
              ) +
              '"\n    >\n      <div class="image-container">\n        <img src="' +
              u(
                typeof (a =
                  null !=
                  (a = c(r, "image_url") || (null != t ? c(t, "image_url") : t))
                    ? a
                    : i) === s
                  ? a.call(l, {
                      name: "image_url",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 8, column: 18 },
                        end: { line: 8, column: 31 },
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
                    : i) === s
                  ? a.call(l, {
                      name: "caption",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 8, column: 38 },
                        end: { line: 8, column: 49 },
                      },
                    })
                  : a,
              ) +
              '" />\n      </div>\n      <div class="text-container flex-column">\n        <div class="recipe-caption">' +
              u(
                typeof (a =
                  null !=
                  (a = c(r, "caption") || (null != t ? c(t, "caption") : t))
                    ? a
                    : i) === s
                  ? a.call(l, {
                      name: "caption",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 11, column: 36 },
                        end: { line: 11, column: 47 },
                      },
                    })
                  : a,
              ) +
              '</div>\n        <div class="recipe-description">' +
              u(
                typeof (a =
                  null !=
                  (a =
                    c(r, "description") ||
                    (null != t ? c(t, "description") : t))
                    ? a
                    : i) === s
                  ? a.call(l, {
                      name: "description",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 12, column: 40 },
                        end: { line: 12, column: 55 },
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
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="recipe-list-container flex-row">\n' +
              (null !=
              (a = l(r, "each").call(
                null != t ? t : e.nullContext || {},
                null != t ? l(t, "recipes") : t,
                {
                  name: "each",
                  hash: {},
                  fn: e.program(1, o, 0),
                  inverse: e.noop,
                  data: o,
                  loc: {
                    start: { line: 2, column: 2 },
                    end: { line: 15, column: 11 },
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
          main: function (e, t, n, o, a) {
            var l,
              i = e.lambda,
              s = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div\n  class="recipe-step-container recipe-width recipe-height flex-column shadow-border"\n>\n  <div class="step-data">\n    <div class="image-container-step">\n      <img src="' +
              s(i(null != t ? u(t, "image_url") : t, t)) +
              '" alt="' +
              s(i(null != t ? u(t, "caption") : t, t)) +
              '" />\n    </div>\n    <div class="text-container-step flex-column">\n      <div class="recipe-caption">' +
              s(i(null != t ? u(t, "caption") : t, t)) +
              '</div>\n      <div class="recipe-description">' +
              s(i(null != t ? u(t, "description") : t, t)) +
              '</div>\n    </div>\n  </div>\n  <div class="flex-row buttons-bar">\n    <div class="timer shadow-border"><div>' +
              s(
                ((l = r(338)), l && (l.__esModule ? l.default : l)).call(
                  null != t ? t : e.nullContext || {},
                  null != t ? u(t, "duration") : t,
                  {
                    name: "sec_to_date_helper",
                    hash: {},
                    data: a,
                    loc: {
                      start: { line: 14, column: 42 },
                      end: { line: 16, column: 10 },
                    },
                  },
                ),
              ) +
              '</div></div>\n    <button type="button" class="button-previous">Previous step</button>\n    <button type="button" class="button-pause">Disable timer</button>\n    <button type="button" class="button-next">Next step</button>\n    <button type="button" class="button-exit">Back to menu</button>\n  </div>\n</div>'
            );
          },
          useData: !0,
        });
      },
      53: (e, t, r) => {
        var n = r(633);
        e.exports = (n.default || n).template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, r, n, o) {
            var a,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="search-container flex-row">\n  <input\n    type="text"\n    class="searchbar"\n    placeholder="Search recipes.."\n    value="' +
              e.escapeExpression(
                "function" ==
                  typeof (a =
                    null !=
                    (a = l(r, "value") || (null != t ? l(t, "value") : t))
                      ? a
                      : e.hooks.helperMissing)
                  ? a.call(null != t ? t : e.nullContext || {}, {
                      name: "value",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 6, column: 11 },
                        end: { line: 6, column: 20 },
                      },
                    })
                  : a,
              ) +
              '"\n  />\n  <button type="button" class="button-search">Search</button>\n  <button type="button" class="button-prev-list button-nav">Back</button>\n  <button type="button" class="button-next-list button-nav">Next</button>\n</div>'
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
          l = n(r(613)),
          i = n(r(769)),
          s = o(r(849)),
          u = o(r(624)),
          c = n(r(148));
        function d() {
          var e = new a.HandlebarsEnvironment();
          return (
            s.extend(e, a),
            (e.SafeString = l.default),
            (e.Exception = i.default),
            (e.Utils = s),
            (e.escapeExpression = s.escapeExpression),
            (e.VM = u),
            (e.template = function (t) {
              return u.template(t, e);
            }),
            e
          );
        }
        var p = d();
        (p.create = d),
          c.default(p),
          (p.default = p),
          (t.default = p),
          (e.exports = t.default);
      },
      871: (e, t, r) => {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.__esModule = !0), (t.HandlebarsEnvironment = d);
        var o = r(849),
          a = n(r(769)),
          l = r(277),
          i = r(940),
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
        function d(e, t, r) {
          (this.helpers = e || {}),
            (this.partials = t || {}),
            (this.decorators = r || {}),
            l.registerDefaultHelpers(this),
            i.registerDefaultDecorators(this);
        }
        d.prototype = {
          constructor: d,
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
        var p = s.default.log;
        (t.log = p), (t.createFrame = o.createFrame), (t.logger = s.default);
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
                  var l = r.partials;
                  r.partials = n.extend({}, l, t.partials);
                  var i = e(o, a);
                  return (r.partials = l), i;
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
            l = void 0,
            i = void 0,
            s = void 0;
          o &&
            ((a = o.start.line),
            (l = o.end.line),
            (i = o.start.column),
            (s = o.end.column),
            (e += " - " + a + ":" + i));
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
              (this.endLineNumber = l),
              Object.defineProperty
                ? (Object.defineProperty(this, "column", {
                    value: i,
                    enumerable: !0,
                  }),
                  Object.defineProperty(this, "endColumn", {
                    value: s,
                    enumerable: !0,
                  }))
                : ((this.column = i), (this.endColumn = s)));
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
              l.default(e),
              i.default(e),
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
          l = n(r(353)),
          i = n(r(355)),
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
              var l = n.createFrame(r.data);
              (l.contextPath = n.appendContextPath(r.data.contextPath, r.name)),
                (r = { data: l });
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
              l = t.inverse,
              i = 0,
              s = "",
              u = void 0,
              c = void 0;
            function d(t, r, a) {
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
                for (var p = e.length; i < p; i++)
                  i in e && d(i, i, i === e.length - 1);
              else if ("function" == typeof Symbol && e[Symbol.iterator]) {
                for (
                  var f = [], h = e[Symbol.iterator](), v = h.next();
                  !v.done;
                  v = h.next()
                )
                  f.push(v.value);
                for (p = (e = f).length; i < p; i++)
                  d(i, i, i === e.length - 1);
              } else
                (r = void 0),
                  Object.keys(e).forEach(function (e) {
                    void 0 !== r && d(r, i - 1), (r = e), i++;
                  }),
                  void 0 !== r && d(r, i - 1, !0);
            return 0 === i && (s = l(this)), s;
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
                      !0 !== l[e] &&
                        ((l[e] = !0),
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
            Object.keys(l).forEach(function (e) {
              delete l[e];
            });
          });
        var n,
          o = r(726),
          a = (n = r(566)) && n.__esModule ? n : { default: n },
          l = Object.create(null);
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
              r = l.COMPILER_REVISION;
            if (
              !(
                t >= l.LAST_COMPATIBLE_COMPILER_REVISION &&
                t <= l.COMPILER_REVISION
              )
            ) {
              if (t < l.LAST_COMPATIBLE_COMPILER_REVISION) {
                var n = l.REVISION_CHANGES[r],
                  o = l.REVISION_CHANGES[t];
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
                invokePartial: function (r, n, l) {
                  l.hash &&
                    ((n = o.extend({}, n, l.hash)), l.ids && (l.ids[0] = !0)),
                    (r = t.VM.resolvePartial.call(this, r, n, l));
                  var i = o.extend({}, l, {
                      hooks: this.hooks,
                      protoAccessControl: this.protoAccessControl,
                    }),
                    s = t.VM.invokePartial.call(this, r, n, i);
                  if (
                    (null == s &&
                      t.compile &&
                      ((l.partials[l.name] = t.compile(
                        r,
                        e.compilerOptions,
                        t,
                      )),
                      (s = l.partials[l.name](n, i))),
                    null != s)
                  ) {
                    if (l.indent) {
                      for (
                        var u = s.split("\n"), c = 0, d = u.length;
                        c < d && (u[c] || c + 1 !== d);
                        c++
                      )
                        u[c] = l.indent + u[c];
                      s = u.join("\n");
                    }
                    return s;
                  }
                  throw new a.default(
                    "The partial " +
                      l.name +
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
                    l = this.fn(e);
                  return (
                    t || o || n || r
                      ? (a = c(this, e, l, t, r, n, o))
                      : a || (a = this.programs[e] = c(this, e, l)),
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
            function d(t) {
              var r =
                  arguments.length <= 1 || void 0 === arguments[1]
                    ? {}
                    : arguments[1],
                o = r.data;
              d._setup(r),
                !r.partial &&
                  e.useData &&
                  (o = (function (e, t) {
                    return (
                      (t && "root" in t) ||
                        ((t = t ? l.createFrame(t) : {}).root = e),
                      t
                    );
                  })(t, o));
              var a = void 0,
                i = e.useBlockParams ? [] : void 0;
              function s(t) {
                return "" + e.main(n, t, n.helpers, n.partials, o, i, a);
              }
              return (
                e.useDepths &&
                  (a = r.depths
                    ? t != r.depths[0]
                      ? [t].concat(r.depths)
                      : r.depths
                    : [t]),
                (s = p(e.main, s, n, r.depths || [], o, i))(t, r)
              );
            }
            return (
              (d.isTop = !0),
              (d._setup = function (a) {
                if (a.partial)
                  (n.protoAccessControl = a.protoAccessControl),
                    (n.helpers = a.helpers),
                    (n.partials = a.partials),
                    (n.decorators = a.decorators),
                    (n.hooks = a.hooks);
                else {
                  var l = o.extend({}, t.helpers, a.helpers);
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
                  })(l, n),
                    (n.helpers = l),
                    e.usePartial &&
                      (n.partials = n.mergeIfNeeded(a.partials, t.partials)),
                    (e.usePartial || e.useDecorators) &&
                      (n.decorators = o.extend({}, t.decorators, a.decorators)),
                    (n.hooks = {}),
                    (n.protoAccessControl = u.createProtoAccessControl(a));
                  var c = a.allowCallsToHelperMissing || r;
                  i.moveHelperToHooks(n, "helperMissing", c),
                    i.moveHelperToHooks(n, "blockHelperMissing", c);
                }
              }),
              (d._child = function (t, r, o, l) {
                if (e.useBlockParams && !o)
                  throw new a.default("must pass block params");
                if (e.useDepths && !l)
                  throw new a.default("must pass parent depths");
                return c(n, t, e[t], r, 0, o, l);
              }),
              d
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
            var i = void 0;
            if (
              (r.fn &&
                r.fn !== d &&
                (function () {
                  r.data = l.createFrame(r.data);
                  var e = r.fn;
                  (i = r.data["partial-block"] =
                    function (t) {
                      var r =
                        arguments.length <= 1 || void 0 === arguments[1]
                          ? {}
                          : arguments[1];
                      return (
                        (r.data = l.createFrame(r.data)),
                        (r.data["partial-block"] = n),
                        e(t, r)
                      );
                    }),
                    e.partials &&
                      (r.partials = o.extend({}, r.partials, e.partials));
                })(),
              void 0 === e && i && (e = i),
              void 0 === e)
            )
              throw new a.default(
                "The partial " + r.name + " could not be found",
              );
            if (e instanceof Function) return e(t, r);
          }),
          (t.noop = d);
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
          l = r(871),
          i = r(277),
          s = r(614),
          u = r(865);
        function c(e, t, r, n, o, a, l) {
          function i(t) {
            var o =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? {}
                  : arguments[1],
              i = l;
            return (
              !l ||
                t == l[0] ||
                (t === e.nullContext && null === l[0]) ||
                (i = [t].concat(l)),
              r(
                e,
                t,
                e.helpers,
                e.partials,
                o.data || n,
                a && [o.blockParams].concat(a),
                i,
              )
            );
          }
          return (
            ((i = p(r, i, e, l, n, a)).program = t),
            (i.depth = l ? l.length : 0),
            (i.blockParams = o || 0),
            i
          );
        }
        function d() {
          return "";
        }
        function p(e, t, r, n, a, l) {
          if (e.decorator) {
            var i = {};
            (t = e.decorator(t, i, r, n && n[0], a, l, n)), o.extend(t, i);
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
          (t.extend = l),
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
            var t = l({}, e);
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
        function l(e) {
          for (var t = 1; t < arguments.length; t++)
            for (var r in arguments[t])
              Object.prototype.hasOwnProperty.call(arguments[t], r) &&
                (e[r] = arguments[t][r]);
          return e;
        }
        var i = Object.prototype.toString;
        t.toString = i;
        var s = function (e) {
          return "function" == typeof e;
        };
        s(/x/) &&
          (t.isFunction = s =
            function (e) {
              return (
                "function" == typeof e && "[object Function]" === i.call(e)
              );
            }),
          (t.isFunction = s);
        var u =
          Array.isArray ||
          function (e) {
            return (
              !(!e || "object" != typeof e) && "[object Array]" === i.call(e)
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
    const e = "https://api.blueberry.adefe.xyz";
    "serviceWorker" in navigator &&
      navigator.serviceWorker
        .register("../public/sw.js", { scope: "/" })
        .then((e) => {
          console.log("Registered", e);
        })
        .catch((e) => {
          console.error("Not registered", e);
        });
    const t = document.getElementById("root"),
      n = r(53),
      o = r(528),
      a = r(781),
      l = { RECIPES_PER_PAGE: 10 },
      i = { currentPage: 0, totalPages: 0, searchQuery: "" };
    function s() {
      (t.innerHTML = ""),
        (function () {
          t.innerHTML += n({ value: i.searchQuery });
          const e = t.querySelector(".searchbar");
          var r;
          t.querySelector(".button-search").addEventListener(
            "click",
            ((r = e.value),
            (e) => {
              console.log(`Running search callback, query: ${r}`),
                (i.searchQuery = r),
                c();
            }),
          );
          const o = t.querySelector(".button-prev-list");
          0 === i.currentPage && (o.disabled = !0),
            o.addEventListener("click", d(i.currentPage, -1));
          const a = t.querySelector(".button-next-list");
          i.currentPage === i.totalPages - 1 && (a.disabled = !0),
            a.addEventListener("click", d(i.currentPage, 1));
        })(),
        c();
    }
    function u(e) {
      (t.innerHTML = ""),
        0 !== e.steps.length
          ? f(e.steps, 0)
          : console.error("Cannot render recipe with zero steps");
    }
    function c() {
      (async function (t = 20, r = 0, n = null) {
        if (0 === t) return { recipes: [] };
        let o = `/recipe/all?count=${t}&offset=${r}`;
        n && "" != n && (o += `&search_query=${n}`), console.log(o, t, r, n);
        try {
          let t = await fetch(e + o, {
              method: "get",
              mode: "cors",
              headers: { "Content-Type": "application/json" },
            }),
            r = await t.json();
          return console.log("Data received", r), r;
        } catch (e) {
          return console.error("Error loading data for", o, "Error:", e), null;
        }
      })(l.RECIPES_PER_PAGE, i.currentPage * l.RECIPES_PER_PAGE, i.searchQuery)
        .then(p)
        .catch((e) => {
          console.error(`Something went wrong fetching recipes, ${e}`);
        });
    }
    function d(e, t) {
      return (r) => {
        console.log(`Running pagination, currentPage: ${e} stride ${t}`),
          e + t >= 0 && e + t < i.totalPages && (e += t),
          c();
      };
    }
    function p(r) {
      console.log(`Running recipe list received callback, total: ${r.total}`),
        (i.totalPages = Math.ceil(r.total / l.RECIPES_PER_PAGE)),
        (t.innerHTML += o(r)),
        t.querySelectorAll(".recipe-container").forEach((t) => {
          t.addEventListener(
            "click",
            (function (t) {
              return (r) => {
                console.log(`Running recipe click callback on recipe: ${t}`);
                const n = t.getAttribute("data-id");
                (async function (t) {
                  const r = `/recipe/${t}`;
                  console.log(r, t);
                  try {
                    let t = await fetch(e + r, {
                        method: "get",
                        mode: "cors",
                        headers: { "Content-Type": "application/json" },
                      }),
                      n = await t.json();
                    return console.log("Data received", n), n;
                  } catch (e) {
                    return (
                      console.error("Error loading data for", r, "Error:", e),
                      null
                    );
                  }
                })(n)
                  .then(u)
                  .catch((e) => {
                    console.error(
                      `Something went wrong fetching recipe #${n}, ${e}`,
                    );
                  });
              };
            })(t),
          );
        });
    }
    function f(e, r) {
      console.log(`Running step ${r} rendering`),
        (t.innerHTML = ""),
        (t.innerHTML = a(e[r]));
      const n = t.querySelector(".timer");
      let o = e[r].duration,
        l = setInterval(
          (function (e, t, r, n) {
            return () => {
              console.log(`Running timer callback, step id: ${n}`),
                (t.innerHTML = (function (e) {
                  if (e <= 0) return "Done!";
                  let t = Math.floor(e / 3600),
                    r = Math.floor((e - 3600 * t) / 60),
                    n = e - 3600 * t - 60 * r;
                  return (
                    t < 10 && (t = "0" + t),
                    r < 10 && (r = "0" + r),
                    n < 10 && (n = "0" + n),
                    `Timer: ${t}:${r}:${n}`
                  );
                })(r)),
                0 === r && n != e.length - 1 && f(e, n + 1),
                --r;
            };
          })(e, n, o, r),
          1e3,
        );
      setTimeout(
        () => {
          clearInterval(l);
        },
        1e3 * (e[r].duration + 2),
      );
      const i = t.querySelector(".button-previous");
      0 === r && (i.disabled = !0),
        i.addEventListener("click", h(-1, e, r, l)),
        t.querySelector(".button-pause").addEventListener(
          "click",
          (function (e, t) {
            return (r) => {
              console.log("Running pause button callback"),
                clearInterval(e),
                (t.innerHTML = "Cook as you feel");
            };
          })(l, n),
        );
      const u = t.querySelector(".button-next");
      r === e.length - 1 && (u.disabled = !0),
        u.addEventListener("click", h(1, e, r, l)),
        t.querySelector(".button-exit").addEventListener(
          "click",
          (function (e) {
            return (t) => {
              console.log("Running exit button callback"),
                clearInterval(e),
                s();
            };
          })(l),
        );
    }
    function h(e, t, r, n) {
      return (o) => {
        console.log(`Running step change button callback for step: ${r}`),
          clearInterval(n),
          f(t, r + e);
      };
    }
    s();
  })();
})();
