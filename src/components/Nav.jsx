import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react'

const Nav = () => {
  const [value,setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    console.log(value);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="西三会のイベント" value="0" />
          <Tab label="仲間募集" value="1" />
          <Tab label="ラジオ体操" value="2" />
          <Tab label="西三会だより" value="3" />
        </Tabs>
      </Box>

      <Gyouji />
    </>
  );
}

export default Nav