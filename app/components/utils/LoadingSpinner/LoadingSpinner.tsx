import { FunctionComponent } from "react";
import classes from "./LoadingSpinner.module.scss";

interface LoadingSpinnerProps {}

const LoadingSpinner: FunctionComponent<LoadingSpinnerProps> = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        <div className={`${classes.cell} ${classes.cell__d__zero}`}></div>
        <div className={`${classes.cell} ${classes.cell__d__one}`}></div>
        <div className={`${classes.cell} ${classes.cell__d__two}`}></div>

        <div className={`${classes.cell} ${classes.cell__d__one}`}></div>
        <div className={`${classes.cell} ${classes.cell__d__two}`}></div>

        <div className={`${classes.cell} ${classes.cell__d__two}`}></div>
        <div className={`${classes.cell} ${classes.cell__d__three}`}></div>

        <div className={`${classes.cell} ${classes.cell__d__three}`}></div>
        <div className={`${classes.cell} ${classes.cell__d__four}`}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
