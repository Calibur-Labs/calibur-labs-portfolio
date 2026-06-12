"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { testimonials } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function Avatar({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const initials = getInitials(name);

  if (!src || failed) {
    return (
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          flexShrink: 0,
          background: "rgba(83,74,183,0.15)",
          border: "1px solid rgba(83,74,183,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: 700,
          color: "#F3F7F5",
          fontFamily: "var(--font-syne), system-ui, sans-serif",
          letterSpacing: "0.02em",
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      style={{
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        flexShrink: 0,
        overflow: "hidden",
        border: "1px solid rgba(83,74,183,0.35)",
        position: "relative",
      }}
    >
      <Image
        src={src}
        alt={name}
        fill
        style={{ objectFit: "cover" }}
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [cols, setCols] = useState(2);

  useEffect(() => {
    const update = () => setCols(window.innerWidth >= 640 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cols);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const pageItems = testimonials.slice(page * cols, page * cols + cols);

  return (
    <section style={{ position: "relative", zIndex: 10, padding: "60px 24px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <SectionLabel>Kind Words</SectionLabel>
          </motion.div>
          <motion.div variants={fadeUp}>
            <GradientText
              as="h2"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              What Our Clients Say
            </GradientText>
          </motion.div>
          <motion.p
            variants={fadeUp}
            style={{
              color: "#636972",
              fontSize: "16px",
              lineHeight: 1.8,
              marginTop: "16px",
              fontFamily: "var(--font-poppins), system-ui, sans-serif",
            }}
          >
            Don&apos;t take our word for it — hear from the people we&apos;ve
            built for.
          </motion.p>
        </motion.div>

        {/* ── Cards grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${page}-${cols}`}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: "20px",
              marginBottom: "36px",
            }}
          >
            {pageItems.map((t, idx) => {
              const isFeatured = idx === 0;
              return (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                    backdropFilter: "blur(32px)",
                    WebkitBackdropFilter: "blur(32px)",
                    border: isFeatured
                      ? "1px solid rgba(255,255,255,0.35)"
                      : "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "24px",
                    padding: "36px",
                    overflow: "hidden",
                    minHeight: "300px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Top accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "10%",
                      width: "80%",
                      height: "1px",
                      background: isFeatured
                        ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.95), rgba(255,255,255,0.65), transparent)"
                        : "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                    }}
                  />

                  {/* Corner glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-60px",
                      right: "-60px",
                      width: "180px",
                      height: "180px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Quote mark */}
                  <div
                    style={{
                      fontSize: "72px",
                      lineHeight: 0.8,
                      color: "#F3F7F5",
                      opacity: 0.35,
                      fontFamily: "Georgia, serif",
                      userSelect: "none",
                    }}
                  >
                    &ldquo;
                  </div>

                  {/* Quote text */}
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#c5c9d0",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      fontFamily: "var(--font-poppins), system-ui, sans-serif",
                      margin: "0 0 28px",
                      flexGrow: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 10,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {t.quote}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background:
                        "linear-gradient(90deg, rgba(83,74,183,0.4), rgba(255,255,255,0.05), transparent)",
                      marginBottom: "24px",
                    }}
                  />

                  {/* Author row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                    }}
                  >
                    {/* Smart avatar: real image → fallback to initials */}
                    <Avatar src={t.avatar} name={t.author} />

                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-syne), system-ui, sans-serif",
                          fontWeight: 700,
                          fontSize: "15px",
                          color: "#e2e8f0",
                          margin: "0 0 3px",
                        }}
                      >
                        {t.author}
                      </p>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#92969c",
                          margin: 0,
                          fontFamily:
                            "var(--font-poppins), system-ui, sans-serif",
                        }}
                      >
                        {t.title}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ── Controls ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.12)",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              color: "#F3F7F5",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background =
                "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background =
                "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)";
            }}
          >
            ←
          </button>

          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                style={{
                  width: i === page ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "999px",
                  border: "none",
                  background: i === page ? "#F3F7F5" : "rgba(255,255,255,0.15)",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonials"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.12)",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              color: "#F3F7F5",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background =
                "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background =
                "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)";
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
