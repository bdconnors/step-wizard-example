"use client";
import { StepWizard } from "@/components/StepWizard";
import { StepModel } from "@/model/StepModel";
import { Button, ChakraProvider, Container, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface StepWizardDemoState {
  tracker: 'steps' | 'percent',
  orientation: 'horizontal' | 'vertical',
  colorScheme: 'red' | 'orange' | 'yellow' | 'green' | 'blue'
}
export default function StepWizardDemo() {
  const steps: StepModel [] = [
    { title: 'First', description: 'Step 1', component: <h1>This is Step 1</h1> },
    { title: 'Second', description: 'Step 2', component: <h1>This is Step 2</h1> },
    { title: 'Third', description: 'Step 3', component: <h1>This is Step 3</h1> },
    { title: 'Fourth', description: 'Step 4', component: <h1>This is Step 4</h1> }
  ];

  const [state, setState] = useState<StepWizardDemoState>({ 
    tracker: 'steps', 
    orientation: 'horizontal',
    colorScheme: 'blue'
  });

  const setTracker = (tracker: 'steps' | 'percent') => setState({ 
    ...state, 
    tracker: tracker, 
    orientation: 'horizontal'
  });

  const setOrientation = (orientation: 'horizontal' | 'vertical') => setState({ 
    ...state, 
    tracker: 'steps', 
    orientation: orientation
  });

  const setColorScheme = (colorScheme: 'red' | 'orange' | 'yellow' | 'green' | 'blue') => setState({ 
    ...state, 
    colorScheme: colorScheme
  });

  return (
    <ChakraProvider>
      <Container maxW={'6xl'}>
        <VStack py={5} spacing={5}>
          <HStack>
            <Button onClick={()=>setTracker('steps')}>Steps</Button>
            <Button onClick={()=>setTracker('percent')}>Percent</Button>
          </HStack>
          { state.tracker === 'steps' && 
            <HStack>
              <Button onClick={()=>setOrientation('vertical')}>Vertical</Button>
              <Button onClick={()=>setOrientation('horizontal')}>Horizontal</Button>
            </HStack>
          }
          <HStack>
            <Button colorScheme='red' onClick={()=>setColorScheme('red')}>Red</Button>
            <Button colorScheme='orange' onClick={()=>setColorScheme('orange')}>Orange</Button>
            <Button colorScheme='yellow' onClick={()=>setColorScheme('yellow')}>Yellow</Button>
            <Button colorScheme='green' onClick={()=>setColorScheme('green')}>Green</Button>
            <Button colorScheme='blue' onClick={()=>setColorScheme('blue')}>Blue</Button>
          </HStack>
        </VStack>
        <StepWizard steps={steps} tracker={state.tracker} orientation={state.orientation} colorScheme={state.colorScheme}/>
      </Container>
    </ChakraProvider>
  );
}
