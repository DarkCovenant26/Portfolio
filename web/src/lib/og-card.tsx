// Shared layout for the generated Open Graph images (dark theme colours from globals.css).
// ImageResponse only supports flexbox and inline styles.
export const OG_SIZE = { width: 1200, height: 630 };

const colors = {
  background: "#171320",
  card: "#241d30",
  primary: "#a076f9",
  foreground: "#ece6dd",
  muted: "#b8b0c4",
};

// Cuts at the last word boundary so the ellipsis never lands mid-word
export function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:]$/, "")}…`;
}

export function OgCard({ eyebrow, title, subtitle, footer }: { eyebrow: string; title: string; subtitle: string; footer: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: `linear-gradient(135deg, ${colors.background} 0%, ${colors.card} 100%)`,
        color: colors.foreground,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            padding: "8px 22px",
            borderRadius: 999,
            border: `2px solid ${colors.primary}`,
            color: colors.primary,
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: 6,
          }}
        >
          Z · E · N
        </div>
        <div style={{ display: "flex", color: colors.primary, fontSize: 24, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2 }}>
          {eyebrow}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: title.length > 48 ? 56 : 68, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 28, color: colors.muted, lineHeight: 1.4 }}>{subtitle}</div>
      </div>

      <div style={{ display: "flex", fontSize: 24, color: colors.muted, borderTop: `1px solid ${colors.primary}40`, paddingTop: 24 }}>
        {footer}
      </div>
    </div>
  );
}
