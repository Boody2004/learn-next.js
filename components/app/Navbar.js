import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://res.cloudinary.com/dirbnpgsp/image/upload/v1645769574/logo_c2zqph.png"
          width={60}
          height={60}
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/another">
        <a>Another</a>
      </Link>
    </nav>
  );
};

export default Navbar;
