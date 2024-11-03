import { R as React, h as helmetPkg, j as jsxRuntimeExports, r as reactExports, a as React$1, b as reactDomExports, c as ReactDOM, _ as __assign, d as __rest, e as __spreadArray, u as useDashboards } from "./index-DoVJ9qZQ.js";
const { Helmet: HelmetHead } = helmetPkg;
const EXCLUDE_PROPS = ["charSet"];
const propToMetaTag = (parentKey, parentValue, options) => {
  if (Array.isArray(parentValue)) {
    return parentValue.flatMap((value) => {
      return propToMetaTag(parentKey, value, options);
    });
  } else if (typeof parentValue === "object") {
    return Object.entries(parentValue).filter(([_2, v2]) => v2 !== null).flatMap(([key, value]) => {
      return propToMetaTag(`${parentKey}:${key}`, value, { attr: "property" });
    });
  } else {
    const attributes = {
      [options["attr"]]: parentKey,
      content: parentValue
    };
    return /* @__PURE__ */ React.createElement("meta", { ...attributes });
  }
};
const Metadata = (props) => {
  const { children, ...metaProps } = props;
  let Head = HelmetHead;
  const tags = Object.entries(metaProps).filter(
    ([key, value]) => !EXCLUDE_PROPS.includes(key) && value !== null && (key !== "og" || value !== true)
  ).flatMap(([key, value]) => {
    return propToMetaTag(key, value, { attr: "name" });
  }).filter((tag) => !!tag);
  if (metaProps.title) {
    [metaProps.title].flat().reverse().map((title) => {
      tags.unshift(/* @__PURE__ */ React.createElement("title", null, title));
    });
  }
  if (metaProps.charSet) {
    tags.push(/* @__PURE__ */ React.createElement("meta", { charSet: metaProps.charSet }));
  }
  if (metaProps.og) {
    if (metaProps.title && !metaProps.og.title && metaProps.og.title !== null) {
      tags.push(/* @__PURE__ */ React.createElement("meta", { property: "og:title", content: metaProps.title }));
    }
    if (metaProps.description && !metaProps.og.description && metaProps.og.description !== null) {
      tags.push(
        /* @__PURE__ */ React.createElement("meta", { property: "og:description", content: metaProps.description })
      );
    }
    if (!metaProps.og.type && metaProps.og.type !== null) {
      tags.push(/* @__PURE__ */ React.createElement("meta", { property: "og:type", content: "website" }));
    }
  }
  return /* @__PURE__ */ React.createElement(Head, null, tags.map((tag, i2) => React.cloneElement(tag, { key: i2 })), children);
};
const getDashboards = () => {
  let dashboards;
  if (localStorage.getItem("dashboards") === null) {
    dashboards = [];
  } else {
    dashboards = JSON.parse(localStorage.getItem("dashboards"));
  }
  return dashboards;
};
const createTask = ({
  name,
  description
}) => {
  const dashboards = getDashboards();
  const lastId = dashboards.find((dashboard) => dashboard.current).tasks.at(-1).id;
  const newDashboards = dashboards.map((dashboard) => {
    if (dashboard.current) {
      return {
        ...dashboard,
        tasks: [...dashboard.tasks, {
          id: lastId + 1,
          name,
          description,
          status: "drawer"
        }]
      };
    }
    return dashboard;
  });
  localStorage.setItem("dashboards", JSON.stringify(newDashboards));
};
const deleteTask = (taskId) => {
  console.log(taskId);
  const dashboards = getDashboards();
  const newDashboards = dashboards.map((dashboard) => {
    if (dashboard.current) {
      return {
        ...dashboard,
        tasks: dashboard.tasks.filter((task) => task.id !== taskId)
      };
    }
    return dashboard;
  });
  console.log(newDashboards);
  localStorage.setItem("dashboards", JSON.stringify(newDashboards));
};
const Task = ({
  task
}) => {
  var _a;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cursor-pointer p-2 text-purple-100 hover:bg-red-200/5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: task.name }),
    ((_a = task.tags) == null ? void 0 : _a.length) && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex justify-end gap-1 text-sm", children: task.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-slate-400", children: tag }, tag)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs", onClick: () => deleteTask(task.id), children: "x" })
  ] });
};
const Completed = ({
  tasks
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative col-start-1 col-end-4 row-start-1 row-end-3 rounded border border-lime-400 px-2 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 -top-3 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mx-2 bg-slate-800 px-1 text-center text-lime-400", children: [
    "[",
    tasks.length,
    "]COMPLETED"
  ] }) }) });
};
var dist = { exports: {} };
var index_cjs = {};
var e = reactExports, t = (e2) => "checkbox" === e2.type, r$2 = (e2) => e2 instanceof Date, s = (e2) => null == e2;
const a = (e2) => "object" == typeof e2;
var i = (e2) => !s(e2) && !Array.isArray(e2) && a(e2) && !r$2(e2), n = (e2) => i(e2) && e2.target ? t(e2.target) ? e2.target.checked : e2.target.value : e2, o = (e2, t2) => e2.has(((e3) => e3.substring(0, e3.search(/\.\d+(\.|$)/)) || e3)(t2)), u = (e2) => {
  const t2 = e2.constructor && e2.constructor.prototype;
  return i(t2) && t2.hasOwnProperty("isPrototypeOf");
}, l = "undefined" != typeof window && void 0 !== window.HTMLElement && "undefined" != typeof document;
function d(e2) {
  let t2;
  const r2 = Array.isArray(e2);
  if (e2 instanceof Date) t2 = new Date(e2);
  else if (e2 instanceof Set) t2 = new Set(e2);
  else {
    if (l && (e2 instanceof Blob || e2 instanceof FileList) || !r2 && !i(e2)) return e2;
    if (t2 = r2 ? [] : {}, r2 || u(e2)) for (const r3 in e2) e2.hasOwnProperty(r3) && (t2[r3] = d(e2[r3]));
    else t2 = e2;
  }
  return t2;
}
var c = (e2) => Array.isArray(e2) ? e2.filter(Boolean) : [], f = (e2) => void 0 === e2, m = (e2, t2, r2) => {
  if (!t2 || !i(e2)) return r2;
  const a2 = c(t2.split(/[,[\].]+?/)).reduce((e3, t3) => s(e3) ? e3 : e3[t3], e2);
  return f(a2) || a2 === e2 ? f(e2[t2]) ? r2 : e2[t2] : a2;
}, y = (e2) => "boolean" == typeof e2, p = (e2) => /^\w*$/.test(e2), _ = (e2) => c(e2.replace(/["|']|\]/g, "").split(/\.|\[/)), g = (e2, t2, r2) => {
  let s2 = -1;
  const a2 = p(t2) ? [t2] : _(t2), n2 = a2.length, o2 = n2 - 1;
  for (; ++s2 < n2; ) {
    const t3 = a2[s2];
    let n3 = r2;
    if (s2 !== o2) {
      const r3 = e2[t3];
      n3 = i(r3) || Array.isArray(r3) ? r3 : isNaN(+a2[s2 + 1]) ? {} : [];
    }
    if ("__proto__" === t3) return;
    e2[t3] = n3, e2 = e2[t3];
  }
  return e2;
};
const v = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" }, h = { onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all" }, b = "max", x = "min", A = "maxLength", F = "minLength", V = "pattern", S = "required", w = "validate", k = e.createContext(null), D = () => e.useContext(k);
var C = (e2, t2, r2, s2 = true) => {
  const a2 = { defaultValues: t2._defaultValues };
  for (const i2 in e2) Object.defineProperty(a2, i2, { get: () => {
    const a3 = i2;
    return t2._proxyFormState[a3] !== h.all && (t2._proxyFormState[a3] = !s2 || h.all), r2 && (r2[a3] = true), e2[a3];
  } });
  return a2;
}, E = (e2) => i(e2) && !Object.keys(e2).length, O = (e2, t2, r2, s2) => {
  r2(e2);
  const { name: a2, ...i2 } = e2;
  return E(i2) || Object.keys(i2).length >= Object.keys(t2).length || Object.keys(i2).find((e3) => t2[e3] === (!s2 || h.all));
}, j = (e2) => Array.isArray(e2) ? e2 : [e2], U = (e2, t2, r2) => !e2 || !t2 || e2 === t2 || j(e2).some((e3) => e3 && (r2 ? e3 === t2 : e3.startsWith(t2) || t2.startsWith(e3)));
function T(t2) {
  const r2 = e.useRef(t2);
  r2.current = t2, e.useEffect(() => {
    const e2 = !t2.disabled && r2.current.subject && r2.current.subject.subscribe({ next: r2.current.next });
    return () => {
      e2 && e2.unsubscribe();
    };
  }, [t2.disabled]);
}
function B(t2) {
  const r2 = D(), { control: s2 = r2.control, disabled: a2, name: i2, exact: n2 } = t2 || {}, [o2, u2] = e.useState(s2._formState), l2 = e.useRef(true), d2 = e.useRef({ isDirty: false, isLoading: false, dirtyFields: false, touchedFields: false, validatingFields: false, isValidating: false, isValid: false, errors: false }), c2 = e.useRef(i2);
  return c2.current = i2, T({ disabled: a2, next: (e2) => l2.current && U(c2.current, e2.name, n2) && O(e2, d2.current, s2._updateFormState) && u2({ ...s2._formState, ...e2 }), subject: s2._subjects.state }), e.useEffect(() => (l2.current = true, d2.current.isValid && s2._updateValid(true), () => {
    l2.current = false;
  }), [s2]), C(o2, s2, d2.current, false);
}
var N = (e2) => "string" == typeof e2, L = (e2, t2, r2, s2, a2) => N(e2) ? (s2 && t2.watch.add(e2), m(r2, e2, a2)) : Array.isArray(e2) ? e2.map((e3) => (s2 && t2.watch.add(e3), m(r2, e3))) : (s2 && (t2.watchAll = true), r2);
function M(t2) {
  const r2 = D(), { control: s2 = r2.control, name: a2, defaultValue: i2, disabled: n2, exact: o2 } = t2 || {}, u2 = e.useRef(a2);
  u2.current = a2, T({ disabled: n2, subject: s2._subjects.values, next: (e2) => {
    U(u2.current, e2.name, o2) && c2(d(L(u2.current, s2._names, e2.values || s2._formValues, false, i2)));
  } });
  const [l2, c2] = e.useState(s2._getWatch(a2, i2));
  return e.useEffect(() => s2._removeUnmounted()), l2;
}
function R(t2) {
  const r2 = D(), { name: s2, disabled: a2, control: i2 = r2.control, shouldUnregister: u2 } = t2, l2 = o(i2._names.array, s2), c2 = M({ control: i2, name: s2, defaultValue: m(i2._formValues, s2, m(i2._defaultValues, s2, t2.defaultValue)), exact: true }), p2 = B({ control: i2, name: s2, exact: true }), _2 = e.useRef(i2.register(s2, { ...t2.rules, value: c2, ...y(t2.disabled) ? { disabled: t2.disabled } : {} }));
  return e.useEffect(() => {
    const e2 = i2._options.shouldUnregister || u2, t3 = (e3, t4) => {
      const r3 = m(i2._fields, e3);
      r3 && r3._f && (r3._f.mount = t4);
    };
    if (t3(s2, true), e2) {
      const e3 = d(m(i2._options.defaultValues, s2));
      g(i2._defaultValues, s2, e3), f(m(i2._formValues, s2)) && g(i2._formValues, s2, e3);
    }
    return () => {
      (l2 ? e2 && !i2._state.action : e2) ? i2.unregister(s2) : t3(s2, false);
    };
  }, [s2, i2, l2, u2]), e.useEffect(() => {
    m(i2._fields, s2) && i2._updateDisabledField({ disabled: a2, fields: i2._fields, name: s2, value: m(i2._fields, s2)._f.value });
  }, [a2, s2, i2]), { field: { name: s2, value: c2, ...y(a2) || p2.disabled ? { disabled: p2.disabled || a2 } : {}, onChange: e.useCallback((e2) => _2.current.onChange({ target: { value: n(e2), name: s2 }, type: v.CHANGE }), [s2]), onBlur: e.useCallback(() => _2.current.onBlur({ target: { value: m(i2._formValues, s2), name: s2 }, type: v.BLUR }), [s2, i2]), ref: e.useCallback((e2) => {
    const t3 = m(i2._fields, s2);
    t3 && e2 && (t3._f.ref = { focus: () => e2.focus(), select: () => e2.select(), setCustomValidity: (t4) => e2.setCustomValidity(t4), reportValidity: () => e2.reportValidity() });
  }, [i2._fields, s2]) }, formState: p2, fieldState: Object.defineProperties({}, { invalid: { enumerable: true, get: () => !!m(p2.errors, s2) }, isDirty: { enumerable: true, get: () => !!m(p2.dirtyFields, s2) }, isTouched: { enumerable: true, get: () => !!m(p2.touchedFields, s2) }, isValidating: { enumerable: true, get: () => !!m(p2.validatingFields, s2) }, error: { enumerable: true, get: () => m(p2.errors, s2) } }) };
}
const P = "post";
var q = (e2, t2, r2, s2, a2) => t2 ? { ...r2[e2], types: { ...r2[e2] && r2[e2].types ? r2[e2].types : {}, [s2]: a2 || true } } : {}, W = () => {
  const e2 = "undefined" == typeof performance ? Date.now() : 1e3 * performance.now();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t2) => {
    const r2 = (16 * Math.random() + e2) % 16 | 0;
    return ("x" == t2 ? r2 : 3 & r2 | 8).toString(16);
  });
}, I = (e2, t2, r2 = {}) => r2.shouldFocus || f(r2.shouldFocus) ? r2.focusName || `${e2}.${f(r2.focusIndex) ? t2 : r2.focusIndex}.` : "", $ = (e2) => ({ isOnSubmit: !e2 || e2 === h.onSubmit, isOnBlur: e2 === h.onBlur, isOnChange: e2 === h.onChange, isOnAll: e2 === h.all, isOnTouch: e2 === h.onTouched }), H = (e2, t2, r2) => !r2 && (t2.watchAll || t2.watch.has(e2) || [...t2.watch].some((t3) => e2.startsWith(t3) && /^\.\w+/.test(e2.slice(t3.length))));
const G = (e2, t2, r2, s2) => {
  for (const a2 of r2 || Object.keys(e2)) {
    const r3 = m(e2, a2);
    if (r3) {
      const { _f: e3, ...n2 } = r3;
      if (e3) {
        if (e3.refs && e3.refs[0] && t2(e3.refs[0], a2) && !s2) return true;
        if (e3.ref && t2(e3.ref, e3.name) && !s2) return true;
        if (G(n2, t2)) break;
      } else if (i(n2) && G(n2, t2)) break;
    }
  }
};
var J = (e2, t2, r2) => {
  const s2 = j(m(e2, r2));
  return g(s2, "root", t2[r2]), g(e2, r2, s2), e2;
}, z = (e2) => "file" === e2.type, K = (e2) => "function" == typeof e2, Q = (e2) => {
  if (!l) return false;
  const t2 = e2 ? e2.ownerDocument : 0;
  return e2 instanceof (t2 && t2.defaultView ? t2.defaultView.HTMLElement : HTMLElement);
}, X = (e2) => N(e2), Y = (e2) => "radio" === e2.type, Z = (e2) => e2 instanceof RegExp;
const ee = { value: false, isValid: false }, te = { value: true, isValid: true };
var re = (e2) => {
  if (Array.isArray(e2)) {
    if (e2.length > 1) {
      const t2 = e2.filter((e3) => e3 && e3.checked && !e3.disabled).map((e3) => e3.value);
      return { value: t2, isValid: !!t2.length };
    }
    return e2[0].checked && !e2[0].disabled ? e2[0].attributes && !f(e2[0].attributes.value) ? f(e2[0].value) || "" === e2[0].value ? te : { value: e2[0].value, isValid: true } : te : ee;
  }
  return ee;
};
const se = { isValid: false, value: null };
var ae = (e2) => Array.isArray(e2) ? e2.reduce((e3, t2) => t2 && t2.checked && !t2.disabled ? { isValid: true, value: t2.value } : e3, se) : se;
function ie(e2, t2, r2 = "validate") {
  if (X(e2) || Array.isArray(e2) && e2.every(X) || y(e2) && !e2) return { type: r2, message: X(e2) ? e2 : "", ref: t2 };
}
var ne = (e2) => i(e2) && !Z(e2) ? e2 : { value: e2, message: "" }, oe = async (e2, r2, a2, n2, o2) => {
  const { ref: u2, refs: l2, required: d2, maxLength: c2, minLength: p2, min: _2, max: g2, pattern: v2, validate: h2, name: k2, valueAsNumber: D2, mount: C2, disabled: O2 } = e2._f, j2 = m(r2, k2);
  if (!C2 || O2) return {};
  const U2 = l2 ? l2[0] : u2, T2 = (e3) => {
    n2 && U2.reportValidity && (U2.setCustomValidity(y(e3) ? "" : e3 || ""), U2.reportValidity());
  }, B2 = {}, L2 = Y(u2), M2 = t(u2), R2 = L2 || M2, P2 = (D2 || z(u2)) && f(u2.value) && f(j2) || Q(u2) && "" === u2.value || "" === j2 || Array.isArray(j2) && !j2.length, W2 = q.bind(null, k2, a2, B2), I2 = (e3, t2, r3, s2 = A, a3 = F) => {
    const i2 = e3 ? t2 : r3;
    B2[k2] = { type: e3 ? s2 : a3, message: i2, ref: u2, ...W2(e3 ? s2 : a3, i2) };
  };
  if (o2 ? !Array.isArray(j2) || !j2.length : d2 && (!R2 && (P2 || s(j2)) || y(j2) && !j2 || M2 && !re(l2).isValid || L2 && !ae(l2).isValid)) {
    const { value: e3, message: t2 } = X(d2) ? { value: !!d2, message: d2 } : ne(d2);
    if (e3 && (B2[k2] = { type: S, message: t2, ref: U2, ...W2(S, t2) }, !a2)) return T2(t2), B2;
  }
  if (!(P2 || s(_2) && s(g2))) {
    let e3, t2;
    const r3 = ne(g2), i2 = ne(_2);
    if (s(j2) || isNaN(j2)) {
      const s2 = u2.valueAsDate || new Date(j2), a3 = (e4) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + e4), n3 = "time" == u2.type, o3 = "week" == u2.type;
      N(r3.value) && j2 && (e3 = n3 ? a3(j2) > a3(r3.value) : o3 ? j2 > r3.value : s2 > new Date(r3.value)), N(i2.value) && j2 && (t2 = n3 ? a3(j2) < a3(i2.value) : o3 ? j2 < i2.value : s2 < new Date(i2.value));
    } else {
      const a3 = u2.valueAsNumber || (j2 ? +j2 : j2);
      s(r3.value) || (e3 = a3 > r3.value), s(i2.value) || (t2 = a3 < i2.value);
    }
    if ((e3 || t2) && (I2(!!e3, r3.message, i2.message, b, x), !a2)) return T2(B2[k2].message), B2;
  }
  if ((c2 || p2) && !P2 && (N(j2) || o2 && Array.isArray(j2))) {
    const e3 = ne(c2), t2 = ne(p2), r3 = !s(e3.value) && j2.length > +e3.value, i2 = !s(t2.value) && j2.length < +t2.value;
    if ((r3 || i2) && (I2(r3, e3.message, t2.message), !a2)) return T2(B2[k2].message), B2;
  }
  if (v2 && !P2 && N(j2)) {
    const { value: e3, message: t2 } = ne(v2);
    if (Z(e3) && !j2.match(e3) && (B2[k2] = { type: V, message: t2, ref: u2, ...W2(V, t2) }, !a2)) return T2(t2), B2;
  }
  if (h2) {
    if (K(h2)) {
      const e3 = ie(await h2(j2, r2), U2);
      if (e3 && (B2[k2] = { ...e3, ...W2(w, e3.message) }, !a2)) return T2(e3.message), B2;
    } else if (i(h2)) {
      let e3 = {};
      for (const t2 in h2) {
        if (!E(e3) && !a2) break;
        const s2 = ie(await h2[t2](j2, r2), U2, t2);
        s2 && (e3 = { ...s2, ...W2(t2, s2.message) }, T2(s2.message), a2 && (B2[k2] = e3));
      }
      if (!E(e3) && (B2[k2] = { ref: U2, ...e3 }, !a2)) return B2;
    }
  }
  return T2(true), B2;
}, ue = (e2, t2) => [...e2, ...j(t2)], le = (e2) => Array.isArray(e2) ? e2.map(() => {
}) : void 0;
function de(e2, t2, r2) {
  return [...e2.slice(0, t2), ...j(r2), ...e2.slice(t2)];
}
var ce = (e2, t2, r2) => Array.isArray(e2) ? (f(e2[r2]) && (e2[r2] = void 0), e2.splice(r2, 0, e2.splice(t2, 1)[0]), e2) : [], fe = (e2, t2) => [...j(t2), ...j(e2)];
var me = (e2, t2) => f(t2) ? [] : function(e3, t3) {
  let r2 = 0;
  const s2 = [...e3];
  for (const e4 of t3) s2.splice(e4 - r2, 1), r2++;
  return c(s2).length ? s2 : [];
}(e2, j(t2).sort((e3, t3) => e3 - t3)), ye = (e2, t2, r2) => {
  [e2[t2], e2[r2]] = [e2[r2], e2[t2]];
};
function pe(e2, t2) {
  const r2 = Array.isArray(t2) ? t2 : p(t2) ? [t2] : _(t2), s2 = 1 === r2.length ? e2 : function(e3, t3) {
    const r3 = t3.slice(0, -1).length;
    let s3 = 0;
    for (; s3 < r3; ) e3 = f(e3) ? s3++ : e3[t3[s3++]];
    return e3;
  }(e2, r2), a2 = r2.length - 1, n2 = r2[a2];
  return s2 && delete s2[n2], 0 !== a2 && (i(s2) && E(s2) || Array.isArray(s2) && function(e3) {
    for (const t3 in e3) if (e3.hasOwnProperty(t3) && !f(e3[t3])) return false;
    return true;
  }(s2)) && pe(e2, r2.slice(0, -1)), e2;
}
var _e = (e2, t2, r2) => (e2[t2] = r2, e2);
var ge = () => {
  let e2 = [];
  return { get observers() {
    return e2;
  }, next: (t2) => {
    for (const r2 of e2) r2.next && r2.next(t2);
  }, subscribe: (t2) => (e2.push(t2), { unsubscribe: () => {
    e2 = e2.filter((e3) => e3 !== t2);
  } }), unsubscribe: () => {
    e2 = [];
  } };
}, ve = (e2) => s(e2) || !a(e2);
function he(e2, t2) {
  if (ve(e2) || ve(t2)) return e2 === t2;
  if (r$2(e2) && r$2(t2)) return e2.getTime() === t2.getTime();
  const s2 = Object.keys(e2), a2 = Object.keys(t2);
  if (s2.length !== a2.length) return false;
  for (const n2 of s2) {
    const s3 = e2[n2];
    if (!a2.includes(n2)) return false;
    if ("ref" !== n2) {
      const e3 = t2[n2];
      if (r$2(s3) && r$2(e3) || i(s3) && i(e3) || Array.isArray(s3) && Array.isArray(e3) ? !he(s3, e3) : s3 !== e3) return false;
    }
  }
  return true;
}
var be = (e2) => "select-multiple" === e2.type, xe = (e2) => Y(e2) || t(e2), Ae = (e2) => Q(e2) && e2.isConnected, Fe = (e2) => {
  for (const t2 in e2) if (K(e2[t2])) return true;
  return false;
};
function Ve(e2, t2 = {}) {
  const r2 = Array.isArray(e2);
  if (i(e2) || r2) for (const r3 in e2) Array.isArray(e2[r3]) || i(e2[r3]) && !Fe(e2[r3]) ? (t2[r3] = Array.isArray(e2[r3]) ? [] : {}, Ve(e2[r3], t2[r3])) : s(e2[r3]) || (t2[r3] = true);
  return t2;
}
function Se(e2, t2, r2) {
  const a2 = Array.isArray(e2);
  if (i(e2) || a2) for (const a3 in e2) Array.isArray(e2[a3]) || i(e2[a3]) && !Fe(e2[a3]) ? f(t2) || ve(r2[a3]) ? r2[a3] = Array.isArray(e2[a3]) ? Ve(e2[a3], []) : { ...Ve(e2[a3]) } : Se(e2[a3], s(t2) ? {} : t2[a3], r2[a3]) : r2[a3] = !he(e2[a3], t2[a3]);
  return r2;
}
var we = (e2, t2) => Se(e2, t2, Ve(t2)), ke = (e2, { valueAsNumber: t2, valueAsDate: r2, setValueAs: s2 }) => f(e2) ? e2 : t2 ? "" === e2 ? NaN : e2 ? +e2 : e2 : r2 && N(e2) ? new Date(e2) : s2 ? s2(e2) : e2;
function De(e2) {
  const r2 = e2.ref;
  if (!(e2.refs ? e2.refs.every((e3) => e3.disabled) : r2.disabled)) return z(r2) ? r2.files : Y(r2) ? ae(e2.refs).value : be(r2) ? [...r2.selectedOptions].map(({ value: e3 }) => e3) : t(r2) ? re(e2.refs).value : ke(f(r2.value) ? e2.ref.value : r2.value, e2);
}
var Ce = (e2, t2, r2, s2) => {
  const a2 = {};
  for (const r3 of e2) {
    const e3 = m(t2, r3);
    e3 && g(a2, r3, e3._f);
  }
  return { criteriaMode: r2, names: [...e2], fields: a2, shouldUseNativeValidation: s2 };
}, Ee = (e2) => f(e2) ? e2 : Z(e2) ? e2.source : i(e2) ? Z(e2.value) ? e2.value.source : e2.value : e2;
const Oe = "AsyncFunction";
var je = (e2) => !(e2 && e2.validate || !(K(e2.validate) && e2.validate.constructor.name === Oe || i(e2.validate) && Object.values(e2.validate).find((e3) => e3.constructor.name === Oe))), Ue = (e2) => e2.mount && (e2.required || e2.min || e2.max || e2.maxLength || e2.minLength || e2.pattern || e2.validate);
function Te(e2, t2, r2) {
  const s2 = m(e2, r2);
  if (s2 || p(r2)) return { error: s2, name: r2 };
  const a2 = r2.split(".");
  for (; a2.length; ) {
    const s3 = a2.join("."), i2 = m(t2, s3), n2 = m(e2, s3);
    if (i2 && !Array.isArray(i2) && r2 !== s3) return { name: r2 };
    if (n2 && n2.type) return { name: s3, error: n2 };
    a2.pop();
  }
  return { name: r2 };
}
var Be = (e2, t2, r2, s2, a2) => !a2.isOnAll && (!r2 && a2.isOnTouch ? !(t2 || e2) : (r2 ? s2.isOnBlur : a2.isOnBlur) ? !e2 : !(r2 ? s2.isOnChange : a2.isOnChange) || e2), Ne = (e2, t2) => !c(m(e2, t2)).length && pe(e2, t2);
const Le = { mode: h.onSubmit, reValidateMode: h.onChange, shouldFocusError: true };
function Me(e2 = {}) {
  let a2, u2 = { ...Le, ...e2 }, p2 = { submitCount: 0, isDirty: false, isLoading: K(u2.defaultValues), isValidating: false, isSubmitted: false, isSubmitting: false, isSubmitSuccessful: false, isValid: false, touchedFields: {}, dirtyFields: {}, validatingFields: {}, errors: u2.errors || {}, disabled: u2.disabled || false }, _2 = {}, b2 = (i(u2.defaultValues) || i(u2.values)) && d(u2.defaultValues || u2.values) || {}, x2 = u2.shouldUnregister ? {} : d(b2), A2 = { action: false, mount: false, watch: false }, F2 = { mount: /* @__PURE__ */ new Set(), unMount: /* @__PURE__ */ new Set(), array: /* @__PURE__ */ new Set(), watch: /* @__PURE__ */ new Set() }, V2 = 0;
  const S2 = { isDirty: false, dirtyFields: false, validatingFields: false, touchedFields: false, isValidating: false, isValid: false, errors: false }, w2 = { values: ge(), array: ge(), state: ge() }, k2 = $(u2.mode), D2 = $(u2.reValidateMode), C2 = u2.criteriaMode === h.all, O2 = async (e3) => {
    if (S2.isValid || e3) {
      const e4 = u2.resolver ? E((await R2()).errors) : await P2(_2, true);
      e4 !== p2.isValid && w2.state.next({ isValid: e4 });
    }
  }, U2 = (e3, t2) => {
    (S2.isValidating || S2.validatingFields) && ((e3 || Array.from(F2.mount)).forEach((e4) => {
      e4 && (t2 ? g(p2.validatingFields, e4, t2) : pe(p2.validatingFields, e4));
    }), w2.state.next({ validatingFields: p2.validatingFields, isValidating: !E(p2.validatingFields) }));
  }, T2 = (e3, t2, r2, s2) => {
    const a3 = m(_2, e3);
    if (a3) {
      const i2 = m(x2, e3, f(r2) ? m(b2, e3) : r2);
      f(i2) || s2 && s2.defaultChecked || t2 ? g(x2, e3, t2 ? i2 : De(a3._f)) : I2(e3, i2), A2.mount && O2();
    }
  }, B2 = (e3, t2, r2, s2, a3) => {
    let i2 = false, n2 = false;
    const o2 = { name: e3 }, u3 = !!(m(_2, e3) && m(_2, e3)._f && m(_2, e3)._f.disabled);
    if (!r2 || s2) {
      S2.isDirty && (n2 = p2.isDirty, p2.isDirty = o2.isDirty = q2(), i2 = n2 !== o2.isDirty);
      const r3 = u3 || he(m(b2, e3), t2);
      n2 = !(u3 || !m(p2.dirtyFields, e3)), r3 || u3 ? pe(p2.dirtyFields, e3) : g(p2.dirtyFields, e3, true), o2.dirtyFields = p2.dirtyFields, i2 = i2 || S2.dirtyFields && n2 !== !r3;
    }
    if (r2) {
      const t3 = m(p2.touchedFields, e3);
      t3 || (g(p2.touchedFields, e3, r2), o2.touchedFields = p2.touchedFields, i2 = i2 || S2.touchedFields && t3 !== r2);
    }
    return i2 && a3 && w2.state.next(o2), i2 ? o2 : {};
  }, M2 = (t2, r2, s2, i2) => {
    const n2 = m(p2.errors, t2), o2 = S2.isValid && y(r2) && p2.isValid !== r2;
    var u3;
    if (e2.delayError && s2 ? (u3 = () => ((e3, t3) => {
      g(p2.errors, e3, t3), w2.state.next({ errors: p2.errors });
    })(t2, s2), a2 = (e3) => {
      clearTimeout(V2), V2 = setTimeout(u3, e3);
    }, a2(e2.delayError)) : (clearTimeout(V2), a2 = null, s2 ? g(p2.errors, t2, s2) : pe(p2.errors, t2)), (s2 ? !he(n2, s2) : n2) || !E(i2) || o2) {
      const e3 = { ...i2, ...o2 && y(r2) ? { isValid: r2 } : {}, errors: p2.errors, name: t2 };
      p2 = { ...p2, ...e3 }, w2.state.next(e3);
    }
  }, R2 = async (e3) => {
    U2(e3, true);
    const t2 = await u2.resolver(x2, u2.context, Ce(e3 || F2.mount, _2, u2.criteriaMode, u2.shouldUseNativeValidation));
    return U2(e3), t2;
  }, P2 = async (e3, t2, r2 = { valid: true }) => {
    for (const s2 in e3) {
      const a3 = e3[s2];
      if (a3) {
        const { _f: e4, ...i2 } = a3;
        if (e4) {
          const i3 = F2.array.has(e4.name), n2 = a3._f && je(a3._f);
          n2 && S2.validatingFields && U2([s2], true);
          const o2 = await oe(a3, x2, C2, u2.shouldUseNativeValidation && !t2, i3);
          if (n2 && S2.validatingFields && U2([s2]), o2[e4.name] && (r2.valid = false, t2)) break;
          !t2 && (m(o2, e4.name) ? i3 ? J(p2.errors, o2, e4.name) : g(p2.errors, e4.name, o2[e4.name]) : pe(p2.errors, e4.name));
        }
        !E(i2) && await P2(i2, t2, r2);
      }
    }
    return r2.valid;
  }, q2 = (e3, t2) => (e3 && t2 && g(x2, e3, t2), !he(re2(), b2)), W2 = (e3, t2, r2) => L(e3, F2, { ...A2.mount ? x2 : f(t2) ? b2 : N(e3) ? { [e3]: t2 } : t2 }, r2, t2), I2 = (e3, r2, a3 = {}) => {
    const i2 = m(_2, e3);
    let n2 = r2;
    if (i2) {
      const a4 = i2._f;
      a4 && (!a4.disabled && g(x2, e3, ke(r2, a4)), n2 = Q(a4.ref) && s(r2) ? "" : r2, be(a4.ref) ? [...a4.ref.options].forEach((e4) => e4.selected = n2.includes(e4.value)) : a4.refs ? t(a4.ref) ? a4.refs.length > 1 ? a4.refs.forEach((e4) => (!e4.defaultChecked || !e4.disabled) && (e4.checked = Array.isArray(n2) ? !!n2.find((t2) => t2 === e4.value) : n2 === e4.value)) : a4.refs[0] && (a4.refs[0].checked = !!n2) : a4.refs.forEach((e4) => e4.checked = e4.value === n2) : z(a4.ref) ? a4.ref.value = "" : (a4.ref.value = n2, a4.ref.type || w2.values.next({ name: e3, values: { ...x2 } })));
    }
    (a3.shouldDirty || a3.shouldTouch) && B2(e3, n2, a3.shouldTouch, a3.shouldDirty, true), a3.shouldValidate && te2(e3);
  }, X2 = (e3, t2, s2) => {
    for (const a3 in t2) {
      const i2 = t2[a3], n2 = `${e3}.${a3}`, o2 = m(_2, n2);
      !F2.array.has(e3) && ve(i2) && (!o2 || o2._f) || r$2(i2) ? I2(n2, i2, s2) : X2(n2, i2, s2);
    }
  }, Y2 = (e3, t2, r2 = {}) => {
    const a3 = m(_2, e3), i2 = F2.array.has(e3), n2 = d(t2);
    g(x2, e3, n2), i2 ? (w2.array.next({ name: e3, values: { ...x2 } }), (S2.isDirty || S2.dirtyFields) && r2.shouldDirty && w2.state.next({ name: e3, dirtyFields: we(b2, x2), isDirty: q2(e3, n2) })) : !a3 || a3._f || s(n2) ? I2(e3, n2, r2) : X2(e3, n2, r2), H(e3, F2) && w2.state.next({ ...p2 }), w2.values.next({ name: A2.mount ? e3 : void 0, values: { ...x2 } });
  }, Z2 = async (t2) => {
    A2.mount = true;
    const r2 = t2.target;
    let s2 = r2.name, i2 = true;
    const o2 = m(_2, s2), l2 = (e3) => {
      i2 = Number.isNaN(e3) || he(e3, m(x2, s2, e3));
    };
    if (o2) {
      let d2, c2;
      const f2 = r2.type ? De(o2._f) : n(t2), y2 = t2.type === v.BLUR || t2.type === v.FOCUS_OUT, h2 = !Ue(o2._f) && !u2.resolver && !m(p2.errors, s2) && !o2._f.deps || Be(y2, m(p2.touchedFields, s2), p2.isSubmitted, D2, k2), b3 = H(s2, F2, y2);
      g(x2, s2, f2), y2 ? (o2._f.onBlur && o2._f.onBlur(t2), a2 && a2(0)) : o2._f.onChange && o2._f.onChange(t2);
      const A3 = B2(s2, f2, y2, false), V3 = !E(A3) || b3;
      if (!y2 && w2.values.next({ name: s2, type: t2.type, values: { ...x2 } }), h2) return S2.isValid && ("onBlur" === e2.mode ? y2 && O2() : O2()), V3 && w2.state.next({ name: s2, ...b3 ? {} : A3 });
      if (!y2 && b3 && w2.state.next({ ...p2 }), u2.resolver) {
        const { errors: e3 } = await R2([s2]);
        if (l2(f2), i2) {
          const t3 = Te(p2.errors, _2, s2), r3 = Te(e3, _2, t3.name || s2);
          d2 = r3.error, s2 = r3.name, c2 = E(e3);
        }
      } else U2([s2], true), d2 = (await oe(o2, x2, C2, u2.shouldUseNativeValidation))[s2], U2([s2]), l2(f2), i2 && (d2 ? c2 = false : S2.isValid && (c2 = await P2(_2, true)));
      i2 && (o2._f.deps && te2(o2._f.deps), M2(s2, c2, d2, A3));
    }
  }, ee2 = (e3, t2) => {
    if (m(p2.errors, t2) && e3.focus) return e3.focus(), 1;
  }, te2 = async (e3, t2 = {}) => {
    let r2, s2;
    const a3 = j(e3);
    if (u2.resolver) {
      const t3 = await (async (e4) => {
        const { errors: t4 } = await R2(e4);
        if (e4) for (const r3 of e4) {
          const e5 = m(t4, r3);
          e5 ? g(p2.errors, r3, e5) : pe(p2.errors, r3);
        }
        else p2.errors = t4;
        return t4;
      })(f(e3) ? e3 : a3);
      r2 = E(t3), s2 = e3 ? !a3.some((e4) => m(t3, e4)) : r2;
    } else e3 ? (s2 = (await Promise.all(a3.map(async (e4) => {
      const t3 = m(_2, e4);
      return await P2(t3 && t3._f ? { [e4]: t3 } : t3);
    }))).every(Boolean), (s2 || p2.isValid) && O2()) : s2 = r2 = await P2(_2);
    return w2.state.next({ ...!N(e3) || S2.isValid && r2 !== p2.isValid ? {} : { name: e3 }, ...u2.resolver || !e3 ? { isValid: r2 } : {}, errors: p2.errors }), t2.shouldFocus && !s2 && G(_2, ee2, e3 ? a3 : F2.mount), s2;
  }, re2 = (e3) => {
    const t2 = { ...A2.mount ? x2 : b2 };
    return f(e3) ? t2 : N(e3) ? m(t2, e3) : e3.map((e4) => m(t2, e4));
  }, se2 = (e3, t2) => ({ invalid: !!m((t2 || p2).errors, e3), isDirty: !!m((t2 || p2).dirtyFields, e3), error: m((t2 || p2).errors, e3), isValidating: !!m(p2.validatingFields, e3), isTouched: !!m((t2 || p2).touchedFields, e3) }), ae2 = (e3, t2, r2) => {
    const s2 = (m(_2, e3, { _f: {} })._f || {}).ref, a3 = m(p2.errors, e3) || {}, { ref: i2, message: n2, type: o2, ...u3 } = a3;
    g(p2.errors, e3, { ...u3, ...t2, ref: s2 }), w2.state.next({ name: e3, errors: p2.errors, isValid: false }), r2 && r2.shouldFocus && s2 && s2.focus && s2.focus();
  }, ie2 = (e3, t2 = {}) => {
    for (const r2 of e3 ? j(e3) : F2.mount) F2.mount.delete(r2), F2.array.delete(r2), t2.keepValue || (pe(_2, r2), pe(x2, r2)), !t2.keepError && pe(p2.errors, r2), !t2.keepDirty && pe(p2.dirtyFields, r2), !t2.keepTouched && pe(p2.touchedFields, r2), !t2.keepIsValidating && pe(p2.validatingFields, r2), !u2.shouldUnregister && !t2.keepDefaultValue && pe(b2, r2);
    w2.values.next({ values: { ...x2 } }), w2.state.next({ ...p2, ...t2.keepDirty ? { isDirty: q2() } : {} }), !t2.keepIsValid && O2();
  }, ne2 = ({ disabled: e3, name: t2, field: r2, fields: s2, value: a3 }) => {
    if (y(e3) && A2.mount || e3) {
      const i2 = e3 ? void 0 : f(a3) ? De(r2 ? r2._f : m(s2, t2)._f) : a3;
      g(x2, t2, i2), B2(t2, i2, false, false, true);
    }
  }, ue2 = (t2, r2 = {}) => {
    let s2 = m(_2, t2);
    const a3 = y(r2.disabled) || y(e2.disabled);
    return g(_2, t2, { ...s2 || {}, _f: { ...s2 && s2._f ? s2._f : { ref: { name: t2 } }, name: t2, mount: true, ...r2 } }), F2.mount.add(t2), s2 ? ne2({ field: s2, disabled: y(r2.disabled) ? r2.disabled : e2.disabled, name: t2, value: r2.value }) : T2(t2, true, r2.value), { ...a3 ? { disabled: r2.disabled || e2.disabled } : {}, ...u2.progressive ? { required: !!r2.required, min: Ee(r2.min), max: Ee(r2.max), minLength: Ee(r2.minLength), maxLength: Ee(r2.maxLength), pattern: Ee(r2.pattern) } : {}, name: t2, onChange: Z2, onBlur: Z2, ref: (e3) => {
      if (e3) {
        ue2(t2, r2), s2 = m(_2, t2);
        const a4 = f(e3.value) && e3.querySelectorAll && e3.querySelectorAll("input,select,textarea")[0] || e3, i2 = xe(a4), n2 = s2._f.refs || [];
        if (i2 ? n2.find((e4) => e4 === a4) : a4 === s2._f.ref) return;
        g(_2, t2, { _f: { ...s2._f, ...i2 ? { refs: [...n2.filter(Ae), a4, ...Array.isArray(m(b2, t2)) ? [{}] : []], ref: { type: a4.type, name: t2 } } : { ref: a4 } } }), T2(t2, false, void 0, a4);
      } else s2 = m(_2, t2, {}), s2._f && (s2._f.mount = false), (u2.shouldUnregister || r2.shouldUnregister) && (!o(F2.array, t2) || !A2.action) && F2.unMount.add(t2);
    } };
  }, le2 = () => u2.shouldFocusError && G(_2, ee2, F2.mount), de2 = (e3, t2) => async (r2) => {
    let s2;
    r2 && (r2.preventDefault && r2.preventDefault(), r2.persist && r2.persist());
    let a3 = d(x2);
    if (w2.state.next({ isSubmitting: true }), u2.resolver) {
      const { errors: e4, values: t3 } = await R2();
      p2.errors = e4, a3 = t3;
    } else await P2(_2);
    if (pe(p2.errors, "root"), E(p2.errors)) {
      w2.state.next({ errors: {} });
      try {
        await e3(a3, r2);
      } catch (e4) {
        s2 = e4;
      }
    } else t2 && await t2({ ...p2.errors }, r2), le2(), setTimeout(le2);
    if (w2.state.next({ isSubmitted: true, isSubmitting: false, isSubmitSuccessful: E(p2.errors) && !s2, submitCount: p2.submitCount + 1, errors: p2.errors }), s2) throw s2;
  }, ce2 = (t2, r2 = {}) => {
    const s2 = t2 ? d(t2) : b2, a3 = d(s2), i2 = E(t2), n2 = i2 ? b2 : a3;
    if (r2.keepDefaultValues || (b2 = s2), !r2.keepValues) {
      if (r2.keepDirtyValues) for (const e3 of F2.mount) m(p2.dirtyFields, e3) ? g(n2, e3, m(x2, e3)) : Y2(e3, m(n2, e3));
      else {
        if (l && f(t2)) for (const e3 of F2.mount) {
          const t3 = m(_2, e3);
          if (t3 && t3._f) {
            const e4 = Array.isArray(t3._f.refs) ? t3._f.refs[0] : t3._f.ref;
            if (Q(e4)) {
              const t4 = e4.closest("form");
              if (t4) {
                t4.reset();
                break;
              }
            }
          }
        }
        _2 = {};
      }
      x2 = e2.shouldUnregister ? r2.keepDefaultValues ? d(b2) : {} : d(n2), w2.array.next({ values: { ...n2 } }), w2.values.next({ values: { ...n2 } });
    }
    F2 = { mount: r2.keepDirtyValues ? F2.mount : /* @__PURE__ */ new Set(), unMount: /* @__PURE__ */ new Set(), array: /* @__PURE__ */ new Set(), watch: /* @__PURE__ */ new Set(), watchAll: false, focus: "" }, A2.mount = !S2.isValid || !!r2.keepIsValid || !!r2.keepDirtyValues, A2.watch = !!e2.shouldUnregister, w2.state.next({ submitCount: r2.keepSubmitCount ? p2.submitCount : 0, isDirty: !i2 && (r2.keepDirty ? p2.isDirty : !(!r2.keepDefaultValues || he(t2, b2))), isSubmitted: !!r2.keepIsSubmitted && p2.isSubmitted, dirtyFields: i2 ? {} : r2.keepDirtyValues ? r2.keepDefaultValues && x2 ? we(b2, x2) : p2.dirtyFields : r2.keepDefaultValues && t2 ? we(b2, t2) : r2.keepDirty ? p2.dirtyFields : {}, touchedFields: r2.keepTouched ? p2.touchedFields : {}, errors: r2.keepErrors ? p2.errors : {}, isSubmitSuccessful: !!r2.keepIsSubmitSuccessful && p2.isSubmitSuccessful, isSubmitting: false });
  }, fe2 = (e3, t2) => ce2(K(e3) ? e3(x2) : e3, t2);
  return { control: { register: ue2, unregister: ie2, getFieldState: se2, handleSubmit: de2, setError: ae2, _executeSchema: R2, _getWatch: W2, _getDirty: q2, _updateValid: O2, _removeUnmounted: () => {
    for (const e3 of F2.unMount) {
      const t2 = m(_2, e3);
      t2 && (t2._f.refs ? t2._f.refs.every((e4) => !Ae(e4)) : !Ae(t2._f.ref)) && ie2(e3);
    }
    F2.unMount = /* @__PURE__ */ new Set();
  }, _updateFieldArray: (e3, t2 = [], r2, s2, a3 = true, i2 = true) => {
    if (s2 && r2) {
      if (A2.action = true, i2 && Array.isArray(m(_2, e3))) {
        const t3 = r2(m(_2, e3), s2.argA, s2.argB);
        a3 && g(_2, e3, t3);
      }
      if (i2 && Array.isArray(m(p2.errors, e3))) {
        const t3 = r2(m(p2.errors, e3), s2.argA, s2.argB);
        a3 && g(p2.errors, e3, t3), Ne(p2.errors, e3);
      }
      if (S2.touchedFields && i2 && Array.isArray(m(p2.touchedFields, e3))) {
        const t3 = r2(m(p2.touchedFields, e3), s2.argA, s2.argB);
        a3 && g(p2.touchedFields, e3, t3);
      }
      S2.dirtyFields && (p2.dirtyFields = we(b2, x2)), w2.state.next({ name: e3, isDirty: q2(e3, t2), dirtyFields: p2.dirtyFields, errors: p2.errors, isValid: p2.isValid });
    } else g(x2, e3, t2);
  }, _updateDisabledField: ne2, _getFieldArray: (t2) => c(m(A2.mount ? x2 : b2, t2, e2.shouldUnregister ? m(b2, t2, []) : [])), _reset: ce2, _resetDefaultValues: () => K(u2.defaultValues) && u2.defaultValues().then((e3) => {
    fe2(e3, u2.resetOptions), w2.state.next({ isLoading: false });
  }), _updateFormState: (e3) => {
    p2 = { ...p2, ...e3 };
  }, _disableForm: (e3) => {
    y(e3) && (w2.state.next({ disabled: e3 }), G(_2, (t2, r2) => {
      const s2 = m(_2, r2);
      s2 && (t2.disabled = s2._f.disabled || e3, Array.isArray(s2._f.refs) && s2._f.refs.forEach((t3) => {
        t3.disabled = s2._f.disabled || e3;
      }));
    }, 0, false));
  }, _subjects: w2, _proxyFormState: S2, _setErrors: (e3) => {
    p2.errors = e3, w2.state.next({ errors: p2.errors, isValid: false });
  }, get _fields() {
    return _2;
  }, get _formValues() {
    return x2;
  }, get _state() {
    return A2;
  }, set _state(e3) {
    A2 = e3;
  }, get _defaultValues() {
    return b2;
  }, get _names() {
    return F2;
  }, set _names(e3) {
    F2 = e3;
  }, get _formState() {
    return p2;
  }, set _formState(e3) {
    p2 = e3;
  }, get _options() {
    return u2;
  }, set _options(e3) {
    u2 = { ...u2, ...e3 };
  } }, trigger: te2, register: ue2, handleSubmit: de2, watch: (e3, t2) => K(e3) ? w2.values.subscribe({ next: (r2) => e3(W2(void 0, t2), r2) }) : W2(e3, t2, true), setValue: Y2, getValues: re2, reset: fe2, resetField: (e3, t2 = {}) => {
    m(_2, e3) && (f(t2.defaultValue) ? Y2(e3, d(m(b2, e3))) : (Y2(e3, t2.defaultValue), g(b2, e3, d(t2.defaultValue))), t2.keepTouched || pe(p2.touchedFields, e3), t2.keepDirty || (pe(p2.dirtyFields, e3), p2.isDirty = t2.defaultValue ? q2(e3, d(m(b2, e3))) : q2()), t2.keepError || (pe(p2.errors, e3), S2.isValid && O2()), w2.state.next({ ...p2 }));
  }, clearErrors: (e3) => {
    e3 && j(e3).forEach((e4) => pe(p2.errors, e4)), w2.state.next({ errors: e3 ? p2.errors : {} });
  }, unregister: ie2, setError: ae2, setFocus: (e3, t2 = {}) => {
    const r2 = m(_2, e3), s2 = r2 && r2._f;
    if (s2) {
      const e4 = s2.refs ? s2.refs[0] : s2.ref;
      e4.focus && (e4.focus(), t2.shouldSelect && e4.select());
    }
  }, getFieldState: se2 };
}
index_cjs.Controller = (e2) => e2.render(R(e2)), index_cjs.Form = function(t2) {
  const r2 = D(), [s2, a2] = e.useState(false), { control: i2 = r2.control, onSubmit: n2, children: o2, action: u2, method: l2 = P, headers: d2, encType: c2, onError: f2, render: y2, onSuccess: p2, validateStatus: _2, ...g2 } = t2, v2 = async (e2) => {
    let r3 = false, s3 = "";
    await i2.handleSubmit(async (t3) => {
      const a3 = new FormData();
      let o3 = "";
      try {
        o3 = JSON.stringify(t3);
      } catch (e3) {
      }
      for (const e3 of i2._names.mount) a3.append(e3, m(t3, e3));
      if (n2 && await n2({ data: t3, event: e2, method: l2, formData: a3, formDataJson: o3 }), u2) try {
        const e3 = [d2 && d2["Content-Type"], c2].some((e4) => e4 && e4.includes("json")), t4 = await fetch(u2, { method: l2, headers: { ...d2, ...c2 ? { "Content-Type": c2 } : {} }, body: e3 ? o3 : a3 });
        t4 && (_2 ? !_2(t4.status) : t4.status < 200 || t4.status >= 300) ? (r3 = true, f2 && f2({ response: t4 }), s3 = String(t4.status)) : p2 && p2({ response: t4 });
      } catch (e3) {
        r3 = true, f2 && f2({ error: e3 });
      }
    })(e2), r3 && t2.control && (t2.control._subjects.state.next({ isSubmitSuccessful: false }), t2.control.setError("root.server", { type: s3 }));
  };
  return e.useEffect(() => {
    a2(true);
  }, []), y2 ? e.createElement(e.Fragment, null, y2({ submit: v2 })) : e.createElement("form", { noValidate: s2, action: u2, method: l2, encType: c2, onSubmit: v2, ...g2 }, o2);
}, index_cjs.FormProvider = (t2) => {
  const { children: r2, ...s2 } = t2;
  return e.createElement(k.Provider, { value: s2 }, r2);
}, index_cjs.appendErrors = q, index_cjs.get = m, index_cjs.set = g, index_cjs.useController = R, index_cjs.useFieldArray = function(t2) {
  const r2 = D(), { control: s2 = r2.control, name: a2, keyName: i2 = "id", shouldUnregister: n2 } = t2, [o2, u2] = e.useState(s2._getFieldArray(a2)), l2 = e.useRef(s2._getFieldArray(a2).map(W)), c2 = e.useRef(o2), f2 = e.useRef(a2), y2 = e.useRef(false);
  f2.current = a2, c2.current = o2, s2._names.array.add(a2), t2.rules && s2.register(a2, t2.rules), T({ next: ({ values: e2, name: t3 }) => {
    if (t3 === f2.current || !t3) {
      const t4 = m(e2, f2.current);
      Array.isArray(t4) && (u2(t4), l2.current = t4.map(W));
    }
  }, subject: s2._subjects.array });
  const p2 = e.useCallback((e2) => {
    y2.current = true, s2._updateFieldArray(a2, e2);
  }, [s2, a2]);
  return e.useEffect(() => {
    if (s2._state.action = false, H(a2, s2._names) && s2._subjects.state.next({ ...s2._formState }), y2.current && (!$(s2._options.mode).isOnSubmit || s2._formState.isSubmitted)) if (s2._options.resolver) s2._executeSchema([a2]).then((e2) => {
      const t3 = m(e2.errors, a2), r3 = m(s2._formState.errors, a2);
      (r3 ? !t3 && r3.type || t3 && (r3.type !== t3.type || r3.message !== t3.message) : t3 && t3.type) && (t3 ? g(s2._formState.errors, a2, t3) : pe(s2._formState.errors, a2), s2._subjects.state.next({ errors: s2._formState.errors }));
    });
    else {
      const e2 = m(s2._fields, a2);
      !e2 || !e2._f || $(s2._options.reValidateMode).isOnSubmit && $(s2._options.mode).isOnSubmit || oe(e2, s2._formValues, s2._options.criteriaMode === h.all, s2._options.shouldUseNativeValidation, true).then((e3) => !E(e3) && s2._subjects.state.next({ errors: J(s2._formState.errors, e3, a2) }));
    }
    s2._subjects.values.next({ name: a2, values: { ...s2._formValues } }), s2._names.focus && G(s2._fields, (e2, t3) => {
      if (s2._names.focus && t3.startsWith(s2._names.focus) && e2.focus) return e2.focus(), 1;
    }), s2._names.focus = "", s2._updateValid(), y2.current = false;
  }, [o2, a2, s2]), e.useEffect(() => (!m(s2._formValues, a2) && s2._updateFieldArray(a2), () => {
    (s2._options.shouldUnregister || n2) && s2.unregister(a2);
  }), [a2, s2, i2, n2]), { swap: e.useCallback((e2, t3) => {
    const r3 = s2._getFieldArray(a2);
    ye(r3, e2, t3), ye(l2.current, e2, t3), p2(r3), u2(r3), s2._updateFieldArray(a2, r3, ye, { argA: e2, argB: t3 }, false);
  }, [p2, a2, s2]), move: e.useCallback((e2, t3) => {
    const r3 = s2._getFieldArray(a2);
    ce(r3, e2, t3), ce(l2.current, e2, t3), p2(r3), u2(r3), s2._updateFieldArray(a2, r3, ce, { argA: e2, argB: t3 }, false);
  }, [p2, a2, s2]), prepend: e.useCallback((e2, t3) => {
    const r3 = j(d(e2)), i3 = fe(s2._getFieldArray(a2), r3);
    s2._names.focus = I(a2, 0, t3), l2.current = fe(l2.current, r3.map(W)), p2(i3), u2(i3), s2._updateFieldArray(a2, i3, fe, { argA: le(e2) });
  }, [p2, a2, s2]), append: e.useCallback((e2, t3) => {
    const r3 = j(d(e2)), i3 = ue(s2._getFieldArray(a2), r3);
    s2._names.focus = I(a2, i3.length - 1, t3), l2.current = ue(l2.current, r3.map(W)), p2(i3), u2(i3), s2._updateFieldArray(a2, i3, ue, { argA: le(e2) });
  }, [p2, a2, s2]), remove: e.useCallback((e2) => {
    const t3 = me(s2._getFieldArray(a2), e2);
    l2.current = me(l2.current, e2), p2(t3), u2(t3), s2._updateFieldArray(a2, t3, me, { argA: e2 });
  }, [p2, a2, s2]), insert: e.useCallback((e2, t3, r3) => {
    const i3 = j(d(t3)), n3 = de(s2._getFieldArray(a2), e2, i3);
    s2._names.focus = I(a2, e2, r3), l2.current = de(l2.current, e2, i3.map(W)), p2(n3), u2(n3), s2._updateFieldArray(a2, n3, de, { argA: e2, argB: le(t3) });
  }, [p2, a2, s2]), update: e.useCallback((e2, t3) => {
    const r3 = d(t3), i3 = _e(s2._getFieldArray(a2), e2, r3);
    l2.current = [...i3].map((t4, r4) => t4 && r4 !== e2 ? l2.current[r4] : W()), p2(i3), u2([...i3]), s2._updateFieldArray(a2, i3, _e, { argA: e2, argB: r3 }, true, false);
  }, [p2, a2, s2]), replace: e.useCallback((e2) => {
    const t3 = j(d(e2));
    l2.current = t3.map(W), p2([...t3]), u2([...t3]), s2._updateFieldArray(a2, [...t3], (e3) => e3, {}, true, false);
  }, [p2, a2, s2]), fields: e.useMemo(() => o2.map((e2, t3) => ({ ...e2, [i2]: l2.current[t3] || W() })), [o2, i2]) };
}, index_cjs.useForm = function(t2 = {}) {
  const r2 = e.useRef(), s2 = e.useRef(), [a2, i2] = e.useState({ isDirty: false, isValidating: false, isLoading: K(t2.defaultValues), isSubmitted: false, isSubmitting: false, isSubmitSuccessful: false, isValid: false, submitCount: 0, dirtyFields: {}, touchedFields: {}, validatingFields: {}, errors: t2.errors || {}, disabled: t2.disabled || false, defaultValues: K(t2.defaultValues) ? void 0 : t2.defaultValues });
  r2.current || (r2.current = { ...Me(t2), formState: a2 });
  const n2 = r2.current.control;
  return n2._options = t2, T({ subject: n2._subjects.state, next: (e2) => {
    O(e2, n2._proxyFormState, n2._updateFormState, true) && i2({ ...n2._formState });
  } }), e.useEffect(() => n2._disableForm(t2.disabled), [n2, t2.disabled]), e.useEffect(() => {
    if (n2._proxyFormState.isDirty) {
      const e2 = n2._getDirty();
      e2 !== a2.isDirty && n2._subjects.state.next({ isDirty: e2 });
    }
  }, [n2, a2.isDirty]), e.useEffect(() => {
    t2.values && !he(t2.values, s2.current) ? (n2._reset(t2.values, n2._options.resetOptions), s2.current = t2.values, i2((e2) => ({ ...e2 }))) : n2._resetDefaultValues();
  }, [t2.values, n2]), e.useEffect(() => {
    t2.errors && n2._setErrors(t2.errors);
  }, [t2.errors, n2]), e.useEffect(() => {
    n2._state.mount || (n2._updateValid(), n2._state.mount = true), n2._state.watch && (n2._state.watch = false, n2._subjects.state.next({ ...n2._formState })), n2._removeUnmounted();
  }), e.useEffect(() => {
    t2.shouldUnregister && n2._subjects.values.next({ values: n2._getWatch() });
  }, [t2.shouldUnregister, n2]), r2.current.formState = C(a2, n2), r2.current;
}, index_cjs.useFormContext = D, index_cjs.useFormState = B, index_cjs.useWatch = M;
var __create$a = Object.create;
var __defProp$c = Object.defineProperty;
var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$c = Object.getOwnPropertyNames;
var __getProtoOf$a = Object.getPrototypeOf;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __export$c = (target, all) => {
  for (var name in all)
    __defProp$c(target, name, { get: all[name], enumerable: true });
};
var __copyProps$c = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$c(from))
      if (!__hasOwnProp$c.call(to, key) && key !== except)
        __defProp$c(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$c(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$a = (mod, isNodeMode, target) => (target = mod != null ? __create$a(__getProtoOf$a(mod)) : {}, __copyProps$c(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$c(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$c = (mod) => __copyProps$c(__defProp$c({}, "__esModule", { value: true }), mod);
var ServerErrorsContext_exports = {};
__export$c(ServerErrorsContext_exports, {
  ServerErrorsContext: () => ServerErrorsContext
});
var ServerErrorsContext_1 = __toCommonJS$c(ServerErrorsContext_exports);
var import_react$a = __toESM$a(reactExports);
const ServerErrorsContext = import_react$a.default.createContext(
  {}
);
var __create$9 = Object.create;
var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$b = Object.getOwnPropertyNames;
var __getProtoOf$9 = Object.getPrototypeOf;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __export$b = (target, all) => {
  for (var name in all)
    __defProp$b(target, name, { get: all[name], enumerable: true });
};
var __copyProps$b = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$b(from))
      if (!__hasOwnProp$b.call(to, key) && key !== except)
        __defProp$b(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$b(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$9 = (mod, isNodeMode, target) => (target = mod != null ? __create$9(__getProtoOf$9(mod)) : {}, __copyProps$b(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$b(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$b = (mod) => __copyProps$b(__defProp$b({}, "__esModule", { value: true }), mod);
var useErrorStyles_exports = {};
__export$b(useErrorStyles_exports, {
  useErrorStyles: () => useErrorStyles
});
var useErrorStyles_1 = __toCommonJS$b(useErrorStyles_exports);
var import_react$9 = __toESM$9(reactExports);
var import_react_hook_form$3 = index_cjs;
var import_ServerErrorsContext$1 = ServerErrorsContext_1;
const useErrorStyles = ({
  name,
  errorClassName,
  errorStyle,
  className,
  style
}) => {
  const {
    formState: { errors },
    setError
  } = (0, import_react_hook_form$3.useFormContext)();
  const serverError = (0, import_react$9.useContext)(import_ServerErrorsContext$1.ServerErrorsContext)[name];
  import_react$9.default.useEffect(() => {
    if (serverError) {
      setError(name, { type: "server", message: serverError });
    }
  }, [serverError, name, setError]);
  const validationError = name ? (0, import_react_hook_form$3.get)(errors, name) : void 0;
  if (validationError) {
    if (errorClassName) {
      className = errorClassName;
    }
    if (errorStyle) {
      style = errorStyle;
    }
  }
  return { className, style };
};
var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$a = Object.getOwnPropertyNames;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __export$a = (target, all) => {
  for (var name in all)
    __defProp$a(target, name, { get: all[name], enumerable: true });
};
var __copyProps$a = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$a(from))
      if (!__hasOwnProp$a.call(to, key) && key !== except)
        __defProp$a(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$a(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS$a = (mod) => __copyProps$a(__defProp$a({}, "__esModule", { value: true }), mod);
var coercion_exports = {};
__export$a(coercion_exports, {
  setCoercion: () => setCoercion
});
var coercion = __toCommonJS$a(coercion_exports);
const isValueEmpty = (val) => val === "";
const SET_VALUE_AS_FUNCTIONS = {
  // valueAsBoolean is commented out as r-h-f does not currently support
  // setValueAs functionality for checkboxes.  May investigate future
  // integration
  /*  valueAsBoolean: {
    // r-h-f returns a boolean if a checkBox type, but also handle string case in case valueAsBoolean is used
    base: (val: boolean | string): boolean => !!val,
    emptyAsNull: (val: boolean | string): boolean | null => (val ? true : null),
    emptyAsUndefined: (val: boolean | string): boolean | undefined =>
      val ? true : undefined,
  },*/
  valueAsDate: {
    emptyAsNull: (val) => isValueEmpty(val) ? null : new Date(val),
    emptyAsUndefined: (val) => isValueEmpty(val) ? void 0 : new Date(val),
    emptyAsString: (val) => isValueEmpty(val) ? "" : new Date(val),
    emptyAsZero: (val) => isValueEmpty(val) ? 0 : new Date(val)
  },
  valueAsJSON: {
    emptyAsNull: (val) => {
      if (isValueEmpty(val)) {
        return null;
      }
      try {
        return JSON.parse(val);
      } catch {
        return NaN;
      }
    },
    emptyAsString: (val) => {
      if (isValueEmpty(val)) {
        return "";
      }
      try {
        return JSON.parse(val);
      } catch {
        return NaN;
      }
    },
    emptyAsUndefined: (val) => {
      if (isValueEmpty(val)) {
        return void 0;
      }
      try {
        return JSON.parse(val);
      } catch {
        return NaN;
      }
    },
    emptyAsZero: (val) => {
      if (isValueEmpty(val)) {
        return 0;
      }
      try {
        return JSON.parse(val);
      } catch {
        return NaN;
      }
    }
  },
  valueAsNumber: {
    emptyAsNull: (val) => isValueEmpty(val) ? null : +val,
    emptyAsUndefined: (val) => isValueEmpty(val) ? void 0 : +val,
    emptyAsNaN: (val) => isValueEmpty(val) ? NaN : +val,
    emptyAsString: (val) => isValueEmpty(val) ? "" : +val,
    emptyAsZero: (val) => isValueEmpty(val) ? 0 : +val
  },
  valueAsString: {
    emptyAsNull: (val) => isValueEmpty(val) ? null : val,
    emptyAsUndefined: (val) => isValueEmpty(val) ? void 0 : val,
    emptyAsString: (val) => isValueEmpty(val) ? "" : val,
    emptyAsZero: (val) => isValueEmpty(val) ? 0 : val
  }
};
const getSetValueAsFn = (type, emptyAs, required, isId) => {
  const typeObj = SET_VALUE_AS_FUNCTIONS[type];
  if (typeObj === void 0) {
    throw Error(`Type ${type} is unsupported.`);
  }
  let fn;
  switch (emptyAs) {
    case null:
      fn = typeObj["emptyAsNull"];
      break;
    case "undefined":
      fn = typeObj["emptyAsUndefined"];
      break;
    case 0:
      fn = typeObj["emptyAsZero"];
      break;
    case "":
      fn = typeObj["emptyAsString"];
      break;
    case void 0:
    default:
      if (required || isId) {
        fn = typeObj.emptyAsNull;
      } else {
        switch (type) {
          case "valueAsNumber":
            fn = typeObj.emptyAsNaN;
            break;
          case "valueAsDate":
          case "valueAsJSON":
            fn = typeObj.emptyAsNull;
            break;
          case "valueAsString":
            fn = typeObj.emptyAsString;
            break;
        }
      }
      break;
  }
  if (fn === void 0) {
    console.error(`emptyAs prop of ${emptyAs} is unsupported for this type.`);
  }
  return fn;
};
const JSONValidation = (val) => typeof val === "number" ? !isNaN(val) : true;
const setCoercion = (validation, { type, name, emptyAs }) => {
  if (validation.setValueAs) {
    return;
  }
  let valueAs;
  if (validation.valueAsBoolean || type === "checkbox") {
    return;
  } else if (validation.valueAsJSON) {
    validation.validate = JSONValidation;
    delete validation.valueAsJSON;
    valueAs = "valueAsJSON";
  } else if (type === "date" || type === "datetime-local" || validation.valueAsDate) {
    valueAs = "valueAsDate";
  } else if (type === "number" || validation.valueAsNumber) {
    valueAs = "valueAsNumber";
    if (validation.valueAsNumber && emptyAs !== void 0) {
      delete validation.valueAsNumber;
    }
  } else {
    valueAs = "valueAsString";
  }
  validation.setValueAs = getSetValueAsFn(
    valueAs,
    // type
    emptyAs,
    // emptyAs
    validation.required !== void 0 && validation.required !== false,
    // required
    (name || "").endsWith("Id")
    // isId
  );
};
var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$9 = Object.getOwnPropertyNames;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __export$9 = (target, all) => {
  for (var name in all)
    __defProp$9(target, name, { get: all[name], enumerable: true });
};
var __copyProps$9 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$9(from))
      if (!__hasOwnProp$9.call(to, key) && key !== except)
        __defProp$9(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$9(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS$9 = (mod) => __copyProps$9(__defProp$9({}, "__esModule", { value: true }), mod);
var useRegister_exports = {};
__export$9(useRegister_exports, {
  useRegister: () => useRegister
});
var useRegister_1 = __toCommonJS$9(useRegister_exports);
var import_react_hook_form$2 = index_cjs;
var import_coercion = coercion;
const useRegister = (props, ref, emptyAs) => {
  const { register } = (0, import_react_hook_form$2.useFormContext)();
  const { name } = props;
  if (!name) {
    throw Error("`name` prop must be provided");
  }
  const validation = props.validation || { required: false };
  (0, import_coercion.setCoercion)(validation, {
    type: props.type,
    name,
    emptyAs
  });
  const {
    ref: _ref,
    onBlur: handleBlur,
    onChange: handleChange,
    ...rest
  } = register(name, validation);
  const onBlur = (event) => {
    var _a;
    handleBlur(event);
    (_a = props.onBlur) == null ? void 0 : _a.call(props, event);
  };
  const onChange = (event) => {
    var _a;
    handleChange(event);
    (_a = props.onChange) == null ? void 0 : _a.call(props, event);
  };
  return {
    ...rest,
    ref: (element) => {
      _ref(element);
      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    },
    onBlur,
    onChange
  };
};
var __create$8 = Object.create;
var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$8 = Object.getOwnPropertyNames;
var __getProtoOf$8 = Object.getPrototypeOf;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __export$8 = (target, all) => {
  for (var name in all)
    __defProp$8(target, name, { get: all[name], enumerable: true });
};
var __copyProps$8 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$8(from))
      if (!__hasOwnProp$8.call(to, key) && key !== except)
        __defProp$8(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$8(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$8 = (mod, isNodeMode, target) => (target = mod != null ? __create$8(__getProtoOf$8(mod)) : {}, __copyProps$8(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$8(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$8 = (mod) => __copyProps$8(__defProp$8({}, "__esModule", { value: true }), mod);
var CheckboxField_exports = {};
__export$8(CheckboxField_exports, {
  CheckboxField: () => CheckboxField
});
var CheckboxField_1 = __toCommonJS$8(CheckboxField_exports);
var import_react$8 = __toESM$8(reactExports);
var import_useErrorStyles$4 = useErrorStyles_1;
var import_useRegister$3 = useRegister_1;
const CheckboxField = (0, import_react$8.forwardRef)(
  ({
    name,
    id,
    // for useErrorStyles
    errorClassName,
    errorStyle,
    className,
    style,
    // for useRegister
    validation,
    onBlur,
    onChange,
    ...rest
  }, ref) => {
    const styles = (0, import_useErrorStyles$4.useErrorStyles)({
      name,
      errorClassName,
      errorStyle,
      className,
      style
    });
    const type = "checkbox";
    const useRegisterReturn = (0, import_useRegister$3.useRegister)(
      {
        name,
        validation,
        onBlur,
        onChange,
        type
      },
      ref
    );
    return /* @__PURE__ */ import_react$8.default.createElement(
      "input",
      {
        id: id || name,
        ...rest,
        type,
        ...styles,
        ...useRegisterReturn
      }
    );
  }
);
var __create$7 = Object.create;
var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$7 = Object.getOwnPropertyNames;
var __getProtoOf$7 = Object.getPrototypeOf;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __export$7 = (target, all) => {
  for (var name in all)
    __defProp$7(target, name, { get: all[name], enumerable: true });
};
var __copyProps$7 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$7(from))
      if (!__hasOwnProp$7.call(to, key) && key !== except)
        __defProp$7(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$7(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$7 = (mod, isNodeMode, target) => (target = mod != null ? __create$7(__getProtoOf$7(mod)) : {}, __copyProps$7(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$7(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$7 = (mod) => __copyProps$7(__defProp$7({}, "__esModule", { value: true }), mod);
var FieldError_exports = {};
__export$7(FieldError_exports, {
  FieldError: () => FieldError
});
var FieldError_1 = __toCommonJS$7(FieldError_exports);
var import_react$7 = __toESM$7(reactExports);
var import_react_hook_form$1 = index_cjs;
const DEFAULT_MESSAGES = {
  required: "is required",
  pattern: "is not formatted correctly",
  minLength: "is too short",
  maxLength: "is too long",
  min: "is too low",
  max: "is too high",
  validate: "is not valid"
};
const FieldError = ({ name, ...rest }) => {
  const {
    formState: { errors }
  } = (0, import_react_hook_form$1.useFormContext)();
  const validationError = (0, import_react_hook_form$1.get)(errors, name);
  const errorMessage = validationError && (validationError.message || `${name} ${DEFAULT_MESSAGES[validationError.type]}`);
  return validationError ? /* @__PURE__ */ import_react$7.default.createElement("span", { ...rest }, errorMessage) : null;
};
var __create$6 = Object.create;
var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$6 = Object.getOwnPropertyNames;
var __getProtoOf$6 = Object.getPrototypeOf;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __export$6 = (target, all) => {
  for (var name in all)
    __defProp$6(target, name, { get: all[name], enumerable: true });
};
var __copyProps$6 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$6(from))
      if (!__hasOwnProp$6.call(to, key) && key !== except)
        __defProp$6(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$6(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$6 = (mod, isNodeMode, target) => (target = mod != null ? __create$6(__getProtoOf$6(mod)) : {}, __copyProps$6(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$6(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$6 = (mod) => __copyProps$6(__defProp$6({}, "__esModule", { value: true }), mod);
var Form_exports = {};
__export$6(Form_exports, {
  Form: () => Form
});
var Form_1 = __toCommonJS$6(Form_exports);
var import_react$6 = __toESM$6(reactExports);
var import_react_hook_form = index_cjs;
var import_ServerErrorsContext = ServerErrorsContext_1;
function FormInner({
  config,
  error: errorProps,
  formMethods: propFormMethods,
  onSubmit,
  children,
  ...rest
}, ref) {
  var _a, _b, _c, _d;
  const hookFormMethods = (0, import_react_hook_form.useForm)(config);
  const formMethods = propFormMethods || hookFormMethods;
  return /* @__PURE__ */ import_react$6.default.createElement(
    "form",
    {
      ref,
      ...rest,
      onSubmit: formMethods.handleSubmit(
        (data, event) => onSubmit == null ? void 0 : onSubmit(data, event)
      )
    },
    /* @__PURE__ */ import_react$6.default.createElement(
      import_ServerErrorsContext.ServerErrorsContext.Provider,
      {
        value: ((_d = (_c = (_b = (_a = errorProps == null ? void 0 : errorProps.graphQLErrors) == null ? void 0 : _a[0]) == null ? void 0 : _b.extensions) == null ? void 0 : _c.properties) == null ? void 0 : _d.messages) || {}
      },
      /* @__PURE__ */ import_react$6.default.createElement(import_react_hook_form.FormProvider, { ...formMethods }, children)
    )
  );
}
const Form = (0, import_react$6.forwardRef)(FormInner);
var __create$5 = Object.create;
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$5 = Object.getOwnPropertyNames;
var __getProtoOf$5 = Object.getPrototypeOf;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __export$5 = (target, all) => {
  for (var name in all)
    __defProp$5(target, name, { get: all[name], enumerable: true });
};
var __copyProps$5 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$5(from))
      if (!__hasOwnProp$5.call(to, key) && key !== except)
        __defProp$5(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$5(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$5 = (mod, isNodeMode, target) => (target = mod != null ? __create$5(__getProtoOf$5(mod)) : {}, __copyProps$5(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$5(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$5 = (mod) => __copyProps$5(__defProp$5({}, "__esModule", { value: true }), mod);
var FormError_exports = {};
__export$5(FormError_exports, {
  default: () => FormError_default
});
var FormError_1 = __toCommonJS$5(FormError_exports);
var import_react$5 = __toESM$5(reactExports);
const FormError = ({
  error,
  wrapperClassName,
  wrapperStyle,
  titleClassName,
  titleStyle,
  listClassName,
  listStyle,
  listItemClassName,
  listItemStyle
}) => {
  var _a, _b, _c, _d, _e2;
  if (!error) {
    return null;
  }
  let rootMessage = error.message;
  const messages = [];
  const hasGraphQLError = !!((_a = error.graphQLErrors) == null ? void 0 : _a[0]);
  const hasNetworkError = !!error.networkError && Object.keys(error.networkError).length > 0;
  if (hasGraphQLError) {
    rootMessage = error.graphQLErrors[0].message ?? "Something went wrong";
    if (((_c = (_b = error.graphQLErrors[0]) == null ? void 0 : _b.extensions) == null ? void 0 : _c.code) === "BAD_USER_INPUT") {
      rootMessage = "Errors prevented this form from being saved";
    }
    const properties = (_d = error.graphQLErrors[0].extensions) == null ? void 0 : _d["properties"];
    const propertyMessages = properties == null ? void 0 : properties["messages"];
    if (propertyMessages) {
      for (const e2 in propertyMessages) {
        propertyMessages[e2].forEach((fieldError) => {
          messages.push(fieldError);
        });
      }
    }
  } else if (hasNetworkError) {
    rootMessage = rootMessage ?? "An error has occurred";
    if (Object.prototype.hasOwnProperty.call(error.networkError, "bodyText")) {
      const netErr = error.networkError;
      messages.push(`${netErr.name}: ${netErr.bodyText}`);
    } else if (Object.prototype.hasOwnProperty.call(error.networkError, "result")) {
      const netErr = error.networkError;
      (_e2 = netErr.result.errors) == null ? void 0 : _e2.forEach((error2) => {
        var _a2;
        if (typeof error2.message === "string") {
          if (error2.message.indexOf(";") >= 0) {
            messages.push((_a2 = error2.message) == null ? void 0 : _a2.split(";")[1]);
          } else {
            messages.push(error2.message);
          }
        }
      });
    }
  }
  if (!rootMessage) {
    return null;
  }
  return /* @__PURE__ */ import_react$5.default.createElement("div", { className: wrapperClassName, style: wrapperStyle }, /* @__PURE__ */ import_react$5.default.createElement("p", { className: titleClassName, style: titleStyle }, rootMessage), messages.length > 0 && /* @__PURE__ */ import_react$5.default.createElement("ul", { className: listClassName, style: listStyle }, messages.map((message, index) => /* @__PURE__ */ import_react$5.default.createElement("li", { key: index, className: listItemClassName, style: listItemStyle }, message))));
};
var FormError_default = FormError;
/*!
 * pascalcase <https://github.com/jonschlinkert/pascalcase>
 *
 * Copyright (c) 2015-present, Jon ("Schlink") Schlinkert.
 * Licensed under the MIT License.
 */
const titlecase = (input) => input[0].toLocaleUpperCase() + input.slice(1);
var pascalcase = (value) => {
  if (value === null || value === void 0) return "";
  if (typeof value.toString !== "function") return "";
  let input = value.toString().trim();
  if (input === "") return "";
  if (input.length === 1) return input.toLocaleUpperCase();
  let match = input.match(/[a-zA-Z0-9]+/g);
  if (match) {
    return match.map((m2) => titlecase(m2)).join("");
  }
  return input;
};
var __create$4 = Object.create;
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$4 = Object.getOwnPropertyNames;
var __getProtoOf$4 = Object.getPrototypeOf;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __export$4 = (target, all) => {
  for (var name in all)
    __defProp$4(target, name, { get: all[name], enumerable: true });
};
var __copyProps$4 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$4(from))
      if (!__hasOwnProp$4.call(to, key) && key !== except)
        __defProp$4(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$4(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$4 = (mod, isNodeMode, target) => (target = mod != null ? __create$4(__getProtoOf$4(mod)) : {}, __copyProps$4(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$4(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$4 = (mod) => __copyProps$4(__defProp$4({}, "__esModule", { value: true }), mod);
var InputComponents_exports = {};
__export$4(InputComponents_exports, {
  ButtonField: () => ButtonField,
  ColorField: () => ColorField,
  DateField: () => DateField,
  DatetimeLocalField: () => DatetimeLocalField,
  EmailField: () => EmailField,
  FileField: () => FileField,
  HiddenField: () => HiddenField,
  ImageField: () => ImageField,
  InputField: () => InputField,
  MonthField: () => MonthField,
  NumberField: () => NumberField,
  PasswordField: () => PasswordField,
  RadioField: () => RadioField,
  RangeField: () => RangeField,
  ResetField: () => ResetField,
  SearchField: () => SearchField,
  SubmitField: () => SubmitField,
  TelField: () => TelField,
  TextField: () => TextField,
  TimeField: () => TimeField,
  UrlField: () => UrlField,
  WeekField: () => WeekField
});
var InputComponents_1 = __toCommonJS$4(InputComponents_exports);
var import_react$4 = __toESM$4(reactExports);
var import_pascalcase = __toESM$4(pascalcase);
var import_useErrorStyles$3 = useErrorStyles_1;
var import_useRegister$2 = useRegister_1;
const INPUT_TYPES = [
  "button",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week"
];
const InputField = (0, import_react$4.forwardRef)(
  ({
    name,
    id,
    emptyAs,
    // for useErrorStyles
    errorClassName,
    errorStyle,
    className,
    style,
    // for useRegister
    validation,
    onBlur,
    onChange,
    type,
    ...rest
  }, ref) => {
    const styles = (0, import_useErrorStyles$3.useErrorStyles)({
      name,
      errorClassName,
      errorStyle,
      className,
      style
    });
    const useRegisterReturn = (0, import_useRegister$2.useRegister)(
      {
        name,
        validation,
        onBlur,
        onChange,
        type
      },
      ref,
      emptyAs
    );
    return /* @__PURE__ */ import_react$4.default.createElement(
      "input",
      {
        id: id || name,
        ...rest,
        type,
        ...styles,
        ...useRegisterReturn
      }
    );
  }
);
const InputComponents = {};
INPUT_TYPES.forEach((type) => {
  InputComponents[`${(0, import_pascalcase.default)(type)}Field`] = (0, import_react$4.forwardRef)((props, ref) => /* @__PURE__ */ import_react$4.default.createElement(InputField, { ref, type, ...props }));
});
const {
  ButtonField,
  ColorField,
  DateField,
  DatetimeLocalField,
  EmailField,
  FileField,
  HiddenField,
  ImageField,
  MonthField,
  NumberField,
  PasswordField,
  RadioField,
  RangeField,
  ResetField,
  SearchField,
  SubmitField,
  TelField,
  TextField,
  TimeField,
  UrlField,
  WeekField
} = InputComponents;
var __create$3 = Object.create;
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$3 = Object.getOwnPropertyNames;
var __getProtoOf$3 = Object.getPrototypeOf;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __export$3 = (target, all) => {
  for (var name in all)
    __defProp$3(target, name, { get: all[name], enumerable: true });
};
var __copyProps$3 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$3(from))
      if (!__hasOwnProp$3.call(to, key) && key !== except)
        __defProp$3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$3(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$3 = (mod, isNodeMode, target) => (target = mod != null ? __create$3(__getProtoOf$3(mod)) : {}, __copyProps$3(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$3(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$3 = (mod) => __copyProps$3(__defProp$3({}, "__esModule", { value: true }), mod);
var Label_exports = {};
__export$3(Label_exports, {
  Label: () => Label
});
var Label_1 = __toCommonJS$3(Label_exports);
var import_react$3 = __toESM$3(reactExports);
var import_useErrorStyles$2 = useErrorStyles_1;
const Label = ({
  name,
  children,
  // for useErrorStyles
  errorClassName,
  errorStyle,
  className,
  style,
  ...rest
}) => {
  const styles = (0, import_useErrorStyles$2.useErrorStyles)({
    name,
    errorClassName,
    errorStyle,
    className,
    style
  });
  return /* @__PURE__ */ import_react$3.default.createElement("label", { htmlFor: name, ...rest, ...styles }, children || name);
};
var __create$2 = Object.create;
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$2 = Object.getOwnPropertyNames;
var __getProtoOf$2 = Object.getPrototypeOf;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __export$2 = (target, all) => {
  for (var name in all)
    __defProp$2(target, name, { get: all[name], enumerable: true });
};
var __copyProps$2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$2(from))
      if (!__hasOwnProp$2.call(to, key) && key !== except)
        __defProp$2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$2(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$2 = (mod, isNodeMode, target) => (target = mod != null ? __create$2(__getProtoOf$2(mod)) : {}, __copyProps$2(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$2(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$2 = (mod) => __copyProps$2(__defProp$2({}, "__esModule", { value: true }), mod);
var SelectField_exports = {};
__export$2(SelectField_exports, {
  SelectField: () => SelectField
});
var SelectField_1 = __toCommonJS$2(SelectField_exports);
var import_react$2 = __toESM$2(reactExports);
var import_useErrorStyles$1 = useErrorStyles_1;
var import_useRegister$1 = useRegister_1;
const SelectField = (0, import_react$2.forwardRef)(
  ({
    name,
    id,
    emptyAs,
    // for useErrorStyles
    errorClassName,
    errorStyle,
    className,
    style,
    // for useRegister
    validation,
    onBlur,
    onChange,
    ...rest
  }, ref) => {
    const styles = (0, import_useErrorStyles$1.useErrorStyles)({
      name,
      errorClassName,
      errorStyle,
      className,
      style
    });
    const useRegisterReturn = (0, import_useRegister$1.useRegister)(
      {
        name,
        validation,
        onBlur,
        onChange
      },
      ref,
      emptyAs
    );
    return /* @__PURE__ */ import_react$2.default.createElement("select", { id: id || name, ...rest, ...styles, ...useRegisterReturn });
  }
);
var __create$1 = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __getProtoOf$1 = Object.getPrototypeOf;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __export$1 = (target, all) => {
  for (var name in all)
    __defProp$1(target, name, { get: all[name], enumerable: true });
};
var __copyProps$1 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$1(from))
      if (!__hasOwnProp$1.call(to, key) && key !== except)
        __defProp$1(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$1 = (mod, isNodeMode, target) => (target = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$1(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$1 = (mod) => __copyProps$1(__defProp$1({}, "__esModule", { value: true }), mod);
var Submit_exports = {};
__export$1(Submit_exports, {
  Submit: () => Submit
});
var Submit_1 = __toCommonJS$1(Submit_exports);
var import_react$1 = __toESM$1(reactExports);
const Submit = (0, import_react$1.forwardRef)((props, ref) => /* @__PURE__ */ import_react$1.default.createElement("button", { ref, type: "submit", ...props }));
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var TextAreaField_exports = {};
__export(TextAreaField_exports, {
  TextAreaField: () => TextAreaField
});
var TextAreaField_1 = __toCommonJS(TextAreaField_exports);
var import_react = __toESM(reactExports);
var import_useErrorStyles = useErrorStyles_1;
var import_useRegister = useRegister_1;
const TextAreaField = (0, import_react.forwardRef)(
  ({
    name,
    id,
    emptyAs,
    // for useErrorStyles
    errorClassName,
    errorStyle,
    className,
    style,
    // for useRegister
    validation,
    onBlur,
    onChange,
    ...rest
  }, ref) => {
    const styles = (0, import_useErrorStyles.useErrorStyles)({
      name,
      errorClassName,
      errorStyle,
      className,
      style
    });
    const useRegisterReturn = (0, import_useRegister.useRegister)(
      {
        name,
        validation,
        onBlur,
        onChange
      },
      ref,
      emptyAs
    );
    return /* @__PURE__ */ import_react.default.createElement("textarea", { id: id || name, ...rest, ...styles, ...useRegisterReturn });
  }
);
(function(module) {
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export2 = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps2 = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default"));
  var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
  var src_exports = {};
  __export2(src_exports, {
    ButtonField: () => import_InputComponents.ButtonField,
    CheckboxField: () => import_CheckboxField.CheckboxField,
    ColorField: () => import_InputComponents.ColorField,
    DateField: () => import_InputComponents.DateField,
    DatetimeLocalField: () => import_InputComponents.DatetimeLocalField,
    EmailField: () => import_InputComponents.EmailField,
    FieldError: () => import_FieldError.FieldError,
    FileField: () => import_InputComponents.FileField,
    Form: () => import_Form.Form,
    FormError: () => import_FormError.default,
    FormProps: () => import_Form.FormProps,
    HiddenField: () => import_InputComponents.HiddenField,
    ImageField: () => import_InputComponents.ImageField,
    InputField: () => import_InputComponents.InputField,
    Label: () => import_Label.Label,
    MonthField: () => import_InputComponents.MonthField,
    NumberField: () => import_InputComponents.NumberField,
    PasswordField: () => import_InputComponents.PasswordField,
    RadioField: () => import_InputComponents.RadioField,
    RangeField: () => import_InputComponents.RangeField,
    ResetField: () => import_InputComponents.ResetField,
    SearchField: () => import_InputComponents.SearchField,
    SelectField: () => import_SelectField.SelectField,
    ServerErrorsContext: () => import_ServerErrorsContext2.ServerErrorsContext,
    Submit: () => import_Submit.Submit,
    SubmitField: () => import_InputComponents.SubmitField,
    TelField: () => import_InputComponents.TelField,
    TextAreaField: () => import_TextAreaField.TextAreaField,
    TextField: () => import_InputComponents.TextField,
    TimeField: () => import_InputComponents.TimeField,
    UrlField: () => import_InputComponents.UrlField,
    WeekField: () => import_InputComponents.WeekField,
    useErrorStyles: () => import_useErrorStyles2.useErrorStyles,
    useRegister: () => import_useRegister2.useRegister
  });
  module.exports = __toCommonJS2(src_exports);
  __reExport(src_exports, index_cjs, module.exports);
  var import_CheckboxField = CheckboxField_1;
  var import_FieldError = FieldError_1;
  var import_Form = Form_1;
  var import_FormError = __toESM2(FormError_1);
  var import_InputComponents = InputComponents_1;
  var import_Label = Label_1;
  var import_SelectField = SelectField_1;
  var import_ServerErrorsContext2 = ServerErrorsContext_1;
  var import_Submit = Submit_1;
  var import_TextAreaField = TextAreaField_1;
  var import_useErrorStyles2 = useErrorStyles_1;
  var import_useRegister2 = useRegister_1;
})(dist);
var distExports = dist.exports;
const NewTaskForm = ({
  onSuccess,
  on
}) => {
  return (
    // <div className="form-wrapper fixed bottom-0 left-0 right-0 top-0 grid grid-cols-1 grid-rows-1 place-content-center place-items-center">
    /* @__PURE__ */ jsxRuntimeExports.jsxs(distExports.Form, { className: "grid h-60 w-full grid-cols-3 grid-rows-5 gap-8 rounded-sm border-sky-700 bg-slate-800 text-purple-200", onSubmit: (task) => createTask(task), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-start-1 col-end-4 row-start-2 flex justify-between gap-x-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(distExports.TextField, { className: "w-full max-w-80", name: "name", validation: {
          required: true
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-start-1 col-end-4 row-start-3 flex justify-between gap-x-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "description", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(distExports.TextAreaField, { className: "h-16 w-full max-w-80", name: "description", validation: {
          required: true
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(distExports.Submit, { className: "absolute bottom-1 left-1 right-1 rounded-sm bg-sky-400 text-center text-purple-200 hover:bg-sky-400/95 hover:text-white", children: "Create" })
    ] })
  );
};
function createContext2(rootComponentName, defaultContext) {
  const Context = reactExports.createContext(defaultContext);
  const Provider = (props) => {
    const { children, ...context } = props;
    const value = reactExports.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
  };
  Provider.displayName = rootComponentName + "Provider";
  function useContext2(consumerName) {
    const context = reactExports.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  return [Provider, useContext2];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      var _a;
      const { scope, children, ...context } = props;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      var _a;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}
var useLayoutEffect2 = Boolean(globalThis == null ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
};
var useReactId = React$1["useId".toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
  const [id, setId] = reactExports.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}
function useCallbackRef$1(callback) {
  const callbackRef = reactExports.useRef(callback);
  reactExports.useEffect(() => {
    callbackRef.current = callback;
  });
  return reactExports.useMemo(() => (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, []);
}
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  }
}) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef$1(onChange);
  const setValue = reactExports.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue;
        const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
        if (value2 !== prop) handleChange(value2);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const uncontrolledState = reactExports.useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = reactExports.useRef(value);
  const handleChange = useCallbackRef$1(onChange);
  reactExports.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);
  return uncontrolledState;
}
var Slot = reactExports.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = reactExports.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (reactExports.Children.count(newElement) > 1) return reactExports.Children.only(null);
        return reactExports.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children: reactExports.isValidElement(newElement) ? reactExports.cloneElement(newElement, void 0, newChildren) : null });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, { ...slotProps, ref: forwardedRef, children });
});
Slot.displayName = "Slot";
var SlotClone = reactExports.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (reactExports.isValidElement(children)) {
    const childrenRef = getElementRef$1(children);
    return reactExports.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef
    });
  }
  return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
};
function isSlottable(child) {
  return reactExports.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef$1(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) reactDomExports.flushSync(() => target.dispatchEvent(event));
}
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const onEscapeKeyDown = useCallbackRef$1(onEscapeKeyDownProp);
  reactExports.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = reactExports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = reactExports.useContext(DismissableLayerContext);
    const [node, setNode] = reactExports.useState(null);
    const ownerDocument = (node == null ? void 0 : node.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document);
    const [, force] = reactExports.useState({});
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
      onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside == null ? void 0 : onFocusOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index === context.layers.size - 1;
      if (!isHighestLayer) return;
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    reactExports.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    reactExports.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    reactExports.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = reactExports.forwardRef((props, forwardedRef) => {
  const context = reactExports.useContext(DismissableLayerContext);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
  const isPointerInsideReactTreeRef = reactExports.useRef(false);
  const handleClickRef = reactExports.useRef(() => {
  });
  reactExports.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handleFocusOutside = useCallbackRef$1(onFocusOutside);
  const isFocusInsideReactTreeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = reactExports.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = reactExports.useState(null);
  const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
  const lastFocusedElementRef = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
  const focusScope = reactExports.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  reactExports.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body) return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0) focus(container);
        }
      };
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container) mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  reactExports.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (!loop && !trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget;
        const [first, last] = getTabbableEdges(container2);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2) event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop) focus(first, { select: true });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop) focus(last, { select: true });
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container })) return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope == null ? void 0 : activeFocusScope.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _a;
      stack = arrayRemove(stack, focusScope);
      (_a = stack[0]) == null ? void 0 : _a.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);
  if (index !== -1) {
    updatedArray.splice(index, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}
var PORTAL_NAME$2 = "Portal";
var Portal$1 = reactExports.forwardRef((props, forwardedRef) => {
  var _a;
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = reactExports.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return container ? ReactDOM.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal$1.displayName = PORTAL_NAME$2;
function useStateMachine(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : reactExports.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? reactExports.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = reactExports.useState();
  const stylesRef = reactExports.useRef({});
  const prevPresentRef = reactExports.useRef(present);
  const prevAnimationNameRef = reactExports.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  reactExports.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || (styles == null ? void 0 : styles.display) === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: reactExports.useCallback((node2) => {
      if (node2) stylesRef.current = getComputedStyle(node2);
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return (styles == null ? void 0 : styles.animationName) || "none";
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var count = 0;
function useFocusGuards() {
  reactExports.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count++;
    return () => {
      if (count === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}
function useCallbackRef(initialValue, callback) {
  var ref = reactExports.useState(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}
function ItoI(a2) {
  return a2;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x2) {
          return x2 !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x2) {
          return cb(x2);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x2) {
          pendingQueue.push(x2);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign({ async: true, ssr: false }, options);
  return medium;
}
var SideCar$1 = function(_a) {
  var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return reactExports.createElement(Target, __assign({}, rest));
};
SideCar$1.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar$1;
}
var effectCar = createSidecarMedium();
var nothing = function() {
  return;
};
var RemoveScroll = reactExports.forwardRef(function(props, parentRef) {
  var ref = reactExports.useRef(null);
  var _a = reactExports.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    enabled && reactExports.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? reactExports.cloneElement(reactExports.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : reactExports.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};
var getNonce = function() {
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    reactExports.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x2) {
  return parseInt(x2 || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  reactExports.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = reactExports.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return reactExports.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    var options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var nonPassive = passiveSupported ? { passive: false } : false;
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host;
    } else {
      target = target.parentNode;
    }
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (Math.abs(availableScroll) < 1 || !noOverscroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (Math.abs(availableScrollTop) < 1 || !noOverscroll)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x2, y2) {
  return x2[0] === y2[0] && x2[1] === y2[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = reactExports.useRef([]);
  var touchStartRef = reactExports.useRef([0, 0]);
  var activeAxis = reactExports.useRef();
  var id = reactExports.useState(idCounter++)[0];
  var Style2 = reactExports.useState(styleSingleton)[0];
  var lastProps = reactExports.useRef(props);
  reactExports.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  reactExports.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = reactExports.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = reactExports.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e2) {
      return e2.name === event.type && (e2.target === event.target || event.target === e2.shadowParent) && deltaCompare(e2.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = reactExports.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e2) {
        return e2 !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = reactExports.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = reactExports.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = reactExports.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  reactExports.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    inert ? reactExports.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? reactExports.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}
const SideCar = exportSidecar(effectCar, RemoveScrollSideCar);
var ReactRemoveScroll = reactExports.forwardRef(function(props, ref) {
  return reactExports.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: SideCar }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x2) {
    return Boolean(x2);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e2) {
          console.error("aria-hidden: cannot operate on ", node, e2);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = reactExports.useRef(null);
  const contentRef = reactExports.useRef(null);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME$1 = "DialogTrigger";
var DialogTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME$1, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME$1;
var PORTAL_NAME$1 = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME$1, {
  forceMount: void 0
});
var DialogPortal = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME$1, __scopeDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider, { scope: __scopeDialog, forceMount, children: reactExports.Children.map(children, (child) => /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { asChild: true, container, children: child }) })) });
};
DialogPortal.displayName = PORTAL_NAME$1;
var OVERLAY_NAME$1 = "DialogOverlay";
var DialogOverlay = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME$1, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME$1, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay.displayName = OVERLAY_NAME$1;
var DialogOverlayImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME$1, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { as: Slot, allowPinchZoom: true, shards: [context.contentRef], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          "data-state": getState(context.open),
          ...overlayProps,
          ref: forwardedRef,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }
);
var CONTENT_NAME$1 = "DialogContent";
var DialogContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME$1, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentModal, { ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent.displayName = CONTENT_NAME$1;
var DialogContentModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    reactExports.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          var _a;
          event.preventDefault();
          (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }
);
var DialogContentNonModal = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME$1, props.__scopeDialog);
    const hasInteractedOutsideRef = reactExports.useRef(false);
    const hasPointerDownOutsideRef = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _a, _b;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) (_b = context.triggerRef.current) == null ? void 0 : _b.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a, _b;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = (_b = context.triggerRef.current) == null ? void 0 : _b.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var DialogContentImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME$1, __scopeDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FocusScope,
        {
          asChild: true,
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DismissableLayer,
            {
              role: "dialog",
              id: context.contentId,
              "aria-describedby": context.descriptionId,
              "aria-labelledby": context.titleId,
              "data-state": getState(context.open),
              ...contentProps,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false)
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TitleWarning, { titleId: context.titleId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning$1, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME$1 = "DialogTitle";
var DialogTitle = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME$1, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME$1;
var DESCRIPTION_NAME$1 = "DialogDescription";
var DialogDescription = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME$1, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME$1;
var CLOSE_NAME = "DialogClose";
var DialogClose = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME$1,
  titleName: TITLE_NAME$1,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  reactExports.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle) console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning$1 = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  reactExports.useEffect(() => {
    var _a;
    const describedById = (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription) console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Root = Dialog;
var Trigger = DialogTrigger;
var Portal = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext, createAlertDialogScope] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog$1.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { ...dialogScope, ...portalProps });
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var AlertDialogContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = reactExports.useRef(null);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      WarningProvider,
      {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              var _a;
              event.preventDefault();
              (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction$1.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  reactExports.useEffect(() => {
    var _a;
    const hasDescription = document.getElementById(
      (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root2 = AlertDialog$1;
var Trigger2 = AlertDialogTrigger$1;
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Action = AlertDialogAction$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
function r$1(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) for (t2 = 0; t2 < e2.length; t2++) e2[t2] && (f2 = r$1(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
  else for (t2 in e2) e2[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function clsx$1() {
  for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; ) (e2 = arguments[f2++]) && (t2 = r$1(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
const cx = clsx$1;
const cva = (base, config) => {
  return (props) => {
    var ref;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null) return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1) => {
      let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param1;
      return Object.entries(compoundVariantOptions).every((param) => {
        let [key, value] = param;
        return Array.isArray(value) ? value.includes({
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key]) : {
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };
};
function r(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) {
    var o2 = e2.length;
    for (t2 = 0; t2 < o2; t2++) e2[t2] && (f2 = r(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
  } else for (f2 in e2) e2[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = "", o2 = arguments.length; f2 < o2; f2++) (e2 = arguments[f2]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const CLASS_PART_SEPARATOR = "-";
const createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
const createClassMap = (config) => {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = (func) => func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};
const createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = "!";
const createParseClassName = (config) => {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  const parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (experimentalParseClassName) {
    return (className) => experimentalParseClassName({
      className,
      parseClassName
    });
  }
  return parseClassName;
};
const sortModifiers = (modifiers) => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
const createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i2 = 0; i2 < conflictGroups.length; ++i2) {
      const group = conflictGroups[i2];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k2 = 0; k2 < mix.length; k2++) {
    if (mix[k2]) {
      if (resolvedValue = toValue(mix[k2])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = (value) => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = (value) => getIsArbitraryValue(value, "length", isLengthOnly);
const isNumber = (value) => Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = (value) => getIsArbitraryValue(value, "number", isNumber);
const isInteger = (value) => Boolean(value) && Number.isInteger(Number(value));
const isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
const isTshirtSize = (value) => tshirtUnitRegex.test(value);
const sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
const isArbitrarySize = (value) => getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = (value) => getIsArbitraryValue(value, "position", isNever);
const imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
const isArbitraryImage = (value) => getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = (value) => getIsArbitraryValue(value, "", isShadow);
const isAny = () => true;
const getIsArbitraryValue = (value, label, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === "string" ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
const isNever = () => false;
const isShadow = (value) => shadowRegex.test(value);
const isImage = (value) => imageRegex.test(value);
const getDefaultConfig = () => {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space = fromTheme("space");
  const translate = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
  const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...getAlign(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...getAlign(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...getLineStyles(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...getLineStyles(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [borderColor]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
};
const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Button = reactExports.forwardRef(({
  className,
  variant,
  size,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({
    variant,
    size,
    className
  })), ref, ...props });
});
Button.displayName = "Button";
const AlertDialog = Root2;
const AlertDialogTrigger = Trigger2;
const AlertDialogPortal = Portal2;
const AlertDialogOverlay = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay2, { className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80", className), ...props, ref }));
AlertDialogOverlay.displayName = Overlay2.displayName;
const AlertDialogContent = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Content2, { ref, className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-sky-400 bg-slate-800 p-6 shadow-lg duration-200 sm:rounded-sm", className), ...props })
] }));
AlertDialogContent.displayName = Content2.displayName;
const AlertDialogTitle = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Title2, { ref, className: cn("text-lg font-semibold", className), ...props }));
AlertDialogTitle.displayName = Title2.displayName;
const AlertDialogDescription = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Description2, { ref, className: cn("text-muted-foreground text-sm", className), ...props }));
AlertDialogDescription.displayName = Description2.displayName;
const AlertDialogAction = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = Action.displayName;
const AlertDialogCancel = reactExports.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cancel, { ref, className: cn(buttonVariants({
  variant: "outline"
}), "mt-2 sm:mt-0", className), ...props }));
AlertDialogCancel.displayName = Cancel.displayName;
const Drawer = ({
  tasks
}) => {
  const [on, setOn] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative col-start-1 col-end-4 row-start-1 row-end-3 rounded border border-sky-400 px-2 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 -top-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mx-2 bg-slate-800 px-1 text-center text-sky-400", children: [
        "[",
        tasks.length,
        "]DRAWER"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-2 flex bg-slate-800 px-1 text-sm text-sky-400", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "[D|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "T]" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "", children: tasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "my-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Task, { task }) }, task.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { className: "absolute bottom-1 left-1 right-1 rounded-sm bg-sky-400 text-center text-purple-200 hover:bg-sky-400/95 hover:text-white", onClick: () => setOn(!on), children: "+" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContent, { "aria-description": "content", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NewTaskForm, { on }) })
    ] })
  ] });
};
const pickRandomColor = () => {
  const colors = ["#ffa07a", "#e0ffff", "#fffacd", "#ff6b6b", "#4ecdc4", "#f7fff7", "#ff8c42", "#bae8e8", "#e2f0cb", "#ffd3b6"];
  return colors[Math.floor(Math.random() * colors.length)];
};
const StatusGroup = ({
  status,
  tasks
}) => {
  const color = pickRandomColor();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative col-start-1 col-end-4 row-start-1 row-end-3 h-full min-w-80 rounded border-2 px-2 py-4", style: {
    borderColor: color
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 -top-3 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mx-2 bg-slate-800 px-1 text-center", style: {
      color
    }, children: [
      "[",
      tasks.length,
      "]",
      status
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: tasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Task, { task }) }, task.id)) })
  ] });
};
const Tasks = ({
  tasks
}) => {
  const statuses = [...new Set(tasks.map((task) => task.status))];
  console.log(tasks);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: '"tasks" flex flex-grow flex-wrap gap-x-4', children: statuses.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusGroup, { status, tasks: tasks.filter((task) => task.status == status) }) }, status)) });
};
const Dashboard = ({
  tasks
}) => {
  const drawerTasks = tasks.filter((task) => task.status == "drawer");
  const currentTasks = tasks.filter((task) => !["drawer", "completed"].includes(task.status));
  const completedTasks = tasks.filter((task) => task.status == "completed");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: '"dashboard" grid flex-grow grid-cols-12 gap-4', children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer, { tasks: drawerTasks }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-start-4 col-end-13 row-start-1 row-end-3 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tasks, { tasks: currentTasks }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Completed, { tasks: completedTasks })
    ] })
  ] });
};
const Nav = ({
  currentDashboard
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 leading-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mx-4 text-right font-bold text-lime-300", children: currentDashboard.name }) });
};
const HomePage = () => {
  const [{
    dashboards
  }, dispatch] = useDashboards();
  console.log(dashboards);
  const currentDashboard = dashboards.find((d2) => d2.current);
  const tasks = currentDashboard.tasks;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Metadata, { title: "Home", description: "Home page" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: '"body-wrapper" flex h-full flex-col bg-slate-800 p-2', children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { currentDashboard }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, { tasks })
    ] })
  ] });
};
export {
  HomePage as default
};
