System.register(["../models/Negotiations", "../models/Negotiation", "../views/NegotiationsView", "../views/MessageView"], function (exports_1, context_1) {
    "use strict";
    var Negotiations_1, Negotiation_1, NegotiationsView_1, MessageView_1, NegotiationController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Negotiations_1_1) {
                Negotiations_1 = Negotiations_1_1;
            },
            function (Negotiation_1_1) {
                Negotiation_1 = Negotiation_1_1;
            },
            function (NegotiationsView_1_1) {
                NegotiationsView_1 = NegotiationsView_1_1;
            },
            function (MessageView_1_1) {
                MessageView_1 = MessageView_1_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new Negotiations_1.default();
                    this._negotiationsView = new NegotiationsView_1.default('#negotiationsView');
                    this._messageView = new MessageView_1.default('#messageView');
                    this._inputDate = document.querySelector('#date');
                    this._inputQuantity = (document.querySelector('#quantity'));
                    this._inputValue = document.querySelector('#value');
                    this._negotiationsView.update(this._negotiations);
                }
                add(event) {
                    event.preventDefault();
                    const negotiation = new Negotiation_1.default(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update('Success');
                }
            };
            exports_1("default", NegotiationController);
        }
    };
});
