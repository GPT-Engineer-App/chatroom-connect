import React, { useState } from "react";
import { Box, Button, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import MapBackground from "./MapBackground";

const MapView = ({ onClose }) => {
  const [radius, setRadius] = useState(50);

  return (
    <Box position="relative" minH="100vh">
      <MapBackground />
      <Box position="absolute" top={0} left={0} right={0} bottom={0}>
        <Button leftIcon={<FaArrowLeft />} onClick={onClose} m={4}>
          Back
        </Button>
        <Box maxW="400px" mx="auto" mt={8}>
          <Text mb={4}>Select Radius: {radius} miles</Text>
          <Slider aria-label="radius-slider" defaultValue={radius} value={radius} min={0} max={100} onChange={(value) => setRadius(value)} valueLabelDisplay="auto" valueLabelFormat={(value) => `${value} miles`}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default MapView;
