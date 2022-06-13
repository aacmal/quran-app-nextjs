import Search from "../Search"

const Header = ({children, className}) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className={"text-xl font-bold text-emerald-500 "+ className}>{children}</h1>
      <Search className='w-96'/>
    </div>
  )
}

export default Header