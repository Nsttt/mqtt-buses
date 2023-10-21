import Image from "next/image";
import { Inter } from "next/font/google";
import { MqttClient, connect } from "mqtt";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [client, setClient] = useState<MqttClient | null>(
    connect("ws://localhost:8083/mqtt", {
      username: "user",
      password: "abcd1234.",
    })
  );
  const [connectStatus, setConnectStatus] = useState("Disconnected");
  const [payload, setPayload] = useState({});

  useEffect(() => {
    if (client) {
      console.log(client);
      client.on("connect", () => {
        setConnectStatus("Connected");
        client.subscribe("#");
      });
      client.on("error", (err) => {
        console.error("Connection error: ", err);
        client.end();
      });
      client.on("reconnect", () => {
        setConnectStatus("Reconnecting");
      });
      client.on("message", (topic, message) => {
        const payload = { topic, message: message.toString() };
        setPayload(payload);
      });
    }
  }, [client]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {JSON.stringify(payload)}
    </main>
  );
}
