import './App.css';
import Gyouji from './components/Gyouji';
import { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import Join from './components/Join';
import Exercise from './components/Exercise';
import Newspaper from './components/Newspaper';

function App() {
  const [page, setPage] = useState(0);
  
  const handleChange = (event,newValue) => {
    setPage(newValue);
  };




  return (
    <div className="App">
      <Box  className="box" sx={{ borderBottom: 1, borderColor: 'green' }}>
        <Tabs
          value={page}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          className="nav"
        >
          <Tab label="西三会のイベント" value={0} />
          <Tab label="仲間募集" value={1} />
          <Tab label="ラジオ体操" value={2} />
          <Tab label="西三会だより" value={3} />
        </Tabs>
      </Box>

      {page === 0 && <Gyouji />}
      {page === 1 && <Join />}
      {page === 2 && <Exercise />}
      {page === 3 && <Newspaper />}
    </div>
  );
}

export default App;
