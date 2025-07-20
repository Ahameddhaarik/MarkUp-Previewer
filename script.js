const { useState } = React;

function Previewer() {
  const [markdown, setMarkdown] = useState(
    `# Hello!\n\n**This is bold**\n\n- Item 1\n- Item 2`
  );

  return (
    <div id="background">
      <h1>MARKUP PREVIEWER</h1>
      <div id="Box-i">
        <h3 id="head1">
          <i className="fas fa-code"></i> EDITOR :
        </h3>
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Type something"
          rows="10"
        />
      </div>
      <div id="boxa">
        <h3 id="head2">
          <i className="fas fa-eye"></i> PREVIEW :
        </h3>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
        ></div>
      </div>
    </div>
  );
}

ReactDOM.render(<Previewer />, document.getElementById("root"));
