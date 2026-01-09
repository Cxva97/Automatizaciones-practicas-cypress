//constante, no cambia su valor  = const
//variable, si cambia su valor  = let

const Nombre_curso = 'de cypress desde 0'
let contadorGlobal = 0
function registrarEstudiantes(nombre){
    let mensaje = `Bienvenido, ${nombre}, al curso ${Nombre_curso}`
   // let mensaje1 = 'Bienvenido, '+ nombre + 'al curso' + Nombre_curso   segunda manera de hacerlo
   console.log(mensaje)

   contadorGlobal ++
}

registrarEstudiantes('Cesar')
registrarEstudiantes('Ana')

console.log('Estudiantes registrados: '+ contadorGlobal)