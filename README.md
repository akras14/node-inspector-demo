# Installation and Credits

Original Repo: [https://github.com/node-inspector/node-inspector](https://github.com/node-inspector/node-inspector)

`npm install -g node-inspector`

# General Use Case

## Launch Node Inspector
`node-inspector &`

Will prompt you to open `http://127.0.0.1:8080/debug?port=5858` in Chrome.

## Debug Node App
`node --debug app.js` debug the file, will break on `debugger;` statements or existing break points.

## Debug Node App, Break on First Line

`node --debug-brk app.js` debug the file, always break on first line of code.

## Kill Node-Inspector 
Close the terminal tab or `ps aux | grep node-inspector` to get process ID for node-inspector and `sudo kill -9 <processID>`

# Simplified Use Case

`node-debug app.js` will:

1. Start Node Inspector
2. Open New Tab in Chrome 
3. Break on first line of code

*Bonus:* Use `Command + o` shortcut in Chrome to open the file you want to debug

# Debugging Grunt Tasks

`node-debug $(which grunt) test`