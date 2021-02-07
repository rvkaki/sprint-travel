import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const MediaContainer = props => {
  const [imageTab, setImageTab] = useState(true);

  const [imageIdx, setImageIdx] = useState(0);
  const [videoIdx, setVideoIdx] = useState(0);

  const [videoLoading, setVideoLoading] = useState(true);

  const nextMedia = () => {
    if (imageTab) setImageIdx((imageIdx + 1) % props.images.length);
    else setVideoIdx((videoIdx + 1) % props.videos.length);
  };

  const prevMedia = () => {
    if (imageTab)
      setImageIdx((imageIdx - 1 + props.images.length) % props.images.length);
    else
      setVideoIdx((videoIdx - 1 + props.videos.length) % props.videos.length);
  };

  return (
    <Box
      w={{ base: '100%', lg: '70%' }}
      mr={{ base: 0, lg: 4 }}
      mb={{ base: 4, lg: 0 }}
      overflow="hidden"
      borderBottomRightRadius={{ base: '20px', md: '40px' }}
    >
      <Box
        h={{ base: '30vh', md: '40vh', lg: '60vh' }}
        overflow="hidden"
        borderWidth="3px"
        borderTopLeftRadius={{ base: '20px', md: '40px' }}
        borderColor="gray.800"
        position="relative"
      >
        {imageTab ? (
          <Box
            as="img"
            src={props.images[imageIdx].src}
            alt={props.images[imageIdx].alt}
            objectFit="cover"
            h="100%"
            w="100%"
          />
        ) : (
          <>
            <Box
              display={videoLoading ? 'flex' : 'none'}
              h="100%"
              w="100%"
              bg="gray.200"
              alignItems="center"
              justifyContent="center"
            >
              <Spinner size="xl" thickness="4px" stroke="gray.800" />
            </Box>
            <Box
              display={videoLoading ? 'none' : 'inherit'}
              as="iframe"
              src={props.videos[videoIdx].src}
              alt={props.videos[videoIdx].alt}
              onLoad={() => setVideoLoading(false)}
              allowFullScreen
              objectFit="cover"
              h="100%"
              w="100%"
            />
          </>
        )}
        {(imageTab && props.images.length > 1) ||
        (!imageTab && props.videos.length > 1) ? (
          <>
            <Box
              position="absolute"
              as="button"
              left={4}
              top="50%"
              bottom="50%"
              onClick={prevMedia}
            >
              <Box
                display={{ base: 'none', md: 'inherit' }}
                as={FontAwesomeIcon}
                icon={faChevronLeft}
                size="3x"
                color="black"
              />
              <Box
                display={{ base: 'inherit', md: 'none' }}
                as={FontAwesomeIcon}
                icon={faChevronLeft}
                size="2x"
                color="black"
              />
            </Box>
            <Box
              position="absolute"
              as="button"
              right={4}
              top="50%"
              bottom="50%"
              onClick={nextMedia}
            >
              <Box
                display={{ base: 'none', md: 'inherit' }}
                as={FontAwesomeIcon}
                icon={faChevronRight}
                size="3x"
                color="black"
              />
              <Box
                display={{ base: 'inherit', md: 'none' }}
                as={FontAwesomeIcon}
                icon={faChevronRight}
                size="2x"
                color="black"
              />
            </Box>
          </>
        ) : null}
      </Box>
      <Flex>
        <Box
          bg={imageTab ? 'gray.800' : 'gray.500'}
          h="40px"
          w="50%"
          onClick={() => {
            setImageTab(true);
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            color={imageTab ? 'white' : 'black'}
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight={imageTab ? 'semibold' : 'medium'}
            textAlign="center"
          >
            Imagens
          </Text>
        </Box>
        {props.videos.length > 0 ? (
          <Box
            bg={imageTab ? 'gray.500' : 'gray.800'}
            h="40px"
            w="50%"
            onClick={() => {
              setImageTab(false);
              setVideoLoading(true);
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              color={imageTab ? 'black' : 'white'}
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight={imageTab ? 'medium' : 'semibold'}
              textAlign="center"
            >
              Vídeos
            </Text>
          </Box>
        ) : null}
      </Flex>
    </Box>
  );
};

export default MediaContainer;
