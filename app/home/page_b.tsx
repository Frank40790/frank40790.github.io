import { useState, useRef, Suspense, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { name, skills } from "@/app/components/Detail";
import Contact from "@/app/components/Contact";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

function Stars(props: any) {
  const ref = useRef<any>();

  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.5 });

    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        positions[i] = 0;
      }
    }

    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function IconGridPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPopupOpen]);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleBackdropClick = (event: any) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  return (
    <div>
      {/* Open Popup Button */}
      <div onClick={openPopup} className="pb-4 w-min">
        <Icon
          icon="material-symbols:info-outline"
          className="text-white"
          width={20}
          height={20}
        />
      </div>

      {/* Popup Overlay */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 pt-16"
          onClick={handleBackdropClick}
        >
          <div className="bg-black opacity-80 border rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-scroll p-6 scrollbar-hide">
            {/* Popup Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Skills</h2>
              <button
                onClick={closePopup}
                className="text-gray-600 hover:text-red-500 transition-colors"
              >
                <Icon icon="mdi:close" width={28} height={28} />
              </button>
            </div>

            {/* Icon Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4">
              {skills.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-3 rounded-lg cursor-pointer group text-white"
                  onClick={() => {}}
                >
                  <Icon
                    icon={item.icon}
                    width={60}
                    height={60}
                    className="transition-colors"
                  />
                  <p className="text-xs text-white mt-2 text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  const fadeInUp: Variants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleAnimation: Variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const subtitleAnimation: Variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const links = [
    {
      title: "Projects",
      description: "Explore various projects I've worked on",
      link: "/projects",
      image: "/icon_project.png",
    },
    {
      title: "Timeline",
      description: "Check out the timeline of my journey!",
      link: "/timeline",
      image: "/icon_timeline.png",
    },
  ];

  const subtitles = [
    "Creative Developer",
    "Design Enthusiast",
    "I Develop for Fun!",
  ];

  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSubtitle = subtitles[subtitleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentSubtitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    } else {
      const typingSpeed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          setDisplayText((prev) => currentSubtitle.slice(0, prev.length + 1));
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, subtitleIndex, isDeleting, subtitles]);

  return (
    <main className="relative min-h-screen bg-gray-900 select-none">
      {/* Three.js Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 h-screen snap-y snap-mandatory overflow-y-auto scrollbar-hide overscroll-y-none">
        {/* Hero Section */}
        <section className="h-screen snap-start flex items-center justify-center px-4">
          <div className="max-w-4xl w-full">
            <motion.div
              initial="initial"
              animate="animate"
              className="text-center"
            >
              <motion.h1
                variants={titleAnimation}
                className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text"
              >
                I&apos;m {name}
              </motion.h1>

              <div className="text-center text-2xl text-gray-600 h-12 flex justify-center items-center">
                <motion.span
                  key={subtitleIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {displayText}
                  <motion.span
                    animate={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="inline-block ml-1 w-1 h-6 bg-gray-600 rounded-xl"
                  />
                </motion.span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              About Me
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="text-white text-center text-xl"
            >
              I am currently an undergraduate student studying at the University
              of Melbourne, planning to major in Computer Science. It is always
              enjoyable to learn and explore different areas of computing.
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              Skills
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="text-white text-center text-xl">
                I enjoy trying out different technologies! In my free time, I
                explore different fields related to computing. My skill set
                spans various fields, including web design, AI / ML, graphics
                and much more!
              </div>
              {[
                { name: "Programing languages", level: 85 },
                { name: "Artificial Intelligence", level: 80 },
                { name: "Website Design", level: 75 },
              ].map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </div>
              ))}
              <IconGridPopup />
            </motion.div>
          </motion.div>
        </section>

        {/* Interest - AI and ML */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              Interest: AI and ML
            </motion.h2>
            <div className="text-white text-center text-lg">
              Artificial intelligence is always a really interesting topic, and
              I am always eager to dive deeper. Starting with OpenCV, I&apos;ve
              did some simple line-centering algorithms, which are not complex,
              but fun.
            </div>
            <div className="text-white text-center text-lg">
              Later, I got into Machine Learning and Deep Learning field and was
              stunned by how much a computer can do. Starting simple, I&apos;ve
              wrote some classic machine learning programs such as Titanic,
              Housing price prediction to get experience in data processing and
              cleaning. Later, I started to write CNN for MNIST hand-written
              digits recognition, learning more about neural networks. Getting
              more advanced, I&apos;ve tried Generative adversarial network (GAN) to
              generate hand-written digits. After exploring those, I got into
              NLP for RNN, LSTM etc. I&apos;ve also tried some 2D self
              driving-car using JS for fun.
            </div>
            <div className="text-white text-center text-lg">
              After the explosion of generative AI during 2022, I started to
              explore more about cutting-edge research. I&apos;ve attempted to
              build a language model on transformer architecture and an image
              generation model using UNet.
            </div>
          </motion.div>
        </section>

        {/* Interest - System Admin */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              Interest: System Admin
            </motion.h2>
            <div className="text-white text-center text-lg">
              I like to explore around my systems and build applications on it.
              On the web design backend side, I try out many different programs,
              such as docker and nginx to manage the backend of a service. From
              a more virtualization perspective, I would often try software such
              as VirtualBox or Proxmox, and use different Linux distros on it. I
              also think that knowing how networking works is a pretty important
              part of being a computer science major, so I did learn about
              things such as routers, switches and most importantly, the OSI
              model.
            </div>
          </motion.div>
        </section>

        {/* Interest - Web design*/}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              Interest: Web Design
            </motion.h2>
            <div className="text-white text-center text-lg">
              I am also interested in web design since I can create a webpage of
              my own and design it however I want. I often look up tutorials to
              gather inspiration to build a better website.
            </div>
            <div className="text-white text-center text-lg">
              I start with learning various programming languages for the web,
              such as HTML, CSS, JS and PHP without the use of any framework
              while hosting the backend using Python Django or Flask.
            </div>
            <div className="text-white text-center text-lg">
              Shortly after, I realised that my workflow would be much better
              with framework, I started to learn some JavaScript libraries such
              as Next.js along with tailwind and different animation libraries.
            </div>
            <div className="text-white text-center text-lg">
              Most of the time, writing projects makes me improve the most.
              Therefore, I spend lots of my free time tweaking and rewriting
              this website. It is a fun thing for me.
            </div>
          </motion.div>
        </section>

        {/* Interest - Graphics */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              Interest: Graphics
            </motion.h2>
            <div className="text-white text-center text-lg">
              Graphics is also the field I want to explore more about.
              Currently, I am not experienced in this field, but I really want
              to explore more about it.
            </div>
            <div className="text-white text-center text-lg">
              In the past, I&apos;ve tried a lot of different things relating to
              graphics, such as VFX with After Effects or playing around with
              Unity. In terms of graphics and modelling, I&apos;ve also used
              Blender to do a lot of stuff. For example, I use Blender for
              camera tracking, fluid simulation, ray tracing, modelling and
              animation. I would like to learn more to create more advanced
              visuals.
            </div>
            <div className="text-white text-center text-lg">
              Sometimes I also use my programming skills to write something fun.
              There is an OpenGL projection code that I wrote to do orthogonal
              projection. And another program that does basic ray tracing.
            </div>
          </motion.div>
        </section>

        {/* Future Vision */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              Future Vision
            </motion.h2>
            <div className="text-white text-center text-lg">
              As artificial intelligence integrates into our lives bit by bit,
              it is important to understand the inner workings of those new
              technologies. I would like to improve myself so that in the
              future, I can build a technology that benefits humanity.
            </div>
            <div className="text-white text-center text-lg">
              Another part of computer science that interests me is
              cybersecurity. Thousands of cyber threats are circulating the
              internet. I am passionate about cybersecurity and want to learn
              more about it in the future, hopefully developing technology that
              can prevent cyber threats effectively.
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              Contact
            </motion.h2>
            <Contact iconColor="text-white" />
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              The Jorney Begins...
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {links.map((page, index) => (
                <Link key={index} href={page.link}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "tween" }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                  >
                    <Image
                      src={page.image}
                      alt=""
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                    <h3 className="text-xl font-semibold my-2 text-white">
                      {page.title}
                    </h3>
                    <p className="text-gray-300">{page.description}</p>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
