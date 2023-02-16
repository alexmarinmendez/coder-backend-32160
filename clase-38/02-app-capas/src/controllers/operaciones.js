import { sumar, restar, multiplicar, dividir, listar} from '../services/operaciones.js'

export const suma = async(req, res) => {
    const { num1, num2 } = req.query
    //realizar la lógica necesaria para obtener la respuesta
    const resultado = await sumar(+num1, +num2)
    res.send(`El resultado de la suma es ${resultado}`)
}
export const resta = async(req, res) => {
    const { num1, num2 } = req.query
    const resultado = await restar(num1, num2)
    res.send(`El resultado de la resta es ${resultado}`)
}
export const multiplicacion = async(req, res) => {
    const { num1, num2 } = req.query
    const resultado = await multiplicar(num1, num2)
    res.send(`El resultado de la multiplicación es ${resultado}`)
}
export const division = async(req, res) => {
    const { num1, num2 } = req.query
    const resultado = await dividir(num1, num2)
    res.send(`El resultado de la división es ${resultado}`)
}

export const lista = async(req, res) => {
    const lista = await listar()
    res.json({ lista })
}
