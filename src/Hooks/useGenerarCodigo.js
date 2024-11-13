
import { useState, useEffect } from "react";
import {
    codigo06,
    codigo08,
    codigo10,
    codigo11,
    codigo12,
    codigo13,
    codigo14,
    codigo15,
    codigo16,
    codigo18,
    codigo20,
    codigo21,
    codigo22,
    codigo24,
    codigo26,
    codigo27,
    codigo30,
    codigo34,
    codigo44
} from "../tarifas";

export const useGenerarCodigo = (origen, destino, via) => {

    const [codigo, setCodigo] = useState();

    useEffect(() => {

        // SAN MIGUEL DE TUCUMAN

        if (origen === 's. m. de tucumán') {
            const destinos = {
                'banda del rio salí': codigo06,
                'cevil pozo': codigo08,
                'alderetes':codigo08,
                'colonia media agua':codigo10,
                'esquina llona':codigo12,
                'fila del medio':codigo12,
                'fila de la orilla':codigo12,
                'el talar':codigo13,
                'cruz alta':codigo15,
                'el paraíso':codigo18,
                'los ralos':codigo21,
                'la marta':codigo27,
                'las cejas':codigo34,
                '7 de abril':codigo44
            }
            if(via === null){
                if(destinos[destino]){setCodigo(destinos[destino])}

            }else if (via === 'w. posse'){setCodigo(codigo21)}
            else{setCodigo(codigo16)}
        }
        // BANDA DEL RIO SALI

        if (origen === 'banda del río salí') {
            const destinos = {
                's. m. de tucumán': codigo06,
                'colonia media agua': codigo06,
                'fila de la orilla':codigo06,
                'fila del medio':codigo06,
                'w. posse':codigo08,
                'el paraíso':codigo10,
                'los ralos':codigo16,
                'finca mayo':codigo21,
                'la marta':codigo22,
                'las cejas':codigo30,
                '7 de abril':codigo44
            }
            if (via === null){
                if(destinos[destino]){setCodigo(destinos[destino])}
            }else if (via === 'w. posse'){setCodigo(codigo14)}
            else{setCodigo(codigo11)}
        }

         // CEVIL POZO

        if (origen === "cevil pozo") {

            const destinos = {
                'colonia media agua':codigo06,
                'esquina llona':codigo06,
                'fila del medio':codigo06,
                'fila de la orilla':codigo06,
                'cevil pozo':codigo06,
                'w. posse':codigo06,
                's. m. de tucumán':codigo08,
                'el paraíso':codigo10,
                'la florida':codigo13,
                'fortin':codigo13,
                'colonia 4 (luisiana)':codigo13,
                'los ralos':codigo14,
                'finca mayo':codigo21,
                'la marta':codigo22,
                'las cejas':codigo30,
                '7 de abril':codigo44
            }
            if(destinos[destino]){setCodigo(destinos[destino])}
        }

        //COLONIA MEDIA AGUA - LLONA

        if (['colonia media agua', 'esquina llona','fila de la orilla', 'fila del medio'].includes(origen)){
            const destinos = {
                'banda del rio salí': codigo06,
                'cevil pozo':codigo06,
                'w. posse':codigo06,
                'cruz alta':codigo06,
                'el paraíso':codigo08,
                's. m. de tucumán':codigo10,
                'la florida':codigo11,
                'colonia 4 (luisiana)':codigo11,
                'fortin': codigo11,
                'los ralos':codigo12,
                'finca mayo':codigo20,
                'la marta':codigo21,
                'las cejas':codigo30,
                '7 de abril':codigo44
            }
            if(destinos[destino]){setCodigo(destinos[destino])}
        }

        // FLORIDA - COLONIA 4 - FORTIN

        if (['la florida', 'fortín', 'colonia 4 (luisiana)'].includes(origen)){
            const destinos = {
                'la florida' : codigo06,
                'fortín':codigo06,
                'colonia 4 (luisiana)':codigo06,
                'el paraíso':codigo06,
                'w. posse':codigo06,
                'fila de la orilla':codigo08,
                'esquina llona':codigo08,
                'alderetes':codigo08,
                'el talar':codigo08,
                'colonia media agua':codigo11,
                'cevil pozo':codigo13,
            }
            if(via === null){ if(destinos[destino]){setCodigo(destinos[destino])}}
            else if(destino === 'banda del río salí'){ 
                if(via === 'w. posse')
                    {setCodigo(codigo14)}
                else{setCodigo(codigo11)}
            }else if(destino === 's. m. de tucumán'){
                if(via === 'w. posse'){setCodigo(codigo21)}else{setCodigo(codigo16)}
            }
        }

        // LA FLORIDA - FORTIN - COL 4

        const destinosCortosPosse = ['el paraíso', 'la florida', 'fila del medio', 'fila de la orilla', 'colonia media agua', 'fortín', 'colonia 4 (luisiana)', 'cevil pozo'];

        const posseYFilas = ['w. posse', 'fila del medio', 'fila de la oriila']

        if (posseYFilas.includes(origen)) {
            if (destinosCortosPosse.includes(destino)) {
                setCodigo(codigo06)
            }
            else if (destino === "banda del río salí") { setCodigo(codigo08) }
            else if (destino === "s. m. de tucumán") { setCodigo(codigo15) }
        }

        if(origen === 'el paraíso'){
            const destinos = {
                'la florida' : codigo06,
                'colonia 4 (luisiana)': codigo06,
                'fortín':codigo06,
                'fila de la orilla':codigo06,
                'w. posse':codigo06,
                'colonia media agua':codigo08,
                'cevil pozo':codigo10,
                'banda del río salí':codigo11,
                's. m. de tucumán':codigo21
            }
            if(destinos[destino]){
                setCodigo(destinos[destino])
            }
        }

        // ALDERETES

        if(origen === 'alderetes'){
            const destinos = {
                'banda del río salí':codigo06,
                'el talar':codigo06,
                's. m. de tucumán':codigo08,
                'la florida':codigo08,
                'fortín':codigo08,
                'colonia 4 (luisiana)':codigo08,
                'finca mayo':codigo20,
                'la marta':codigo21
            }
            if(destinos[destino]){
                setCodigo(destinos[destino])
            }
        }

        // EL TALAR

        if(origen === 'el talar'){
            const destinos = {
                'la florida':codigo06,
                'alderetes':codigo06,
                'banda del río salí':codigo06,
                's. m. de tucumán':codigo13,
                'finca mayo':codigo16,
                'alabama':codigo16
            }
            if(destinos[destino]){
                setCodigo(destinos[destino])
            }
        }

        // LOS RALOS

        if (origen === "los ralos") {
            if (destino === "finca mayo") { setCodigo(codigo08) }
            else if (destino === "cruz alta") { setCodigo(codigo10) }
            else if (['esquina llona', 'colonia media agua', 'la marta'].includes(destino)) { setCodigo(codigo12) }
            else if (destino === "cevil pozo") { setCodigo(codigo14) }
            else if (destino === "banda del río salí") { setCodigo(codigo16) }
            else if (destino === "s. m. de tucumán") { setCodigo(codigo21) }
            else if (destino === "las cejas") { setCodigo(codigo26) }
            else if (destino === "7 de abril") { setCodigo(codigo44) }
        }

        // FINCA MAYO - ALABAMA

        if (['finca mayo', 'alabama'].includes(origen)){
            const destinos = {
                'finca mayo':codigo06,
                'alabama':codigo06,
                'la marta':codigo06,
                'los ralos':codigo08,
                'la florida':codigo10,
                'fortín':codigo10,
                'el talar':codigo16,
                'alderetes':codigo20,
                'colonia media agua':codigo20,
                'esquina llona':codigo20,
                'banda del río salí':codigo21,
                'cevil pozo':codigo21,
                's. m. de tucumán':codigo24
            }
            if(destinos[destino]){
                setCodigo(destinos[destino])
            }
        }
    }, [origen, destino, via]);

    return { codigo }
}
