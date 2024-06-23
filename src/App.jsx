import { useState } from "react";
import phrases from "./assets/phrases.json";
import { getRandomNumber } from "./utils/getRandom";
import Phrase from "./Componentes/Phrase/Phrase";
import Button from "./Componentes/Button/Button";
import surreal from "./assets/surreal.jpg";
import skull from "./assets/skull.jpg";
import fantasy2 from "./assets/fantasy2.jpg";
import fantasy1 from "./assets/fantasy1.jpg";
import book from "./assets/book.jpg";

import "./App.css";

/*
 MANEJO DE IMAGENES EN VITE

 1. LO RECOMENDADO SIEMPRE ES USAR UN URL.
 2. GUARDAR LA IMAGEN EN ALGUNA CARPETA DE SRC.
    -AL GUARDARSE EN  SRC: LAS IMAGENES  DEVEN IMPORTARSE EXPLICITAMENTE, Y  USARSE LA
    VARIABLE QUE SE ENTREGA. DE LO CONTRARIO VITE, ASUME QUE NO LAS NECESITAS Y NO LAS
    INCLYE EN EL COMPILADO
 3. GUARDAR LA IMAGEN EN LA CARPETA PUBLIC
    -ESTAS NO SE DEBEN IMPORTAR Y DEBEN HACERSE REFERENCIA A ELLAS ASUMIENDO LA RAIZ "/"
    COMO LA CARPETA PUBLIC
*/

function App() {
  const backgrounds = [surreal, skull, fantasy1, fantasy2, book];

  const getRamdonPhrase = () => phrases[getRandomNumber(phrases.length - 1)];

  const getRandomBackground = () =>
    backgrounds[getRandomNumber(backgrounds.length - 1)];

  const [phrasesObject, setPhraseOdject] = useState(getRamdonPhrase());
  const [background, setBackground] = useState(getRandomBackground());

  const changePhrase = () => {
    let newPhrase = getRamdonPhrase();

    while (newPhrase === phrasesObject) {
      newPhrase = getRamdonPhrase();
    }

    setPhraseOdject(newPhrase);
  };

  const changeBackground = () => {
    let newBackground = getRandomBackground();

    while (newBackground === background) {
      newBackground = getRandomBackground();
    }
    setBackground(newBackground);
  };

  const handlerClick = () => {
    changePhrase();
    changeBackground();
  };

  return (
    <div
      className="container_app"
      style={{ backgroundImage: `url("${background}")` }}
    >
      <h1>Famous phrases</h1>

      <Phrase phrase={phrasesObject.quote} />
      <p>
        Author: <mark>{phrasesObject.author}</mark>
      </p>
      <div className="btn_container">
        <Button handlerClick={handlerClick} />
      </div>
    </div>
  );
}

export default App;
