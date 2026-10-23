import { ImageResponse } from "next/og";

export const runtime = "edge";

const size = {
  width: 1200,
  height: 630,
};

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FFFEFA",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "12px solid #0D9488",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#0F766E",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              ET
            </div>
            <span style={{ fontSize: "32px", fontWeight: "800", color: "#173B3A" }}>
              Edu<span style={{ color: "#0D9488" }}>Talent</span>
            </span>
          </div>
          <div
            style={{
              backgroundColor: "#ECFEFF",
              border: "1px solid #06B6D4",
              borderRadius: "999px",
              padding: "8px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#155E75",
            }}
          >
            HRIS LEARNING &amp; TALENT
          </div>
        </div>

        {/* Center Main Message */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "54px",
              fontWeight: "800",
              color: "#173B3A",
              lineHeight: 1.15,
              maxWidth: "960px",
            }}
          >
            Belajar. Uji. Kembangkan.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#496563",
              lineHeight: 1.4,
              maxWidth: "880px",
            }}
          >
            Hubungkan materi belajar internal, evaluasi ujian kompetensi, dan administrasi karyawan dalam satu alur yang terukur.
          </div>
        </div>

        {/* Bottom Workflow & Competency Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#F0FDFA",
            padding: "20px 30px",
            borderRadius: "16px",
            border: "1px solid #C7DAD7",
          }}
        >
          <div style={{ display: "flex", gap: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#0D9488" }} />
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#173B3A" }}>
                1. Pelajari di Library
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#06B6D4" }} />
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#173B3A" }}>
                2. Uji di Exam
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#166534" }} />
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#173B3A" }}>
                3. Evaluasi &amp; Insentif
              </span>
            </div>
          </div>

          <div
            style={{
              fontSize: "14px",
              color: "#496563",
              fontFamily: "monospace",
              fontWeight: "600",
            }}
          >
            DATA SIMULASI
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
