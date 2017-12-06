!function() {
    if ("ontouchstart" in window) {
        var e,
            t,
            n,
            r,
            i,
            o,
            s = {};
        e = function(e, t) {
            return Math.abs(e[0] - t[0]) > 5 || Math.abs(e[1] - t[1]) > 5
        }, t = function(e) {
            this.startXY = [e.touches[0].clientX, e.touches[0].clientY], this.threshold = !1
        }, n = function(t) {
            return !this.threshold && void (this.threshold = e(this.startXY, [t.touches[0].clientX, t.touches[0].clientY]))
        }, r = function(t) {
            if (!this.threshold && !e(this.startXY, [t.changedTouches[0].clientX, t.changedTouches[0].clientY])) {
                var n = t.changedTouches[0],
                    r = document.createEvent("MouseEvents");
                r.initMouseEvent("click", !0, !0, window, 0, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), r.simulated = !0, t.target.dispatchEvent(r)
            }
        }, i = function(e) {
            var t = Date.now(),
                n = t - s.time,
                r = e.clientX,
                i = e.clientY,
                a = [Math.abs(s.x - r), Math.abs(s.y - i)],
                u = o(e.target, "A") || e.target,
                c = u.nodeName,
                l = "A" === c,
                f = window.navigator.standalone && l && e.target.getAttribute("href");
            return s.time = t, s.x = r, s.y = i, !((!e.simulated && (n < 500 || n < 1500 && a[0] < 50 && a[1] < 50) || f) && (e.preventDefault(), e.stopPropagation(), !f)) && (f && (window.location = u.getAttribute("href")), void (u && u.classList && (u.classList.add("energize-focus"), window.setTimeout(function() {
                u.classList.remove("energize-focus")
            }, 150))))
        }, o = function(e, t) {
            for (var n = e; n !== document.body;) {
                if (!n || n.nodeName === t)
                    return n;
                n = n.parentNode
            }
            return null
        }, document.addEventListener("touchstart", t, !1), document.addEventListener("touchmove", n, !1), document.addEventListener("touchend", r, !1), document.addEventListener("click", i, !0)
    }
}(), /*!
 * jQuery JavaScript Library v2.2.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-08T20:02Z
 */
