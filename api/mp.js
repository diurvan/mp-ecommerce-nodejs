const express = require('express');
const bodyParser = require('body-parser');
const mercadopago = require ('mercadopago');

const router = express.Router();
// let url = 'http://localhost:3000';
let url = 'https://diurvan-mp-commerce-nodejs.herokuapp.com';

router.use(bodyParser.json());

router.post('', async (req, res)=>{
    
    mercadopago.configure({
        access_token: 'APP_USR-8208253118659647-112521-dd670f3fd6aa9147df51117701a2082e-677408439',
        platform_id: 'PLATFORM_DIURVAN_ID',
        integrator_id: 'dev_2e4ad5dd362f11eb809d0242ac130004',
        corporation_id: 'DIURVAN_ID',
        modal: true
    });

    let preference = {
        "items": [
            {
                "id": "1234",
                "title": req.body.titulo,
                "currency_id": "PEN",
                "picture_url": req.body.imagen,
                "description": req.body.titulo,
                "category_id": "art",
                "quantity": parseInt(req.body.cantidad),
                "unit_price": parseFloat(req.body.precio)
            }
        ],
        "payer": {
            "name": "Lalo",
            "surname": "Landa",
            "email": "test_user_46542185@testuser.com",
            "phone": {
                "area_code": "52",
                "number": 5549737300
            },
            "identification": {
                "type": "DNI",
                "number": "22334445"
            },
            "address": {
                "street_name": "Insurgentes Sur",
                "street_number": 1602,
                "zip_code": "03940"
            }
        },
        "back_urls": {
            "success": url + "/thankyou",
            "failure": url + "/error",
            "pending": url + "/pending"
        },
        "payment_methods": {
            "excluded_payment_methods": [
                {
                    "id": "pagoefectivo_atm"
                }
            ],
            "excluded_payment_types": [
                {
                    "id": "diners"
                }
            ],
            "installments": 6
        },
        "notification_url": url + "/api/mp/notification",
        "statement_descriptor": "DIURVAN",
        "external_reference": "diurvan1@gmail.com",
        "collector_id" : 677408439,
        "auto_return": "approved"
        // "expires": true,
        // "expiration_date_from": "2016-02-01T12:00:00.000-04:00",
        // "expiration_date_to": "2016-02-28T12:00:00.000-04:00"
    }

    mercadopago.preferences.create(preference)
    .then(function(response){
        // Este valor reemplazará el string "<%= global.id %>" en tu HTML
        console.log(response.body.id);
        res.json ({status: 200, message: response.body })
    }).catch(function(error){
        console.log(error);
    });
    // console.log(req);
    // res.json ({status: 200, message : req.body });
});

router.post('/notification', async (req, res)=>{
    console.log(req.body);
    //res.json ({status: 200, message: response.body.id})
    res.json ({status: 200, message: 'OK' })
});

module.exports = router;