import Search from "../Search"

const Header = ({children, className}) => {
  return (
    <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col ">
      <h1 className={"text-xl font-bold text-emerald-500 "+ className}>{children}</h1>
      <Search className=' max-w-3xl'/>
    </div>
  )
}

export default Header