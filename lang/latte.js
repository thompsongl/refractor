// @ts-nocheck
import refractorClike from './clike.js'
import refractorMarkupTemplating from './markup-templating.js'
import refractorPhp from './php.js'
latte.displayName = 'latte'
latte.aliases = []

/** @type {import('../core.js').Syntax} */
export default function latte(Prism) {
  Prism.register(refractorClike)
  Prism.register(refractorMarkupTemplating)
  Prism.register(refractorPhp)
  ;(function (Prism) {
    Prism.languages.latte = {
      comment: /^\{\*[\s\S]*/,
      ld: {
        pattern: /^\{(?:[=_]|\/?(?!\d|\w+\()\w+)?/,
        inside: {
          punctuation: /^\{\/?/,
          tag: {
            pattern: /.+/,
            alias: 'important'
          }
        }
      },
      rd: {
        pattern: /\}$/,
        inside: {
          punctuation: /.+/
        }
      },
      php: {
        pattern: /\S(?:[\s\S]*\S)?/,
        alias: 'language-php',
        inside: Prism.languages.php
      }
    }
    var markupLatte = Prism.languages.extend('markup', {})
    Prism.languages.insertBefore(
      'inside',
      'attr-value',
      {
        'n-attr': {
          pattern: /n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,
          inside: {
            'attr-name': {
              pattern: /^[^\s=]+/,
              alias: 'important'
            },
            'attr-value': {
              pattern: /=[\s\S]+/,
              inside: {
                punctuation: [
                  /^=/,
                  {
                    pattern: /^(\s*)["']|["']$/,
                    lookbehind: true
                  }
                ],
                php: {
                  pattern: /\S(?:[\s\S]*\S)?/,
                  inside: Prism.languages.php
                }
              }
            }
          }
        }
      },
      markupLatte.tag
    )
    Prism.hooks.add('before-tokenize', function (env) {
      if (env.language !== 'latte') {
        return
      }
      var lattePattern =
        /\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'latte',
        lattePattern
      )
      env.grammar = markupLatte
    })
    Prism.hooks.add('after-tokenize', function (env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'latte')
    })
  })(Prism)
}
