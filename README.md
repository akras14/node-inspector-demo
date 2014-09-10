# General Use Case

## Launch Node Inspector
`node-inspector &`

Will prompt you to open `http://127.0.0.1:8080/debug?port=5858` in Chrome.

## Debug Node App
`node --debug filename.js` debug the file, will break on `debugger;` statements.

## Debug Node App, Break on First Line

`node --debug-brk filename.js` debug the file, always break on first line of code.

## Kill Node-Inspector 
Close the terminal tab or `ps aux | grep node-inspector` to get process ID for node-inspector and `sudo kill -9 <processID>`

# Simplified Use Case

`node-debug filename.js` will:

1. Start Node Inspector
2. Open New Tab in Chrome 
3. Break on first line of code

*Bonus:* Use `Command + o` shortcut in Chrome to open the file you want to debug

# Debugging Grunt Tasks
`node-debug $(which grunt) <gruntTaskName>`