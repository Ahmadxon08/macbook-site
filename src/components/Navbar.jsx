import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="./logo.svg" alt="logo" />
        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button>
            <img src="./search.svg" alt="search " />
          </button>
          <button>
            <img src="./cart.svg" alt="Cart " />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
