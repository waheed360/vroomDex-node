const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  res.render('index', { title: 'VroomDex Backend', message: 'VroomDex Backend' })
});
router.get('/oilData/:year/:make/:model', (req, res) => {
  let {year, make, model} = req.params

  db.sequelize
    .query(`SELECT * FROM oil_data
      WHERE year='${year}'
      and UPPER(make)=UPPER('${make}')
      and UPPER(model)=UPPER('${model}')`
      ,{ raw: true }
    )
    .then(oil_data => {
      console.log(oil_data[0])
      res.json(
        oil_data[0]
      );
    }).catch(err => {
      console.log('=============----------------------------------======================')
      console.error('Unable to connect to the database:', err);
    })



});


module.exports = router;
