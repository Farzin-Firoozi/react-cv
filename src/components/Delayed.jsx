import { useState, useEffect } from "react";

const DelayedComponent = ({ waitBeforeShow, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return !show ? null : children;
};

export default DelayedComponent;
