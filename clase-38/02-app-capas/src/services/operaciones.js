import { guardar, listar as listarPersistencia } from "../persistencia/operaciones.js"

export async function sumar(a, b) {
    const resultado = a + b
    const obj = {
        tipo: 'suma',
        parametros: [a, b],
        resultado,
        timestamp: Date.now()
    }
    await guardar(obj)
    return resultado
}
export async function restar(a, b) {
    const resultado = a - b
    const obj = {
        tipo: 'resta',
        parametros: [a, b],
        resultado,
        timestamp: Date.now()
    }
    await guardar(obj)
    return resultado
}
export async function multiplicar(a, b) {
    const resultado = a * b
    const obj = {
        tipo: 'multiplicacion',
        parametros: [a, b],
        resultado,
        timestamp: Date.now()
    }
    await guardar(obj)
    return resultado
}
export async function dividir(a, b) {
    const resultado = a / b
    const obj = {
        tipo: 'division',
        parametros: [a, b],
        resultado,
        timestamp: Date.now()
    }
    await guardar(obj)
    return resultado
}

export async function listar() {
    return listarPersistencia()
}
