//obtiene diferencia de años
export function obtenerDifYear( year) {
    return new Date().getFullYear() - year;
}

//total a pagar segun la marca
export function calcularMarca(marca) {
    let incremento;

    switch (marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}
//tipo de seguro
export function calcularPlan(plan) {
    return ( plan === 'basico') ? 1.20 : 1.50;
}
// Muestra la primer letra mayuscula
export function primerMayuscula( texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
