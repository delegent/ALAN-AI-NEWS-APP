import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "50vh",
    padding: "10%",
    borderRadius: 10,
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "sans-serif",
    boxShadow: "5px 5px 10px #111, -5px -5px 10px #4a4a4a"
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  }
});
