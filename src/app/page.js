'use client';
import AverageCalculator from "./AvarageCalculator";
import EjemploImmer from "./EjemploImmer";
import LimitedCounter from "./LimitedCounter";
import LiveValidationForm from "./LiveValidationForm";
import ShoppingList from "./ShoppingList";
import StudentList from "./StudentList";
import SurveySimulator from "./SurveySimulator";
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
      <h1>Ejercicio 9</h1>
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
      <h1>Ejercicio Immer</h1>
      <EjemploImmer/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
