'use strict'
const Account = require('../models').Account;
const { Op } = require("sequelize");

  module.exports = {

    async index(req, res) {
      const account = await Account.findAll()
      return res.status(200).send(account)
    },
    async store(req, res) {
      const account = await Account.create({
        client_id: req.body.client_id,
        balance: req.body.balance || 0,
        alias: req.body.alias,
      })
      return res.status(201).send(account)
    },
    async show(req, res) {
      const account = await Account.findOne({where: {id: req.params.id}})
      return res.status(200).send(account)
    },
    async update(req, res) {
      const account = await Account.findOne({where: {id: req.params.id}})
      account.balance = req.body.balance
      account.alias = req.body.alias
      await account.save()
      return res.status(200).send(account)
    },
    async destroy(req, res) {
      const account = await Account.findOne({where: {id: req.params.id}})
      await account.destroy();
      return res.status(200).send(account)
    },
    async balance(req, res) {
      const account = await Account.findOne({where: {id: req.params.id}})
      return res.status(200).send({balance: account.balance})
    },
    async transfer(req, res) {
      const fromAccount = await Account.findOne({where: {id: req.body.fromAccount}})
      const toAccount = await Account.findOne({where: {id: req.body.toAccount}})
      const amount = parseInt(req.body.amount)

      fromAccount.balance = fromAccount.balance - amount
      toAccount.balance = toAccount.balance + amount
      await fromAccount.save()
      await toAccount.save()
      return res.status(200).send('transfered')
    }

};
