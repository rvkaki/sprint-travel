import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

const Menu = props => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = e => {
      if (
        wrapperRef.current &&
        dropdownRef.current &&
        !wrapperRef.current.contains(e.target) &&
        !dropdownRef.current.contains(e.target)
      )
        setIsOpen(false);
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedownn', handleOutsideClick);
    };
  }, [wrapperRef]);

  return (
    <Box
      ref={wrapperRef}
      position="relative"
      onClick={() => setIsOpen(!isOpen)}
    >
      {props.label}
      <Box
        ref={dropdownRef}
        position="absolute"
        zIndex="sticky"
        top={8}
        display={isOpen ? 'inherit' : 'none'}
      >
        <Flex
          direction="column"
          bg="white"
          w="200px"
          border="1px solid"
          borderColor="gray.300"
          shadow="lg"
        >
          {props.items.map(item => (
            <Box
              as="a"
              href={item.link ? item.link : ''}
              target={item.target ? item.target : ''}
              fontSize="lg"
              onClick={item.action ? item.action : () => {}}
              zIndex={2}
              px={2}
              py={1}
              _hover={{
                bg: 'gray.300',
              }}
            >
              {item.label}
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Menu;
