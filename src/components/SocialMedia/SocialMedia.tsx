import "./SocialMedia.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";

export function SocialMedia() {
  const { t} = useTranslation();
  return (
    <div>
      <div className="made-by">{t('common.made_by')}</div>
      <div className="social-media">
        <a
          className="social-media-item"
          href="https://github.com/arturcmjr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          className="social-media-item"
          href="https://linkedin.com/in/arturcmjr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          className="social-media-item"
          href="mailto:arturcmjr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
