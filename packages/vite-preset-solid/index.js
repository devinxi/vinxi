var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// index.ts
var vite_preset_solid_exports = {};
__export(vite_preset_solid_exports, {
  default: () => vite_preset_solid_default
});

// elements.ts
var HTMLElements = [
  "html",
  "base",
  "head",
  "link",
  "meta",
  "style",
  "title",
  "body",
  "address",
  "article",
  "aside",
  "footer",
  "header",
  "main",
  "nav",
  "section",
  "body",
  "blockquote",
  "dd",
  "div",
  "dl",
  "dt",
  "figcaption",
  "figure",
  "hr",
  "li",
  "ol",
  "p",
  "pre",
  "ul",
  "a",
  "abbr",
  "b",
  "bdi",
  "bdo",
  "br",
  "cite",
  "code",
  "data",
  "dfn",
  "em",
  "i",
  "kbd",
  "mark",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "time",
  "u",
  "var",
  "wbr",
  "area",
  "audio",
  "img",
  "map",
  "track",
  "video",
  "embed",
  "iframe",
  "object",
  "param",
  "picture",
  "portal",
  "source",
  "svg",
  "math",
  "canvas",
  "noscript",
  "script",
  "del",
  "ins",
  "caption",
  "col",
  "colgroup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  "button",
  "datalist",
  "fieldset",
  "form",
  "input",
  "label",
  "legend",
  "meter",
  "optgroup",
  "option",
  "output",
  "progress",
  "select",
  "textarea",
  "details",
  "dialog",
  "menu",
  "summary",
  "details",
  "slot",
  "template",
  "acronym",
  "applet",
  "basefont",
  "bgsound",
  "big",
  "blink",
  "center",
  "content",
  "dir",
  "font",
  "frame",
  "frameset",
  "hgroup",
  "image",
  "keygen",
  "marquee",
  "menuitem",
  "nobr",
  "noembed",
  "noframes",
  "plaintext",
  "rb",
  "rtc",
  "shadow",
  "spacer",
  "strike",
  "tt",
  "xmp",
  "a",
  "abbr",
  "acronym",
  "address",
  "applet",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "basefont",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "frame",
  "frameset",
  "head",
  "header",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "image",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "nobr",
  "noembed",
  "noframes",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "plaintext",
  "portal",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "xmp",
  "input"
];
var booleans = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected"
];
var BooleanAttributes = new Set(booleans);
var Properties = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...booleans
]);
var SVGElements = /* @__PURE__ */ new Set([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]);

// index.ts
var import_vite_plugin_solid = __toESM(require("vite-plugin-solid"));
var import_vite_plugin_inspect = __toESM(require("vite-plugin-inspect"));

