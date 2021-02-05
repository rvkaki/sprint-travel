import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box>
      <Box minH="100vh">
        <Header />
        <Box h="100%" bg="red" w="100%"></Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
