'use strict';
module.exports = function(app) {
  var controller = require('../controllers/pokemonController');
  
  app.route('/pokemons')
    .get(controller.list_all_pokemons);

};
