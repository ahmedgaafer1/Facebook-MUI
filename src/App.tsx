
import React from 'react';
import { Box } from '@mui/material';
import { CustomThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainFeed from './components/MainFeed';
import RightSidebar from './components/RightSidebar';

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Header />
        
        <Box sx={{ display: 'flex', width: '100%' }}>
          {/* Left Sidebar */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Sidebar />
          </Box>

          {/* Main Content */}
          <MainFeed />

          {/* Right Sidebar */}
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <RightSidebar />
          </Box>
        </Box>
      </Box>
    </CustomThemeProvider>
  );
};

export default App;
