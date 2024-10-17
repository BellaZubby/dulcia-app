"use client"
import { contactData, openingHours,socialIcon } from "../Hooks/data";
import Footer from "../components/footer";
import NavbarCartLogin from "../components/navbarCartLogin";


export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
           <NavbarCartLogin/>
          <div>
            {children}
          </div>
          <Footer contact={contactData} socials={socialIcon} openingHours={openingHours}/>
    </>
       
        
    
  );
}