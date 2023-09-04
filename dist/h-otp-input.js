import { defineComponent as V, watch as k, ref as g, onMounted as P, openBlock as d, createElementBlock as f, normalizeClass as h, Fragment as R, renderList as D, withDirectives as q, normalizeStyle as K, withModifiers as M, vModelDynamic as z } from "vue";
const E = ["element-num", "id", "onUpdate:modelValue", "type", "disabled", "readonly", "onKeyup", "onPaste", "onFocus"], U = /* @__PURE__ */ V({
  __name: "HOtpInput",
  props: {
    length: {
      type: Number,
      required: !0,
      default: 6
    },
    defaultColor: {
      type: String,
      default: "#eeeeee"
    },
    mainColor: {
      type: String,
      default: "#00dc82",
      required: !1
    },
    fontColor: {
      type: String,
      default: "black",
      required: !1
    },
    allowPaste: {
      type: Boolean,
      default: !0,
      required: !1
    },
    onlyNumber: {
      type: Boolean,
      default: !1
    },
    isRefresh: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "password",
      validator: (r) => ["password", "text"].includes(r)
    },
    autoFocus: {
      type: Boolean,
      default: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    wrapperClassName: {
      type: String,
      default: ""
    },
    inputClassName: {
      type: String,
      default: ""
    }
  },
  emits: ["onFinish", "onChange"],
  setup(r, { expose: v, emit: p }) {
    const o = r;
    k(
      () => o.isRefresh,
      () => {
        a.value = [], l[0].focus(), s.value = -1;
      }
    );
    const l = {}, a = g([]), s = g(-1);
    v({
      clear: () => {
        a.value = [], l[0].focus(), s.value = -1;
      }
    });
    const C = (e) => {
      if (!o.onlyNumber)
        return;
      const t = e.charCode || e.keyCode || 0;
      t === 8 || t === 46 || t === 86 || t === 91 || t >= 48 && t <= 57 || t >= 96 && t <= 105 || e.preventDefault();
    }, b = (e, t) => {
      l[e] = t;
    }, B = (e) => `hl-${e + 1}`, y = (e) => `3px solid ${a.value[e] ? o.mainColor : o.defaultColor}`, w = (e) => {
      a.value[e] && a.value[e] !== "" && e < o.length ? (s.value = e + 1, l[e + 1] && l[e + 1].focus()) : e > 0 && (!a.value[e] || a.value[e] === "") && l[e - 1] && (l[e - 1].focus(), s.value = e - 1);
    }, F = (e) => {
      l[e].select();
    }, I = (e) => {
      var t;
      if (o.allowPaste) {
        const i = ((t = e == null ? void 0 : e.clipboardData) == null ? void 0 : t.getData("text/plain")) || "", n = i.split("");
        let u = !0;
        if (o.onlyNumber && (u = new RegExp(`^\\d{${o.length}}$`).test(i)), u) {
          for (let c = 0; c < o.length; c++)
            N(c, n[c]);
          l[o.length - 1].focus(), m();
        }
      }
    }, N = (e, t) => {
      a.value[e] = t;
    }, m = () => {
      const e = a.value.join("");
      p("onChange", e), e.length === o.length && (p("onFinish", e), s.value = -1);
    };
    P(() => {
      o.autoFocus && l && l[0].focus();
    });
    const S = (e) => o.outlined ? {
      outline: $(s.value === e),
      borderBottom: "none",
      borderRadius: "2px"
    } : {
      borderBottom: y(e)
    }, $ = (e) => {
      const t = e ? o.mainColor : o.defaultColor;
      return o.outlined ? `2px solid ${t}` : "none";
    };
    return (e, t) => (d(), f("div", {
      class: h(["hl-input-container m-auto text-center", r.wrapperClassName])
    }, [
      (d(!0), f(R, null, D(r.length, (i, n) => q((d(), f("input", {
        "element-num": i,
        id: B(n),
        ref_for: !0,
        ref: (u) => b(n, u),
        key: n,
        "onUpdate:modelValue": (u) => a.value[n] = u,
        type: r.type,
        maxlength: "1",
        style: K({
          borderBottom: y(n),
          color: r.fontColor,
          ...S(n)
        }),
        class: h(r.inputClassName),
        disabled: r.disabled,
        readonly: r.readonly,
        contenteditable: "true",
        onKeydown: t[0] || (t[0] = (u) => C(u)),
        onKeyup: (u) => w(n),
        onPaste: M(I, ["prevent"]),
        onInput: t[1] || (t[1] = (u) => m()),
        onFocus: (u) => F(n)
      }, null, 46, E)), [
        [z, a.value[n]]
      ])), 128))
    ], 2));
  }
});
export {
  U as HOtpInput
};
