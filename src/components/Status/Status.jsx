import { WebSocket } from 'nextjs-websocket'
import { useState, useEffect } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import classes from "./Status.module.scss"

const WS_URL = process.env.WS_URL
const client = new W3CWebSocket(WS_URL);

export const WsStatus = () => {
  const [status, setStatus] = useState()
  const [connected, setConnected] = useState(false)
  const [randColor, setRandColor] = useState(false)

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
      setConnected(true)
    };
    client.onmessage = (message) => {
      console.log(message.data);
      const newColor = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
      setRandColor(newColor)
      setStatus(message.data);
    };
    return () => {
      client.close()
    }
  }, [])

  useEffect(() => {
    if (connected) {
      setInterval(() => { client.send("hello") }, 1000)
    }

    return () => {
    }
  }, [connected])

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Server status</h3>
      <span className={classes.status} style={{ color: randColor }}>{status}</span>
    </div>
  )
}