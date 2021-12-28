import path from 'path'
import parser from '@babel/parser'
import estreeToBabel from 'estree-to-babel'
import {compileSync} from '@mdx-js/mdx'

export function babelPluginSyntaxMdx() {
  // Tell Babel to use a different parser.
  return {parserOverride: babelParserWithMdx}
}

// A Babel parser that parses MDX files with `@mdx-js/mdx` and passes any
// other things through to the normal Babel parser.
function babelParserWithMdx(value, options) {
  if (
    options.sourceFilename &&
    /\.mdx?$/.test(path.extname(options.sourceFilename))
  ) {
    // Babel does not support async parsers, unfortunately.
    return compileSync(
      {value, path: options.sourceFilename},
      // Tell `@mdx-js/mdx` to return a Babel tree instead of serialized JS.
      {recmaPlugins: [recmaBabel], /* jsxImportSource: …, otherOptions… */}
    ).result
  }

  return parser.parse(value, options)
}

// A “recma” plugin is a unified plugin that runs on the estree (used by
// `@mdx-js/mdx` and much of the JS ecosystem but not Babel).
// This plugin defines `'estree-to-babel'` as the compiler, which means that
// the resulting Babel tree is given back by `compileSync`.
function recmaBabel() {
  Object.assign(this, {Compiler: estreeToBabel})
}