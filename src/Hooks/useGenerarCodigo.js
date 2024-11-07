
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
    // codigo15,
    codigo16,
    // codigo18,
    codigo21,
    codigo22,
    codigo24,
    // codigo27,
    // codigo30,
    // codigo34,
    // codigo41,
    codigo44,
} from "../tarifas";

export const useGenerarCodigo = (origen,destino,via) => {

    const [codigo,setCodigo] = useState();

    useEffect(() => {
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

        if (origen === "los ralos") {
            if (destino === "cruz alta") { setCodigo(codigo10) }
            else if (destino === "finca mayo") { setCodigo(codigo11) }
            else if (destino === "esquina llona") { setCodigo(codigo12) }
            else if (destino === "cevil pozo") { setCodigo(codigo16) }
            else if (destino === "banda del río salí") { setCodigo(codigo16) }
            else if (destino === "s. m. de tucumán") { setCodigo(codigo21) }
            else if (destino === "las cejas") { setCodigo(codigo24) }
            else if (destino === "7 de abril") { setCodigo(codigo44) }
        }

        if (origen === "cevil pozo") {
            if (destino === "fila de la orilla" || destino === "fila del medio" || destino === "banda del río salí" || destino === "colonia media agua" || destino === "w. posse" || destino === "cruz alta") { setCodigo(codigo06) }
            else if (destino === "s.m. de tucumán") { setCodigo(codigo08) }
            else if (destino === "el paraíso") { setCodigo(codigo10) }
            else if (destino === "la florida") { setCodigo(codigo13) }
            else if (destino === "los ralos") { setCodigo(codigo16) }
            else if (destino === "finca mayo") { setCodigo(codigo21) }
            else if (destino === "la marta") { setCodigo(codigo22) }
        }



    }, [origen,destino, via]);

    return { codigo }
}
