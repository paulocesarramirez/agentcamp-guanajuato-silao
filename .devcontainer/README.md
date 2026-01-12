# DevContainer Configuration

This directory contains the DevContainer configuration for developing the AgentCamp Guanajuato Jekyll site in GitHub Codespaces or VS Code Remote Containers.

## What's Included

### Container
- **Base Image**: Official Jekyll DevContainer (`mcr.microsoft.com/devcontainers/jekyll:2-bullseye`)
- **Features**: Node.js LTS (for additional tooling if needed)

### VS Code Extensions
- `ms-vscode.vscode-html-css` - HTML and CSS language support
- `bradlc.vscode-tailwindcss` - Tailwind CSS IntelliSense
- `ritwickdey.LiveServer` - Live preview server
- `syler.sass-indented` - Sass/SCSS syntax highlighting
- `sibiraj-s.vscode-scss-formatter` - SCSS formatter
- `ecmel.vscode-html-css` - Additional HTML/CSS support

### Port Forwarding
- **3000**: Live Server (for static HTML preview)
- **4000**: Jekyll Server (default Jekyll development server)
- **8080**: Additional development server port

## Usage

### In GitHub Codespaces
1. Navigate to the repository on GitHub
2. Click the "Code" button and select "Codespaces"
3. Create a new Codespace or open an existing one
4. The environment will automatically set up with all dependencies

### In VS Code with Remote Containers
1. Install the "Dev Containers" extension in VS Code
2. Open the repository folder
3. When prompted, click "Reopen in Container"
4. Wait for the container to build and initialize

### Running Jekyll
After the container starts, run:
```bash
bundle exec jekyll serve --host 0.0.0.0
```

The site will be available at `http://localhost:4000` (automatically forwarded).

### Using Live Server
For quick HTML previews:
1. Build the site: `bundle exec jekyll build`
2. Open any HTML file from `_site/` in the editor
3. Right-click and select "Open with Live Server"

## Customization
To modify the configuration, edit `devcontainer.json` and rebuild the container.
