import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
    children: ReactNode
}

const MainLayout: FC<LayoutProps> = ({ children }) => (
    <>
        <Header />
            { children }                
        <Footer />
    </>
);

export default MainLayout;