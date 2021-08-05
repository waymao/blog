import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from './social-media.module.css';
import { DevpostLogo } from './devpost-logo';

export default function SocialMedia() {
  return <div className={styles.socialMedia}>
    <a href="https://github.com/waymao/">
      <FontAwesomeIcon icon={faGithub}/>
    </a>
    <a href="https://www.linkedin.com/in/yichen-wei-556349141/">
      <FontAwesomeIcon icon={faLinkedin}/>
    </a>
    <a href="https://devpost.com/waymao">
      {DevpostLogo}
    </a>
  </div>
}
