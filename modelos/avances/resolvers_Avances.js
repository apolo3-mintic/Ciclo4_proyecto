const { modeloAvances } = require("./Avances")

const resolvers_Avances = {
    Query: {
        listarAvances: async(parent, arg) => {
            const listadoAvances = await modeloAvances.find()
                .populate("Proyecto_Id")
                .populate("Estudiante_Id")
            return listadoAvances
        },
        buscarAvance: async(parent, arg) => {
            const buscarPorId = await modeloAvances.findById({ _id: arg._id })
                .populate("Proyecto_Id")
                .populate("Estudiante_Id")
            return buscarPorId
        },
        fitrarAvances: async(parent, arg) => {
            const listadoFiltrado = await modeloAvances.find({ $or: [{ Proyecto_Id: arg.Proyecto_Id }, { Estudiante_Id: arg.Estudiante_Id }] })
                .populate("Proyecto_Id")
                .populate("Estudiante_Id")
            return listadoFiltrado
        }
    },
    Mutation: {
        crearAvance: async(parent, arg) => {
            const avanceCreado = await modeloAvances.insertMany({
                Proyecto_Id: arg.Proyecto_Id,
                Estudiante_Id: arg.Estudiante_Id,
                Descripcion: arg.Descripcion
            }, { populate: "Estudiante_Id" })

            return avanceCreado[0]
        },
        editarAvance: async(parent, arg) => {
            const avanceEditado = await modeloAvances.findByIdAndUpdate({ _id: arg._id }, {
                Proyecto_Id: arg.Proyecto_Id,
                Descripcion: arg.Descripcion,
                Observaciones: arg.Observaciones
            }, { new: true })
            return avanceEditado
        },
        eliminarAvance: async(parent, arg) => {
            const avanceEliminado = await modeloAvances.findByIdAndDelete({ _id: arg._id })
            return avanceEliminado
        },
        agregarObservaciones: async(parent, arg) => {
            const observacionAgregada = await modeloAvances.findByIdAndUpdate({ _id: arg._id }, {
                Observaciones: arg.Observaciones
            }, { new: true })
            return observacionAgregada
        }
    }
}

module.exports = { resolvers_Avances }