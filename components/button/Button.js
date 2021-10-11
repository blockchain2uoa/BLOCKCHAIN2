import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons({text}) {

  //  function uploadDoc(){
       
  //  }
  //  onClick = {() => uploadDoc() }

  return (

    <Stack direction="row" spacing={2}>
      <Button variant="contained" >{text}</Button>
    </Stack>
  );
}