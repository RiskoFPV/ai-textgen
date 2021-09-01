import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputWindow = ( { onChangeInput  }) => {
  return (
        <form noValidate autoComplete="off">           
          <div>
            <TextField
              id="filled-multiline-static"
              label="Type some text to let AI finish your thought"
              multiline
              rows={4}
              fullWidth
              placeholder="Type your input here..."
              variant="filled"
              onChange={onChangeInput}
            />
          </div>
        </form>
  )
};
export default InputWindow;