// vite-plugin-solid-undestructure.js
var import_plugin_babel = require("@rollup/plugin-babel");
function addImportDeclarationToProgram(types, program, specifier, imported, source) {
  program.node.body.unshift(types.importDeclaration([types.importSpecifier(specifier, types.identifier(imported))], types.stringLiteral(source)));
}
function addStatementToFunction(types, path, statement) {
  if (path.node.body.type === "BlockStatement") {
    path.node.body.body.unshift(statement);
  } else {
    path.node.body = types.blockStatement([
      statement,
      types.returnStatement(path.node.body)
    ]);
  }
}
function getMergePropsUniqueName(types, path, program) {
  let mergePropsUniqueName;
  program.traverse({
    ImportDeclaration(path2) {
      if (path2.node.source.value !== "solid-js")
        return;
      for (const specifier of path2.node.specifiers)
        if (specifier.imported && specifier.imported.name === "mergeProps" && specifier.local.unique) {
          mergePropsUniqueName = specifier.local;
          return;
        }
    }
  });
  if (!mergePropsUniqueName) {
    mergePropsUniqueName = program.scope.generateUidIdentifier("mergeProps");
    mergePropsUniqueName.unique = true;
    addImportDeclarationToProgram(types, program, mergePropsUniqueName, "mergeProps", "solid-js");
  }
  return mergePropsUniqueName;
}
var functionVisitor = (types) => (path, { opts }) => {
  {
    const { mode = "vanilla-js" } = opts;
    if (mode !== "ts" && mode !== "vanilla-js")
      throw new Error("babel-plugin-solid-undestructure error: Invalid configuration - mode must be either 'ts' or 'vanilla-js'.");
    const type = path.type;
    if (mode === "ts") {
      if (type !== "ArrowFunctionExpression")
        return;
      if (path.parent.type !== "VariableDeclarator")
        return;
      const bindings = path.context.scope.bindings;
      if (!(path.parent.id.name.charAt(0) === path.parent.id.name.charAt(0).toUpperCase())) {
        if (!path.parent.id.typeAnnotation)
          return;
        const typeAnnotation = path.parent.id.typeAnnotation.typeAnnotation;
        if (typeAnnotation.type !== "TSTypeReference")
          return;
        if (typeAnnotation.typeName.type === "Identifier") {
          const typeName = typeAnnotation.typeName.name;
          const typeBinding = bindings[typeName];
          if (!typeBinding)
            return;
          const importSpecifier = typeBinding.path.node;
          if (importSpecifier.type !== "ImportSpecifier")
            return;
          if (importSpecifier.imported.name !== "Component")
            return;
          if (typeBinding.path.parent.source.value !== "solid-js")
            return;
        } else if (typeAnnotation.typeName.type === "TSQualifiedName") {
          if (typeAnnotation.typeName.right.name !== "Component")
            return;
          const typeQualification = typeAnnotation.typeName.left;
          if (typeQualification.type !== "Identifier")
            return;
          const typeQualificationName = typeQualification.name;
          const typeQualificationBinding = bindings[typeQualificationName];
          if (!typeQualificationBinding)
            return;
          const importSpecifier = typeQualificationBinding.path.node;
          if (importSpecifier.type !== "ImportDefaultSpecifier")
            return;
          if (typeQualificationBinding.path.parent.source.value !== "solid-js")
            return;
        } else
          return;
      }
    }
    if (mode === "vanilla-js") {
      if (path.parent.type !== "CallExpression")
        return;
      const wrappingFunctionName = path.parent.callee.name;
      const bindings = path.context.scope.bindings;
      const wrappingFunctionBinding = bindings[wrappingFunctionName];
      if (!wrappingFunctionBinding)
        return;
      const importSpecifier = wrappingFunctionBinding.path.node;
      if (importSpecifier.type !== "ImportSpecifier")
        return;
      if (importSpecifier.imported.name !== "component")
        return;
      if (wrappingFunctionBinding.path.parent.source.value !== "babel-plugin-solid-undestructure")
        return;
      if (wrappingFunctionBinding.references === 1)
        wrappingFunctionBinding.path.parentPath.remove();
      else
        wrappingFunctionBinding.references--;
      path.parentPath.replaceWith(path);
    }
  }
  let mergePropsUniqueName;
  let defaultPropsObject = types.objectExpression([]);
  let firstParam = path.node.params[0];
  if (!firstParam || firstParam.type !== "ObjectPattern" && (firstParam.type !== "AssignmentPattern" || firstParam.left.type !== "ObjectPattern"))
    return;
  const program = path.findParent((path2) => path2.isProgram());
  const newPropsIdentifier = program.scope.generateUidIdentifier("props");
  let defaultPropsWhole = types.objectExpression([]);
  if (firstParam.type == "AssignmentPattern") {
    defaultPropsWhole = firstParam.right;
    firstParam = firstParam.left;
    mergePropsUniqueName = getMergePropsUniqueName(types, path, program);
    const callExpression = types.callExpression(mergePropsUniqueName, [
      defaultPropsWhole,
      defaultPropsObject,
      newPropsIdentifier
    ]);
    const assignmentStatement = types.expressionStatement(types.assignmentExpression("=", newPropsIdentifier, callExpression));
    addStatementToFunction(types, path, assignmentStatement);
  }
  const propsDestructredProperties = firstParam.properties;
  const componentScopeBindings = path.scope.bindings;
  for (const DestructredProperty of propsDestructredProperties) {
    if (DestructredProperty.type === "RestElement")
      throw new Error("babel-plugin-solid-undestructure error: Rest elements are not supported.");
    if (DestructredProperty.value.type !== "Identifier" && DestructredProperty.value.type !== "AssignmentPattern" || DestructredProperty.value.type !== "Identifier" && DestructredProperty.value.left.type !== "Identifier")
      throw new Error("babel-plugin-solid-undestructure error: Nested destructuring is not supported.");
    if (DestructredProperty.value.type === "AssignmentPattern") {
      if (!mergePropsUniqueName) {
        mergePropsUniqueName = getMergePropsUniqueName(types, path, program);
        const callExpression = types.callExpression(mergePropsUniqueName, [
          defaultPropsWhole,
          defaultPropsObject,
          newPropsIdentifier
        ]);
        const assignmentStatement = types.expressionStatement(types.assignmentExpression("=", newPropsIdentifier, callExpression));
        addStatementToFunction(types, path, assignmentStatement);
      }
      defaultPropsObject.properties.push(types.objectProperty(DestructredProperty.value.left, DestructredProperty.value.right));
    }
    const DestructredKeyIdentifier = DestructredProperty.key;
    const undestructuredPropExpression = types.memberExpression(newPropsIdentifier, DestructredKeyIdentifier);
    const DestructredName = DestructredProperty.value.name || DestructredProperty.value.left.name;
    path.scope.crawl();
    const componentScopeBindings2 = path.scope.bindings;
    const { referencePaths, constantViolations } = componentScopeBindings2[DestructredName];
    for (const referencePath of referencePaths)
      referencePath.replaceWith(undestructuredPropExpression);
    for (const constantViolation of constantViolations)
      constantViolation.node && (constantViolation.node.left = undestructuredPropExpression);
  }
  path.node.params[0] = newPropsIdentifier;
};
function babelPluginUndestructure({ types }) {
  const visitor = {
    FunctionDeclaration: functionVisitor(types),
    FunctionExpression: functionVisitor(types),
    ArrowFunctionExpression: functionVisitor(types)
  };
  return {
    name: "babel-plugin-solid-undestructure",
    visitor
  };
}
var undestructurePlugin = (mode) => {
  if (!mode || mode === "ts")
    return [
      {
        ...(0, import_plugin_babel.babel)({
          plugins: [
            ["@babel/plugin-syntax-typescript", { isTSX: true }],
            [babelPluginUndestructure, { mode: "ts" }]
          ],
          extensions: [".tsx"]
        }),
        enforce: "pre"
      },
      {
        ...(0, import_plugin_babel.babel)({
          plugins: [
            "@babel/plugin-syntax-typescript",
            [babelPluginUndestructure, { mode: "ts" }]
          ],
          extensions: [".ts"]
        }),
        enforce: "pre"
      }
    ];
  else if (mode === "vanilla-js")
    return ["babel-plugin-solid-undestructure", { mode: "vanilla-js" }];
  else
    throw new Error("babel-plugin-solid-undestructure error: Invalid mode. Mode must be either 'ts' or 'vanilla-js'");
};

// index.ts
var import_vite_tsconfig_paths = __toESM(require("vite-tsconfig-paths"));
var config = {
  moduleName: "solid-js/web",
  generate: "dynamic",
  renderers: [
    {
      name: "dom",
      moduleName: "solid-js/web",
      elements: [...HTMLElements, ...SVGElements]
    },
    {
      name: "universal",
      moduleName: "solid-three",
      elements: []
    }
  ]
};
var plugin = () => {
  return [
    (0, import_vite_tsconfig_paths.default)(),
    undestructurePlugin("ts"),
    (0, import_vite_plugin_solid.default)({
      solid: config,
      babel: {
        plugins: [require("babel-plugin-solid-labels")]
      }
    }),
    (0, import_vite_plugin_inspect.default)()
  ];
};
var vite_preset_solid_default = plugin;
module.exports = __toCommonJS(vite_preset_solid_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
