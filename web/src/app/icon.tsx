import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon: the "Z" from the sidebar's Z·E·N mark
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "#171320",
          color: "#a076f9",
          fontSize: 24,
          fontWeight: 900,
        }}
      >
        Z
      </div>
    ),
    size
  );
}
