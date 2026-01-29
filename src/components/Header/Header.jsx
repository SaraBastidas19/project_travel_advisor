import React from "react";
import { Autocomplete, Box } from "@mui/material";
import { AppBar, Toolbar, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import useStyles from "./styles.js";


const Header = () => {

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display= "flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput}}/>

              </div>
              <InputBase />

            </div>
          {/*</Autocomplete>*/}

        </Box>
        <Autocomplete
          style={{ width: 300 }}
          freeSolo
          options={[]}
          renderInput={(params) => (
            <InputBase
              ref={params.InputProps.ref}
              placeholder="Search..."
              inputProps={params.inputProps}
            />
          )}
        />
      </Toolbar>
    </AppBar> 
  );
}

export default Header;