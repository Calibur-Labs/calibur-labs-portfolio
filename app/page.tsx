export default function Home() {
    return (
      <main
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050507",
          backgroundImage: "radial-gradient(circle at 50% 0%, #111827 0%, #050507 80%)",
          fontFamily: "'Poppins', sans-serif",
          overflow: "hidden",
          position: "relative",
          padding: "20px"
        }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Poppins:wght@300;400;500;600&display=swap');

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 15px rgba(251, 191, 36, 0.2); }
            50%      { box-shadow: 0 0 25px rgba(251, 191, 36, 0.6); }
          }

          @keyframes bladeSweep {
            0%   { left: -100%; opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { left: 200%; opacity: 0; }
          }

          @keyframes backgroundDrift {
            0% { background-position: 0% 0%; }
            100% { background-position: 100px 100px; }
          }

          .animate-fade-up { 
            animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
            opacity: 0; 
          }
          
          .delay-100 { animation-delay: 100ms; }
          .delay-200 { animation-delay: 200ms; }
          .delay-300 { animation-delay: 300ms; }

          .glass-card {
            position: relative;
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05);
            border-radius: 24px;
            padding: 48px;
            max-width: 600px;
            width: 100%;
            text-align: center;
            overflow: hidden;
          }

          .headline-gradient {
            font-family: 'Syne', sans-serif;
            background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .status-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #fbbf24;
            animation: pulseGlow 2s infinite ease-in-out;
          }
            
          .blade-container {
            position: relative;
            height: 2px;
            width: 100%;
            background: rgba(255, 255, 255, 0.05);
            margin: 40px 0;
            overflow: hidden;
            border-radius: 2px;
          }

          .blade-light {
            position: absolute;
            top: 0;
            height: 100%;
            width: 150px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), #fbbf24, transparent);
            box-shadow: 0 0 20px #fbbf24;
            animation: bladeSweep 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
        `}</style>

        {/* Subtle Animated Background Grid */}
        <div 
          style={{ 
            position: "absolute", 
            inset: 0, 
            backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", 
            backgroundSize: "64px 64px", 
            zIndex: 0,
            animation: "backgroundDrift 20s linear infinite"
          }} 
        />

        {/* Main Content Card */}
        <div className="glass-card animate-fade-up" style={{ zIndex: 10 }}>
          
          {/* Top Glow Accent inside card */}
          <div style={{ position: "absolute", top: 0, left: "20%", width: "60%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.5), transparent)" }} />

          {/* Status Badge */}
          <div 
            className="animate-fade-up delay-100" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "10px", 
              background: "rgba(251, 191, 36, 0.1)", 
              border: "1px solid rgba(251, 191, 36, 0.2)", 
              borderRadius: "99px", 
              padding: "8px 20px", 
              marginBottom: "32px" 
            }}
          >
            <div className="status-dot" />
            <span style={{ color: "#fbbf24", fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              System Maintenance
            </span>
          </div>

          {/* Headlines */}
          <h1 className="headline-gradient animate-fade-up delay-200" style={{ margin: "0 0 16px", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Sharpening Our Blade.
          </h1>
          
          <p className="animate-fade-up delay-300" style={{ margin: 0, fontSize: "16px", color: "#94a3b8", fontWeight: 400, lineHeight: 1.6 }}>
            We are currently upgrading our infrastructure to ensure you can build something great. We'll be back online shortly.
          </p>

          {/* The "Blade" Visual Divider */}
          <div className="blade-container animate-fade-up delay-300">
            <div className="blade-light" />
          </div>

          {/* Footer info inside card */}
          <div className="animate-fade-up delay-300" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
            <span style={{ fontSize: "13px", color: "#64748b" }}>Expected downtime: ~15 mins</span>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#e2e8f0",
                fontSize: "13px",
                fontFamily: "'Poppins', sans-serif",
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                opacity: 0.7,
                transition: "opacity 0.2s"
              }}
              className="hover-btn"
            >
              Contact Support
            </button>
          </div>
        </div>
      </main>
    );
}