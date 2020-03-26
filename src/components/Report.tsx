import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  CircularProgress,
  Typography,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import {Search as SearchIcon} from '@material-ui/icons';
import {Autocomplete} from '@material-ui/lab';

interface Region {
  [id: string]: string;
}

const Report: React.SFC = () => {
  const {t} = useTranslation();
  const [regions, setRegions] = useState<Region>({});
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [loadingRegion, setLoadingRegion] = useState<boolean>(true);
  const [loadingData, setLoadingData] = useState<boolean>(true);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/kimuraz/covid-app/master/data/br_regions.json',
    )
      .then(res => res.json())
      .then(data => {
        setRegions(data);
        setLoadingRegion(false);
      });
  }, []);

  useEffect(() => {}, [selectedRegion]);

  const selectRegion = (evt: any): void => {
    const regionRef = Object.keys(regions).find(
      key => regions[key] === evt.target.value,
    );
    setSelectedRegion(regionRef || '');
  };

  return (
    <main>
      <Typography variant="h6">{t('report.introductionTitle')}</Typography>
      <Typography variant="subtitle1">{t('report.introductionP1')}</Typography>
      <br />
      <Typography variant="subtitle1">{t('report.introductionP2')}</Typography>
      <br />
      <Typography variant="subtitle1">{t('report.introductionP3')}</Typography>
      <br />
      {loadingRegion ? (
        <CircularProgress />
      ) : (
        <Autocomplete
          freeSolo
          autoSelect
          autoComplete
          options={Object.values(regions)}
          onChange={selectRegion}
          value={regions[selectedRegion] || ''}
          renderInput={params => (
            <TextField
              {...params}
              placeholder={t('report.region')}
              margin="normal"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      )}
    </main>
  );
};

export default Report;
