import "./styles.css";

export default function Lesson() {
  return (
    <div className="Lesson1">
      <h2 class="lesson">1.1.1</h2>
      <h3 class="directions">
        First, we will start with practicing the first 3 header tags!
      </h3>
      <ol class="question-list">
        <li class="question">
          What is the beginning <i>Header 1 Tag</i>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            class="answer"
            placeholder="Type answer here..."
          ></input>
        </li>
        <li class="question">
          What is the ending <i>Header 1 Tag</i>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            class="answer"
            placeholder="Type answer here..."
          ></input>
        </li>
      </ol>
    </div>
  );
}
