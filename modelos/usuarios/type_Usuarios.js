const { gql } = require("apollo-server-express");

const type_Usuarios = gql `

    enum enum_Roles{
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }

    enum enum_EstadoRegistro{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    enum enum_EstadoInscripcion{
        PENDIENTE
        ACEPTADA
        RECHAZADA
    }

    type Usuario{
        _id: ID!
        Primer_Nombre: String!
        Segundo_Nombre: String
        Primer_Apellido: String!
        Segundo_Apellido: String!
        Correo: String!
        Identificacion: String!
        Contrasena: String!
        Rol: enum_Roles!
        Estado: enum_EstadoRegistro!
        Proyectos_Liderados: [Proyecto]
        Inscripciones: [Inscripcion]
    }

    type Query{
        listarUsuarios: [Usuario]
        buscarUsuario(
            _id: String
            correoOidentificacion: String
            FiltroInscripciones: enum_EstadoInscripcion
        ):Usuario
    }
    
    type Mutation{
        crearUsuario(
            Primer_Nombre: String!
            Segundo_Nombre: String
            Primer_Apellido: String!
            Segundo_Apellido: String!
            Correo: String!
            Identificacion: String!
            Contrasena: String!
            Rol: enum_Roles!
        ): Usuario

        editarUsuario_Id(
            _id:ID!
            Primer_Nombre: String
            Segundo_Nombre: String
            Primer_Apellido: String
            Segundo_Apellido: String
            Correo: String
            Identificacion: String
            Contrasena: String
            Estado: enum_EstadoRegistro
        ): Usuario

        eliminarUsuario(
            _id: String
            Correo: String
            Identificacion: String
        ):Usuario
    }

`

module.exports = { type_Usuarios }