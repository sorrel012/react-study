import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;