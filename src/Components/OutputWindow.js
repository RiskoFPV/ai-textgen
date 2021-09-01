import React from 'react';
import TextField from '@material-ui/core/TextField';

const OutputWindow = ( {text} ) => {
  return (
        <form noValidate autoComplete="off">           
          <div>
            <TextField
              id="filled-multiline-static"
              label="Your output will show up here"
              multiline
              rows={15}
              fullWidth
              variant="filled"
              disabled
              value={text}
            />
          </div>
        </form>
  )
};
export default OutputWindow;