const express = require('express');
const ubicacionModel = require('../models/ubicacion')
const routerApi = express.Router();

routerApi.route('/ubicationUser')
  .post((req, res) => {
    let ubicaciones = new ubicacionModel(req.body)

    ubicaciones.save((err) => {
      if(err){
        return res.json(err);
      }
        return res.send(true);
    });
 
  });


module.exports = routerApi;

