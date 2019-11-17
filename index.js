let res;
'Breakfast at 09:00 in the room 123:456.'.match(/\b[0-2]\d:[0-5]\d\b/g); //09:00
"Breakfast at 09:00. Dinner at 21-30".match(/\b[0-2]\d[:-][0-5]\d\b/g); // 09:00, 21-30
"Hello!... How goes?.....".match(/\.{3,}/g); //..., .....
"color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678".match(/#[A-F0-9]{6}\b/gi); //"#121212", "#AA00ef"
`... <!-- My -- comment
test --> ..  <!----> ..
`.match(/<!--.*?-->/gs); // <!-- My -- comment \n test -->,  <!---->
'<> <a href="/"> <input type="radio" checked> <b>'.match(/<[^<>]+?>/g); //<a href="/">, <input type="radio" checked>, <b>
'01:32:54:67:89:AB'.match(/^([0-9A-Z]{2}:){5}[0-9A-Z]{2}$/gi); //01:32:54:67:89:AB
"color: #3f3; background-color: #AA00ef; and: #abcd".match(/#([a-z0-9]{3}){1,2}\b/gi); //"#3f3", "#AA00ef"
"-1.5 0 2 -123.4.".match(/-?\d+(\.\d+)?/g); //"-1.5", "0", "2", "-123.4"

//Alternation
`
  [b]hello![/b]
  [quote]
    [url]http://google.com[/url]
  [/quote]
`.match(/\[(url|b|quote)\].*?\[\/\1\]/gs); //["[b]hello![/b]", "[quote]↵    [url]http://google.com[/url]↵  [/quote]"]
' .. "test me" .. "Say \\"Hello\\"!" .. "\\\\ \\"" .. '.match(/"(\\.|[^"\\])*?"/g); //[""test me"", ""Say \"Hello\"!"", ""\\ \"""]
'<style> <styler> <style test="...">'.match(/<style(>|\s.*?>)/g);

//Lookahead and lookbehind

//1. Create a regexp that looks for only non-negative ones (zero is allowed).
"0 12 -5 123 -18".match(/(?<![-\d])\d+/g);

//2. Paste <h1>Hello</h1> after <body> tag. It may have atributes.
`
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`.replace(/(?<=<body.*>)/si,<h1>Hello</h1>)

