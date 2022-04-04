import { useContext } from "react";
import { AppContext } from "./AppContext";

const Account = () => {
  const { currentUser } = useContext(AppContext);
  return <>{JSON.stringify(currentUser)}</>;
};

export default Account;
