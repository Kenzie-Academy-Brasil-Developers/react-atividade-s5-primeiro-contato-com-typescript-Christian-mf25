interface UserProps {
  name: string;
  age: number;
  hobby: string;
}

export const Card = ({ name, age, hobby }: UserProps) => (
  <li>
    <h3>Name: {name}</h3>
    <p>Age: {age}</p>
    <p>Hobby: {hobby}</p>
  </li>
);
