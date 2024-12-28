import Counter from "@/components/Counter";
import Modal from "@/components/Modal";

export default function Page() {
  return (
    <>
      <h1>React</h1>
      <p>
        Hello world. This is a Nextjs project covering <b>React's basics</b>,
        and if you want to, please fork it and try it out!
      </p>
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
      <section id="counter">
        <Counter />
        <div>
          <button>
            <a href="/answers#counter" id="button">
              But how?
            </a>
          </button>
        </div>
      </section>
      <section id="modal">
        <Modal trigger="Open modal">
          <b>This is a modal.</b>
          <hr />
          <p>Insert some content here.</p>
        </Modal>
        <div>
          <button>
            <a href="/answers#modal" id="button">
              But how?
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
