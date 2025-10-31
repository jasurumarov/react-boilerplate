# 🚀 React Boilerplate by JasurCoder

A modern, production-ready React boilerplate with Vite, TypeScript, featuring internationalization, state management, and a comprehensive development setup.

[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.1-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.9-764ABC?logo=redux)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## ✨ Features

- ⚡️ **Vite 7** - Lightning fast build tool and dev server
- ⚛️ **React 19** - Latest React with modern features
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- 🧩 **Shadcn UI** - Beautiful, accessible component library
- 🌍 **Internationalization** - Multi-language support with i18next (English, Russian, Uzbek)
- 🗃️ **Redux Toolkit** - Robust state management solution
- 🔄 **RTK Query** - Powerful data fetching & caching (built into Redux Toolkit)
- 🧭 **React Router DOM** - Declarative routing for React
- 🎯 **TypeScript** - Full type safety
- 💅 **ESLint + Prettier** - Code quality and formatting
- 🪝 **Husky + Lint-staged** - Pre-commit hooks for code quality
- 🏗️ **Atomic Design** - Organized component architecture

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm** or **yarn** or **pnpm**

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jasurumarov/react-boilerplate.git
cd react-boilerplate
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

## 📂 Project Structure

```
react-boilerplate/
├── public/                  # Static files
├── src/
│   ├── assets/              # Images, fonts, icons
│   ├── components/
│   │   ├── common/         # Shared components (LocaleSwitcher, ThemeSwitcher)
│   │   ├── custom/         # Custom components
│   │   │   ├── atoms/      # Atomic design - atoms
│   │   │   ├── molecules/  # Atomic design - molecules
│   │   │   └── organisms/  # Atomic design - organisms
│   │   ├── features/       # Feature-specific components
│   │   │   ├── contact/    # Contact page components
│   │   │   └── home/       # Home page components
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   └── ui/             # Shadcn UI components
│   ├── constants/          # Constants and configuration data
│   ├── context/            # Redux store configuration
│   │   ├── services/       # RTK Query API services
│   │   ├── slices/         # Redux slices
│   │   └── store.ts        # Store configuration
│   ├── hooks/              # Custom React hooks
│   ├── i18n/               # Internationalization config
│   │   ├── locales/        # Translation files
│   │   │   ├── en.json     # English translations
│   │   │   ├── ru.json     # Russian translations
│   │   │   └── uz.json     # Uzbek translations
│   │   └── index.ts        # i18next configuration
│   ├── interfaces/         # TypeScript interfaces
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   │   ├── home/           # Home page
│   │   └── contact/        # Contact page
│   ├── styles/             # Global styles
│   ├── App.tsx             # Main App component with routes
│   └── main.tsx            # Application entry point
├── .husky/                 # Git hooks
├── components.json         # Shadcn UI configuration
├── eslint.config.js        # ESLint configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── .prettierrc.json        # Prettier configuration
└── package.json
```

## 🛠️ Available Scripts

| Script                 | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start development server                |
| `npm run build`        | Build for production                    |
| `npm run preview`      | Preview production build locally        |
| `npm run lint`         | Run ESLint                              |
| `npm run lint:fix`     | Fix ESLint errors automatically         |
| `npm run lint:strict`  | Run ESLint with zero warnings tolerance |
| `npm run format`       | Format code with Prettier               |
| `npm run format:check` | Check code formatting                   |
| `npm run type-check`   | Run TypeScript type checking            |
| `npm run check-all`    | Run all checks (types, lint, format)    |

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
VITE_API_URL=your_api_url
```

Note: In Vite, environment variables must be prefixed with `VITE_` to be exposed to the client.

### Internationalization

The boilerplate supports three languages out of the box:

- English (en)
- Russian (ru)
- Uzbek (uz)

To add a new language:

1. Add translation file in `src/i18n/locales/[language].json`
2. Update locale configuration in `src/i18n/index.ts`

### Styling

This project uses:

- **Tailwind CSS v4** for utility-first styling
- **Shadcn UI** for pre-built components
- **CSS Variables** for theming

Customize theme in `src/styles/globals.css`

## 🧪 Code Quality

This project enforces code quality through:

- **TypeScript** - Static type checking
- **ESLint** - Code linting with strict rules
- **Prettier** - Consistent code formatting
- **Husky** - Git hooks for pre-commit validation
- **Lint-staged** - Run linters on staged files only

All commits are automatically checked for:

- TypeScript errors
- ESLint violations
- Prettier formatting
- Build errors

### Commit Message Format

This project uses conventional commit messages:

```
<type>(<scope>): <description>
```

Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `build`, `ci`, `revert`

Example:

```
feat(auth): add user login functionality
fix(ui): resolve button styling issue
docs: update README installation steps
```

## 🎨 UI Components

This boilerplate uses [Shadcn UI](https://ui.shadcn.com/) components. To add new components:

```bash
npx shadcn@latest add [component-name]
```

Available components include:

- Button
- Input
- Form
- Select
- Checkbox
- Label
- And many more...

## 🚦 Routing

The project uses React Router DOM for client-side routing:

```
/                    → Home page
/contact             → Contact page
```

Add new routes in `src/App.tsx`:

```tsx
import { Routes, Route } from "react-router-dom";
import NewPage from "./pages/new/NewPage";

<Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/new" element={<NewPage />} />
</Routes>;
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to:

- Follow the existing code style
- Run `npm run check-all` before committing
- Write clear commit messages following conventional commits format
- Update documentation if needed

## 📝 Development Guidelines

### Component Structure

Follow Atomic Design principles:

- **Atoms**: Basic building blocks (buttons, inputs)
- **Molecules**: Simple combinations of atoms
- **Organisms**: Complex UI components

### Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Files**: camelCase for utilities (e.g., `formatDate.ts`)
- **Variables**: camelCase (e.g., `userName`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

### State Management

Use Redux Toolkit for global state:

- Create slices in `src/context/slices/`
- Define API services in `src/context/services/`
- Use typed hooks from `src/context/store.ts`

### Why RTK Query?

This boilerplate uses **RTK Query** (built into Redux Toolkit) for data fetching and caching:

**✅ No Extra Dependencies**

- RTK Query comes bundled with Redux Toolkit
- No need to install additional libraries like Axios, React Query, or SWR
- Reduces bundle size and dependency management complexity

**✅ Powerful Features Out of the Box**

- Automatic caching and request deduplication
- Automatic re-fetching on focus/reconnection
- Optimistic updates support
- Built-in loading/error states
- TypeScript support with automatic type inference

**✅ Seamless Integration**

- Works perfectly with existing Redux slices
- Shares the same store and middleware
- Consistent state management patterns across the app

**Example Usage:**

```typescript
// src/context/services/authApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
        }),
        getUser: builder.query({
            query: userId => `/users/${userId}`,
        }),
    }),
});

export const { useLoginMutation, useGetUserQuery } = authApi;
```

In components:

```typescript
const { data, isLoading, error } = useGetUserQuery(userId);
const [login, { isLoading }] = useLoginMutation();
```

No extra setup, no extra libraries – everything you need is already in Redux Toolkit! 🎯

## 🚀 Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. You can preview the production build locally with:

```bash
npm run preview
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**JasurCoder**

- Website: [jasurcoder.uz](https://jasurcoder.uz)
- GitHub: [@jasurumarov](https://github.com/jasurumarov)

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [i18next](https://www.i18next.com/)
- [React Router](https://reactrouter.com/)

---

⭐️ If you find this boilerplate helpful, please consider giving it a star!

**Happy Coding! 🚀**
