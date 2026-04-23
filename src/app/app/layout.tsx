export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ 
      display: "flex", 
      minHeight: "100vh", 
      backgroundColor: "#0F1115",
      fontFamily: "Arial, sans-serif"
    }}>
      {/* SIDEBAR DE TESTE - INLINE */}
      <div style={{ 
        width: "256px", 
        backgroundColor: "#1A1D23",
        borderRight: "1px solid #343A40",
        padding: "20px",
        position: "fixed",
        height: "100vh"
      }}>
        <h1 style={{ 
          color: "#C4A57B", 
          margin: 0, 
          fontSize: "20px",
          fontWeight: "bold"
        }}>
          ✅ SIDEBAR FUNCIONOU!
        </h1>
        <p style={{ color: "#ADB5BD", fontSize: "14px", marginTop: "10px" }}>
          Se você está vendo isso, o layout está aplicando corretamente.
        </p>
      </div>
      
      {/* ÁREA PRINCIPAL */}
      <div style={{ 
        flex: 1, 
        marginLeft: "256px" 
      }}>
        {/* TOPBAR DE TESTE - INLINE */}
        <div style={{ 
          height: "64px", 
          backgroundColor: "#1A1D23",
          borderBottom: "1px solid #343A40",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <h2 style={{ color: "#F8F9FA", margin: 0, fontSize: "16px" }}>
            ✅ TOPBAR FUNCIONOU!
          </h2>
          <div style={{ 
            width: "32px", 
            height: "32px", 
            borderRadius: "50%",
            backgroundColor: "#C4A57B"
          }} />
        </div>
        
        {/* CONTEÚDO */}
        <main style={{ padding: "24px" }}>
          {children}
        </main>
      </div>
    </div>
  );
}