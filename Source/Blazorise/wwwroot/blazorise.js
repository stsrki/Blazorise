// ========================================
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {}) }(this, (function (e) { function t(e) { return { width: (e = e.getBoundingClientRect()).width, height: e.height, top: e.top, right: e.right, bottom: e.bottom, left: e.left, x: e.left, y: e.top } } function n(e) { return null == e ? window : "[object Window]" !== e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e } function o(e) { return { scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset } } function r(e) { return e instanceof n(e).Element || e instanceof Element } function i(e) { return e instanceof n(e).HTMLElement || e instanceof HTMLElement } function a(e) { return "undefined" != typeof ShadowRoot && (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot) } function s(e) { return e ? (e.nodeName || "").toLowerCase() : null } function f(e) { return ((r(e) ? e.ownerDocument : e.document) || window.document).documentElement } function p(e) { return t(f(e)).left + o(e).scrollLeft } function c(e) { return n(e).getComputedStyle(e) } function l(e) { return e = c(e), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX) } function u(e, r, a) { void 0 === a && (a = !1); var c = f(r); e = t(e); var u = i(r), d = { scrollLeft: 0, scrollTop: 0 }, m = { x: 0, y: 0 }; return (u || !u && !a) && (("body" !== s(r) || l(c)) && (d = r !== n(r) && i(r) ? { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop } : o(r)), i(r) ? ((m = t(r)).x += r.clientLeft, m.y += r.clientTop) : c && (m.x = p(c))), { x: e.left + d.scrollLeft - m.x, y: e.top + d.scrollTop - m.y, width: e.width, height: e.height } } function d(e) { var n = t(e), o = e.offsetWidth, r = e.offsetHeight; return 1 >= Math.abs(n.width - o) && (o = n.width), 1 >= Math.abs(n.height - r) && (r = n.height), { x: e.offsetLeft, y: e.offsetTop, width: o, height: r } } function m(e) { return "html" === s(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || f(e) } function h(e) { return 0 <= ["html", "body", "#document"].indexOf(s(e)) ? e.ownerDocument.body : i(e) && l(e) ? e : h(m(e)) } function v(e, t) { var o; void 0 === t && (t = []); var r = h(e); return e = r === (null == (o = e.ownerDocument) ? void 0 : o.body), o = n(r), r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r, t = t.concat(r), e ? t : t.concat(v(m(r))) } function g(e) { return i(e) && "fixed" !== c(e).position ? e.offsetParent : null } function y(e) { for (var t = n(e), o = g(e); o && 0 <= ["table", "td", "th"].indexOf(s(o)) && "static" === c(o).position;)o = g(o); if (o && ("html" === s(o) || "body" === s(o) && "static" === c(o).position)) return t; if (!o) e: { for (o = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), e = m(e); i(e) && 0 > ["html", "body"].indexOf(s(e));) { var r = c(e); if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || o && "filter" === r.willChange || o && r.filter && "none" !== r.filter) { o = e; break e } e = e.parentNode } o = null } return o || t } function b(e) { function t(e) { o.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) { o.has(e) || (e = n.get(e)) && t(e) })), r.push(e) } var n = new Map, o = new Set, r = []; return e.forEach((function (e) { n.set(e.name, e) })), e.forEach((function (e) { o.has(e.name) || t(e) })), r } function w(e) { var t; return function () { return t || (t = new Promise((function (n) { Promise.resolve().then((function () { t = void 0, n(e()) })) }))), t } } function x(e) { return e.split("-")[0] } function O(e, t) { var n = t.getRootNode && t.getRootNode(); if (e.contains(t)) return !0; if (n && a(n)) do { if (t && e.isSameNode(t)) return !0; t = t.parentNode || t.host } while (t); return !1 } function j(e) { return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }) } function E(e, r) { if ("viewport" === r) { r = n(e); var a = f(e); r = r.visualViewport; var s = a.clientWidth; a = a.clientHeight; var l = 0, u = 0; r && (s = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = r.offsetLeft, u = r.offsetTop)), e = j(e = { width: s, height: a, x: l + p(e), y: u }) } else i(r) ? ((e = t(r)).top += r.clientTop, e.left += r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top) : (u = f(e), e = f(u), s = o(u), r = null == (a = u.ownerDocument) ? void 0 : a.body, a = _(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), l = _(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), u = -s.scrollLeft + p(u), s = -s.scrollTop, "rtl" === c(r || e).direction && (u += _(e.clientWidth, r ? r.clientWidth : 0) - a), e = j({ width: a, height: l, x: u, y: s })); return e } function D(e, t, n) { return t = "clippingParents" === t ? function (e) { var t = v(m(e)), n = 0 <= ["absolute", "fixed"].indexOf(c(e).position) && i(e) ? y(e) : e; return r(n) ? t.filter((function (e) { return r(e) && O(e, n) && "body" !== s(e) })) : [] }(e) : [].concat(t), (n = (n = [].concat(t, [n])).reduce((function (t, n) { return n = E(e, n), t.top = _(n.top, t.top), t.right = U(n.right, t.right), t.bottom = U(n.bottom, t.bottom), t.left = _(n.left, t.left), t }), E(e, n[0]))).width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n } function L(e) { return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y" } function P(e) { var t = e.reference, n = e.element, o = (e = e.placement) ? x(e) : null; e = e ? e.split("-")[1] : null; var r = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2; switch (o) { case "top": r = { x: r, y: t.y - n.height }; break; case "bottom": r = { x: r, y: t.y + t.height }; break; case "right": r = { x: t.x + t.width, y: i }; break; case "left": r = { x: t.x - n.width, y: i }; break; default: r = { x: t.x, y: t.y } }if (null != (o = o ? L(o) : null)) switch (i = "y" === o ? "height" : "width", e) { case "start": r[o] -= t[i] / 2 - n[i] / 2; break; case "end": r[o] += t[i] / 2 - n[i] / 2 }return r } function M(e) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e) } function k(e, t) { return t.reduce((function (t, n) { return t[n] = e, t }), {}) } function W(e, n) { void 0 === n && (n = {}); var o = n; n = void 0 === (n = o.placement) ? e.placement : n; var i = o.boundary, a = void 0 === i ? "clippingParents" : i, s = void 0 === (i = o.rootBoundary) ? "viewport" : i; i = void 0 === (i = o.elementContext) ? "popper" : i; var p = o.altBoundary, c = void 0 !== p && p; o = M("number" != typeof (o = void 0 === (o = o.padding) ? 0 : o) ? o : k(o, C)); var l = e.elements.reference; p = e.rects.popper, a = D(r(c = e.elements[c ? "popper" === i ? "reference" : "popper" : i]) ? c : c.contextElement || f(e.elements.popper), a, s), c = P({ reference: s = t(l), element: p, strategy: "absolute", placement: n }), p = j(Object.assign({}, p, c)), s = "popper" === i ? p : s; var u = { top: a.top - s.top + o.top, bottom: s.bottom - a.bottom + o.bottom, left: a.left - s.left + o.left, right: s.right - a.right + o.right }; if (e = e.modifiersData.offset, "popper" === i && e) { var d = e[n]; Object.keys(u).forEach((function (e) { var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1, n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x"; u[e] += d[n] * t })) } return u } function A() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return !t.some((function (e) { return !(e && "function" == typeof e.getBoundingClientRect) })) } function B(e) { void 0 === e && (e = {}); var t = e.defaultModifiers, n = void 0 === t ? [] : t, o = void 0 === (e = e.defaultOptions) ? F : e; return function (e, t, i) { function a() { f.forEach((function (e) { return e() })), f = [] } void 0 === i && (i = o); var s = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, F, o), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} }, f = [], p = !1, c = { state: s, setOptions: function (i) { return a(), s.options = Object.assign({}, o, s.options, i), s.scrollParents = { reference: r(e) ? v(e) : e.contextElement ? v(e.contextElement) : [], popper: v(t) }, i = function (e) { var t = b(e); return I.reduce((function (e, n) { return e.concat(t.filter((function (e) { return e.phase === n }))) }), []) }(function (e) { var t = e.reduce((function (e, t) { var n = e[t.name]; return e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t, e }), {}); return Object.keys(t).map((function (e) { return t[e] })) }([].concat(n, s.options.modifiers))), s.orderedModifiers = i.filter((function (e) { return e.enabled })), s.orderedModifiers.forEach((function (e) { var t = e.name, n = e.options; n = void 0 === n ? {} : n, "function" == typeof (e = e.effect) && (t = e({ state: s, name: t, instance: c, options: n }), f.push(t || function () { })) })), c.update() }, forceUpdate: function () { if (!p) { var e = s.elements, t = e.reference; if (A(t, e = e.popper)) for (s.rects = { reference: u(t, y(e), "fixed" === s.options.strategy), popper: d(e) }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function (e) { return s.modifiersData[e.name] = Object.assign({}, e.data) })), t = 0; t < s.orderedModifiers.length; t++)if (!0 === s.reset) s.reset = !1, t = -1; else { var n = s.orderedModifiers[t]; e = n.fn; var o = n.options; o = void 0 === o ? {} : o, n = n.name, "function" == typeof e && (s = e({ state: s, options: o, name: n, instance: c }) || s) } } }, update: w((function () { return new Promise((function (e) { c.forceUpdate(), e(s) })) })), destroy: function () { a(), p = !0 } }; return A(e, t) ? (c.setOptions(i).then((function (e) { !p && i.onFirstUpdate && i.onFirstUpdate(e) })), c) : c } } function T(e) { var t, o = e.popper, r = e.popperRect, i = e.placement, a = e.offsets, s = e.position, p = e.gpuAcceleration, l = e.adaptive; if (!0 === (e = e.roundOffsets)) { e = a.y; var u = window.devicePixelRatio || 1; e = { x: z(z(a.x * u) / u) || 0, y: z(z(e * u) / u) || 0 } } else e = "function" == typeof e ? e(a) : a; e = void 0 === (e = (u = e).x) ? 0 : e, u = void 0 === (u = u.y) ? 0 : u; var d = a.hasOwnProperty("x"); a = a.hasOwnProperty("y"); var m, h = "left", v = "top", g = window; if (l) { var b = y(o), w = "clientHeight", x = "clientWidth"; b === n(o) && ("static" !== c(b = f(o)).position && (w = "scrollHeight", x = "scrollWidth")), "top" === i && (v = "bottom", u -= b[w] - r.height, u *= p ? 1 : -1), "left" === i && (h = "right", e -= b[x] - r.width, e *= p ? 1 : -1) } return o = Object.assign({ position: s }, l && J), p ? Object.assign({}, o, ((m = {})[v] = a ? "0" : "", m[h] = d ? "0" : "", m.transform = 2 > (g.devicePixelRatio || 1) ? "translate(" + e + "px, " + u + "px)" : "translate3d(" + e + "px, " + u + "px, 0)", m)) : Object.assign({}, o, ((t = {})[v] = a ? u + "px" : "", t[h] = d ? e + "px" : "", t.transform = "", t)) } function H(e) { return e.replace(/left|right|bottom|top/g, (function (e) { return $[e] })) } function R(e) { return e.replace(/start|end/g, (function (e) { return ee[e] })) } function S(e, t, n) { return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x } } function q(e) { return ["top", "right", "bottom", "left"].some((function (t) { return 0 <= e[t] })) } var C = ["top", "bottom", "right", "left"], N = C.reduce((function (e, t) { return e.concat([t + "-start", t + "-end"]) }), []), V = [].concat(C, ["auto"]).reduce((function (e, t) { return e.concat([t, t + "-start", t + "-end"]) }), []), I = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "), _ = Math.max, U = Math.min, z = Math.round, F = { placement: "bottom", modifiers: [], strategy: "absolute" }, X = { passive: !0 }, Y = { name: "eventListeners", enabled: !0, phase: "write", fn: function () { }, effect: function (e) { var t = e.state, o = e.instance, r = (e = e.options).scroll, i = void 0 === r || r, a = void 0 === (e = e.resize) || e, s = n(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper); return i && f.forEach((function (e) { e.addEventListener("scroll", o.update, X) })), a && s.addEventListener("resize", o.update, X), function () { i && f.forEach((function (e) { e.removeEventListener("scroll", o.update, X) })), a && s.removeEventListener("resize", o.update, X) } }, data: {} }, G = { name: "popperOffsets", enabled: !0, phase: "read", fn: function (e) { var t = e.state; t.modifiersData[e.name] = P({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement }) }, data: {} }, J = { top: "auto", right: "auto", bottom: "auto", left: "auto" }, K = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (e) { var t = e.state, n = e.options; e = void 0 === (e = n.gpuAcceleration) || e; var o = n.adaptive; o = void 0 === o || o, n = void 0 === (n = n.roundOffsets) || n, e = { placement: x(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: e }, null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, T(Object.assign({}, e, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: o, roundOffsets: n })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, T(Object.assign({}, e, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: n })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }) }, data: {} }, Q = { name: "applyStyles", enabled: !0, phase: "write", fn: function (e) { var t = e.state; Object.keys(t.elements).forEach((function (e) { var n = t.styles[e] || {}, o = t.attributes[e] || {}, r = t.elements[e]; i(r) && s(r) && (Object.assign(r.style, n), Object.keys(o).forEach((function (e) { var t = o[e]; !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t) }))) })) }, effect: function (e) { var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () { Object.keys(t.elements).forEach((function (e) { var o = t.elements[e], r = t.attributes[e] || {}; e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) { return e[t] = "", e }), {}), i(o) && s(o) && (Object.assign(o.style, e), Object.keys(r).forEach((function (e) { o.removeAttribute(e) }))) })) } }, requires: ["computeStyles"] }, Z = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (e) { var t = e.state, n = e.name, o = void 0 === (e = e.options.offset) ? [0, 0] : e, r = (e = V.reduce((function (e, n) { var r = t.rects, i = x(n), a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1, s = "function" == typeof o ? o(Object.assign({}, r, { placement: n })) : o; return r = (r = s[0]) || 0, s = ((s = s[1]) || 0) * a, i = 0 <= ["left", "right"].indexOf(i) ? { x: s, y: r } : { x: r, y: s }, e[n] = i, e }), {}))[t.placement], i = r.x; r = r.y, null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += r), t.modifiersData[n] = e } }, $ = { left: "right", right: "left", bottom: "top", top: "bottom" }, ee = { start: "end", end: "start" }, te = { name: "flip", enabled: !0, phase: "main", fn: function (e) { var t = e.state, n = e.options; if (e = e.name, !t.modifiersData[e]._skip) { var o = n.mainAxis; o = void 0 === o || o; var r = n.altAxis; r = void 0 === r || r; var i = n.fallbackPlacements, a = n.padding, s = n.boundary, f = n.rootBoundary, p = n.altBoundary, c = n.flipVariations, l = void 0 === c || c, u = n.allowedAutoPlacements; c = x(n = t.options.placement), i = i || (c !== n && l ? function (e) { if ("auto" === x(e)) return []; var t = H(e); return [R(e), t, R(t)] }(n) : [H(n)]); var d = [n].concat(i).reduce((function (e, n) { return e.concat("auto" === x(n) ? function (e, t) { void 0 === t && (t = {}); var n = t.boundary, o = t.rootBoundary, r = t.padding, i = t.flipVariations, a = t.allowedAutoPlacements, s = void 0 === a ? V : a, f = t.placement.split("-")[1]; 0 === (i = (t = f ? i ? N : N.filter((function (e) { return e.split("-")[1] === f })) : C).filter((function (e) { return 0 <= s.indexOf(e) }))).length && (i = t); var p = i.reduce((function (t, i) { return t[i] = W(e, { placement: i, boundary: n, rootBoundary: o, padding: r })[x(i)], t }), {}); return Object.keys(p).sort((function (e, t) { return p[e] - p[t] })) }(t, { placement: n, boundary: s, rootBoundary: f, padding: a, flipVariations: l, allowedAutoPlacements: u }) : n) }), []); n = t.rects.reference, i = t.rects.popper; var m = new Map; c = !0; for (var h = d[0], v = 0; v < d.length; v++) { var g = d[v], y = x(g), b = "start" === g.split("-")[1], w = 0 <= ["top", "bottom"].indexOf(y), O = w ? "width" : "height", j = W(t, { placement: g, boundary: s, rootBoundary: f, altBoundary: p, padding: a }); if (b = w ? b ? "right" : "left" : b ? "bottom" : "top", n[O] > i[O] && (b = H(b)), O = H(b), w = [], o && w.push(0 >= j[y]), r && w.push(0 >= j[b], 0 >= j[O]), w.every((function (e) { return e }))) { h = g, c = !1; break } m.set(g, w) } if (c) for (o = function (e) { var t = d.find((function (t) { if (t = m.get(t)) return t.slice(0, e).every((function (e) { return e })) })); if (t) return h = t, "break" }, r = l ? 3 : 1; 0 < r && "break" !== o(r); r--); t.placement !== h && (t.modifiersData[e]._skip = !0, t.placement = h, t.reset = !0) } }, requiresIfExists: ["offset"], data: { _skip: !1 } }, ne = { name: "preventOverflow", enabled: !0, phase: "main", fn: function (e) { var t = e.state, n = e.options; e = e.name; var o = n.mainAxis, r = void 0 === o || o, i = void 0 !== (o = n.altAxis) && o; o = void 0 === (o = n.tether) || o; var a = n.tetherOffset, s = void 0 === a ? 0 : a, f = W(t, { boundary: n.boundary, rootBoundary: n.rootBoundary, padding: n.padding, altBoundary: n.altBoundary }); n = x(t.placement); var p = t.placement.split("-")[1], c = !p, l = L(n); n = "x" === l ? "y" : "x", a = t.modifiersData.popperOffsets; var u = t.rects.reference, m = t.rects.popper, h = "function" == typeof s ? s(Object.assign({}, t.rects, { placement: t.placement })) : s; if (s = { x: 0, y: 0 }, a) { if (r || i) { var v = "y" === l ? "top" : "left", g = "y" === l ? "bottom" : "right", b = "y" === l ? "height" : "width", w = a[l], O = a[l] + f[v], j = a[l] - f[g], E = o ? -m[b] / 2 : 0, D = "start" === p ? u[b] : m[b]; p = "start" === p ? -m[b] : -u[b], m = t.elements.arrow, m = o && m ? d(m) : { width: 0, height: 0 }; var P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }; v = P[v], g = P[g], m = _(0, U(u[b], m[b])), D = c ? u[b] / 2 - E - m - v - h : D - m - v - h, u = c ? -u[b] / 2 + E + m + g + h : p + m + g + h, c = t.elements.arrow && y(t.elements.arrow), h = t.modifiersData.offset ? t.modifiersData.offset[t.placement][l] : 0, c = a[l] + D - h - (c ? "y" === l ? c.clientTop || 0 : c.clientLeft || 0 : 0), u = a[l] + u - h, r && (r = o ? U(O, c) : O, j = o ? _(j, u) : j, r = _(r, U(w, j)), a[l] = r, s[l] = r - w), i && (r = (i = a[n]) + f["x" === l ? "top" : "left"], f = i - f["x" === l ? "bottom" : "right"], r = o ? U(r, c) : r, o = o ? _(f, u) : f, o = _(r, U(i, o)), a[n] = o, s[n] = o - i) } t.modifiersData[e] = s } }, requiresIfExists: ["offset"] }, oe = { name: "arrow", enabled: !0, phase: "main", fn: function (e) { var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = x(n.placement); if (e = L(s), s = 0 <= ["left", "right"].indexOf(s) ? "height" : "width", i && a) { r = M("number" != typeof (r = "function" == typeof (r = r.padding) ? r(Object.assign({}, n.rects, { placement: n.placement })) : r) ? r : k(r, C)); var f = d(i), p = "y" === e ? "top" : "left", c = "y" === e ? "bottom" : "right", l = n.rects.reference[s] + n.rects.reference[e] - a[e] - n.rects.popper[s]; a = a[e] - n.rects.reference[e], a = (i = (i = y(i)) ? "y" === e ? i.clientHeight || 0 : i.clientWidth || 0 : 0) / 2 - f[s] / 2 + (l / 2 - a / 2), s = _(r[p], U(a, i - f[s] - r[c])), n.modifiersData[o] = ((t = {})[e] = s, t.centerOffset = s - a, t) } }, effect: function (e) { var t = e.state; if (null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)) { if ("string" == typeof e && !(e = t.elements.popper.querySelector(e))) return; O(t.elements.popper, e) && (t.elements.arrow = e) } }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] }, re = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (e) { var t = e.state; e = e.name; var n = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, i = W(t, { elementContext: "reference" }), a = W(t, { altBoundary: !0 }); n = S(i, n), o = S(a, o, r), r = q(n), a = q(o), t.modifiersData[e] = { referenceClippingOffsets: n, popperEscapeOffsets: o, isReferenceHidden: r, hasPopperEscaped: a }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": r, "data-popper-escaped": a }) } }, ie = B({ defaultModifiers: [Y, G, K, Q] }), ae = [Y, G, K, Q, Z, te, ne, oe, re], se = B({ defaultModifiers: ae }); e.applyStyles = Q, e.arrow = oe, e.computeStyles = K, e.createPopper = se, e.createPopperLite = ie, e.defaultModifiers = ae, e.detectOverflow = W, e.eventListeners = Y, e.flip = te, e.hide = re, e.offset = Z, e.popperGenerator = B, e.popperOffsets = G, e.preventOverflow = ne, Object.defineProperty(e, "__esModule", { value: !0 }) }));
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = t || self).tippy = e(t.Popper) }(this, (function (t) { "use strict"; var e = "undefined" != typeof window && "undefined" != typeof document, n = e ? navigator.userAgent : "", r = /MSIE |Trident\//.test(n), i = { passive: !0, capture: !0 }; function o(t, e, n) { if (Array.isArray(t)) { var r = t[e]; return null == r ? Array.isArray(n) ? n[e] : n : r } return t } function a(t, e) { var n = {}.toString.call(t); return 0 === n.indexOf("[object") && n.indexOf(e + "]") > -1 } function s(t, e) { return "function" == typeof t ? t.apply(void 0, e) : t } function p(t, e) { return 0 === e ? t : function (r) { clearTimeout(n), n = setTimeout((function () { t(r) }), e) }; var n } function u(t, e) { var n = Object.assign({}, t); return e.forEach((function (t) { delete n[t] })), n } function c(t) { return [].concat(t) } function f(t, e) { -1 === t.indexOf(e) && t.push(e) } function l(t) { return t.split("-")[0] } function d(t) { return [].slice.call(t) } function v() { return document.createElement("div") } function m(t) { return ["Element", "Fragment"].some((function (e) { return a(t, e) })) } function g(t) { return a(t, "MouseEvent") } function h(t) { return !(!t || !t._tippy || t._tippy.reference !== t) } function b(t) { return m(t) ? [t] : function (t) { return a(t, "NodeList") }(t) ? d(t) : Array.isArray(t) ? t : d(document.querySelectorAll(t)) } function y(t, e) { t.forEach((function (t) { t && (t.style.transitionDuration = e + "ms") })) } function w(t, e) { t.forEach((function (t) { t && t.setAttribute("data-state", e) })) } function x(t) { var e, n = c(t)[0]; return (null == n || null == (e = n.ownerDocument) ? void 0 : e.body) ? n.ownerDocument : document } function E(t, e, n) { var r = e + "EventListener";["transitionend", "webkitTransitionEnd"].forEach((function (e) { t[r](e, n) })) } var O = { isTouch: !1 }, C = 0; function T() { O.isTouch || (O.isTouch = !0, window.performance && document.addEventListener("mousemove", A)) } function A() { var t = performance.now(); t - C < 20 && (O.isTouch = !1, document.removeEventListener("mousemove", A)), C = t } function L() { var t = document.activeElement; if (h(t)) { var e = t._tippy; t.blur && !e.state.isVisible && t.blur() } } var D = Object.assign({ appendTo: function () { return document.body }, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: !0, ignoreAttributes: !1, interactive: !1, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: function () { }, onBeforeUpdate: function () { }, onCreate: function () { }, onDestroy: function () { }, onHidden: function () { }, onHide: function () { }, onMount: function () { }, onShow: function () { }, onShown: function () { }, onTrigger: function () { }, onUntrigger: function () { }, onClickOutside: function () { }, placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: !1, touch: !0, trigger: "mouseenter focus", triggerTarget: null }, { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 }, {}, { allowHTML: !1, animation: "fade", arrow: !0, content: "", inertia: !1, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 }), k = Object.keys(D); function R(t) { var e = (t.plugins || []).reduce((function (e, n) { var r = n.name, i = n.defaultValue; return r && (e[r] = void 0 !== t[r] ? t[r] : i), e }), {}); return Object.assign({}, t, {}, e) } function j(t, e) { var n = Object.assign({}, e, { content: s(e.content, [t]) }, e.ignoreAttributes ? {} : function (t, e) { return (e ? Object.keys(R(Object.assign({}, D, { plugins: e }))) : k).reduce((function (e, n) { var r = (t.getAttribute("data-tippy-" + n) || "").trim(); if (!r) return e; if ("content" === n) e[n] = r; else try { e[n] = JSON.parse(r) } catch (t) { e[n] = r } return e }), {}) }(t, e.plugins)); return n.aria = Object.assign({}, D.aria, {}, n.aria), n.aria = { expanded: "auto" === n.aria.expanded ? e.interactive : n.aria.expanded, content: "auto" === n.aria.content ? e.interactive ? null : "describedby" : n.aria.content }, n } function M(t, e) { t.innerHTML = e } function P(t) { var e = v(); return !0 === t ? e.className = "tippy-arrow" : (e.className = "tippy-svg-arrow", m(t) ? e.appendChild(t) : M(e, t)), e } function V(t, e) { m(e.content) ? (M(t, ""), t.appendChild(e.content)) : "function" != typeof e.content && (e.allowHTML ? M(t, e.content) : t.textContent = e.content) } function I(t) { var e = t.firstElementChild, n = d(e.children); return { box: e, content: n.find((function (t) { return t.classList.contains("tippy-content") })), arrow: n.find((function (t) { return t.classList.contains("tippy-arrow") || t.classList.contains("tippy-svg-arrow") })), backdrop: n.find((function (t) { return t.classList.contains("tippy-backdrop") })) } } function S(t) { var e = v(), n = v(); n.className = "tippy-box", n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1"); var r = v(); function i(n, r) { var i = I(e), o = i.box, a = i.content, s = i.arrow; r.theme ? o.setAttribute("data-theme", r.theme) : o.removeAttribute("data-theme"), "string" == typeof r.animation ? o.setAttribute("data-animation", r.animation) : o.removeAttribute("data-animation"), r.inertia ? o.setAttribute("data-inertia", "") : o.removeAttribute("data-inertia"), o.style.maxWidth = "number" == typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth, r.role ? o.setAttribute("role", r.role) : o.removeAttribute("role"), n.content === r.content && n.allowHTML === r.allowHTML || V(a, t.props), r.arrow ? s ? n.arrow !== r.arrow && (o.removeChild(s), o.appendChild(P(r.arrow))) : o.appendChild(P(r.arrow)) : s && o.removeChild(s) } return r.className = "tippy-content", r.setAttribute("data-state", "hidden"), V(r, t.props), e.appendChild(n), n.appendChild(r), i(t.props, t.props), { popper: e, onUpdate: i } } S.$$tippy = !0; var B = 1, H = [], N = []; function U(e, n) { var a, u, m, h, b, C, T, A, L, k = j(e, Object.assign({}, D, {}, R((a = n, Object.keys(a).reduce((function (t, e) { return void 0 !== a[e] && (t[e] = a[e]), t }), {}))))), M = !1, P = !1, V = !1, S = !1, U = [], _ = p(bt, k.interactiveDebounce), z = B++, F = (L = k.plugins).filter((function (t, e) { return L.indexOf(t) === e })), W = { id: z, reference: e, popper: v(), popperInstance: null, props: k, state: { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 }, plugins: F, clearDelayTimeouts: function () { clearTimeout(u), clearTimeout(m), cancelAnimationFrame(h) }, setProps: function (t) { if (W.state.isDestroyed) return; it("onBeforeUpdate", [W, t]), gt(); var n = W.props, r = j(e, Object.assign({}, W.props, {}, t, { ignoreAttributes: !0 })); W.props = r, mt(), n.interactiveDebounce !== r.interactiveDebounce && (st(), _ = p(bt, r.interactiveDebounce)); n.triggerTarget && !r.triggerTarget ? c(n.triggerTarget).forEach((function (t) { t.removeAttribute("aria-expanded") })) : r.triggerTarget && e.removeAttribute("aria-expanded"); at(), rt(), q && q(n, r); W.popperInstance && (Et(), Ct().forEach((function (t) { requestAnimationFrame(t._tippy.popperInstance.forceUpdate) }))); it("onAfterUpdate", [W, t]) }, setContent: function (t) { W.setProps({ content: t }) }, show: function () { var t = W.state.isVisible, e = W.state.isDestroyed, n = !W.state.isEnabled, r = O.isTouch && !W.props.touch, i = o(W.props.duration, 0, D.duration); if (t || e || n || r) return; if (Z().hasAttribute("disabled")) return; if (it("onShow", [W], !1), !1 === W.props.onShow(W)) return; W.state.isVisible = !0, Q() && (Y.style.visibility = "visible"); rt(), ft(), W.state.isMounted || (Y.style.transition = "none"); if (Q()) { var a = et(), p = a.box, u = a.content; y([p, u], 0) } T = function () { var t; if (W.state.isVisible && !S) { if (S = !0, Y.offsetHeight, Y.style.transition = W.props.moveTransition, Q() && W.props.animation) { var e = et(), n = e.box, r = e.content; y([n, r], i), w([n, r], "visible") } ot(), at(), f(N, W), null == (t = W.popperInstance) || t.forceUpdate(), W.state.isMounted = !0, it("onMount", [W]), W.props.animation && Q() && function (t, e) { dt(t, e) }(i, (function () { W.state.isShown = !0, it("onShown", [W]) })) } }, function () { var t, e = W.props.appendTo, n = Z(); t = W.props.interactive && e === D.appendTo || "parent" === e ? n.parentNode : s(e, [n]); t.contains(Y) || t.appendChild(Y); Et() }() }, hide: function () { var t = !W.state.isVisible, e = W.state.isDestroyed, n = !W.state.isEnabled, r = o(W.props.duration, 1, D.duration); if (t || e || n) return; if (it("onHide", [W], !1), !1 === W.props.onHide(W)) return; W.state.isVisible = !1, W.state.isShown = !1, S = !1, M = !1, Q() && (Y.style.visibility = "hidden"); if (st(), lt(), rt(), Q()) { var i = et(), a = i.box, s = i.content; W.props.animation && (y([a, s], r), w([a, s], "hidden")) } ot(), at(), W.props.animation ? Q() && function (t, e) { dt(t, (function () { !W.state.isVisible && Y.parentNode && Y.parentNode.contains(Y) && e() })) }(r, W.unmount) : W.unmount() }, hideWithInteractivity: function (t) { tt().addEventListener("mousemove", _), f(H, _), _(t) }, enable: function () { W.state.isEnabled = !0 }, disable: function () { W.hide(), W.state.isEnabled = !1 }, unmount: function () { W.state.isVisible && W.hide(); if (!W.state.isMounted) return; Ot(), Ct().forEach((function (t) { t._tippy.unmount() })), Y.parentNode && Y.parentNode.removeChild(Y); N = N.filter((function (t) { return t !== W })), W.state.isMounted = !1, it("onHidden", [W]) }, destroy: function () { if (W.state.isDestroyed) return; W.clearDelayTimeouts(), W.unmount(), gt(), delete e._tippy, W.state.isDestroyed = !0, it("onDestroy", [W]) } }; if (!k.render) return W; var X = k.render(W), Y = X.popper, q = X.onUpdate; Y.setAttribute("data-tippy-root", ""), Y.id = "tippy-" + W.id, W.popper = Y, e._tippy = W, Y._tippy = W; var $ = F.map((function (t) { return t.fn(W) })), J = e.hasAttribute("aria-expanded"); return mt(), at(), rt(), it("onCreate", [W]), k.showOnCreate && Tt(), Y.addEventListener("mouseenter", (function () { W.props.interactive && W.state.isVisible && W.clearDelayTimeouts() })), Y.addEventListener("mouseleave", (function (t) { W.props.interactive && W.props.trigger.indexOf("mouseenter") >= 0 && (tt().addEventListener("mousemove", _), _(t)) })), W; function G() { var t = W.props.touch; return Array.isArray(t) ? t : [t, 0] } function K() { return "hold" === G()[0] } function Q() { var t; return !!(null == (t = W.props.render) ? void 0 : t.$$tippy) } function Z() { return A || e } function tt() { var t = Z().parentNode; return t ? x(t) : document } function et() { return I(Y) } function nt(t) { return W.state.isMounted && !W.state.isVisible || O.isTouch || b && "focus" === b.type ? 0 : o(W.props.delay, t ? 0 : 1, D.delay) } function rt() { Y.style.pointerEvents = W.props.interactive && W.state.isVisible ? "" : "none", Y.style.zIndex = "" + W.props.zIndex } function it(t, e, n) { var r; (void 0 === n && (n = !0), $.forEach((function (n) { n[t] && n[t].apply(void 0, e) })), n) && (r = W.props)[t].apply(r, e) } function ot() { var t = W.props.aria; if (t.content) { var n = "aria-" + t.content, r = Y.id; c(W.props.triggerTarget || e).forEach((function (t) { var e = t.getAttribute(n); if (W.state.isVisible) t.setAttribute(n, e ? e + " " + r : r); else { var i = e && e.replace(r, "").trim(); i ? t.setAttribute(n, i) : t.removeAttribute(n) } })) } } function at() { !J && W.props.aria.expanded && c(W.props.triggerTarget || e).forEach((function (t) { W.props.interactive ? t.setAttribute("aria-expanded", W.state.isVisible && t === Z() ? "true" : "false") : t.removeAttribute("aria-expanded") })) } function st() { tt().removeEventListener("mousemove", _), H = H.filter((function (t) { return t !== _ })) } function pt(t) { if (!(O.isTouch && (V || "mousedown" === t.type) || W.props.interactive && Y.contains(t.target))) { if (Z().contains(t.target)) { if (O.isTouch) return; if (W.state.isVisible && W.props.trigger.indexOf("click") >= 0) return } else it("onClickOutside", [W, t]); !0 === W.props.hideOnClick && (W.clearDelayTimeouts(), W.hide(), P = !0, setTimeout((function () { P = !1 })), W.state.isMounted || lt()) } } function ut() { V = !0 } function ct() { V = !1 } function ft() { var t = tt(); t.addEventListener("mousedown", pt, !0), t.addEventListener("touchend", pt, i), t.addEventListener("touchstart", ct, i), t.addEventListener("touchmove", ut, i) } function lt() { var t = tt(); t.removeEventListener("mousedown", pt, !0), t.removeEventListener("touchend", pt, i), t.removeEventListener("touchstart", ct, i), t.removeEventListener("touchmove", ut, i) } function dt(t, e) { var n = et().box; function r(t) { t.target === n && (E(n, "remove", r), e()) } if (0 === t) return e(); E(n, "remove", C), E(n, "add", r), C = r } function vt(t, n, r) { void 0 === r && (r = !1), c(W.props.triggerTarget || e).forEach((function (e) { e.addEventListener(t, n, r), U.push({ node: e, eventType: t, handler: n, options: r }) })) } function mt() { var t; K() && (vt("touchstart", ht, { passive: !0 }), vt("touchend", yt, { passive: !0 })), (t = W.props.trigger, t.split(/\s+/).filter(Boolean)).forEach((function (t) { if ("manual" !== t) switch (vt(t, ht), t) { case "mouseenter": vt("mouseleave", yt); break; case "focus": vt(r ? "focusout" : "blur", wt); break; case "focusin": vt("focusout", wt) } })) } function gt() { U.forEach((function (t) { var e = t.node, n = t.eventType, r = t.handler, i = t.options; e.removeEventListener(n, r, i) })), U = [] } function ht(t) { var e, n = !1; if (W.state.isEnabled && !xt(t) && !P) { var r = "focus" === (null == (e = b) ? void 0 : e.type); b = t, A = t.currentTarget, at(), !W.state.isVisible && g(t) && H.forEach((function (e) { return e(t) })), "click" === t.type && (W.props.trigger.indexOf("mouseenter") < 0 || M) && !1 !== W.props.hideOnClick && W.state.isVisible ? n = !0 : Tt(t), "click" === t.type && (M = !n), n && !r && At(t) } } function bt(t) { var e = t.target, n = Z().contains(e) || Y.contains(e); "mousemove" === t.type && n || function (t, e) { var n = e.clientX, r = e.clientY; return t.every((function (t) { var e = t.popperRect, i = t.popperState, o = t.props.interactiveBorder, a = l(i.placement), s = i.modifiersData.offset; if (!s) return !0; var p = "bottom" === a ? s.top.y : 0, u = "top" === a ? s.bottom.y : 0, c = "right" === a ? s.left.x : 0, f = "left" === a ? s.right.x : 0, d = e.top - r + p > o, v = r - e.bottom - u > o, m = e.left - n + c > o, g = n - e.right - f > o; return d || v || m || g })) }(Ct().concat(Y).map((function (t) { var e, n = null == (e = t._tippy.popperInstance) ? void 0 : e.state; return n ? { popperRect: t.getBoundingClientRect(), popperState: n, props: k } : null })).filter(Boolean), t) && (st(), At(t)) } function yt(t) { xt(t) || W.props.trigger.indexOf("click") >= 0 && M || (W.props.interactive ? W.hideWithInteractivity(t) : At(t)) } function wt(t) { W.props.trigger.indexOf("focusin") < 0 && t.target !== Z() || W.props.interactive && t.relatedTarget && Y.contains(t.relatedTarget) || At(t) } function xt(t) { return !!O.isTouch && K() !== t.type.indexOf("touch") >= 0 } function Et() { Ot(); var n = W.props, r = n.popperOptions, i = n.placement, o = n.offset, a = n.getReferenceClientRect, s = n.moveTransition, p = Q() ? I(Y).arrow : null, u = a ? { getBoundingClientRect: a, contextElement: a.contextElement || Z() } : e, c = [{ name: "offset", options: { offset: o } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !s } }, { name: "$$tippy", enabled: !0, phase: "beforeWrite", requires: ["computeStyles"], fn: function (t) { var e = t.state; if (Q()) { var n = et().box;["placement", "reference-hidden", "escaped"].forEach((function (t) { "placement" === t ? n.setAttribute("data-placement", e.placement) : e.attributes.popper["data-popper-" + t] ? n.setAttribute("data-" + t, "") : n.removeAttribute("data-" + t) })), e.attributes.popper = {} } } }]; Q() && p && c.push({ name: "arrow", options: { element: p, padding: 3 } }), c.push.apply(c, (null == r ? void 0 : r.modifiers) || []), W.popperInstance = t.createPopper(u, Y, Object.assign({}, r, { placement: i, onFirstUpdate: T, modifiers: c })) } function Ot() { W.popperInstance && (W.popperInstance.destroy(), W.popperInstance = null) } function Ct() { return d(Y.querySelectorAll("[data-tippy-root]")) } function Tt(t) { W.clearDelayTimeouts(), t && it("onTrigger", [W, t]), ft(); var e = nt(!0), n = G(), r = n[0], i = n[1]; O.isTouch && "hold" === r && i && (e = i), e ? u = setTimeout((function () { W.show() }), e) : W.show() } function At(t) { if (W.clearDelayTimeouts(), it("onUntrigger", [W, t]), W.state.isVisible) { if (!(W.props.trigger.indexOf("mouseenter") >= 0 && W.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(t.type) >= 0 && M)) { var e = nt(!1); e ? m = setTimeout((function () { W.state.isVisible && W.hide() }), e) : h = requestAnimationFrame((function () { W.hide() })) } } else lt() } } function _(t, e) { void 0 === e && (e = {}); var n = D.plugins.concat(e.plugins || []); document.addEventListener("touchstart", T, i), window.addEventListener("blur", L); var r = Object.assign({}, e, { plugins: n }), o = b(t).reduce((function (t, e) { var n = e && U(e, r); return n && t.push(n), t }), []); return m(t) ? o[0] : o } _.defaultProps = D, _.setDefaultProps = function (t) { Object.keys(t).forEach((function (e) { D[e] = t[e] })) }, _.currentInput = O; var z = Object.assign({}, t.applyStyles, { effect: function (t) { var e = t.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow) } }), F = { mouseover: "mouseenter", focusin: "focus", click: "click" }; var W = { name: "animateFill", defaultValue: !1, fn: function (t) { var e; if (!(null == (e = t.props.render) ? void 0 : e.$$tippy)) return {}; var n = I(t.popper), r = n.box, i = n.content, o = t.props.animateFill ? function () { var t = v(); return t.className = "tippy-backdrop", w([t], "hidden"), t }() : null; return { onCreate: function () { o && (r.insertBefore(o, r.firstElementChild), r.setAttribute("data-animatefill", ""), r.style.overflow = "hidden", t.setProps({ arrow: !1, animation: "shift-away" })) }, onMount: function () { if (o) { var t = r.style.transitionDuration, e = Number(t.replace("ms", "")); i.style.transitionDelay = Math.round(e / 10) + "ms", o.style.transitionDuration = t, w([o], "visible") } }, onShow: function () { o && (o.style.transitionDuration = "0ms") }, onHide: function () { o && w([o], "hidden") } } } }; var X = { clientX: 0, clientY: 0 }, Y = []; function q(t) { var e = t.clientX, n = t.clientY; X = { clientX: e, clientY: n } } var $ = { name: "followCursor", defaultValue: !1, fn: function (t) { var e = t.reference, n = x(t.props.triggerTarget || e), r = !1, i = !1, o = !0, a = t.props; function s() { return "initial" === t.props.followCursor && t.state.isVisible } function p() { n.addEventListener("mousemove", f) } function u() { n.removeEventListener("mousemove", f) } function c() { r = !0, t.setProps({ getReferenceClientRect: null }), r = !1 } function f(n) { var r = !n.target || e.contains(n.target), i = t.props.followCursor, o = n.clientX, a = n.clientY, s = e.getBoundingClientRect(), p = o - s.left, u = a - s.top; !r && t.props.interactive || t.setProps({ getReferenceClientRect: function () { var t = e.getBoundingClientRect(), n = o, r = a; "initial" === i && (n = t.left + p, r = t.top + u); var s = "horizontal" === i ? t.top : r, c = "vertical" === i ? t.right : n, f = "horizontal" === i ? t.bottom : r, l = "vertical" === i ? t.left : n; return { width: c - l, height: f - s, top: s, right: c, bottom: f, left: l } } }) } function l() { t.props.followCursor && (Y.push({ instance: t, doc: n }), function (t) { t.addEventListener("mousemove", q) }(n)) } function d() { 0 === (Y = Y.filter((function (e) { return e.instance !== t }))).filter((function (t) { return t.doc === n })).length && function (t) { t.removeEventListener("mousemove", q) }(n) } return { onCreate: l, onDestroy: d, onBeforeUpdate: function () { a = t.props }, onAfterUpdate: function (e, n) { var o = n.followCursor; r || void 0 !== o && a.followCursor !== o && (d(), o ? (l(), !t.state.isMounted || i || s() || p()) : (u(), c())) }, onMount: function () { t.props.followCursor && !i && (o && (f(X), o = !1), s() || p()) }, onTrigger: function (t, e) { g(e) && (X = { clientX: e.clientX, clientY: e.clientY }), i = "focus" === e.type }, onHidden: function () { t.props.followCursor && (c(), u(), o = !0) } } } }; var J = { name: "inlinePositioning", defaultValue: !1, fn: function (t) { var e, n = t.reference; var r = -1, i = !1, o = { name: "tippyInlinePositioning", enabled: !0, phase: "afterWrite", fn: function (i) { var o = i.state; t.props.inlinePositioning && (e !== o.placement && t.setProps({ getReferenceClientRect: function () { return function (t) { return function (t, e, n, r) { if (n.length < 2 || null === t) return e; if (2 === n.length && r >= 0 && n[0].left > n[1].right) return n[r] || e; switch (t) { case "top": case "bottom": var i = n[0], o = n[n.length - 1], a = "top" === t, s = i.top, p = o.bottom, u = a ? i.left : o.left, c = a ? i.right : o.right; return { top: s, bottom: p, left: u, right: c, width: c - u, height: p - s }; case "left": case "right": var f = Math.min.apply(Math, n.map((function (t) { return t.left }))), l = Math.max.apply(Math, n.map((function (t) { return t.right }))), d = n.filter((function (e) { return "left" === t ? e.left === f : e.right === l })), v = d[0].top, m = d[d.length - 1].bottom; return { top: v, bottom: m, left: f, right: l, width: l - f, height: m - v }; default: return e } }(l(t), n.getBoundingClientRect(), d(n.getClientRects()), r) }(o.placement) } }), e = o.placement) } }; function a() { var e; i || (e = function (t, e) { var n; return { popperOptions: Object.assign({}, t.popperOptions, { modifiers: [].concat(((null == (n = t.popperOptions) ? void 0 : n.modifiers) || []).filter((function (t) { return t.name !== e.name })), [e]) }) } }(t.props, o), i = !0, t.setProps(e), i = !1) } return { onCreate: a, onAfterUpdate: a, onTrigger: function (e, n) { if (g(n)) { var i = d(t.reference.getClientRects()), o = i.find((function (t) { return t.left - 2 <= n.clientX && t.right + 2 >= n.clientX && t.top - 2 <= n.clientY && t.bottom + 2 >= n.clientY })); r = i.indexOf(o) } }, onUntrigger: function () { r = -1 } } } }; var G = { name: "sticky", defaultValue: !1, fn: function (t) { var e = t.reference, n = t.popper; function r(e) { return !0 === t.props.sticky || t.props.sticky === e } var i = null, o = null; function a() { var s = r("reference") ? (t.popperInstance ? t.popperInstance.state.elements.reference : e).getBoundingClientRect() : null, p = r("popper") ? n.getBoundingClientRect() : null; (s && K(i, s) || p && K(o, p)) && t.popperInstance && t.popperInstance.update(), i = s, o = p, t.state.isMounted && requestAnimationFrame(a) } return { onMount: function () { t.props.sticky && a() } } } }; function K(t, e) { return !t || !e || (t.top !== e.top || t.right !== e.right || t.bottom !== e.bottom || t.left !== e.left) } return e && function (t) { var e = document.createElement("style"); e.textContent = t, e.setAttribute("data-tippy-stylesheet", ""); var n = document.head, r = document.querySelector("head>style,head>link"); r ? n.insertBefore(e, r) : n.appendChild(e) }('.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}'), _.setDefaultProps({ plugins: [W, $, J, G], render: S }), _.createSingleton = function (t, e) { var n; void 0 === e && (e = {}); var r, i = t, o = [], a = e.overrides, s = [], p = !1; function c() { o = i.map((function (t) { return t.reference })) } function f(t) { i.forEach((function (e) { t ? e.enable() : e.disable() })) } function l(t) { return i.map((function (e) { var n = e.setProps; return e.setProps = function (i) { n(i), e.reference === r && t.setProps(i) }, function () { e.setProps = n } })) } function d(t, e) { var n = o.indexOf(e); if (e !== r) { r = e; var s = (a || []).concat("content").reduce((function (t, e) { return t[e] = i[n].props[e], t }), {}); t.setProps(Object.assign({}, s, { getReferenceClientRect: "function" == typeof s.getReferenceClientRect ? s.getReferenceClientRect : function () { return e.getBoundingClientRect() } })) } } f(!1), c(); var m = { fn: function () { return { onDestroy: function () { f(!0) }, onHidden: function () { r = null }, onClickOutside: function (t) { t.props.showOnCreate && !p && (p = !0, r = null) }, onShow: function (t) { t.props.showOnCreate && !p && (p = !0, d(t, o[0])) }, onTrigger: function (t, e) { d(t, e.currentTarget) } } } }, g = _(v(), Object.assign({}, u(e, ["overrides"]), { plugins: [m].concat(e.plugins || []), triggerTarget: o, popperOptions: Object.assign({}, e.popperOptions, { modifiers: [].concat((null == (n = e.popperOptions) ? void 0 : n.modifiers) || [], [z]) }) })), h = g.show; g.show = function (t) { if (h(), !r && null == t) return d(g, o[0]); if (!r || null != t) { if ("number" == typeof t) return o[t] && d(g, o[t]); if (i.includes(t)) { var e = t.reference; return d(g, e) } return o.includes(t) ? d(g, t) : void 0 } }, g.showNext = function () { var t = o[0]; if (!r) return g.show(0); var e = o.indexOf(r); g.show(o[e + 1] || t) }, g.showPrevious = function () { var t = o[o.length - 1]; if (!r) return g.show(t); var e = o.indexOf(r), n = o[e - 1] || t; g.show(n) }; var b = g.setProps; return g.setProps = function (t) { a = t.overrides || a, b(t) }, g.setInstances = function (t) { f(!0), s.forEach((function (t) { return t() })), i = t, f(!1), c(), l(g), g.setProps({ triggerTarget: o }) }, s = l(g), g }, _.delegate = function (t, e) { var n = [], r = [], o = !1, a = e.target, s = u(e, ["target"]), p = Object.assign({}, s, { trigger: "manual", touch: !1 }), f = Object.assign({}, s, { showOnCreate: !0 }), l = _(t, p); function d(t) { if (t.target && !o) { var n = t.target.closest(a); if (n) { var i = n.getAttribute("data-tippy-trigger") || e.trigger || D.trigger; if (!n._tippy && !("touchstart" === t.type && "boolean" == typeof f.touch || "touchstart" !== t.type && i.indexOf(F[t.type]) < 0)) { var s = _(n, f); s && (r = r.concat(s)) } } } } function v(t, e, r, i) { void 0 === i && (i = !1), t.addEventListener(e, r, i), n.push({ node: t, eventType: e, handler: r, options: i }) } return c(l).forEach((function (t) { var e = t.destroy, a = t.enable, s = t.disable; t.destroy = function (t) { void 0 === t && (t = !0), t && r.forEach((function (t) { t.destroy() })), r = [], n.forEach((function (t) { var e = t.node, n = t.eventType, r = t.handler, i = t.options; e.removeEventListener(n, r, i) })), n = [], e() }, t.enable = function () { a(), r.forEach((function (t) { return t.enable() })), o = !1 }, t.disable = function () { s(), r.forEach((function (t) { return t.disable() })), o = !0 }, function (t) { var e = t.reference; v(e, "touchstart", d, i), v(e, "mouseover", d), v(e, "focusin", d), v(e, "click", d) }(t) })), l }, _.hideAll = function (t) { var e = void 0 === t ? {} : t, n = e.exclude, r = e.duration; N.forEach((function (t) { var e = !1; if (n && (e = h(n) ? t.reference === n : t.popper === n.popper), !e) { var i = t.props.duration; t.setProps({ duration: r }), t.hide(), t.state.isDestroyed || t.setProps({ duration: i }) } })) }, _.roundArrow = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>', _ }));
// ========================================

if (!window.blazorise) {
    window.blazorise = {};
}

window.blazorise = {
    lastClickedDocumentElement: null,

    utils: {
        getRequiredElement: (element, elementId) => {
            if (element)
                return element;

            return document.getElementById(elementId);
        }
    },

    // adds a classname to the specified element
    addClass: (element, classname) => {
        element.classList.add(classname);
        return true;
    },

    // removes a classname from the specified element
    removeClass: (element, classname) => {
        if (element.classList.contains(classname)) {
            element.classList.remove(classname);
        }
        return true;
    },

    // toggles a classname on the given element id
    toggleClass: (element, classname) => {
        if (element) {
            if (element.classList.contains(classname)) {
                element.classList.remove(classname);
            } else {
                element.classList.add(classname);
            }
        }
        return true;
    },

    // adds a classname to the body element
    addClassToBody: (classname) => {
        return blazorise.addClass(document.body, classname);
    },

    // removes a classname from the body element
    removeClassFromBody: (classname) => {
        return blazorise.removeClass(document.body, classname);
    },

    // indicates if parent node has a specified classname
    parentHasClass: (element, classname) => {
        if (element && element.parentElement) {
            return element.parentElement.classList.contains(classname);
        }
        return false;
    },

    // sets the value to the element property
    setProperty: (element, property, value) => {
        if (element && property) {
            element[property] = value;
        }
    },

    getElementInfo: (element, elementId) => {
        if (!element) {
            element = document.getElementById(elementId);
        }

        if (element) {
            const position = element.getBoundingClientRect();

            return {
                boundingClientRect: {
                    x: position.x,
                    y: position.y,
                    top: position.top,
                    bottom: position.bottom,
                    left: position.left,
                    right: position.right,
                    width: position.width,
                    height: position.height
                },
                offsetTop: element.offsetTop,
                offsetLeft: element.offsetLeft,
                offsetWidth: element.offsetWidth,
                offsetHeight: element.offsetHeight,
                scrollTop: element.scrollTop,
                scrollLeft: element.scrollLeft,
                scrollWidth: element.scrollWidth,
                scrollHeight: element.scrollHeight,
                clientTop: element.clientTop,
                clientLeft: element.clientLeft,
                clientWidth: element.clientWidth,
                clientHeight: element.clientHeight
            };
        }

        return {};
    },

    setTextValue(element, value) {
        element.value = value;
        return true;
    },

    hasSelectionCapabilities: (element) => {
        const nodeName = element && element.nodeName && element.nodeName.toLowerCase();

        return (
            nodeName &&
            ((nodeName === 'input' &&
                (element.type === 'text' ||
                    element.type === 'search' ||
                    element.type === 'tel' ||
                    element.type === 'url' ||
                    element.type === 'password')) ||
                nodeName === 'textarea' ||
                element.contentEditable === 'true')
        );
    },

    setCaret: (element, caret) => {
        if (window.blazorise.hasSelectionCapabilities(element)) {
            window.requestAnimationFrame(() => {
                element.selectionStart = caret;
                element.selectionEnd = caret;
            });
        }
    },

    getCaret: (element) => {
        return window.blazorise.hasSelectionCapabilities(element)
            ? element.selectionStart :
            -1;
    },

    getSelectedOptions: (elementId) => {
        const element = document.getElementById(elementId);
        const len = element.options.length;
        var opts = [], opt;

        for (var i = 0; i < len; i++) {
            opt = element.options[i];

            if (opt.selected) {
                opts.push(opt.value);
            }
        }

        return opts;
    },

    setSelectedOptions: (elementId, values) => {
        const element = document.getElementById(elementId);

        if (element && element.options) {
            const len = element.options.length;

            for (var i = 0; i < len; i++) {
                const opt = element.options[i];

                if (values && values.find(x => x !== null && x.toString() === opt.value)) {
                    opt.selected = true;
                } else {
                    opt.selected = false;
                }
            }
        }
    },

    // holds the list of components that are triggers to close other components
    closableComponents: [],

    addClosableComponent: (elementId, dotnetAdapter) => {
        window.blazorise.closableComponents.push({ elementId: elementId, dotnetAdapter: dotnetAdapter });
    },

    findClosableComponent: (elementId) => {
        for (index = 0; index < window.blazorise.closableComponents.length; ++index) {
            if (window.blazorise.closableComponents[index].elementId === elementId)
                return window.blazorise.closableComponents[index];
        }
        return null;
    },

    findClosableComponentIndex: (elementId) => {
        for (index = 0; index < window.blazorise.closableComponents.length; ++index) {
            if (window.blazorise.closableComponents[index].elementId === elementId)
                return index;
        }
        return -1;
    },

    isClosableComponent: (elementId) => {
        for (index = 0; index < window.blazorise.closableComponents.length; ++index) {
            if (window.blazorise.closableComponents[index].elementId === elementId)
                return true;
        }
        return false;
    },

    registerClosableComponent: (element, dotnetAdapter) => {
        if (element) {
            if (window.blazorise.isClosableComponent(element.id) !== true) {
                window.blazorise.addClosableComponent(element.id, dotnetAdapter);
            }
        }
    },

    unregisterClosableComponent: (element) => {
        if (element) {
            const index = window.blazorise.findClosableComponentIndex(element.id);
            if (index !== -1) {
                window.blazorise.closableComponents.splice(index, 1);
            }
        }
    },

    tryClose: (closable, targetElementId, isEscapeKey, isChildClicked) => {
        let request = new Promise((resolve, reject) => {
            closable.dotnetAdapter.invokeMethodAsync('SafeToClose', targetElementId, isEscapeKey ? 'escape' : 'leave', isChildClicked)
                .then((result) => resolve({ elementId: closable.elementId, dotnetAdapter: closable.dotnetAdapter, status: result === true ? 'ok' : 'cancelled' }))
                .catch(() => resolve({ elementId: closable.elementId, status: 'error' }));
        });

        if (request) {
            request
                .then((response) => {
                    if (response.status === 'ok') {
                        response.dotnetAdapter.invokeMethodAsync('Close', isEscapeKey ? 'escape' : 'leave')
                            // If the user navigates to another page then it will raise exception because the reference to the component cannot be found.
                            // In that case just remove the elementId from the list.
                            .catch(() => window.blazorise.unregisterClosableComponent(response.elementId));
                    }
                });
        }
    },
    focus: (element, elementId, scrollToElement) => {
        element = window.blazorise.utils.getRequiredElement(element, elementId);

        if (element) {
            element.focus({
                preventScroll: !scrollToElement
            });
        }

        return true;
    },
    tooltip: {
        initialize: (element, elementId, options) => {
            const defaultOptions = {
                theme: 'blazorise',
                content: options.text,
                placement: options.placement,
                maxWidth: options.multiline ? "15rem" : null,
                duration: options.fade ? [options.fadeDuration, options.fadeDuration] : [0, 0],
                arrow: options.showArrow,
                allowHTML: true,
                trigger: options.trigger
            };

            const alwaysActiveOptions = options.alwaysActive
                ? {
                    showOnCreate: true,
                    hideOnClick: false,
                    trigger: "manual"
                } : {};

            tippy(element, {
                ...defaultOptions,
                ...alwaysActiveOptions
            });

            return true;
        }
    },
    textEdit: {
        _instances: [],

        initialize: (element, elementId, maskType, editMask) => {
            var instances = window.blazorise.textEdit._instances = window.blazorise.textEdit._instances || {};

            if (maskType === "numeric") {
                instances[elementId] = new window.blazorise.NumericMaskValidator(element, elementId);
            }
            else if (maskType === "datetime") {
                instances[elementId] = new window.blazorise.DateTimeMaskValidator(element, elementId);
            }
            else if (maskType === "regex") {
                instances[elementId] = new window.blazorise.RegExMaskValidator(element, elementId, editMask);
            }
            else {
                instances[elementId] = new window.blazorise.NoValidator();
            }

            element.addEventListener("keypress", (e) => {
                window.blazorise.textEdit.keyPress(instances[elementId], e);
            });

            element.addEventListener("paste", (e) => {
                window.blazorise.textEdit.paste(instances[elementId], e);
            });

            return true;
        },
        destroy: (element, elementId) => {
            var instances = window.blazorise.textEdit._instances || {};
            delete instances[elementId];
            return true;
        },
        keyPress: (validator, e) => {
            var currentValue = String.fromCharCode(e.which);

            return validator.isValid(currentValue) || e.preventDefault();
        },
        paste: (validator, e) => {
            return validator.isValid(e.clipboardData.getData("text/plain")) || e.preventDefault();
        }
    },
    numericEdit: {
        _instances: [],

        initialize: (dotnetAdapter, element, elementId, options) => {
            const instance = new window.blazorise.NumericMaskValidator(dotnetAdapter, element, elementId, options);

            window.blazorise.numericEdit._instances[elementId] = instance;

            element.addEventListener("keypress", (e) => {
                window.blazorise.numericEdit.keyPress(window.blazorise.numericEdit._instances[elementId], e);
            });

            element.addEventListener("keydown", (e) => {
                window.blazorise.numericEdit.keyDown(window.blazorise.numericEdit._instances[elementId], e);
            });

            element.addEventListener("paste", (e) => {
                window.blazorise.numericEdit.paste(window.blazorise.numericEdit._instances[elementId], e);
            });

            if (instance.decimals && instance.decimals !== 2) {
                instance.truncate();
            }
        },
        update: (element, elementId, options) => {
            const instance = window.blazorise.numericEdit._instances[elementId];

            if (instance) {
                instance.update(options);
            }
        },
        destroy: (element, elementId) => {
            var instances = window.blazorise.numericEdit._instances || {};
            delete instances[elementId];
        },
        keyDown: (validator, e) => {
            if (e.which === 38) {
                validator.stepApply(1);
            } else if (e.which === 40) {
                validator.stepApply(-1);
            }
            return true;
        },
        keyPress: (validator, e) => {
            var currentValue = String.fromCharCode(e.which);

            return e.which === 13 // still need to allow ENTER key so that we don't preventDefault on form submit
                || validator.isValid(currentValue)
                || e.preventDefault();
        },
        paste: (validator, e) => {
            return validator.isValid(e.clipboardData.getData("text/plain")) || e.preventDefault();
        }
    },
    NoValidator: function () {
        this.isValid = function (currentValue) {
            return true;
        };
    },
    NumericMaskValidator: function (dotnetAdapter, element, elementId, options) {
        this.dotnetAdapter = dotnetAdapter;
        this.elementId = elementId;
        this.element = element;
        this.decimals = options.decimals === null || options.decimals === undefined ? 2 : options.decimals;
        this.separator = options.separator || ".";
        this.step = options.step || 1;
        this.min = options.min;
        this.max = options.max;

        this.regex = function () {
            var sep = "\\" + this.separator,
                dec = this.decimals,
                reg = "{0," + dec + "}";

            return dec ? new RegExp("^(-)?(((\\d+(" + sep + "\\d" + reg + ")?)|(" + sep + "\\d" + reg + ")))?$") : /^(-)?(\d*)$/;
        };
        this.carret = function () {
            return [this.element.selectionStart, this.element.selectionEnd];
        };
        this.isValid = function (currentValue) {
            var value = this.element.value,
                selection = this.carret();

            if (value = value.substring(0, selection[0]) + currentValue + value.substring(selection[1]), !!this.regex().test(value)) {
                return value = (value || "").replace(this.separator, ".");
            }

            return false;
        };
        this.stepApply = function (sign) {
            var value = (this.element.value || "").replace(this.separator, ".");
            var number = Number(value) + this.step * sign;

            if (number >= this.min && number <= this.max) {
                var newValue = number.toString().replace(".", this.separator);
                this.element.value = newValue;
                this.dotnetAdapter.invokeMethodAsync('SetValue', newValue);
            }
        };
        this.update = function (options) {
            if (options.decimals && options.decimals.changed) {
                this.decimals = options.decimals.value;

                this.truncate();
            }
        };
        this.truncate = function () {
            let value = (this.element.value || "").replace(this.separator, ".");
            let number = Number(value);

            number = Math.trunc(number * Math.pow(10, this.decimals)) / Math.pow(10, this.decimals);

            let newValue = number.toString().replace(".", this.separator);

            this.element.value = newValue;
            this.dotnetAdapter.invokeMethodAsync('SetValue', newValue);
        };
    },
    DateTimeMaskValidator: function (element, elementId) {
        this.elementId = elementId;
        this.element = element;
        this.regex = function () {
            return /^\d{0,4}$|^\d{4}-0?$|^\d{4}-(?:0?[1-9]|1[012])(?:-(?:0?[1-9]?|[12]\d|3[01])?)?$/;
        };
        this.carret = function () {
            return [this.element.selectionStart, this.element.selectionEnd];
        };
        this.isValid = function (currentValue) {
            var value = this.element.value,
                selection = this.carret();

            return value = value.substring(0, selection[0]) + currentValue + value.substring(selection[1]), !!this.regex().test(value);
        };
    },
    RegExMaskValidator: function (element, elementId, editMask) {
        this.elementId = elementId;
        this.element = element;
        this.editMask = editMask;
        this.regex = function () {
            return new RegExp(this.editMask);
        };
        this.carret = function () {
            return [this.element.selectionStart, this.element.selectionEnd];
        };
        this.isValid = function (currentValue) {
            var value = this.element.value,
                selection = this.carret();

            return value = value.substring(0, selection[0]) + currentValue + value.substring(selection[1]), !!this.regex().test(value);
        };
    },
    button: {
        _instances: [],

        initialize: (element, elementId, preventDefaultOnSubmit) => {
            window.blazorise.button._instances[elementId] = new window.blazorise.ButtonInfo(element, elementId, preventDefaultOnSubmit);

            if (element.type === "submit") {
                element.addEventListener("click", (e) => {
                    window.blazorise.button.click(window.blazorise.button._instances[elementId], e);
                });
            }

            return true;
        },
        destroy: (elementId) => {
            var instances = window.blazorise.button._instances || {};
            delete instances[elementId];
            return true;
        },
        click: (buttonInfo, e) => {
            if (buttonInfo.preventDefaultOnSubmit) {
                return e.preventDefault();
            }
        }
    },
    ButtonInfo: function (element, elementId, preventDefaultOnSubmit) {
        this.elementId = elementId;
        this.element = element;
        this.preventDefaultOnSubmit = preventDefaultOnSubmit;
    },
    link: {
        scrollIntoView: (elementId) => {
            var element = document.getElementById(elementId);

            if (element) {
                element.scrollIntoView();
                window.location.hash = elementId;
            }

            return true;
        }
    },
    fileEdit: {
        _instances: [],

        initialize: (adapter, element, elementId) => {
            var nextFileId = 0;

            // save an instance of adapter
            window.blazorise.fileEdit._instances[elementId] = new window.blazorise.FileEditInfo(adapter, element, elementId);

            element.addEventListener('change', function handleInputFileChange(event) {
                // Reduce to purely serializable data, plus build an index by ID
                element._blazorFilesById = {};
                var fileList = Array.prototype.map.call(element.files, function (file) {
                    var result = {
                        id: ++nextFileId,
                        lastModified: new Date(file.lastModified).toISOString(),
                        name: file.name,
                        size: file.size,
                        type: file.type
                    };
                    element._blazorFilesById[result.id] = result;

                    // Attach the blob data itself as a non-enumerable property so it doesn't appear in the JSON
                    Object.defineProperty(result, 'blob', { value: file });

                    return result;
                });

                adapter.invokeMethodAsync('NotifyChange', fileList).then(null, function (err) {
                    throw new Error(err);
                });
            });

            return true;
        },
        destroy: (element, elementId) => {
            var instances = window.blazorise.fileEdit._instances || {};
            delete instances[elementId];
            return true;
        },

        reset: (element, elementId) => {
            if (element) {
                element.value = '';

                var fileEditInfo = window.blazorise.fileEdit._instances[elementId];

                if (fileEditInfo) {
                    fileEditInfo.adapter.invokeMethodAsync('NotifyChange', []).then(null, function (err) {
                        throw new Error(err);
                    });
                }
            }

            return true;
        },

        readFileData: function readFileData(element, fileEntryId, position, length) {
            var readPromise = getArrayBufferFromFileAsync(element, fileEntryId);

            return readPromise.then(function (arrayBuffer) {
                var uint8Array = new Uint8Array(arrayBuffer, position, length);
                var base64 = uint8ToBase64(uint8Array);
                return base64;
            });
        },

        ensureArrayBufferReadyForSharedMemoryInterop: function ensureArrayBufferReadyForSharedMemoryInterop(elem, fileId) {
            return getArrayBufferFromFileAsync(elem, fileId).then(function (arrayBuffer) {
                getFileById(elem, fileId).arrayBuffer = arrayBuffer;
            });
        },

        readFileDataSharedMemory: function readFileDataSharedMemory(readRequest) {
            // This uses various unsupported internal APIs. Beware that if you also use them,
            // your code could become broken by any update.
            var inputFileElementReferenceId = Blazor.platform.readStringField(readRequest, 0);
            var inputFileElement = document.querySelector('[_bl_' + inputFileElementReferenceId + ']');
            var fileId = Blazor.platform.readInt32Field(readRequest, 4);
            var sourceOffset = Blazor.platform.readUint64Field(readRequest, 8);
            var destination = Blazor.platform.readInt32Field(readRequest, 16);
            var destinationOffset = Blazor.platform.readInt32Field(readRequest, 20);
            var maxBytes = Blazor.platform.readInt32Field(readRequest, 24);

            var sourceArrayBuffer = getFileById(inputFileElement, fileId).arrayBuffer;
            var bytesToRead = Math.min(maxBytes, sourceArrayBuffer.byteLength - sourceOffset);
            var sourceUint8Array = new Uint8Array(sourceArrayBuffer, sourceOffset, bytesToRead);

            var destinationUint8Array = Blazor.platform.toUint8Array(destination);
            destinationUint8Array.set(sourceUint8Array, destinationOffset);

            return bytesToRead;
        },
        open: (element, elementId) => {
            if (!element && elementId) {
                element = document.getElementById(elementId);
            }

            if (element) {
                element.click();
            }
        }
    },

    FileEditInfo: function (adapter, element, elementId) {
        this.adapter = adapter;
        this.element = element;
        this.elementId = elementId;
    },

    breakpoint: {
        // Get the current breakpoint
        getBreakpoint: function () {
            return window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '');
        },

        // holds the list of components that are triggers to breakpoint
        breakpointComponents: [],

        lastBreakpoint: null,

        addBreakpointComponent: (elementId, dotnetAdapter) => {
            window.blazorise.breakpoint.breakpointComponents.push({ elementId: elementId, dotnetAdapter: dotnetAdapter });
        },

        findBreakpointComponentIndex: (elementId) => {
            for (index = 0; index < window.blazorise.breakpoint.breakpointComponents.length; ++index) {
                if (window.blazorise.breakpoint.breakpointComponents[index].elementId === elementId)
                    return index;
            }
            return -1;
        },

        isBreakpointComponent: (elementId) => {
            for (index = 0; index < window.blazorise.breakpoint.breakpointComponents.length; ++index) {
                if (window.blazorise.breakpoint.breakpointComponents[index].elementId === elementId)
                    return true;
            }
            return false;
        },

        registerBreakpointComponent: (elementId, dotnetAdapter) => {
            if (window.blazorise.breakpoint.isBreakpointComponent(elementId) !== true) {
                window.blazorise.breakpoint.addBreakpointComponent(elementId, dotnetAdapter);
            }
        },

        unregisterBreakpointComponent: (elementId) => {
            const index = window.blazorise.breakpoint.findBreakpointComponentIndex(elementId);
            if (index !== -1) {
                window.blazorise.breakpoint.breakpointComponents.splice(index, 1);
            }
        },

        onBreakpoint: (dotnetAdapter, currentBreakpoint) => {
            dotnetAdapter.invokeMethodAsync('OnBreakpoint', currentBreakpoint);
        }
    }
};



document.addEventListener('mousedown', function handler(evt) {
    window.blazorise.lastClickedDocumentElement = evt.target;
});

document.addEventListener('mouseup', function handler(evt) {
    if (evt.target === window.blazorise.lastClickedDocumentElement && window.blazorise.closableComponents && window.blazorise.closableComponents.length > 0) {
        const lastClosable = window.blazorise.closableComponents[window.blazorise.closableComponents.length - 1];

        if (lastClosable) {
            window.blazorise.tryClose(lastClosable, evt.target.id, false, hasParentInTree(evt.target, lastClosable.elementId));
        }
    }
});

document.addEventListener('keyup', function handler(evt) {
    if (evt.keyCode === 27 && window.blazorise.closableComponents && window.blazorise.closableComponents.length > 0) {
        const lastClosable = window.blazorise.closableComponents[window.blazorise.closableComponents.length - 1];

        if (lastClosable) {
            window.blazorise.tryClose(lastClosable, lastClosable.elementId, true, false);
        }
    }
});

// Recalculate breakpoint on resize
window.addEventListener('resize', function () {
    if (window.blazorise.breakpoint.breakpointComponents && window.blazorise.breakpoint.breakpointComponents.length > 0) {
        var currentBreakpoint = window.blazorise.breakpoint.getBreakpoint();

        if (window.blazorise.breakpoint.lastBreakpoint !== currentBreakpoint) {
            window.blazorise.breakpoint.lastBreakpoint = currentBreakpoint;

            for (index = 0; index < window.blazorise.breakpoint.breakpointComponents.length; ++index) {
                window.blazorise.breakpoint.onBreakpoint(window.blazorise.breakpoint.breakpointComponents[index].dotnetAdapter, currentBreakpoint);
            }
        }
    }
});

// Set initial breakpoint
window.blazorise.breakpoint.lastBreakpoint = window.blazorise.breakpoint.getBreakpoint();

function getFileById(elem, fileId) {
    var file = elem._blazorFilesById[fileId];
    if (!file) {
        throw new Error('There is no file with ID ' + fileId + '. The file list may have changed');
    }

    return file;
}

function getArrayBufferFromFileAsync(elem, fileId) {
    var file = getFileById(elem, fileId);

    // On the first read, convert the FileReader into a Promise<ArrayBuffer>
    if (!file.readPromise) {
        file.readPromise = new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function () { resolve(reader.result); };
            reader.onerror = function (err) { reject(err); };
            reader.readAsArrayBuffer(file.blob);
        });
    }

    return file.readPromise;
}

