import { makeStyles } from "@material-ui/styles";
import { FieldValue } from "../../redux";

export default makeStyles<undefined, { value: FieldValue }>({
  root: {
    backgroundColor: "#fff",
    height: 116,
    width: 116,
    padding: 10,
    border: "0 none",
    color: ({ value }) => (value === "X" ? "#bbb" : "#4395c7"),
    "&:focus": { outline: "none" }
  }
});
