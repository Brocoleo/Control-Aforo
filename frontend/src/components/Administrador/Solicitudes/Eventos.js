import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../assets/eventos.json'

const Eventos = () => {

    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div>
        <Lottie options={defaultOptions} height={120} width={120}  speed={0.3}/>
        </div>
    )
}

export default Eventos