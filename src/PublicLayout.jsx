import FloatingButton from './components/FloatingButton';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import AppRoutes from './routes/route';

export default function PublicLayout() {
  

  return (
    <>
      <TopBar />
      <AppRoutes />
      <FloatingButton />
      <BottomBar />
    </>
  )
}


