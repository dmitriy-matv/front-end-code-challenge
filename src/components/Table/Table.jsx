import { useState, useEffect } from 'react'
import classes from "./Table.module.scss"

const API_URL = process.env.API_URL
const columns = ["First Name", "Last Name", "Gender", "E-mail", "IP Address"]

export const Table = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(API_URL).then(res => res.json()).then(data => setData(data.body.people))
  }, [])

  const tblHeader = columns.map((itm, idx) => {
    return <th key={idx} className={classes.item}>{itm}</th>
  })

  const tblRows = data.map(itm => {
    return <tr key={itm.id}>
      <td className={classes.item}>{itm.first_name}</td>
      <td className={classes.item}>{itm.last_name}</td>
      <td className={classes.item}>{itm.gender}</td>
      <td className={classes.item}>{itm.email}</td>
      <td className={classes.item}>{itm.ip_address}</td>
    </tr>
  })

  return (
    <>
      <h3 className={classes.title}>Database entries</h3>
      <table className={classes.wrapper}>
        <thead className={classes.header}><tr>{tblHeader}</tr></thead>
        <tbody className={classes.tableBody}>{tblRows}</tbody>
      </table>
    </>
  )
}