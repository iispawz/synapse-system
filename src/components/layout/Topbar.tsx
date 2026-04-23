"use client";

export function Topbar() {
  return (
    <div style={{
      height: "64px",
      borderBottom: "1px solid #343A40",
      backgroundColor: "#1A1D23",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px"
    }}>
      <div style={{ color: "#F8F9FA", fontSize: "16px", fontWeight: 500 }}>
        Synapse System
      </div>
      <div style={{ 
        width: "32px", 
        height: "32px", 
        borderRadius: "50%",
        backgroundColor: "#C4A57B"
      }} />
    </div>
  );
}