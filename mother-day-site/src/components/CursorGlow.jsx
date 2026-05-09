import { useEffect } from "react";

function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.width = "200px";
    glow.style.height = "200px";
    glow.style.borderRadius = "50%";
    glow.style.pointerEvents = "none";
    glow.style.background =
      "radial-gradient(circle, rgba(255,192,203,0.3), transparent)";
    glow.style.zIndex = "9999";

    document.body.appendChild(glow);

    window.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX - 100 + "px";
      glow.style.top = e.clientY - 100 + "px";
    });
  }, []);

  return null;
}

export default CursorGlow;