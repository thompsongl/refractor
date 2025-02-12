// @ts-nocheck
hoon.displayName = 'hoon'
hoon.aliases = []

/** @type {import('../core.js').Syntax} */
export default function hoon(Prism) {
  Prism.languages.hoon = {
    constant: /%(?:\.[ny]|[\w-]+)/,
    comment: {
      pattern: /::.*/,
      greedy: true
    },
    'class-name': [
      {
        pattern: /@(?:[A-Za-z0-9-]*[A-Za-z0-9])?/
      },
      /\*/
    ],
    function: /(?:\+[-+] {2})?(?:[a-z](?:[a-z0-9-]*[a-z0-9])?)/,
    string: {
      pattern: /"[^"]*"|'[^']*'/,
      greedy: true
    },
    keyword:
      /\.[\^\+\*=\?]|![><:\.=\?!]|=[>|:,\.\-\^<+;/~\*\?]|\?[>|:\.\-\^<\+&~=@!]|\|[\$_%:\.\-\^~\*=@\?]|\+[|\$\+\*]|:[_\-\^\+~\*]|%[_:\.\-\^\+~\*=]|\^[|:\.\-\+&~\*=\?]|\$[|_%:<>\-\^&~@=\?]|;[:<\+;\/~\*=]|~[>|\$_%<\+\/&=\?!]|--|==/
  }
}
