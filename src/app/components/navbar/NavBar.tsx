"use client";

import { Container, Grid } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import NavLinks, { NavLink } from "./NavLinks";

type Props = {
  navLinks: NavLink[];
};

const NavBar = (props: Props) => {
  [{ placeholder: "", link: "" }];
  return (
    <Container>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid
          item
          sm={12}
          md={4}
          sx={{ display: "flex", alignItems: "center" }}
          gap={1}
        >
          <Logo size={40} />
          InkWave
        </Grid>
        <Grid item sm={12} md={8}>
          <NavLinks navlinks={props.navLinks} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBar;
