'use strict';

/**
 * Model Class
 *
 * @method constructor
 * @method get
 * @method set
 */
module.exports = class Model {

    /**
     * @var int
     */
    static anchoID = 0;

    /**
     * Constructor Class
     *
     * @return void
     */
    constructor(data) {
        Model.anchoID++;

        this.id = Model.anchoID;

        if(isset(data)) {
            for(var [key, value] of Object.entries(data)) {
                this.set(key, value);
            }
        }
    }

    /**
     * Generic Getter
     *
     * @return mixed
     * @param param
     */
    get(param) {
        return this[param];
    }

    /**
     * Generic Setter
     *
     * @return mixed
     * @param key
     * @param val
     */
    set(key, val) {
        this[key] = val;

        return this.get(val);
    }
}