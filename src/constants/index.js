import { socialIcons } from "../assets";



export const navLinks = [
    {
        id: "/",
        title: "Home"
    },
    {
        id: "artists",
        title: "Artists"
    },
    {
        id: "gallery",
        title: "Gallery",
    },
    {
        id: "bookings",
        title: "Bookings"
    },
    {
        id: "community",
        title: "Community",
    },
    {
        id: "store",
        title: "Store"
    },
    {
        id: "login",
        title: "Login"
    }

];


export const footerLink = [
    {
        title: "Useful Links",
        links: [
            {
                name: "Login",
                link: "/login"
            },
            {
                name: "Tattoo of the Week",
                link: "/community"
            },
            {
                name: "Showcase",
                link: "/gallery"
            },
            {
                name: "Styles",
                link: "/styles"
            }
        ],
    },
    {
        title: "Community Links",
        links: [
            {
                name: "Reviews",
                link: "/community/reviews"
            },
            {
                name: "Ideas",
                link: "/ideas"
            }
        ]
    },
    {
        title: "Booking",
        links: [
            {
                name: "Consultations",
                link: "/bookings"
            },
            {
                name: "Prices",
                link: "/bookings/pricing"
            }
        ]
    }
]

export const socialMedia = [
    {
        id: "Instagram",
        icon: socialIcons[0],
        link: "https://www.instagram.com/garageink4224/?hl=en"
    },
    {
        id:"Facebook",
        icon: socialIcons[1],
        link: "https://www.facebook.com/garageink4224/"
    }
]

