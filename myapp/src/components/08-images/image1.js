import React from 'react'
import image1Src from "../../assets/img/image1.jpg";

const Image1 = () => {

  return (
    <div>
        {/* Görüntü dosyaları public klasörü içinde ise*/}
        <img src="logo512.png"/>

        {/* Görüntü dosyaları src klasörü içinde ise*/}
        <img src={image1Src}/>
        <img src={require("../../assets/img/image2.jpg")}/>

    </div>
  )
}

export default Image1