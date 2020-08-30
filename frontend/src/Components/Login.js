import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import '../index.css';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  }
}));

export default function Login() {
  let history = useHistory();
  const classes = useStyles();
  const [firstLoad, setLoad] = React.useState(true);

  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNameChange = event => setName(event.target.value);
  const handlPasswordChange = event => setPassword(event.target.value);

  const [message, setMessage] = React.useState("");

  async function sampleFunc(toInput) {
    const response = await fetch("/api/validateUser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
    let body = await response.json();
    console.log(body.status);
    if(body.status){
      history.push("/view");
    }
    else{
      setMessage(body.status ? "Login successful" : "Invalid credentials, please try again");
    }
    
  }

  const handleSubmit = variables => {
    const toInput = { name, password };
    sampleFunc(toInput);
    setName("");
    setPassword("");
  };

  if (firstLoad) {
    // sampleFunc();
    setLoad(false);
  }

  return (
   
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
        
        <Typography component="h1" variant="h5">
          Employee Portal
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                value={name}
                label="Name"
                name="name"
                autoComplete="name"
                onChange={handleNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="password"
                name="password"
                variant="outlined"
                required
                fullWidth
                value={password}
                id="password"
                label="password"
                type="password"
                onChange={handlPasswordChange}
              />
            </Grid>


          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            preventDefault
            className={classes.submit}
            onClick={handleSubmit}
          >
            Login
          </Button>

          <Grid container justify="center">
            <Grid item>
              <Link to="/SignUp">Create a new account</Link>
            </Grid>
          </Grid>
        </form>
        <Typography style={{ margin: 7 }} variant="body1">
          Status: {message}
        </Typography>
      </div>
    </Container>
  );
}
