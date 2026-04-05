import { NavLink } from "react-router-dom";
import { HouseHeart, ContactRound, Info, Flower2 } from "lucide-react"; 
import "./Navbar.css";

const Navconfig = [
  { 
    name: "Home", 
    path: "/", 
    icon: <HouseHeart size={18} /> 
  },
  { 
    name: "About", 
    path: "/about",
    icon: <Info size={18} /> 
  },
  { 
    name: "Our Services", 
    path: "/services",
    icon: <Flower2 size={18} />        // 🌸 service icon
  },
  { 
    name: "Contact", 
    path: "/contact",
    icon: <ContactRound size={18} /> 
  },
];



function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">🌸 MyFlowers</span>

      <div className="nav-menu">
        {Navconfig.map((menuitem, index) => (
          <NavLink
            key={index}
            to={menuitem.path}
            className={({ isActive }) =>
              isActive ? "nav-links active" : "nav-links"
            }
          >
            <span className="icon">{menuitem.icon}</span>
            {menuitem.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;