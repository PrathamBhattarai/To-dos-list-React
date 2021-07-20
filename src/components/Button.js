const Button = ( {color, text, onClick} ) => {
    return (<button color = "green" onClick = {onClick} className = 'btn'>{ text }</button>)
}

export default Button
