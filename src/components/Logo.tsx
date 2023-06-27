import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.png";

const Logo = ({ width = "80px", ...props }) => {
  return (
    <Link to="/">
      <Image src={logo} alt="RRA" width={width} {...props} />
    </Link>
  );
};

export default Logo;