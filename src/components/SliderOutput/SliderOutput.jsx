import React from "react";
import PropTypes from "prop-types";
import { Grid, InputAdornment, Slider, TextField } from "@material-ui/core";

const SliderOutput = ({
  title,
  sliderValues,
  setSliderValues,
  sliderConfig
}) => {
  return (
    <Grid container spacing={5} alignItems="center">
      <Grid item xs={9}>
        <p>{title}</p>
        <Slider
          defaultValue={0}
          aria-labelledby="discrete-slider-custom"
          onChangeCommitted={e =>
            setSliderValues({
              ...sliderValues,
              [sliderConfig.sliderState]: e.target.ariaValueNow
            })
          }
          step={sliderConfig.step}
          min={sliderConfig.min}
          max={sliderConfig.max}
          marks={[
            {
              value: sliderConfig.min,
              label: sliderConfig.labelMin
            },
            {
              value: sliderConfig.markMiddle,
              label: sliderConfig.labelMiddle
            },
            {
              value: sliderConfig.max,
              label: sliderConfig.labelMax
            }
          ]}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          value={sliderValues[sliderConfig.sliderState]}
          variant="outlined"
          disabled
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {sliderConfig.endAdornment}
              </InputAdornment>
            )
          }}
        />
      </Grid>
    </Grid>
  );
};

SliderOutput.propTypes = {
  title: PropTypes.string,
  sliderValues: PropTypes.object,
  setSliderValues: PropTypes.func,
  sliderConfig: PropTypes.object
};

export default SliderOutput;
