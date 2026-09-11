# SCOTTeVEST Frontend Templates

This repository contains frontend template work from a SCOTTeVEST website redesign. The project uses a build workflow centered on Twig, Sass, JavaScript, Grunt, and Foundation 6, with an Express-based local development server.

The code reflects an older frontend stack, but it is still a useful example of how I approached reusable templates, responsive layouts, asset compilation, and handoff-ready frontend structure in a production website project.

## Stack

- Twig for reusable page templates
- Sass / SCSS for modular styling
- JavaScript for client-side behavior
- Foundation 6 for responsive layout and components
- Grunt for build automation and file watching
- Node.js / Express for local development
- Git for version control

## Project Structure

- `views/` — Twig templates
- `public/scss/` — Sass source files
- `build/` — compiled frontend output
- Grunt tasks — local server, file watching, compilation, and asset processing

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server and watch for changes:

```bash
grunt server
```

Build the final HTML, CSS, and JavaScript output:

```bash
grunt build
```

Compiled output is generated under `build/html`.

## What This Project Demonstrates

This project is part of my earlier frontend work and shows experience with:

- translating design work into responsive production templates
- organizing reusable frontend components and page structures
- maintaining a preprocessor-based CSS architecture
- setting up repeatable local build workflows
- working within an established brand and production website environment
- preparing frontend code for handoff and continued development

## Context

My background started in design before moving more deeply into frontend and full-stack engineering. Projects like this are useful context for that transition: the focus was not only on getting the code to work, but also on layout, consistency, responsiveness, maintainability, and the final user experience.

This repository is kept as a historical project, so the dependency versions reflect the tools used at the time rather than a modernized stack.
