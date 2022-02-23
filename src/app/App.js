import React, { useReducer, useCallback } from 'react';
import reducer from '../reducer/reducer'
import styled from 'styled-components'
import {Minus} from '../buttonL/button'
import {Plus} from '../buttonR/button'
import { Screen } from '../screen/screen';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyleApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: hsla(86, 5%, 71%, 1);
`
function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  const countMinus = useCallback( () => dispatch({type:'minus'}), []);
  const countPlus = useCallback( () => dispatch({type:'plus'}), []);

  return (
    <StyleApp>
      <Minus func={countMinus}/>
      <Screen count={state}/>
      <Plus func={countPlus}/>
    </StyleApp>
  );

}

export default App;
