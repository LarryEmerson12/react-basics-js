import Text from "@/components/Text";
import Image from "next/image";
import CodeBlock from "@/components/ui/CodeBlock";

export default function Answers() {
  const code0a = `
    npx create-next-app@latest
  `;
  const code0b = `
    What is your project named? my-app
    Would you like to use TypeScript? No
    Would you like to use ESLint? No / Yes
    Would you like to use Tailwind CSS? No / Yes
    Would you like your code inside a 'src/' directory? No / Yes
    Would you like to use App Router? (recommended) No / Yes
    Would you like to use Turbopack for 'next dev'?  No / Yes
    Would you like to customize the import alias ('@/*' by default)? No / Yes
  `;
  const code0c = `
    npm run dev

    // If you're using React, use the following instead:

    npm start
  `;
  const code1a = `
    export default function Page(){
      return(
        <>
          Hello world
        </>
      )
    }
  `;
  const code1b = `
    import { useState } from 'react';
  `;
  const code1c = `
    "use client"
  `;
  const code1d = `
    "use client"

    import { useState } from 'react';

    export default function Page(){

      const [ count, setCount ] = useState(0);

      return(
        <>
          <button onClick={setCount(count + 1)}>Count is {count}.</button>
        </>
      )
    }
  `;
  const code1e = `
    const [ count, setCount ] = useState(0);
  `;
  const code1f = `
    <button onClick={setCount(count + 1)}>Count is {count}.</button>
  `;
  const code1g = `
  "use client";

  import { useState } from "react";

  export default function Page() {
    const [count, setCount] = useState(0);

    return (
      <>
        <button onClick={setCount(count + 1)}>Count is {count}.</button>
        <button onClick={setCount(0)}>Reset</button>
      </>
    );
  }
  `;
  const code1h = `
    "use client"

    import { useState } from "react";

    export default function Page() {
      const [ count, setCount ] = useState(0)

      return(
        <>
          <button onClick={() => {setCount(count + 1)}}>Count is {count}.</button>
          <button onClick={() => {setCount(0)}}>Reset</button>
        </>
      )

    }
  `;

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
          I'm using <a href="https://.www.nextjs.org">NextJs</a> and Javascript.
          If you want to use Typescript, you can see{" "}
          <a href="https://www.react-basics-ts.vercel.app">react-basics-ts</a>.
          To set up your Nextjs project, run the following command:
        </p>
        <CodeBlock code={code0a} />
        <p>You will be asked a few questions:</p>
        <CodeBlock code={code0b} />
        <p>After that, run the following to run the development server.</p>
        <CodeBlock code={code0c} />
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
        <p>Great 😁! You have now set up your own NextJs project!</p>
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
        <CodeBlock code={code1a} />
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
        <CodeBlock code={code1b} />
        <p>
          Don't forget to add <code>"use client"</code> at the top of your
          project. Not doing that would render an error.
        </p>
        <CodeBlock code={code1c} />
        <p>
          Great, now paste the following code in your <code>app.js</code>:
        </p>
        <CodeBlock code={code1d} />
        <p>Huh 🤨? Okay, I'll break this code into pieces.</p>
        <CodeBlock code={code1e} />
        <p>
          Okay, so we're defining a variable in the code above, and setting the
          value to <code>useState(0)</code>. UseState is just something from
          React that allows you to change a variable.
        </p>
        <CodeBlock code={code1f} />
        <p>
          So now when you press the button, we're setting <code>count</code> to{" "}
          <code>count</code> + 1. The <code>count</code> variable was previously
          0, so 0 + 1 = 1. What about the reset button? Okay, let's add a button
          into our <code>app.js</code> and give it this function:
        </p>
        <CodeBlock code={code1g} />
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
        <CodeBlock code={code1h} />
      </section>
      <section id="modal">
        <h2>Modal</h2>
        <p>Again, we use the useState</p>
      </section>
    </>
  );
}
