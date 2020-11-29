import Link from "next/link";
import { useState, useEffect } from "react";

import Layout from "components/Layout";

const IndexPage = () => {
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    fetch("/api/ping")
      .then((res) => res.text())
      .then((message) => {
        setMsg(message);
      });
  }, []);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <h2>{msg}</h2>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
