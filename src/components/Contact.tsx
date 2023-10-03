import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import SectionWrapper from "../utils/SectionWrapper";
import { slideIn } from "../utils/motion";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  Stars,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { leetcode } from "../assets";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  const { progress } = useProgress();
  return <Html>{progress.toFixed(1)}%</Html>;
};
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <mesh>
      <primitive
        object={earth.scene}
        scale={2.5}
        rotation-y={0}
        position-y={0}
      />
    </mesh>
  );
};
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Stars count={4000} depth={-1} speed={4} />
      </Suspense>
    </Canvas>
  );
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_bttsd3p",
        "template_eb66l5l",
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Keshav",
          to_email: "keshav.banka2003@gmail.com",
          message: form.message,
        },
        "_tjbpI5poYVjrElfN"
      )
      .then(() => {
        setLoading(false);
        alert("Message sent successfully! I will get back to you soon.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="m-10 flex md:flex-row flex-col-reverse gap-3" id="contact">
      <div className="flex-[0_0_49%]">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1) as any}
          className="text-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
        >
          Contact Me
        </motion.div>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1) as any}
          className="text-white text-2xl flex gap-4 items-center"
        >
          <a
            target="_blank"
            href="mailto:keshav.banka2003@gmail.com"
            title="Mail"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a target="_blank" href="tel:8004775978" title="Phone">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/keshav-banka"
            title="Linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a target="_blank" href="https://github.com/Keshav76" title="Github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            target="_blank"
            href="https://leetcode.com/keshav-banka/"
            title="Leetcode"
          >
            <img src={leetcode} alt="" className="h-6 invert" />
          </a>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          variants={slideIn("left", "tween", 0.3, 1) as any}
          className="text-white w-full flex flex-col gap-5 mt-10 bg-[#1D1836] rounded-xl px-3 py-6"
        >
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={form.name}
              className="px-3 py-2 rounded-lg bg-[rgb(255,255,255,0.15)] border-0 outline-none"
              placeholder="Your name here..."
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={form.email}
              className="px-3 py-2 rounded-lg bg-[rgb(255,255,255,0.15)] border-0 outline-none"
              placeholder="Your email here..."
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              onChange={handleChange}
              placeholder="Your message here..."
              name="message"
              value={form.message}
              className="px-3 py-2 rounded-lg resize-none bg-[rgb(255,255,255,0.15)] border-0 outline-none"
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="bg-shiny rounded-lg py-2 px-5 text-white font-bold"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </motion.form>
      </div>
      <motion.div
        className="flex-[0_0_49%]"
        variants={slideIn("right", "tween", 0.3, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact);
