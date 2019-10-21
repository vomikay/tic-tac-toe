import { makeStyles } from "@material-ui/core";
import icon from "../../../resources/no-game.png";

export default makeStyles({
  empty: {
    alignSelf: "center",
    margin: "auto",
    textAlign: "center"
  },
  emptyIcon: {
    height: 150,
    width: 150,
    backgroundImage: `url(${icon})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  }
});
