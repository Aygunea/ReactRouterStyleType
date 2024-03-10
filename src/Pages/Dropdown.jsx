import "./Navbar.css";

const Dropdown = ({ title, children }) => {
  return (
    <div className="dropdown">
      <button className="dropdown-toggle">{title}</button>
      <div className="dropdown-menu">{children}</div>
    </div>
  );
};

export default Dropdown;
