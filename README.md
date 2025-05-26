# AI Agentic Patterns

A TypeScript implementation of AI agentic patterns using OpenAI's GPT-4, featuring a multi-agent system with planning, execution, and reflection capabilities.

## 🎯 Overview

This project implements a sophisticated multi-agent system that uses AI to:
1. Break down complex goals into actionable tasks
2. Execute tasks with detailed results
3. Reflect on and improve the results
4. Coordinate multiple agents for complex problem-solving

## 🏗️ Architecture

The system consists of several specialized agents:

### Core Agents
- **PlannerAgent**: Breaks down goals into 3-5 specific, actionable tasks
- **ExecutorAgent**: Executes tasks and provides detailed results
- **ReflectionAgent**: Analyzes results and suggests improvements

### Pattern Agents
- **ToolPatternAgent**: Handles tool-based operations
- **MultiAgent**: Manages multi-agent collaboration
- **PlanningPatternAgent**: Implements advanced planning strategies

### Coordinator
- **CoordinatorAgent**: Orchestrates the workflow between all agents

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd ai-agentic-patterns
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

### Usage

Run the example workflow:
```bash
npm start
```

## 💡 Example Workflow

```typescript
const coordinator = new CoordinatorAgent();
await coordinator.run("Generate a typescript code for implementing merge sort algorithm.");
```

The workflow:
1. PlannerAgent breaks down the goal into tasks
2. ExecutorAgent executes each task
3. ReflectionAgent analyzes and improves the results
4. Additional pattern agents enhance the output

## 🛠️ Implementation Details

### Agent Communication
- Each agent uses OpenAI's GPT-4 model
- System and user roles are used for consistent agent behavior
- Clear separation between agent identity and task-specific content

### Prompt Engineering
- System prompts define agent behavior and requirements
- User prompts contain specific tasks and instructions
- Structured output formats for consistent results

## 📁 Project Structure

```
src/
├── agents/                # Core agent implementations
│   ├── plannerAgent.ts
│   ├── executorAgent.ts
│   └── coordinatorAgent.ts
├── patterns/             # Pattern implementations
│   ├── reflection/
│   ├── toolPattern/
│   ├── multiAgent/
│   └── planningPattern/
├── core/                 # Core interfaces and types
└── workflows/           # Workflow implementations
```

## 🔧 Configuration

The system can be configured through:
- Environment variables
- Agent-specific parameters
- OpenAI model settings

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- OpenAI for providing the GPT-4 API
- The AI community for inspiration and best practices

---

## 📦 Tech Stack

- **TypeScript**
- **OpenAI API**
- **Node.js (npm)**
- **dotenv** for environment configuration

---

## 📁 Project Structure

```
ai-agentic-pattern/
├── src/
│   ├── agents/                # Individual agent implementations
│   │   ├── plannerAgent.ts
│   │   ├── executorAgent.ts
│   │   ├── reflectorAgent.ts
│   │   └── coordinatorAgent.ts   # Multi-agent orchestrator
│
│   ├── core/                  # Core logic and abstractions
│   │   ├── agent.ts           # Base agent interface
│   │   ├── memory.ts          # Shared memory/context manager
│   │   ├── types.ts           # Common types
│   │   └── prompts.ts         # Prompt templates
│
│   ├── tools/                 # Tool integrations (e.g., web search, calculator)
│   │   ├── webSearchTool.ts
│   │   ├── calculatorTool.ts
│   │   └── toolInterface.ts
│
│   ├── llm/                   # LLM wrapper (OpenAI SDK integration)
│   │   └── openaiClient.ts
│
│   ├── workflows/             # End-to-end flows (e.g., planning → execution → reflection)
│   │   └── taskRunner.ts
│
│   ├── config/                # Configuration files (env loader, constants)
│   │   ├── env.ts
│   │   └── constants.ts
│
│   └── index.ts               # Entry point
│
├── .env                       # Environment variables
├── package.json
├── tsconfig.json
├── README.md

```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/abhishekbansal012/ai-agentic-patterns.git
cd ai-agentic-pattern
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the project root with your OpenAI API key:

```bash
OPENAI_API_KEY=your_openai_key_here
```

### 4. Run the Application

```bash
npm start
```

This will execute the sample workflow defined in `src/index.ts`.

---

## 🧠 Supported Agent Patterns

| Pattern        | Description                                                |
|----------------|------------------------------------------------------------|
| **Reflection** | Evaluates outputs and suggests improvements                |
| **Tool Use**   | Calls external tools like web search, calculator, etc.     |
| **Planning**   | Breaks down user goals into step-by-step actions           |
| **Multi-Agent**| Coordinates multiple agents for collaborative tasks        |

---

## 🧩 Extending the Framework

You can add new agents or tools by implementing the base interfaces:

```ts
// Agent Interface
export interface Agent {
  name: string;
  role: string;
  run(input: string): Promise<string>;
}

// Tool Interface
export interface Tool {
  name: string;
  description: string;
  run(input: string): Promise<string>;
}
```

Drop new implementations into `src/agents/` or `src/tools/`, and plug them into `src/workflows/taskRunner.ts`.

---

## 📚 Example Use Case

Input:
> "Research top 3 green energy policies globally and summarize them."

Workflow:
- `PlannerAgent` decomposes task.
- `ExecutorAgent` fetches responses from OpenAI.
- `ReflectorAgent` critiques/improves results.
- `CoordinatorAgent` manages the flow.

---

## 🔒 Environment Variables

| Variable         | Description               |
|------------------|---------------------------|
| `OPENAI_API_KEY` | Your OpenAI API key       |

Use `.env` and load it via `dotenv` in your codebase.

---

## 🛠 Future Enhancements

- [ ] Vector-based memory integration
- [ ] Web search agent with live data
- [ ] Persistent task history
- [ ] Logging, tracing and observability support
- [ ] Plug-and-play external agent plugins

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributions Welcome

Feel free to fork, improve, and PR! Let's build intelligent, modular AI agents together.

---


