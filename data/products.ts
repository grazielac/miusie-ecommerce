import { StaticImageData } from "next/image";
import lovenote from "../public/lovenote.png"

interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: string;
    image: StaticImageData;

    
}

export const products: ProductProps[] = [
    {
        id: 1,
        title: "Flower Mug",
        description: "Morning mug to start your day",
        price: "40",
        image: lovenote,
    },
    {
        id: 2,
        title: "Bow Mug",
        description: "Morning mug to start your day",
        price: "40",
        image: lovenote,
    },
    {
        id: 3,
        title: "Summer Mug",
        description: "Morning mug to start your day",
        price: "40",
        image: lovenote,
    },
    {
        id: 4,
        title: "Autumn Mug",
        description: "Morning mug to start your day",
        price: "40",
        image: lovenote,
    },
    {
        id: 5,
        title: "Tulip Mug",
        description: "Morning mug to start your day",
        price: "40",
        image: lovenote,
    },
];