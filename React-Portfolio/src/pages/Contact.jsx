import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from '@mui/material';
import '../styles/Contact.css'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleMsgChange = (e) => {
    setMessage(e.target.value);
    setMessageError(false);
  };

  const validateEmail = (email) =>{
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = () => {
    e.preventDefault();
    let valid = true;
    if (name.length <= 5) {
        setNameError(true)
        valid = false;
    } if (!validateEmail(email)) {
        setNameError(true);
        valid = false;
    } if (message.length < 150) {
        setMessageError(true);
        valid = false;
    } if (valid) {
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        setName('');
        setEmail('');
        setMessage('');
        setMessageSent(true);
    }
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="center" id="contact-container">
      <Grid item>
        <Typography variant="h5">Contact Me</Typography>
      </Grid>
      <Grid item>
        <form id="contact-form" onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <TextField
                label="Name"
                value={name}
                onChange={handleNameChange}
                error={nameError}
                helperText={nameError ? "Name must be longer than 5 characters" : ""}
                id="contact-name"
              />
            </Grid>
            <Grid item>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError ? "Please enter a valid email address" : ""}
                id="contact-email"
              />
            </Grid>
            <Grid item>
              <TextField
                label="Message"
                multiline
                rows={4}
                value={message}
                onChange={handleMsgChange}
                error={messageError}
                helperText={messageError ? "Message must be at least 150 characters long" : ""}
                id="contact-message"
              />
            </Grid>
            <Grid item>
              <Button id="contact-submit" variant="contained" color="primary" type="submit">Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item>
        {messageSent && <Typography variant="body1" style={{ color: 'green' }}>Message sent successfully!</Typography>}
      </Grid>
    </Grid>
  );
  }

export default Contact;
