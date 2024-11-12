import React, { useState } from "react";
import "../Estilos/opcionsalidadestino.css";
import { FaCheckCircle } from "react-icons/fa";
import { Opcionvia } from "./Opcionvia";
import { motion } from "framer-motion";
import { useConfirmacionLocalidad } from "../Hooks/useConfirmacionLocalidad";

export const OpcionLocalidadDestino = ({
  nombre,
  enviarLocalidadDestino,
  localidadDestino,
  localidadOrigen,
  enviarVia,
  index
}) => {

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
    onClick={clickearImg} >
      <div className='flex relative overflow-hidden rounded-3xl cursor-pointer w-[80px] h-[80px]'>
        <img
          src={require(`../IMG/${nombre}.avif`)}
          alt=""
          className={localidadClickeada ? "sombrearImg" : ''}
        />
         <motion.div 
        initial={{opacity: 0, scale:0}}
        animate={{opacity: confirmacionSeleccion ? 1 : 0, scale: confirmacionSeleccion ? 1:0}}
        transition={{duration: .5, ease:'backOut'}}
        className="w-full h-full flex items-center justify-center absolute ">
        <FaCheckCircle
          className='text-4xl z-50'
        />
        </motion.div>
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
      <p className='text-xs uppercase'>{nombre}</p>
    </motion.div>
  );
};
