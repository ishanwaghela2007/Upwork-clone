import React from "react";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";
import {
  PanTool as HandIcon,
  Computer as MonitorIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import Nav from "../Landingpage/Navbarland";
import FooterLand from './Footerland';
import Button from './button'
import { useState } from "react";

const Landing = () => {
  const features = [
    {
      icon: HandIcon,
      title: "Browse our job marketplace",
      description:
        "With categories that range from one-off gigs to long-term contracts.",
      imageUrl:
        "https://images.unsplash.com/photo-1669110975263-1cd406d3b9ae?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=256&width=256",
    },
    {
      icon: MonitorIcon,
      title: "Our AI tech brings you personalized job recommendations",
      description: "Based on your interests and skills.",
      imageUrl:
        "https://images.unsplash.com/photo-1537655226665-44b4f7ad2351?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=256&width=256",
    },
    {
      icon: SearchIcon,
      title: "Discover and get discovered",
      description:
        "With our advanced search and filtering options, designed to help you find the perfect match.",
      imageUrl:
        "https://images.unsplash.com/photo-1528060624137-4220dde892b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=254&width=254",
    },
  ];
  const FeatureCard = ({ icon: Icon, title, description, imageUrl }) => (
    <Card className="flex flex-col h-full">
      <div className="h-48 flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="flex flex-col flex-grow p-6">
        <Typography variant="h5" className="mb-2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="flex-grow">
          {description}
        </Typography>
        <Icon className="mt-4 h-6 w-6 text-primary" />
      </CardContent>
    </Card>
  );
  const [secure, setsecure] = useState(10000);
  const [Hr, setHr] = useState(24);
  const [Happy, SetHappy] = useState(10);

  return (
    <>
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between mt-16 space-y-8 md:space-y-0 md:space-x-9">
          {/* Left Section: Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Take Your Freelance Career to New Heights with Empowered
              Freelancers
            </h1>
            <p className="text-xl mb-6">
              Unlock your full potential as a freelancer. Connect with top
              clients, showcase your expertise, and accelerate your professional
              growth. Join a thriving community and turn your freelance
              ambitions into reality.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Create Profile
            </button>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_vector-1682306012789-3632829c0ffc?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=600"
              alt="Freelancer working on laptop"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
        <>
          <div className="flex-grow container mx-auto px-4 py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
              Showcase Your Talent
            </h1>
            <p className="text-xl mb-6 text-left">
              Our platform allows freelancers to create vibrant profiles
              showcasing their skills, <br />
              experience and portfolio. <br />
              It’s your digital CV but more fun and creative! <br />
              Unleash your talent and let your work history shine!
            </p>
            {/*right side text*/}
            <p className="text-xl mb-6 text-right text-black">
              Don't merely proclaim to prospective customers
              <br /> your capabilities, demonstrate them! Possess a <br />
              knack for design? Charm your clientele with your
              <br /> catalogue of works. A master of coding? Reveal <br />
              the digital marvels you've created previously
            </p>
          </div>
          {/*second main component*/}
          <section className="container mx-auto px-4 py-8">
            <Grid container spacing={3} className="h-full">
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index} className="h-full">
                  <FeatureCard {...feature} className="h-full" />
                </Grid>
              ))}
            </Grid>
          </section>
          <>
            {/*third main component*/}
            <div className="text-center text-xl h-screen w-full flex items-center justify-center">
              <h1 className="text-4xl font-bold">
                Enhance your Freelancing game with Smart Freelancers
              </h1>
            </div>
          </>
          <>
            {/* Fourth main component  */}
            <div className="text-center py-8">
              <h1 className="text-4xl font-bold mb-4">Your Funds, Safeguarded</h1>
              <p className="text-lg mb-6">
                Our escrow-based system ensures all transactions are secure,
                holding funds until both parties are satisfied. No unexpected
                payment surprises here!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-semibold">{secure}</p>
                  <h3 className="text-xl font-bold">Secure Payments</h3>
                </div>
                <div>
                  <p className="text-2xl font-semibold">{Hr}</p>
                  <h3 className="text-xl font-bold">Hours Support</h3>
                </div>
                <div>
                  <p className="text-2xl font-semibold">{Happy}K</p>
                  <h3 className="text-xl font-bold">Happy Clients</h3>
                </div>
              </div>
            </div>
          </>
          <>
          <div className="text-center text-xl h-screen w-full flex items-center justify-center">
              <h1 className="text-4xl font-bold">
              We're not just secure, we're also really smart!
              </h1>
            </div>
          </>
          <>
          <div className="text-center py-8">
          <h1 className="text-4xl font-bold mb-4">Real-time Support,Anytime,<br/>Anywhere</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center py-8">
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-2">Whether you've got big questions or small ones, Our AI chatbot is here 24/7. We are always here for you, so never feel lost.</h2>
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-2">We support multiple languages including Indian languages.</h2>
            </div>
          </div>
          </>
          <>
          <div className="text-center text-xl h-screen w-full flex flex-col items-center justify-center space-y-6">
              <h1 className="text-4xl font-bold">
              Ready to start your<br/>
              Freelancing journey with us?
              </h1>
              <Button />
            </div>
          </>
        </>
      </main>
    </>
  );
};

export default Landing;
