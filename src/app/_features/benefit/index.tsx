"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const benefits = [
  {
    content: "연간 2,000km 이하로 주행 시",
    discount: "39.8",
  },
  {
    content: "TMAP 안전운전 특약 가입 시",
    discount: "3~18",
  },
  {
    content: "지난 3년간 사고가 없었다면",
    discount: "18.8",
  },
  {
    content: "만 6세 이하 자녀가 있다면",
    discount: "7",
  },
  {
    content: "전방충돌 방지장치가 있다면",
    discount: "5.5",
  },
  {
    content: "차선이탈 방지장치가 있다면 ",
    discount: "4.5",
  },
  {
    content: "현대/기아차 커넥티드 가입자라면",
    discount: "3.5",
  },
];

const Benefit = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
  }, []);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card") as HTMLDivElement[];

      cards.forEach((card) => {
        gsap.from(card, {
          x: 800,
          opacity: 0,
          scrub: true,
        });

        gsap.to(card, {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top 60%",
            scrub: true,
          },
        });
      });
    },
    { scope: scrollRef.current! }
  );

  return (
    <div
      ref={scrollRef}
      className="w-full relative pt-32 pb-52 bg-[url('/background.png')] bg-cover bg-center perspective-normal overflow-hidden"
    >
      <div className="w-full h-28 absolute top-0 z-10 bg-gradient-to-t from-white/0 to-white/100" />
      <div className="px-8">
        <div className="text-[#2b323c] text-3xl font-extrabold mb-6">
          할인에 할인을 더하는
        </div>
        <div className="flex flex-col gap-2 md:grid grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.content}
              className="card px-4 py-6 bg-white/30 shadow-[inset_0_2px_10px_rgba(217,217,255,.11)] rounded-xl md:px-6"
            >
              <div className="flex flex-col font-bold">
                <span className="text-gray-800 text-lg">{benefit.content}</span>
                <div className="text-2xl">
                  <span className="font-bold text-[#ff5000]">
                    {benefit.discount}%
                  </span>{" "}
                  할인
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-28 absolute bottom-0 z-10 bg-gradient-to-t from-white/100 to-white/0" />
    </div>
  );
};

export default Benefit;
