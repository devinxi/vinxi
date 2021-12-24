import * as t from "@babel/types";
import { getConfig, getRendererConfig, registerImportMethod } from "./utils";
import { appendTemplates as appendTemplatesDOM } from "../dom/template";
import { appendTemplates as appendTemplatesSSR } from "../ssr/template";
import { addNamed } from "@babel/helper-module-imports";

// add to the top/bottom of the module.
export default path => {
  if (path.scope.data.events) {
    let delegateEvents = registerImportMethod(path, "delegateEvents", getRendererConfig(path, "dom").moduleName);
    path.node.body.push(
      t.expressionStatement(
        t.callExpression(delegateEvents, [
          t.arrayExpression(Array.from(path.scope.data.events).map(e => t.stringLiteral(e)))
        ])
      )
    );
  }
  if (path.scope.data.templates?.length) {
    let domTemplates = path.scope.data.templates.filter(temp => temp.renderer === "dom");
    let ssrTemplates = path.scope.data.templates.filter(temp => temp.renderer === "ssr");
    domTemplates.length > 0 && appendTemplatesDOM(path, domTemplates);
    ssrTemplates.length > 0 && appendTemplatesSSR(path, ssrTemplates);
  }
};
