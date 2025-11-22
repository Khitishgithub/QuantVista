"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function QuantVistaLanding() {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    if (email) {
      alert(`Thanks! We'll keep you posted: ${email}`);
      setEmail("");
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-white text-slate-900">
    
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            QuantVista — Cloud-native portfolio intelligence
          </motion.h2>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="mt-6 text-lg text-slate-600 max-w-xl"
          >
            Move beyond simple correlations. Visualize tail risk, model joint
            dependencies with Copulas, and simulate market scenarios using
            machine learning — all hosted on a scalable AWS architecture.
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700"
            >
              Try demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 px-5 py-3 text-slate-700 hover:bg-slate-50"
            >
              How it works
            </a>
          </div>

          <div id="get-started" className="mt-8 sm:mt-10 flex gap-1 max-w-md">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email to get early access"
              type="email"
              className="w-full rounded-md border border-slate-200 px-4 py-3 focus:ring-1 focus:ring-indigo-200 outline-none"
            />
            <button
              onClick={handleSubmit}
              className="rounded-md bg-cyan-500 px-4 py-3 text-white font-semibold hover:bg-cyan-600"
            >
              Notify me
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-sm text-indigo-700">
              Copula Models
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-sm text-purple-700">
              PyTorch/TensorFlow
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-sm text-cyan-700">
              AWS
            </span>
          </div>
        </div>

        <div className="relative">
         
          <div className="rounded-2xl border border-slate-100 shadow-xl p-6 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium">Portfolio Snapshot</h3>
                <p className="text-xs text-slate-400">
                  Simulated view • tail-risk highlighted
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-red-600">-6.4%</p>
                <p className="text-xs text-slate-400">Today&apos;s change</p>
              </div>
            </div>

            <div className="mt-6 h-44 bg-linear-to-br from-indigo-50 to-cyan-50 rounded-lg flex items-center justify-center overflow-hidden">
             
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 280 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="280" height="160" fill="url(#grid)" />
                
                
                <path
                  d="M10 140 Q50 120, 70 100 T130 70 T190 50 T250 30"
                  stroke="#6366F1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                
                
                <path
                  d="M10 145 Q50 125, 70 105 T130 75 T190 55 T250 35 L250 25 Q190 45, 130 65 T70 95 T10 135 Z"
                  fill="#6366F1"
                  opacity="0.1"
                />
                
              
                <path
                  d="M180 50 L250 30 L250 10 L180 25 Z"
                  fill="#ef4444"
                  opacity="0.2"
                />
                
                
                <circle cx="70" cy="100" r="4" fill="#8b5cf6" />
                <circle cx="130" cy="70" r="4" fill="#8b5cf6" />
                <circle cx="190" cy="50" r="4" fill="#8b5cf6" />
                <circle cx="250" cy="30" r="5" fill="#06B6D4" stroke="white" strokeWidth="2" />
                
                {/* Labels */}
                <text x="14" y="20" fontSize="10" fill="#64748b" fontWeight="500">
                  Joint tail-risk region
                </text>
                <text x="180" y="15" fontSize="9" fill="#ef4444" fontWeight="600">
                  VaR exceeded
                </text>
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-md bg-linear-to-br from-indigo-50 to-indigo-100 border border-indigo-200">
                <div className="text-xs text-indigo-600 font-medium">VaR (95%)</div>
                <div className="font-bold text-indigo-900">-4.8%</div>
              </div>
              <div className="p-3 rounded-md bg-linear-to-br from-red-50 to-red-100 border border-red-200">
                <div className="text-xs text-red-600 font-medium">Expected Shortfall</div>
                <div className="font-bold text-red-900">-7.2%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="features" className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold">Core features</h3>
        <p className="text-slate-600 mt-2 max-w-2xl">
          Statistical rigor with cloud-scale automation for portfolio analytics.
        </p>

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
          <FeatureCard
            title="Copula Dependency Modeling"
            desc="Capture nonlinear and tail dependencies between assets."
            icon={CopulaIcon}
          />
          <FeatureCard
            title="Scenario Simulation"
            desc="Run stress tests to compute portfolio impact under extreme events."
            icon={SimulationIcon}
          />
          <FeatureCard
            title="Cloud Automation"
            desc="AWS-driven ETL and continuous, scalable analytics."
            icon={CloudIcon}
          />
        </div>
      </section>

     
      <section
        id="tech"
        className="max-w-7xl mx-auto px-6 py-12 bg-slate-50 rounded-xl"
      >
        <h3 className="text-3xl font-bold mb-8">Architecture Flow</h3>
        
        <div className="bg-white rounded-xl p-8 border border-slate-200">
          <svg
            width="100%"
            height="300"
            viewBox="0 0 800 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Data Layer */}
            <rect x="20" y="20" width="120" height="80" rx="8" fill="#f1f5f9" stroke="#6366F1" strokeWidth="2"/>
            <text x="80" y="55" fontSize="14" fill="#1e293b" textAnchor="middle" fontWeight="600">Data Layer</text>
            <text x="80" y="75" fontSize="11" fill="#64748b" textAnchor="middle">S3 Storage</text>
            <text x="80" y="90" fontSize="11" fill="#64748b" textAnchor="middle">Glue ETL</text>
            
            {/* Arrow 1 */}
            <path d="M140 60 L190 60" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6366F1" />
              </marker>
            </defs>
            
            
            <rect x="190" y="20" width="140" height="80" rx="8" fill="#f1f5f9" stroke="#8b5cf6" strokeWidth="2"/>
            <text x="260" y="50" fontSize="14" fill="#1e293b" textAnchor="middle" fontWeight="600">ML Models</text>
            <text x="260" y="70" fontSize="11" fill="#64748b" textAnchor="middle">Copula (Gaussian, t)</text>
            <text x="260" y="85" fontSize="11" fill="#64748b" textAnchor="middle">GARCH</text>
            
            {/* Arrow 2 */}
            <path d="M330 60 L380 60" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowhead2)"/>
            <defs>
              <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#8b5cf6" />
              </marker>
            </defs>
            
            {/* Processing Layer */}
            <rect x="380" y="20" width="140" height="80" rx="8" fill="#f1f5f9" stroke="#06B6D4" strokeWidth="2"/>
            <text x="450" y="50" fontSize="14" fill="#1e293b" textAnchor="middle" fontWeight="600">Processing</text>
            <text x="450" y="70" fontSize="11" fill="#64748b" textAnchor="middle">SageMaker</text>
            <text x="450" y="85" fontSize="11" fill="#64748b" textAnchor="middle">Lambda</text>
            
            {/* Arrow 3 */}
            <path d="M520 60 L570 60" stroke="#06B6D4" strokeWidth="2" markerEnd="url(#arrowhead3)"/>
            <defs>
              <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#06B6D4" />
              </marker>
            </defs>
            
            {/* Visualization Layer */}
            <rect x="570" y="20" width="120" height="80" rx="8" fill="#f1f5f9" stroke="#10b981" strokeWidth="2"/>
            <text x="630" y="55" fontSize="14" fill="#1e293b" textAnchor="middle" fontWeight="600">Dashboard</text>
            <text x="630" y="75" fontSize="11" fill="#64748b" textAnchor="middle">Real-time</text>
            <text x="630" y="90" fontSize="11" fill="#64748b" textAnchor="middle">Analytics</text>
            
            {/* Risk Indicators */}
            <g transform="translate(150, 150)">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="3"/>
              <circle cx="50" cy="50" r="28" fill="none" stroke="#f59e0b" strokeWidth="3"/>
              <circle cx="50" cy="50" r="16" fill="none" stroke="#10b981" strokeWidth="3"/>
              <text x="50" y="110" fontSize="12" fill="#64748b" textAnchor="middle" fontWeight="500">Risk Zones</text>
            </g>
            
            {/* Distribution Curve */}
            <g transform="translate(350, 150)">
              <path d="M0 80 Q40 10, 80 80" stroke="#6366F1" strokeWidth="3" fill="none"/>
              <path d="M55 45 L80 80 L80 85 L55 85 Z" fill="#ef4444" opacity="0.3"/>
              <text x="40" y="110" fontSize="12" fill="#64748b" textAnchor="middle" fontWeight="500">Tail Distribution</text>
            </g>
            
            {/* Correlation Matrix */}
            <g transform="translate(550, 150)">
              <rect x="0" y="0" width="25" height="25" fill="#10b981" opacity="0.7" rx="2"/>
              <rect x="30" y="0" width="25" height="25" fill="#3b82f6" opacity="0.7" rx="2"/>
              <rect x="60" y="0" width="25" height="25" fill="#6366F1" opacity="0.7" rx="2"/>
              <rect x="0" y="30" width="25" height="25" fill="#3b82f6" opacity="0.7" rx="2"/>
              <rect x="30" y="30" width="25" height="25" fill="#10b981" opacity="0.7" rx="2"/>
              <rect x="60" y="30" width="25" height="25" fill="#8b5cf6" opacity="0.7" rx="2"/>
              <rect x="0" y="60" width="25" height="25" fill="#6366F1" opacity="0.7" rx="2"/>
              <rect x="30" y="60" width="25" height="25" fill="#8b5cf6" opacity="0.7" rx="2"/>
              <rect x="60" y="60" width="25" height="25" fill="#10b981" opacity="0.7" rx="2"/>
              <text x="42" y="110" fontSize="12" fill="#64748b" textAnchor="middle" fontWeight="500">Copula Matrix</text>
            </g>
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-10 text-sm text-slate-500 border-t border-slate-200 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} QuantVista — Veer Surendra Sai
            University of Technology
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-700 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="w-12 h-12 rounded-lg bg-linear-to-br from-indigo-50 to-cyan-50 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm text-slate-500 mt-2">{desc}</p>
    </motion.div>
  );
}

function CopulaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 16 C8 10, 10 8, 21 4"
        stroke="#6366F1"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 20 C7 12, 13 10, 21 6"
        stroke="#06B6D4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SimulationIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        stroke="#06B6D4"
        strokeWidth="1.5"
      />
      <path
        d="M7 12 H17"
        stroke="#6366F1"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9" cy="8" r="1.5" fill="#6366F1" />
      <circle cx="15" cy="16" r="1.5" fill="#8b5cf6" />
    </svg>
  );
}

function CloudIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
        stroke="#06B6D4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}