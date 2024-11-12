
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

        if (origen === 's.m. de tucumán') {
            if (destino === 'banda del río salí') { setCodigo(codigo06) }
            else if (['cevil pozo', 'alderetes'].includes(destino)) { setCodigo(codigo08) }
            else if (destino === 'colonia media agua') { setCodigo(codigo10) }
            else if (['esquina llona', 'fila del medio', 'fila de la orilla'].includes(destino)) { setCodigo(codigo12) }
            else if (destino === 'el talar') { setCodigo(codigo13) }
            else if (destino === 'cruz alta') { setCodigo(codigo15) }
            else if (['la florida', 'fortín', 'colonia 4 (luisiana)'].includes(destino)) {
                if (via === 'w. posse') { setCodigo(codigo21) }
                else { setCodigo(codigo16) }
            }
            else if (destino === 'los ralos') { setCodigo(codigo21) }
            else if (destino === 'la marta') { setCodigo(codigo27) }
            else if (destino === 'las cejas') { setCodigo(codigo34) }
            else if (destino === '7 de abril') { setCodigo(codigo44) }
        }
        // BANDA DEL RIO SALI

        if (origen === 'banda del río salí') {
            if (['cevil pozo', 's.m. de tucumán', 'colonia media agua', 'esquina llona', 'fila de la orilla', 'fila del medio'].includes(destino)) { setCodigo(codigo06) }
            else if ('w. posse') { setCodigo(codigo08) }
            else if ('el paraíso' === destino) { setCodigo(codigo10) }
            else if (['la florida', 'fortín', 'colonia 4 (luisiana)'].includes(destino)) {
                if (via === 'w. posse') { setCodigo(codigo14) }
                else { setCodigo(codigo11) }
            }
            else if (destino === 'los ralos') { setCodigo(codigo16) }
            else if (destino === 'finca mayo') { setCodigo(codigo21) }
            else if (destino === 'la marta') { setCodigo(codigo22) }
            else if (destino === 'las cejas') { setCodigo(codigo30) }
            else if (destino === "7 de abril") { setCodigo(codigo44) }
        }

         // CEVIL POZO

        if (origen === "cevil pozo") {
            if (['colonia media agua', 'esquina llona', 'cruz alta', 'fila de la orilla', 'fila del medio', 'banda del río salí', 'cevil pozo', 'w. posse'].includes(destino)) { setCodigo(codigo06) }
            else if (destino === "s.m. de tucumán") { setCodigo(codigo08) }
            else if (destino === "el paraíso") { setCodigo(codigo10) }
            else if (['la florida', 'fortín', 'colonia 4 (luisiana)'].includes(destino)) { setCodigo(codigo13) }
            else if (destino === "los ralos") { setCodigo(codigo14) }
            else if (destino === "finca mayo") { setCodigo(codigo21) }
            else if (destino === "la marta") { setCodigo(codigo22) }
            else if (destino === "las cejas") { setCodigo(codigo30) }
            else if (destino === "7 de abril") { setCodigo(codigo44) }

        }

        //COLONIA MEDIA AGUA - LLONA

        if (['colonia media agua', 'esquina llona','fila de la orilla', 'fila del medio'].includes(origen)){
            if(['banda del río salí','cevil pozo','w. posse', 'fila de la orilla','fila del medio','cruz alta']){setCodigo(codigo06)}
            else if(destino === 'el paraíso'){setCodigo(codigo08)}
            else if(['la florida', 'fortín','colonia 4 (luisiana)'].includes(destino)){setCodigo(codigo11)}
            else if(destino === 'los ralos'){setCodigo(codigo12)}
            else if(destino === 'finca mayo'){setCodigo(codigo20)}
            else if(destino === 'la marta'){setCodigo(codigo21)}
            else if(destino === 'las cejas'){setCodigo(codigo30)}
            else if(destino === '7 de abril'){setCodigo(codigo44)}
        }

        // FLORIDA - COLONIA 4 - FORTIN

        const floridaFortinCol4L = ['la florida', 'fortín', 'colonia 4 (luisiana)'];
        const destinosCortosFlorida = ['la florida', 'fortín', 'w. posse', 'el talar', 'el paraíso'];
        const destinoMedianosFlorida = ['alderetes', 'fila de orilla', 'esquina llona'];

        //POSSE

        if (floridaFortinCol4L.includes(origen)) {
            if (destinosCortosFlorida.includes(destino)) {
                setCodigo(codigo06)
            }
            else if (destinoMedianosFlorida.includes(destino)) {
                setCodigo(codigo08)
            }
            else if (destino === 'colonia media agua') { setCodigo(codigo11) }
            else if (destino === 'cevil pozo') { setCodigo(codigo13) }
            else if (destino === 'banda del río salí') {
                if (via === 'w. posse') { setCodigo(codigo14) }
                else { setCodigo(codigo11) }
            }
            else if (destino === 's. m. de tucumán') {
                if (via === 'w. posse') { setCodigo(codigo21) }
                else { setCodigo(codigo16) }
            }
        }

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
                's.m. de tucumán':codigo21
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
                's.m. de tucumán':codigo08,
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
                's.m. de tucumán':codigo13,
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
                's.m. de tucumán':codigo24
            }
            if(destinos[destino]){
                setCodigo(destinos[destino])
            }
        }

    }, [origen, destino, via]);

    return { codigo }
}
