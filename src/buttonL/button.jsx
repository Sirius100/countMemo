import styled from 'styled-components';
import React from 'react';
import Button from 'react-bootstrap/Button';


const SButton = styled(Button)`
  width: 80px;
  height: 40px;
`

export const Minus = React.memo(({ func }) => {
  console.log("render left button");
  return (
    <SButton variant="danger" onClick={func}>
      Minus
    </SButton>
  );
});
