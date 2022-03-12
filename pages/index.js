import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container } from "../components/container";
import LandingContent from "../components/landing-content";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingContent />
    </div>
  );
}
