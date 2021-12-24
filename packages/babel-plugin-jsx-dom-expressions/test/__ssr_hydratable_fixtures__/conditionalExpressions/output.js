import { createComponent as _$createComponent } from "r-server";
import { ssr as _$ssr } from "r-server";
import { escape as _$escape } from "r-server";
import { ssrHydrationKey as _$ssrHydrationKey } from "r-server";
const _tmpl$ = ["<div", ">", "</div>"];

const template1 = _$ssr(_tmpl$, _$ssrHydrationKey(), _$escape(simple));

const template2 = _$ssr(_tmpl$, _$ssrHydrationKey(), _$escape(state.dynamic));

const template3 = _$ssr(_tmpl$, _$ssrHydrationKey(), simple ? _$escape(good) : _$escape(bad));

const template4 = _$ssr(_tmpl$, _$ssrHydrationKey(), simple ? _$escape(good()) : _$escape(bad));

const template5 = _$ssr(
  _tmpl$,
  _$ssrHydrationKey(),
  state.dynamic ? _$escape(good()) : _$escape(bad)
);

const template6 = _$ssr(_tmpl$, _$ssrHydrationKey(), state.dynamic && _$escape(good()));

const template7 = _$ssr(
  _tmpl$,
  _$ssrHydrationKey(),
  state.count > 5 ? (state.dynamic ? _$escape(best) : _$escape(good())) : _$escape(bad)
);

const template8 = _$ssr(
  _tmpl$,
  _$ssrHydrationKey(),
  state.dynamic && state.something && _$escape(good())
);

const template9 = _$ssr(
  _tmpl$,
  _$ssrHydrationKey(),
  (state.dynamic && _$escape(good())) || _$escape(bad)
);

const template10 = _$ssr(
  _tmpl$,
  _$ssrHydrationKey(),
  state.a ? "a" : state.b ? "b" : state.c ? "c" : "fallback"
);

const template11 = _$ssr(
  _tmpl$,
  _$ssrHydrationKey(),
  state.a ? _$escape(a()) : state.b ? _$escape(b()) : state.c ? "c" : "fallback"
);

const template12 = _$createComponent(Comp, {
  get render() {
    return state.dynamic ? good() : bad;
  }
}); // no dynamic predicate

const template13 = _$createComponent(Comp, {
  get render() {
    return state.dynamic ? good : bad;
  }
});

const template14 = _$createComponent(Comp, {
  get render() {
    return state.dynamic && good();
  }
}); // no dynamic predicate

const template15 = _$createComponent(Comp, {
  get render() {
    return state.dynamic && good;
  }
});

const template16 = _$createComponent(Comp, {
  get render() {
    return state.dynamic || good();
  }
});

const template17 = _$createComponent(Comp, {
  get render() {
    return state.dynamic ? _$createComponent(Comp, {}) : _$createComponent(Comp, {});
  }
});

const template18 = _$createComponent(Comp, {
  get children() {
    return state.dynamic ? _$createComponent(Comp, {}) : _$createComponent(Comp, {});
  }
});

const template19 = _$ssr(
  _tmpl$,
  _$ssrHydrationKey(),
  state.dynamic ? _$createComponent(Comp, {}) : _$createComponent(Comp, {})
);

const template20 = _$ssr(
  _tmpl$,
  _$ssrHydrationKey(),
  state.dynamic ? _$escape(_$createComponent(Comp, {})) : _$escape(_$createComponent(Comp, {}))
);

const template21 = _$createComponent(Comp, {
  get render() {
    return state?.dynamic ? "a" : "b";
  }
});

const template22 = _$createComponent(Comp, {
  get children() {
    return state?.dynamic ? "a" : "b";
  }
});

const template23 = _$ssr(_tmpl$, _$ssrHydrationKey(), state?.dynamic ? "a" : "b");

const template24 = _$ssr(_tmpl$, _$ssrHydrationKey(), state?.dynamic ? "a" : "b");

const template25 = _$createComponent(Comp, {
  get render() {
    return state.dynamic ?? _$createComponent(Comp, {});
  }
});

const template26 = _$createComponent(Comp, {
  get children() {
    return state.dynamic ?? _$createComponent(Comp, {});
  }
});

const template27 = _$ssr(_tmpl$, _$ssrHydrationKey(), state.dynamic ?? _$createComponent(Comp, {}));

const template28 = _$ssr(
  _tmpl$,
  _$ssrHydrationKey(),
  _$escape(state.dynamic) ?? _$escape(_$createComponent(Comp, {}))
);

const template29 = _$ssr(
  _tmpl$,
  _$ssrHydrationKey(),
  (thing() && _$escape(thing1())) ?? _$escape(thing2()) ?? _$escape(thing3())
);

const template30 = _$ssr(
  _tmpl$,
  _$ssrHydrationKey(),
  _$escape(thing()) || _$escape(thing1()) || _$escape(thing2())
);
