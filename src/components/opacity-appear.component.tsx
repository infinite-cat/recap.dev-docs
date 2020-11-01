import styled from '@emotion/styled'

interface OpacityAppearProps {
  visible: boolean
}

export const OpacityAppear = styled.div<OpacityAppearProps>`
  transition: all 500ms linear;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: none;
`
