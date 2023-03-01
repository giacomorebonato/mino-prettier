import {
  __commonJS
} from "./chunk-7FP5O474.js";

// node_modules/.pnpm/prettier@2.8.4/node_modules/prettier/parser-babel.js
var require_parser_babel = __commonJS({
  "node_modules/.pnpm/prettier@2.8.4/node_modules/prettier/parser-babel.js"(exports, module) {
    (function(e) {
      if (typeof exports == "object" && typeof module == "object")
        module.exports = e();
      else if (typeof define == "function" && define.amd)
        define(e);
      else {
        var i = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
        i.prettierPlugins = i.prettierPlugins || {}, i.prettierPlugins.babel = e();
      }
    })(function() {
      "use strict";
      var v = (l, h) => () => (h || l((h = { exports: {} }).exports, h), h.exports);
      var le = v((md, oi) => {
        var St = function(l) {
          return l && l.Math == Math && l;
        };
        oi.exports = St(typeof globalThis == "object" && globalThis) || St(typeof window == "object" && window) || St(typeof self == "object" && self) || St(typeof global == "object" && global) || function() {
          return this;
        }() || Function("return this")();
      });
      var he = v((yd, li) => {
        li.exports = function(l) {
          try {
            return !!l();
          } catch {
            return true;
          }
        };
      });
      var ve = v((xd, hi) => {
        var Nh = he();
        hi.exports = !Nh(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      });
      var wt = v((gd, ui) => {
        var kh = he();
        ui.exports = !kh(function() {
          var l = function() {
          }.bind();
          return typeof l != "function" || l.hasOwnProperty("prototype");
        });
      });
      var Nt = v((Pd, ci) => {
        var Dh = wt(), It = Function.prototype.call;
        ci.exports = Dh ? It.bind(It) : function() {
          return It.apply(It, arguments);
        };
      });
      var mi = v((di) => {
        "use strict";
        var pi = {}.propertyIsEnumerable, fi = Object.getOwnPropertyDescriptor, Fh = fi && !pi.call({ 1: 2 }, 1);
        di.f = Fh ? function(h) {
          var f = fi(this, h);
          return !!f && f.enumerable;
        } : pi;
      });
      var As = v((Td, yi) => {
        yi.exports = function(l, h) {
          return { enumerable: !(l & 1), configurable: !(l & 2), writable: !(l & 4), value: h };
        };
      });
      var ue = v((vd, Pi) => {
        var xi = wt(), gi = Function.prototype, Ts = gi.call, Lh = xi && gi.bind.bind(Ts, Ts);
        Pi.exports = xi ? Lh : function(l) {
          return function() {
            return Ts.apply(l, arguments);
          };
        };
      });
      var rt = v((Ed, Ti) => {
        var Ai = ue(), Oh = Ai({}.toString), Bh = Ai("".slice);
        Ti.exports = function(l) {
          return Bh(Oh(l), 8, -1);
        };
      });
      var Ei = v((Cd, vi) => {
        var Mh = ue(), _h = he(), Rh = rt(), vs = Object, jh = Mh("".split);
        vi.exports = _h(function() {
          return !vs("z").propertyIsEnumerable(0);
        }) ? function(l) {
          return Rh(l) == "String" ? jh(l, "") : vs(l);
        } : vs;
      });
      var Es = v((bd, Ci) => {
        Ci.exports = function(l) {
          return l == null;
        };
      });
      var Cs = v((Sd, bi) => {
        var qh = Es(), Uh = TypeError;
        bi.exports = function(l) {
          if (qh(l))
            throw Uh("Can't call method on " + l);
          return l;
        };
      });
      var kt = v((wd, Si) => {
        var $h = Ei(), Hh = Cs();
        Si.exports = function(l) {
          return $h(Hh(l));
        };
      });
      var Ss = v((Id, wi) => {
        var bs = typeof document == "object" && document.all, zh = typeof bs > "u" && bs !== void 0;
        wi.exports = { all: bs, IS_HTMLDDA: zh };
      });
      var ne = v((Nd, Ni) => {
        var Ii = Ss(), Vh = Ii.all;
        Ni.exports = Ii.IS_HTMLDDA ? function(l) {
          return typeof l == "function" || l === Vh;
        } : function(l) {
          return typeof l == "function";
        };
      });
      var Oe = v((kd, Fi) => {
        var ki = ne(), Di = Ss(), Kh = Di.all;
        Fi.exports = Di.IS_HTMLDDA ? function(l) {
          return typeof l == "object" ? l !== null : ki(l) || l === Kh;
        } : function(l) {
          return typeof l == "object" ? l !== null : ki(l);
        };
      });
      var it = v((Dd, Li) => {
        var ws = le(), Wh = ne(), Gh = function(l) {
          return Wh(l) ? l : void 0;
        };
        Li.exports = function(l, h) {
          return arguments.length < 2 ? Gh(ws[l]) : ws[l] && ws[l][h];
        };
      });
      var Bi = v((Fd, Oi) => {
        var Jh = ue();
        Oi.exports = Jh({}.isPrototypeOf);
      });
      var _i = v((Ld, Mi) => {
        var Xh = it();
        Mi.exports = Xh("navigator", "userAgent") || "";
      });
      var zi = v((Od, Hi) => {
        var $i = le(), Is = _i(), Ri = $i.process, ji = $i.Deno, qi = Ri && Ri.versions || ji && ji.version, Ui = qi && qi.v8, ce, Dt;
        Ui && (ce = Ui.split("."), Dt = ce[0] > 0 && ce[0] < 4 ? 1 : +(ce[0] + ce[1]));
        !Dt && Is && (ce = Is.match(/Edge\/(\d+)/), (!ce || ce[1] >= 74) && (ce = Is.match(/Chrome\/(\d+)/), ce && (Dt = +ce[1])));
        Hi.exports = Dt;
      });
      var Ns = v((Bd, Ki) => {
        var Vi = zi(), Yh = he();
        Ki.exports = !!Object.getOwnPropertySymbols && !Yh(function() {
          var l = Symbol();
          return !String(l) || !(Object(l) instanceof Symbol) || !Symbol.sham && Vi && Vi < 41;
        });
      });
      var ks = v((Md, Wi) => {
        var Qh = Ns();
        Wi.exports = Qh && !Symbol.sham && typeof Symbol.iterator == "symbol";
      });
      var Ds = v((_d, Gi) => {
        var Zh = it(), eu = ne(), tu = Bi(), su = ks(), ru = Object;
        Gi.exports = su ? function(l) {
          return typeof l == "symbol";
        } : function(l) {
          var h = Zh("Symbol");
          return eu(h) && tu(h.prototype, ru(l));
        };
      });
      var Xi = v((Rd, Ji) => {
        var iu = String;
        Ji.exports = function(l) {
          try {
            return iu(l);
          } catch {
            return "Object";
          }
        };
      });
      var Ft = v((jd, Yi) => {
        var au = ne(), nu = Xi(), ou = TypeError;
        Yi.exports = function(l) {
          if (au(l))
            return l;
          throw ou(nu(l) + " is not a function");
        };
      });
      var Zi = v((qd, Qi) => {
        var lu = Ft(), hu = Es();
        Qi.exports = function(l, h) {
          var f = l[h];
          return hu(f) ? void 0 : lu(f);
        };
      });
      var ta = v((Ud, ea) => {
        var Fs = Nt(), Ls = ne(), Os = Oe(), uu = TypeError;
        ea.exports = function(l, h) {
          var f, d;
          if (h === "string" && Ls(f = l.toString) && !Os(d = Fs(f, l)) || Ls(f = l.valueOf) && !Os(d = Fs(f, l)) || h !== "string" && Ls(f = l.toString) && !Os(d = Fs(f, l)))
            return d;
          throw uu("Can't convert object to primitive value");
        };
      });
      var ra = v(($d, sa) => {
        sa.exports = false;
      });
      var Lt = v((Hd, aa) => {
        var ia = le(), cu = Object.defineProperty;
        aa.exports = function(l, h) {
          try {
            cu(ia, l, { value: h, configurable: true, writable: true });
          } catch {
            ia[l] = h;
          }
          return h;
        };
      });
      var Ot = v((zd, oa) => {
        var pu = le(), fu = Lt(), na = "__core-js_shared__", du = pu[na] || fu(na, {});
        oa.exports = du;
      });
      var Bs = v((Vd, ha) => {
        var mu = ra(), la = Ot();
        (ha.exports = function(l, h) {
          return la[l] || (la[l] = h !== void 0 ? h : {});
        })("versions", []).push({ version: "3.26.1", mode: mu ? "pure" : "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
      });
      var Ms = v((Kd, ua) => {
        var yu = Cs(), xu = Object;
        ua.exports = function(l) {
          return xu(yu(l));
        };
      });
      var Ie = v((Wd, ca) => {
        var gu = ue(), Pu = Ms(), Au = gu({}.hasOwnProperty);
        ca.exports = Object.hasOwn || function(h, f) {
          return Au(Pu(h), f);
        };
      });
      var _s = v((Gd, pa) => {
        var Tu = ue(), vu = 0, Eu = Math.random(), Cu = Tu(1 .toString);
        pa.exports = function(l) {
          return "Symbol(" + (l === void 0 ? "" : l) + ")_" + Cu(++vu + Eu, 36);
        };
      });
      var at = v((Jd, xa) => {
        var bu = le(), Su = Bs(), fa = Ie(), wu = _s(), da = Ns(), ya = ks(), Ke = Su("wks"), Be = bu.Symbol, ma = Be && Be.for, Iu = ya ? Be : Be && Be.withoutSetter || wu;
        xa.exports = function(l) {
          if (!fa(Ke, l) || !(da || typeof Ke[l] == "string")) {
            var h = "Symbol." + l;
            da && fa(Be, l) ? Ke[l] = Be[l] : ya && ma ? Ke[l] = ma(h) : Ke[l] = Iu(h);
          }
          return Ke[l];
        };
      });
      var Ta = v((Xd, Aa) => {
        var Nu = Nt(), ga = Oe(), Pa = Ds(), ku = Zi(), Du = ta(), Fu = at(), Lu = TypeError, Ou = Fu("toPrimitive");
        Aa.exports = function(l, h) {
          if (!ga(l) || Pa(l))
            return l;
          var f = ku(l, Ou), d;
          if (f) {
            if (h === void 0 && (h = "default"), d = Nu(f, l, h), !ga(d) || Pa(d))
              return d;
            throw Lu("Can't convert object to primitive value");
          }
          return h === void 0 && (h = "number"), Du(l, h);
        };
      });
      var Rs = v((Yd, va) => {
        var Bu = Ta(), Mu = Ds();
        va.exports = function(l) {
          var h = Bu(l, "string");
          return Mu(h) ? h : h + "";
        };
      });
      var ba = v((Qd, Ca) => {
        var _u = le(), Ea = Oe(), js = _u.document, Ru = Ea(js) && Ea(js.createElement);
        Ca.exports = function(l) {
          return Ru ? js.createElement(l) : {};
        };
      });
      var qs = v((Zd, Sa) => {
        var ju = ve(), qu = he(), Uu = ba();
        Sa.exports = !ju && !qu(function() {
          return Object.defineProperty(Uu("div"), "a", { get: function() {
            return 7;
          } }).a != 7;
        });
      });
      var Us = v((Ia) => {
        var $u = ve(), Hu = Nt(), zu = mi(), Vu = As(), Ku = kt(), Wu = Rs(), Gu = Ie(), Ju = qs(), wa = Object.getOwnPropertyDescriptor;
        Ia.f = $u ? wa : function(h, f) {
          if (h = Ku(h), f = Wu(f), Ju)
            try {
              return wa(h, f);
            } catch {
            }
          if (Gu(h, f))
            return Vu(!Hu(zu.f, h, f), h[f]);
        };
      });
      var ka = v((tm, Na) => {
        var Xu = ve(), Yu = he();
        Na.exports = Xu && Yu(function() {
          return Object.defineProperty(function() {
          }, "prototype", { value: 42, writable: false }).prototype != 42;
        });
      });
      var Bt = v((sm, Da) => {
        var Qu = Oe(), Zu = String, ec = TypeError;
        Da.exports = function(l) {
          if (Qu(l))
            return l;
          throw ec(Zu(l) + " is not an object");
        };
      });
      var nt = v((La) => {
        var tc = ve(), sc = qs(), rc = ka(), Mt = Bt(), Fa = Rs(), ic = TypeError, $s = Object.defineProperty, ac = Object.getOwnPropertyDescriptor, Hs = "enumerable", zs = "configurable", Vs = "writable";
        La.f = tc ? rc ? function(h, f, d) {
          if (Mt(h), f = Fa(f), Mt(d), typeof h == "function" && f === "prototype" && "value" in d && Vs in d && !d[Vs]) {
            var y = ac(h, f);
            y && y[Vs] && (h[f] = d.value, d = { configurable: zs in d ? d[zs] : y[zs], enumerable: Hs in d ? d[Hs] : y[Hs], writable: false });
          }
          return $s(h, f, d);
        } : $s : function(h, f, d) {
          if (Mt(h), f = Fa(f), Mt(d), sc)
            try {
              return $s(h, f, d);
            } catch {
            }
          if ("get" in d || "set" in d)
            throw ic("Accessors not supported");
          return "value" in d && (h[f] = d.value), h;
        };
      });
      var Ks = v((im, Oa) => {
        var nc = ve(), oc = nt(), lc = As();
        Oa.exports = nc ? function(l, h, f) {
          return oc.f(l, h, lc(1, f));
        } : function(l, h, f) {
          return l[h] = f, l;
        };
      });
      var _a = v((am, Ma) => {
        var Ws = ve(), hc = Ie(), Ba = Function.prototype, uc = Ws && Object.getOwnPropertyDescriptor, Gs = hc(Ba, "name"), cc = Gs && function() {
        }.name === "something", pc = Gs && (!Ws || Ws && uc(Ba, "name").configurable);
        Ma.exports = { EXISTS: Gs, PROPER: cc, CONFIGURABLE: pc };
      });
      var Xs = v((nm, Ra) => {
        var fc = ue(), dc = ne(), Js = Ot(), mc = fc(Function.toString);
        dc(Js.inspectSource) || (Js.inspectSource = function(l) {
          return mc(l);
        });
        Ra.exports = Js.inspectSource;
      });
      var Ua = v((om, qa) => {
        var yc = le(), xc = ne(), ja = yc.WeakMap;
        qa.exports = xc(ja) && /native code/.test(String(ja));
      });
      var za = v((lm, Ha) => {
        var gc = Bs(), Pc = _s(), $a = gc("keys");
        Ha.exports = function(l) {
          return $a[l] || ($a[l] = Pc(l));
        };
      });
      var Ys = v((hm, Va) => {
        Va.exports = {};
      });
      var Ja = v((um, Ga) => {
        var Ac = Ua(), Wa = le(), Tc = Oe(), vc = Ks(), Qs = Ie(), Zs = Ot(), Ec = za(), Cc = Ys(), Ka = "Object already initialized", er = Wa.TypeError, bc = Wa.WeakMap, _t, ot, Rt, Sc = function(l) {
          return Rt(l) ? ot(l) : _t(l, {});
        }, wc = function(l) {
          return function(h) {
            var f;
            if (!Tc(h) || (f = ot(h)).type !== l)
              throw er("Incompatible receiver, " + l + " required");
            return f;
          };
        };
        Ac || Zs.state ? (pe = Zs.state || (Zs.state = new bc()), pe.get = pe.get, pe.has = pe.has, pe.set = pe.set, _t = function(l, h) {
          if (pe.has(l))
            throw er(Ka);
          return h.facade = l, pe.set(l, h), h;
        }, ot = function(l) {
          return pe.get(l) || {};
        }, Rt = function(l) {
          return pe.has(l);
        }) : (Me = Ec("state"), Cc[Me] = true, _t = function(l, h) {
          if (Qs(l, Me))
            throw er(Ka);
          return h.facade = l, vc(l, Me, h), h;
        }, ot = function(l) {
          return Qs(l, Me) ? l[Me] : {};
        }, Rt = function(l) {
          return Qs(l, Me);
        });
        var pe, Me;
        Ga.exports = { set: _t, get: ot, has: Rt, enforce: Sc, getterFor: wc };
      });
      var sr = v((cm, Ya) => {
        var Ic = he(), Nc = ne(), jt = Ie(), tr = ve(), kc = _a().CONFIGURABLE, Dc = Xs(), Xa = Ja(), Fc = Xa.enforce, Lc = Xa.get, qt = Object.defineProperty, Oc = tr && !Ic(function() {
          return qt(function() {
          }, "length", { value: 8 }).length !== 8;
        }), Bc = String(String).split("String"), Mc = Ya.exports = function(l, h, f) {
          String(h).slice(0, 7) === "Symbol(" && (h = "[" + String(h).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), f && f.getter && (h = "get " + h), f && f.setter && (h = "set " + h), (!jt(l, "name") || kc && l.name !== h) && (tr ? qt(l, "name", { value: h, configurable: true }) : l.name = h), Oc && f && jt(f, "arity") && l.length !== f.arity && qt(l, "length", { value: f.arity });
          try {
            f && jt(f, "constructor") && f.constructor ? tr && qt(l, "prototype", { writable: false }) : l.prototype && (l.prototype = void 0);
          } catch {
          }
          var d = Fc(l);
          return jt(d, "source") || (d.source = Bc.join(typeof h == "string" ? h : "")), l;
        };
        Function.prototype.toString = Mc(function() {
          return Nc(this) && Lc(this).source || Dc(this);
        }, "toString");
      });
      var Za = v((pm, Qa) => {
        var _c = ne(), Rc = nt(), jc = sr(), qc = Lt();
        Qa.exports = function(l, h, f, d) {
          d || (d = {});
          var y = d.enumerable, P = d.name !== void 0 ? d.name : h;
          if (_c(f) && jc(f, P, d), d.global)
            y ? l[h] = f : qc(h, f);
          else {
            try {
              d.unsafe ? l[h] && (y = true) : delete l[h];
            } catch {
            }
            y ? l[h] = f : Rc.f(l, h, { value: f, enumerable: false, configurable: !d.nonConfigurable, writable: !d.nonWritable });
          }
          return l;
        };
      });
      var tn = v((fm, en) => {
        var Uc = Math.ceil, $c = Math.floor;
        en.exports = Math.trunc || function(h) {
          var f = +h;
          return (f > 0 ? $c : Uc)(f);
        };
      });
      var rr = v((dm, sn) => {
        var Hc = tn();
        sn.exports = function(l) {
          var h = +l;
          return h !== h || h === 0 ? 0 : Hc(h);
        };
      });
      var an = v((mm, rn) => {
        var zc = rr(), Vc = Math.max, Kc = Math.min;
        rn.exports = function(l, h) {
          var f = zc(l);
          return f < 0 ? Vc(f + h, 0) : Kc(f, h);
        };
      });
      var on = v((ym, nn) => {
        var Wc = rr(), Gc = Math.min;
        nn.exports = function(l) {
          return l > 0 ? Gc(Wc(l), 9007199254740991) : 0;
        };
      });
      var Ut = v((xm, ln) => {
        var Jc = on();
        ln.exports = function(l) {
          return Jc(l.length);
        };
      });
      var cn = v((gm, un) => {
        var Xc = kt(), Yc = an(), Qc = Ut(), hn = function(l) {
          return function(h, f, d) {
            var y = Xc(h), P = Qc(y), g = Yc(d, P), T;
            if (l && f != f) {
              for (; P > g; )
                if (T = y[g++], T != T)
                  return true;
            } else
              for (; P > g; g++)
                if ((l || g in y) && y[g] === f)
                  return l || g || 0;
            return !l && -1;
          };
        };
        un.exports = { includes: hn(true), indexOf: hn(false) };
      });
      var dn = v((Pm, fn) => {
        var Zc = ue(), ir = Ie(), ep = kt(), tp = cn().indexOf, sp = Ys(), pn = Zc([].push);
        fn.exports = function(l, h) {
          var f = ep(l), d = 0, y = [], P;
          for (P in f)
            !ir(sp, P) && ir(f, P) && pn(y, P);
          for (; h.length > d; )
            ir(f, P = h[d++]) && (~tp(y, P) || pn(y, P));
          return y;
        };
      });
      var yn = v((Am, mn) => {
        mn.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      });
      var gn = v((xn) => {
        var rp = dn(), ip = yn(), ap = ip.concat("length", "prototype");
        xn.f = Object.getOwnPropertyNames || function(h) {
          return rp(h, ap);
        };
      });
      var An = v((Pn) => {
        Pn.f = Object.getOwnPropertySymbols;
      });
      var vn = v((Em, Tn) => {
        var np = it(), op = ue(), lp = gn(), hp = An(), up = Bt(), cp = op([].concat);
        Tn.exports = np("Reflect", "ownKeys") || function(h) {
          var f = lp.f(up(h)), d = hp.f;
          return d ? cp(f, d(h)) : f;
        };
      });
      var bn = v((Cm, Cn) => {
        var En = Ie(), pp = vn(), fp = Us(), dp = nt();
        Cn.exports = function(l, h, f) {
          for (var d = pp(h), y = dp.f, P = fp.f, g = 0; g < d.length; g++) {
            var T = d[g];
            !En(l, T) && !(f && En(f, T)) && y(l, T, P(h, T));
          }
        };
      });
      var wn = v((bm, Sn) => {
        var mp = he(), yp = ne(), xp = /#|\.prototype\./, lt = function(l, h) {
          var f = Pp[gp(l)];
          return f == Tp ? true : f == Ap ? false : yp(h) ? mp(h) : !!h;
        }, gp = lt.normalize = function(l) {
          return String(l).replace(xp, ".").toLowerCase();
        }, Pp = lt.data = {}, Ap = lt.NATIVE = "N", Tp = lt.POLYFILL = "P";
        Sn.exports = lt;
      });
      var nr = v((Sm, In) => {
        var ar = le(), vp = Us().f, Ep = Ks(), Cp = Za(), bp = Lt(), Sp = bn(), wp = wn();
        In.exports = function(l, h) {
          var f = l.target, d = l.global, y = l.stat, P, g, T, S, F, I;
          if (d ? g = ar : y ? g = ar[f] || bp(f, {}) : g = (ar[f] || {}).prototype, g)
            for (T in h) {
              if (F = h[T], l.dontCallGetSet ? (I = vp(g, T), S = I && I.value) : S = g[T], P = wp(d ? T : f + (y ? "." : "#") + T, l.forced), !P && S !== void 0) {
                if (typeof F == typeof S)
                  continue;
                Sp(F, S);
              }
              (l.sham || S && S.sham) && Ep(F, "sham", true), Cp(g, T, F, l);
            }
        };
      });
      var Nn = v(() => {
        var Ip = nr(), or = le();
        Ip({ global: true, forced: or.globalThis !== or }, { globalThis: or });
      });
      var kn = v(() => {
        Nn();
      });
      var Ln = v((Dm, Fn) => {
        var Dn = sr(), Np = nt();
        Fn.exports = function(l, h, f) {
          return f.get && Dn(f.get, h, { getter: true }), f.set && Dn(f.set, h, { setter: true }), Np.f(l, h, f);
        };
      });
      var Bn = v((Fm, On) => {
        "use strict";
        var kp = Bt();
        On.exports = function() {
          var l = kp(this), h = "";
          return l.hasIndices && (h += "d"), l.global && (h += "g"), l.ignoreCase && (h += "i"), l.multiline && (h += "m"), l.dotAll && (h += "s"), l.unicode && (h += "u"), l.unicodeSets && (h += "v"), l.sticky && (h += "y"), h;
        };
      });
      var Rn = v(() => {
        var Dp = le(), Fp = ve(), Lp = Ln(), Op = Bn(), Bp = he(), Mn = Dp.RegExp, _n = Mn.prototype, Mp = Fp && Bp(function() {
          var l = true;
          try {
            Mn(".", "d");
          } catch {
            l = false;
          }
          var h = {}, f = "", d = l ? "dgimsy" : "gimsy", y = function(S, F) {
            Object.defineProperty(h, S, { get: function() {
              return f += F, true;
            } });
          }, P = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
          l && (P.hasIndices = "d");
          for (var g in P)
            y(g, P[g]);
          var T = Object.getOwnPropertyDescriptor(_n, "flags").get.call(h);
          return T !== d || f !== d;
        });
        Mp && Lp(_n, "flags", { configurable: true, get: Op });
      });
      var lr = v((Bm, jn) => {
        var _p = rt();
        jn.exports = Array.isArray || function(h) {
          return _p(h) == "Array";
        };
      });
      var Un = v((Mm, qn) => {
        var Rp = TypeError, jp = 9007199254740991;
        qn.exports = function(l) {
          if (l > jp)
            throw Rp("Maximum allowed index exceeded");
          return l;
        };
      });
      var Hn = v((_m, $n) => {
        var qp = rt(), Up = ue();
        $n.exports = function(l) {
          if (qp(l) === "Function")
            return Up(l);
        };
      });
      var Kn = v((Rm, Vn) => {
        var zn = Hn(), $p = Ft(), Hp = wt(), zp = zn(zn.bind);
        Vn.exports = function(l, h) {
          return $p(l), h === void 0 ? l : Hp ? zp(l, h) : function() {
            return l.apply(h, arguments);
          };
        };
      });
      var Jn = v((jm, Gn) => {
        "use strict";
        var Vp = lr(), Kp = Ut(), Wp = Un(), Gp = Kn(), Wn = function(l, h, f, d, y, P, g, T) {
          for (var S = y, F = 0, I = g ? Gp(g, T) : false, C, L; F < d; )
            F in f && (C = I ? I(f[F], F, h) : f[F], P > 0 && Vp(C) ? (L = Kp(C), S = Wn(l, h, C, L, S, P - 1) - 1) : (Wp(S + 1), l[S] = C), S++), F++;
          return S;
        };
        Gn.exports = Wn;
      });
      var Qn = v((qm, Yn) => {
        var Jp = at(), Xp = Jp("toStringTag"), Xn = {};
        Xn[Xp] = "z";
        Yn.exports = String(Xn) === "[object z]";
      });
      var eo = v((Um, Zn) => {
        var Yp = Qn(), Qp = ne(), $t = rt(), Zp = at(), ef = Zp("toStringTag"), tf = Object, sf = $t(function() {
          return arguments;
        }()) == "Arguments", rf = function(l, h) {
          try {
            return l[h];
          } catch {
          }
        };
        Zn.exports = Yp ? $t : function(l) {
          var h, f, d;
          return l === void 0 ? "Undefined" : l === null ? "Null" : typeof (f = rf(h = tf(l), ef)) == "string" ? f : sf ? $t(h) : (d = $t(h)) == "Object" && Qp(h.callee) ? "Arguments" : d;
        };
      });
      var no = v(($m, ao) => {
        var af = ue(), nf = he(), to = ne(), of = eo(), lf = it(), hf = Xs(), so = function() {
        }, uf = [], ro = lf("Reflect", "construct"), hr = /^\s*(?:class|function)\b/, cf = af(hr.exec), pf = !hr.exec(so), ht = function(h) {
          if (!to(h))
            return false;
          try {
            return ro(so, uf, h), true;
          } catch {
            return false;
          }
        }, io = function(h) {
          if (!to(h))
            return false;
          switch (of(h)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return false;
          }
          try {
            return pf || !!cf(hr, hf(h));
          } catch {
            return true;
          }
        };
        io.sham = true;
        ao.exports = !ro || nf(function() {
          var l;
          return ht(ht.call) || !ht(Object) || !ht(function() {
            l = true;
          }) || l;
        }) ? io : ht;
      });
      var uo = v((Hm, ho) => {
        var oo = lr(), ff = no(), df = Oe(), mf = at(), yf = mf("species"), lo = Array;
        ho.exports = function(l) {
          var h;
          return oo(l) && (h = l.constructor, ff(h) && (h === lo || oo(h.prototype)) ? h = void 0 : df(h) && (h = h[yf], h === null && (h = void 0))), h === void 0 ? lo : h;
        };
      });
      var po = v((zm, co) => {
        var xf = uo();
        co.exports = function(l, h) {
          return new (xf(l))(h === 0 ? 0 : h);
        };
      });
      var fo = v(() => {
        "use strict";
        var gf = nr(), Pf = Jn(), Af = Ft(), Tf = Ms(), vf = Ut(), Ef = po();
        gf({ target: "Array", proto: true }, { flatMap: function(h) {
          var f = Tf(this), d = vf(f), y;
          return Af(h), y = Ef(f, 0), y.length = Pf(y, f, f, d, 0, 1, h, arguments.length > 1 ? arguments[1] : void 0), y;
        } });
      });
      var fd = v((Zm, Ho) => {
        kn();
        Rn();
        fo();
        var fr = Object.defineProperty, Cf = Object.getOwnPropertyDescriptor, dr = Object.getOwnPropertyNames, bf = Object.prototype.hasOwnProperty, Ao = (l, h) => function() {
          return l && (h = (0, l[dr(l)[0]])(l = 0)), h;
        }, K = (l, h) => function() {
          return h || (0, l[dr(l)[0]])((h = { exports: {} }).exports, h), h.exports;
        }, Sf = (l, h) => {
          for (var f in h)
            fr(l, f, { get: h[f], enumerable: true });
        }, wf = (l, h, f, d) => {
          if (h && typeof h == "object" || typeof h == "function")
            for (let y of dr(h))
              !bf.call(l, y) && y !== f && fr(l, y, { get: () => h[y], enumerable: !(d = Cf(h, y)) || d.enumerable });
          return l;
        }, If = (l) => wf(fr({}, "__esModule", { value: true }), l), V = Ao({ "<define:process>"() {
        } }), Nf = K({ "src/utils/try-combinations.js"(l, h) {
          "use strict";
          V();
          function f() {
            let d;
            for (var y = arguments.length, P = new Array(y), g = 0; g < y; g++)
              P[g] = arguments[g];
            for (let [T, S] of P.entries())
              try {
                return { result: S() };
              } catch (F) {
                T === 0 && (d = F);
              }
            return { error: d };
          }
          h.exports = f;
        } }), To = K({ "src/language-js/utils/get-shebang.js"(l, h) {
          "use strict";
          V();
          function f(d) {
            if (!d.startsWith("#!"))
              return "";
            let y = d.indexOf(`
`);
            return y === -1 ? d : d.slice(0, y);
          }
          h.exports = f;
        } }), kf = K({ "src/utils/text/skip-inline-comment.js"(l, h) {
          "use strict";
          V();
          function f(d, y) {
            if (y === false)
              return false;
            if (d.charAt(y) === "/" && d.charAt(y + 1) === "*") {
              for (let P = y + 2; P < d.length; ++P)
                if (d.charAt(P) === "*" && d.charAt(P + 1) === "/")
                  return P + 2;
            }
            return y;
          }
          h.exports = f;
        } }), Df = K({ "src/utils/text/skip-newline.js"(l, h) {
          "use strict";
          V();
          function f(d, y, P) {
            let g = P && P.backwards;
            if (y === false)
              return false;
            let T = d.charAt(y);
            if (g) {
              if (d.charAt(y - 1) === "\r" && T === `
`)
                return y - 2;
              if (T === `
` || T === "\r" || T === "\u2028" || T === "\u2029")
                return y - 1;
            } else {
              if (T === "\r" && d.charAt(y + 1) === `
`)
                return y + 2;
              if (T === `
` || T === "\r" || T === "\u2028" || T === "\u2029")
                return y + 1;
            }
            return y;
          }
          h.exports = f;
        } }), vo = K({ "src/utils/text/skip.js"(l, h) {
          "use strict";
          V();
          function f(T) {
            return (S, F, I) => {
              let C = I && I.backwards;
              if (F === false)
                return false;
              let { length: L } = S, j = F;
              for (; j >= 0 && j < L; ) {
                let k = S.charAt(j);
                if (T instanceof RegExp) {
                  if (!T.test(k))
                    return j;
                } else if (!T.includes(k))
                  return j;
                C ? j-- : j++;
              }
              return j === -1 || j === L ? j : false;
            };
          }
          var d = f(/\s/), y = f(" 	"), P = f(",; 	"), g = f(/[^\n\r]/);
          h.exports = { skipWhitespace: d, skipSpaces: y, skipToLineEnd: P, skipEverythingButNewLine: g };
        } }), Ff = K({ "src/utils/text/skip-trailing-comment.js"(l, h) {
          "use strict";
          V();
          var { skipEverythingButNewLine: f } = vo();
          function d(y, P) {
            return P === false ? false : y.charAt(P) === "/" && y.charAt(P + 1) === "/" ? f(y, P) : P;
          }
          h.exports = d;
        } }), Lf = K({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(l, h) {
          "use strict";
          V();
          var f = kf(), d = Df(), y = Ff(), { skipSpaces: P } = vo();
          function g(T, S) {
            let F = null, I = S;
            for (; I !== F; )
              F = I, I = P(T, I), I = f(T, I), I = y(T, I), I = d(T, I);
            return I;
          }
          h.exports = g;
        } }), Eo = {};
        Sf(Eo, { EOL: () => pr, arch: () => Of, cpus: () => ko, default: () => Bo, endianness: () => Co, freemem: () => Io, getNetworkInterfaces: () => Oo, hostname: () => bo, loadavg: () => So, networkInterfaces: () => Lo, platform: () => Bf, release: () => Fo, tmpDir: () => ur, tmpdir: () => cr, totalmem: () => No, type: () => Do, uptime: () => wo });
        function Co() {
          if (typeof Ht > "u") {
            var l = new ArrayBuffer(2), h = new Uint8Array(l), f = new Uint16Array(l);
            if (h[0] = 1, h[1] = 2, f[0] === 258)
              Ht = "BE";
            else if (f[0] === 513)
              Ht = "LE";
            else
              throw new Error("unable to figure out endianess");
          }
          return Ht;
        }
        function bo() {
          return typeof globalThis.location < "u" ? globalThis.location.hostname : "";
        }
        function So() {
          return [];
        }
        function wo() {
          return 0;
        }
        function Io() {
          return Number.MAX_VALUE;
        }
        function No() {
          return Number.MAX_VALUE;
        }
        function ko() {
          return [];
        }
        function Do() {
          return "Browser";
        }
        function Fo() {
          return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : "";
        }
        function Lo() {
        }
        function Oo() {
        }
        function Of() {
          return "javascript";
        }
        function Bf() {
          return "browser";
        }
        function ur() {
          return "/tmp";
        }
        var Ht, cr, pr, Bo, Mf = Ao({ "node-modules-polyfills:os"() {
          V(), cr = ur, pr = `
`, Bo = { EOL: pr, tmpdir: cr, tmpDir: ur, networkInterfaces: Lo, getNetworkInterfaces: Oo, release: Fo, type: Do, cpus: ko, totalmem: No, freemem: Io, uptime: wo, loadavg: So, hostname: bo, endianness: Co };
        } }), _f = K({ "node-modules-polyfills-commonjs:os"(l, h) {
          V();
          var f = (Mf(), If(Eo));
          if (f && f.default) {
            h.exports = f.default;
            for (let d in f)
              h.exports[d] = f[d];
          } else
            f && (h.exports = f);
        } }), Rf = K({ "node_modules/detect-newline/index.js"(l, h) {
          "use strict";
          V();
          var f = (d) => {
            if (typeof d != "string")
              throw new TypeError("Expected a string");
            let y = d.match(/(?:\r?\n)/g) || [];
            if (y.length === 0)
              return;
            let P = y.filter((T) => T === `\r
`).length, g = y.length - P;
            return P > g ? `\r
` : `
`;
          };
          h.exports = f, h.exports.graceful = (d) => typeof d == "string" && f(d) || `
`;
        } }), jf = K({ "node_modules/jest-docblock/build/index.js"(l) {
          "use strict";
          V(), Object.defineProperty(l, "__esModule", { value: true }), l.extract = j, l.parse = H, l.parseWithComments = W, l.print = B, l.strip = k;
          function h() {
            let u = _f();
            return h = function() {
              return u;
            }, u;
          }
          function f() {
            let u = d(Rf());
            return f = function() {
              return u;
            }, u;
          }
          function d(u) {
            return u && u.__esModule ? u : { default: u };
          }
          var y = /\*\/$/, P = /^\/\*\*?/, g = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, T = /(^|\s+)\/\/([^\r\n]*)/g, S = /^(\r?\n)+/, F = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, I = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, C = /(\r?\n|^) *\* ?/g, L = [];
          function j(u) {
            let G = u.match(g);
            return G ? G[0].trimLeft() : "";
          }
          function k(u) {
            let G = u.match(g);
            return G && G[0] ? u.substring(G[0].length) : u;
          }
          function H(u) {
            return W(u).pragmas;
          }
          function W(u) {
            let G = (0, f().default)(u) || h().EOL;
            u = u.replace(P, "").replace(y, "").replace(C, "$1");
            let oe = "";
            for (; oe !== u; )
              oe = u, u = u.replace(F, `${G}$1 $2${G}`);
            u = u.replace(S, "").trimRight();
            let X = /* @__PURE__ */ Object.create(null), _e = u.replace(I, "").replace(S, "").trimRight(), Z;
            for (; Z = I.exec(u); ) {
              let $ = Z[2].replace(T, "");
              typeof X[Z[1]] == "string" || Array.isArray(X[Z[1]]) ? X[Z[1]] = L.concat(X[Z[1]], $) : X[Z[1]] = $;
            }
            return { comments: _e, pragmas: X };
          }
          function B(u) {
            let { comments: G = "", pragmas: oe = {} } = u, X = (0, f().default)(G) || h().EOL, _e = "/**", Z = " *", $ = " */", M = Object.keys(oe), E = M.map((ee) => _(ee, oe[ee])).reduce((ee, fe) => ee.concat(fe), []).map((ee) => `${Z} ${ee}${X}`).join("");
            if (!G) {
              if (M.length === 0)
                return "";
              if (M.length === 1 && !Array.isArray(oe[M[0]])) {
                let ee = oe[M[0]];
                return `${_e} ${_(M[0], ee)[0]}${$}`;
              }
            }
            let Je = G.split(X).map((ee) => `${Z} ${ee}`).join(X) + X;
            return _e + X + (G ? Je : "") + (G && M.length ? Z + X : "") + E + $;
          }
          function _(u, G) {
            return L.concat(G).map((oe) => `@${u} ${oe}`.trim());
          }
        } }), qf = K({ "src/common/end-of-line.js"(l, h) {
          "use strict";
          V();
          function f(g) {
            let T = g.indexOf("\r");
            return T >= 0 ? g.charAt(T + 1) === `
` ? "crlf" : "cr" : "lf";
          }
          function d(g) {
            switch (g) {
              case "cr":
                return "\r";
              case "crlf":
                return `\r
`;
              default:
                return `
`;
            }
          }
          function y(g, T) {
            let S;
            switch (T) {
              case `
`:
                S = /\n/g;
                break;
              case "\r":
                S = /\r/g;
                break;
              case `\r
`:
                S = /\r\n/g;
                break;
              default:
                throw new Error(`Unexpected "eol" ${JSON.stringify(T)}.`);
            }
            let F = g.match(S);
            return F ? F.length : 0;
          }
          function P(g) {
            return g.replace(/\r\n?/g, `
`);
          }
          h.exports = { guessEndOfLine: f, convertEndOfLineToChars: d, countEndOfLineChars: y, normalizeEndOfLine: P };
        } }), Uf = K({ "src/language-js/pragma.js"(l, h) {
          "use strict";
          V();
          var { parseWithComments: f, strip: d, extract: y, print: P } = jf(), { normalizeEndOfLine: g } = qf(), T = To();
          function S(C) {
            let L = T(C);
            L && (C = C.slice(L.length + 1));
            let j = y(C), { pragmas: k, comments: H } = f(j);
            return { shebang: L, text: C, pragmas: k, comments: H };
          }
          function F(C) {
            let L = Object.keys(S(C).pragmas);
            return L.includes("prettier") || L.includes("format");
          }
          function I(C) {
            let { shebang: L, text: j, pragmas: k, comments: H } = S(C), W = d(j), B = P({ pragmas: Object.assign({ format: "" }, k), comments: H.trimStart() });
            return (L ? `${L}
` : "") + g(B) + (W.startsWith(`
`) ? `
` : `

`) + W;
          }
          h.exports = { hasPragma: F, insertPragma: I };
        } }), mr = K({ "src/utils/is-non-empty-array.js"(l, h) {
          "use strict";
          V();
          function f(d) {
            return Array.isArray(d) && d.length > 0;
          }
          h.exports = f;
        } }), Mo = K({ "src/language-js/loc.js"(l, h) {
          "use strict";
          V();
          var f = mr();
          function d(S) {
            var F, I;
            let C = S.range ? S.range[0] : S.start, L = (F = (I = S.declaration) === null || I === void 0 ? void 0 : I.decorators) !== null && F !== void 0 ? F : S.decorators;
            return f(L) ? Math.min(d(L[0]), C) : C;
          }
          function y(S) {
            return S.range ? S.range[1] : S.end;
          }
          function P(S, F) {
            let I = d(S);
            return Number.isInteger(I) && I === d(F);
          }
          function g(S, F) {
            let I = y(S);
            return Number.isInteger(I) && I === y(F);
          }
          function T(S, F) {
            return P(S, F) && g(S, F);
          }
          h.exports = { locStart: d, locEnd: y, hasSameLocStart: P, hasSameLoc: T };
        } }), _o = K({ "src/language-js/parse/utils/create-parser.js"(l, h) {
          "use strict";
          V();
          var { hasPragma: f } = Uf(), { locStart: d, locEnd: y } = Mo();
          function P(g) {
            return g = typeof g == "function" ? { parse: g } : g, Object.assign({ astFormat: "estree", hasPragma: f, locStart: d, locEnd: y }, g);
          }
          h.exports = P;
        } }), yr = K({ "src/common/parser-create-error.js"(l, h) {
          "use strict";
          V();
          function f(d, y) {
            let P = new SyntaxError(d + " (" + y.start.line + ":" + y.start.column + ")");
            return P.loc = y, P;
          }
          h.exports = f;
        } }), Ro = K({ "src/language-js/parse/utils/create-babel-parse-error.js"(l, h) {
          "use strict";
          V();
          var f = yr();
          function d(y) {
            let { message: P, loc: g } = y;
            return f(P.replace(/ \(.*\)/, ""), { start: { line: g ? g.line : 0, column: g ? g.column + 1 : 0 } });
          }
          h.exports = d;
        } }), $f = K({ "src/language-js/utils/is-ts-keyword-type.js"(l, h) {
          "use strict";
          V();
          function f(d) {
            let { type: y } = d;
            return y.startsWith("TS") && y.endsWith("Keyword");
          }
          h.exports = f;
        } }), Hf = K({ "src/language-js/utils/is-block-comment.js"(l, h) {
          "use strict";
          V();
          var f = /* @__PURE__ */ new Set(["Block", "CommentBlock", "MultiLine"]), d = (y) => f.has(y == null ? void 0 : y.type);
          h.exports = d;
        } }), zf = K({ "src/language-js/utils/is-type-cast-comment.js"(l, h) {
          "use strict";
          V();
          var f = Hf();
          function d(y) {
            return f(y) && y.value[0] === "*" && /@(?:type|satisfies)\b/.test(y.value);
          }
          h.exports = d;
        } }), Vf = K({ "src/utils/get-last.js"(l, h) {
          "use strict";
          V();
          var f = (d) => d[d.length - 1];
          h.exports = f;
        } }), jo = K({ "src/language-js/parse/postprocess/visit-node.js"(l, h) {
          "use strict";
          V();
          function f(d, y) {
            if (Array.isArray(d)) {
              for (let P = 0; P < d.length; P++)
                d[P] = f(d[P], y);
              return d;
            }
            if (d && typeof d == "object" && typeof d.type == "string") {
              let P = Object.keys(d);
              for (let g = 0; g < P.length; g++)
                d[P[g]] = f(d[P[g]], y);
              return y(d) || d;
            }
            return d;
          }
          h.exports = f;
        } }), qo = K({ "src/language-js/parse/postprocess/throw-syntax-error.js"(l, h) {
          "use strict";
          V();
          var f = yr();
          function d(y, P) {
            let { start: g, end: T } = y.loc;
            throw f(P, { start: { line: g.line, column: g.column + 1 }, end: { line: T.line, column: T.column + 1 } });
          }
          h.exports = d;
        } }), Kf = K({ "src/language-js/parse/postprocess/typescript.js"(l, h) {
          "use strict";
          V();
          var f = mr(), d = jo(), y = qo(), P = { AbstractKeyword: 126, SourceFile: 308, PropertyDeclaration: 169 };
          function g(I) {
            for (; I && I.kind !== P.SourceFile; )
              I = I.parent;
            return I;
          }
          function T(I) {
            let { illegalDecorators: C } = I;
            if (!f(C))
              return;
            let [{ expression: L }] = C, j = g(L), [k, H] = [L.pos, L.end].map((W) => {
              let { line: B, character: _ } = j.getLineAndCharacterOfPosition(W);
              return { line: B + 1, column: _ };
            });
            y({ loc: { start: k, end: H } }, "Decorators are not valid here.");
          }
          function S(I, C) {
            I.kind !== P.PropertyDeclaration || I.modifiers && !I.modifiers.some((L) => L.kind === P.AbstractKeyword) || I.initializer && C.value === null && y(C, "Abstract property cannot have an initializer");
          }
          function F(I, C) {
            let { esTreeNodeToTSNodeMap: L, tsNodeToESTreeNodeMap: j } = C.tsParseResult;
            d(I, (k) => {
              let H = L.get(k);
              if (!H)
                return;
              let W = j.get(H);
              W === k && (T(H), S(H, W));
            });
          }
          h.exports = { throwErrorForInvalidNodes: F };
        } }), Wf = K({ "src/language-js/parse/postprocess/index.js"(l, h) {
          "use strict";
          V();
          var { locStart: f, locEnd: d } = Mo(), y = $f(), P = zf(), g = Vf(), T = jo(), { throwErrorForInvalidNodes: S } = Kf(), F = qo();
          function I(k, H) {
            if (H.parser === "typescript" && /@|abstract/.test(H.originalText) && S(k, H), H.parser !== "typescript" && H.parser !== "flow" && H.parser !== "acorn" && H.parser !== "espree" && H.parser !== "meriyah") {
              let B = /* @__PURE__ */ new Set();
              k = T(k, (_) => {
                _.leadingComments && _.leadingComments.some(P) && B.add(f(_));
              }), k = T(k, (_) => {
                if (_.type === "ParenthesizedExpression") {
                  let { expression: u } = _;
                  if (u.type === "TypeCastExpression")
                    return u.range = _.range, u;
                  let G = f(_);
                  if (!B.has(G))
                    return u.extra = Object.assign(Object.assign({}, u.extra), {}, { parenthesized: true }), u;
                }
              });
            }
            return k = T(k, (B) => {
              switch (B.type) {
                case "ChainExpression":
                  return C(B.expression);
                case "LogicalExpression": {
                  if (L(B))
                    return j(B);
                  break;
                }
                case "VariableDeclaration": {
                  let _ = g(B.declarations);
                  _ && _.init && W(B, _);
                  break;
                }
                case "TSParenthesizedType":
                  return y(B.typeAnnotation) || B.typeAnnotation.type === "TSThisType" || (B.typeAnnotation.range = [f(B), d(B)]), B.typeAnnotation;
                case "TSTypeParameter":
                  if (typeof B.name == "string") {
                    let _ = f(B);
                    B.name = { type: "Identifier", name: B.name, range: [_, _ + B.name.length] };
                  }
                  break;
                case "ObjectExpression":
                  if (H.parser === "typescript") {
                    let _ = B.properties.find((u) => u.type === "Property" && u.value.type === "TSEmptyBodyFunctionExpression");
                    _ && F(_.value, "Unexpected token.");
                  }
                  break;
                case "SequenceExpression": {
                  let _ = g(B.expressions);
                  B.range = [f(B), Math.min(d(_), d(B))];
                  break;
                }
                case "TopicReference":
                  H.__isUsingHackPipeline = true;
                  break;
                case "ExportAllDeclaration": {
                  let { exported: _ } = B;
                  if (H.parser === "meriyah" && _ && _.type === "Identifier") {
                    let u = H.originalText.slice(f(_), d(_));
                    (u.startsWith('"') || u.startsWith("'")) && (B.exported = Object.assign(Object.assign({}, B.exported), {}, { type: "Literal", value: B.exported.name, raw: u }));
                  }
                  break;
                }
                case "PropertyDefinition":
                  if (H.parser === "meriyah" && B.static && !B.computed && !B.key) {
                    let _ = "static", u = f(B);
                    Object.assign(B, { static: false, key: { type: "Identifier", name: _, range: [u, u + _.length] } });
                  }
                  break;
              }
            }), k;
            function W(B, _) {
              H.originalText[d(_)] !== ";" && (B.range = [f(B), d(_)]);
            }
          }
          function C(k) {
            switch (k.type) {
              case "CallExpression":
                k.type = "OptionalCallExpression", k.callee = C(k.callee);
                break;
              case "MemberExpression":
                k.type = "OptionalMemberExpression", k.object = C(k.object);
                break;
              case "TSNonNullExpression":
                k.expression = C(k.expression);
                break;
            }
            return k;
          }
          function L(k) {
            return k.type === "LogicalExpression" && k.right.type === "LogicalExpression" && k.operator === k.right.operator;
          }
          function j(k) {
            return L(k) ? j({ type: "LogicalExpression", operator: k.operator, left: j({ type: "LogicalExpression", operator: k.operator, left: k.left, right: k.right.left, range: [f(k.left), d(k.right.left)] }), right: k.right.right, range: [f(k), d(k)] }) : k;
          }
          h.exports = I;
        } }), Uo = K({ "node_modules/@babel/parser/lib/index.js"(l) {
          "use strict";
          V(), Object.defineProperty(l, "__esModule", { value: true });
          function h(t, r) {
            if (t == null)
              return {};
            var e = {}, s = Object.keys(t), i, a;
            for (a = 0; a < s.length; a++)
              i = s[a], !(r.indexOf(i) >= 0) && (e[i] = t[i]);
            return e;
          }
          var f = class {
            constructor(t, r, e) {
              this.line = void 0, this.column = void 0, this.index = void 0, this.line = t, this.column = r, this.index = e;
            }
          }, d = class {
            constructor(t, r) {
              this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = t, this.end = r;
            }
          };
          function y(t, r) {
            let { line: e, column: s, index: i } = t;
            return new f(e, s + r, i + r);
          }
          var P = { SyntaxError: "BABEL_PARSER_SYNTAX_ERROR", SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED" }, g = function(t) {
            let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t.length - 1;
            return { get() {
              return t.reduce((e, s) => e[s], this);
            }, set(e) {
              t.reduce((s, i, a) => a === r ? s[i] = e : s[i], this);
            } };
          }, T = (t, r, e) => Object.keys(e).map((s) => [s, e[s]]).filter((s) => {
            let [, i] = s;
            return !!i;
          }).map((s) => {
            let [i, a] = s;
            return [i, typeof a == "function" ? { value: a, enumerable: false } : typeof a.reflect == "string" ? Object.assign({}, a, g(a.reflect.split("."))) : a];
          }).reduce((s, i) => {
            let [a, n] = i;
            return Object.defineProperty(s, a, Object.assign({ configurable: true }, n));
          }, Object.assign(new t(), r)), S = { ImportMetaOutsideModule: { message: `import.meta may appear only with 'sourceType: "module"'`, code: P.SourceTypeModuleError }, ImportOutsideModule: { message: `'import' and 'export' may appear only with 'sourceType: "module"'`, code: P.SourceTypeModuleError } }, F = { ArrayPattern: "array destructuring pattern", AssignmentExpression: "assignment expression", AssignmentPattern: "assignment expression", ArrowFunctionExpression: "arrow function expression", ConditionalExpression: "conditional expression", CatchClause: "catch clause", ForOfStatement: "for-of statement", ForInStatement: "for-in statement", ForStatement: "for-loop", FormalParameters: "function parameter list", Identifier: "identifier", ImportSpecifier: "import specifier", ImportDefaultSpecifier: "import default specifier", ImportNamespaceSpecifier: "import namespace specifier", ObjectPattern: "object destructuring pattern", ParenthesizedExpression: "parenthesized expression", RestElement: "rest element", UpdateExpression: { true: "prefix operation", false: "postfix operation" }, VariableDeclarator: "variable declaration", YieldExpression: "yield expression" }, I = (t) => {
            let { type: r, prefix: e } = t;
            return r === "UpdateExpression" ? F.UpdateExpression[String(e)] : F[r];
          }, C = { AccessorIsGenerator: (t) => {
            let { kind: r } = t;
            return `A ${r}ter cannot be a generator.`;
          }, ArgumentsInClass: "'arguments' is only allowed in functions and class methods.", AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.", AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.", AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.", AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.", AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.", AwaitNotInAsyncFunction: "'await' is only allowed within async functions.", BadGetterArity: "A 'get' accessor must not have any formal parameters.", BadSetterArity: "A 'set' accessor must have exactly one formal parameter.", BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.", ConstructorClassField: "Classes may not have a field named 'constructor'.", ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.", ConstructorIsAccessor: "Class constructor may not be an accessor.", ConstructorIsAsync: "Constructor can't be an async function.", ConstructorIsGenerator: "Constructor can't be a generator.", DeclarationMissingInitializer: (t) => {
            let { kind: r } = t;
            return `Missing initializer in ${r} declaration.`;
          }, DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.", DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax.", DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?", DecoratorExportClass: "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.", DecoratorSemicolon: "Decorators must not be followed by a semicolon.", DecoratorStaticBlock: "Decorators can't be used with a static block.", DeletePrivateField: "Deleting a private field is not allowed.", DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.", DuplicateConstructor: "Duplicate constructor in the same class.", DuplicateDefaultExport: "Only one default export allowed per module.", DuplicateExport: (t) => {
            let { exportName: r } = t;
            return `\`${r}\` has already been exported. Exported identifiers must be unique.`;
          }, DuplicateProto: "Redefinition of __proto__ property.", DuplicateRegExpFlags: "Duplicate regular expression flag.", ElementAfterRest: "Rest element must be last element.", EscapedCharNotAnIdentifier: "Invalid Unicode escape.", ExportBindingIsString: (t) => {
            let { localName: r, exportName: e } = t;
            return `A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${r}' as '${e}' } from 'some-module'\`?`;
          }, ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.", ForInOfLoopInitializer: (t) => {
            let { type: r } = t;
            return `'${r === "ForInStatement" ? "for-in" : "for-of"}' loop variable declaration may not have an initializer.`;
          }, ForInUsing: "For-in loop may not start with 'using' declaration.", ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.", ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.", GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.", IllegalBreakContinue: (t) => {
            let { type: r } = t;
            return `Unsyntactic ${r === "BreakStatement" ? "break" : "continue"}.`;
          }, IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.", IllegalReturn: "'return' outside of function.", ImportBindingIsString: (t) => {
            let { importName: r } = t;
            return `A string literal cannot be used as an imported binding.
- Did you mean \`import { "${r}" as foo }\`?`;
          }, ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments.", ImportCallArity: (t) => {
            let { maxArgumentCount: r } = t;
            return `\`import()\` requires exactly ${r === 1 ? "one argument" : "one or two arguments"}.`;
          }, ImportCallNotNewExpression: "Cannot use new with import(...).", ImportCallSpreadArgument: "`...` is not allowed in `import()`.", ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.", ImportReflectionHasAssertion: "`import module x` cannot have assertions.", ImportReflectionNotBinding: 'Only `import module x from "./module"` is valid.', IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.", InvalidBigIntLiteral: "Invalid BigIntLiteral.", InvalidCodePoint: "Code point out of bounds.", InvalidCoverInitializedName: "Invalid shorthand property initializer.", InvalidDecimal: "Invalid decimal.", InvalidDigit: (t) => {
            let { radix: r } = t;
            return `Expected number in radix ${r}.`;
          }, InvalidEscapeSequence: "Bad character escape sequence.", InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.", InvalidEscapedReservedWord: (t) => {
            let { reservedWord: r } = t;
            return `Escape sequence in keyword ${r}.`;
          }, InvalidIdentifier: (t) => {
            let { identifierName: r } = t;
            return `Invalid identifier ${r}.`;
          }, InvalidLhs: (t) => {
            let { ancestor: r } = t;
            return `Invalid left-hand side in ${I(r)}.`;
          }, InvalidLhsBinding: (t) => {
            let { ancestor: r } = t;
            return `Binding invalid left-hand side in ${I(r)}.`;
          }, InvalidNumber: "Invalid number.", InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.", InvalidOrUnexpectedToken: (t) => {
            let { unexpected: r } = t;
            return `Unexpected character '${r}'.`;
          }, InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.", InvalidPrivateFieldResolution: (t) => {
            let { identifierName: r } = t;
            return `Private name #${r} is not defined.`;
          }, InvalidPropertyBindingPattern: "Binding member expression.", InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.", InvalidRestAssignmentPattern: "Invalid rest operator's argument.", LabelRedeclaration: (t) => {
            let { labelName: r } = t;
            return `Label '${r}' is already declared.`;
          }, LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.", LineTerminatorBeforeArrow: "No line break is allowed before '=>'.", MalformedRegExpFlags: "Invalid regular expression flag.", MissingClassName: "A class name is required.", MissingEqInAssignment: "Only '=' operator can be used for specifying default value.", MissingSemicolon: "Missing semicolon.", MissingPlugin: (t) => {
            let { missingPlugin: r } = t;
            return `This experimental syntax requires enabling the parser plugin: ${r.map((e) => JSON.stringify(e)).join(", ")}.`;
          }, MissingOneOfPlugins: (t) => {
            let { missingPlugin: r } = t;
            return `This experimental syntax requires enabling one of the following parser plugin(s): ${r.map((e) => JSON.stringify(e)).join(", ")}.`;
          }, MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.", MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.", ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.", ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.", ModuleAttributesWithDuplicateKeys: (t) => {
            let { key: r } = t;
            return `Duplicate key "${r}" is not allowed in module attributes.`;
          }, ModuleExportNameHasLoneSurrogate: (t) => {
            let { surrogateCharCode: r } = t;
            return `An export name cannot include a lone surrogate, found '\\u${r.toString(16)}'.`;
          }, ModuleExportUndefined: (t) => {
            let { localName: r } = t;
            return `Export '${r}' is not defined.`;
          }, MultipleDefaultsInSwitch: "Multiple default clauses.", NewlineAfterThrow: "Illegal newline after throw.", NoCatchOrFinally: "Missing catch or finally clause.", NumberIdentifier: "Identifier directly after number.", NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.", ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.", OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.", OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.", OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.", ParamDupe: "Argument name clash.", PatternHasAccessor: "Object pattern can't contain getter or setter.", PatternHasMethod: "Object pattern can't contain methods.", PrivateInExpectedIn: (t) => {
            let { identifierName: r } = t;
            return `Private names are only allowed in property accesses (\`obj.#${r}\`) or in \`in\` expressions (\`#${r} in obj\`).`;
          }, PrivateNameRedeclaration: (t) => {
            let { identifierName: r } = t;
            return `Duplicate private name #${r}.`;
          }, RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.", RecordNoProto: "'__proto__' is not allowed in Record expressions.", RestTrailingComma: "Unexpected trailing comma after rest element.", SloppyFunction: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.", StaticPrototype: "Classes may not have static property named prototype.", SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?", SuperPrivateField: "Private fields can't be accessed on super.", TrailingDecorator: "Decorators must be attached to a class element.", TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.", TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.", UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.", UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.', UnexpectedDigitAfterHash: "Unexpected digit after hash token.", UnexpectedImportExport: "'import' and 'export' may only appear at the top level.", UnexpectedKeyword: (t) => {
            let { keyword: r } = t;
            return `Unexpected keyword '${r}'.`;
          }, UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.", UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.", UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.", UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.", UnexpectedPrivateField: "Unexpected private name.", UnexpectedReservedWord: (t) => {
            let { reservedWord: r } = t;
            return `Unexpected reserved word '${r}'.`;
          }, UnexpectedSuper: "'super' is only allowed in object methods and classes.", UnexpectedToken: (t) => {
            let { expected: r, unexpected: e } = t;
            return `Unexpected token${e ? ` '${e}'.` : ""}${r ? `, expected "${r}"` : ""}`;
          }, UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.", UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script`.", UnsupportedBind: "Binding should be performed on object property.", UnsupportedDecoratorExport: "A decorated export must export a class declaration.", UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.", UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.", UnsupportedMetaProperty: (t) => {
            let { target: r, onlyValidPropertyName: e } = t;
            return `The only valid meta property for ${r} is ${r}.${e}.`;
          }, UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.", UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.", UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).", UnterminatedComment: "Unterminated comment.", UnterminatedRegExp: "Unterminated regular expression.", UnterminatedString: "Unterminated string constant.", UnterminatedTemplate: "Unterminated template.", UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.", VarRedeclaration: (t) => {
            let { identifierName: r } = t;
            return `Identifier '${r}' has already been declared.`;
          }, YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.", YieldInParameter: "Yield expression is not allowed in formal parameters.", ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0." }, L = { StrictDelete: "Deleting local variable in strict mode.", StrictEvalArguments: (t) => {
            let { referenceName: r } = t;
            return `Assigning to '${r}' in strict mode.`;
          }, StrictEvalArgumentsBinding: (t) => {
            let { bindingName: r } = t;
            return `Binding '${r}' in strict mode.`;
          }, StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.", StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.", StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.", StrictWith: "'with' in strict mode." }, j = /* @__PURE__ */ new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]), k = { PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.", PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.', PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.", PipeTopicUnconfiguredToken: (t) => {
            let { token: r } = t;
            return `Invalid topic token ${r}. In order to use ${r} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${r}" }.`;
          }, PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.", PipeUnparenthesizedBody: (t) => {
            let { type: r } = t;
            return `Hack-style pipe body cannot be an unparenthesized ${I({ type: r })}; please wrap it in parentheses.`;
          }, PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.', PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.", PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.", PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.", PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.", PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.' }, H = ["toMessage"], W = ["message"];
          function B(t) {
            let { toMessage: r } = t, e = h(t, H);
            return function s(i) {
              let { loc: a, details: n } = i;
              return T(SyntaxError, Object.assign({}, e, { loc: a }), { clone() {
                let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = o.loc || {};
                return s({ loc: new f("line" in c ? c.line : this.loc.line, "column" in c ? c.column : this.loc.column, "index" in c ? c.index : this.loc.index), details: Object.assign({}, this.details, o.details) });
              }, details: { value: n, enumerable: false }, message: { get() {
                return `${r(this.details)} (${this.loc.line}:${this.loc.column})`;
              }, set(o) {
                Object.defineProperty(this, "message", { value: o });
              } }, pos: { reflect: "loc.index", enumerable: true }, missingPlugin: "missingPlugin" in n && { reflect: "details.missingPlugin", enumerable: true } });
            };
          }
          function _(t, r) {
            if (Array.isArray(t))
              return (s) => _(s, t[0]);
            let e = {};
            for (let s of Object.keys(t)) {
              let i = t[s], a = typeof i == "string" ? { message: () => i } : typeof i == "function" ? { message: i } : i, { message: n } = a, o = h(a, W), c = typeof n == "string" ? () => n : n;
              e[s] = B(Object.assign({ code: P.SyntaxError, reasonCode: s, toMessage: c }, r ? { syntaxPlugin: r } : {}, o));
            }
            return e;
          }
          var u = Object.assign({}, _(S), _(C), _(L), _`pipelineOperator`(k)), { defineProperty: G } = Object, oe = (t, r) => G(t, r, { enumerable: false, value: t[r] });
          function X(t) {
            return t.loc.start && oe(t.loc.start, "index"), t.loc.end && oe(t.loc.end, "index"), t;
          }
          var _e = (t) => class extends t {
            parse() {
              let e = X(super.parse());
              return this.options.tokens && (e.tokens = e.tokens.map(X)), e;
            }
            parseRegExpLiteral(e) {
              let { pattern: s, flags: i } = e, a = null;
              try {
                a = new RegExp(s, i);
              } catch {
              }
              let n = this.estreeParseLiteral(a);
              return n.regex = { pattern: s, flags: i }, n;
            }
            parseBigIntLiteral(e) {
              let s;
              try {
                s = BigInt(e);
              } catch {
                s = null;
              }
              let i = this.estreeParseLiteral(s);
              return i.bigint = String(i.value || e), i;
            }
            parseDecimalLiteral(e) {
              let i = this.estreeParseLiteral(null);
              return i.decimal = String(i.value || e), i;
            }
            estreeParseLiteral(e) {
              return this.parseLiteral(e, "Literal");
            }
            parseStringLiteral(e) {
              return this.estreeParseLiteral(e);
            }
            parseNumericLiteral(e) {
              return this.estreeParseLiteral(e);
            }
            parseNullLiteral() {
              return this.estreeParseLiteral(null);
            }
            parseBooleanLiteral(e) {
              return this.estreeParseLiteral(e);
            }
            directiveToStmt(e) {
              let s = e.value;
              delete e.value, s.type = "Literal", s.raw = s.extra.raw, s.value = s.extra.expressionValue;
              let i = e;
              return i.type = "ExpressionStatement", i.expression = s, i.directive = s.extra.rawValue, delete s.extra, i;
            }
            initFunction(e, s) {
              super.initFunction(e, s), e.expression = false;
            }
            checkDeclaration(e) {
              e != null && this.isObjectProperty(e) ? this.checkDeclaration(e.value) : super.checkDeclaration(e);
            }
            getObjectOrClassMethodParams(e) {
              return e.value.params;
            }
            isValidDirective(e) {
              var s;
              return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && !((s = e.expression.extra) != null && s.parenthesized);
            }
            parseBlockBody(e, s, i, a, n) {
              super.parseBlockBody(e, s, i, a, n);
              let o = e.directives.map((c) => this.directiveToStmt(c));
              e.body = o.concat(e.body), delete e.directives;
            }
            pushClassMethod(e, s, i, a, n, o) {
              this.parseMethod(s, i, a, n, o, "ClassMethod", true), s.typeParameters && (s.value.typeParameters = s.typeParameters, delete s.typeParameters), e.body.push(s);
            }
            parsePrivateName() {
              let e = super.parsePrivateName();
              return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(e) : e;
            }
            convertPrivateNameToPrivateIdentifier(e) {
              let s = super.getPrivateNameSV(e);
              return e = e, delete e.id, e.name = s, e.type = "PrivateIdentifier", e;
            }
            isPrivateName(e) {
              return this.getPluginOption("estree", "classFeatures") ? e.type === "PrivateIdentifier" : super.isPrivateName(e);
            }
            getPrivateNameSV(e) {
              return this.getPluginOption("estree", "classFeatures") ? e.name : super.getPrivateNameSV(e);
            }
            parseLiteral(e, s) {
              let i = super.parseLiteral(e, s);
              return i.raw = i.extra.raw, delete i.extra, i;
            }
            parseFunctionBody(e, s) {
              let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
              super.parseFunctionBody(e, s, i), e.expression = e.body.type !== "BlockStatement";
            }
            parseMethod(e, s, i, a, n, o) {
              let c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, p = this.startNode();
              return p.kind = e.kind, p = super.parseMethod(p, s, i, a, n, o, c), p.type = "FunctionExpression", delete p.kind, e.value = p, o === "ClassPrivateMethod" && (e.computed = false), this.finishNode(e, "MethodDefinition");
            }
            parseClassProperty() {
              let e = super.parseClassProperty(...arguments);
              return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition"), e;
            }
            parseClassPrivateProperty() {
              let e = super.parseClassPrivateProperty(...arguments);
              return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition", e.computed = false), e;
            }
            parseObjectMethod(e, s, i, a, n) {
              let o = super.parseObjectMethod(e, s, i, a, n);
              return o && (o.type = "Property", o.kind === "method" && (o.kind = "init"), o.shorthand = false), o;
            }
            parseObjectProperty(e, s, i, a) {
              let n = super.parseObjectProperty(e, s, i, a);
              return n && (n.kind = "init", n.type = "Property"), n;
            }
            isValidLVal(e, s, i) {
              return e === "Property" ? "value" : super.isValidLVal(e, s, i);
            }
            isAssignable(e, s) {
              return e != null && this.isObjectProperty(e) ? this.isAssignable(e.value, s) : super.isAssignable(e, s);
            }
            toAssignable(e) {
              let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
              if (e != null && this.isObjectProperty(e)) {
                let { key: i, value: a } = e;
                this.isPrivateName(i) && this.classScope.usePrivateName(this.getPrivateNameSV(i), i.loc.start), this.toAssignable(a, s);
              } else
                super.toAssignable(e, s);
            }
            toAssignableObjectExpressionProp(e, s, i) {
              e.kind === "get" || e.kind === "set" ? this.raise(u.PatternHasAccessor, { at: e.key }) : e.method ? this.raise(u.PatternHasMethod, { at: e.key }) : super.toAssignableObjectExpressionProp(e, s, i);
            }
            finishCallExpression(e, s) {
              let i = super.finishCallExpression(e, s);
              if (i.callee.type === "Import") {
                if (i.type = "ImportExpression", i.source = i.arguments[0], this.hasPlugin("importAssertions")) {
                  var a;
                  i.attributes = (a = i.arguments[1]) != null ? a : null;
                }
                delete i.arguments, delete i.callee;
              }
              return i;
            }
            toReferencedArguments(e) {
              e.type !== "ImportExpression" && super.toReferencedArguments(e);
            }
            parseExport(e, s) {
              let i = this.state.lastTokStartLoc, a = super.parseExport(e, s);
              switch (a.type) {
                case "ExportAllDeclaration":
                  a.exported = null;
                  break;
                case "ExportNamedDeclaration":
                  a.specifiers.length === 1 && a.specifiers[0].type === "ExportNamespaceSpecifier" && (a.type = "ExportAllDeclaration", a.exported = a.specifiers[0].exported, delete a.specifiers);
                case "ExportDefaultDeclaration":
                  {
                    var n;
                    let { declaration: o } = a;
                    (o == null ? void 0 : o.type) === "ClassDeclaration" && ((n = o.decorators) == null ? void 0 : n.length) > 0 && o.start === a.start && this.resetStartLocation(a, i);
                  }
                  break;
              }
              return a;
            }
            parseSubscript(e, s, i, a) {
              let n = super.parseSubscript(e, s, i, a);
              if (a.optionalChainMember) {
                if ((n.type === "OptionalMemberExpression" || n.type === "OptionalCallExpression") && (n.type = n.type.substring(8)), a.stop) {
                  let o = this.startNodeAtNode(n);
                  return o.expression = n, this.finishNode(o, "ChainExpression");
                }
              } else
                (n.type === "MemberExpression" || n.type === "CallExpression") && (n.optional = false);
              return n;
            }
            hasPropertyAsPrivateName(e) {
              return e.type === "ChainExpression" && (e = e.expression), super.hasPropertyAsPrivateName(e);
            }
            isOptionalChain(e) {
              return e.type === "ChainExpression";
            }
            isObjectProperty(e) {
              return e.type === "Property" && e.kind === "init" && !e.method;
            }
            isObjectMethod(e) {
              return e.method || e.kind === "get" || e.kind === "set";
            }
            finishNodeAt(e, s, i) {
              return X(super.finishNodeAt(e, s, i));
            }
            resetStartLocation(e, s) {
              super.resetStartLocation(e, s), X(e);
            }
            resetEndLocation(e) {
              let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.lastTokEndLoc;
              super.resetEndLocation(e, s), X(e);
            }
          }, Z = class {
            constructor(t, r) {
              this.token = void 0, this.preserveSpace = void 0, this.token = t, this.preserveSpace = !!r;
            }
          }, $ = { brace: new Z("{"), j_oTag: new Z("<tag"), j_cTag: new Z("</tag"), j_expr: new Z("<tag>...</tag>", true) };
          $.template = new Z("`", true);
          var M = true, E = true, Je = true, ee = true, fe = true, zo = true, xr = class {
            constructor(t) {
              let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = t, this.keyword = r.keyword, this.beforeExpr = !!r.beforeExpr, this.startsExpr = !!r.startsExpr, this.rightAssociative = !!r.rightAssociative, this.isLoop = !!r.isLoop, this.isAssign = !!r.isAssign, this.prefix = !!r.prefix, this.postfix = !!r.postfix, this.binop = r.binop != null ? r.binop : null, this.updateContext = null;
            }
          }, zt = /* @__PURE__ */ new Map();
          function U(t) {
            let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            r.keyword = t;
            let e = N(t, r);
            return zt.set(t, e), e;
          }
          function re(t, r) {
            return N(t, { beforeExpr: M, binop: r });
          }
          var Xe = -1, me = [], Vt = [], Kt = [], Wt = [], Gt = [], Jt = [];
          function N(t) {
            let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var e, s, i, a;
            return ++Xe, Vt.push(t), Kt.push((e = r.binop) != null ? e : -1), Wt.push((s = r.beforeExpr) != null ? s : false), Gt.push((i = r.startsExpr) != null ? i : false), Jt.push((a = r.prefix) != null ? a : false), me.push(new xr(t, r)), Xe;
          }
          function q(t) {
            let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var e, s, i, a;
            return ++Xe, zt.set(t, Xe), Vt.push(t), Kt.push((e = r.binop) != null ? e : -1), Wt.push((s = r.beforeExpr) != null ? s : false), Gt.push((i = r.startsExpr) != null ? i : false), Jt.push((a = r.prefix) != null ? a : false), me.push(new xr("name", r)), Xe;
          }
          var Vo = { bracketL: N("[", { beforeExpr: M, startsExpr: E }), bracketHashL: N("#[", { beforeExpr: M, startsExpr: E }), bracketBarL: N("[|", { beforeExpr: M, startsExpr: E }), bracketR: N("]"), bracketBarR: N("|]"), braceL: N("{", { beforeExpr: M, startsExpr: E }), braceBarL: N("{|", { beforeExpr: M, startsExpr: E }), braceHashL: N("#{", { beforeExpr: M, startsExpr: E }), braceR: N("}"), braceBarR: N("|}"), parenL: N("(", { beforeExpr: M, startsExpr: E }), parenR: N(")"), comma: N(",", { beforeExpr: M }), semi: N(";", { beforeExpr: M }), colon: N(":", { beforeExpr: M }), doubleColon: N("::", { beforeExpr: M }), dot: N("."), question: N("?", { beforeExpr: M }), questionDot: N("?."), arrow: N("=>", { beforeExpr: M }), template: N("template"), ellipsis: N("...", { beforeExpr: M }), backQuote: N("`", { startsExpr: E }), dollarBraceL: N("${", { beforeExpr: M, startsExpr: E }), templateTail: N("...`", { startsExpr: E }), templateNonTail: N("...${", { beforeExpr: M, startsExpr: E }), at: N("@"), hash: N("#", { startsExpr: E }), interpreterDirective: N("#!..."), eq: N("=", { beforeExpr: M, isAssign: ee }), assign: N("_=", { beforeExpr: M, isAssign: ee }), slashAssign: N("_=", { beforeExpr: M, isAssign: ee }), xorAssign: N("_=", { beforeExpr: M, isAssign: ee }), moduloAssign: N("_=", { beforeExpr: M, isAssign: ee }), incDec: N("++/--", { prefix: fe, postfix: zo, startsExpr: E }), bang: N("!", { beforeExpr: M, prefix: fe, startsExpr: E }), tilde: N("~", { beforeExpr: M, prefix: fe, startsExpr: E }), doubleCaret: N("^^", { startsExpr: E }), doubleAt: N("@@", { startsExpr: E }), pipeline: re("|>", 0), nullishCoalescing: re("??", 1), logicalOR: re("||", 1), logicalAND: re("&&", 2), bitwiseOR: re("|", 3), bitwiseXOR: re("^", 4), bitwiseAND: re("&", 5), equality: re("==/!=/===/!==", 6), lt: re("</>/<=/>=", 7), gt: re("</>/<=/>=", 7), relational: re("</>/<=/>=", 7), bitShift: re("<</>>/>>>", 8), bitShiftL: re("<</>>/>>>", 8), bitShiftR: re("<</>>/>>>", 8), plusMin: N("+/-", { beforeExpr: M, binop: 9, prefix: fe, startsExpr: E }), modulo: N("%", { binop: 10, startsExpr: E }), star: N("*", { binop: 10 }), slash: re("/", 10), exponent: N("**", { beforeExpr: M, binop: 11, rightAssociative: true }), _in: U("in", { beforeExpr: M, binop: 7 }), _instanceof: U("instanceof", { beforeExpr: M, binop: 7 }), _break: U("break"), _case: U("case", { beforeExpr: M }), _catch: U("catch"), _continue: U("continue"), _debugger: U("debugger"), _default: U("default", { beforeExpr: M }), _else: U("else", { beforeExpr: M }), _finally: U("finally"), _function: U("function", { startsExpr: E }), _if: U("if"), _return: U("return", { beforeExpr: M }), _switch: U("switch"), _throw: U("throw", { beforeExpr: M, prefix: fe, startsExpr: E }), _try: U("try"), _var: U("var"), _const: U("const"), _with: U("with"), _new: U("new", { beforeExpr: M, startsExpr: E }), _this: U("this", { startsExpr: E }), _super: U("super", { startsExpr: E }), _class: U("class", { startsExpr: E }), _extends: U("extends", { beforeExpr: M }), _export: U("export"), _import: U("import", { startsExpr: E }), _null: U("null", { startsExpr: E }), _true: U("true", { startsExpr: E }), _false: U("false", { startsExpr: E }), _typeof: U("typeof", { beforeExpr: M, prefix: fe, startsExpr: E }), _void: U("void", { beforeExpr: M, prefix: fe, startsExpr: E }), _delete: U("delete", { beforeExpr: M, prefix: fe, startsExpr: E }), _do: U("do", { isLoop: Je, beforeExpr: M }), _for: U("for", { isLoop: Je }), _while: U("while", { isLoop: Je }), _as: q("as", { startsExpr: E }), _assert: q("assert", { startsExpr: E }), _async: q("async", { startsExpr: E }), _await: q("await", { startsExpr: E }), _from: q("from", { startsExpr: E }), _get: q("get", { startsExpr: E }), _let: q("let", { startsExpr: E }), _meta: q("meta", { startsExpr: E }), _of: q("of", { startsExpr: E }), _sent: q("sent", { startsExpr: E }), _set: q("set", { startsExpr: E }), _static: q("static", { startsExpr: E }), _using: q("using", { startsExpr: E }), _yield: q("yield", { startsExpr: E }), _asserts: q("asserts", { startsExpr: E }), _checks: q("checks", { startsExpr: E }), _exports: q("exports", { startsExpr: E }), _global: q("global", { startsExpr: E }), _implements: q("implements", { startsExpr: E }), _intrinsic: q("intrinsic", { startsExpr: E }), _infer: q("infer", { startsExpr: E }), _is: q("is", { startsExpr: E }), _mixins: q("mixins", { startsExpr: E }), _proto: q("proto", { startsExpr: E }), _require: q("require", { startsExpr: E }), _satisfies: q("satisfies", { startsExpr: E }), _keyof: q("keyof", { startsExpr: E }), _readonly: q("readonly", { startsExpr: E }), _unique: q("unique", { startsExpr: E }), _abstract: q("abstract", { startsExpr: E }), _declare: q("declare", { startsExpr: E }), _enum: q("enum", { startsExpr: E }), _module: q("module", { startsExpr: E }), _namespace: q("namespace", { startsExpr: E }), _interface: q("interface", { startsExpr: E }), _type: q("type", { startsExpr: E }), _opaque: q("opaque", { startsExpr: E }), name: N("name", { startsExpr: E }), string: N("string", { startsExpr: E }), num: N("num", { startsExpr: E }), bigint: N("bigint", { startsExpr: E }), decimal: N("decimal", { startsExpr: E }), regexp: N("regexp", { startsExpr: E }), privateName: N("#name", { startsExpr: E }), eof: N("eof"), jsxName: N("jsxName"), jsxText: N("jsxText", { beforeExpr: true }), jsxTagStart: N("jsxTagStart", { startsExpr: true }), jsxTagEnd: N("jsxTagEnd"), placeholder: N("%%", { startsExpr: true }) };
          function z(t) {
            return t >= 93 && t <= 130;
          }
          function Ko(t) {
            return t <= 92;
          }
          function ye(t) {
            return t >= 58 && t <= 130;
          }
          function gr(t) {
            return t >= 58 && t <= 134;
          }
          function Wo(t) {
            return Wt[t];
          }
          function Xt(t) {
            return Gt[t];
          }
          function Go(t) {
            return t >= 29 && t <= 33;
          }
          function Pr(t) {
            return t >= 127 && t <= 129;
          }
          function Jo(t) {
            return t >= 90 && t <= 92;
          }
          function Yt(t) {
            return t >= 58 && t <= 92;
          }
          function Xo(t) {
            return t >= 39 && t <= 59;
          }
          function Yo(t) {
            return t === 34;
          }
          function Qo(t) {
            return Jt[t];
          }
          function Zo(t) {
            return t >= 119 && t <= 121;
          }
          function el(t) {
            return t >= 122 && t <= 128;
          }
          function Ee(t) {
            return Vt[t];
          }
          function ut(t) {
            return Kt[t];
          }
          function tl(t) {
            return t === 57;
          }
          function ct(t) {
            return t >= 24 && t <= 25;
          }
          function xe(t) {
            return me[t];
          }
          me[8].updateContext = (t) => {
            t.pop();
          }, me[5].updateContext = me[7].updateContext = me[23].updateContext = (t) => {
            t.push($.brace);
          }, me[22].updateContext = (t) => {
            t[t.length - 1] === $.template ? t.pop() : t.push($.template);
          }, me[140].updateContext = (t) => {
            t.push($.j_expr, $.j_oTag);
          };
          var Qt = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Ar = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿", sl = new RegExp("[" + Qt + "]"), rl = new RegExp("[" + Qt + Ar + "]");
          Qt = Ar = null;
          var Tr = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938, 6, 4191], il = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
          function Zt(t, r) {
            let e = 65536;
            for (let s = 0, i = r.length; s < i; s += 2) {
              if (e += r[s], e > t)
                return false;
              if (e += r[s + 1], e >= t)
                return true;
            }
            return false;
          }
          function ge(t) {
            return t < 65 ? t === 36 : t <= 90 ? true : t < 97 ? t === 95 : t <= 122 ? true : t <= 65535 ? t >= 170 && sl.test(String.fromCharCode(t)) : Zt(t, Tr);
          }
          function Re(t) {
            return t < 48 ? t === 36 : t < 58 ? true : t < 65 ? false : t <= 90 ? true : t < 97 ? t === 95 : t <= 122 ? true : t <= 65535 ? t >= 170 && rl.test(String.fromCharCode(t)) : Zt(t, Tr) || Zt(t, il);
          }
          var es = { keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"], strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"], strictBind: ["eval", "arguments"] }, al = new Set(es.keyword), nl = new Set(es.strict), ol = new Set(es.strictBind);
          function vr(t, r) {
            return r && t === "await" || t === "enum";
          }
          function Er(t, r) {
            return vr(t, r) || nl.has(t);
          }
          function Cr(t) {
            return ol.has(t);
          }
          function br(t, r) {
            return Er(t, r) || Cr(t);
          }
          function ll(t) {
            return al.has(t);
          }
          function hl(t, r, e) {
            return t === 64 && r === 64 && ge(e);
          }
          var ul = /* @__PURE__ */ new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
          function cl(t) {
            return ul.has(t);
          }
          var je = 0, qe = 1, Pe = 2, ts = 4, Sr = 8, pt = 16, wr = 32, Ne = 64, ft = 128, Ue = 256, dt = qe | Pe | ft | Ue, Ae = 1, ke = 2, Ir = 4, Ce = 8, mt = 16, Nr = 64, yt = 128, ss = 256, rs = 512, is = 1024, as = 2048, Ye = 4096, kr = Ae | ke | Ce | yt, De = Ae | 0 | Ce | 0, xt = Ae | 0 | Ir | 0, Dr = Ae | 0 | mt | 0, pl = 0 | ke | 0 | yt, fl = 0 | ke | 0 | 0, Fr = Ae | ke | Ce | ss, Lr = 0 | is, be = 0 | Nr, dl = Ae | 0 | 0 | Nr, ml = Fr | rs, yl = 0 | is, Or = 0 | ke | 0 | Ye, xl = as, gt = 4, ns = 2, os = 1, ls = ns | os, gl = ns | gt, Pl = os | gt, Al = ns, Tl = os, hs = 0, us = class {
            constructor(t) {
              this.var = /* @__PURE__ */ new Set(), this.lexical = /* @__PURE__ */ new Set(), this.functions = /* @__PURE__ */ new Set(), this.flags = t;
            }
          }, cs = class {
            constructor(t, r) {
              this.parser = void 0, this.scopeStack = [], this.inModule = void 0, this.undefinedExports = /* @__PURE__ */ new Map(), this.parser = t, this.inModule = r;
            }
            get inTopLevel() {
              return (this.currentScope().flags & qe) > 0;
            }
            get inFunction() {
              return (this.currentVarScopeFlags() & Pe) > 0;
            }
            get allowSuper() {
              return (this.currentThisScopeFlags() & pt) > 0;
            }
            get allowDirectSuper() {
              return (this.currentThisScopeFlags() & wr) > 0;
            }
            get inClass() {
              return (this.currentThisScopeFlags() & Ne) > 0;
            }
            get inClassAndNotInNonArrowFunction() {
              let t = this.currentThisScopeFlags();
              return (t & Ne) > 0 && (t & Pe) === 0;
            }
            get inStaticBlock() {
              for (let t = this.scopeStack.length - 1; ; t--) {
                let { flags: r } = this.scopeStack[t];
                if (r & ft)
                  return true;
                if (r & (dt | Ne))
                  return false;
              }
            }
            get inNonArrowFunction() {
              return (this.currentThisScopeFlags() & Pe) > 0;
            }
            get treatFunctionsAsVar() {
              return this.treatFunctionsAsVarInScope(this.currentScope());
            }
            createScope(t) {
              return new us(t);
            }
            enter(t) {
              this.scopeStack.push(this.createScope(t));
            }
            exit() {
              return this.scopeStack.pop().flags;
            }
            treatFunctionsAsVarInScope(t) {
              return !!(t.flags & (Pe | ft) || !this.parser.inModule && t.flags & qe);
            }
            declareName(t, r, e) {
              let s = this.currentScope();
              if (r & Ce || r & mt)
                this.checkRedeclarationInScope(s, t, r, e), r & mt ? s.functions.add(t) : s.lexical.add(t), r & Ce && this.maybeExportDefined(s, t);
              else if (r & Ir)
                for (let i = this.scopeStack.length - 1; i >= 0 && (s = this.scopeStack[i], this.checkRedeclarationInScope(s, t, r, e), s.var.add(t), this.maybeExportDefined(s, t), !(s.flags & dt)); --i)
                  ;
              this.parser.inModule && s.flags & qe && this.undefinedExports.delete(t);
            }
            maybeExportDefined(t, r) {
              this.parser.inModule && t.flags & qe && this.undefinedExports.delete(r);
            }
            checkRedeclarationInScope(t, r, e, s) {
              this.isRedeclaredInScope(t, r, e) && this.parser.raise(u.VarRedeclaration, { at: s, identifierName: r });
            }
            isRedeclaredInScope(t, r, e) {
              return e & Ae ? e & Ce ? t.lexical.has(r) || t.functions.has(r) || t.var.has(r) : e & mt ? t.lexical.has(r) || !this.treatFunctionsAsVarInScope(t) && t.var.has(r) : t.lexical.has(r) && !(t.flags & Sr && t.lexical.values().next().value === r) || !this.treatFunctionsAsVarInScope(t) && t.functions.has(r) : false;
            }
            checkLocalExport(t) {
              let { name: r } = t, e = this.scopeStack[0];
              !e.lexical.has(r) && !e.var.has(r) && !e.functions.has(r) && this.undefinedExports.set(r, t.loc.start);
            }
            currentScope() {
              return this.scopeStack[this.scopeStack.length - 1];
            }
            currentVarScopeFlags() {
              for (let t = this.scopeStack.length - 1; ; t--) {
                let { flags: r } = this.scopeStack[t];
                if (r & dt)
                  return r;
              }
            }
            currentThisScopeFlags() {
              for (let t = this.scopeStack.length - 1; ; t--) {
                let { flags: r } = this.scopeStack[t];
                if (r & (dt | Ne) && !(r & ts))
                  return r;
              }
            }
          }, vl = class extends us {
            constructor() {
              super(...arguments), this.declareFunctions = /* @__PURE__ */ new Set();
            }
          }, El = class extends cs {
            createScope(t) {
              return new vl(t);
            }
            declareName(t, r, e) {
              let s = this.currentScope();
              if (r & as) {
                this.checkRedeclarationInScope(s, t, r, e), this.maybeExportDefined(s, t), s.declareFunctions.add(t);
                return;
              }
              super.declareName(t, r, e);
            }
            isRedeclaredInScope(t, r, e) {
              return super.isRedeclaredInScope(t, r, e) ? true : e & as ? !t.declareFunctions.has(r) && (t.lexical.has(r) || t.functions.has(r)) : false;
            }
            checkLocalExport(t) {
              this.scopeStack[0].declareFunctions.has(t.name) || super.checkLocalExport(t);
            }
          }, Cl = class {
            constructor() {
              this.sawUnambiguousESM = false, this.ambiguousScriptDifferentAst = false;
            }
            hasPlugin(t) {
              if (typeof t == "string")
                return this.plugins.has(t);
              {
                let [r, e] = t;
                if (!this.hasPlugin(r))
                  return false;
                let s = this.plugins.get(r);
                for (let i of Object.keys(e))
                  if ((s == null ? void 0 : s[i]) !== e[i])
                    return false;
                return true;
              }
            }
            getPluginOption(t, r) {
              var e;
              return (e = this.plugins.get(t)) == null ? void 0 : e[r];
            }
          };
          function Br(t, r) {
            t.trailingComments === void 0 ? t.trailingComments = r : t.trailingComments.unshift(...r);
          }
          function bl(t, r) {
            t.leadingComments === void 0 ? t.leadingComments = r : t.leadingComments.unshift(...r);
          }
          function Qe(t, r) {
            t.innerComments === void 0 ? t.innerComments = r : t.innerComments.unshift(...r);
          }
          function Ze(t, r, e) {
            let s = null, i = r.length;
            for (; s === null && i > 0; )
              s = r[--i];
            s === null || s.start > e.start ? Qe(t, e.comments) : Br(s, e.comments);
          }
          var Sl = class extends Cl {
            addComment(t) {
              this.filename && (t.loc.filename = this.filename), this.state.comments.push(t);
            }
            processComment(t) {
              let { commentStack: r } = this.state, e = r.length;
              if (e === 0)
                return;
              let s = e - 1, i = r[s];
              i.start === t.end && (i.leadingNode = t, s--);
              let { start: a } = t;
              for (; s >= 0; s--) {
                let n = r[s], o = n.end;
                if (o > a)
                  n.containingNode = t, this.finalizeComment(n), r.splice(s, 1);
                else {
                  o === a && (n.trailingNode = t);
                  break;
                }
              }
            }
            finalizeComment(t) {
              let { comments: r } = t;
              if (t.leadingNode !== null || t.trailingNode !== null)
                t.leadingNode !== null && Br(t.leadingNode, r), t.trailingNode !== null && bl(t.trailingNode, r);
              else {
                let { containingNode: e, start: s } = t;
                if (this.input.charCodeAt(s - 1) === 44)
                  switch (e.type) {
                    case "ObjectExpression":
                    case "ObjectPattern":
                    case "RecordExpression":
                      Ze(e, e.properties, t);
                      break;
                    case "CallExpression":
                    case "OptionalCallExpression":
                      Ze(e, e.arguments, t);
                      break;
                    case "FunctionDeclaration":
                    case "FunctionExpression":
                    case "ArrowFunctionExpression":
                    case "ObjectMethod":
                    case "ClassMethod":
                    case "ClassPrivateMethod":
                      Ze(e, e.params, t);
                      break;
                    case "ArrayExpression":
                    case "ArrayPattern":
                    case "TupleExpression":
                      Ze(e, e.elements, t);
                      break;
                    case "ExportNamedDeclaration":
                    case "ImportDeclaration":
                      Ze(e, e.specifiers, t);
                      break;
                    default:
                      Qe(e, r);
                  }
                else
                  Qe(e, r);
              }
            }
            finalizeRemainingComments() {
              let { commentStack: t } = this.state;
              for (let r = t.length - 1; r >= 0; r--)
                this.finalizeComment(t[r]);
              this.state.commentStack = [];
            }
            resetPreviousNodeTrailingComments(t) {
              let { commentStack: r } = this.state, { length: e } = r;
              if (e === 0)
                return;
              let s = r[e - 1];
              s.leadingNode === t && (s.leadingNode = null);
            }
            takeSurroundingComments(t, r, e) {
              let { commentStack: s } = this.state, i = s.length;
              if (i === 0)
                return;
              let a = i - 1;
              for (; a >= 0; a--) {
                let n = s[a], o = n.end;
                if (n.start === e)
                  n.leadingNode = t;
                else if (o === r)
                  n.trailingNode = t;
                else if (o < r)
                  break;
              }
            }
          }, ps = /\r\n?|[\n\u2028\u2029]/, Pt = new RegExp(ps.source, "g");
          function et(t) {
            switch (t) {
              case 10:
              case 13:
              case 8232:
              case 8233:
                return true;
              default:
                return false;
            }
          }
          var fs = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, wl = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y, Mr = new RegExp("(?=(" + wl.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y");
          function Il(t) {
            switch (t) {
              case 9:
              case 11:
              case 12:
              case 32:
              case 160:
              case 5760:
              case 8192:
              case 8193:
              case 8194:
              case 8195:
              case 8196:
              case 8197:
              case 8198:
              case 8199:
              case 8200:
              case 8201:
              case 8202:
              case 8239:
              case 8287:
              case 12288:
              case 65279:
                return true;
              default:
                return false;
            }
          }
          var _r = class {
            constructor() {
              this.strict = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.maybeInArrowParameters = false, this.inType = false, this.noAnonFunctionType = false, this.hasFlowComment = false, this.isAmbientContext = false, this.inAbstractClass = false, this.inDisallowConditionalTypesContext = false, this.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null }, this.soloAwait = false, this.inFSharpPipelineDirectBody = false, this.labels = [], this.comments = [], this.commentStack = [], this.pos = 0, this.type = 137, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.lastTokStart = 0, this.context = [$.brace], this.canStartJSXElement = true, this.containsEsc = false, this.firstInvalidTemplateEscapePos = null, this.strictErrors = /* @__PURE__ */ new Map(), this.tokensLength = 0;
            }
            init(t) {
              let { strictMode: r, sourceType: e, startLine: s, startColumn: i } = t;
              this.strict = r === false ? false : r === true ? true : e === "module", this.curLine = s, this.lineStart = -i, this.startLoc = this.endLoc = new f(s, i, 0);
            }
            curPosition() {
              return new f(this.curLine, this.pos - this.lineStart, this.pos);
            }
            clone(t) {
              let r = new _r(), e = Object.keys(this);
              for (let s = 0, i = e.length; s < i; s++) {
                let a = e[s], n = this[a];
                !t && Array.isArray(n) && (n = n.slice()), r[a] = n;
              }
              return r;
            }
          }, Nl = function(r) {
            return r >= 48 && r <= 57;
          }, Rr = { decBinOct: /* @__PURE__ */ new Set([46, 66, 69, 79, 95, 98, 101, 111]), hex: /* @__PURE__ */ new Set([46, 88, 95, 120]) }, At = { bin: (t) => t === 48 || t === 49, oct: (t) => t >= 48 && t <= 55, dec: (t) => t >= 48 && t <= 57, hex: (t) => t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102 };
          function jr(t, r, e, s, i, a) {
            let n = e, o = s, c = i, p = "", m = null, x = e, { length: A } = r;
            for (; ; ) {
              if (e >= A) {
                a.unterminated(n, o, c), p += r.slice(x, e);
                break;
              }
              let b = r.charCodeAt(e);
              if (kl(t, b, r, e)) {
                p += r.slice(x, e);
                break;
              }
              if (b === 92) {
                p += r.slice(x, e);
                let O = Dl(r, e, s, i, t === "template", a);
                O.ch === null && !m ? m = { pos: e, lineStart: s, curLine: i } : p += O.ch, { pos: e, lineStart: s, curLine: i } = O, x = e;
              } else
                b === 8232 || b === 8233 ? (++e, ++i, s = e) : b === 10 || b === 13 ? t === "template" ? (p += r.slice(x, e) + `
`, ++e, b === 13 && r.charCodeAt(e) === 10 && ++e, ++i, x = s = e) : a.unterminated(n, o, c) : ++e;
            }
            return { pos: e, str: p, firstInvalidLoc: m, lineStart: s, curLine: i, containsInvalid: !!m };
          }
          function kl(t, r, e, s) {
            return t === "template" ? r === 96 || r === 36 && e.charCodeAt(s + 1) === 123 : r === (t === "double" ? 34 : 39);
          }
          function Dl(t, r, e, s, i, a) {
            let n = !i;
            r++;
            let o = (p) => ({ pos: r, ch: p, lineStart: e, curLine: s }), c = t.charCodeAt(r++);
            switch (c) {
              case 110:
                return o(`
`);
              case 114:
                return o("\r");
              case 120: {
                let p;
                return { code: p, pos: r } = ds(t, r, e, s, 2, false, n, a), o(p === null ? null : String.fromCharCode(p));
              }
              case 117: {
                let p;
                return { code: p, pos: r } = Ur(t, r, e, s, n, a), o(p === null ? null : String.fromCodePoint(p));
              }
              case 116:
                return o("	");
              case 98:
                return o("\b");
              case 118:
                return o("\v");
              case 102:
                return o("\f");
              case 13:
                t.charCodeAt(r) === 10 && ++r;
              case 10:
                e = r, ++s;
              case 8232:
              case 8233:
                return o("");
              case 56:
              case 57:
                if (i)
                  return o(null);
                a.strictNumericEscape(r - 1, e, s);
              default:
                if (c >= 48 && c <= 55) {
                  let p = r - 1, x = t.slice(p, r + 2).match(/^[0-7]+/)[0], A = parseInt(x, 8);
                  A > 255 && (x = x.slice(0, -1), A = parseInt(x, 8)), r += x.length - 1;
                  let b = t.charCodeAt(r);
                  if (x !== "0" || b === 56 || b === 57) {
                    if (i)
                      return o(null);
                    a.strictNumericEscape(p, e, s);
                  }
                  return o(String.fromCharCode(A));
                }
                return o(String.fromCharCode(c));
            }
          }
          function ds(t, r, e, s, i, a, n, o) {
            let c = r, p;
            return { n: p, pos: r } = qr(t, r, e, s, 16, i, a, false, o, !n), p === null && (n ? o.invalidEscapeSequence(c, e, s) : r = c - 1), { code: p, pos: r };
          }
          function qr(t, r, e, s, i, a, n, o, c, p) {
            let m = r, x = i === 16 ? Rr.hex : Rr.decBinOct, A = i === 16 ? At.hex : i === 10 ? At.dec : i === 8 ? At.oct : At.bin, b = false, O = 0;
            for (let R = 0, Y = a == null ? 1 / 0 : a; R < Y; ++R) {
              let Q = t.charCodeAt(r), J;
              if (Q === 95 && o !== "bail") {
                let se = t.charCodeAt(r - 1), Ve = t.charCodeAt(r + 1);
                if (o) {
                  if (Number.isNaN(Ve) || !A(Ve) || x.has(se) || x.has(Ve)) {
                    if (p)
                      return { n: null, pos: r };
                    c.unexpectedNumericSeparator(r, e, s);
                  }
                } else {
                  if (p)
                    return { n: null, pos: r };
                  c.numericSeparatorInEscapeSequence(r, e, s);
                }
                ++r;
                continue;
              }
              if (Q >= 97 ? J = Q - 97 + 10 : Q >= 65 ? J = Q - 65 + 10 : Nl(Q) ? J = Q - 48 : J = 1 / 0, J >= i) {
                if (J <= 9 && p)
                  return { n: null, pos: r };
                if (J <= 9 && c.invalidDigit(r, e, s, i))
                  J = 0;
                else if (n)
                  J = 0, b = true;
                else
                  break;
              }
              ++r, O = O * i + J;
            }
            return r === m || a != null && r - m !== a || b ? { n: null, pos: r } : { n: O, pos: r };
          }
          function Ur(t, r, e, s, i, a) {
            let n = t.charCodeAt(r), o;
            if (n === 123) {
              if (++r, { code: o, pos: r } = ds(t, r, e, s, t.indexOf("}", r) - r, true, i, a), ++r, o !== null && o > 1114111)
                if (i)
                  a.invalidCodePoint(r, e, s);
                else
                  return { code: null, pos: r };
            } else
              ({ code: o, pos: r } = ds(t, r, e, s, 4, false, i, a));
            return { code: o, pos: r };
          }
          var Fl = ["at"], Ll = ["at"];
          function tt(t, r, e) {
            return new f(e, t - r, t);
          }
          var Ol = /* @__PURE__ */ new Set([103, 109, 115, 105, 121, 117, 100, 118]), Se = class {
            constructor(t) {
              this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, this.loc = new d(t.startLoc, t.endLoc);
            }
          }, Bl = class extends Sl {
            constructor(t, r) {
              super(), this.isLookahead = void 0, this.tokens = [], this.errorHandlers_readInt = { invalidDigit: (e, s, i, a) => this.options.errorRecovery ? (this.raise(u.InvalidDigit, { at: tt(e, s, i), radix: a }), true) : false, numericSeparatorInEscapeSequence: this.errorBuilder(u.NumericSeparatorInEscapeSequence), unexpectedNumericSeparator: this.errorBuilder(u.UnexpectedNumericSeparator) }, this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, { invalidEscapeSequence: this.errorBuilder(u.InvalidEscapeSequence), invalidCodePoint: this.errorBuilder(u.InvalidCodePoint) }), this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, { strictNumericEscape: (e, s, i) => {
                this.recordStrictModeErrors(u.StrictNumericEscape, { at: tt(e, s, i) });
              }, unterminated: (e, s, i) => {
                throw this.raise(u.UnterminatedString, { at: tt(e - 1, s, i) });
              } }), this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, { strictNumericEscape: this.errorBuilder(u.StrictNumericEscape), unterminated: (e, s, i) => {
                throw this.raise(u.UnterminatedTemplate, { at: tt(e, s, i) });
              } }), this.state = new _r(), this.state.init(t), this.input = r, this.length = r.length, this.isLookahead = false;
            }
            pushToken(t) {
              this.tokens.length = this.state.tokensLength, this.tokens.push(t), ++this.state.tokensLength;
            }
            next() {
              this.checkKeywordEscapes(), this.options.tokens && this.pushToken(new Se(this.state)), this.state.lastTokStart = this.state.start, this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
            }
            eat(t) {
              return this.match(t) ? (this.next(), true) : false;
            }
            match(t) {
              return this.state.type === t;
            }
            createLookaheadState(t) {
              return { pos: t.pos, value: null, type: t.type, start: t.start, end: t.end, context: [this.curContext()], inType: t.inType, startLoc: t.startLoc, lastTokEndLoc: t.lastTokEndLoc, curLine: t.curLine, lineStart: t.lineStart, curPosition: t.curPosition };
            }
            lookahead() {
              let t = this.state;
              this.state = this.createLookaheadState(t), this.isLookahead = true, this.nextToken(), this.isLookahead = false;
              let r = this.state;
              return this.state = t, r;
            }
            nextTokenStart() {
              return this.nextTokenStartSince(this.state.pos);
            }
            nextTokenStartSince(t) {
              return fs.lastIndex = t, fs.test(this.input) ? fs.lastIndex : t;
            }
            lookaheadCharCode() {
              return this.input.charCodeAt(this.nextTokenStart());
            }
            codePointAtPos(t) {
              let r = this.input.charCodeAt(t);
              if ((r & 64512) === 55296 && ++t < this.input.length) {
                let e = this.input.charCodeAt(t);
                (e & 64512) === 56320 && (r = 65536 + ((r & 1023) << 10) + (e & 1023));
              }
              return r;
            }
            setStrict(t) {
              this.state.strict = t, t && (this.state.strictErrors.forEach((r) => {
                let [e, s] = r;
                return this.raise(e, { at: s });
              }), this.state.strictErrors.clear());
            }
            curContext() {
              return this.state.context[this.state.context.length - 1];
            }
            nextToken() {
              if (this.skipSpace(), this.state.start = this.state.pos, this.isLookahead || (this.state.startLoc = this.state.curPosition()), this.state.pos >= this.length) {
                this.finishToken(137);
                return;
              }
              this.getTokenFromCode(this.codePointAtPos(this.state.pos));
            }
            skipBlockComment(t) {
              let r;
              this.isLookahead || (r = this.state.curPosition());
              let e = this.state.pos, s = this.input.indexOf(t, e + 2);
              if (s === -1)
                throw this.raise(u.UnterminatedComment, { at: this.state.curPosition() });
              for (this.state.pos = s + t.length, Pt.lastIndex = e + 2; Pt.test(this.input) && Pt.lastIndex <= s; )
                ++this.state.curLine, this.state.lineStart = Pt.lastIndex;
              if (this.isLookahead)
                return;
              let i = { type: "CommentBlock", value: this.input.slice(e + 2, s), start: e, end: s + t.length, loc: new d(r, this.state.curPosition()) };
              return this.options.tokens && this.pushToken(i), i;
            }
            skipLineComment(t) {
              let r = this.state.pos, e;
              this.isLookahead || (e = this.state.curPosition());
              let s = this.input.charCodeAt(this.state.pos += t);
              if (this.state.pos < this.length)
                for (; !et(s) && ++this.state.pos < this.length; )
                  s = this.input.charCodeAt(this.state.pos);
              if (this.isLookahead)
                return;
              let i = this.state.pos, n = { type: "CommentLine", value: this.input.slice(r + t, i), start: r, end: i, loc: new d(e, this.state.curPosition()) };
              return this.options.tokens && this.pushToken(n), n;
            }
            skipSpace() {
              let t = this.state.pos, r = [];
              e:
                for (; this.state.pos < this.length; ) {
                  let e = this.input.charCodeAt(this.state.pos);
                  switch (e) {
                    case 32:
                    case 160:
                    case 9:
                      ++this.state.pos;
                      break;
                    case 13:
                      this.input.charCodeAt(this.state.pos + 1) === 10 && ++this.state.pos;
                    case 10:
                    case 8232:
                    case 8233:
                      ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
                      break;
                    case 47:
                      switch (this.input.charCodeAt(this.state.pos + 1)) {
                        case 42: {
                          let s = this.skipBlockComment("*/");
                          s !== void 0 && (this.addComment(s), this.options.attachComment && r.push(s));
                          break;
                        }
                        case 47: {
                          let s = this.skipLineComment(2);
                          s !== void 0 && (this.addComment(s), this.options.attachComment && r.push(s));
                          break;
                        }
                        default:
                          break e;
                      }
                      break;
                    default:
                      if (Il(e))
                        ++this.state.pos;
                      else if (e === 45 && !this.inModule) {
                        let s = this.state.pos;
                        if (this.input.charCodeAt(s + 1) === 45 && this.input.charCodeAt(s + 2) === 62 && (t === 0 || this.state.lineStart > t)) {
                          let i = this.skipLineComment(3);
                          i !== void 0 && (this.addComment(i), this.options.attachComment && r.push(i));
                        } else
                          break e;
                      } else if (e === 60 && !this.inModule) {
                        let s = this.state.pos;
                        if (this.input.charCodeAt(s + 1) === 33 && this.input.charCodeAt(s + 2) === 45 && this.input.charCodeAt(s + 3) === 45) {
                          let i = this.skipLineComment(4);
                          i !== void 0 && (this.addComment(i), this.options.attachComment && r.push(i));
                        } else
                          break e;
                      } else
                        break e;
                  }
                }
              if (r.length > 0) {
                let e = this.state.pos, s = { start: t, end: e, comments: r, leadingNode: null, trailingNode: null, containingNode: null };
                this.state.commentStack.push(s);
              }
            }
            finishToken(t, r) {
              this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();
              let e = this.state.type;
              this.state.type = t, this.state.value = r, this.isLookahead || this.updateContext(e);
            }
            replaceToken(t) {
              this.state.type = t, this.updateContext();
            }
            readToken_numberSign() {
              if (this.state.pos === 0 && this.readToken_interpreter())
                return;
              let t = this.state.pos + 1, r = this.codePointAtPos(t);
              if (r >= 48 && r <= 57)
                throw this.raise(u.UnexpectedDigitAfterHash, { at: this.state.curPosition() });
              if (r === 123 || r === 91 && this.hasPlugin("recordAndTuple")) {
                if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") === "bar")
                  throw this.raise(r === 123 ? u.RecordExpressionHashIncorrectStartSyntaxType : u.TupleExpressionHashIncorrectStartSyntaxType, { at: this.state.curPosition() });
                this.state.pos += 2, r === 123 ? this.finishToken(7) : this.finishToken(1);
              } else
                ge(r) ? (++this.state.pos, this.finishToken(136, this.readWord1(r))) : r === 92 ? (++this.state.pos, this.finishToken(136, this.readWord1())) : this.finishOp(27, 1);
            }
            readToken_dot() {
              let t = this.input.charCodeAt(this.state.pos + 1);
              if (t >= 48 && t <= 57) {
                this.readNumber(true);
                return;
              }
              t === 46 && this.input.charCodeAt(this.state.pos + 2) === 46 ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16));
            }
            readToken_slash() {
              this.input.charCodeAt(this.state.pos + 1) === 61 ? this.finishOp(31, 2) : this.finishOp(56, 1);
            }
            readToken_interpreter() {
              if (this.state.pos !== 0 || this.length < 2)
                return false;
              let t = this.input.charCodeAt(this.state.pos + 1);
              if (t !== 33)
                return false;
              let r = this.state.pos;
              for (this.state.pos += 1; !et(t) && ++this.state.pos < this.length; )
                t = this.input.charCodeAt(this.state.pos);
              let e = this.input.slice(r + 2, this.state.pos);
              return this.finishToken(28, e), true;
            }
            readToken_mult_modulo(t) {
              let r = t === 42 ? 55 : 54, e = 1, s = this.input.charCodeAt(this.state.pos + 1);
              t === 42 && s === 42 && (e++, s = this.input.charCodeAt(this.state.pos + 2), r = 57), s === 61 && !this.state.inType && (e++, r = t === 37 ? 33 : 30), this.finishOp(r, e);
            }
            readToken_pipe_amp(t) {
              let r = this.input.charCodeAt(this.state.pos + 1);
              if (r === t) {
                this.input.charCodeAt(this.state.pos + 2) === 61 ? this.finishOp(30, 3) : this.finishOp(t === 124 ? 41 : 42, 2);
                return;
              }
              if (t === 124) {
                if (r === 62) {
                  this.finishOp(39, 2);
                  return;
                }
                if (this.hasPlugin("recordAndTuple") && r === 125) {
                  if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                    throw this.raise(u.RecordExpressionBarIncorrectEndSyntaxType, { at: this.state.curPosition() });
                  this.state.pos += 2, this.finishToken(9);
                  return;
                }
                if (this.hasPlugin("recordAndTuple") && r === 93) {
                  if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                    throw this.raise(u.TupleExpressionBarIncorrectEndSyntaxType, { at: this.state.curPosition() });
                  this.state.pos += 2, this.finishToken(4);
                  return;
                }
              }
              if (r === 61) {
                this.finishOp(30, 2);
                return;
              }
              this.finishOp(t === 124 ? 43 : 45, 1);
            }
            readToken_caret() {
              let t = this.input.charCodeAt(this.state.pos + 1);
              if (t === 61 && !this.state.inType)
                this.finishOp(32, 2);
              else if (t === 94 && this.hasPlugin(["pipelineOperator", { proposal: "hack", topicToken: "^^" }])) {
                if (this.finishOp(37, 2), this.input.codePointAt(this.state.pos) === 94)
                  throw this.unexpected();
              } else
                this.finishOp(44, 1);
            }
            readToken_atSign() {
              this.input.charCodeAt(this.state.pos + 1) === 64 && this.hasPlugin(["pipelineOperator", { proposal: "hack", topicToken: "@@" }]) ? this.finishOp(38, 2) : this.finishOp(26, 1);
            }
            readToken_plus_min(t) {
              let r = this.input.charCodeAt(this.state.pos + 1);
              if (r === t) {
                this.finishOp(34, 2);
                return;
              }
              r === 61 ? this.finishOp(30, 2) : this.finishOp(53, 1);
            }
            readToken_lt() {
              let { pos: t } = this.state, r = this.input.charCodeAt(t + 1);
              if (r === 60) {
                if (this.input.charCodeAt(t + 2) === 61) {
                  this.finishOp(30, 3);
                  return;
                }
                this.finishOp(51, 2);
                return;
              }
              if (r === 61) {
                this.finishOp(49, 2);
                return;
              }
              this.finishOp(47, 1);
            }
            readToken_gt() {
              let { pos: t } = this.state, r = this.input.charCodeAt(t + 1);
              if (r === 62) {
                let e = this.input.charCodeAt(t + 2) === 62 ? 3 : 2;
                if (this.input.charCodeAt(t + e) === 61) {
                  this.finishOp(30, e + 1);
                  return;
                }
                this.finishOp(52, e);
                return;
              }
              if (r === 61) {
                this.finishOp(49, 2);
                return;
              }
              this.finishOp(48, 1);
            }
            readToken_eq_excl(t) {
              let r = this.input.charCodeAt(this.state.pos + 1);
              if (r === 61) {
                this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
                return;
              }
              if (t === 61 && r === 62) {
                this.state.pos += 2, this.finishToken(19);
                return;
              }
              this.finishOp(t === 61 ? 29 : 35, 1);
            }
            readToken_question() {
              let t = this.input.charCodeAt(this.state.pos + 1), r = this.input.charCodeAt(this.state.pos + 2);
              t === 63 ? r === 61 ? this.finishOp(30, 3) : this.finishOp(40, 2) : t === 46 && !(r >= 48 && r <= 57) ? (this.state.pos += 2, this.finishToken(18)) : (++this.state.pos, this.finishToken(17));
            }
            getTokenFromCode(t) {
              switch (t) {
                case 46:
                  this.readToken_dot();
                  return;
                case 40:
                  ++this.state.pos, this.finishToken(10);
                  return;
                case 41:
                  ++this.state.pos, this.finishToken(11);
                  return;
                case 59:
                  ++this.state.pos, this.finishToken(13);
                  return;
                case 44:
                  ++this.state.pos, this.finishToken(12);
                  return;
                case 91:
                  if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
                    if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                      throw this.raise(u.TupleExpressionBarIncorrectStartSyntaxType, { at: this.state.curPosition() });
                    this.state.pos += 2, this.finishToken(2);
                  } else
                    ++this.state.pos, this.finishToken(0);
                  return;
                case 93:
                  ++this.state.pos, this.finishToken(3);
                  return;
                case 123:
                  if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
                    if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                      throw this.raise(u.RecordExpressionBarIncorrectStartSyntaxType, { at: this.state.curPosition() });
                    this.state.pos += 2, this.finishToken(6);
                  } else
                    ++this.state.pos, this.finishToken(5);
                  return;
                case 125:
                  ++this.state.pos, this.finishToken(8);
                  return;
                case 58:
                  this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58 ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14));
                  return;
                case 63:
                  this.readToken_question();
                  return;
                case 96:
                  this.readTemplateToken();
                  return;
                case 48: {
                  let r = this.input.charCodeAt(this.state.pos + 1);
                  if (r === 120 || r === 88) {
                    this.readRadixNumber(16);
                    return;
                  }
                  if (r === 111 || r === 79) {
                    this.readRadixNumber(8);
                    return;
                  }
                  if (r === 98 || r === 66) {
                    this.readRadixNumber(2);
                    return;
                  }
                }
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                  this.readNumber(false);
                  return;
                case 34:
                case 39:
                  this.readString(t);
                  return;
                case 47:
                  this.readToken_slash();
                  return;
                case 37:
                case 42:
                  this.readToken_mult_modulo(t);
                  return;
                case 124:
                case 38:
                  this.readToken_pipe_amp(t);
                  return;
                case 94:
                  this.readToken_caret();
                  return;
                case 43:
                case 45:
                  this.readToken_plus_min(t);
                  return;
                case 60:
                  this.readToken_lt();
                  return;
                case 62:
                  this.readToken_gt();
                  return;
                case 61:
                case 33:
                  this.readToken_eq_excl(t);
                  return;
                case 126:
                  this.finishOp(36, 1);
                  return;
                case 64:
                  this.readToken_atSign();
                  return;
                case 35:
                  this.readToken_numberSign();
                  return;
                case 92:
                  this.readWord();
                  return;
                default:
                  if (ge(t)) {
                    this.readWord(t);
                    return;
                  }
              }
              throw this.raise(u.InvalidOrUnexpectedToken, { at: this.state.curPosition(), unexpected: String.fromCodePoint(t) });
            }
            finishOp(t, r) {
              let e = this.input.slice(this.state.pos, this.state.pos + r);
              this.state.pos += r, this.finishToken(t, e);
            }
            readRegexp() {
              let t = this.state.startLoc, r = this.state.start + 1, e, s, { pos: i } = this.state;
              for (; ; ++i) {
                if (i >= this.length)
                  throw this.raise(u.UnterminatedRegExp, { at: y(t, 1) });
                let c = this.input.charCodeAt(i);
                if (et(c))
                  throw this.raise(u.UnterminatedRegExp, { at: y(t, 1) });
                if (e)
                  e = false;
                else {
                  if (c === 91)
                    s = true;
                  else if (c === 93 && s)
                    s = false;
                  else if (c === 47 && !s)
                    break;
                  e = c === 92;
                }
              }
              let a = this.input.slice(r, i);
              ++i;
              let n = "", o = () => y(t, i + 2 - r);
              for (; i < this.length; ) {
                let c = this.codePointAtPos(i), p = String.fromCharCode(c);
                if (Ol.has(c))
                  c === 118 ? (this.expectPlugin("regexpUnicodeSets", o()), n.includes("u") && this.raise(u.IncompatibleRegExpUVFlags, { at: o() })) : c === 117 && n.includes("v") && this.raise(u.IncompatibleRegExpUVFlags, { at: o() }), n.includes(p) && this.raise(u.DuplicateRegExpFlags, { at: o() });
                else if (Re(c) || c === 92)
                  this.raise(u.MalformedRegExpFlags, { at: o() });
                else
                  break;
                ++i, n += p;
              }
              this.state.pos = i, this.finishToken(135, { pattern: a, flags: n });
            }
            readInt(t, r) {
              let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, { n: i, pos: a } = qr(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, r, e, s, this.errorHandlers_readInt, false);
              return this.state.pos = a, i;
            }
            readRadixNumber(t) {
              let r = this.state.curPosition(), e = false;
              this.state.pos += 2;
              let s = this.readInt(t);
              s == null && this.raise(u.InvalidDigit, { at: y(r, 2), radix: t });
              let i = this.input.charCodeAt(this.state.pos);
              if (i === 110)
                ++this.state.pos, e = true;
              else if (i === 109)
                throw this.raise(u.InvalidDecimal, { at: r });
              if (ge(this.codePointAtPos(this.state.pos)))
                throw this.raise(u.NumberIdentifier, { at: this.state.curPosition() });
              if (e) {
                let a = this.input.slice(r.index, this.state.pos).replace(/[_n]/g, "");
                this.finishToken(133, a);
                return;
              }
              this.finishToken(132, s);
            }
            readNumber(t) {
              let r = this.state.pos, e = this.state.curPosition(), s = false, i = false, a = false, n = false, o = false;
              !t && this.readInt(10) === null && this.raise(u.InvalidNumber, { at: this.state.curPosition() });
              let c = this.state.pos - r >= 2 && this.input.charCodeAt(r) === 48;
              if (c) {
                let A = this.input.slice(r, this.state.pos);
                if (this.recordStrictModeErrors(u.StrictOctalLiteral, { at: e }), !this.state.strict) {
                  let b = A.indexOf("_");
                  b > 0 && this.raise(u.ZeroDigitNumericSeparator, { at: y(e, b) });
                }
                o = c && !/[89]/.test(A);
              }
              let p = this.input.charCodeAt(this.state.pos);
              if (p === 46 && !o && (++this.state.pos, this.readInt(10), s = true, p = this.input.charCodeAt(this.state.pos)), (p === 69 || p === 101) && !o && (p = this.input.charCodeAt(++this.state.pos), (p === 43 || p === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(u.InvalidOrMissingExponent, { at: e }), s = true, n = true, p = this.input.charCodeAt(this.state.pos)), p === 110 && ((s || c) && this.raise(u.InvalidBigIntLiteral, { at: e }), ++this.state.pos, i = true), p === 109 && (this.expectPlugin("decimal", this.state.curPosition()), (n || c) && this.raise(u.InvalidDecimal, { at: e }), ++this.state.pos, a = true), ge(this.codePointAtPos(this.state.pos)))
                throw this.raise(u.NumberIdentifier, { at: this.state.curPosition() });
              let m = this.input.slice(r, this.state.pos).replace(/[_mn]/g, "");
              if (i) {
                this.finishToken(133, m);
                return;
              }
              if (a) {
                this.finishToken(134, m);
                return;
              }
              let x = o ? parseInt(m, 8) : parseFloat(m);
              this.finishToken(132, x);
            }
            readCodePoint(t) {
              let { code: r, pos: e } = Ur(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, this.errorHandlers_readCodePoint);
              return this.state.pos = e, r;
            }
            readString(t) {
              let { str: r, pos: e, curLine: s, lineStart: i } = jr(t === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
              this.state.pos = e + 1, this.state.lineStart = i, this.state.curLine = s, this.finishToken(131, r);
            }
            readTemplateContinuation() {
              this.match(8) || this.unexpected(null, 8), this.state.pos--, this.readTemplateToken();
            }
            readTemplateToken() {
              let t = this.input[this.state.pos], { str: r, firstInvalidLoc: e, pos: s, curLine: i, lineStart: a } = jr("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
              this.state.pos = s + 1, this.state.lineStart = a, this.state.curLine = i, e && (this.state.firstInvalidTemplateEscapePos = new f(e.curLine, e.pos - e.lineStart, e.pos)), this.input.codePointAt(s) === 96 ? this.finishToken(24, e ? null : t + r + "`") : (this.state.pos++, this.finishToken(25, e ? null : t + r + "${"));
            }
            recordStrictModeErrors(t, r) {
              let { at: e } = r, s = e.index;
              this.state.strict && !this.state.strictErrors.has(s) ? this.raise(t, { at: e }) : this.state.strictErrors.set(s, [t, e]);
            }
            readWord1(t) {
              this.state.containsEsc = false;
              let r = "", e = this.state.pos, s = this.state.pos;
              for (t !== void 0 && (this.state.pos += t <= 65535 ? 1 : 2); this.state.pos < this.length; ) {
                let i = this.codePointAtPos(this.state.pos);
                if (Re(i))
                  this.state.pos += i <= 65535 ? 1 : 2;
                else if (i === 92) {
                  this.state.containsEsc = true, r += this.input.slice(s, this.state.pos);
                  let a = this.state.curPosition(), n = this.state.pos === e ? ge : Re;
                  if (this.input.charCodeAt(++this.state.pos) !== 117) {
                    this.raise(u.MissingUnicodeEscape, { at: this.state.curPosition() }), s = this.state.pos - 1;
                    continue;
                  }
                  ++this.state.pos;
                  let o = this.readCodePoint(true);
                  o !== null && (n(o) || this.raise(u.EscapedCharNotAnIdentifier, { at: a }), r += String.fromCodePoint(o)), s = this.state.pos;
                } else
                  break;
              }
              return r + this.input.slice(s, this.state.pos);
            }
            readWord(t) {
              let r = this.readWord1(t), e = zt.get(r);
              e !== void 0 ? this.finishToken(e, Ee(e)) : this.finishToken(130, r);
            }
            checkKeywordEscapes() {
              let { type: t } = this.state;
              Yt(t) && this.state.containsEsc && this.raise(u.InvalidEscapedReservedWord, { at: this.state.startLoc, reservedWord: Ee(t) });
            }
            raise(t, r) {
              let { at: e } = r, s = h(r, Fl), i = e instanceof f ? e : e.loc.start, a = t({ loc: i, details: s });
              if (!this.options.errorRecovery)
                throw a;
              return this.isLookahead || this.state.errors.push(a), a;
            }
            raiseOverwrite(t, r) {
              let { at: e } = r, s = h(r, Ll), i = e instanceof f ? e : e.loc.start, a = i.index, n = this.state.errors;
              for (let o = n.length - 1; o >= 0; o--) {
                let c = n[o];
                if (c.loc.index === a)
                  return n[o] = t({ loc: i, details: s });
                if (c.loc.index < a)
                  break;
              }
              return this.raise(t, r);
            }
            updateContext(t) {
            }
            unexpected(t, r) {
              throw this.raise(u.UnexpectedToken, { expected: r ? Ee(r) : null, at: t != null ? t : this.state.startLoc });
            }
            expectPlugin(t, r) {
              if (this.hasPlugin(t))
                return true;
              throw this.raise(u.MissingPlugin, { at: r != null ? r : this.state.startLoc, missingPlugin: [t] });
            }
            expectOnePlugin(t) {
              if (!t.some((r) => this.hasPlugin(r)))
                throw this.raise(u.MissingOneOfPlugins, { at: this.state.startLoc, missingPlugin: t });
            }
            errorBuilder(t) {
              return (r, e, s) => {
                this.raise(t, { at: tt(r, e, s) });
              };
            }
          }, Ml = class {
            constructor() {
              this.privateNames = /* @__PURE__ */ new Set(), this.loneAccessors = /* @__PURE__ */ new Map(), this.undefinedPrivateNames = /* @__PURE__ */ new Map();
            }
          }, _l = class {
            constructor(t) {
              this.parser = void 0, this.stack = [], this.undefinedPrivateNames = /* @__PURE__ */ new Map(), this.parser = t;
            }
            current() {
              return this.stack[this.stack.length - 1];
            }
            enter() {
              this.stack.push(new Ml());
            }
            exit() {
              let t = this.stack.pop(), r = this.current();
              for (let [e, s] of Array.from(t.undefinedPrivateNames))
                r ? r.undefinedPrivateNames.has(e) || r.undefinedPrivateNames.set(e, s) : this.parser.raise(u.InvalidPrivateFieldResolution, { at: s, identifierName: e });
            }
            declarePrivateName(t, r, e) {
              let { privateNames: s, loneAccessors: i, undefinedPrivateNames: a } = this.current(), n = s.has(t);
              if (r & ls) {
                let o = n && i.get(t);
                if (o) {
                  let c = o & gt, p = r & gt, m = o & ls, x = r & ls;
                  n = m === x || c !== p, n || i.delete(t);
                } else
                  n || i.set(t, r);
              }
              n && this.parser.raise(u.PrivateNameRedeclaration, { at: e, identifierName: t }), s.add(t), a.delete(t);
            }
            usePrivateName(t, r) {
              let e;
              for (e of this.stack)
                if (e.privateNames.has(t))
                  return;
              e ? e.undefinedPrivateNames.set(t, r) : this.parser.raise(u.InvalidPrivateFieldResolution, { at: r, identifierName: t });
            }
          }, Rl = 0, $r = 1, ms = 2, Hr = 3, Tt = class {
            constructor() {
              let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Rl;
              this.type = void 0, this.type = t;
            }
            canBeArrowParameterDeclaration() {
              return this.type === ms || this.type === $r;
            }
            isCertainlyParameterDeclaration() {
              return this.type === Hr;
            }
          }, zr = class extends Tt {
            constructor(t) {
              super(t), this.declarationErrors = /* @__PURE__ */ new Map();
            }
            recordDeclarationError(t, r) {
              let { at: e } = r, s = e.index;
              this.declarationErrors.set(s, [t, e]);
            }
            clearDeclarationError(t) {
              this.declarationErrors.delete(t);
            }
            iterateErrors(t) {
              this.declarationErrors.forEach(t);
            }
          }, jl = class {
            constructor(t) {
              this.parser = void 0, this.stack = [new Tt()], this.parser = t;
            }
            enter(t) {
              this.stack.push(t);
            }
            exit() {
              this.stack.pop();
            }
            recordParameterInitializerError(t, r) {
              let { at: e } = r, s = { at: e.loc.start }, { stack: i } = this, a = i.length - 1, n = i[a];
              for (; !n.isCertainlyParameterDeclaration(); ) {
                if (n.canBeArrowParameterDeclaration())
                  n.recordDeclarationError(t, s);
                else
                  return;
                n = i[--a];
              }
              this.parser.raise(t, s);
            }
            recordArrowParameterBindingError(t, r) {
              let { at: e } = r, { stack: s } = this, i = s[s.length - 1], a = { at: e.loc.start };
              if (i.isCertainlyParameterDeclaration())
                this.parser.raise(t, a);
              else if (i.canBeArrowParameterDeclaration())
                i.recordDeclarationError(t, a);
              else
                return;
            }
            recordAsyncArrowParametersError(t) {
              let { at: r } = t, { stack: e } = this, s = e.length - 1, i = e[s];
              for (; i.canBeArrowParameterDeclaration(); )
                i.type === ms && i.recordDeclarationError(u.AwaitBindingIdentifier, { at: r }), i = e[--s];
            }
            validateAsPattern() {
              let { stack: t } = this, r = t[t.length - 1];
              r.canBeArrowParameterDeclaration() && r.iterateErrors((e) => {
                let [s, i] = e;
                this.parser.raise(s, { at: i });
                let a = t.length - 2, n = t[a];
                for (; n.canBeArrowParameterDeclaration(); )
                  n.clearDeclarationError(i.index), n = t[--a];
              });
            }
          };
          function ql() {
            return new Tt(Hr);
          }
          function Ul() {
            return new zr($r);
          }
          function $l() {
            return new zr(ms);
          }
          function Vr() {
            return new Tt();
          }
          var $e = 0, Kr = 1, vt = 2, Wr = 4, He = 8, Hl = class {
            constructor() {
              this.stacks = [];
            }
            enter(t) {
              this.stacks.push(t);
            }
            exit() {
              this.stacks.pop();
            }
            currentFlags() {
              return this.stacks[this.stacks.length - 1];
            }
            get hasAwait() {
              return (this.currentFlags() & vt) > 0;
            }
            get hasYield() {
              return (this.currentFlags() & Kr) > 0;
            }
            get hasReturn() {
              return (this.currentFlags() & Wr) > 0;
            }
            get hasIn() {
              return (this.currentFlags() & He) > 0;
            }
          };
          function Et(t, r) {
            return (t ? vt : 0) | (r ? Kr : 0);
          }
          var zl = class extends Bl {
            addExtra(t, r, e) {
              let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
              if (!t)
                return;
              let i = t.extra = t.extra || {};
              s ? i[r] = e : Object.defineProperty(i, r, { enumerable: s, value: e });
            }
            isContextual(t) {
              return this.state.type === t && !this.state.containsEsc;
            }
            isUnparsedContextual(t, r) {
              let e = t + r.length;
              if (this.input.slice(t, e) === r) {
                let s = this.input.charCodeAt(e);
                return !(Re(s) || (s & 64512) === 55296);
              }
              return false;
            }
            isLookaheadContextual(t) {
              let r = this.nextTokenStart();
              return this.isUnparsedContextual(r, t);
            }
            eatContextual(t) {
              return this.isContextual(t) ? (this.next(), true) : false;
            }
            expectContextual(t, r) {
              if (!this.eatContextual(t))
                throw r != null ? this.raise(r, { at: this.state.startLoc }) : this.unexpected(null, t);
            }
            canInsertSemicolon() {
              return this.match(137) || this.match(8) || this.hasPrecedingLineBreak();
            }
            hasPrecedingLineBreak() {
              return ps.test(this.input.slice(this.state.lastTokEndLoc.index, this.state.start));
            }
            hasFollowingLineBreak() {
              return Mr.lastIndex = this.state.end, Mr.test(this.input);
            }
            isLineTerminator() {
              return this.eat(13) || this.canInsertSemicolon();
            }
            semicolon() {
              ((arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true) ? this.isLineTerminator() : this.eat(13)) || this.raise(u.MissingSemicolon, { at: this.state.lastTokEndLoc });
            }
            expect(t, r) {
              this.eat(t) || this.unexpected(r, t);
            }
            tryParse(t) {
              let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.clone(), e = { node: null };
              try {
                let s = t(function() {
                  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                  throw e.node = i, e;
                });
                if (this.state.errors.length > r.errors.length) {
                  let i = this.state;
                  return this.state = r, this.state.tokensLength = i.tokensLength, { node: s, error: i.errors[r.errors.length], thrown: false, aborted: false, failState: i };
                }
                return { node: s, error: null, thrown: false, aborted: false, failState: null };
              } catch (s) {
                let i = this.state;
                if (this.state = r, s instanceof SyntaxError)
                  return { node: null, error: s, thrown: true, aborted: false, failState: i };
                if (s === e)
                  return { node: e.node, error: null, thrown: false, aborted: true, failState: i };
                throw s;
              }
            }
            checkExpressionErrors(t, r) {
              if (!t)
                return false;
              let { shorthandAssignLoc: e, doubleProtoLoc: s, privateKeyLoc: i, optionalParametersLoc: a } = t, n = !!e || !!s || !!a || !!i;
              if (!r)
                return n;
              e != null && this.raise(u.InvalidCoverInitializedName, { at: e }), s != null && this.raise(u.DuplicateProto, { at: s }), i != null && this.raise(u.UnexpectedPrivateField, { at: i }), a != null && this.unexpected(a);
            }
            isLiteralPropertyName() {
              return gr(this.state.type);
            }
            isPrivateName(t) {
              return t.type === "PrivateName";
            }
            getPrivateNameSV(t) {
              return t.id.name;
            }
            hasPropertyAsPrivateName(t) {
              return (t.type === "MemberExpression" || t.type === "OptionalMemberExpression") && this.isPrivateName(t.property);
            }
            isOptionalChain(t) {
              return t.type === "OptionalMemberExpression" || t.type === "OptionalCallExpression";
            }
            isObjectProperty(t) {
              return t.type === "ObjectProperty";
            }
            isObjectMethod(t) {
              return t.type === "ObjectMethod";
            }
            initializeScopes() {
              let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.sourceType === "module", r = this.state.labels;
              this.state.labels = [];
              let e = this.exportedIdentifiers;
              this.exportedIdentifiers = /* @__PURE__ */ new Set();
              let s = this.inModule;
              this.inModule = t;
              let i = this.scope, a = this.getScopeHandler();
              this.scope = new a(this, t);
              let n = this.prodParam;
              this.prodParam = new Hl();
              let o = this.classScope;
              this.classScope = new _l(this);
              let c = this.expressionScope;
              return this.expressionScope = new jl(this), () => {
                this.state.labels = r, this.exportedIdentifiers = e, this.inModule = s, this.scope = i, this.prodParam = n, this.classScope = o, this.expressionScope = c;
              };
            }
            enterInitialScopes() {
              let t = $e;
              this.inModule && (t |= vt), this.scope.enter(qe), this.prodParam.enter(t);
            }
            checkDestructuringPrivate(t) {
              let { privateKeyLoc: r } = t;
              r !== null && this.expectPlugin("destructuringPrivate", r);
            }
          }, Ct = class {
            constructor() {
              this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null;
            }
          }, bt = class {
            constructor(t, r, e) {
              this.type = "", this.start = r, this.end = 0, this.loc = new d(e), t != null && t.options.ranges && (this.range = [r, 0]), t != null && t.filename && (this.loc.filename = t.filename);
            }
          }, ys = bt.prototype;
          ys.__clone = function() {
            let t = new bt(void 0, this.start, this.loc.start), r = Object.keys(this);
            for (let e = 0, s = r.length; e < s; e++) {
              let i = r[e];
              i !== "leadingComments" && i !== "trailingComments" && i !== "innerComments" && (t[i] = this[i]);
            }
            return t;
          };
          function Vl(t) {
            return Te(t);
          }
          function Te(t) {
            let { type: r, start: e, end: s, loc: i, range: a, extra: n, name: o } = t, c = Object.create(ys);
            return c.type = r, c.start = e, c.end = s, c.loc = i, c.range = a, c.extra = n, c.name = o, r === "Placeholder" && (c.expectedNode = t.expectedNode), c;
          }
          function Kl(t) {
            let { type: r, start: e, end: s, loc: i, range: a, extra: n } = t;
            if (r === "Placeholder")
              return Vl(t);
            let o = Object.create(ys);
            return o.type = r, o.start = e, o.end = s, o.loc = i, o.range = a, t.raw !== void 0 ? o.raw = t.raw : o.extra = n, o.value = t.value, o;
          }
          var Wl = class extends zl {
            startNode() {
              return new bt(this, this.state.start, this.state.startLoc);
            }
            startNodeAt(t) {
              return new bt(this, t.index, t);
            }
            startNodeAtNode(t) {
              return this.startNodeAt(t.loc.start);
            }
            finishNode(t, r) {
              return this.finishNodeAt(t, r, this.state.lastTokEndLoc);
            }
            finishNodeAt(t, r, e) {
              return t.type = r, t.end = e.index, t.loc.end = e, this.options.ranges && (t.range[1] = e.index), this.options.attachComment && this.processComment(t), t;
            }
            resetStartLocation(t, r) {
              t.start = r.index, t.loc.start = r, this.options.ranges && (t.range[0] = r.index);
            }
            resetEndLocation(t) {
              let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.lastTokEndLoc;
              t.end = r.index, t.loc.end = r, this.options.ranges && (t.range[1] = r.index);
            }
            resetStartLocationFromNode(t, r) {
              this.resetStartLocation(t, r.loc.start);
            }
          }, Gl = /* @__PURE__ */ new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]), D = _`flow`({ AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.", AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.", AssignReservedType: (t) => {
            let { reservedType: r } = t;
            return `Cannot overwrite reserved type ${r}.`;
          }, DeclareClassElement: "The `declare` modifier can only appear on class fields.", DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.", DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.", EnumBooleanMemberNotInitialized: (t) => {
            let { memberName: r, enumName: e } = t;
            return `Boolean enum members need to be initialized. Use either \`${r} = true,\` or \`${r} = false,\` in enum \`${e}\`.`;
          }, EnumDuplicateMemberName: (t) => {
            let { memberName: r, enumName: e } = t;
            return `Enum member names need to be unique, but the name \`${r}\` has already been used before in enum \`${e}\`.`;
          }, EnumInconsistentMemberValues: (t) => {
            let { enumName: r } = t;
            return `Enum \`${r}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`;
          }, EnumInvalidExplicitType: (t) => {
            let { invalidEnumType: r, enumName: e } = t;
            return `Enum type \`${r}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${e}\`.`;
          }, EnumInvalidExplicitTypeUnknownSupplied: (t) => {
            let { enumName: r } = t;
            return `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${r}\`.`;
          }, EnumInvalidMemberInitializerPrimaryType: (t) => {
            let { enumName: r, memberName: e, explicitType: s } = t;
            return `Enum \`${r}\` has type \`${s}\`, so the initializer of \`${e}\` needs to be a ${s} literal.`;
          }, EnumInvalidMemberInitializerSymbolType: (t) => {
            let { enumName: r, memberName: e } = t;
            return `Symbol enum members cannot be initialized. Use \`${e},\` in enum \`${r}\`.`;
          }, EnumInvalidMemberInitializerUnknownType: (t) => {
            let { enumName: r, memberName: e } = t;
            return `The enum member initializer for \`${e}\` needs to be a literal (either a boolean, number, or string) in enum \`${r}\`.`;
          }, EnumInvalidMemberName: (t) => {
            let { enumName: r, memberName: e, suggestion: s } = t;
            return `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${e}\`, consider using \`${s}\`, in enum \`${r}\`.`;
          }, EnumNumberMemberNotInitialized: (t) => {
            let { enumName: r, memberName: e } = t;
            return `Number enum members need to be initialized, e.g. \`${e} = 1\` in enum \`${r}\`.`;
          }, EnumStringMemberInconsistentlyInitailized: (t) => {
            let { enumName: r } = t;
            return `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${r}\`.`;
          }, GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.", ImportReflectionHasImportType: "An `import module` declaration can not use `type` or `typeof` keyword.", ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.", InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.", InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.", InexactVariance: "Explicit inexact syntax cannot have variance.", InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.", MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.", NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.", NestedFlowComment: "Cannot have a flow comment inside another flow comment.", PatternIsOptional: Object.assign({ message: "A binding pattern parameter cannot be optional in an implementation signature." }, { reasonCode: "OptionalBindingPattern" }), SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.", SpreadVariance: "Spread properties cannot have variance.", ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.", ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.", ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.", ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.", ThisParamNoDefault: "The `this` parameter may not have a default value.", TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.", TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.", UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.", UnexpectedReservedType: (t) => {
            let { reservedType: r } = t;
            return `Unexpected reserved type ${r}.`;
          }, UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.", UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.", UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.", UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".', UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.", UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.", UnsupportedDeclareExportKind: (t) => {
            let { unsupportedExportKind: r, suggestion: e } = t;
            return `\`declare export ${r}\` is not supported. Use \`${e}\` instead.`;
          }, UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.", UnterminatedFlowComment: "Unterminated flow-comment." });
          function Jl(t) {
            return t.type === "DeclareExportAllDeclaration" || t.type === "DeclareExportDeclaration" && (!t.declaration || t.declaration.type !== "TypeAlias" && t.declaration.type !== "InterfaceDeclaration");
          }
          function xs(t) {
            return t.importKind === "type" || t.importKind === "typeof";
          }
          function Gr(t) {
            return ye(t) && t !== 97;
          }
          var Xl = { const: "declare export var", let: "declare export var", type: "export type", interface: "export interface" };
          function Yl(t, r) {
            let e = [], s = [];
            for (let i = 0; i < t.length; i++)
              (r(t[i], i, t) ? e : s).push(t[i]);
            return [e, s];
          }
          var Ql = /\*?\s*@((?:no)?flow)\b/, Zl = (t) => class extends t {
            constructor() {
              super(...arguments), this.flowPragma = void 0;
            }
            getScopeHandler() {
              return El;
            }
            shouldParseTypes() {
              return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
            }
            shouldParseEnums() {
              return !!this.getPluginOption("flow", "enums");
            }
            finishToken(e, s) {
              return e !== 131 && e !== 13 && e !== 28 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(e, s);
            }
            addComment(e) {
              if (this.flowPragma === void 0) {
                let s = Ql.exec(e.value);
                if (s)
                  if (s[1] === "flow")
                    this.flowPragma = "flow";
                  else if (s[1] === "noflow")
                    this.flowPragma = "noflow";
                  else
                    throw new Error("Unexpected flow pragma");
              }
              return super.addComment(e);
            }
            flowParseTypeInitialiser(e) {
              let s = this.state.inType;
              this.state.inType = true, this.expect(e || 14);
              let i = this.flowParseType();
              return this.state.inType = s, i;
            }
            flowParsePredicate() {
              let e = this.startNode(), s = this.state.startLoc;
              return this.next(), this.expectContextual(108), this.state.lastTokStart > s.index + 1 && this.raise(D.UnexpectedSpaceBetweenModuloChecks, { at: s }), this.eat(10) ? (e.value = super.parseExpression(), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate");
            }
            flowParseTypeAndPredicateInitialiser() {
              let e = this.state.inType;
              this.state.inType = true, this.expect(14);
              let s = null, i = null;
              return this.match(54) ? (this.state.inType = e, i = this.flowParsePredicate()) : (s = this.flowParseType(), this.state.inType = e, this.match(54) && (i = this.flowParsePredicate())), [s, i];
            }
            flowParseDeclareClass(e) {
              return this.next(), this.flowParseInterfaceish(e, true), this.finishNode(e, "DeclareClass");
            }
            flowParseDeclareFunction(e) {
              this.next();
              let s = e.id = this.parseIdentifier(), i = this.startNode(), a = this.startNode();
              this.match(47) ? i.typeParameters = this.flowParseTypeParameterDeclaration() : i.typeParameters = null, this.expect(10);
              let n = this.flowParseFunctionTypeParams();
              return i.params = n.params, i.rest = n.rest, i.this = n._this, this.expect(11), [i.returnType, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), a.typeAnnotation = this.finishNode(i, "FunctionTypeAnnotation"), s.typeAnnotation = this.finishNode(a, "TypeAnnotation"), this.resetEndLocation(s), this.semicolon(), this.scope.declareName(e.id.name, xl, e.id.loc.start), this.finishNode(e, "DeclareFunction");
            }
            flowParseDeclare(e, s) {
              if (this.match(80))
                return this.flowParseDeclareClass(e);
              if (this.match(68))
                return this.flowParseDeclareFunction(e);
              if (this.match(74))
                return this.flowParseDeclareVariable(e);
              if (this.eatContextual(125))
                return this.match(16) ? this.flowParseDeclareModuleExports(e) : (s && this.raise(D.NestedDeclareModule, { at: this.state.lastTokStartLoc }), this.flowParseDeclareModule(e));
              if (this.isContextual(128))
                return this.flowParseDeclareTypeAlias(e);
              if (this.isContextual(129))
                return this.flowParseDeclareOpaqueType(e);
              if (this.isContextual(127))
                return this.flowParseDeclareInterface(e);
              if (this.match(82))
                return this.flowParseDeclareExportDeclaration(e, s);
              throw this.unexpected();
            }
            flowParseDeclareVariable(e) {
              return this.next(), e.id = this.flowParseTypeAnnotatableIdentifier(true), this.scope.declareName(e.id.name, xt, e.id.loc.start), this.semicolon(), this.finishNode(e, "DeclareVariable");
            }
            flowParseDeclareModule(e) {
              this.scope.enter(je), this.match(131) ? e.id = super.parseExprAtom() : e.id = this.parseIdentifier();
              let s = e.body = this.startNode(), i = s.body = [];
              for (this.expect(5); !this.match(8); ) {
                let o = this.startNode();
                this.match(83) ? (this.next(), !this.isContextual(128) && !this.match(87) && this.raise(D.InvalidNonTypeImportInDeclareModule, { at: this.state.lastTokStartLoc }), super.parseImport(o)) : (this.expectContextual(123, D.UnsupportedStatementInDeclareModule), o = this.flowParseDeclare(o, true)), i.push(o);
              }
              this.scope.exit(), this.expect(8), this.finishNode(s, "BlockStatement");
              let a = null, n = false;
              return i.forEach((o) => {
                Jl(o) ? (a === "CommonJS" && this.raise(D.AmbiguousDeclareModuleKind, { at: o }), a = "ES") : o.type === "DeclareModuleExports" && (n && this.raise(D.DuplicateDeclareModuleExports, { at: o }), a === "ES" && this.raise(D.AmbiguousDeclareModuleKind, { at: o }), a = "CommonJS", n = true);
              }), e.kind = a || "CommonJS", this.finishNode(e, "DeclareModule");
            }
            flowParseDeclareExportDeclaration(e, s) {
              if (this.expect(82), this.eat(65))
                return this.match(68) || this.match(80) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = true, this.finishNode(e, "DeclareExportDeclaration");
              if (this.match(75) || this.isLet() || (this.isContextual(128) || this.isContextual(127)) && !s) {
                let i = this.state.value;
                throw this.raise(D.UnsupportedDeclareExportKind, { at: this.state.startLoc, unsupportedExportKind: i, suggestion: Xl[i] });
              }
              if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(129))
                return e.declaration = this.flowParseDeclare(this.startNode()), e.default = false, this.finishNode(e, "DeclareExportDeclaration");
              if (this.match(55) || this.match(5) || this.isContextual(127) || this.isContextual(128) || this.isContextual(129))
                return e = this.parseExport(e, null), e.type === "ExportNamedDeclaration" && (e.type = "ExportDeclaration", e.default = false, delete e.exportKind), e.type = "Declare" + e.type, e;
              throw this.unexpected();
            }
            flowParseDeclareModuleExports(e) {
              return this.next(), this.expectContextual(109), e.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(e, "DeclareModuleExports");
            }
            flowParseDeclareTypeAlias(e) {
              this.next();
              let s = this.flowParseTypeAlias(e);
              return s.type = "DeclareTypeAlias", s;
            }
            flowParseDeclareOpaqueType(e) {
              this.next();
              let s = this.flowParseOpaqueType(e, true);
              return s.type = "DeclareOpaqueType", s;
            }
            flowParseDeclareInterface(e) {
              return this.next(), this.flowParseInterfaceish(e), this.finishNode(e, "DeclareInterface");
            }
            flowParseInterfaceish(e) {
              let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
              if (e.id = this.flowParseRestrictedIdentifier(!s, true), this.scope.declareName(e.id.name, s ? Dr : De, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.extends = [], e.implements = [], e.mixins = [], this.eat(81))
                do
                  e.extends.push(this.flowParseInterfaceExtends());
                while (!s && this.eat(12));
              if (this.isContextual(115)) {
                this.next();
                do
                  e.mixins.push(this.flowParseInterfaceExtends());
                while (this.eat(12));
              }
              if (this.isContextual(111)) {
                this.next();
                do
                  e.implements.push(this.flowParseInterfaceExtends());
                while (this.eat(12));
              }
              e.body = this.flowParseObjectType({ allowStatic: s, allowExact: false, allowSpread: false, allowProto: s, allowInexact: false });
            }
            flowParseInterfaceExtends() {
              let e = this.startNode();
              return e.id = this.flowParseQualifiedTypeIdentifier(), this.match(47) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, this.finishNode(e, "InterfaceExtends");
            }
            flowParseInterface(e) {
              return this.flowParseInterfaceish(e), this.finishNode(e, "InterfaceDeclaration");
            }
            checkNotUnderscore(e) {
              e === "_" && this.raise(D.UnexpectedReservedUnderscore, { at: this.state.startLoc });
            }
            checkReservedType(e, s, i) {
              Gl.has(e) && this.raise(i ? D.AssignReservedType : D.UnexpectedReservedType, { at: s, reservedType: e });
            }
            flowParseRestrictedIdentifier(e, s) {
              return this.checkReservedType(this.state.value, this.state.startLoc, s), this.parseIdentifier(e);
            }
            flowParseTypeAlias(e) {
              return e.id = this.flowParseRestrictedIdentifier(false, true), this.scope.declareName(e.id.name, De, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.right = this.flowParseTypeInitialiser(29), this.semicolon(), this.finishNode(e, "TypeAlias");
            }
            flowParseOpaqueType(e, s) {
              return this.expectContextual(128), e.id = this.flowParseRestrictedIdentifier(true, true), this.scope.declareName(e.id.name, De, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.supertype = null, this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)), e.impltype = null, s || (e.impltype = this.flowParseTypeInitialiser(29)), this.semicolon(), this.finishNode(e, "OpaqueType");
            }
            flowParseTypeParameter() {
              let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, s = this.state.startLoc, i = this.startNode(), a = this.flowParseVariance(), n = this.flowParseTypeAnnotatableIdentifier();
              return i.name = n.name, i.variance = a, i.bound = n.typeAnnotation, this.match(29) ? (this.eat(29), i.default = this.flowParseType()) : e && this.raise(D.MissingTypeParamDefault, { at: s }), this.finishNode(i, "TypeParameter");
            }
            flowParseTypeParameterDeclaration() {
              let e = this.state.inType, s = this.startNode();
              s.params = [], this.state.inType = true, this.match(47) || this.match(140) ? this.next() : this.unexpected();
              let i = false;
              do {
                let a = this.flowParseTypeParameter(i);
                s.params.push(a), a.default && (i = true), this.match(48) || this.expect(12);
              } while (!this.match(48));
              return this.expect(48), this.state.inType = e, this.finishNode(s, "TypeParameterDeclaration");
            }
            flowParseTypeParameterInstantiation() {
              let e = this.startNode(), s = this.state.inType;
              e.params = [], this.state.inType = true, this.expect(47);
              let i = this.state.noAnonFunctionType;
              for (this.state.noAnonFunctionType = false; !this.match(48); )
                e.params.push(this.flowParseType()), this.match(48) || this.expect(12);
              return this.state.noAnonFunctionType = i, this.expect(48), this.state.inType = s, this.finishNode(e, "TypeParameterInstantiation");
            }
            flowParseTypeParameterInstantiationCallOrNew() {
              let e = this.startNode(), s = this.state.inType;
              for (e.params = [], this.state.inType = true, this.expect(47); !this.match(48); )
                e.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(48) || this.expect(12);
              return this.expect(48), this.state.inType = s, this.finishNode(e, "TypeParameterInstantiation");
            }
            flowParseInterfaceType() {
              let e = this.startNode();
              if (this.expectContextual(127), e.extends = [], this.eat(81))
                do
                  e.extends.push(this.flowParseInterfaceExtends());
                while (this.eat(12));
              return e.body = this.flowParseObjectType({ allowStatic: false, allowExact: false, allowSpread: false, allowProto: false, allowInexact: false }), this.finishNode(e, "InterfaceTypeAnnotation");
            }
            flowParseObjectPropertyKey() {
              return this.match(132) || this.match(131) ? super.parseExprAtom() : this.parseIdentifier(true);
            }
            flowParseObjectTypeIndexer(e, s, i) {
              return e.static = s, this.lookahead().type === 14 ? (e.id = this.flowParseObjectPropertyKey(), e.key = this.flowParseTypeInitialiser()) : (e.id = null, e.key = this.flowParseType()), this.expect(3), e.value = this.flowParseTypeInitialiser(), e.variance = i, this.finishNode(e, "ObjectTypeIndexer");
            }
            flowParseObjectTypeInternalSlot(e, s) {
              return e.static = s, e.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(47) || this.match(10) ? (e.method = true, e.optional = false, e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start))) : (e.method = false, this.eat(17) && (e.optional = true), e.value = this.flowParseTypeInitialiser()), this.finishNode(e, "ObjectTypeInternalSlot");
            }
            flowParseObjectTypeMethodish(e) {
              for (e.params = [], e.rest = null, e.typeParameters = null, e.this = null, this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(78) && (e.this = this.flowParseFunctionTypeParam(true), e.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
                e.params.push(this.flowParseFunctionTypeParam(false)), this.match(11) || this.expect(12);
              return this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(false)), this.expect(11), e.returnType = this.flowParseTypeInitialiser(), this.finishNode(e, "FunctionTypeAnnotation");
            }
            flowParseObjectTypeCallProperty(e, s) {
              let i = this.startNode();
              return e.static = s, e.value = this.flowParseObjectTypeMethodish(i), this.finishNode(e, "ObjectTypeCallProperty");
            }
            flowParseObjectType(e) {
              let { allowStatic: s, allowExact: i, allowSpread: a, allowProto: n, allowInexact: o } = e, c = this.state.inType;
              this.state.inType = true;
              let p = this.startNode();
              p.callProperties = [], p.properties = [], p.indexers = [], p.internalSlots = [];
              let m, x, A = false;
              for (i && this.match(6) ? (this.expect(6), m = 9, x = true) : (this.expect(5), m = 8, x = false), p.exact = x; !this.match(m); ) {
                let O = false, R = null, Y = null, Q = this.startNode();
                if (n && this.isContextual(116)) {
                  let se = this.lookahead();
                  se.type !== 14 && se.type !== 17 && (this.next(), R = this.state.startLoc, s = false);
                }
                if (s && this.isContextual(104)) {
                  let se = this.lookahead();
                  se.type !== 14 && se.type !== 17 && (this.next(), O = true);
                }
                let J = this.flowParseVariance();
                if (this.eat(0))
                  R != null && this.unexpected(R), this.eat(0) ? (J && this.unexpected(J.loc.start), p.internalSlots.push(this.flowParseObjectTypeInternalSlot(Q, O))) : p.indexers.push(this.flowParseObjectTypeIndexer(Q, O, J));
                else if (this.match(10) || this.match(47))
                  R != null && this.unexpected(R), J && this.unexpected(J.loc.start), p.callProperties.push(this.flowParseObjectTypeCallProperty(Q, O));
                else {
                  let se = "init";
                  if (this.isContextual(98) || this.isContextual(103)) {
                    let Ih = this.lookahead();
                    gr(Ih.type) && (se = this.state.value, this.next());
                  }
                  let Ve = this.flowParseObjectTypeProperty(Q, O, R, J, se, a, o != null ? o : !x);
                  Ve === null ? (A = true, Y = this.state.lastTokStartLoc) : p.properties.push(Ve);
                }
                this.flowObjectTypeSemicolon(), Y && !this.match(8) && !this.match(9) && this.raise(D.UnexpectedExplicitInexactInObject, { at: Y });
              }
              this.expect(m), a && (p.inexact = A);
              let b = this.finishNode(p, "ObjectTypeAnnotation");
              return this.state.inType = c, b;
            }
            flowParseObjectTypeProperty(e, s, i, a, n, o, c) {
              if (this.eat(21))
                return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (o ? c || this.raise(D.InexactInsideExact, { at: this.state.lastTokStartLoc }) : this.raise(D.InexactInsideNonObject, { at: this.state.lastTokStartLoc }), a && this.raise(D.InexactVariance, { at: a }), null) : (o || this.raise(D.UnexpectedSpreadType, { at: this.state.lastTokStartLoc }), i != null && this.unexpected(i), a && this.raise(D.SpreadVariance, { at: a }), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty"));
              {
                e.key = this.flowParseObjectPropertyKey(), e.static = s, e.proto = i != null, e.kind = n;
                let p = false;
                return this.match(47) || this.match(10) ? (e.method = true, i != null && this.unexpected(i), a && this.unexpected(a.loc.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start)), (n === "get" || n === "set") && this.flowCheckGetterSetterParams(e), !o && e.key.name === "constructor" && e.value.this && this.raise(D.ThisParamBannedInConstructor, { at: e.value.this })) : (n !== "init" && this.unexpected(), e.method = false, this.eat(17) && (p = true), e.value = this.flowParseTypeInitialiser(), e.variance = a), e.optional = p, this.finishNode(e, "ObjectTypeProperty");
              }
            }
            flowCheckGetterSetterParams(e) {
              let s = e.kind === "get" ? 0 : 1, i = e.value.params.length + (e.value.rest ? 1 : 0);
              e.value.this && this.raise(e.kind === "get" ? D.GetterMayNotHaveThisParam : D.SetterMayNotHaveThisParam, { at: e.value.this }), i !== s && this.raise(e.kind === "get" ? u.BadGetterArity : u.BadSetterArity, { at: e }), e.kind === "set" && e.value.rest && this.raise(u.BadSetterRestParameter, { at: e });
            }
            flowObjectTypeSemicolon() {
              !this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9) && this.unexpected();
            }
            flowParseQualifiedTypeIdentifier(e, s) {
              var i;
              (i = e) != null || (e = this.state.startLoc);
              let a = s || this.flowParseRestrictedIdentifier(true);
              for (; this.eat(16); ) {
                let n = this.startNodeAt(e);
                n.qualification = a, n.id = this.flowParseRestrictedIdentifier(true), a = this.finishNode(n, "QualifiedTypeIdentifier");
              }
              return a;
            }
            flowParseGenericType(e, s) {
              let i = this.startNodeAt(e);
              return i.typeParameters = null, i.id = this.flowParseQualifiedTypeIdentifier(e, s), this.match(47) && (i.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(i, "GenericTypeAnnotation");
            }
            flowParseTypeofType() {
              let e = this.startNode();
              return this.expect(87), e.argument = this.flowParsePrimaryType(), this.finishNode(e, "TypeofTypeAnnotation");
            }
            flowParseTupleType() {
              let e = this.startNode();
              for (e.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (e.types.push(this.flowParseType()), !this.match(3)); )
                this.expect(12);
              return this.expect(3), this.finishNode(e, "TupleTypeAnnotation");
            }
            flowParseFunctionTypeParam(e) {
              let s = null, i = false, a = null, n = this.startNode(), o = this.lookahead(), c = this.state.type === 78;
              return o.type === 14 || o.type === 17 ? (c && !e && this.raise(D.ThisParamMustBeFirst, { at: n }), s = this.parseIdentifier(c), this.eat(17) && (i = true, c && this.raise(D.ThisParamMayNotBeOptional, { at: n })), a = this.flowParseTypeInitialiser()) : a = this.flowParseType(), n.name = s, n.optional = i, n.typeAnnotation = a, this.finishNode(n, "FunctionTypeParam");
            }
            reinterpretTypeAsFunctionTypeParam(e) {
              let s = this.startNodeAt(e.loc.start);
              return s.name = null, s.optional = false, s.typeAnnotation = e, this.finishNode(s, "FunctionTypeParam");
            }
            flowParseFunctionTypeParams() {
              let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = null, i = null;
              for (this.match(78) && (i = this.flowParseFunctionTypeParam(true), i.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
                e.push(this.flowParseFunctionTypeParam(false)), this.match(11) || this.expect(12);
              return this.eat(21) && (s = this.flowParseFunctionTypeParam(false)), { params: e, rest: s, _this: i };
            }
            flowIdentToTypeAnnotation(e, s, i) {
              switch (i.name) {
                case "any":
                  return this.finishNode(s, "AnyTypeAnnotation");
                case "bool":
                case "boolean":
                  return this.finishNode(s, "BooleanTypeAnnotation");
                case "mixed":
                  return this.finishNode(s, "MixedTypeAnnotation");
                case "empty":
                  return this.finishNode(s, "EmptyTypeAnnotation");
                case "number":
                  return this.finishNode(s, "NumberTypeAnnotation");
                case "string":
                  return this.finishNode(s, "StringTypeAnnotation");
                case "symbol":
                  return this.finishNode(s, "SymbolTypeAnnotation");
                default:
                  return this.checkNotUnderscore(i.name), this.flowParseGenericType(e, i);
              }
            }
            flowParsePrimaryType() {
              let e = this.state.startLoc, s = this.startNode(), i, a, n = false, o = this.state.noAnonFunctionType;
              switch (this.state.type) {
                case 5:
                  return this.flowParseObjectType({ allowStatic: false, allowExact: false, allowSpread: true, allowProto: false, allowInexact: true });
                case 6:
                  return this.flowParseObjectType({ allowStatic: false, allowExact: true, allowSpread: true, allowProto: false, allowInexact: false });
                case 0:
                  return this.state.noAnonFunctionType = false, a = this.flowParseTupleType(), this.state.noAnonFunctionType = o, a;
                case 47:
                  return s.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), i = this.flowParseFunctionTypeParams(), s.params = i.params, s.rest = i.rest, s.this = i._this, this.expect(11), this.expect(19), s.returnType = this.flowParseType(), this.finishNode(s, "FunctionTypeAnnotation");
                case 10:
                  if (this.next(), !this.match(11) && !this.match(21))
                    if (z(this.state.type) || this.match(78)) {
                      let c = this.lookahead().type;
                      n = c !== 17 && c !== 14;
                    } else
                      n = true;
                  if (n) {
                    if (this.state.noAnonFunctionType = false, a = this.flowParseType(), this.state.noAnonFunctionType = o, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19))
                      return this.expect(11), a;
                    this.eat(12);
                  }
                  return a ? i = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(a)]) : i = this.flowParseFunctionTypeParams(), s.params = i.params, s.rest = i.rest, s.this = i._this, this.expect(11), this.expect(19), s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");
                case 131:
                  return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
                case 85:
                case 86:
                  return s.value = this.match(85), this.next(), this.finishNode(s, "BooleanLiteralTypeAnnotation");
                case 53:
                  if (this.state.value === "-") {
                    if (this.next(), this.match(132))
                      return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", s);
                    if (this.match(133))
                      return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", s);
                    throw this.raise(D.UnexpectedSubtractionOperand, { at: this.state.startLoc });
                  }
                  throw this.unexpected();
                case 132:
                  return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
                case 133:
                  return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
                case 88:
                  return this.next(), this.finishNode(s, "VoidTypeAnnotation");
                case 84:
                  return this.next(), this.finishNode(s, "NullLiteralTypeAnnotation");
                case 78:
                  return this.next(), this.finishNode(s, "ThisTypeAnnotation");
                case 55:
                  return this.next(), this.finishNode(s, "ExistsTypeAnnotation");
                case 87:
                  return this.flowParseTypeofType();
                default:
                  if (Yt(this.state.type)) {
                    let c = Ee(this.state.type);
                    return this.next(), super.createIdentifier(s, c);
                  } else if (z(this.state.type))
                    return this.isContextual(127) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(e, s, this.parseIdentifier());
              }
              throw this.unexpected();
            }
            flowParsePostfixType() {
              let e = this.state.startLoc, s = this.flowParsePrimaryType(), i = false;
              for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon(); ) {
                let a = this.startNodeAt(e), n = this.eat(18);
                i = i || n, this.expect(0), !n && this.match(3) ? (a.elementType = s, this.next(), s = this.finishNode(a, "ArrayTypeAnnotation")) : (a.objectType = s, a.indexType = this.flowParseType(), this.expect(3), i ? (a.optional = n, s = this.finishNode(a, "OptionalIndexedAccessType")) : s = this.finishNode(a, "IndexedAccessType"));
              }
              return s;
            }
            flowParsePrefixType() {
              let e = this.startNode();
              return this.eat(17) ? (e.typeAnnotation = this.flowParsePrefixType(), this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType();
            }
            flowParseAnonFunctionWithoutParens() {
              let e = this.flowParsePrefixType();
              if (!this.state.noAnonFunctionType && this.eat(19)) {
                let s = this.startNodeAt(e.loc.start);
                return s.params = [this.reinterpretTypeAsFunctionTypeParam(e)], s.rest = null, s.this = null, s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");
              }
              return e;
            }
            flowParseIntersectionType() {
              let e = this.startNode();
              this.eat(45);
              let s = this.flowParseAnonFunctionWithoutParens();
              for (e.types = [s]; this.eat(45); )
                e.types.push(this.flowParseAnonFunctionWithoutParens());
              return e.types.length === 1 ? s : this.finishNode(e, "IntersectionTypeAnnotation");
            }
            flowParseUnionType() {
              let e = this.startNode();
              this.eat(43);
              let s = this.flowParseIntersectionType();
              for (e.types = [s]; this.eat(43); )
                e.types.push(this.flowParseIntersectionType());
              return e.types.length === 1 ? s : this.finishNode(e, "UnionTypeAnnotation");
            }
            flowParseType() {
              let e = this.state.inType;
              this.state.inType = true;
              let s = this.flowParseUnionType();
              return this.state.inType = e, s;
            }
            flowParseTypeOrImplicitInstantiation() {
              if (this.state.type === 130 && this.state.value === "_") {
                let e = this.state.startLoc, s = this.parseIdentifier();
                return this.flowParseGenericType(e, s);
              } else
                return this.flowParseType();
            }
            flowParseTypeAnnotation() {
              let e = this.startNode();
              return e.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(e, "TypeAnnotation");
            }
            flowParseTypeAnnotatableIdentifier(e) {
              let s = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
              return this.match(14) && (s.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(s)), s;
            }
            typeCastToParameter(e) {
              return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
            }
            flowParseVariance() {
              let e = null;
              return this.match(53) ? (e = this.startNode(), this.state.value === "+" ? e.kind = "plus" : e.kind = "minus", this.next(), this.finishNode(e, "Variance")) : e;
            }
            parseFunctionBody(e, s) {
              let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
              return s ? this.forwardNoArrowParamsConversionAt(e, () => super.parseFunctionBody(e, true, i)) : super.parseFunctionBody(e, false, i);
            }
            parseFunctionBodyAndFinish(e, s) {
              let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
              if (this.match(14)) {
                let a = this.startNode();
                [a.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), e.returnType = a.typeAnnotation ? this.finishNode(a, "TypeAnnotation") : null;
              }
              return super.parseFunctionBodyAndFinish(e, s, i);
            }
            parseStatementLike(e) {
              if (this.state.strict && this.isContextual(127)) {
                let i = this.lookahead();
                if (ye(i.type)) {
                  let a = this.startNode();
                  return this.next(), this.flowParseInterface(a);
                }
              } else if (this.shouldParseEnums() && this.isContextual(124)) {
                let i = this.startNode();
                return this.next(), this.flowParseEnumDeclaration(i);
              }
              let s = super.parseStatementLike(e);
              return this.flowPragma === void 0 && !this.isValidDirective(s) && (this.flowPragma = null), s;
            }
            parseExpressionStatement(e, s, i) {
              if (s.type === "Identifier") {
                if (s.name === "declare") {
                  if (this.match(80) || z(this.state.type) || this.match(68) || this.match(74) || this.match(82))
                    return this.flowParseDeclare(e);
                } else if (z(this.state.type)) {
                  if (s.name === "interface")
                    return this.flowParseInterface(e);
                  if (s.name === "type")
                    return this.flowParseTypeAlias(e);
                  if (s.name === "opaque")
                    return this.flowParseOpaqueType(e, false);
                }
              }
              return super.parseExpressionStatement(e, s, i);
            }
            shouldParseExportDeclaration() {
              let { type: e } = this.state;
              return Pr(e) || this.shouldParseEnums() && e === 124 ? !this.state.containsEsc : super.shouldParseExportDeclaration();
            }
            isExportDefaultSpecifier() {
              let { type: e } = this.state;
              return Pr(e) || this.shouldParseEnums() && e === 124 ? this.state.containsEsc : super.isExportDefaultSpecifier();
            }
            parseExportDefaultExpression() {
              if (this.shouldParseEnums() && this.isContextual(124)) {
                let e = this.startNode();
                return this.next(), this.flowParseEnumDeclaration(e);
              }
              return super.parseExportDefaultExpression();
            }
            parseConditional(e, s, i) {
              if (!this.match(17))
                return e;
              if (this.state.maybeInArrowParameters) {
                let A = this.lookaheadCharCode();
                if (A === 44 || A === 61 || A === 58 || A === 41)
                  return this.setOptionalParametersError(i), e;
              }
              this.expect(17);
              let a = this.state.clone(), n = this.state.noArrowAt, o = this.startNodeAt(s), { consequent: c, failed: p } = this.tryParseConditionalConsequent(), [m, x] = this.getArrowLikeExpressions(c);
              if (p || x.length > 0) {
                let A = [...n];
                if (x.length > 0) {
                  this.state = a, this.state.noArrowAt = A;
                  for (let b = 0; b < x.length; b++)
                    A.push(x[b].start);
                  ({ consequent: c, failed: p } = this.tryParseConditionalConsequent()), [m, x] = this.getArrowLikeExpressions(c);
                }
                p && m.length > 1 && this.raise(D.AmbiguousConditionalArrow, { at: a.startLoc }), p && m.length === 1 && (this.state = a, A.push(m[0].start), this.state.noArrowAt = A, { consequent: c, failed: p } = this.tryParseConditionalConsequent());
              }
              return this.getArrowLikeExpressions(c, true), this.state.noArrowAt = n, this.expect(14), o.test = e, o.consequent = c, o.alternate = this.forwardNoArrowParamsConversionAt(o, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(o, "ConditionalExpression");
            }
            tryParseConditionalConsequent() {
              this.state.noArrowParamsConversionAt.push(this.state.start);
              let e = this.parseMaybeAssignAllowIn(), s = !this.match(14);
              return this.state.noArrowParamsConversionAt.pop(), { consequent: e, failed: s };
            }
            getArrowLikeExpressions(e, s) {
              let i = [e], a = [];
              for (; i.length !== 0; ) {
                let n = i.pop();
                n.type === "ArrowFunctionExpression" ? (n.typeParameters || !n.returnType ? this.finishArrowValidation(n) : a.push(n), i.push(n.body)) : n.type === "ConditionalExpression" && (i.push(n.consequent), i.push(n.alternate));
              }
              return s ? (a.forEach((n) => this.finishArrowValidation(n)), [a, []]) : Yl(a, (n) => n.params.every((o) => this.isAssignable(o, true)));
            }
            finishArrowValidation(e) {
              var s;
              this.toAssignableList(e.params, (s = e.extra) == null ? void 0 : s.trailingCommaLoc, false), this.scope.enter(Pe | ts), super.checkParams(e, false, true), this.scope.exit();
            }
            forwardNoArrowParamsConversionAt(e, s) {
              let i;
              return this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1 ? (this.state.noArrowParamsConversionAt.push(this.state.start), i = s(), this.state.noArrowParamsConversionAt.pop()) : i = s(), i;
            }
            parseParenItem(e, s) {
              if (e = super.parseParenItem(e, s), this.eat(17) && (e.optional = true, this.resetEndLocation(e)), this.match(14)) {
                let i = this.startNodeAt(s);
                return i.expression = e, i.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(i, "TypeCastExpression");
              }
              return e;
            }
            assertModuleNodeAllowed(e) {
              e.type === "ImportDeclaration" && (e.importKind === "type" || e.importKind === "typeof") || e.type === "ExportNamedDeclaration" && e.exportKind === "type" || e.type === "ExportAllDeclaration" && e.exportKind === "type" || super.assertModuleNodeAllowed(e);
            }
            parseExport(e, s) {
              let i = super.parseExport(e, s);
              return (i.type === "ExportNamedDeclaration" || i.type === "ExportAllDeclaration") && (i.exportKind = i.exportKind || "value"), i;
            }
            parseExportDeclaration(e) {
              if (this.isContextual(128)) {
                e.exportKind = "type";
                let s = this.startNode();
                return this.next(), this.match(5) ? (e.specifiers = this.parseExportSpecifiers(true), super.parseExportFrom(e), null) : this.flowParseTypeAlias(s);
              } else if (this.isContextual(129)) {
                e.exportKind = "type";
                let s = this.startNode();
                return this.next(), this.flowParseOpaqueType(s, false);
              } else if (this.isContextual(127)) {
                e.exportKind = "type";
                let s = this.startNode();
                return this.next(), this.flowParseInterface(s);
              } else if (this.shouldParseEnums() && this.isContextual(124)) {
                e.exportKind = "value";
                let s = this.startNode();
                return this.next(), this.flowParseEnumDeclaration(s);
              } else
                return super.parseExportDeclaration(e);
            }
            eatExportStar(e) {
              return super.eatExportStar(e) ? true : this.isContextual(128) && this.lookahead().type === 55 ? (e.exportKind = "type", this.next(), this.next(), true) : false;
            }
            maybeParseExportNamespaceSpecifier(e) {
              let { startLoc: s } = this.state, i = super.maybeParseExportNamespaceSpecifier(e);
              return i && e.exportKind === "type" && this.unexpected(s), i;
            }
            parseClassId(e, s, i) {
              super.parseClassId(e, s, i), this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration());
            }
            parseClassMember(e, s, i) {
              let { startLoc: a } = this.state;
              if (this.isContextual(123)) {
                if (super.parseClassMemberFromModifier(e, s))
                  return;
                s.declare = true;
              }
              super.parseClassMember(e, s, i), s.declare && (s.type !== "ClassProperty" && s.type !== "ClassPrivateProperty" && s.type !== "PropertyDefinition" ? this.raise(D.DeclareClassElement, { at: a }) : s.value && this.raise(D.DeclareClassFieldInitializer, { at: s.value }));
            }
            isIterator(e) {
              return e === "iterator" || e === "asyncIterator";
            }
            readIterator() {
              let e = super.readWord1(), s = "@@" + e;
              (!this.isIterator(e) || !this.state.inType) && this.raise(u.InvalidIdentifier, { at: this.state.curPosition(), identifierName: s }), this.finishToken(130, s);
            }
            getTokenFromCode(e) {
              let s = this.input.charCodeAt(this.state.pos + 1);
              return e === 123 && s === 124 ? this.finishOp(6, 2) : this.state.inType && (e === 62 || e === 60) ? this.finishOp(e === 62 ? 48 : 47, 1) : this.state.inType && e === 63 ? s === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : hl(e, s, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(e);
            }
            isAssignable(e, s) {
              return e.type === "TypeCastExpression" ? this.isAssignable(e.expression, s) : super.isAssignable(e, s);
            }
            toAssignable(e) {
              let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
              !s && e.type === "AssignmentExpression" && e.left.type === "TypeCastExpression" && (e.left = this.typeCastToParameter(e.left)), super.toAssignable(e, s);
            }
            toAssignableList(e, s, i) {
              for (let a = 0; a < e.length; a++) {
                let n = e[a];
                (n == null ? void 0 : n.type) === "TypeCastExpression" && (e[a] = this.typeCastToParameter(n));
              }
              super.toAssignableList(e, s, i);
            }
            toReferencedList(e, s) {
              for (let a = 0; a < e.length; a++) {
                var i;
                let n = e[a];
                n && n.type === "TypeCastExpression" && !((i = n.extra) != null && i.parenthesized) && (e.length > 1 || !s) && this.raise(D.TypeCastInPattern, { at: n.typeAnnotation });
              }
              return e;
            }
            parseArrayLike(e, s, i, a) {
              let n = super.parseArrayLike(e, s, i, a);
              return s && !this.state.maybeInArrowParameters && this.toReferencedList(n.elements), n;
            }
            isValidLVal(e, s, i) {
              return e === "TypeCastExpression" || super.isValidLVal(e, s, i);
            }
            parseClassProperty(e) {
              return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(e);
            }
            parseClassPrivateProperty(e) {
              return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(e);
            }
            isClassMethod() {
              return this.match(47) || super.isClassMethod();
            }
            isClassProperty() {
              return this.match(14) || super.isClassProperty();
            }
            isNonstaticConstructor(e) {
              return !this.match(14) && super.isNonstaticConstructor(e);
            }
            pushClassMethod(e, s, i, a, n, o) {
              if (s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(e, s, i, a, n, o), s.params && n) {
                let c = s.params;
                c.length > 0 && this.isThisParam(c[0]) && this.raise(D.ThisParamBannedInConstructor, { at: s });
              } else if (s.type === "MethodDefinition" && n && s.value.params) {
                let c = s.value.params;
                c.length > 0 && this.isThisParam(c[0]) && this.raise(D.ThisParamBannedInConstructor, { at: s });
              }
            }
            pushClassPrivateMethod(e, s, i, a) {
              s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(e, s, i, a);
            }
            parseClassSuper(e) {
              if (super.parseClassSuper(e), e.superClass && this.match(47) && (e.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual(111)) {
                this.next();
                let s = e.implements = [];
                do {
                  let i = this.startNode();
                  i.id = this.flowParseRestrictedIdentifier(true), this.match(47) ? i.typeParameters = this.flowParseTypeParameterInstantiation() : i.typeParameters = null, s.push(this.finishNode(i, "ClassImplements"));
                } while (this.eat(12));
              }
            }
            checkGetterSetterParams(e) {
              super.checkGetterSetterParams(e);
              let s = this.getObjectOrClassMethodParams(e);
              if (s.length > 0) {
                let i = s[0];
                this.isThisParam(i) && e.kind === "get" ? this.raise(D.GetterMayNotHaveThisParam, { at: i }) : this.isThisParam(i) && this.raise(D.SetterMayNotHaveThisParam, { at: i });
              }
            }
            parsePropertyNamePrefixOperator(e) {
              e.variance = this.flowParseVariance();
            }
            parseObjPropValue(e, s, i, a, n, o, c) {
              e.variance && this.unexpected(e.variance.loc.start), delete e.variance;
              let p;
              this.match(47) && !o && (p = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected());
              let m = super.parseObjPropValue(e, s, i, a, n, o, c);
              return p && ((m.value || m).typeParameters = p), m;
            }
            parseAssignableListItemTypes(e) {
              return this.eat(17) && (e.type !== "Identifier" && this.raise(D.PatternIsOptional, { at: e }), this.isThisParam(e) && this.raise(D.ThisParamMayNotBeOptional, { at: e }), e.optional = true), this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(D.ThisParamAnnotationRequired, { at: e }), this.match(29) && this.isThisParam(e) && this.raise(D.ThisParamNoDefault, { at: e }), this.resetEndLocation(e), e;
            }
            parseMaybeDefault(e, s) {
              let i = super.parseMaybeDefault(e, s);
              return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(D.TypeBeforeInitializer, { at: i.typeAnnotation }), i;
            }
            shouldParseDefaultImport(e) {
              return xs(e) ? Gr(this.state.type) : super.shouldParseDefaultImport(e);
            }
            checkImportReflection(e) {
              super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(D.ImportReflectionHasImportType, { at: e.specifiers[0].loc.start });
            }
            parseImportSpecifierLocal(e, s, i) {
              s.local = xs(e) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(s, i));
            }
            maybeParseDefaultImportSpecifier(e) {
              e.importKind = "value";
              let s = null;
              if (this.match(87) ? s = "typeof" : this.isContextual(128) && (s = "type"), s) {
                let i = this.lookahead(), { type: a } = i;
                s === "type" && a === 55 && this.unexpected(null, i.type), (Gr(a) || a === 5 || a === 55) && (this.next(), e.importKind = s);
              }
              return super.maybeParseDefaultImportSpecifier(e);
            }
            parseImportSpecifier(e, s, i, a, n) {
              let o = e.imported, c = null;
              o.type === "Identifier" && (o.name === "type" ? c = "type" : o.name === "typeof" && (c = "typeof"));
              let p = false;
              if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
                let x = this.parseIdentifier(true);
                c !== null && !ye(this.state.type) ? (e.imported = x, e.importKind = c, e.local = Te(x)) : (e.imported = o, e.importKind = null, e.local = this.parseIdentifier());
              } else {
                if (c !== null && ye(this.state.type))
                  e.imported = this.parseIdentifier(true), e.importKind = c;
                else {
                  if (s)
                    throw this.raise(u.ImportBindingIsString, { at: e, importName: o.value });
                  e.imported = o, e.importKind = null;
                }
                this.eatContextual(93) ? e.local = this.parseIdentifier() : (p = true, e.local = Te(e.imported));
              }
              let m = xs(e);
              return i && m && this.raise(D.ImportTypeShorthandOnlyInPureImport, { at: e }), (i || m) && this.checkReservedType(e.local.name, e.local.loc.start, true), p && !i && !m && this.checkReservedWord(e.local.name, e.loc.start, true, true), this.finishImportSpecifier(e, "ImportSpecifier");
            }
            parseBindingAtom() {
              switch (this.state.type) {
                case 78:
                  return this.parseIdentifier(true);
                default:
                  return super.parseBindingAtom();
              }
            }
            parseFunctionParams(e, s) {
              let i = e.kind;
              i !== "get" && i !== "set" && this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(e, s);
            }
            parseVarId(e, s) {
              super.parseVarId(e, s), this.match(14) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e.id));
            }
            parseAsyncArrowFromCallExpression(e, s) {
              if (this.match(14)) {
                let i = this.state.noAnonFunctionType;
                this.state.noAnonFunctionType = true, e.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = i;
              }
              return super.parseAsyncArrowFromCallExpression(e, s);
            }
            shouldParseAsyncArrow() {
              return this.match(14) || super.shouldParseAsyncArrow();
            }
            parseMaybeAssign(e, s) {
              var i;
              let a = null, n;
              if (this.hasPlugin("jsx") && (this.match(140) || this.match(47))) {
                if (a = this.state.clone(), n = this.tryParse(() => super.parseMaybeAssign(e, s), a), !n.error)
                  return n.node;
                let { context: p } = this.state, m = p[p.length - 1];
                (m === $.j_oTag || m === $.j_expr) && p.pop();
              }
              if ((i = n) != null && i.error || this.match(47)) {
                var o, c;
                a = a || this.state.clone();
                let p, m = this.tryParse((A) => {
                  var b;
                  p = this.flowParseTypeParameterDeclaration();
                  let O = this.forwardNoArrowParamsConversionAt(p, () => {
                    let Y = super.parseMaybeAssign(e, s);
                    return this.resetStartLocationFromNode(Y, p), Y;
                  });
                  (b = O.extra) != null && b.parenthesized && A();
                  let R = this.maybeUnwrapTypeCastExpression(O);
                  return R.type !== "ArrowFunctionExpression" && A(), R.typeParameters = p, this.resetStartLocationFromNode(R, p), O;
                }, a), x = null;
                if (m.node && this.maybeUnwrapTypeCastExpression(m.node).type === "ArrowFunctionExpression") {
                  if (!m.error && !m.aborted)
                    return m.node.async && this.raise(D.UnexpectedTypeParameterBeforeAsyncArrowFunction, { at: p }), m.node;
                  x = m.node;
                }
                if ((o = n) != null && o.node)
                  return this.state = n.failState, n.node;
                if (x)
                  return this.state = m.failState, x;
                throw (c = n) != null && c.thrown ? n.error : m.thrown ? m.error : this.raise(D.UnexpectedTokenAfterTypeParameter, { at: p });
              }
              return super.parseMaybeAssign(e, s);
            }
            parseArrow(e) {
              if (this.match(14)) {
                let s = this.tryParse(() => {
                  let i = this.state.noAnonFunctionType;
                  this.state.noAnonFunctionType = true;
                  let a = this.startNode();
                  return [a.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = i, this.canInsertSemicolon() && this.unexpected(), this.match(19) || this.unexpected(), a;
                });
                if (s.thrown)
                  return null;
                s.error && (this.state = s.failState), e.returnType = s.node.typeAnnotation ? this.finishNode(s.node, "TypeAnnotation") : null;
              }
              return super.parseArrow(e);
            }
            shouldParseArrow(e) {
              return this.match(14) || super.shouldParseArrow(e);
            }
            setArrowFunctionParameters(e, s) {
              this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1 ? e.params = s : super.setArrowFunctionParameters(e, s);
            }
            checkParams(e, s, i) {
              let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
              if (!(i && this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1)) {
                for (let n = 0; n < e.params.length; n++)
                  this.isThisParam(e.params[n]) && n > 0 && this.raise(D.ThisParamMustBeFirst, { at: e.params[n] });
                return super.checkParams(e, s, i, a);
              }
            }
            parseParenAndDistinguishExpression(e) {
              return super.parseParenAndDistinguishExpression(e && this.state.noArrowAt.indexOf(this.state.start) === -1);
            }
            parseSubscripts(e, s, i) {
              if (e.type === "Identifier" && e.name === "async" && this.state.noArrowAt.indexOf(s.index) !== -1) {
                this.next();
                let a = this.startNodeAt(s);
                a.callee = e, a.arguments = super.parseCallExpressionArguments(11, false), e = this.finishNode(a, "CallExpression");
              } else if (e.type === "Identifier" && e.name === "async" && this.match(47)) {
                let a = this.state.clone(), n = this.tryParse((c) => this.parseAsyncArrowWithTypeParameters(s) || c(), a);
                if (!n.error && !n.aborted)
                  return n.node;
                let o = this.tryParse(() => super.parseSubscripts(e, s, i), a);
                if (o.node && !o.error)
                  return o.node;
                if (n.node)
                  return this.state = n.failState, n.node;
                if (o.node)
                  return this.state = o.failState, o.node;
                throw n.error || o.error;
              }
              return super.parseSubscripts(e, s, i);
            }
            parseSubscript(e, s, i, a) {
              if (this.match(18) && this.isLookaheadToken_lt()) {
                if (a.optionalChainMember = true, i)
                  return a.stop = true, e;
                this.next();
                let n = this.startNodeAt(s);
                return n.callee = e, n.typeArguments = this.flowParseTypeParameterInstantiation(), this.expect(10), n.arguments = this.parseCallExpressionArguments(11, false), n.optional = true, this.finishCallExpression(n, true);
              } else if (!i && this.shouldParseTypes() && this.match(47)) {
                let n = this.startNodeAt(s);
                n.callee = e;
                let o = this.tryParse(() => (n.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), n.arguments = super.parseCallExpressionArguments(11, false), a.optionalChainMember && (n.optional = false), this.finishCallExpression(n, a.optionalChainMember)));
                if (o.node)
                  return o.error && (this.state = o.failState), o.node;
              }
              return super.parseSubscript(e, s, i, a);
            }
            parseNewCallee(e) {
              super.parseNewCallee(e);
              let s = null;
              this.shouldParseTypes() && this.match(47) && (s = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node), e.typeArguments = s;
            }
            parseAsyncArrowWithTypeParameters(e) {
              let s = this.startNodeAt(e);
              if (this.parseFunctionParams(s), !!this.parseArrow(s))
                return super.parseArrowExpression(s, void 0, true);
            }
            readToken_mult_modulo(e) {
              let s = this.input.charCodeAt(this.state.pos + 1);
              if (e === 42 && s === 47 && this.state.hasFlowComment) {
                this.state.hasFlowComment = false, this.state.pos += 2, this.nextToken();
                return;
              }
              super.readToken_mult_modulo(e);
            }
            readToken_pipe_amp(e) {
              let s = this.input.charCodeAt(this.state.pos + 1);
              if (e === 124 && s === 125) {
                this.finishOp(9, 2);
                return;
              }
              super.readToken_pipe_amp(e);
            }
            parseTopLevel(e, s) {
              let i = super.parseTopLevel(e, s);
              return this.state.hasFlowComment && this.raise(D.UnterminatedFlowComment, { at: this.state.curPosition() }), i;
            }
            skipBlockComment() {
              if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
                if (this.state.hasFlowComment)
                  throw this.raise(D.NestedFlowComment, { at: this.state.startLoc });
                this.hasFlowCommentCompletion();
                let e = this.skipFlowComment();
                e && (this.state.pos += e, this.state.hasFlowComment = true);
                return;
              }
              return super.skipBlockComment(this.state.hasFlowComment ? "*-/" : "*/");
            }
            skipFlowComment() {
              let { pos: e } = this.state, s = 2;
              for (; [32, 9].includes(this.input.charCodeAt(e + s)); )
                s++;
              let i = this.input.charCodeAt(s + e), a = this.input.charCodeAt(s + e + 1);
              return i === 58 && a === 58 ? s + 2 : this.input.slice(s + e, s + e + 12) === "flow-include" ? s + 12 : i === 58 && a !== 58 ? s : false;
            }
            hasFlowCommentCompletion() {
              if (this.input.indexOf("*/", this.state.pos) === -1)
                throw this.raise(u.UnterminatedComment, { at: this.state.curPosition() });
            }
            flowEnumErrorBooleanMemberNotInitialized(e, s) {
              let { enumName: i, memberName: a } = s;
              this.raise(D.EnumBooleanMemberNotInitialized, { at: e, memberName: a, enumName: i });
            }
            flowEnumErrorInvalidMemberInitializer(e, s) {
              return this.raise(s.explicitType ? s.explicitType === "symbol" ? D.EnumInvalidMemberInitializerSymbolType : D.EnumInvalidMemberInitializerPrimaryType : D.EnumInvalidMemberInitializerUnknownType, Object.assign({ at: e }, s));
            }
            flowEnumErrorNumberMemberNotInitialized(e, s) {
              let { enumName: i, memberName: a } = s;
              this.raise(D.EnumNumberMemberNotInitialized, { at: e, enumName: i, memberName: a });
            }
            flowEnumErrorStringMemberInconsistentlyInitailized(e, s) {
              let { enumName: i } = s;
              this.raise(D.EnumStringMemberInconsistentlyInitailized, { at: e, enumName: i });
            }
            flowEnumMemberInit() {
              let e = this.state.startLoc, s = () => this.match(12) || this.match(8);
              switch (this.state.type) {
                case 132: {
                  let i = this.parseNumericLiteral(this.state.value);
                  return s() ? { type: "number", loc: i.loc.start, value: i } : { type: "invalid", loc: e };
                }
                case 131: {
                  let i = this.parseStringLiteral(this.state.value);
                  return s() ? { type: "string", loc: i.loc.start, value: i } : { type: "invalid", loc: e };
                }
                case 85:
                case 86: {
                  let i = this.parseBooleanLiteral(this.match(85));
                  return s() ? { type: "boolean", loc: i.loc.start, value: i } : { type: "invalid", loc: e };
                }
                default:
                  return { type: "invalid", loc: e };
              }
            }
            flowEnumMemberRaw() {
              let e = this.state.startLoc, s = this.parseIdentifier(true), i = this.eat(29) ? this.flowEnumMemberInit() : { type: "none", loc: e };
              return { id: s, init: i };
            }
            flowEnumCheckExplicitTypeMismatch(e, s, i) {
              let { explicitType: a } = s;
              a !== null && a !== i && this.flowEnumErrorInvalidMemberInitializer(e, s);
            }
            flowEnumMembers(e) {
              let { enumName: s, explicitType: i } = e, a = /* @__PURE__ */ new Set(), n = { booleanMembers: [], numberMembers: [], stringMembers: [], defaultedMembers: [] }, o = false;
              for (; !this.match(8); ) {
                if (this.eat(21)) {
                  o = true;
                  break;
                }
                let c = this.startNode(), { id: p, init: m } = this.flowEnumMemberRaw(), x = p.name;
                if (x === "")
                  continue;
                /^[a-z]/.test(x) && this.raise(D.EnumInvalidMemberName, { at: p, memberName: x, suggestion: x[0].toUpperCase() + x.slice(1), enumName: s }), a.has(x) && this.raise(D.EnumDuplicateMemberName, { at: p, memberName: x, enumName: s }), a.add(x);
                let A = { enumName: s, explicitType: i, memberName: x };
                switch (c.id = p, m.type) {
                  case "boolean": {
                    this.flowEnumCheckExplicitTypeMismatch(m.loc, A, "boolean"), c.init = m.value, n.booleanMembers.push(this.finishNode(c, "EnumBooleanMember"));
                    break;
                  }
                  case "number": {
                    this.flowEnumCheckExplicitTypeMismatch(m.loc, A, "number"), c.init = m.value, n.numberMembers.push(this.finishNode(c, "EnumNumberMember"));
                    break;
                  }
                  case "string": {
                    this.flowEnumCheckExplicitTypeMismatch(m.loc, A, "string"), c.init = m.value, n.stringMembers.push(this.finishNode(c, "EnumStringMember"));
                    break;
                  }
                  case "invalid":
                    throw this.flowEnumErrorInvalidMemberInitializer(m.loc, A);
                  case "none":
                    switch (i) {
                      case "boolean":
                        this.flowEnumErrorBooleanMemberNotInitialized(m.loc, A);
                        break;
                      case "number":
                        this.flowEnumErrorNumberMemberNotInitialized(m.loc, A);
                        break;
                      default:
                        n.defaultedMembers.push(this.finishNode(c, "EnumDefaultedMember"));
                    }
                }
                this.match(8) || this.expect(12);
              }
              return { members: n, hasUnknownMembers: o };
            }
            flowEnumStringMembers(e, s, i) {
              let { enumName: a } = i;
              if (e.length === 0)
                return s;
              if (s.length === 0)
                return e;
              if (s.length > e.length) {
                for (let n of e)
                  this.flowEnumErrorStringMemberInconsistentlyInitailized(n, { enumName: a });
                return s;
              } else {
                for (let n of s)
                  this.flowEnumErrorStringMemberInconsistentlyInitailized(n, { enumName: a });
                return e;
              }
            }
            flowEnumParseExplicitType(e) {
              let { enumName: s } = e;
              if (!this.eatContextual(101))
                return null;
              if (!z(this.state.type))
                throw this.raise(D.EnumInvalidExplicitTypeUnknownSupplied, { at: this.state.startLoc, enumName: s });
              let { value: i } = this.state;
              return this.next(), i !== "boolean" && i !== "number" && i !== "string" && i !== "symbol" && this.raise(D.EnumInvalidExplicitType, { at: this.state.startLoc, enumName: s, invalidEnumType: i }), i;
            }
            flowEnumBody(e, s) {
              let i = s.name, a = s.loc.start, n = this.flowEnumParseExplicitType({ enumName: i });
              this.expect(5);
              let { members: o, hasUnknownMembers: c } = this.flowEnumMembers({ enumName: i, explicitType: n });
              switch (e.hasUnknownMembers = c, n) {
                case "boolean":
                  return e.explicitType = true, e.members = o.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
                case "number":
                  return e.explicitType = true, e.members = o.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
                case "string":
                  return e.explicitType = true, e.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, { enumName: i }), this.expect(8), this.finishNode(e, "EnumStringBody");
                case "symbol":
                  return e.members = o.defaultedMembers, this.expect(8), this.finishNode(e, "EnumSymbolBody");
                default: {
                  let p = () => (e.members = [], this.expect(8), this.finishNode(e, "EnumStringBody"));
                  e.explicitType = false;
                  let m = o.booleanMembers.length, x = o.numberMembers.length, A = o.stringMembers.length, b = o.defaultedMembers.length;
                  if (!m && !x && !A && !b)
                    return p();
                  if (!m && !x)
                    return e.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, { enumName: i }), this.expect(8), this.finishNode(e, "EnumStringBody");
                  if (!x && !A && m >= b) {
                    for (let O of o.defaultedMembers)
                      this.flowEnumErrorBooleanMemberNotInitialized(O.loc.start, { enumName: i, memberName: O.id.name });
                    return e.members = o.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
                  } else if (!m && !A && x >= b) {
                    for (let O of o.defaultedMembers)
                      this.flowEnumErrorNumberMemberNotInitialized(O.loc.start, { enumName: i, memberName: O.id.name });
                    return e.members = o.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
                  } else
                    return this.raise(D.EnumInconsistentMemberValues, { at: a, enumName: i }), p();
                }
              }
            }
            flowParseEnumDeclaration(e) {
              let s = this.parseIdentifier();
              return e.id = s, e.body = this.flowEnumBody(this.startNode(), s), this.finishNode(e, "EnumDeclaration");
            }
            isLookaheadToken_lt() {
              let e = this.nextTokenStart();
              if (this.input.charCodeAt(e) === 60) {
                let s = this.input.charCodeAt(e + 1);
                return s !== 60 && s !== 61;
              }
              return false;
            }
            maybeUnwrapTypeCastExpression(e) {
              return e.type === "TypeCastExpression" ? e.expression : e;
            }
          }, eh = { __proto__: null, quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: " ", iexcl: "¡", cent: "¢", pound: "£", curren: "¤", yen: "¥", brvbar: "¦", sect: "§", uml: "¨", copy: "©", ordf: "ª", laquo: "«", not: "¬", shy: "­", reg: "®", macr: "¯", deg: "°", plusmn: "±", sup2: "²", sup3: "³", acute: "´", micro: "µ", para: "¶", middot: "·", cedil: "¸", sup1: "¹", ordm: "º", raquo: "»", frac14: "¼", frac12: "½", frac34: "¾", iquest: "¿", Agrave: "À", Aacute: "Á", Acirc: "Â", Atilde: "Ã", Auml: "Ä", Aring: "Å", AElig: "Æ", Ccedil: "Ç", Egrave: "È", Eacute: "É", Ecirc: "Ê", Euml: "Ë", Igrave: "Ì", Iacute: "Í", Icirc: "Î", Iuml: "Ï", ETH: "Ð", Ntilde: "Ñ", Ograve: "Ò", Oacute: "Ó", Ocirc: "Ô", Otilde: "Õ", Ouml: "Ö", times: "×", Oslash: "Ø", Ugrave: "Ù", Uacute: "Ú", Ucirc: "Û", Uuml: "Ü", Yacute: "Ý", THORN: "Þ", szlig: "ß", agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å", aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë", igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", eth: "ð", ntilde: "ñ", ograve: "ò", oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", divide: "÷", oslash: "ø", ugrave: "ù", uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", thorn: "þ", yuml: "ÿ", OElig: "Œ", oelig: "œ", Scaron: "Š", scaron: "š", Yuml: "Ÿ", fnof: "ƒ", circ: "ˆ", tilde: "˜", Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ", Eta: "Η", Theta: "Θ", Iota: "Ι", Kappa: "Κ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Omicron: "Ο", Pi: "Π", Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Upsilon: "Υ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω", alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ", tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω", thetasym: "ϑ", upsih: "ϒ", piv: "ϖ", ensp: " ", emsp: " ", thinsp: " ", zwnj: "‌", zwj: "‍", lrm: "‎", rlm: "‏", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", sbquo: "‚", ldquo: "“", rdquo: "”", bdquo: "„", dagger: "†", Dagger: "‡", bull: "•", hellip: "…", permil: "‰", prime: "′", Prime: "″", lsaquo: "‹", rsaquo: "›", oline: "‾", frasl: "⁄", euro: "€", image: "ℑ", weierp: "℘", real: "ℜ", trade: "™", alefsym: "ℵ", larr: "←", uarr: "↑", rarr: "→", darr: "↓", harr: "↔", crarr: "↵", lArr: "⇐", uArr: "⇑", rArr: "⇒", dArr: "⇓", hArr: "⇔", forall: "∀", part: "∂", exist: "∃", empty: "∅", nabla: "∇", isin: "∈", notin: "∉", ni: "∋", prod: "∏", sum: "∑", minus: "−", lowast: "∗", radic: "√", prop: "∝", infin: "∞", ang: "∠", and: "∧", or: "∨", cap: "∩", cup: "∪", int: "∫", there4: "∴", sim: "∼", cong: "≅", asymp: "≈", ne: "≠", equiv: "≡", le: "≤", ge: "≥", sub: "⊂", sup: "⊃", nsub: "⊄", sube: "⊆", supe: "⊇", oplus: "⊕", otimes: "⊗", perp: "⊥", sdot: "⋅", lceil: "⌈", rceil: "⌉", lfloor: "⌊", rfloor: "⌋", lang: "〈", rang: "〉", loz: "◊", spades: "♠", clubs: "♣", hearts: "♥", diams: "♦" }, Fe = _`jsx`({ AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.", MissingClosingTagElement: (t) => {
            let { openingTagName: r } = t;
            return `Expected corresponding JSX closing tag for <${r}>.`;
          }, MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.", UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?", UnexpectedToken: (t) => {
            let { unexpected: r, HTMLEntity: e } = t;
            return `Unexpected token \`${r}\`. Did you mean \`${e}\` or \`{'${r}'}\`?`;
          }, UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.", UnterminatedJsxContent: "Unterminated JSX contents.", UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?" });
          function we(t) {
            return t ? t.type === "JSXOpeningFragment" || t.type === "JSXClosingFragment" : false;
          }
          function ze(t) {
            if (t.type === "JSXIdentifier")
              return t.name;
            if (t.type === "JSXNamespacedName")
              return t.namespace.name + ":" + t.name.name;
            if (t.type === "JSXMemberExpression")
              return ze(t.object) + "." + ze(t.property);
            throw new Error("Node had unexpected type: " + t.type);
          }
          var th = (t) => class extends t {
            jsxReadToken() {
              let e = "", s = this.state.pos;
              for (; ; ) {
                if (this.state.pos >= this.length)
                  throw this.raise(Fe.UnterminatedJsxContent, { at: this.state.startLoc });
                let i = this.input.charCodeAt(this.state.pos);
                switch (i) {
                  case 60:
                  case 123:
                    return this.state.pos === this.state.start ? i === 60 && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(140)) : super.getTokenFromCode(i) : (e += this.input.slice(s, this.state.pos), this.finishToken(139, e));
                  case 38:
                    e += this.input.slice(s, this.state.pos), e += this.jsxReadEntity(), s = this.state.pos;
                    break;
                  case 62:
                  case 125:
                  default:
                    et(i) ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadNewLine(true), s = this.state.pos) : ++this.state.pos;
                }
              }
            }
            jsxReadNewLine(e) {
              let s = this.input.charCodeAt(this.state.pos), i;
              return ++this.state.pos, s === 13 && this.input.charCodeAt(this.state.pos) === 10 ? (++this.state.pos, i = e ? `
` : `\r
`) : i = String.fromCharCode(s), ++this.state.curLine, this.state.lineStart = this.state.pos, i;
            }
            jsxReadString(e) {
              let s = "", i = ++this.state.pos;
              for (; ; ) {
                if (this.state.pos >= this.length)
                  throw this.raise(u.UnterminatedString, { at: this.state.startLoc });
                let a = this.input.charCodeAt(this.state.pos);
                if (a === e)
                  break;
                a === 38 ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadEntity(), i = this.state.pos) : et(a) ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadNewLine(false), i = this.state.pos) : ++this.state.pos;
              }
              return s += this.input.slice(i, this.state.pos++), this.finishToken(131, s);
            }
            jsxReadEntity() {
              let e = ++this.state.pos;
              if (this.codePointAtPos(this.state.pos) === 35) {
                ++this.state.pos;
                let s = 10;
                this.codePointAtPos(this.state.pos) === 120 && (s = 16, ++this.state.pos);
                let i = this.readInt(s, void 0, false, "bail");
                if (i !== null && this.codePointAtPos(this.state.pos) === 59)
                  return ++this.state.pos, String.fromCodePoint(i);
              } else {
                let s = 0, i = false;
                for (; s++ < 10 && this.state.pos < this.length && !(i = this.codePointAtPos(this.state.pos) == 59); )
                  ++this.state.pos;
                if (i) {
                  let a = this.input.slice(e, this.state.pos), n = eh[a];
                  if (++this.state.pos, n)
                    return n;
                }
              }
              return this.state.pos = e, "&";
            }
            jsxReadWord() {
              let e, s = this.state.pos;
              do
                e = this.input.charCodeAt(++this.state.pos);
              while (Re(e) || e === 45);
              return this.finishToken(138, this.input.slice(s, this.state.pos));
            }
            jsxParseIdentifier() {
              let e = this.startNode();
              return this.match(138) ? e.name = this.state.value : Yt(this.state.type) ? e.name = Ee(this.state.type) : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier");
            }
            jsxParseNamespacedName() {
              let e = this.state.startLoc, s = this.jsxParseIdentifier();
              if (!this.eat(14))
                return s;
              let i = this.startNodeAt(e);
              return i.namespace = s, i.name = this.jsxParseIdentifier(), this.finishNode(i, "JSXNamespacedName");
            }
            jsxParseElementName() {
              let e = this.state.startLoc, s = this.jsxParseNamespacedName();
              if (s.type === "JSXNamespacedName")
                return s;
              for (; this.eat(16); ) {
                let i = this.startNodeAt(e);
                i.object = s, i.property = this.jsxParseIdentifier(), s = this.finishNode(i, "JSXMemberExpression");
              }
              return s;
            }
            jsxParseAttributeValue() {
              let e;
              switch (this.state.type) {
                case 5:
                  return e = this.startNode(), this.setContext($.brace), this.next(), e = this.jsxParseExpressionContainer(e, $.j_oTag), e.expression.type === "JSXEmptyExpression" && this.raise(Fe.AttributeIsEmpty, { at: e }), e;
                case 140:
                case 131:
                  return this.parseExprAtom();
                default:
                  throw this.raise(Fe.UnsupportedJsxValue, { at: this.state.startLoc });
              }
            }
            jsxParseEmptyExpression() {
              let e = this.startNodeAt(this.state.lastTokEndLoc);
              return this.finishNodeAt(e, "JSXEmptyExpression", this.state.startLoc);
            }
            jsxParseSpreadChild(e) {
              return this.next(), e.expression = this.parseExpression(), this.setContext($.j_expr), this.state.canStartJSXElement = true, this.expect(8), this.finishNode(e, "JSXSpreadChild");
            }
            jsxParseExpressionContainer(e, s) {
              if (this.match(8))
                e.expression = this.jsxParseEmptyExpression();
              else {
                let i = this.parseExpression();
                e.expression = i;
              }
              return this.setContext(s), this.state.canStartJSXElement = true, this.expect(8), this.finishNode(e, "JSXExpressionContainer");
            }
            jsxParseAttribute() {
              let e = this.startNode();
              return this.match(5) ? (this.setContext($.brace), this.next(), this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.setContext($.j_oTag), this.state.canStartJSXElement = true, this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"));
            }
            jsxParseOpeningElementAt(e) {
              let s = this.startNodeAt(e);
              return this.eat(141) ? this.finishNode(s, "JSXOpeningFragment") : (s.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(s));
            }
            jsxParseOpeningElementAfterName(e) {
              let s = [];
              for (; !this.match(56) && !this.match(141); )
                s.push(this.jsxParseAttribute());
              return e.attributes = s, e.selfClosing = this.eat(56), this.expect(141), this.finishNode(e, "JSXOpeningElement");
            }
            jsxParseClosingElementAt(e) {
              let s = this.startNodeAt(e);
              return this.eat(141) ? this.finishNode(s, "JSXClosingFragment") : (s.name = this.jsxParseElementName(), this.expect(141), this.finishNode(s, "JSXClosingElement"));
            }
            jsxParseElementAt(e) {
              let s = this.startNodeAt(e), i = [], a = this.jsxParseOpeningElementAt(e), n = null;
              if (!a.selfClosing) {
                e:
                  for (; ; )
                    switch (this.state.type) {
                      case 140:
                        if (e = this.state.startLoc, this.next(), this.eat(56)) {
                          n = this.jsxParseClosingElementAt(e);
                          break e;
                        }
                        i.push(this.jsxParseElementAt(e));
                        break;
                      case 139:
                        i.push(this.parseExprAtom());
                        break;
                      case 5: {
                        let o = this.startNode();
                        this.setContext($.brace), this.next(), this.match(21) ? i.push(this.jsxParseSpreadChild(o)) : i.push(this.jsxParseExpressionContainer(o, $.j_expr));
                        break;
                      }
                      default:
                        throw this.unexpected();
                    }
                we(a) && !we(n) && n !== null ? this.raise(Fe.MissingClosingTagFragment, { at: n }) : !we(a) && we(n) ? this.raise(Fe.MissingClosingTagElement, { at: n, openingTagName: ze(a.name) }) : !we(a) && !we(n) && ze(n.name) !== ze(a.name) && this.raise(Fe.MissingClosingTagElement, { at: n, openingTagName: ze(a.name) });
              }
              if (we(a) ? (s.openingFragment = a, s.closingFragment = n) : (s.openingElement = a, s.closingElement = n), s.children = i, this.match(47))
                throw this.raise(Fe.UnwrappedAdjacentJSXElements, { at: this.state.startLoc });
              return we(a) ? this.finishNode(s, "JSXFragment") : this.finishNode(s, "JSXElement");
            }
            jsxParseElement() {
              let e = this.state.startLoc;
              return this.next(), this.jsxParseElementAt(e);
            }
            setContext(e) {
              let { context: s } = this.state;
              s[s.length - 1] = e;
            }
            parseExprAtom(e) {
              return this.match(139) ? this.parseLiteral(this.state.value, "JSXText") : this.match(140) ? this.jsxParseElement() : this.match(47) && this.input.charCodeAt(this.state.pos) !== 33 ? (this.replaceToken(140), this.jsxParseElement()) : super.parseExprAtom(e);
            }
            skipSpace() {
              this.curContext().preserveSpace || super.skipSpace();
            }
            getTokenFromCode(e) {
              let s = this.curContext();
              if (s === $.j_expr)
                return this.jsxReadToken();
              if (s === $.j_oTag || s === $.j_cTag) {
                if (ge(e))
                  return this.jsxReadWord();
                if (e === 62)
                  return ++this.state.pos, this.finishToken(141);
                if ((e === 34 || e === 39) && s === $.j_oTag)
                  return this.jsxReadString(e);
              }
              return e === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33 ? (++this.state.pos, this.finishToken(140)) : super.getTokenFromCode(e);
            }
            updateContext(e) {
              let { context: s, type: i } = this.state;
              if (i === 56 && e === 140)
                s.splice(-2, 2, $.j_cTag), this.state.canStartJSXElement = false;
              else if (i === 140)
                s.push($.j_oTag);
              else if (i === 141) {
                let a = s[s.length - 1];
                a === $.j_oTag && e === 56 || a === $.j_cTag ? (s.pop(), this.state.canStartJSXElement = s[s.length - 1] === $.j_expr) : (this.setContext($.j_expr), this.state.canStartJSXElement = true);
              } else
                this.state.canStartJSXElement = Wo(i);
            }
          }, sh = class extends us {
            constructor() {
              super(...arguments), this.types = /* @__PURE__ */ new Set(), this.enums = /* @__PURE__ */ new Set(), this.constEnums = /* @__PURE__ */ new Set(), this.classes = /* @__PURE__ */ new Set(), this.exportOnlyBindings = /* @__PURE__ */ new Set();
            }
          }, rh = class extends cs {
            constructor() {
              super(...arguments), this.importsStack = [];
            }
            createScope(t) {
              return this.importsStack.push(/* @__PURE__ */ new Set()), new sh(t);
            }
            enter(t) {
              t == Ue && this.importsStack.push(/* @__PURE__ */ new Set()), super.enter(t);
            }
            exit() {
              let t = super.exit();
              return t == Ue && this.importsStack.pop(), t;
            }
            hasImport(t, r) {
              let e = this.importsStack.length;
              if (this.importsStack[e - 1].has(t))
                return true;
              if (!r && e > 1) {
                for (let s = 0; s < e - 1; s++)
                  if (this.importsStack[s].has(t))
                    return true;
              }
              return false;
            }
            declareName(t, r, e) {
              if (r & Ye) {
                this.hasImport(t, true) && this.parser.raise(u.VarRedeclaration, { at: e, identifierName: t }), this.importsStack[this.importsStack.length - 1].add(t);
                return;
              }
              let s = this.currentScope();
              if (r & is) {
                this.maybeExportDefined(s, t), s.exportOnlyBindings.add(t);
                return;
              }
              super.declareName(t, r, e), r & ke && (r & Ae || (this.checkRedeclarationInScope(s, t, r, e), this.maybeExportDefined(s, t)), s.types.add(t)), r & ss && s.enums.add(t), r & rs && s.constEnums.add(t), r & yt && s.classes.add(t);
            }
            isRedeclaredInScope(t, r, e) {
              if (t.enums.has(r)) {
                if (e & ss) {
                  let s = !!(e & rs), i = t.constEnums.has(r);
                  return s !== i;
                }
                return true;
              }
              return e & yt && t.classes.has(r) ? t.lexical.has(r) ? !!(e & Ae) : false : e & ke && t.types.has(r) ? true : super.isRedeclaredInScope(t, r, e);
            }
            checkLocalExport(t) {
              let { name: r } = t;
              if (this.hasImport(r))
                return;
              let e = this.scopeStack.length;
              for (let s = e - 1; s >= 0; s--) {
                let i = this.scopeStack[s];
                if (i.types.has(r) || i.exportOnlyBindings.has(r))
                  return;
              }
              super.checkLocalExport(t);
            }
          }, ih = (t, r) => Object.hasOwnProperty.call(t, r) && t[r];
          function ah(t) {
            if (t == null)
              throw new Error(`Unexpected ${t} value.`);
            return t;
          }
          function Jr(t) {
            if (!t)
              throw new Error("Assert fail");
          }
          var w = _`typescript`({ AbstractMethodHasImplementation: (t) => {
            let { methodName: r } = t;
            return `Method '${r}' cannot have an implementation because it is marked abstract.`;
          }, AbstractPropertyHasInitializer: (t) => {
            let { propertyName: r } = t;
            return `Property '${r}' cannot have an initializer because it is marked abstract.`;
          }, AccesorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.", AccesorCannotHaveTypeParameters: "An accessor cannot have type parameters.", AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.", ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.", ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.", ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.", ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.", DeclareAccessor: (t) => {
            let { kind: r } = t;
            return `'declare' is not allowed in ${r}ters.`;
          }, DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.", DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.", DuplicateAccessibilityModifier: (t) => {
            let { modifier: r } = t;
            return "Accessibility modifier already seen.";
          }, DuplicateModifier: (t) => {
            let { modifier: r } = t;
            return `Duplicate modifier: '${r}'.`;
          }, EmptyHeritageClauseType: (t) => {
            let { token: r } = t;
            return `'${r}' list cannot be empty.`;
          }, EmptyTypeArguments: "Type argument list cannot be empty.", EmptyTypeParameters: "Type parameter list cannot be empty.", ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.", ImportAliasHasImportType: "An import alias can not use 'import type'.", ImportReflectionHasImportType: "An `import module` declaration can not use `type` modifier", IncompatibleModifiers: (t) => {
            let { modifiers: r } = t;
            return `'${r[0]}' modifier cannot be used with '${r[1]}' modifier.`;
          }, IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.", IndexSignatureHasAccessibility: (t) => {
            let { modifier: r } = t;
            return `Index signatures cannot have an accessibility modifier ('${r}').`;
          }, IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.", IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.", IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.", InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.", InvalidModifierOnTypeMember: (t) => {
            let { modifier: r } = t;
            return `'${r}' modifier cannot appear on a type member.`;
          }, InvalidModifierOnTypeParameter: (t) => {
            let { modifier: r } = t;
            return `'${r}' modifier cannot appear on a type parameter.`;
          }, InvalidModifierOnTypeParameterPositions: (t) => {
            let { modifier: r } = t;
            return `'${r}' modifier can only appear on a type parameter of a class, interface or type alias.`;
          }, InvalidModifiersOrder: (t) => {
            let { orderedModifiers: r } = t;
            return `'${r[0]}' modifier must precede '${r[1]}' modifier.`;
          }, InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.", InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.", MissingInterfaceName: "'interface' declarations must be followed by an identifier.", MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.", NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.", NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.", OptionalTypeBeforeRequired: "A required element cannot follow an optional element.", OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.", PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.", PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.", PrivateElementHasAccessibility: (t) => {
            let { modifier: r } = t;
            return `Private elements cannot have an accessibility modifier ('${r}').`;
          }, ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.", ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.", ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.", SetAccesorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.", SetAccesorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.", SetAccesorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.", SingleTypeParameterWithoutTrailingComma: (t) => {
            let { typeParameterName: r } = t;
            return `Single type parameter ${r} should have a trailing comma. Example usage: <${r},>.`;
          }, StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.", TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.", TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.", TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.", TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.", UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.", UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.", UnexpectedTypeAnnotation: "Did not expect a type annotation here.", UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.", UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.", UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.", UnsupportedSignatureParameterKind: (t) => {
            let { type: r } = t;
            return `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${r}.`;
          } });
          function nh(t) {
            switch (t) {
              case "any":
                return "TSAnyKeyword";
              case "boolean":
                return "TSBooleanKeyword";
              case "bigint":
                return "TSBigIntKeyword";
              case "never":
                return "TSNeverKeyword";
              case "number":
                return "TSNumberKeyword";
              case "object":
                return "TSObjectKeyword";
              case "string":
                return "TSStringKeyword";
              case "symbol":
                return "TSSymbolKeyword";
              case "undefined":
                return "TSUndefinedKeyword";
              case "unknown":
                return "TSUnknownKeyword";
              default:
                return;
            }
          }
          function Xr(t) {
            return t === "private" || t === "public" || t === "protected";
          }
          function oh(t) {
            return t === "in" || t === "out";
          }
          var lh = (t) => class extends t {
            getScopeHandler() {
              return rh;
            }
            tsIsIdentifier() {
              return z(this.state.type);
            }
            tsTokenCanFollowModifier() {
              return (this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(136) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
            }
            tsNextTokenCanFollowModifier() {
              return this.next(), this.tsTokenCanFollowModifier();
            }
            tsParseModifier(e, s) {
              if (!z(this.state.type) && this.state.type !== 58)
                return;
              let i = this.state.value;
              if (e.indexOf(i) !== -1) {
                if (s && this.tsIsStartOfStaticBlocks())
                  return;
                if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
                  return i;
              }
            }
            tsParseModifiers(e) {
              let { modified: s, allowedModifiers: i, disallowedModifiers: a, stopOnStartOfClassStaticBlock: n, errorTemplate: o = w.InvalidModifierOnTypeMember } = e, c = (m, x, A, b) => {
                x === A && s[b] && this.raise(w.InvalidModifiersOrder, { at: m, orderedModifiers: [A, b] });
              }, p = (m, x, A, b) => {
                (s[A] && x === b || s[b] && x === A) && this.raise(w.IncompatibleModifiers, { at: m, modifiers: [A, b] });
              };
              for (; ; ) {
                let { startLoc: m } = this.state, x = this.tsParseModifier(i.concat(a != null ? a : []), n);
                if (!x)
                  break;
                Xr(x) ? s.accessibility ? this.raise(w.DuplicateAccessibilityModifier, { at: m, modifier: x }) : (c(m, x, x, "override"), c(m, x, x, "static"), c(m, x, x, "readonly"), s.accessibility = x) : oh(x) ? (s[x] && this.raise(w.DuplicateModifier, { at: m, modifier: x }), s[x] = true, c(m, x, "in", "out")) : (Object.hasOwnProperty.call(s, x) ? this.raise(w.DuplicateModifier, { at: m, modifier: x }) : (c(m, x, "static", "readonly"), c(m, x, "static", "override"), c(m, x, "override", "readonly"), c(m, x, "abstract", "override"), p(m, x, "declare", "override"), p(m, x, "static", "abstract")), s[x] = true), a != null && a.includes(x) && this.raise(o, { at: m, modifier: x });
              }
            }
            tsIsListTerminator(e) {
              switch (e) {
                case "EnumMembers":
                case "TypeMembers":
                  return this.match(8);
                case "HeritageClauseElement":
                  return this.match(5);
                case "TupleElementTypes":
                  return this.match(3);
                case "TypeParametersOrArguments":
                  return this.match(48);
              }
              throw new Error("Unreachable");
            }
            tsParseList(e, s) {
              let i = [];
              for (; !this.tsIsListTerminator(e); )
                i.push(s());
              return i;
            }
            tsParseDelimitedList(e, s, i) {
              return ah(this.tsParseDelimitedListWorker(e, s, true, i));
            }
            tsParseDelimitedListWorker(e, s, i, a) {
              let n = [], o = -1;
              for (; !this.tsIsListTerminator(e); ) {
                o = -1;
                let c = s();
                if (c == null)
                  return;
                if (n.push(c), this.eat(12)) {
                  o = this.state.lastTokStart;
                  continue;
                }
                if (this.tsIsListTerminator(e))
                  break;
                i && this.expect(12);
                return;
              }
              return a && (a.value = o), n;
            }
            tsParseBracketedList(e, s, i, a, n) {
              a || (i ? this.expect(0) : this.expect(47));
              let o = this.tsParseDelimitedList(e, s, n);
              return i ? this.expect(3) : this.expect(48), o;
            }
            tsParseImportType() {
              let e = this.startNode();
              return this.expect(83), this.expect(10), this.match(131) || this.raise(w.UnsupportedImportTypeArgument, { at: this.state.startLoc }), e.argument = super.parseExprAtom(), this.expect(11), this.eat(16) && (e.qualifier = this.tsParseEntityName()), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType");
            }
            tsParseEntityName() {
              let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, s = this.parseIdentifier(e);
              for (; this.eat(16); ) {
                let i = this.startNodeAtNode(s);
                i.left = s, i.right = this.parseIdentifier(e), s = this.finishNode(i, "TSQualifiedName");
              }
              return s;
            }
            tsParseTypeReference() {
              let e = this.startNode();
              return e.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeReference");
            }
            tsParseThisTypePredicate(e) {
              this.next();
              let s = this.startNodeAtNode(e);
              return s.parameterName = e, s.typeAnnotation = this.tsParseTypeAnnotation(false), s.asserts = false, this.finishNode(s, "TSTypePredicate");
            }
            tsParseThisTypeNode() {
              let e = this.startNode();
              return this.next(), this.finishNode(e, "TSThisType");
            }
            tsParseTypeQuery() {
              let e = this.startNode();
              return this.expect(87), this.match(83) ? e.exprName = this.tsParseImportType() : e.exprName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeQuery");
            }
            tsParseInOutModifiers(e) {
              this.tsParseModifiers({ modified: e, allowedModifiers: ["in", "out"], disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"], errorTemplate: w.InvalidModifierOnTypeParameter });
            }
            tsParseNoneModifiers(e) {
              this.tsParseModifiers({ modified: e, allowedModifiers: [], disallowedModifiers: ["in", "out"], errorTemplate: w.InvalidModifierOnTypeParameterPositions });
            }
            tsParseTypeParameter() {
              let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.tsParseNoneModifiers.bind(this), s = this.startNode();
              return e(s), s.name = this.tsParseTypeParameterName(), s.constraint = this.tsEatThenParseType(81), s.default = this.tsEatThenParseType(29), this.finishNode(s, "TSTypeParameter");
            }
            tsTryParseTypeParameters(e) {
              if (this.match(47))
                return this.tsParseTypeParameters(e);
            }
            tsParseTypeParameters(e) {
              let s = this.startNode();
              this.match(47) || this.match(140) ? this.next() : this.unexpected();
              let i = { value: -1 };
              return s.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, e), false, true, i), s.params.length === 0 && this.raise(w.EmptyTypeParameters, { at: s }), i.value !== -1 && this.addExtra(s, "trailingComma", i.value), this.finishNode(s, "TSTypeParameterDeclaration");
            }
            tsFillSignature(e, s) {
              let i = e === 19, a = "parameters", n = "typeAnnotation";
              s.typeParameters = this.tsTryParseTypeParameters(), this.expect(10), s[a] = this.tsParseBindingListForSignature(), i ? s[n] = this.tsParseTypeOrTypePredicateAnnotation(e) : this.match(e) && (s[n] = this.tsParseTypeOrTypePredicateAnnotation(e));
            }
            tsParseBindingListForSignature() {
              return super.parseBindingList(11, 41).map((e) => (e.type !== "Identifier" && e.type !== "RestElement" && e.type !== "ObjectPattern" && e.type !== "ArrayPattern" && this.raise(w.UnsupportedSignatureParameterKind, { at: e, type: e.type }), e));
            }
            tsParseTypeMemberSemicolon() {
              !this.eat(12) && !this.isLineTerminator() && this.expect(13);
            }
            tsParseSignatureMember(e, s) {
              return this.tsFillSignature(14, s), this.tsParseTypeMemberSemicolon(), this.finishNode(s, e);
            }
            tsIsUnambiguouslyIndexSignature() {
              return this.next(), z(this.state.type) ? (this.next(), this.match(14)) : false;
            }
            tsTryParseIndexSignature(e) {
              if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))))
                return;
              this.expect(0);
              let s = this.parseIdentifier();
              s.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(s), this.expect(3), e.parameters = [s];
              let i = this.tsTryParseTypeAnnotation();
              return i && (e.typeAnnotation = i), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSIndexSignature");
            }
            tsParsePropertyOrMethodSignature(e, s) {
              this.eat(17) && (e.optional = true);
              let i = e;
              if (this.match(10) || this.match(47)) {
                s && this.raise(w.ReadonlyForMethodSignature, { at: e });
                let a = i;
                a.kind && this.match(47) && this.raise(w.AccesorCannotHaveTypeParameters, { at: this.state.curPosition() }), this.tsFillSignature(14, a), this.tsParseTypeMemberSemicolon();
                let n = "parameters", o = "typeAnnotation";
                if (a.kind === "get")
                  a[n].length > 0 && (this.raise(u.BadGetterArity, { at: this.state.curPosition() }), this.isThisParam(a[n][0]) && this.raise(w.AccesorCannotDeclareThisParameter, { at: this.state.curPosition() }));
                else if (a.kind === "set") {
                  if (a[n].length !== 1)
                    this.raise(u.BadSetterArity, { at: this.state.curPosition() });
                  else {
                    let c = a[n][0];
                    this.isThisParam(c) && this.raise(w.AccesorCannotDeclareThisParameter, { at: this.state.curPosition() }), c.type === "Identifier" && c.optional && this.raise(w.SetAccesorCannotHaveOptionalParameter, { at: this.state.curPosition() }), c.type === "RestElement" && this.raise(w.SetAccesorCannotHaveRestParameter, { at: this.state.curPosition() });
                  }
                  a[o] && this.raise(w.SetAccesorCannotHaveReturnType, { at: a[o] });
                } else
                  a.kind = "method";
                return this.finishNode(a, "TSMethodSignature");
              } else {
                let a = i;
                s && (a.readonly = true);
                let n = this.tsTryParseTypeAnnotation();
                return n && (a.typeAnnotation = n), this.tsParseTypeMemberSemicolon(), this.finishNode(a, "TSPropertySignature");
              }
            }
            tsParseTypeMember() {
              let e = this.startNode();
              if (this.match(10) || this.match(47))
                return this.tsParseSignatureMember("TSCallSignatureDeclaration", e);
              if (this.match(77)) {
                let i = this.startNode();
                return this.next(), this.match(10) || this.match(47) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(i, "new"), this.tsParsePropertyOrMethodSignature(e, false));
              }
              this.tsParseModifiers({ modified: e, allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] });
              let s = this.tsTryParseIndexSignature(e);
              return s || (super.parsePropertyName(e), !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.tsTokenCanFollowModifier() && (e.kind = e.key.name, super.parsePropertyName(e)), this.tsParsePropertyOrMethodSignature(e, !!e.readonly));
            }
            tsParseTypeLiteral() {
              let e = this.startNode();
              return e.members = this.tsParseObjectTypeMembers(), this.finishNode(e, "TSTypeLiteral");
            }
            tsParseObjectTypeMembers() {
              this.expect(5);
              let e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
              return this.expect(8), e;
            }
            tsIsStartOfMappedType() {
              return this.next(), this.eat(53) ? this.isContextual(120) : (this.isContextual(120) && this.next(), !this.match(0) || (this.next(), !this.tsIsIdentifier()) ? false : (this.next(), this.match(58)));
            }
            tsParseMappedTypeParameter() {
              let e = this.startNode();
              return e.name = this.tsParseTypeParameterName(), e.constraint = this.tsExpectThenParseType(58), this.finishNode(e, "TSTypeParameter");
            }
            tsParseMappedType() {
              let e = this.startNode();
              return this.expect(5), this.match(53) ? (e.readonly = this.state.value, this.next(), this.expectContextual(120)) : this.eatContextual(120) && (e.readonly = true), this.expect(0), e.typeParameter = this.tsParseMappedTypeParameter(), e.nameType = this.eatContextual(93) ? this.tsParseType() : null, this.expect(3), this.match(53) ? (e.optional = this.state.value, this.next(), this.expect(17)) : this.eat(17) && (e.optional = true), e.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(8), this.finishNode(e, "TSMappedType");
            }
            tsParseTupleType() {
              let e = this.startNode();
              e.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
              let s = false, i = null;
              return e.elementTypes.forEach((a) => {
                var n;
                let { type: o } = a;
                s && o !== "TSRestType" && o !== "TSOptionalType" && !(o === "TSNamedTupleMember" && a.optional) && this.raise(w.OptionalTypeBeforeRequired, { at: a }), s || (s = o === "TSNamedTupleMember" && a.optional || o === "TSOptionalType");
                let c = o;
                o === "TSRestType" && (a = a.typeAnnotation, c = a.type);
                let p = c === "TSNamedTupleMember";
                (n = i) != null || (i = p), i !== p && this.raise(w.MixedLabeledAndUnlabeledElements, { at: a });
              }), this.finishNode(e, "TSTupleType");
            }
            tsParseTupleElementType() {
              let { startLoc: e } = this.state, s = this.eat(21), i = this.tsParseType(), a = this.eat(17);
              if (this.eat(14)) {
                let o = this.startNodeAtNode(i);
                o.optional = a, i.type === "TSTypeReference" && !i.typeParameters && i.typeName.type === "Identifier" ? o.label = i.typeName : (this.raise(w.InvalidTupleMemberLabel, { at: i }), o.label = i), o.elementType = this.tsParseType(), i = this.finishNode(o, "TSNamedTupleMember");
              } else if (a) {
                let o = this.startNodeAtNode(i);
                o.typeAnnotation = i, i = this.finishNode(o, "TSOptionalType");
              }
              if (s) {
                let o = this.startNodeAt(e);
                o.typeAnnotation = i, i = this.finishNode(o, "TSRestType");
              }
              return i;
            }
            tsParseParenthesizedType() {
              let e = this.startNode();
              return this.expect(10), e.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(e, "TSParenthesizedType");
            }
            tsParseFunctionOrConstructorType(e, s) {
              let i = this.startNode();
              return e === "TSConstructorType" && (i.abstract = !!s, s && this.next(), this.next()), this.tsInAllowConditionalTypesContext(() => this.tsFillSignature(19, i)), this.finishNode(i, e);
            }
            tsParseLiteralTypeNode() {
              let e = this.startNode();
              return e.literal = (() => {
                switch (this.state.type) {
                  case 132:
                  case 133:
                  case 131:
                  case 85:
                  case 86:
                    return super.parseExprAtom();
                  default:
                    throw this.unexpected();
                }
              })(), this.finishNode(e, "TSLiteralType");
            }
            tsParseTemplateLiteralType() {
              let e = this.startNode();
              return e.literal = super.parseTemplate(false), this.finishNode(e, "TSLiteralType");
            }
            parseTemplateSubstitution() {
              return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution();
            }
            tsParseThisTypeOrThisTypePredicate() {
              let e = this.tsParseThisTypeNode();
              return this.isContextual(114) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e;
            }
            tsParseNonArrayType() {
              switch (this.state.type) {
                case 131:
                case 132:
                case 133:
                case 85:
                case 86:
                  return this.tsParseLiteralTypeNode();
                case 53:
                  if (this.state.value === "-") {
                    let e = this.startNode(), s = this.lookahead();
                    if (s.type !== 132 && s.type !== 133)
                      throw this.unexpected();
                    return e.literal = this.parseMaybeUnary(), this.finishNode(e, "TSLiteralType");
                  }
                  break;
                case 78:
                  return this.tsParseThisTypeOrThisTypePredicate();
                case 87:
                  return this.tsParseTypeQuery();
                case 83:
                  return this.tsParseImportType();
                case 5:
                  return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
                case 0:
                  return this.tsParseTupleType();
                case 10:
                  return this.tsParseParenthesizedType();
                case 25:
                case 24:
                  return this.tsParseTemplateLiteralType();
                default: {
                  let { type: e } = this.state;
                  if (z(e) || e === 88 || e === 84) {
                    let s = e === 88 ? "TSVoidKeyword" : e === 84 ? "TSNullKeyword" : nh(this.state.value);
                    if (s !== void 0 && this.lookaheadCharCode() !== 46) {
                      let i = this.startNode();
                      return this.next(), this.finishNode(i, s);
                    }
                    return this.tsParseTypeReference();
                  }
                }
              }
              throw this.unexpected();
            }
            tsParseArrayTypeOrHigher() {
              let e = this.tsParseNonArrayType();
              for (; !this.hasPrecedingLineBreak() && this.eat(0); )
                if (this.match(3)) {
                  let s = this.startNodeAtNode(e);
                  s.elementType = e, this.expect(3), e = this.finishNode(s, "TSArrayType");
                } else {
                  let s = this.startNodeAtNode(e);
                  s.objectType = e, s.indexType = this.tsParseType(), this.expect(3), e = this.finishNode(s, "TSIndexedAccessType");
                }
              return e;
            }
            tsParseTypeOperator() {
              let e = this.startNode(), s = this.state.value;
              return this.next(), e.operator = s, e.typeAnnotation = this.tsParseTypeOperatorOrHigher(), s === "readonly" && this.tsCheckTypeAnnotationForReadOnly(e), this.finishNode(e, "TSTypeOperator");
            }
            tsCheckTypeAnnotationForReadOnly(e) {
              switch (e.typeAnnotation.type) {
                case "TSTupleType":
                case "TSArrayType":
                  return;
                default:
                  this.raise(w.UnexpectedReadonly, { at: e });
              }
            }
            tsParseInferType() {
              let e = this.startNode();
              this.expectContextual(113);
              let s = this.startNode();
              return s.name = this.tsParseTypeParameterName(), s.constraint = this.tsTryParse(() => this.tsParseConstraintForInferType()), e.typeParameter = this.finishNode(s, "TSTypeParameter"), this.finishNode(e, "TSInferType");
            }
            tsParseConstraintForInferType() {
              if (this.eat(81)) {
                let e = this.tsInDisallowConditionalTypesContext(() => this.tsParseType());
                if (this.state.inDisallowConditionalTypesContext || !this.match(17))
                  return e;
              }
            }
            tsParseTypeOperatorOrHigher() {
              return Zo(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(113) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
            }
            tsParseUnionOrIntersectionType(e, s, i) {
              let a = this.startNode(), n = this.eat(i), o = [];
              do
                o.push(s());
              while (this.eat(i));
              return o.length === 1 && !n ? o[0] : (a.types = o, this.finishNode(a, e));
            }
            tsParseIntersectionTypeOrHigher() {
              return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45);
            }
            tsParseUnionTypeOrHigher() {
              return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43);
            }
            tsIsStartOfFunctionType() {
              return this.match(47) ? true : this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
            }
            tsSkipParameterStart() {
              if (z(this.state.type) || this.match(78))
                return this.next(), true;
              if (this.match(5)) {
                let { errors: e } = this.state, s = e.length;
                try {
                  return this.parseObjectLike(8, true), e.length === s;
                } catch {
                  return false;
                }
              }
              if (this.match(0)) {
                this.next();
                let { errors: e } = this.state, s = e.length;
                try {
                  return super.parseBindingList(3, 93, true), e.length === s;
                } catch {
                  return false;
                }
              }
              return false;
            }
            tsIsUnambiguouslyStartOfFunctionType() {
              return this.next(), !!(this.match(11) || this.match(21) || this.tsSkipParameterStart() && (this.match(14) || this.match(12) || this.match(17) || this.match(29) || this.match(11) && (this.next(), this.match(19))));
            }
            tsParseTypeOrTypePredicateAnnotation(e) {
              return this.tsInType(() => {
                let s = this.startNode();
                this.expect(e);
                let i = this.startNode(), a = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
                if (a && this.match(78)) {
                  let c = this.tsParseThisTypeOrThisTypePredicate();
                  return c.type === "TSThisType" ? (i.parameterName = c, i.asserts = true, i.typeAnnotation = null, c = this.finishNode(i, "TSTypePredicate")) : (this.resetStartLocationFromNode(c, i), c.asserts = true), s.typeAnnotation = c, this.finishNode(s, "TSTypeAnnotation");
                }
                let n = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
                if (!n)
                  return a ? (i.parameterName = this.parseIdentifier(), i.asserts = a, i.typeAnnotation = null, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(false, s);
                let o = this.tsParseTypeAnnotation(false);
                return i.parameterName = n, i.typeAnnotation = o, i.asserts = a, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation");
              });
            }
            tsTryParseTypeOrTypePredicateAnnotation() {
              return this.match(14) ? this.tsParseTypeOrTypePredicateAnnotation(14) : void 0;
            }
            tsTryParseTypeAnnotation() {
              return this.match(14) ? this.tsParseTypeAnnotation() : void 0;
            }
            tsTryParseType() {
              return this.tsEatThenParseType(14);
            }
            tsParseTypePredicatePrefix() {
              let e = this.parseIdentifier();
              if (this.isContextual(114) && !this.hasPrecedingLineBreak())
                return this.next(), e;
            }
            tsParseTypePredicateAsserts() {
              if (this.state.type !== 107)
                return false;
              let e = this.state.containsEsc;
              return this.next(), !z(this.state.type) && !this.match(78) ? false : (e && this.raise(u.InvalidEscapedReservedWord, { at: this.state.lastTokStartLoc, reservedWord: "asserts" }), true);
            }
            tsParseTypeAnnotation() {
              let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.startNode();
              return this.tsInType(() => {
                e && this.expect(14), s.typeAnnotation = this.tsParseType();
              }), this.finishNode(s, "TSTypeAnnotation");
            }
            tsParseType() {
              Jr(this.state.inType);
              let e = this.tsParseNonConditionalType();
              if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81))
                return e;
              let s = this.startNodeAtNode(e);
              return s.checkType = e, s.extendsType = this.tsInDisallowConditionalTypesContext(() => this.tsParseNonConditionalType()), this.expect(17), s.trueType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.expect(14), s.falseType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.finishNode(s, "TSConditionalType");
            }
            isAbstractConstructorSignature() {
              return this.isContextual(122) && this.lookahead().type === 77;
            }
            tsParseNonConditionalType() {
              return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(77) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", true) : this.tsParseUnionTypeOrHigher();
            }
            tsParseTypeAssertion() {
              this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(w.ReservedTypeAssertion, { at: this.state.startLoc });
              let e = this.startNode();
              return e.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? this.tsParseTypeReference() : this.tsParseType())), this.expect(48), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion");
            }
            tsParseHeritageClause(e) {
              let s = this.state.startLoc, i = this.tsParseDelimitedList("HeritageClauseElement", () => {
                let a = this.startNode();
                return a.expression = this.tsParseEntityName(), this.match(47) && (a.typeParameters = this.tsParseTypeArguments()), this.finishNode(a, "TSExpressionWithTypeArguments");
              });
              return i.length || this.raise(w.EmptyHeritageClauseType, { at: s, token: e }), i;
            }
            tsParseInterfaceDeclaration(e) {
              let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (this.hasFollowingLineBreak())
                return null;
              this.expectContextual(127), s.declare && (e.declare = true), z(this.state.type) ? (e.id = this.parseIdentifier(), this.checkIdentifier(e.id, pl)) : (e.id = null, this.raise(w.MissingInterfaceName, { at: this.state.startLoc })), e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.eat(81) && (e.extends = this.tsParseHeritageClause("extends"));
              let i = this.startNode();
              return i.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), e.body = this.finishNode(i, "TSInterfaceBody"), this.finishNode(e, "TSInterfaceDeclaration");
            }
            tsParseTypeAliasDeclaration(e) {
              return e.id = this.parseIdentifier(), this.checkIdentifier(e.id, fl), e.typeAnnotation = this.tsInType(() => {
                if (e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this)), this.expect(29), this.isContextual(112) && this.lookahead().type !== 16) {
                  let s = this.startNode();
                  return this.next(), this.finishNode(s, "TSIntrinsicKeyword");
                }
                return this.tsParseType();
              }), this.semicolon(), this.finishNode(e, "TSTypeAliasDeclaration");
            }
            tsInNoContext(e) {
              let s = this.state.context;
              this.state.context = [s[0]];
              try {
                return e();
              } finally {
                this.state.context = s;
              }
            }
            tsInType(e) {
              let s = this.state.inType;
              this.state.inType = true;
              try {
                return e();
              } finally {
                this.state.inType = s;
              }
            }
            tsInDisallowConditionalTypesContext(e) {
              let s = this.state.inDisallowConditionalTypesContext;
              this.state.inDisallowConditionalTypesContext = true;
              try {
                return e();
              } finally {
                this.state.inDisallowConditionalTypesContext = s;
              }
            }
            tsInAllowConditionalTypesContext(e) {
              let s = this.state.inDisallowConditionalTypesContext;
              this.state.inDisallowConditionalTypesContext = false;
              try {
                return e();
              } finally {
                this.state.inDisallowConditionalTypesContext = s;
              }
            }
            tsEatThenParseType(e) {
              return this.match(e) ? this.tsNextThenParseType() : void 0;
            }
            tsExpectThenParseType(e) {
              return this.tsDoThenParseType(() => this.expect(e));
            }
            tsNextThenParseType() {
              return this.tsDoThenParseType(() => this.next());
            }
            tsDoThenParseType(e) {
              return this.tsInType(() => (e(), this.tsParseType()));
            }
            tsParseEnumMember() {
              let e = this.startNode();
              return e.id = this.match(131) ? super.parseStringLiteral(this.state.value) : this.parseIdentifier(true), this.eat(29) && (e.initializer = super.parseMaybeAssignAllowIn()), this.finishNode(e, "TSEnumMember");
            }
            tsParseEnumDeclaration(e) {
              let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              return s.const && (e.const = true), s.declare && (e.declare = true), this.expectContextual(124), e.id = this.parseIdentifier(), this.checkIdentifier(e.id, e.const ? ml : Fr), this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumDeclaration");
            }
            tsParseModuleBlock() {
              let e = this.startNode();
              return this.scope.enter(je), this.expect(5), super.parseBlockOrModuleBlockBody(e.body = [], void 0, true, 8), this.scope.exit(), this.finishNode(e, "TSModuleBlock");
            }
            tsParseModuleOrNamespaceDeclaration(e) {
              let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
              if (e.id = this.parseIdentifier(), s || this.checkIdentifier(e.id, yl), this.eat(16)) {
                let i = this.startNode();
                this.tsParseModuleOrNamespaceDeclaration(i, true), e.body = i;
              } else
                this.scope.enter(Ue), this.prodParam.enter($e), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();
              return this.finishNode(e, "TSModuleDeclaration");
            }
            tsParseAmbientExternalModuleDeclaration(e) {
              return this.isContextual(110) ? (e.global = true, e.id = this.parseIdentifier()) : this.match(131) ? e.id = super.parseStringLiteral(this.state.value) : this.unexpected(), this.match(5) ? (this.scope.enter(Ue), this.prodParam.enter($e), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(e, "TSModuleDeclaration");
            }
            tsParseImportEqualsDeclaration(e, s) {
              e.isExport = s || false, e.id = this.parseIdentifier(), this.checkIdentifier(e.id, Ye), this.expect(29);
              let i = this.tsParseModuleReference();
              return e.importKind === "type" && i.type !== "TSExternalModuleReference" && this.raise(w.ImportAliasHasImportType, { at: i }), e.moduleReference = i, this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration");
            }
            tsIsExternalModuleReference() {
              return this.isContextual(117) && this.lookaheadCharCode() === 40;
            }
            tsParseModuleReference() {
              return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(false);
            }
            tsParseExternalModuleReference() {
              let e = this.startNode();
              if (this.expectContextual(117), this.expect(10), !this.match(131))
                throw this.unexpected();
              return e.expression = super.parseExprAtom(), this.expect(11), this.finishNode(e, "TSExternalModuleReference");
            }
            tsLookAhead(e) {
              let s = this.state.clone(), i = e();
              return this.state = s, i;
            }
            tsTryParseAndCatch(e) {
              let s = this.tryParse((i) => e() || i());
              if (!(s.aborted || !s.node))
                return s.error && (this.state = s.failState), s.node;
            }
            tsTryParse(e) {
              let s = this.state.clone(), i = e();
              if (i !== void 0 && i !== false)
                return i;
              this.state = s;
            }
            tsTryParseDeclare(e) {
              if (this.isLineTerminator())
                return;
              let s = this.state.type, i;
              return this.isContextual(99) && (s = 74, i = "let"), this.tsInAmbientContext(() => {
                if (s === 68)
                  return e.declare = true, super.parseFunctionStatement(e, false, false);
                if (s === 80)
                  return e.declare = true, this.parseClass(e, true, false);
                if (s === 124)
                  return this.tsParseEnumDeclaration(e, { declare: true });
                if (s === 110)
                  return this.tsParseAmbientExternalModuleDeclaration(e);
                if (s === 75 || s === 74)
                  return !this.match(75) || !this.isLookaheadContextual("enum") ? (e.declare = true, this.parseVarStatement(e, i || this.state.value, true)) : (this.expect(75), this.tsParseEnumDeclaration(e, { const: true, declare: true }));
                if (s === 127) {
                  let a = this.tsParseInterfaceDeclaration(e, { declare: true });
                  if (a)
                    return a;
                }
                if (z(s))
                  return this.tsParseDeclaration(e, this.state.value, true, null);
              });
            }
            tsTryParseExportDeclaration() {
              return this.tsParseDeclaration(this.startNode(), this.state.value, true, null);
            }
            tsParseExpressionStatement(e, s, i) {
              switch (s.name) {
                case "declare": {
                  let a = this.tsTryParseDeclare(e);
                  if (a)
                    return a.declare = true, a;
                  break;
                }
                case "global":
                  if (this.match(5)) {
                    this.scope.enter(Ue), this.prodParam.enter($e);
                    let a = e;
                    return a.global = true, a.id = s, a.body = this.tsParseModuleBlock(), this.scope.exit(), this.prodParam.exit(), this.finishNode(a, "TSModuleDeclaration");
                  }
                  break;
                default:
                  return this.tsParseDeclaration(e, s.name, false, i);
              }
            }
            tsParseDeclaration(e, s, i, a) {
              switch (s) {
                case "abstract":
                  if (this.tsCheckLineTerminator(i) && (this.match(80) || z(this.state.type)))
                    return this.tsParseAbstractDeclaration(e, a);
                  break;
                case "module":
                  if (this.tsCheckLineTerminator(i)) {
                    if (this.match(131))
                      return this.tsParseAmbientExternalModuleDeclaration(e);
                    if (z(this.state.type))
                      return this.tsParseModuleOrNamespaceDeclaration(e);
                  }
                  break;
                case "namespace":
                  if (this.tsCheckLineTerminator(i) && z(this.state.type))
                    return this.tsParseModuleOrNamespaceDeclaration(e);
                  break;
                case "type":
                  if (this.tsCheckLineTerminator(i) && z(this.state.type))
                    return this.tsParseTypeAliasDeclaration(e);
                  break;
              }
            }
            tsCheckLineTerminator(e) {
              return e ? this.hasFollowingLineBreak() ? false : (this.next(), true) : !this.isLineTerminator();
            }
            tsTryParseGenericAsyncArrowFunction(e) {
              if (!this.match(47))
                return;
              let s = this.state.maybeInArrowParameters;
              this.state.maybeInArrowParameters = true;
              let i = this.tsTryParseAndCatch(() => {
                let a = this.startNodeAt(e);
                return a.typeParameters = this.tsParseTypeParameters(), super.parseFunctionParams(a), a.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(19), a;
              });
              if (this.state.maybeInArrowParameters = s, !!i)
                return super.parseArrowExpression(i, null, true);
            }
            tsParseTypeArgumentsInExpression() {
              if (this.reScan_lt() === 47)
                return this.tsParseTypeArguments();
            }
            tsParseTypeArguments() {
              let e = this.startNode();
              return e.params = this.tsInType(() => this.tsInNoContext(() => (this.expect(47), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), e.params.length === 0 && this.raise(w.EmptyTypeArguments, { at: e }), this.expect(48), this.finishNode(e, "TSTypeParameterInstantiation");
            }
            tsIsDeclarationStart() {
              return el(this.state.type);
            }
            isExportDefaultSpecifier() {
              return this.tsIsDeclarationStart() ? false : super.isExportDefaultSpecifier();
            }
            parseAssignableListItem(e, s) {
              let i = this.state.startLoc, a, n = false, o = false;
              if (e !== void 0) {
                let m = {};
                this.tsParseModifiers({ modified: m, allowedModifiers: ["public", "private", "protected", "override", "readonly"] }), a = m.accessibility, o = m.override, n = m.readonly, e === false && (a || n || o) && this.raise(w.UnexpectedParameterModifier, { at: i });
              }
              let c = this.parseMaybeDefault();
              this.parseAssignableListItemTypes(c);
              let p = this.parseMaybeDefault(c.loc.start, c);
              if (a || n || o) {
                let m = this.startNodeAt(i);
                return s.length && (m.decorators = s), a && (m.accessibility = a), n && (m.readonly = n), o && (m.override = o), p.type !== "Identifier" && p.type !== "AssignmentPattern" && this.raise(w.UnsupportedParameterPropertyKind, { at: m }), m.parameter = p, this.finishNode(m, "TSParameterProperty");
              }
              return s.length && (c.decorators = s), p;
            }
            isSimpleParameter(e) {
              return e.type === "TSParameterProperty" && super.isSimpleParameter(e.parameter) || super.isSimpleParameter(e);
            }
            parseFunctionBodyAndFinish(e, s) {
              let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
              this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
              let a = s === "FunctionDeclaration" ? "TSDeclareFunction" : s === "ClassMethod" || s === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
              return a && !this.match(5) && this.isLineTerminator() ? this.finishNode(e, a) : a === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(w.DeclareFunctionHasImplementation, { at: e }), e.declare) ? super.parseFunctionBodyAndFinish(e, a, i) : super.parseFunctionBodyAndFinish(e, s, i);
            }
            registerFunctionStatementId(e) {
              !e.body && e.id ? this.checkIdentifier(e.id, Lr) : super.registerFunctionStatementId(e);
            }
            tsCheckForInvalidTypeCasts(e) {
              e.forEach((s) => {
                (s == null ? void 0 : s.type) === "TSTypeCastExpression" && this.raise(w.UnexpectedTypeAnnotation, { at: s.typeAnnotation });
              });
            }
            toReferencedList(e, s) {
              return this.tsCheckForInvalidTypeCasts(e), e;
            }
            parseArrayLike(e, s, i, a) {
              let n = super.parseArrayLike(e, s, i, a);
              return n.type === "ArrayExpression" && this.tsCheckForInvalidTypeCasts(n.elements), n;
            }
            parseSubscript(e, s, i, a) {
              if (!this.hasPrecedingLineBreak() && this.match(35)) {
                this.state.canStartJSXElement = false, this.next();
                let o = this.startNodeAt(s);
                return o.expression = e, this.finishNode(o, "TSNonNullExpression");
              }
              let n = false;
              if (this.match(18) && this.lookaheadCharCode() === 60) {
                if (i)
                  return a.stop = true, e;
                a.optionalChainMember = n = true, this.next();
              }
              if (this.match(47) || this.match(51)) {
                let o, c = this.tsTryParseAndCatch(() => {
                  if (!i && this.atPossibleAsyncArrow(e)) {
                    let A = this.tsTryParseGenericAsyncArrowFunction(s);
                    if (A)
                      return A;
                  }
                  let p = this.tsParseTypeArgumentsInExpression();
                  if (!p)
                    return;
                  if (n && !this.match(10)) {
                    o = this.state.curPosition();
                    return;
                  }
                  if (ct(this.state.type)) {
                    let A = super.parseTaggedTemplateExpression(e, s, a);
                    return A.typeParameters = p, A;
                  }
                  if (!i && this.eat(10)) {
                    let A = this.startNodeAt(s);
                    return A.callee = e, A.arguments = this.parseCallExpressionArguments(11, false), this.tsCheckForInvalidTypeCasts(A.arguments), A.typeParameters = p, a.optionalChainMember && (A.optional = n), this.finishCallExpression(A, a.optionalChainMember);
                  }
                  let m = this.state.type;
                  if (m === 48 || m === 52 || m !== 10 && Xt(m) && !this.hasPrecedingLineBreak())
                    return;
                  let x = this.startNodeAt(s);
                  return x.expression = e, x.typeParameters = p, this.finishNode(x, "TSInstantiationExpression");
                });
                if (o && this.unexpected(o, 10), c)
                  return c.type === "TSInstantiationExpression" && (this.match(16) || this.match(18) && this.lookaheadCharCode() !== 40) && this.raise(w.InvalidPropertyAccessAfterInstantiationExpression, { at: this.state.startLoc }), c;
              }
              return super.parseSubscript(e, s, i, a);
            }
            parseNewCallee(e) {
              var s;
              super.parseNewCallee(e);
              let { callee: i } = e;
              i.type === "TSInstantiationExpression" && !((s = i.extra) != null && s.parenthesized) && (e.typeParameters = i.typeParameters, e.callee = i.expression);
            }
            parseExprOp(e, s, i) {
              let a;
              if (ut(58) > i && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (a = this.isContextual(118)))) {
                let n = this.startNodeAt(s);
                return n.expression = e, n.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? (a && this.raise(u.UnexpectedKeyword, { at: this.state.startLoc, keyword: "const" }), this.tsParseTypeReference()) : this.tsParseType())), this.finishNode(n, a ? "TSSatisfiesExpression" : "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(n, s, i);
              }
              return super.parseExprOp(e, s, i);
            }
            checkReservedWord(e, s, i, a) {
              this.state.isAmbientContext || super.checkReservedWord(e, s, i, a);
            }
            checkImportReflection(e) {
              super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(w.ImportReflectionHasImportType, { at: e.specifiers[0].loc.start });
            }
            checkDuplicateExports() {
            }
            parseImport(e) {
              if (e.importKind = "value", z(this.state.type) || this.match(55) || this.match(5)) {
                let i = this.lookahead();
                if (this.isContextual(128) && i.type !== 12 && i.type !== 97 && i.type !== 29 && (e.importKind = "type", this.next(), i = this.lookahead()), z(this.state.type) && i.type === 29)
                  return this.tsParseImportEqualsDeclaration(e);
              }
              let s = super.parseImport(e);
              return s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(w.TypeImportCannotSpecifyDefaultAndNamed, { at: s }), s;
            }
            parseExport(e, s) {
              if (this.match(83))
                return this.next(), this.isContextual(128) && this.lookaheadCharCode() !== 61 ? (e.importKind = "type", this.next()) : e.importKind = "value", this.tsParseImportEqualsDeclaration(e, true);
              if (this.eat(29)) {
                let i = e;
                return i.expression = super.parseExpression(), this.semicolon(), this.finishNode(i, "TSExportAssignment");
              } else if (this.eatContextual(93)) {
                let i = e;
                return this.expectContextual(126), i.id = this.parseIdentifier(), this.semicolon(), this.finishNode(i, "TSNamespaceExportDeclaration");
              } else
                return this.isContextual(128) && this.lookahead().type === 5 ? (this.next(), e.exportKind = "type") : e.exportKind = "value", super.parseExport(e, s);
            }
            isAbstractClass() {
              return this.isContextual(122) && this.lookahead().type === 80;
            }
            parseExportDefaultExpression() {
              if (this.isAbstractClass()) {
                let e = this.startNode();
                return this.next(), e.abstract = true, this.parseClass(e, true, true);
              }
              if (this.match(127)) {
                let e = this.tsParseInterfaceDeclaration(this.startNode());
                if (e)
                  return e;
              }
              return super.parseExportDefaultExpression();
            }
            parseVarStatement(e, s) {
              let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, { isAmbientContext: a } = this.state, n = super.parseVarStatement(e, s, i || a);
              if (!a)
                return n;
              for (let { id: o, init: c } of n.declarations)
                c && (s !== "const" || o.typeAnnotation ? this.raise(w.InitializerNotAllowedInAmbientContext, { at: c }) : c.type !== "StringLiteral" && c.type !== "BooleanLiteral" && c.type !== "NumericLiteral" && c.type !== "BigIntLiteral" && (c.type !== "TemplateLiteral" || c.expressions.length > 0) && !hh(c) && this.raise(w.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference, { at: c }));
              return n;
            }
            parseStatementContent(e, s) {
              if (this.match(75) && this.isLookaheadContextual("enum")) {
                let i = this.startNode();
                return this.expect(75), this.tsParseEnumDeclaration(i, { const: true });
              }
              if (this.isContextual(124))
                return this.tsParseEnumDeclaration(this.startNode());
              if (this.isContextual(127)) {
                let i = this.tsParseInterfaceDeclaration(this.startNode());
                if (i)
                  return i;
              }
              return super.parseStatementContent(e, s);
            }
            parseAccessModifier() {
              return this.tsParseModifier(["public", "protected", "private"]);
            }
            tsHasSomeModifiers(e, s) {
              return s.some((i) => Xr(i) ? e.accessibility === i : !!e[i]);
            }
            tsIsStartOfStaticBlocks() {
              return this.isContextual(104) && this.lookaheadCharCode() === 123;
            }
            parseClassMember(e, s, i) {
              let a = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
              this.tsParseModifiers({ modified: s, allowedModifiers: a, disallowedModifiers: ["in", "out"], stopOnStartOfClassStaticBlock: true, errorTemplate: w.InvalidModifierOnTypeParameterPositions });
              let n = () => {
                this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(s, a) && this.raise(w.StaticBlockCannotHaveModifier, { at: this.state.curPosition() }), super.parseClassStaticBlock(e, s)) : this.parseClassMemberWithIsStatic(e, s, i, !!s.static);
              };
              s.declare ? this.tsInAmbientContext(n) : n();
            }
            parseClassMemberWithIsStatic(e, s, i, a) {
              let n = this.tsTryParseIndexSignature(s);
              if (n) {
                e.body.push(n), s.abstract && this.raise(w.IndexSignatureHasAbstract, { at: s }), s.accessibility && this.raise(w.IndexSignatureHasAccessibility, { at: s, modifier: s.accessibility }), s.declare && this.raise(w.IndexSignatureHasDeclare, { at: s }), s.override && this.raise(w.IndexSignatureHasOverride, { at: s });
                return;
              }
              !this.state.inAbstractClass && s.abstract && this.raise(w.NonAbstractClassHasAbstractMethod, { at: s }), s.override && (i.hadSuperClass || this.raise(w.OverrideNotInSubClass, { at: s })), super.parseClassMemberWithIsStatic(e, s, i, a);
            }
            parsePostMemberNameModifiers(e) {
              this.eat(17) && (e.optional = true), e.readonly && this.match(10) && this.raise(w.ClassMethodHasReadonly, { at: e }), e.declare && this.match(10) && this.raise(w.ClassMethodHasDeclare, { at: e });
            }
            parseExpressionStatement(e, s, i) {
              return (s.type === "Identifier" ? this.tsParseExpressionStatement(e, s, i) : void 0) || super.parseExpressionStatement(e, s, i);
            }
            shouldParseExportDeclaration() {
              return this.tsIsDeclarationStart() ? true : super.shouldParseExportDeclaration();
            }
            parseConditional(e, s, i) {
              if (!this.state.maybeInArrowParameters || !this.match(17))
                return super.parseConditional(e, s, i);
              let a = this.tryParse(() => super.parseConditional(e, s));
              return a.node ? (a.error && (this.state = a.failState), a.node) : (a.error && super.setOptionalParametersError(i, a.error), e);
            }
            parseParenItem(e, s) {
              if (e = super.parseParenItem(e, s), this.eat(17) && (e.optional = true, this.resetEndLocation(e)), this.match(14)) {
                let i = this.startNodeAt(s);
                return i.expression = e, i.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(i, "TSTypeCastExpression");
              }
              return e;
            }
            parseExportDeclaration(e) {
              if (!this.state.isAmbientContext && this.isContextual(123))
                return this.tsInAmbientContext(() => this.parseExportDeclaration(e));
              let s = this.state.startLoc, i = this.eatContextual(123);
              if (i && (this.isContextual(123) || !this.shouldParseExportDeclaration()))
                throw this.raise(w.ExpectedAmbientAfterExportDeclare, { at: this.state.startLoc });
              let n = z(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(e);
              return n ? ((n.type === "TSInterfaceDeclaration" || n.type === "TSTypeAliasDeclaration" || i) && (e.exportKind = "type"), i && (this.resetStartLocation(n, s), n.declare = true), n) : null;
            }
            parseClassId(e, s, i, a) {
              if ((!s || i) && this.isContextual(111))
                return;
              super.parseClassId(e, s, i, e.declare ? Lr : kr);
              let n = this.tsTryParseTypeParameters(this.tsParseInOutModifiers.bind(this));
              n && (e.typeParameters = n);
            }
            parseClassPropertyAnnotation(e) {
              e.optional || (this.eat(35) ? e.definite = true : this.eat(17) && (e.optional = true));
              let s = this.tsTryParseTypeAnnotation();
              s && (e.typeAnnotation = s);
            }
            parseClassProperty(e) {
              if (this.parseClassPropertyAnnotation(e), this.state.isAmbientContext && !(e.readonly && !e.typeAnnotation) && this.match(29) && this.raise(w.DeclareClassFieldHasInitializer, { at: this.state.startLoc }), e.abstract && this.match(29)) {
                let { key: s } = e;
                this.raise(w.AbstractPropertyHasInitializer, { at: this.state.startLoc, propertyName: s.type === "Identifier" && !e.computed ? s.name : `[${this.input.slice(s.start, s.end)}]` });
              }
              return super.parseClassProperty(e);
            }
            parseClassPrivateProperty(e) {
              return e.abstract && this.raise(w.PrivateElementHasAbstract, { at: e }), e.accessibility && this.raise(w.PrivateElementHasAccessibility, { at: e, modifier: e.accessibility }), this.parseClassPropertyAnnotation(e), super.parseClassPrivateProperty(e);
            }
            parseClassAccessorProperty(e) {
              return this.parseClassPropertyAnnotation(e), e.optional && this.raise(w.AccessorCannotBeOptional, { at: e }), super.parseClassAccessorProperty(e);
            }
            pushClassMethod(e, s, i, a, n, o) {
              let c = this.tsTryParseTypeParameters();
              c && n && this.raise(w.ConstructorHasTypeParameters, { at: c });
              let { declare: p = false, kind: m } = s;
              p && (m === "get" || m === "set") && this.raise(w.DeclareAccessor, { at: s, kind: m }), c && (s.typeParameters = c), super.pushClassMethod(e, s, i, a, n, o);
            }
            pushClassPrivateMethod(e, s, i, a) {
              let n = this.tsTryParseTypeParameters();
              n && (s.typeParameters = n), super.pushClassPrivateMethod(e, s, i, a);
            }
            declareClassPrivateMethodInScope(e, s) {
              e.type !== "TSDeclareMethod" && (e.type === "MethodDefinition" && !e.value.body || super.declareClassPrivateMethodInScope(e, s));
            }
            parseClassSuper(e) {
              super.parseClassSuper(e), e.superClass && (this.match(47) || this.match(51)) && (e.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual(111) && (e.implements = this.tsParseHeritageClause("implements"));
            }
            parseObjPropValue(e, s, i, a, n, o, c) {
              let p = this.tsTryParseTypeParameters();
              return p && (e.typeParameters = p), super.parseObjPropValue(e, s, i, a, n, o, c);
            }
            parseFunctionParams(e, s) {
              let i = this.tsTryParseTypeParameters();
              i && (e.typeParameters = i), super.parseFunctionParams(e, s);
            }
            parseVarId(e, s) {
              super.parseVarId(e, s), e.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35) && (e.definite = true);
              let i = this.tsTryParseTypeAnnotation();
              i && (e.id.typeAnnotation = i, this.resetEndLocation(e.id));
            }
            parseAsyncArrowFromCallExpression(e, s) {
              return this.match(14) && (e.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(e, s);
            }
            parseMaybeAssign(e, s) {
              var i, a, n, o, c, p, m;
              let x, A, b;
              if (this.hasPlugin("jsx") && (this.match(140) || this.match(47))) {
                if (x = this.state.clone(), A = this.tryParse(() => super.parseMaybeAssign(e, s), x), !A.error)
                  return A.node;
                let { context: Y } = this.state, Q = Y[Y.length - 1];
                (Q === $.j_oTag || Q === $.j_expr) && Y.pop();
              }
              if (!((i = A) != null && i.error) && !this.match(47))
                return super.parseMaybeAssign(e, s);
              (!x || x === this.state) && (x = this.state.clone());
              let O, R = this.tryParse((Y) => {
                var Q, J;
                O = this.tsParseTypeParameters();
                let se = super.parseMaybeAssign(e, s);
                return (se.type !== "ArrowFunctionExpression" || (Q = se.extra) != null && Q.parenthesized) && Y(), ((J = O) == null ? void 0 : J.params.length) !== 0 && this.resetStartLocationFromNode(se, O), se.typeParameters = O, se;
              }, x);
              if (!R.error && !R.aborted)
                return O && this.reportReservedArrowTypeParam(O), R.node;
              if (!A && (Jr(!this.hasPlugin("jsx")), b = this.tryParse(() => super.parseMaybeAssign(e, s), x), !b.error))
                return b.node;
              if ((a = A) != null && a.node)
                return this.state = A.failState, A.node;
              if (R.node)
                return this.state = R.failState, O && this.reportReservedArrowTypeParam(O), R.node;
              if ((n = b) != null && n.node)
                return this.state = b.failState, b.node;
              throw (o = A) != null && o.thrown ? A.error : R.thrown ? R.error : (c = b) != null && c.thrown ? b.error : ((p = A) == null ? void 0 : p.error) || R.error || ((m = b) == null ? void 0 : m.error);
            }
            reportReservedArrowTypeParam(e) {
              var s;
              e.params.length === 1 && !((s = e.extra) != null && s.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(w.ReservedArrowTypeParam, { at: e });
            }
            parseMaybeUnary(e, s) {
              return !this.hasPlugin("jsx") && this.match(47) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(e, s);
            }
            parseArrow(e) {
              if (this.match(14)) {
                let s = this.tryParse((i) => {
                  let a = this.tsParseTypeOrTypePredicateAnnotation(14);
                  return (this.canInsertSemicolon() || !this.match(19)) && i(), a;
                });
                if (s.aborted)
                  return;
                s.thrown || (s.error && (this.state = s.failState), e.returnType = s.node);
              }
              return super.parseArrow(e);
            }
            parseAssignableListItemTypes(e) {
              this.eat(17) && (e.type !== "Identifier" && !this.state.isAmbientContext && !this.state.inType && this.raise(w.PatternIsOptional, { at: e }), e.optional = true);
              let s = this.tsTryParseTypeAnnotation();
              return s && (e.typeAnnotation = s), this.resetEndLocation(e), e;
            }
            isAssignable(e, s) {
              switch (e.type) {
                case "TSTypeCastExpression":
                  return this.isAssignable(e.expression, s);
                case "TSParameterProperty":
                  return true;
                default:
                  return super.isAssignable(e, s);
              }
            }
            toAssignable(e) {
              let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
              switch (e.type) {
                case "ParenthesizedExpression":
                  this.toAssignableParenthesizedExpression(e, s);
                  break;
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "TSTypeAssertion":
                  s ? this.expressionScope.recordArrowParameterBindingError(w.UnexpectedTypeCastInParameter, { at: e }) : this.raise(w.UnexpectedTypeCastInParameter, { at: e }), this.toAssignable(e.expression, s);
                  break;
                case "AssignmentExpression":
                  !s && e.left.type === "TSTypeCastExpression" && (e.left = this.typeCastToParameter(e.left));
                default:
                  super.toAssignable(e, s);
              }
            }
            toAssignableParenthesizedExpression(e, s) {
              switch (e.expression.type) {
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "TSTypeAssertion":
                case "ParenthesizedExpression":
                  this.toAssignable(e.expression, s);
                  break;
                default:
                  super.toAssignable(e, s);
              }
            }
            checkToRestConversion(e, s) {
              switch (e.type) {
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSTypeAssertion":
                case "TSNonNullExpression":
                  this.checkToRestConversion(e.expression, false);
                  break;
                default:
                  super.checkToRestConversion(e, s);
              }
            }
            isValidLVal(e, s, i) {
              return ih({ TSTypeCastExpression: true, TSParameterProperty: "parameter", TSNonNullExpression: "expression", TSAsExpression: (i !== be || !s) && ["expression", true], TSSatisfiesExpression: (i !== be || !s) && ["expression", true], TSTypeAssertion: (i !== be || !s) && ["expression", true] }, e) || super.isValidLVal(e, s, i);
            }
            parseBindingAtom() {
              switch (this.state.type) {
                case 78:
                  return this.parseIdentifier(true);
                default:
                  return super.parseBindingAtom();
              }
            }
            parseMaybeDecoratorArguments(e) {
              if (this.match(47) || this.match(51)) {
                let s = this.tsParseTypeArgumentsInExpression();
                if (this.match(10)) {
                  let i = super.parseMaybeDecoratorArguments(e);
                  return i.typeParameters = s, i;
                }
                this.unexpected(null, 10);
              }
              return super.parseMaybeDecoratorArguments(e);
            }
            checkCommaAfterRest(e) {
              return this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e ? (this.next(), false) : super.checkCommaAfterRest(e);
            }
            isClassMethod() {
              return this.match(47) || super.isClassMethod();
            }
            isClassProperty() {
              return this.match(35) || this.match(14) || super.isClassProperty();
            }
            parseMaybeDefault(e, s) {
              let i = super.parseMaybeDefault(e, s);
              return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(w.TypeAnnotationAfterAssign, { at: i.typeAnnotation }), i;
            }
            getTokenFromCode(e) {
              if (this.state.inType) {
                if (e === 62)
                  return this.finishOp(48, 1);
                if (e === 60)
                  return this.finishOp(47, 1);
              }
              return super.getTokenFromCode(e);
            }
            reScan_lt_gt() {
              let { type: e } = this.state;
              e === 47 ? (this.state.pos -= 1, this.readToken_lt()) : e === 48 && (this.state.pos -= 1, this.readToken_gt());
            }
            reScan_lt() {
              let { type: e } = this.state;
              return e === 51 ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : e;
            }
            toAssignableList(e, s, i) {
              for (let a = 0; a < e.length; a++) {
                let n = e[a];
                (n == null ? void 0 : n.type) === "TSTypeCastExpression" && (e[a] = this.typeCastToParameter(n));
              }
              super.toAssignableList(e, s, i);
            }
            typeCastToParameter(e) {
              return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
            }
            shouldParseArrow(e) {
              return this.match(14) ? e.every((s) => this.isAssignable(s, true)) : super.shouldParseArrow(e);
            }
            shouldParseAsyncArrow() {
              return this.match(14) || super.shouldParseAsyncArrow();
            }
            canHaveLeadingDecorator() {
              return super.canHaveLeadingDecorator() || this.isAbstractClass();
            }
            jsxParseOpeningElementAfterName(e) {
              if (this.match(47) || this.match(51)) {
                let s = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
                s && (e.typeParameters = s);
              }
              return super.jsxParseOpeningElementAfterName(e);
            }
            getGetterSetterExpectedParamCount(e) {
              let s = super.getGetterSetterExpectedParamCount(e), a = this.getObjectOrClassMethodParams(e)[0];
              return a && this.isThisParam(a) ? s + 1 : s;
            }
            parseCatchClauseParam() {
              let e = super.parseCatchClauseParam(), s = this.tsTryParseTypeAnnotation();
              return s && (e.typeAnnotation = s, this.resetEndLocation(e)), e;
            }
            tsInAmbientContext(e) {
              let s = this.state.isAmbientContext;
              this.state.isAmbientContext = true;
              try {
                return e();
              } finally {
                this.state.isAmbientContext = s;
              }
            }
            parseClass(e, s, i) {
              let a = this.state.inAbstractClass;
              this.state.inAbstractClass = !!e.abstract;
              try {
                return super.parseClass(e, s, i);
              } finally {
                this.state.inAbstractClass = a;
              }
            }
            tsParseAbstractDeclaration(e, s) {
              if (this.match(80))
                return e.abstract = true, this.maybeTakeDecorators(s, this.parseClass(e, true, false));
              if (this.isContextual(127)) {
                if (!this.hasFollowingLineBreak())
                  return e.abstract = true, this.raise(w.NonClassMethodPropertyHasAbstractModifer, { at: e }), this.tsParseInterfaceDeclaration(e);
              } else
                this.unexpected(null, 80);
            }
            parseMethod(e, s, i, a, n, o, c) {
              let p = super.parseMethod(e, s, i, a, n, o, c);
              if (p.abstract && (this.hasPlugin("estree") ? !!p.value.body : !!p.body)) {
                let { key: x } = p;
                this.raise(w.AbstractMethodHasImplementation, { at: p, methodName: x.type === "Identifier" && !p.computed ? x.name : `[${this.input.slice(x.start, x.end)}]` });
              }
              return p;
            }
            tsParseTypeParameterName() {
              return this.parseIdentifier().name;
            }
            shouldParseAsAmbientContext() {
              return !!this.getPluginOption("typescript", "dts");
            }
            parse() {
              return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = true), super.parse();
            }
            getExpression() {
              return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = true), super.getExpression();
            }
            parseExportSpecifier(e, s, i, a) {
              return !s && a ? (this.parseTypeOnlyImportExportSpecifier(e, false, i), this.finishNode(e, "ExportSpecifier")) : (e.exportKind = "value", super.parseExportSpecifier(e, s, i, a));
            }
            parseImportSpecifier(e, s, i, a, n) {
              return !s && a ? (this.parseTypeOnlyImportExportSpecifier(e, true, i), this.finishNode(e, "ImportSpecifier")) : (e.importKind = "value", super.parseImportSpecifier(e, s, i, a, i ? Or : Ye));
            }
            parseTypeOnlyImportExportSpecifier(e, s, i) {
              let a = s ? "imported" : "local", n = s ? "local" : "exported", o = e[a], c, p = false, m = true, x = o.loc.start;
              if (this.isContextual(93)) {
                let b = this.parseIdentifier();
                if (this.isContextual(93)) {
                  let O = this.parseIdentifier();
                  ye(this.state.type) ? (p = true, o = b, c = s ? this.parseIdentifier() : this.parseModuleExportName(), m = false) : (c = O, m = false);
                } else
                  ye(this.state.type) ? (m = false, c = s ? this.parseIdentifier() : this.parseModuleExportName()) : (p = true, o = b);
              } else
                ye(this.state.type) && (p = true, s ? (o = this.parseIdentifier(true), this.isContextual(93) || this.checkReservedWord(o.name, o.loc.start, true, true)) : o = this.parseModuleExportName());
              p && i && this.raise(s ? w.TypeModifierIsUsedInTypeImports : w.TypeModifierIsUsedInTypeExports, { at: x }), e[a] = o, e[n] = c;
              let A = s ? "importKind" : "exportKind";
              e[A] = p ? "type" : "value", m && this.eatContextual(93) && (e[n] = s ? this.parseIdentifier() : this.parseModuleExportName()), e[n] || (e[n] = Te(e[a])), s && this.checkIdentifier(e[n], p ? Or : Ye);
            }
          };
          function hh(t) {
            if (t.type !== "MemberExpression")
              return false;
            let { computed: r, property: e } = t;
            return r && e.type !== "StringLiteral" && (e.type !== "TemplateLiteral" || e.expressions.length > 0) ? false : Yr(t.object);
          }
          function Yr(t) {
            return t.type === "Identifier" ? true : t.type !== "MemberExpression" || t.computed ? false : Yr(t.object);
          }
          var Qr = _`placeholders`({ ClassNameIsRequired: "A class name is required.", UnexpectedSpace: "Unexpected space in placeholder." }), uh = (t) => class extends t {
            parsePlaceholder(e) {
              if (this.match(142)) {
                let s = this.startNode();
                return this.next(), this.assertNoSpace(), s.name = super.parseIdentifier(true), this.assertNoSpace(), this.expect(142), this.finishPlaceholder(s, e);
              }
            }
            finishPlaceholder(e, s) {
              let i = !!(e.expectedNode && e.type === "Placeholder");
              return e.expectedNode = s, i ? e : this.finishNode(e, "Placeholder");
            }
            getTokenFromCode(e) {
              return e === 37 && this.input.charCodeAt(this.state.pos + 1) === 37 ? this.finishOp(142, 2) : super.getTokenFromCode(e);
            }
            parseExprAtom(e) {
              return this.parsePlaceholder("Expression") || super.parseExprAtom(e);
            }
            parseIdentifier(e) {
              return this.parsePlaceholder("Identifier") || super.parseIdentifier(e);
            }
            checkReservedWord(e, s, i, a) {
              e !== void 0 && super.checkReservedWord(e, s, i, a);
            }
            parseBindingAtom() {
              return this.parsePlaceholder("Pattern") || super.parseBindingAtom();
            }
            isValidLVal(e, s, i) {
              return e === "Placeholder" || super.isValidLVal(e, s, i);
            }
            toAssignable(e, s) {
              e && e.type === "Placeholder" && e.expectedNode === "Expression" ? e.expectedNode = "Pattern" : super.toAssignable(e, s);
            }
            chStartsBindingIdentifier(e, s) {
              return !!(super.chStartsBindingIdentifier(e, s) || this.lookahead().type === 142);
            }
            verifyBreakContinue(e, s) {
              e.label && e.label.type === "Placeholder" || super.verifyBreakContinue(e, s);
            }
            parseExpressionStatement(e, s) {
              if (s.type !== "Placeholder" || s.extra && s.extra.parenthesized)
                return super.parseExpressionStatement(e, s);
              if (this.match(14)) {
                let i = e;
                return i.label = this.finishPlaceholder(s, "Identifier"), this.next(), i.body = super.parseStatementOrFunctionDeclaration(false), this.finishNode(i, "LabeledStatement");
              }
              return this.semicolon(), e.name = s.name, this.finishPlaceholder(e, "Statement");
            }
            parseBlock(e, s, i) {
              return this.parsePlaceholder("BlockStatement") || super.parseBlock(e, s, i);
            }
            parseFunctionId(e) {
              return this.parsePlaceholder("Identifier") || super.parseFunctionId(e);
            }
            parseClass(e, s, i) {
              let a = s ? "ClassDeclaration" : "ClassExpression";
              this.next();
              let n = this.state.strict, o = this.parsePlaceholder("Identifier");
              if (o)
                if (this.match(81) || this.match(142) || this.match(5))
                  e.id = o;
                else {
                  if (i || !s)
                    return e.id = null, e.body = this.finishPlaceholder(o, "ClassBody"), this.finishNode(e, a);
                  throw this.raise(Qr.ClassNameIsRequired, { at: this.state.startLoc });
                }
              else
                this.parseClassId(e, s, i);
              return super.parseClassSuper(e), e.body = this.parsePlaceholder("ClassBody") || super.parseClassBody(!!e.superClass, n), this.finishNode(e, a);
            }
            parseExport(e, s) {
              let i = this.parsePlaceholder("Identifier");
              if (!i)
                return super.parseExport(e, s);
              if (!this.isContextual(97) && !this.match(12))
                return e.specifiers = [], e.source = null, e.declaration = this.finishPlaceholder(i, "Declaration"), this.finishNode(e, "ExportNamedDeclaration");
              this.expectPlugin("exportDefaultFrom");
              let a = this.startNode();
              return a.exported = i, e.specifiers = [this.finishNode(a, "ExportDefaultSpecifier")], super.parseExport(e, s);
            }
            isExportDefaultSpecifier() {
              if (this.match(65)) {
                let e = this.nextTokenStart();
                if (this.isUnparsedContextual(e, "from") && this.input.startsWith(Ee(142), this.nextTokenStartSince(e + 4)))
                  return true;
              }
              return super.isExportDefaultSpecifier();
            }
            maybeParseExportDefaultSpecifier(e) {
              return e.specifiers && e.specifiers.length > 0 ? true : super.maybeParseExportDefaultSpecifier(e);
            }
            checkExport(e) {
              let { specifiers: s } = e;
              s != null && s.length && (e.specifiers = s.filter((i) => i.exported.type === "Placeholder")), super.checkExport(e), e.specifiers = s;
            }
            parseImport(e) {
              let s = this.parsePlaceholder("Identifier");
              if (!s)
                return super.parseImport(e);
              if (e.specifiers = [], !this.isContextual(97) && !this.match(12))
                return e.source = this.finishPlaceholder(s, "StringLiteral"), this.semicolon(), this.finishNode(e, "ImportDeclaration");
              let i = this.startNodeAtNode(s);
              return i.local = s, e.specifiers.push(this.finishNode(i, "ImportDefaultSpecifier")), this.eat(12) && (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)), this.expectContextual(97), e.source = this.parseImportSource(), this.semicolon(), this.finishNode(e, "ImportDeclaration");
            }
            parseImportSource() {
              return this.parsePlaceholder("StringLiteral") || super.parseImportSource();
            }
            assertNoSpace() {
              this.state.start > this.state.lastTokEndLoc.index && this.raise(Qr.UnexpectedSpace, { at: this.state.lastTokEndLoc });
            }
          }, ch = (t) => class extends t {
            parseV8Intrinsic() {
              if (this.match(54)) {
                let e = this.state.startLoc, s = this.startNode();
                if (this.next(), z(this.state.type)) {
                  let i = this.parseIdentifierName(), a = this.createIdentifier(s, i);
                  if (a.type = "V8IntrinsicIdentifier", this.match(10))
                    return a;
                }
                this.unexpected(e);
              }
            }
            parseExprAtom(e) {
              return this.parseV8Intrinsic() || super.parseExprAtom(e);
            }
          };
          function te(t, r) {
            let [e, s] = typeof r == "string" ? [r, {}] : r, i = Object.keys(s), a = i.length === 0;
            return t.some((n) => {
              if (typeof n == "string")
                return a && n === e;
              {
                let [o, c] = n;
                if (o !== e)
                  return false;
                for (let p of i)
                  if (c[p] !== s[p])
                    return false;
                return true;
              }
            });
          }
          function Le(t, r, e) {
            let s = t.find((i) => Array.isArray(i) ? i[0] === r : i === r);
            return s && Array.isArray(s) && s.length > 1 ? s[1][e] : null;
          }
          var Zr = ["minimal", "fsharp", "hack", "smart"], ei = ["^^", "@@", "^", "%", "#"], ti = ["hash", "bar"];
          function ph(t) {
            if (te(t, "decorators")) {
              if (te(t, "decorators-legacy"))
                throw new Error("Cannot use the decorators and decorators-legacy plugin together");
              let r = Le(t, "decorators", "decoratorsBeforeExport");
              if (r != null && typeof r != "boolean")
                throw new Error("'decoratorsBeforeExport' must be a boolean.");
              let e = Le(t, "decorators", "allowCallParenthesized");
              if (e != null && typeof e != "boolean")
                throw new Error("'allowCallParenthesized' must be a boolean.");
            }
            if (te(t, "flow") && te(t, "typescript"))
              throw new Error("Cannot combine flow and typescript plugins.");
            if (te(t, "placeholders") && te(t, "v8intrinsic"))
              throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
            if (te(t, "pipelineOperator")) {
              let r = Le(t, "pipelineOperator", "proposal");
              if (!Zr.includes(r)) {
                let s = Zr.map((i) => `"${i}"`).join(", ");
                throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${s}.`);
              }
              let e = te(t, ["recordAndTuple", { syntaxType: "hash" }]);
              if (r === "hack") {
                if (te(t, "placeholders"))
                  throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
                if (te(t, "v8intrinsic"))
                  throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
                let s = Le(t, "pipelineOperator", "topicToken");
                if (!ei.includes(s)) {
                  let i = ei.map((a) => `"${a}"`).join(", ");
                  throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${i}.`);
                }
                if (s === "#" && e)
                  throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
              } else if (r === "smart" && e)
                throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
            }
            if (te(t, "moduleAttributes")) {
              if (te(t, "importAssertions"))
                throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
              if (Le(t, "moduleAttributes", "version") !== "may-2020")
                throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
            }
            if (te(t, "recordAndTuple") && Le(t, "recordAndTuple", "syntaxType") != null && !ti.includes(Le(t, "recordAndTuple", "syntaxType")))
              throw new Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " + ti.map((r) => `'${r}'`).join(", "));
            if (te(t, "asyncDoExpressions") && !te(t, "doExpressions")) {
              let r = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
              throw r.missingPlugins = "doExpressions", r;
            }
          }
          var si = { estree: _e, jsx: th, flow: Zl, typescript: lh, v8intrinsic: ch, placeholders: uh }, fh = Object.keys(si), ri = { sourceType: "script", sourceFilename: void 0, startColumn: 0, startLine: 1, allowAwaitOutsideFunction: false, allowReturnOutsideFunction: false, allowImportExportEverywhere: false, allowSuperOutsideMethod: false, allowUndeclaredExports: false, plugins: [], strictMode: null, ranges: false, tokens: false, createParenthesizedExpressions: false, errorRecovery: false, attachComment: true };
          function dh(t) {
            let r = {};
            for (let e of Object.keys(ri))
              r[e] = t && t[e] != null ? t[e] : ri[e];
            return r;
          }
          var mh = (t, r) => Object.hasOwnProperty.call(t, r) && t[r], ii = (t) => t.type === "ParenthesizedExpression" ? ii(t.expression) : t, yh = class extends Wl {
            toAssignable(t) {
              let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
              var e, s;
              let i;
              switch ((t.type === "ParenthesizedExpression" || (e = t.extra) != null && e.parenthesized) && (i = ii(t), r ? i.type === "Identifier" ? this.expressionScope.recordArrowParameterBindingError(u.InvalidParenthesizedAssignment, { at: t }) : i.type !== "MemberExpression" && this.raise(u.InvalidParenthesizedAssignment, { at: t }) : this.raise(u.InvalidParenthesizedAssignment, { at: t })), t.type) {
                case "Identifier":
                case "ObjectPattern":
                case "ArrayPattern":
                case "AssignmentPattern":
                case "RestElement":
                  break;
                case "ObjectExpression":
                  t.type = "ObjectPattern";
                  for (let n = 0, o = t.properties.length, c = o - 1; n < o; n++) {
                    var a;
                    let p = t.properties[n], m = n === c;
                    this.toAssignableObjectExpressionProp(p, m, r), m && p.type === "RestElement" && (a = t.extra) != null && a.trailingCommaLoc && this.raise(u.RestTrailingComma, { at: t.extra.trailingCommaLoc });
                  }
                  break;
                case "ObjectProperty": {
                  let { key: n, value: o } = t;
                  this.isPrivateName(n) && this.classScope.usePrivateName(this.getPrivateNameSV(n), n.loc.start), this.toAssignable(o, r);
                  break;
                }
                case "SpreadElement":
                  throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");
                case "ArrayExpression":
                  t.type = "ArrayPattern", this.toAssignableList(t.elements, (s = t.extra) == null ? void 0 : s.trailingCommaLoc, r);
                  break;
                case "AssignmentExpression":
                  t.operator !== "=" && this.raise(u.MissingEqInAssignment, { at: t.left.loc.end }), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, r);
                  break;
                case "ParenthesizedExpression":
                  this.toAssignable(i, r);
                  break;
              }
            }
            toAssignableObjectExpressionProp(t, r, e) {
              if (t.type === "ObjectMethod")
                this.raise(t.kind === "get" || t.kind === "set" ? u.PatternHasAccessor : u.PatternHasMethod, { at: t.key });
              else if (t.type === "SpreadElement") {
                t.type = "RestElement";
                let s = t.argument;
                this.checkToRestConversion(s, false), this.toAssignable(s, e), r || this.raise(u.RestTrailingComma, { at: t });
              } else
                this.toAssignable(t, e);
            }
            toAssignableList(t, r, e) {
              let s = t.length - 1;
              for (let i = 0; i <= s; i++) {
                let a = t[i];
                if (a) {
                  if (a.type === "SpreadElement") {
                    a.type = "RestElement";
                    let n = a.argument;
                    this.checkToRestConversion(n, true), this.toAssignable(n, e);
                  } else
                    this.toAssignable(a, e);
                  a.type === "RestElement" && (i < s ? this.raise(u.RestTrailingComma, { at: a }) : r && this.raise(u.RestTrailingComma, { at: r }));
                }
              }
            }
            isAssignable(t, r) {
              switch (t.type) {
                case "Identifier":
                case "ObjectPattern":
                case "ArrayPattern":
                case "AssignmentPattern":
                case "RestElement":
                  return true;
                case "ObjectExpression": {
                  let e = t.properties.length - 1;
                  return t.properties.every((s, i) => s.type !== "ObjectMethod" && (i === e || s.type !== "SpreadElement") && this.isAssignable(s));
                }
                case "ObjectProperty":
                  return this.isAssignable(t.value);
                case "SpreadElement":
                  return this.isAssignable(t.argument);
                case "ArrayExpression":
                  return t.elements.every((e) => e === null || this.isAssignable(e));
                case "AssignmentExpression":
                  return t.operator === "=";
                case "ParenthesizedExpression":
                  return this.isAssignable(t.expression);
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return !r;
                default:
                  return false;
              }
            }
            toReferencedList(t, r) {
              return t;
            }
            toReferencedListDeep(t, r) {
              this.toReferencedList(t, r);
              for (let e of t)
                (e == null ? void 0 : e.type) === "ArrayExpression" && this.toReferencedListDeep(e.elements);
            }
            parseSpread(t) {
              let r = this.startNode();
              return this.next(), r.argument = this.parseMaybeAssignAllowIn(t, void 0), this.finishNode(r, "SpreadElement");
            }
            parseRestBinding() {
              let t = this.startNode();
              return this.next(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");
            }
            parseBindingAtom() {
              switch (this.state.type) {
                case 0: {
                  let t = this.startNode();
                  return this.next(), t.elements = this.parseBindingList(3, 93, true), this.finishNode(t, "ArrayPattern");
                }
                case 5:
                  return this.parseObjectLike(8, true);
              }
              return this.parseIdentifier();
            }
            parseBindingList(t, r, e, s) {
              let i = [], a = true;
              for (; !this.eat(t); )
                if (a ? a = false : this.expect(12), e && this.match(12))
                  i.push(null);
                else {
                  if (this.eat(t))
                    break;
                  if (this.match(21)) {
                    if (i.push(this.parseAssignableListItemTypes(this.parseRestBinding())), !this.checkCommaAfterRest(r)) {
                      this.expect(t);
                      break;
                    }
                  } else {
                    let n = [];
                    for (this.match(26) && this.hasPlugin("decorators") && this.raise(u.UnsupportedParameterDecorator, { at: this.state.startLoc }); this.match(26); )
                      n.push(this.parseDecorator());
                    i.push(this.parseAssignableListItem(s, n));
                  }
                }
              return i;
            }
            parseBindingRestProperty(t) {
              return this.next(), t.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(t, "RestElement");
            }
            parseBindingProperty() {
              let t = this.startNode(), { type: r, startLoc: e } = this.state;
              return r === 21 ? this.parseBindingRestProperty(t) : (r === 136 ? (this.expectPlugin("destructuringPrivate", e), this.classScope.usePrivateName(this.state.value, e), t.key = this.parsePrivateName()) : this.parsePropertyName(t), t.method = false, this.parseObjPropValue(t, e, false, false, true, false));
            }
            parseAssignableListItem(t, r) {
              let e = this.parseMaybeDefault();
              this.parseAssignableListItemTypes(e);
              let s = this.parseMaybeDefault(e.loc.start, e);
              return r.length && (e.decorators = r), s;
            }
            parseAssignableListItemTypes(t) {
              return t;
            }
            parseMaybeDefault(t, r) {
              var e, s;
              if ((e = t) != null || (t = this.state.startLoc), r = (s = r) != null ? s : this.parseBindingAtom(), !this.eat(29))
                return r;
              let i = this.startNodeAt(t);
              return i.left = r, i.right = this.parseMaybeAssignAllowIn(), this.finishNode(i, "AssignmentPattern");
            }
            isValidLVal(t, r, e) {
              return mh({ AssignmentPattern: "left", RestElement: "argument", ObjectProperty: "value", ParenthesizedExpression: "expression", ArrayPattern: "elements", ObjectPattern: "properties" }, t);
            }
            checkLVal(t, r) {
              let { in: e, binding: s = be, checkClashes: i = false, strictModeChanged: a = false, allowingSloppyLetBinding: n = !(s & Ce), hasParenthesizedAncestor: o = false } = r;
              var c;
              let p = t.type;
              if (this.isObjectMethod(t))
                return;
              if (p === "MemberExpression") {
                s !== be && this.raise(u.InvalidPropertyBindingPattern, { at: t });
                return;
              }
              if (t.type === "Identifier") {
                this.checkIdentifier(t, s, a, n);
                let { name: O } = t;
                i && (i.has(O) ? this.raise(u.ParamDupe, { at: t }) : i.add(O));
                return;
              }
              let m = this.isValidLVal(t.type, !(o || (c = t.extra) != null && c.parenthesized) && e.type === "AssignmentExpression", s);
              if (m === true)
                return;
              if (m === false) {
                let O = s === be ? u.InvalidLhs : u.InvalidLhsBinding;
                this.raise(O, { at: t, ancestor: e.type === "UpdateExpression" ? { type: "UpdateExpression", prefix: e.prefix } : { type: e.type } });
                return;
              }
              let [x, A] = Array.isArray(m) ? m : [m, p === "ParenthesizedExpression"], b = t.type === "ArrayPattern" || t.type === "ObjectPattern" || t.type === "ParenthesizedExpression" ? t : e;
              for (let O of [].concat(t[x]))
                O && this.checkLVal(O, { in: b, binding: s, checkClashes: i, allowingSloppyLetBinding: n, strictModeChanged: a, hasParenthesizedAncestor: A });
            }
            checkIdentifier(t, r) {
              let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !(r & Ce);
              this.state.strict && (e ? br(t.name, this.inModule) : Cr(t.name)) && (r === be ? this.raise(u.StrictEvalArguments, { at: t, referenceName: t.name }) : this.raise(u.StrictEvalArgumentsBinding, { at: t, bindingName: t.name })), !s && t.name === "let" && this.raise(u.LetInLexicalBinding, { at: t }), r & be || this.declareNameFromIdentifier(t, r);
            }
            declareNameFromIdentifier(t, r) {
              this.scope.declareName(t.name, r, t.loc.start);
            }
            checkToRestConversion(t, r) {
              switch (t.type) {
                case "ParenthesizedExpression":
                  this.checkToRestConversion(t.expression, r);
                  break;
                case "Identifier":
                case "MemberExpression":
                  break;
                case "ArrayExpression":
                case "ObjectExpression":
                  if (r)
                    break;
                default:
                  this.raise(u.InvalidRestAssignmentPattern, { at: t });
              }
            }
            checkCommaAfterRest(t) {
              return this.match(12) ? (this.raise(this.lookaheadCharCode() === t ? u.RestTrailingComma : u.ElementAfterRest, { at: this.state.startLoc }), true) : false;
            }
          }, xh = class extends yh {
            checkProto(t, r, e, s) {
              if (t.type === "SpreadElement" || this.isObjectMethod(t) || t.computed || t.shorthand)
                return;
              let i = t.key;
              if ((i.type === "Identifier" ? i.name : i.value) === "__proto__") {
                if (r) {
                  this.raise(u.RecordNoProto, { at: i });
                  return;
                }
                e.used && (s ? s.doubleProtoLoc === null && (s.doubleProtoLoc = i.loc.start) : this.raise(u.DuplicateProto, { at: i })), e.used = true;
              }
            }
            shouldExitDescending(t, r) {
              return t.type === "ArrowFunctionExpression" && t.start === r;
            }
            getExpression() {
              this.enterInitialScopes(), this.nextToken();
              let t = this.parseExpression();
              return this.match(137) || this.unexpected(), this.finalizeRemainingComments(), t.comments = this.state.comments, t.errors = this.state.errors, this.options.tokens && (t.tokens = this.tokens), t;
            }
            parseExpression(t, r) {
              return t ? this.disallowInAnd(() => this.parseExpressionBase(r)) : this.allowInAnd(() => this.parseExpressionBase(r));
            }
            parseExpressionBase(t) {
              let r = this.state.startLoc, e = this.parseMaybeAssign(t);
              if (this.match(12)) {
                let s = this.startNodeAt(r);
                for (s.expressions = [e]; this.eat(12); )
                  s.expressions.push(this.parseMaybeAssign(t));
                return this.toReferencedList(s.expressions), this.finishNode(s, "SequenceExpression");
              }
              return e;
            }
            parseMaybeAssignDisallowIn(t, r) {
              return this.disallowInAnd(() => this.parseMaybeAssign(t, r));
            }
            parseMaybeAssignAllowIn(t, r) {
              return this.allowInAnd(() => this.parseMaybeAssign(t, r));
            }
            setOptionalParametersError(t, r) {
              var e;
              t.optionalParametersLoc = (e = r == null ? void 0 : r.loc) != null ? e : this.state.startLoc;
            }
            parseMaybeAssign(t, r) {
              let e = this.state.startLoc;
              if (this.isContextual(106) && this.prodParam.hasYield) {
                let n = this.parseYield();
                return r && (n = r.call(this, n, e)), n;
              }
              let s;
              t ? s = false : (t = new Ct(), s = true);
              let { type: i } = this.state;
              (i === 10 || z(i)) && (this.state.potentialArrowAt = this.state.start);
              let a = this.parseMaybeConditional(t);
              if (r && (a = r.call(this, a, e)), Go(this.state.type)) {
                let n = this.startNodeAt(e), o = this.state.value;
                if (n.operator = o, this.match(29)) {
                  this.toAssignable(a, true), n.left = a;
                  let c = e.index;
                  t.doubleProtoLoc != null && t.doubleProtoLoc.index >= c && (t.doubleProtoLoc = null), t.shorthandAssignLoc != null && t.shorthandAssignLoc.index >= c && (t.shorthandAssignLoc = null), t.privateKeyLoc != null && t.privateKeyLoc.index >= c && (this.checkDestructuringPrivate(t), t.privateKeyLoc = null);
                } else
                  n.left = a;
                return this.next(), n.right = this.parseMaybeAssign(), this.checkLVal(a, { in: this.finishNode(n, "AssignmentExpression") }), n;
              } else
                s && this.checkExpressionErrors(t, true);
              return a;
            }
            parseMaybeConditional(t) {
              let r = this.state.startLoc, e = this.state.potentialArrowAt, s = this.parseExprOps(t);
              return this.shouldExitDescending(s, e) ? s : this.parseConditional(s, r, t);
            }
            parseConditional(t, r, e) {
              if (this.eat(17)) {
                let s = this.startNodeAt(r);
                return s.test = t, s.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), s.alternate = this.parseMaybeAssign(), this.finishNode(s, "ConditionalExpression");
              }
              return t;
            }
            parseMaybeUnaryOrPrivate(t) {
              return this.match(136) ? this.parsePrivateName() : this.parseMaybeUnary(t);
            }
            parseExprOps(t) {
              let r = this.state.startLoc, e = this.state.potentialArrowAt, s = this.parseMaybeUnaryOrPrivate(t);
              return this.shouldExitDescending(s, e) ? s : this.parseExprOp(s, r, -1);
            }
            parseExprOp(t, r, e) {
              if (this.isPrivateName(t)) {
                let i = this.getPrivateNameSV(t);
                (e >= ut(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(u.PrivateInExpectedIn, { at: t, identifierName: i }), this.classScope.usePrivateName(i, t.loc.start);
              }
              let s = this.state.type;
              if (Xo(s) && (this.prodParam.hasIn || !this.match(58))) {
                let i = ut(s);
                if (i > e) {
                  if (s === 39) {
                    if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody)
                      return t;
                    this.checkPipelineAtInfixOperator(t, r);
                  }
                  let a = this.startNodeAt(r);
                  a.left = t, a.operator = this.state.value;
                  let n = s === 41 || s === 42, o = s === 40;
                  if (o && (i = ut(42)), this.next(), s === 39 && this.hasPlugin(["pipelineOperator", { proposal: "minimal" }]) && this.state.type === 96 && this.prodParam.hasAwait)
                    throw this.raise(u.UnexpectedAwaitAfterPipelineBody, { at: this.state.startLoc });
                  a.right = this.parseExprOpRightExpr(s, i);
                  let c = this.finishNode(a, n || o ? "LogicalExpression" : "BinaryExpression"), p = this.state.type;
                  if (o && (p === 41 || p === 42) || n && p === 40)
                    throw this.raise(u.MixingCoalesceWithLogical, { at: this.state.startLoc });
                  return this.parseExprOp(c, r, e);
                }
              }
              return t;
            }
            parseExprOpRightExpr(t, r) {
              let e = this.state.startLoc;
              switch (t) {
                case 39:
                  switch (this.getPluginOption("pipelineOperator", "proposal")) {
                    case "hack":
                      return this.withTopicBindingContext(() => this.parseHackPipeBody());
                    case "smart":
                      return this.withTopicBindingContext(() => {
                        if (this.prodParam.hasYield && this.isContextual(106))
                          throw this.raise(u.PipeBodyIsTighter, { at: this.state.startLoc });
                        return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(t, r), e);
                      });
                    case "fsharp":
                      return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(r));
                  }
                default:
                  return this.parseExprOpBaseRightExpr(t, r);
              }
            }
            parseExprOpBaseRightExpr(t, r) {
              let e = this.state.startLoc;
              return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), e, tl(t) ? r - 1 : r);
            }
            parseHackPipeBody() {
              var t;
              let { startLoc: r } = this.state, e = this.parseMaybeAssign();
              return j.has(e.type) && !((t = e.extra) != null && t.parenthesized) && this.raise(u.PipeUnparenthesizedBody, { at: r, type: e.type }), this.topicReferenceWasUsedInCurrentContext() || this.raise(u.PipeTopicUnused, { at: r }), e;
            }
            checkExponentialAfterUnary(t) {
              this.match(57) && this.raise(u.UnexpectedTokenUnaryExponentiation, { at: t.argument });
            }
            parseMaybeUnary(t, r) {
              let e = this.state.startLoc, s = this.isContextual(96);
              if (s && this.isAwaitAllowed()) {
                this.next();
                let o = this.parseAwait(e);
                return r || this.checkExponentialAfterUnary(o), o;
              }
              let i = this.match(34), a = this.startNode();
              if (Qo(this.state.type)) {
                a.operator = this.state.value, a.prefix = true, this.match(72) && this.expectPlugin("throwExpressions");
                let o = this.match(89);
                if (this.next(), a.argument = this.parseMaybeUnary(null, true), this.checkExpressionErrors(t, true), this.state.strict && o) {
                  let c = a.argument;
                  c.type === "Identifier" ? this.raise(u.StrictDelete, { at: a }) : this.hasPropertyAsPrivateName(c) && this.raise(u.DeletePrivateField, { at: a });
                }
                if (!i)
                  return r || this.checkExponentialAfterUnary(a), this.finishNode(a, "UnaryExpression");
              }
              let n = this.parseUpdate(a, i, t);
              if (s) {
                let { type: o } = this.state;
                if ((this.hasPlugin("v8intrinsic") ? Xt(o) : Xt(o) && !this.match(54)) && !this.isAmbiguousAwait())
                  return this.raiseOverwrite(u.AwaitNotInAsyncContext, { at: e }), this.parseAwait(e);
              }
              return n;
            }
            parseUpdate(t, r, e) {
              if (r) {
                let a = t;
                return this.checkLVal(a.argument, { in: this.finishNode(a, "UpdateExpression") }), t;
              }
              let s = this.state.startLoc, i = this.parseExprSubscripts(e);
              if (this.checkExpressionErrors(e, false))
                return i;
              for (; Yo(this.state.type) && !this.canInsertSemicolon(); ) {
                let a = this.startNodeAt(s);
                a.operator = this.state.value, a.prefix = false, a.argument = i, this.next(), this.checkLVal(i, { in: i = this.finishNode(a, "UpdateExpression") });
              }
              return i;
            }
            parseExprSubscripts(t) {
              let r = this.state.startLoc, e = this.state.potentialArrowAt, s = this.parseExprAtom(t);
              return this.shouldExitDescending(s, e) ? s : this.parseSubscripts(s, r);
            }
            parseSubscripts(t, r, e) {
              let s = { optionalChainMember: false, maybeAsyncArrow: this.atPossibleAsyncArrow(t), stop: false };
              do
                t = this.parseSubscript(t, r, e, s), s.maybeAsyncArrow = false;
              while (!s.stop);
              return t;
            }
            parseSubscript(t, r, e, s) {
              let { type: i } = this.state;
              if (!e && i === 15)
                return this.parseBind(t, r, e, s);
              if (ct(i))
                return this.parseTaggedTemplateExpression(t, r, s);
              let a = false;
              if (i === 18) {
                if (e && this.lookaheadCharCode() === 40)
                  return s.stop = true, t;
                s.optionalChainMember = a = true, this.next();
              }
              if (!e && this.match(10))
                return this.parseCoverCallAndAsyncArrowHead(t, r, s, a);
              {
                let n = this.eat(0);
                return n || a || this.eat(16) ? this.parseMember(t, r, s, n, a) : (s.stop = true, t);
              }
            }
            parseMember(t, r, e, s, i) {
              let a = this.startNodeAt(r);
              return a.object = t, a.computed = s, s ? (a.property = this.parseExpression(), this.expect(3)) : this.match(136) ? (t.type === "Super" && this.raise(u.SuperPrivateField, { at: r }), this.classScope.usePrivateName(this.state.value, this.state.startLoc), a.property = this.parsePrivateName()) : a.property = this.parseIdentifier(true), e.optionalChainMember ? (a.optional = i, this.finishNode(a, "OptionalMemberExpression")) : this.finishNode(a, "MemberExpression");
            }
            parseBind(t, r, e, s) {
              let i = this.startNodeAt(r);
              return i.object = t, this.next(), i.callee = this.parseNoCallExpr(), s.stop = true, this.parseSubscripts(this.finishNode(i, "BindExpression"), r, e);
            }
            parseCoverCallAndAsyncArrowHead(t, r, e, s) {
              let i = this.state.maybeInArrowParameters, a = null;
              this.state.maybeInArrowParameters = true, this.next();
              let n = this.startNodeAt(r);
              n.callee = t;
              let { maybeAsyncArrow: o, optionalChainMember: c } = e;
              o && (this.expressionScope.enter($l()), a = new Ct()), c && (n.optional = s), s ? n.arguments = this.parseCallExpressionArguments(11) : n.arguments = this.parseCallExpressionArguments(11, t.type === "Import", t.type !== "Super", n, a);
              let p = this.finishCallExpression(n, c);
              return o && this.shouldParseAsyncArrow() && !s ? (e.stop = true, this.checkDestructuringPrivate(a), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), p = this.parseAsyncArrowFromCallExpression(this.startNodeAt(r), p)) : (o && (this.checkExpressionErrors(a, true), this.expressionScope.exit()), this.toReferencedArguments(p)), this.state.maybeInArrowParameters = i, p;
            }
            toReferencedArguments(t, r) {
              this.toReferencedListDeep(t.arguments, r);
            }
            parseTaggedTemplateExpression(t, r, e) {
              let s = this.startNodeAt(r);
              return s.tag = t, s.quasi = this.parseTemplate(true), e.optionalChainMember && this.raise(u.OptionalChainingNoTemplate, { at: r }), this.finishNode(s, "TaggedTemplateExpression");
            }
            atPossibleAsyncArrow(t) {
              return t.type === "Identifier" && t.name === "async" && this.state.lastTokEndLoc.index === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && t.start === this.state.potentialArrowAt;
            }
            finishCallExpression(t, r) {
              if (t.callee.type === "Import")
                if (t.arguments.length === 2 && (this.hasPlugin("moduleAttributes") || this.expectPlugin("importAssertions")), t.arguments.length === 0 || t.arguments.length > 2)
                  this.raise(u.ImportCallArity, { at: t, maxArgumentCount: this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? 2 : 1 });
                else
                  for (let e of t.arguments)
                    e.type === "SpreadElement" && this.raise(u.ImportCallSpreadArgument, { at: e });
              return this.finishNode(t, r ? "OptionalCallExpression" : "CallExpression");
            }
            parseCallExpressionArguments(t, r, e, s, i) {
              let a = [], n = true, o = this.state.inFSharpPipelineDirectBody;
              for (this.state.inFSharpPipelineDirectBody = false; !this.eat(t); ) {
                if (n)
                  n = false;
                else if (this.expect(12), this.match(t)) {
                  r && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes") && this.raise(u.ImportCallArgumentTrailingComma, { at: this.state.lastTokStartLoc }), s && this.addTrailingCommaExtraToNode(s), this.next();
                  break;
                }
                a.push(this.parseExprListItem(false, i, e));
              }
              return this.state.inFSharpPipelineDirectBody = o, a;
            }
            shouldParseAsyncArrow() {
              return this.match(19) && !this.canInsertSemicolon();
            }
            parseAsyncArrowFromCallExpression(t, r) {
              var e;
              return this.resetPreviousNodeTrailingComments(r), this.expect(19), this.parseArrowExpression(t, r.arguments, true, (e = r.extra) == null ? void 0 : e.trailingCommaLoc), r.innerComments && Qe(t, r.innerComments), r.callee.trailingComments && Qe(t, r.callee.trailingComments), t;
            }
            parseNoCallExpr() {
              let t = this.state.startLoc;
              return this.parseSubscripts(this.parseExprAtom(), t, true);
            }
            parseExprAtom(t) {
              let r, e = null, { type: s } = this.state;
              switch (s) {
                case 79:
                  return this.parseSuper();
                case 83:
                  return r = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaProperty(r) : (this.match(10) || this.raise(u.UnsupportedImport, { at: this.state.lastTokStartLoc }), this.finishNode(r, "Import"));
                case 78:
                  return r = this.startNode(), this.next(), this.finishNode(r, "ThisExpression");
                case 90:
                  return this.parseDo(this.startNode(), false);
                case 56:
                case 31:
                  return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
                case 132:
                  return this.parseNumericLiteral(this.state.value);
                case 133:
                  return this.parseBigIntLiteral(this.state.value);
                case 134:
                  return this.parseDecimalLiteral(this.state.value);
                case 131:
                  return this.parseStringLiteral(this.state.value);
                case 84:
                  return this.parseNullLiteral();
                case 85:
                  return this.parseBooleanLiteral(true);
                case 86:
                  return this.parseBooleanLiteral(false);
                case 10: {
                  let i = this.state.potentialArrowAt === this.state.start;
                  return this.parseParenAndDistinguishExpression(i);
                }
                case 2:
                case 1:
                  return this.parseArrayLike(this.state.type === 2 ? 4 : 3, false, true);
                case 0:
                  return this.parseArrayLike(3, true, false, t);
                case 6:
                case 7:
                  return this.parseObjectLike(this.state.type === 6 ? 9 : 8, false, true);
                case 5:
                  return this.parseObjectLike(8, false, false, t);
                case 68:
                  return this.parseFunctionOrFunctionSent();
                case 26:
                  e = this.parseDecorators();
                case 80:
                  return this.parseClass(this.maybeTakeDecorators(e, this.startNode()), false);
                case 77:
                  return this.parseNewOrNewTarget();
                case 25:
                case 24:
                  return this.parseTemplate(false);
                case 15: {
                  r = this.startNode(), this.next(), r.object = null;
                  let i = r.callee = this.parseNoCallExpr();
                  if (i.type === "MemberExpression")
                    return this.finishNode(r, "BindExpression");
                  throw this.raise(u.UnsupportedBind, { at: i });
                }
                case 136:
                  return this.raise(u.PrivateInExpectedIn, { at: this.state.startLoc, identifierName: this.state.value }), this.parsePrivateName();
                case 33:
                  return this.parseTopicReferenceThenEqualsSign(54, "%");
                case 32:
                  return this.parseTopicReferenceThenEqualsSign(44, "^");
                case 37:
                case 38:
                  return this.parseTopicReference("hack");
                case 44:
                case 54:
                case 27: {
                  let i = this.getPluginOption("pipelineOperator", "proposal");
                  if (i)
                    return this.parseTopicReference(i);
                  throw this.unexpected();
                }
                case 47: {
                  let i = this.input.codePointAt(this.nextTokenStart());
                  if (ge(i) || i === 62) {
                    this.expectOnePlugin(["jsx", "flow", "typescript"]);
                    break;
                  } else
                    throw this.unexpected();
                }
                default:
                  if (z(s)) {
                    if (this.isContextual(125) && this.lookaheadCharCode() === 123 && !this.hasFollowingLineBreak())
                      return this.parseModuleExpression();
                    let i = this.state.potentialArrowAt === this.state.start, a = this.state.containsEsc, n = this.parseIdentifier();
                    if (!a && n.name === "async" && !this.canInsertSemicolon()) {
                      let { type: o } = this.state;
                      if (o === 68)
                        return this.resetPreviousNodeTrailingComments(n), this.next(), this.parseAsyncFunctionExpression(this.startNodeAtNode(n));
                      if (z(o))
                        return this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(n)) : n;
                      if (o === 90)
                        return this.resetPreviousNodeTrailingComments(n), this.parseDo(this.startNodeAtNode(n), true);
                    }
                    return i && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(n), [n], false)) : n;
                  } else
                    throw this.unexpected();
              }
            }
            parseTopicReferenceThenEqualsSign(t, r) {
              let e = this.getPluginOption("pipelineOperator", "proposal");
              if (e)
                return this.state.type = t, this.state.value = r, this.state.pos--, this.state.end--, this.state.endLoc = y(this.state.endLoc, -1), this.parseTopicReference(e);
              throw this.unexpected();
            }
            parseTopicReference(t) {
              let r = this.startNode(), e = this.state.startLoc, s = this.state.type;
              return this.next(), this.finishTopicReference(r, e, t, s);
            }
            finishTopicReference(t, r, e, s) {
              if (this.testTopicReferenceConfiguration(e, r, s)) {
                let i = e === "smart" ? "PipelinePrimaryTopicReference" : "TopicReference";
                return this.topicReferenceIsAllowedInCurrentContext() || this.raise(e === "smart" ? u.PrimaryTopicNotAllowed : u.PipeTopicUnbound, { at: r }), this.registerTopicReference(), this.finishNode(t, i);
              } else
                throw this.raise(u.PipeTopicUnconfiguredToken, { at: r, token: Ee(s) });
            }
            testTopicReferenceConfiguration(t, r, e) {
              switch (t) {
                case "hack":
                  return this.hasPlugin(["pipelineOperator", { topicToken: Ee(e) }]);
                case "smart":
                  return e === 27;
                default:
                  throw this.raise(u.PipeTopicRequiresHackPipes, { at: r });
              }
            }
            parseAsyncArrowUnaryFunction(t) {
              this.prodParam.enter(Et(true, this.prodParam.hasYield));
              let r = [this.parseIdentifier()];
              return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(u.LineTerminatorBeforeArrow, { at: this.state.curPosition() }), this.expect(19), this.parseArrowExpression(t, r, true);
            }
            parseDo(t, r) {
              this.expectPlugin("doExpressions"), r && this.expectPlugin("asyncDoExpressions"), t.async = r, this.next();
              let e = this.state.labels;
              return this.state.labels = [], r ? (this.prodParam.enter(vt), t.body = this.parseBlock(), this.prodParam.exit()) : t.body = this.parseBlock(), this.state.labels = e, this.finishNode(t, "DoExpression");
            }
            parseSuper() {
              let t = this.startNode();
              return this.next(), this.match(10) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod ? this.raise(u.SuperNotAllowed, { at: t }) : !this.scope.allowSuper && !this.options.allowSuperOutsideMethod && this.raise(u.UnexpectedSuper, { at: t }), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(u.UnsupportedSuper, { at: t }), this.finishNode(t, "Super");
            }
            parsePrivateName() {
              let t = this.startNode(), r = this.startNodeAt(y(this.state.startLoc, 1)), e = this.state.value;
              return this.next(), t.id = this.createIdentifier(r, e), this.finishNode(t, "PrivateName");
            }
            parseFunctionOrFunctionSent() {
              let t = this.startNode();
              if (this.next(), this.prodParam.hasYield && this.match(16)) {
                let r = this.createIdentifier(this.startNodeAtNode(t), "function");
                return this.next(), this.match(102) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(t, r, "sent");
              }
              return this.parseFunction(t);
            }
            parseMetaProperty(t, r, e) {
              t.meta = r;
              let s = this.state.containsEsc;
              return t.property = this.parseIdentifier(true), (t.property.name !== e || s) && this.raise(u.UnsupportedMetaProperty, { at: t.property, target: r.name, onlyValidPropertyName: e }), this.finishNode(t, "MetaProperty");
            }
            parseImportMetaProperty(t) {
              let r = this.createIdentifier(this.startNodeAtNode(t), "import");
              return this.next(), this.isContextual(100) && (this.inModule || this.raise(u.ImportMetaOutsideModule, { at: r }), this.sawUnambiguousESM = true), this.parseMetaProperty(t, r, "meta");
            }
            parseLiteralAtNode(t, r, e) {
              return this.addExtra(e, "rawValue", t), this.addExtra(e, "raw", this.input.slice(e.start, this.state.end)), e.value = t, this.next(), this.finishNode(e, r);
            }
            parseLiteral(t, r) {
              let e = this.startNode();
              return this.parseLiteralAtNode(t, r, e);
            }
            parseStringLiteral(t) {
              return this.parseLiteral(t, "StringLiteral");
            }
            parseNumericLiteral(t) {
              return this.parseLiteral(t, "NumericLiteral");
            }
            parseBigIntLiteral(t) {
              return this.parseLiteral(t, "BigIntLiteral");
            }
            parseDecimalLiteral(t) {
              return this.parseLiteral(t, "DecimalLiteral");
            }
            parseRegExpLiteral(t) {
              let r = this.parseLiteral(t.value, "RegExpLiteral");
              return r.pattern = t.pattern, r.flags = t.flags, r;
            }
            parseBooleanLiteral(t) {
              let r = this.startNode();
              return r.value = t, this.next(), this.finishNode(r, "BooleanLiteral");
            }
            parseNullLiteral() {
              let t = this.startNode();
              return this.next(), this.finishNode(t, "NullLiteral");
            }
            parseParenAndDistinguishExpression(t) {
              let r = this.state.startLoc, e;
              this.next(), this.expressionScope.enter(Ul());
              let s = this.state.maybeInArrowParameters, i = this.state.inFSharpPipelineDirectBody;
              this.state.maybeInArrowParameters = true, this.state.inFSharpPipelineDirectBody = false;
              let a = this.state.startLoc, n = [], o = new Ct(), c = true, p, m;
              for (; !this.match(11); ) {
                if (c)
                  c = false;
                else if (this.expect(12, o.optionalParametersLoc === null ? null : o.optionalParametersLoc), this.match(11)) {
                  m = this.state.startLoc;
                  break;
                }
                if (this.match(21)) {
                  let b = this.state.startLoc;
                  if (p = this.state.startLoc, n.push(this.parseParenItem(this.parseRestBinding(), b)), !this.checkCommaAfterRest(41))
                    break;
                } else
                  n.push(this.parseMaybeAssignAllowIn(o, this.parseParenItem));
              }
              let x = this.state.lastTokEndLoc;
              this.expect(11), this.state.maybeInArrowParameters = s, this.state.inFSharpPipelineDirectBody = i;
              let A = this.startNodeAt(r);
              return t && this.shouldParseArrow(n) && (A = this.parseArrow(A)) ? (this.checkDestructuringPrivate(o), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(A, n, false), A) : (this.expressionScope.exit(), n.length || this.unexpected(this.state.lastTokStartLoc), m && this.unexpected(m), p && this.unexpected(p), this.checkExpressionErrors(o, true), this.toReferencedListDeep(n, true), n.length > 1 ? (e = this.startNodeAt(a), e.expressions = n, this.finishNode(e, "SequenceExpression"), this.resetEndLocation(e, x)) : e = n[0], this.wrapParenthesis(r, e));
            }
            wrapParenthesis(t, r) {
              if (!this.options.createParenthesizedExpressions)
                return this.addExtra(r, "parenthesized", true), this.addExtra(r, "parenStart", t.index), this.takeSurroundingComments(r, t.index, this.state.lastTokEndLoc.index), r;
              let e = this.startNodeAt(t);
              return e.expression = r, this.finishNode(e, "ParenthesizedExpression");
            }
            shouldParseArrow(t) {
              return !this.canInsertSemicolon();
            }
            parseArrow(t) {
              if (this.eat(19))
                return t;
            }
            parseParenItem(t, r) {
              return t;
            }
            parseNewOrNewTarget() {
              let t = this.startNode();
              if (this.next(), this.match(16)) {
                let r = this.createIdentifier(this.startNodeAtNode(t), "new");
                this.next();
                let e = this.parseMetaProperty(t, r, "target");
                return !this.scope.inNonArrowFunction && !this.scope.inClass && this.raise(u.UnexpectedNewTarget, { at: e }), e;
              }
              return this.parseNew(t);
            }
            parseNew(t) {
              if (this.parseNewCallee(t), this.eat(10)) {
                let r = this.parseExprList(11);
                this.toReferencedList(r), t.arguments = r;
              } else
                t.arguments = [];
              return this.finishNode(t, "NewExpression");
            }
            parseNewCallee(t) {
              t.callee = this.parseNoCallExpr(), t.callee.type === "Import" ? this.raise(u.ImportCallNotNewExpression, { at: t.callee }) : this.isOptionalChain(t.callee) ? this.raise(u.OptionalChainingNoNew, { at: this.state.lastTokEndLoc }) : this.eat(18) && this.raise(u.OptionalChainingNoNew, { at: this.state.startLoc });
            }
            parseTemplateElement(t) {
              let { start: r, startLoc: e, end: s, value: i } = this.state, a = r + 1, n = this.startNodeAt(y(e, 1));
              i === null && (t || this.raise(u.InvalidEscapeSequenceTemplate, { at: y(this.state.firstInvalidTemplateEscapePos, 1) }));
              let o = this.match(24), c = o ? -1 : -2, p = s + c;
              n.value = { raw: this.input.slice(a, p).replace(/\r\n?/g, `
`), cooked: i === null ? null : i.slice(1, c) }, n.tail = o, this.next();
              let m = this.finishNode(n, "TemplateElement");
              return this.resetEndLocation(m, y(this.state.lastTokEndLoc, c)), m;
            }
            parseTemplate(t) {
              let r = this.startNode();
              r.expressions = [];
              let e = this.parseTemplateElement(t);
              for (r.quasis = [e]; !e.tail; )
                r.expressions.push(this.parseTemplateSubstitution()), this.readTemplateContinuation(), r.quasis.push(e = this.parseTemplateElement(t));
              return this.finishNode(r, "TemplateLiteral");
            }
            parseTemplateSubstitution() {
              return this.parseExpression();
            }
            parseObjectLike(t, r, e, s) {
              e && this.expectPlugin("recordAndTuple");
              let i = this.state.inFSharpPipelineDirectBody;
              this.state.inFSharpPipelineDirectBody = false;
              let a = /* @__PURE__ */ Object.create(null), n = true, o = this.startNode();
              for (o.properties = [], this.next(); !this.match(t); ) {
                if (n)
                  n = false;
                else if (this.expect(12), this.match(t)) {
                  this.addTrailingCommaExtraToNode(o);
                  break;
                }
                let p;
                r ? p = this.parseBindingProperty() : (p = this.parsePropertyDefinition(s), this.checkProto(p, e, a, s)), e && !this.isObjectProperty(p) && p.type !== "SpreadElement" && this.raise(u.InvalidRecordProperty, { at: p }), p.shorthand && this.addExtra(p, "shorthand", true), o.properties.push(p);
              }
              this.next(), this.state.inFSharpPipelineDirectBody = i;
              let c = "ObjectExpression";
              return r ? c = "ObjectPattern" : e && (c = "RecordExpression"), this.finishNode(o, c);
            }
            addTrailingCommaExtraToNode(t) {
              this.addExtra(t, "trailingComma", this.state.lastTokStart), this.addExtra(t, "trailingCommaLoc", this.state.lastTokStartLoc, false);
            }
            maybeAsyncOrAccessorProp(t) {
              return !t.computed && t.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55));
            }
            parsePropertyDefinition(t) {
              let r = [];
              if (this.match(26))
                for (this.hasPlugin("decorators") && this.raise(u.UnsupportedPropertyDecorator, { at: this.state.startLoc }); this.match(26); )
                  r.push(this.parseDecorator());
              let e = this.startNode(), s = false, i = false, a;
              if (this.match(21))
                return r.length && this.unexpected(), this.parseSpread();
              r.length && (e.decorators = r, r = []), e.method = false, t && (a = this.state.startLoc);
              let n = this.eat(55);
              this.parsePropertyNamePrefixOperator(e);
              let o = this.state.containsEsc, c = this.parsePropertyName(e, t);
              if (!n && !o && this.maybeAsyncOrAccessorProp(e)) {
                let p = c.name;
                p === "async" && !this.hasPrecedingLineBreak() && (s = true, this.resetPreviousNodeTrailingComments(c), n = this.eat(55), this.parsePropertyName(e)), (p === "get" || p === "set") && (i = true, this.resetPreviousNodeTrailingComments(c), e.kind = p, this.match(55) && (n = true, this.raise(u.AccessorIsGenerator, { at: this.state.curPosition(), kind: p }), this.next()), this.parsePropertyName(e));
              }
              return this.parseObjPropValue(e, a, n, s, false, i, t);
            }
            getGetterSetterExpectedParamCount(t) {
              return t.kind === "get" ? 0 : 1;
            }
            getObjectOrClassMethodParams(t) {
              return t.params;
            }
            checkGetterSetterParams(t) {
              var r;
              let e = this.getGetterSetterExpectedParamCount(t), s = this.getObjectOrClassMethodParams(t);
              s.length !== e && this.raise(t.kind === "get" ? u.BadGetterArity : u.BadSetterArity, { at: t }), t.kind === "set" && ((r = s[s.length - 1]) == null ? void 0 : r.type) === "RestElement" && this.raise(u.BadSetterRestParameter, { at: t });
            }
            parseObjectMethod(t, r, e, s, i) {
              if (i) {
                let a = this.parseMethod(t, r, false, false, false, "ObjectMethod");
                return this.checkGetterSetterParams(a), a;
              }
              if (e || r || this.match(10))
                return s && this.unexpected(), t.kind = "method", t.method = true, this.parseMethod(t, r, e, false, false, "ObjectMethod");
            }
            parseObjectProperty(t, r, e, s) {
              if (t.shorthand = false, this.eat(14))
                return t.value = e ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowIn(s), this.finishNode(t, "ObjectProperty");
              if (!t.computed && t.key.type === "Identifier") {
                if (this.checkReservedWord(t.key.name, t.key.loc.start, true, false), e)
                  t.value = this.parseMaybeDefault(r, Te(t.key));
                else if (this.match(29)) {
                  let i = this.state.startLoc;
                  s != null ? s.shorthandAssignLoc === null && (s.shorthandAssignLoc = i) : this.raise(u.InvalidCoverInitializedName, { at: i }), t.value = this.parseMaybeDefault(r, Te(t.key));
                } else
                  t.value = Te(t.key);
                return t.shorthand = true, this.finishNode(t, "ObjectProperty");
              }
            }
            parseObjPropValue(t, r, e, s, i, a, n) {
              let o = this.parseObjectMethod(t, e, s, i, a) || this.parseObjectProperty(t, r, i, n);
              return o || this.unexpected(), o;
            }
            parsePropertyName(t, r) {
              if (this.eat(0))
                t.computed = true, t.key = this.parseMaybeAssignAllowIn(), this.expect(3);
              else {
                let { type: e, value: s } = this.state, i;
                if (ye(e))
                  i = this.parseIdentifier(true);
                else
                  switch (e) {
                    case 132:
                      i = this.parseNumericLiteral(s);
                      break;
                    case 131:
                      i = this.parseStringLiteral(s);
                      break;
                    case 133:
                      i = this.parseBigIntLiteral(s);
                      break;
                    case 134:
                      i = this.parseDecimalLiteral(s);
                      break;
                    case 136: {
                      let a = this.state.startLoc;
                      r != null ? r.privateKeyLoc === null && (r.privateKeyLoc = a) : this.raise(u.UnexpectedPrivateField, { at: a }), i = this.parsePrivateName();
                      break;
                    }
                    default:
                      throw this.unexpected();
                  }
                t.key = i, e !== 136 && (t.computed = false);
              }
              return t.key;
            }
            initFunction(t, r) {
              t.id = null, t.generator = false, t.async = r;
            }
            parseMethod(t, r, e, s, i, a) {
              let n = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false;
              this.initFunction(t, e), t.generator = r;
              let o = s;
              this.scope.enter(Pe | pt | (n ? Ne : 0) | (i ? wr : 0)), this.prodParam.enter(Et(e, t.generator)), this.parseFunctionParams(t, o);
              let c = this.parseFunctionBodyAndFinish(t, a, true);
              return this.prodParam.exit(), this.scope.exit(), c;
            }
            parseArrayLike(t, r, e, s) {
              e && this.expectPlugin("recordAndTuple");
              let i = this.state.inFSharpPipelineDirectBody;
              this.state.inFSharpPipelineDirectBody = false;
              let a = this.startNode();
              return this.next(), a.elements = this.parseExprList(t, !e, s, a), this.state.inFSharpPipelineDirectBody = i, this.finishNode(a, e ? "TupleExpression" : "ArrayExpression");
            }
            parseArrowExpression(t, r, e, s) {
              this.scope.enter(Pe | ts);
              let i = Et(e, false);
              !this.match(5) && this.prodParam.hasIn && (i |= He), this.prodParam.enter(i), this.initFunction(t, e);
              let a = this.state.maybeInArrowParameters;
              return r && (this.state.maybeInArrowParameters = true, this.setArrowFunctionParameters(t, r, s)), this.state.maybeInArrowParameters = false, this.parseFunctionBody(t, true), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = a, this.finishNode(t, "ArrowFunctionExpression");
            }
            setArrowFunctionParameters(t, r, e) {
              this.toAssignableList(r, e, false), t.params = r;
            }
            parseFunctionBodyAndFinish(t, r) {
              let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
              return this.parseFunctionBody(t, false, e), this.finishNode(t, r);
            }
            parseFunctionBody(t, r) {
              let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, s = r && !this.match(5);
              if (this.expressionScope.enter(Vr()), s)
                t.body = this.parseMaybeAssign(), this.checkParams(t, false, r, false);
              else {
                let i = this.state.strict, a = this.state.labels;
                this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | Wr), t.body = this.parseBlock(true, false, (n) => {
                  let o = !this.isSimpleParamList(t.params);
                  n && o && this.raise(u.IllegalLanguageModeDirective, { at: (t.kind === "method" || t.kind === "constructor") && t.key ? t.key.loc.end : t });
                  let c = !i && this.state.strict;
                  this.checkParams(t, !this.state.strict && !r && !e && !o, r, c), this.state.strict && t.id && this.checkIdentifier(t.id, dl, c);
                }), this.prodParam.exit(), this.state.labels = a;
              }
              this.expressionScope.exit();
            }
            isSimpleParameter(t) {
              return t.type === "Identifier";
            }
            isSimpleParamList(t) {
              for (let r = 0, e = t.length; r < e; r++)
                if (!this.isSimpleParameter(t[r]))
                  return false;
              return true;
            }
            checkParams(t, r, e) {
              let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i = !r && /* @__PURE__ */ new Set(), a = { type: "FormalParameters" };
              for (let n of t.params)
                this.checkLVal(n, { in: a, binding: xt, checkClashes: i, strictModeChanged: s });
            }
            parseExprList(t, r, e, s) {
              let i = [], a = true;
              for (; !this.eat(t); ) {
                if (a)
                  a = false;
                else if (this.expect(12), this.match(t)) {
                  s && this.addTrailingCommaExtraToNode(s), this.next();
                  break;
                }
                i.push(this.parseExprListItem(r, e));
              }
              return i;
            }
            parseExprListItem(t, r, e) {
              let s;
              if (this.match(12))
                t || this.raise(u.UnexpectedToken, { at: this.state.curPosition(), unexpected: "," }), s = null;
              else if (this.match(21)) {
                let i = this.state.startLoc;
                s = this.parseParenItem(this.parseSpread(r), i);
              } else if (this.match(17)) {
                this.expectPlugin("partialApplication"), e || this.raise(u.UnexpectedArgumentPlaceholder, { at: this.state.startLoc });
                let i = this.startNode();
                this.next(), s = this.finishNode(i, "ArgumentPlaceholder");
              } else
                s = this.parseMaybeAssignAllowIn(r, this.parseParenItem);
              return s;
            }
            parseIdentifier(t) {
              let r = this.startNode(), e = this.parseIdentifierName(t);
              return this.createIdentifier(r, e);
            }
            createIdentifier(t, r) {
              return t.name = r, t.loc.identifierName = r, this.finishNode(t, "Identifier");
            }
            parseIdentifierName(t) {
              let r, { startLoc: e, type: s } = this.state;
              if (ye(s))
                r = this.state.value;
              else
                throw this.unexpected();
              let i = Ko(s);
              return t ? i && this.replaceToken(130) : this.checkReservedWord(r, e, i, false), this.next(), r;
            }
            checkReservedWord(t, r, e, s) {
              if (t.length > 10 || !cl(t))
                return;
              if (t === "yield") {
                if (this.prodParam.hasYield) {
                  this.raise(u.YieldBindingIdentifier, { at: r });
                  return;
                }
              } else if (t === "await") {
                if (this.prodParam.hasAwait) {
                  this.raise(u.AwaitBindingIdentifier, { at: r });
                  return;
                }
                if (this.scope.inStaticBlock) {
                  this.raise(u.AwaitBindingIdentifierInStaticBlock, { at: r });
                  return;
                }
                this.expressionScope.recordAsyncArrowParametersError({ at: r });
              } else if (t === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
                this.raise(u.ArgumentsInClass, { at: r });
                return;
              }
              if (e && ll(t)) {
                this.raise(u.UnexpectedKeyword, { at: r, keyword: t });
                return;
              }
              (this.state.strict ? s ? br : Er : vr)(t, this.inModule) && this.raise(u.UnexpectedReservedWord, { at: r, reservedWord: t });
            }
            isAwaitAllowed() {
              return !!(this.prodParam.hasAwait || this.options.allowAwaitOutsideFunction && !this.scope.inFunction);
            }
            parseAwait(t) {
              let r = this.startNodeAt(t);
              return this.expressionScope.recordParameterInitializerError(u.AwaitExpressionFormalParameter, { at: r }), this.eat(55) && this.raise(u.ObsoleteAwaitStar, { at: r }), !this.scope.inFunction && !this.options.allowAwaitOutsideFunction && (this.isAmbiguousAwait() ? this.ambiguousScriptDifferentAst = true : this.sawUnambiguousESM = true), this.state.soloAwait || (r.argument = this.parseMaybeUnary(null, true)), this.finishNode(r, "AwaitExpression");
            }
            isAmbiguousAwait() {
              if (this.hasPrecedingLineBreak())
                return true;
              let { type: t } = this.state;
              return t === 53 || t === 10 || t === 0 || ct(t) || t === 101 && !this.state.containsEsc || t === 135 || t === 56 || this.hasPlugin("v8intrinsic") && t === 54;
            }
            parseYield() {
              let t = this.startNode();
              this.expressionScope.recordParameterInitializerError(u.YieldInParameter, { at: t }), this.next();
              let r = false, e = null;
              if (!this.hasPrecedingLineBreak())
                switch (r = this.eat(55), this.state.type) {
                  case 13:
                  case 137:
                  case 8:
                  case 11:
                  case 3:
                  case 9:
                  case 14:
                  case 12:
                    if (!r)
                      break;
                  default:
                    e = this.parseMaybeAssign();
                }
              return t.delegate = r, t.argument = e, this.finishNode(t, "YieldExpression");
            }
            checkPipelineAtInfixOperator(t, r) {
              this.hasPlugin(["pipelineOperator", { proposal: "smart" }]) && t.type === "SequenceExpression" && this.raise(u.PipelineHeadSequenceExpression, { at: r });
            }
            parseSmartPipelineBodyInStyle(t, r) {
              if (this.isSimpleReference(t)) {
                let e = this.startNodeAt(r);
                return e.callee = t, this.finishNode(e, "PipelineBareFunction");
              } else {
                let e = this.startNodeAt(r);
                return this.checkSmartPipeTopicBodyEarlyErrors(r), e.expression = t, this.finishNode(e, "PipelineTopicExpression");
              }
            }
            isSimpleReference(t) {
              switch (t.type) {
                case "MemberExpression":
                  return !t.computed && this.isSimpleReference(t.object);
                case "Identifier":
                  return true;
                default:
                  return false;
              }
            }
            checkSmartPipeTopicBodyEarlyErrors(t) {
              if (this.match(19))
                throw this.raise(u.PipelineBodyNoArrow, { at: this.state.startLoc });
              this.topicReferenceWasUsedInCurrentContext() || this.raise(u.PipelineTopicUnused, { at: t });
            }
            withTopicBindingContext(t) {
              let r = this.state.topicContext;
              this.state.topicContext = { maxNumOfResolvableTopics: 1, maxTopicIndex: null };
              try {
                return t();
              } finally {
                this.state.topicContext = r;
              }
            }
            withSmartMixTopicForbiddingContext(t) {
              if (this.hasPlugin(["pipelineOperator", { proposal: "smart" }])) {
                let r = this.state.topicContext;
                this.state.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null };
                try {
                  return t();
                } finally {
                  this.state.topicContext = r;
                }
              } else
                return t();
            }
            withSoloAwaitPermittingContext(t) {
              let r = this.state.soloAwait;
              this.state.soloAwait = true;
              try {
                return t();
              } finally {
                this.state.soloAwait = r;
              }
            }
            allowInAnd(t) {
              let r = this.prodParam.currentFlags();
              if (He & ~r) {
                this.prodParam.enter(r | He);
                try {
                  return t();
                } finally {
                  this.prodParam.exit();
                }
              }
              return t();
            }
            disallowInAnd(t) {
              let r = this.prodParam.currentFlags();
              if (He & r) {
                this.prodParam.enter(r & ~He);
                try {
                  return t();
                } finally {
                  this.prodParam.exit();
                }
              }
              return t();
            }
            registerTopicReference() {
              this.state.topicContext.maxTopicIndex = 0;
            }
            topicReferenceIsAllowedInCurrentContext() {
              return this.state.topicContext.maxNumOfResolvableTopics >= 1;
            }
            topicReferenceWasUsedInCurrentContext() {
              return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
            }
            parseFSharpPipelineBody(t) {
              let r = this.state.startLoc;
              this.state.potentialArrowAt = this.state.start;
              let e = this.state.inFSharpPipelineDirectBody;
              this.state.inFSharpPipelineDirectBody = true;
              let s = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), r, t);
              return this.state.inFSharpPipelineDirectBody = e, s;
            }
            parseModuleExpression() {
              this.expectPlugin("moduleBlocks");
              let t = this.startNode();
              this.next(), this.match(5) || this.unexpected(null, 5);
              let r = this.startNodeAt(this.state.endLoc);
              this.next();
              let e = this.initializeScopes(true);
              this.enterInitialScopes();
              try {
                t.body = this.parseProgram(r, 8, "module");
              } finally {
                e();
              }
              return this.finishNode(t, "ModuleExpression");
            }
            parsePropertyNamePrefixOperator(t) {
            }
          }, gs = { kind: "loop" }, gh = { kind: "switch" }, ie = { Expression: 0, Declaration: 1, HangingDeclaration: 2, NullableId: 4, Async: 8 }, ae = { StatementOnly: 0, AllowImportExport: 1, AllowDeclaration: 2, AllowFunctionDeclaration: 4, AllowLabeledFunction: 8 }, Ph = /[\uD800-\uDFFF]/u, Ps = /in(?:stanceof)?/y;
          function Ah(t, r) {
            for (let e = 0; e < t.length; e++) {
              let s = t[e], { type: i } = s;
              if (typeof i == "number") {
                {
                  if (i === 136) {
                    let { loc: a, start: n, value: o, end: c } = s, p = n + 1, m = y(a.start, 1);
                    t.splice(e, 1, new Se({ type: xe(27), value: "#", start: n, end: p, startLoc: a.start, endLoc: m }), new Se({ type: xe(130), value: o, start: p, end: c, startLoc: m, endLoc: a.end })), e++;
                    continue;
                  }
                  if (ct(i)) {
                    let { loc: a, start: n, value: o, end: c } = s, p = n + 1, m = y(a.start, 1), x;
                    r.charCodeAt(n) === 96 ? x = new Se({ type: xe(22), value: "`", start: n, end: p, startLoc: a.start, endLoc: m }) : x = new Se({ type: xe(8), value: "}", start: n, end: p, startLoc: a.start, endLoc: m });
                    let A, b, O, R;
                    i === 24 ? (b = c - 1, O = y(a.end, -1), A = o === null ? null : o.slice(1, -1), R = new Se({ type: xe(22), value: "`", start: b, end: c, startLoc: O, endLoc: a.end })) : (b = c - 2, O = y(a.end, -2), A = o === null ? null : o.slice(1, -2), R = new Se({ type: xe(23), value: "${", start: b, end: c, startLoc: O, endLoc: a.end })), t.splice(e, 1, x, new Se({ type: xe(20), value: A, start: p, end: b, startLoc: m, endLoc: O }), R), e += 2;
                    continue;
                  }
                }
                s.type = xe(i);
              }
            }
            return t;
          }
          var Th = class extends xh {
            parseTopLevel(t, r) {
              return t.program = this.parseProgram(r), t.comments = this.state.comments, this.options.tokens && (t.tokens = Ah(this.tokens, this.input)), this.finishNode(t, "File");
            }
            parseProgram(t) {
              let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 137, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.options.sourceType;
              if (t.sourceType = e, t.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(t, true, true, r), this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0)
                for (let [i, a] of Array.from(this.scope.undefinedExports))
                  this.raise(u.ModuleExportUndefined, { at: a, localName: i });
              let s;
              return r === 137 ? s = this.finishNode(t, "Program") : s = this.finishNodeAt(t, "Program", y(this.state.startLoc, -1)), s;
            }
            stmtToDirective(t) {
              let r = t;
              r.type = "Directive", r.value = r.expression, delete r.expression;
              let e = r.value, s = e.value, i = this.input.slice(e.start, e.end), a = e.value = i.slice(1, -1);
              return this.addExtra(e, "raw", i), this.addExtra(e, "rawValue", a), this.addExtra(e, "expressionValue", s), e.type = "DirectiveLiteral", r;
            }
            parseInterpreterDirective() {
              if (!this.match(28))
                return null;
              let t = this.startNode();
              return t.value = this.state.value, this.next(), this.finishNode(t, "InterpreterDirective");
            }
            isLet() {
              return this.isContextual(99) ? this.hasFollowingBindingAtom() : false;
            }
            chStartsBindingIdentifier(t, r) {
              if (ge(t)) {
                if (Ps.lastIndex = r, Ps.test(this.input)) {
                  let e = this.codePointAtPos(Ps.lastIndex);
                  if (!Re(e) && e !== 92)
                    return false;
                }
                return true;
              } else
                return t === 92;
            }
            chStartsBindingPattern(t) {
              return t === 91 || t === 123;
            }
            hasFollowingBindingAtom() {
              let t = this.nextTokenStart(), r = this.codePointAtPos(t);
              return this.chStartsBindingPattern(r) || this.chStartsBindingIdentifier(r, t);
            }
            hasFollowingBindingIdentifier() {
              let t = this.nextTokenStart(), r = this.codePointAtPos(t);
              return this.chStartsBindingIdentifier(r, t);
            }
            startsUsingForOf() {
              let t = this.lookahead();
              return t.type === 101 && !t.containsEsc ? false : (this.expectPlugin("explicitResourceManagement"), true);
            }
            parseModuleItem() {
              return this.parseStatementLike(ae.AllowImportExport | ae.AllowDeclaration | ae.AllowFunctionDeclaration | ae.AllowLabeledFunction);
            }
            parseStatementListItem() {
              return this.parseStatementLike(ae.AllowDeclaration | ae.AllowFunctionDeclaration | ae.AllowLabeledFunction);
            }
            parseStatementOrFunctionDeclaration(t) {
              return this.parseStatementLike(ae.AllowFunctionDeclaration | (t ? 0 : ae.AllowLabeledFunction));
            }
            parseStatement() {
              return this.parseStatementLike(ae.StatementOnly);
            }
            parseStatementLike(t) {
              let r = null;
              return this.match(26) && (r = this.parseDecorators(true)), this.parseStatementContent(t, r);
            }
            parseStatementContent(t, r) {
              let e = this.state.type, s = this.startNode(), i = !!(t & ae.AllowDeclaration), a = !!(t & ae.AllowFunctionDeclaration), n = t & ae.AllowImportExport;
              switch (e) {
                case 60:
                  return this.parseBreakContinueStatement(s, true);
                case 63:
                  return this.parseBreakContinueStatement(s, false);
                case 64:
                  return this.parseDebuggerStatement(s);
                case 90:
                  return this.parseDoWhileStatement(s);
                case 91:
                  return this.parseForStatement(s);
                case 68:
                  if (this.lookaheadCharCode() === 46)
                    break;
                  return i || (this.state.strict ? this.raise(u.StrictFunction, { at: this.state.startLoc }) : a || this.raise(u.SloppyFunction, { at: this.state.startLoc })), this.parseFunctionStatement(s, false, !i && a);
                case 80:
                  return i || this.unexpected(), this.parseClass(this.maybeTakeDecorators(r, s), true);
                case 69:
                  return this.parseIfStatement(s);
                case 70:
                  return this.parseReturnStatement(s);
                case 71:
                  return this.parseSwitchStatement(s);
                case 72:
                  return this.parseThrowStatement(s);
                case 73:
                  return this.parseTryStatement(s);
                case 105:
                  if (this.hasFollowingLineBreak() || this.state.containsEsc || !this.hasFollowingBindingIdentifier())
                    break;
                  return this.expectPlugin("explicitResourceManagement"), !this.scope.inModule && this.scope.inTopLevel ? this.raise(u.UnexpectedUsingDeclaration, { at: this.state.startLoc }) : i || this.raise(u.UnexpectedLexicalDeclaration, { at: this.state.startLoc }), this.parseVarStatement(s, "using");
                case 99: {
                  if (this.state.containsEsc)
                    break;
                  let p = this.nextTokenStart(), m = this.codePointAtPos(p);
                  if (m !== 91 && (!i && this.hasFollowingLineBreak() || !this.chStartsBindingIdentifier(m, p) && m !== 123))
                    break;
                }
                case 75:
                  i || this.raise(u.UnexpectedLexicalDeclaration, { at: this.state.startLoc });
                case 74: {
                  let p = this.state.value;
                  return this.parseVarStatement(s, p);
                }
                case 92:
                  return this.parseWhileStatement(s);
                case 76:
                  return this.parseWithStatement(s);
                case 5:
                  return this.parseBlock();
                case 13:
                  return this.parseEmptyStatement(s);
                case 83: {
                  let p = this.lookaheadCharCode();
                  if (p === 40 || p === 46)
                    break;
                }
                case 82: {
                  !this.options.allowImportExportEverywhere && !n && this.raise(u.UnexpectedImportExport, { at: this.state.startLoc }), this.next();
                  let p;
                  return e === 83 ? (p = this.parseImport(s), p.type === "ImportDeclaration" && (!p.importKind || p.importKind === "value") && (this.sawUnambiguousESM = true)) : (p = this.parseExport(s, r), (p.type === "ExportNamedDeclaration" && (!p.exportKind || p.exportKind === "value") || p.type === "ExportAllDeclaration" && (!p.exportKind || p.exportKind === "value") || p.type === "ExportDefaultDeclaration") && (this.sawUnambiguousESM = true)), this.assertModuleNodeAllowed(p), p;
                }
                default:
                  if (this.isAsyncFunction())
                    return i || this.raise(u.AsyncFunctionInSingleStatementContext, { at: this.state.startLoc }), this.next(), this.parseFunctionStatement(s, true, !i && a);
              }
              let o = this.state.value, c = this.parseExpression();
              return z(e) && c.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(s, o, c, t) : this.parseExpressionStatement(s, c, r);
            }
            assertModuleNodeAllowed(t) {
              !this.options.allowImportExportEverywhere && !this.inModule && this.raise(u.ImportOutsideModule, { at: t });
            }
            decoratorsEnabledBeforeExport() {
              return this.hasPlugin("decorators-legacy") ? true : this.hasPlugin("decorators") && !!this.getPluginOption("decorators", "decoratorsBeforeExport");
            }
            maybeTakeDecorators(t, r, e) {
              return t && (r.decorators = t, this.resetStartLocationFromNode(r, t[0]), e && this.resetStartLocationFromNode(e, r)), r;
            }
            canHaveLeadingDecorator() {
              return this.match(80);
            }
            parseDecorators(t) {
              let r = [];
              do
                r.push(this.parseDecorator());
              while (this.match(26));
              if (this.match(82))
                t || this.unexpected(), this.decoratorsEnabledBeforeExport() || this.raise(u.DecoratorExportClass, { at: this.state.startLoc });
              else if (!this.canHaveLeadingDecorator())
                throw this.raise(u.UnexpectedLeadingDecorator, { at: this.state.startLoc });
              return r;
            }
            parseDecorator() {
              this.expectOnePlugin(["decorators", "decorators-legacy"]);
              let t = this.startNode();
              if (this.next(), this.hasPlugin("decorators")) {
                let r = this.state.startLoc, e;
                if (this.match(10)) {
                  let s = this.state.startLoc;
                  this.next(), e = this.parseExpression(), this.expect(11), e = this.wrapParenthesis(s, e);
                  let i = this.state.startLoc;
                  t.expression = this.parseMaybeDecoratorArguments(e), this.getPluginOption("decorators", "allowCallParenthesized") === false && t.expression !== e && this.raise(u.DecoratorArgumentsOutsideParentheses, { at: i });
                } else {
                  for (e = this.parseIdentifier(false); this.eat(16); ) {
                    let s = this.startNodeAt(r);
                    s.object = e, this.match(136) ? (this.classScope.usePrivateName(this.state.value, this.state.startLoc), s.property = this.parsePrivateName()) : s.property = this.parseIdentifier(true), s.computed = false, e = this.finishNode(s, "MemberExpression");
                  }
                  t.expression = this.parseMaybeDecoratorArguments(e);
                }
              } else
                t.expression = this.parseExprSubscripts();
              return this.finishNode(t, "Decorator");
            }
            parseMaybeDecoratorArguments(t) {
              if (this.eat(10)) {
                let r = this.startNodeAtNode(t);
                return r.callee = t, r.arguments = this.parseCallExpressionArguments(11, false), this.toReferencedList(r.arguments), this.finishNode(r, "CallExpression");
              }
              return t;
            }
            parseBreakContinueStatement(t, r) {
              return this.next(), this.isLineTerminator() ? t.label = null : (t.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(t, r), this.finishNode(t, r ? "BreakStatement" : "ContinueStatement");
            }
            verifyBreakContinue(t, r) {
              let e;
              for (e = 0; e < this.state.labels.length; ++e) {
                let s = this.state.labels[e];
                if ((t.label == null || s.name === t.label.name) && (s.kind != null && (r || s.kind === "loop") || t.label && r))
                  break;
              }
              if (e === this.state.labels.length) {
                let s = r ? "BreakStatement" : "ContinueStatement";
                this.raise(u.IllegalBreakContinue, { at: t, type: s });
              }
            }
            parseDebuggerStatement(t) {
              return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
            }
            parseHeaderExpression() {
              this.expect(10);
              let t = this.parseExpression();
              return this.expect(11), t;
            }
            parseDoWhileStatement(t) {
              return this.next(), this.state.labels.push(gs), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.expect(92), t.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(t, "DoWhileStatement");
            }
            parseForStatement(t) {
              this.next(), this.state.labels.push(gs);
              let r = null;
              if (this.isAwaitAllowed() && this.eatContextual(96) && (r = this.state.lastTokStartLoc), this.scope.enter(je), this.expect(10), this.match(13))
                return r !== null && this.unexpected(r), this.parseFor(t, null);
              let e = this.isContextual(99), s = this.isContextual(105) && !this.hasFollowingLineBreak(), i = e && this.hasFollowingBindingAtom() || s && this.hasFollowingBindingIdentifier() && this.startsUsingForOf();
              if (this.match(74) || this.match(75) || i) {
                let p = this.startNode(), m = this.state.value;
                this.next(), this.parseVar(p, true, m);
                let x = this.finishNode(p, "VariableDeclaration"), A = this.match(58);
                return A && s && this.raise(u.ForInUsing, { at: x }), (A || this.isContextual(101)) && x.declarations.length === 1 ? this.parseForIn(t, x, r) : (r !== null && this.unexpected(r), this.parseFor(t, x));
              }
              let a = this.isContextual(95), n = new Ct(), o = this.parseExpression(true, n), c = this.isContextual(101);
              if (c && (e && this.raise(u.ForOfLet, { at: o }), r === null && a && o.type === "Identifier" && this.raise(u.ForOfAsync, { at: o })), c || this.match(58)) {
                this.checkDestructuringPrivate(n), this.toAssignable(o, true);
                let p = c ? "ForOfStatement" : "ForInStatement";
                return this.checkLVal(o, { in: { type: p } }), this.parseForIn(t, o, r);
              } else
                this.checkExpressionErrors(n, true);
              return r !== null && this.unexpected(r), this.parseFor(t, o);
            }
            parseFunctionStatement(t, r, e) {
              return this.next(), this.parseFunction(t, ie.Declaration | (e ? ie.HangingDeclaration : 0) | (r ? ie.Async : 0));
            }
            parseIfStatement(t) {
              return this.next(), t.test = this.parseHeaderExpression(), t.consequent = this.parseStatementOrFunctionDeclaration(true), t.alternate = this.eat(66) ? this.parseStatementOrFunctionDeclaration(true) : null, this.finishNode(t, "IfStatement");
            }
            parseReturnStatement(t) {
              return !this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction && this.raise(u.IllegalReturn, { at: this.state.startLoc }), this.next(), this.isLineTerminator() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
            }
            parseSwitchStatement(t) {
              this.next(), t.discriminant = this.parseHeaderExpression();
              let r = t.cases = [];
              this.expect(5), this.state.labels.push(gh), this.scope.enter(je);
              let e;
              for (let s; !this.match(8); )
                if (this.match(61) || this.match(65)) {
                  let i = this.match(61);
                  e && this.finishNode(e, "SwitchCase"), r.push(e = this.startNode()), e.consequent = [], this.next(), i ? e.test = this.parseExpression() : (s && this.raise(u.MultipleDefaultsInSwitch, { at: this.state.lastTokStartLoc }), s = true, e.test = null), this.expect(14);
                } else
                  e ? e.consequent.push(this.parseStatementListItem()) : this.unexpected();
              return this.scope.exit(), e && this.finishNode(e, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t, "SwitchStatement");
            }
            parseThrowStatement(t) {
              return this.next(), this.hasPrecedingLineBreak() && this.raise(u.NewlineAfterThrow, { at: this.state.lastTokEndLoc }), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
            }
            parseCatchClauseParam() {
              let t = this.parseBindingAtom(), r = t.type === "Identifier";
              return this.scope.enter(r ? Sr : 0), this.checkLVal(t, { in: { type: "CatchClause" }, binding: De, allowingSloppyLetBinding: true }), t;
            }
            parseTryStatement(t) {
              if (this.next(), t.block = this.parseBlock(), t.handler = null, this.match(62)) {
                let r = this.startNode();
                this.next(), this.match(10) ? (this.expect(10), r.param = this.parseCatchClauseParam(), this.expect(11)) : (r.param = null, this.scope.enter(je)), r.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(false, false)), this.scope.exit(), t.handler = this.finishNode(r, "CatchClause");
              }
              return t.finalizer = this.eat(67) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(u.NoCatchOrFinally, { at: t }), this.finishNode(t, "TryStatement");
            }
            parseVarStatement(t, r) {
              let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
              return this.next(), this.parseVar(t, false, r, e), this.semicolon(), this.finishNode(t, "VariableDeclaration");
            }
            parseWhileStatement(t) {
              return this.next(), t.test = this.parseHeaderExpression(), this.state.labels.push(gs), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.finishNode(t, "WhileStatement");
            }
            parseWithStatement(t) {
              return this.state.strict && this.raise(u.StrictWith, { at: this.state.startLoc }), this.next(), t.object = this.parseHeaderExpression(), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.finishNode(t, "WithStatement");
            }
            parseEmptyStatement(t) {
              return this.next(), this.finishNode(t, "EmptyStatement");
            }
            parseLabeledStatement(t, r, e, s) {
              for (let a of this.state.labels)
                a.name === r && this.raise(u.LabelRedeclaration, { at: e, labelName: r });
              let i = Jo(this.state.type) ? "loop" : this.match(71) ? "switch" : null;
              for (let a = this.state.labels.length - 1; a >= 0; a--) {
                let n = this.state.labels[a];
                if (n.statementStart === t.start)
                  n.statementStart = this.state.start, n.kind = i;
                else
                  break;
              }
              return this.state.labels.push({ name: r, kind: i, statementStart: this.state.start }), t.body = s & ae.AllowLabeledFunction ? this.parseStatementOrFunctionDeclaration(false) : this.parseStatement(), this.state.labels.pop(), t.label = e, this.finishNode(t, "LabeledStatement");
            }
            parseExpressionStatement(t, r, e) {
              return t.expression = r, this.semicolon(), this.finishNode(t, "ExpressionStatement");
            }
            parseBlock() {
              let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, e = arguments.length > 2 ? arguments[2] : void 0, s = this.startNode();
              return t && this.state.strictErrors.clear(), this.expect(5), r && this.scope.enter(je), this.parseBlockBody(s, t, false, 8, e), r && this.scope.exit(), this.finishNode(s, "BlockStatement");
            }
            isValidDirective(t) {
              return t.type === "ExpressionStatement" && t.expression.type === "StringLiteral" && !t.expression.extra.parenthesized;
            }
            parseBlockBody(t, r, e, s, i) {
              let a = t.body = [], n = t.directives = [];
              this.parseBlockOrModuleBlockBody(a, r ? n : void 0, e, s, i);
            }
            parseBlockOrModuleBlockBody(t, r, e, s, i) {
              let a = this.state.strict, n = false, o = false;
              for (; !this.match(s); ) {
                let c = e ? this.parseModuleItem() : this.parseStatementListItem();
                if (r && !o) {
                  if (this.isValidDirective(c)) {
                    let p = this.stmtToDirective(c);
                    r.push(p), !n && p.value.value === "use strict" && (n = true, this.setStrict(true));
                    continue;
                  }
                  o = true, this.state.strictErrors.clear();
                }
                t.push(c);
              }
              i && i.call(this, n), a || this.setStrict(false), this.next();
            }
            parseFor(t, r) {
              return t.init = r, this.semicolon(false), t.test = this.match(13) ? null : this.parseExpression(), this.semicolon(false), t.update = this.match(11) ? null : this.parseExpression(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, "ForStatement");
            }
            parseForIn(t, r, e) {
              let s = this.match(58);
              return this.next(), s ? e !== null && this.unexpected(e) : t.await = e !== null, r.type === "VariableDeclaration" && r.declarations[0].init != null && (!s || this.state.strict || r.kind !== "var" || r.declarations[0].id.type !== "Identifier") && this.raise(u.ForInOfLoopInitializer, { at: r, type: s ? "ForInStatement" : "ForOfStatement" }), r.type === "AssignmentPattern" && this.raise(u.InvalidLhs, { at: r, ancestor: { type: "ForStatement" } }), t.left = r, t.right = s ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, s ? "ForInStatement" : "ForOfStatement");
            }
            parseVar(t, r, e) {
              let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, i = t.declarations = [];
              for (t.kind = e; ; ) {
                let a = this.startNode();
                if (this.parseVarId(a, e), a.init = this.eat(29) ? r ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, a.init === null && !s && (a.id.type !== "Identifier" && !(r && (this.match(58) || this.isContextual(101))) ? this.raise(u.DeclarationMissingInitializer, { at: this.state.lastTokEndLoc, kind: "destructuring" }) : e === "const" && !(this.match(58) || this.isContextual(101)) && this.raise(u.DeclarationMissingInitializer, { at: this.state.lastTokEndLoc, kind: "const" })), i.push(this.finishNode(a, "VariableDeclarator")), !this.eat(12))
                  break;
              }
              return t;
            }
            parseVarId(t, r) {
              let e = this.parseBindingAtom();
              this.checkLVal(e, { in: { type: "VariableDeclarator" }, binding: r === "var" ? xt : De }), t.id = e;
            }
            parseAsyncFunctionExpression(t) {
              return this.parseFunction(t, ie.Async);
            }
            parseFunction(t) {
              let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ie.Expression, e = r & ie.HangingDeclaration, s = !!(r & ie.Declaration), i = s && !(r & ie.NullableId), a = !!(r & ie.Async);
              this.initFunction(t, a), this.match(55) && (e && this.raise(u.GeneratorInSingleStatementContext, { at: this.state.startLoc }), this.next(), t.generator = true), s && (t.id = this.parseFunctionId(i));
              let n = this.state.maybeInArrowParameters;
              return this.state.maybeInArrowParameters = false, this.scope.enter(Pe), this.prodParam.enter(Et(a, t.generator)), s || (t.id = this.parseFunctionId()), this.parseFunctionParams(t, false), this.withSmartMixTopicForbiddingContext(() => {
                this.parseFunctionBodyAndFinish(t, s ? "FunctionDeclaration" : "FunctionExpression");
              }), this.prodParam.exit(), this.scope.exit(), s && !e && this.registerFunctionStatementId(t), this.state.maybeInArrowParameters = n, t;
            }
            parseFunctionId(t) {
              return t || z(this.state.type) ? this.parseIdentifier() : null;
            }
            parseFunctionParams(t, r) {
              this.expect(10), this.expressionScope.enter(ql()), t.params = this.parseBindingList(11, 41, false, r), this.expressionScope.exit();
            }
            registerFunctionStatementId(t) {
              t.id && this.scope.declareName(t.id.name, this.state.strict || t.generator || t.async ? this.scope.treatFunctionsAsVar ? xt : De : Dr, t.id.loc.start);
            }
            parseClass(t, r, e) {
              this.next();
              let s = this.state.strict;
              return this.state.strict = true, this.parseClassId(t, r, e), this.parseClassSuper(t), t.body = this.parseClassBody(!!t.superClass, s), this.finishNode(t, r ? "ClassDeclaration" : "ClassExpression");
            }
            isClassProperty() {
              return this.match(29) || this.match(13) || this.match(8);
            }
            isClassMethod() {
              return this.match(10);
            }
            isNonstaticConstructor(t) {
              return !t.computed && !t.static && (t.key.name === "constructor" || t.key.value === "constructor");
            }
            parseClassBody(t, r) {
              this.classScope.enter();
              let e = { hadConstructor: false, hadSuperClass: t }, s = [], i = this.startNode();
              if (i.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext(() => {
                for (; !this.match(8); ) {
                  if (this.eat(13)) {
                    if (s.length > 0)
                      throw this.raise(u.DecoratorSemicolon, { at: this.state.lastTokEndLoc });
                    continue;
                  }
                  if (this.match(26)) {
                    s.push(this.parseDecorator());
                    continue;
                  }
                  let a = this.startNode();
                  s.length && (a.decorators = s, this.resetStartLocationFromNode(a, s[0]), s = []), this.parseClassMember(i, a, e), a.kind === "constructor" && a.decorators && a.decorators.length > 0 && this.raise(u.DecoratorConstructor, { at: a });
                }
              }), this.state.strict = r, this.next(), s.length)
                throw this.raise(u.TrailingDecorator, { at: this.state.startLoc });
              return this.classScope.exit(), this.finishNode(i, "ClassBody");
            }
            parseClassMemberFromModifier(t, r) {
              let e = this.parseIdentifier(true);
              if (this.isClassMethod()) {
                let s = r;
                return s.kind = "method", s.computed = false, s.key = e, s.static = false, this.pushClassMethod(t, s, false, false, false, false), true;
              } else if (this.isClassProperty()) {
                let s = r;
                return s.computed = false, s.key = e, s.static = false, t.body.push(this.parseClassProperty(s)), true;
              }
              return this.resetPreviousNodeTrailingComments(e), false;
            }
            parseClassMember(t, r, e) {
              let s = this.isContextual(104);
              if (s) {
                if (this.parseClassMemberFromModifier(t, r))
                  return;
                if (this.eat(5)) {
                  this.parseClassStaticBlock(t, r);
                  return;
                }
              }
              this.parseClassMemberWithIsStatic(t, r, e, s);
            }
            parseClassMemberWithIsStatic(t, r, e, s) {
              let i = r, a = r, n = r, o = r, c = r, p = i, m = i;
              if (r.static = s, this.parsePropertyNamePrefixOperator(r), this.eat(55)) {
                p.kind = "method";
                let R = this.match(136);
                if (this.parseClassElementName(p), R) {
                  this.pushClassPrivateMethod(t, a, true, false);
                  return;
                }
                this.isNonstaticConstructor(i) && this.raise(u.ConstructorIsGenerator, { at: i.key }), this.pushClassMethod(t, i, true, false, false, false);
                return;
              }
              let x = z(this.state.type) && !this.state.containsEsc, A = this.match(136), b = this.parseClassElementName(r), O = this.state.startLoc;
              if (this.parsePostMemberNameModifiers(m), this.isClassMethod()) {
                if (p.kind = "method", A) {
                  this.pushClassPrivateMethod(t, a, false, false);
                  return;
                }
                let R = this.isNonstaticConstructor(i), Y = false;
                R && (i.kind = "constructor", e.hadConstructor && !this.hasPlugin("typescript") && this.raise(u.DuplicateConstructor, { at: b }), R && this.hasPlugin("typescript") && r.override && this.raise(u.OverrideOnConstructor, { at: b }), e.hadConstructor = true, Y = e.hadSuperClass), this.pushClassMethod(t, i, false, false, R, Y);
              } else if (this.isClassProperty())
                A ? this.pushClassPrivateProperty(t, o) : this.pushClassProperty(t, n);
              else if (x && b.name === "async" && !this.isLineTerminator()) {
                this.resetPreviousNodeTrailingComments(b);
                let R = this.eat(55);
                m.optional && this.unexpected(O), p.kind = "method";
                let Y = this.match(136);
                this.parseClassElementName(p), this.parsePostMemberNameModifiers(m), Y ? this.pushClassPrivateMethod(t, a, R, true) : (this.isNonstaticConstructor(i) && this.raise(u.ConstructorIsAsync, { at: i.key }), this.pushClassMethod(t, i, R, true, false, false));
              } else if (x && (b.name === "get" || b.name === "set") && !(this.match(55) && this.isLineTerminator())) {
                this.resetPreviousNodeTrailingComments(b), p.kind = b.name;
                let R = this.match(136);
                this.parseClassElementName(i), R ? this.pushClassPrivateMethod(t, a, false, false) : (this.isNonstaticConstructor(i) && this.raise(u.ConstructorIsAccessor, { at: i.key }), this.pushClassMethod(t, i, false, false, false, false)), this.checkGetterSetterParams(i);
              } else if (x && b.name === "accessor" && !this.isLineTerminator()) {
                this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(b);
                let R = this.match(136);
                this.parseClassElementName(n), this.pushClassAccessorProperty(t, c, R);
              } else
                this.isLineTerminator() ? A ? this.pushClassPrivateProperty(t, o) : this.pushClassProperty(t, n) : this.unexpected();
            }
            parseClassElementName(t) {
              let { type: r, value: e } = this.state;
              if ((r === 130 || r === 131) && t.static && e === "prototype" && this.raise(u.StaticPrototype, { at: this.state.startLoc }), r === 136) {
                e === "constructor" && this.raise(u.ConstructorClassPrivateField, { at: this.state.startLoc });
                let s = this.parsePrivateName();
                return t.key = s, s;
              }
              return this.parsePropertyName(t);
            }
            parseClassStaticBlock(t, r) {
              var e;
              this.scope.enter(Ne | ft | pt);
              let s = this.state.labels;
              this.state.labels = [], this.prodParam.enter($e);
              let i = r.body = [];
              this.parseBlockOrModuleBlockBody(i, void 0, false, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = s, t.body.push(this.finishNode(r, "StaticBlock")), (e = r.decorators) != null && e.length && this.raise(u.DecoratorStaticBlock, { at: r });
            }
            pushClassProperty(t, r) {
              !r.computed && (r.key.name === "constructor" || r.key.value === "constructor") && this.raise(u.ConstructorClassField, { at: r.key }), t.body.push(this.parseClassProperty(r));
            }
            pushClassPrivateProperty(t, r) {
              let e = this.parseClassPrivateProperty(r);
              t.body.push(e), this.classScope.declarePrivateName(this.getPrivateNameSV(e.key), hs, e.key.loc.start);
            }
            pushClassAccessorProperty(t, r, e) {
              if (!e && !r.computed) {
                let i = r.key;
                (i.name === "constructor" || i.value === "constructor") && this.raise(u.ConstructorClassField, { at: i });
              }
              let s = this.parseClassAccessorProperty(r);
              t.body.push(s), e && this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), hs, s.key.loc.start);
            }
            pushClassMethod(t, r, e, s, i, a) {
              t.body.push(this.parseMethod(r, e, s, i, a, "ClassMethod", true));
            }
            pushClassPrivateMethod(t, r, e, s) {
              let i = this.parseMethod(r, e, s, false, false, "ClassPrivateMethod", true);
              t.body.push(i);
              let a = i.kind === "get" ? i.static ? gl : Al : i.kind === "set" ? i.static ? Pl : Tl : hs;
              this.declareClassPrivateMethodInScope(i, a);
            }
            declareClassPrivateMethodInScope(t, r) {
              this.classScope.declarePrivateName(this.getPrivateNameSV(t.key), r, t.key.loc.start);
            }
            parsePostMemberNameModifiers(t) {
            }
            parseClassPrivateProperty(t) {
              return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassPrivateProperty");
            }
            parseClassProperty(t) {
              return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassProperty");
            }
            parseClassAccessorProperty(t) {
              return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassAccessorProperty");
            }
            parseInitializer(t) {
              this.scope.enter(Ne | pt), this.expressionScope.enter(Vr()), this.prodParam.enter($e), t.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
            }
            parseClassId(t, r, e) {
              let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : kr;
              if (z(this.state.type))
                t.id = this.parseIdentifier(), r && this.declareNameFromIdentifier(t.id, s);
              else if (e || !r)
                t.id = null;
              else
                throw this.raise(u.MissingClassName, { at: this.state.startLoc });
            }
            parseClassSuper(t) {
              t.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
            }
            parseExport(t, r) {
              let e = this.maybeParseExportDefaultSpecifier(t), s = !e || this.eat(12), i = s && this.eatExportStar(t), a = i && this.maybeParseExportNamespaceSpecifier(t), n = s && (!a || this.eat(12)), o = e || i;
              if (i && !a) {
                if (e && this.unexpected(), r)
                  throw this.raise(u.UnsupportedDecoratorExport, { at: t });
                return this.parseExportFrom(t, true), this.finishNode(t, "ExportAllDeclaration");
              }
              let c = this.maybeParseExportNamedSpecifiers(t);
              if (e && s && !i && !c || a && n && !c)
                throw this.unexpected(null, 5);
              let p;
              if (o || c) {
                if (p = false, r)
                  throw this.raise(u.UnsupportedDecoratorExport, { at: t });
                this.parseExportFrom(t, o);
              } else
                p = this.maybeParseExportDeclaration(t);
              if (o || c || p) {
                var m;
                let x = t;
                if (this.checkExport(x, true, false, !!x.source), ((m = x.declaration) == null ? void 0 : m.type) === "ClassDeclaration")
                  this.maybeTakeDecorators(r, x.declaration, x);
                else if (r)
                  throw this.raise(u.UnsupportedDecoratorExport, { at: t });
                return this.finishNode(x, "ExportNamedDeclaration");
              }
              if (this.eat(65)) {
                let x = t, A = this.parseExportDefaultExpression();
                if (x.declaration = A, A.type === "ClassDeclaration")
                  this.maybeTakeDecorators(r, A, x);
                else if (r)
                  throw this.raise(u.UnsupportedDecoratorExport, { at: t });
                return this.checkExport(x, true, true), this.finishNode(x, "ExportDefaultDeclaration");
              }
              throw this.unexpected(null, 5);
            }
            eatExportStar(t) {
              return this.eat(55);
            }
            maybeParseExportDefaultSpecifier(t) {
              if (this.isExportDefaultSpecifier()) {
                this.expectPlugin("exportDefaultFrom");
                let r = this.startNode();
                return r.exported = this.parseIdentifier(true), t.specifiers = [this.finishNode(r, "ExportDefaultSpecifier")], true;
              }
              return false;
            }
            maybeParseExportNamespaceSpecifier(t) {
              if (this.isContextual(93)) {
                t.specifiers || (t.specifiers = []);
                let r = this.startNodeAt(this.state.lastTokStartLoc);
                return this.next(), r.exported = this.parseModuleExportName(), t.specifiers.push(this.finishNode(r, "ExportNamespaceSpecifier")), true;
              }
              return false;
            }
            maybeParseExportNamedSpecifiers(t) {
              if (this.match(5)) {
                t.specifiers || (t.specifiers = []);
                let r = t.exportKind === "type";
                return t.specifiers.push(...this.parseExportSpecifiers(r)), t.source = null, t.declaration = null, this.hasPlugin("importAssertions") && (t.assertions = []), true;
              }
              return false;
            }
            maybeParseExportDeclaration(t) {
              return this.shouldParseExportDeclaration() ? (t.specifiers = [], t.source = null, this.hasPlugin("importAssertions") && (t.assertions = []), t.declaration = this.parseExportDeclaration(t), true) : false;
            }
            isAsyncFunction() {
              if (!this.isContextual(95))
                return false;
              let t = this.nextTokenStart();
              return !ps.test(this.input.slice(this.state.pos, t)) && this.isUnparsedContextual(t, "function");
            }
            parseExportDefaultExpression() {
              let t = this.startNode();
              if (this.match(68))
                return this.next(), this.parseFunction(t, ie.Declaration | ie.NullableId);
              if (this.isAsyncFunction())
                return this.next(), this.next(), this.parseFunction(t, ie.Declaration | ie.NullableId | ie.Async);
              if (this.match(80))
                return this.parseClass(t, true, true);
              if (this.match(26))
                return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(u.DecoratorBeforeExport, { at: this.state.startLoc }), this.parseClass(this.maybeTakeDecorators(this.parseDecorators(false), this.startNode()), true, true);
              if (this.match(75) || this.match(74) || this.isLet())
                throw this.raise(u.UnsupportedDefaultExport, { at: this.state.startLoc });
              let r = this.parseMaybeAssignAllowIn();
              return this.semicolon(), r;
            }
            parseExportDeclaration(t) {
              return this.match(80) ? this.parseClass(this.startNode(), true, false) : this.parseStatementListItem();
            }
            isExportDefaultSpecifier() {
              let { type: t } = this.state;
              if (z(t)) {
                if (t === 95 && !this.state.containsEsc || t === 99)
                  return false;
                if ((t === 128 || t === 127) && !this.state.containsEsc) {
                  let { type: s } = this.lookahead();
                  if (z(s) && s !== 97 || s === 5)
                    return this.expectOnePlugin(["flow", "typescript"]), false;
                }
              } else if (!this.match(65))
                return false;
              let r = this.nextTokenStart(), e = this.isUnparsedContextual(r, "from");
              if (this.input.charCodeAt(r) === 44 || z(this.state.type) && e)
                return true;
              if (this.match(65) && e) {
                let s = this.input.charCodeAt(this.nextTokenStartSince(r + 4));
                return s === 34 || s === 39;
              }
              return false;
            }
            parseExportFrom(t, r) {
              if (this.eatContextual(97)) {
                t.source = this.parseImportSource(), this.checkExport(t);
                let e = this.maybeParseImportAssertions();
                e && (t.assertions = e, this.checkJSONModuleImport(t));
              } else
                r && this.unexpected();
              this.semicolon();
            }
            shouldParseExportDeclaration() {
              let { type: t } = this.state;
              if (t === 26 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators"))) {
                if (this.getPluginOption("decorators", "decoratorsBeforeExport"))
                  throw this.raise(u.DecoratorBeforeExport, { at: this.state.startLoc });
                return true;
              }
              return t === 74 || t === 75 || t === 68 || t === 80 || this.isLet() || this.isAsyncFunction();
            }
            checkExport(t, r, e, s) {
              if (r) {
                if (e) {
                  if (this.checkDuplicateExports(t, "default"), this.hasPlugin("exportDefaultFrom")) {
                    var i;
                    let a = t.declaration;
                    a.type === "Identifier" && a.name === "from" && a.end - a.start === 4 && !((i = a.extra) != null && i.parenthesized) && this.raise(u.ExportDefaultFromAsIdentifier, { at: a });
                  }
                } else if (t.specifiers && t.specifiers.length)
                  for (let a of t.specifiers) {
                    let { exported: n } = a, o = n.type === "Identifier" ? n.name : n.value;
                    if (this.checkDuplicateExports(a, o), !s && a.local) {
                      let { local: c } = a;
                      c.type !== "Identifier" ? this.raise(u.ExportBindingIsString, { at: a, localName: c.value, exportName: o }) : (this.checkReservedWord(c.name, c.loc.start, true, false), this.scope.checkLocalExport(c));
                    }
                  }
                else if (t.declaration) {
                  if (t.declaration.type === "FunctionDeclaration" || t.declaration.type === "ClassDeclaration") {
                    let a = t.declaration.id;
                    if (!a)
                      throw new Error("Assertion failure");
                    this.checkDuplicateExports(t, a.name);
                  } else if (t.declaration.type === "VariableDeclaration")
                    for (let a of t.declaration.declarations)
                      this.checkDeclaration(a.id);
                }
              }
            }
            checkDeclaration(t) {
              if (t.type === "Identifier")
                this.checkDuplicateExports(t, t.name);
              else if (t.type === "ObjectPattern")
                for (let r of t.properties)
                  this.checkDeclaration(r);
              else if (t.type === "ArrayPattern")
                for (let r of t.elements)
                  r && this.checkDeclaration(r);
              else
                t.type === "ObjectProperty" ? this.checkDeclaration(t.value) : t.type === "RestElement" ? this.checkDeclaration(t.argument) : t.type === "AssignmentPattern" && this.checkDeclaration(t.left);
            }
            checkDuplicateExports(t, r) {
              this.exportedIdentifiers.has(r) && (r === "default" ? this.raise(u.DuplicateDefaultExport, { at: t }) : this.raise(u.DuplicateExport, { at: t, exportName: r })), this.exportedIdentifiers.add(r);
            }
            parseExportSpecifiers(t) {
              let r = [], e = true;
              for (this.expect(5); !this.eat(8); ) {
                if (e)
                  e = false;
                else if (this.expect(12), this.eat(8))
                  break;
                let s = this.isContextual(128), i = this.match(131), a = this.startNode();
                a.local = this.parseModuleExportName(), r.push(this.parseExportSpecifier(a, i, t, s));
              }
              return r;
            }
            parseExportSpecifier(t, r, e, s) {
              return this.eatContextual(93) ? t.exported = this.parseModuleExportName() : r ? t.exported = Kl(t.local) : t.exported || (t.exported = Te(t.local)), this.finishNode(t, "ExportSpecifier");
            }
            parseModuleExportName() {
              if (this.match(131)) {
                let t = this.parseStringLiteral(this.state.value), r = t.value.match(Ph);
                return r && this.raise(u.ModuleExportNameHasLoneSurrogate, { at: t, surrogateCharCode: r[0].charCodeAt(0) }), t;
              }
              return this.parseIdentifier(true);
            }
            isJSONModuleImport(t) {
              return t.assertions != null ? t.assertions.some((r) => {
                let { key: e, value: s } = r;
                return s.value === "json" && (e.type === "Identifier" ? e.name === "type" : e.value === "type");
              }) : false;
            }
            checkImportReflection(t) {
              if (t.module) {
                var r;
                (t.specifiers.length !== 1 || t.specifiers[0].type !== "ImportDefaultSpecifier") && this.raise(u.ImportReflectionNotBinding, { at: t.specifiers[0].loc.start }), ((r = t.assertions) == null ? void 0 : r.length) > 0 && this.raise(u.ImportReflectionHasAssertion, { at: t.specifiers[0].loc.start });
              }
            }
            checkJSONModuleImport(t) {
              if (this.isJSONModuleImport(t) && t.type !== "ExportAllDeclaration") {
                let { specifiers: r } = t;
                if (r != null) {
                  let e = r.find((s) => {
                    let i;
                    if (s.type === "ExportSpecifier" ? i = s.local : s.type === "ImportSpecifier" && (i = s.imported), i !== void 0)
                      return i.type === "Identifier" ? i.name !== "default" : i.value !== "default";
                  });
                  e !== void 0 && this.raise(u.ImportJSONBindingNotDefault, { at: e.loc.start });
                }
              }
            }
            parseMaybeImportReflection(t) {
              let r = false;
              if (this.isContextual(125)) {
                let e = this.lookahead(), s = e.type;
                z(s) ? (s !== 97 || this.input.charCodeAt(this.nextTokenStartSince(e.end)) === 102) && (r = true) : s !== 12 && (r = true);
              }
              r ? (this.expectPlugin("importReflection"), this.next(), t.module = true) : this.hasPlugin("importReflection") && (t.module = false);
            }
            parseImport(t) {
              if (t.specifiers = [], !this.match(131)) {
                this.parseMaybeImportReflection(t);
                let s = !this.maybeParseDefaultImportSpecifier(t) || this.eat(12), i = s && this.maybeParseStarImportSpecifier(t);
                s && !i && this.parseNamedImportSpecifiers(t), this.expectContextual(97);
              }
              t.source = this.parseImportSource();
              let r = this.maybeParseImportAssertions();
              if (r)
                t.assertions = r;
              else {
                let e = this.maybeParseModuleAttributes();
                e && (t.attributes = e);
              }
              return this.checkImportReflection(t), this.checkJSONModuleImport(t), this.semicolon(), this.finishNode(t, "ImportDeclaration");
            }
            parseImportSource() {
              return this.match(131) || this.unexpected(), this.parseExprAtom();
            }
            shouldParseDefaultImport(t) {
              return z(this.state.type);
            }
            parseImportSpecifierLocal(t, r, e) {
              r.local = this.parseIdentifier(), t.specifiers.push(this.finishImportSpecifier(r, e));
            }
            finishImportSpecifier(t, r) {
              let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : De;
              return this.checkLVal(t.local, { in: t, binding: e }), this.finishNode(t, r);
            }
            parseAssertEntries() {
              let t = [], r = /* @__PURE__ */ new Set();
              do {
                if (this.match(8))
                  break;
                let e = this.startNode(), s = this.state.value;
                if (r.has(s) && this.raise(u.ModuleAttributesWithDuplicateKeys, { at: this.state.startLoc, key: s }), r.add(s), this.match(131) ? e.key = this.parseStringLiteral(s) : e.key = this.parseIdentifier(true), this.expect(14), !this.match(131))
                  throw this.raise(u.ModuleAttributeInvalidValue, { at: this.state.startLoc });
                e.value = this.parseStringLiteral(this.state.value), t.push(this.finishNode(e, "ImportAttribute"));
              } while (this.eat(12));
              return t;
            }
            maybeParseModuleAttributes() {
              if (this.match(76) && !this.hasPrecedingLineBreak())
                this.expectPlugin("moduleAttributes"), this.next();
              else
                return this.hasPlugin("moduleAttributes") ? [] : null;
              let t = [], r = /* @__PURE__ */ new Set();
              do {
                let e = this.startNode();
                if (e.key = this.parseIdentifier(true), e.key.name !== "type" && this.raise(u.ModuleAttributeDifferentFromType, { at: e.key }), r.has(e.key.name) && this.raise(u.ModuleAttributesWithDuplicateKeys, { at: e.key, key: e.key.name }), r.add(e.key.name), this.expect(14), !this.match(131))
                  throw this.raise(u.ModuleAttributeInvalidValue, { at: this.state.startLoc });
                e.value = this.parseStringLiteral(this.state.value), this.finishNode(e, "ImportAttribute"), t.push(e);
              } while (this.eat(12));
              return t;
            }
            maybeParseImportAssertions() {
              if (this.isContextual(94) && !this.hasPrecedingLineBreak())
                this.expectPlugin("importAssertions"), this.next();
              else
                return this.hasPlugin("importAssertions") ? [] : null;
              this.eat(5);
              let t = this.parseAssertEntries();
              return this.eat(8), t;
            }
            maybeParseDefaultImportSpecifier(t) {
              return this.shouldParseDefaultImport(t) ? (this.parseImportSpecifierLocal(t, this.startNode(), "ImportDefaultSpecifier"), true) : false;
            }
            maybeParseStarImportSpecifier(t) {
              if (this.match(55)) {
                let r = this.startNode();
                return this.next(), this.expectContextual(93), this.parseImportSpecifierLocal(t, r, "ImportNamespaceSpecifier"), true;
              }
              return false;
            }
            parseNamedImportSpecifiers(t) {
              let r = true;
              for (this.expect(5); !this.eat(8); ) {
                if (r)
                  r = false;
                else {
                  if (this.eat(14))
                    throw this.raise(u.DestructureNamedImport, { at: this.state.startLoc });
                  if (this.expect(12), this.eat(8))
                    break;
                }
                let e = this.startNode(), s = this.match(131), i = this.isContextual(128);
                e.imported = this.parseModuleExportName();
                let a = this.parseImportSpecifier(e, s, t.importKind === "type" || t.importKind === "typeof", i, void 0);
                t.specifiers.push(a);
              }
            }
            parseImportSpecifier(t, r, e, s, i) {
              if (this.eatContextual(93))
                t.local = this.parseIdentifier();
              else {
                let { imported: a } = t;
                if (r)
                  throw this.raise(u.ImportBindingIsString, { at: t, importName: a.value });
                this.checkReservedWord(a.name, t.loc.start, true, true), t.local || (t.local = Te(a));
              }
              return this.finishImportSpecifier(t, "ImportSpecifier", i);
            }
            isThisParam(t) {
              return t.type === "Identifier" && t.name === "this";
            }
          }, ai = class extends Th {
            constructor(t, r) {
              t = dh(t), super(t, r), this.options = t, this.initializeScopes(), this.plugins = vh(this.options.plugins), this.filename = t.sourceFilename;
            }
            getScopeHandler() {
              return cs;
            }
            parse() {
              this.enterInitialScopes();
              let t = this.startNode(), r = this.startNode();
              return this.nextToken(), t.errors = null, this.parseTopLevel(t, r), t.errors = this.state.errors, t;
            }
          };
          function vh(t) {
            let r = /* @__PURE__ */ new Map();
            for (let e of t) {
              let [s, i] = Array.isArray(e) ? e : [e, {}];
              r.has(s) || r.set(s, i || {});
            }
            return r;
          }
          function Eh(t, r) {
            var e;
            if (((e = r) == null ? void 0 : e.sourceType) === "unambiguous") {
              r = Object.assign({}, r);
              try {
                r.sourceType = "module";
                let s = st(r, t), i = s.parse();
                if (s.sawUnambiguousESM)
                  return i;
                if (s.ambiguousScriptDifferentAst)
                  try {
                    return r.sourceType = "script", st(r, t).parse();
                  } catch {
                  }
                else
                  i.program.sourceType = "script";
                return i;
              } catch (s) {
                try {
                  return r.sourceType = "script", st(r, t).parse();
                } catch {
                }
                throw s;
              }
            } else
              return st(r, t).parse();
          }
          function Ch(t, r) {
            let e = st(r, t);
            return e.options.strictMode && (e.state.strict = true), e.getExpression();
          }
          function bh(t) {
            let r = {};
            for (let e of Object.keys(t))
              r[e] = xe(t[e]);
            return r;
          }
          var Sh = bh(Vo);
          function st(t, r) {
            let e = ai;
            return t != null && t.plugins && (ph(t.plugins), e = wh(t.plugins)), new e(t, r);
          }
          var ni = {};
          function wh(t) {
            let r = fh.filter((i) => te(t, i)), e = r.join("/"), s = ni[e];
            if (!s) {
              s = ai;
              for (let i of r)
                s = si[i](s);
              ni[e] = s;
            }
            return s;
          }
          l.parse = Eh, l.parseExpression = Ch, l.tokTypes = Sh;
        } }), Gf = K({ "src/language-js/parse/json.js"(l, h) {
          "use strict";
          V();
          var f = mr(), d = yr(), y = _o(), P = Ro();
          function g() {
            let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { allowComments: L = true } = C;
            return function(k) {
              let { parseExpression: H } = Uo(), W;
              try {
                W = H(k, { tokens: true, ranges: true });
              } catch (B) {
                throw P(B);
              }
              if (!L && f(W.comments))
                throw T(W.comments[0], "Comment");
              return S(W), W;
            };
          }
          function T(C, L) {
            let [j, k] = [C.loc.start, C.loc.end].map((H) => {
              let { line: W, column: B } = H;
              return { line: W, column: B + 1 };
            });
            return d(`${L} is not allowed in JSON.`, { start: j, end: k });
          }
          function S(C) {
            switch (C.type) {
              case "ArrayExpression":
                for (let L of C.elements)
                  L !== null && S(L);
                return;
              case "ObjectExpression":
                for (let L of C.properties)
                  S(L);
                return;
              case "ObjectProperty":
                if (C.computed)
                  throw T(C.key, "Computed key");
                if (C.shorthand)
                  throw T(C.key, "Shorthand property");
                C.key.type !== "Identifier" && S(C.key), S(C.value);
                return;
              case "UnaryExpression": {
                let { operator: L, argument: j } = C;
                if (L !== "+" && L !== "-")
                  throw T(C, `Operator '${C.operator}'`);
                if (j.type === "NumericLiteral" || j.type === "Identifier" && (j.name === "Infinity" || j.name === "NaN"))
                  return;
                throw T(j, `Operator '${L}' before '${j.type}'`);
              }
              case "Identifier":
                if (C.name !== "Infinity" && C.name !== "NaN" && C.name !== "undefined")
                  throw T(C, `Identifier '${C.name}'`);
                return;
              case "TemplateLiteral":
                if (f(C.expressions))
                  throw T(C.expressions[0], "'TemplateLiteral' with expression");
                for (let L of C.quasis)
                  S(L);
                return;
              case "NullLiteral":
              case "BooleanLiteral":
              case "NumericLiteral":
              case "StringLiteral":
              case "TemplateElement":
                return;
              default:
                throw T(C, `'${C.type}'`);
            }
          }
          var F = g(), I = { json: y({ parse: F, hasPragma() {
            return true;
          } }), json5: y(F), "json-stringify": y({ parse: g({ allowComments: false }), astFormat: "estree-json" }) };
          h.exports = I;
        } });
        V();
        var Jf = Nf(), Xf = To(), Yf = Lf(), We = _o(), Qf = Ro(), Zf = Wf(), ed = Gf(), td = { sourceType: "module", allowImportExportEverywhere: true, allowReturnOutsideFunction: true, allowSuperOutsideMethod: true, allowUndeclaredExports: true, errorRecovery: true, createParenthesizedExpressions: true, plugins: ["doExpressions", "exportDefaultFrom", "functionBind", "functionSent", "throwExpressions", "partialApplication", ["decorators", { decoratorsBeforeExport: false }], "importAssertions", "decimal", "moduleBlocks", "asyncDoExpressions", "regexpUnicodeSets", "destructuringPrivate", "decoratorAutoAccessors"], tokens: true, ranges: true }, sd = ["recordAndTuple", { syntaxType: "hash" }], mo = "v8intrinsic", yo = [["pipelineOperator", { proposal: "hack", topicToken: "%" }], ["pipelineOperator", { proposal: "minimal" }], ["pipelineOperator", { proposal: "fsharp" }]], de = function(l) {
          let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : td;
          return Object.assign(Object.assign({}, h), {}, { plugins: [...h.plugins, ...l] });
        }, rd = /@(?:no)?flow\b/;
        function id(l, h) {
          if (h.filepath && h.filepath.endsWith(".js.flow"))
            return true;
          let f = Xf(l);
          f && (l = l.slice(f.length));
          let d = Yf(l, 0);
          return d !== false && (l = l.slice(0, d)), rd.test(l);
        }
        function ad(l, h, f) {
          let d = Uo()[l], y = d(h, f), P = y.errors.find((g) => !cd.has(g.reasonCode));
          if (P)
            throw P;
          return y;
        }
        function Ge(l) {
          for (var h = arguments.length, f = new Array(h > 1 ? h - 1 : 0), d = 1; d < h; d++)
            f[d - 1] = arguments[d];
          return function(y, P) {
            let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            if ((g.parser === "babel" || g.parser === "__babel_estree") && id(y, g))
              return g.parser = "babel-flow", $o(y, P, g);
            let T = f;
            g.__babelSourceType === "script" && (T = T.map((C) => Object.assign(Object.assign({}, C), {}, { sourceType: "script" }))), /#[[{]/.test(y) && (T = T.map((C) => de([sd], C)));
            let S = /%[A-Z]/.test(y);
            y.includes("|>") ? T = (S ? [...yo, mo] : yo).flatMap((L) => T.map((j) => de([L], j))) : S && (T = T.map((C) => de([mo], C)));
            let { result: F, error: I } = Jf(...T.map((C) => () => ad(l, y, C)));
            if (!F)
              throw Qf(I);
            return g.originalText = y, Zf(F, g);
          };
        }
        var nd = Ge("parse", de(["jsx", "flow"])), $o = Ge("parse", de(["jsx", ["flow", { all: true, enums: true }]])), od = Ge("parse", de(["jsx", "typescript"]), de(["typescript"])), ld = Ge("parse", de(["jsx", "flow", "estree"])), hd = Ge("parseExpression", de(["jsx"])), ud = Ge("parseExpression", de(["typescript"])), cd = /* @__PURE__ */ new Set(["StrictNumericEscape", "StrictWith", "StrictOctalLiteral", "StrictDelete", "StrictEvalArguments", "StrictEvalArgumentsBinding", "StrictFunction", "EmptyTypeArguments", "EmptyTypeParameters", "ConstructorHasTypeParameters", "UnsupportedParameterPropertyKind", "UnexpectedParameterModifier", "MixedLabeledAndUnlabeledElements", "InvalidTupleMemberLabel", "NonClassMethodPropertyHasAbstractModifer", "ReadonlyForMethodSignature", "ClassMethodHasDeclare", "ClassMethodHasReadonly", "InvalidModifierOnTypeMember", "DuplicateAccessibilityModifier", "IndexSignatureHasDeclare", "DecoratorExportClass", "ParamDupe", "InvalidDecimal", "RestTrailingComma", "UnsupportedParameterDecorator", "UnterminatedJsxContent", "UnexpectedReservedWord", "ModuleAttributesWithDuplicateKeys", "LineTerminatorBeforeArrow", "InvalidEscapeSequenceTemplate", "NonAbstractClassHasAbstractMethod", "UnsupportedPropertyDecorator", "OptionalTypeBeforeRequired", "PatternIsOptional", "OptionalBindingPattern", "DeclareClassFieldHasInitializer", "TypeImportCannotSpecifyDefaultAndNamed", "DeclareFunctionHasImplementation", "ConstructorClassField", "VarRedeclaration", "InvalidPrivateFieldResolution", "DuplicateExport"]), xo = We(nd), go = We(od), Po = We(hd), pd = We(ud);
        Ho.exports = { parsers: Object.assign(Object.assign({ babel: xo, "babel-flow": We($o), "babel-ts": go }, ed), {}, { __js_expression: Po, __vue_expression: Po, __vue_ts_expression: pd, __vue_event_binding: xo, __vue_ts_event_binding: go, __babel_estree: We(ld) }) };
      });
      return fd();
    });
  }
});
export default require_parser_babel();
//# sourceMappingURL=prettier_parser-babel.js.map
