import React from "react";
import { Autocomplete, Box } from "@mui/material";
import { AppBar, Toolbar, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Travel Advisor
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
            Explore new places
          </Typography>
          <Box 
            sx={{ 
              position: 'relative',
              borderRadius: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.25)' },
              mr: 2,
              ml: 0,
              width: '100%',
              '@media (min-width: 600px)': { ml: 3, width: 'auto' },
            }}
          >
            <Box sx={{ 
              padding: '0 16px', 
              height: '100%', 
              position: 'absolute', 
              pointerEvents: 'none', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
            }}>
              <SearchIcon />
            </Box>
            <InputBase 
              placeholder="Search..."
              sx={{ 
                color: 'inherit',
                '& .MuiInputBase-input': {
                  padding: '8px 8px 8px 0', 
                  paddingLeft: '40px', 
                  transition: 'width 300ms',
                  width: '100%', 
                  '@media (min-width: 960px)': { width: '20ch' },
                }
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar> 
  );
}

export default Header;