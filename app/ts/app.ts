const controller = new NegotiationController();

document
   .querySelector('.form')
   ?.addEventListener('submit', controller.addNegotiation.bind(controller));
