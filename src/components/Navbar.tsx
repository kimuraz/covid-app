import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {
  AppBar,
  Menu,
  MenuItem,
  Typography,
  Toolbar,
  Button,
} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Language as LangIcon} from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    link: {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
      cursor: 'pointer',
      marginRight: theme.spacing(2),
      '&.active': {
        color: theme.palette.text.primary,
      },
    },
  }),
);

const Navbar: React.SFC = () => {
  const {t, i18n} = useTranslation();
  const classes = useStyles();
  const [lang, setLang] = useState<string | null>(localStorage.getItem('lang'));

  useEffect(() => {
    lang && localStorage.setItem('lang', lang);
  }, [lang]);

  const selectLang = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {t('title')}
        </Typography>

        <NavLink activeClassName="active" to="/" className={classes.link} exact>
          <Typography variant="body1">{t('navbar.reports')}</Typography>
        </NavLink>
        <NavLink activeClassName="active" to="/about " className={classes.link}>
          <Typography variant="body1">{t('navbar.about')}</Typography>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/contribute"
          className={classes.link}>
          <Typography variant="body1">{t('navbar.contribute')}</Typography>
        </NavLink>

        <Typography
          variant="overline"
          onClick={() => selectLang('ptBr')}
          className={classes.link}>
          PT-BR
        </Typography>

        <Typography
          variant="overline"
          onClick={() => selectLang('en')}
          className={classes.link}>
          EN
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
