// Write your package code here!
import { Meteor } from 'meteor/meteor'
export const name = 'css-modules-test';

console.log("css addStyles");

import local from './local.css';
console.log('css local', local);

import imp from './imports/import.css';
console.log('css import', imp);

import css from 'flexboxgrid';
// import css from 'flexboxgrid/dist/flexboxgrid.css';
// var css = require('flexboxgrid');
console.log("css flexboxgrid", css);

