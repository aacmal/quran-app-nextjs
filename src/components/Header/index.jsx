
const Header = ({children, className}) => {
  return (
    <h1 className={"text-xl font-bold text-emerald-500 "+ className}>{children}</h1>
  )
}

export default Header