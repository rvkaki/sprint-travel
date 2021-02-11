import { Box, Flex, Text } from '@chakra-ui/react';
import {
  faBus,
  faGlobeAfrica,
  faHeart,
  faHotel,
  faMap,
  faPlane,
  faPlaneDeparture,
  faShip,
  faSuitcase,
  faUmbrellaBeach,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const items = [
  {
    label: 'Pacotes',
    link: 'https://sprinttravelviagens.traveltool.pt/viagem/',
    icon: faSuitcase,
  },
  {
    label: 'Grandes Viagens',
    link: 'https://sprinttravelviagens.traveltool.pt/grandes-viagens/',
    icon: faGlobeAfrica,
  },
  {
    label: 'Cruzeiros',
    link: 'https://sprinttravelviagens.traveltool.pt/cruisesshowcase/',
    icon: faShip,
  },
  {
    label: 'Escapadas',
    link: 'https://sprinttravelviagens.traveltool.pt/escapadinhas/',
    icon: faUmbrellaBeach,
  },
  {
    label: 'Voos',
    link: 'https://sprinttravelviagens.traveltool.pt/voos/',
    icon: faPlane,
  },
  {
    label: 'Hoteis',
    link: 'https://sprinttravelviagens.traveltool.pt/hotelsshowcase',
    icon: faHotel,
  },
  {
    label: 'Voo+Hotel',
    link: 'https://sprinttravelviagens.traveltool.pt/voo-hotel/',
    icon: faPlaneDeparture,
  },
  {
    label: 'Destinos',
    link:
      'https://sprinttravelviagens.traveltool.pt/destinationsshowcase/destinations',
    icon: faMap,
  },
  {
    label: 'Lua de Mel',
    link:
      'https://sprinttravelviagens.traveltool.pt/grandes-viagens/lua-de-mel/',
    icon: faHeart,
  },
  {
    label: 'Transfers',
    link: 'https://sprinttravelviagens.traveltool.pt/transfersshowcase/',
    icon: faBus,
  },
];

const NavButton = props => {
  return (
    <Flex
      as="a"
      href={props.link}
      target="_blank"
      w={{ base: '50%', sm: '33%', lg: '20%' }}
      dir="row"
      justify="center"
      align="center"
      color="white"
      _hover={{
        cursor: 'pointer',
        bg: 'gray.300',
        color: 'gray.800',
        borderRadius: 'xl',
      }}
    >
      <Box display={{ base: 'none', lg: 'inherit' }}>
        <FontAwesomeIcon icon={props.icon} size="2x" />
      </Box>
      <Box display={{ base: 'inherit', lg: 'none' }}>
        <FontAwesomeIcon icon={props.icon} size="lg" />
      </Box>
      <Text fontSize={{ base: 'md', md: 'xl' }} ml={4}>
        {props.label}
      </Text>
    </Flex>
  );
};

const MainNav = props => {
  const [t] = useTranslation('common');
  return (
    <Box mt={12}>
      <Text
        fontSize={{ base: '3xl', md: '5xl' }}
        textAlign="center"
        color="gray.900"
        fontWeight="semibold"
        mb={2}
      >
        {t('online')}
      </Text>
      <Flex
        mx="auto"
        w="90%"
        h={{ base: 64, lg: 32 }}
        bg="gray.800"
        borderRadius="xl"
        shadow="2xl"
        flexWrap="wrap"
        overflow="hidden"
      >
        {items.map((i, idx) => (
          <NavButton key={idx} {...i} />
        ))}
      </Flex>
    </Box>
  );
};

export default MainNav;
