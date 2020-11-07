'use strict'
const Client = require('../models').Client;
const { Op } = require("sequelize");

  module.exports = {

    async index(req, res) {
      const clients = await Client.findAll()
      return res.status(200).send(clients)
    },
    async store(req, res) {
      const client = await Client.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        street_address: req.body.street_address,
        city: req.body.city,
      })
      return res.status(200).send(client)
    },
    async show(req, res) {
      const client = await Client.findOne({where: {id: req.params.id}})
      return res.status(200).send(client)
    },
    async update(req, res) {
      const client = await Client.findOne({where: {id: req.params.id}})
      client.firstname = req.body.firstname || client.firstname
      client.lastname = req.body.lastname || client.lastname
      client.street_address = req.body.street_address || client.street_address
      client.city = req.body.city || client.city
      await client.save()
      return res.status(200).send(client)
    },
    async destroy(req, res) {
      const account = await Client.findOne({where: {id: req.params.id}})
      await account.destroy();
      return res.status(200).send(`${req.params.id} is destroyed`)
    },

};
