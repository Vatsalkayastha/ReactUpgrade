import { people } from "../../data";
import Person from "./Person";
const Basics = () => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default Basics;
