import { Navbar } from "@/components/navbar";
import { createClient } from "@/prismicio";

type HeaderProps = {};

const Header = async (props: HeaderProps) => {
  const client = createClient();

  const settings = await client.getSingle("settings");
  return (
    <div>
      <Navbar settings={settings} />
    </div>
  );
};

export default Header;
