(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{3118:function(module,exports){module.exports=function(hljs){var VAR={className:"variable",variants:[{begin:/\$\d+/},{begin:/\$\{/,end:/}/},{begin:"[\\$\\@]"+hljs.UNDERSCORE_IDENT_RE}]},DEFAULT={endsWithParent:!0,lexemes:"[a-z/_]+",keywords:{literal:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},relevance:0,illegal:"=>",contains:[hljs.HASH_COMMENT_MODE,{className:"string",contains:[hljs.BACKSLASH_ESCAPE,VAR],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/}]},{begin:"([a-z]+):/",end:"\\s",endsWithParent:!0,excludeEnd:!0,contains:[VAR]},{className:"regexp",contains:[hljs.BACKSLASH_ESCAPE,VAR],variants:[{begin:"\\s\\^",end:"\\s|{|;",returnEnd:!0},{begin:"~\\*?\\s+",end:"\\s|{|;",returnEnd:!0},{begin:"\\*(\\.[a-z\\-]+)+"},{begin:"([a-z\\-]+\\.)+\\*"}]},{className:"number",begin:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{className:"number",begin:"\\b\\d+[kKmMgGdshdwy]*\\b",relevance:0},VAR]};return{aliases:["nginxconf"],contains:[hljs.HASH_COMMENT_MODE,{begin:hljs.UNDERSCORE_IDENT_RE+"\\s+{",returnBegin:!0,end:"{",contains:[{className:"section",begin:hljs.UNDERSCORE_IDENT_RE}],relevance:0},{begin:hljs.UNDERSCORE_IDENT_RE+"\\s",end:";|{",returnBegin:!0,contains:[{className:"attribute",begin:hljs.UNDERSCORE_IDENT_RE,starts:DEFAULT}],relevance:0}],illegal:"[^\\s\\}]"}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_nginx.443e982c8b4272abe63c.bundle.js.map