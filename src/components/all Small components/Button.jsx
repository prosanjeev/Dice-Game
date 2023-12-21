import './Button.css'

const Button = (props, ...rest) => {
  return (
    <div>
        <button {...rest} className='btns'  onClick={props.onClick} showRules={props.showRules}>
          
          {props.text}
          </button>
        </div>
  )
}

export default Button