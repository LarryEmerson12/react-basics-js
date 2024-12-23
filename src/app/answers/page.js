import Text from "@/components/Text";
import Image from "next/image";
import CodeBlock from "@/components/ui/CodeBlock";

export default function Answers() {
  return (
    <>
      <button>
        <a href="/" id="button">
          Back to Main Page
        </a>
      </button>
      <h1>
        How does everything work on the main page? <b>React</b>, that's how.
      </h1>
      <p>Let's go through how everything here works.</p>
      <section>
        <b>Sections:</b>
        <ol>
          <li>
            <a href="#counter">Counter</a>
          </li>
          <li>
            <a href="#modal">Modal</a>
          </li>
        </ol>
      </section>
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
      <section id="counter">
        <h2>Counter</h2>
        <p>
          Let's talk about counters. They usually appear when you create a Vite
          + React project, like shown below, as they are the <i>simplest</i>{" "}
          things you can do with React.
        </p>
        <Image
          src="/vite-counter.png"
          width={600}
          height={300}
          alt="The default Vite + React Counter"
        />
        <p>
          Okay. How do I do it? It's simple 😏. Let's create a new React app
          with <b>NextJs.</b> If you're wondering what NextJs is, it's just a React
          framework that you can use. For further details, go <a href="https://www.nextjs.org" target="_blank">here</a>.
        </p>
        <CodeBlock filename="npm" code="" />
      </section>
      <section id="modal">
        <h2>Modal</h2>
        <p>Again, we use the useState</p>
      </section>
    </>
  );
}
