import { createComponent as _$createComponent } from "r-server";
import { ssrSpread as _$ssrSpread } from "r-server";
import { escape as _$escape } from "r-server";
import { ssr as _$ssr } from "r-server";
const _tmpl$ =
    '<svg width="400" height="180"><rect stroke-width="2" x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:red;stroke:black;stroke-width:5;opacity:0.5"></rect><linearGradient gradientTransform="rotate(25)"><stop offset="0%"></stop></linearGradient></svg>',
  _tmpl$2 = [
    '<svg width="400" height="180"><rect class="',
    '" stroke-width="',
    '" x="',
    '" y="',
    '" rx="20" ry="20" width="150" height="150" style="',
    '"></rect></svg>'
  ],
  _tmpl$3 = ['<svg width="400" height="180"><rect ', "></rect></svg>"],
  _tmpl$4 = '<rect x="50" y="20" width="150" height="150"></rect>',
  _tmpl$5 = [
    '<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg"><a xlink:href="',
    '"><text x="10" y="25">MDN Web Docs</text></a></svg>'
  ],
  _tmpl$6 = [
    '<svg viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg"><text x="10" y="25">',
    "</text></svg>"
  ];

const template = _$ssr(_tmpl$);

const template2 = _$ssr(
  _tmpl$2,
  _$escape(state.name, true),
  _$escape(state.width, true),
  _$escape(state.x, true),
  _$escape(state.y, true),
  "fill:" +
    "red" +
    (";stroke:" + "black") +
    (";stroke-width:" + _$escape(props.stroke, true)) +
    (";opacity:" + 0.5)
);

const template3 = _$ssr(_tmpl$3, _$ssrSpread(props, true, false));

const template4 = _$ssr(_tmpl$4);

const template5 = _$ssr(_tmpl$4);

const template6 = _$createComponent(Component, {
  get children() {
    return _$ssr(_tmpl$4);
  }
});

const template7 = _$ssr(_tmpl$5, _$escape(url, true));

const template8 = _$ssr(_tmpl$6, _$escape(text));
