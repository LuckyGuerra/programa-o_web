const express = require('express');
const calculadora = require('./calculadora');

const app = express();

app.get('/soma/:x/:y', (req, res) => {
    const { x, y } = req.params;
    res.send(Sua conta é: ${calculadora.somar(Number(x), Number(y))});
});

app.get('/subtracao/:x/:y', (req, res) => {
    const { x, y } = req.params;
    res.send(Sua conta é: ${calculadora.subtrair(Number(x), Number(y))});
});

app.get('/multiplicacao/:x/:y', (req, res) => {
    const { x, y } = req.params;
    res.send(Sua conta é: ${calculadora.multiplicar(Number(x), Number(y))});
});

app.get('/divisao/:x/:y', (req, res) => {
    const { x, y } = req.params;
    res.send(Sua conta é: ${calculadora.dividir(Number(x), Number(y))});
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(App rodando na porta ${PORT});
});
