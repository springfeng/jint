// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype property "getUTCHours" has { DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.19/S15.9.5.19_A1_T2.js
 * @description Checking absence of DontDelete attribute
 */

if (delete Date.prototype.getUTCHours  === false) {
  $ERROR('#1: The Date.prototype.getUTCHours property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('getUTCHours')) {
  $FAIL('#2: The Date.prototype.getUTCHours property has not the attributes DontDelete');
}

