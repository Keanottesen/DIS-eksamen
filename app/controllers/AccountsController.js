'use strict'
const Account = require('../models').Account;
const { Op } = require("sequelize");

  module.exports = {

    async index(req, res) {
      return res.status(200).send('sdnlks')
    },
    async store(req, res) {
      return 'store'
    },
    async show(req, res) {
      return 'show'
    },
    async update(req, res) {
      return 'update'
    },
    async destroy(req, res) {
      return 'destroy'
    },
    async balance(req, res) {
      return 'balance'
    },
    async transfer(req, res) {
      return 'transfer'
    },

};
