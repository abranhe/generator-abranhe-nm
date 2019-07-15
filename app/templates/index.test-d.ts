import { expectType } from 'tsd';
import <%= camelModuleName %> = require('.');

const options: <%= camelModuleName %>.Options = {};

expectType<String>(<%= camelModuleName %>('hello'))