"use client";

import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomNumber = async () => {
    setLoading(true);
    const res = await fetch("/api/random");
    const data = await res.json();
    setNumber(data.number);
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>JAMstack + Serverless API Demo</h1>
      <p>정적 빌드 페이지입니다.</p>
      <button onClick={fetchRandomNumber}>
        {loading ? "로딩 중..." : "랜덤 숫자 가져오기"}
      </button>
      {number !== null && <h2>결과: {number}</h2>}
    </div>
  );
}
