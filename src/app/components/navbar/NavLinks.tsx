"use client";
import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

export type NavLink = {
  placeholder: string;
  link: string;
};

type Props = {
  navlinks: NavLink[];
};

const NavLinks = (props: Props) => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "end",
      }}
      gap={3}
    >
      {props.navlinks.map((navLink, index) => (
        <Grid item key={index}>
          <Link href={navLink.link}>{navLink.placeholder}</Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default NavLinks;
