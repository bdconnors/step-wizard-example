import { StepModel } from "@/model/StepModel";
import { Box, Step, StepDescription, StepIcon, StepIndicator, StepNumber, Stepper, StepSeparator, StepStatus, StepTitle } from "@chakra-ui/react"

export interface SegmentStepTrackerProps {
  steps: StepModel[],
  active: number,
  size?: 'sm' | 'md' | 'lg',
  orientation?: 'horizontal' | 'vertical',
  height?: string
}

export const SegmentStepTracker = (props: SegmentStepTrackerProps) => {
  const { steps, active, size = 'lg', orientation = 'horizontal', height } = props;
  return (
    <Stepper index={active} size={size} orientation={orientation} height={height}>
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