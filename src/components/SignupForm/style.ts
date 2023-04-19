import styled from "styled-components";


export const Section = styled('section')`
  width: 100%;
`;

export const FormWrapper = styled('div')`
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const BackButton = styled('button')`
  font-size: 3rem;
  font-weight: bold;
  color: #1E1E64;
  border: none;
  outline: none;
  background: transparent;
  
  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`;

export const Title = styled('h3')`
  font-size: 2.3rem;
  font-weight: bold;
  color: #1E1E64;
  margin-bottom: 4rem;

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const FormControl = styled('div')`
  margin-bottom: 1.5rem;

  @media screen and (max-width: 800px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;