# log-recorder
A package that simplifies formatted console outputs.

# Usage

```sh
const logger = require('log-recorder');

lg = new logger(true, '<default_color>');

lg.log("@red Hi there!!!", " test"); 
lg.log("@green Hi there!!!", " test"); 
lg.log("@blue Hi there!!!", " test"); 
lg.log("@yellow Hi there!!!", " test"); 
lg.log("@white Hi there!!!", " test"); 
lg.log("@cyan Hi there!!!", " test"); 
lg.log("@magenta Hi there!!!", " test"); 
lg.log("@warn Hi there!!!", " test");
```

# Options

```sh
lg = new logger(Option-1, 'Option-2');
```
---
#### Option-1 
- <true / false> - Enable / Disable datetime log.

#### Option-2
- <color> - Defaule colour for the console. { by default color is white }