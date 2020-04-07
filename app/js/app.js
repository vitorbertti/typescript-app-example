"use strict";
var _a;
const controller = new NegotiationController();
(_a = document
    .querySelector('.form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', controller.add.bind(controller));
