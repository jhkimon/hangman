import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {Button} from '../components/Button';

const ModifiedButton = styled(Button)`
    margin: 10px;
    
`

function Main() {
  return (
    <div>
      
      <ModifiedButton />
    </div>
  );
}

export default Main;