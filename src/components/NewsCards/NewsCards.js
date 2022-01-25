import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles.js";
const infoCards = [
  { color: "#121212", title: "Keyworded News", text: "Bitcoin, Cricket, Entertainment..." },
  {
    color: "#1a1a1a",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news"
  },
  {
    color: "#121212",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5"
  },
  {
    color: "#1a1a1a",
    title: "News by Sources",
    info: "Wired, BBC News, CNN ,Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN"
  }
];
export default function NewsCards({ articles, activeArticle }) {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color,borderBottom:"solid 5px #2e8ff0" }}
              >
                <Typography variant="p" style={{ fontWeight: "bold" }}>
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="p">
                    <strong>{infoCard.title.split(" ")[2]}:</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="p" style={{ fontWeight: "bold" }}>
                  Try Saying: <br /> <i style = {{color:"#2e8ff0"}}>{infoCard.text} </i>
                </Typography>
              </div>
            </Grid>
          ))}
          ;
        </Grid>
      </Grow>
    );
  }

  return (
    <>
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <NewsCard article={article} activeArticle={activeArticle} i={i} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </>
  );
}
