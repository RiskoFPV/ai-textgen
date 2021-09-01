import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const GenerateTextButton = ( {onButtonPress, loading} ) => {
      return (
        <div>
            <Button 
            variant="contained" 
            color="primary"
            onClick={onButtonPress}
            disabled={loading}
            >
            Generate text
            </Button>
            { loading && <CircularProgress></CircularProgress> }
        </div>
      )
};
export default GenerateTextButton;