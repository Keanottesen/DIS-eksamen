const AccountsController = require('../app/controllers').AccountsController;
const ClientController = require('../app/controllers').ClientController;


module.exports = (app) => {

  app.get('/accounts', AccountsController.index);
  app.post('/accounts', AccountsController.store);
  app.put('/accounts/transfer', AccountsController.transfer);
  app.get('/accounts/:id', AccountsController.show);
  app.put('/accounts/:id', AccountsController.update);
  app.delete('/accounts/:id', AccountsController.destroy);
  app.get('/accounts/:id/balance', AccountsController.balance);

  app.get('/clients', ClientController.index);
  app.post('/clients', ClientController.store);
  app.get('/clients/:id', ClientController.show);
  app.put('/clients/:id', ClientController.update);
  app.delete('/clients/:id', ClientController.destroy);
};
