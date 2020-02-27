const express = require('express');
const ubicModel = require('../models/ubicacionModel')
const routerApi = express.Router();

routerApi.route('/ubication')
  .post((req, res) => {
    let ubicaciones = new ubicModel(req.body)
      return res.send(true);
  });


module.exports = routerApi;

