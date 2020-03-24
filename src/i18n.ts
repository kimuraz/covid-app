import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './translations/en';
import ptBr from './translations/ptBr';

const resources: any = {
  en,
  ptBr,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ptBr',
});

export default i18n;
