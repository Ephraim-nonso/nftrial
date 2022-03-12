import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container } from "../components/container";
import Navbar from "./../components/navbar";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <h1 className="text-3xl font-bold underline">HomePage</h1>
    </Container>
  );
}
