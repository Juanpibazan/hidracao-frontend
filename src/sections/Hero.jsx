import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {GiLips} from 'react-icons/gi';
import {MdHighQuality} from 'react-icons/md';
import {AiOutlineRise} from 'react-icons/ai';
import {BsPersonStandingDress, BsPersonStanding} from 'react-icons/bs';

import ProductImg from '../assets/img/hidracao-product.jpg';

const Hero = ()=>{
    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: -10, opacity: 0 }, show:{ x:0, opacity:1} }
    const h1Variants = {
        hidden: {
          x: '-100%',
          y: 0,
        },
        show: {
          x: 0,
          y: 0,
          transition: {
            type: 'spring',
            delay: 0.5,
            duration: 2,
            ease: "easeOut",
          },
        },
      };

      const productImgVariants = {
        hidden: {
          x: 0,
          y: '200%',
        },
        show: {
          x: 0,
          y: 0,
          transition: {
            type: 'spring',
            delay: 0.5,
            duration: 2,
            ease: "easeOut",
          },
        },
      };
    
    const productDescriptionVariants = {
        hidden: {
          x: 0,
          y: 0,
          opacity: 0
        },
        show: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            delay: 0.5,
            duration: 5,
            ease: "easeOut",
          },
        },
      };   

    return (
        <div className='relative flex flex-col min-h-screen bg-[#ececec]'>
            <div id='product'>
                <motion.h1
                initial='hidden'
                animate='show'
                variants={h1Variants}
                className='text-center text-[#333c3a] font-bold text-4xl leading-normal mt-[70px]'
                >
                    Hidracao Lipstick
                </motion.h1>
                <motion.div
                variants={productImgVariants}
                initial='hidden'
                animate='show'
                className='px-1'
                >
                    <img 
                    src={ProductImg}
                    />
                </motion.div>
                <div className='flex justify-center items-start gap-2 my-4'>
                    <button
                    className='rounded-md bg-[#a56650] text-[#fff] text-3xl px-16 py-6 font-bold shadow-lg shadow-slate-400 hover:bg-[#522814] active:bg-[#522814]'
                    >Pedir</button>
                </div>
                <motion.div
                variants={productDescriptionVariants}
                initial='hidden'
                animate='show'
                >
                    <h2 className='text-center text-[#333c3a] font-bold text-4xl leading-normal'>Hidracao: Nutrición Natural para Tus Labios</h2>
                    <div className='px-4'>
                      <div className='bg-[#f9ddd4] rounded-md shadow-md border-3 border-[#333c3a] active:bg-[#e1bb98] hover:bg-[#e1bb98]'>
                        <div className='px-4 py-2'>
                          <GiLips className='text-[#333c3a] text-4xl' />
                        </div>
                        <h3 className='text-2xl text-[#333c3a] font-bold px-4 py-2'>Descubre el poder de la naturaleza en cada aplicación.</h3>
                        <p className='leading-relaxed text-xl text-[#333c3a] text-left px-4 py-2'>Hidracao es más que un simple chapstick. Es el resultado de una dedicación artesanal al cacao puro, cuidadosamente seleccionado para brindarte una hidratación profunda y duradera. Imagina unos labios suaves y protegidos, envueltos en la calidez de ingredientes naturales, libres de químicos y aditivos.</p>
                      </div>
                      <br/>
                      <div className='bg-[#f9ddd4] rounded-md shadow-md border-3 border-[#333c3a] active:bg-[#e1bb98] hover:bg-[#e1bb98]'>
                        <div className='px-4 py-2'>
                            <MdHighQuality className='text-[#333c3a] text-4xl' />
                          </div>
                        <h3 className='text-2xl text-[#333c3a] font-bold px-4 py-2'>Date el lujo que mereces.</h3>
                        <p className='leading-relaxed text-xl text-[#333c3a] text-left px-4 py-2'>En cada barra de Hidracao llevas contigo el sabor auténtico del cacao y su toque de lujo natural, pensado para nutrir y revitalizar. Perfecto para cualquier temporada, cada aplicación es un momento para reconectar con lo esencial: el cuidado y la calidad que tus labios merecen.</p><br/>
                      </div>
                      <br/>
                      <div className='bg-[#f9ddd4] rounded-md shadow-md border-3 border-[#333c3a] active:bg-[#e1bb98] hover:bg-[#e1bb98]'>
                        <div className='px-4 py-2'>
                            <AiOutlineRise className='text-[#333c3a] text-4xl' />
                        </div>
                        <h3 className='text-2xl text-[#333c3a] font-bold px-4 py-2'>Hidrata. Protege. Eleva tu rutina.</h3>
                        <p className='leading-relaxed text-xl text-[#333c3a] text-left px-4 py-2'>
                        Prueba Hidracao y siéntete en armonía con la naturaleza en cada uso.</p>
                      </div>
                    </div>
                    <br/>

                </motion.div>
                <div className='flex justify-center items-start gap-2 mt-4'>
                    <button
                    className='rounded-md bg-[#a56650] text-[#fff] text-3xl px-16 py-6 font-bold shadow-lg shadow-slate-400 hover:bg-[#522814] active:bg-[#522814]'
                    >Pedir</button>
                </div>

            </div>

            <div id='who-are-we'
            className='flex flex-col gap-4 bg-[#e8d9bf] px-6 py-[50px] mt-[50px]'
            >
              <motion.h1
              className='text-center text-[#333c3a] font-bold text-4xl leading-normal'
              >Quienes somos?</motion.h1>
              <p className='text-2xl text-[#333c3a]'>Esta idea nació de un grupo de jóvenes inquietos del Colegio Internacional de la Sierra. La intención original fue desarrollar un producto para la feria de ciencias pero al investigar sobre el cacao y sus propiedas entendieron el poder de este fruto y todo su potencial.</p>
              {/*<ul className='list-disc'>
                <li>Yara Arias</li>
                <li>Luana Ergueta</li>
                <li>Matias Hurtado</li>
                <li>Eduardo Krutzfeldt</li>
                <li>Valeska Vaca</li>
                <li>Giomara Lopez</li>
                <li>Abigail Osinaga</li>
                <li>Ivan Velez</li>
                <li>Victoria Vargas</li>
              </ul> */}
              <div>
                <div className='bg-white px-4 py-2 flex flex-col items-center justify-start gap-2 rounded-md shadow-xl shadow-slate-600'>
                  <h2 className='text-center text-[#333c3a] font-bold text-3xl leading-normal'>Yara Arias</h2>
                  <div className='bg-[#e8d9bf] w-[100px] h-[100px] rounded-full flex justify-center items-center'>
                    <BsPersonStandingDress className='text-[#a56650] text-[70px]' />
                  </div>
                  <p className='text-center'>
                   Una breve descripcion de su aporte o puesto en el emprendimiento. 
                  </p>
                </div>
              </div>
            </div>
        </div>
    )
};

export default Hero;