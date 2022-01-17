import { useState, useEffect } from 'react'

const API_URL = process.env.API_URL
const columns = ["First Name", "Last Name", "Gender", "E-mail", "IP Address"]
export const Table = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const response = fetch(API_URL).then(res => res.json()).then(data => setData(data.body.people))

  }, [])

  console.log(data);
  const tblHeader = columns.map((itm, idx) => {
    return <span key={idx}>{itm}</span>
  })
  const rows = data.map(itm => {
    return <div key={itm.id}>
      <span>{itm.first_name}</span>
      <span>{itm.last_name}</span>
      <span>{itm.gender}</span>
      <span>{itm.email}</span>
      <span>{itm.ip_address}</span>
    </div>
  })
  return (
    <div>
      <div>{tblHeader}</div>
      {rows}
    </div>
  )
}