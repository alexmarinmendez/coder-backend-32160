import { ContenedorArchivo } from "./contenedores/ContenedorArchivo.js"
import { ContenedorMemoria } from "./contenedores/ContenedorMemoria.js"

let contenedor

if (process.argv[2] === 'archivo') {
    contenedor = new ContenedorArchivo('./operaciones.json')
} else {
    contenedor = new ContenedorMemoria()
}

export async function guardar(obj) {
    return contenedor.guardar(obj)
}

export async function listar() {
    return contenedor.listar()
}