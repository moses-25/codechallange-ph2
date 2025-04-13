export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    );
  }
  