function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e, t, n) {
        if (oe.isFunction(t))
            return oe.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return oe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (ge.test(t))
                return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return Z.call(t, e) > -1 !== n
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;)
            ;
        return e
    }
    function o(e) {
        var t = {};
        return oe.each(e.match(we) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    function s() {
        Q.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), oe.ready()
    }
    function a() {
        this.expando = oe.expando + a.uid++
    }
    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(je, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ne.test(n) ? oe.parseJSON(n) : n)
                } catch (e) {}
                ke.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function c(e, t, n, r) {
        var i,
            o = 1,
            s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return oe.css(e, t, "")
            },
            u = a(),
            c = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
            l = (oe.cssNumber[t] || "px" !== c && +u) && Ae.exec(oe.css(e, t));
        if (l && l[3] !== c) {
            c = c || l[3], n = n || [], l = +u || 1;
            do o = o || ".5", l /= o, oe.style(e, t, l + c);
            while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
    }
    function l(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }
    function f(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"))
    }
    function p(e, t, n, r, i) {
        for (var o, s, a, u, c, p, d = t.createDocumentFragment(), h = [], g = 0, v = e.length; g < v; g++)
            if (o = e[g], o || 0 === o)
                if ("object" === oe.type(o))
                    oe.merge(h, o.nodeType ? [o] : o);
                else if (Pe.test(o)) {
                    for (s = s || d.appendChild(t.createElement("div")), a = ($e.exec(o) || ["", ""])[1].toLowerCase(), u = He[a] || He._default, s.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2], p = u[0]; p--;)
                        s = s.lastChild;
                    oe.merge(h, s.childNodes), s = d.firstChild, s.textContent = ""
                } else
                    h.push(t.createTextNode(o));
        for (d.textContent = "", g = 0; o = h[g++];)
            if (r && oe.inArray(o, r) > -1)
                i && i.push(o);
            else if (c = oe.contains(o.ownerDocument, o), s = l(d.appendChild(o), "script"), c && f(s), n)
                for (p = 0; o = s[p++];)
                    Fe.test(o.type || "") && n.push(o);
        return d
    }
    function d() {
        return !0
    }
    function h() {
        return !1
    }
    function g() {
        try {
            return Q.activeElement
        } catch (e) {}
    }
    function v(e, t, n, r, i, o) {
        var s,
            a;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in t)
                v(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1)
            i = h;
        else if (!i)
            return this;
        return 1 === o && (s = i, i = function(e) {
            return oe().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = oe.guid++)), e.each(function() {
            oe.event.add(this, t, i, r, n)
        })
    }
    function m(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }
    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }
    function x(e) {
        var t = ze.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function b(e, t) {
        var n,
            r,
            i,
            o,
            s,
            a,
            u,
            c;
        if (1 === t.nodeType) {
            if (Ee.hasData(e) && (o = Ee.access(e), s = Ee.set(t, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (i in c)
                    for (n = 0, r = c[i].length; n < r; n++)
                        oe.event.add(t, i, c[i][n])
            }
            ke.hasData(e) && (a = ke.access(e), u = oe.extend({}, a), ke.set(t, u))
        }
    }
    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && qe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function T(e, t, n, r) {
        t = G.apply([], t);
        var i,
            o,
            s,
            a,
            u,
            c,
            f = 0,
            d = e.length,
            h = d - 1,
            g = t[0],
            v = oe.isFunction(g);
        if (v || d > 1 && "string" == typeof g && !re.checkClone && Be.test(g))
            return e.each(function(i) {
                var o = e.eq(i);
                v && (t[0] = g.call(this, i, o.html())), T(o, t, n, r)
            });
        if (d && (i = p(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (s = oe.map(l(i, "script"), y), a = s.length; f < d; f++)
                u = i, f !== h && (u = oe.clone(u, !0, !0), a && oe.merge(s, l(u, "script"))), n.call(e[f], u, f);
            if (a)
                for (c = s[s.length - 1].ownerDocument, oe.map(s, x), f = 0; f < a; f++)
                    u = s[f], Fe.test(u.type || "") && !Ee.access(u, "globalEval") && oe.contains(c, u) && (u.src ? oe._evalUrl && oe._evalUrl(u.src) : oe.globalEval(u.textContent.replace(Xe, "")))
        }
        return e
    }
    function S(e, t, n) {
        for (var r, i = t ? oe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || oe.cleanData(l(r)), r.parentNode && (n && oe.contains(r.ownerDocument, r) && f(l(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    function C(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body),
            r = oe.css(n[0], "display");
        return n.detach(), r
    }
    function E(e) {
        var t = Q,
            n = Ue[e];
        return n || (n = C(e, t), "none" !== n && n || (Ve = (Ve || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ve[0].contentDocument, t.write(), t.close(), n = C(e, t), Ve.detach()), Ue[e] = n), n
    }
    function k(e, t, n) {
        var r,
            i,
            o,
            s,
            a = e.style;
        return n = n || Je(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), !re.pixelMarginRight() && Qe.test(s) && Ye.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }
    function N(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function j(e) {
        if (e in rt)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
            if (e = nt[n] + t, e in rt)
                return e
    }
    function L(e, t, n) {
        var r = Ae.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function A(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2)
            "margin" === n && (s += oe.css(e, n + De[o], !0, i)), r ? ("content" === n && (s -= oe.css(e, "padding" + De[o], !0, i)), "margin" !== n && (s -= oe.css(e, "border" + De[o] + "Width", !0, i))) : (s += oe.css(e, "padding" + De[o], !0, i), "padding" !== n && (s += oe.css(e, "border" + De[o] + "Width", !0, i)));
        return s
    }
    function D(t, n, r) {
        var i = !0,
            o = "width" === n ? t.offsetWidth : t.offsetHeight,
            s = Je(t),
            a = "border-box" === oe.css(t, "boxSizing", !1, s);
        if (Q.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), o <= 0 || null == o) {
            if (o = k(t, n, s), (o < 0 || null == o) && (o = t.style[n]), Qe.test(o))
                return o;
            i = a && (re.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
        }
        return o + A(t, n, r || (a ? "border" : "content"), i, s) + "px"
    }
    function O(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)
            r = e[s], r.style && (o[s] = Ee.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Oe(r) && (o[s] = Ee.access(r, "olddisplay", E(r.nodeName)))) : (i = Oe(r), "none" === n && i || Ee.set(r, "olddisplay", i ? n : oe.css(r, "display"))));
        for (s = 0; s < a; s++)
            r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }
    function q(e, t, n, r, i) {
        return new q.prototype.init(e, t, n, r, i)
    }
    function $() {
        return e.setTimeout(function() {
            it = void 0
        }), it = oe.now()
    }
    function F(e, t) {
        var n,
            r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            n = De[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }
    function H(e, t, n) {
        for (var r, i = (I.tweeners[t] || []).concat(I.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function P(e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            u,
            c,
            l,
            f = this,
            p = {},
            d = e.style,
            h = e.nodeType && Oe(e),
            g = Ee.get(e, "fxshow");
        n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], c = oe.css(e, "display"), l = "none" === c ? Ee.get(e, "olddisplay") || E(e.nodeName) : c, "inline" === l && "none" === oe.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], st.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])
                        continue;
                    h = !0
                }
                p[r] = g && g[r] || oe.style(e, r)
            } else
                c = void 0;
        if (oe.isEmptyObject(p))
            "inline" === ("none" === c ? E(e.nodeName) : c) && (d.display = c);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = Ee.access(e, "fxshow", {}), o && (g.hidden = !h), h ? oe(e).show() : f.done(function() {
                oe(e).hide()
            }), f.done(function() {
                var t;
                Ee.remove(e, "fxshow");
                for (t in p)
                    oe.style(e, t, p[t])
            });
            for (r in p)
                s = H(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function R(e, t) {
        var n,
            r,
            i,
            o,
            s;
        for (n in e)
            if (r = oe.camelCase(n), i = t[r], o = e[n], oe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = oe.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n], t[n] = i)
            } else
                t[r] = i
    }
    function I(e, t, n) {
        var r,
            i,
            o = 0,
            s = I.prefilters.length,
            a = oe.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i)
                    return !1;
                for (var t = it || $(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, s = 0, u = c.tweens.length; s < u; s++)
                    c.tweens[s].run(o);
                return a.notifyWith(e, [c, o, n]), o < 1 && u ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {},
                    easing: oe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || $(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = oe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i)
                        return this;
                    for (i = !0; n < r; n++)
                        c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            l = c.props;
        for (R(l, c.opts.specialEasing); o < s; o++)
            if (r = I.prefilters[o].call(c, e, l, c.opts))
                return oe.isFunction(r.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(r.stop, r)), r;
        return oe.map(l, H, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(u, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function M(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function _(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r,
                i = 0,
                o = t.toLowerCase().match(we) || [];
            if (oe.isFunction(n))
                for (; r = o[i++];)
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function W(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, oe.each(e[a] || [], function(e, a) {
                var c = a(t, n, r);
                return "string" != typeof c || s || o[c] ? s ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }), u
        }
        var o = {},
            s = e === Et;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function B(e, t) {
        var n,
            r,
            i = oe.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && oe.extend(!0, e, r), e
    }
    function z(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];)
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o)
            return o !== u[0] && u.unshift(o), n[o]
    }
    function X(e, t, n, r) {
        var i,
            o,
            s,
            a,
            u,
            c = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (s in e.converters)
                c[s.toLowerCase()] = e.converters[s];
        for (o = l.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (s = c[u + " " + o] || c["* " + o], !s)
                        for (i in c)
                            if (a = i.split(" "), a[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                                s === !0 ? s = c[i] : c[i] !== !0 && (o = a[0], l.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e["throws"])
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function V(e, t, n, r) {
        var i;
        if (oe.isArray(t))
            oe.each(t, function(t, i) {
                n || Lt.test(e) ? r(e, i) : V(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== oe.type(t))
            r(e, t);
        else
            for (i in t)
                V(e + "[" + i + "]", t[i], n, r)
    }
    function U(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Y = [],
        Q = e.document,
        J = Y.slice,
        G = Y.concat,
        K = Y.push,
        Z = Y.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        re = {},
        ie = "2.2.0",
        oe = function(e, t) {
            return new oe.fn.init(e, t)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        ue = /-([\da-z])/gi,
        ce = function(e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: ie,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return oe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: Y.sort,
        splice: Y.splice
    }, oe.extend = oe.fn.extend = function() {
        var e,
            t,
            n,
            r,
            i,
            o,
            s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t], r = e[t], s !== r && (c && r && (oe.isPlainObject(r) || (i = oe.isArray(r))) ? (i ? (i = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, s[t] = oe.extend(c, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" === oe.type(e) && !e.nodeType && !oe.isWindow(e) && !(e.constructor && !ne.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t,
                n = eval;
            e = oe.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(ue, ce)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r,
                i = 0;
            if (n(e))
                for (r = e.length; i < r && t.call(e[i], i, e[i]) !== !1; i++)
                    ;
            else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? oe.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++)
                r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i,
                o,
                s = 0,
                a = [];
            if (n(e))
                for (i = e.length; s < i; s++)
                    o = t(e[s], s, r), null != o && a.push(o);
            else
                for (s in e)
                    o = t(e[s], s, r), null != o && a.push(o);
            return G.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n,
                r,
                i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e))
                return r = J.call(arguments, 2), i = function() {
                    return e.apply(t || this, r.concat(J.call(arguments)))
                }, i.guid = e.guid = e.guid || oe.guid++, i
        },
        now: Date.now,
        support: re
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = Y[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var le = /*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
    function(e) {
        function t(e, t, n, r) {
            var i,
                o,
                s,
                a,
                u,
                c,
                f,
                d,
                h = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                return n;
            if (!r && ((t ? t.ownerDocument || t : M) !== O && D(t), t = t || O, $)) {
                if (11 !== g && (c = me.exec(e)))
                    if (i = c[1]) {
                        if (9 === g) {
                            if (!(s = t.getElementById(i)))
                                return n;
                            if (s.id === i)
                                return n.push(s), n
                        } else if (h && (s = h.getElementById(i)) && R(t, s) && s.id === i)
                            return n.push(s), n
                    } else {
                        if (c[2])
                            return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = c[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(i)), n
                    }
                if (w.qsa && !X[e + " "] && (!F || !F.test(e))) {
                    if (1 !== g)
                        h = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(xe, "\\$&") : t.setAttribute("id", a = I), f = E(e), o = f.length, u = pe.test(a) ? "#" + a : "[id='" + a + "']"; o--;)
                            f[o] = u + " " + p(f[o]);
                        d = f.join(","), h = ye.test(e) && l(t.parentNode) || t
                    }
                    if (d)
                        try {
                            return K.apply(n, h.querySelectorAll(d)), n
                        } catch (e) {} finally {
                            a === I && t.removeAttribute("id")
                        }
                }
            }
            return N(e.replace(ae, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[I] = !0, e
        }
        function i(e) {
            var t = O.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;)
                T.attrHandle[n[r]] = t
        }
        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;)
                        n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function l(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function f() {}
        function p(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = W++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            } : function(t, n, s) {
                var a,
                    u,
                    c,
                    l = [_, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s))
                            return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (c = t[I] || (t[I] = {}), u = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = u[r]) && a[0] === _ && a[1] === o)
                                return l[2] = a[2];
                            if (u[r] = l, l[2] = e(t, n, s))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            } : e[0]
        }
        function g(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                t(e, n[i], r);
            return r
        }
        function v(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++)
                (o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
            return s
        }
        function m(e, t, n, i, o, s) {
            return i && !i[I] && (i = m(i)), o && !o[I] && (o = m(o, s)), r(function(r, s, a, u) {
                var c,
                    l,
                    f,
                    p = [],
                    d = [],
                    h = s.length,
                    m = r || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !r && t ? m : v(m, p, e, a, u),
                    x = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, x, a, u), i)
                    for (c = v(x, d), i(c, [], a, u), l = c.length; l--;)
                        (f = c[l]) && (x[d[l]] = !(y[d[l]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], l = x.length; l--;)
                                (f = x[l]) && c.push(y[l] = f);
                            o(null, x = [], c, u)
                        }
                        for (l = x.length; l--;)
                            (f = x[l]) && (c = o ? ee(r, f) : p[l]) > -1 && (r[c] = !(s[c] = f))
                    }
                } else
                    x = v(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : K.apply(s, x)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                    return e === t
                }, s, !0), c = d(function(e) {
                    return ee(t, e) > -1
                }, s, !0), l = [function(e, n, r) {
                    var i = !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                    return t = null, i
                }]; a < i; a++)
                if (n = T.relative[e[a].type])
                    l = [d(h(l), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches), n[I]) {
                        for (r = ++a; r < i && !T.relative[e[r].type]; r++)
                            ;
                        return m(a > 1 && h(l), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, a < r && y(e.slice(a, r)), r < i && y(e = e.slice(r)), r < i && p(e))
                    }
                    l.push(n)
                }
            return h(l)
        }
        function x(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function(r, s, a, u, c) {
                    var l,
                        f,
                        p,
                        d = 0,
                        h = "0",
                        g = r && [],
                        m = [],
                        y = j,
                        x = r || o && T.find.TAG("*", c),
                        b = _ += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (c && (j = s === O || s || c); h !== w && null != (l = x[h]); h++) {
                        if (o && l) {
                            for (f = 0, s || l.ownerDocument === O || (D(l), a = !$); p = e[f++];)
                                if (p(l, s || O, a)) {
                                    u.push(l);
                                    break
                                }
                            c && (_ = b)
                        }
                        i && ((l = !p && l) && d--, r && g.push(l))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];)
                            p(g, m, s, a);
                        if (r) {
                            if (d > 0)
                                for (; h--;)
                                    g[h] || m[h] || (m[h] = J.call(u));
                            m = v(m)
                        }
                        K.apply(u, m), c && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return c && (_ = b, j = y), g
                };
            return i ? r(s) : s
        }
        var b,
            w,
            T,
            S,
            C,
            E,
            k,
            N,
            j,
            L,
            A,
            D,
            O,
            q,
            $,
            F,
            H,
            P,
            R,
            I = "sizzle" + 1 * new Date,
            M = e.document,
            _ = 0,
            W = 0,
            B = n(),
            z = n(),
            X = n(),
            V = function(e, t) {
                return e === t && (A = !0), 0
            },
            U = 1 << 31,
            Y = {}.hasOwnProperty,
            Q = [],
            J = Q.pop,
            G = Q.push,
            K = Q.push,
            Z = Q.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(oe),
            pe = new RegExp("^" + re + "$"),
            de = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            xe = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Te = function() {
                D()
            };
        try {
            K.apply(Q = Z.call(M.childNodes), M.childNodes), Q[M.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: Q.length ? function(e, t) {
                    G.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];)
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, D = t.setDocument = function(e) {
            var t,
                n,
                r = e ? e.ownerDocument || e : M;
            return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, q = O.documentElement, $ = !C(O), (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(O.getElementsByClassName), w.getById = i(function(e) {
                return q.appendChild(e).id = I, !O.getElementsByName || !O.getElementsByName(I).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && $) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && $)
                    return t.getElementsByClassName(e)
            }, H = [], F = [], (w.qsa = ve.test(O.querySelectorAll)) && (i(function(e) {
                q.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + I + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || F.push(".#.+[+~]")
            }), i(function(e) {
                var t = O.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = ve.test(P = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), H.push("!=", oe)
            }), F = F.length && new RegExp(F.join("|")), H = H.length && new RegExp(H.join("|")), t = ve.test(q.compareDocumentPosition), R = t || ve.test(q.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e)
                            return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t)
                    return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === M && R(M, e) ? -1 : t === O || t.ownerDocument === M && R(M, t) ? 1 : L ? ee(L, e) - ee(L, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t)
                    return A = !0, 0;
                var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    u = [t];
                if (!i || !o)
                    return e === O ? -1 : t === O ? 1 : i ? -1 : o ? 1 : L ? ee(L, e) - ee(L, t) : 0;
                if (i === o)
                    return s(e, t);
                for (n = e; n = n.parentNode;)
                    a.unshift(n);
                for (n = t; n = n.parentNode;)
                    u.unshift(n);
                for (; a[r] === u[r];)
                    r++;
                return r ? s(a[r], u[r]) : a[r] === M ? -1 : u[r] === M ? 1 : 0
            }, O) : O
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== O && D(e), n = n.replace(le, "='$1']"), w.matchesSelector && $ && !X[n + " "] && (!H || !H.test(n)) && (!F || !F.test(n)))
                try {
                    var r = P.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return t(n, O, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== O && D(e), R(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== O && D(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
            return void 0 !== r ? r : w.attributes || !$ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (A = !w.detectDuplicates, L = !w.sortStable && e.slice(0), e.sort(V), A) {
                for (; t = e[i++];)
                    t === e[i] && (r = n.push(i));
                for (; r--;)
                    e.splice(n[r], 1)
            }
            return L = null, e
        }, S = t.getText = function(e) {
            var t,
                n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += S(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++];)
                    n += S(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t,
                        n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var c,
                            l,
                            f,
                            p,
                            d,
                            h,
                            g = o !== s ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = a && t.nodeName.toLowerCase(),
                            y = !u && !a,
                            x = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];)
                                        if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                for (p = v, f = p[I] || (p[I] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[e] || [], d = c[0] === _ && c[1], x = d && c[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                    if (1 === p.nodeType && ++x && p === t) {
                                        l[e] = [_, d, x];
                                        break
                                    }
                            } else if (y && (p = t, f = p[I] || (p[I] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[e] || [], d = c[0] === _ && c[1], x = d), x === !1)
                                for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && (f = p[I] || (p[I] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), l[e] = [_, x]), p !== t));)
                                    ;
                            return x -= i, x === r || x % r === 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i,
                        o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[I] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;)
                            r = ee(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(ae, "$1"));
                    return i[I] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(be, we), function(t) {
                        return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(), function(t) {
                        var n;
                        do if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                            return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === q
                },
                focus: function(e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;)
                        e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;)
                        e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[b] = a(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, E = t.tokenize = function(e, n) {
            var r,
                i,
                o,
                s,
                a,
                u,
                c,
                l = z[e + " "];
            if (l)
                return n ? 0 : l.slice(0);
            for (a = e, u = [], c = T.preFilter; a;) {
                r && !(i = ue.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ae, " ")
                }), a = a.slice(r.length));
                for (s in T.filter)
                    !(i = de[s].exec(a)) || c[s] && !(i = c[s](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: s,
                        matches: i
                    }), a = a.slice(r.length));
                if (!r)
                    break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }, k = t.compile = function(e, t) {
            var n,
                r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;)
                    o = y(t[n]), o[I] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)), o.selector = e
            }
            return o
        }, N = t.select = function(e, t, n, r) {
            var i,
                o,
                s,
                a,
                u,
                c = "function" == typeof e && e,
                f = !r && E(e = c.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && $ && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(be, we), t) || [])[0], !t)
                        return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)
                    if ((u = T.find[a]) && (r = u(s.matches[0].replace(be, we), ye.test(o[0].type) && l(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && p(o), !e)
                            return K.apply(n, r), n;
                        break
                    }
            }
            return (c || k(e, f))(r, t, !$, n, !t || ye.test(e) && l(t.parentNode) || t), n
        }, w.sortStable = I.split("").sort(V).join("") === I, w.detectDuplicates = !!A, D(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(O.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            if (!n)
                return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    oe.find = le, oe.expr = le.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = le.uniqueSort, oe.text = le.getText, oe.isXMLDoc = le.isXML, oe.contains = le.contains;
    var fe = function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && oe(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },
        pe = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        de = oe.expr.match.needsContext,
        he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ge = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? oe.find.matchesSelector(r, e) ? [r] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function(e) {
            var t,
                n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e)
                return this.pushStack(oe(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (oe.contains(i[t], this))
                            return !0
                }));
            for (t = 0; t < n; t++)
                oe.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? oe.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && de.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var ve,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ye = oe.fn.init = function(e, t, n) {
            var r,
                i;
            if (!e)
                return this;
            if (n = n || ve, "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : me.exec(e), !r || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), he.test(r[1]) && oe.isPlainObject(t))
                        for (r in t)
                            oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = Q.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = Q, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    ye.prototype = oe.fn, ve = oe(Q);
    var xe = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.fn.extend({
        has: function(e) {
            var t = oe(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (oe.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = de.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return fe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return fe(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return fe(e, "nextSibling")
        },
        prevAll: function(e) {
            return fe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return fe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return fe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return pe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return pe(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(n, r) {
            var i = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = oe.filter(r, i)), this.length > 1 && (be[e] || oe.uniqueSort(i), xe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var we = /\S+/g;
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t,
            n,
            r,
            i,
            s = [],
            a = [],
            u = -1,
            c = function() {
                for (i = e.once, r = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < s.length;)
                        s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = s.length, n = !1);
                e.memory || (n = !1), t = !1, i && (s = n ? [] : "")
            },
            l = {
                add: function() {
                    return s && (n && !t && (u = s.length - 1, a.push(n)), function t(n) {
                        oe.each(n, function(n, r) {
                            oe.isFunction(r) ? e.unique && l.has(r) || s.push(r) : r && r.length && "string" !== oe.type(r) && t(r)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function() {
                    return oe.each(arguments, function(e, t) {
                        for (var n; (n = oe.inArray(t, s, n)) > -1;)
                            s.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? oe.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return i = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return i = a = [], n || (s = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    }, oe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return oe.Deferred(function(n) {
                            oe.each(t, function(t, o) {
                                var s = oe.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? oe.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, oe.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t,
                n,
                r,
                i = 0,
                o = J.call(arguments),
                s = o.length,
                a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : oe.Deferred(),
                c = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? J.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++)
                    o[i] && oe.isFunction(o[i].promise) ? o[i].promise().progress(c(i, n, t)).done(c(i, r, o)).fail(u.reject) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var Te;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (Te.resolveWith(Q, [oe]), oe.fn.triggerHandler && (oe(Q).triggerHandler("ready"), oe(Q).off("ready"))))
        }
    }), oe.ready.promise = function(t) {
        return Te || (Te = oe.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? e.setTimeout(oe.ready) : (Q.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), Te.promise(t)
    }, oe.ready.promise();
    var Se = function(e, t, n, r, i, o, s) {
            var a = 0,
                u = e.length,
                c = null == n;
            if ("object" === oe.type(n)) {
                i = !0;
                for (a in n)
                    Se(e, t, a, n[a], !0, o, s)
            } else if (void 0 !== r && (i = !0, oe.isFunction(r) || (s = !0), c && (s ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                return c.call(oe(e), n)
            })), t))
                for (; a < u; a++)
                    t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
        },
        Ce = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!Ce(e))
                return {};
            var t = e[this.expando];
            return t || (t = {}, Ce(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r,
                i = this.cache(e);
            if ("string" == typeof t)
                i[t] = n;
            else
                for (r in t)
                    i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n,
                r,
                i,
                o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t)
                    this.register(e);
                else {
                    oe.isArray(t) ? r = t.concat(t.map(oe.camelCase)) : (i = oe.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(we) || [])), n = r.length;
                    for (; n--;)
                        delete o[r[n]]
                }
                (void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var Ee = new a,
        ke = new a,
        Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        je = /[A-Z]/g;
    oe.extend({
        hasData: function(e) {
            return ke.hasData(e) || Ee.hasData(e)
        },
        data: function(e, t, n) {
            return ke.access(e, t, n)
        },
        removeData: function(e, t) {
            ke.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ee.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ee.remove(e, t)
        }
    }), oe.fn.extend({
        data: function(e, t) {
            var n,
                r,
                i,
                o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ke.get(o), 1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;)
                        s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = oe.camelCase(r.slice(5)), u(o, r, i[r])));
                    Ee.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ke.set(this, e)
            }) : Se(this, function(t) {
                var n,
                    r;
                if (o && void 0 === t) {
                    if (n = ke.get(o, e) || ke.get(o, e.replace(je, "-$&").toLowerCase()), void 0 !== n)
                        return n;
                    if (r = oe.camelCase(e), n = ke.get(o, r), void 0 !== n)
                        return n;
                    if (n = u(o, r, void 0), void 0 !== n)
                        return n
                } else
                    r = oe.camelCase(e), this.each(function() {
                        var n = ke.get(this, r);
                        ke.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && ke.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ke.remove(this, e)
            })
        }
    }), oe.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue", r = Ee.get(e, t), n && (!r || oe.isArray(n) ? r = Ee.access(e, t, oe.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = oe._queueHooks(e, t),
                s = function() {
                    oe.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ee.get(e, n) || Ee.access(e, n, {
                    empty: oe.Callbacks("once memory").add(function() {
                        Ee.remove(e, [t + "queue", n])
                    })
                })
        }
    }), oe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n,
                r = 1,
                i = oe.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)
                n = Ee.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ae = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
        De = ["Top", "Right", "Bottom", "Left"],
        Oe = function(e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        qe = /^(?:checkbox|radio)$/i,
        $e = /<([\w:-]+)/,
        Fe = /^$|\/(?:java|ecma)script/i,
        He = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    He.optgroup = He.option, He.tbody = He.tfoot = He.colgroup = He.caption = He.thead, He.th = He.td;
    var Pe = /<|&#?\w+;/;
    !function() {
        var e = Q.createDocumentFragment(),
            t = e.appendChild(Q.createElement("div")),
            n = Q.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Re = /^key/,
        Ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Me = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o,
                s,
                a,
                u,
                c,
                l,
                f,
                p,
                d,
                h,
                g,
                v = Ee.get(e);
            if (v)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = oe.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                    return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(we) || [""], c = t.length; c--;)
                    a = Me.exec(t[c]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = oe.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = oe.event.special[d] || {}, l = oe.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && oe.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), oe.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o,
                s,
                a,
                u,
                c,
                l,
                f,
                p,
                d,
                h,
                g,
                v = Ee.hasData(e) && Ee.get(e);
            if (v && (u = v.events)) {
                for (t = (t || "").match(we) || [""], c = t.length; c--;)
                    if (a = Me.exec(t[c]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = oe.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;)
                            l = p[o], !i && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                        s && !p.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || oe.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u)
                            oe.event.remove(e, d + t[c], n, r, !0);
                oe.isEmptyObject(u) && Ee.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t,
                n,
                r,
                i,
                o,
                s = [],
                a = J.call(arguments),
                u = (Ee.get(this, "events") || {})[e.type] || [],
                c = oe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = oe.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)
                        e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a),
                        void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n,
                r,
                i,
                o,
                s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], n = 0; n < a; n++)
                            o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? oe(i, this).index(u) > -1 : oe.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n,
                    r,
                    i,
                    o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[oe.expando])
                return e;
            var t,
                n,
                r,
                i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Ie.test(i) ? this.mouseHooks : Re.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(o), t = r.length; t--;)
                n = r[t], e[n] = o[n];
            return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== g() && this.focus)
                        return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === g() && this.blur)
                        return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && oe.nodeName(this, "input"))
                        return this.click(), !1
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, oe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void (this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = d, e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = d, e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n,
                    r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || oe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), oe.fn.extend({
        on: function(e, t, n, r) {
            return v(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return v(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r,
                i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj, oe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
                oe.event.remove(this, e, n, t)
            })
        }
    });
    var _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        We = /<script|<style|<link/i,
        Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ze = /^true\/(.*)/,
        Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function(e) {
            return e.replace(_e, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r,
                i,
                o,
                s,
                a = e.cloneNode(!0),
                u = oe.contains(e.ownerDocument, e);
            if (!(re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (s = l(a), o = l(e), r = 0, i = o.length; r < i; r++)
                    w(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || l(e), s = s || l(a), r = 0, i = o.length; r < i; r++)
                        b(o[r], s[r]);
                else
                    b(e, a);
            return s = l(a, "script"), s.length > 0 && f(s, !u && l(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, r, i = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Ce(n)) {
                    if (t = n[Ee.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, t.handle);
                        n[Ee.expando] = void 0
                    }
                    n[ke.expando] && (n[ke.expando] = void 0)
                }
        }
    }), oe.fn.extend({
        domManip: T,
        detach: function(e) {
            return S(this, e, !0)
        },
        remove: function(e) {
            return S(this, e)
        },
        text: function(e) {
            return Se(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return T(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return T(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (oe.cleanData(l(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Se(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !We.test(e) && !He[($e.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(l(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return T(this, arguments, function(t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(l(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var n, r = [], i = oe(e), o = i.length - 1, s = 0; s <= o; s++)
                n = s === o ? this : this.clone(!0), oe(i[s])[t](n), K.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ve,
        Ue = {
            HTML: "block",
            BODY: "block"
        },
        Ye = /^margin/,
        Qe = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
        Je = function(t) {
            var n = t.ownerDocument.defaultView;
            return n.opener || (n = e), n.getComputedStyle(t)
        },
        Ge = function(e, t, n, r) {
            var i,
                o,
                s = {};
            for (o in t)
                s[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)
                e.style[o] = s[o];
            return i
        },
        Ke = Q.documentElement;
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ke.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, a.style.marginRight = "50%", i = "4px" === t.marginRight, Ke.removeChild(s)
        }
        var n,
            r,
            i,
            o,
            s = Q.createElement("div"),
            a = Q.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), oe.extend(re, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            pixelMarginRight: function() {
                return null == r && t(), i
            },
            reliableMarginLeft: function() {
                return null == r && t(), o
            },
            reliableMarginRight: function() {
                var t,
                    n = a.appendChild(Q.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ke.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Ke.removeChild(s), a.removeChild(n), t
            }
        }))
    }();
    var Ze = /^(none|table(?!-c[ea]).+)/,
        et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        tt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        nt = ["Webkit", "O", "Moz", "ms"],
        rt = Q.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = k(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    s,
                    a = oe.camelCase(t),
                    u = e.style;
                return t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ae.exec(n)) && i[1] && (n = c(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (oe.cssNumber[a] ? "" : "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)), void 0)
            }
        },
        css: function(e, t, n, r) {
            var i,
                o,
                s,
                a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = k(e, t, r)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }), oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Ge(e, et, function() {
                        return D(e, t, r)
                    }) : D(e, t, r)
            },
            set: function(e, n, r) {
                var i,
                    o = r && Je(e),
                    s = r && A(e, t, r, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                return s && (i = Ae.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), L(e, n, s)
            }
        }
    }), oe.cssHooks.marginLeft = N(re.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(k(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }), oe.cssHooks.marginRight = N(re.reliableMarginRight, function(e, t) {
        if (t)
            return Ge(e, {
                display: "inline-block"
            }, k, [e, "marginRight"])
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + De[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ye.test(e) || (oe.cssHooks[e + t].set = L)
    }), oe.fn.extend({
        css: function(e, t) {
            return Se(this, function(e, t, n) {
                var r,
                    i,
                    o = {},
                    s = 0;
                if (oe.isArray(t)) {
                    for (r = Je(e), i = t.length; s < i; s++)
                        o[t[s]] = oe.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return O(this, !0)
        },
        hide: function() {
            return O(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Oe(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = q, q.prototype = {
        constructor: q,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        },
        run: function(e) {
            var t,
                n = q.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, oe.fx = q.prototype.init, oe.fx.step = {};
    var it,
        ot,
        st = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    oe.Animation = oe.extend(I, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return c(n.elem, e, Ae.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(we);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r], I.tweeners[n] = I.tweeners[n] || [], I.tweeners[n].unshift(t)
        },
        prefilters: [P],
        prefilter: function(e, t) {
            t ? I.prefilters.unshift(e) : I.prefilters.push(e)
        }
    }), oe.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? oe.extend({}, e) : {
            complete: n || !n && t || oe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !oe.isFunction(t) && t
        };
        return r.duration = oe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in oe.fx.speeds ? oe.fx.speeds[r.duration] : oe.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            oe.isFunction(r.old) && r.old.call(this), r.queue && oe.dequeue(this, r.queue)
        }, r
    }, oe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Oe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = oe.isEmptyObject(e),
                o = oe.speed(t, n, r),
                s = function() {
                    var t = I(this, oe.extend({}, e), o);
                    (i || Ee.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = oe.timers,
                    s = Ee.get(this);
                if (i)
                    s[i] && s[i].stop && r(s[i]);
                else
                    for (i in s)
                        s[i] && s[i].stop && at.test(i) && r(s[i]);
                for (i = o.length; i--;)
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || oe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t,
                    n = Ee.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = oe.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, oe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), oe.each(["toggle", "show", "hide"], function(e, t) {
        var n = oe.fn[t];
        oe.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, i)
        }
    }), oe.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        oe.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), oe.timers = [], oe.fx.tick = function() {
        var e,
            t = 0,
            n = oe.timers;
        for (it = oe.now(); t < n.length; t++)
            e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || oe.fx.stop(), it = void 0
    }, oe.fx.timer = function(e) {
        oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
    }, oe.fx.interval = 13, oe.fx.start = function() {
        ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
    }, oe.fx.stop = function() {
        e.clearInterval(ot), ot = null
    }, oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, oe.fn.delay = function(t, n) {
        return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }, function() {
        var e = Q.createElement("input"),
            t = Q.createElement("select"),
            n = t.appendChild(Q.createElement("option"));
        e.type = "checkbox", re.checkOn = "" !== e.value, re.optSelected = n.selected, t.disabled = !0, re.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", re.radioValue = "t" === e.value
    }();
    var ut,
        ct = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function(e, t) {
            return Se(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function(e, t, n) {
            var r,
                i,
                o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = oe.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n,
                r,
                i = 0,
                o = t && t.match(we);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];)
                    r = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }), ut = {
        set: function(e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ct[t] || oe.find.attr;
        ct[t] = function(e, t, r) {
            var i,
                o;
            return r || (o = ct[t], ct[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ct[t] = o), i
        }
    });
    var lt = /^(?:input|select|textarea|button)$/i,
        ft = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return Se(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[oe.propFix[e] || e]
            })
        }
    }), oe.extend({
        prop: function(e, t, n) {
            var r,
                i,
                o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, i = oe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : lt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), re.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    });
    var pt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t,
                n,
                r,
                i,
                o,
                s,
                a,
                u = 0;
            if (oe.isFunction(e))
                return this.each(function(t) {
                    oe(this).addClass(e.call(this, t, M(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[u++];)
                    if (i = M(n), r = 1 === n.nodeType && (" " + i + " ").replace(pt, " ")) {
                        for (s = 0; o = t[s++];)
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = oe.trim(r), i !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t,
                n,
                r,
                i,
                o,
                s,
                a,
                u = 0;
            if (oe.isFunction(e))
                return this.each(function(t) {
                    oe(this).removeClass(e.call(this, t, M(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[u++];)
                    if (i = M(n), r = 1 === n.nodeType && (" " + i + " ").replace(pt, " ")) {
                        for (s = 0; o = t[s++];)
                            for (; r.indexOf(" " + o + " ") > -1;)
                                r = r.replace(" " + o + " ", " ");
                        a = oe.trim(r), i !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
                oe(this).toggleClass(e.call(this, n, M(this), t), t)
            }) : this.each(function() {
                var t,
                    r,
                    i,
                    o;
                if ("string" === n)
                    for (r = 0, i = oe(this), o = e.match(we) || []; t = o[r++];)
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || (t = M(this), t && Ee.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ee.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t,
                n,
                r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + M(n) + " ").replace(pt, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var dt = /\r/g;
    oe.fn.extend({
        val: function(e) {
            var t,
                n,
                r,
                i = this[0];
            {
                if (arguments.length)
                    return r = oe.isFunction(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, oe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : oe.isArray(i) && (i = oe.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    return oe.trim(e.value)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                        if (n = r[u], (n.selected || u === i) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), o)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = oe.makeArray(t), s = i.length; s--;)
                        r = i[s], (r.selected = oe.inArray(oe.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                if (oe.isArray(t))
                    return e.checked = oe.inArray(oe(e).val(), t) > -1
            }
        }, re.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ht = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function(t, n, r, i) {
            var o,
                s,
                a,
                u,
                c,
                l,
                f,
                p = [r || Q],
                d = ne.call(t, "type") ? t.type : t,
                h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !ht.test(d + oe.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), c = d.indexOf(":") < 0 && "on" + d, t = t[oe.expando] ? t : new oe.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : oe.makeArray(n, [t]), f = oe.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !oe.isWindow(r)) {
                    for (u = f.delegateType || d, ht.test(u + d) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s), a = s;
                    a === (r.ownerDocument || Q) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped();)
                    t.type = o > 1 ? u : f.bindType || d, l = (Ee.get(s, "events") || {})[t.type] && Ee.get(s, "handle"), l && l.apply(s, n), l = c && s[c], l && l.apply && Ce(s) && (t.result = l.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Ce(r) || c && oe.isFunction(r[d]) && !oe.isWindow(r) && (a = r[c], a && (r[c] = null), oe.event.triggered = d, r[d](), oe.event.triggered = void 0, a && (r[c] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }), oe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return oe.event.trigger(e, t, n, !0)
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), re.focusin = "onfocusin" in e, re.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = Ee.access(r, t);
                i || r.addEventListener(e, n, !0), Ee.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = Ee.access(r, t) - 1;
                i ? Ee.access(r, t, i) : (r.removeEventListener(e, n, !0), Ee.remove(r, t))
            }
        }
    });
    var gt = e.location,
        vt = oe.now(),
        mt = /\?/;
    oe.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, oe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var yt = /#.*$/,
        xt = /([?&])_=[^&]*/,
        bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Tt = /^(?:GET|HEAD)$/,
        St = /^\/\//,
        Ct = {},
        Et = {},
        kt = "*/".concat("*"),
        Nt = Q.createElement("a");
    Nt.href = gt.href, oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: wt.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? B(B(e, oe.ajaxSettings), t) : B(oe.ajaxSettings, e)
        },
        ajaxPrefilter: _(Ct),
        ajaxTransport: _(Et),
        ajax: function(t, n) {
            function r(t, n, r, a) {
                var c,
                    f,
                    y,
                    x,
                    w,
                    S = n;
                2 !== b && (b = 2, u && e.clearTimeout(u), i = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (x = z(p, T, r)), x = X(p, x, T, c), c ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (oe.etag[o] = w)), 204 === t || "HEAD" === p.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = x.state, f = x.data, y = x.error, c = !y)) : (y = S, !t && S || (S = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || S) + "", c ? g.resolveWith(d, [f, S, T]) : g.rejectWith(d, [T, S, y]), T.statusCode(m), m = void 0, l && h.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? f : y]), v.fireWith(d, [T, S]), l && (h.trigger("ajaxComplete", [T, p]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i,
                o,
                s,
                a,
                u,
                c,
                l,
                f,
                p = oe.ajaxSetup({}, n),
                d = p.context || p,
                h = p.context && (d.nodeType || d.jquery) ? oe(d) : oe.event,
                g = oe.Deferred(),
                v = oe.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                x = {},
                b = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; t = bt.exec(s);)
                                    a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e)
                                    m[t] = [m[t], e[t]];
                            else
                                T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (g.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, p.url = ((t || p.url || gt.href) + "").replace(yt, "").replace(St, gt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = oe.trim(p.dataType || "*").toLowerCase().match(we) || [""], null == p.crossDomain) {
                c = Q.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Nt.protocol + "//" + Nt.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), W(Ct, p, n, T), 2 === b)
                return T;
            l = oe.event && p.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Tt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (mt.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = xt.test(o) ? o.replace(xt, "$1_=" + vt++) : o + (mt.test(o) ? "&" : "?") + "_=" + vt++)), p.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers)
                T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === b))
                return T.abort();
            w = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            })
                T[f](p[f]);
            if (i = W(Et, p, n, T)) {
                if (T.readyState = 1, l && h.trigger("ajaxSend", [T, p]), 2 === b)
                    return T;
                p.async && p.timeout > 0 && (u = e.setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, i.send(y, r)
                } catch (e) {
                    if (!(b < 2))
                        throw e;
                    r(-1, e)
                }
            } else
                r(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, n, r, i) {
            return oe.isFunction(n) && (i = i || r, r = n, n = void 0), oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, oe.isPlainObject(e) && e))
        }
    }), oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function(e) {
            var t;
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;)
                    e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(e) {
        return !oe.expr.filters.visible(e)
    }, oe.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var jt = /%20/g,
        Lt = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n,
            r = [],
            i = function(e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e))
            oe.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                V(n, e[n], t, i);
        return r.join("&").replace(jt, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Ot.test(this.nodeName) && !Dt.test(e) && (this.checked || !qe.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var qt = {
            0: 200,
            1223: 204
        },
        $t = oe.ajaxSettings.xhr();
    re.cors = !!$t && "withCredentials" in $t, re.ajax = $t = !!$t, oe.ajaxTransport(function(t) {
        var n,
            r;
        if (re.cors || $t && !t.crossDomain)
            return {
                send: function(i, o) {
                    var s,
                        a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields)
                            a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i)
                        a.setRequestHeader(s, i[s]);
                    n = function(e) {
                        return function() {
                            n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }, n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t,
                n;
            return {
                send: function(r, i) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), Q.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ft = [],
        Ht = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ft.pop() || oe.expando + "_" + vt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i,
            o,
            s,
            a = t.jsonp !== !1 && (Ht.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(Ht, "$1" + i) : t.jsonp !== !1 && (t.url += (mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                return s || oe.error(i + " was not called"), s[0]
            }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
                s = arguments
            }, r.always(function() {
                void 0 === o ? oe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ft.push(i)), s && oe.isFunction(o) && o(s[0]), s = o = void 0
            }), "script"
    }), re.createHTMLDocument = function() {
        var e = Q.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || (re.createHTMLDocument ? Q.implementation.createHTMLDocument("") : Q);
        var r = he.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = p([e], t, i), i && i.length && oe(i).remove(), oe.merge([], r.childNodes))
    };
    var Pt = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && Pt)
            return Pt.apply(this, arguments);
        var r,
            i,
            o,
            s = this,
            a = e.indexOf(" ");
        return a > -1 && (r = oe.trim(e.slice(a)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && oe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(s, o || [e.responseText, t, e])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    }, oe.offset = {
        setOffset: function(e, t, n) {
            var r,
                i,
                o,
                s,
                a,
                u,
                c,
                l = oe.css(e, "position"),
                f = oe(e),
                p = {};
            "static" === l && (e.style.position = "relative"), a = f.offset(), o = oe.css(e, "top"), u = oe.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, oe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    oe.offset.setOffset(this, e, t)
                });
            var t,
                n,
                r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o)
                return t = o.documentElement, oe.contains(t, r) ? (i = r.getBoundingClientRect(), n = U(o), {
                    top: i.top + n.pageYOffset - t.clientTop,
                    left: i.left + n.pageXOffset - t.clientLeft
                }) : i
        },
        position: function() {
            if (this[0]) {
                var e,
                    t,
                    n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (r = e.offset()), r.top += oe.css(e[0], "borderTopWidth", !0) - e.scrollTop(), r.left += oe.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                    top: t.top - r.top - oe.css(n, "marginTop", !0),
                    left: t.left - r.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position");)
                    e = e.offsetParent;
                return e || Ke
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function(r) {
            return Se(this, function(e, r, i) {
                var o = U(e);
                return void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = N(re.pixelPosition, function(e, n) {
            if (n)
                return n = k(e, t), Qe.test(n) ? oe(e).position()[t] + "px" : n
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            oe.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return Se(this, function(t, n, r) {
                    var i;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? oe.css(t, n, s) : oe.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), oe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var Rt = e.jQuery,
        It = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = It), t && e.jQuery === oe && (e.jQuery = Rt), oe
    }, t || (e.jQuery = e.$ = oe), oe
}), /*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function() {
    function e() {}
    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t)
                return n;
        return -1
    }
    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var r = e.prototype,
        i = this,
        o = i.EventEmitter;
    r.getListeners = function(e) {
        var t,
            n,
            r = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in r)
                r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
        } else
            t = r[e] || (r[e] = []);
        return t
    }, r.flattenListeners = function(e) {
        var t,
            n = [];
        for (t = 0; e.length > t; t += 1)
            n.push(e[t].listener);
        return n
    }, r.getListenersAsObject = function(e) {
        var t,
            n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, r.addListener = function(e, n) {
        var r,
            i = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (r in i)
            i.hasOwnProperty(r) && -1 === t(i[r], n) && i[r].push(o ? n : {
                listener: n,
                once: !1
            });
        return this
    }, r.on = n("addListener"), r.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, r.once = n("addOnceListener"), r.defineEvent = function(e) {
        return this.getListeners(e), this
    }, r.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1)
            this.defineEvent(e[t]);
        return this
    }, r.removeListener = function(e, n) {
        var r,
            i,
            o = this.getListenersAsObject(e);
        for (i in o)
            o.hasOwnProperty(i) && (r = t(o[i], n), -1 !== r && o[i].splice(r, 1));
        return this
    }, r.off = n("removeListener"), r.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, r.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, r.manipulateListeners = function(e, t, n) {
        var r,
            i,
            o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (r = n.length; r--;)
                o.call(this, t, n[r]);
        else
            for (r in t)
                t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? o.call(this, r, i) : s.call(this, r, i));
        return this
    }, r.removeEvent = function(e) {
        var t,
            n = typeof e,
            r = this._getEvents();
        if ("string" === n)
            delete r[e];
        else if ("object" === n)
            for (t in r)
                r.hasOwnProperty(t) && e.test(t) && delete r[t];
        else
            delete this._events;
        return this
    }, r.removeAllListeners = n("removeEvent"), r.emitEvent = function(e, t) {
        var n,
            r,
            i,
            o,
            s = this.getListenersAsObject(e);
        for (i in s)
            if (s.hasOwnProperty(i))
                for (r = s[i].length; r--;)
                    n = s[i][r], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, r.trigger = n("emitEvent"), r.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, r.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, r._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, r._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return i.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}.call(this), function(e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t, n
    }
    var n = document.documentElement,
        r = function() {};
    n.addEventListener ? r = function(e, t, n) {
        e.addEventListener(t, n, !1)
    } : n.attachEvent && (r = function(e, n, r) {
        e[n + r] = r.handleEvent ? function() {
            var n = t(e);
            r.handleEvent.call(r, n)
        } : function() {
            var n = t(e);
            r.call(e, n)
        }, e.attachEvent("on" + n, e[n + r])
    });
    var i = function() {};
    n.removeEventListener ? i = function(e, t, n) {
        e.removeEventListener(t, n, !1)
    } : n.detachEvent && (i = function(e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (r) {
            e[t + n] = void 0
        }
    });
    var o = {
        bind: r,
        unbind: i
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
}(this), function(e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, r) {
        return t(e, n, r)
    }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function(e, t, n) {
    function r(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function i(e) {
        return "[object Array]" === p.call(e)
    }
    function o(e) {
        var t = [];
        if (i(e))
            t = e;
        else if ("number" == typeof e.length)
            for (var n = 0, r = e.length; r > n; n++)
                t.push(e[n]);
        else
            t.push(e);
        return t
    }
    function s(e, t, n) {
        if (!(this instanceof s))
            return new s(e, t);
        "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = r({}, this.options), "function" == typeof t ? n = t : r(this.options, t), n && this.on("always", n), this.getImages(), c && (this.jqDeferred = new c.Deferred);
        var i = this;
        setTimeout(function() {
            i.check()
        })
    }
    function a(e) {
        this.img = e
    }
    function u(e) {
        this.src = e, d[e] = this
    }
    var c = e.jQuery,
        l = e.console,
        f = void 0 !== l,
        p = Object.prototype.toString;
    s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
            var n = this.elements[e];
            "IMG" === n.nodeName && this.addImage(n);
            var r = n.nodeType;
            if (r && (1 === r || 9 === r || 11 === r))
                for (var i = n.querySelectorAll("img"), o = 0, s = i.length; s > o; o++) {
                    var a = i[o];
                    this.addImage(a)
                }
        }
    }, s.prototype.addImage = function(e) {
        var t = new a(e);
        this.images.push(t)
    }, s.prototype.check = function() {
        function e(e, i) {
            return t.options.debug && f && l.log("confirm", e, i), t.progress(e), n++, n === r && t.complete(), !0
        }
        var t = this,
            n = 0,
            r = this.images.length;
        if (this.hasAnyBroken = !1, !r)
            return void this.complete();
        for (var i = 0; r > i; i++) {
            var o = this.images[i];
            o.on("confirm", e), o.check()
        }
    }, s.prototype.progress = function(e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function() {
            t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
        })
    }, s.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function() {
            if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                var n = t.hasAnyBroken ? "reject" : "resolve";
                t.jqDeferred[n](t)
            }
        })
    }, c && (c.fn.imagesLoaded = function(e, t) {
        var n = new s(this, e, t);
        return n.jqDeferred.promise(c(this))
    }), a.prototype = new t, a.prototype.check = function() {
        var e = d[this.img.src] || new u(this.img.src);
        if (e.isConfirmed)
            return void this.confirm(e.isLoaded, "cached was confirmed");
        if (this.img.complete && void 0 !== this.img.naturalWidth)
            return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        var t = this;
        e.on("confirm", function(e, n) {
            return t.confirm(e.isLoaded, n), !0
        }), e.check()
    }, a.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emit("confirm", this, t)
    };
    var d = {};
    return u.prototype = new t, u.prototype.check = function() {
        if (!this.isChecked) {
            var e = new Image;
            n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
        }
    }, u.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, u.prototype.onload = function(e) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(e)
    }, u.prototype.onerror = function(e) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
    }, u.prototype.confirm = function(e, t) {
        this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
    }, u.prototype.unbindProxyEvents = function(e) {
        n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
    }, s
}), function() {
    "use strict";
    function e(e, i, o, s) {
        var a = {},
            u = 0,
            c = 0,
            l = document.title,
            f = function() {
                a = {}, u = $(document).height(), c = $(window).height(), e.find(i).each(function() {
                    var e = $(this).attr("href");
                    "#" === e[0] && (a[e] = $(e).offset().top)
                })
            },
            p = function() {
                var n = $(document).scrollTop() + s;
                n + c >= u && (n = u + 1e3);
                var r = null;
                for (var f in a)
                    (a[f] < n && a[f] > a[r] || null === r) && (r = f);
                n != s || t || (r = window.location.hash, t = !0);
                var p = e.find("[href='" + r + "']").first();
                p.hasClass("active") || (e.find(".active").removeClass("active"), e.find(".active-parent").removeClass("active-parent"), p.addClass("active"), p.parents(o).addClass("active").siblings(i).addClass("active-parent"), p.siblings(o).addClass("active"), e.find(o).filter(":not(.active)").slideUp(150), e.find(o).filter(".active").slideDown(150), document.title = p.data("title") + " \u2013 " + l)
            },
            d = function() {
                f(), p(), $("#nav-button").click(function() {
                    return $(".toc-wrapper").toggleClass("open"), $("#nav-button").toggleClass("open"), !1
                }), $(".page-wrapper").click(r), $(".toc-link").click(r), e.find(i).click(function() {
                    setTimeout(function() {
                        p()
                    }, 0)
                }), $(window).scroll(n(p, 200)), $(window).resize(n(f, 200))
            };
        d(), window.recacheHeights = f, window.refreshToc = p
    }
    var t = !1,
        n = function(e, t) {
            var n = !1;
            return function() {
                n === !1 && (setTimeout(function() {
                    e(), n = !1
                }, t), n = !0)
            }
        },
        r = function() {
            $(".toc-wrapper").removeClass("open"), $("#nav-button").removeClass("open")
        };
    window.loadToc = e
}(), function() {
    "use strict";
    function e(e) {
        if (e && "" !== e) {
            $(".lang-selector a").removeClass("active"), $(".lang-selector a[data-language-name='" + e + "']").addClass("active");
            for (var t = 0; t < a.length; t++)
                $(".highlight.tab-" + a[t]).hide(), $(".lang-specific." + a[t]).hide();
            $(".highlight.tab-" + e).show(), $(".lang-specific." + e).show(), window.recacheHeights(), $(window.location.hash).get(0) && $(window.location.hash).get(0).scrollIntoView(!0)
        }
    }
    function t(e) {
        return "string" != typeof e ? {} : (e = e.trim().replace(/^(\?|#|&)/, ""), e ? e.split("&").reduce(function(e, t) {
            var n = t.replace(/\+/g, " ").split("="),
                r = n[0],
                i = n[1];
            return r = decodeURIComponent(r), i = void 0 === i ? null : decodeURIComponent(i), e.hasOwnProperty(r) ? Array.isArray(e[r]) ? e[r].push(i) : e[r] = [e[r], i] : e[r] = i, e
        }, {}) : {})
    }
    function n(e) {
        return e ? Object.keys(e).sort().map(function(t) {
            var n = e[t];
            return Array.isArray(n) ? n.sort().map(function(e) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e)
            }).join("&") : encodeURIComponent(t) + "=" + encodeURIComponent(n)
        }).join("&") : ""
    }
    function r() {
        if (location.search.length >= 1) {
            var e = t(location.search).language;
            if (e)
                return e;
            if (jQuery.inArray(location.search.substr(1), a) != -1)
                return location.search.substr(1)
        }
        return !1
    }
    function i(e) {
        var r = t(location.search);
        return r.language ? (r.language = e, n(r)) : e
    }
    function o(e) {
        if (history) {
            var t = window.location.hash;
            t && (t = t.replace(/^#+/, "")), history.pushState({}, "", "?" + i(e) + "#" + t), localStorage.setItem("language", e)
        }
    }
    function s(t) {
        var n = localStorage.getItem("language");
        a = t;
        var i = r();
        i ? (e(i), localStorage.setItem("language", i)) : e(null !== n && jQuery.inArray(n, a) != -1 ? n : a[0])
    }
    var a = [];
    window.setupLanguages = s, window.activateLanguage = e, window.getLanguageFromQueryString = r, $(function() {
        $(".lang-selector a").on("click", function() {
            var t = $(this).data("language-name");
            return o(t), e(t), !1
        })
    })
}(), $(function() {
    loadToc($("#toc"), ".toc-link", ".toc-list-h2", 10), setupLanguages($("body").data("languages")), $(".content").imagesLoaded(function() {
        window.recacheHeights(), window.refreshToc()
    })
}), window.onpopstate = function() {
    activateLanguage(getLanguageFromQueryString())
}, /**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 0.5.7
 * Copyright (C) 2014 Oliver Nightingale
 * MIT Licensed
 * @license
 */
function() {
    var e = function(t) {
        var n = new e.Index;
        return n.pipeline.add(e.trimmer, e.stopWordFilter, e.stemmer), t && t.call(n, n), n
    };
    e.version = "0.5.7", /*!
   * lunr.utils
   * Copyright (C) 2014 Oliver Nightingale
   */
    e.utils = {}, e.utils.warn = function(e) {
        return function(t) {
            e.console && console.warn && console.warn(t)
        }
    }(this), /*!
   * lunr.EventEmitter
   * Copyright (C) 2014 Oliver Nightingale
   */
    e.EventEmitter = function() {
        this.events = {}
    }, e.EventEmitter.prototype.addListener = function() {
        var e = Array.prototype.slice.call(arguments),
            t = e.pop(),
            n = e;
        if ("function" != typeof t)
            throw new TypeError("last argument must be a function");
        n.forEach(function(e) {
            this.hasHandler(e) || (this.events[e] = []), this.events[e].push(t)
        }, this)
    }, e.EventEmitter.prototype.removeListener = function(e, t) {
        if (this.hasHandler(e)) {
            var n = this.events[e].indexOf(t);
            this.events[e].splice(n, 1), this.events[e].length || delete this.events[e]
        }
    }, e.EventEmitter.prototype.emit = function(e) {
        if (this.hasHandler(e)) {
            var t = Array.prototype.slice.call(arguments, 1);
            this.events[e].forEach(function(e) {
                e.apply(void 0, t)
            })
        }
    }, e.EventEmitter.prototype.hasHandler = function(e) {
        return e in this.events
    }, /*!
   * lunr.tokenizer
   * Copyright (C) 2014 Oliver Nightingale
   */
    e.tokenizer = function(e) {
        if (!arguments.length || null == e || void 0 == e)
            return [];
        if (Array.isArray(e))
            return e.map(function(e) {
                return e.toLowerCase()
            });
        for (var t = e.toString().replace(/^\s+/, ""), n = t.length - 1; n >= 0; n--)
            if (/\S/.test(t.charAt(n))) {
                t = t.substring(0, n + 1);
                break
            }
        return t.split(/(?:\s+|\-)/).filter(function(e) {
            return !!e
        }).map(function(e) {
            return e.toLowerCase()
        })
    }, /*!
   * lunr.Pipeline
   * Copyright (C) 2014 Oliver Nightingale
   */
    e.Pipeline = function() {
        this._stack = []
    }, e.Pipeline.registeredFunctions = {}, e.Pipeline.registerFunction = function(t, n) {
        n in this.registeredFunctions && e.utils.warn("Overwriting existing registered function: " + n), t.label = n, e.Pipeline.registeredFunctions[t.label] = t
    }, e.Pipeline.warnIfFunctionNotRegistered = function(t) {
        var n = t.label && t.label in this.registeredFunctions;
        n || e.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", t)
    }, e.Pipeline.load = function(t) {
        var n = new e.Pipeline;
        return t.forEach(function(t) {
            var r = e.Pipeline.registeredFunctions[t];
            if (!r)
                throw new Error("Cannot load un-registered function: " + t);
            n.add(r)
        }), n
    }, e.Pipeline.prototype.add = function() {
        var t = Array.prototype.slice.call(arguments);
        t.forEach(function(t) {
            e.Pipeline.warnIfFunctionNotRegistered(t), this._stack.push(t)
        }, this)
    }, e.Pipeline.prototype.after = function(t, n) {
        e.Pipeline.warnIfFunctionNotRegistered(n);
        var r = this._stack.indexOf(t) + 1;
        this._stack.splice(r, 0, n)
    }, e.Pipeline.prototype.before = function(t, n) {
        e.Pipeline.warnIfFunctionNotRegistered(n);
        var r = this._stack.indexOf(t);
        this._stack.splice(r, 0, n)
    }, e.Pipeline.prototype.remove = function(e) {
        var t = this._stack.indexOf(e);
        this._stack.splice(t, 1)
    }, e.Pipeline.prototype.run = function(e) {
        for (var t = [], n = e.length, r = this._stack.length, i = 0; i < n; i++) {
            for (var o = e[i], s = 0; s < r && (o = this._stack[s](o, i, e), void 0 !== o); s++)
                ;
            void 0 !== o && t.push(o)
        }
        return t
    }, e.Pipeline.prototype.reset = function() {
        this._stack = []
    }, e.Pipeline.prototype.toJSON = function() {
        return this._stack.map(function(t) {
            return e.Pipeline.warnIfFunctionNotRegistered(t), t.label
        })
    }, /*!
   * lunr.Vector
   * Copyright (C) 2014 Oliver Nightingale
   */
    e.Vector = function() {
        this._magnitude = null, this.list = void 0, this.length = 0
    }, e.Vector.Node = function(e, t, n) {
        this.idx = e, this.val = t, this.next = n
    }, e.Vector.prototype.insert = function(t, n) {
        var r = this.list;
        if (!r)
            return this.list = new e.Vector.Node(t, n, r), this.length++;
        for (var i = r, o = r.next; void 0 != o;) {
            if (t < o.idx)
                return i.next = new e.Vector.Node(t, n, o), this.length++;
            i = o, o = o.next
        }
        return i.next = new e.Vector.Node(t, n, o), this.length++
    }, e.Vector.prototype.magnitude = function() {
        if (this._magniture)
            return this._magnitude;
        for (var e, t = this.list, n = 0; t;)
            e = t.val, n += e * e, t = t.next;
        return this._magnitude = Math.sqrt(n)
    }, e.Vector.prototype.dot = function(e) {
        for (var t = this.list, n = e.list, r = 0; t && n;)
            t.idx < n.idx ? t = t.next : t.idx > n.idx ? n = n.next : (r += t.val * n.val, t = t.next, n = n.next);
        return r
    }, e.Vector.prototype.similarity = function(e) {
        return this.dot(e) / (this.magnitude() * e.magnitude())
    }, /*!
   * lunr.SortedSet
   * Copyright (C) 2014 Oliver Nightingale
   */
    e.SortedSet = function() {
        this.length = 0, this.elements = []
    }, e.SortedSet.load = function(e) {
        var t = new this;
        return t.elements = e, t.length = e.length, t
    }, e.SortedSet.prototype.add = function() {
        Array.prototype.slice.call(arguments).forEach(function(e) {
            ~this.indexOf(e) || this.elements.splice(this.locationFor(e), 0, e)
        }, this), this.length = this.elements.length
    }, e.SortedSet.prototype.toArray = function() {
        return this.elements.slice()
    }, e.SortedSet.prototype.map = function(e, t) {
        return this.elements.map(e, t)
    }, e.SortedSet.prototype.forEach = function(e, t) {
        return this.elements.forEach(e, t)
    }, e.SortedSet.prototype.indexOf = function(e, t, n) {
        var t = t || 0,
            n = n || this.elements.length,
            r = n - t,
            i = t + Math.floor(r / 2),
            o = this.elements[i];
        return r <= 1 ? o === e ? i : -1 : o < e ? this.indexOf(e, i, n) : o > e ? this.indexOf(e, t, i) : o === e ? i : void 0
    }, e.SortedSet.prototype.locationFor = function(e, t, n) {
        var t = t || 0,
            n = n || this.elements.length,
            r = n - t,
            i = t + Math.floor(r / 2),
            o = this.elements[i];
        if (r <= 1) {
            if (o > e)
                return i;
            if (o < e)
                return i + 1
        }
        return o < e ? this.locationFor(e, i, n) : o > e ? this.locationFor(e, t, i) : void 0
    }, e.SortedSet.prototype.intersect = function(t) {
        for (var n = new e.SortedSet, r = 0, i = 0, o = this.length, s = t.length, a = this.elements, u = t.elements;;) {
            if (r > o - 1 || i > s - 1)
                break;
            a[r] !== u[i] ? a[r] < u[i] ? r++ : a[r] > u[i] && i++ : (n.add(a[r]), r++, i++)
        }
        return n
    }, e.SortedSet.prototype.clone = function() {
        var t = new e.SortedSet;
        return t.elements = this.toArray(), t.length = t.elements.length, t
    }, e.SortedSet.prototype.union = function(e) {
        var t,
            n,
            r;
        return this.length >= e.length ? (t = this, n = e) : (t = e, n = this), r = t.clone(), r.add.apply(r, n.toArray()), r
    }, e.SortedSet.prototype.toJSON = function() {
        return this.toArray()
    }, /*!
   * lunr.Index
   * Copyright (C) 2014 Oliver Nightingale
   */
    e.Index = function() {
        this._fields = [], this._ref = "id", this.pipeline = new e.Pipeline, this.documentStore = new e.Store, this.tokenStore = new e.TokenStore, this.corpusTokens = new e.SortedSet, this.eventEmitter = new e.EventEmitter, this._idfCache = {}, this.on("add", "remove", "update", function() {
            this._idfCache = {}
        }.bind(this))
    }, e.Index.prototype.on = function() {
        var e = Array.prototype.slice.call(arguments);
        return this.eventEmitter.addListener.apply(this.eventEmitter, e)
    }, e.Index.prototype.off = function(e, t) {
        return this.eventEmitter.removeListener(e, t)
    }, e.Index.load = function(t) {
        t.version !== e.version && e.utils.warn("version mismatch: current " + e.version + " importing " + t.version);
        var n = new this;
        return n._fields = t.fields, n._ref = t.ref, n.documentStore = e.Store.load(t.documentStore), n.tokenStore = e.TokenStore.load(t.tokenStore), n.corpusTokens = e.SortedSet.load(t.corpusTokens), n.pipeline = e.Pipeline.load(t.pipeline), n
    }, e.Index.prototype.field = function(e, t) {
        var t = t || {},
            n = {
                name: e,
                boost: t.boost || 1
            };
        return this._fields.push(n), this
    }, e.Index.prototype.ref = function(e) {
        return this._ref = e, this
    }, e.Index.prototype.add = function(t, n) {
        var r = {},
            i = new e.SortedSet,
            o = t[this._ref],
            n = void 0 === n || n;
        this._fields.forEach(function(n) {
            var o = this.pipeline.run(e.tokenizer(t[n.name]));
            r[n.name] = o, e.SortedSet.prototype.add.apply(i, o)
        }, this), this.documentStore.set(o, i), e.SortedSet.prototype.add.apply(this.corpusTokens, i.toArray());
        for (var s = 0; s < i.length; s++) {
            var a = i.elements[s],
                u = this._fields.reduce(function(e, t) {
                    var n = r[t.name].length;
                    if (!n)
                        return e;
                    var i = r[t.name].filter(function(e) {
                        return e === a
                    }).length;
                    return e + i / n * t.boost
                }, 0);
            this.tokenStore.add(a, {
                ref: o,
                tf: u
            })
        }
        n && this.eventEmitter.emit("add", t, this)
    }, e.Index.prototype.remove = function(e, t) {
        var n = e[this._ref],
            t = void 0 === t || t;
        if (this.documentStore.has(n)) {
            var r = this.documentStore.get(n);
            this.documentStore.remove(n), r.forEach(function(e) {
                this.tokenStore.remove(e, n)
            }, this), t && this.eventEmitter.emit("remove", e, this)
        }
    }, e.Index.prototype.update = function(e, t) {
        var t = void 0 === t || t;
        this.remove(e, !1), this.add(e, !1), t && this.eventEmitter.emit("update", e, this)
    }, e.Index.prototype.idf = function(e) {
        var t = "@" + e;
        if (Object.prototype.hasOwnProperty.call(this._idfCache, t))
            return this._idfCache[t];
        var n = this.tokenStore.count(e),
            r = 1;
        return n > 0 && (r = 1 + Math.log(this.tokenStore.length / n)), this._idfCache[t] = r
    }, e.Index.prototype.search = function(t) {
        var n = this.pipeline.run(e.tokenizer(t)),
            r = new e.Vector,
            i = [],
            o = this._fields.reduce(function(e, t) {
                return e + t.boost
            }, 0),
            s = n.some(function(e) {
                return this.tokenStore.has(e)
            }, this);
        if (!s)
            return [];
        n.forEach(function(t, n, s) {
            var a = 1 / s.length * this._fields.length * o,
                u = this,
                c = this.tokenStore.expand(t).reduce(function(n, i) {
                    var o = u.corpusTokens.indexOf(i),
                        s = u.idf(i),
                        c = 1,
                        l = new e.SortedSet;
                    if (i !== t) {
                        var f = Math.max(3, i.length - t.length);
                        c = 1 / Math.log(f)
                    }
                    return o > -1 && r.insert(o, a * s * c), Object.keys(u.tokenStore.get(i)).forEach(function(e) {
                        l.add(e)
                    }), n.union(l)
                }, new e.SortedSet);
            i.push(c)
        }, this);
        var a = i.reduce(function(e, t) {
            return e.intersect(t)
        });
        return a.map(function(e) {
            return {
                ref: e,
                score: r.similarity(this.documentVector(e))
            }
        }, this).sort(function(e, t) {
            return t.score - e.score
        })
    }, e.Index.prototype.documentVector = function(t) {
        for (var n = this.documentStore.get(t), r = n.length, i = new e.Vector, o = 0; o < r; o++) {
            var s = n.elements[o],
                a = this.tokenStore.get(s)[t].tf,
                u = this.idf(s);
            i.insert(this.corpusTokens.indexOf(s), a * u)
        }
        return i
    }, e.Index.prototype.toJSON = function() {
        return {
            version: e.version,
            fields: this._fields,
            ref: this._ref,
            documentStore: this.documentStore.toJSON(),
            tokenStore: this.tokenStore.toJSON(),
            corpusTokens: this.corpusTokens.toJSON(),
            pipeline: this.pipeline.toJSON()
        }
    }, e.Index.prototype.use = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        t.unshift(this), e.apply(this, t)
    }, /*!
   * lunr.Store
   * Copyright (C) 2014 Oliver Nightingale
   */
    e.Store = function() {
        this.store = {}, this.length = 0
    }, e.Store.load = function(t) {
        var n = new this;
        return n.length = t.length, n.store = Object.keys(t.store).reduce(function(n, r) {
            return n[r] = e.SortedSet.load(t.store[r]), n
        }, {}), n
    }, e.Store.prototype.set = function(e, t) {
        this.has(e) || this.length++, this.store[e] = t
    }, e.Store.prototype.get = function(e) {
        return this.store[e]
    }, e.Store.prototype.has = function(e) {
        return e in this.store
    }, e.Store.prototype.remove = function(e) {
        this.has(e) && (delete this.store[e], this.length--)
    }, e.Store.prototype.toJSON = function() {
        return {
            store: this.store,
            length: this.length
        }
    }, /*!
   * lunr.stemmer
   * Copyright (C) 2014 Oliver Nightingale
   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
   */
    e.stemmer = function() {
        var e = {
                ational: "ate",
                tional: "tion",
                enci: "ence",
                anci: "ance",
                izer: "ize",
                bli: "ble",
                alli: "al",
                entli: "ent",
                eli: "e",
                ousli: "ous",
                ization: "ize",
                ation: "ate",
                ator: "ate",
                alism: "al",
                iveness: "ive",
                fulness: "ful",
                ousness: "ous",
                aliti: "al",
                iviti: "ive",
                biliti: "ble",
                logi: "log"
            },
            t = {
                icate: "ic",
                ative: "",
                alize: "al",
                iciti: "ic",
                ical: "ic",
                ful: "",
                ness: ""
            },
            n = "[^aeiou]",
            r = "[aeiouy]",
            i = n + "[^aeiouy]*",
            o = r + "[aeiou]*",
            s = "^(" + i + ")?" + o + i,
            a = "^(" + i + ")?" + o + i + "(" + o + ")?$",
            u = "^(" + i + ")?" + o + i + o + i,
            c = "^(" + i + ")?" + r,
            l = new RegExp(s),
            f = new RegExp(u),
            p = new RegExp(a),
            d = new RegExp(c),
            h = /^(.+?)(ss|i)es$/,
            g = /^(.+?)([^s])s$/,
            v = /^(.+?)eed$/,
            m = /^(.+?)(ed|ing)$/,
            y = /.$/,
            x = /(at|bl|iz)$/,
            b = new RegExp("([^aeiouylsz])\\1$"),
            w = new RegExp("^" + i + r + "[^aeiouwxy]$"),
            T = /^(.+?[^aeiou])y$/,
            S = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
            C = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
            E = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
            k = /^(.+?)(s|t)(ion)$/,
            N = /^(.+?)e$/,
            j = /ll$/,
            L = new RegExp("^" + i + r + "[^aeiouwxy]$"),
            A = function(n) {
                var r,
                    i,
                    o,
                    s,
                    a,
                    u,
                    c;
                if (n.length < 3)
                    return n;
                if (o = n.substr(0, 1), "y" == o && (n = o.toUpperCase() + n.substr(1)), s = h, a = g, s.test(n) ? n = n.replace(s, "$1$2") : a.test(n) && (n = n.replace(a, "$1$2")), s = v, a = m, s.test(n)) {
                    var A = s.exec(n);
                    s = l, s.test(A[1]) && (s = y, n = n.replace(s, ""))
                } else if (a.test(n)) {
                    var A = a.exec(n);
                    r = A[1], a = d, a.test(r) && (n = r, a = x, u = b, c = w, a.test(n) ? n += "e" : u.test(n) ? (s = y, n = n.replace(s, "")) : c.test(n) && (n += "e"))
                }
                if (s = T, s.test(n)) {
                    var A = s.exec(n);
                    r = A[1], n = r + "i"
                }
                if (s = S, s.test(n)) {
                    var A = s.exec(n);
                    r = A[1], i = A[2], s = l, s.test(r) && (n = r + e[i])
                }
                if (s = C, s.test(n)) {
                    var A = s.exec(n);
                    r = A[1], i = A[2], s = l, s.test(r) && (n = r + t[i])
                }
                if (s = E, a = k, s.test(n)) {
                    var A = s.exec(n);
                    r = A[1], s = f, s.test(r) && (n = r)
                } else if (a.test(n)) {
                    var A = a.exec(n);
                    r = A[1] + A[2], a = f, a.test(r) && (n = r)
                }
                if (s = N, s.test(n)) {
                    var A = s.exec(n);
                    r = A[1], s = f, a = p, u = L, (s.test(r) || a.test(r) && !u.test(r)) && (n = r)
                }
                return s = j, a = f, s.test(n) && a.test(n) && (s = y, n = n.replace(s, "")), "y" == o && (n = o.toLowerCase() + n.substr(1)), n
            };
        return A
    }(), e.Pipeline.registerFunction(e.stemmer, "stemmer"), /*!
   * lunr.stopWordFilter
   * Copyright (C) 2014 Oliver Nightingale
   */
    e.stopWordFilter = function(t) {
        if (e.stopWordFilter.stopWords.indexOf(t) === -1)
            return t
    }, e.stopWordFilter.stopWords = new e.SortedSet, e.stopWordFilter.stopWords.length = 119, e.stopWordFilter.stopWords.elements = ["", "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"], e.Pipeline.registerFunction(e.stopWordFilter, "stopWordFilter"), /*!
   * lunr.trimmer
   * Copyright (C) 2014 Oliver Nightingale
   */
    e.trimmer = function(e) {
        return e.replace(/^\W+/, "").replace(/\W+$/, "")
    }, e.Pipeline.registerFunction(e.trimmer, "trimmer"), /*!
   * lunr.stemmer
   * Copyright (C) 2014 Oliver Nightingale
   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
   */
    e.TokenStore = function() {
        this.root = {
            docs: {}
        }, this.length = 0
    }, e.TokenStore.load = function(e) {
        var t = new this;
        return t.root = e.root, t.length = e.length, t
    }, e.TokenStore.prototype.add = function(e, t, n) {
        var n = n || this.root,
            r = e[0],
            i = e.slice(1);
        return r in n || (n[r] = {
            docs: {}
        }), 0 === i.length ? (n[r].docs[t.ref] = t, void (this.length += 1)) : this.add(i, t, n[r])
    }, e.TokenStore.prototype.has = function(e) {
        if (!e)
            return !1;
        for (var t = this.root, n = 0; n < e.length; n++) {
            if (!t[e[n]])
                return !1;
            t = t[e[n]]
        }
        return !0
    }, e.TokenStore.prototype.getNode = function(e) {
        if (!e)
            return {};
        for (var t = this.root, n = 0; n < e.length; n++) {
            if (!t[e[n]])
                return {};
            t = t[e[n]]
        }
        return t
    }, e.TokenStore.prototype.get = function(e, t) {
        return this.getNode(e, t).docs || {}
    }, e.TokenStore.prototype.count = function(e, t) {
        return Object.keys(this.get(e, t)).length
    }, e.TokenStore.prototype.remove = function(e, t) {
        if (e) {
            for (var n = this.root, r = 0; r < e.length; r++) {
                if (!(e[r] in n))
                    return;
                n = n[e[r]]
            }
            delete n.docs[t]
        }
    }, e.TokenStore.prototype.expand = function(e, t) {
        var n = this.getNode(e),
            r = n.docs || {},
            t = t || [];
        return Object.keys(r).length && t.push(e), Object.keys(n).forEach(function(n) {
            "docs" !== n && t.concat(this.expand(e + n, t))
        }, this), t
    }, e.TokenStore.prototype.toJSON = function() {
        return {
            root: this.root,
            length: this.length
        }
    }, function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.lunr = t()
    }(this, function() {
        return e
    })
}(), /*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */
jQuery.extend({
    highlight: function(e, t, n, r) {
        if (3 === e.nodeType) {
            var i = e.data.match(t);
            if (i) {
                var o = document.createElement(n || "span");
                o.className = r || "highlight";
                var s = e.splitText(i.index);
                s.splitText(i[0].length);
                var a = s.cloneNode(!0);
                return o.appendChild(a), s.parentNode.replaceChild(o, s), 1
            }
        } else if (1 === e.nodeType && e.childNodes && !/(script|style)/i.test(e.tagName) && (e.tagName !== n.toUpperCase() || e.className !== r))
            for (var u = 0; u < e.childNodes.length; u++)
                u += jQuery.highlight(e.childNodes[u], t, n, r);
        return 0
    }
}), jQuery.fn.unhighlight = function(e) {
    var t = {
        className: "highlight",
        element: "span"
    };
    return jQuery.extend(t, e), this.find(t.element + "." + t.className).each(function() {
        var e = this.parentNode;
        e.replaceChild(this.firstChild, this), e.normalize()
    }).end()
}, jQuery.fn.highlight = function(e, t) {
    var n = {
        className: "highlight",
        element: "span",
        caseSensitive: !1,
        wordsOnly: !1
    };
    if (jQuery.extend(n, t), e.constructor === String && (e = [e]), e = jQuery.grep(e, function(e) {
        return "" != e
    }), e = jQuery.map(e, function(e) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }), 0 == e.length)
        return this;
    var r = n.caseSensitive ? "" : "i",
        i = "(" + e.join("|") + ")";
    n.wordsOnly && (i = "\\b" + i + "\\b");
    var o = new RegExp(i, r);
    return this.each(function() {
        jQuery.highlight(this, o, n.element, n.className)
    })
}, function() {
    "use strict";
    function e() {
        $("h1, h2").each(function() {
            var e = $(this),
                t = e.nextUntil("h1, h2");
            f.add({
                id: e.prop("id"),
                title: e.text(),
                body: t.text()
            })
        }), t()
    }
    function t() {
        f.tokenStore.length > 5e3 && (c = 300)
    }
    function n() {
        s = $(".content"), a = $(".search-results"), $("#input-search").on("keyup", function(e) {
            var t = function() {
                return function(e, t) {
                    clearTimeout(l), l = setTimeout(e, t)
                }
            }();
            t(function() {
                r(e)
            }, c)
        })
    }
    function r(e) {
        var t = $("#input-search")[0];
        if (o(), a.addClass("visible"), 27 === e.keyCode && (t.value = ""), t.value) {
            var n = f.search(t.value).filter(function(e) {
                return e.score > 1e-4
            });
            n.length ? (a.empty(), $.each(n, function(e, t) {
                var n = document.getElementById(t.ref);
                a.append("<li><a href='#" + t.ref + "'>" + $(n).text() + "</a></li>")
            }), i.call(t)) : (a.html("<li></li>"), $(".search-results li").text('No Results Found for "' + t.value + '"'))
        } else
            o(), a.removeClass("visible")
    }
    function i() {
        this.value && s.highlight(this.value, u)
    }
    function o() {
        s.unhighlight(u)
    }
    var s,
        a,
        u = {
            element: "span",
            className: "search-highlight"
        },
        c = 0,
        l = 0,
        f = new lunr.Index;
    f.ref("id"), f.field("title", {
        boost: 10
    }), f.field("body"), f.pipeline.add(lunr.trimmer, lunr.stopWordFilter), $(e), $(n)
}();
