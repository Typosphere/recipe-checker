import "./TextInput.css";

export const TextInput = ({ changeFn }) => {
  return <input className="TextInput" type="text" placeholder= "Search your recipe" onChange={changeFn}></input>;
};