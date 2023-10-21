import NextImage from "next/image";
import { MqttClient, connect } from "mqtt";
import { useEffect, useState } from "react";

import { Image, Tooltip, Button } from '@nextui-org/react'

export default function Home() {

  return (
    <main>
      <div className={`flex justify-center self-center items-center align-middle p-6`}>
        <NextImage
          width={5000}
          height={5000}
          alt={'creadores del proyecto'}
          className="aspect-video object-contain md:w-1/2 w-full"
          src={'/us.jpg'}
        />
      </div>
    </main>
  );
}
