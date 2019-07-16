import * as React from 'react'
import { StyledButton } from './styles'
import { ButtonProps } from './typings'

/**
 * @type [text, icontext, icon]
 */

function defaultRenderIcon() {
  return <i>{'👍'}</i>
}
function renderText(text: string) {
  return <span>{text}</span>
}

function Button(props: ButtonProps) {
  const { text = 'lorem ipsum', renderIcon = defaultRenderIcon, type = 'text', ...balanceProps } = props
  return (
    <StyledButton {...balanceProps}>
      {type === 'text' && renderText(text)}
      {type === 'icon' && renderIcon()}
      {type === 'icontext' && (
        <span>
          {renderIcon()}
          {renderText(text)}
        </span>
      )}
    </StyledButton>
  )
}

export default Button
export { Button }
