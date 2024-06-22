import { useTranslation } from "react-i18next";
import EJobTitle from "../../common/enums/job-title.enum";
import styles from "./Contact.module.scss";

export function Contact(props: { jobTitle: EJobTitle }) {
  const { t } = useTranslation();

  return (
    <section className={styles.contactWrapper}>
      <div id="contact" className={styles.contact}>
        <h2 className="section-title">
          <span>04:</span> {t('contact.title')}
        </h2>
        <p>{t('contact.disabled_notice')} <a href="mailto:arturcmjr@gmail.com">arturcmjr@gmail.com</a></p> 
      </div>
    </section>
  );
}

export default Contact;
