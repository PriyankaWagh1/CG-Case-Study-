const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlBrand = require('../controllers/brand.controller');
//const jwtToken = require('../config/jwtToken');
const ctrlCoupon = require('../controllers/coupon.controller');
const ctrlOffer = require('../controllers/offer.controller');
const ctrlDeal = require('../controllers/ddeals.controller');
const ctrlUpcoming = require('../controllers/upcoming.controller');
const ctrlStore = require('../controllers/stores.controller');
const ctrlCol = require('../controllers/collections.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);

router.post('/addBrand', ctrlBrand.addBrand);
router.get('/getBrand', ctrlBrand.getBrand);

router.post('/addCoupon',ctrlCoupon.addCoupon);
router.get('/getCoupon', ctrlCoupon.getCoupon);
router.put('/updateCoupon/:id',ctrlCoupon.updateCoupon);
router.delete('/deleteCoupon/:id',ctrlCoupon.deleteCoupon);
router.get('/couponById/:id',ctrlCoupon.couponById);

router.post('/addOffer',ctrlOffer.addOffer);
router.get('/getOffer', ctrlOffer.getOffer);
router.put('/updateOffer/:id',ctrlOffer.updateOffer);
router.delete('/deleteOffer/:id',ctrlOffer.deleteOffer);
router.get('/getOfferById/:id',ctrlOffer.getOfferById);

router.post('/addDeal',ctrlDeal.addDeal);
router.get('/getDeal', ctrlDeal.getDeal);

router.post('/addupoffer',ctrlUpcoming.addupoffer);
router.get('/getupoffer', ctrlUpcoming.getupoffer);

router.post('/addStore',ctrlStore.addStore);
router.get('/getStore', ctrlStore.getStore);

router.post('/addCol',ctrlCol.addCol);
router.get('/getCol', ctrlCol.getCol);

module.exports = router;

