import React, { useState } from 'react';
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import CustomDrawer from './CustomDrawer';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Menu from './Menu';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [t, i18n] = useTranslation('common');
  const history = useHistory();
  return (
    <Box zIndex="sticky" boxShadow="md">
      <Flex
        dir="row"
        px="32px"
        h="30px"
        justify="space-between"
        align="center"
        borderColor="gray.300"
        borderBottomWidth="1px"
      >
        <Flex align="center">
          <FontAwesomeIcon icon={faPhoneAlt} size="xs" />
          <Text ml={1} fontSize="xs" color="black">
            (+351) 963 720 279
          </Text>
          <Box ml={1} h="16px" borderLeftWidth="2px" borderColor="black" />
          <Text ml={1} fontSize="xs" color="black">
            (+351) 253 043 471
          </Text>
        </Flex>
        <Flex align="center">
          <Box
            as="a"
            href="https://www.facebook.com/sprinttravelviagens/"
            target="_blank"
          >
            <Box
              as="img"
              src="/assets/images/facebook_icon.webp"
              alt="facebook_icon"
              h="20px"
            />
          </Box>
          <Box
            ml={2}
            as="a"
            href="https://www.instagram.com/sprinttravelviagens/"
            target="_blank"
          >
            <Box
              as="img"
              src="/assets/images/instagram_icon.png"
              alt="instagram_icon"
              h="20px"
            />
          </Box>
        </Flex>
      </Flex>
      <Flex dir="row" px="32px" h="60px" justify="space-between" align="center">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          maxH={{ base: '60%', lg: '80%' }}
          onClick={() => history.replace('/')}
          _hover={{
            cursor: 'pointer',
          }}
          objectFit="contain"
        />
        <IconButton
          display={{ base: 'inherit', lg: 'none' }}
          icon={<FontAwesomeIcon icon={faBars} />}
          onClick={() => setIsOpen(true)}
          variant="ghost"
          color="black"
          size="xl"
          fontSize="xl"
          _hover={{}}
          _focus={{}}
        />
        <Flex
          flex={1}
          display={{ base: 'none', lg: 'inherit' }}
          justify="space-between"
        >
          <Flex w="100%" dir="row" justify="space-evenly">
            <Menu
              label={
                <Text as="button" fontSize="md">
                  {t('header.group')}
                </Text>
              }
              items={[
                {
                  label: t('group.rent'),
                  link: 'https://www.sprinttravelrentacar.com',
                  target: '_blank',
                },
                {
                  label: t('group.shop'),
                  link: 'https://www.sprinttravelshop.pt',
                  target: '_blank',
                },
              ]}
            />
            <Menu
              label={
                <Text as="button" fontSize="md">
                  {t('header.rent')}
                </Text>
              }
              items={[
                {
                  label: t('rent.national'),
                  link: 'https://www.sprinttravelrentacar.com',
                  target: '_blank',
                },
                {
                  label: t('rent.international'),
                  link:
                    'https://www.rentalcars.com/Home.do?affiliateCode=sprinttra667',
                  target: '_blank',
                },
                {
                  label: t('rent.login'),
                  link:
                    'https://beta.sprintsolucoesinformaticas.com/admin/login',
                  target: '_blank',
                },
              ]}
            />
            <Link to="/ofertas">
              <Text fontSize="md">{t('header.travel')}</Text>
            </Link>
            <Link to="/franchising">
              <Text fontSize="md">{t('header.franchise')}</Text>
            </Link>
            <Link to="/contactos">
              <Text fontSize="md">{t('header.contacts')}</Text>
            </Link>
          </Flex>
          <Flex dir="row" justify="flex-end">
            <Text
              as="button"
              mr="4px"
              fontWeight={i18n.language === 'pt' ? 'semibold' : 'normal'}
              onClick={() => i18n.changeLanguage('pt')}
            >
              PT
            </Text>
            <Text>|</Text>
            <Text
              as="button"
              ml="4px"
              fontWeight={i18n.language === 'en' ? 'semibold' : 'normal'}
              onClick={() => i18n.changeLanguage('en')}
            >
              EN
            </Text>
          </Flex>
        </Flex>
        <CustomDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </Flex>
    </Box>
  );
};

export default Header;
