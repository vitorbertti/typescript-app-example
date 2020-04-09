import NegotiationController from './controllers/NegotiationController';

const controller = new NegotiationController();

document
   .querySelector('.form')
   ?.addEventListener('submit', controller.add.bind(controller));

document
   .querySelector('#import-button')
   ?.addEventListener('click', controller.dataImport.bind(controller));
