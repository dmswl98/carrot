"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { Card } from "./components/Card";

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    margin: "0px 100px -50px 0px",
  });

  return (
    <div className="w-full px-8 py-20 md:px-12">
      <div className="text-[#2b323c] text-3xl font-extrabold mb-6">
        캐롯만의 특별함
      </div>
      <div className="flex flex-col gap-8">
        <Card
          isInView={isInView}
          cardRef={containerRef}
          title="언제 어디서나"
          description="캐롯 플러그로 안전하게"
        >
          <video
            className="block w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/plug.mp4" type="video/mp4" />
          </video>
        </Card>
        <Card
          isInView={isInView}
          cardRef={containerRef}
          title="누구나 20% 할인"
          description="할인이 쌓이는 굿드라이브"
        >
          <video
            className="block w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/good-drive.mp4" type="video/mp4" />
          </video>
        </Card>
      </div>
    </div>
  );
};

export default Banner;
