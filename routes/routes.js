const AccountsController = require('../app/controllers').AccountsController;
const ClientController = require('../app/controllers').ClientController;


module.exports = (app) => {

  app.get('/accounts', AccountsController.index);
  app.post('/accounts', AccountsController.store);
  app.get('/accounts:id', AccountsController.show);
  app.put('/accounts:id', AccountsController.update);
  app.delete('/accounts:id', AccountsController.destroy);
  app.get('/accounts/:id/balance', AccountsController.balance);
  app.put('/accounts/transfer', AccountsController.transfer);

  app.get('/client:id', ClientController.show);
  app.put('/client:id', ClientController.update);
  app.delete('/client:id', ClientController.destroy);
};
