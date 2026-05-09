import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 glass flex justify-center gap-6 p-4">
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/letter">Letter</Link>
      <Link to="/timeline">Timeline</Link>
      <Link to="/thankyou">Thank You</Link>
    </div>
  );
}

export default Navbar;