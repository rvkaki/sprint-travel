import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Datepicker from './SingleDatepicker/Datepicker';
import SearchBar from './SearchBar';

const emailRegex =
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

const UserForm = props => {
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState();
  const [departure, setDeparture] = useState(-1);
  const [departureDate, setDepartureDate] = useState();
  const [checked, setChecked] = useState(false);

  const modal = global['modal'];

  const [t] = useTranslation('common');

  const isFormValid = () => {
    return (
      name &&
      email.match(emailRegex) &&
      contact &&
      departure !== -1 &&
      departureDate &&
      checked
    );
  };

  const handleClick = () => {
    if (isFormValid()) {
      props.submit(
        name,
        email,
        contact,
        props.departureOptions.find(x => x.value === departure).name,
        departureDate
      );
    } else alert('Por favor preencha todos os campos');
  };

  return (
    <Stack spacing={6}>
      <FormControl id="name" isRequired>
        <FormLabel>{t('checkout.info.name')}</FormLabel>
        <Input
          borderColor="gray.300"
          shadow="md"
          placeholder={t('checkout.info.name')}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>{t('checkout.info.email')}</FormLabel>
        <Input
          shadow="md"
          type="email"
          isInvalid={!(email === '' || email.match(emailRegex))}
          placeholder={t('checkout.info.email')}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="contact" isRequired>
        <FormLabel>{t('checkout.info.contact')}</FormLabel>
        <Input
          borderColor="gray.300"
          shadow="md"
          placeholder={t('checkout.info.contact')}
          value={contact}
          onChange={e => setContact(e.target.value)}
        />
      </FormControl>
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        align={{ base: 'flex-start', sm: 'center' }}
        justify="space-between"
      >
        <Stack
          spacing={1}
          mb={{ base: 6, sm: 0 }}
          w={{ base: '100%', sm: 'auto' }}
        >
          <Text color="gray.800" fontWeight="medium">
            {t('checkout.info.date')}
          </Text>
          <Datepicker
            date={departureDate}
            minBookingDate={props.minBookingDate}
            onDateChange={newDate => setDepartureDate(newDate.startDate)}
          />
        </Stack>
        <Box w={{ base: '100%', sm: 'auto' }}>
          <SearchBar
            options={props.departureOptions}
            value={departure}
            onChange={value => setDeparture(value)}
            placeholder={t('checkout.info.location')}
            color="gray.800"
            label={t('checkout.info.location')}
          />
        </Box>
      </Flex>
      <Checkbox
        isRequired
        isChecked={checked}
        onChange={e => setChecked(e.target.checked)}
        colorScheme="gray"
        size="lg"
        iconColor="white"
      >
        <Text color="black" fontSize="lg">
          {t('checkout.info.accept')}{' '}
          <Text
            as="button"
            fontWeight="semibold"
            onClick={e => {
              e.stopPropagation();
              modal.open(t('footer.info.conditions'), props.conditions);
            }}
          >
            {t('checkout.info.conditions')}
          </Text>
        </Text>
      </Checkbox>
      <Box
        as="button"
        bg="gray.800"
        py={1}
        borderRadius="md"
        color="white"
        fontSize="lg"
        fontWeight="medium"
        shadow="lg"
        transition="ease-in-out 0.2s"
        _hover={{
          transform: 'scale(1.03)',
          shadow: '2xl',
          bg: 'gray.900',
        }}
        onClick={handleClick}
      >
        <Box>
          <Text fontSize="xl">{t('checkout.info.request')}</Text>
          <Text fontSize="sm">({t('checkout.info.confirmation')})</Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default UserForm;
