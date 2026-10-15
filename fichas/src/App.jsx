import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'

function App() {
  const cards = [
    {
      name: "Blue-Eyes White Dragon",
      type: "Dragon",
      attribute: "Light",
      attack: "3000",
      defense: "2500"
    },
    {
      name: "Dark Magician",
      type: "Spellcaster",
      attribute: "Dark",
      attack: "2500",
      defense: "2100"
    },
    {
      name: "Mementoal Tecuhtlica - Combined Creation",
      type: "Wyrm",
      attribute: "Earth",
      attack: "5000",
      defense: "5000"
    },
    {
      name: "Merciless Scorpion of Serket",
      type: "Fairy",
      attribute: "Earth",
      attack: "2500",
      defense: "2000"
    },
    {
      name: "Hollowdevour Xenovader △ Jahannam",
      type: "Psychic",
      attribute: "Dark",
      attack: "3000",
      defense: "2400"
    }
  ]

  const [filter, setFilter] = useState("Todas")
  const [search, setSearch] = useState("")
  const [randomCard, setRandomCard] = useState(null)

  const cardsFiltradas = cards.filter(
    (card) =>
      (filter === "Todas" || card.attribute === filter) &&
      card.name.toLowerCase().includes(search.toLowerCase())
  )

  function chooseRandomCard() {
    if (cards.length === 0) return

    const index = Math.floor(Math.random() * cards.length)
    setRandomCard(cards[index])
  }

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar"
      />

      <h1>Possuo {cardsFiltradas.length}</h1>

      <button onClick={() => setFilter("Todas")}>
        Todas
      </button>

      <button onClick={() => setFilter("Dark")}>
        Dark
      </button>

      <button onClick={() => setFilter("Light")}>
        Light
      </button>

      <button onClick={() => setFilter("Earth")}>
        Earth
      </button>

      <button onClick={() => setFilter("Fire")}>
        Fire
      </button>

      <button onClick={() => setFilter("Water")}>
        Water
      </button>

      <button onClick={() => setFilter("Wind")}>
        Wind
      </button>

      <button onClick={() => setFilter("Divine")}>
        Divine
      </button>

      <button onClick={chooseRandomCard}>
        Carta à sorte
      </button>

      {randomCard && (
        <div>
          <h2>Carta à sorte</h2>
          <Card {...randomCard} />
        </div>
      )}

      {cardsFiltradas.map((card) => (
        <Card key={card.name} {...card} />
      ))}
    </>
  )
}

export default App