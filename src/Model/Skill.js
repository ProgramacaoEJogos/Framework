'use strict';

const Model = require('./Model');

/**
 * Skill Class
 *
 */
module.exports = class Skill extends Model {

    /**
     *
     * @type {number}
     */
    static level = 0;

    /**
     *
     * @type {number}
     */
    static currentXP = 0;
}