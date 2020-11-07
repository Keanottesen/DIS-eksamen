'use strict'
const Client = require('../models').Client;
const { Op } = require("sequelize");

  module.exports = {

    async show(req, res) {
      return 'show'
    },
    async update(req, res) {
      return 'update'
    },
    async destroy(req, res) {
      return 'destroy'
    },

};
