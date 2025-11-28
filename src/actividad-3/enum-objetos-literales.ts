//Definicion de un tipo literal
type orderStatus = 'pending' | 'shipped' | 'delivered';

//Asigno un valor a orderStatus
const orderStatus : orderStatus = 'pending';

//Lo muestro por consola
console.log(orderStatus)

//Enum

enum logLevel {
    Info,
    Warning,
    Error
}

function logMessage(level:logLevel, message:string){
    console.log(`${level}${message}`)
}
logMessage(logLevel.Info, "El numero que se muestra, corresponde al indice del orden del tipo enum")