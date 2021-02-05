import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CustomDrawer = props => {
  const [t, i18n] = useTranslation('common');
  return (
    <Drawer
      isOpen={props.isOpen}
      placement="right"
      onClose={props.onClose}
      size="xs"
      returnFocusOnClose
    >
      <DrawerOverlay>
        <DrawerContent py="20%">
          <DrawerCloseButton _focus={{}} _active={{}} _hover={{}} />
          <DrawerBody display="flex">
            <Stack spacing={5}>
              <Box>
                <Text fontSize="xl" fontWeight="semibold">
                  {t('header.group')}
                </Text>
                <Stack ml={3} spacing={1}>
                  <Text
                    as="a"
                    href="https://www.sprinttravelrentacar.com"
                    target="_blank"
                    fontSize="md"
                  >
                    {t('group.rent')}
                  </Text>
                  <Text
                    as="a"
                    href="https://www.sprinttravelshop.pt"
                    target="_blank"
                    fontSize="md"
                  >
                    {t('group.shop')}
                  </Text>
                  <Text
                    as="a"
                    href="https://sprintsolucoesinformaticas.com"
                    target="_blank"
                    fontSize="md"
                  >
                    {t('group.tech')}
                  </Text>
                </Stack>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="semibold">
                  {t('header.rent')}
                </Text>
                <Stack ml={3} spacing={1}>
                  <Text
                    as="a"
                    href="https://www.sprinttravelrentacar.com"
                    target="_blank"
                    fontSize="md"
                  >
                    {t('rent.national')}
                  </Text>
                  <Text
                    as="a"
                    href="https://www.rentalcars.com/Home.do?affiliateCode=sprinttra667"
                    target="_blank"
                    fontSize="md"
                  >
                    {t('rent.international')}
                  </Text>
                  <Text
                    as="a"
                    href="https://beta.sprintsolucoesinformaticas.com/admin/login"
                    target="_blank"
                    fontSize="md"
                  >
                    {t('rent.login')}
                  </Text>
                </Stack>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="semibold">
                  {t('header.travel')}
                </Text>
                <Stack ml={3} spacing={1}>
                  <Link to="">
                    <Text fontSize="md">{t('travel.offers')}</Text>
                  </Link>
                  <Link to="">
                    <Text fontSize="md">{t('travel.destinations')}</Text>
                  </Link>
                </Stack>
              </Box>
              <Link to="">
                <Text fontSize="xl" fontWeight="semibold">
                  {t('header.franchise')}
                </Text>
              </Link>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
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
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default CustomDrawer;
