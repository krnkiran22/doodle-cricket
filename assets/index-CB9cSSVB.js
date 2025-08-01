function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["assets/IndexPage-DuV-R1Ea.js", "assets/utils-DMILY4l8.js", "assets/IndexPage-D9E146JY.css", "assets/PrivacyPage-DvoeqIe4.js"]
    }
    return indexes.map( (i) => __vite__mapDeps.viteFileDeps[i])
}
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function zr(e, t) {
    const n = new Set(e.split(","));
    return t ? r => n.has(r.toLowerCase()) : r => n.has(r)
}
const ce = {}
  , Mt = []
  , Ae = () => {}
  , gl = () => !1
  , Vn = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Vr = e => e.startsWith("onUpdate:")
  , he = Object.assign
  , Ur = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , ml = Object.prototype.hasOwnProperty
  , X = (e, t) => ml.call(e, t)
  , K = Array.isArray
  , Jt = e => Kn(e) === "[object Map]"
  , vl = e => Kn(e) === "[object Set]"
  , W = e => typeof e == "function"
  , ge = e => typeof e == "string"
  , Un = e => typeof e == "symbol"
  , de = e => e !== null && typeof e == "object"
  , qo = e => (de(e) || W(e)) && W(e.then) && W(e.catch)
  , _l = Object.prototype.toString
  , Kn = e => _l.call(e)
  , yl = e => Kn(e).slice(8, -1)
  , bl = e => Kn(e) === "[object Object]"
  , Kr = e => ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , Yt = zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Wn = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , wl = /-(\w)/g
  , Ue = Wn(e => e.replace(wl, (t, n) => n ? n.toUpperCase() : ""))
  , xl = /\B([A-Z])/g
  , Ht = Wn(e => e.replace(xl, "-$1").toLowerCase())
  , Gn = Wn(e => e.charAt(0).toUpperCase() + e.slice(1))
  , lr = Wn(e => e ? `on${Gn(e)}` : "")
  , ft = (e, t) => !Object.is(e, t)
  , ar = (e, t) => {
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , In = (e, t, n) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , El = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Cl = e => {
    const t = ge(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let bs;
const jo = () => bs || (bs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wr(e) {
    if (K(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , s = ge(r) ? kl(r) : Wr(r);
            if (s)
                for (const o in s)
                    t[o] = s[o]
        }
        return t
    } else if (ge(e) || de(e))
        return e
}
const Sl = /;(?![^(]*\))/g
  , Rl = /:([^]+)/
  , Pl = /\/\*[^]*?\*\//g;
function kl(e) {
    const t = {};
    return e.replace(Pl, "").split(Sl).forEach(n => {
        if (n) {
            const r = n.split(Rl);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function Gr(e) {
    let t = "";
    if (ge(e))
        t = e;
    else if (K(e))
        for (let n = 0; n < e.length; n++) {
            const r = Gr(e[n]);
            r && (t += r + " ")
        }
    else if (de(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Tl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Al = zr(Tl);
function Ho(e) {
    return !!e || e === ""
}
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $e;
class Ll {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = $e,
        !t && $e && (this.index = ($e.scopes || ($e.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = $e;
            try {
                return $e = this,
                t()
            } finally {
                $e = n
            }
        }
    }
    on() {
        $e = this
    }
    off() {
        $e = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s,
                s.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function Ol(e, t=$e) {
    t && t.active && t.effects.push(e)
}
function $l() {
    return $e
}
let yt;
class Qr {
    constructor(t, n, r, s) {
        this.fn = t,
        this.trigger = n,
        this.scheduler = r,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 4,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        Ol(this, s)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            Et();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (Ml(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            Ct()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let t = ct
          , n = yt;
        try {
            return ct = !0,
            yt = this,
            this._runnings++,
            ws(this),
            this.fn()
        } finally {
            xs(this),
            this._runnings--,
            yt = n,
            ct = t
        }
    }
    stop() {
        var t;
        this.active && (ws(this),
        xs(this),
        (t = this.onStop) == null || t.call(this),
        this.active = !1)
    }
}
function Ml(e) {
    return e.value
}
function ws(e) {
    e._trackId++,
    e._depsLength = 0
}
function xs(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            Do(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function Do(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let ct = !0
  , Cr = 0;
const zo = [];
function Et() {
    zo.push(ct),
    ct = !1
}
function Ct() {
    const e = zo.pop();
    ct = e === void 0 ? !0 : e
}
function Jr() {
    Cr++
}
function Yr() {
    for (Cr--; !Cr && Sr.length; )
        Sr.shift()()
}
function Vo(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const r = e.deps[e._depsLength];
        r !== t ? (r && Do(r, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const Sr = [];
function Uo(e, t, n) {
    Jr();
    for (const r of e.keys()) {
        let s;
        r._dirtyLevel < t && (s ?? (s = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
        r._dirtyLevel = t),
        r._shouldSchedule && (s ?? (s = e.get(r) === r._trackId)) && (r.trigger(),
        (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1,
        r.scheduler && Sr.push(r.scheduler)))
    }
    Yr()
}
const Ko = (e, t) => {
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , Rr = new WeakMap
  , bt = Symbol("")
  , Pr = Symbol("");
function Ce(e, t, n) {
    if (ct && yt) {
        let r = Rr.get(e);
        r || Rr.set(e, r = new Map);
        let s = r.get(n);
        s || r.set(n, s = Ko( () => r.delete(n))),
        Vo(yt, s)
    }
}
function Qe(e, t, n, r, s, o) {
    const i = Rr.get(e);
    if (!i)
        return;
    let a = [];
    if (t === "clear")
        a = [...i.values()];
    else if (n === "length" && K(e)) {
        const l = Number(r);
        i.forEach( (f, c) => {
            (c === "length" || !Un(c) && c >= l) && a.push(f)
        }
        )
    } else
        switch (n !== void 0 && a.push(i.get(n)),
        t) {
        case "add":
            K(e) ? Kr(n) && a.push(i.get("length")) : (a.push(i.get(bt)),
            Jt(e) && a.push(i.get(Pr)));
            break;
        case "delete":
            K(e) || (a.push(i.get(bt)),
            Jt(e) && a.push(i.get(Pr)));
            break;
        case "set":
            Jt(e) && a.push(i.get(bt));
            break
        }
    Jr();
    for (const l of a)
        l && Uo(l, 4);
    Yr()
}
const Il = zr("__proto__,__v_isRef,__isVue")
  , Wo = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Un))
  , Es = Nl();
function Nl() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const r = Z(this);
            for (let o = 0, i = this.length; o < i; o++)
                Ce(r, "get", o + "");
            const s = r[t](...n);
            return s === -1 || s === !1 ? r[t](...n.map(Z)) : s
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            Et(),
            Jr();
            const r = Z(this)[t].apply(this, n);
            return Yr(),
            Ct(),
            r
        }
    }
    ),
    e
}
function Bl(e) {
    const t = Z(this);
    return Ce(t, "has", e),
    t.hasOwnProperty(e)
}
class Go {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, r) {
        const s = this._isReadonly
          , o = this._isShallow;
        if (n === "__v_isReactive")
            return !s;
        if (n === "__v_isReadonly")
            return s;
        if (n === "__v_isShallow")
            return o;
        if (n === "__v_raw")
            return r === (s ? o ? Jl : Xo : o ? Yo : Jo).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const i = K(t);
        if (!s) {
            if (i && X(Es, n))
                return Reflect.get(Es, n, r);
            if (n === "hasOwnProperty")
                return Bl
        }
        const a = Reflect.get(t, n, r);
        return (Un(n) ? Wo.has(n) : Il(n)) || (s || Ce(t, "get", n),
        o) ? a : Se(a) ? i && Kr(n) ? a : a.value : de(a) ? s ? ei(a) : Dt(a) : a
    }
}
class Qo extends Go {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, s) {
        let o = t[n];
        if (!this._isShallow) {
            const l = Bt(o);
            if (!Nn(r) && !Bt(r) && (o = Z(o),
            r = Z(r)),
            !K(t) && Se(o) && !Se(r))
                return l ? !1 : (o.value = r,
                !0)
        }
        const i = K(t) && Kr(n) ? Number(n) < t.length : X(t, n)
          , a = Reflect.set(t, n, r, s);
        return t === Z(s) && (i ? ft(r, o) && Qe(t, "set", n, r) : Qe(t, "add", n, r)),
        a
    }
    deleteProperty(t, n) {
        const r = X(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && r && Qe(t, "delete", n, void 0),
        s
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!Un(n) || !Wo.has(n)) && Ce(t, "has", n),
        r
    }
    ownKeys(t) {
        return Ce(t, "iterate", K(t) ? "length" : bt),
        Reflect.ownKeys(t)
    }
}
class Fl extends Go {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const ql = new Qo
  , jl = new Fl
  , Hl = new Qo(!0)
  , Xr = e => e
  , Qn = e => Reflect.getPrototypeOf(e);
function bn(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const s = Z(e)
      , o = Z(t);
    n || (ft(t, o) && Ce(s, "get", t),
    Ce(s, "get", o));
    const {has: i} = Qn(s)
      , a = r ? Xr : n ? ts : rn;
    if (i.call(s, t))
        return a(e.get(t));
    if (i.call(s, o))
        return a(e.get(o));
    e !== s && e.get(t)
}
function wn(e, t=!1) {
    const n = this.__v_raw
      , r = Z(n)
      , s = Z(e);
    return t || (ft(e, s) && Ce(r, "has", e),
    Ce(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
}
function xn(e, t=!1) {
    return e = e.__v_raw,
    !t && Ce(Z(e), "iterate", bt),
    Reflect.get(e, "size", e)
}
function Cs(e) {
    e = Z(e);
    const t = Z(this);
    return Qn(t).has.call(t, e) || (t.add(e),
    Qe(t, "add", e, e)),
    this
}
function Ss(e, t) {
    t = Z(t);
    const n = Z(this)
      , {has: r, get: s} = Qn(n);
    let o = r.call(n, e);
    o || (e = Z(e),
    o = r.call(n, e));
    const i = s.call(n, e);
    return n.set(e, t),
    o ? ft(t, i) && Qe(n, "set", e, t) : Qe(n, "add", e, t),
    this
}
function Rs(e) {
    const t = Z(this)
      , {has: n, get: r} = Qn(t);
    let s = n.call(t, e);
    s || (e = Z(e),
    s = n.call(t, e)),
    r && r.call(t, e);
    const o = t.delete(e);
    return s && Qe(t, "delete", e, void 0),
    o
}
function Ps() {
    const e = Z(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && Qe(e, "clear", void 0, void 0),
    n
}
function En(e, t) {
    return function(r, s) {
        const o = this
          , i = o.__v_raw
          , a = Z(i)
          , l = t ? Xr : e ? ts : rn;
        return !e && Ce(a, "iterate", bt),
        i.forEach( (f, c) => r.call(s, l(f), l(c), o))
    }
}
function Cn(e, t, n) {
    return function(...r) {
        const s = this.__v_raw
          , o = Z(s)
          , i = Jt(o)
          , a = e === "entries" || e === Symbol.iterator && i
          , l = e === "keys" && i
          , f = s[e](...r)
          , c = n ? Xr : t ? ts : rn;
        return !t && Ce(o, "iterate", l ? Pr : bt),
        {
            next() {
                const {value: p, done: d} = f.next();
                return d ? {
                    value: p,
                    done: d
                } : {
                    value: a ? [c(p[0]), c(p[1])] : c(p),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function et(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function Dl() {
    const e = {
        get(o) {
            return bn(this, o)
        },
        get size() {
            return xn(this)
        },
        has: wn,
        add: Cs,
        set: Ss,
        delete: Rs,
        clear: Ps,
        forEach: En(!1, !1)
    }
      , t = {
        get(o) {
            return bn(this, o, !1, !0)
        },
        get size() {
            return xn(this)
        },
        has: wn,
        add: Cs,
        set: Ss,
        delete: Rs,
        clear: Ps,
        forEach: En(!1, !0)
    }
      , n = {
        get(o) {
            return bn(this, o, !0)
        },
        get size() {
            return xn(this, !0)
        },
        has(o) {
            return wn.call(this, o, !0)
        },
        add: et("add"),
        set: et("set"),
        delete: et("delete"),
        clear: et("clear"),
        forEach: En(!0, !1)
    }
      , r = {
        get(o) {
            return bn(this, o, !0, !0)
        },
        get size() {
            return xn(this, !0)
        },
        has(o) {
            return wn.call(this, o, !0)
        },
        add: et("add"),
        set: et("set"),
        delete: et("delete"),
        clear: et("clear"),
        forEach: En(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        e[o] = Cn(o, !1, !1),
        n[o] = Cn(o, !0, !1),
        t[o] = Cn(o, !1, !0),
        r[o] = Cn(o, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [zl,Vl,Ul,Kl] = Dl();
function Zr(e, t) {
    const n = t ? e ? Kl : Ul : e ? Vl : zl;
    return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(X(n, s) && s in r ? n : r, s, o)
}
const Wl = {
    get: Zr(!1, !1)
}
  , Gl = {
    get: Zr(!1, !0)
}
  , Ql = {
    get: Zr(!0, !1)
}
  , Jo = new WeakMap
  , Yo = new WeakMap
  , Xo = new WeakMap
  , Jl = new WeakMap;
function Yl(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function Xl(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Yl(yl(e))
}
function Dt(e) {
    return Bt(e) ? e : es(e, !1, ql, Wl, Jo)
}
function Zo(e) {
    return es(e, !1, Hl, Gl, Yo)
}
function ei(e) {
    return es(e, !0, jl, Ql, Xo)
}
function es(e, t, n, r, s) {
    if (!de(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = s.get(e);
    if (o)
        return o;
    const i = Xl(e);
    if (i === 0)
        return e;
    const a = new Proxy(e,i === 2 ? r : n);
    return s.set(e, a),
    a
}
function It(e) {
    return Bt(e) ? It(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Bt(e) {
    return !!(e && e.__v_isReadonly)
}
function Nn(e) {
    return !!(e && e.__v_isShallow)
}
function ti(e) {
    return It(e) || Bt(e)
}
function Z(e) {
    const t = e && e.__v_raw;
    return t ? Z(t) : e
}
function zt(e) {
    return Object.isExtensible(e) && In(e, "__v_skip", !0),
    e
}
const rn = e => de(e) ? Dt(e) : e
  , ts = e => de(e) ? ei(e) : e;
class ni {
    constructor(t, n, r, s) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new Qr( () => t(this._value), () => Pn(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !s,
        this.__v_isReadonly = r
    }
    get value() {
        const t = Z(this);
        return (!t._cacheable || t.effect.dirty) && ft(t._value, t._value = t.effect.run()) && Pn(t, 4),
        ri(t),
        t.effect._dirtyLevel >= 2 && Pn(t, 2),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}
function Zl(e, t, n=!1) {
    let r, s;
    const o = W(e);
    return o ? (r = e,
    s = Ae) : (r = e.get,
    s = e.set),
    new ni(r,s,o || !s,n)
}
function ri(e) {
    var t;
    ct && yt && (e = Z(e),
    Vo(yt, (t = e.dep) != null ? t : e.dep = Ko( () => e.dep = void 0, e instanceof ni ? e : void 0)))
}
function Pn(e, t=4, n) {
    e = Z(e);
    const r = e.dep;
    r && Uo(r, t)
}
function Se(e) {
    return !!(e && e.__v_isRef === !0)
}
function sn(e) {
    return si(e, !1)
}
function ea(e) {
    return si(e, !0)
}
function si(e, t) {
    return Se(e) ? e : new ta(e,t)
}
class ta {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : Z(t),
        this._value = n ? t : rn(t)
    }
    get value() {
        return ri(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || Nn(t) || Bt(t);
        t = n ? t : Z(t),
        ft(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : rn(t),
        Pn(this, 4))
    }
}
function wt(e) {
    return Se(e) ? e.value : e
}
const na = {
    get: (e, t, n) => wt(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const s = e[t];
        return Se(s) && !Se(n) ? (s.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function oi(e) {
    return It(e) ? e : new Proxy(e,na)
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ut(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (s) {
        Jn(s, t, n)
    }
}
function Le(e, t, n, r) {
    if (W(e)) {
        const o = ut(e, t, n, r);
        return o && qo(o) && o.catch(i => {
            Jn(i, t, n)
        }
        ),
        o
    }
    const s = [];
    for (let o = 0; o < e.length; o++)
        s.push(Le(e[o], t, n, r));
    return s
}
function Jn(e, t, n, r=!0) {
    const s = t ? t.vnode : null;
    if (t) {
        let o = t.parent;
        const i = t.proxy
          , a = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; o; ) {
            const f = o.ec;
            if (f) {
                for (let c = 0; c < f.length; c++)
                    if (f[c](e, i, a) === !1)
                        return
            }
            o = o.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            ut(l, null, 10, [e, i, a]);
            return
        }
    }
    ra(e, n, s, r)
}
function ra(e, t, n, r=!0) {
    console.error(e)
}
let on = !1
  , kr = !1;
const ye = [];
let ze = 0;
const Nt = [];
let st = null
  , mt = 0;
const ii = Promise.resolve();
let ns = null;
function li(e) {
    const t = ns || ii;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function sa(e) {
    let t = ze + 1
      , n = ye.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , s = ye[r]
          , o = ln(s);
        o < e || o === e && s.pre ? t = r + 1 : n = r
    }
    return t
}
function rs(e) {
    (!ye.length || !ye.includes(e, on && e.allowRecurse ? ze + 1 : ze)) && (e.id == null ? ye.push(e) : ye.splice(sa(e.id), 0, e),
    ai())
}
function ai() {
    !on && !kr && (kr = !0,
    ns = ii.then(ui))
}
function oa(e) {
    const t = ye.indexOf(e);
    t > ze && ye.splice(t, 1)
}
function ia(e) {
    K(e) ? Nt.push(...e) : (!st || !st.includes(e, e.allowRecurse ? mt + 1 : mt)) && Nt.push(e),
    ai()
}
function ks(e, t, n=on ? ze + 1 : 0) {
    for (; n < ye.length; n++) {
        const r = ye[n];
        if (r && r.pre) {
            if (e && r.id !== e.uid)
                continue;
            ye.splice(n, 1),
            n--,
            r()
        }
    }
}
function ci(e) {
    if (Nt.length) {
        const t = [...new Set(Nt)].sort( (n, r) => ln(n) - ln(r));
        if (Nt.length = 0,
        st) {
            st.push(...t);
            return
        }
        for (st = t,
        mt = 0; mt < st.length; mt++)
            st[mt]();
        st = null,
        mt = 0
    }
}
const ln = e => e.id == null ? 1 / 0 : e.id
  , la = (e, t) => {
    const n = ln(e) - ln(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function ui(e) {
    kr = !1,
    on = !0,
    ye.sort(la);
    try {
        for (ze = 0; ze < ye.length; ze++) {
            const t = ye[ze];
            t && t.active !== !1 && ut(t, null, 14)
        }
    } finally {
        ze = 0,
        ye.length = 0,
        ci(),
        on = !1,
        ns = null,
        (ye.length || Nt.length) && ui()
    }
}
function aa(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || ce;
    let s = n;
    const o = t.startsWith("update:")
      , i = o && t.slice(7);
    if (i && i in r) {
        const c = `${i === "modelValue" ? "model" : i}Modifiers`
          , {number: p, trim: d} = r[c] || ce;
        d && (s = n.map(m => ge(m) ? m.trim() : m)),
        p && (s = n.map(El))
    }
    let a, l = r[a = lr(t)] || r[a = lr(Ue(t))];
    !l && o && (l = r[a = lr(Ht(t))]),
    l && Le(l, e, 6, s);
    const f = r[a + "Once"];
    if (f) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        Le(f, e, 6, s)
    }
}
function fi(e, t, n=!1) {
    const r = t.emitsCache
      , s = r.get(e);
    if (s !== void 0)
        return s;
    const o = e.emits;
    let i = {}
      , a = !1;
    if (!W(e)) {
        const l = f => {
            const c = fi(f, t, !0);
            c && (a = !0,
            he(i, c))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !o && !a ? (de(e) && r.set(e, null),
    null) : (K(o) ? o.forEach(l => i[l] = null) : he(i, o),
    de(e) && r.set(e, i),
    i)
}
function Yn(e, t) {
    return !e || !Vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    X(e, t[0].toLowerCase() + t.slice(1)) || X(e, Ht(t)) || X(e, t))
}
let we = null
  , Xn = null;
function Bn(e) {
    const t = we;
    return we = e,
    Xn = e && e.type.__scopeId || null,
    t
}
function Sd(e) {
    Xn = e
}
function Rd() {
    Xn = null
}
function ca(e, t=we, n) {
    if (!t || e._n)
        return e;
    const r = (...s) => {
        r._d && js(-1);
        const o = Bn(t);
        let i;
        try {
            i = e(...s)
        } finally {
            Bn(o),
            r._d && js(1)
        }
        return i
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function cr(e) {
    const {type: t, vnode: n, proxy: r, withProxy: s, props: o, propsOptions: [i], slots: a, attrs: l, emit: f, render: c, renderCache: p, data: d, setupState: m, ctx: b, inheritAttrs: T} = e;
    let C, R;
    const N = Bn(e);
    try {
        if (n.shapeFlag & 4) {
            const D = s || r
              , q = D;
            C = De(c.call(q, D, p, o, m, d, b)),
            R = l
        } else {
            const D = t;
            C = De(D.length > 1 ? D(o, {
                attrs: l,
                slots: a,
                emit: f
            }) : D(o, null)),
            R = t.props ? l : ua(l)
        }
    } catch (D) {
        en.length = 0,
        Jn(D, e, 1),
        C = Pe(Ye)
    }
    let B = C;
    if (R && T !== !1) {
        const D = Object.keys(R)
          , {shapeFlag: q} = B;
        D.length && q & 7 && (i && D.some(Vr) && (R = fa(R, i)),
        B = dt(B, R))
    }
    return n.dirs && (B = dt(B),
    B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs),
    n.transition && (B.transition = n.transition),
    C = B,
    Bn(N),
    C
}
const ua = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Vn(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , fa = (e, t) => {
    const n = {};
    for (const r in e)
        (!Vr(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function da(e, t, n) {
    const {props: r, children: s, component: o} = e
      , {props: i, children: a, patchFlag: l} = t
      , f = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? Ts(r, i, f) : !!i;
        if (l & 8) {
            const c = t.dynamicProps;
            for (let p = 0; p < c.length; p++) {
                const d = c[p];
                if (i[d] !== r[d] && !Yn(f, d))
                    return !0
            }
        }
    } else
        return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Ts(r, i, f) : !0 : !!i;
    return !1
}
function Ts(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let s = 0; s < r.length; s++) {
        const o = r[s];
        if (t[o] !== e[o] && !Yn(n, o))
            return !0
    }
    return !1
}
function ha({vnode: e, parent: t}, n) {
    for (; t; ) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el),
        r === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const di = "components";
function pa(e, t) {
    return ma(di, e, !0, t) || e
}
const ga = Symbol.for("v-ndc");
function ma(e, t, n=!0, r=!1) {
    const s = we || me;
    if (s) {
        const o = s.type;
        if (e === di) {
            const a = dc(o, !1);
            if (a && (a === t || a === Ue(t) || a === Gn(Ue(t))))
                return o
        }
        const i = As(s[e] || o[e], t) || As(s.appContext[e], t);
        return !i && r ? o : i
    }
}
function As(e, t) {
    return e && (e[t] || e[Ue(t)] || e[Gn(Ue(t))])
}
const va = e => e.__isSuspense;
function _a(e, t) {
    t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : ia(e)
}
const ya = Symbol.for("v-scx")
  , ba = () => Je(ya)
  , Sn = {};
function kn(e, t, n) {
    return hi(e, t, n)
}
function hi(e, t, {immediate: n, deep: r, flush: s, once: o, onTrack: i, onTrigger: a}=ce) {
    if (t && o) {
        const M = t;
        t = (...ee) => {
            M(...ee),
            q()
        }
    }
    const l = me
      , f = M => r === !0 ? M : _t(M, r === !1 ? 1 : void 0);
    let c, p = !1, d = !1;
    if (Se(e) ? (c = () => e.value,
    p = Nn(e)) : It(e) ? (c = () => f(e),
    p = !0) : K(e) ? (d = !0,
    p = e.some(M => It(M) || Nn(M)),
    c = () => e.map(M => {
        if (Se(M))
            return M.value;
        if (It(M))
            return f(M);
        if (W(M))
            return ut(M, l, 2)
    }
    )) : W(e) ? t ? c = () => ut(e, l, 2) : c = () => (m && m(),
    Le(e, l, 3, [b])) : c = Ae,
    t && r) {
        const M = c;
        c = () => _t(M())
    }
    let m, b = M => {
        m = B.onStop = () => {
            ut(M, l, 4),
            m = B.onStop = void 0
        }
    }
    , T;
    if (rr)
        if (b = Ae,
        t ? n && Le(t, l, 3, [c(), d ? [] : void 0, b]) : c(),
        s === "sync") {
            const M = ba();
            T = M.__watcherHandles || (M.__watcherHandles = [])
        } else
            return Ae;
    let C = d ? new Array(e.length).fill(Sn) : Sn;
    const R = () => {
        if (!(!B.active || !B.dirty))
            if (t) {
                const M = B.run();
                (r || p || (d ? M.some( (ee, j) => ft(ee, C[j])) : ft(M, C))) && (m && m(),
                Le(t, l, 3, [M, C === Sn ? void 0 : d && C[0] === Sn ? [] : C, b]),
                C = M)
            } else
                B.run()
    }
    ;
    R.allowRecurse = !!t;
    let N;
    s === "sync" ? N = R : s === "post" ? N = () => Ee(R, l && l.suspense) : (R.pre = !0,
    l && (R.id = l.uid),
    N = () => rs(R));
    const B = new Qr(c,Ae,N)
      , D = $l()
      , q = () => {
        B.stop(),
        D && Ur(D.effects, B)
    }
    ;
    return t ? n ? R() : C = B.run() : s === "post" ? Ee(B.run.bind(B), l && l.suspense) : B.run(),
    T && T.push(q),
    q
}
function wa(e, t, n) {
    const r = this.proxy
      , s = ge(e) ? e.includes(".") ? pi(r, e) : () => r[e] : e.bind(r, r);
    let o;
    W(t) ? o = t : (o = t.handler,
    n = t);
    const i = mn(this)
      , a = hi(s, o.bind(r), n);
    return i(),
    a
}
function pi(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let s = 0; s < n.length && r; s++)
            r = r[n[s]];
        return r
    }
}
function _t(e, t, n=0, r) {
    if (!de(e) || e.__v_skip)
        return e;
    if (t && t > 0) {
        if (n >= t)
            return e;
        n++
    }
    if (r = r || new Set,
    r.has(e))
        return e;
    if (r.add(e),
    Se(e))
        _t(e.value, t, n, r);
    else if (K(e))
        for (let s = 0; s < e.length; s++)
            _t(e[s], t, n, r);
    else if (vl(e) || Jt(e))
        e.forEach(s => {
            _t(s, t, n, r)
        }
        );
    else if (bl(e))
        for (const s in e)
            _t(e[s], t, n, r);
    return e
}
function xa(e, t) {
    if (we === null)
        return e;
    const n = sr(we) || we.proxy
      , r = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
        let[o,i,a,l=ce] = t[s];
        o && (W(o) && (o = {
            mounted: o,
            updated: o
        }),
        o.deep && _t(i),
        r.push({
            dir: o,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return e
}
function ht(e, t, n, r) {
    const s = e.dirs
      , o = t && t.dirs;
    for (let i = 0; i < s.length; i++) {
        const a = s[i];
        o && (a.oldValue = o[i].value);
        let l = a.dir[r];
        l && (Et(),
        Le(l, n, 8, [e.el, a, e, t]),
        Ct())
    }
}
const ot = Symbol("_leaveCb")
  , Rn = Symbol("_enterCb");
function gi() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return yi( () => {
        e.isMounted = !0
    }
    ),
    is( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
const ke = [Function, Array]
  , mi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ke,
    onEnter: ke,
    onAfterEnter: ke,
    onEnterCancelled: ke,
    onBeforeLeave: ke,
    onLeave: ke,
    onAfterLeave: ke,
    onLeaveCancelled: ke,
    onBeforeAppear: ke,
    onAppear: ke,
    onAfterAppear: ke,
    onAppearCancelled: ke
}
  , Ea = {
    name: "BaseTransition",
    props: mi,
    setup(e, {slots: t}) {
        const n = gn()
          , r = gi();
        return () => {
            const s = t.default && ss(t.default(), !0);
            if (!s || !s.length)
                return;
            let o = s[0];
            if (s.length > 1) {
                for (const d of s)
                    if (d.type !== Ye) {
                        o = d;
                        break
                    }
            }
            const i = Z(e)
              , {mode: a} = i;
            if (r.isLeaving)
                return ur(o);
            const l = Ls(o);
            if (!l)
                return ur(o);
            const f = an(l, i, r, n);
            cn(l, f);
            const c = n.subTree
              , p = c && Ls(c);
            if (p && p.type !== Ye && !vt(l, p)) {
                const d = an(p, i, r, n);
                if (cn(p, d),
                a === "out-in")
                    return r.isLeaving = !0,
                    d.afterLeave = () => {
                        r.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    ur(o);
                a === "in-out" && l.type !== Ye && (d.delayLeave = (m, b, T) => {
                    const C = vi(r, p);
                    C[String(p.key)] = p,
                    m[ot] = () => {
                        b(),
                        m[ot] = void 0,
                        delete f.delayedLeave
                    }
                    ,
                    f.delayedLeave = T
                }
                )
            }
            return o
        }
    }
}
  , Ca = Ea;
function vi(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function an(e, t, n, r) {
    const {appear: s, mode: o, persisted: i=!1, onBeforeEnter: a, onEnter: l, onAfterEnter: f, onEnterCancelled: c, onBeforeLeave: p, onLeave: d, onAfterLeave: m, onLeaveCancelled: b, onBeforeAppear: T, onAppear: C, onAfterAppear: R, onAppearCancelled: N} = t
      , B = String(e.key)
      , D = vi(n, e)
      , q = (j, Q) => {
        j && Le(j, r, 9, Q)
    }
      , M = (j, Q) => {
        const Y = Q[1];
        q(j, Q),
        K(j) ? j.every(te => te.length <= 1) && Y() : j.length <= 1 && Y()
    }
      , ee = {
        mode: o,
        persisted: i,
        beforeEnter(j) {
            let Q = a;
            if (!n.isMounted)
                if (s)
                    Q = T || a;
                else
                    return;
            j[ot] && j[ot](!0);
            const Y = D[B];
            Y && vt(e, Y) && Y.el[ot] && Y.el[ot](),
            q(Q, [j])
        },
        enter(j) {
            let Q = l
              , Y = f
              , te = c;
            if (!n.isMounted)
                if (s)
                    Q = C || l,
                    Y = R || f,
                    te = N || c;
                else
                    return;
            let O = !1;
            const J = j[Rn] = $ => {
                O || (O = !0,
                $ ? q(te, [j]) : q(Y, [j]),
                ee.delayedLeave && ee.delayedLeave(),
                j[Rn] = void 0)
            }
            ;
            Q ? M(Q, [j, J]) : J()
        },
        leave(j, Q) {
            const Y = String(e.key);
            if (j[Rn] && j[Rn](!0),
            n.isUnmounting)
                return Q();
            q(p, [j]);
            let te = !1;
            const O = j[ot] = J => {
                te || (te = !0,
                Q(),
                J ? q(b, [j]) : q(m, [j]),
                j[ot] = void 0,
                D[Y] === e && delete D[Y])
            }
            ;
            D[Y] = e,
            d ? M(d, [j, O]) : O()
        },
        clone(j) {
            return an(j, t, n, r)
        }
    };
    return ee
}
function ur(e) {
    if (Zn(e))
        return e = dt(e),
        e.children = null,
        e
}
function Ls(e) {
    return Zn(e) ? e.children ? e.children[0] : void 0 : e
}
function cn(e, t) {
    e.shapeFlag & 6 && e.component ? cn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function ss(e, t=!1, n) {
    let r = []
      , s = 0;
    for (let o = 0; o < e.length; o++) {
        let i = e[o];
        const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
        i.type === Ne ? (i.patchFlag & 128 && s++,
        r = r.concat(ss(i.children, t, a))) : (t || i.type !== Ye) && r.push(a != null ? dt(i, {
            key: a
        }) : i)
    }
    if (s > 1)
        for (let o = 0; o < r.length; o++)
            r[o].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function os(e, t) {
    return W(e) ? he({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const Tn = e => !!e.type.__asyncLoader
  , Zn = e => e.type.__isKeepAlive;
function Sa(e, t) {
    _i(e, "a", t)
}
function Ra(e, t) {
    _i(e, "da", t)
}
function _i(e, t, n=me) {
    const r = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s; ) {
            if (s.isDeactivated)
                return;
            s = s.parent
        }
        return e()
    }
    );
    if (er(t, r, n),
    n) {
        let s = n.parent;
        for (; s && s.parent; )
            Zn(s.parent.vnode) && Pa(r, t, n, s),
            s = s.parent
    }
}
function Pa(e, t, n, r) {
    const s = er(t, e, r, !0);
    wi( () => {
        Ur(r[t], s)
    }
    , n)
}
function er(e, t, n=me, r=!1) {
    if (n) {
        const s = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...i) => {
            if (n.isUnmounted)
                return;
            Et();
            const a = mn(n)
              , l = Le(t, n, e, i);
            return a(),
            Ct(),
            l
        }
        );
        return r ? s.unshift(o) : s.push(o),
        o
    }
}
const Xe = e => (t, n=me) => (!rr || e === "sp") && er(e, (...r) => t(...r), n)
  , ka = Xe("bm")
  , yi = Xe("m")
  , Ta = Xe("bu")
  , bi = Xe("u")
  , is = Xe("bum")
  , wi = Xe("um")
  , Aa = Xe("sp")
  , La = Xe("rtg")
  , Oa = Xe("rtc");
function $a(e, t=me) {
    er("ec", e, t)
}
const Tr = e => e ? Mi(e) ? sr(e) || e.proxy : Tr(e.parent) : null
  , Xt = he(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Tr(e.parent),
    $root: e => Tr(e.root),
    $emit: e => e.emit,
    $options: e => ls(e),
    $forceUpdate: e => e.f || (e.f = () => {
        e.effect.dirty = !0,
        rs(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = li.bind(e.proxy)),
    $watch: e => wa.bind(e)
})
  , fr = (e, t) => e !== ce && !e.__isScriptSetup && X(e, t)
  , Ma = {
    get({_: e}, t) {
        const {ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: l} = e;
        let f;
        if (t[0] !== "$") {
            const m = i[t];
            if (m !== void 0)
                switch (m) {
                case 1:
                    return r[t];
                case 2:
                    return s[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
                }
            else {
                if (fr(r, t))
                    return i[t] = 1,
                    r[t];
                if (s !== ce && X(s, t))
                    return i[t] = 2,
                    s[t];
                if ((f = e.propsOptions[0]) && X(f, t))
                    return i[t] = 3,
                    o[t];
                if (n !== ce && X(n, t))
                    return i[t] = 4,
                    n[t];
                Ar && (i[t] = 0)
            }
        }
        const c = Xt[t];
        let p, d;
        if (c)
            return t === "$attrs" && Ce(e, "get", t),
            c(e);
        if ((p = a.__cssModules) && (p = p[t]))
            return p;
        if (n !== ce && X(n, t))
            return i[t] = 4,
            n[t];
        if (d = l.config.globalProperties,
        X(d, t))
            return d[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: s, ctx: o} = e;
        return fr(s, t) ? (s[t] = n,
        !0) : r !== ce && X(r, t) ? (r[t] = n,
        !0) : X(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o}}, i) {
        let a;
        return !!n[i] || e !== ce && X(e, i) || fr(t, i) || (a = o[0]) && X(a, i) || X(r, i) || X(Xt, i) || X(s.config.globalProperties, i)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : X(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function Os(e) {
    return K(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
let Ar = !0;
function Ia(e) {
    const t = ls(e)
      , n = e.proxy
      , r = e.ctx;
    Ar = !1,
    t.beforeCreate && $s(t.beforeCreate, e, "bc");
    const {data: s, computed: o, methods: i, watch: a, provide: l, inject: f, created: c, beforeMount: p, mounted: d, beforeUpdate: m, updated: b, activated: T, deactivated: C, beforeDestroy: R, beforeUnmount: N, destroyed: B, unmounted: D, render: q, renderTracked: M, renderTriggered: ee, errorCaptured: j, serverPrefetch: Q, expose: Y, inheritAttrs: te, components: O, directives: J, filters: $} = t;
    if (f && Na(f, r, null),
    i)
        for (const ie in i) {
            const re = i[ie];
            W(re) && (r[ie] = re.bind(n))
        }
    if (s) {
        const ie = s.call(n, n);
        de(ie) && (e.data = Dt(ie))
    }
    if (Ar = !0,
    o)
        for (const ie in o) {
            const re = o[ie]
              , Ke = W(re) ? re.bind(n, n) : W(re.get) ? re.get.bind(n, n) : Ae
              , Ze = !W(re) && W(re.set) ? re.set.bind(n) : Ae
              , qe = V({
                get: Ke,
                set: Ze
            });
            Object.defineProperty(r, ie, {
                enumerable: !0,
                configurable: !0,
                get: () => qe.value,
                set: xe => qe.value = xe
            })
        }
    if (a)
        for (const ie in a)
            xi(a[ie], r, n, ie);
    if (l) {
        const ie = W(l) ? l.call(n) : l;
        Reflect.ownKeys(ie).forEach(re => {
            An(re, ie[re])
        }
        )
    }
    c && $s(c, e, "c");
    function ae(ie, re) {
        K(re) ? re.forEach(Ke => ie(Ke.bind(n))) : re && ie(re.bind(n))
    }
    if (ae(ka, p),
    ae(yi, d),
    ae(Ta, m),
    ae(bi, b),
    ae(Sa, T),
    ae(Ra, C),
    ae($a, j),
    ae(Oa, M),
    ae(La, ee),
    ae(is, N),
    ae(wi, D),
    ae(Aa, Q),
    K(Y))
        if (Y.length) {
            const ie = e.exposed || (e.exposed = {});
            Y.forEach(re => {
                Object.defineProperty(ie, re, {
                    get: () => n[re],
                    set: Ke => n[re] = Ke
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    q && e.render === Ae && (e.render = q),
    te != null && (e.inheritAttrs = te),
    O && (e.components = O),
    J && (e.directives = J)
}
function Na(e, t, n=Ae) {
    K(e) && (e = Lr(e));
    for (const r in e) {
        const s = e[r];
        let o;
        de(s) ? "default"in s ? o = Je(s.from || r, s.default, !0) : o = Je(s.from || r) : o = Je(s),
        Se(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: i => o.value = i
        }) : t[r] = o
    }
}
function $s(e, t, n) {
    Le(K(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function xi(e, t, n, r) {
    const s = r.includes(".") ? pi(n, r) : () => n[r];
    if (ge(e)) {
        const o = t[e];
        W(o) && kn(s, o)
    } else if (W(e))
        kn(s, e.bind(n));
    else if (de(e))
        if (K(e))
            e.forEach(o => xi(o, t, n, r));
        else {
            const o = W(e.handler) ? e.handler.bind(n) : t[e.handler];
            W(o) && kn(s, o, e)
        }
}
function ls(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: s, optionsCache: o, config: {optionMergeStrategies: i}} = e.appContext
      , a = o.get(t);
    let l;
    return a ? l = a : !s.length && !n && !r ? l = t : (l = {},
    s.length && s.forEach(f => Fn(l, f, i, !0)),
    Fn(l, t, i)),
    de(t) && o.set(t, l),
    l
}
function Fn(e, t, n, r=!1) {
    const {mixins: s, extends: o} = t;
    o && Fn(e, o, n, !0),
    s && s.forEach(i => Fn(e, i, n, !0));
    for (const i in t)
        if (!(r && i === "expose")) {
            const a = Ba[i] || n && n[i];
            e[i] = a ? a(e[i], t[i]) : t[i]
        }
    return e
}
const Ba = {
    data: Ms,
    props: Is,
    emits: Is,
    methods: Gt,
    computed: Gt,
    beforeCreate: be,
    created: be,
    beforeMount: be,
    mounted: be,
    beforeUpdate: be,
    updated: be,
    beforeDestroy: be,
    beforeUnmount: be,
    destroyed: be,
    unmounted: be,
    activated: be,
    deactivated: be,
    errorCaptured: be,
    serverPrefetch: be,
    components: Gt,
    directives: Gt,
    watch: qa,
    provide: Ms,
    inject: Fa
};
function Ms(e, t) {
    return t ? e ? function() {
        return he(W(e) ? e.call(this, this) : e, W(t) ? t.call(this, this) : t)
    }
    : t : e
}
function Fa(e, t) {
    return Gt(Lr(e), Lr(t))
}
function Lr(e) {
    if (K(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function be(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Gt(e, t) {
    return e ? he(Object.create(null), e, t) : t
}
function Is(e, t) {
    return e ? K(e) && K(t) ? [...new Set([...e, ...t])] : he(Object.create(null), Os(e), Os(t ?? {})) : t
}
function qa(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = he(Object.create(null), e);
    for (const r in t)
        n[r] = be(e[r], t[r]);
    return n
}
function Ei() {
    return {
        app: null,
        config: {
            isNativeTag: gl,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let ja = 0;
function Ha(e, t) {
    return function(r, s=null) {
        W(r) || (r = he({}, r)),
        s != null && !de(s) && (s = null);
        const o = Ei()
          , i = new WeakSet;
        let a = !1;
        const l = o.app = {
            _uid: ja++,
            _component: r,
            _props: s,
            _container: null,
            _context: o,
            _instance: null,
            version: pc,
            get config() {
                return o.config
            },
            set config(f) {},
            use(f, ...c) {
                return i.has(f) || (f && W(f.install) ? (i.add(f),
                f.install(l, ...c)) : W(f) && (i.add(f),
                f(l, ...c))),
                l
            },
            mixin(f) {
                return o.mixins.includes(f) || o.mixins.push(f),
                l
            },
            component(f, c) {
                return c ? (o.components[f] = c,
                l) : o.components[f]
            },
            directive(f, c) {
                return c ? (o.directives[f] = c,
                l) : o.directives[f]
            },
            mount(f, c, p) {
                if (!a) {
                    const d = Pe(r, s);
                    return d.appContext = o,
                    p === !0 ? p = "svg" : p === !1 && (p = void 0),
                    c && t ? t(d, f) : e(d, f, p),
                    a = !0,
                    l._container = f,
                    f.__vue_app__ = l,
                    sr(d.component) || d.component.proxy
                }
            },
            unmount() {
                a && (e(null, l._container),
                delete l._container.__vue_app__)
            },
            provide(f, c) {
                return o.provides[f] = c,
                l
            },
            runWithContext(f) {
                const c = Zt;
                Zt = l;
                try {
                    return f()
                } finally {
                    Zt = c
                }
            }
        };
        return l
    }
}
let Zt = null;
function An(e, t) {
    if (me) {
        let n = me.provides;
        const r = me.parent && me.parent.provides;
        r === n && (n = me.provides = Object.create(r)),
        n[e] = t
    }
}
function Je(e, t, n=!1) {
    const r = me || we;
    if (r || Zt) {
        const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Zt._context.provides;
        if (s && e in s)
            return s[e];
        if (arguments.length > 1)
            return n && W(t) ? t.call(r && r.proxy) : t
    }
}
function Da(e, t, n, r=!1) {
    const s = {}
      , o = {};
    In(o, nr, 1),
    e.propsDefaults = Object.create(null),
    Ci(e, t, s, o);
    for (const i in e.propsOptions[0])
        i in s || (s[i] = void 0);
    n ? e.props = r ? s : Zo(s) : e.type.props ? e.props = s : e.props = o,
    e.attrs = o
}
function za(e, t, n, r) {
    const {props: s, attrs: o, vnode: {patchFlag: i}} = e
      , a = Z(s)
      , [l] = e.propsOptions;
    let f = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const c = e.vnode.dynamicProps;
            for (let p = 0; p < c.length; p++) {
                let d = c[p];
                if (Yn(e.emitsOptions, d))
                    continue;
                const m = t[d];
                if (l)
                    if (X(o, d))
                        m !== o[d] && (o[d] = m,
                        f = !0);
                    else {
                        const b = Ue(d);
                        s[b] = Or(l, a, b, m, e, !1)
                    }
                else
                    m !== o[d] && (o[d] = m,
                    f = !0)
            }
        }
    } else {
        Ci(e, t, s, o) && (f = !0);
        let c;
        for (const p in a)
            (!t || !X(t, p) && ((c = Ht(p)) === p || !X(t, c))) && (l ? n && (n[p] !== void 0 || n[c] !== void 0) && (s[p] = Or(l, a, p, void 0, e, !0)) : delete s[p]);
        if (o !== a)
            for (const p in o)
                (!t || !X(t, p)) && (delete o[p],
                f = !0)
    }
    f && Qe(e, "set", "$attrs")
}
function Ci(e, t, n, r) {
    const [s,o] = e.propsOptions;
    let i = !1, a;
    if (t)
        for (let l in t) {
            if (Yt(l))
                continue;
            const f = t[l];
            let c;
            s && X(s, c = Ue(l)) ? !o || !o.includes(c) ? n[c] = f : (a || (a = {}))[c] = f : Yn(e.emitsOptions, l) || (!(l in r) || f !== r[l]) && (r[l] = f,
            i = !0)
        }
    if (o) {
        const l = Z(n)
          , f = a || ce;
        for (let c = 0; c < o.length; c++) {
            const p = o[c];
            n[p] = Or(s, l, p, f[p], e, !X(f, p))
        }
    }
    return i
}
function Or(e, t, n, r, s, o) {
    const i = e[n];
    if (i != null) {
        const a = X(i, "default");
        if (a && r === void 0) {
            const l = i.default;
            if (i.type !== Function && !i.skipFactory && W(l)) {
                const {propsDefaults: f} = s;
                if (n in f)
                    r = f[n];
                else {
                    const c = mn(s);
                    r = f[n] = l.call(null, t),
                    c()
                }
            } else
                r = l
        }
        i[0] && (o && !a ? r = !1 : i[1] && (r === "" || r === Ht(n)) && (r = !0))
    }
    return r
}
function Si(e, t, n=!1) {
    const r = t.propsCache
      , s = r.get(e);
    if (s)
        return s;
    const o = e.props
      , i = {}
      , a = [];
    let l = !1;
    if (!W(e)) {
        const c = p => {
            l = !0;
            const [d,m] = Si(p, t, !0);
            he(i, d),
            m && a.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    if (!o && !l)
        return de(e) && r.set(e, Mt),
        Mt;
    if (K(o))
        for (let c = 0; c < o.length; c++) {
            const p = Ue(o[c]);
            Ns(p) && (i[p] = ce)
        }
    else if (o)
        for (const c in o) {
            const p = Ue(c);
            if (Ns(p)) {
                const d = o[c]
                  , m = i[p] = K(d) || W(d) ? {
                    type: d
                } : he({}, d);
                if (m) {
                    const b = qs(Boolean, m.type)
                      , T = qs(String, m.type);
                    m[0] = b > -1,
                    m[1] = T < 0 || b < T,
                    (b > -1 || X(m, "default")) && a.push(p)
                }
            }
        }
    const f = [i, a];
    return de(e) && r.set(e, f),
    f
}
function Ns(e) {
    return e[0] !== "$" && !Yt(e)
}
function Bs(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function Fs(e, t) {
    return Bs(e) === Bs(t)
}
function qs(e, t) {
    return K(t) ? t.findIndex(n => Fs(n, e)) : W(t) && Fs(t, e) ? 0 : -1
}
const Ri = e => e[0] === "_" || e === "$stable"
  , as = e => K(e) ? e.map(De) : [De(e)]
  , Va = (e, t, n) => {
    if (t._n)
        return t;
    const r = ca( (...s) => as(t(...s)), n);
    return r._c = !1,
    r
}
  , Pi = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
        if (Ri(s))
            continue;
        const o = e[s];
        if (W(o))
            t[s] = Va(s, o, r);
        else if (o != null) {
            const i = as(o);
            t[s] = () => i
        }
    }
}
  , ki = (e, t) => {
    const n = as(t);
    e.slots.default = () => n
}
  , Ua = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = Z(t),
        In(t, "_", n)) : Pi(t, e.slots = {})
    } else
        e.slots = {},
        t && ki(e, t);
    In(e.slots, nr, 1)
}
  , Ka = (e, t, n) => {
    const {vnode: r, slots: s} = e;
    let o = !0
      , i = ce;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? o = !1 : (he(s, t),
        !n && a === 1 && delete s._) : (o = !t.$stable,
        Pi(t, s)),
        i = t
    } else
        t && (ki(e, t),
        i = {
            default: 1
        });
    if (o)
        for (const a in s)
            !Ri(a) && i[a] == null && delete s[a]
}
;
function $r(e, t, n, r, s=!1) {
    if (K(e)) {
        e.forEach( (d, m) => $r(d, t && (K(t) ? t[m] : t), n, r, s));
        return
    }
    if (Tn(r) && !s)
        return;
    const o = r.shapeFlag & 4 ? sr(r.component) || r.component.proxy : r.el
      , i = s ? null : o
      , {i: a, r: l} = e
      , f = t && t.r
      , c = a.refs === ce ? a.refs = {} : a.refs
      , p = a.setupState;
    if (f != null && f !== l && (ge(f) ? (c[f] = null,
    X(p, f) && (p[f] = null)) : Se(f) && (f.value = null)),
    W(l))
        ut(l, a, 12, [i, c]);
    else {
        const d = ge(l)
          , m = Se(l);
        if (d || m) {
            const b = () => {
                if (e.f) {
                    const T = d ? X(p, l) ? p[l] : c[l] : l.value;
                    s ? K(T) && Ur(T, o) : K(T) ? T.includes(o) || T.push(o) : d ? (c[l] = [o],
                    X(p, l) && (p[l] = c[l])) : (l.value = [o],
                    e.k && (c[e.k] = l.value))
                } else
                    d ? (c[l] = i,
                    X(p, l) && (p[l] = i)) : m && (l.value = i,
                    e.k && (c[e.k] = i))
            }
            ;
            i ? (b.id = -1,
            Ee(b, n)) : b()
        }
    }
}
const Ee = _a;
function Wa(e) {
    return Ga(e)
}
function Ga(e, t) {
    const n = jo();
    n.__VUE__ = !0;
    const {insert: r, remove: s, patchProp: o, createElement: i, createText: a, createComment: l, setText: f, setElementText: c, parentNode: p, nextSibling: d, setScopeId: m=Ae, insertStaticContent: b} = e
      , T = (u, h, g, y=null, v=null, E=null, k=void 0, x=null, S=!!h.dynamicChildren) => {
        if (u === h)
            return;
        u && !vt(u, h) && (y = _(u),
        xe(u, v, E, !0),
        u = null),
        h.patchFlag === -2 && (S = !1,
        h.dynamicChildren = null);
        const {type: w, ref: L, shapeFlag: H} = h;
        switch (w) {
        case tr:
            C(u, h, g, y);
            break;
        case Ye:
            R(u, h, g, y);
            break;
        case hr:
            u == null && N(h, g, y, k);
            break;
        case Ne:
            O(u, h, g, y, v, E, k, x, S);
            break;
        default:
            H & 1 ? q(u, h, g, y, v, E, k, x, S) : H & 6 ? J(u, h, g, y, v, E, k, x, S) : (H & 64 || H & 128) && w.process(u, h, g, y, v, E, k, x, S, I)
        }
        L != null && v && $r(L, u && u.ref, E, h || u, !h)
    }
      , C = (u, h, g, y) => {
        if (u == null)
            r(h.el = a(h.children), g, y);
        else {
            const v = h.el = u.el;
            h.children !== u.children && f(v, h.children)
        }
    }
      , R = (u, h, g, y) => {
        u == null ? r(h.el = l(h.children || ""), g, y) : h.el = u.el
    }
      , N = (u, h, g, y) => {
        [u.el,u.anchor] = b(u.children, h, g, y, u.el, u.anchor)
    }
      , B = ({el: u, anchor: h}, g, y) => {
        let v;
        for (; u && u !== h; )
            v = d(u),
            r(u, g, y),
            u = v;
        r(h, g, y)
    }
      , D = ({el: u, anchor: h}) => {
        let g;
        for (; u && u !== h; )
            g = d(u),
            s(u),
            u = g;
        s(h)
    }
      , q = (u, h, g, y, v, E, k, x, S) => {
        h.type === "svg" ? k = "svg" : h.type === "math" && (k = "mathml"),
        u == null ? M(h, g, y, v, E, k, x, S) : Q(u, h, v, E, k, x, S)
    }
      , M = (u, h, g, y, v, E, k, x) => {
        let S, w;
        const {props: L, shapeFlag: H, transition: F, dirs: U} = u;
        if (S = u.el = i(u.type, E, L && L.is, L),
        H & 8 ? c(S, u.children) : H & 16 && j(u.children, S, null, y, v, dr(u, E), k, x),
        U && ht(u, null, y, "created"),
        ee(S, u, u.scopeId, k, y),
        L) {
            for (const le in L)
                le !== "value" && !Yt(le) && o(S, le, null, L[le], E, u.children, y, v, ve);
            "value"in L && o(S, "value", null, L.value, E),
            (w = L.onVnodeBeforeMount) && He(w, y, u)
        }
        U && ht(u, null, y, "beforeMount");
        const G = Qa(v, F);
        G && F.beforeEnter(S),
        r(S, h, g),
        ((w = L && L.onVnodeMounted) || G || U) && Ee( () => {
            w && He(w, y, u),
            G && F.enter(S),
            U && ht(u, null, y, "mounted")
        }
        , v)
    }
      , ee = (u, h, g, y, v) => {
        if (g && m(u, g),
        y)
            for (let E = 0; E < y.length; E++)
                m(u, y[E]);
        if (v) {
            let E = v.subTree;
            if (h === E) {
                const k = v.vnode;
                ee(u, k, k.scopeId, k.slotScopeIds, v.parent)
            }
        }
    }
      , j = (u, h, g, y, v, E, k, x, S=0) => {
        for (let w = S; w < u.length; w++) {
            const L = u[w] = x ? it(u[w]) : De(u[w]);
            T(null, L, h, g, y, v, E, k, x)
        }
    }
      , Q = (u, h, g, y, v, E, k) => {
        const x = h.el = u.el;
        let {patchFlag: S, dynamicChildren: w, dirs: L} = h;
        S |= u.patchFlag & 16;
        const H = u.props || ce
          , F = h.props || ce;
        let U;
        if (g && pt(g, !1),
        (U = F.onVnodeBeforeUpdate) && He(U, g, h, u),
        L && ht(h, u, g, "beforeUpdate"),
        g && pt(g, !0),
        w ? Y(u.dynamicChildren, w, x, g, y, dr(h, v), E) : k || re(u, h, x, null, g, y, dr(h, v), E, !1),
        S > 0) {
            if (S & 16)
                te(x, h, H, F, g, y, v);
            else if (S & 2 && H.class !== F.class && o(x, "class", null, F.class, v),
            S & 4 && o(x, "style", H.style, F.style, v),
            S & 8) {
                const G = h.dynamicProps;
                for (let le = 0; le < G.length; le++) {
                    const fe = G[le]
                      , pe = H[fe]
                      , Oe = F[fe];
                    (Oe !== pe || fe === "value") && o(x, fe, pe, Oe, v, u.children, g, y, ve)
                }
            }
            S & 1 && u.children !== h.children && c(x, h.children)
        } else
            !k && w == null && te(x, h, H, F, g, y, v);
        ((U = F.onVnodeUpdated) || L) && Ee( () => {
            U && He(U, g, h, u),
            L && ht(h, u, g, "updated")
        }
        , y)
    }
      , Y = (u, h, g, y, v, E, k) => {
        for (let x = 0; x < h.length; x++) {
            const S = u[x]
              , w = h[x]
              , L = S.el && (S.type === Ne || !vt(S, w) || S.shapeFlag & 70) ? p(S.el) : g;
            T(S, w, L, null, y, v, E, k, !0)
        }
    }
      , te = (u, h, g, y, v, E, k) => {
        if (g !== y) {
            if (g !== ce)
                for (const x in g)
                    !Yt(x) && !(x in y) && o(u, x, g[x], null, k, h.children, v, E, ve);
            for (const x in y) {
                if (Yt(x))
                    continue;
                const S = y[x]
                  , w = g[x];
                S !== w && x !== "value" && o(u, x, w, S, k, h.children, v, E, ve)
            }
            "value"in y && o(u, "value", g.value, y.value, k)
        }
    }
      , O = (u, h, g, y, v, E, k, x, S) => {
        const w = h.el = u ? u.el : a("")
          , L = h.anchor = u ? u.anchor : a("");
        let {patchFlag: H, dynamicChildren: F, slotScopeIds: U} = h;
        U && (x = x ? x.concat(U) : U),
        u == null ? (r(w, g, y),
        r(L, g, y),
        j(h.children || [], g, L, v, E, k, x, S)) : H > 0 && H & 64 && F && u.dynamicChildren ? (Y(u.dynamicChildren, F, g, v, E, k, x),
        (h.key != null || v && h === v.subTree) && Ti(u, h, !0)) : re(u, h, g, L, v, E, k, x, S)
    }
      , J = (u, h, g, y, v, E, k, x, S) => {
        h.slotScopeIds = x,
        u == null ? h.shapeFlag & 512 ? v.ctx.activate(h, g, y, k, S) : $(h, g, y, v, E, k, S) : ne(u, h, S)
    }
      , $ = (u, h, g, y, v, E, k) => {
        const x = u.component = lc(u, y, v);
        if (Zn(u) && (x.ctx.renderer = I),
        ac(x),
        x.asyncDep) {
            if (v && v.registerDep(x, ae),
            !u.el) {
                const S = x.subTree = Pe(Ye);
                R(null, S, h, g)
            }
        } else
            ae(x, u, h, g, v, E, k)
    }
      , ne = (u, h, g) => {
        const y = h.component = u.component;
        if (da(u, h, g))
            if (y.asyncDep && !y.asyncResolved) {
                ie(y, h, g);
                return
            } else
                y.next = h,
                oa(y.update),
                y.effect.dirty = !0,
                y.update();
        else
            h.el = u.el,
            y.vnode = h
    }
      , ae = (u, h, g, y, v, E, k) => {
        const x = () => {
            if (u.isMounted) {
                let {next: L, bu: H, u: F, parent: U, vnode: G} = u;
                {
                    const Pt = Ai(u);
                    if (Pt) {
                        L && (L.el = G.el,
                        ie(u, L, k)),
                        Pt.asyncDep.then( () => {
                            u.isUnmounted || x()
                        }
                        );
                        return
                    }
                }
                let le = L, fe;
                pt(u, !1),
                L ? (L.el = G.el,
                ie(u, L, k)) : L = G,
                H && ar(H),
                (fe = L.props && L.props.onVnodeBeforeUpdate) && He(fe, U, L, G),
                pt(u, !0);
                const pe = cr(u)
                  , Oe = u.subTree;
                u.subTree = pe,
                T(Oe, pe, p(Oe.el), _(Oe), u, v, E),
                L.el = pe.el,
                le === null && ha(u, pe.el),
                F && Ee(F, v),
                (fe = L.props && L.props.onVnodeUpdated) && Ee( () => He(fe, U, L, G), v)
            } else {
                let L;
                const {el: H, props: F} = h
                  , {bm: U, m: G, parent: le} = u
                  , fe = Tn(h);
                if (pt(u, !1),
                U && ar(U),
                !fe && (L = F && F.onVnodeBeforeMount) && He(L, le, h),
                pt(u, !0),
                H && ue) {
                    const pe = () => {
                        u.subTree = cr(u),
                        ue(H, u.subTree, u, v, null)
                    }
                    ;
                    fe ? h.type.__asyncLoader().then( () => !u.isUnmounted && pe()) : pe()
                } else {
                    const pe = u.subTree = cr(u);
                    T(null, pe, g, y, u, v, E),
                    h.el = pe.el
                }
                if (G && Ee(G, v),
                !fe && (L = F && F.onVnodeMounted)) {
                    const pe = h;
                    Ee( () => He(L, le, pe), v)
                }
                (h.shapeFlag & 256 || le && Tn(le.vnode) && le.vnode.shapeFlag & 256) && u.a && Ee(u.a, v),
                u.isMounted = !0,
                h = g = y = null
            }
        }
          , S = u.effect = new Qr(x,Ae, () => rs(w),u.scope)
          , w = u.update = () => {
            S.dirty && S.run()
        }
        ;
        w.id = u.uid,
        pt(u, !0),
        w()
    }
      , ie = (u, h, g) => {
        h.component = u;
        const y = u.vnode.props;
        u.vnode = h,
        u.next = null,
        za(u, h.props, y, g),
        Ka(u, h.children, g),
        Et(),
        ks(u),
        Ct()
    }
      , re = (u, h, g, y, v, E, k, x, S=!1) => {
        const w = u && u.children
          , L = u ? u.shapeFlag : 0
          , H = h.children
          , {patchFlag: F, shapeFlag: U} = h;
        if (F > 0) {
            if (F & 128) {
                Ze(w, H, g, y, v, E, k, x, S);
                return
            } else if (F & 256) {
                Ke(w, H, g, y, v, E, k, x, S);
                return
            }
        }
        U & 8 ? (L & 16 && ve(w, v, E),
        H !== w && c(g, H)) : L & 16 ? U & 16 ? Ze(w, H, g, y, v, E, k, x, S) : ve(w, v, E, !0) : (L & 8 && c(g, ""),
        U & 16 && j(H, g, y, v, E, k, x, S))
    }
      , Ke = (u, h, g, y, v, E, k, x, S) => {
        u = u || Mt,
        h = h || Mt;
        const w = u.length
          , L = h.length
          , H = Math.min(w, L);
        let F;
        for (F = 0; F < H; F++) {
            const U = h[F] = S ? it(h[F]) : De(h[F]);
            T(u[F], U, g, null, v, E, k, x, S)
        }
        w > L ? ve(u, v, E, !0, !1, H) : j(h, g, y, v, E, k, x, S, H)
    }
      , Ze = (u, h, g, y, v, E, k, x, S) => {
        let w = 0;
        const L = h.length;
        let H = u.length - 1
          , F = L - 1;
        for (; w <= H && w <= F; ) {
            const U = u[w]
              , G = h[w] = S ? it(h[w]) : De(h[w]);
            if (vt(U, G))
                T(U, G, g, null, v, E, k, x, S);
            else
                break;
            w++
        }
        for (; w <= H && w <= F; ) {
            const U = u[H]
              , G = h[F] = S ? it(h[F]) : De(h[F]);
            if (vt(U, G))
                T(U, G, g, null, v, E, k, x, S);
            else
                break;
            H--,
            F--
        }
        if (w > H) {
            if (w <= F) {
                const U = F + 1
                  , G = U < L ? h[U].el : y;
                for (; w <= F; )
                    T(null, h[w] = S ? it(h[w]) : De(h[w]), g, G, v, E, k, x, S),
                    w++
            }
        } else if (w > F)
            for (; w <= H; )
                xe(u[w], v, E, !0),
                w++;
        else {
            const U = w
              , G = w
              , le = new Map;
            for (w = G; w <= F; w++) {
                const Re = h[w] = S ? it(h[w]) : De(h[w]);
                Re.key != null && le.set(Re.key, w)
            }
            let fe, pe = 0;
            const Oe = F - G + 1;
            let Pt = !1
              , vs = 0;
            const Vt = new Array(Oe);
            for (w = 0; w < Oe; w++)
                Vt[w] = 0;
            for (w = U; w <= H; w++) {
                const Re = u[w];
                if (pe >= Oe) {
                    xe(Re, v, E, !0);
                    continue
                }
                let je;
                if (Re.key != null)
                    je = le.get(Re.key);
                else
                    for (fe = G; fe <= F; fe++)
                        if (Vt[fe - G] === 0 && vt(Re, h[fe])) {
                            je = fe;
                            break
                        }
                je === void 0 ? xe(Re, v, E, !0) : (Vt[je - G] = w + 1,
                je >= vs ? vs = je : Pt = !0,
                T(Re, h[je], g, null, v, E, k, x, S),
                pe++)
            }
            const _s = Pt ? Ja(Vt) : Mt;
            for (fe = _s.length - 1,
            w = Oe - 1; w >= 0; w--) {
                const Re = G + w
                  , je = h[Re]
                  , ys = Re + 1 < L ? h[Re + 1].el : y;
                Vt[w] === 0 ? T(null, je, g, ys, v, E, k, x, S) : Pt && (fe < 0 || w !== _s[fe] ? qe(je, g, ys, 2) : fe--)
            }
        }
    }
      , qe = (u, h, g, y, v=null) => {
        const {el: E, type: k, transition: x, children: S, shapeFlag: w} = u;
        if (w & 6) {
            qe(u.component.subTree, h, g, y);
            return
        }
        if (w & 128) {
            u.suspense.move(h, g, y);
            return
        }
        if (w & 64) {
            k.move(u, h, g, I);
            return
        }
        if (k === Ne) {
            r(E, h, g);
            for (let H = 0; H < S.length; H++)
                qe(S[H], h, g, y);
            r(u.anchor, h, g);
            return
        }
        if (k === hr) {
            B(u, h, g);
            return
        }
        if (y !== 2 && w & 1 && x)
            if (y === 0)
                x.beforeEnter(E),
                r(E, h, g),
                Ee( () => x.enter(E), v);
            else {
                const {leave: H, delayLeave: F, afterLeave: U} = x
                  , G = () => r(E, h, g)
                  , le = () => {
                    H(E, () => {
                        G(),
                        U && U()
                    }
                    )
                }
                ;
                F ? F(E, G, le) : le()
            }
        else
            r(E, h, g)
    }
      , xe = (u, h, g, y=!1, v=!1) => {
        const {type: E, props: k, ref: x, children: S, dynamicChildren: w, shapeFlag: L, patchFlag: H, dirs: F} = u;
        if (x != null && $r(x, null, g, u, !0),
        L & 256) {
            h.ctx.deactivate(u);
            return
        }
        const U = L & 1 && F
          , G = !Tn(u);
        let le;
        if (G && (le = k && k.onVnodeBeforeUnmount) && He(le, h, u),
        L & 6)
            yn(u.component, g, y);
        else {
            if (L & 128) {
                u.suspense.unmount(g, y);
                return
            }
            U && ht(u, null, h, "beforeUnmount"),
            L & 64 ? u.type.remove(u, h, g, v, I, y) : w && (E !== Ne || H > 0 && H & 64) ? ve(w, h, g, !1, !0) : (E === Ne && H & 384 || !v && L & 16) && ve(S, h, g),
            y && St(u)
        }
        (G && (le = k && k.onVnodeUnmounted) || U) && Ee( () => {
            le && He(le, h, u),
            U && ht(u, null, h, "unmounted")
        }
        , g)
    }
      , St = u => {
        const {type: h, el: g, anchor: y, transition: v} = u;
        if (h === Ne) {
            Rt(g, y);
            return
        }
        if (h === hr) {
            D(u);
            return
        }
        const E = () => {
            s(g),
            v && !v.persisted && v.afterLeave && v.afterLeave()
        }
        ;
        if (u.shapeFlag & 1 && v && !v.persisted) {
            const {leave: k, delayLeave: x} = v
              , S = () => k(g, E);
            x ? x(u.el, E, S) : S()
        } else
            E()
    }
      , Rt = (u, h) => {
        let g;
        for (; u !== h; )
            g = d(u),
            s(u),
            u = g;
        s(h)
    }
      , yn = (u, h, g) => {
        const {bum: y, scope: v, update: E, subTree: k, um: x} = u;
        y && ar(y),
        v.stop(),
        E && (E.active = !1,
        xe(k, u, h, g)),
        x && Ee(x, h),
        Ee( () => {
            u.isUnmounted = !0
        }
        , h),
        h && h.pendingBranch && !h.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === h.pendingId && (h.deps--,
        h.deps === 0 && h.resolve())
    }
      , ve = (u, h, g, y=!1, v=!1, E=0) => {
        for (let k = E; k < u.length; k++)
            xe(u[k], h, g, y, v)
    }
      , _ = u => u.shapeFlag & 6 ? _(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : d(u.anchor || u.el);
    let A = !1;
    const P = (u, h, g) => {
        u == null ? h._vnode && xe(h._vnode, null, null, !0) : T(h._vnode || null, u, h, null, null, null, g),
        A || (A = !0,
        ks(),
        ci(),
        A = !1),
        h._vnode = u
    }
      , I = {
        p: T,
        um: xe,
        m: qe,
        r: St,
        mt: $,
        mc: j,
        pc: re,
        pbc: Y,
        n: _,
        o: e
    };
    let se, ue;
    return t && ([se,ue] = t(I)),
    {
        render: P,
        hydrate: se,
        createApp: Ha(P, se)
    }
}
function dr({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function pt({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function Qa(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function Ti(e, t, n=!1) {
    const r = e.children
      , s = t.children;
    if (K(r) && K(s))
        for (let o = 0; o < r.length; o++) {
            const i = r[o];
            let a = s[o];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = it(s[o]),
            a.el = i.el),
            n || Ti(i, a)),
            a.type === tr && (a.el = i.el)
        }
}
function Ja(e) {
    const t = e.slice()
      , n = [0];
    let r, s, o, i, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const f = e[r];
        if (f !== 0) {
            if (s = n[n.length - 1],
            e[s] < f) {
                t[r] = s,
                n.push(r);
                continue
            }
            for (o = 0,
            i = n.length - 1; o < i; )
                a = o + i >> 1,
                e[n[a]] < f ? o = a + 1 : i = a;
            f < e[n[o]] && (o > 0 && (t[r] = n[o - 1]),
            n[o] = r)
        }
    }
    for (o = n.length,
    i = n[o - 1]; o-- > 0; )
        n[o] = i,
        i = t[i];
    return n
}
function Ai(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Ai(t)
}
const Ya = e => e.__isTeleport
  , Ne = Symbol.for("v-fgt")
  , tr = Symbol.for("v-txt")
  , Ye = Symbol.for("v-cmt")
  , hr = Symbol.for("v-stc")
  , en = [];
let Be = null;
function Xa(e=!1) {
    en.push(Be = e ? null : [])
}
function Za() {
    en.pop(),
    Be = en[en.length - 1] || null
}
let un = 1;
function js(e) {
    un += e
}
function Li(e) {
    return e.dynamicChildren = un > 0 ? Be || Mt : null,
    Za(),
    un > 0 && Be && Be.push(e),
    e
}
function Pd(e, t, n, r, s, o) {
    return Li($i(e, t, n, r, s, o, !0))
}
function ec(e, t, n, r, s) {
    return Li(Pe(e, t, n, r, s, !0))
}
function Mr(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function vt(e, t) {
    return e.type === t.type && e.key === t.key
}
const nr = "__vInternal"
  , Oi = ({key: e}) => e ?? null
  , Ln = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? ge(e) || Se(e) || W(e) ? {
    i: we,
    r: e,
    k: t,
    f: !!n
} : e : null);
function $i(e, t=null, n=null, r=0, s=null, o=e === Ne ? 0 : 1, i=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Oi(t),
        ref: t && Ln(t),
        scopeId: Xn,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: we
    };
    return a ? (cs(l, n),
    o & 128 && e.normalize(l)) : n && (l.shapeFlag |= ge(n) ? 8 : 16),
    un > 0 && !i && Be && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && Be.push(l),
    l
}
const Pe = tc;
function tc(e, t=null, n=null, r=0, s=null, o=!1) {
    if ((!e || e === ga) && (e = Ye),
    Mr(e)) {
        const a = dt(e, t, !0);
        return n && cs(a, n),
        un > 0 && !o && Be && (a.shapeFlag & 6 ? Be[Be.indexOf(e)] = a : Be.push(a)),
        a.patchFlag |= -2,
        a
    }
    if (hc(e) && (e = e.__vccOpts),
    t) {
        t = nc(t);
        let {class: a, style: l} = t;
        a && !ge(a) && (t.class = Gr(a)),
        de(l) && (ti(l) && !K(l) && (l = he({}, l)),
        t.style = Wr(l))
    }
    const i = ge(e) ? 1 : va(e) ? 128 : Ya(e) ? 64 : de(e) ? 4 : W(e) ? 2 : 0;
    return $i(e, t, n, r, s, i, o, !0)
}
function nc(e) {
    return e ? ti(e) || nr in e ? he({}, e) : e : null
}
function dt(e, t, n=!1) {
    const {props: r, ref: s, patchFlag: o, children: i} = e
      , a = t ? sc(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && Oi(a),
        ref: t && t.ref ? n && s ? K(s) ? s.concat(Ln(t)) : [s, Ln(t)] : Ln(t) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ne ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && dt(e.ssContent),
        ssFallback: e.ssFallback && dt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function rc(e=" ", t=0) {
    return Pe(tr, null, e, t)
}
function De(e) {
    return e == null || typeof e == "boolean" ? Pe(Ye) : K(e) ? Pe(Ne, null, e.slice()) : typeof e == "object" ? it(e) : Pe(tr, null, String(e))
}
function it(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : dt(e)
}
function cs(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (K(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const s = t.default;
            s && (s._c && (s._d = !1),
            cs(e, s()),
            s._c && (s._d = !0));
            return
        } else {
            n = 32;
            const s = t._;
            !s && !(nr in t) ? t._ctx = we : s === 3 && we && (we.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        W(t) ? (t = {
            default: t,
            _ctx: we
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [rc(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function sc(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r)
            if (s === "class")
                t.class !== r.class && (t.class = Gr([t.class, r.class]));
            else if (s === "style")
                t.style = Wr([t.style, r.style]);
            else if (Vn(s)) {
                const o = t[s]
                  , i = r[s];
                i && o !== i && !(K(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i)
            } else
                s !== "" && (t[s] = r[s])
    }
    return t
}
function He(e, t, n, r=null) {
    Le(e, t, 7, [n, r])
}
const oc = Ei();
let ic = 0;
function lc(e, t, n) {
    const r = e.type
      , s = (t ? t.appContext : e.appContext) || oc
      , o = {
        uid: ic++,
        vnode: e,
        type: r,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new Ll(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Si(r, s),
        emitsOptions: fi(r, s),
        emit: null,
        emitted: null,
        propsDefaults: ce,
        inheritAttrs: r.inheritAttrs,
        ctx: ce,
        data: ce,
        props: ce,
        attrs: ce,
        slots: ce,
        refs: ce,
        setupState: ce,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {
        _: o
    },
    o.root = t ? t.root : o,
    o.emit = aa.bind(null, o),
    e.ce && e.ce(o),
    o
}
let me = null;
const gn = () => me || we;
let qn, Ir;
{
    const e = jo()
      , t = (n, r) => {
        let s;
        return (s = e[n]) || (s = e[n] = []),
        s.push(r),
        o => {
            s.length > 1 ? s.forEach(i => i(o)) : s[0](o)
        }
    }
    ;
    qn = t("__VUE_INSTANCE_SETTERS__", n => me = n),
    Ir = t("__VUE_SSR_SETTERS__", n => rr = n)
}
const mn = e => {
    const t = me;
    return qn(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        qn(t)
    }
}
  , Hs = () => {
    me && me.scope.off(),
    qn(null)
}
;
function Mi(e) {
    return e.vnode.shapeFlag & 4
}
let rr = !1;
function ac(e, t=!1) {
    t && Ir(t);
    const {props: n, children: r} = e.vnode
      , s = Mi(e);
    Da(e, n, s, t),
    Ua(e, r);
    const o = s ? cc(e, t) : void 0;
    return t && Ir(!1),
    o
}
function cc(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = zt(new Proxy(e.ctx,Ma));
    const {setup: r} = n;
    if (r) {
        const s = e.setupContext = r.length > 1 ? fc(e) : null
          , o = mn(e);
        Et();
        const i = ut(r, e, 0, [e.props, s]);
        if (Ct(),
        o(),
        qo(i)) {
            if (i.then(Hs, Hs),
            t)
                return i.then(a => {
                    Ds(e, a, t)
                }
                ).catch(a => {
                    Jn(a, e, 0)
                }
                );
            e.asyncDep = i
        } else
            Ds(e, i, t)
    } else
        Ii(e, t)
}
function Ds(e, t, n) {
    W(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = oi(t)),
    Ii(e, n)
}
let zs;
function Ii(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && zs && !r.render) {
            const s = r.template || ls(e).template;
            if (s) {
                const {isCustomElement: o, compilerOptions: i} = e.appContext.config
                  , {delimiters: a, compilerOptions: l} = r
                  , f = he(he({
                    isCustomElement: o,
                    delimiters: a
                }, i), l);
                r.render = zs(s, f)
            }
        }
        e.render = r.render || Ae
    }
    {
        const s = mn(e);
        Et();
        try {
            Ia(e)
        } finally {
            Ct(),
            s()
        }
    }
}
function uc(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
        get(t, n) {
            return Ce(e, "get", "$attrs"),
            t[n]
        }
    }))
}
function fc(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        get attrs() {
            return uc(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function sr(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(oi(zt(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in Xt)
                    return Xt[n](e)
            },
            has(t, n) {
                return n in t || n in Xt
            }
        }))
}
function dc(e, t=!0) {
    return W(e) ? e.displayName || e.name : e.name || t && e.__name
}
function hc(e) {
    return W(e) && "__vccOpts"in e
}
const V = (e, t) => Zl(e, t, rr);
function z(e, t, n) {
    const r = arguments.length;
    return r === 2 ? de(t) && !K(t) ? Mr(t) ? Pe(e, null, [t]) : Pe(e, t) : Pe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Mr(n) && (n = [n]),
    Pe(e, t, n))
}
const pc = "3.4.21";
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const gc = "http://www.w3.org/2000/svg"
  , mc = "http://www.w3.org/1998/Math/MathML"
  , lt = typeof document < "u" ? document : null
  , Vs = lt && lt.createElement("template")
  , vc = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        const s = t === "svg" ? lt.createElementNS(gc, e) : t === "mathml" ? lt.createElementNS(mc, e) : lt.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple),
        s
    }
    ,
    createText: e => lt.createTextNode(e),
    createComment: e => lt.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => lt.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, s, o) {
        const i = n ? n.previousSibling : t.lastChild;
        if (s && (s === o || s.nextSibling))
            for (; t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling)); )
                ;
        else {
            Vs.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
            const a = Vs.content;
            if (r === "svg" || r === "mathml") {
                const l = a.firstChild;
                for (; l.firstChild; )
                    a.appendChild(l.firstChild);
                a.removeChild(l)
            }
            t.insertBefore(a, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , tt = "transition"
  , Ut = "animation"
  , Ft = Symbol("_vtc")
  , us = (e, {slots: t}) => z(Ca, Bi(e), t);
us.displayName = "Transition";
const Ni = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , _c = us.props = he({}, mi, Ni)
  , gt = (e, t=[]) => {
    K(e) ? e.forEach(n => n(...t)) : e && e(...t)
}
  , Us = e => e ? K(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function Bi(e) {
    const t = {};
    for (const O in e)
        O in Ni || (t[O] = e[O]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: s, enterFromClass: o=`${n}-enter-from`, enterActiveClass: i=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=o, appearActiveClass: f=i, appearToClass: c=a, leaveFromClass: p=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , b = yc(s)
      , T = b && b[0]
      , C = b && b[1]
      , {onBeforeEnter: R, onEnter: N, onEnterCancelled: B, onLeave: D, onLeaveCancelled: q, onBeforeAppear: M=R, onAppear: ee=N, onAppearCancelled: j=B} = t
      , Q = (O, J, $) => {
        rt(O, J ? c : a),
        rt(O, J ? f : i),
        $ && $()
    }
      , Y = (O, J) => {
        O._isLeaving = !1,
        rt(O, p),
        rt(O, m),
        rt(O, d),
        J && J()
    }
      , te = O => (J, $) => {
        const ne = O ? ee : N
          , ae = () => Q(J, O, $);
        gt(ne, [J, ae]),
        Ks( () => {
            rt(J, O ? l : o),
            Ge(J, O ? c : a),
            Us(ne) || Ws(J, r, T, ae)
        }
        )
    }
    ;
    return he(t, {
        onBeforeEnter(O) {
            gt(R, [O]),
            Ge(O, o),
            Ge(O, i)
        },
        onBeforeAppear(O) {
            gt(M, [O]),
            Ge(O, l),
            Ge(O, f)
        },
        onEnter: te(!1),
        onAppear: te(!0),
        onLeave(O, J) {
            O._isLeaving = !0;
            const $ = () => Y(O, J);
            Ge(O, p),
            qi(),
            Ge(O, d),
            Ks( () => {
                O._isLeaving && (rt(O, p),
                Ge(O, m),
                Us(D) || Ws(O, r, C, $))
            }
            ),
            gt(D, [O, $])
        },
        onEnterCancelled(O) {
            Q(O, !1),
            gt(B, [O])
        },
        onAppearCancelled(O) {
            Q(O, !0),
            gt(j, [O])
        },
        onLeaveCancelled(O) {
            Y(O),
            gt(q, [O])
        }
    })
}
function yc(e) {
    if (e == null)
        return null;
    if (de(e))
        return [pr(e.enter), pr(e.leave)];
    {
        const t = pr(e);
        return [t, t]
    }
}
function pr(e) {
    return Cl(e)
}
function Ge(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e[Ft] || (e[Ft] = new Set)).add(t)
}
function rt(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[Ft];
    n && (n.delete(t),
    n.size || (e[Ft] = void 0))
}
function Ks(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
let bc = 0;
function Ws(e, t, n, r) {
    const s = e._endId = ++bc
      , o = () => {
        s === e._endId && r()
    }
    ;
    if (n)
        return setTimeout(o, n);
    const {type: i, timeout: a, propCount: l} = Fi(e, t);
    if (!i)
        return r();
    const f = i + "end";
    let c = 0;
    const p = () => {
        e.removeEventListener(f, d),
        o()
    }
      , d = m => {
        m.target === e && ++c >= l && p()
    }
    ;
    setTimeout( () => {
        c < l && p()
    }
    , a + 1),
    e.addEventListener(f, d)
}
function Fi(e, t) {
    const n = window.getComputedStyle(e)
      , r = b => (n[b] || "").split(", ")
      , s = r(`${tt}Delay`)
      , o = r(`${tt}Duration`)
      , i = Gs(s, o)
      , a = r(`${Ut}Delay`)
      , l = r(`${Ut}Duration`)
      , f = Gs(a, l);
    let c = null
      , p = 0
      , d = 0;
    t === tt ? i > 0 && (c = tt,
    p = i,
    d = o.length) : t === Ut ? f > 0 && (c = Ut,
    p = f,
    d = l.length) : (p = Math.max(i, f),
    c = p > 0 ? i > f ? tt : Ut : null,
    d = c ? c === tt ? o.length : l.length : 0);
    const m = c === tt && /\b(transform|all)(,|$)/.test(r(`${tt}Property`).toString());
    return {
        type: c,
        timeout: p,
        propCount: d,
        hasTransform: m
    }
}
function Gs(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (n, r) => Qs(n) + Qs(e[r])))
}
function Qs(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function qi() {
    return document.body.offsetHeight
}
function wc(e, t, n) {
    const r = e[Ft];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Js = Symbol("_vod")
  , xc = Symbol("_vsh")
  , Ec = Symbol("")
  , Cc = /(^|;)\s*display\s*:/;
function Sc(e, t, n) {
    const r = e.style
      , s = ge(n);
    let o = !1;
    if (n && !s) {
        if (t)
            if (ge(t))
                for (const i of t.split(";")) {
                    const a = i.slice(0, i.indexOf(":")).trim();
                    n[a] == null && On(r, a, "")
                }
            else
                for (const i in t)
                    n[i] == null && On(r, i, "");
        for (const i in n)
            i === "display" && (o = !0),
            On(r, i, n[i])
    } else if (s) {
        if (t !== n) {
            const i = r[Ec];
            i && (n += ";" + i),
            r.cssText = n,
            o = Cc.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Js in e && (e[Js] = o ? r.display : "",
    e[xc] && (r.display = "none"))
}
const Ys = /\s*!important$/;
function On(e, t, n) {
    if (K(n))
        n.forEach(r => On(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = Rc(e, t);
        Ys.test(n) ? e.setProperty(Ht(r), n.replace(Ys, ""), "important") : e[r] = n
    }
}
const Xs = ["Webkit", "Moz", "ms"]
  , gr = {};
function Rc(e, t) {
    const n = gr[t];
    if (n)
        return n;
    let r = Ue(t);
    if (r !== "filter" && r in e)
        return gr[t] = r;
    r = Gn(r);
    for (let s = 0; s < Xs.length; s++) {
        const o = Xs[s] + r;
        if (o in e)
            return gr[t] = o
    }
    return t
}
const Zs = "http://www.w3.org/1999/xlink";
function Pc(e, t, n, r, s) {
    if (r && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(Zs, t.slice(6, t.length)) : e.setAttributeNS(Zs, t, n);
    else {
        const o = Al(t);
        n == null || o && !Ho(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
    }
}
function kc(e, t, n, r, s, o, i) {
    if (t === "innerHTML" || t === "textContent") {
        r && i(r, s, o),
        e[t] = n ?? "";
        return
    }
    const a = e.tagName;
    if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
        const f = a === "OPTION" ? e.getAttribute("value") || "" : e.value
          , c = n ?? "";
        (f !== c || !("_value"in e)) && (e.value = c),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const f = typeof e[t];
        f === "boolean" ? n = Ho(n) : n == null && f === "string" ? (n = "",
        l = !0) : f === "number" && (n = 0,
        l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}
function Tc(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function Ac(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const eo = Symbol("_vei");
function Lc(e, t, n, r, s=null) {
    const o = e[eo] || (e[eo] = {})
      , i = o[t];
    if (r && i)
        i.value = r;
    else {
        const [a,l] = Oc(t);
        if (r) {
            const f = o[t] = Ic(r, s);
            Tc(e, a, f, l)
        } else
            i && (Ac(e, a, i, l),
            o[t] = void 0)
    }
}
const to = /(?:Once|Passive|Capture)$/;
function Oc(e) {
    let t;
    if (to.test(e)) {
        t = {};
        let r;
        for (; r = e.match(to); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Ht(e.slice(2)), t]
}
let mr = 0;
const $c = Promise.resolve()
  , Mc = () => mr || ($c.then( () => mr = 0),
mr = Date.now());
function Ic(e, t) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        Le(Nc(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = Mc(),
    n
}
function Nc(e, t) {
    if (K(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r => s => !s._stopped && r && r(s))
    } else
        return t
}
const no = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Bc = (e, t, n, r, s, o, i, a, l) => {
    const f = s === "svg";
    t === "class" ? wc(e, r, f) : t === "style" ? Sc(e, n, r) : Vn(t) ? Vr(t) || Lc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : Fc(e, t, r, f)) ? kc(e, t, r, o, i, a, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    Pc(e, t, r, f))
}
;
function Fc(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && no(t) && W(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
            return !1
    }
    return no(t) && ge(n) ? !1 : t in e
}
const ji = new WeakMap
  , Hi = new WeakMap
  , jn = Symbol("_moveCb")
  , ro = Symbol("_enterCb")
  , Di = {
    name: "TransitionGroup",
    props: he({}, _c, {
        tag: String,
        moveClass: String
    }),
    setup(e, {slots: t}) {
        const n = gn()
          , r = gi();
        let s, o;
        return bi( () => {
            if (!s.length)
                return;
            const i = e.moveClass || `${e.name || "v"}-move`;
            if (!Vc(s[0].el, n.vnode.el, i))
                return;
            s.forEach(Hc),
            s.forEach(Dc);
            const a = s.filter(zc);
            qi(),
            a.forEach(l => {
                const f = l.el
                  , c = f.style;
                Ge(f, i),
                c.transform = c.webkitTransform = c.transitionDuration = "";
                const p = f[jn] = d => {
                    d && d.target !== f || (!d || /transform$/.test(d.propertyName)) && (f.removeEventListener("transitionend", p),
                    f[jn] = null,
                    rt(f, i))
                }
                ;
                f.addEventListener("transitionend", p)
            }
            )
        }
        ),
        () => {
            const i = Z(e)
              , a = Bi(i);
            let l = i.tag || Ne;
            s = o,
            o = t.default ? ss(t.default()) : [];
            for (let f = 0; f < o.length; f++) {
                const c = o[f];
                c.key != null && cn(c, an(c, a, r, n))
            }
            if (s)
                for (let f = 0; f < s.length; f++) {
                    const c = s[f];
                    cn(c, an(c, a, r, n)),
                    ji.set(c, c.el.getBoundingClientRect())
                }
            return Pe(l, null, o)
        }
    }
}
  , qc = e => delete e.mode;
Di.props;
const jc = Di;
function Hc(e) {
    const t = e.el;
    t[jn] && t[jn](),
    t[ro] && t[ro]()
}
function Dc(e) {
    Hi.set(e, e.el.getBoundingClientRect())
}
function zc(e) {
    const t = ji.get(e)
      , n = Hi.get(e)
      , r = t.left - n.left
      , s = t.top - n.top;
    if (r || s) {
        const o = e.el.style;
        return o.transform = o.webkitTransform = `translate(${r}px,${s}px)`,
        o.transitionDuration = "0s",
        e
    }
}
function Vc(e, t, n) {
    const r = e.cloneNode()
      , s = e[Ft];
    s && s.forEach(a => {
        a.split(/\s+/).forEach(l => l && r.classList.remove(l))
    }
    ),
    n.split(/\s+/).forEach(a => a && r.classList.add(a)),
    r.style.display = "none";
    const o = t.nodeType === 1 ? t : t.parentNode;
    o.appendChild(r);
    const {hasTransform: i} = Fi(r);
    return o.removeChild(r),
    i
}
const Uc = he({
    patchProp: Bc
}, vc);
let so;
function Kc() {
    return so || (so = Wa(Uc))
}
const zi = (...e) => {
    const t = Kc().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const s = Gc(r);
        if (!s)
            return;
        const o = t._component;
        !W(o) && !o.render && !o.template && (o.template = s.innerHTML),
        s.innerHTML = "";
        const i = n(s, !1, Wc(s));
        return s instanceof Element && (s.removeAttribute("v-cloak"),
        s.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
;
function Wc(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function Gc(e) {
    return ge(e) ? document.querySelector(e) : e
}
function fs(e, t, n, r) {
    return Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0
    }),
    e
}
const xt = sn(!1);
let Nr;
function Qc(e, t) {
    const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
    return {
        browser: n[5] || n[3] || n[1] || "",
        version: n[2] || n[4] || "0",
        versionNumber: n[4] || n[2] || "0",
        platform: t[0] || ""
    }
}
function Jc(e) {
    return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || []
}
const Vi = "ontouchstart"in window || window.navigator.maxTouchPoints > 0;
function Yc(e) {
    const t = e.toLowerCase()
      , n = Jc(t)
      , r = Qc(t, n)
      , s = {};
    r.browser && (s[r.browser] = !0,
    s.version = r.version,
    s.versionNumber = parseInt(r.versionNumber, 10)),
    r.platform && (s[r.platform] = !0);
    const o = s.android || s.ios || s.bb || s.blackberry || s.ipad || s.iphone || s.ipod || s.kindle || s.playbook || s.silk || s["windows phone"];
    if (o === !0 || t.indexOf("mobile") !== -1 ? s.mobile = !0 : s.desktop = !0,
    s["windows phone"] && (s.winphone = !0,
    delete s["windows phone"]),
    s.edga || s.edgios || s.edg ? (s.edge = !0,
    r.browser = "edge") : s.crios ? (s.chrome = !0,
    r.browser = "chrome") : s.fxios ? (s.firefox = !0,
    r.browser = "firefox") : (s.ipod || s.ipad || s.iphone) && (s.ios = !0),
    s.vivaldi && (r.browser = "vivaldi",
    s.vivaldi = !0),
    (s.chrome || s.opr || s.safari || s.vivaldi || s.mobile === !0 && s.ios !== !0 && o !== !0) && (s.webkit = !0),
    s.opr && (r.browser = "opera",
    s.opera = !0),
    s.safari && (s.blackberry || s.bb ? (r.browser = "blackberry",
    s.blackberry = !0) : s.playbook ? (r.browser = "playbook",
    s.playbook = !0) : s.android ? (r.browser = "android",
    s.android = !0) : s.kindle ? (r.browser = "kindle",
    s.kindle = !0) : s.silk && (r.browser = "silk",
    s.silk = !0)),
    s.name = r.browser,
    s.platform = r.platform,
    t.indexOf("electron") !== -1)
        s.electron = !0;
    else if (document.location.href.indexOf("-extension://") !== -1)
        s.bex = !0;
    else {
        if (window.Capacitor !== void 0 ? (s.capacitor = !0,
        s.nativeMobile = !0,
        s.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (s.cordova = !0,
        s.nativeMobile = !0,
        s.nativeMobileWrapper = "cordova"),
        xt.value === !0 && (Nr = {
            is: {
                ...s
            }
        }),
        Vi === !0 && s.mac === !0 && (s.desktop === !0 && s.safari === !0 || s.nativeMobile === !0 && s.android !== !0 && s.ios !== !0 && s.ipad !== !0)) {
            delete s.mac,
            delete s.desktop;
            const i = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
            Object.assign(s, {
                mobile: !0,
                ios: !0,
                platform: i,
                [i]: !0
            })
        }
        s.mobile !== !0 && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete s.desktop,
        s.mobile = !0)
    }
    return s
}
const oo = navigator.userAgent || navigator.vendor || window.opera
  , Xc = {
    has: {
        touch: !1,
        webStorage: !1
    },
    within: {
        iframe: !1
    }
}
  , Ve = {
    userAgent: oo,
    is: Yc(oo),
    has: {
        touch: Vi
    },
    within: {
        iframe: window.self !== window.top
    }
}
  , Br = {
    install(e) {
        const {$q: t} = e;
        xt.value === !0 ? (e.onSSRHydrated.push( () => {
            Object.assign(t.platform, Ve),
            xt.value = !1
        }
        ),
        t.platform = Dt(this)) : t.platform = this
    }
};
{
    let e;
    fs(Ve.has, "webStorage", () => {
        if (e !== void 0)
            return e;
        try {
            if (window.localStorage)
                return e = !0,
                !0
        } catch {}
        return e = !1,
        !1
    }
    ),
    Object.assign(Br, Ve),
    xt.value === !0 && (Object.assign(Br, Nr, Xc),
    Nr = null)
}
const or = (e, t) => {
    const n = Dt(e);
    for (const r in e)
        fs(t, r, () => n[r], s => {
            n[r] = s
        }
        );
    return t
}
  , vn = {
    hasPassive: !1,
    passiveCapture: !0,
    notPassiveCapture: !0
};
try {
    const e = Object.defineProperty({}, "passive", {
        get() {
            Object.assign(vn, {
                hasPassive: !0,
                passive: {
                    passive: !0
                },
                notPassive: {
                    passive: !1
                },
                passiveCapture: {
                    passive: !0,
                    capture: !0
                },
                notPassiveCapture: {
                    passive: !1,
                    capture: !0
                }
            })
        }
    });
    window.addEventListener("qtest", null, e),
    window.removeEventListener("qtest", null, e)
} catch {}
function fn() {}
function Zc(e) {
    return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    {
        top: e.clientY,
        left: e.clientX
    }
}
function Ui(e) {
    e.stopPropagation()
}
function eu(e) {
    e.cancelable !== !1 && e.preventDefault()
}
function kt(e) {
    e.cancelable !== !1 && e.preventDefault(),
    e.stopPropagation()
}
function tu(e, t, n) {
    const r = `__q_${t}_evt`;
    e[r] = e[r] !== void 0 ? e[r].concat(n) : n,
    n.forEach(s => {
        s[0].addEventListener(s[1], e[s[2]], vn[s[3]])
    }
    )
}
function nu(e, t) {
    const n = `__q_${t}_evt`;
    e[n] !== void 0 && (e[n].forEach(r => {
        r[0].removeEventListener(r[1], e[r[2]], vn[r[3]])
    }
    ),
    e[n] = void 0)
}
function ru(e, t=250, n) {
    let r = null;
    function s() {
        const o = arguments
          , i = () => {
            r = null,
            n !== !0 && e.apply(this, o)
        }
        ;
        r !== null ? clearTimeout(r) : n === !0 && e.apply(this, o),
        r = setTimeout(i, t)
    }
    return s.cancel = () => {
        r !== null && clearTimeout(r)
    }
    ,
    s
}
const vr = ["sm", "md", "lg", "xl"]
  , {passive: io} = vn
  , su = or({
    width: 0,
    height: 0,
    name: "xs",
    sizes: {
        sm: 600,
        md: 1024,
        lg: 1440,
        xl: 1920
    },
    lt: {
        sm: !0,
        md: !0,
        lg: !0,
        xl: !0
    },
    gt: {
        xs: !1,
        sm: !1,
        md: !1,
        lg: !1
    },
    xs: !0,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1
}, {
    setSizes: fn,
    setDebounce: fn,
    install({$q: e, onSSRHydrated: t}) {
        if (e.screen = this,
        this.__installed === !0) {
            e.config.screen !== void 0 && (e.config.screen.bodyClasses === !1 ? document.body.classList.remove(`screen--${this.name}`) : this.__update(!0));
            return
        }
        const {visualViewport: n} = window
          , r = n || window
          , s = document.scrollingElement || document.documentElement
          , o = n === void 0 || Ve.is.mobile === !0 ? () => [Math.max(window.innerWidth, s.clientWidth), Math.max(window.innerHeight, s.clientHeight)] : () => [n.width * n.scale + window.innerWidth - s.clientWidth, n.height * n.scale + window.innerHeight - s.clientHeight]
          , i = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0;
        this.__update = p => {
            const [d,m] = o();
            if (m !== this.height && (this.height = m),
            d !== this.width)
                this.width = d;
            else if (p !== !0)
                return;
            let b = this.sizes;
            this.gt.xs = d >= b.sm,
            this.gt.sm = d >= b.md,
            this.gt.md = d >= b.lg,
            this.gt.lg = d >= b.xl,
            this.lt.sm = d < b.sm,
            this.lt.md = d < b.md,
            this.lt.lg = d < b.lg,
            this.lt.xl = d < b.xl,
            this.xs = this.lt.sm,
            this.sm = this.gt.xs === !0 && this.lt.md === !0,
            this.md = this.gt.sm === !0 && this.lt.lg === !0,
            this.lg = this.gt.md === !0 && this.lt.xl === !0,
            this.xl = this.gt.lg,
            b = this.xs === !0 && "xs" || this.sm === !0 && "sm" || this.md === !0 && "md" || this.lg === !0 && "lg" || "xl",
            b !== this.name && (i === !0 && (document.body.classList.remove(`screen--${this.name}`),
            document.body.classList.add(`screen--${b}`)),
            this.name = b)
        }
        ;
        let a, l = {}, f = 16;
        this.setSizes = p => {
            vr.forEach(d => {
                p[d] !== void 0 && (l[d] = p[d])
            }
            )
        }
        ,
        this.setDebounce = p => {
            f = p
        }
        ;
        const c = () => {
            const p = getComputedStyle(document.body);
            p.getPropertyValue("--q-size-sm") && vr.forEach(d => {
                this.sizes[d] = parseInt(p.getPropertyValue(`--q-size-${d}`), 10)
            }
            ),
            this.setSizes = d => {
                vr.forEach(m => {
                    d[m] && (this.sizes[m] = d[m])
                }
                ),
                this.__update(!0)
            }
            ,
            this.setDebounce = d => {
                a !== void 0 && r.removeEventListener("resize", a, io),
                a = d > 0 ? ru(this.__update, d) : this.__update,
                r.addEventListener("resize", a, io)
            }
            ,
            this.setDebounce(f),
            Object.keys(l).length !== 0 ? (this.setSizes(l),
            l = void 0) : this.__update(),
            i === !0 && this.name === "xs" && document.body.classList.add("screen--xs")
        }
        ;
        xt.value === !0 ? t.push(c) : c()
    }
})
  , _e = or({
    isActive: !1,
    mode: !1
}, {
    __media: void 0,
    set(e) {
        _e.mode = e,
        e === "auto" ? (_e.__media === void 0 && (_e.__media = window.matchMedia("(prefers-color-scheme: dark)"),
        _e.__updateMedia = () => {
            _e.set("auto")
        }
        ,
        _e.__media.addListener(_e.__updateMedia)),
        e = _e.__media.matches) : _e.__media !== void 0 && (_e.__media.removeListener(_e.__updateMedia),
        _e.__media = void 0),
        _e.isActive = e === !0,
        document.body.classList.remove(`body--${e === !0 ? "light" : "dark"}`),
        document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`)
    },
    toggle() {
        _e.set(_e.isActive === !1)
    },
    install({$q: e, ssrContext: t}) {
        const {dark: n} = e.config;
        e.dark = this,
        this.__installed !== !0 && this.set(n !== void 0 ? n : !1)
    }
})
  , Ki = () => !0;
function ou(e) {
    return typeof e == "string" && e !== "" && e !== "/" && e !== "#/"
}
function iu(e) {
    return e.startsWith("#") === !0 && (e = e.substring(1)),
    e.startsWith("/") === !1 && (e = "/" + e),
    e.endsWith("/") === !0 && (e = e.substring(0, e.length - 1)),
    "#" + e
}
function lu(e) {
    if (e.backButtonExit === !1)
        return () => !1;
    if (e.backButtonExit === "*")
        return Ki;
    const t = ["#/"];
    return Array.isArray(e.backButtonExit) === !0 && t.push(...e.backButtonExit.filter(ou).map(iu)),
    () => t.includes(window.location.hash)
}
const au = {
    __history: [],
    add: fn,
    remove: fn,
    install({$q: e}) {
        if (this.__installed === !0)
            return;
        const {cordova: t, capacitor: n} = Ve.is;
        if (t !== !0 && n !== !0)
            return;
        const r = e.config[t === !0 ? "cordova" : "capacitor"];
        if (r !== void 0 && r.backButton === !1 || n === !0 && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0))
            return;
        this.add = i => {
            i.condition === void 0 && (i.condition = Ki),
            this.__history.push(i)
        }
        ,
        this.remove = i => {
            const a = this.__history.indexOf(i);
            a >= 0 && this.__history.splice(a, 1)
        }
        ;
        const s = lu(Object.assign({
            backButtonExit: !0
        }, r))
          , o = () => {
            if (this.__history.length) {
                const i = this.__history[this.__history.length - 1];
                i.condition() === !0 && (this.__history.pop(),
                i.handler())
            } else
                s() === !0 ? navigator.app.exitApp() : window.history.back()
        }
        ;
        t === !0 ? document.addEventListener("deviceready", () => {
            document.addEventListener("backbutton", o, !1)
        }
        ) : window.Capacitor.Plugins.App.addListener("backButton", o)
    }
}
  , lo = {
    isoName: "en-US",
    nativeName: "English (US)",
    label: {
        clear: "Clear",
        ok: "OK",
        cancel: "Cancel",
        close: "Close",
        set: "Set",
        select: "Select",
        reset: "Reset",
        remove: "Remove",
        update: "Update",
        create: "Create",
        search: "Search",
        filter: "Filter",
        refresh: "Refresh",
        expand: e => e ? `Expand "${e}"` : "Expand",
        collapse: e => e ? `Collapse "${e}"` : "Collapse"
    },
    date: {
        days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        firstDayOfWeek: 0,
        format24h: !1,
        pluralDay: "days"
    },
    table: {
        noData: "No data available",
        noResults: "No matching records found",
        loading: "Loading...",
        selectedRecords: e => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.",
        recordsPerPage: "Records per page:",
        allRows: "All",
        pagination: (e, t, n) => e + "-" + t + " of " + n,
        columns: "Columns"
    },
    editor: {
        url: "URL",
        bold: "Bold",
        italic: "Italic",
        strikethrough: "Strikethrough",
        underline: "Underline",
        unorderedList: "Unordered List",
        orderedList: "Ordered List",
        subscript: "Subscript",
        superscript: "Superscript",
        hyperlink: "Hyperlink",
        toggleFullscreen: "Toggle Fullscreen",
        quote: "Quote",
        left: "Left align",
        center: "Center align",
        right: "Right align",
        justify: "Justify align",
        print: "Print",
        outdent: "Decrease indentation",
        indent: "Increase indentation",
        removeFormat: "Remove formatting",
        formatting: "Formatting",
        fontSize: "Font Size",
        align: "Align",
        hr: "Insert Horizontal Rule",
        undo: "Undo",
        redo: "Redo",
        heading1: "Heading 1",
        heading2: "Heading 2",
        heading3: "Heading 3",
        heading4: "Heading 4",
        heading5: "Heading 5",
        heading6: "Heading 6",
        paragraph: "Paragraph",
        code: "Code",
        size1: "Very small",
        size2: "A bit small",
        size3: "Normal",
        size4: "Medium-large",
        size5: "Big",
        size6: "Very big",
        size7: "Maximum",
        defaultFont: "Default Font",
        viewSource: "View Source"
    },
    tree: {
        noNodes: "No nodes available",
        noResults: "No matching nodes found"
    }
};
function ao() {
    const e = Array.isArray(navigator.languages) === !0 && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
    if (typeof e == "string")
        return e.split(/[-_]/).map( (t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-")
}
const Me = or({
    __langPack: {}
}, {
    getLocale: ao,
    set(e=lo, t) {
        const n = {
            ...e,
            rtl: e.rtl === !0,
            getLocale: ao
        };
        {
            if (n.set = Me.set,
            Me.__langConfig === void 0 || Me.__langConfig.noHtmlAttrs !== !0) {
                const r = document.documentElement;
                r.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"),
                r.setAttribute("lang", n.isoName)
            }
            Object.assign(Me.__langPack, n),
            Me.props = n,
            Me.isoName = n.isoName,
            Me.nativeName = n.nativeName
        }
    },
    install({$q: e, lang: t, ssrContext: n}) {
        e.lang = Me.__langPack,
        Me.__langConfig = e.config.lang,
        this.__installed === !0 ? t !== void 0 && this.set(t) : this.set(t || lo)
    }
});
function cu(e, t, n=document.body) {
    if (typeof e != "string")
        throw new TypeError("Expected a string as propName");
    if (typeof t != "string")
        throw new TypeError("Expected a string as value");
    if (!(n instanceof Element))
        throw new TypeError("Expected a DOM element");
    n.style.setProperty(`--q-${e}`, t)
}
let Wi = !1;
function uu(e) {
    Wi = e.isComposing === !0
}
function fu(e) {
    return Wi === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
}
function Fr(e, t) {
    return fu(e) === !0 ? !1 : [].concat(t).includes(e.keyCode)
}
function Gi(e) {
    if (e.ios === !0)
        return "ios";
    if (e.android === !0)
        return "android"
}
function du({is: e, has: t, within: n}, r) {
    const s = [e.desktop === !0 ? "desktop" : "mobile", `${t.touch === !1 ? "no-" : ""}touch`];
    if (e.mobile === !0) {
        const o = Gi(e);
        o !== void 0 && s.push("platform-" + o)
    }
    if (e.nativeMobile === !0) {
        const o = e.nativeMobileWrapper;
        s.push(o),
        s.push("native-mobile"),
        e.ios === !0 && (r[o] === void 0 || r[o].iosStatusBarPadding !== !1) && s.push("q-ios-padding")
    } else
        e.electron === !0 ? s.push("electron") : e.bex === !0 && s.push("bex");
    return n.iframe === !0 && s.push("within-iframe"),
    s
}
function hu() {
    const {is: e} = Ve
      , t = document.body.className
      , n = new Set(t.replace(/ {2}/g, " ").split(" "));
    if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
        if (e.desktop === !0)
            n.delete("mobile"),
            n.delete("platform-ios"),
            n.delete("platform-android"),
            n.add("desktop");
        else if (e.mobile === !0) {
            n.delete("desktop"),
            n.add("mobile"),
            n.delete("platform-ios"),
            n.delete("platform-android");
            const s = Gi(e);
            s !== void 0 && n.add(`platform-${s}`)
        }
    }
    Ve.has.touch === !0 && (n.delete("no-touch"),
    n.add("touch")),
    Ve.within.iframe === !0 && n.add("within-iframe");
    const r = Array.from(n).join(" ");
    t !== r && (document.body.className = r)
}
function pu(e) {
    for (const t in e)
        cu(t, e[t])
}
const gu = {
    install(e) {
        if (this.__installed !== !0) {
            if (xt.value === !0)
                hu();
            else {
                const {$q: t} = e;
                t.config.brand !== void 0 && pu(t.config.brand);
                const n = du(Ve, t.config);
                document.body.classList.add.apply(document.body.classList, n)
            }
            Ve.is.ios === !0 && document.body.addEventListener("touchstart", fn),
            window.addEventListener("keydown", uu, !0)
        }
    }
}
  , mu = {
    name: "material-icons",
    type: {
        positive: "check_circle",
        negative: "warning",
        info: "info",
        warning: "priority_high"
    },
    arrow: {
        up: "arrow_upward",
        right: "arrow_forward",
        down: "arrow_downward",
        left: "arrow_back",
        dropdown: "arrow_drop_down"
    },
    chevron: {
        left: "chevron_left",
        right: "chevron_right"
    },
    colorPicker: {
        spectrum: "gradient",
        tune: "tune",
        palette: "style"
    },
    pullToRefresh: {
        icon: "refresh"
    },
    carousel: {
        left: "chevron_left",
        right: "chevron_right",
        up: "keyboard_arrow_up",
        down: "keyboard_arrow_down",
        navigationIcon: "lens"
    },
    chip: {
        remove: "cancel",
        selected: "check"
    },
    datetime: {
        arrowLeft: "chevron_left",
        arrowRight: "chevron_right",
        now: "access_time",
        today: "today"
    },
    editor: {
        bold: "format_bold",
        italic: "format_italic",
        strikethrough: "strikethrough_s",
        underline: "format_underlined",
        unorderedList: "format_list_bulleted",
        orderedList: "format_list_numbered",
        subscript: "vertical_align_bottom",
        superscript: "vertical_align_top",
        hyperlink: "link",
        toggleFullscreen: "fullscreen",
        quote: "format_quote",
        left: "format_align_left",
        center: "format_align_center",
        right: "format_align_right",
        justify: "format_align_justify",
        print: "print",
        outdent: "format_indent_decrease",
        indent: "format_indent_increase",
        removeFormat: "format_clear",
        formatting: "text_format",
        fontSize: "format_size",
        align: "format_align_left",
        hr: "remove",
        undo: "undo",
        redo: "redo",
        heading: "format_size",
        code: "code",
        size: "format_size",
        font: "font_download",
        viewSource: "code"
    },
    expansionItem: {
        icon: "keyboard_arrow_down",
        denseIcon: "arrow_drop_down"
    },
    fab: {
        icon: "add",
        activeIcon: "close"
    },
    field: {
        clear: "cancel",
        error: "error"
    },
    pagination: {
        first: "first_page",
        prev: "keyboard_arrow_left",
        next: "keyboard_arrow_right",
        last: "last_page"
    },
    rating: {
        icon: "grade"
    },
    stepper: {
        done: "check",
        active: "edit",
        error: "warning"
    },
    tabs: {
        left: "chevron_left",
        right: "chevron_right",
        up: "keyboard_arrow_up",
        down: "keyboard_arrow_down"
    },
    table: {
        arrowUp: "arrow_upward",
        warning: "warning",
        firstPage: "first_page",
        prevPage: "chevron_left",
        nextPage: "chevron_right",
        lastPage: "last_page"
    },
    tree: {
        icon: "play_arrow"
    },
    uploader: {
        done: "done",
        clear: "clear",
        add: "add_box",
        upload: "cloud_upload",
        removeQueue: "clear_all",
        removeUploaded: "done_all"
    }
}
  , Hn = or({
    iconMapFn: null,
    __icons: {}
}, {
    set(e, t) {
        const n = {
            ...e,
            rtl: e.rtl === !0
        };
        n.set = Hn.set,
        Object.assign(Hn.__icons, n)
    },
    install({$q: e, iconSet: t, ssrContext: n}) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
        e.iconSet = this.__icons,
        fs(e, "iconMapFn", () => this.iconMapFn, r => {
            this.iconMapFn = r
        }
        ),
        this.__installed === !0 ? t !== void 0 && this.set(t) : this.set(t || mu)
    }
})
  , vu = "_q_"
  , kd = "_q_l_"
  , Td = "_q_pc_"
  , Ad = () => {}
  , Dn = {};
let Qi = !1;
function _u() {
    Qi = !0
}
function dn(e) {
    return e !== null && typeof e == "object" && Array.isArray(e) !== !0
}
function Ld(e) {
    return typeof e == "number" && isFinite(e)
}
const co = [Br, gu, _e, su, au, Me, Hn];
function yu(e, t) {
    const n = zi(e);
    n.config.globalProperties = t.config.globalProperties;
    const {reload: r, ...s} = t._context;
    return Object.assign(n._context, s),
    n
}
function uo(e, t) {
    t.forEach(n => {
        n.install(e),
        n.__installed = !0
    }
    )
}
function bu(e, t, n) {
    e.config.globalProperties.$q = n.$q,
    e.provide(vu, n.$q),
    uo(n, co),
    t.components !== void 0 && Object.values(t.components).forEach(r => {
        dn(r) === !0 && r.name !== void 0 && e.component(r.name, r)
    }
    ),
    t.directives !== void 0 && Object.values(t.directives).forEach(r => {
        dn(r) === !0 && r.name !== void 0 && e.directive(r.name, r)
    }
    ),
    t.plugins !== void 0 && uo(n, Object.values(t.plugins).filter(r => typeof r.install == "function" && co.includes(r) === !1)),
    xt.value === !0 && (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach(r => {
            r()
        }
        ),
        n.$q.onSSRHydrated = () => {}
    }
    )
}
const wu = function(e, t={}) {
    const n = {
        version: "2.15.2"
    };
    Qi === !1 ? (t.config !== void 0 && Object.assign(Dn, t.config),
    n.config = {
        ...Dn
    },
    _u()) : n.config = t.config || {},
    bu(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: []
    })
}
  , xu = {
    version: "2.15.2",
    install: wu,
    lang: Me,
    iconSet: Hn
}
  , Eu = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r,s] of t)
        n[r] = s;
    return n
}
  , Cu = Object.assign({
    name: "App"
}, {
    __name: "App",
    setup(e) {
        return (t, n) => {
            const r = pa("router-view");
            return Xa(),
            ec(r)
        }
    }
})
  , Su = Eu(Cu, [["__file", "App.vue"]]);
/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Ot = typeof document < "u";
function Ru(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const oe = Object.assign;
function _r(e, t) {
    const n = {};
    for (const r in t) {
        const s = t[r];
        n[r] = Fe(s) ? s.map(e) : e(s)
    }
    return n
}
const tn = () => {}
  , Fe = Array.isArray
  , Ji = /#/g
  , Pu = /&/g
  , ku = /\//g
  , Tu = /=/g
  , Au = /\?/g
  , Yi = /\+/g
  , Lu = /%5B/g
  , Ou = /%5D/g
  , Xi = /%5E/g
  , $u = /%60/g
  , Zi = /%7B/g
  , Mu = /%7C/g
  , el = /%7D/g
  , Iu = /%20/g;
function ds(e) {
    return encodeURI("" + e).replace(Mu, "|").replace(Lu, "[").replace(Ou, "]")
}
function Nu(e) {
    return ds(e).replace(Zi, "{").replace(el, "}").replace(Xi, "^")
}
function qr(e) {
    return ds(e).replace(Yi, "%2B").replace(Iu, "+").replace(Ji, "%23").replace(Pu, "%26").replace($u, "`").replace(Zi, "{").replace(el, "}").replace(Xi, "^")
}
function Bu(e) {
    return qr(e).replace(Tu, "%3D")
}
function Fu(e) {
    return ds(e).replace(Ji, "%23").replace(Au, "%3F")
}
function qu(e) {
    return e == null ? "" : Fu(e).replace(ku, "%2F")
}
function hn(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const ju = /\/$/
  , Hu = e => e.replace(ju, "");
function yr(e, t, n="/") {
    let r, s = {}, o = "", i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = t.slice(0, l),
    o = t.slice(l + 1, a > -1 ? a : t.length),
    s = e(o)),
    a > -1 && (r = r || t.slice(0, a),
    i = t.slice(a, t.length)),
    r = Uu(r ?? t, n),
    {
        fullPath: r + (o && "?") + o + i,
        path: r,
        query: s,
        hash: hn(i)
    }
}
function Du(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function fo(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function zu(e, t, n) {
    const r = t.matched.length - 1
      , s = n.matched.length - 1;
    return r > -1 && r === s && qt(t.matched[r], n.matched[s]) && tl(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function qt(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function tl(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!Vu(e[n], t[n]))
            return !1;
    return !0
}
function Vu(e, t) {
    return Fe(e) ? ho(e, t) : Fe(t) ? ho(t, e) : e === t
}
function ho(e, t) {
    return Fe(t) ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function Uu(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/")
      , s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let o = n.length - 1, i, a;
    for (i = 0; i < r.length; i++)
        if (a = r[i],
        a !== ".")
            if (a === "..")
                o > 1 && o--;
            else
                break;
    return n.slice(0, o).join("/") + "/" + r.slice(i).join("/")
}
var pn;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(pn || (pn = {}));
var nn;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(nn || (nn = {}));
function Ku(e) {
    if (!e)
        if (Ot) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    Hu(e)
}
const Wu = /^[^#]+#/;
function Gu(e, t) {
    return e.replace(Wu, "#") + t
}
function Qu(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const ir = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function Ju(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!s)
            return;
        t = Qu(s, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function po(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const jr = new Map;
function Yu(e, t) {
    jr.set(e, t)
}
function Xu(e) {
    const t = jr.get(e);
    return jr.delete(e),
    t
}
let Zu = () => location.protocol + "//" + location.host;
function nl(e, t) {
    const {pathname: n, search: r, hash: s} = t
      , o = e.indexOf("#");
    if (o > -1) {
        let a = s.includes(e.slice(o)) ? e.slice(o).length : 1
          , l = s.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        fo(l, "")
    }
    return fo(n, e) + r + s
}
function ef(e, t, n, r) {
    let s = []
      , o = []
      , i = null;
    const a = ({state: d}) => {
        const m = nl(e, location)
          , b = n.value
          , T = t.value;
        let C = 0;
        if (d) {
            if (n.value = m,
            t.value = d,
            i && i === b) {
                i = null;
                return
            }
            C = T ? d.position - T.position : 0
        } else
            r(m);
        s.forEach(R => {
            R(n.value, b, {
                delta: C,
                type: pn.pop,
                direction: C ? C > 0 ? nn.forward : nn.back : nn.unknown
            })
        }
        )
    }
    ;
    function l() {
        i = n.value
    }
    function f(d) {
        s.push(d);
        const m = () => {
            const b = s.indexOf(d);
            b > -1 && s.splice(b, 1)
        }
        ;
        return o.push(m),
        m
    }
    function c() {
        const {history: d} = window;
        d.state && d.replaceState(oe({}, d.state, {
            scroll: ir()
        }), "")
    }
    function p() {
        for (const d of o)
            d();
        o = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", c)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: f,
        destroy: p
    }
}
function go(e, t, n, r=!1, s=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: s ? ir() : null
    }
}
function tf(e) {
    const {history: t, location: n} = window
      , r = {
        value: nl(e, n)
    }
      , s = {
        value: t.state
    };
    s.value || o(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function o(l, f, c) {
        const p = e.indexOf("#")
          , d = p > -1 ? (n.host && document.querySelector("base") ? e : e.slice(p)) + l : Zu() + e + l;
        try {
            t[c ? "replaceState" : "pushState"](f, "", d),
            s.value = f
        } catch (m) {
            console.error(m),
            n[c ? "replace" : "assign"](d)
        }
    }
    function i(l, f) {
        const c = oe({}, t.state, go(s.value.back, l, s.value.forward, !0), f, {
            position: s.value.position
        });
        o(l, c, !0),
        r.value = l
    }
    function a(l, f) {
        const c = oe({}, s.value, t.state, {
            forward: l,
            scroll: ir()
        });
        o(c.current, c, !0);
        const p = oe({}, go(r.value, l, null), {
            position: c.position + 1
        }, f);
        o(l, p, !1),
        r.value = l
    }
    return {
        location: r,
        state: s,
        push: a,
        replace: i
    }
}
function nf(e) {
    e = Ku(e);
    const t = tf(e)
      , n = ef(e, t.state, t.location, t.replace);
    function r(o, i=!0) {
        i || n.pauseListeners(),
        history.go(o)
    }
    const s = oe({
        location: "",
        base: e,
        go: r,
        createHref: Gu.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(s, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    s
}
function rf(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function rl(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const nt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , sl = Symbol("");
var mo;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(mo || (mo = {}));
function jt(e, t) {
    return oe(new Error, {
        type: e,
        [sl]: !0
    }, t)
}
function We(e, t) {
    return e instanceof Error && sl in e && (t == null || !!(e.type & t))
}
const vo = "[^/]+?"
  , sf = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , of = /[.+*?^${}()[\]/\\]/g;
function lf(e, t) {
    const n = oe({}, sf, t)
      , r = [];
    let s = n.start ? "^" : "";
    const o = [];
    for (const f of e) {
        const c = f.length ? [] : [90];
        n.strict && !f.length && (s += "/");
        for (let p = 0; p < f.length; p++) {
            const d = f[p];
            let m = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0)
                p || (s += "/"),
                s += d.value.replace(of, "\\$&"),
                m += 40;
            else if (d.type === 1) {
                const {value: b, repeatable: T, optional: C, regexp: R} = d;
                o.push({
                    name: b,
                    repeatable: T,
                    optional: C
                });
                const N = R || vo;
                if (N !== vo) {
                    m += 10;
                    try {
                        new RegExp(`(${N})`)
                    } catch (D) {
                        throw new Error(`Invalid custom RegExp for param "${b}" (${N}): ` + D.message)
                    }
                }
                let B = T ? `((?:${N})(?:/(?:${N}))*)` : `(${N})`;
                p || (B = C && f.length < 2 ? `(?:/${B})` : "/" + B),
                C && (B += "?"),
                s += B,
                m += 20,
                C && (m += -8),
                T && (m += -20),
                N === ".*" && (m += -50)
            }
            c.push(m)
        }
        r.push(c)
    }
    if (n.strict && n.end) {
        const f = r.length - 1;
        r[f][r[f].length - 1] += .7000000000000001
    }
    n.strict || (s += "/?"),
    n.end ? s += "$" : n.strict && (s += "(?:/|$)");
    const i = new RegExp(s,n.sensitive ? "" : "i");
    function a(f) {
        const c = f.match(i)
          , p = {};
        if (!c)
            return null;
        for (let d = 1; d < c.length; d++) {
            const m = c[d] || ""
              , b = o[d - 1];
            p[b.name] = m && b.repeatable ? m.split("/") : m
        }
        return p
    }
    function l(f) {
        let c = ""
          , p = !1;
        for (const d of e) {
            (!p || !c.endsWith("/")) && (c += "/"),
            p = !1;
            for (const m of d)
                if (m.type === 0)
                    c += m.value;
                else if (m.type === 1) {
                    const {value: b, repeatable: T, optional: C} = m
                      , R = b in f ? f[b] : "";
                    if (Fe(R) && !T)
                        throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);
                    const N = Fe(R) ? R.join("/") : R;
                    if (!N)
                        if (C)
                            d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : p = !0);
                        else
                            throw new Error(`Missing required param "${b}"`);
                    c += N
                }
        }
        return c || "/"
    }
    return {
        re: i,
        score: r,
        keys: o,
        parse: a,
        stringify: l
    }
}
function af(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function cf(e, t) {
    let n = 0;
    const r = e.score
      , s = t.score;
    for (; n < r.length && n < s.length; ) {
        const o = af(r[n], s[n]);
        if (o)
            return o;
        n++
    }
    if (Math.abs(s.length - r.length) === 1) {
        if (_o(r))
            return 1;
        if (_o(s))
            return -1
    }
    return s.length - r.length
}
function _o(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const uf = {
    type: 0,
    value: ""
}
  , ff = /[a-zA-Z0-9_]/;
function df(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[uf]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(m) {
        throw new Error(`ERR (${n})/"${f}": ${m}`)
    }
    let n = 0
      , r = n;
    const s = [];
    let o;
    function i() {
        o && s.push(o),
        o = []
    }
    let a = 0, l, f = "", c = "";
    function p() {
        f && (n === 0 ? o.push({
            type: 0,
            value: f
        }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),
        o.push({
            type: 1,
            value: f,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"),
        f = "")
    }
    function d() {
        f += l
    }
    for (; a < e.length; ) {
        if (l = e[a++],
        l === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            l === "/" ? (f && p(),
            i()) : l === ":" ? (p(),
            n = 1) : d();
            break;
        case 4:
            d(),
            n = r;
            break;
        case 1:
            l === "(" ? n = 2 : ff.test(l) ? d() : (p(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--);
            break;
        case 2:
            l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
            break;
        case 3:
            p(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--,
            c = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${f}"`),
    p(),
    i(),
    s
}
function hf(e, t, n) {
    const r = lf(df(e.path), n)
      , s = oe(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s),
    s
}
function pf(e, t) {
    const n = []
      , r = new Map;
    t = wo({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function s(c) {
        return r.get(c)
    }
    function o(c, p, d) {
        const m = !d
          , b = gf(c);
        b.aliasOf = d && d.record;
        const T = wo(t, c)
          , C = [b];
        if ("alias"in c) {
            const B = typeof c.alias == "string" ? [c.alias] : c.alias;
            for (const D of B)
                C.push(oe({}, b, {
                    components: d ? d.record.components : b.components,
                    path: D,
                    aliasOf: d ? d.record : b
                }))
        }
        let R, N;
        for (const B of C) {
            const {path: D} = B;
            if (p && D[0] !== "/") {
                const q = p.record.path
                  , M = q[q.length - 1] === "/" ? "" : "/";
                B.path = p.record.path + (D && M + D)
            }
            if (R = hf(B, p, T),
            d ? d.alias.push(R) : (N = N || R,
            N !== R && N.alias.push(R),
            m && c.name && !bo(R) && i(c.name)),
            b.children) {
                const q = b.children;
                for (let M = 0; M < q.length; M++)
                    o(q[M], R, d && d.children[M])
            }
            d = d || R,
            (R.record.components && Object.keys(R.record.components).length || R.record.name || R.record.redirect) && l(R)
        }
        return N ? () => {
            i(N)
        }
        : tn
    }
    function i(c) {
        if (rl(c)) {
            const p = r.get(c);
            p && (r.delete(c),
            n.splice(n.indexOf(p), 1),
            p.children.forEach(i),
            p.alias.forEach(i))
        } else {
            const p = n.indexOf(c);
            p > -1 && (n.splice(p, 1),
            c.record.name && r.delete(c.record.name),
            c.children.forEach(i),
            c.alias.forEach(i))
        }
    }
    function a() {
        return n
    }
    function l(c) {
        let p = 0;
        for (; p < n.length && cf(c, n[p]) >= 0 && (c.record.path !== n[p].record.path || !ol(c, n[p])); )
            p++;
        n.splice(p, 0, c),
        c.record.name && !bo(c) && r.set(c.record.name, c)
    }
    function f(c, p) {
        let d, m = {}, b, T;
        if ("name"in c && c.name) {
            if (d = r.get(c.name),
            !d)
                throw jt(1, {
                    location: c
                });
            T = d.record.name,
            m = oe(yo(p.params, d.keys.filter(N => !N.optional).concat(d.parent ? d.parent.keys.filter(N => N.optional) : []).map(N => N.name)), c.params && yo(c.params, d.keys.map(N => N.name))),
            b = d.stringify(m)
        } else if (c.path != null)
            b = c.path,
            d = n.find(N => N.re.test(b)),
            d && (m = d.parse(b),
            T = d.record.name);
        else {
            if (d = p.name ? r.get(p.name) : n.find(N => N.re.test(p.path)),
            !d)
                throw jt(1, {
                    location: c,
                    currentLocation: p
                });
            T = d.record.name,
            m = oe({}, p.params, c.params),
            b = d.stringify(m)
        }
        const C = [];
        let R = d;
        for (; R; )
            C.unshift(R.record),
            R = R.parent;
        return {
            name: T,
            path: b,
            params: m,
            matched: C,
            meta: vf(C)
        }
    }
    return e.forEach(c => o(c)),
    {
        addRoute: o,
        resolve: f,
        removeRoute: i,
        getRoutes: a,
        getRecordMatcher: s
    }
}
function yo(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function gf(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: mf(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function mf(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function bo(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function vf(e) {
    return e.reduce( (t, n) => oe(t, n.meta), {})
}
function wo(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function ol(e, t) {
    return t.children.some(n => n === e || ol(e, n))
}
function _f(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < r.length; ++s) {
        const o = r[s].replace(Yi, " ")
          , i = o.indexOf("=")
          , a = hn(i < 0 ? o : o.slice(0, i))
          , l = i < 0 ? null : hn(o.slice(i + 1));
        if (a in t) {
            let f = t[a];
            Fe(f) || (f = t[a] = [f]),
            f.push(l)
        } else
            t[a] = l
    }
    return t
}
function xo(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = Bu(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Fe(r) ? r.map(o => o && qr(o)) : [r && qr(r)]).forEach(o => {
            o !== void 0 && (t += (t.length ? "&" : "") + n,
            o != null && (t += "=" + o))
        }
        )
    }
    return t
}
function yf(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = Fe(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
    }
    return t
}
const bf = Symbol("")
  , Eo = Symbol("")
  , hs = Symbol("")
  , il = Symbol("")
  , Hr = Symbol("");
function Kt() {
    let e = [];
    function t(r) {
        return e.push(r),
        () => {
            const s = e.indexOf(r);
            s > -1 && e.splice(s, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function at(e, t, n, r, s, o=i => i()) {
    const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise( (a, l) => {
        const f = d => {
            d === !1 ? l(jt(4, {
                from: n,
                to: t
            })) : d instanceof Error ? l(d) : rf(d) ? l(jt(2, {
                from: t,
                to: d
            })) : (i && r.enterCallbacks[s] === i && typeof d == "function" && i.push(d),
            a())
        }
          , c = o( () => e.call(r && r.instances[s], t, n, f));
        let p = Promise.resolve(c);
        e.length < 3 && (p = p.then(f)),
        p.catch(d => l(d))
    }
    )
}
function br(e, t, n, r, s=o => o()) {
    const o = [];
    for (const i of e)
        for (const a in i.components) {
            let l = i.components[a];
            if (!(t !== "beforeRouteEnter" && !i.instances[a]))
                if (wf(l)) {
                    const c = (l.__vccOpts || l)[t];
                    c && o.push(at(c, n, r, i, a, s))
                } else {
                    let f = l();
                    o.push( () => f.then(c => {
                        if (!c)
                            return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));
                        const p = Ru(c) ? c.default : c;
                        i.components[a] = p;
                        const m = (p.__vccOpts || p)[t];
                        return m && at(m, n, r, i, a, s)()
                    }
                    ))
                }
        }
    return o
}
function wf(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function Co(e) {
    const t = Je(hs)
      , n = Je(il)
      , r = V( () => t.resolve(wt(e.to)))
      , s = V( () => {
        const {matched: l} = r.value
          , {length: f} = l
          , c = l[f - 1]
          , p = n.matched;
        if (!c || !p.length)
            return -1;
        const d = p.findIndex(qt.bind(null, c));
        if (d > -1)
            return d;
        const m = So(l[f - 2]);
        return f > 1 && So(c) === m && p[p.length - 1].path !== m ? p.findIndex(qt.bind(null, l[f - 2])) : d
    }
    )
      , o = V( () => s.value > -1 && Sf(n.params, r.value.params))
      , i = V( () => s.value > -1 && s.value === n.matched.length - 1 && tl(n.params, r.value.params));
    function a(l={}) {
        return Cf(l) ? t[wt(e.replace) ? "replace" : "push"](wt(e.to)).catch(tn) : Promise.resolve()
    }
    return {
        route: r,
        href: V( () => r.value.href),
        isActive: o,
        isExactActive: i,
        navigate: a
    }
}
const xf = os({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: Co,
    setup(e, {slots: t}) {
        const n = Dt(Co(e))
          , {options: r} = Je(hs)
          , s = V( () => ({
            [Ro(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [Ro(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const o = t.default && t.default(n);
            return e.custom ? o : z("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value
            }, o)
        }
    }
})
  , Ef = xf;
function Cf(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function Sf(e, t) {
    for (const n in t) {
        const r = t[n]
          , s = e[n];
        if (typeof r == "string") {
            if (r !== s)
                return !1
        } else if (!Fe(s) || s.length !== r.length || r.some( (o, i) => o !== s[i]))
            return !1
    }
    return !0
}
function So(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Ro = (e, t, n) => e ?? t ?? n
  , Rf = os({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = Je(Hr)
          , s = V( () => e.route || r.value)
          , o = Je(Eo, 0)
          , i = V( () => {
            let f = wt(o);
            const {matched: c} = s.value;
            let p;
            for (; (p = c[f]) && !p.components; )
                f++;
            return f
        }
        )
          , a = V( () => s.value.matched[i.value]);
        An(Eo, V( () => i.value + 1)),
        An(bf, a),
        An(Hr, s);
        const l = sn();
        return kn( () => [l.value, a.value, e.name], ([f,c,p], [d,m,b]) => {
            c && (c.instances[p] = f,
            m && m !== c && f && f === d && (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
            c.updateGuards.size || (c.updateGuards = m.updateGuards))),
            f && c && (!m || !qt(c, m) || !d) && (c.enterCallbacks[p] || []).forEach(T => T(f))
        }
        , {
            flush: "post"
        }),
        () => {
            const f = s.value
              , c = e.name
              , p = a.value
              , d = p && p.components[c];
            if (!d)
                return Po(n.default, {
                    Component: d,
                    route: f
                });
            const m = p.props[c]
              , b = m ? m === !0 ? f.params : typeof m == "function" ? m(f) : m : null
              , C = z(d, oe({}, b, t, {
                onVnodeUnmounted: R => {
                    R.component.isUnmounted && (p.instances[c] = null)
                }
                ,
                ref: l
            }));
            return Po(n.default, {
                Component: C,
                route: f
            }) || C
        }
    }
});
function Po(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Pf = Rf;
function kf(e) {
    const t = pf(e.routes, e)
      , n = e.parseQuery || _f
      , r = e.stringifyQuery || xo
      , s = e.history
      , o = Kt()
      , i = Kt()
      , a = Kt()
      , l = ea(nt);
    let f = nt;
    Ot && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const c = _r.bind(null, _ => "" + _)
      , p = _r.bind(null, qu)
      , d = _r.bind(null, hn);
    function m(_, A) {
        let P, I;
        return rl(_) ? (P = t.getRecordMatcher(_),
        I = A) : I = _,
        t.addRoute(I, P)
    }
    function b(_) {
        const A = t.getRecordMatcher(_);
        A && t.removeRoute(A)
    }
    function T() {
        return t.getRoutes().map(_ => _.record)
    }
    function C(_) {
        return !!t.getRecordMatcher(_)
    }
    function R(_, A) {
        if (A = oe({}, A || l.value),
        typeof _ == "string") {
            const h = yr(n, _, A.path)
              , g = t.resolve({
                path: h.path
            }, A)
              , y = s.createHref(h.fullPath);
            return oe(h, g, {
                params: d(g.params),
                hash: hn(h.hash),
                redirectedFrom: void 0,
                href: y
            })
        }
        let P;
        if (_.path != null)
            P = oe({}, _, {
                path: yr(n, _.path, A.path).path
            });
        else {
            const h = oe({}, _.params);
            for (const g in h)
                h[g] == null && delete h[g];
            P = oe({}, _, {
                params: p(h)
            }),
            A.params = p(A.params)
        }
        const I = t.resolve(P, A)
          , se = _.hash || "";
        I.params = c(d(I.params));
        const ue = Du(r, oe({}, _, {
            hash: Nu(se),
            path: I.path
        }))
          , u = s.createHref(ue);
        return oe({
            fullPath: ue,
            hash: se,
            query: r === xo ? yf(_.query) : _.query || {}
        }, I, {
            redirectedFrom: void 0,
            href: u
        })
    }
    function N(_) {
        return typeof _ == "string" ? yr(n, _, l.value.path) : oe({}, _)
    }
    function B(_, A) {
        if (f !== _)
            return jt(8, {
                from: A,
                to: _
            })
    }
    function D(_) {
        return ee(_)
    }
    function q(_) {
        return D(oe(N(_), {
            replace: !0
        }))
    }
    function M(_) {
        const A = _.matched[_.matched.length - 1];
        if (A && A.redirect) {
            const {redirect: P} = A;
            let I = typeof P == "function" ? P(_) : P;
            return typeof I == "string" && (I = I.includes("?") || I.includes("#") ? I = N(I) : {
                path: I
            },
            I.params = {}),
            oe({
                query: _.query,
                hash: _.hash,
                params: I.path != null ? {} : _.params
            }, I)
        }
    }
    function ee(_, A) {
        const P = f = R(_)
          , I = l.value
          , se = _.state
          , ue = _.force
          , u = _.replace === !0
          , h = M(P);
        if (h)
            return ee(oe(N(h), {
                state: typeof h == "object" ? oe({}, se, h.state) : se,
                force: ue,
                replace: u
            }), A || P);
        const g = P;
        g.redirectedFrom = A;
        let y;
        return !ue && zu(r, I, P) && (y = jt(16, {
            to: g,
            from: I
        }),
        qe(I, I, !0, !1)),
        (y ? Promise.resolve(y) : Y(g, I)).catch(v => We(v) ? We(v, 2) ? v : Ze(v) : re(v, g, I)).then(v => {
            if (v) {
                if (We(v, 2))
                    return ee(oe({
                        replace: u
                    }, N(v.to), {
                        state: typeof v.to == "object" ? oe({}, se, v.to.state) : se,
                        force: ue
                    }), A || g)
            } else
                v = O(g, I, !0, u, se);
            return te(g, I, v),
            v
        }
        )
    }
    function j(_, A) {
        const P = B(_, A);
        return P ? Promise.reject(P) : Promise.resolve()
    }
    function Q(_) {
        const A = Rt.values().next().value;
        return A && typeof A.runWithContext == "function" ? A.runWithContext(_) : _()
    }
    function Y(_, A) {
        let P;
        const [I,se,ue] = Tf(_, A);
        P = br(I.reverse(), "beforeRouteLeave", _, A);
        for (const h of I)
            h.leaveGuards.forEach(g => {
                P.push(at(g, _, A))
            }
            );
        const u = j.bind(null, _, A);
        return P.push(u),
        ve(P).then( () => {
            P = [];
            for (const h of o.list())
                P.push(at(h, _, A));
            return P.push(u),
            ve(P)
        }
        ).then( () => {
            P = br(se, "beforeRouteUpdate", _, A);
            for (const h of se)
                h.updateGuards.forEach(g => {
                    P.push(at(g, _, A))
                }
                );
            return P.push(u),
            ve(P)
        }
        ).then( () => {
            P = [];
            for (const h of ue)
                if (h.beforeEnter)
                    if (Fe(h.beforeEnter))
                        for (const g of h.beforeEnter)
                            P.push(at(g, _, A));
                    else
                        P.push(at(h.beforeEnter, _, A));
            return P.push(u),
            ve(P)
        }
        ).then( () => (_.matched.forEach(h => h.enterCallbacks = {}),
        P = br(ue, "beforeRouteEnter", _, A, Q),
        P.push(u),
        ve(P))).then( () => {
            P = [];
            for (const h of i.list())
                P.push(at(h, _, A));
            return P.push(u),
            ve(P)
        }
        ).catch(h => We(h, 8) ? h : Promise.reject(h))
    }
    function te(_, A, P) {
        a.list().forEach(I => Q( () => I(_, A, P)))
    }
    function O(_, A, P, I, se) {
        const ue = B(_, A);
        if (ue)
            return ue;
        const u = A === nt
          , h = Ot ? history.state : {};
        P && (I || u ? s.replace(_.fullPath, oe({
            scroll: u && h && h.scroll
        }, se)) : s.push(_.fullPath, se)),
        l.value = _,
        qe(_, A, P, u),
        Ze()
    }
    let J;
    function $() {
        J || (J = s.listen( (_, A, P) => {
            if (!yn.listening)
                return;
            const I = R(_)
              , se = M(I);
            if (se) {
                ee(oe(se, {
                    replace: !0
                }), I).catch(tn);
                return
            }
            f = I;
            const ue = l.value;
            Ot && Yu(po(ue.fullPath, P.delta), ir()),
            Y(I, ue).catch(u => We(u, 12) ? u : We(u, 2) ? (ee(u.to, I).then(h => {
                We(h, 20) && !P.delta && P.type === pn.pop && s.go(-1, !1)
            }
            ).catch(tn),
            Promise.reject()) : (P.delta && s.go(-P.delta, !1),
            re(u, I, ue))).then(u => {
                u = u || O(I, ue, !1),
                u && (P.delta && !We(u, 8) ? s.go(-P.delta, !1) : P.type === pn.pop && We(u, 20) && s.go(-1, !1)),
                te(I, ue, u)
            }
            ).catch(tn)
        }
        ))
    }
    let ne = Kt(), ae = Kt(), ie;
    function re(_, A, P) {
        Ze(_);
        const I = ae.list();
        return I.length ? I.forEach(se => se(_, A, P)) : console.error(_),
        Promise.reject(_)
    }
    function Ke() {
        return ie && l.value !== nt ? Promise.resolve() : new Promise( (_, A) => {
            ne.add([_, A])
        }
        )
    }
    function Ze(_) {
        return ie || (ie = !_,
        $(),
        ne.list().forEach( ([A,P]) => _ ? P(_) : A()),
        ne.reset()),
        _
    }
    function qe(_, A, P, I) {
        const {scrollBehavior: se} = e;
        if (!Ot || !se)
            return Promise.resolve();
        const ue = !P && Xu(po(_.fullPath, 0)) || (I || !P) && history.state && history.state.scroll || null;
        return li().then( () => se(_, A, ue)).then(u => u && Ju(u)).catch(u => re(u, _, A))
    }
    const xe = _ => s.go(_);
    let St;
    const Rt = new Set
      , yn = {
        currentRoute: l,
        listening: !0,
        addRoute: m,
        removeRoute: b,
        hasRoute: C,
        getRoutes: T,
        resolve: R,
        options: e,
        push: D,
        replace: q,
        go: xe,
        back: () => xe(-1),
        forward: () => xe(1),
        beforeEach: o.add,
        beforeResolve: i.add,
        afterEach: a.add,
        onError: ae.add,
        isReady: Ke,
        install(_) {
            const A = this;
            _.component("RouterLink", Ef),
            _.component("RouterView", Pf),
            _.config.globalProperties.$router = A,
            Object.defineProperty(_.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => wt(l)
            }),
            Ot && !St && l.value === nt && (St = !0,
            D(s.location).catch(se => {}
            ));
            const P = {};
            for (const se in nt)
                Object.defineProperty(P, se, {
                    get: () => l.value[se],
                    enumerable: !0
                });
            _.provide(hs, A),
            _.provide(il, Zo(P)),
            _.provide(Hr, l);
            const I = _.unmount;
            Rt.add(_),
            _.unmount = function() {
                Rt.delete(_),
                Rt.size < 1 && (f = nt,
                J && J(),
                J = null,
                l.value = nt,
                St = !1,
                ie = !1),
                I()
            }
        }
    };
    function ve(_) {
        return _.reduce( (A, P) => A.then( () => Q(P)), Promise.resolve())
    }
    return yn
}
function Tf(e, t) {
    const n = []
      , r = []
      , s = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
        const a = t.matched[i];
        a && (e.matched.find(f => qt(f, a)) ? r.push(a) : n.push(a));
        const l = e.matched[i];
        l && (t.matched.find(f => qt(f, l)) || s.push(l))
    }
    return [n, r, s]
}
const Af = function() {
    const t = typeof document < "u" && document.createElement("link").relList;
    return t && t.supports && t.supports("modulepreload") ? "modulepreload" : "preload"
}()
  , Lf = function(e) {
    return "/" + e
}
  , ko = {}
  , wr = function(t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
        const o = document.getElementsByTagName("link")
          , i = document.querySelector("meta[property=csp-nonce]")
          , a = i?.nonce || i?.getAttribute("nonce");
        s = Promise.all(n.map(l => {
            if (l = Lf(l),
            l in ko)
                return;
            ko[l] = !0;
            const f = l.endsWith(".css")
              , c = f ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let m = o.length - 1; m >= 0; m--) {
                    const b = o[m];
                    if (b.href === l && (!f || b.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${l}"]${c}`))
                return;
            const d = document.createElement("link");
            if (d.rel = f ? "stylesheet" : Af,
            f || (d.as = "script",
            d.crossOrigin = ""),
            d.href = l,
            a && d.setAttribute("nonce", a),
            document.head.appendChild(d),
            f)
                return new Promise( (m, b) => {
                    d.addEventListener("load", m),
                    d.addEventListener("error", () => b(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    return s.then( () => t()).catch(o => {
        const i = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (i.payload = o,
        window.dispatchEvent(i),
        !i.defaultPrevented)
            throw o
    }
    )
}
  , Of = [{
    path: "/",
    component: () => wr( () => import("./MainLayout-CfTjBQtk.js"), []),
    children: [{
        path: "",
        name: "index",
        component: () => wr( () => import("./IndexPage-DuV-R1Ea.js"), __vite__mapDeps([0, 1, 2]))
    }, {
        path: "privacy",
        name: "privacy",
        component: () => wr( () => import("./PrivacyPage-DvoeqIe4.js"), __vite__mapDeps([3, 1]))
    }]
}, {
    path: "/:catchAll(.*)*",
    redirect: "/"
}]
  , xr = function() {
    return kf({
        scrollBehavior: () => ({
            left: 0,
            top: 0
        }),
        routes: Of,
        history: nf("/")
    })
};
async function $f(e, t) {
    const n = e(Su);
    n.use(xu, t);
    const r = zt(typeof xr == "function" ? await xr({}) : xr);
    return {
        app: n,
        router: r
    }
}
const Dr = {
    xs: 18,
    sm: 24,
    md: 32,
    lg: 38,
    xl: 46
}
  , ps = {
    size: String
};
function gs(e, t=Dr) {
    return V( () => e.size !== void 0 ? {
        fontSize: e.size in t ? `${t[e.size]}px` : e.size
    } : null)
}
const _n = e => zt(os(e))
  , Mf = e => zt(e);
function If(e, t) {
    return e !== void 0 && e() || t
}
function Qt(e, t) {
    return e !== void 0 ? t.concat(e()) : t
}
function Nf(e, t) {
    return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e()
}
const To = "0 0 24 24"
  , Ao = e => e
  , Er = e => `ionicons ${e}`
  , ll = {
    "mdi-": e => `mdi ${e}`,
    "icon-": Ao,
    "bt-": e => `bt ${e}`,
    "eva-": e => `eva ${e}`,
    "ion-md": Er,
    "ion-ios": Er,
    "ion-logo": Er,
    "iconfont ": Ao,
    "ti-": e => `themify-icon ${e}`,
    "bi-": e => `bootstrap-icons ${e}`
}
  , al = {
    o_: "-outlined",
    r_: "-round",
    s_: "-sharp"
}
  , cl = {
    sym_o_: "-outlined",
    sym_r_: "-rounded",
    sym_s_: "-sharp"
}
  , Bf = new RegExp("^(" + Object.keys(ll).join("|") + ")")
  , Ff = new RegExp("^(" + Object.keys(al).join("|") + ")")
  , Lo = new RegExp("^(" + Object.keys(cl).join("|") + ")")
  , qf = /^[Mm]\s?[-+]?\.?\d/
  , jf = /^img:/
  , Hf = /^svguse:/
  , Df = /^ion-/
  , zf = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /
  , zn = _n({
    name: "QIcon",
    props: {
        ...ps,
        tag: {
            type: String,
            default: "i"
        },
        name: String,
        color: String,
        left: Boolean,
        right: Boolean
    },
    setup(e, {slots: t}) {
        const {proxy: {$q: n}} = gn()
          , r = gs(e)
          , s = V( () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : ""))
          , o = V( () => {
            let i, a = e.name;
            if (a === "none" || !a)
                return {
                    none: !0
                };
            if (n.iconMapFn !== null) {
                const c = n.iconMapFn(a);
                if (c !== void 0)
                    if (c.icon !== void 0) {
                        if (a = c.icon,
                        a === "none" || !a)
                            return {
                                none: !0
                            }
                    } else
                        return {
                            cls: c.cls,
                            content: c.content !== void 0 ? c.content : " "
                        }
            }
            if (qf.test(a) === !0) {
                const [c,p=To] = a.split("|");
                return {
                    svg: !0,
                    viewBox: p,
                    nodes: c.split("&&").map(d => {
                        const [m,b,T] = d.split("@@");
                        return z("path", {
                            style: b,
                            d: m,
                            transform: T
                        })
                    }
                    )
                }
            }
            if (jf.test(a) === !0)
                return {
                    img: !0,
                    src: a.substring(4)
                };
            if (Hf.test(a) === !0) {
                const [c,p=To] = a.split("|");
                return {
                    svguse: !0,
                    src: c.substring(7),
                    viewBox: p
                }
            }
            let l = " ";
            const f = a.match(Bf);
            if (f !== null)
                i = ll[f[1]](a);
            else if (zf.test(a) === !0)
                i = a;
            else if (Df.test(a) === !0)
                i = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${a.substring(3)}`;
            else if (Lo.test(a) === !0) {
                i = "notranslate material-symbols";
                const c = a.match(Lo);
                c !== null && (a = a.substring(6),
                i += cl[c[1]]),
                l = a
            } else {
                i = "notranslate material-icons";
                const c = a.match(Ff);
                c !== null && (a = a.substring(2),
                i += al[c[1]]),
                l = a
            }
            return {
                cls: i,
                content: l
            }
        }
        );
        return () => {
            const i = {
                class: s.value,
                style: r.value,
                "aria-hidden": "true",
                role: "presentation"
            };
            return o.value.none === !0 ? z(e.tag, i, If(t.default)) : o.value.img === !0 ? z(e.tag, i, Qt(t.default, [z("img", {
                src: o.value.src
            })])) : o.value.svg === !0 ? z(e.tag, i, Qt(t.default, [z("svg", {
                viewBox: o.value.viewBox || "0 0 24 24"
            }, o.value.nodes)])) : o.value.svguse === !0 ? z(e.tag, i, Qt(t.default, [z("svg", {
                viewBox: o.value.viewBox
            }, [z("use", {
                "xlink:href": o.value.src
            })])])) : (o.value.cls !== void 0 && (i.class += " " + o.value.cls),
            z(e.tag, i, Qt(t.default, [o.value.content])))
        }
    }
})
  , Vf = _n({
    name: "QAvatar",
    props: {
        ...ps,
        fontSize: String,
        color: String,
        textColor: String,
        icon: String,
        square: Boolean,
        rounded: Boolean
    },
    setup(e, {slots: t}) {
        const n = gs(e)
          , r = V( () => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === !0 ? " q-avatar--square" : e.rounded === !0 ? " rounded-borders" : ""))
          , s = V( () => e.fontSize ? {
            fontSize: e.fontSize
        } : null);
        return () => {
            const o = e.icon !== void 0 ? [z(zn, {
                name: e.icon
            })] : void 0;
            return z("div", {
                class: r.value,
                style: n.value
            }, [z("div", {
                class: "q-avatar__content row flex-center overflow-hidden",
                style: s.value
            }, Nf(t.default, o))])
        }
    }
})
  , Uf = {
    size: {
        type: [Number, String],
        default: "1em"
    },
    color: String
};
function Kf(e) {
    return {
        cSize: V( () => e.size in Dr ? `${Dr[e.size]}px` : e.size),
        classes: V( () => "q-spinner" + (e.color ? ` text-${e.color}` : ""))
    }
}
const ul = _n({
    name: "QSpinner",
    props: {
        ...Uf,
        thickness: {
            type: Number,
            default: 5
        }
    },
    setup(e) {
        const {cSize: t, classes: n} = Kf(e);
        return () => z("svg", {
            class: n.value + " q-spinner-mat",
            width: t.value,
            height: t.value,
            viewBox: "25 25 50 50"
        }, [z("circle", {
            class: "path",
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": e.thickness,
            "stroke-miterlimit": "10"
        })])
    }
});
function Wf(e, t) {
    const n = e.style;
    for (const r in t)
        n[r] = t[r]
}
function Od(e) {
    if (e == null)
        return;
    if (typeof e == "string")
        try {
            return document.querySelector(e) || void 0
        } catch {
            return
        }
    const t = wt(e);
    if (t)
        return t.$el || t
}
function Gf(e, t=250) {
    let n = !1, r;
    return function() {
        return n === !1 && (n = !0,
        setTimeout( () => {
            n = !1
        }
        , t),
        r = e.apply(this, arguments)),
        r
    }
}
function Oo(e, t, n, r) {
    n.modifiers.stop === !0 && Ui(e);
    const s = n.modifiers.color;
    let o = n.modifiers.center;
    o = o === !0 || r === !0;
    const i = document.createElement("span")
      , a = document.createElement("span")
      , l = Zc(e)
      , {left: f, top: c, width: p, height: d} = t.getBoundingClientRect()
      , m = Math.sqrt(p * p + d * d)
      , b = m / 2
      , T = `${(p - m) / 2}px`
      , C = o ? T : `${l.left - f - b}px`
      , R = `${(d - m) / 2}px`
      , N = o ? R : `${l.top - c - b}px`;
    a.className = "q-ripple__inner",
    Wf(a, {
        height: `${m}px`,
        width: `${m}px`,
        transform: `translate3d(${C},${N},0) scale3d(.2,.2,1)`,
        opacity: 0
    }),
    i.className = `q-ripple${s ? " text-" + s : ""}`,
    i.setAttribute("dir", "ltr"),
    i.appendChild(a),
    t.appendChild(i);
    const B = () => {
        i.remove(),
        clearTimeout(D)
    }
    ;
    n.abort.push(B);
    let D = setTimeout( () => {
        a.classList.add("q-ripple__inner--enter"),
        a.style.transform = `translate3d(${T},${R},0) scale3d(1,1,1)`,
        a.style.opacity = .2,
        D = setTimeout( () => {
            a.classList.remove("q-ripple__inner--enter"),
            a.classList.add("q-ripple__inner--leave"),
            a.style.opacity = 0,
            D = setTimeout( () => {
                i.remove(),
                n.abort.splice(n.abort.indexOf(B), 1)
            }
            , 275)
        }
        , 250)
    }
    , 50)
}
function $o(e, {modifiers: t, value: n, arg: r}) {
    const s = Object.assign({}, e.cfg.ripple, t, n);
    e.modifiers = {
        early: s.early === !0,
        stop: s.stop === !0,
        center: s.center === !0,
        color: s.color || r,
        keyCodes: [].concat(s.keyCodes || 13)
    }
}
const Qf = Mf({
    name: "ripple",
    beforeMount(e, t) {
        const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
        if (n.ripple === !1)
            return;
        const r = {
            cfg: n,
            enabled: t.value !== !1,
            modifiers: {},
            abort: [],
            start(s) {
                r.enabled === !0 && s.qSkipRipple !== !0 && s.type === (r.modifiers.early === !0 ? "pointerdown" : "click") && Oo(s, e, r, s.qKeyEvent === !0)
            },
            keystart: Gf(s => {
                r.enabled === !0 && s.qSkipRipple !== !0 && Fr(s, r.modifiers.keyCodes) === !0 && s.type === `key${r.modifiers.early === !0 ? "down" : "up"}` && Oo(s, e, r, !0)
            }
            , 300)
        };
        $o(r, t),
        e.__qripple = r,
        tu(r, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]])
    },
    updated(e, t) {
        if (t.oldValue !== t.value) {
            const n = e.__qripple;
            n !== void 0 && (n.enabled = t.value !== !1,
            n.enabled === !0 && Object(t.value) === t.value && $o(n, t))
        }
    },
    beforeUnmount(e) {
        const t = e.__qripple;
        t !== void 0 && (t.abort.forEach(n => {
            n()
        }
        ),
        nu(t, "main"),
        delete e._qripple)
    }
})
  , fl = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch"
}
  , Jf = Object.keys(fl)
  , Yf = {
    align: {
        type: String,
        validator: e => Jf.includes(e)
    }
};
function Xf(e) {
    return V( () => {
        const t = e.align === void 0 ? e.vertical === !0 ? "stretch" : "left" : e.align;
        return `${e.vertical === !0 ? "items" : "justify"}-${fl[t]}`
    }
    )
}
function Zf(e) {
    return e.appContext.config.globalProperties.$router !== void 0
}
function Mo(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
function Io(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function ed(e, t) {
    for (const n in t) {
        const r = t[n]
          , s = e[n];
        if (typeof r == "string") {
            if (r !== s)
                return !1
        } else if (Array.isArray(s) === !1 || s.length !== r.length || r.some( (o, i) => o !== s[i]))
            return !1
    }
    return !0
}
function No(e, t) {
    return Array.isArray(t) === !0 ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function td(e, t) {
    return Array.isArray(e) === !0 ? No(e, t) : Array.isArray(t) === !0 ? No(t, e) : e === t
}
function nd(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (td(e[n], t[n]) === !1)
            return !1;
    return !0
}
const rd = {
    to: [String, Object],
    replace: Boolean,
    exact: Boolean,
    activeClass: {
        type: String,
        default: "q-router-link--active"
    },
    exactActiveClass: {
        type: String,
        default: "q-router-link--exact-active"
    },
    href: String,
    target: String,
    disable: Boolean
};
function sd({fallbackTag: e, useDisableForRouterLinkProps: t=!0}={}) {
    const n = gn()
      , {props: r, proxy: s, emit: o} = n
      , i = Zf(n)
      , a = V( () => r.disable !== !0 && r.href !== void 0)
      , l = V(t === !0 ? () => i === !0 && r.disable !== !0 && a.value !== !0 && r.to !== void 0 && r.to !== null && r.to !== "" : () => i === !0 && a.value !== !0 && r.to !== void 0 && r.to !== null && r.to !== "")
      , f = V( () => l.value === !0 ? N(r.to) : null)
      , c = V( () => f.value !== null)
      , p = V( () => a.value === !0 || c.value === !0)
      , d = V( () => r.type === "a" || p.value === !0 ? "a" : r.tag || e || "div")
      , m = V( () => a.value === !0 ? {
        href: r.href,
        target: r.target
    } : c.value === !0 ? {
        href: f.value.href,
        target: r.target
    } : {})
      , b = V( () => {
        if (c.value === !1)
            return -1;
        const {matched: q} = f.value
          , {length: M} = q
          , ee = q[M - 1];
        if (ee === void 0)
            return -1;
        const j = s.$route.matched;
        if (j.length === 0)
            return -1;
        const Q = j.findIndex(Io.bind(null, ee));
        if (Q !== -1)
            return Q;
        const Y = Mo(q[M - 2]);
        return M > 1 && Mo(ee) === Y && j[j.length - 1].path !== Y ? j.findIndex(Io.bind(null, q[M - 2])) : Q
    }
    )
      , T = V( () => c.value === !0 && b.value !== -1 && ed(s.$route.params, f.value.params))
      , C = V( () => T.value === !0 && b.value === s.$route.matched.length - 1 && nd(s.$route.params, f.value.params))
      , R = V( () => c.value === !0 ? C.value === !0 ? ` ${r.exactActiveClass} ${r.activeClass}` : r.exact === !0 ? "" : T.value === !0 ? ` ${r.activeClass}` : "" : "");
    function N(q) {
        try {
            return s.$router.resolve(q)
        } catch {}
        return null
    }
    function B(q, {returnRouterError: M, to: ee=r.to, replace: j=r.replace}={}) {
        if (r.disable === !0)
            return q.preventDefault(),
            Promise.resolve(!1);
        if (q.metaKey || q.altKey || q.ctrlKey || q.shiftKey || q.button !== void 0 && q.button !== 0 || r.target === "_blank")
            return Promise.resolve(!1);
        q.preventDefault();
        const Q = s.$router[j === !0 ? "replace" : "push"](ee);
        return M === !0 ? Q : Q.then( () => {}
        ).catch( () => {}
        )
    }
    function D(q) {
        if (c.value === !0) {
            const M = ee => B(q, ee);
            o("click", q, M),
            q.defaultPrevented !== !0 && M()
        } else
            o("click", q)
    }
    return {
        hasRouterLink: c,
        hasHrefLink: a,
        hasLink: p,
        linkTag: d,
        resolvedLink: f,
        linkIsActive: T,
        linkIsExactActive: C,
        linkClass: R,
        linkAttrs: m,
        getLink: N,
        navigateToRouterLink: B,
        navigateOnClick: D
    }
}
const Bo = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
}
  , od = {
    xs: 8,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24
}
  , id = ["button", "submit", "reset"]
  , ld = /[^\s]\/[^\s]/
  , ad = ["flat", "outline", "push", "unelevated"]
  , cd = (e, t) => e.flat === !0 ? "flat" : e.outline === !0 ? "outline" : e.push === !0 ? "push" : e.unelevated === !0 ? "unelevated" : t
  , ud = {
    ...ps,
    ...rd,
    type: {
        type: String,
        default: "button"
    },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...ad.reduce( (e, t) => (e[t] = Boolean) && e, {}),
    square: Boolean,
    round: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: {
        type: [Boolean, Object],
        default: !0
    },
    align: {
        ...Yf.align,
        default: "center"
    },
    stack: Boolean,
    stretch: Boolean,
    loading: {
        type: Boolean,
        default: null
    },
    disable: Boolean
};
function fd(e) {
    const t = gs(e, od)
      , n = Xf(e)
      , {hasRouterLink: r, hasLink: s, linkTag: o, linkAttrs: i, navigateOnClick: a} = sd({
        fallbackTag: "button"
    })
      , l = V( () => {
        const C = e.fab === !1 && e.fabMini === !1 ? t.value : {};
        return e.padding !== void 0 ? Object.assign({}, C, {
            padding: e.padding.split(/\s+/).map(R => R in Bo ? Bo[R] + "px" : R).join(" "),
            minWidth: "0",
            minHeight: "0"
        }) : C
    }
    )
      , f = V( () => e.rounded === !0 || e.fab === !0 || e.fabMini === !0)
      , c = V( () => e.disable !== !0 && e.loading !== !0)
      , p = V( () => c.value === !0 ? e.tabindex || 0 : -1)
      , d = V( () => cd(e, "standard"))
      , m = V( () => {
        const C = {
            tabindex: p.value
        };
        return s.value === !0 ? Object.assign(C, i.value) : id.includes(e.type) === !0 && (C.type = e.type),
        o.value === "a" ? (e.disable === !0 ? C["aria-disabled"] = "true" : C.href === void 0 && (C.role = "button"),
        r.value !== !0 && ld.test(e.type) === !0 && (C.type = e.type)) : e.disable === !0 && (C.disabled = "",
        C["aria-disabled"] = "true"),
        e.loading === !0 && e.percentage !== void 0 && Object.assign(C, {
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": e.percentage
        }),
        C
    }
    )
      , b = V( () => {
        let C;
        e.color !== void 0 ? e.flat === !0 || e.outline === !0 ? C = `text-${e.textColor || e.color}` : C = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (C = `text-${e.textColor}`);
        const R = e.round === !0 ? "round" : `rectangle${f.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
        return `q-btn--${d.value} q-btn--${R}` + (C !== void 0 ? " " + C : "") + (c.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "")
    }
    )
      , T = V( () => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : ""));
    return {
        classes: b,
        style: l,
        innerClasses: T,
        attributes: m,
        hasLink: s,
        linkTag: o,
        navigateOnClick: a,
        isActionable: c
    }
}
const {passiveCapture: Te} = vn;
let Tt = null
  , At = null
  , Lt = null;
const dd = _n({
    name: "QBtn",
    props: {
        ...ud,
        percentage: Number,
        darkPercentage: Boolean,
        onTouchstart: [Function, Array]
    },
    emits: ["click", "keydown", "mousedown", "keyup"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: r} = gn()
          , {classes: s, style: o, innerClasses: i, attributes: a, hasLink: l, linkTag: f, navigateOnClick: c, isActionable: p} = fd(e)
          , d = sn(null)
          , m = sn(null);
        let b = null, T, C = null;
        const R = V( () => e.label !== void 0 && e.label !== null && e.label !== "")
          , N = V( () => e.disable === !0 || e.ripple === !1 ? !1 : {
            keyCodes: l.value === !0 ? [13, 32] : [13],
            ...e.ripple === !0 ? {} : e.ripple
        })
          , B = V( () => ({
            center: e.round
        }))
          , D = V( () => {
            const $ = Math.max(0, Math.min(100, e.percentage));
            return $ > 0 ? {
                transition: "transform 0.6s",
                transform: `translateX(${$ - 100}%)`
            } : {}
        }
        )
          , q = V( () => {
            if (e.loading === !0)
                return {
                    onMousedown: J,
                    onTouchstart: J,
                    onClick: J,
                    onKeydown: J,
                    onKeyup: J
                };
            if (p.value === !0) {
                const $ = {
                    onClick: ee,
                    onKeydown: j,
                    onMousedown: Y
                };
                if (r.$q.platform.has.touch === !0) {
                    const ne = e.onTouchstart !== void 0 ? "" : "Passive";
                    $[`onTouchstart${ne}`] = Q
                }
                return $
            }
            return {
                onClick: kt
            }
        }
        )
          , M = V( () => ({
            ref: d,
            class: "q-btn q-btn-item non-selectable no-outline " + s.value,
            style: o.value,
            ...a.value,
            ...q.value
        }));
        function ee($) {
            if (d.value !== null) {
                if ($ !== void 0) {
                    if ($.defaultPrevented === !0)
                        return;
                    const ne = document.activeElement;
                    if (e.type === "submit" && ne !== document.body && d.value.contains(ne) === !1 && ne.contains(d.value) === !1) {
                        d.value.focus();
                        const ae = () => {
                            document.removeEventListener("keydown", kt, !0),
                            document.removeEventListener("keyup", ae, Te),
                            d.value !== null && d.value.removeEventListener("blur", ae, Te)
                        }
                        ;
                        document.addEventListener("keydown", kt, !0),
                        document.addEventListener("keyup", ae, Te),
                        d.value.addEventListener("blur", ae, Te)
                    }
                }
                c($)
            }
        }
        function j($) {
            d.value !== null && (n("keydown", $),
            Fr($, [13, 32]) === !0 && At !== d.value && (At !== null && O(),
            $.defaultPrevented !== !0 && (d.value.focus(),
            At = d.value,
            d.value.classList.add("q-btn--active"),
            document.addEventListener("keyup", te, !0),
            d.value.addEventListener("blur", te, Te)),
            kt($)))
        }
        function Q($) {
            d.value !== null && (n("touchstart", $),
            $.defaultPrevented !== !0 && (Tt !== d.value && (Tt !== null && O(),
            Tt = d.value,
            b = $.target,
            b.addEventListener("touchcancel", te, Te),
            b.addEventListener("touchend", te, Te)),
            T = !0,
            C !== null && clearTimeout(C),
            C = setTimeout( () => {
                C = null,
                T = !1
            }
            , 200)))
        }
        function Y($) {
            d.value !== null && ($.qSkipRipple = T === !0,
            n("mousedown", $),
            $.defaultPrevented !== !0 && Lt !== d.value && (Lt !== null && O(),
            Lt = d.value,
            d.value.classList.add("q-btn--active"),
            document.addEventListener("mouseup", te, Te)))
        }
        function te($) {
            if (d.value !== null && !($ !== void 0 && $.type === "blur" && document.activeElement === d.value)) {
                if ($ !== void 0 && $.type === "keyup") {
                    if (At === d.value && Fr($, [13, 32]) === !0) {
                        const ne = new MouseEvent("click",$);
                        ne.qKeyEvent = !0,
                        $.defaultPrevented === !0 && eu(ne),
                        $.cancelBubble === !0 && Ui(ne),
                        d.value.dispatchEvent(ne),
                        kt($),
                        $.qKeyEvent = !0
                    }
                    n("keyup", $)
                }
                O()
            }
        }
        function O($) {
            const ne = m.value;
            $ !== !0 && (Tt === d.value || Lt === d.value) && ne !== null && ne !== document.activeElement && (ne.setAttribute("tabindex", -1),
            ne.focus()),
            Tt === d.value && (b !== null && (b.removeEventListener("touchcancel", te, Te),
            b.removeEventListener("touchend", te, Te)),
            Tt = b = null),
            Lt === d.value && (document.removeEventListener("mouseup", te, Te),
            Lt = null),
            At === d.value && (document.removeEventListener("keyup", te, !0),
            d.value !== null && d.value.removeEventListener("blur", te, Te),
            At = null),
            d.value !== null && d.value.classList.remove("q-btn--active")
        }
        function J($) {
            kt($),
            $.qSkipRipple = !0
        }
        return is( () => {
            O(!0)
        }
        ),
        Object.assign(r, {
            click: ee
        }),
        () => {
            let $ = [];
            e.icon !== void 0 && $.push(z(zn, {
                name: e.icon,
                left: e.stack !== !0 && R.value === !0,
                role: "img",
                "aria-hidden": "true"
            })),
            R.value === !0 && $.push(z("span", {
                class: "block"
            }, [e.label])),
            $ = Qt(t.default, $),
            e.iconRight !== void 0 && e.round === !1 && $.push(z(zn, {
                name: e.iconRight,
                right: e.stack !== !0 && R.value === !0,
                role: "img",
                "aria-hidden": "true"
            }));
            const ne = [z("span", {
                class: "q-focus-helper",
                ref: m
            })];
            return e.loading === !0 && e.percentage !== void 0 && ne.push(z("span", {
                class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === !0 ? " q-btn__progress--dark" : "")
            }, [z("span", {
                class: "q-btn__progress-indicator fit block",
                style: D.value
            })])),
            ne.push(z("span", {
                class: "q-btn__content text-center col items-center q-anchor--skip " + i.value
            }, $)),
            e.loading !== null && ne.push(z(us, {
                name: "q-transition--fade"
            }, () => e.loading === !0 ? [z("span", {
                key: "loading",
                class: "absolute-full flex flex-center"
            }, t.loading !== void 0 ? t.loading() : [z(ul)])] : null)),
            xa(z(f.value, M.value, ne), [[Qf, N.value, void 0, B.value]])
        }
    }
});
let hd = 1
  , pd = document.body;
function gd(e, t) {
    const n = document.createElement("div");
    if (n.id = t !== void 0 ? `q-portal--${t}--${hd++}` : e,
    Dn.globalNodes !== void 0) {
        const r = Dn.globalNodes.class;
        r !== void 0 && (n.className = r)
    }
    return pd.appendChild(n),
    n
}
let md = 0;
const $n = {}
  , Mn = {}
  , Ie = {}
  , dl = {}
  , vd = /^\s*$/
  , hl = []
  , _d = [void 0, null, !0, !1, ""]
  , ms = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"]
  , yd = ["top-left", "top-right", "bottom-left", "bottom-right"]
  , $t = {
    positive: {
        icon: e => e.iconSet.type.positive,
        color: "positive"
    },
    negative: {
        icon: e => e.iconSet.type.negative,
        color: "negative"
    },
    warning: {
        icon: e => e.iconSet.type.warning,
        color: "warning",
        textColor: "dark"
    },
    info: {
        icon: e => e.iconSet.type.info,
        color: "info"
    },
    ongoing: {
        group: !1,
        timeout: 0,
        spinner: !0,
        color: "grey-8"
    }
};
function pl(e, t, n) {
    if (!e)
        return Wt("parameter required");
    let r;
    const s = {
        textColor: "white"
    };
    if (e.ignoreDefaults !== !0 && Object.assign(s, $n),
    dn(e) === !1 && (s.type && Object.assign(s, $t[s.type]),
    e = {
        message: e
    }),
    Object.assign(s, $t[e.type || s.type], e),
    typeof s.icon == "function" && (s.icon = s.icon(t)),
    s.spinner ? (s.spinner === !0 && (s.spinner = ul),
    s.spinner = zt(s.spinner)) : s.spinner = !1,
    s.meta = {
        hasMedia: !!(s.spinner !== !1 || s.icon || s.avatar),
        hasText: Fo(s.message) || Fo(s.caption)
    },
    s.position) {
        if (ms.includes(s.position) === !1)
            return Wt("wrong position", e)
    } else
        s.position = "bottom";
    if (_d.includes(s.timeout) === !0)
        s.timeout = 5e3;
    else {
        const l = Number(s.timeout);
        if (isNaN(l) || l < 0)
            return Wt("wrong timeout", e);
        s.timeout = Number.isFinite(l) ? l : 0
    }
    s.timeout === 0 ? s.progress = !1 : s.progress === !0 && (s.meta.progressClass = "q-notification__progress" + (s.progressClass ? ` ${s.progressClass}` : ""),
    s.meta.progressStyle = {
        animationDuration: `${s.timeout + 1e3}ms`
    });
    const o = (Array.isArray(e.actions) === !0 ? e.actions : []).concat(e.ignoreDefaults !== !0 && Array.isArray($n.actions) === !0 ? $n.actions : []).concat($t[e.type] !== void 0 && Array.isArray($t[e.type].actions) === !0 ? $t[e.type].actions : [])
      , {closeBtn: i} = s;
    if (i && o.push({
        label: typeof i == "string" ? i : t.lang.label.close
    }),
    s.actions = o.map( ({handler: l, noDismiss: f, ...c}) => ({
        flat: !0,
        ...c,
        onClick: typeof l == "function" ? () => {
            l(),
            f !== !0 && a()
        }
        : () => {
            a()
        }
    })),
    s.multiLine === void 0 && (s.multiLine = s.actions.length > 1),
    Object.assign(s.meta, {
        class: `q-notification row items-stretch q-notification--${s.multiLine === !0 ? "multi-line" : "standard"}` + (s.color !== void 0 ? ` bg-${s.color}` : "") + (s.textColor !== void 0 ? ` text-${s.textColor}` : "") + (s.classes !== void 0 ? ` ${s.classes}` : ""),
        wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (s.multiLine === !0 ? "column no-wrap justify-center" : "row items-center"),
        contentClass: "q-notification__content row items-center" + (s.multiLine === !0 ? "" : " col"),
        leftClass: s.meta.hasText === !0 ? "additional" : "single",
        attrs: {
            role: "alert",
            ...s.attrs
        }
    }),
    s.group === !1 ? (s.group = void 0,
    s.meta.group = void 0) : ((s.group === void 0 || s.group === !0) && (s.group = [s.message, s.caption, s.multiline].concat(s.actions.map(l => `${l.label}*${l.icon}`)).join("|")),
    s.meta.group = s.group + "|" + s.position),
    s.actions.length === 0 ? s.actions = void 0 : s.meta.actionsClass = "q-notification__actions row items-center " + (s.multiLine === !0 ? "justify-end" : "col-auto") + (s.meta.hasMedia === !0 ? " q-notification__actions--with-media" : ""),
    n !== void 0) {
        n.notif.meta.timer && (clearTimeout(n.notif.meta.timer),
        n.notif.meta.timer = void 0),
        s.meta.uid = n.notif.meta.uid;
        const l = Ie[s.position].value.indexOf(n.notif);
        Ie[s.position].value[l] = s
    } else {
        const l = Mn[s.meta.group];
        if (l === void 0) {
            if (s.meta.uid = md++,
            s.meta.badge = 1,
            ["left", "right", "center"].indexOf(s.position) !== -1)
                Ie[s.position].value.splice(Math.floor(Ie[s.position].value.length / 2), 0, s);
            else {
                const f = s.position.indexOf("top") !== -1 ? "unshift" : "push";
                Ie[s.position].value[f](s)
            }
            s.group !== void 0 && (Mn[s.meta.group] = s)
        } else {
            if (l.meta.timer && (clearTimeout(l.meta.timer),
            l.meta.timer = void 0),
            s.badgePosition !== void 0) {
                if (yd.includes(s.badgePosition) === !1)
                    return Wt("wrong badgePosition", e)
            } else
                s.badgePosition = `top-${s.position.indexOf("left") !== -1 ? "right" : "left"}`;
            s.meta.uid = l.meta.uid,
            s.meta.badge = l.meta.badge + 1,
            s.meta.badgeClass = `q-notification__badge q-notification__badge--${s.badgePosition}` + (s.badgeColor !== void 0 ? ` bg-${s.badgeColor}` : "") + (s.badgeTextColor !== void 0 ? ` text-${s.badgeTextColor}` : "") + (s.badgeClass ? ` ${s.badgeClass}` : "");
            const f = Ie[s.position].value.indexOf(l);
            Ie[s.position].value[f] = Mn[s.meta.group] = s
        }
    }
    const a = () => {
        bd(s),
        r = void 0
    }
    ;
    if (s.timeout > 0 && (s.meta.timer = setTimeout( () => {
        s.meta.timer = void 0,
        a()
    }
    , s.timeout + 1e3)),
    s.group !== void 0)
        return l => {
            l !== void 0 ? Wt("trying to update a grouped one which is forbidden", e) : a()
        }
        ;
    if (r = {
        dismiss: a,
        config: e,
        notif: s
    },
    n !== void 0) {
        Object.assign(n, r);
        return
    }
    return l => {
        if (r !== void 0)
            if (l === void 0)
                r.dismiss();
            else {
                const f = Object.assign({}, r.config, l, {
                    group: !1,
                    position: s.position
                });
                pl(f, t, r)
            }
    }
}
function bd(e) {
    e.meta.timer && (clearTimeout(e.meta.timer),
    e.meta.timer = void 0);
    const t = Ie[e.position].value.indexOf(e);
    if (t !== -1) {
        e.group !== void 0 && delete Mn[e.meta.group];
        const n = hl["" + e.meta.uid];
        if (n) {
            const {width: r, height: s} = getComputedStyle(n);
            n.style.left = `${n.offsetLeft}px`,
            n.style.width = r,
            n.style.height = s
        }
        Ie[e.position].value.splice(t, 1),
        typeof e.onDismiss == "function" && e.onDismiss()
    }
}
function Fo(e) {
    return e != null && vd.test(e) !== !0
}
function Wt(e, t) {
    return console.error(`Notify: ${e}`, t),
    !1
}
function wd() {
    return _n({
        name: "QNotifications",
        devtools: {
            hide: !0
        },
        setup() {
            return () => z("div", {
                class: "q-notifications"
            }, ms.map(e => z(jc, {
                key: e,
                class: dl[e],
                tag: "div",
                name: `q-notification--${e}`
            }, () => Ie[e].value.map(t => {
                const n = t.meta
                  , r = [];
                if (n.hasMedia === !0 && (t.spinner !== !1 ? r.push(z(t.spinner, {
                    class: "q-notification__spinner q-notification__spinner--" + n.leftClass,
                    color: t.spinnerColor,
                    size: t.spinnerSize
                })) : t.icon ? r.push(z(zn, {
                    class: "q-notification__icon q-notification__icon--" + n.leftClass,
                    name: t.icon,
                    color: t.iconColor,
                    size: t.iconSize,
                    role: "img"
                })) : t.avatar && r.push(z(Vf, {
                    class: "q-notification__avatar q-notification__avatar--" + n.leftClass
                }, () => z("img", {
                    src: t.avatar,
                    "aria-hidden": "true"
                })))),
                n.hasText === !0) {
                    let o;
                    const i = {
                        class: "q-notification__message col"
                    };
                    if (t.html === !0)
                        i.innerHTML = t.caption ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>` : t.message;
                    else {
                        const a = [t.message];
                        o = t.caption ? [z("div", a), z("div", {
                            class: "q-notification__caption"
                        }, [t.caption])] : a
                    }
                    r.push(z("div", i, o))
                }
                const s = [z("div", {
                    class: n.contentClass
                }, r)];
                return t.progress === !0 && s.push(z("div", {
                    key: `${n.uid}|p|${n.badge}`,
                    class: n.progressClass,
                    style: n.progressStyle
                })),
                t.actions !== void 0 && s.push(z("div", {
                    class: n.actionsClass
                }, t.actions.map(o => z(dd, o)))),
                n.badge > 1 && s.push(z("div", {
                    key: `${n.uid}|${n.badge}`,
                    class: t.meta.badgeClass,
                    style: t.badgeStyle
                }, [n.badge])),
                z("div", {
                    ref: o => {
                        hl["" + n.uid] = o
                    }
                    ,
                    key: n.uid,
                    class: n.class,
                    ...n.attrs
                }, [z("div", {
                    class: n.wrapperClass
                }, s)])
            }
            ))))
        }
    })
}
const xd = {
    setDefaults(e) {
        dn(e) === !0 && Object.assign($n, e)
    },
    registerType(e, t) {
        dn(t) === !0 && ($t[e] = t)
    },
    install({$q: e, parentApp: t}) {
        if (e.notify = this.create = n => pl(n, e),
        e.notify.setDefaults = this.setDefaults,
        e.notify.registerType = this.registerType,
        e.config.notify !== void 0 && this.setDefaults(e.config.notify),
        this.__installed !== !0) {
            ms.forEach(r => {
                Ie[r] = sn([]);
                const s = ["left", "center", "right"].includes(r) === !0 ? "center" : r.indexOf("top") !== -1 ? "top" : "bottom"
                  , o = r.indexOf("left") !== -1 ? "start" : r.indexOf("right") !== -1 ? "end" : "center"
                  , i = ["left", "right"].includes(r) ? `items-${r === "left" ? "start" : "end"} justify-center` : r === "center" ? "flex-center" : `items-${o}`;
                dl[r] = `q-notifications__list q-notifications__list--${s} fixed column no-wrap ${i}`
            }
            );
            const n = gd("q-notify");
            yu(wd(), t).mount(n)
        }
    }
}
  , Ed = {
    config: {},
    plugins: {
        Notify: xd
    }
};
async function Cd({app: e, router: t}) {
    e.use(t),
    e.mount("#q-app")
}
$f(zi, Ed).then(Cd);
export {pa as A, Pe as B, Ld as C, Pd as D, Sd as E, Rd as F, $i as G, rc as H, Br as P, dd as Q, Eu as _, V as a, If as b, _n as c, Td as d, Ad as e, Wf as f, gn as g, z as h, Je as i, Od as j, is as k, kd as l, vn as m, fn as n, yi as o, An as p, xt as q, sn as r, li as s, Dt as t, wi as u, Qt as v, kn as w, Xa as x, ec as y, ca as z};
