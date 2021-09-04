import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../redux/api/users";

export default function Board() {
  const isAuth = useSelector((state) => state.users.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) {
      dispatch(auth());
    }
  }, [dispatch, isAuth]);

  return (
    <div>
      {isAuth ? ('test') : ('netest')}
    </div>
  );
}