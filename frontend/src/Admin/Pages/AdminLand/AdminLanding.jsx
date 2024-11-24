import React from "react";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";
import {
  PanTool as HandIcon,
  Computer as MonitorIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import Nav from './Nav'
import Button from "./Button";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <Card className="flex flex-col h-full bg-white shadow-lg">
      <div className="h-48 flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="flex flex-col flex-grow p-6">
        <Typography variant="h5" className="mb-2 text-gray-900">
          {title}
        </Typography>
        <Typography variant="body2" className="flex-grow text-gray-700">
          {description}
        </Typography>
        <Icon className="mt-4 h-6 w-6 text-indigo-600" />
      </CardContent>
    </Card>
  );
  const [secure, setsecure] = useState(10000);
  const [Hr, setHr] = useState(24);
  const [Happy, SetHappy] = useState(10);

  return (
    <>
      <Nav />
      <main className="flex-grow bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between mt-16 space-y-8 md:space-y-0 md:space-x-9">
            {/* Left Section: Text Content */}
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
                Take Your Freelance Career to New Heights with Empowered
                Freelancers
              </h1>
              <p className="text-xl mb-6 text-gray-700">
                Unlock your full potential as a freelancer. Connect with top
                clients, showcase your expertise, and accelerate your professional
                growth. Join a thriving community and turn your freelance
                ambitions into reality.
              </p>
              <Link to="/admin/adminlogin" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                Get Started
              </Link>
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

          <div className="bg-white rounded-lg shadow-lg px-8 py-16 my-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Showcase Your Talent
            </h1>
            <p className="text-xl mb-6 text-left text-gray-700">
              Our platform allows freelancers to create vibrant profiles
              showcasing their skills, <br />
              experience and portfolio. <br />
              It's your digital CV but more fun and creative! <br />
              Unleash your talent and let your work history shine!
            </p>
            <p className="text-xl mb-6 text-right text-gray-700">
              Don't merely proclaim to prospective customers
              <br /> your capabilities, demonstrate them! Possess a <br />
              knack for design? Charm your clientele with your
              <br /> catalogue of works. A master of coding? Reveal <br />
              the digital marvels you've created previously
            </p>
          </div>

          <section className="py-16">
            <Grid container spacing={4} className="h-full">
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index} className="h-full">
                  <FeatureCard {...feature} className="h-full" />
                </Grid>
              ))}
            </Grid>
          </section>

          <div className="text-center text-xl h-screen w-full flex items-center justify-center bg-indigo-50">
            <h1 className="text-4xl font-bold text-gray-900">
              Enhance your Freelancing game with Smart Freelancers
            </h1>
          </div>

          <div className="text-center py-16 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Your Funds, Safeguarded</h1>
            <p className="text-lg mb-6 text-gray-700">
              Our escrow-based system ensures all transactions are secure,
              holding funds until both parties are satisfied. No unexpected
              payment surprises here!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <p className="text-3xl font-semibold text-indigo-600">{secure}</p>
                <h3 className="text-xl font-bold text-gray-900">Secure Payments</h3>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <p className="text-3xl font-semibold text-indigo-600">{Hr}</p>
                <h3 className="text-xl font-bold text-gray-900">Hours Support</h3>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <p className="text-3xl font-semibold text-indigo-600">{Happy}K</p>
                <h3 className="text-xl font-bold text-gray-900">Happy Clients</h3>
              </div>
            </div>
          </div>

          <div className="text-center text-xl h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-50 to-purple-50">
            <h1 className="text-4xl font-bold text-gray-900">
              We're not just secure, we're also really smart!
            </h1>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-16">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Real-time Support, Anytime,<br/>Anywhere</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="md:w-1/2 p-6 bg-indigo-50 rounded-lg">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">Whether you've got big questions or small ones, Our AI chatbot is here 24/7. We are always here for you, so never feel lost.</h2>
              </div>
              <div className="md:w-1/2 p-6 bg-indigo-50 rounded-lg">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">We support multiple languages including Indian languages.</h2>
              </div>
            </div>
          </div>

          <div className="text-center text-xl h-screen w-full flex flex-col items-center justify-center space-y-6 bg-gradient-to-b from-white to-indigo-50">
            <h1 className="text-4xl font-bold text-gray-900">
              Ready to start your<br/>
              Freelancing journey with us?
            </h1>
            <Button />
          </div>

          <div className="text-center py-16 bg-indigo-900 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold mb-4 text-white">Subscribe to our Website</h1>
            <p className="text-xl mb-6 text-indigo-100">Stay updated with the latest job opportunities and news.</p>
            <form 
              className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const emailInput = form.querySelector('input[type="email"]');
                emailInput.value = '';
                emailInput.placeholder = 'Thank you for subscribing!';
                setTimeout(() => {
                  emailInput.placeholder = 'Enter your email';
                }, 3000);
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="p-3 border border-indigo-300 rounded-md w-full md:w-1/3 bg-white text-gray-900"
              />
              <button
                type="submit"
                className="p-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md w-full md:w-auto transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Landing;
