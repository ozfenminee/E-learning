import React, { useState } from 'react';
import { login, signup } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../usercontext';

export const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  const user_auth = async (event) => {
    event.preventDefault();
    try {
      if (signState === "Sign In") {
        const user = await login(email, password);
        if (user) { // Check if the user is successfully retrieved
          setUser({ name: user.displayName || email.split('@')[0] });
          alert("Giriş başarılı!");
          navigate('/');
        } else {
          throw new Error("Bu hesap bulunamadı. Lütfen önce kayıt olun.");
        }
      } else {
        await signup(name, email, password);
        setUser({ name });
        alert("Kayıt başarılı!");
        navigate('/');
      }
    } catch (error) {
      if (error.message.includes("There is no user record")) {
        alert("Bu hesap bulunamadı. Lütfen önce kayıt olun.");
      } else {
        alert(`Hata: ${error.message}`);
      }
    }
  };
  


  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-yellow-50 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center text-yellow-900">{signState}</h1>
        
        <form onSubmit={user_auth} className="space-y-4">
          {signState === "Sign Up" && (
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-yellow-300 rounded focus:outline-none focus:border-yellow-500"
            />
          )}
          
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-yellow-300 rounded focus:outline-none focus:border-yellow-500"
          />
          
          <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-yellow-300 rounded focus:outline-none focus:border-yellow-500"
          />
          
          <button 
            type="submit"
            className="w-full py-2 text-white bg-yellow-600 rounded hover:bg-yellow-700 transition"
          >
            {signState}
          </button>

          <div className="flex items-center justify-between text-sm text-yellow-700">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2 text-yellow-600 border-yellow-400 focus:ring-yellow-500" />
              <label>Remember Me</label>
            </div>
            <p className="hover:underline cursor-pointer">Need Help?</p>
          </div>
        </form>
        
        <div className="text-center text-sm text-yellow-700">
          {signState === 'Sign In' ? (
            <p>New to Elearning? <span onClick={() => setSignState("Sign Up")} className="text-yellow-900 font-bold cursor-pointer hover:underline">Sign Up Now</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setSignState("Sign In")} className="text-yellow-900 font-bold cursor-pointer hover:underline">Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
