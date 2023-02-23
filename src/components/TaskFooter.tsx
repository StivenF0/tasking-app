
interface FooterProps {
  hooks: {
    filterOption: string,
    setFilterOption: React.Dispatch<React.SetStateAction<string>>
  }
}

export default function Footer({hooks: {filterOption, setFilterOption}}: FooterProps) {
  
  

  return <>
    <div className="flex items-center justify-center border-black border w-72 rounded-2xl p-2">
      Filter by:
      <select
        defaultValue="all"
        value={filterOption}
        onChange={(e) => setFilterOption(e.target.value)}
        className="border border-black text-center focus:outline-none"
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="complete">Complete</option>
      </select>
    </div>
  </>
}