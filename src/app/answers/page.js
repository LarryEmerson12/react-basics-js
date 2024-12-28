"use client";

import Code from "@/lib/code";
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
      <section>
        <h2>Setting up your project</h2>
        <p>
          I'm using <a href="https://www.nextjs.org" target="_blank">NextJs</a> and Javascript.
          If you want to use Typescript, you can see{" "}
          <a href="https://www.react-basics-ts.vercel.app" target="_blank">react-basics-ts</a>.
          To set up your Nextjs project, run the following command:
        </p>
        <CodeBlock code={Code.code0a} />
        <p>You will be asked a few questions:</p>
        <CodeBlock code={Code.code0b} />
        <p>After that, run the following to run the development server.</p>
        <CodeBlock code={Code.code0c} />
        <p>
          Open the development server at{" "}
          <a href="localhost:3000/" target="_blank">
            localhost:3000
          </a>
          .
        </p>
        <Image
          src="/localhost0.png"
          width={450}
          height={300}
          alt="Development server"
        />
        <p>
          Great 😁! You have now set up your own NextJs project! If you want to
          use the styles on this website, you can go{" "}
          <a href="https://github.com/LarryEmerson12/react-basics-styles" target="_blank">
            here
          </a>
          .{" "}
        </p>
      </section>
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
          Let's go to our <code>app.js</code>, delete everything and create a
          default function.
        </p>
        <CodeBlock code={Code.code1a} />
        <p>Now, save your changes and go to the devlopment server.</p>
        <Image
          src="/localhost1.png"
          width={600}
          height={300}
          alt="Development server"
        />
        <p>
          Pardon the bad quality 😅. Now we have a simple 'Hello world' on our
          server. To create our counter, we'll import <code>useState</code> from
          React.
        </p>
        <CodeBlock code={Code.code1b} />
        <p>
          Don't forget to add <code>"use client"</code> at the top of your
          project. Not doing that would render an error.
        </p>
        <CodeBlock code={Code.code1c} />
        <p>
          Great, now paste the following code in your <code>app.js</code>:
        </p>
        <CodeBlock code={Code.code1d} />
        <p>Huh 🤨? Okay, I'll break this code into pieces.</p>
        <CodeBlock code={Code.code1e} />
        <p>
          Okay, so we're defining a variable in the code above, and setting the
          value to <code>useState(0)</code>. UseState is just something from
          React that allows you to change a variable.
        </p>
        <CodeBlock code={Code.code1f} />
        <p>
          So now when you press the button, we're setting <code>count</code> to{" "}
          <code>count</code> + 1. The <code>count</code> variable was previously
          0, so 0 + 1 = 1. What about the reset button? Okay, let's add a button
          into our <code>app.js</code> and give it this function:
        </p>
        <CodeBlock code={Code.code1g} />
        <p>
          Right now, in out reset button, we're setting the <code>count</code>{" "}
          variable to 0, which is reseting it. Let's test our project now,
          and...
        </p>
        <Image
          src="/localhost2.png"
          width={600}
          height={300}
          alt="Development server"
        />
        <p>
          ...what? We just had an error. Let's see. Hmm. Okay, that's because we
          didn't put the <code>setCount(count + 1)</code> inside a function. To
          add it in a function, simple put it in <code>{"{}"}</code> and add a{" "}
          <code>() {"=>"}</code> in front of it.
        </p>
        <CodeBlock code={Code.code1h} />
        <p>Now let's run the development server again.</p>
        <Image
          src="/localhost3.png"
          width={600}
          height={300}
          alt="Development server"
        />
        <p>Nice! Now we have a simple counter.</p>
      </section>
      <section id="modal">
        <h2>Modal</h2>
        <p>How do modals work? Let's take a look at how I make modals:</p>
      </section>
    </>
  );
}
