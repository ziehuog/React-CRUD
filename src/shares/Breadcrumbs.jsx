
import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Container } from "@mui/material";
import  './Breadcrumbs.css';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
    <Container fixed>
      <div>
      <div className="breadcrumbs">
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <div key={match.url}>
          <Link className="bc--link" to={match.url || ""}>{breadcrumb}</Link>
          {index < breadcrumbs.length - 1 && " / "}
        </div>
      ))}
    </div>
      </div>
      </Container>
    </>
  );
};

export default Breadcrumbs;
