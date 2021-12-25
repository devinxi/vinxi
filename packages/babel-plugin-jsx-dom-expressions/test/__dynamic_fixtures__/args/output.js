import { createComponent as _$createComponent } from "r-custom";
import { setProp as _$setProp } from "r-custom";
import { effect as _$effect } from "r-custom";
import { memo as _$memo } from "r-custom";
import { createElement as _$createElement } from "r-custom";

const el = _$createElement("mesh", 1);

const el1 = () => _$createElement("mesh", 1);

const el2 = props => _$memo(() => _$createElement("mesh", props.args))();

const el3 = props =>
  (() => {
    const _el$4 = _$createElement("mesh", 1);

    _$effect(_$p => _$setProp(_el$4, "color", props.color, _$p));

    return _el$4;
  })();

_$createComponent(Mesh, {
  get children() {
    return [
      _$memo(() => _$createElement("geometry", [props.width, props.height]))(),
      _$memo(() => _$createElement("geometry", [props.width, props.height]))()
    ];
  }
});

_$createComponent(Mesh, {
  get children() {
    return _$memo(() => _$createElement("geometry", [props.width, props.height]));
  }
});

_$createComponent(Mesh, {
  get children() {
    return _$memo(() => _$createElement("geometry", [props.width, props.height]));
  }
});
