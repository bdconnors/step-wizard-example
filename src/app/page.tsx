"use client";
import { SegmentStepTracker } from "@/components/SegmentStepTracker";
import { StepModel } from "@/model/StepModel";
import { Button, Center, ChakraProvider, Container, HStack, Stack, useSteps } from "@chakra-ui/react";

export default function App() {
  const steps: StepModel [] = [
    { title: 'First', description: 'Step 1', component: <h1>This is Step 1</h1> },
    { title: 'Second', description: 'Step 2', component: <h1>This is Step 2</h1> },
    { title: 'Third', description: 'Step 3', component: <h1>This is Step 3</h1> },
    { title: 'Fourth', description: 'Step 4', component: <h1>This is Step 4</h1> }
  ];

  const { activeStep, goToPrevious, goToNext } = useSteps({ index: 0, count: steps.length });

  return (
    <ChakraProvider>
      <Container maxW={'6xl'}>
        <Stack spacing={4} direction='column'>
          <SegmentStepTracker steps={steps} active={activeStep}/> 
          { steps[activeStep] && 
            <Center>{steps[activeStep].component}</Center>
          }
          <Center>
            <HStack>
              <Button onClick={()=>goToPrevious()}>Prev</Button>
              <Button onClick={()=>goToNext()}>Next</Button>
            </HStack>
          </Center>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}
