import React, { useState } from "react";
import ParallaxSection from "../components/ParallaxSection";
import kuldeepSoniImg from "../assets/img/team/sales/Kuldeepsoni.webp";
import ankitjiiImg from "../assets/img/team/sales/ankitji.webp";
import arvindjiiImg from "../assets/img/team/sales/arvindji.webp";
import devendrajiiImg from "../assets/img/team/sales/devendraji.webp";
import ramendrajiiImg from "../assets/img/team/sales/ramendraji.webp";
import jagdishjiiImg from "../assets/img/team/sales/jagdishji.webp";
import garimajiiImg from "../assets/img/team/management/garimaji0.webp";
import bhavnajiImg from "../assets/img/team/management/bhavnaji.webp";
import nitinjiImg from "../assets/img/team/management/nitinji.webp";
import mohanjiImg from "../assets/img/team/management/mohanji.webp";
import shivjiImg from "../assets/img/team/management/shivji.webp";
import teamBg from "../assets/img/icon/counter-bg-2.webp";
import teamHandImg from "../assets/img/team/Team-Hand.webp";
import teamDiscusImg from "../assets/img/team/team-discus.webp";
import teamCircleImg from "../assets/img/team/team-circle.webp";
import workingHardImg from "../assets/img/team/Working-hard.webp";

