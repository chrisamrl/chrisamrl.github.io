import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/pikachu.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        {/* Christian Susanto */}
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi! :)
          I am a 4th year Computer Science student @ UBC. I am interested in systems, networking, and I love learning about algorithms!
        </p>
        <p>
          I am an incoming intern @ {""} 

          <a
            target="_blank"
            href="https://microsoft.com"
          >
            Microsoft
          </a>, working in the One Drive team.
          
          I have previously worked @ {""}
          <a
            target="_blank"
            href="https://amazon.ca"
          >
            Amazon
          </a>, working in the Gift Card team.

          Before that, I worked @ {""}
          <a
            target="_blank"
            href="https://www.lumentum.com/en"
          >
            Lumentum
          </a>, where I worked on automating test for optical module called Wavelength Selective Switches.
        </p>
      </div>
    </section>
  );
}
