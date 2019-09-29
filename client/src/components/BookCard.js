import React from "react";
import DarkButton from "./DarkButton";
import { withStyles, Typography, Link } from "@material-ui/core";
import classnames from "classnames";

const styles = theme => ({
  cardColumn: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "no-wrap",
    backgroundColor: "transparent",
    color: "#053f5e",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "max-content",
    minWidth: "min-content"
  },
  cardRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "no-wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    color: "#053f5e"
  },
  root: {
    backgroundColor: "rgba(255,255,255,0.75)",
    color: "#022c43",
    margin: `${theme.spacing.unit * 1.5}px`,
    borderRadius: `${theme.spacing.unit * 1.5}px`,
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)"
  },
  margin: {
    margin: `${theme.spacing.unit}px`
  },
  padding: {
    padding: `${theme.spacing.unit * 1.5}px`
  },
  thumbnail: {
    margin: `${theme.spacing.unit}px`,
    padding: `${theme.spacing.unit}px`,
    border: `1px solid #rgba(0,0,0,0.47)`,
    boxShadow: `1px 1px 2px 1px #000000`,
    borderRadius: `${theme.spacing.unit / 2}px`
  },
  anchorLink: {
    textDecoration: "none",
    color: "#022c43",
    "&:hover": {
      opacity: 0.6,
      cursor: "pointer"
    }
  }
});

const BookCard = props => {
  const { buttonText, index, title, description, publishedDate, link, authors, image } = props;
  const { cardColumn, cardRow, margin, padding, thumbnail, root, anchorLink } = props.classes;
  return (
    <div className={classnames(root, cardRow)}>
      <div className={cardColumn}>
        <img src={image} className={thumbnail} alt={title} />
      </div>

      <div className={classnames(cardColumn, margin)}>
        <div className={classnames(cardRow, margin, padding)}>
          <Link className={anchorLink} href={link} target="_blank" rel="noopener">
            {title}
          </Link>
          <Typography className={margin}>{authors}</Typography>
          <Typography className={margin}>{publishedDate}</Typography>
        </div>
        <div>
          <Typography className={margin}>{description}</Typography>
        </div>
        <div className={classnames(cardRow, padding)}>
          <DarkButton
            className={margin}
            onClick={() => {
              props.clickFunction(index, title);
            }}
          >
            {buttonText}
          </DarkButton>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(BookCard);
