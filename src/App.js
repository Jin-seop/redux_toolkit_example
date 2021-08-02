import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {Msg,postUser} from './store/user'
function App() {

  const userMsg = useSelector(Msg)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postUser())
  }, [dispatch])
  return (
    <div >
      {userMsg}
    </div>
  );
}

export default App;
