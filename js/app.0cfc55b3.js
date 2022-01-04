(function (t) { function e(e) { for (var r, o, i = e[0], u = e[1], c = e[2], p = 0, f = []; p < i.length; p++)o = i[p], Object.prototype.hasOwnProperty.call(s, o) && s[o] && f.push(s[o][0]), s[o] = 0; for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]); l && l(e); while (f.length) f.shift()(); return a.push.apply(a, c || []), n() } function n() { for (var t, e = 0; e < a.length; e++) { for (var n = a[e], r = !0, i = 1; i < n.length; i++) { var u = n[i]; 0 !== s[u] && (r = !1) } r && (a.splice(e--, 1), t = o(o.s = n[0])) } return t } var r = {}, s = { app: 0 }, a = []; function o(e) { if (r[e]) return r[e].exports; var n = r[e] = { i: e, l: !1, exports: {} }; return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports } o.m = t, o.c = r, o.d = function (t, e, n) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, o.r = function (t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function (t, e) { if (1 & e && (t = o(t)), 8 & e) return t; if (4 & e && "object" === typeof t && t && t.__esModule) return t; var n = Object.create(null); if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var r in t) o.d(n, r, function (e) { return t[e] }.bind(null, r)); return n }, o.n = function (t) { var e = t && t.__esModule ? function () { return t["default"] } : function () { return t }; return o.d(e, "a", e), e }, o.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "/vue-todo-app/"; var i = window["webpackJsonp"] = window["webpackJsonp"] || [], u = i.push.bind(i); i.push = e, i = i.slice(); for (var c = 0; c < i.length; c++)e(i[c]); var l = u; a.push([0, "chunk-vendors"]), n() })({ 0: function (t, e, n) { t.exports = n("56d7") }, "034f": function (t, e, n) { "use strict"; n("85ec") }, "0a98": function (t, e, n) { "use strict"; n("2bf8") }, "1f80": function (t, e, n) { "use strict"; n("3276") }, "2bf8": function (t, e, n) { }, 3276: function (t, e, n) { }, "47bd": function (t, e, n) { "use strict"; n("8841") }, "56d7": function (t, e, n) { "use strict"; n.r(e); n("e260"), n("e6cf"), n("cca6"), n("a79d"); var r = n("2b0e"), s = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { attrs: { id: "app" } }, [n("nav", [n("router-link", { attrs: { to: "/" } }, [t._v("Home")]), n("router-link", { attrs: { to: "/about" } }, [t._v("About")])], 1), n("router-view")], 1) }, a = [], o = {}, i = o, u = (n("034f"), n("2877")), c = Object(u["a"])(i, s, a, !1, null, null, null), l = c.exports, p = n("8c4f"), f = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { attrs: { id: "todo-app" } }, [n("h1", [t._v("To-Do List")]), n("new-task", { attrs: { tasks: t.tasks }, on: { addTaskEvent: t.addTask } }), n("Tasks", { attrs: { tasks: t.tasks }, on: { persistEvent: t.persistTask } })], 1) }, d = [], v = (n("e9c4"), function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { staticClass: "tasks" }, [n("ul", t._l(t.tasks, (function (e, r) { return n("li", { key: e.name }, [n("Task", { attrs: { task: e }, on: { removeEvent: function (e) { return t.removeTask(r) }, pendingEvent: function (e) { return t.togglePending(r) } } })], 1) })), 0)]) }), m = [], k = (n("a434"), function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { staticClass: "task" }, [n("p", [t._v(t._s(t.task.name))]), n("a", { attrs: { type: "button" }, on: { click: t.removeEvent } }, [t._v("x")]), n("input", { attrs: { type: "checkbox" }, domProps: { checked: !t.task.pending }, on: { click: t.pendingEvent } })]) }), h = [], b = { props: { task: { required: !0, type: Object } }, methods: { removeEvent: function () { this.$emit("removeEvent", this.task) }, pendingEvent: function () { this.$emit("pendingEvent", this.task) } } }, g = b, y = (n("1f80"), Object(u["a"])(g, k, h, !1, null, "4e9b2ed5", null)), _ = y.exports, E = { props: { tasks: { type: Array, required: !0 } }, components: { Task: _ }, methods: { removeTask: function (t) { this.tasks.splice(t, 1), this.persistEvent() }, togglePending: function (t) { this.tasks[t]["pending"] = !this.tasks[t]["pending"], this.persistEvent() }, persistEvent: function () { this.$emit("persistEvent", this.tasks) } } }, T = E, O = (n("0a98"), Object(u["a"])(T, v, m, !1, null, "46111786", null)), x = O.exports, w = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("form", [n("input", { directives: [{ name: "model", rawName: "v-model", value: t.name, expression: "name" }], attrs: { type: "text", placeholder: "digite uma tarefa" }, domProps: { value: t.name }, on: { keydown: function (e) { return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.updateTasksEvent.apply(null, arguments)) }, input: function (e) { e.target.composing || (t.name = e.target.value) } } }), n("button", { attrs: { type: "button" }, on: { click: t.updateTasksEvent } }, [t._v("+")])]) }, j = [], $ = (n("b0c0"), { data: function () { return { name: "" } }, props: { tasks: { type: Array, required: !0 } }, methods: { updateTasksEvent: function () { this.$emit("addTaskEvent", this.name), this.name = "" } } }), P = $, S = Object(u["a"])(P, w, j, !1, null, "6377c6aa", null), I = S.exports, J = { data: function () { return { tasks: [] } }, components: { Tasks: x, NewTask: I }, mounted: function () { if (localStorage.getItem("tasks")) try { this.tasks = JSON.parse(localStorage.getItem("tasks")) } catch (t) { localStorage.removeItem("tasks") } }, methods: { addTask: function (t) { t && (this.tasks.push({ name: t, pending: !0 }), this.persistTask()) }, persistTask: function () { var t = JSON.stringify(this.tasks); localStorage.setItem("tasks", t) } } }, M = J, N = (n("47bd"), Object(u["a"])(M, f, d, !1, null, null, null)), q = N.exports, A = function () { var t = this, e = t.$createElement; t._self._c; return t._m(0) }, C = [function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { attrs: { id: "about" } }, [n("h1", [t._v("This is a vue-router example")]), n("p", [t._v("Hello World...")])]) }], D = {}, H = D, L = (n("b8ab"), Object(u["a"])(H, A, C, !1, null, null, null)), W = L.exports; r["a"].use(p["a"]); var z = new p["a"]({ routes: [{ name: "home", path: "/", component: q }, { name: "about", path: "/about", component: W }] }); r["a"].config.productionTip = !1, new r["a"]({ router: z, render: function (t) { return t(l) } }).$mount("#app") }, "85ec": function (t, e, n) { }, 8841: function (t, e, n) { }, "98e0": function (t, e, n) { }, b8ab: function (t, e, n) { "use strict"; n("98e0") } });
//# sourceMappingURL=app.0cfc55b3.js.map