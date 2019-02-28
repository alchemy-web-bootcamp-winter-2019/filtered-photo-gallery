/* eslint-disable */
import jsdom from "jsdom";
const { JSDOM } = jsdom;
const { window } = new JSDOM(``);
global.window = window;
global.document = window.document;

require = require('esm')(module);
export * from "./tests.js";