import { NavLinkProps } from '@/typesProps';

const NavLink = ({ title, active, src, mobile}: NavLinkProps) => {
  return (
    <a href={src} className={`${mobile && "block"} ${active ? "text-blue-400 hover:text-blue-500" : "text-gray-400 hover:text-gray-500"} rounded-lg py-2 whitespace-nowrap`}>{title}</a>
  )
}
export default NavLink;