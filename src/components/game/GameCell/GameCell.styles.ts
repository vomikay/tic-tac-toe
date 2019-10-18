import { makeStyles } from "@material-ui/styles";
import { FieldValue } from "../../../redux";

type Props = {
  value: FieldValue;
};

export default makeStyles<undefined, Props>({
  root: {
    backgroundColor: "transparent",
    height: 116,
    width: 116,
    padding: 10,
    border: "0 none",
    color: ({ value }) => (value === "X" ? "#bbb" : "#4395c7"),
    "&:focus": { outline: "none" },
    "&:hover": { cursor: "pointer" }
  }
});
