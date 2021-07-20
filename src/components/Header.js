import Button from "./Button"
const Header = ({title, onadd, showAdd}) => {
    return ( 
    <header className = 'header' >
      <h1>{title}</h1>
      <Button text = {showAdd ? 'close' : 'Add'} onClick = {onadd} />
    </header>
    )
}
Header.defaultProps = 
{
    title: 'TO-DOs',
}
export default Header