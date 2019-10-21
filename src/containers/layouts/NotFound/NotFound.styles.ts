import { makeStyles } from "@material-ui/core";
import icon from "../../../resources/not-found.jpg";

export default makeStyles({
  container: {
    alignSelf: "center",
    margin: "auto",
    textAlign: "center"
  },
  notFound: {
    height: 150,
    width: 150,
    backgroundImage: `url(${icon})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  }
});
