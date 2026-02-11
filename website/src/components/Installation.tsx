import { motion } from 'framer-motion'
import { Zap, Apple, Monitor } from 'lucide-react'
import CodeBlock from './ui/CodeBlock'

export default function Installation() {
  return (
    <section className="py-24 px-4 bg-bg-card/30" id="install">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/20 mb-6">
            <Zap className="w-4 h-4 text-accent-green" />
            <span className="text-sm text-accent-green">Quick Start</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get Started in <span className="text-accent-cyan">Seconds</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            One command installation. No dependencies required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <CodeBlock code={`/bin/bash -c "$(curl -fsSL https://cokacdir.cokac.com/install.sh)"`} />
          <CodeBlock code="cokacdir [PATH...]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-6 mt-8 text-zinc-500"
        >
          <div className="flex items-center gap-2">
            <Apple className="w-4 h-4" />
            <span className="text-sm">macOS</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            <span className="text-sm">Linux</span>
          </div>
        </motion.div>

        {/* Optional AI setup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 rounded-xl border border-zinc-800 bg-bg-card"
        >
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="text-accent-purple">✨</span>
            Enable AI Commands (Optional)
          </h3>
          <p className="text-zinc-400 text-sm mb-4">
            Install Claude Code to unlock natural language file operations.
          </p>
          <div className="space-y-3">
            <CodeBlock code="npm install -g @anthropic-ai/claude-code" />
          </div>
          <p className="text-zinc-500 text-xs mt-4">
            Learn more at <a href="https://docs.anthropic.com/en/docs/claude-code" target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline">docs.anthropic.com</a>
          </p>
        </motion.div>

        {/* Diff Compare Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-xl border border-zinc-800 bg-bg-card"
        >
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="text-accent-cyan">↔</span>
            Diff Compare
          </h3>
          <p className="text-zinc-400 text-sm mb-4">
            Compare two folders side-by-side to see what files were added, removed, or modified.
          </p>

          {/* How to start */}
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-white mb-2">How to Start</h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="bg-bg-elevated rounded-lg p-3">
                <p className="text-accent-cyan font-semibold mb-1">With 2 panels (most common):</p>
                <ol className="list-decimal list-inside space-y-1 text-xs">
                  <li>Navigate the left panel to the first folder</li>
                  <li>Navigate the right panel to the second folder</li>
                  <li>Press <kbd className="px-1.5 py-0.5 bg-zinc-700 rounded text-white font-mono">8</kbd> — diff screen opens immediately</li>
                </ol>
              </div>
              <div className="bg-bg-elevated rounded-lg p-3">
                <p className="text-accent-cyan font-semibold mb-1">With 3+ panels:</p>
                <ol className="list-decimal list-inside space-y-1 text-xs">
                  <li>Focus the first panel, press <kbd className="px-1.5 py-0.5 bg-zinc-700 rounded text-white font-mono">8</kbd> (border turns pink)</li>
                  <li>Move to the second panel with <kbd className="px-1.5 py-0.5 bg-zinc-700 rounded text-white font-mono">←</kbd> / <kbd className="px-1.5 py-0.5 bg-zinc-700 rounded text-white font-mono">→</kbd></li>
                  <li>Press <kbd className="px-1.5 py-0.5 bg-zinc-700 rounded text-white font-mono">8</kbd> again — diff screen opens</li>
                </ol>
              </div>
            </div>
          </div>

          {/* What you see */}
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-white mb-2">Reading the Diff Screen</h4>
            <div className="space-y-1 text-xs text-zinc-400">
              <p><span className="text-yellow-400">● Yellow</span> — File exists in both folders but content differs</p>
              <p><span className="text-green-400">● Green</span> — File only in the left folder</p>
              <p><span className="text-blue-400">● Blue</span> — File only in the right folder</p>
              <p><span className="text-zinc-300">● White</span> — File is identical in both folders</p>
            </div>
          </div>

          {/* Key shortcuts summary */}
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-white mb-2">Key Shortcuts</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-zinc-400">
              <p><kbd className="text-white font-mono">Enter</kbd> — View file content diff / Toggle directory</p>
              <p><kbd className="text-white font-mono">← →</kbd> — Collapse / Expand directory</p>
              <p><kbd className="text-white font-mono">F</kbd> — Cycle filter (All / Diff / Left / Right)</p>
              <p><kbd className="text-white font-mono">e / c</kbd> — Expand all / Collapse all subdirectories</p>
              <p><kbd className="text-white font-mono">N S D Y</kbd> — Sort by name / size / date / type</p>
              <p><kbd className="text-white font-mono">Space</kbd> — Select / Deselect item</p>
            </div>
          </div>

          {/* File content diff */}
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-white mb-2">File Content Diff</h4>
            <p className="text-xs text-zinc-400 mb-2">Press <kbd className="px-1.5 py-0.5 bg-zinc-700 rounded text-white font-mono">Enter</kbd> on a file to see a side-by-side line comparison with inline character-level change highlighting.</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-zinc-400">
              <p><kbd className="text-white font-mono">n / N</kbd> — Jump to next / previous change</p>
              <p><kbd className="text-white font-mono">Esc</kbd> — Return to diff screen</p>
            </div>
          </div>

          {/* Compare methods */}
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-white mb-2">Compare Methods</h4>
            <p className="text-xs text-zinc-400 mb-2">
              Change in Settings (<kbd className="px-1.5 py-0.5 bg-zinc-700 rounded text-white font-mono">`</kbd> key → Diff row → <kbd className="px-1.5 py-0.5 bg-zinc-700 rounded text-white font-mono">← →</kbd>):
            </p>
            <div className="space-y-1 text-xs text-zinc-400">
              <p><code className="text-accent-green">content</code> — Byte-by-byte comparison (most accurate)</p>
              <p><code className="text-accent-green">modified_time</code> — Compare timestamps only (fastest)</p>
              <p><code className="text-accent-green">content_and_time</code> — Both content and timestamp must match</p>
            </div>
          </div>

          {/* Git commit diff */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Git Commit Diff</h4>
            <p className="text-xs text-zinc-400 mb-2">
              Compare any two git commits side-by-side:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-xs text-zinc-400">
              <li>Navigate to a git repository</li>
              <li>Press <kbd className="px-1.5 py-0.5 bg-zinc-700 rounded text-white font-mono">7</kbd> to open the commit list</li>
              <li>Use <kbd className="px-1.5 py-0.5 bg-zinc-700 rounded text-white font-mono">Space</kbd> to select two commits</li>
              <li>Press <kbd className="px-1.5 py-0.5 bg-zinc-700 rounded text-white font-mono">Enter</kbd> to compare</li>
            </ol>
          </div>
        </motion.div>

        {/* Custom File Handlers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 p-6 rounded-xl border border-zinc-800 bg-bg-card"
        >
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="text-accent-cyan">⚙️</span>
            Custom File Handlers (Optional)
          </h3>
          <p className="text-zinc-400 text-sm mb-4">
            Define custom programs for each file extension in <code className="text-accent-green">~/.cokacdir/settings.json</code>
          </p>
          <div className="bg-bg-elevated rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-zinc-300">{`{
  "extension_handler": {
    "jpg|jpeg|png|gif": ["@feh {{FILEPATH}}"],
    "mp4|avi|mkv": ["@vlc {{FILEPATH}}"],
    "pdf": ["@evince {{FILEPATH}}"],
    "rs|py|js": ["vim {{FILEPATH}}"]
  }
}`}</pre>
          </div>
          <div className="mt-4 space-y-2 text-xs text-zinc-500">
            <p><code className="text-accent-cyan">|</code> — Combine multiple extensions</p>
            <p><code className="text-accent-cyan">@</code> — Background mode for GUI apps (evince, feh)</p>
            <p><code className="text-accent-cyan">["cmd1", "cmd2"]</code> — Fallback commands</p>
            <p><code className="text-accent-cyan">u</code> — Press on any file to set/edit handler interactively</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
