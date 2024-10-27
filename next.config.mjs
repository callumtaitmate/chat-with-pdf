/** @type {import('next').NextConfig} */


const nextConfig = {
  
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://www.researchxcelerator.com/",
        "www.researchxcelerator.com/",
        "https://www.chat-with-pdf-roadmap.vercel.app/",
        "www.chat-with-pdf-roadmap.vercel.app/",
        "https://www.researchxcelerator.com",
        "www.researchxcelerator.com",
        "https://www.chat-with-pdf-roadmap.vercel.app",
        "www.chat-with-pdf-roadmap.vercel.app",
      ],
    },
  },
  
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
      },
      
      {
        protocol: "https",
        hostname: "img.clerk.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
  
};




export default nextConfig;

