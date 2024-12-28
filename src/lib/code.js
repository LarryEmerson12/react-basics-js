const Code = {
  code0a: `
    npx create-next-app@latest
  `,
  code0b: `
    What is your project named? my-app
    Would you like to use TypeScript? No
    Would you like to use ESLint? No / Yes
    Would you like to use Tailwind CSS? No / Yes
    Would you like your code inside a 'src/' directory? No / Yes
    Would you like to use App Router? (recommended) No / Yes
    Would you like to use Turbopack for 'next dev'?  No / Yes
    Would you like to customize the import alias ('@/*' by default)? No / Yes
  `,
  code0c: `
    npm run dev

    // If you're using React, use the following instead:

    npm start
  `,
  code1a: `
    export default function Page(){
      return(
        <>
          Hello world
        </>
      )
    }
  `,
  code1b: `
    import { useState } from 'react';
  `,
  code1c: `
    "use client"
  `,
  code1d: `
    "use client"

    import { useState } from 'react';

    export default function Page(){

      const [ count, setCount ] = useState(0);

      return(
        <>
          <button onClick={() => setCount(count + 1)}>Count is {count}.</button>
        </>
      )
    }
  `,
  code1e: `
    const [ count, setCount ] = useState(0);
  `,
  code1f: `
    <button onClick={() => setCount(count + 1)}>Count is {count}.</button>
  `,
  code1g: `
    "use client";

    import { useState } from "react";

    export default function Page() {
      const [count, setCount] = useState(0);

      return (
        <>
          <button onClick={() => setCount(count + 1)}>Count is {count}.</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </>
      );
    }
  `,
  code1h: `
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
  `
};

export default Code;
