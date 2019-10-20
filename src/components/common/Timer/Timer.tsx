import React from "react";
import { Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography";

type Props = TypographyProps & { milliseconds: number };

const formatTime = (milliseconds: number) => {
  const date = new Date(milliseconds);
  const seconds = date.getSeconds();
  const ss = seconds < 10 ? `0${seconds}` : seconds.toString();
  const minutes = date.getMinutes();
  const mm = minutes < 10 ? `0${minutes}` : minutes.toString();
  const hours = date.getHours() + date.getTimezoneOffset() / 60;
  const hh = hours < 10 ? `0${hours}` : hours.toString();
  return `${hh}:${mm}:${ss}`;
};

const Timer: React.FC<Props> = ({
  className,
  milliseconds,
  variant,
  component
}) => {
  return (
    <Typography className={className} component={component} variant={variant}>
      {formatTime(milliseconds)}
    </Typography>
  );
};

export default Timer;
