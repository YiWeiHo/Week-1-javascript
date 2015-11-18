#!/usr/bin/env node
var pictureTube = require('picture-tube')
var tube = pictureTube();
var url = process.argv[2] || process.argv[1];
tube.pipe(process.stdout);
var request = require("request");
request.get( http://pngimg.com/upload/dog_PNG2416.png
).pipe(tube);