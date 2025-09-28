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
          I am a 4th year Computer Science student @ UBC. I am graduating in  <b>May 2026</b>. I am interested in systems, networking, and I love learning about algorithms!
        </p>
        <p>
          I recently interned @ {""} 

          <a
            target="_blank"
            href="https://microsoft.com"
          >
            Microsoft
          </a>, working in the One Drive Sync Client team.
          
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
        <p>
          Outside of CS, I enjoy baking, experimenting with matcha drinks, and exploring new cities. Feel free to reach out!
        </p>
        <p>
          <span className="text-blue-600"> 
          I am currently looking for new grad 2026 opportunities in Software Engineering. 
          I’m also passionate about mentorship and would be happy to connect with a mentee, having previously TA'd CPSC 304 at UBC.
          </span> 
        </p>
        <p>
          <span className="text-blue-600"> 
          If you think we’d be a great fit or if I can be of help, feel free to reach out! 
          </span> 
        </p>

      </div>
    </section>
  );
}
