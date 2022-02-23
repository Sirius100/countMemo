import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import React from 'react';

const SButton = styled(Button)`
  width: 80px;
  height: 40px;
`

export const Plus = React.memo(({ func }) => {
  console.log("render left button");
  return (
    <SButton variant="danger" onClick={func}>
      Plus
    </SButton>
  );
});
