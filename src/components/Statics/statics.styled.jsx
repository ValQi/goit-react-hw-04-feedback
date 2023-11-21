import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};
  gap: ${p => p.theme.spacing(2.5)};

  background-color: ${p => p.theme.colors.green};
  box-shadow: ${p => p.theme.shadow};
  border: ${p => p.theme.border};
  width: 35%;
  margin-top: 15px;
`;
export const Title = styled.h2`

  padding: ${p => p.theme.spacing(3)} 0;
  padding-left: ${p => p.theme.spacing(6)};
  background-color: ${p => p.theme.colors.hardGray};

  text-transform: uppercase;
  width: 35%;`;
