import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Input from "./Input";

const propTypes = {
  rows: PropTypes.number,
};

const defaultProps = {
  rows: 3,
};

const TextArea = ({ className, rows, ...props }) => {
  const classes = classNames("textarea", className);

  return <Input {...props} type="textarea" className={classes} rows={rows} />;
};

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
