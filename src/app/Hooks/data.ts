import { StaticImageData } from 'next/image';
import {FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapPin, FaEnvelope} from 'react-icons/fa'
import pastries from '@/app/assets/pastries.jpg'
import cake from '@/app/assets/cake.jpg'
import bread from '@/app/assets/bread.jpg'
import cookies from '@/app/assets/cookies.jpg'
import parfait from '@/app/assets/parfait.jpg'
import milkshake from '@/app/assets/milkshake3.jpg'
import pastry1 from '@/app/assets/pastry1.jpg'
import pastry2 from '@/app/assets/pastry3.jpg'
import pastry3 from '@/app/assets/samosa.jpg'
import pastry4 from '@/app/assets/springrolls.jpg'
import pastry5 from '@/app/assets/croissant2.jpg'
import cake3 from '@/app/assets/pastry2.jpg'
import cake1 from '@/app/assets/pastry4.jpg'
import cake2 from '@/app/assets/pastry5.jpg'
import cake4 from '@/app/assets/poundcake.jpg'
import cake5 from '@/app/assets/spongecake.jpg'
import bread1 from '@/app/assets/whitebread.jpg'
import bread2 from '@/app/assets/bagel.jpg'
import bread3 from '@/app/assets/wheatbread.jpg'
import bread4 from '@/app/assets/bananabread.jpg'
import bread5 from '@/app/assets/brioche.jpg'
import cookie1 from '@/app/assets/buttercookie.jpg'
import cookie2 from '@/app/assets/sugarcookie.jpg'
import cookie3 from '@/app/assets/chocolatechip cookie.jpg'
import cookie4 from '@/app/assets/macarons.jpg'
import cookie5 from '@/app/assets/shortbreadcookie.jpg'
import parfait1 from '@/app/assets/fruitparfait1.jpg'
import parfait2 from '@/app/assets/fruitparfait2.jpg'
import parfait3 from '@/app/assets/granolaparfait.jpg'
import parfait4 from '@/app/assets/icecreamparfait.jpg'
import parfait5 from '@/app/assets/cheesecakeparfait.jpg'
import milkshake1 from '@/app/assets/oreomilkshake.jpg'
import milkshake2 from '@/app/assets/strawberrymilkshake.jpg'
import milkshake3 from '@/app/assets/cafemilkshake.jpg'
import milkshake4 from '@/app/assets/chocolatemilkshake.jpg'
import milkshake5 from '@/app/assets/milkshake2.jpg'

// for selectedPage
export enum SelectedPage {
  Pastries = "pastries",
  Cakes = "cakes",
  Bread = "bread",
  Cookies = "cookies",
  Parfait = "parfait",
  Milkshakes = "milkshakes"
}


// for doneProjects
export interface Menu  {
    name:string;
    href:string;
  }
  
export const menuLinks:Menu[] = [
    {
      name: "Pastries",
      href: "#pastries",
    },
    {
      name: "Cakes",
      href: "#cakes",
    },
      {
        name: "Bread",
        href: "#bread",
      
      },
      {
        name: "Cookies",
        href: "#cookies",
        
      },
      {
        name: "Parfait",
        href: "#parfait",
        
      },
      {
        name: "Milkshakes",
        href: "#milkshakes",
        
      },
                
    
  ]
//   for socials
export interface Socials {
    icon: any,
    href: string
}

export const socialIcon:Socials[] = [
    {
        icon: FaFacebook,
        href: "#"
    },
    {
        icon: FaInstagram,
        href: "#"
    },
    {
        icon: FaTwitter,
        href: "#"
    },
]

export interface HeroTypes {
  banner: StaticImageData;
  title: string;
}

export const banner:HeroTypes[] = [
  {
    banner:pastries,
    title: 'PASTRIES'
  },
  {
    banner:bread,
    title: 'BREAD'
  },
  {
    banner:cookies,
    title: 'COOKIES'
  },
  {
    banner:cake,
    title: 'CAKES'
  },
  {
    banner:parfait,
    title: 'PARFAIT'
  },
  {
    banner:milkshake,
    title: 'MILKSHAKES'
  },
]



export interface FooterDetailType  {
  icon:any;
  title:string;
}


export const contactData:FooterDetailType[] = [
  {
    icon: FaMapPin,
    title: "Ikeja, Lagos State"
  },
  {
      icon: FaPhone,
      title:"+2347045789212"
  },
 
  {
      icon: FaEnvelope,
      title: "confectioneries@dulcia.com"
  }
]

export interface OpeningHoursType {
    day:string;
    time:string
}
 export const openingHours:OpeningHoursType[] = [
  {
    day: "Monday - Saturday",
    time: "9am - 10pm"
  },
  {
    day: "Sunday",
    time: "Closed"
  },
  {
    day: "Holidays",
    time: "10am - 4pm"
  },
 ]








