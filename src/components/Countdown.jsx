import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Countdown = props => {
  const [t] = useTranslation('common');

  const [timeUntil, setTimeUntil] = useState(null);

  const format = time => {
    return (
      time.getUTCHours() +
      'h' +
      time.getUTCMinutes() +
      'm' +
      time.getUTCSeconds() +
      's'
    );
  };

  useEffect(() => {
    const getTimeUntil = () => {
      return props.deadline.getTime() - new Date().getTime();
    };
    const interval = setInterval(() => {
      const t = getTimeUntil();
      setTimeUntil(t);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props.deadline]);

  return (
    <Flex dir="row" px={4} align="center">
      <Text mr={2}>{t('expiresIn')}</Text>
      <Text fontWeight="semibold">{format(new Date(timeUntil))}</Text>
    </Flex>
  );
};

export default Countdown;
