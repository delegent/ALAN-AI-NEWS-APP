import React, { useState, useEffect, createRef } from "react";
import classNames from "classnames";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import useStyles from "./style";
export default function NewsCard({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticle
}) {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);
  return (
    <>
      <Card
        ref={elRefs[i]}
        className={classNames(
          classes.card,
          activeArticle === i ? classes.activeCard : null
        )}
      >
        <CardActionArea href={url} target="_blank">
          <CardMedia
            className={classes.media}
            image={
              urlToImage ||
              "https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png"
            }
          />
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary " component="h2">
              {new Date(publishedAt).toDateString()}
            </Typography>
            <Typography variant="body2" color="textSecondary " component="h2">
              {source.name}
            </Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant="h5">
            {" "}
            {title}{" "}
          </Typography>
          <CardContent>
            <Typography
              style={{ color: "#cfd0d1" }}
              variant="body1"
              color="textSecondary"
              component="p"
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button size="small" style={{ color: "#218ffc" }}>
            Learn More
          </Button>
          <Typography
            variant="p"
            style={{ color: "#218ffc", fontFamily: "sans-serif" }}
          >
            {i + 1}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}
