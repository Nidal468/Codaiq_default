"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { FiLock, FiMail, FiUser, FiArrowRight, FiGithub, FiFigma } from "react-icons/fi";
import { motion } from "framer-motion";

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit = async (values: SignUpFormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Account created! Redirecting...");
        setTimeout(() => {
          signIn("credentials", { email: values.email, password: values.password });
        }, 1500);
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1A1A2E] to-[#16213E] p-4">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="w-full max-w-md"
      >
        <motion.div 
          variants={itemVariants}
          className="bg-[#1E293B]/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-[#334155]/50"
        >
          <div className="p-8 space-y-6">
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl font-bold text-[#E2E8F0] font-[Inter]">Create Account</h2>
              <p className="text-[#94A3B8] mt-2 text-sm font-[Roboto]">Start building your website in minutes</p>
            </motion.div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="name" className="text-sm text-[#E2E8F0] font-medium font-[Roboto]">Full Name</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiUser className="text-[#64748B]" />
                  </div>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="pl-10 bg-[#1E293B]/50 border-[#334155] text-[#E2E8F0] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    )}
                  />
                </div>
                {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="email" className="text-sm text-[#E2E8F0] font-medium font-[Roboto]">Email</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiMail className="text-[#64748B]" />
                  </div>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="pl-10 bg-[#1E293B]/50 border-[#334155] text-[#E2E8F0] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    )}
                  />
                </div>
                {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="password" className="text-sm text-[#E2E8F0] font-medium font-[Roboto]">Password</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FiLock className="text-[#64748B]" />
                  </div>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 bg-[#1E293B]/50 border-[#334155] text-[#E2E8F0] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    )}
                  />
                </div>
                {errors.password && <p className="text-xs text-red-400">{errors.password.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white font-medium py-3 rounded-md transition-all duration-200 hover:opacity-90 flex items-center justify-center gap-2"
                >
                  {loading ? "Creating Account..." : "Sign Up"} 
                  <FiArrowRight className="ml-1" />
                </Button>
              </motion.div>
            </form>

            <motion.div variants={itemVariants} className="relative flex items-center py-4">
              <div className="flex-grow border-t border-[#334155]"></div>
              <span className="flex-shrink mx-4 text-[#94A3B8] text-sm font-[Roboto]">OR CONTINUE WITH</span>
              <div className="flex-grow border-t border-[#334155]"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col space-y-3">
              <Button variant="outline" className="w-full flex items-center justify-center space-x-2 border-[#334155] bg-[#1E293B]/20 hover:bg-[#1E293B]/40 text-[#E2E8F0] font-[Roboto]">
                <FiGithub className="text-[#E2E8F0]" />
                <span>GitHub</span>
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center space-x-2 border-[#334155] bg-[#1E293B]/20 hover:bg-[#1E293B]/40 text-[#E2E8F0] font-[Roboto]">
                <FiFigma className="text-[#E2E8F0]" />
                <span>Figma</span>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center text-sm text-[#94A3B8] font-[Roboto]">
              Already have an account?{' '}
              <a href="/auth/signin" className="text-[#3B82F6] hover:underline font-medium">
                Sign in
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}