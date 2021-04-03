import CURRENCIES from "./currencies";

const SLIDER_CONFIG = currency => [
  {
    title: "Home price",
    sliderConfig: {
      step: 1000,
      min: 50000,
      max: 500000,
      markMiddle: 100000,
      labelMin: `50.000${CURRENCIES[currency].symbol}`,
      labelMiddle: `100.000${CURRENCIES[currency].symbol}`,
      labelMax: `500.000${CURRENCIES[currency].symbol}`,
      sliderState: "homePrice",
      endAdornment: CURRENCIES[currency].symbol
    }
  },
  {
    title: "Down Payment (20%)",
    sliderConfig: {
      step: 10,
      min: 10000,
      max: 100000,
      markMiddle: 50000,
      labelMin: `10.000${CURRENCIES[currency].symbol}`,
      labelMiddle: `50.000${CURRENCIES[currency].symbol}`,
      labelMax: `100.000${CURRENCIES[currency].symbol}`,
      sliderState: "downPayment",
      endAdornment: CURRENCIES[currency].symbol
    }
  },
  {
    title: "Duration in months",
    sliderConfig: {
      step: 1,
      min: 20,
      max: 240,
      markMiddle: 120,
      labelMin: "20 months",
      labelMiddle: "120 months",
      labelMax: "240 months",
      sliderState: "durationInMonths",
      endAdornment: <small>months</small>
    }
  }
];

export default SLIDER_CONFIG;
