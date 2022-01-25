import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    position: "fixed",
    left: 0,
    bottom: 0,
    color: "black",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "120px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  link: {
    textDecoration: "none",
    color: "rgba(21, 101, 192)"
  },
  image: {
    marginLeft: 20
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: "3%",
    borderRadius: 10,
    color: "white",
    backgroundColor: "rgba(21, 101, 192)",
    margin: "0 12px",
    textAlign: "center",
    height: "25vmin",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
      width: "100%",
      height: "initial",
      "&:nth-of-type(1)": {
        marginBottom: "12px"
      }
    }
  },
  infoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  logoContainer: {
    padding: "0 5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center"
    }
  },
  logo: {
    height: "40vmin",
    borderRadius: "15%",
    padding: "0 5%",
    margin: "3% 0",
    [theme.breakpoints.down("sm")]: {
      height: "35vmin"
    }
  },
  main: {
    color: "#2e8ff0",
    width: "100%",
    fontFamily: "Poppins,sans-serif",
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "0",
    paddingBottom: "0",
    fontSize: "2.5rem",
    textShadow: "1px 1px 2px #79daf2,-1px -1px 2px #79daf2",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    }
  }
}));
