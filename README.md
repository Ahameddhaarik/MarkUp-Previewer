MarkUp Previewer

Live, in-browser Markdown editor with instant preview.

Live Demo: https://ahameddhaarik.github.io/MarkUp-Previewer/

✨ Features

Real-time preview: See formatted output as you type.

Split view layout: Editor on one side, preview on the other (responsive on mobile).

Standard Markdown support: Headings, lists, links, images, code blocks, blockquotes, tables, etc.

Lightweight & fast: Runs entirely in the browser—no backend.

🛠 Tech Stack

Frontend: HTML, CSS, JavaScript
(If your build uses a framework/bundler like React/Vite, the local setup below covers that too.)

🚀 Getting Started (Local)
Option A — Open directly

Clone or download the repository.

Open index.html in your browser.

Option B — Run with a local server (recommended)
# from the project root
python -m http.server 5173    # or: npx serve


Then open the shown URL in your browser.

Option C — If the project uses npm (React/Vite, etc.)
npm install
npm run dev     # or: npm start


If these scripts don’t exist, you can ignore this section and use Option A or B.

📚 Usage

Type Markdown in the editor pane.

The preview pane updates instantly.

Use standard Markdown syntax for:

#–###### headings

bold, italic, strikethrough

Lists (-, *, 1.), checkboxes (- [ ])

Links [text](url) and images ![alt](url)

Inline code `code` and fenced blocks:

```lang
// code here
```

📂 Project Structure (typical)
MarkUp-Previewer/
├─ index.html
├─ style.css
├─ script.js
└─ assets/         # (optional) images/icons


(Adjust to match your repo.)

🔧 Development Notes

Keep UI responsive by testing on mobile and desktop.

If you add a Markdown parser (e.g., marked, showdown), place its script import in index.html and convert editor text to HTML in script.js.

🗺️ Roadmap / Ideas

Dark / light theme toggle

Persistent editor content (localStorage)

“Download as .md / .html”

Copy-to-clipboard button

Syntax highlighting for code blocks

🤝 Contributing

Pull requests are welcome!

Fork the repo

Create a feature branch

Commit changes with clear messages

Open a PR

📄 License

MIT — feel free to use and adapt.

👤 Author

Ahamed Dhaarik

Portfolio/GitHub: https://ahameddhaarik.github.io
