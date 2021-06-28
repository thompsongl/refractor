// @ts-nocheck
import refractorJavascript from './javascript.js'
actionscript.displayName = 'actionscript'
actionscript.aliases = []

/** @type {import('../core.js').Syntax} */
export default function actionscript(Prism) {
  Prism.register(refractorJavascript)
  Prism.languages.actionscript = Prism.languages.extend('javascript', {
    keyword:
      /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|override|set|static)\b/,
    operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
  })
  Prism.languages.actionscript['class-name'].alias = 'function'
  if (Prism.languages.markup) {
    Prism.languages.insertBefore('actionscript', 'string', {
      xml: {
        pattern:
          /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
        lookbehind: true,
        inside: Prism.languages.markup
      }
    })
  }
}
