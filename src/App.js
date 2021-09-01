
import './App.css';
import InputWindow from './Components/InputWindow';
import OutputWindow from './Components/OutputWindow';
import GenerateTextButton from './Components/GenerateTextButton';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
const App = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();

  const [input, setInput] = useState(
    'input'
  );
  const [output, setOutput] = useState(
    ''
  );
  const [loading, setLoading] = useState(
    false
  );

  const [apikey, setApikey] = useState(
    ''
  );

  const handleInput = event => setInput(event.target.value);
  const handleApikey = event => setApikey(event.target.value);

  const handleButton = () => {
    setOutput('holdon');
    // generate text logic here
    // show loading indicator - using state
    setLoading(true);
    console.log(input);
    //make api call
    
    const requestOptions = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-rapidapi-host": "gpt-text-generation.p.rapidapi.com",
          "x-rapidapi-key": apikey
        },
        body: JSON.stringify({
          prompt: input,
          temperature: 0.8
        })
    }
    fetch("https://gpt-text-generation.p.rapidapi.com/completions?temperature=1&top_k=999&stream=false&seed=0", requestOptions)
    .then(response => response.json())
    .then(data => setOutput(data.generation))
    .then (() => setLoading(false))
    .catch(err => {
      setOutput('there was an error. oops!');
      setLoading(false);
    });
    
  }
  return (
    <div className="App">
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <p>AI TextGen Demo</p>
        </Grid>
        <Grid item xs={9}>  
        </Grid>
        <Grid item xs={9}>
          <InputWindow onChangeInput={handleInput}></InputWindow>
        </Grid>
        <Grid item xs={3}>
          <p>Insert api key</p>
          <input onChange={(e) => {handleApikey(e)}}></input>
        </Grid>
        <Grid item xs={9}>
          <GenerateTextButton onButtonPress={handleButton} loading={loading}></GenerateTextButton>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={9}>
          <OutputWindow text={output}></OutputWindow>
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default App;
