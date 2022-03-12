import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container } from "../components/container";
import Navbar from "./../components/navbar";
import LandingContent from "../components/landing-content";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingContent />
    </div>
  );
}
