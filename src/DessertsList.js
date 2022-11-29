function DessertsList({data}) {
  // Implement the component here.

  const sortedData = data
    .filter(item => item.calories < 500)
    .sort((a,b) => {
      return a.calories - b.calories
    })
    .map((dessert, index) => {
      return (
        <li key={index}>{`${dessert.name} - ${dessert.calories} cal`}</li>
      )
    })
    
  return (
    <ul>
      {sortedData}
    </ul>
  )
}

export default DessertsList;
