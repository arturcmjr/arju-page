import "./Contact.scss";
import { useForm } from "react-hook-form";
import { Alert, Grid, Paper, Snackbar, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import axios from "axios";
import EJobTitle from "../../common/enums/job-title.enum";

export function Contact(props: { jobTitle: EJobTitle }) {
  const { jobTitle } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(0);
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; /* eslint-disable-line */

  const onSubmitted = () => {
    setSubmittedStatus(1);
    setIsSubmitting(false);
  };
  const onSubmitError = (err: any) => {
    setSubmittedStatus(-1);
    setIsSubmitting(false);
  };
  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    sendEmail(
      data.email,
      data.name,
      data.message,
      EJobTitle[jobTitle].toLowerCase()
    )
      .then(onSubmitted)
      .catch(onSubmitError);
  };

  return (
    <section className="contact-wrapper">
      <div id="contact">
        <h2 className="section-title">
          <span>04:</span> Get In Touch
        </h2>
        <p>
          Feel free to contact me and I'll get back to you as soon as possible.
        </p>
        <p>
          Please, have in mind that if you have a job offer, I need flexible
          hours until June 25. I'll be taking short classes from Monday to
          Friday in the afternoon yet I can work in the morning, at night and if
          necessary on weekends.
        </p>
        <Paper elevation={0} style={{ padding: "1rem", marginTop: "1rem" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={4}>
                <TextField
                  label="Name"
                  variant="outlined"
                  className="w-100"
                  error={!!errors.name}
                  helperText={errors.name?.message?.toString()}
                  {...register("name", {
                    required: "Name is necessary",
                    maxLength: { value: 35, message: "Name is too long" },
                  })}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Email"
                  variant="outlined"
                  className="w-100"
                  error={!!errors.email}
                  helperText={errors.email?.message?.toString()}
                  {...register("email", {
                    required: "Email is necessary",
                    pattern: {
                      value: emailRegex,
                      message: "Email is not valid",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  placeholder="Write here your message"
                  className="w-100"
                  rows={5}
                  multiline
                  error={!!errors.message}
                  helperText={errors.message?.message?.toString()}
                  {...register("message", {
                    required: "Message is necessary",
                    maxLength: {
                      value: 750,
                      message: "Please, write a shorter message",
                    },
                  })}
                />
              </Grid>
            </Grid>
            <div className="submit-container">
              <LoadingButton
                variant="outlined"
                type="submit"
                className="submit-btn"
                loading={isSubmitting}
                size="large"
              >
                submit
              </LoadingButton>
            </div>
          </form>
        </Paper>
      </div>
    </section>
  );
}

function sendEmail(
  email: string,
  name: string,
  message: string,
  jobTitle: string
) {
  return axios.post(
    `${process.env.REACT_APP_AZURE_FUNCTIONS_URL}ContactMeEmail?`,
    {
      email,
      name,
      message,
      jobTitle,
    }
  );
}

export default Contact;
