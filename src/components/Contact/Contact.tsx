import "./Contact.scss";
import { useForm } from "react-hook-form";
import {
  Alert,
  Button,
  Grid,
  Paper,
  Snackbar,
  TextField,
  useTheme,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import axios from "axios";
import EJobTitle from "../../common/enums/job-title.enum";

export function Contact(props: { jobTitle: EJobTitle }) {
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const onEmailSent = () => {
    setEmailSent(true);
  };

  const onEmailError = (error: string) => {
    console.log(error);
    setEmailError(error);
  };

  const renderContent = () => {
    if(!emailSent && !emailError) {
      return (
        <ContactForm
          jobTitle={EJobTitle[props.jobTitle].toLowerCase()}
          onEmailSent={onEmailSent}
          onEmailError={onEmailError}
        />
      );
    } else if(emailSent) {
      return (
        <SubmitSuccess onSendAnother={() => setEmailSent(false)} />
      );
    } else if(emailError) {
      return (
        <SubmitError />
      );
    }
  }

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
        {renderContent()}
      </div>
    </section>
  );
}

function SubmitSuccess(props: {onSendAnother: () => void}): JSX.Element {
  const { onSendAnother } = props;
  return (
    <div className="submit-success">
      <h3>Email successfully sent!</h3>
      <p>
        Thanks for the message. I'll do my best to answer you on{" "}
        <b>your@email.org</b> as soon as possible.
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
        </a>.
      </p>
    </div>
  );
}

function ContactForm(props: {
  jobTitle: string;
  onEmailSent: () => void;
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

  const onSubmitted = () => {
    props.onEmailSent();
    setIsSubmitting(false);
  };
  const onSubmitError = (err: any) => {
    props.onEmailError(err.message);
    setIsSubmitting(false);
  };
  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    sendEmail(data.email, data.name, data.message, props.jobTitle)
      .then(onSubmitted)
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