function hasParentInTree(element, parentElementId) {
    if (!element.parentElement) return false;
    if (element.parentElement.id === parentElementId) return true;
    return hasParentInTree(element.parentElement, parentElementId);
}

var uint8ToBase64 = (function () {
    // Code from https://github.com/beatgammit/base64-js/
    // License: MIT
    var lookup = [];

    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
    }

    function tripletToBase64(num) {
        return lookup[num >> 18 & 0x3F] +
            lookup[num >> 12 & 0x3F] +
            lookup[num >> 6 & 0x3F] +
            lookup[num & 0x3F];
    }

    function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i = start; i < end; i += 3) {
            tmp =
                ((uint8[i] << 16) & 0xFF0000) +
                ((uint8[i + 1] << 8) & 0xFF00) +
                (uint8[i + 2] & 0xFF);
            output.push(tripletToBase64(tmp));
        }
        return output.join('');
    }

    return function fromByteArray(uint8) {
        var tmp;
        var len = uint8.length;
        var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
        var parts = [];
        var maxChunkLength = 16383; // must be multiple of 3

        // go through the array every three bytes, we'll deal with trailing stuff later
        for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
            parts.push(encodeChunk(
                uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
            ));
        }

        // pad the end with zeros, but make sure to not forget the extra bytes
        if (extraBytes === 1) {
            tmp = uint8[len - 1];
            parts.push(
                lookup[tmp >> 2] +
                lookup[(tmp << 4) & 0x3F] +
                '=='
            );
        } else if (extraBytes === 2) {
            tmp = (uint8[len - 2] << 8) + uint8[len - 1];
            parts.push(
                lookup[tmp >> 10] +
                lookup[(tmp >> 4) & 0x3F] +
                lookup[(tmp << 2) & 0x3F] +
                '='
            );
        }

        return parts.join('');
    };
})();