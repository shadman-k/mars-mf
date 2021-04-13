import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const LogInForm = () => {
  return (
    <form className="form">
      <TextField
        id="outlined"
        label="User ID"
        defaultValue="Enter Username"
        variant="outlined"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        // autoComplete="current-password"
        variant="outlined"
      />
      <input type="submit" />
    </form>
  )
}

export default LogInForm;