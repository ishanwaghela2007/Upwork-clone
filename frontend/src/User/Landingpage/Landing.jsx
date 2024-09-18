import React from "react";

const Landing = () => {
  return (
<main className="flex-grow container mx-auto px-4 py-20">
  <div className="flex flex-col md:flex-row items-center justify-between mt-16 space-y-8 md:space-y-0 md:space-x-8">
    {/* Left Section: Text Content */}
    <div className="md:w-1/2">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
      Take Your Freelance Career to New Heights with Empowered Freelancers
      </h1>
      <p className="text-xl mb-6">
      Unlock your full potential as a freelancer. Connect with top clients, showcase your expertise, and accelerate your professional growth. Join a thriving community and turn your freelance ambitions into reality.
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
</main>
  )
};

export default Landing;


