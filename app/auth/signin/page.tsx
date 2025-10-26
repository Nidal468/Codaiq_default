"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        try {
            const result = await signIn("credentials", {
                email: email,
                password: password,
                redirect: false
            });
            
            if (result?.error) {
                setError("Invalid email or password");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1A1A2E] to-[#16213E] p-6">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md bg-[#1E293B]/70 backdrop-blur-lg rounded-xl shadow-xl border border-[#334155] p-8"
            >
                <div className="text-center mb-8">
                    <motion.h1 
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-bold text-[#E2E8F0] mb-2"
                    >
                        Welcome to Codaiq
                    </motion.h1>
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#94A3B8]"
                    >
                        Sign in to access your dashboard
                    </motion.p>
                </div>

                {error && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-4 p-3 bg-red-900/20 text-red-300 text-sm rounded-md border border-red-700/50"
                    >
                        {error}
                    </motion.div>
                )}

                <form className="space-y-6" onSubmit={handleEmailSignIn}>
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Label htmlFor="email" className="text-[#E2E8F0] mb-2 block text-sm font-medium">
                            Email Address
                        </Label>
                        <div className="relative">
                            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8]" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-10 bg-[#1E293B] border-[#334155] focus:border-[#3B82F6] focus:ring-[#3B82F6] text-[#E2E8F0]"
                                required
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Label htmlFor="password" className="text-[#E2E8F0] mb-2 block text-sm font-medium">
                            Password
                        </Label>
                        <div className="relative">
                            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#94A3B8]" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10 bg-[#1E293B] border-[#334155] focus:border-[#3B82F6] focus:ring-[#3B82F6] text-[#E2E8F0]"
                                required
                            />
                        </div>
                    </motion.div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input 
                                id="remember" 
                                type="checkbox" 
                                className="h-4 w-4 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB] bg-[#1E293B]" 
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-[#94A3B8]">
                                Remember me
                            </label>
                        </div>
                        <a 
                            href="/auth/forgotpassword" 
                            className="text-sm font-medium text-[#3B82F6] hover:text-[#2563EB] hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E40AF] hover:from-[#1E40AF] hover:to-[#2563EB] text-white font-medium py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            <span>Sign In</span>
                            <FiArrowRight className="ml-2" />
                        </Button>
                    </motion.div>
                </form>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 text-center text-sm text-[#94A3B8]"
                >
                    Don't have an account?{' '}
                    <a 
                        href="/auth/signup" 
                        className="font-medium text-[#3B82F6] hover:text-[#2563EB] hover:underline"
                    >
                        Sign up
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
}