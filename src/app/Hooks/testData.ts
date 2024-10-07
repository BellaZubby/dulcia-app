import { StaticImageData } from "next/image";
import pastry1 from '@/app/assets/pastry1.jpg'
import pastry2 from '@/app/assets/pastry3.jpg'
import pastry3 from '@/app/assets/samosa.jpg'
import pastry4 from '@/app/assets/springrolls.jpg'
import pastry7 from '@/app/assets/puffpuff.webp'
import pastry8 from '@/app/assets/croissant2.jpg'
import pastry9 from '@/app/assets/scone.jpg'
import cake3 from '@/app/assets/pastry2.jpg'
import cake1 from '@/app/assets/pastry4.jpg'
import cake2 from '@/app/assets/pastry5.jpg'
import cake4 from '@/app/assets/blackForest.jpg'
import cake5 from '@/app/assets/redVelvet.jpg'
import bread1 from '@/app/assets/whitebreadnew.jpg'
import bread2 from '@/app/assets/oatCoconutbread.jpg'
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

export interface CartItem {
    // id:string;
    // name:string;
    // price:number;
    // image: StaticImageData
    product: DataTypes;
    // quantity:number
}

export interface DataTypes {
    image:StaticImageData
    price:number;
    name:string;
    id:string;
}
export interface QueryDataTypes {
    detail:DataTypes[];
    heading:string;
    href:string;
    id:number;
}


export const queryData:QueryDataTypes[] = [
    {
        heading: "PASTRIES",
        href: 'pastries',
        detail: [
            {
                image: pastry1,
                name: 'Cinnamon Roll',
                price: 750.33,
                id: 'pastry1'
            },
            {
                image: pastry2,
                name: 'Doughnut',
                price: 500.50,
                id: 'pastry2'
            },
            {
                image: pastry3,
                name: 'Samosa',
                price: 350.99,
                id: 'pastry3'
            },
            {
                image: pastry4,
                name: 'Spring Rolls',
                price: 350.99,
                id: 'pastry4'
            },
            {
                image: pastry7,
                name: 'Puff Puff',
                price: 500.00,
                id: 'pastry7'
            },
        ],
        id: 1
    },

    // cake
    {
        heading: "CAKES",
        href: 'cakes',
        detail: [
            {
                image: cake1,
                name: 'Cherry cake',
                price: 1050.20,
                id: 'cake1'
            },
            {
                image: cake2,
                name: 'Cheese cake',
                price: 2370.97,
                id: 'cake2'
            },
            {
                image: cake3,
                name: 'Sliced cake',
                price: 1200.29,
                id: 'cake3'
            },
            {
                image: cake4,
                name: 'Black forest cake',
                price: 3200.29,
                id: 'cake4'
            },
            {
                image: cake5,
                name: 'Red velvet cake',
                price: 3000.50,
                id: 'cake5'
            },
          
        ],
        id: 2
    },
   
    // bread

    
    {
        heading: "BREAD",
        href: 'bread',
        detail: [
            {
                image: bread1,
                name: 'White bread',
                price: 700.00,
                id: 'bread1'
            },
            {
                image: bread2,
                name: 'Oat coconut bread',
                price: 1250.00,
                id: 'bread2'
            },
            {
                image: bread3,
                name: 'Wheat bread',
                price: 950.38,
                id: 'bread3'
            },
            {
                image: bread4,
                name: 'Banana bread',
                price: 1500.00,
                id: 'bread4'
            },
            {
                image: bread5,
                name: 'Brioche',
                price: 1000.84,
                id: 'bread5'
            },

        ],
        id: 3
    },
    {
        heading: "COOKIES",
        href: 'cookies',
        detail: [
            {
                image: cookie1,
                name: 'Butter cookies',
                price: 700.00,
                id: 'cookies1'
            },
            {
                image: cookie2,
                name: 'Sugar cookies',
                price: 800.00,
                id: 'cookies2'
            },
            {
                image: cookie3,
                name: 'Chocolate chip cookies',
                price: 1050.50,
                id: 'cookies3'
            },
            {
                image: cookie4,
                name: 'Macarons',
                price: 1200.00,
                id: 'cookies4'
            },
            {
                image: cookie5,
                name: 'Shortbread cookies',
                price: 1050.71,
                id: 'cookies5'
            },
        ],
        id: 4
    },
    {
        heading: "PARFAIT",
        href: 'parfait',
        detail: [
            {
                image: parfait1,
                name: 'Fruit parfait',
                price: 2700.00,
                id: 'parfait1'
            },
            {
                image: parfait2,
                name: 'Yougurt parfait',
                price: 3000.32,
                id: 'parfait2'
            },
            {
                image: parfait3,
                name: 'Granola parfait',
                price: 3500.00,
                id: 'parfait3'
            },
            {
                image: parfait4,
                name: 'Ice cream parfait',
                price: 2650.00,
                id: 'parfait4'
            },
            {
                image: parfait5,
                name: 'Cheese cake parfait',
                price: 4800.47,
                id: 'parfait5'
            },
        ],
        id: 5
    },

    {
        heading: "MILKSHAKES",
        href: 'milkshakes',
        detail: [
            {
                image: milkshake1,
                name: 'Oreo milkshake',
                price: 2250.00,
                id: 'milkshake1'
            },
            {
                image: milkshake2,
                name: 'Strawberry milkshake',
                price: 4500.00,
                id: 'milkshake2'
            },
            {
                image: milkshake3,
                name: 'Cafe latte milkshake',
                price: 2500.97,
                id: 'milkshake3'
            },
            {
                image: milkshake4,
                name: 'Chocolate banana milkshake',
                price: 2800.00,
                id: 'milkshake4'
            },
            {
                image: milkshake5,
                name: 'Cinnameg milkshake',
                price: 2500.65,
                id: 'milkshake5'
            },
        ],
        id: 6
    },
   
]