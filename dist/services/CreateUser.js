"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* desestruturação por isso usando interface */
function createUser(_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, email = _a.email, password = _a.password;
    var user = {
        name: name,
        email: email,
        password: password,
    };
    return user;
}
exports.default = createUser;
