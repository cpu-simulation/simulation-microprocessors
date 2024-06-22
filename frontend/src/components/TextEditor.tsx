import Editor from "react-simple-code-editor"

const TextEditor = ({ instructions, setInstrunctions: setInstructions }:
    { instructions: string, setInstrunctions: Function }) => {

    const addLineNumbers = (code: string) => {
        return code.split("\n")
            .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
            .join("\n");
    }

    return (
        <Editor
            className="editor text-[--primary-15]"
            value={instructions}
            textareaId="codeArea"
            onValueChange={code => setInstructions(code)}
            highlight={code => addLineNumbers(code)}
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
            }}
        />
    );
}

export default TextEditor