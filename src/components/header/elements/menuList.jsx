import Link from "next/link";
import { FaPlus, FaAngleDoubleRight } from "react-icons/fa";
const MenuList = ({ addListing }) => {
  return (
    <ul>
      <li className="menu-icon">
        <Link href="/">
          Home 
        </Link>
      </li>
      <li className="menu-icon">
        <Link href="/about">
          About 
        </Link>
        
      </li>
      <li className="menu-icon">
        <Link href="/service">
        Service 
        </Link>
      </li>
      <li className="menu-icon">
        <Link href="/faq">
          FAQ 
        </Link>
        
      </li>

      <li>
        <Link href="/contact">Contact</Link>
      </li>

      {addListing ? (
        <li className="special-link">
          <Link href="/contact">Call Us Now</Link>
        </li>
      ) : null}
    </ul>
  );
};

export default MenuList;
