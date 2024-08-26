import {
    connectify,
    dall_e,
    aisol,
    testportal,
    metaExpo,
    tenzies,
    meme,
   
  } from "../public/assets";
  
  export const navLinks = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },

    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
   
  const projects = [
    {
      name: "Dall-e Clone",
      description:
        "DALL-E-AI Clone powered by MERN Stack. Unleash your imagination as this cutting-edge technology combines the creativity of DALL-E with the versatility of MERN, empowering you to generate stunning images and artworks with just a few clicks. Get ready to redefine the limits of visual exploration and bring your ideas",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dall_e,
      source_code_link: "https://github.com/Sharjeel-Iftikhar/DALL-E_AI_CLONE",
    },
    {
      name: "Meta Expo",
      description:
        "Developed Metaverse ExpoCenter, a virtual platform for attending events and conferences, using Unity and VR technologies. The platform includes customizable avatars, an exhibition area, a seminar hall, and an NFT gallery for real-time interaction and collaboration. It aims to provide a user-friendly experience for global users.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "trpc",
          color: "pink-text-gradient",
        },
      ],
      image: metaExpo,
      source_code_link: "https://github.com/Sharjeel-Iftikhar/MetaExpo-t3",
    },
    {
      name: "Connectify",
      description:
        "Web application full Stack social media application using MERN technologies. Fully user friendly design to connect and share your thoughts and moments with your beloved ones",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: connectify,
      source_code_link: "https://github.com/Sharjeel-Iftikhar/Connectify-Socail-app",
    },
    {
      name: "Test Portal",
      description:
        "A comprehensive test portal that allows users to take tests, view results, and offers curated recommendations for popular tests.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "moongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: testportal,
      source_code_link: "https://github.com/Sharjeel-Iftikhar/TestPortal",
    },
    
    {
      name: "Aisol.uk",
      description:
        "From Code to Couture : Marketing Refined. Aisol Ltd, based in Edinburgh, seamlessly blends AI innovation with marketing acumen to deliver exceptional business solutions.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "taiwind",
          color: "pink-text-gradient",
        },
      ],
      image: aisol,
      source_code_link: "https://github.com/Sharjeel-Iftikhar/AISOLLTD",
    },
    {
      name: "Tenzies",
      description:
        "Tenzies Game involves selecting a set of dice and then rolling them repeatedly until all dice show the same value. The game is played as a single player and the objective is to achieve the goal of matching all the dice in as few rolls as possible.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascrippt",
          color: "green-text-gradient",
        },
        {
          name: "HTML & CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tenzies,
      source_code_link: "https://github.com/Sharjeel-Iftikhar/Mern-Practices/tree/main/Tenzies",
    },

    {
      name: "Meme Gemerator",
      description:
        "The Meme Generator App is a fun and creative web application built with React. Unleash your inner humorist and create hilarious memes in seconds. Whether you're looking to brighten your day or share a laugh with friends, this app has you covered! Images are coming from jokes api so user can easily generate memes by writing text on it.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascrippt",
          color: "green-text-gradient",
        },
        {
          name: "HTML & CSS",
          color: "pink-text-gradient",
        },
      ],
      image: meme,
      source_code_link: "https://github.com/Sharjeel-Iftikhar/Mern-Practices/tree/main/Meme-generator",
    },
    
 
  ];
  
  export { projects };