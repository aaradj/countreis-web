//components
import Navbar from "../../Navbar";
//styled components
import { Container } from "./layout";
interface LayoutProps {
  children: React.ReactNode;
}
const PageLayout = ({ children }: LayoutProps) => {
  return (
    <Container > 
      <Navbar />
      {children}
    </Container>
  );
};
export default PageLayout;
