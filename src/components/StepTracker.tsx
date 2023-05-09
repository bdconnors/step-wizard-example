"use client";
import { Box, useBreakpointValue, Stack, HStack, Progress, Center, Text } from '@chakra-ui/react';
import React from 'react';


export interface StepTrackerProps {
  display?: 'percent' | 'steps',
  colorScheme?: string,
  active: number,
  total: number
}

export const StepTracker = (props: StepTrackerProps) => {
  const { display, colorScheme, active, total } = props;

  const barWidth = useBreakpointValue({
    base: '15em', 
    sm: '15em', 
    md: '30em', 
    lg: '55em', 
    xl: '55em'
  });

  const max = total - 1;
  const progress =  Math.round((active / max) * 100);
  const showPercent = display && display === 'percent';
  const showSteps = display && display === 'steps';

  return (
    <Stack direction="column" boxShadow="sm" bg="#15202B" pb={4} style={{ position: 'sticky', top: 0, zIndex: 2 }}>
      <Center>
        <HStack>
        <Box px={0} bg="#15202B">
          <Progress 
            value={progress} 
            borderRadius={12} 
            h="1em" 
            w={barWidth}
            colorScheme={colorScheme}
          />
        </Box>
        { showPercent && <Text fontWeight='semibold'>{progress}%</Text> }
        { showSteps && <Text fontWeight='semibold'>{active + 1}/{total}</Text> }
        </HStack>
      </Center>
    </Stack>
  );
};