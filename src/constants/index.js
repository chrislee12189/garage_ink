import { socialIcons } from "../assets";



export const navLinks = [
    {
        id: "/",
        title: "Home",
    },
    {
        id: "showcase/artists",
        title: "Artists",
    },
    {
        id: "showcase/gallery",
        title: "Gallery",
    },
    {
        id: "bookings",
        title: "Bookings",
    },
    {
        id: "community",
        title: "Community",
    },
    {
        id: "store",
        title: "Store",
    },
    {
        id: "login",
        title: "Login",
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
                link: "/showcase/gallery"
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

export const initialReviews = [
    {
        id: 1,
        artistname: "Amity",
        description: "Tattoo was perfect!",
        tips: "Start time could be earlier",
        rating: 7,
    },
    {
        id: 2,
        artistname: "Briar",
        description:"Tattoo was great, different to my original idea, but great nonetheless!",
        tips: "No tips, experience was great.",
        rating: 8,
    },
    {
        id: 3,
        artistname: "Cinnamona",
        description:"I was tattooed for 2 days in a row. The artist was accomodating and the experience was awesome.",
        tips: "No tips, experience was great.",
        rating: 7,
    
    },
    {
        id: 4,
        artistname: "Critt3r",
        description:"I chose this artist because the are an expert on the style i wanted. They did a perfect job.",
        tips: "No tips, experience was great.",
        rating: 7,
    
    },
    {
        
        id: 5,
        artistname: "N/A",
        description:"The tattoo hurt really bad. It wasnt the artists' fault but it was still a painful experience",
        tips: "No tips, experience was great.",
        rating: 1,
        
    
    }
    ];