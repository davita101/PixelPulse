import { MdStackedLineChart } from "react-icons/md"
import { figma, gameCenter, illustrator, photoshop, result1, result2, shape, slack, standOut, website1, website11, website12, website13, website14, website2, website3, website4 } from "../assets"
import { LuCrown, LuMonitorSmartphone } from "react-icons/lu"
import { TbUsersGroup } from "react-icons/tb"
import { RiComputerFill } from "react-icons/ri"
import { FaInstagram, FaMobile, FaPlus } from "react-icons/fa"
import { IoStar } from "react-icons/io5"
import { PiLightningFill } from "react-icons/pi"
import { IoMdCheckmark } from "react-icons/io"
import { FaXTwitter } from "react-icons/fa6"
import { CiLinkedin, CiYoutube } from "react-icons/ci"

export const navBar = [
    {
        link: "/",
        name: "Our Work"
    },
    {
        link: "/features",
        name: "Features"
    },
    {
        link: "/services",
        name: "Services"
    },
    {
        link: "/pricing",
        name: "Pricing"
    },
    {
        link: "/fqas",
        name: "FQAs"
    }

]
export const hero = [
    {
        h1: "Struggling with black design? We've got your back.",
        p: "Unlimited design, pause or cancel anytime."
    }
]
export const heroImagesFirst = [
    {
        title: "Website 1",
        img: website1
    },
    {
        title: "Website 2",
        img: website2
    },
    {
        title: "Website 3",
        img: website3
    },
    {
        title: "Website 4",
        img: website4
    },

]
export const heroImagesSecond = [
    {
        title: "Website 1",
        img: website11
    },
    {
        title: "Website 2",
        img: website12
    },
    {
        title: "Website 3",
        img: website13
    },
    {
        title: "Website 4",
        img: website14
    },

]

export const featuresHeading = [
    {
        h2: "The Design Advantage Your Startup's Been Missing: Partnering for Startup Success"
    }
]

export const designSolutions = [
    {
        icon: LuCrown,
        h3: "Stand-Out Design Solutions",
        p: "Custom design that fuels your startup's growth and sets you apart.",
        img: standOut
    }
]
export const getsResult = [
    {
        icon: MdStackedLineChart,
        h3: "Design That Gets Results",
        p: "Data meets design – that's how we boost your startup's success.",
        img1: [result1, "Static income"],
        img2: [result2, "Traffic income"]
    },
]
export const trendStats = [
    {
        icon: LuMonitorSmartphone,
        h3: "Design That Sets the Trend ",
        p: "We blend cutting-edge tech with killer visuals to make your startup unforgettable.",
        img1: [photoshop, "photoshop"],
        img2: [gameCenter, "gameCenter"],
        img3: [slack, "slack"],
        img4: [figma, "figma"],
        img5: [shape, "shape"],
        img6: [illustrator, "illustrator"]
    }
]

export const expertise = [
    {
        icon: TbUsersGroup,
        h3: "Your Vision, Our Expertise",
        img1: "https://framerusercontent.com/images/q7ZR9LuIuYQcY8NMJPISW9adaRc.png",
        img2: "https://framerusercontent.com/images/oMMsqQR2ndxrwQC68kd2DkGZtU.png",
        p: "From your big idea to launch day – we're with you every step of the way.",
        dialogFirst1: ["How do you feel about the color palette and typography choices we've implemented?"],
        dialogSecond1: ["I appreciate the direction, but I think we could explore bolder options for the typography to better reflect our brand's personality."],
        dialogFirsrt2: ["Sure thing! I'll tweak the typography to better suit your brand's style. Thanks for letting me know!"],
        dialogSecond2: ["Sounds good, appreciate you taking care of it! Looking forward to seeing the updated designs."]
    }
]
// feature end
export const serviceHeading = [
    {
        h2: "Choose Your Design Adventure",
        p: "Your design partner for web, mobile, and brand success."
    }
]
export const serviceArray = [
    {
        img: RiComputerFill,
        h3: "Web Design",
        p: "we craft user-centric designs that elevate your online presence – from lightning-fast e-commerce sites to sleek, informative landing pages."
    },
    {
        img: FaMobile,
        h3: "Mobile Design",
        p: "Mobile designs that are as beautiful as they are effective. We optimize every pixel for seamless navigation, boosting engagement and driving conversions across all devices."
    },
    {
        img: IoStar,
        h3: "Brand Design",
        p: "From first impressions to lasting loyalty, we'll craft a brand identity that speaks to your ideal customer. With logos, style guides, and stunning visuals, we'll make sure your startup stands out."
    },
    {
        img: PiLightningFill,
        h3: "No Code Development",
        p: "Even if you're not a coding whiz, Framer lets you build amazing things. We'll handle the technical side, so you can focus on designing solutions that supercharge your startup."
    }
]

// paying
export const payingHeading = [
    {
        h2: "Pick Your Design Power-Up",
        p: "Scale your design potential with the right plan."
    }
]
export const payingStarter = [
    {
        icon: IoMdCheckmark,
    }
]
export const payingStarterArray =
    ["Pause / cancel anytime", "Dedicated project manager", "Easy to manage design requests", "1 request at the time", "24/7 Priority Support", "Framer Development", "SEO Marketing", "2 Weeks Delivery"
    ]


