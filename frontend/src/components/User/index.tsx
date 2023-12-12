import { Link } from "react-router-dom";

export interface UserProps {}

export const User: React.FC<UserProps> = (props) => {
  return (
    <div>
      <h1>UserPage</h1>
      <Link to="/example">Example</Link>
    </div>
  );
};
