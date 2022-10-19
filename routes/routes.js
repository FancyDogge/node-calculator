const express = require('express');
const router = express.Router();

// Домашняя
router.get('', (req, res) => res.send('Hello, this is a calculator app'));

// Сложение
router.get('/add/:num1/:num2', (req, res) => {
	var num1 = parseFloat(req.params.num1);
	var num2 = parseFloat(req.params.num2);
	var result = num1 + num2;
	res.send('Addition result is: ' + result);
});

// Вычитание
router.get('/sub/:num1/:num2', (req, res) => {
	var num1 = parseFloat(req.params.num1);
	var num2 = parseFloat(req.params.num2);
	var result = num1 - num2;
	res.send('Substraction result is: ' + result);
});

// Умножение
router.get('/mult/:num1/:num2', (req, res) => {
	var num1 = parseFloat(req.params.num1);
	var num2 = parseFloat(req.params.num2); 
	var result = num1 * num2;
	res.send('Multiplication result is: ' + result);
});

// Деление
router.get('/div/:num1/:num2', (req, res) => {
	var num1 = parseFloat(req.params.num1); 
	var num2 = parseFloat(req.params.num2); 
	var result = (num1 / num2);
	res.send('Division result is: ' + result);
});

module.exports = router;