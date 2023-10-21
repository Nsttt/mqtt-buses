import NextImage from "next/image";
import { MqttClient, connect } from "mqtt";
import { useEffect, useState } from "react";
import { Image } from '@nextui-org/react'

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
      className={`flex justify-center self-center items-center align-middle p-6`}
    >
      <NextImage
          width={5000}
          height={5000}
          alt={'creadores del proyecto'}
          className="aspect-video object-contain md:w-1/2 w-full"
          src={'/us.jpg'}
      />
    </main>
  );
}
