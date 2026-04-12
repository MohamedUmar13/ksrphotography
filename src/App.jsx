import FloatingButton from './components/FloatingButton';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import AppRoutes from './routes/route';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import ContactUscopy from './pages/ContactUs copy';

export default function App() {
  

  return (
    <>
      <TopBar />
      <AppRoutes />
      {/* <ContactUs /> */}
      <FloatingButton />
      <BottomBar />
    </>
  )
}


