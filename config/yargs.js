
const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
            .command('crear', 'Crear un elemento por hacer', {
                descripcion
            })
            .command('actualizar', 'Actualiza el estado completado de una tarea', {
                descripcion,
                completado
            })
            .command('listar', 'Lista todos los cosas por hacer')
            .command('borrar', 'borra un elemento de la lista', {
                descripcion
            })
            .help()
            .argv;

module.exports = {
    argv
}