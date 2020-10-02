import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory;
}
