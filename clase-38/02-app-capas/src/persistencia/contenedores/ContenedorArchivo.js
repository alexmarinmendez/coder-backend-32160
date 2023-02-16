import fs from 'fs'

export class ContenedorArchivo {
    constructor(rutaArchivo) {
        this.rutaArchivo = rutaArchivo
    }

    async guardar(obj) {
        try {
            const operaciones = await this.listar()
            operaciones.push(obj)
            await fs.promises.writeFile(this.rutaArchivo, JSON.stringify(operaciones))
        } catch(err) {
            console.log('ContenedorArchivo, guardar', err)
        }
    }
    
    async listar() {
        try {
            if (fs.existsSync(this.rutaArchivo)) {
                const listado = await fs.promises.readFile(this.rutaArchivo, 'utf-8')
                return JSON.parse(listado)
            } else {
                return []
            }
        } catch(err) {
            console.log('ContenedorArchivo, listar', err)
        }
    }
}