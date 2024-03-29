// TODO: use modules
import "./Contact.scss";
import { useForm } from "react-hook-form";
import { Button, Grid, TextField, useTheme } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import axios from "axios";
import EJobTitle from "../../common/enums/job-title.enum";
import { useTranslation, Trans } from "react-i18next";

export function Contact(props: { jobTitle: EJobTitle }) {
  const [emailSentFrom, setEmailSentFrom] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const { t } = useTranslation();

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
          <span>04:</span> {t('contact.title')}
        </h2>
        <p>{t('contact.description')}</p>
        {renderContent()}
      </div>
    </section>
  );
}

function SubmitSuccess(props: { onSendAnother: () => void; email: string }): JSX.Element {
  const { onSendAnother, email } = props;
  const { t } = useTranslation();
  return (
    <div className="submit-success">
      <h3>{t('contact.form.submit_success.title')}</h3>
      <p>
        <Trans i18nKey="contact.form.submit_success.description" values={{ email }}></Trans>
      </p>
      <Button variant="outlined" type="submit" color="secondary" onClick={onSendAnother}>
        {t('contact.form.submit_success.button')}
      </Button>
    </div>
  );
}

function SubmitError(): JSX.Element {
  const theme = useTheme();
  const errorColor = theme.palette.error.main;
  const { t } = useTranslation();
  return (
    <div className="submit-error">
      <h3 style={{ color: errorColor }}>
        {t('contact.form.submit_error.title')}
      </h3>
      <p>
        <Trans i18nKey="contact.form.submit_error.description"></Trans> <a href="mailto:arturcmjr@gmail.com" className="underline">arturcmjr@gmail.com</a>
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
  const { t } = useTranslation();
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
            label={t('contact.form.name.label')}
            variant="outlined"
            className="w-100"
            error={!!errors.name}
            helperText={errors.name?.message?.toString()}
            {...register("name", {
              required: t('contact.form.name.required') || '',
              maxLength: { value: 35, message: t('contact.form.name.max_length') },
            })}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            label={t('contact.form.email.label')}
            variant="outlined"
            className="w-100"
            error={!!errors.email}
            helperText={errors.email?.message?.toString()}
            {...register("email", {
              required: t('contact.form.email.required') || '',
              pattern: {
                value: emailRegex,
                message: t('contact.form.email.not_valid'),
              },
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={t('contact.form.message.label')}
            placeholder={t('contact.form.message.placeholder') || ''}
            className="w-100"
            rows={5}
            multiline
            error={!!errors.message}
            helperText={errors.message?.message?.toString()}
            {...register("message", {
              required: t('contact.form.message.required') || '',
              maxLength: {
                value: 750,
                message: t('contact.form.message.max_length') || '',
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
          {t('contact.form.submit_button')}
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
