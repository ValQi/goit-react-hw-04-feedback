import styled from "styled-components";

export const Button = styled.button`
    
  display: inline-block;
  flex-direction: row;

  margin-left: ${p => p.theme.spacing(5)};
  width: ${p => p.theme.spacing(20)};
  background-color: ${p => p.theme.colors.red};
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;