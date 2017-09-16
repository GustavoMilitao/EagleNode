'use strict';
module.exports = function(app) {
  var controller = require('../controllers/CarPieceCustomaController');
  
  app.route('/carPieceCustomas')
    .post(controller.create_a_car_piece_customa)
    .get(controller.list_all_car_piece_customas);

  app.route('/carPieceCustomas/:carPieceCustomaId')
    .put(controller.update_a_car_piece_customa)
    .delete(controller.delete_a_car_piece_customa)
    .get(controller.read_a_car_piece_customa);
};
