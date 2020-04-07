System.register(["./controllers/NegotiationController"], function (exports_1, context_1) {
    "use strict";
    var _a, NegotiationController_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NegotiationController_1_1) {
                NegotiationController_1 = NegotiationController_1_1;
            }
        ],
        execute: function () {
            controller = new NegotiationController_1.default();
            (_a = document
                .querySelector('.form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', controller.add.bind(controller));
        }
    };
});
