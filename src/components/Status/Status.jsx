import { WebSocket } from 'nextjs-websocket'
import { useState, useEffect } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";

const WS_URL = process.env.WS_URL
const client = new W3CWebSocket(WS_URL);

export const WsStatus = () => {
  const [status, setStatus] = useState()
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
      setConnected(true)
    };
    client.onmessage = (message) => {
      console.log(message.data);
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
    <div>
      {status}
    </div>
  )
}