const sass = require('sass');
const fs = require('fs');

const header = fs.readFileSync('./src/header.js');
const body = fs.readFileSync('./src/body.js', "utf8");

// 编译SCSS为CSS
const cssResult = sass.compile("./src/index.scss");

// 将CSS转换为字符串
const cssString = cssResult.css;

// 将CSS字符串注入到JavaScript文件中
const newBody = body.replace('/* CSS_PLACEHOLDER */', cssString);

const newFile = header + "\n" + newBody;

fs.writeFileSync('./Vistopia_Monkey.user.js', newFile);

console.log('user.js generated');
