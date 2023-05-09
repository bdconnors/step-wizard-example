"use client";
import { StepTracker } from "@/components/StepTracker";
import { Button, ChakraProvider, Container, HStack, useSteps, VStack } from "@chakra-ui/react";

export default function App() {
  const steps = [
    <h1>Step 1</h1>,
    <h1>Step 2</h1>,
    <h1>Step 3</h1>,
    <h1>Step 4</h1>,
  ];

  const totalSteps = steps.length;

  const { activeStep, goToPrevious, goToNext } = useSteps({ index: 1, count: totalSteps });

  const activeComponent = steps[activeStep];

  return (
    <ChakraProvider>
      <Container maxW={'4xl'}>
        <VStack spacing={4}>
          <StepTracker 
            display="steps" 
            colorScheme="blue"
            total={steps.length}
            active={activeStep}
          />
          { activeComponent }
          <HStack>
            <Button onClick={()=> goToPrevious()}>Prev</Button>
            <Button onClick={()=>goToNext()}>Next</Button>
          </HStack>
        </VStack>
      </Container>
    </ChakraProvider>
  );
}