export const payingPremiumArray = [
    "Pause / cancel anytime", "Dedicated project manager", "Easy to manage design requests", "2 request at the time", "24/7 Priority Support", "Framer Development", "SEO Marketing", "1 Week Delivery "

]
// FQAs
export const FQAsHeading = [
    {
        h2: "Got Questions? We've Got Answers.",
        p: "Everything you need to know about the product and billing.",
        icon: FaPlus
    }
]
export const FQAsArray = [
    {
        h3: "What types of services do you offer?",
        p: "From brand identity development to website design, we offer a comprehensive range of design services tailored to meet your needs. Whether you're launching a new business or rebranding an existing one, we're here to help bring your vision to life."
    },
    {
        h3: "How do you approach the design process?",
        p: "Our design process is collaborative and iterative. We start by understanding our client's goals and target audience, then we create initial concepts for feedback. We refine these concepts based on feedback until we reach a final design."
    },
    {
        h3: "What sets your agency apart from others?",
        p: "At our agency, we blend creativity with strategy to deliver designs that not only look visually stunning but also drive results. Our team consists of experienced designers who stay updated with the latest design trends and technologies to provide innovative solutions. We prioritize communication, reliability, and delivering projects on time and within budget."
    },
    {
        h3: "Do you work with clients internationally?",
        p: "Yes, we work with clients from all around the globe. Thanks to modern communication technologies, we can collaborate effectively with clients regardless of their location. Whether you're based locally or internationally, we're dedicated to providing the same level of high-quality service and attention to detail."
    },
    {
        h3: "Can you help with ongoing design needs after the initial project is completed?",
        p: "Absolutely! We believe in building long-term relationships with our clients. Once your initial project is completed, we're here to support you with any ongoing design needs you may have, whether it's updating your website, creating new marketing materials, or evolving your brand as your business grows. "
    }
];

export const communityHeading = [
    {
        h2: "Don't Just Take Our Word For It",
        p: "Discover why our clients choose us for impactful design solutions.",
        img: IoStar,
    }
]
export const communityArray = [
    {
        p: "These guys made the whole design process so easy! They really listened to what I wanted, offered some great ideas I wouldn't have thought of, and everything was done on time. Super happy with the result.",
        title: "John Doe",
        h4: "John Doe",
        span: "Duis rhoncus",
        img: "https://framerusercontent.com/images/7ckekOZAa0J28C2T3IfYTvNDv5U.jpg?scale-down-to=1024"
    },
    {
        p: "I can't thank this team enough for their expertise and professionalism. From the initial consultation to the final product, they were attentive to my vision and added their creative touch to enhance it.",
        title: "Marcus Lee",
        h4: "Marcus Lee",
        span: "DRX Consulting",
        img: "https://framerusercontent.com/images/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg?scale-down-to=1024"
    },
    {
        p: "Working with this team was a breeze! They took my scattered ideas and turned them into a cohesive design that exceeded my expectations. Their attention to detail made the entire process stress-free.",
        title: "Jack W",
        h4: "Jack W.",
        span: "Kaut Marketing",
        img: "https://framerusercontent.com/images/lZTqZTGcaqGuaCWqqriCJCIv0QU.jpg?scale-down-to=512"
    },
    {
        p: "Choosing this team for my design project was the best decision I made. They were attentive, collaborative, and brought fresh perspectives to the table. The end result was beyond what I imagined",
        title: "Emily Johnson",
        h4: "Emily Johnson",
        span: "Fast Agency ltd",
        img: "https://framerusercontent.com/images/LZYY71GfAAmwFGFURcEc4dfpoY.jpg?scale-down-to=1024"
    }
]
export const commentsHeading = [
    {
        h2: "Don't Just Take Our Word For It",
        p: "Discover why our clients choose us for impactful design solutions.",
        img: IoStar,
    }
]
export const commentsArray = [
    {
        p: "These guys made the whole design process so easy! They really listened to what I wanted, offered some great ideas I wouldn't have thought of, and everything was done on time. Super happy with the result.",
        title: "John Doe",
        h4: "John Doe",
        span: "Duis rhoncus",
        img: "https://framerusercontent.com/images/7ckekOZAa0J28C2T3IfYTvNDv5U.jpg?scale-down-to=1024"
    },
    {
        p: "I can't thank this team enough for their expertise and professionalism. From the initial consultation to the final product, they were attentive to my vision and added their creative touch to enhance it.",
        title: "Marcus Lee",
        h4: "Marcus Lee",
        span: "DRX Consulting",
        img: "https://framerusercontent.com/images/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg?scale-down-to=1024"
    },
    {
        p: "Working with this team was a breeze! They took my scattered ideas and turned them into a cohesive design that exceeded my expectations. Their attention to detail made the entire process stress-free.",
        title: "Jack W",
        h4: "Jack W.",
        span: "Kaut Marketing",
        img: "https://framerusercontent.com/images/lZTqZTGcaqGuaCWqqriCJCIv0QU.jpg?scale-down-to=512"
    },
    {
        p: "Choosing this team for my design project was the best decision I made. They were attentive, collaborative, and brought fresh perspectives to the table. The end result was beyond what I imagined",
        title: "Emily Johnson",
        h4: "Emily Johnson",
        span: "Fast Agency ltd"
    }
]

export const footerHeading = [
    {
        h2: "Ready for Growth? Let's Talk",
        copyright: "© 2024 PixelPulse. All rights reserved."
    }
]

export const socialArr = [
    {
        title: "Twitter",
        link: "https://twitter.com/_YashrajVaghela",
        icon: FaXTwitter
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/",
        icon: FaInstagram
    },
    {
        title: "linkedin",
        link: "https://www.linkedin.com/",
        icon: CiLinkedin
    },
    {
        title: "Youtube",
        link: "https://www.youtube.com/",
        icon: CiYoutube
    },

]