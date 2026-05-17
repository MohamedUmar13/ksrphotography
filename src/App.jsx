import FloatingButton from './components/FloatingButton';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import AppRoutes from './routes/route';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import PublicLayout from './PublicLayout';
import PageLoader from './PageLoader';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  
  const [loading, setLoading] = useState(true);

  return (
    <>
    {
      loading && <PageLoader onFinish={()=> setLoading(false)} /> 
    }

    <motion.div 
      initial = {{opacity:0}}
      animate = {{ opacity: loading ? 0 : 1 }}
      transition={{duration: 0.3}}>
      <PublicLayout />
    </motion.div>
    </>
  )
}


