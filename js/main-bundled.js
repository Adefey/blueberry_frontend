(() => {
  var e = {
      338: (e) => {
        e.exports = function (e) {
          if (e <= 0) return "Done!";
          let t = Math.floor(e / 3600),
            n = Math.floor((e - 3600 * t) / 60),
            r = e - 3600 * t - 60 * n;
          return (
            t < 10 && (t = "0" + t),
            n < 10 && (n = "0" + n),
            r < 10 && (r = "0" + r),
            `Timer: ${t}:${n}:${r}`
          );
        };
      },
      983: (e, t, n) => {
        var r = n(633);
        e.exports = (r.default || r).template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, r, o) {
            var a,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="action-container flex-row">\n  <button type="button" class="button-login">Log in</button>\n  <button type="button" class="button-register">Register</button>\n  <button type="button" class="button-add">Add recipe</button>\n  <div class="accent-text username">' +
              e.escapeExpression(
                "function" ==
                  typeof (a =
                    null !=
                    (a = l(n, "username") || (null != t ? l(t, "username") : t))
                      ? a
                      : e.hooks.helperMissing)
                  ? a.call(null != t ? t : e.nullContext || {}, {
                      name: "username",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 5, column: 36 },
                        end: { line: 5, column: 48 },
                      },
                    })
                  : a,
              ) +
              "</div>\n</div>"
            );
          },
          useData: !0,
        });
      },
      168: (e, t, n) => {
        var r = n(633);
        e.exports = (r.default || r).template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, r, o) {
            return '<div class="text-info">Write a name, description and provire a picture for the\n  step</div>\n<input type="text" class="" placeholder="Name..." />\n<input type="text" class="" placeholder="Description..." />\n<input type="text" class="" placeholder="Url..." />';
          },
          useData: !0,
        });
      },
      263: (e, t, n) => {
        var r = n(633);
        e.exports = (r.default || r).template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, r, o) {
            return '<div class="add-recipe flex-column">\n  <div class="accent-text">Add a new recipe</div>\n  <div class="text-info">Write a name and a description for your recipe, also\n    you may attach a picture</div>\n  <input type="text" class="" placeholder="Name..." />\n  <input type="text" class="" placeholder="Description..." />\n  <input type="text" class="" placeholder="Url..." />\n  <div class="text-info">Write info for each step</div>\n  <div class="recipe-step-storage"></div>\n  <button type="button" class="button-add-step">add step</button>\n  <button type="button" class="button-add-recipe">add this recipe</button>\n</div>';
          },
          useData: !0,
        });
      },
      995: (e, t, n) => {
        var r = n(633);
        e.exports = (r.default || r).template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, r, o) {
            var a,
              l = null != t ? t : e.nullContext || {},
              i = e.hooks.helperMissing,
              s = "function",
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="credentials-container flex-column">\n  <div class="accent-text">' +
              c(
                typeof (a =
                  null !=
                  (a = u(n, "action") || (null != t ? u(t, "action") : t))
                    ? a
                    : i) === s
                  ? a.call(l, {
                      name: "action",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 2, column: 27 },
                        end: { line: 2, column: 37 },
                      },
                    })
                  : a,
              ) +
              '</div>\n  <div class="text-info">' +
              c(
                typeof (a =
                  null != (a = u(n, "info") || (null != t ? u(t, "info") : t))
                    ? a
                    : i) === s
                  ? a.call(l, {
                      name: "info",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 3, column: 25 },
                        end: { line: 3, column: 33 },
                      },
                    })
                  : a,
              ) +
              '</div>\n  <input type="text" class="login" placeholder="Login..." />\n  <input type="password" class="password" placeholder="Password..." />\n  <button type="button" class="button-submit">' +
              c(
                typeof (a =
                  null !=
                  (a =
                    u(n, "action_button_text") ||
                    (null != t ? u(t, "action_button_text") : t))
                    ? a
                    : i) === s
                  ? a.call(l, {
                      name: "action_button_text",
                      hash: {},
                      data: o,
                      loc: {
                        start: { line: 6, column: 46 },
                        end: { line: 6, column: 68 },
                      },
                    })
                  : a,
              ) +
              "</button>\n</div>"
            );
          },
          useData: !0,
        });
      },
      528: (e, t, n) => {
        var r = n(633);
        e.exports = (r.default || r).template({
          1: function (e, t, n, r, o) {
            var a,
              l = null != t ? t : e.nullContext || {},
              i = e.hooks.helperMissing,
              s = "function",
              c = e.escapeExpression,
              u =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '    <div\n      class="recipe-container adaptive-element-width adaptive-element-height flex-row shadow-border"\n      data-id="' +
              c(
                typeof (a =
                  null != (a = u(n, "id") || (null != t ? u(t, "id") : t))
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
              c(
                typeof (a =
                  null !=
                  (a = u(n, "image_url") || (null != t ? u(t, "image_url") : t))
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
              c(
                typeof (a =
                  null !=
                  (a = u(n, "caption") || (null != t ? u(t, "caption") : t))
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
              c(
                typeof (a =
                  null !=
                  (a = u(n, "caption") || (null != t ? u(t, "caption") : t))
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
              c(
                typeof (a =
                  null !=
                  (a =
                    u(n, "description") ||
                    (null != t ? u(t, "description") : t))
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
          main: function (e, t, n, r, o) {
            var a,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="recipe-list-container flex-row">\n' +
              (null !=
              (a = l(n, "each").call(
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
      781: (e, t, n) => {
        var r = n(633);
        e.exports = (r.default || r).template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, r, o, a) {
            var l,
              i = e.lambda,
              s = e.escapeExpression,
              c =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div\n  class="recipe-step-container recipe-width recipe-height flex-column shadow-border"\n>\n  <div class="step-data">\n    <div class="image-container-step">\n      <img src="' +
              s(i(null != t ? c(t, "image_url") : t, t)) +
              '" alt="' +
              s(i(null != t ? c(t, "caption") : t, t)) +
              '" />\n    </div>\n    <div class="text-container-step flex-column">\n      <div class="recipe-caption">' +
              s(i(null != t ? c(t, "caption") : t, t)) +
              '</div>\n      <div class="recipe-description">' +
              s(i(null != t ? c(t, "description") : t, t)) +
              '</div>\n    </div>\n  </div>\n  <div class="flex-row buttons-bar">\n    <div class="timer shadow-border"><div>' +
              s(
                ((l = n(338)), l && (l.__esModule ? l.default : l)).call(
                  null != t ? t : e.nullContext || {},
                  null != t ? c(t, "duration") : t,
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
      53: (e, t, n) => {
        var r = n(633);
        e.exports = (r.default || r).template({
          compiler: [8, ">= 4.3.0"],
          main: function (e, t, n, r, o) {
            var a,
              l =
                e.lookupProperty ||
                function (e, t) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
                };
            return (
              '<div class="search-container flex-row">\n  <input\n    type="text"\n    class="searchbar"\n    placeholder="Search recipes..."\n    value="' +
              e.escapeExpression(
                "function" ==
                  typeof (a =
                    null !=
                    (a = l(n, "value") || (null != t ? l(t, "value") : t))
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
              '"\n  />\n  <button type="button" class="button-prev-list">Back</button>\n  <button type="button" class="button-next-list">Next</button>\n</div>'
            );
          },
          useData: !0,
        });
      },
      261: (e, t, n) => {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        }
        t.__esModule = !0;
        var a = o(n(871)),
          l = r(n(613)),
          i = r(n(769)),
          s = o(n(849)),
          c = o(n(624)),
          u = r(n(148));
        function d() {
          var e = new a.HandlebarsEnvironment();
          return (
            s.extend(e, a),
            (e.SafeString = l.default),
            (e.Exception = i.default),
            (e.Utils = s),
            (e.escapeExpression = s.escapeExpression),
            (e.VM = c),
            (e.template = function (t) {
              return c.template(t, e);
            }),
            e
          );
        }
        var p = d();
        (p.create = d),
          u.default(p),
          (p.default = p),
          (t.default = p),
          (e.exports = t.default);
      },
      871: (e, t, n) => {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.__esModule = !0), (t.HandlebarsEnvironment = d);
        var o = n(849),
          a = r(n(769)),
          l = n(277),
          i = n(940),
          s = r(n(566)),
          c = n(865);
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
        var u = "[object Object]";
        function d(e, t, n) {
          (this.helpers = e || {}),
            (this.partials = t || {}),
            (this.decorators = n || {}),
            l.registerDefaultHelpers(this),
            i.registerDefaultDecorators(this);
        }
        d.prototype = {
          constructor: d,
          logger: s.default,
          log: s.default.log,
          registerHelper: function (e, t) {
            if (o.toString.call(e) === u) {
              if (t)
                throw new a.default("Arg not supported with multiple helpers");
              o.extend(this.helpers, e);
            } else this.helpers[e] = t;
          },
          unregisterHelper: function (e) {
            delete this.helpers[e];
          },
          registerPartial: function (e, t) {
            if (o.toString.call(e) === u) o.extend(this.partials, e);
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
            if (o.toString.call(e) === u) {
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
            c.resetLoggedProperties();
          },
        };
        var p = s.default.log;
        (t.log = p), (t.createFrame = o.createFrame), (t.logger = s.default);
      },
      940: (e, t, n) => {
        "use strict";
        (t.__esModule = !0),
          (t.registerDefaultDecorators = function (e) {
            o.default(e);
          });
        var r,
          o = (r = n(430)) && r.__esModule ? r : { default: r };
      },
      430: (e, t, n) => {
        "use strict";
        t.__esModule = !0;
        var r = n(849);
        (t.default = function (e) {
          e.registerDecorator("inline", function (e, t, n, o) {
            var a = e;
            return (
              t.partials ||
                ((t.partials = {}),
                (a = function (o, a) {
                  var l = n.partials;
                  n.partials = r.extend({}, l, t.partials);
                  var i = e(o, a);
                  return (n.partials = l), i;
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
        var n = [
          "description",
          "fileName",
          "lineNumber",
          "endLineNumber",
          "message",
          "name",
          "number",
          "stack",
        ];
        function r(e, t) {
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
            var c = Error.prototype.constructor.call(this, e), u = 0;
            u < n.length;
            u++
          )
            this[n[u]] = c[n[u]];
          Error.captureStackTrace && Error.captureStackTrace(this, r);
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
        (r.prototype = new Error()), (t.default = r), (e.exports = t.default);
      },
      277: (e, t, n) => {
        "use strict";
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (t.__esModule = !0),
          (t.registerDefaultHelpers = function (e) {
            o.default(e),
              a.default(e),
              l.default(e),
              i.default(e),
              s.default(e),
              c.default(e),
              u.default(e);
          }),
          (t.moveHelperToHooks = function (e, t, n) {
            e.helpers[t] &&
              ((e.hooks[t] = e.helpers[t]), n || delete e.helpers[t]);
          });
        var o = r(n(97)),
          a = r(n(785)),
          l = r(n(353)),
          i = r(n(355)),
          s = r(n(300)),
          c = r(n(466)),
          u = r(n(908));
      },
      97: (e, t, n) => {
        "use strict";
        t.__esModule = !0;
        var r = n(849);
        (t.default = function (e) {
          e.registerHelper("blockHelperMissing", function (t, n) {
            var o = n.inverse,
              a = n.fn;
            if (!0 === t) return a(this);
            if (!1 === t || null == t) return o(this);
            if (r.isArray(t))
              return t.length > 0
                ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n))
                : o(this);
            if (n.data && n.ids) {
              var l = r.createFrame(n.data);
              (l.contextPath = r.appendContextPath(n.data.contextPath, n.name)),
                (n = { data: l });
            }
            return a(t, n);
          });
        }),
          (e.exports = t.default);
      },
      785: (e, t, n) => {
        "use strict";
        t.__esModule = !0;
        var r,
          o = n(849),
          a = (r = n(769)) && r.__esModule ? r : { default: r };
        (t.default = function (e) {
          e.registerHelper("each", function (e, t) {
            if (!t) throw new a.default("Must pass iterator to #each");
            var n,
              r = t.fn,
              l = t.inverse,
              i = 0,
              s = "",
              c = void 0,
              u = void 0;
            function d(t, n, a) {
              c &&
                ((c.key = t),
                (c.index = n),
                (c.first = 0 === n),
                (c.last = !!a),
                u && (c.contextPath = u + t)),
                (s += r(e[t], {
                  data: c,
                  blockParams: o.blockParams([e[t], t], [u + t, null]),
                }));
            }
            if (
              (t.data &&
                t.ids &&
                (u = o.appendContextPath(t.data.contextPath, t.ids[0]) + "."),
              o.isFunction(e) && (e = e.call(this)),
              t.data && (c = o.createFrame(t.data)),
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
                (n = void 0),
                  Object.keys(e).forEach(function (e) {
                    void 0 !== n && d(n, i - 1), (n = e), i++;
                  }),
                  void 0 !== n && d(n, i - 1, !0);
            return 0 === i && (s = l(this)), s;
          });
        }),
          (e.exports = t.default);
      },
      353: (e, t, n) => {
        "use strict";
        t.__esModule = !0;
        var r,
          o = (r = n(769)) && r.__esModule ? r : { default: r };
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
      355: (e, t, n) => {
        "use strict";
        t.__esModule = !0;
        var r,
          o = n(849),
          a = (r = n(769)) && r.__esModule ? r : { default: r };
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
            e.registerHelper("unless", function (t, n) {
              if (2 != arguments.length)
                throw new a.default("#unless requires exactly one argument");
              return e.helpers.if.call(this, t, {
                fn: n.inverse,
                inverse: n.fn,
                hash: n.hash,
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
                var t = [void 0], n = arguments[arguments.length - 1], r = 0;
                r < arguments.length - 1;
                r++
              )
                t.push(arguments[r]);
              var o = 1;
              null != n.hash.level
                ? (o = n.hash.level)
                : n.data && null != n.data.level && (o = n.data.level),
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
            e.registerHelper("lookup", function (e, t, n) {
              return e ? n.lookupProperty(e, t) : e;
            });
          }),
          (e.exports = t.default);
      },
      908: (e, t, n) => {
        "use strict";
        t.__esModule = !0;
        var r,
          o = n(849),
          a = (r = n(769)) && r.__esModule ? r : { default: r };
        (t.default = function (e) {
          e.registerHelper("with", function (e, t) {
            if (2 != arguments.length)
              throw new a.default("#with requires exactly one argument");
            o.isFunction(e) && (e = e.call(this));
            var n = t.fn;
            if (o.isEmpty(e)) return t.inverse(this);
            var r = t.data;
            return (
              t.data &&
                t.ids &&
                ((r = o.createFrame(t.data)).contextPath = o.appendContextPath(
                  t.data.contextPath,
                  t.ids[0],
                )),
              n(e, {
                data: r,
                blockParams: o.blockParams([e], [r && r.contextPath]),
              })
            );
          });
        }),
          (e.exports = t.default);
      },
      726: (e, t, n) => {
        "use strict";
        (t.__esModule = !0),
          (t.createNewLookupObject = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return r.extend.apply(void 0, [Object.create(null)].concat(t));
          });
        var r = n(849);
      },
      865: (e, t, n) => {
        "use strict";
        (t.__esModule = !0),
          (t.createProtoAccessControl = function (e) {
            var t = Object.create(null);
            (t.constructor = !1),
              (t.__defineGetter__ = !1),
              (t.__defineSetter__ = !1),
              (t.__lookupGetter__ = !1);
            var n = Object.create(null);
            return (
              (n.__proto__ = !1),
              {
                properties: {
                  whitelist: o.createNewLookupObject(
                    n,
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
          (t.resultIsAllowed = function (e, t, n) {
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
            })("function" == typeof e ? t.methods : t.properties, n);
          }),
          (t.resetLoggedProperties = function () {
            Object.keys(l).forEach(function (e) {
              delete l[e];
            });
          });
        var r,
          o = n(726),
          a = (r = n(566)) && r.__esModule ? r : { default: r },
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
      566: (e, t, n) => {
        "use strict";
        t.__esModule = !0;
        var r = n(849),
          o = {
            methodMap: ["debug", "info", "warn", "error"],
            level: "info",
            lookupLevel: function (e) {
              if ("string" == typeof e) {
                var t = r.indexOf(o.methodMap, e.toLowerCase());
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
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1;
                  a < n;
                  a++
                )
                  r[a - 1] = arguments[a];
                console[t].apply(console, r);
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
      624: (e, t, n) => {
        "use strict";
        (t.__esModule = !0),
          (t.checkRevision = function (e) {
            var t = (e && e[0]) || 1,
              n = l.COMPILER_REVISION;
            if (
              !(
                t >= l.LAST_COMPATIBLE_COMPILER_REVISION &&
                t <= l.COMPILER_REVISION
              )
            ) {
              if (t < l.LAST_COMPATIBLE_COMPILER_REVISION) {
                var r = l.REVISION_CHANGES[n],
                  o = l.REVISION_CHANGES[t];
                throw new a.default(
                  "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                    r +
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
            var n = e.compiler && 7 === e.compiler[0],
              r = {
                strict: function (e, t, n) {
                  if (!e || !(t in e))
                    throw new a.default('"' + t + '" not defined in ' + e, {
                      loc: n,
                    });
                  return r.lookupProperty(e, t);
                },
                lookupProperty: function (e, t) {
                  var n = e[t];
                  return null == n ||
                    Object.prototype.hasOwnProperty.call(e, t) ||
                    c.resultIsAllowed(n, r.protoAccessControl, t)
                    ? n
                    : void 0;
                },
                lookup: function (e, t) {
                  for (var n = e.length, o = 0; o < n; o++)
                    if (null != (e[o] && r.lookupProperty(e[o], t)))
                      return e[o][t];
                },
                lambda: function (e, t) {
                  return "function" == typeof e ? e.call(t) : e;
                },
                escapeExpression: o.escapeExpression,
                invokePartial: function (n, r, l) {
                  l.hash &&
                    ((r = o.extend({}, r, l.hash)), l.ids && (l.ids[0] = !0)),
                    (n = t.VM.resolvePartial.call(this, n, r, l));
                  var i = o.extend({}, l, {
                      hooks: this.hooks,
                      protoAccessControl: this.protoAccessControl,
                    }),
                    s = t.VM.invokePartial.call(this, n, r, i);
                  if (
                    (null == s &&
                      t.compile &&
                      ((l.partials[l.name] = t.compile(
                        n,
                        e.compilerOptions,
                        t,
                      )),
                      (s = l.partials[l.name](r, i))),
                    null != s)
                  ) {
                    if (l.indent) {
                      for (
                        var c = s.split("\n"), u = 0, d = c.length;
                        u < d && (c[u] || u + 1 !== d);
                        u++
                      )
                        c[u] = l.indent + c[u];
                      s = c.join("\n");
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
                  var n = e[t];
                  return (n.decorator = e[t + "_d"]), n;
                },
                programs: [],
                program: function (e, t, n, r, o) {
                  var a = this.programs[e],
                    l = this.fn(e);
                  return (
                    t || o || r || n
                      ? (a = u(this, e, l, t, n, r, o))
                      : a || (a = this.programs[e] = u(this, e, l)),
                    a
                  );
                },
                data: function (e, t) {
                  for (; e && t--; ) e = e._parent;
                  return e;
                },
                mergeIfNeeded: function (e, t) {
                  var n = e || t;
                  return e && t && e !== t && (n = o.extend({}, t, e)), n;
                },
                nullContext: Object.seal({}),
                noop: t.VM.noop,
                compilerInfo: e.compiler,
              };
            function d(t) {
              var n =
                  arguments.length <= 1 || void 0 === arguments[1]
                    ? {}
                    : arguments[1],
                o = n.data;
              d._setup(n),
                !n.partial &&
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
                return "" + e.main(r, t, r.helpers, r.partials, o, i, a);
              }
              return (
                e.useDepths &&
                  (a = n.depths
                    ? t != n.depths[0]
                      ? [t].concat(n.depths)
                      : n.depths
                    : [t]),
                (s = p(e.main, s, r, n.depths || [], o, i))(t, n)
              );
            }
            return (
              (d.isTop = !0),
              (d._setup = function (a) {
                if (a.partial)
                  (r.protoAccessControl = a.protoAccessControl),
                    (r.helpers = a.helpers),
                    (r.partials = a.partials),
                    (r.decorators = a.decorators),
                    (r.hooks = a.hooks);
                else {
                  var l = o.extend({}, t.helpers, a.helpers);
                  !(function (e, t) {
                    Object.keys(e).forEach(function (n) {
                      var r = e[n];
                      e[n] = (function (e, t) {
                        var n = t.lookupProperty;
                        return s.wrapHelper(e, function (e) {
                          return o.extend({ lookupProperty: n }, e);
                        });
                      })(r, t);
                    });
                  })(l, r),
                    (r.helpers = l),
                    e.usePartial &&
                      (r.partials = r.mergeIfNeeded(a.partials, t.partials)),
                    (e.usePartial || e.useDecorators) &&
                      (r.decorators = o.extend({}, t.decorators, a.decorators)),
                    (r.hooks = {}),
                    (r.protoAccessControl = c.createProtoAccessControl(a));
                  var u = a.allowCallsToHelperMissing || n;
                  i.moveHelperToHooks(r, "helperMissing", u),
                    i.moveHelperToHooks(r, "blockHelperMissing", u);
                }
              }),
              (d._child = function (t, n, o, l) {
                if (e.useBlockParams && !o)
                  throw new a.default("must pass block params");
                if (e.useDepths && !l)
                  throw new a.default("must pass parent depths");
                return u(r, t, e[t], n, 0, o, l);
              }),
              d
            );
          }),
          (t.wrapProgram = u),
          (t.resolvePartial = function (e, t, n) {
            return (
              e
                ? e.call || n.name || ((n.name = e), (e = n.partials[e]))
                : (e =
                    "@partial-block" === n.name
                      ? n.data["partial-block"]
                      : n.partials[n.name]),
              e
            );
          }),
          (t.invokePartial = function (e, t, n) {
            var r = n.data && n.data["partial-block"];
            (n.partial = !0),
              n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
            var i = void 0;
            if (
              (n.fn &&
                n.fn !== d &&
                (function () {
                  n.data = l.createFrame(n.data);
                  var e = n.fn;
                  (i = n.data["partial-block"] =
                    function (t) {
                      var n =
                        arguments.length <= 1 || void 0 === arguments[1]
                          ? {}
                          : arguments[1];
                      return (
                        (n.data = l.createFrame(n.data)),
                        (n.data["partial-block"] = r),
                        e(t, n)
                      );
                    }),
                    e.partials &&
                      (n.partials = o.extend({}, n.partials, e.partials));
                })(),
              void 0 === e && i && (e = i),
              void 0 === e)
            )
              throw new a.default(
                "The partial " + n.name + " could not be found",
              );
            if (e instanceof Function) return e(t, n);
          }),
          (t.noop = d);
        var r,
          o = (function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(n(849)),
          a = (r = n(769)) && r.__esModule ? r : { default: r },
          l = n(871),
          i = n(277),
          s = n(614),
          c = n(865);
        function u(e, t, n, r, o, a, l) {
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
              n(
                e,
                t,
                e.helpers,
                e.partials,
                o.data || r,
                a && [o.blockParams].concat(a),
                i,
              )
            );
          }
          return (
            ((i = p(n, i, e, l, r, a)).program = t),
            (i.depth = l ? l.length : 0),
            (i.blockParams = o || 0),
            i
          );
        }
        function d() {
          return "";
        }
        function p(e, t, n, r, a, l) {
          if (e.decorator) {
            var i = {};
            (t = e.decorator(t, i, n, r && r[0], a, l, r)), o.extend(t, i);
          }
          return t;
        }
      },
      613: (e, t) => {
        "use strict";
        function n(e) {
          this.string = e;
        }
        (t.__esModule = !0),
          (n.prototype.toString = n.prototype.toHTML =
            function () {
              return "" + this.string;
            }),
          (t.default = n),
          (e.exports = t.default);
      },
      849: (e, t) => {
        "use strict";
        (t.__esModule = !0),
          (t.extend = l),
          (t.indexOf = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          }),
          (t.escapeExpression = function (e) {
            if ("string" != typeof e) {
              if (e && e.toHTML) return e.toHTML();
              if (null == e) return "";
              if (!e) return e + "";
              e = "" + e;
            }
            return o.test(e) ? e.replace(r, a) : e;
          }),
          (t.isEmpty = function (e) {
            return (!e && 0 !== e) || !(!c(e) || 0 !== e.length);
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
        var n = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;",
            "=": "&#x3D;",
          },
          r = /[&<>"'`=]/g,
          o = /[&<>"'`=]/;
        function a(e) {
          return n[e];
        }
        function l(e) {
          for (var t = 1; t < arguments.length; t++)
            for (var n in arguments[t])
              Object.prototype.hasOwnProperty.call(arguments[t], n) &&
                (e[n] = arguments[t][n]);
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
        var c =
          Array.isArray ||
          function (e) {
            return (
              !(!e || "object" != typeof e) && "[object Array]" === i.call(e)
            );
          };
        t.isArray = c;
      },
      633: (e, t, n) => {
        e.exports = n(261).default;
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
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
      r = n(983),
      o = n(53),
      a = n(528),
      l = n(781),
      i = n(995),
      s = n(263),
      c = n(168),
      u = { RECIPES_PER_PAGE: 10 },
      d = {
        currentPage: 0,
        totalPages: 0,
        searchQuery: "",
        loggedId: !1,
        username: "Anonymous User",
      };
    function p() {
      (t.innerHTML = ""),
        (function () {
          console.log("cookies:", document.cookie);
          let e = {};
          document.cookie.split(";").forEach((t) => {
            let [n, r] = t.split("=");
            e[n.trim()] = r;
          }),
            console.log("Parsed cookie", e),
            e["blueberry-user"]
              ? (console.log("Keep logged in, user:", e["blueberry-user"]),
                (d.loggedId = !0),
                (d.username = e["blueberry-user"]))
              : console.log("Not logged in");
        })(),
        t.insertAdjacentHTML("beforeend", r({ username: d.username })),
        t.querySelector(".button-login").addEventListener("click", v),
        t.querySelector(".button-register").addEventListener("click", g),
        t.querySelector(".button-add").addEventListener("click", h),
        (function () {
          const e = t.querySelector(".button-login"),
            n = t.querySelector(".button-register"),
            r = t.querySelector(".button-add"),
            o = t.querySelector(".username");
          d.loggedId
            ? ((e.disabled = !0),
              (n.disabled = !0),
              (r.disabled = !1),
              (o.innerHTML = d.username))
            : ((e.disabled = !1),
              (n.disabled = !1),
              (r.disabled = !0),
              (o.innerHTML = "Guest"));
        })(),
        (function () {
          t.insertAdjacentHTML("beforeend", o({ value: d.searchQuery }));
          const e = t.querySelector(".searchbar");
          var n;
          e.addEventListener(
            "change",
            ((n = e),
            (e) => {
              let t = n.value;
              console.log(`Running search callback, query: ${t}`),
                (d.searchQuery = t),
                p();
            }),
          ),
            t
              .querySelector(".button-prev-list")
              .addEventListener("click", b(d.currentPage, -1)),
            t
              .querySelector(".button-next-list")
              .addEventListener("click", b(d.currentPage, 1));
        })(),
        m();
    }
    function f(e) {
      (t.innerHTML = ""),
        0 !== e.steps.length
          ? _(e.steps, 0)
          : console.error("Cannot render recipe with zero steps");
    }
    function h() {
      (t.innerHTML = ""),
        t.insertAdjacentHTML("beforeend", s()),
        t.querySelector(".button-add-step").addEventListener("click", (e) => {
          t.querySelector(".recipe-step-storage").insertAdjacentHTML(
            "beforeend",
            c(),
          );
        });
    }
    function v() {
      (t.innerHTML = ""),
        t.insertAdjacentHTML(
          "beforeend",
          i({
            action: "Login",
            info: "Log into your account to add recipes",
            action_button_text: "login",
          }),
        );
      let n = t.querySelector(".login"),
        r = t.querySelector(".password"),
        o = t.querySelector(".text-info");
      t.querySelector(".button-submit").addEventListener(
        "click",
        (function (t, n, r) {
          return (o) => {
            (async function (t, n) {
              const r = "/user/login";
              console.log(r);
              try {
                let o = (
                  await fetch(e + r, {
                    method: "post",
                    mode: "cors",
                    credentials: "include",
                    body: JSON.stringify({ login: t, password: n }),
                    headers: { "Content-Type": "application/json" },
                  })
                ).status;
                return console.log("Data received, status", o), o;
              } catch (e) {
                return (
                  console.error("Error loading data for", r, "Error:", e), null
                );
              }
            })(t.value, n.value).then((e) => {
              200 === e
                ? (console.log("Login success"), p())
                : (console.log("Login fail"),
                  (r.innerHTML = "Login data is incorrect!"));
            });
          };
        })(n, r, o),
      );
    }
    function g() {
      (t.innerHTML = ""),
        t.insertAdjacentHTML(
          "beforeend",
          i({
            action: "Register",
            info: "Create an account to be able to add recipes",
            action_button_text: "register",
          }),
        );
      let n = t.querySelector(".login"),
        r = t.querySelector(".password"),
        o = t.querySelector(".text-info");
      t.querySelector(".button-submit").addEventListener(
        "click",
        (function (t, n, r) {
          return (o) => {
            (async function (t, n) {
              const r = "/user/register";
              console.log(r);
              try {
                let o = (
                  await fetch(e + r, {
                    method: "post",
                    mode: "cors",
                    credentials: "include",
                    body: JSON.stringify({ login: t, password: n }),
                    headers: { "Content-Type": "application/json" },
                  })
                ).status;
                return console.log("Data received, status", o), o;
              } catch (e) {
                return (
                  console.error("Error loading data for", r, "Error:", e), null
                );
              }
            })(t.value, n.value).then((e) => {
              200 === e
                ? (console.log("Register success"), p())
                : (console.log("Register fail"),
                  (r.innerHTML =
                    "Register data is incorrect or login is taken!"));
            });
          };
        })(n, r, o),
      );
    }
    function m() {
      (async function (t = 20, n = 0, r = null) {
        if (0 === t) return { recipes: [] };
        let o = `/recipe/all?count=${t}&offset=${n}`;
        r && "" != r && (o += `&search_query=${r}`), console.log(o, t, n, r);
        try {
          let t = await fetch(e + o, {
              method: "get",
              mode: "cors",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
            }),
            n = await t.json();
          return console.log("Data received", n), n;
        } catch (e) {
          return console.error("Error loading data for", o, "Error:", e), null;
        }
      })(u.RECIPES_PER_PAGE, d.currentPage * u.RECIPES_PER_PAGE, d.searchQuery)
        .then(y)
        .catch((e) => {
          console.error(`Something went wrong fetching recipes, ${e}`);
        });
    }
    function b(e, t) {
      return (n) => {
        console.log(`Running pagination, currentPage: ${e} stride ${t}`),
          e + t >= 0 && e + t < d.totalPages && (e += t),
          m();
      };
    }
    function y(n) {
      console.log(`Running recipe list received callback, total: ${n.total}`),
        (d.totalPages = Math.ceil(n.total / u.RECIPES_PER_PAGE)),
        t.insertAdjacentHTML("beforeend", a(n)),
        t.querySelectorAll(".recipe-container").forEach((t) => {
          t.addEventListener(
            "click",
            (function (t) {
              return (n) => {
                console.log(`Running recipe click callback on recipe: ${t}`);
                const r = t.getAttribute("data-id");
                (async function (t) {
                  const n = `/recipe/${t}`;
                  console.log(n, t);
                  try {
                    let t = await fetch(e + n, {
                        method: "get",
                        mode: "cors",
                        credentials: "include",
                        headers: { "Content-Type": "application/json" },
                      }),
                      r = await t.json();
                    return console.log("Data received", r), r;
                  } catch (e) {
                    return (
                      console.error("Error loading data for", n, "Error:", e),
                      null
                    );
                  }
                })(r)
                  .then(f)
                  .catch((e) => {
                    console.error(
                      `Something went wrong fetching recipe #${r}, ${e}`,
                    );
                  });
              };
            })(t),
          );
        }),
        (function () {
          const e = t.querySelector(".button-prev-list");
          0 === d.currentPage && (e.disabled = !0);
          const n = t.querySelector(".button-next-list");
          d.currentPage === d.totalPages - 1 && (n.disabled = !0);
        })();
    }
    function _(e, n) {
      console.log(`Running step ${n} rendering`),
        (t.innerHTML = ""),
        (t.innerHTML = l(e[n]));
      const r = t.querySelector(".timer");
      let o = e[n].duration,
        a = setInterval(
          (function (e, t, n, r) {
            return () => {
              console.log(`Running timer callback, step id: ${r}`),
                (t.innerHTML = (function (e) {
                  if (e <= 0) return "Done!";
                  let t = Math.floor(e / 3600),
                    n = Math.floor((e - 3600 * t) / 60),
                    r = e - 3600 * t - 60 * n;
                  return (
                    t < 10 && (t = "0" + t),
                    n < 10 && (n = "0" + n),
                    r < 10 && (r = "0" + r),
                    `Timer: ${t}:${n}:${r}`
                  );
                })(n)),
                0 === n && r != e.length - 1 && _(e, r + 1),
                --n;
            };
          })(e, r, o, n),
          1e3,
        );
      setTimeout(
        () => {
          clearInterval(a);
        },
        1e3 * (e[n].duration + 2),
      );
      const i = t.querySelector(".button-previous");
      0 === n && (i.disabled = !0),
        i.addEventListener("click", x(-1, e, n, a)),
        t.querySelector(".button-pause").addEventListener(
          "click",
          (function (e, t) {
            return (n) => {
              console.log("Running pause button callback"),
                clearInterval(e),
                (t.innerHTML = "Cook as you feel");
            };
          })(a, r),
        );
      const s = t.querySelector(".button-next");
      n === e.length - 1 && (s.disabled = !0),
        s.addEventListener("click", x(1, e, n, a)),
        t.querySelector(".button-exit").addEventListener(
          "click",
          (function (e) {
            return (t) => {
              console.log("Running exit button callback"),
                clearInterval(e),
                p();
            };
          })(a),
        );
    }
    function x(e, t, n, r) {
      return (o) => {
        console.log(`Running step change button callback for step: ${n}`),
          clearInterval(r),
          _(t, n + e);
      };
    }
    p();
  })();
})();
