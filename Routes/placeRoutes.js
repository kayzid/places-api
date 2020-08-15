'use strict';

const express = require('express');
const router = express.Router();
const placesController=require('../controller/placesController');




/* Gets the places from DB */
router.get('',placesController.getPlaces);

router.get('/:id',placesController.getPlacesById);


module.exports = router;