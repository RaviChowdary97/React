import { Counter } from "./App";

function Msg({ name, picture }) {
  return (
    <div>
      <>
        <img className="profile-pic" src={picture} alt={name} />
        <h1>{name}</h1>
        <Counter />
      </>
    </div>
  );
}
