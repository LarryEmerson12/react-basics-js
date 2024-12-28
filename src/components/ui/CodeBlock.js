import dedent from "dedent";

export default function CodeBlock({ code }){
  return(
    <>
      <div style={{ whiteSpace: "pre-wrap" }} id="terminal">
        <code>
          {dedent(code)}
        </code>
      </div>
    </>
  )
}