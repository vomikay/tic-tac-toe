import React from "react";
import Layout from "../Layout/Layout";
import useStyles from "./NotFound.styles";
import { Typography } from "@material-ui/core";

const NotFound: React.FC = () => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.notFound}></div>
        <Typography variant="h6">Not found</Typography>
      </div>
    </Layout>
  );
};

export default NotFound;
