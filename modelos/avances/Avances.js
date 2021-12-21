const { Schema, model } = require("mongoose")

const esquemaAvances = new Schema({

    Proyecto_Id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "proyecto"
    },
    Estudiante_Id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "usuario"
    },
    Fecha_Avance: {
        type: Date,
        required: true,
        default: Date.now()
    },
    Descripcion: {
        type: String,
        required: true

    },
    Observaciones: {
        type: String
    }

})

const modeloAvances = model("avances", esquemaAvances, "avances")

module.exports = { modeloAvances }

/* var a = moment("").format('YYYY/MM/DD HH:mm:ss')
console.log(a) */