"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div style={{ 
      width: "256px", 
      height: "100vh", 
      position: "fixed", 
      left: 0, 
      top: 0,
      borderRight: "1px solid #343A40",
      backgroundColor: "#1A1D23"
    }}>
      {/* Logo */}
      <div style={{ 
        height: "64px", 
        borderBottom: "1px solid #343A40",
        padding: "0 24px",
        display: "flex",
        alignItems: "center"
      }}>
        <div style={{ 
          width: "32px", 
          height: "32px", 
          borderRadius: "8px",
          backgroundColor: "#C4A57B",
          marginRight: "8px"
        }} />
        <span style={{ fontSize: "18px", fontWeight: 600, color: "#F8F9FA" }}>
          Synapse
        </span>
      </div>
      
      {/* Menu */}
      <nav style={{ padding: "16px" }}>
        <Link 
          href="/app/dashboard"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 12px",
            borderRadius: "8px",
            marginBottom: "8px",
            backgroundColor: pathname === "/app/dashboard" ? "#C4A57B" : "transparent",
            color: pathname === "/app/dashboard" ? "#0F1115" : "#ADB5BD",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500
          }}
        >
          📊 Dashboard
        </Link>
        <Link 
          href="/app/patients"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 12px",
            borderRadius: "8px",
            marginBottom: "8px",
            backgroundColor: "transparent",
            color: "#ADB5BD",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500
          }}
        >
          👥 Pacientes
        </Link>
        <Link 
          href="/app/cases"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 12px",
            borderRadius: "8px",
            marginBottom: "8px",
            backgroundColor: "transparent",
            color: "#ADB5BD",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500
          }}
        >
          📁 Casos
        </Link>
      </nav>
    </div>
  );
}