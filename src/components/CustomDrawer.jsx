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
                </Stack>
              </Box>
              <Text
                as="a"
                href="https://www.sprinttravelrentacar.com"
                target="_blank"
                fontSize="xl"
                fontWeight="semibold"
              >
                {t('header.rent')}
              </Text>
              <Link to="/ofertas">
                <Text fontSize="xl" fontWeight="semibold">
                  {t('header.travel')}
                </Text>
              </Link>
              <Link to="/franchising">
                <Text fontSize="xl" fontWeight="semibold">
                  {t('header.franchise')}
                </Text>
              </Link>
              <Link to="/contactos">
                <Text fontSize="xl" fontWeight="semibold">
                  {t('header.contacts')}
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
