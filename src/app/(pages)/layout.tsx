"use client"
import Navbar from "../components/navbar";
import { Suspense} from "react";
import { contactData, openingHours,socialIcon } from "../Hooks/data";
import Footer from "../components/footer";


export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <>
        <Suspense>
          <Navbar/>
        </Suspense>
        
          <div>
            {children}
          </div>
          <Footer contact={contactData} socials={socialIcon} openingHours={openingHours}/>
    </>
       
        
    
  );
}
