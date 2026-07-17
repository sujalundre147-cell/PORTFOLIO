export default function BackgroundEffects() {
  return (
    <>
      {/* Main Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08111f] via-[#050816] to-[#03050d]" />

      {/* Blue Glow */}
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Small Glow */}
      <div className="absolute right-20 top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}