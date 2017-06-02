// global是全局变量 可以直接在任何地方使用 global.xxx
global.__APP__ = true;
global.__ANDROID__ = false;
global.__IOS__ = true;

require('./src');
