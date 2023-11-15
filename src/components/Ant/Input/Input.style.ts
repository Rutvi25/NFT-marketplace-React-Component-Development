import { Input as AntInput } from 'antd';
import styled from 'styled-components';

export const Input = styled(AntInput)`
  padding: 16px;
  flex: 1 0 0;
  color: ${(props) => props.theme.dark2};
  font-size: 14px;
  font-weight: 400;
`;
