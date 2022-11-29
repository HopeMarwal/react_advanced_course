function DessertsList({data}) {
  // Implement the component here.

  const sortedDesserts = data.sort((a, b) => {
    return b.calories - a.calories
  })

  const filteredDesserts = sortedDesserts.filter((item) => item.calories < 500)

  const displayDesserts = filteredDesserts.map((item, index) => {
    return <li key={index}>{`${item.name} - ${item.calories} cal`}</li>
  })
  return (
    <ul>
      {displayDesserts}
    </ul>
  )
}

export default DessertsList;
