
/**
 * CameraController Class
 *
 */
module.exports = class Helper {

    static sleep(ms) {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
    }

    /**
     *
     * @param min
     * @param max
     * @returns {number}
     */

    static random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}