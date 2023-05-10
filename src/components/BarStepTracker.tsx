"use client";
import { Box, Center, HStack, Progress, Stack, useBreakpointValue, Text } from "@chakra-ui/react";

export interface BarStepTrackerProps {
  label?: 'percent' | 'steps',
  colorScheme?: string,
  active: number,
  total: number
}

export const BarStepTracker = (props: BarStepTrackerProps) => {
  const { label = 'steps', colorScheme = 'blue', active, total } = props;

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
        { label && 
          <Text fontWeight='semibold'>
            { label === 'percent' && `${progress}%` }
            { label === 'steps' && `${active}/${total}` }
          </Text> 
        }
        </HStack>
      </Center>
    </Stack>
  );
}