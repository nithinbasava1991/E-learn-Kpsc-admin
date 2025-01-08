// material-ui
import { useTheme } from '@mui/material/styles';
import LogoImg from '../assets/images/Logo.jpeg';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Berry" width="100" />
     *
     */
    <img width="180" height="50" viewBox="0 0 92 32" fill="none" src={LogoImg} />
  );
};

export default Logo;
