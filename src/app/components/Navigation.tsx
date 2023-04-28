import Link from "next/link"

const Navigation = () => {
  const navlinks = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
  return (
    <nav>
      <ul>
        {navlinks.map(link => (
          <li key={link}>
            <Link href={`/${link.toLowerCase()}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation