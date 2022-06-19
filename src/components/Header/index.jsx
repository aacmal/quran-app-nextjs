import Search from "../Search"

const Header = ({children, className}) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className={"text-xl font-bold text-emerald-500 "+ className}>{children}</h1>
      <Search className='md:w-96 w-60'/>
    </div>
  )
}

export default Header