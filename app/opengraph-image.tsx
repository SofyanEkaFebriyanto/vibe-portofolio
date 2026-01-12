import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#f7f6f1',
          color: '#1d2433',
          fontSize: 64,
          fontWeight: 600
        }}
      >
        <div style={{ fontSize: 28, textTransform: 'uppercase', letterSpacing: '0.3em' }}>
          Sofyan Eka Febriyanto
        </div>
        <div style={{ marginTop: 24, fontSize: 64, lineHeight: 1.1 }}>
          Building with code. Thinking with data.
        </div>
        <div style={{ marginTop: 32, fontSize: 28, color: '#4b5563' }}>
          Notes, projects, and quiet systems thinking.
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
