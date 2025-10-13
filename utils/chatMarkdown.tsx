import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

interface MarkDownProps{
    message: string
}

const MarkDownText: React.FC<MarkDownProps> = ({message})=>{
    return(
        <div className="font-normal prose prose-sm max-w-none mt-1">
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    // Style paragraphs
                    p: ({node, ...props}) => <p className="mb-2" {...props} />,
                    // Style code blocks
                    code: ({node, className, children, ...props}) => {
                        const match = /language-(\w+)/.exec(className || '')
                        const inline = !match
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                className="rounded my-2"
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm" {...props}>
                                {children}
                            </code>
                        )
                    },
                    // Style pre blocks
                    pre: ({node, ...props}) => <pre className="my-2" {...props} />,
                    // Style lists
                    ul: ({node, ...props}) => <ul className="list-disc ml-4 mb-2" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal ml-4 mb-2" {...props} />,
                    li: ({node, ...props}) => <li className="mb-1" {...props} />,
                    // Style headings
                    h1: ({node, ...props}) => <h1 className="text-xl font-bold mt-3 mb-2" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-lg font-bold mt-3 mb-2" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-base font-bold mt-2 mb-1" {...props} />,
                    // Style links
                    a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />,
                    // Style blockquotes
                    blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-3 italic my-2" {...props} />,
                }}
            >
                {message}
            </ReactMarkdown>
        </div>
    )
}

export default MarkDownText