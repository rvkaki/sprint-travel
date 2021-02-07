import React, { useState } from 'react';
import { Flex, IconButton, Spinner } from '@chakra-ui/react';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slide from './Slide';

const CarouselButton = props => {
  return (
    <IconButton
      onClick={props.onClick}
      icon={<FontAwesomeIcon icon={props.icon} />}
      color="black"
      isRound
      aria-label={props.label}
      variant="ghost"
      size="lg"
      fontSize="xl"
      zIndex="2"
      _hover={{
        transform: 'scale(1.2)',
        bg: 'gray.100',
      }}
      _focus={{}}
      _active={{
        boxShadow: '0 0 1px 2px rgba(200,200,200,0.6)',
        opacity: 0.8,
        bg: 'gray.100',
      }}
    />
  );
};

const SingleCarousel = props => {
  const [idx, setIdx] = useState(0);

  const handleClick = dir => {
    if (dir === 'left') {
      setIdx((idx - 1 + props.images.length) % props.images.length);
    } else if (dir === 'right') {
      setIdx((idx + 1) % props.images.length);
    }
  };

  if (!props.images) return <Spinner size="xl" />;

  return (
    <Flex dir="row" px="16px" justify="space-between" align="center">
      <CarouselButton
        icon={faChevronLeft}
        label="left"
        onClick={() => handleClick('left')}
      />
      <Slide {...props.images[idx]} />
      <CarouselButton
        icon={faChevronRight}
        label="right"
        onClick={() => handleClick('right')}
      />
    </Flex>
  );
};

export default SingleCarousel;
