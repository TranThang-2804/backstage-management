(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5740],{42937:E=>{function a(n){return n?typeof n=="string"?n:n.source:null}function l(n){return t("(?=",n,")")}function t(...n){return n.map(e=>a(e)).join("")}function _(...n){return"("+n.map(e=>a(e)).join("|")+")"}function u(n){const s={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:n.NUMBER_RE}]},e=n.COMMENT();e.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const i={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},o={className:"literal",begin:/\bon|off|true|false|yes|no\b/},c={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},b={begin:/\[/,end:/\]/,contains:[e,o,i,c,s,"self"],relevance:0},r=_(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/),d=t(r,"(\\s*\\.\\s*",r,")*",l(/\s*=\s*[^#\s]/));return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[e,{className:"section",begin:/\[+/,end:/\]+/},{begin:d,className:"attr",starts:{end:/$/,contains:[e,b,o,i,c,s]}}]}}E.exports=u}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_ini.2e9c93a3.chunk.js.map