function Team() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogImage, setDialogImage] = useState("");
  const [dialogAlt, setDialogAlt] = useState("");

  // Team members data
  const leadershipTeam = [
    {
      id: 1,
      name: "Shivkumar Singh Tomar",
      position: "Chairman",
      bio: "Shivkumar Singh Tomar is the Chairman of Nestoria Group. He has over 15 years of experience in the real estate industry. He has been responsible for leading the company to its current position. He has also been responsible for setting the direction and strategy for the company. He has been a key player in the development of Nestoria Group. He has also been a key player in the development of Nestoria Group. He has also been a key player in the development of Nestoria Group.",
      image: shivjiImg,
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "shiv.tomar@nestoriagroup.com",
      },
    },
    {
      id: 2,
      name: "Mohan Singh Tomar",

      position: "Chief executive officer",
      bio: "Mohan Singh Tomar brings 15 years of Sales expertise to Nestoria Group. His strategic financial planning and risk management skills have been crucial in securing investments for our major development projects.",
      image: mohanjiImg,
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "mohan.tomar@nestoriagroup.com",
      },
    },
    {
      id: 3,
      name: "Nitin Singh Tomar",
      position: "Managing Director",
      bio: "With over 15 years of experience in real estate development, Nitin Singh Tomar has led Nestoria Group to become one of the leading developers in Dholera SIR. His vision and strategic leadership have been instrumental in the company's growth.",
      image: nitinjiImg,

      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "nitin.tomar@nestoriagroup.com",
      },
    },

    // {
    //   id: 4,
    //   name: "Neha Verma",
    //   position: "Marketing Director",
    //   bio: "Neha leads our marketing initiatives with innovative strategies. Her expertise in digital marketing and brand development has significantly enhanced Nestoria Group's market presence and customer engagement.",
    //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061",
    //   socialLinks: {
    //     linkedin: "#",
    //     twitter: "#",
    //     email: "neha@nestoriagroup.com"
    //   }
    // }
  ];

  const departmentTeams = [
    {
      id: 1,
      name: "Sales Team",
      members: [
        {
          id: 1,
          name: "Kuldeep Soni",
          position: "Sales ",
          image: kuldeepSoniImg,
        },
        {
          id: 2,
          name: "Devendra Sikarwar",
          position: "Sales ",
          image: devendrajiiImg,
        },
        {
          id: 3,
          name: "Ramendra Singh Tomar",
          position: "Sales ",
          image: ramendrajiiImg,
        },
        {
          id: 4,
          name: "Arvind Singh Tomar",
          position: "Sales ",
          image: arvindjiiImg,
        },
        {
          id: 5,
          name: "Jagdish Patel",
          position: "Sales ",
          image: jagdishjiiImg,
        },
        {
          id: 6,
          name: "Ankit Singh Chauhan",
          position: "Sales ",
          image: ankitjiiImg,
        },
      ],
    },
    {
      id: 2,
      name: "Management",
      members: [
        {
          id: 1,
          name: "Garima Bora",
          position: "HR & Admin",
          image: garimajiiImg,
        },
        
      ],
    },
    {
      id: 3,
      name: "Legal Team",
      members: [
        {
          id: 1,
          name: "Bhavna Vyas",
          position: "Legal Advisor",
          image: bhavnajiImg,
        },
        // {
        //   id: 2,
        //   name: "Sneha Kapoor",
        //   position: "Paralegal",
        //   image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2187"
        // },
        // {
        //   id: 3,
        //   name: "Vikram Singh",
        //   position: "Contract Specialist",
        //   image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2187"
        // }
      ],
    },
    // {
    //   id: 4,
    //   name: "Customer Support Team",
    //   members: [
    //     {
    //       id: 1,
    //       name: "Ajay Toamr",
    //       position: "Customer Relations Manager",
    //       image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=2187"
    //     },
    //     {
    //       id: 2,
    //       name: "Karan Malhotra",
    //       position: "Customer Support Specialist",
    //       image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2187"
    //     },
    //     {
    //       id: 3,
    //       name: "Pooja Shah",
    //       position: "Client Relationship Officer",
    //       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2188"
    //     }
    //   ]
    // }
  ];

  const openDialog = (image, alt) => {
    setDialogImage(image);
    setDialogAlt(alt);
    setIsDialogOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close dialog when pressing Escape key
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isDialogOpen) {
        closeDialog();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isDialogOpen]);

  return (
    <div className="team-page">
      <ParallaxSection
        backgroundImage={teamBg}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.6), rgba(3, 22, 65, 0.25))"
        speed={0.3}
        className="py-20 flex items-center justify-center text-center"
      >
         <div className="container mx-auto px-4 relative z-10 w-full h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-slide-up text-white">Our Team</h1>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 md:mb-8 animate-slide-up"></div>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-0 animation-delay-300 text-white/90">
              Meet the dedicated professionals behind Nestoria Group's success in Dholera SIR
            </p>
          </div>
        </div>
      </ParallaxSection>
      

      {/* Leadership Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Leadership <span className="text-blue-600">Team</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The visionaries guiding Nestoria Group towards excellence and
                innovation in Dholera SIR
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {leadershipTeam.map((leader) => (
              <div key={leader.id} className="group">
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-4 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={leader.image}
                      className="w-full h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                      alt={leader.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <a
                        href={leader.socialLinks.linkedin}
                        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <i className="fab fa-linkedin-in text-lg"></i>
                      </a>
                      <a
                        href={leader.socialLinks.twitter}
                        className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <i className="fab fa-twitter text-lg"></i>
                      </a>
                      <a
                        href={`mailto:${leader.socialLinks.email}`}
                        className="bg-gray-600 text-white p-3 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <i className="fas fa-envelope text-lg"></i>
                      </a>
                    </div> */}
                  </div>
                  <div className="p-6 md:p-8 text-center">
                    <h5 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {leader.name}
                    </h5>
                    <p className="text-blue-600 font-semibold mb-4 text-lg">
                      {leader.position}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Teams Section */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Our <span className="text-blue-600">Departments</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Specialized teams working together to deliver excellence and
                innovation in every project
              </p>
            </div>
          </div>

          {departmentTeams.map((department) => (
            <div className="mb-20 md:mb-24" key={department.id}>
              <div className="mb-8">
                <div className="w-full">
                  <h3 className="text-2xl md:text-3xl font-bold border-l-4 border-blue-600 pl-4 text-gray-800">
                    {department.name}
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {department.members.map((member) => (
                  <div key={member.id} className="group">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                      <div className="flex flex-col">
                        <div className="w-full">
                          <img
                            src={member.image}
                            className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                            alt={member.name}
                          />
                        </div>
                        <div className="w-full">
                          <div className="p-6">
                            <h5 className="text-lg md:text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                              {member.name}
                            </h5>
                            <p className="text-blue-600 font-semibold mb-4 text-base">
                              {member.position}
                            </p>
                            <div className="flex space-x-3">
                              <a
                                href="#"
                                className="text-gray-500 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
                              >
                                <i className="fab fa-linkedin-in text-lg"></i>
                              </a>
                              <a
                                href="#"
                                className="text-gray-500 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
                              >
                                <i className="fas fa-envelope text-lg"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Company Culture Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-5/12">
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Our Culture
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Our <span className="text-blue-600">Company Culture</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                At Nestoria Group, we foster a culture of innovation, integrity,
                and excellence. We believe in creating an environment where our
                team members can thrive professionally and personally.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: "fas fa-users",
                    title: "Collaborative Environment",
                    desc: "We work together across departments to achieve common goals.",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: "fas fa-lightbulb",
                    title: "Innovation",
                    desc: "We encourage creative thinking and new approaches to challenges.",
                    color: "from-green-500 to-green-600",
                  },
                  {
                    icon: "fas fa-award",
                    title: "Excellence",
                    desc: "We strive for the highest standards in all our endeavors.",
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    icon: "fas fa-handshake",
                    title: "Integrity",
                    desc: "We conduct business with honesty, transparency, and ethical practices.",
                    color: "from-emerald-500 to-emerald-600",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500 hover:border-blue-600"
                  >
                    <div className="flex items-start">
                      <div
                        className={`bg-gradient-to-br ${item.color} rounded-xl w-12 h-12 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <i className={`${item.icon} text-white text-lg`}></i>
                      </div>
                      <div>
                        <h5 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {item.title}
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a 
                  href="mailto:careers@nestoriagroup.com"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Join Our Team
                  <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-2 gap-6">
                <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <img
                    src={teamHandImg}
                    alt="Team Collaboration"
                    className="w-full h-64 object-cover rounded-2xl group-hover:scale-110 transition-all duration-700 cursor-pointer"
                    onClick={() => openDialog(teamHandImg, "Team Collaboration")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-lg">Team Collaboration</h3>
                      <p className="text-sm opacity-90">Working together towards common goals</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <i className="fas fa-expand text-white text-lg"></i>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <img
                    src={teamDiscusImg}
                    alt="Team Meeting"
                    className="w-full h-64 object-cover rounded-2xl group-hover:scale-110 transition-all duration-700 cursor-pointer"
                    onClick={() => openDialog(teamDiscusImg, "Team Meeting")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-lg">Team Meeting</h3>
                      <p className="text-sm opacity-90">Strategic discussions for project success</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <i className="fas fa-expand text-white text-lg"></i>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <img
                    src={teamCircleImg}
                    alt="Office Space"
                    className="w-full h-64 object-cover rounded-2xl group-hover:scale-110 transition-all duration-700 cursor-pointer"
                    onClick={() => openDialog(teamCircleImg, "Office Space")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-lg">Office Space</h3>
                      <p className="text-sm opacity-90">Modern workspace for creative minds</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <i className="fas fa-expand text-white text-lg"></i>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <img
                    src={workingHardImg}
                    alt="Team Building"
                    className="w-full h-64 object-cover rounded-2xl group-hover:scale-110 transition-all duration-700 cursor-pointer"
                    onClick={() => openDialog(workingHardImg, "Team Building")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-lg">Team Building</h3>
                      <p className="text-sm opacity-90">Building strong relationships through activities</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <i className="fas fa-expand text-white text-lg"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Dialog */}
      {isDialogOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={closeDialog}
          role="dialog"
          aria-modal="true"
          aria-label="Image dialog"
        >
          <div 
            className="relative max-w-6xl max-h-full" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300 z-10 hover:scale-110"
              onClick={closeDialog}
              aria-label="Close dialog"
              type="button"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <img 
              src={dialogImage} 
              alt={dialogAlt} 
              className="max-h-screen max-w-full object-contain rounded-lg shadow-2xl" 
              id="dialog-image"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">{dialogAlt}</p>
          </div>
        </div>
      )}

      {/* Join Our Team Section */}
      <section
        id="join-us"
        className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="w-full lg:w-2/3 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Join Our <span className="text-blue-300">Team</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-white to-blue-300 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl mb-10 leading-relaxed">
                We're always looking for talented individuals to join our
                growing team. Check out our current openings or send us your
                resume for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                <a
                  href="#current-openings"
                  className="group bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center">
                    <i className="fas fa-briefcase mr-2"></i>
                    View Current Openings
                  </span>
                </a>
                <a
                  href="mailto:careers@nestoriagroup.com"
                  className="group bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 border-2 border-white hover:border-blue-300 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
                >
                  <span className="flex items-center justify-center">
                    <i className="fas fa-envelope mr-2"></i>
                    Send Your Resume
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      {/* <section
        id="current-openings"
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Current <span className="text-blue-600">Openings</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Explore career opportunities at Nestoria Group and join our
                growing team
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                type: "Full-time",
                title: "Senior Project Manager",
                location: "Dholera SIR, Gujarat",
                description:
                  "We are looking for an experienced Project Manager to oversee our residential development projects in Dholera SIR. The ideal candidate will have at least 8 years of experience in real estate project management.",
                posted: "Posted 2 weeks ago",
                color: "from-blue-500 to-blue-600",
              },
              {
                type: "Full-time",
                title: "Marketing Specialist",
                location: "Ahmedabad, Gujarat",
                description:
                  "Join our marketing team to develop and implement marketing strategies for our real estate projects. The ideal candidate will have experience in digital marketing and content creation for the real estate sector.",
                posted: "Posted 1 week ago",
                color: "from-green-500 to-green-600",
              },
              {
                type: "Part-time",
                title: "Legal Advisor",
                location: "Dholera SIR, Gujarat",
                description:
                  "We are seeking a Legal Advisor with expertise in real estate law to provide guidance on property transactions, contracts, and regulatory compliance for our projects in Dholera SIR.",
                posted: "Posted 3 days ago",
                color: "from-purple-500 to-purple-600",
              },
              {
                type: "Full-time",
                title: "Sales Executive",
                location: "Dholera SIR, Gujarat",
                description:
                  "We are looking for enthusiastic Sales Executives to join our team. The ideal candidate will have experience in real estate sales and excellent communication skills to engage with potential clients.",
                posted: "Posted 5 days ago",
                color: "from-emerald-500 to-emerald-600",
              },
            ].map((job, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full overflow-hidden border-t-4 border-blue-500">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`bg-gradient-to-r ${job.color} text-white text-sm font-semibold px-4 py-2 rounded-full`}
                      >
                        {job.type}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {job.posted}
                      </span>
                    </div>
                    <h5 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {job.title}
                    </h5>
                    <p className="text-gray-500 mb-4 flex items-center">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {job.location}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                      {job.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="group/btn flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl">
                        <span className="flex items-center justify-center">
                          <i className="fas fa-eye mr-2"></i>
                          View Details
                        </span>
                      </button>
                      <a
                        href={`mailto:careers@nestoriagroup.com?subject=Application for ${job.title}`}
                        className="group/btn flex-1 bg-transparent hover:bg-blue-50 text-blue-600 border-2 border-blue-600 hover:border-blue-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-center"
                      >
                        <span className="flex items-center justify-center">
                          <i className="fas fa-paper-plane mr-2"></i>
                          Apply Now
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="text-center bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                Don't see a position that matches your skills?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We're always looking for talented individuals to join our team.
                Send us your resume and we'll keep you in mind for future
                opportunities.
              </p>
              <a
                href="mailto:careers@nestoriagroup.com"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-envelope mr-2"></i>
                  Send Us Your Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Team;
