import styled from 'styled-components';

export const LayoutWrapper = styled('section')`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    height: 100vh;
    flex-direction: column;
  }
`

export const LeftSide = styled('div')`
  width: 40%;
  height: 100vh;
  padding: 2rem 3rem;
  background: #1E1E64;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const RightSide = styled('div')`
  width: 100%;
  height: 100vh;
  background: #EAE6F6;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`
export const Heading = styled('h4')`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 5rem;
  color: #fff;

  span {
    border-bottom: dashed 1px red;
  }
`
export const Text = styled('p')`
  font-size: 1.2rem;
  margin-top: 2rem;
  color: #fafafa;
`
