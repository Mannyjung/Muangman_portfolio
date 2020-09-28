const express =require('express');
const router = express.Router();
const myData = require('../data');

router.get('/',(req,res)=>{
    res.render('index',{myData});
});

router.get('/aboutme',(req,res)=>{
    res.render('about',{myData});
});

router.get('/education',(req,res)=>{
    res.render('educa',{myData});
});

router.get('/workexperience',(req,res)=>{
    res.render('experwork',{myData});
});

router.get('/skill',(req,res)=>{
    res.render('skill');
});

module.exports = router;