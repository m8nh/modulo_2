"use strict";
exports.__esModule = true;
exports.Empployee = void 0;
var Empployee = /** @class */ (function () {
    function Empployee(id, firstName, lastName, dateOfBirth, address, job) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBrith = dateOfBirth;
        this._addrress = address;
        this._job = job;
        this._id = id;
    }
    Object.defineProperty(Empployee.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empployee.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empployee.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empployee.prototype, "dateOfBrith", {
        get: function () {
            return this._dateOfBrith;
        },
        set: function (value) {
            this._dateOfBrith = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empployee.prototype, "addrress", {
        get: function () {
            return this._addrress;
        },
        set: function (value) {
            this._addrress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empployee.prototype, "job", {
        get: function () {
            return this._job;
        },
        set: function (value) {
            this._job = value;
        },
        enumerable: false,
        configurable: true
    });
    return Empployee;
}());
exports.Empployee = Empployee;
