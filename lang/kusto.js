// @ts-nocheck
kusto.displayName = 'kusto'
kusto.aliases = []

/** @type {import('../core.js').Syntax} */
export default function kusto(Prism) {
  Prism.languages.kusto = {
    comment: {
      pattern: /\/\/.*/,
      greedy: true
    },
    string: {
      pattern:
        /```[\s\S]*?```|[hH]?(?:"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\.)*'|@(?:"[^\r\n"]*"|'[^\r\n']*'))/,
      greedy: true
    },
    verb: {
      pattern: /(\|\s*)[a-z][\w-]*/i,
      lookbehind: true,
      alias: 'keyword'
    },
    command: {
      pattern: /\.[a-z][a-z\d-]*\b/,
      alias: 'keyword'
    },
    'class-name':
      /\b(?:bool|datetime|decimal|dynamic|guid|int|long|real|string|timespan)\b/,
    keyword:
      /\b(?:access|alias|and|anti|as|asc|auto|between|by|database|declare|desc|external|from|fullouter|has_all|in|ingestion|inline|inner|innerunique|into|let|like|local|not|of|on|or|pattern|print|query_parameters|range|restrict|schema|set|step|table|tables|to|view|where|with|(?:has(?:perfix|suffix)?|contains|(?:starts|ends)with)(?:_cs)?|(?:left|right)(?:anti(?:semi)?|inner|outer|semi)?|matches\s+regex|nulls\s+(?:first|last))(?![\w-])/,
    boolean: /\b(?:true|false|null)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/,
    datetime: [
      {
        // RFC 822 + RFC 850
        pattern:
          /\b(?:(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\s*,\s*)?\d{1,2}(?:\s+|-)(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(?:\s+|-)\d{2}\s+\d{2}:\d{2}(?::\d{2})?(?:\s*(?:\b(?:(?:U|GM|[ECMT][DS])T|[A-Z])|[+-]\d{4}))?\b/,
        alias: 'number'
      },
      {
        // ISO 8601
        pattern:
          /[+-]?\b(?:\d{4}-\d{2}-\d{2}(?:[ T]\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)?|\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)Z?/,
        alias: 'number'
      }
    ],
    number:
      /\b(?:0x[0-9A-Fa-f]+|\d+(?:\.\d+)?(?:[Ee][+-]?\d+)?)(?:(?:min|sec|[mnµ]s|tick|microsecond|[dhms])\b)?|[+-]?\binf\b/,
    operator: /=>|[!=]~|[!=<>]=?|[-+*/%|]|\.\./,
    punctuation: /[()\[\]{},;.:]/
  }
}
