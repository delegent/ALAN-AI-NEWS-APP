import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  media: {
    height: 250
  },
  border: {
    border: "solid"
  },
  fullHeightCard: {
    height: "60%"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "5px solid transparent",
    borderRadius: "14px",
    background: "#1a1a1a",
    boxShadow: "5px 5px 10px #262626"
  },
  activeCard: {
    borderBottom: "5px solid #2e8ff0"
  },
  grid: {
    display: "flex"
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    color: "#2e8ff0"
  },
  title: {
    padding: "0 16px",
    color: "#fff"
  },
  cardActions: {
    padding: "0 16px 8px 16px ",
    display: "flex",
    justifyContent: "space-between"
  }
});
