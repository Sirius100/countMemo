import styled from 'styled-components';

const SScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: hsla(192, 11%, 18%, 1);
  color: hsla(346, 100%, 51%, 1);
  font-size: 3em;
  border: 1px solid black;
  border-radius: 25%;
  margin: 0 .5em;
`

export function Screen({count}){

  return(
    <SScreen>{count}</SScreen>
  )
}
