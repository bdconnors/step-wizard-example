"use client";
import { Button, HStack, Stack, useSteps, VStack } from "@chakra-ui/react"
import { StepTracker } from "./StepTracker"
import { PercentTracker } from "./PercentTracker";
import { StepModel } from "@/model/StepModel";

export interface StepWizardProps {
  tracker?: 'steps' | 'percent',
  orientation?: 'horizontal' | 'vertical',
  colorScheme?: 'red' | 'orange' | 'yellow' | 'green' | 'blue',
  steps: StepModel[]
}

export const StepWizard = (props: StepWizardProps) => {
  const { tracker = 'steps', orientation = 'horizontal', colorScheme = 'blue', steps } = props; //default to steps, blue, and horizontal if no values provided
  const { activeStep, goToPrevious, goToNext } = useSteps({ index: 0, count: steps.length });

  return (
    <Stack 
      spacing={4} 
      direction={orientation === 'vertical' ? 'row' : 'column'} // if vertical change container direction to fit content
    >
      { tracker === 'steps' && 
        <StepTracker 
          steps={steps} 
          active={activeStep} 
          orientation={orientation} 
          height={orientation === 'vertical' ? '400px' : undefined} // if vertical set a height value
          colorScheme={colorScheme}
        /> 
      }
      { tracker === 'percent' && 
        <PercentTracker 
          active={activeStep} 
          total={steps.length}
          colorScheme={colorScheme}
        /> 
      }
      <VStack direction={'column'}>
        { steps[activeStep] && steps[activeStep].component}
        <HStack>
          <Button onClick={()=>goToPrevious()}>Prev</Button>
          <Button onClick={()=>goToNext()}>Next</Button>
        </HStack>
      </VStack>
    </Stack>
  )
}