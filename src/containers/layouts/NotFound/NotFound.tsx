import React from "react";
import { Typography } from "@material-ui/core";
import Layout from "../Layout/Layout";

const NotFound: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h6" component="h2">
        404 Not Found
      </Typography>
    </Layout>
  );
};

export default NotFound;
