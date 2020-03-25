import React from 'react';

interface Params {
  r0: number;
  isSymptomatic: number;
}

interface Demography {
  population: number;
  recovered: number;
  fatalities: number;
  infected: number;
  asymptomatic: number;
  exposed: number;
}

interface Epidemiology {
  r0: number;
  ifr: number;
  cfr: number;
  hfr: number;
  hcfr: number;
}

interface HealthyParams {
  hospitalDays: number;
  icuDays: number;
  peakHospitalDemand: number;
  hospSurgeCapacity: number;
  hospTotal: number;
  peakICUDemand: number;
  icuSurgeCapacity: number;
  icuTotal: number;
}

interface Invariants {
  sumOfCompartments: number;
}

const RSeixa: React.SFC = () => null;
