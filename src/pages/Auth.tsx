import React, { useState, useEffect } from "react";
import { account } from "../lib/appwrite"; // Adjust path if needed
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  
  // State
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Toggle Login/Signup
  const [error, setError] = useState<string | null>(null);

  // Form Data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if user is already logged in
  useEffect(() => {
    const checkSession = async () => {
      try {
        await account.get();
        navigate("/"); // Redirect to home/dashboard if logged in
      } catch (err) {
        // User is not logged in, show auth page
      }
    };
    checkSession();
  }, [navigate]);

  // --- OAUTH LOGIC ---
  const handleOAuth = async (provider: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Redirects to provider logic
      await account.createOAuth2Session(
        provider as any,
        `${window.location.origin}/`,      // Success redirect (Home)
        `${window.location.origin}/auth`   // Failure redirect (Back to Auth)
      );
    } catch (err: any) {
      console.error("OAuth failed:", err);
      setError("OAuth login failed. Please try again.");
      setLoading(false);
    }
  };

  // --- EMAIL/PASSWORD LOGIC ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        // 1. Create Account
        await account.create(ID.unique(), email, password, name);
        // 2. Create Session (Login) immediately after signup
        await account.createEmailPasswordSession(email, password);
      } else {
        // Login existing user
        await account.createEmailPasswordSession(email, password);
      }
      
      navigate("/"); // Redirect on success
    } catch (err: any) {
      console.error("Auth Error:", err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-xl shadow-lg border border-gray-100">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            {isSignUp ? "Create an account" : "Welcome back"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isSignUp ? "Start your journey with us" : "Please enter your details to sign in"}
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="rounded-md bg-red-50 p-4 text-sm text-red-500 border border-red-200">
            {error}
          </div>
        )}

        {/* --- OAuth Buttons --- */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleOAuth("google")}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent transition-all"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </button>

          <button
            type="button"
            onClick={() => handleOAuth("github")}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#24292F] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#24292F]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F] transition-all"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>

        {/* --- Email Form --- */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="mt-2">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : isSignUp ? "Create account" : "Sign in"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

// Ensure Default Export is present!
export default Auth;