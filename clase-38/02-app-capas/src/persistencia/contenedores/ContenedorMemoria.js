export class ContenedorMemoria {
    constructor() {
        this.operaciones = []
    }

    async guardar(obj) {
        this.operaciones.push(obj)
    }

    async listar() {
        return this.operaciones
    }
}