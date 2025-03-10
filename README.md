# next-boilerplate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load local font.

## Learn more

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## ESLint

To lint the code and ensure it adheres to the defined coding standards, run the following command:

```bash
npm run lint
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to create a new branch

- **Checkout the development branch:** It's a common practice to branch off from the development branch. To switch to the development branch, use the git checkout command. Example: `git checkout development`

- **Create a new branch:** To create a new branch from the development branch, use the git checkout -b command followed by the name of your new branch. Example: `git checkout -b feature/add-details-to-readme`

## Branch naming convention

When creating new branches in this repository, please follow the given naming convention:

- **feature**: Used for introducing a new feature or significant changes.
- **fix**: Used for fixing bugs or issues.
- **refactor**: Used for refactoring existing code without changing its functionality.
- **docs**: Used for documentation-related changes.
- **style**: Used for changes that do not affect the code's functionality (e.g., formatting, whitespace).
- **test**: Used for adding or modifying tests.
- **config**: Used for configuration changes, such as environment setup, settings, or dependencies.

Example branch names:

- `feature/add-user-authentication`
- `fix/issue-with-login`
- `refactor/update-utility-function`
- `docs/update-readme`
- `style/formatting-changes`
- `test/add-unit-tests`
- `config/update-docker-compose`

Following to this naming convention helps in better organization and understanding of the purpose of each branch.

## Git commit message conventions

When making commits in your Git repository, it's helpful to follow a consistent structure for commit messages. The following types are commonly used:

- **feat:** A new feature for the user or a significant change.
  Example: `feat: add user authentication`

- **fix:** A bug fix.
  Example: `fix: resolve issue with form validation`

- **test:** Adding or modifying tests.
  Example: `test: add unit tests for authentication module`

- **chore:** Routine tasks, maintenance, or tools changes.
  Example: `chore: update dependencies`

- **docs:** Documentation changes.
  Example: `docs: update README with installation instructions`

- **style:** Code style changes (e.g., formatting) that do not affect the meaning of the code.
  Example: `style: format code according to style guide`

- **refactor:** Code changes that neither fix a bug nor add a feature, but enhance the code.
  Example: `refactor: simplify data processing logic`

- **ci:** Changes to CI/CD configuration files and scripts.
  Example: `ci: configure CI for automated testing`
