// @ts-nocheck
avroIdl.displayName = 'avro-idl'
avroIdl.aliases = ['avdl']

/** @type {import('../core.js').Syntax} */
export default function avroIdl(Prism) {
  // GitHub: https://github.com/apache/avro
  // Docs: https://avro.apache.org/docs/current/idl.html
  Prism.languages['avro-idl'] = {
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
      greedy: true
    },
    string: [
      {
        pattern: /(^|[^\\])"(?:[^\r\n"\\]|\\.)*"/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\])'(?:[^\r\n'\\]|\\(?:[\s\S]|\d{1,3}))'/,
        lookbehind: true,
        greedy: true
      }
    ],
    annotation: {
      pattern: /@(?:[$\w.-]|`[^\r\n`]+`)+/,
      greedy: true,
      alias: 'function'
    },
    'function-identifier': {
      pattern: /`[^\r\n`]+`(?=\s*\()/,
      greedy: true,
      alias: 'function'
    },
    identifier: {
      pattern: /`[^\r\n`]+`/,
      greedy: true
    },
    'class-name': {
      pattern: /(\b(?:enum|error|protocol|record|throws)\b\s+)[$\w]+/,
      lookbehind: true,
      greedy: true
    },
    keyword:
      /\b(?:array|boolean|bytes|date|decimal|double|enum|error|false|fixed|float|idl|import|int|local_timestamp_ms|long|map|null|oneway|protocol|record|schema|string|throws|time_ms|timestamp_ms|true|union|uuid|void)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number: [
      {
        pattern:
          /(^|[^\w.])-?(?:(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|0x(?:[a-f0-9]+(?:\.[a-f0-9]*)?|\.[a-f0-9]+)(?:p[+-]?\d+)?)[dfl]?(?![\w.])/i,
        lookbehind: true
      },
      /-?\b(?:NaN|Infinity)\b/
    ],
    operator: /=/,
    punctuation: /[()\[\]{}<>.:,;-]/
  }
  Prism.languages.avdl = Prism.languages['avro-idl']
}
