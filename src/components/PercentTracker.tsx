"use client";
import { Box, Center, HStack, Progress, Stack, useBreakpointValue, Text } from "@chakra-ui/react";

export interface PercentTrackerProps {
  colorScheme?: string,
  active: number,
  total: number
}

export const PercentTracker = (props: PercentTrackerProps) => {
  const { colorScheme = 'blue', active, total } = props; //default to blue if no value provided

  //scale bar to fit screen size
  const barWidth = useBreakpointValue({
    base: '15em', 
    sm: '15em', 
    md: '30em', 
    lg: '55em', 
    xl: '55em'
  }); 

  const progress =  Math.round((active / total) * 100);

  return (
    <Stack direction="column" boxShadow="sm"  pb={4} style={{ position: 'sticky', top: 0, zIndex: 2 }}>
      <Center>
        <HStack>
        <Box px={0}>
          <Progress 
            value={progress} 
            borderRadius={12} 
            h="1em" 
            w={barWidth}
            colorScheme={colorScheme}
          />
        </Box>
        <Text fontWeight='semibold'>{ `${progress}%` }</Text> 
        </HStack>
      </Center>
    </Stack>
  );
}