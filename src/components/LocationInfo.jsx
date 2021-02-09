import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LocationInfo = props => {
  return (
    <Flex dir="row" wordBreak="break-word">
      <Box w={{ base: '100%', lg: '90%' }}>
        <Text fontSize="2xl" fontWeight="medium" color="black">
          {props.title}
        </Text>
        <Box borderBottom="2px solid black" mb={2} />
        <Stack spacing={4}>
          <Flex dir="row" align="center">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="black" />
            <Text ml={2}>{props.address}</Text>
          </Flex>
          {props.numbers ? (
            <Stack>
              {props.numbers.map(n => (
                <Flex key={n.id} dir="row" align="center">
                  <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="black" />
                  <Text ml={2}>{n.number}</Text>
                </Flex>
              ))}
            </Stack>
          ) : null}
          {props.emails ? (
            <Stack>
              {props.emails.map(e => (
                <Flex key={e.id} dir="row" align="center">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" color="black" />
                  <Text ml={2}>{e.email}</Text>
                </Flex>
              ))}
            </Stack>
          ) : null}
        </Stack>
      </Box>
    </Flex>
  );
};

export default LocationInfo;
