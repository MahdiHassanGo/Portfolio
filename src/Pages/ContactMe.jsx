import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";

const ContactMe = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            AOS.init({ duration: 1000, once: true });
        }, 100); 
        return () => clearTimeout(timer);
    }, []);

    const handleSendEmail = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const toEmail = "contact.mahdiasif@gmail.com"; 

        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.open(gmailLink, "_blank");
    };

    return (
        <section id="contact" className="relative py-24 px-4 bg-primaryBg overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-league font-bold text-white uppercase tracking-wider mb-4">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Connect</span>
                    </h2>
                    <p className="font-outfit text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I'm always open to discussing new opportunities and creative ideas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left side: Info Badges */}
                    <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
                        <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group hover:border-blue-500/50 transition-all duration-500">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <FiMail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-outfit font-medium text-white">Email</h4>
                                    <p className="text-gray-400 text-sm">contact.mahdiasif@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group hover:border-purple-500/50 transition-all duration-500">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                                    <FiMapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-outfit font-medium text-white">Location</h4>
                                    <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a href="https://github.com/MahdiHassanGo" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
                                <FiGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/mahdihassannoorasif/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                                <FiLinkedin size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right side: Contact Form */}
                    <div className="lg:col-span-7" data-aos="fade-left">
                        <div className="p-8 md:p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] relative overflow-hidden group">
                           {/* Subtle Inner Glow */}
                           <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700"></div>

                            <form onSubmit={handleSendEmail} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 text-left">
                                        <label className="text-sm font-outfit text-gray-400 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-2 text-left">
                                        <label className="text-sm font-outfit text-gray-400 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-sm font-outfit text-gray-400 ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        placeholder="Hello, I'd like to talk about..."
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 resize-none placeholder:text-gray-600"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-outfit font-semibold text-white flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 active:scale-95"
                                >
                                    <span>Send Message</span>
                                    <FiSend size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
