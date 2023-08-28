import { useState, useEffect } from "react";
import { rgbToHex } from "../utils/helpers";

const SingleColor = ({rgb, type, weigth}) => {
  const [message, setMessage] = useState(false);
  
  const copyColor = () =>{
    navigator.clipboard.writeText(rgbToHex(...rgb))
    .then(() => setMessage(true))
    .catch(err => console.log(err));
  };
  useEffect(() => {
    const timer = setTimeout(() =>{
      setMessage(false);
    },3000);

    return () => clearTimeout(timer);
  },[message]);

  return (
    <article
      onClick={copyColor} 
      className={`single-color ${type}`} style={{backgroundColor: rgbToHex(...rgb)}}
      >
      <h5>{rgbToHex(...rgb)}</h5> 
      {message && <p>Colore Copiato</p>}
    </article>
  )};
  
export default SingleColor;