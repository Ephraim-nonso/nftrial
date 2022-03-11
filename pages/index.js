import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container } from "../components/container";

export default function Home() {
  return (
    <Container>
      <h1 className="text-3xl font-bold underline">HomePage</h1>
    </Container>
  );
}