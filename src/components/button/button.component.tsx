import styled from '@emotion/styled'

interface ButtonProps {
  updating?: boolean
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  letter-spacing: 2px;
  background: #0D8EFC;
  color: white;
  margin: 0;
  padding: 8px 25px;
  text-shadow: none;
  font-weight: bold;
  font-size: 16px;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 45px;
  box-shadow: 0 6px 12px rgba(54, 176, 245, 0.16), 0 16px 24px rgba(54, 123, 245, 0.16);
  text-transform: uppercase;
  transition: background-color 0.3s;

  &:hover {
    background: #27A8FF;
    transition: background-color 300ms;
  }

  &[disabled] {
    background: #6d869c;
    box-shadow: 0 6px 12px rgba(122, 158, 179, 0.16), 0 16px 24px rgba(133, 146, 168, 0.16);
    cursor: auto;
  }
`
