# Smart Email Assistant

<p align="center">
  <img src="https://placehold.co/1200x320/0f172a/ffffff?text=Smart+Email+Assistant" alt="Smart Email Assistant" width="100%" />
</p>

<p align="center">
  <strong>AI-Powered Email Reply Generator with Gmail Chrome Extension</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Java-17-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/Spring%20Boot-3.5-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Chrome Extension" />
  <img src="https://img.shields.io/badge/OpenRouter-AI-8B5CF6?style=for-the-badge&logo=openai&logoColor=white" alt="OpenRouter" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
  <img src="https://github.com/BhushanBitwise/smart-email-assistant?style=social" alt="GitHub Stars" />
</p>

---

## 🌟 Overview

Smart Email Assistant is a full-stack AI application that helps users compose polished, context-aware email replies directly inside Gmail. The experience is powered by a modern React frontend, a Spring Boot backend, and a Chrome extension that integrates seamlessly into the Gmail UI.

This project was designed as both a practical productivity tool and a strong showcase of modern software engineering practices: full-stack architecture, prompt engineering, browser extension development, REST API integration, and AI product thinking.

> Built for people who want to save time, write better emails, and stay productive without leaving their inbox.

---

## 🖼️ Hero Preview

![Hero Screenshot](https://placehold.co/1400x700/111827/ffffff?text=Smart+Email+Assistant+Hero)

---

## 🏗️ Architecture

```text
User → Chrome Extension → Gmail UI
          ↓
       Spring Boot API
          ↓
      OpenRouter / LLM
          ↓
    AI-generated reply
```

```text
React Frontend
    ↓
Spring Boot Backend
    ↓
OpenRouter API
    ↓
Chrome Extension
    ↓
Gmail
```

---

## ✨ Product Features

### Core Features

- One-click AI email reply generation
- Gmail-native workflow with a browser extension
- Context-aware response drafting
- Professional and concise writing tone control
- Fast and lightweight interaction model

### AI Features

- Prompt-based email reply generation
- Tone customization for formal, friendly, concise, or persuasive writing
- LLM-driven drafting with OpenRouter integration
- Flexible response generation for different communication styles

### Chrome Extension Features

- Injects into Gmail pages via content scripts
- Watches the Gmail DOM using MutationObserver
- Adds quick access UI for AI reply generation
- Works directly in the email context without leaving the inbox

### Frontend Features

- Responsive React 19 interface
- Smooth animated UI with Framer Motion
- Modern Tailwind-based styling system
- Toast notifications and polished UX patterns
- Clean component-driven architecture

### Backend Features

- Spring Boot REST API for request handling
- WebClient-based integration with OpenRouter
- Structured request/response flow
- Centralized service layer for AI orchestration
- Extensible design for future AI capabilities

### Security Features

- API keys kept out of the frontend
- Backend-managed request authorization
- CORS-safe API boundary
- Minimal browser permissions for extension safety

### Developer Features

- Clear separation between frontend, backend, and extension modules
- Easy local development workflow
- Modular service design and reusable components
- Strong foundation for future authentication, history, and deployment work

---

## 📸 Screenshots

### Landing Page

![Landing](https://placehold.co/1200x700/1f2937/ffffff?text=Landing+Page)

### AI Generator

![Generator](https://placehold.co/1200x700/1f2937/ffffff?text=AI+Generator)

### Dark Theme

![Dark Theme](https://placehold.co/1200x700/111827/ffffff?text=Dark+Theme)

### Gmail Extension

![Extension](https://placehold.co/1200x700/1f2937/ffffff?text=Gmail+Extension)

### AI Reply

![Reply](https://placehold.co/1200x700/111827/ffffff?text=AI+Reply)

---

## 🎥 Demo Video

[![Watch Demo](https://placehold.co/1200x600/111827/ffffff?text=Demo+Video)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

---

## 🧩 Chrome Extension Demo

- Install the extension in Chrome from the extension folder
- Open Gmail and click the extension action
- Generate a reply based on the selected email content
- Review and insert the reply into the compose box

![Extension GIF Placeholder](https://placehold.co/1200x600/111827/ffffff?text=Extension+Demo+GIF)

---

## 📁 Folder Structure

```text
smart-email-assistant/
├── .github/
├── .gitignore
├── README.md
├── email-writer-ext/
│   ├── content.css
│   ├── content.js
│   └── manifest.json
├── email-writer-react/
│   ├── .gitignore
│   ├── .oxlintrc.json
│   ├── index.html
│   ├── node_modules/           # local dependency install
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.ts
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Features.tsx
│   │   │   ├── Generator.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── layout/
│   │   │       ├── Footer.tsx
│   │   │       └── Navbar.tsx
│   │   ├── hooks/
│   │   │   └── useTheme.ts
│   │   ├── utils/
│   │   │   └── cn.ts
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
└── email-writer-sb/
    ├── .gitattributes
    ├── .gitignore
    ├── .idea/
    ├── HELP.md
    ├── mvnw
    ├── mvnw.cmd
    ├── pom.xml
    ├── src/
    │   ├── main/
    │   │   ├── java/com/email/writer/
    │   │   │   └── EmailWriterSbApplication.java
    │   │   └── resources/
    │   │       ├── application.properties
    │   │       ├── static/
    │   │       └── templates/
    │   └── test/
    │       └── java/com/email/writer/EmailWriterSbApplicationTests.java
    └── target/                  # Maven build output
```

---

##  Environment Variables

### Frontend

Create a `.env` file inside `email-writer-react` if needed:

```env
VITE_API_BASE_URL=http://localhost:8080
```

### Backend

Create a `.env` file or export these variables before running the Spring Boot app:

```bash
export OPENROUTER_URL=https://openrouter.ai/api/v1/chat/completions
export OPENROUTER_KEY=your_openrouter_api_key
export OPENROUTER_MODEL=openai/gpt-4o-mini
```

If you are using `application.properties`, the app already expects these values via environment variables.

### Chrome Extension

No special environment variables are required by default. The extension is configured to target `http://localhost:8080` during local development.

---

## 📡 API Documentation

### Endpoint

```http
POST /api/email/generate
Content-Type: application/json
```

### Request Body

```json
{
  "emailContent": "Hi Alex, thanks for your message. I will review the proposal and get back to you tomorrow.",
  "tone": "professional"
}
```

### Example Response

```json
"Hi Alex, thank you for your message. I’ll review the proposal and get back to you tomorrow."
```

### Status Codes

| Status | Meaning |
| --- | --- |
| 200 | Request succeeded |
| 400 | Invalid request payload |
| 500 | Internal server error or AI provider failure |

### Example with curl

```bash
curl -X POST http://localhost:8080/api/email/generate \
  -H "Content-Type: application/json" \
  -d '{"emailContent":"Can we reschedule our meeting?","tone":"friendly"}'
```

---

## 🔄 Product Workflow

```text
User clicks AI Reply
    ↓
Chrome Extension reads Gmail context
    ↓
Backend receives the email content
    ↓
Prompt is constructed with tone and context
    ↓
OpenRouter sends the request to the LLM
    ↓
Generated reply is returned
    ↓
Reply is injected back into Gmail compose box
```

---

## ⚙️ Technical Highlights

### Prompt Engineering

The backend uses carefully structured prompts to instruct the LLM to generate concise, professional, and context-aware email replies rather than generic text.

### REST API

The application exposes a simple, scalable API endpoint for AI reply generation, making it easy to extend to other clients in the future.

### Mutation Observer

The browser extension uses DOM observation techniques to track Gmail’s dynamic interface and keep the user experience smooth despite the page’s changing structure.

### WebClient

Spring Boot uses `WebClient` to make asynchronous, non-blocking outbound HTTP requests to the OpenRouter endpoint.

### Spring Boot

The backend is built with a clean service-oriented structure that separates API handling, AI orchestration, and request modeling.

### React Architecture

The frontend is built around modular components, hooks, and utility functions to make the product feel polished and maintainable.

### Chrome Extension APIs

The extension relies on extension lifecycle, content scripts, and tab access to provide a frictionless Gmail integration experience.

---

## 🧠 Challenges Solved

- Handling Gmail’s dynamic DOM structure without breaking the user experience
- Injecting content scripts safely into a complex web application
- Managing API integration and response parsing from an external LLM provider
- Optimizing prompts to reduce hallucinations and improve output quality
- Supporting browser-level security constraints while maintaining a seamless workflow
- Managing CORS and local development constraints between frontend, backend, and extension

---

## ⚡ Performance Optimizations

- Debounced UI interaction patterns where relevant
- Modular component loading for a lighter frontend footprint
- Reusable UI primitives for consistent rendering
- Efficient API calls with minimal payload overhead
- Lightweight state handling for a responsive experience

---

## 🔮 Future Improvements

- AI summarizer for long email threads
- Grammar and clarity refinement mode
- Email translation support
- Tone detection based on conversation history
- Smart reply templates for common tasks
- User history and saved reply snippets
- Authentication and user profiles
- Cloud deployment and production scaling
- Multi-model support and fallback routing

---

## 🏅 Resume-Worthy Highlights

- Built a full-stack AI SaaS-style application from scratch
- Combined React, Spring Boot, and Chrome extension development in one cohesive product
- Integrated OpenRouter with real-world prompt engineering practices
- Delivered a polished Gmail-based user experience with browser-native interaction
- Demonstrated strong product thinking, architecture decisions, and engineering execution

---

## 🛠️ Skills Demonstrated

### Frontend

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- Lucide React
- React Hot Toast

### Backend

- Java
- Spring Boot
- Spring Web
- WebClient
- REST API design
- Service-oriented architecture

### AI & Systems

- Prompt engineering
- OpenRouter API integration
- LLM orchestration
- Browser extension integration
- System design thinking
- Clean architecture principles

---

## 📚 Lessons Learned

- AI features become much more useful when the product experience is tightly integrated with the user’s workflow
- Prompt quality matters as much as model access in real applications
- Browser extension development requires careful handling of DOM changes and security boundaries
- Good engineering comes from making the architecture simple enough to iterate quickly
- A polished frontend can significantly improve the perceived quality of an AI product

---

## 🤝 Contributing

Contributions are welcome.

### Suggested workflow

```bash
git checkout -b feature/your-feature-name
git commit -m "Add your feature"
git push origin feature/your-feature-name
```

Please open a pull request with a short description of the change and any screenshots or demos if relevant.

### Areas to contribute

- UI improvements
- Prompt tuning
- Extension UX improvements
- API reliability enhancements
- Documentation and onboarding
- Testing and quality improvements

---

## 📄 License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project with attribution.

---

## 👤 Author

- Name: Smart Email Assistant Team
- GitHub: [BhushanBitwise](https://github.com/BhushanBitwise)
- LinkedIn: [linkedin](https://www.linkedin.com/in/bhushan-gadekar-5b87032a5)
- Portfolio: [portfolio](https://my-portfolio-topaz-nine-82.vercel.app/)
- Email: thebhushan752@gmail.com

---

## ⭐ Star the Repository

If this project helped you, please consider giving it a star.

It helps more than you might think and encourages continued development.

<p align="center">
  <a href="https://github.com/BhushanBitwise/smart-email-assistant">
    <img src="https://img.shields.io/badge/⭐%20Star%20This%20Repo-111827?style=for-the-badge&logo=github" alt="Star Repo" />
  </a>
</p>

---

## 🔚 Footer

Built with care for productivity, AI, and modern product engineering.

Smart Email Assistant aims to make communication faster, clearer, and more intelligent.
