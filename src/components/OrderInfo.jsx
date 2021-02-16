import { Box, Stack, Text } from '@chakra-ui/react';

const OrderInfo = props => {
  return (
    <Box bg="gray.200" w="100%" h="100%">
      <Box
        as="img"
        src={`${process.env.REACT_APP_SERVER_URL}${props.coverImage.url}`}
        alt={props.coverImage.name}
        objectFit="cover"
      />
      <Stack spacing={1}>
        <Text>{props.title}</Text>
        <Text>{props.duration}</Text>
        <Text>{props.regime}</Text>
        <Text>{props.price}</Text>
      </Stack>
    </Box>
  );
};

export default OrderInfo;
