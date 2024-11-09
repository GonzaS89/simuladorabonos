import React, { useState } from "react";
import "../Estilos/opcionsalidadestino.css";
import { FaCheckCircle } from "react-icons/fa";
import { Opcionvia } from "./Opcionvia";
import { motion } from "framer-motion";
import { useConfirmacionLocalidad } from "../Hooks/useConfirmacionLocalidad";
import { useHeight } from "../Hooks/useHeight";

export const OpcionLocalidadDestino = ({
  nombre,
  enviarLocalidadDestino,
  localidadDestino,
  localidadOrigen,
  enviarVia,
  index
}) => {

  const {height} = useHeight;

  const definirTamañoImg = () => {
    if(height > 800){return 'w-[80px] h-[80px]' }
    else{return 'w-[60px] h-[60px]'}
  }

  const [viaElegida, setViaElegida] = useState(null);
  const {localidadClickeada,
    nombreOpcionVia,
    opcionesViasVisibles,
    confirmacionSeleccion} = useConfirmacionLocalidad(localidadOrigen,localidadDestino,nombre)

  const clickearImg = () => {
    enviarLocalidadDestino(nombre);
  };

  const recibirVia = data => {
    setViaElegida(data);
    enviarVia(data);
  };

  return (
    <motion.div 
    initial={{y: '20%', opacity:0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration:.5,  delay: index * .2, ease:'backOut'}}
    onClick={clickearImg}>
      <div className={`flex justify-center items-center relative ${definirTamañoImg()} overflow-hidden rounded-3xl cursor-pointer`}>
        <img
          src={require(`../IMG/${nombre}.avif`)}
          alt=""
          className={localidadClickeada ? "sombrearImg" : ""}
        />
        <FaCheckCircle
          className={
            confirmacionSeleccion
              ? "icono-checked mostrarIconoCheked"
              : "icono-checked hidden"
          }
        />
        <div
          className={
            opcionesViasVisibles
              ? "container-opciones-vias"
              : "container-opciones-vias hidden"
          }
        >
          <Opcionvia
            nombre={nombreOpcionVia}
            enviarVia={recibirVia}
            viaElegida={viaElegida}
            localidadDestino={localidadDestino}
          />
          <Opcionvia
            nombre={"w. posse"}
            enviarVia={recibirVia}
            viaElegida={viaElegida}
            localidadDestino={localidadDestino}
          />
        </div>
      </div>
      <p className="text-sm">{nombre}</p>
    </motion.div>
  );
};
