import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

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

export default function AddEmployee() {
  let history = useHistory();
  const classes = useStyles();
  const [firstLoad, setLoad] = React.useState(true);

  var empData = localStorage.getItem("empData");
  const [selectedDate, setSelectedDate] = React.useState(empData != "" ? new Date(Date.parse(JSON.parse(empData).dob)) : new Date("1998-04-02T21:11:54"));
  const [dateValue, setDateValue] = React.useState(empData != "" ? JSON.parse(empData).dob :"1998-04-02");
  const [firstName, setFirstName] = React.useState(empData != "" ? JSON.parse(empData).firstName : "");
  const [lastName, setLastName] = React.useState(empData != "" ? JSON.parse(empData).lastName : "");
  const [email, setEmail] = React.useState(empData != "" ? JSON.parse(empData).email : "");
  const [gender, setGender] = React.useState(empData != "" ? JSON.parse(empData).gender : "");
  const [phoneNo, setphoneNo] = React.useState(empData != "" ? JSON.parse(empData).phoneNo : "");
  const [id, setId] = React.useState(empData != "" ? JSON.parse(empData).id : 0);


  const handleDateChange = event => setSelectedDate(event.target.value);
  const handleFirstNameChange = event => setFirstName(event.target.value);
  const handleLastNameChange = event => setLastName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handleGenderChange = event => setGender(event.target.value);
  const handlephoneNoChange = event => setphoneNo(event.target.value);

  const [message, setMessage] = React.useState("Nothing saved in the session");

  async function sampleFunc(toInput) {
    const response = await fetch("/api/employee", {
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
    console.log(body.id);
    if(body.id){
      history.push("/view");
    }
    setMessage(body.id ? "Data sucessfully updated" : "Data updation failed");
  }

  const handleSubmit = variables => {
    
    const toInput = empData != "" ? { id,firstName,lastName, email, gender, dob: selectedDate,phoneNo } : { firstName,lastName, email, gender, dob: selectedDate,phoneNo };
    sampleFunc(toInput);
    setLastName("");
    setFirstName("");
    setEmail("");
    setGender("");
  };

  if (firstLoad) {
    setLoad(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GroupIcon />
        </Avatar>
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
                id="firstName"
                value={firstName}
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                onChange={handleFirstNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                value={lastName}
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                onChange={handleLastNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                value={email}
                id="email"
                label="Email"
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="gender"
                value={gender}
                label="Gender"
                name="gender"
                autoComplete="gender"
                onChange={handleGenderChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Date of birth"
                type="date"
                defaultValue={dateValue}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                onChange={handleDateChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNo"
                value={phoneNo}
                label="Phone number"
                name="phoneNo"
                autoComplete="phoneNo"
                onChange={handlephoneNoChange}
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
            Save
          </Button>

          <Grid container justify="center">
            <Grid item>
              <Link to="/view">View Employee Records</Link>
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
