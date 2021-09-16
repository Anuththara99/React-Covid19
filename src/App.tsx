import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GlobalDataFetch from './component/GlobalDataFetch'
import CountryDataFetch from './component/CountryDataFetch'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
 

  return (
    <div className="App">
      <div style={{height:400, backgroundImage: 'url(img/covidbg.png)',backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>

      </div>
      <div >
        <Tabs variant='fullWidth' value={value} onChange={handleChange} centered >
          <Tab label="Global Coronavirus Information"  />
          <Tab label="User Data"  />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div>
            <GlobalDataFetch/>
          </div>
          <div>
            <CountryDataFetch/>
          </div>
        
        </TabPanel>
        <TabPanel value={value} index={1}>
        User Data
        </TabPanel>
        
      </div>
    </div>
  );
}

export default App
