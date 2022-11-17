import "./Contact.scss";
import { useForm } from "react-hook-form";
import { Button, Grid, TextField, useTheme } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import axios from "axios";
import EJobTitle from "../../common/enums/job-title.enum";

export function Contact(props: { jobTitle: EJobTitle }) {
  const [emailSentFrom, setEmailSentFrom] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const onEmailError = (error: string) => {
    setEmailError(error);
  };

  const renderContent = () => {
    if (!emailSentFrom && !emailError) {
      return (
        <ContactForm
          jobTitle={EJobTitle[props.jobTitle].toLowerCase()}
          onEmailSent={(email) => setEmailSentFrom(email)}
          onEmailError={onEmailError}
        />
      );
    } else if (emailSentFrom) {
      return <SubmitSuccess onSendAnother={() => setEmailSentFrom(null)} email={emailSentFrom} />;
    } else if (emailError) {
      return <SubmitError />;
    }
  };

  return (
    <section className="contact-wrapper">
      <div id="contact">
        <h2 className="section-title">
          <span>04:</span> Get In Touch
        </h2>
        <p>Feel free to contact me and I'll get back to you as soon as possible.</p>
        {renderContent()}
      </div>
    </section>
  );
}

function SubmitSuccess(props: { onSendAnother: () => void; email: string }): JSX.Element {
  const { onSendAnother, email } = props;
  return (
    <div className="submit-success">
      <h3>Email successfully sent!</h3>
      <p>
        Thanks for the message. I'll do my best to answer you on <b>{email}</b> as soon as possible.
      </p>
      <Button variant="outlined" type="submit" color="secondary" onClick={onSendAnother}>
        Send another message
      </Button>
    </div>
  );
}

function SubmitError(): JSX.Element {
  const theme = useTheme();
  const errorColor = theme.palette.error.main;
  return (
    <div className="submit-error">
      <h3 style={{ color: errorColor }}>
        I'm sorry, looks like the email couldn't be sent right now.
      </h3>
      <p>
        But don't worry you can try again later or email me on{" "}
        <a href="mailto:arturcmjr@gmail.com" className="underline">
          arturcmjr@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

function ContactForm(props: {
  jobTitle: string;
  onEmailSent: (email: string) => void;
  onEmailError: (error: string) => void;
}): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; /* eslint-disable-line */

  const onSubmitted = (email: string) => {
    props.onEmailSent(email);
    setIsSubmitting(false);
  };
  const onSubmitError = (err: any) => {
    props.onEmailError(err.message);
    setIsSubmitting(false);
  };
  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    sendEmail(data.email, data.name, data.message, props.jobTitle)
      .then(() => onSubmitted(data.email))
      .catch(onSubmitError);
  };
  return (
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
  );
}

function sendEmail(email: string, name: string, message: string, jobTitle: string) {
  return axios.post(`${process.env.REACT_APP_FUNCTIONS_URL}/sendEmail`, {
    email,
    name,
    message,
    jobTitle,
  });
}

export default Contact;
