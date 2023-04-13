import { Link } from 'react-router-dom';

const SocialIcon = ({ Icon, url, className }) => (
  <Link to={url} target="_blank">
    <Icon className={className} />
  </Link>
);

export default SocialIcon;
