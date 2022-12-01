import {useState, useEffect} from 'react'

export default function FetchingData() {
  const [user, setUser] = useState([]);

  //Fetchig data 
  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
      })
  };

  //UseEffect 
  useEffect(() => {
    fetchData()
  }, []);

  //Conditional return
  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Customer data</h1>
      <h2>Name: {user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt="" />

    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}
