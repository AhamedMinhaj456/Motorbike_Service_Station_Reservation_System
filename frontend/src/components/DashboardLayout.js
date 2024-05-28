import React ,{useState}from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Topbar from './dashboard/scenes/global/Topbar';
import Sidebar from './dashboard/scenes/global/Sidebar';
import Dashboard from './dashboard/scenes/dashboard';
import Team from './dashboard/scenes/team';
import PaymentReservations from './dashboard/scenes/payments';
import ReservationHistory from './dashboard/scenes/history';
import Bar from './dashboard/scenes/bar';
import Form from './dashboard/scenes/form';
import Line from './dashboard/scenes/line';
import Pie from './dashboard/scenes/pie';
import FAQ from './dashboard/scenes/faq';
import Geography from './dashboard/scenes/geography';
import Calendar from '../components/dashboard/scenes/calender/calender';
import Chatbot from './Chatbot';

const DashboardLayout = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="app-content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/history" element={<ReservationHistory />} />
              <Route path="/payment-reservations" element={<PaymentReservations />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/chatbot" element={<Chatbot />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default DashboardLayout;
