
import "./Navbar.css";

const Card = ({ title, info, link, icon,children }) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

export default Card;