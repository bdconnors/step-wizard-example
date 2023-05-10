import { StepModel } from "@/model/StepModel";
import { Box, Step, StepDescription, StepIcon, StepIndicator, StepNumber, Stepper, StepSeparator, StepStatus, StepTitle } from "@chakra-ui/react"

export interface StepTrackerProps {
  steps: StepModel[],
  active: number,
  size?: 'sm' | 'md' | 'lg',
  orientation?: 'horizontal' | 'vertical',
  colorScheme?: string,
  height?: string
}

export const StepTracker = (props: StepTrackerProps) => {
  const { steps, active, size = 'lg', orientation = 'horizontal', height, colorScheme } = props; //default to lg and horizontal if no values provided
  return (
    <Stepper 
      index={active} 
      size={size} 
      orientation={orientation} 
      height={height} 
      colorScheme={colorScheme}
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  )
}