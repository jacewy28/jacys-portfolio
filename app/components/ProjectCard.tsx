interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
}

export default function ProjectCard({ src, title, description }: ProjectCardProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem',
      alignItems: 'center', marginBottom: '3rem' }}>

      <video controls style={{ width: '300px', height: '300px', objectFit: 'cover' }}>
        <source src={src} type="video/mp4" />
      </video>

      <div style={{ backgroundColor: "#cfc2a7", height: "50vh", border: "1px solid white",
        display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center", width: "50vw", fontSize: "1.3rem",
        color: "white", margin: "0 auto", padding: "2rem"}}>

        <h2 style={{ color: '#311e10', fontFamily: 'Garamond' }}>{title}</h2>
        <p style={{ color: '#523620', fontFamily: 'Garamond', fontSize: '1.1rem' }}>{description}</p>

      </div>
    </div>
  )
}