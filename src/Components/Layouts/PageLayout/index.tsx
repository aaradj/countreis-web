import Navbar from "../../Navbar";
import { Container } from "./layout";
interface LayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default PageLayout;
