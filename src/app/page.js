'use client';
import AverageCalculator from "./AvarageCalculator";
import Gallery from "./Gallery";
import GuessTheNumber from "./GuessTheNumber";
import ImageGallery from "./ImageGallery";
import LimitedCounter from "./LimitedCounter";
import LiveValidationForm from "./LiveValidationForm";
import LoginForm from "./LoginForm";
import MultiCounter from "./MultiCounter";
import ShoppingList from "./ShoppingList";
import StudentList from "./StudentList";
import SurveySimulator from "./SurveySimulator";
import SurveySimulator2 from "./SurveySimulator2";
import TextCarousel from "./TextCarousel";
import ThemeSelector from "./ThemeSelector";
import UserTable from "./userTable";

export default function Home() {
  return (
    <div>
      <h1>Ejercicio 1</h1>
      <StudentList/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 2</h1>
      <LimitedCounter/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 3</h1>
      <AverageCalculator/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 4</h1>
      <SurveySimulator/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 5</h1>
      <ShoppingList/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 6</h1>
      <LoginForm/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 7</h1>
      <ImageGallery imagenes={[
        { src: 'https://picsum.photos/200/300?random=1', alt: 'Imagen 1' },
        { src: 'https://picsum.photos/200/300?random=2', alt: 'Imagen 2' },
        { src: 'https://picsum.photos/200/300?random=3', alt: 'Imagen 3' }
      ]}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 8</h1>
      <MultiCounter/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 9</h1>
      <UserTable/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 10</h1>
      <ThemeSelector/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 12</h1>
      <UserTable/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 13</h1>
      <LiveValidationForm/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 14</h1>
      <SurveySimulator2/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Ejercicio 15</h1>
      <TextCarousel frases={[
         { frase:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
         { frase:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa' },
         { frase:'quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit' }
      ]}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Carrusel de imagenes</h1>
      <Gallery />
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
