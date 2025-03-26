import nextAppLoader from "next/dist/build/webpack/loaders/next-app-loader";

/** @type{import('next').NextConfig} */
const nextConfig ={
    images: {
        domains : ['cdn.sanity.io'],
},
};

module.exports =  nextConfig