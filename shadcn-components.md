TITLE: Serve shadcn-ui registry with development server
DESCRIPTION: This command starts the development server for your project, typically a Next.js application. Once running, the generated registry JSON files become accessible via HTTP, for example, at `http://localhost:3000/r/[NAME].json`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/getting-started.mdx#_snippet_7

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Create a Basic React Component for Registry Inclusion
DESCRIPTION: Provides a simple React component example (`HelloWorld`) utilizing a Shadcn UI Button. This component serves as a template for items to be added to the component registry.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/getting-started.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Button } from "@/components/ui/button"

export function HelloWorld() {
  return <Button>Hello World</Button>
}
```

----------------------------------------

TITLE: Serve Local Registry for Development
DESCRIPTION: Command to start the development server, typically for a Next.js application. This makes the generated registry JSON files accessible locally, allowing for testing and development of the component registry.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/getting-started.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Create a basic React component for shadcn-ui registry
DESCRIPTION: This example demonstrates a simple React component using a shadcn-ui Button. It illustrates how to define a component that can be included in the registry, typically placed within a structured directory like `registry/new-york/hello-world/hello-world.tsx`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/getting-started.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { Button } from "@/components/ui/button"

export function HelloWorld() {
  return <Button>Hello World</Button>
}
```

----------------------------------------

TITLE: Configure package.json for Registry Build Script
DESCRIPTION: Demonstrates adding a custom `registry:build` script to the `scripts` section of `package.json`. This script invokes the `shadcn build` command, automating the registry generation process.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/getting-started.mdx#_snippet_4

LANGUAGE: json
CODE:
```
{
  "scripts": {
    "registry:build": "shadcn build"
  }
}
```

----------------------------------------

TITLE: Register a Component Definition in registry.json
DESCRIPTION: Illustrates how to add a component's metadata and file path to the `items` array within `registry.json`. This step links the physical component file to its registry entry, specifying its name, type, title, description, and file location.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/getting-started.mdx#_snippet_2

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

----------------------------------------

TITLE: Initialize registry.json for Shadcn UI Component Registry
DESCRIPTION: Defines the foundational `registry.json` file structure, including schema, registry name, homepage, and an empty `items` array. This file is essential for the `shadcn` CLI to manage and build the component registry.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/getting-started.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    // ...
  ]
}
```

----------------------------------------

TITLE: Initialize registry.json for shadcn-ui component registry
DESCRIPTION: This JSON configuration file defines the schema, name, homepage, and an empty items array for a shadcn-ui component registry. It is a foundational step required when using the `shadcn` CLI to build your registry.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/getting-started.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    // ...
  ]
}
```

----------------------------------------

TITLE: Complete registry.json Example Structure
DESCRIPTION: Demonstrates the full structure of a `registry.json` file, including the schema reference, registry metadata (name, homepage), and an example of a component item within the `items` array.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/registry-json.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "shadcn",
  "homepage": "https://ui.shadcn.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

----------------------------------------

TITLE: Add a component definition to registry.json
DESCRIPTION: This `registry.json` snippet shows how to define a component item within the registry's `items` array. It includes the component's name, type, title, description, and the relative path to its source file, conforming to the registry item schema.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/getting-started.mdx#_snippet_3

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

----------------------------------------

TITLE: Execute Shadcn Registry Build Process
DESCRIPTION: Command to run the `registry:build` script defined in `package.json`. This initiates the `shadcn` CLI's build process, generating the necessary JSON files for the component registry.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/getting-started.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
npm run registry:build
```

----------------------------------------

TITLE: Complete registry.json Example Structure
DESCRIPTION: Demonstrates the full structure of a `registry.json` file, including the schema reference, registry metadata (name, homepage), and an example of a component item within the `items` array.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/registry-json.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "shadcn",
  "homepage": "https://ui.shadcn.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

----------------------------------------

TITLE: Add registry build script to package.json
DESCRIPTION: This snippet adds a `registry:build` script to your `package.json` file. This allows you to easily execute the `shadcn build` command by running `npm run registry:build` from your terminal.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/getting-started.mdx#_snippet_5

LANGUAGE: json
CODE:
```
{
  "scripts": {
    "registry:build": "shadcn build"
  }
}
```

----------------------------------------

TITLE: Install Shadcn CLI Canary Version via npm
DESCRIPTION: Command to install the `shadcn` command-line interface, specifically targeting the `canary` release. This version is necessary to access the `build` command for registry generation.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/getting-started.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
npm install shadcn@canary
```

----------------------------------------

TITLE: shadcn init Command Reference
DESCRIPTION: Comprehensive API documentation for the `shadcn init` command, detailing its arguments and options for project initialization.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/cli.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
Usage: shadcn init [options] [components...]

initialize your project and install dependencies

Arguments:
  components         the components to add or a url to the component.

Options:
  -y, --yes           skip confirmation prompt. (default: true)
  -d, --defaults,     use default configuration. (default: false)
  -f, --force         force overwrite of existing configuration. (default: false)
  -c, --cwd <cwd>     the working directory. defaults to the current directory. (default: "/Users/shadcn/Desktop")
  -s, --silent        mute output. (default: false)
  --src-dir           use the src directory when creating a new project. (default: false)
  --no-src-dir        do not use the src directory when creating a new project.
  --css-variables     use css variables for theming. (default: true)
  --no-css-variables  do not use css variables for theming.
  -h, --help          display help for command
```

----------------------------------------

TITLE: Example Block File Structure
DESCRIPTION: Shows an example file organization for a complex block, including a main page component, sub-components, hooks, and utility functions within its dedicated directory.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/blocks.mdx#_snippet_5

LANGUAGE: txt
CODE:
```
dashboard-01
└── page.tsx
└── components
    └── hello-world.tsx
    └── example-card.tsx
└── hooks
    └── use-hello-world.ts
└── lib
    └── format-date.ts
```

----------------------------------------

TITLE: Install Shadcn UI Registry Item via CLI
DESCRIPTION: This command demonstrates how to install a component from a local or remote shadcn UI registry using the `shadcn` CLI's `add` command. It specifies the URL of the registry item to be added to the project.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/getting-started.mdx#_snippet_7

LANGUAGE: bash
CODE:
```
npx shadcn@latest add http://localhost:3000/r/hello-world.json
```

----------------------------------------

TITLE: Complete registry-item.json schema example
DESCRIPTION: A comprehensive example demonstrating the full structure and typical properties of a `registry-item.json` file, including schema reference, name, type, title, description, file paths, CSS variables, and dependencies.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/registry-item-json.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "hello-world",
  "type": "registry:block",
  "title": "Hello World",
  "description": "A simple hello world component.",
  "files": [
    {
      "path": "registry/new-york/hello-world/hello-world.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/use-hello-world.ts",
      "type": "registry:hook"
    }
  ],
  "cssVars": {
    "theme": {
      "font-heading": "Poppins, sans-serif"
    },
    "light": {
      "brand": "20 14.3% 4.1%"
    },
    "dark": {
      "brand": "20 14.3% 4.1%"
    }
  }
}
```

----------------------------------------

TITLE: Install Shadcn UI Registry Item via CLI
DESCRIPTION: This command demonstrates how to install a component from a local or remote shadcn UI registry using the `shadcn` CLI's `add` command. It specifies the URL of the registry item to be added to the project.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/getting-started.mdx#_snippet_8

LANGUAGE: bash
CODE:
```
npx shadcn@latest add http://localhost:3000/r/hello-world.json
```

----------------------------------------

TITLE: SidebarProvider Component API Reference
DESCRIPTION: Detailed API documentation for the `SidebarProvider` component, which is essential for providing the sidebar context to other sidebar-related components. It supports both uncontrolled (`defaultOpen`) and controlled (`open`, `onOpenChange`) modes for managing the sidebar's open state.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/sidebar.mdx#_snippet_7

LANGUAGE: APIDOC
CODE:
```
SidebarProvider Component:
  Description: Provides the sidebar context to the Sidebar component. You should always wrap your application in a `SidebarProvider` component.
  Props:
    defaultOpen:
      Type: boolean
      Description: Default open state of the sidebar (uncontrolled).
    open:
      Type: boolean
      Description: Open state of the sidebar (controlled).
    onOpenChange:
      Type: (open: boolean) => void
      Description: Callback function that sets the open state of the sidebar (controlled).
```

----------------------------------------

TITLE: Start Development Server
DESCRIPTION: Starts the local development server for the `www` application, allowing live preview and testing of changes made to the blocks.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/blocks.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
pnpm www:dev
```

----------------------------------------

TITLE: Universal Registry Item for Multi-File Starter Template
DESCRIPTION: This example illustrates a universal registry item designed to install multiple files, such as those for a custom starter template. It demonstrates how to define multiple file targets within a single registry item, and also includes an optional 'dependencies' field.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_17

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "my-custom-start-template",
  "type": "registry:item",
  "dependencies": ["better-auth"],
  "files": [
    {
      "path": "/path/to/file-01.json",
      "type": "registry:file",
      "target": "~/file-01.json",
      "content": "..."
    },
    {
      "path": "/path/to/file-02.vue",
      "type": "registry:file",
      "target": "~/pages/file-02.vue",
      "content": "..."
    }
  ]
}
```

----------------------------------------

TITLE: Basic Tooltip usage example in TypeScript/React
DESCRIPTION: This example illustrates a fundamental implementation of the Tooltip component. It shows how to wrap a trigger element and provide content that will be displayed when the trigger is hovered over or focused.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/tooltip.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>
```

----------------------------------------

TITLE: Execute shadcn registry build script
DESCRIPTION: This command runs the `registry:build` script, which in turn executes the `shadcn build` command. This process generates the necessary registry JSON files, typically outputting them to the `public/r` directory.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/getting-started.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
npm run registry:build
```

----------------------------------------

TITLE: React Table Pagination API Methods
DESCRIPTION: API methods provided by `@tanstack/react-table` for controlling and querying pagination state. These methods allow programmatic navigation and checking of pagination capabilities.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/data-table.mdx#_snippet_10

LANGUAGE: APIDOC
CODE:
```
table.previousPage(): void
  - Navigates to the previous page of the table data.
  - Returns: void

table.nextPage(): void
  - Navigates to the next page of the table data.
  - Returns: void

table.getCanPreviousPage(): boolean
  - Checks if there is a previous page available.
  - Returns: boolean (true if a previous page exists, false otherwise)

table.getCanNextPage(): boolean
  - Checks if there is a next page available.
  - Returns: boolean (true if a next page exists, false otherwise)
```

----------------------------------------

TITLE: Start Development Server
DESCRIPTION: Starts the local development server for the UI project, enabling live preview and testing of components.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/blocks.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
pnpm www:dev
```

----------------------------------------

TITLE: Start Remix development server
DESCRIPTION: This command starts the Remix application in development mode. It enables live reloading and asset rebuilding on file changes, facilitating rapid development and immediate feedback on code modifications.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/packages/shadcn/test/fixtures/frameworks/remix-indie-stack/README.md#_snippet_3

LANGUAGE: sh
CODE:
```
npm run dev
```

----------------------------------------

TITLE: React Table Pagination API Methods
DESCRIPTION: API methods provided by `@tanstack/react-table` for controlling and querying pagination state. These methods allow programmatic navigation and checking of pagination capabilities.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/data-table.mdx#_snippet_10

LANGUAGE: APIDOC
CODE:
```
table.previousPage(): void
  - Navigates to the previous page of the table data.
  - Returns: void

table.nextPage(): void
  - Navigates to the next page of the table data.
  - Returns: void

table.getCanPreviousPage(): boolean
  - Checks if there is a previous page available.
  - Returns: boolean (true if a previous page exists, false otherwise)

table.getCanNextPage(): boolean
  - Checks if there is a next page available.
  - Returns: boolean (true if a next page exists, false otherwise)
```

----------------------------------------

TITLE: Install shadcn CLI canary version
DESCRIPTION: This command installs the `shadcn` command-line interface, specifically targeting the `canary` version. The `canary` version is necessary to access the `build` command, which is used for generating registry JSON files.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/getting-started.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
npm install shadcn@canary
```

----------------------------------------

TITLE: Example Usage of OpenInV0Button Component
DESCRIPTION: This snippet demonstrates how to integrate the `OpenInV0Button` component into a React application. It shows how to pass a specific URL to the component's `url` prop, which will then be used to construct the v0.dev API link for opening the registry item.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/open-in-v0.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
<OpenInV0Button url="https://example.com/r/hello-world.json" />
```

----------------------------------------

TITLE: SidebarProvider Component API Reference
DESCRIPTION: Detailed API documentation for the `SidebarProvider` component, which manages the open state of the sidebar. It supports both uncontrolled (`defaultOpen`) and controlled (`open`, `onOpenChange`) modes for managing sidebar visibility.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/sidebar.mdx#_snippet_6

LANGUAGE: APIDOC
CODE:
```
SidebarProvider Props:
- Name: `defaultOpen`
  Type: `boolean`
  Description: Default open state of the sidebar (uncontrolled).
- Name: `open`
  Type: `boolean`
  Description: Open state of the sidebar (controlled).
- Name: `onOpenChange`
  Type: `(open: boolean) => void`
  Description: Callback function that sets the open state of the sidebar when in controlled mode.
```

----------------------------------------

TITLE: shadcn add Command Reference
DESCRIPTION: Comprehensive API documentation for the `shadcn add` command, detailing its arguments and options for adding components.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/cli.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Usage: shadcn add [options] [components...]

add a component to your project

Arguments:
  components         the components to add or a url to the component.

Options:
  -y, --yes           skip confirmation prompt. (default: false)
  -o, --overwrite     overwrite existing files. (default: false)
  -c, --cwd <cwd>     the working directory. defaults to the current directory. (default: "/Users/shadcn/Desktop")
  -a, --all           add all available components (default: false)
  -p, --path <path>   the path to add the component to.
  -s, --silent        mute output. (default: false)
  --src-dir           use the src directory when creating a new project. (default: false)
  --no-src-dir        do not use the src directory when creating a new project.
  --css-variables     use css variables for theming. (default: true)
  --no-css-variables  do not use css variables for theming.
  -h, --help          display help for command
```

----------------------------------------

TITLE: Registry Item for Custom Cursor Python Rules
DESCRIPTION: This example demonstrates a shadcn/ui registry item configuration for installing custom Cursor rules specifically for Python. It defines a single file target within the user's Cursor rules directory.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_15

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "python-rules",
  "type": "registry:item",
  "files": [
    {
      "path": "/path/to/your/registry/default/custom-python.mdc",
      "type": "registry:file",
      "target": "~/.cursor/rules/custom-python.mdc",
      "content": "..."
    }
  ]
}
```

----------------------------------------

TITLE: Add simple custom utility to shadcn/ui
DESCRIPTION: This JSON configuration defines a custom registry item named 'custom-component'. It allows adding a simple custom CSS utility to the shadcn/ui styling system using `@utility`. This example defines a `content-auto` utility that sets `content-visibility` to `auto`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/examples.mdx#_snippet_10

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility content-auto": {
      "content-visibility": "auto"
    }
  }
}
```

----------------------------------------

TITLE: shadcn build Command Reference
DESCRIPTION: Comprehensive API documentation for the `shadcn build` command, detailing its arguments and options for generating registry files.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/cli.mdx#_snippet_6

LANGUAGE: APIDOC
CODE:
```
Usage: shadcn build [options] [registry]

build components for a shadcn registry

Arguments:
  registry             path to registry.json file (default: "./registry.json")

Options:
  -o, --output <path>  destination directory for json files (default: "./public/r")
  -c, --cwd <cwd>      the working directory. defaults to the current directory. (default:
                       "/Users/shadcn/Code/shadcn/ui/packages/shadcn")
  -h, --help           display help for command
```

----------------------------------------

TITLE: Define a Custom shadcn/ui Block
DESCRIPTION: This JSON configuration defines a custom `shadcn/ui` block named `login-01`. It includes a description and lists its `registryDependencies` such as `button`, `card`, `input`, and `label`. The `files` array specifies the components and pages that constitute this block, including their paths, content (truncated for brevity), types (`registry:page`, `registry:component`), and target locations within the project structure.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_4

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "login-01",
  "type": "registry:block",
  "description": "A simple login form.",
  "registryDependencies": ["button", "card", "input", "label"],
  "files": [
    {
      "path": "blocks/login-01/page.tsx",
      "content": "import { LoginForm } ...",
      "type": "registry:page",
      "target": "app/login/page.tsx"
    },
    {
      "path": "blocks/login-01/components/login-form.tsx",
      "content": "...",
      "type": "registry:component"
    }
  ]
}
```

----------------------------------------

TITLE: Subscribing to Carousel Events in React
DESCRIPTION: This example illustrates how to listen for specific events emitted by the carousel API instance. It uses a `useEffect` hook to ensure the event listener is attached only when the API is available, demonstrating a common pattern for reacting to carousel state changes like 'select'.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/carousel.mdx#_snippet_11

LANGUAGE: tsx
CODE:
```
import { type CarouselApi } from "@/components/ui/carousel"

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      // Do something on select.
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

----------------------------------------

TITLE: registry.json Schema Property Definitions
DESCRIPTION: Detailed specification of the properties available in the `registry.json` schema, including their types, descriptions, and usage examples.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/registry-json.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
registry.json Schema Definition:

Property: $schema
  Type: string
  Description: Specifies the JSON Schema URI that this registry.json file conforms to. This is used for validation and IDE auto-completion.
  Example: "https://ui.shadcn.com/schema/registry.json"

Property: name
  Type: string
  Description: The unique name of your custom component registry. This value is typically used for data attributes and other metadata within applications consuming the registry.
  Example: "acme"

Property: homepage
  Type: string (URL)
  Description: The URL of the registry's homepage. Similar to 'name', this is used for metadata and linking purposes.
  Example: "https://acme.com"

Property: items
  Type: array of objects (registry-item schema)
  Description: A collection of component definitions that constitute the registry. Each object in this array must adhere to the 'registry-item' schema specification.
  Example Structure for an item:
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  Reference: See the registry-item schema documentation for detailed structure of each item.
```

----------------------------------------

TITLE: Subscribing to Carousel Events in React
DESCRIPTION: This example illustrates how to listen for specific events emitted by the carousel API instance. It uses a `useEffect` hook to ensure the event listener is attached only when the API is available, demonstrating a common pattern for reacting to carousel state changes like 'select'.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/carousel.mdx#_snippet_11

LANGUAGE: tsx
CODE:
```
import { type CarouselApi } from "@/components/ui/carousel"

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      // Do something on select.
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

----------------------------------------

TITLE: Add functional custom utility to shadcn/ui
DESCRIPTION: This JSON configuration defines a custom registry item named 'custom-component'. It allows adding a functional custom CSS utility to the shadcn/ui styling system using `@utility`. This example defines a `tab-*` utility that sets `tab-size` based on a variable, enabling dynamic utility classes.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/examples.mdx#_snippet_12

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility tab-*": {
      "tab-size": "var(--tab-size-*)"
    }
  }
}
```

----------------------------------------

TITLE: registry.json Schema Property Definitions
DESCRIPTION: Detailed specification of the properties available in the `registry.json` schema, including their types, descriptions, and usage examples.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/registry-json.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
registry.json Schema Definition:

Property: $schema
  Type: string
  Description: Specifies the JSON Schema URI that this registry.json file conforms to. This is used for validation and IDE auto-completion.
  Example: "https://ui.shadcn.com/schema/registry.json"

Property: name
  Type: string
  Description: The unique name of your custom component registry. This value is typically used for data attributes and other metadata within applications consuming the registry.
  Example: "acme"

Property: homepage
  Type: string (URL)
  Description: The URL of the registry's homepage. Similar to 'name', this is used for metadata and linking purposes.
  Example: "https://acme.com"

Property: items
  Type: array of objects (registry-item schema)
  Description: A collection of component definitions that constitute the registry. Each object in this array must adhere to the 'registry-item' schema specification.
  Example Structure for an item:
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  Reference: See the registry-item schema documentation for detailed structure of each item.
```

----------------------------------------

TITLE: Basic Tooltip Component Usage Example in React
DESCRIPTION: This example demonstrates the fundamental structure for implementing a Tooltip. It wraps a `TooltipTrigger` (the element that activates the tooltip) and provides content within `TooltipContent`, all managed by a `TooltipProvider`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/tooltip.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

----------------------------------------

TITLE: Run initial project setup script
DESCRIPTION: This command executes the `setup` script defined in the project's `package.json`. It is typically used for installing dependencies, running database migrations, or performing other initial configuration tasks required before starting development.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/packages/shadcn/test/fixtures/frameworks/remix-indie-stack/README.md#_snippet_2

LANGUAGE: sh
CODE:
```
npm run setup
```

----------------------------------------

TITLE: Create a New shadcn/ui Style from Scratch
DESCRIPTION: This JSON configuration demonstrates how to define a completely new `shadcn/ui` style without extending the default framework, indicated by `"extends": "none"`. It includes new dependencies (`tailwind-merge`, `clsx`), integrates `shadcn/ui`'s `utils` registry item, and imports several remote components (`button`, `input`, `label`, `select`). The configuration also defines a comprehensive set of custom CSS variables (`main`, `bg`, `border`, `text`, `ring`) for both light and dark modes.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/examples.mdx#_snippet_1

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "extends": "none",
  "name": "new-style",
  "type": "registry:style",
  "dependencies": ["tailwind-merge", "clsx"],
  "registryDependencies": [
    "utils",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json",
    "https://example.com/r/select.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "main": "#88aaee",
      "bg": "#dfe5f2",
      "border": "#000",
      "text": "#000",
      "ring": "#000"
    },
    "dark": {
      "main": "#88aaee",
      "bg": "#272933",
      "border": "#000",
      "text": "#e6e6e6",
      "ring": "#fff"
    }
  }
}
```

----------------------------------------

TITLE: Running Local Documentation
DESCRIPTION: Command to start the local development server for the project's documentation. The documentation is located within the `www` workspace and is written using MDX, allowing contributors to preview changes before submission.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/CONTRIBUTING.md#_snippet_3

LANGUAGE: bash
CODE:
```
pnpm --filter=www dev
```

----------------------------------------

TITLE: Create a New shadcn/ui Style from Scratch
DESCRIPTION: This JSON configuration demonstrates how to define a completely new `shadcn/ui` style without extending the default framework, indicated by `"extends": "none"`. It includes new dependencies (`tailwind-merge`, `clsx`), integrates `shadcn/ui`'s `utils` registry item, and imports several remote components (`button`, `input`, `label`, `select`). The configuration also defines a comprehensive set of custom CSS variables (`main`, `bg`, `border`, `text`, `ring`) for both light and dark modes.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_1

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "extends": "none",
  "name": "new-style",
  "type": "registry:style",
  "dependencies": ["tailwind-merge", "clsx"],
  "registryDependencies": [
    "utils",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json",
    "https://example.com/r/select.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "main": "#88aaee",
      "bg": "#dfe5f2",
      "border": "#000",
      "text": "#000",
      "ring": "#000"
    },
    "dark": {
      "main": "#88aaee",
      "bg": "#272933",
      "border": "#000",
      "text": "#e6e6e6",
      "ring": "#fff"
    }
  }
}
```

----------------------------------------

TITLE: Define a Custom shadcn/ui Block
DESCRIPTION: This JSON configuration defines a custom `shadcn/ui` block named `login-01`. It includes a description and lists its `registryDependencies` such as `button`, `card`, `input`, and `label`. The `files` array specifies the components and pages that constitute this block, including their paths, content (truncated for brevity), types (`registry:page`, `registry:component`), and target locations within the project structure.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/examples.mdx#_snippet_4

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "login-01",
  "type": "registry:block",
  "description": "A simple login form.",
  "registryDependencies": ["button", "card", "input", "label"],
  "files": [
    {
      "path": "blocks/login-01/page.tsx",
      "content": "import { LoginForm } ...",
      "type": "registry:page",
      "target": "app/login/page.tsx"
    },
    {
      "path": "blocks/login-01/components/login-form.tsx",
      "content": "...",
      "type": "registry:component"
    }
  ]
}
```

----------------------------------------

TITLE: Registry Item for Custom ESLint Configuration
DESCRIPTION: This configuration shows how to create a universal registry item to install a custom ESLint configuration file. The item targets the standard .eslintrc.json file in the user's home directory.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_16

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "my-eslint-config",
  "type": "registry:item",
  "files": [
    {
      "path": "/path/to/your/registry/default/custom-eslint.json",
      "type": "registry:file",
      "target": "~/.eslintrc.json",
      "content": "..."
    }
  ]
}
```

----------------------------------------

TITLE: Configure Tailwind CSS to scan registry directories
DESCRIPTION: This configuration snippet for `tailwind.config.ts` ensures that Tailwind CSS correctly scans files within the `registry` directory for utility classes. This is essential for applying styles to components located in custom registry paths.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/getting-started.mdx#_snippet_2

LANGUAGE: ts
CODE:
```
// tailwind.config.ts
export default {
  content: ["./registry/**/*.{js,ts,jsx,tsx}"],
}
```

----------------------------------------

TITLE: Initial Repository Setup
DESCRIPTION: Instructions for setting up the shadcn/ui repository locally, including cloning the repository, navigating into its directory, creating a new Git branch for development, and installing all project dependencies using pnpm.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/CONTRIBUTING.md#_snippet_0

LANGUAGE: bash
CODE:
```
git clone https://github.com/your-username/ui.git
```

LANGUAGE: bash
CODE:
```
cd ui
```

LANGUAGE: bash
CODE:
```
git checkout -b my-new-branch
```

LANGUAGE: bash
CODE:
```
pnpm install
```

----------------------------------------

TITLE: useSidebar Hook API Reference
DESCRIPTION: Comprehensive API documentation for the `useSidebar` hook, detailing all available properties and their types. This hook provides essential state and functions for controlling sidebar behavior, including its expanded/collapsed state, mobile responsiveness, and open/close toggling.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/sidebar.mdx#_snippet_15

LANGUAGE: APIDOC
CODE:
```
useSidebar Hook Properties:

state: 'expanded' | 'collapsed'
  - Description: The current state of the sidebar.

open: boolean
  - Description: Whether the sidebar is open.

setOpen: (open: boolean) => void
  - Description: Sets the open state of the sidebar.

openMobile: boolean
  - Description: Whether the sidebar is open on mobile.

setOpenMobile: (open: boolean) => void
  - Description: Sets the open state of the sidebar on mobile.

isMobile: boolean
  - Description: Whether the sidebar is on mobile.

toggleSidebar: () => void
  - Description: Toggles the sidebar. Desktop and mobile.
```

----------------------------------------

TITLE: Example: Add Specific shadcn UI Component
DESCRIPTION: Demonstrates how to add a specific component, such as 'alert-dialog', to your project using the `shadcn add` command. This is a practical application of the component addition functionality.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/packages/shadcn/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npx shadcn add alert-dialog
```

----------------------------------------

TITLE: Accessing Carousel API and Tracking Slide Changes in React
DESCRIPTION: This snippet demonstrates how to obtain the carousel API instance using React's `useState` and `setApi` prop. It then uses `useEffect` to initialize slide count and current slide, and to subscribe to the 'select' event for real-time updates, enabling dynamic display of carousel progress.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/carousel.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
import { type CarouselApi } from "@/components/ui/carousel"

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

----------------------------------------

TITLE: Example for description property in registry-item.json
DESCRIPTION: Illustrates the `description` property, providing a longer, more detailed explanation of the registry item's purpose, functionality, or usage.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/registry-item-json.mdx#_snippet_5

LANGUAGE: json
CODE:
```
{
  "description": "A simple hello world component."
}
```

----------------------------------------

TITLE: v0.dev Registry Integration API Endpoint
DESCRIPTION: Describes the API endpoint for opening publicly accessible registry items directly within v0.dev. This allows external registries to provide a direct 'Open in v0' functionality, redirecting users to v0.dev with the specified item loaded. Note that the functionality does not support 'cssVars' and 'tailwind' properties.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/open-in-v0.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
Endpoint: GET https://v0.dev/chat/api/open?url=[URL]
  - Description: Opens a publicly accessible registry item URL in v0.dev.
  - Parameters:
    - url (string, required): The URL of the registry item to open. Must be publicly accessible.
  - Returns: Redirects the user to v0.dev with the specified item loaded.
  - Usage Example: https://v0.dev/chat/api/open?url=https://ui.shadcn.com/r/styles/new-york/login-01.json
  - Notes: The 'Open in v0' functionality does not support 'cssVars' and 'tailwind' properties for the opened item.
```

----------------------------------------

TITLE: Configure shadcn/ui components.json
DESCRIPTION: An example of the interactive prompt for configuring `components.json` during shadcn/ui initialization. This step allows users to define preferences like the base color for components.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/remix.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
Which color would you like to use as base color? › Neutral
```

----------------------------------------

TITLE: Update InputOTPSlot for Composition API
DESCRIPTION: This diff shows the necessary changes to `input-otp.tsx` to transition from a render props pattern to a composition-based API for `InputOTPSlot`. It updates imports and modifies the `InputOTPSlot` component to use `OTPInputContext` for accessing slot data, improving component reusability and maintainability.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/input-otp.mdx#_snippet_6

LANGUAGE: diff
CODE:
```
- import { OTPInput, SlotProps } from "input-otp"
+ import { OTPInput, OTPInputContext } from "input-otp"

 const InputOTPSlot = React.forwardRef<
   React.ElementRef<"div">,
-   SlotProps & React.ComponentPropsWithoutRef<"div">
-  >(({ char, hasFakeCaret, isActive, className, ...props }, ref) => {
+   React.ComponentPropsWithoutRef<"div"> & { index: number }
+  >(({ index, className, ...props }, ref) => {
+   const inputOTPContext = React.useContext(OTPInputContext)
+   const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
```

----------------------------------------

TITLE: Import app.css into TanStack Start Root Route
DESCRIPTION: Modifies `app/routes/__root.tsx` to import the `app.css` stylesheet as a URL and link it in the document's head, ensuring global styles are applied.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/tanstack.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import type { ReactNode } from "react"
import { Outlet, createRootRoute } from "@tanstack/react-router"
import { Meta, Scripts } from "@tanstack/start"

import appCss from "@/styles/app.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
})
```

----------------------------------------

TITLE: Accessing Carousel API and Tracking Slide Changes in React
DESCRIPTION: This snippet demonstrates how to obtain the carousel API instance using React's `useState` and `setApi` prop. It then uses `useEffect` to initialize slide count and current slide, and to subscribe to the 'select' event for real-time updates, enabling dynamic display of carousel progress.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/carousel.mdx#_snippet_10

LANGUAGE: tsx
CODE:
```
import { type CarouselApi } from "@/components/ui/carousel"

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

----------------------------------------

TITLE: Example React component using shadcn/ui Button
DESCRIPTION: Demonstrates how to import and use the `Button` component from shadcn/ui within a simple React functional component. This example shows a basic usage of the added component.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/gatsby.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

----------------------------------------

TITLE: shadcn/ui Registry Item JSON Schema Specification
DESCRIPTION: Detailed specification of the `registry-item.json` schema, outlining all supported properties, their types, descriptions, constraints, and examples for defining custom components and assets within the shadcn/ui registry system.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/registry-item-json.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
registry-item.json Schema:

Properties:
- $schema (string, optional): URL to the JSON Schema definition.
  Example: "https://ui.shadcn.com/schema/registry-item.json"

- name (string, required): Unique identifier for the registry item.
  Constraints: Must be unique within the registry.
  Example: "hello-world"

- type (string, required): Categorizes the registry item, influencing its resolution.
  Supported values:
    - "registry:block": For complex components with multiple files.
    - "registry:component": For simple components.
    - "registry:lib": For utility libraries.
    - "registry:hook": For React hooks.
    - "registry:ui": For UI components and single-file primitives.
    - "registry:page": For page or file-based routes.
    - "registry:file": For miscellaneous files.
    - "registry:style": For registry styles (e.g., "new-york").
    - "registry:theme": For themes.
    - "registry:item": For universal registry items.
  Example: "registry:block"

- title (string, required): Human-readable, short, and descriptive title for the item.
  Example: "Hello World"

- description (string, required): Detailed explanation of the registry item's purpose.
  Example: "A simple hello world component."

- files (array of objects, optional): List of files associated with the registry item.
  Each object has:
    - path (string): Relative path to the file.
    - type (string): Type of the file (e.g., "registry:component", "registry:hook").
  Example:
    [
      { "path": "registry/new-york/hello-world/hello-world.tsx", "type": "registry:component" },
      { "path": "registry/new-york/hello-world/use-hello-world.ts", "type": "registry:hook" }
    ]

- cssVars (object, optional): Defines CSS variables for the item.
  Structure:
    - theme (object): General theme variables (e.g., font-heading).
    - light (object): Light mode specific variables.
    - dark (object): Dark mode specific variables.
  Example:
    {
      "theme": { "font-heading": "Poppins, sans-serif" },
      "light": { "brand": "20 14.3% 4.1%" },
      "dark": { "brand": "20 14.3% 4.1%" }
    }

- author (string, optional): Specifies the author of the registry item.
  Example: "John Doe <john@doe.com>"

- dependencies (array of strings, optional): List of npm package dependencies.
  Format: "package-name" or "package-name@version".
  Example: ["@radix-ui/react-accordion", "zod", "lucide-react", "name@1.0.2"]

- registryDependencies (array of strings, optional): List of dependencies on other registry items.
  Format: Item name (for shadcn/ui items) or URL (for custom registry items).
  Example: ["button", "input", "select", "https://example.com/r/editor.json"]
  Note: CLI automatically resolves remote dependencies.
```

----------------------------------------

TITLE: registry-item.json Schema Property Definitions
DESCRIPTION: Detailed specification for individual properties within the `registry-item.json` schema, outlining their purpose, constraints, and usage examples for defining custom registry items.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/registry-item-json.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
$schema: string
  - Purpose: Specifies the JSON schema URL for validation.
  - Example: {"$schema": "https://ui.shadcn.com/schema/registry-item.json"}

name: string
  - Purpose: Unique identifier for the registry item.
  - Constraints: Must be unique for your registry.
  - Example: {"name": "hello-world"}

title: string
  - Purpose: Human-readable title for the registry item.
  - Constraints: Keep it short and descriptive.
  - Example: {"title": "Hello World"}

description: string
  - Purpose: Detailed description of the registry item.
  - Example: {"description": "A simple hello world component."}

type: string
  - Purpose: Defines the type of the registry item, influencing its resolution and target path.
  - Supported Types:
    - registry:block: Use for complex components with multiple files.
    - registry:component: Use for simple components.
    - registry:lib: Use for lib and utils.
    - registry:hook: Use for hooks.
    - registry:ui: Use for UI components and single-file primitives.
    - registry:page: Use for page or file-based routes.
    - registry:file: Use for miscellaneous files.
    - registry:style: Use for registry styles (e.g., `new-york`).
    - registry:theme: Use for themes.
  - Example: {"type": "registry:block"}

author: string
  - Purpose: Specifies the author of the registry item.
  - Constraints: Can be unique to the item or same as registry author.
  - Example: {"author": "John Doe <john@doe.com>"}

dependencies: array of string
  - Purpose: Specifies npm package dependencies required by the registry item.
  - Usage: Use `@version` to specify package versions.
  - Example: {"dependencies": ["@radix-ui/react-accordion", "zod", "lucide-react", "name@1.0.2"]}

registryDependencies: array of string
  - Purpose: Specifies dependencies on other registry items (shadcn/ui components or custom registry items).
  - Usage:
    - For shadcn/ui items: Use the item name (e.g., `['button', 'input', 'select']`).
    - For custom registry items: Use the URL of the registry item (e.g., `['https://example.com/r/editor.json']`).
  - Note: The CLI automatically resolves remote registry dependencies.
  - Example: {"registryDependencies": ["button", "input", "select", "https://example.com/r/editor.json"]}
```

----------------------------------------

TITLE: Open in v0 API Endpoint Reference
DESCRIPTION: This API endpoint allows opening a publicly accessible registry item directly within v0.dev. It accepts a URL query parameter pointing to the registry item's JSON file. Note that the 'Open in v0' functionality, when used with this endpoint, does not support `cssVars` and `tailwind` properties from the registry item.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/open-in-v0.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
GET https://v0.dev/chat/api/open?url=[URL]

Parameters:
  url (string, required): The publicly accessible URL of the registry item (e.g., a JSON file).

Example Usage:
  https://v0.dev/chat/api/open?url=https://ui.shadcn.com/r/styles/new-york/login-01.json
```

----------------------------------------

TITLE: Add custom base styles to shadcn/ui
DESCRIPTION: This JSON configuration defines a custom registry item named 'custom-style'. It allows adding custom CSS rules to the `@layer base` within the shadcn/ui styling system. This example sets custom font sizes for `h1` and `h2` elements, providing a way to define global base styles.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/examples.mdx#_snippet_8

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-style",
  "type": "registry:style",
  "css": {
    "@layer base": {
      "h1": {
        "font-size": "var(--text-2xl)"
      },
      "h2": {
        "font-size": "var(--text-xl)"
      }
    }
  }
}
```

----------------------------------------

TITLE: Define a Custom shadcn/ui Style Extension
DESCRIPTION: This JSON configuration defines a custom `shadcn/ui` style that extends the base framework. It specifies external dependencies like `@tabler/icons-react`, integrates existing `shadcn/ui` components (`login-01`, `calendar`), and imports a remote component (`editor`). Additionally, it sets a custom font (`Inter, sans-serif`) and defines a `brand` color for both light and dark themes using CSS variables.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "example-style",
  "type": "registry:style",
  "dependencies": ["@tabler/icons-react"],
  "registryDependencies": [
    "login-01",
    "calendar",
    "https://example.com/r/editor.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "brand": "20 14.3% 4.1%"
    },
    "dark": {
      "brand": "20 14.3% 4.1%"
    }
  }
}
```

----------------------------------------

TITLE: Add complex custom utility to shadcn/ui
DESCRIPTION: This JSON configuration defines a custom registry item named 'custom-component'. It allows adding a complex custom CSS utility to the shadcn/ui styling system using `@utility`. This example defines a `scrollbar-hidden` utility that hides the scrollbar using `&::-webkit-scrollbar`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/examples.mdx#_snippet_11

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility scrollbar-hidden": {
      "scrollbar-hidden": {
        "&::-webkit-scrollbar": {
          "display": "none"
        }
      }
    }
  }
}
```

----------------------------------------

TITLE: Basic Shadcn UI Pagination JSX Example
DESCRIPTION: Demonstrates a minimal JSX structure for rendering a pagination component with previous, next, a page link, and an ellipsis for omitted pages, showcasing the component's basic usage.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/pagination.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

----------------------------------------

TITLE: Add Custom Tailwind CSS Plugins to shadcn/ui
DESCRIPTION: This JSON configuration demonstrates how to include custom Tailwind CSS plugins, such as `@tailwindcss/typography` and a hypothetical `foo` plugin, within a shadcn/ui registry item. This extends the styling capabilities by integrating external or custom plugin functionalities into the project's design system.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_13

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-plugin",
  "type": "registry:component",
  "css": {
    "@plugin @tailwindcss/typography": {},
    "@plugin foo": {}
  }
}
```

----------------------------------------

TITLE: DataTable Row Model API Methods
DESCRIPTION: API methods for retrieving filtered and selected row models from a `DataTable` instance. These methods are crucial for displaying information about the table's current state, such as the number of selected or total filtered rows.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/data-table.mdx#_snippet_17

LANGUAGE: APIDOC
CODE:
```
table.getFilteredSelectedRowModel()
  - Returns: A row model containing only the rows that are currently selected and filtered.
  - Usage: Used to get the count of selected rows (e.g., `table.getFilteredSelectedRowModel().rows.length`).

table.getFilteredRowModel()
  - Returns: A row model containing all rows that pass the current filters.
  - Usage: Used to get the total count of filtered rows (e.g., `table.getFilteredRowModel().rows.length`).
```

----------------------------------------

TITLE: Define a Custom shadcn/ui Style Extension
DESCRIPTION: This JSON configuration defines a custom `shadcn/ui` style that extends the base framework. It specifies external dependencies like `@tabler/icons-react`, integrates existing `shadcn/ui` components (`login-01`, `calendar`), and imports a remote component (`editor`). Additionally, it sets a custom font (`Inter, sans-serif`) and defines a `brand` color for both light and dark themes using CSS variables.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/examples.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "example-style",
  "type": "registry:style",
  "dependencies": ["@tabler/icons-react"],
  "registryDependencies": [
    "login-01",
    "calendar",
    "https://example.com/r/editor.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "brand": "20 14.3% 4.1%"
    },
    "dark": {
      "brand": "20 14.3% 4.1%"
    }
  }
}
```

----------------------------------------

TITLE: Add custom component styles to shadcn/ui
DESCRIPTION: This JSON configuration defines a custom registry item named 'custom-card'. It allows adding custom CSS rules to the `@layer components` within the shadcn/ui styling system. This example defines styles for a 'card' component, including background color, border-radius, padding, and box-shadow, enabling custom component styling.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/examples.mdx#_snippet_9

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-card",
  "type": "registry:component",
  "css": {
    "@layer components": {
      "card": {
        "background-color": "var(--color-white)",
        "border-radius": "var(--rounded-lg)",
        "padding": "var(--spacing-6)",
        "box-shadow": "var(--shadow-xl)"
      }
    }
  }
}
```

----------------------------------------

TITLE: Render Button Linking to Legacy Docs in React
DESCRIPTION: This snippet demonstrates how to render a button component using shadcn/ui that links to the legacy documentation site. It utilizes the `asChild` prop to forward properties to the underlying `Link` component from Next.js or a similar routing library, and applies Tailwind CSS utility classes for styling.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/legacy.mdx#_snippet_0

LANGUAGE: JSX
CODE:
```
<Button asChild className="mt-6 no-underline" size="sm">
  <Link href="https://v3.shadcn.com" target="_blank">
    View the legacy docs
  </Link>
</Button>
```

----------------------------------------

TITLE: Install Tailwind CSS Dependencies
DESCRIPTION: Installs `tailwindcss` and its required PostCSS dependencies using npm for a TanStack Start project.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/tanstack.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install tailwindcss @tailwindcss/postcss postcss
```

----------------------------------------

TITLE: Create a new Remix Indie Stack project
DESCRIPTION: This command initializes a new Remix project using the 'indie-stack' template. It sets up the basic project structure and dependencies for a full-stack application, ready for development.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/packages/shadcn/test/fixtures/frameworks/remix-indie-stack/README.md#_snippet_0

LANGUAGE: sh
CODE:
```
npx create-remix@latest --template remix-run/indie-stack
```

----------------------------------------

TITLE: Initialize shadcn/ui project
DESCRIPTION: Runs the `npx shadcn@canary init` command. This command sets up the shadcn/ui project, creating a `components.json` file and configuring CSS variables within `app/styles/app.css`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/tanstack.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
npx shadcn@canary init
```

----------------------------------------

TITLE: Initialize shadcn/ui Project
DESCRIPTION: Executes the `shadcn` CLI initialization command to set up the project, which creates `components.json` and configures CSS variables inside `app/styles/app.css`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/tanstack.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
npx shadcn@canary init
```

----------------------------------------

TITLE: Basic Tabs component usage example in TSX
DESCRIPTION: This example demonstrates a fundamental implementation of the shadcn/ui Tabs component. It sets up two tab triggers ('Account' and 'Password') and their corresponding content panels, showing the basic structure for interactive tabbed navigation.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/tabs.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
```

----------------------------------------

TITLE: Define Payment Data Structure and Example Data
DESCRIPTION: Defines the TypeScript type for a 'Payment' object, outlining its properties like ID, amount, status, and email. It also provides an example array of 'payments' data that will be used to populate the table.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/data-table.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]
```

----------------------------------------

TITLE: Basic Dropdown Menu Usage Example in TSX
DESCRIPTION: This example illustrates the fundamental structure for implementing a Dropdown Menu in a React application using TSX. It includes a trigger to open the menu, a content area, a label, a separator, and several clickable menu items. This provides a basic template for creating interactive dropdowns.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/dropdown-menu.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

----------------------------------------

TITLE: Run End-to-End Tests with Cypress in Development
DESCRIPTION: This command starts the development server for the application and launches the Cypress client, enabling you to run end-to-end tests. Ensure the database is running in Docker as described in the project setup.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/packages/shadcn/test/fixtures/frameworks/remix-indie-stack/README.md#_snippet_10

LANGUAGE: sh
CODE:
```
npm run test:e2e:dev
```

----------------------------------------

TITLE: Import global CSS into TanStack Start root component
DESCRIPTION: Modifies the `app/routes/__root.tsx` file to import the `app.css` stylesheet. The stylesheet is then linked in the document's head section, ensuring global styles are applied.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/tanstack.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import type { ReactNode } from "react"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Meta, Scripts } from "@tanstack/start"

import appCss from "@/styles/app.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
})
```

----------------------------------------

TITLE: Define Simple CSS Utility Class for shadcn/ui
DESCRIPTION: This JSON configuration demonstrates how to define a simple CSS utility class, `content-auto`, using the `@utility` directive within a shadcn/ui registry item. This utility sets the `content-visibility` property to `auto`, providing a reusable style for content optimization and performance improvements.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_10

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility content-auto": {
      "content-visibility": "auto"
    }
  }
}
```

----------------------------------------

TITLE: Fetch Data for Sidebar Menu with SWR and React Query
DESCRIPTION: Illustrates how to integrate popular client-side data fetching libraries, SWR and React Query, to dynamically load content for a `SidebarMenu`. Both examples show handling loading states and rendering fetched project data.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/sidebar.mdx#_snippet_38

LANGUAGE: tsx
CODE:
```
function NavProjects() {
  const { data, isLoading } = useSWR("/api/projects", fetcher)

  if (isLoading) {
    return (
      <SidebarMenu>
        {Array.from({ length: 5 }).map((_, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuSkeleton showIcon />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    )
  }

  if (!data) {
    return ...
  }

  return (
    <SidebarMenu>
      {data.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

LANGUAGE: tsx
CODE:
```
function NavProjects() {
  const { data, isLoading } = useQuery()

  if (isLoading) {
    return (
      <SidebarMenu>
        {Array.from({ length: 5 }).map((_, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuSkeleton showIcon />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    )
  }

  if (!data) {
    return ...
  }

  return (
    <SidebarMenu>
      {data.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

----------------------------------------

TITLE: Add a shadcn/ui component
DESCRIPTION: Demonstrates how to add a specific shadcn/ui component, such as the `Button`, to your project using the `npx shadcn@canary add` command.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/tanstack.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
npx shadcn@canary add button
```

----------------------------------------

TITLE: Import and Use shadcn/ui Button Component
DESCRIPTION: Demonstrates how to import the `Button` component from `@/components/ui/button` and use it within a React component in `app/routes/index.tsx`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/tanstack.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
import { Button } from "@/components/ui/button"

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

----------------------------------------

TITLE: Define Payment Data Structure and Example Data
DESCRIPTION: Defines the TypeScript type for a 'Payment' object, outlining its properties like ID, amount, status, and email. It also provides an example array of 'payments' data that will be used to populate the table.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/data-table.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]
```

----------------------------------------

TITLE: Example for dependencies property in registry-item.json
DESCRIPTION: Illustrates the `dependencies` property, an array of strings listing external npm package dependencies required by the registry item, optionally with version specifications.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/registry-item-json.mdx#_snippet_8

LANGUAGE: json
CODE:
```
{
  "dependencies": [
    "@radix-ui/react-accordion",
    "zod",
    "lucide-react",
    "name@1.0.2"
  ]
}
```

----------------------------------------

TITLE: Illustrate project directory structure
DESCRIPTION: Illustrates a typical project directory structure for a monorepo setup, separating application code (`apps/web`) from shared UI components (`packages/ui`).
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/styleguide.mdx#_snippet_9

LANGUAGE: txt
CODE:
```
apps
└── web         # Your app goes here.
    ├── app
    │   └── page.tsx
    ├── components
    │   └── login-form.tsx
    ├── components.json
    └── package.json
packages
└── ui          # Your components and dependencies are installed here.
    ├── src
    │   ├── components
    │   │   └── button.tsx
    │   ├── hooks
    │   ├── lib
    │   │   └── utils.ts
    │   └── styles
    │       └── globals.css
    ├── components.json
    └── package.json
package.json
turbo.json
```

----------------------------------------

TITLE: Running Workspaces for Development
DESCRIPTION: Commands to start the development servers for specific workspaces within the shadcn/ui monorepo. This allows developers to run the main website (www) or the shadcn-ui package in development mode for local testing and feature implementation.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/CONTRIBUTING.md#_snippet_1

LANGUAGE: bash
CODE:
```
pnpm --filter=www dev
```

LANGUAGE: bash
CODE:
```
pnpm --filter=shadcn-ui dev
```

----------------------------------------

TITLE: Example for $schema property in registry-item.json
DESCRIPTION: Illustrates the `$schema` property, which links the `registry-item.json` file to its official JSON Schema definition for validation and auto-completion in development environments.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/registry-item-json.mdx#_snippet_2

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json"
}
```

----------------------------------------

TITLE: Basic Card Component Usage Example in TSX
DESCRIPTION: This example illustrates the fundamental structure of the shadcn/ui Card component in TSX. It demonstrates how to compose a card with a header (including a title and description), main content, and a footer using its dedicated sub-components for clear content organization.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/card.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

----------------------------------------

TITLE: Import Tailwind CSS into app.css
DESCRIPTION: Creates `app/styles/app.css` and imports the Tailwind CSS stylesheet using `@import`, specifying the source path relative to the current file.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/tanstack.mdx#_snippet_2

LANGUAGE: css
CODE:
```
@import "tailwindcss" source("../");
```

----------------------------------------

TITLE: Configure shadcn/ui Block Installation with Primitive Overrides
DESCRIPTION: This JSON configuration defines a custom registry item that installs the 'login-01' block from shadcn/ui and overrides its default 'button', 'input', and 'label' primitives with custom ones specified by external URLs. This allows for consistent styling and component usage across a project by pointing to custom component implementations.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_5

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-login",
  "type": "registry:block",
  "registryDependencies": [
    "login-01",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json"
  ]
}
```

----------------------------------------

TITLE: Use Floating UI hook with word highlighting
DESCRIPTION: Demonstrates the usage of the `useFloating` hook from `@floating-ui/react`, with an example of how to highlight specific words or characters within a code block.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/styleguide.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
import { useFloating } from "@floating-ui/react"

function MyComponent() {
  const { refs, floatingStyles } = useFloating()

  return (
    <>
      <div ref={refs.setReference} />
      <div ref={refs.setFloating} style={floatingStyles} />
    </>
  )
}
```

----------------------------------------

TITLE: SVG Path for TanStack Start Logo Icon
DESCRIPTION: Defines the SVG path data for the TanStack Start logo icon, used in UI components. This complex path describes the intricate geometric shape of the TanStack Start brand mark, suitable for scalable rendering.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/tailwind-v4.mdx#_snippet_1

LANGUAGE: SVG
CODE:
```
M6.93 13.688a.343.343 0 0 1 .468.132l.063.106c.48.851.98 1.66 1.5 2.426a35.65 35.65 0 0 0 2.074 2.742.345.345 0 0 1-.039.484l-.074.066c-2.543 2.223-4.191 2.665-4.953 1.333-.746-1.305-.477-3.672.808-7.11a.344.344 0 0 1 .153-.18ZM17.75 16.3a.34.34 0 0 1 .395.27l.02.1c.628 3.286.187 4.93-1.325 4.93-1.48 0-3.36-1.402-5.649-4.203a.327.327 0 0 1-.074-.222c0-.188.156-.34.344-.34h.121a32.984 32.984 0 0 0 2.809-.098c1.07-.086 2.191-.23 3.359-.437zm.871-6.977a.353.353 0 0 1 .445-.21l.102.034c3.262 1.11 4.504 2.332 3.719 3.664-.766 1.305-2.993 2.254-6.684 2.848a.362.362 0 0 1-.238-.047.343.343 0 0 1-.125-.476l.062-.106a34.07 34.07 0 0 0 1.367-2.523c.477-.989.93-2.051 1.352-3.184zM7.797 8.34a.362.362 0 0 1 .238.047.343.343 0 0 1 .125.476l-.062.106a34.088 34.088 0 0 0-1.367 2.523c-.477.988-.93 2.051-1.352 3.184a.353.353 0 0 1-.445.21l-.102-.034C1.57 13.742.328 12.52 1.113 11.188 1.88 9.883 4.106 8.934 7.797 8.34Zm5.281-3.984c2.543-2.223 4.192-2.664 4.953-1.332.746 1.304.477 3.671-.808 7.109a.344.344 0 0 1-.153.18.343.343 0 0 1-.468-.133l-.063-.106a34.64 34.64 0 0 0-1.5-2.426 35.65 35.65 0 0 0-2.074-2.742.345.345 0 0 1 .039-.484ZM7.285 2.274c1.48 0 3.364 1.402 5.649 4.203a.349.349 0 0 1 .078.218.348.348 0 0 1-.348.344l-.117-.004a34.584 34.584 0 0 0-2.809.102 35.54 35.54 0 0 0-3.363.437.343.343 0 0 1-.394-.273l-.02-.098c-.629-3.285-.188-4.93 1.324-4.93Zm2.871 5.812h3.688a.638.638 0 0 1 .55.316l1.848 3.22a.644.644 0 0 1 0 .628l-1.847 3.223a.638.638 0 0 1-.551.316h-3.688a.627.627 0 0 1-.547-.316L7.758 12.25a.644.644 0 0 1 0-.629L9.61 8.402a.627.627 0 0 1 .546-.316Zm3.23.793a.638.638 0 0 1 .552.316l1.39 2.
```

----------------------------------------

TITLE: Example for registryDependencies property in registry-item.json
DESCRIPTION: Demonstrates the `registryDependencies` property, an array of strings specifying dependencies on other items within the shadcn/ui registry or custom registries, referenced by name or URL.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/registry-item-json.mdx#_snippet_9

LANGUAGE: json
CODE:
```
{
  "registryDependencies": [
    "button",
    "input",
    "select",
    "https://example.com/r/editor.json"
  ]
}
```

----------------------------------------

TITLE: Fetch Data for Sidebar Menu with React Server Components
DESCRIPTION: Provides a comprehensive example of populating a `SidebarMenu` using React Server Components. It includes a skeleton component for loading states, a server component for data fetching, and demonstrates integration with `React.Suspense` for a smooth user experience.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/sidebar.mdx#_snippet_37

LANGUAGE: tsx
CODE:
```
function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

LANGUAGE: tsx
CODE:
```
async function NavProjects() {
  const projects = await fetchProjects()

  return (
    <SidebarMenu>
      {projects.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

LANGUAGE: tsx
CODE:
```
function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <React.Suspense fallback={<NavProjectsSkeleton />}>
              <NavProjects />
            </React.Suspense>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
```

----------------------------------------

TITLE: Define Functional CSS Utility Class for shadcn/ui
DESCRIPTION: This JSON configuration shows how to define a functional CSS utility class, `tab-*`, using the `@utility` directive within a shadcn/ui registry item. This allows for dynamic utility classes where the asterisk acts as a placeholder for a variable, enabling flexible styling based on custom properties.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_12

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility tab-*": {
      "tab-size": "var(--tab-size-*)"
    }
  }
}
```

----------------------------------------

TITLE: Initialize shadcn/ui project
DESCRIPTION: Initializes a new shadcn/ui project, setting up necessary configurations and files for component management.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/styleguide.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npx shadcn@latest init
```

----------------------------------------

TITLE: Import and Use shadcn/ui Button in Next.js
DESCRIPTION: This TypeScript React (TSX) example demonstrates how to import the 'Button' component from shadcn/ui and render it within a Next.js page component.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/next.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

----------------------------------------

TITLE: Import and use shadcn/ui Button component in React
DESCRIPTION: Illustrates how to import the `Button` component from the shadcn/ui library and integrate it into a React functional component for rendering in the UI.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/tanstack.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
import { Button } from "@/components/ui/button"

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

----------------------------------------

TITLE: Add shadcn/ui Button Component
DESCRIPTION: Uses the `shadcn` CLI to add the `Button` component to the project, making it available for import and use in your application.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/tanstack.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
npx shadcn@canary add button
```

----------------------------------------

TITLE: Initialize Remix project and Git repository
DESCRIPTION: These commands perform the initial setup for a newly created Remix project. `remix init` runs the stack's initialization script, which might configure project-specific settings, and the Git commands set up version control for the project.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/packages/shadcn/test/fixtures/frameworks/remix-indie-stack/README.md#_snippet_1

LANGUAGE: sh
CODE:
```
npx remix init
git init # if you haven't already
git add .
git commit -m "Initialize project"
```

----------------------------------------

TITLE: Basic Dialog component usage in React
DESCRIPTION: Demonstrates the fundamental structure of a Dialog component, including a trigger to open it and content with a header, title, and description. This provides a basic, functional dialog example.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/dialog.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

----------------------------------------

TITLE: Use Floating UI hook with line highlighting
DESCRIPTION: Demonstrates the usage of the `useFloating` hook from `@floating-ui/react` to position elements, with an example of how to highlight specific lines in a code block.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/styleguide.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
import { useFloating } from "@floating-ui/react"

function MyComponent() {
  const { refs, floatingStyles } = useFloating()

  return (
    <>
      <div ref={refs.setReference} />
      <div ref={refs.setFloating} style={floatingStyles} />
    </>
  )
}
```

----------------------------------------

TITLE: Example for name property in registry-item.json
DESCRIPTION: Demonstrates the `name` property, a unique string identifier for the registry item. This name is crucial for referencing the item within the registry.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/registry-item-json.mdx#_snippet_3

LANGUAGE: json
CODE:
```
{
  "name": "hello-world"
}
```

----------------------------------------

TITLE: Basic Drawer Component Usage in React
DESCRIPTION: This example shows the fundamental structure for implementing a Drawer component. It includes a trigger to open the drawer, and content with a header, title, description, footer, and action buttons.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/drawer.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

----------------------------------------

TITLE: Create Fly.io Applications for Production and Staging
DESCRIPTION: These commands create two separate applications on Fly.io, one for the production environment and another for staging. It is crucial that the app names match the 'app' setting in the 'fly.toml' file for successful deployments.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/packages/shadcn/test/fixtures/frameworks/remix-indie-stack/README.md#_snippet_5

LANGUAGE: sh
CODE:
```
fly apps create indie-stack-template
```

LANGUAGE: sh
CODE:
```
fly apps create indie-stack-template-staging
```

----------------------------------------

TITLE: Example `components.json` for Monorepo Workspaces
DESCRIPTION: These JSON configuration files define schema, style, RSC/TSX settings, Tailwind CSS configuration, icon library, and crucial aliases for both the application workspace (`apps/web`) and the shared UI package workspace (`packages/ui`). Proper alias definition is essential for correct component, hook, and utility imports across the monorepo.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/monorepo.mdx#_snippet_5

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "../../packages/ui/src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "hooks": "@/hooks",
    "lib": "@/lib",
    "utils": "@workspace/ui/lib/utils",
    "ui": "@workspace/ui/components"
  }
}
```

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@workspace/ui/components",
    "utils": "@workspace/ui/lib/utils",
    "hooks": "@workspace/ui/hooks",
    "lib": "@workspace/ui/lib",
    "ui": "@workspace/ui/components"
  }
}
```

----------------------------------------

TITLE: API Reference for useSidebar Hook Properties and Methods
DESCRIPTION: This section details the properties and methods exposed by the `useSidebar` hook. It includes state variables like `state`, `open`, `openMobile`, and `isMobile`, along with functions such as `setOpen`, `setOpenMobile`, and `toggleSidebar` for programmatic control of the sidebar's behavior.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/sidebar.mdx#_snippet_16

LANGUAGE: APIDOC
CODE:
```
useSidebar Hook Properties:

state: "expanded" | "collapsed"
  - Description: The current state of the sidebar.

open: boolean
  - Description: Whether the sidebar is open.

setOpen: (open: boolean) => void
  - Description: Sets the open state of the sidebar.

openMobile: boolean
  - Description: Whether the sidebar is open on mobile.

setOpenMobile: (open: boolean) => void
  - Description: Sets the open state of the sidebar on mobile.

isMobile: boolean
  - Description: Whether the sidebar is on mobile.

toggleSidebar: () => void
  - Description: Toggles the sidebar. Desktop and mobile.
```

----------------------------------------

TITLE: Import and use shadcn/ui Button component
DESCRIPTION: Demonstrates how to import and render the `Button` component from `shadcn/ui` within a React application. This example shows basic usage within `src/App.tsx`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/vite.mdx#_snippet_9

LANGUAGE: tsx
CODE:
```
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}

export default App
```

----------------------------------------

TITLE: Example for title property in registry-item.json
DESCRIPTION: Shows the `title` property, a human-readable, short, and descriptive string used for displaying the registry item in user interfaces.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/registry-item-json.mdx#_snippet_4

LANGUAGE: json
CODE:
```
{
  "title": "Hello World"
}
```

----------------------------------------

TITLE: Add shadcn/ui components to a Laravel project
DESCRIPTION: Use the `npx shadcn@latest add` command to integrate specific shadcn/ui components into your project. This example adds the `Switch` component, placing it in `resources/js/components/ui/switch.tsx`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/laravel.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npx shadcn@latest add switch
```

----------------------------------------

TITLE: Example Usage of FormField with React Hook Form
DESCRIPTION: This example demonstrates how to integrate `FormField` with `react-hook-form` by passing the `control` object and defining a `name`. It shows rendering a simple `Input` component for a username field, along with associated label, description, and message components, showcasing a practical application of the form structure.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/form.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const form = useForm()

<FormField
  control={form.control}
  name="username"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input placeholder="shadcn" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
```

----------------------------------------

TITLE: Import Tailwind CSS into application styles
DESCRIPTION: Creates an `app.css` file within the `app/styles` directory. This file imports the Tailwind CSS framework, making its utility classes available throughout the application.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/tanstack.mdx#_snippet_2

LANGUAGE: css
CODE:
```
@import "tailwindcss" source("../");
```

----------------------------------------

TITLE: Fetch data for SidebarMenu using SWR in TSX
DESCRIPTION: Provides an example of fetching project data for a `SidebarMenu` using the SWR library. It demonstrates how to handle loading states by displaying a skeleton UI and then rendering the fetched data once available.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/sidebar.mdx#_snippet_39

LANGUAGE: tsx
CODE:
```
function NavProjects() {
  const { data, isLoading } = useSWR("/api/projects", fetcher)

  if (isLoading) {
    return (
      <SidebarMenu>
        {Array.from({ length: 5 }).map((_, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuSkeleton showIcon />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    )
  }

  if (!data) {
    return ...
  }

  return (
    <SidebarMenu>
      {data.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

----------------------------------------

TITLE: Configure Gatsby project setup questions
DESCRIPTION: Illustrates the interactive prompts encountered during the Gatsby project creation process, guiding the user to select options such as project name, TypeScript, and Tailwind CSS for styling.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/gatsby.mdx#_snippet_1

LANGUAGE: txt
CODE:
```
✔ What would you like to call your site?
· your-app-name
✔ What would you like to name the folder where your site will be created?
· your-app-name
✔ Will you be using JavaScript or TypeScript?
· TypeScript
✔ Will you be using a CMS?
· Choose whatever you want
✔ Would you like to install a styling system?
· Tailwind CSS
✔ Would you like to install additional features with other plugins?
· Choose whatever you want
✔ Shall we do this? (Y/n) · Yes
```

----------------------------------------

TITLE: Example for type property in registry-item.json
DESCRIPTION: Demonstrates the `type` property, which categorizes the registry item (e.g., `registry:block`, `registry:component`, `registry:hook`) and determines its resolution behavior.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/registry-item-json.mdx#_snippet_6

LANGUAGE: json
CODE:
```
{
  "type": "registry:block"
}
```

----------------------------------------

TITLE: Implement Sidebar with Dynamic Menu Items
DESCRIPTION: This snippet demonstrates how to populate the `AppSidebar` with dynamic menu items using `SidebarMenu`, `SidebarMenuButton`, and `SidebarMenuItem`. It includes an example array of menu items with icons and URLs, rendered within `SidebarGroup` and `SidebarGroupContent`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/sidebar.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
```

----------------------------------------

TITLE: Build a Dynamic Sidebar Menu for Project Listings in Shadcn UI
DESCRIPTION: Provides an example of building a dynamic navigation menu within a `SidebarGroup` using `SidebarMenu`, `SidebarMenuItem`, and `SidebarMenuButton`. It demonstrates iterating over data to render a list of clickable items, like projects.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/sidebar.mdx#_snippet_22

LANGUAGE: tsx
CODE:
```
<Sidebar>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {projects.map((project) => (
            <SidebarMenuItem key={project.name}>
              <SidebarMenuButton asChild>
                <a href={project.url}>
                  <project.icon />
                  <span>{project.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  </SidebarContent>
</Sidebar>
```

----------------------------------------

TITLE: Basic Radio Group Component Usage Example
DESCRIPTION: This example illustrates how to render a basic Radio Group with two selectable options. It utilizes the `RadioGroup`, `RadioGroupItem`, and `Label` components, setting a default selected value for initial state.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/radio-group.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>
```

----------------------------------------

TITLE: Rendering Dynamic Items in SidebarMenu
DESCRIPTION: Provides an example of using `SidebarMenu` within a `SidebarGroup` to render a dynamic list of items, such as projects. It demonstrates mapping over an array to create `SidebarMenuItem` components, each containing a `SidebarMenuButton` that acts as a link.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/sidebar.mdx#_snippet_23

LANGUAGE: tsx
CODE:
```
<Sidebar>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {projects.map((project) => (
            <SidebarMenuItem key={project.name}>
              <SidebarMenuButton asChild>
                <a href={project.url}>
                  <project.icon />
                  <span>{project.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  </SidebarContent>
</Sidebar>
```

----------------------------------------

TITLE: Install Tailwind CSS dependencies
DESCRIPTION: Installs `tailwindcss`, `@tailwindcss/postcss`, and `postcss` using npm, which are necessary for integrating Tailwind CSS into the project.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/tanstack.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install tailwindcss @tailwindcss/postcss postcss
```

----------------------------------------

TITLE: Install shadcn/ui block and override primitives
DESCRIPTION: This JSON configuration defines a custom registry item named 'custom-login'. It installs the 'login-01' block from the shadcn/ui registry and overrides its default 'button', 'input', and 'label' primitives with custom ones specified by external URLs. This allows for consistent styling across components.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/examples.mdx#_snippet_5

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-login",
  "type": "registry:block",
  "registryDependencies": [
    "login-01",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json"
  ]
}
```

----------------------------------------

TITLE: Configure TypeScript Path Aliases
DESCRIPTION: Updates the `tsconfig.json` file to add `baseUrl` and `paths` configurations, enabling `@/*` aliases to resolve to `./app/*` for cleaner module imports.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/tanstack.mdx#_snippet_4

LANGUAGE: ts
CODE:
```
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "Bundler",
    "module": "ESNext",
    "target": "ES2022",
    "skipLibCheck": true,
    "strictNullChecks": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./app/*"]
    }
  }
}
```

----------------------------------------

TITLE: Define Component-Specific CSS Styles for shadcn/ui
DESCRIPTION: This JSON configuration defines component-specific CSS styles using the `@layer components` directive for a 'card' component within a shadcn/ui registry item. It sets properties like background color, border-radius, padding, and box-shadow using custom CSS variables, promoting consistent component styling and reusability.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_9

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-card",
  "type": "registry:component",
  "css": {
    "@layer components": {
      "card": {
        "background-color": "var(--color-white)",
        "border-radius": "var(--rounded-lg)",
        "padding": "var(--spacing-6)",
        "box-shadow": "var(--shadow-xl)"
      }
    }
  }
}
```

----------------------------------------

TITLE: Example registry-item.json Schema Definition
DESCRIPTION: Illustrates a complete `registry-item.json` file structure, defining a custom registry item with properties like name, type, title, description, associated files, and CSS variables. This serves as a template for creating new registry entries.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/registry-item-json.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "hello-world",
  "type": "registry:block",
  "title": "Hello World",
  "description": "A simple hello world component.",
  "files": [
    {
      "path": "registry/new-york/hello-world/hello-world.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/use-hello-world.ts",
      "type": "registry:hook"
    }
  ],
  "cssVars": {
    "theme": {
      "font-heading": "Poppins, sans-serif"
    },
    "light": {
      "brand": "20 14.3% 4.1%"
    },
    "dark": {
      "brand": "20 14.3% 4.1%"
    }
  }
}
```

----------------------------------------

TITLE: Provide Installation Documentation for shadcn-ui Registry Items
DESCRIPTION: The `docs` property allows developers to include custom documentation or messages that will be displayed when the registry item is installed via the CLI. This is useful for providing important setup instructions, environment variable requirements, or any other post-installation guidance. It ensures users receive immediate, context-specific information.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/registry-item-json.mdx#_snippet_6

LANGUAGE: JSON
CODE:
```
{
  "docs": "Remember to add the FOO_BAR environment variable to your .env file."
}
```

----------------------------------------

TITLE: Implementing SidebarFooter with User Dropdown (React/TypeScript)
DESCRIPTION: Demonstrates the integration of the `SidebarFooter` component to add a sticky footer to a sidebar. This example includes a `DropdownMenu` for user-related actions (Account, Billing, Sign out), showing how to structure interactive elements at the bottom of the sidebar.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/sidebar.mdx#_snippet_17

LANGUAGE: tsx
CODE:
```
export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent />
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
```

----------------------------------------

TITLE: Import toast Function for Sonner
DESCRIPTION: Imports the `toast` function from the `sonner` library, which is the primary API for creating and displaying toast notifications in your React components.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/sonner.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import { toast } from "sonner"
```

----------------------------------------

TITLE: Define a Custom shadcn/ui Theme
DESCRIPTION: This JSON configuration defines a custom `shadcn/ui` theme. It specifies a comprehensive set of CSS variables for `background`, `foreground`, `primary`, `primary-foreground`, `ring`, `sidebar-primary`, `sidebar-primary-foreground`, and `sidebar-ring` for both light and dark modes, using `oklch` color values. This allows for complete customization of the UI's color palette.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_2

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "light": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.546 0.245 262.881)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.746 0.16 232.661)",
      "sidebar-primary": "oklch(0.546 0.245 262.881)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.746 0.16 232.661)"
    },
    "dark": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.707 0.165 254.624)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.707 0.165 254.624)",
      "sidebar-primary": "oklch(0.707 0.165 254.624)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.707 0.165 254.624)"
    }
  }
}
```

----------------------------------------

TITLE: shadcn/ui components.json Configuration Structure
DESCRIPTION: Comprehensive documentation for the `components.json` file, detailing all available properties and their usage for configuring shadcn/ui components within a project. This includes settings for schema validation, styling, Tailwind CSS integration, React Server Components, TypeScript/JavaScript preference, and path aliases.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/components-json.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
components.json Configuration:

  $schema: string
    - Description: Link to the JSON Schema for validation of the components.json file.
    - Example: "https://ui.shadcn.com/schema.json"

  style: "new-york"
    - Description: Defines the style preset for your components. This setting cannot be changed after initialization.
    - Example: "new-york"

  tailwind: object
    - Description: Configuration settings related to Tailwind CSS integration within your project.
    - Properties:
      config: string | "tailwind.config.js" | "tailwind.config.ts"
        - Description: Path to your tailwind.config.js or tailwind.config.ts file. For Tailwind CSS v4, this should be left blank.
        - Example: "tailwind.config.js"
      css: string
        - Description: Path to the CSS file where Tailwind CSS is imported into your project.
        - Example: "styles/global.css"
      baseColor: "gray" | "neutral" | "slate" | "stone" | "zinc"
        - Description: Used to generate the default color palette for components. This setting cannot be changed after initialization.
        - Example: "gray"
      cssVariables: boolean
        - Description: Determines whether to use CSS variables (true) or Tailwind CSS utility classes (false) for theming. This setting cannot be changed after initialization.
        - Example: true
      prefix: string
        - Description: The prefix to apply to Tailwind CSS utility classes for components.
        - Example: "tw-"

  rsc: boolean
    - Description: Flag to enable support for React Server Components. When true, the CLI automatically adds a `use client` directive to client components.
    - Example: true

  tsx: boolean
    - Description: Determines whether components are generated as TypeScript (.tsx) or JavaScript (.jsx) files.
    - Example: true

  aliases: object
    - Description: Path aliases used by the CLI to correctly place generated components based on your tsconfig.json or jsconfig.json paths.
    - Properties:
      utils: string
        - Description: Import alias for utility functions.
        - Example: "@/lib/utils"
      components: string
        - Description: Import alias for general components.
        - Example: "@/components"
      ui: string
        - Description: Import alias for `ui` components, determining their installation directory.
        - Example: "@/app/ui"
      lib: string
        - Description: Import alias for `lib` functions (e.g., format-date, generate-id).
        - Example: "@/lib"
      hooks: string
        - Description: Import alias for `hooks` (e.g., use-media-query, use-toast).
        - Example: "@/hooks"
```

----------------------------------------

TITLE: Example for author property in registry-item.json
DESCRIPTION: Shows the `author` property, an optional string field used to specify the creator or maintainer of the registry item, often including an email address.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/registry-item-json.mdx#_snippet_7

LANGUAGE: json
CODE:
```
{
  "author": "John Doe <john@doe.com>"
}
```

----------------------------------------

TITLE: Define a Custom shadcn/ui Theme
DESCRIPTION: This JSON configuration defines a custom `shadcn/ui` theme. It specifies a comprehensive set of CSS variables for `background`, `foreground`, `primary`, `primary-foreground`, `ring`, `sidebar-primary`, `sidebar-primary-foreground`, and `sidebar-ring` for both light and dark modes, using `oklch` color values. This allows for complete customization of the UI's color palette.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/examples.mdx#_snippet_2

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "light": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.546 0.245 262.881)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.746 0.16 232.661)",
      "sidebar-primary": "oklch(0.546 0.245 262.881)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.746 0.16 232.661)"
    },
    "dark": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.707 0.165 254.624)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.707 0.165 254.624)",
      "sidebar-primary": "oklch(0.707 0.165 254.624)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.707 0.165 254.624)"
    }
  }
}
```

----------------------------------------

TITLE: TanStack Start Icon SVG Path Definition
DESCRIPTION: SVG path data for the TanStack Start icon, used in UI components to represent the TanStack ecosystem. This path defines the complex geometric shape of the icon.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/tailwind-v4.mdx#_snippet_1

LANGUAGE: SVG Path
CODE:
```
M6.93 13.688a.343.343 0 0 1 .468.132l.063.106c.48.851.98 1.66 1.5 2.426a35.65 35.65 0 0 0 2.074 2.742.345.345 0 0 1-.039.484l-.074.066c-2.543 2.223-4.191 2.665-4.953 1.333-.746-1.305-.477-3.672.808-7.11a.344.344 0 0 1 .153-.18ZM17.75 16.3a.34.34 0 0 1 .395.27l.02.1c.628 3.286.187 4.93-1.325 4.93-1.48 0-3.36-1.402-5.649-4.203a.327.327 0 0 1-.074-.222c0-.188.156-.34.344-.34h.121a32.984 32.984 0 0 0 2.809-.098c1.07-.086 2.191-.23 3.359-.437zm.871-6.977a.353.353 0 0 1 .445-.21l.102.034c3.262 1.11 4.504 2.332 3.719 3.664-.766 1.305-2.993 2.254-6.684 2.848a.362.362 0 0 1-.238-.047.343.343 0 0 1-.125-.476l.062-.106a34.07 34.07 0 0 0 1.367-2.523c.477-.989.93-2.051 1.352-3.184zM7.797 8.34a.362.362 0 0 1 .238.047.343.343 0 0 1 .125.476l-.062.106a34.088 34.088 0 0 0-1.367 2.523c-.477.988-.93 2.051-1.352 3.184a.353.353 0 0 1-.445.21l-.102-.034C1.57 13.742.328 12.52 1.113 11.188 1.88 9.883 4.106 8.934 7.797 8.34Zm5.281-3.984c2.543-2.223 4.192-2.664 4.953-1.332.746 1.304.477 3.671-.808 7.109a.344.344 0 0 1-.153.18.343.343 0 0 1-.468-.133l-.063-.106a34.64 34.64 0 0 0-1.5-2.426 35.65 35.65 0 0 0-2.074-2.742.345.345 0 0 1 .039-.484ZM7.285 2.274c1.48 0 3.364 1.402 5.649 4.203a.349.349 0 0 1 .078.218.348.348 0 0 1-.348.344l-.117-.004a34.584 34.584 0 0 0-2.809.102 35.54 35.54 0 0 0-3.363.437.343.343 0 0 1-.394-.273l-.02-.098c-.629-3.285-.188-4.93 1.324-4.93Zm2.871 5.812h3.688a.638.638 0 0 1 .55.316l1.848 3.22a.644.644 0 0 1 0 .628l-1.847 3.223a.638.638 0 0 1-.551.316h-3.688a.627.627 0 0 1-.547-.316L7.758 12.25a.644.644 0 0 1 0-.629L9.61 8.402a.627.627 0 0 1 .546-.316Zm3.23.793a.638.638 0 0 1 .552.316l1.39 2.426a.644.644 0 0 1 0 .629l-1.39 2
```

----------------------------------------

TITLE: Define Base CSS Styles for shadcn/ui Registry Items
DESCRIPTION: This JSON configuration specifies base CSS styles using the `@layer base` directive within a shadcn/ui registry item. It demonstrates how to set global styles for HTML elements like `h1` and `h2` by referencing custom CSS variables for font sizes, ensuring consistent typography across the application.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_8

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-style",
  "type": "registry:style",
  "css": {
    "@layer base": {
      "h1": {
        "font-size": "var(--text-2xl)"
      },
      "h2": {
        "font-size": "var(--text-xl)"
      }
    }
  }
}
```

----------------------------------------

TITLE: Configure TypeScript Path Aliases
DESCRIPTION: Configures path aliases in `tsconfig.json` to simplify module imports. The example sets up an `@/*` alias mapping to the project root, allowing for absolute imports like `@/components`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/manual.mdx#_snippet_1

LANGUAGE: json
CODE:
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

----------------------------------------

TITLE: Install next-themes Package
DESCRIPTION: Start by installing the `next-themes` package using npm. This package provides the necessary utilities for implementing dark mode functionality in a Next.js application.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/dark-mode/next.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install next-themes
```

----------------------------------------

TITLE: Create a Basic Bar Chart Component with Recharts and shadcn/ui
DESCRIPTION: This example demonstrates how to create a basic bar chart component using Recharts and shadcn/ui's `ChartContainer` and `ChartTooltipContent`. It shows the essential imports and the structural setup for rendering a simple bar chart with custom components.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/chart.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { Bar, BarChart } from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/charts"

export function MyChart() {
  return (
    <ChartContainer>
      <BarChart data={data}>
        <Bar dataKey="value" />
        <ChartTooltip content={<ChartTooltipContent />} />
      </BarChart>
    </ChartContainer>
  )
}
```

----------------------------------------

TITLE: Configure PostCSS for Tailwind CSS
DESCRIPTION: Creates `postcss.config.ts` at the project root to configure PostCSS plugins, specifically enabling `@tailwindcss/postcss` for processing CSS.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/tanstack.mdx#_snippet_1

LANGUAGE: ts
CODE:
```
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
```

----------------------------------------

TITLE: Use shadcn/ui Button component in Remix
DESCRIPTION: Demonstrates how to import and use the `Button` component from shadcn/ui within a Remix route component. This example shows a basic usage of the component in a JSX context.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/remix.mdx#_snippet_8

LANGUAGE: tsx
CODE:
```
import { Button } from "~/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

----------------------------------------

TITLE: Configure TypeScript Path Aliases
DESCRIPTION: Configures path aliases in `tsconfig.json` to simplify module imports. The example sets up an `@/*` alias mapping to the project root, allowing for absolute imports like `@/components`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/manual.mdx#_snippet_1

LANGUAGE: json
CODE:
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

----------------------------------------

TITLE: Import shadcn/ui Components, Hooks, and Utilities in Monorepo
DESCRIPTION: Components, hooks, and utility functions installed by the shadcn/ui CLI in a monorepo can be imported from the `@workspace/ui` package. This example demonstrates importing a `Button` component, `useTheme` hook, and `cn` utility function.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/monorepo.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import { Button } from "@workspace/ui/components/button"
```

LANGUAGE: tsx
CODE:
```
import { useTheme } from "@workspace/ui/hooks/use-theme"
import { cn } from "@workspace/ui/lib/utils"
```

----------------------------------------

TITLE: Basic Sidebar Component Usage
DESCRIPTION: Provides a minimal example of rendering the `Sidebar` component within a React functional component. This snippet shows the basic import and usage of the `Sidebar` component from `@/components/ui/sidebar`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/sidebar.mdx#_snippet_12

LANGUAGE: tsx
CODE:
```
import { Sidebar } from "@/components/ui/sidebar"

export function AppSidebar() {
  return <Sidebar />
}
```

----------------------------------------

TITLE: Initialize Git Repository and Add Remote Origin
DESCRIPTION: These commands initialize a new Git repository in the current directory and then add a remote origin URL, linking the local repository to a GitHub repository. This setup is necessary before pushing code for continuous integration and deployment.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/packages/shadcn/test/fixtures/frameworks/remix-indie-stack/README.md#_snippet_6

LANGUAGE: sh
CODE:
```
git init
```

LANGUAGE: sh
CODE:
```
git remote add origin <ORIGIN_URL>
```

----------------------------------------

TITLE: Configure TypeScript path aliases for application modules
DESCRIPTION: Adds `baseUrl` and `paths` configurations to the `tsconfig.json` file. This allows for resolving module imports using the `@/*` alias, mapping them to the `./app/*` directory.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/tanstack.mdx#_snippet_4

LANGUAGE: ts
CODE:
```
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "Bundler",
    "module": "ESNext",
    "target": "ES2022",
    "skipLibCheck": true,
    "strictNullChecks": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./app/*"]
    }
  }
}
```

----------------------------------------

TITLE: Define Minimal AppSidebar with Sidebar and SidebarContent
DESCRIPTION: This snippet illustrates the minimal implementation of `AppSidebar` component, containing only `Sidebar` and `SidebarContent` components, serving as a starting point for building a custom sidebar as part of a step-by-step tutorial.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/sidebar.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent />
    </Sidebar>
  )
}
```

----------------------------------------

TITLE: Configure shadcn/ui components.json settings
DESCRIPTION: Illustrates the interactive prompts for configuring `components.json`, allowing users to select their preferred style, base color, and whether to use CSS variables for colors.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/remix.mdx#_snippet_2

LANGUAGE: txt
CODE:
```
Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › no / yes
```

----------------------------------------

TITLE: Render Basic Table Component in React/TypeScript
DESCRIPTION: This example illustrates a basic JSX structure for rendering a `Table` component. It includes a `TableCaption` for accessibility, a `TableHeader` with `TableHead` elements for column titles, and a `TableBody` containing `TableRow` and `TableCell` elements to display data, demonstrating a typical invoice list.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/table.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

----------------------------------------

TITLE: Basic Sheet component usage in TSX
DESCRIPTION: Demonstrates the fundamental structure of a Sheet component, including a trigger to open it and content organized within a header, title, and description. This provides a complete, minimal example for displaying a Sheet.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/sheet.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

----------------------------------------

TITLE: Import and render a shadcn/ui Switch component in React
DESCRIPTION: After adding a shadcn/ui component, import it into your React pages or components. This example demonstrates importing the `Switch` component and rendering it within a functional React component.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/laravel.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Switch } from "@/components/ui/switch"

const MyPage = () => {
  return (
    <div>
      <Switch />
    </div>
  )
}

export default MyPage
```

----------------------------------------

TITLE: Basic Sidebar Component Usage
DESCRIPTION: Provides a minimal example of rendering the `Sidebar` component within a React functional component. This snippet shows the basic import and usage of the `Sidebar` component from `@/components/ui/sidebar`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/sidebar.mdx#_snippet_13

LANGUAGE: tsx
CODE:
```
import { Sidebar } from "@/components/ui/sidebar"

export function AppSidebar() {
  return <Sidebar />
}
```

----------------------------------------

TITLE: Basic Popover component usage in React
DESCRIPTION: This example illustrates the fundamental JSX structure for a Popover component. It includes the PopoverTrigger, which activates the popover, and the PopoverContent, where the rich content to be displayed is placed.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/popover.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>
```

----------------------------------------

TITLE: Import and render shadcn/ui Button component in Astro
DESCRIPTION: This Astro page example demonstrates how to import the `Button` component from the configured path alias (`@/components/ui/button`) and render it within an Astro page. It showcases basic usage of a shadcn/ui component after installation and setup.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/astro.mdx#_snippet_4

LANGUAGE: astro
CODE:
```
---
import { Button } from "@/components/ui/button"
---

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>Astro + TailwindCSS</title>
	</head>

	<body>
		<div className="grid place-items-center h-screen content-center">
			<Button>Button</Button>
		</div>
	</body>
</html>
```

----------------------------------------

TITLE: Implementing SidebarHeader with DropdownMenu (React/TypeScript)
DESCRIPTION: Illustrates how to use the `SidebarHeader` component to create a sticky header within a sidebar. This example demonstrates embedding a `DropdownMenu` for workspace selection, showcasing how to integrate interactive elements and manage layout within the sidebar's header section.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/sidebar.mdx#_snippet_16

LANGUAGE: tsx
CODE:
```
<Sidebar>
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              Select Workspace
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
            <DropdownMenuItem>
              <span>Acme Inc</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Acme Corp.</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
</Sidebar>
```

----------------------------------------

TITLE: Define Custom Theme Variables for shadcn/ui
DESCRIPTION: This JSON configuration demonstrates how to add custom CSS variables to the 'theme' object within a shadcn/ui registry item. It allows defining project-specific font families and shadow styles that can be referenced throughout the application's CSS, ensuring brand consistency.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_6

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "font-heading": "Inter, sans-serif",
      "shadow-card": "0 0 0 1px rgba(0, 0, 0, 0.1)"
    }
  }
}
```

----------------------------------------

TITLE: Initialize shadcn/ui Monorepo Project
DESCRIPTION: This command initializes a new shadcn/ui monorepo project using `pnpm dlx`. It sets up the basic project structure and configuration required for a monorepo.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/templates/monorepo-next/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
pnpm dlx shadcn@latest init
```

----------------------------------------

TITLE: Render DataTable Component in a Next.js Page
DESCRIPTION: This example demonstrates integrating and rendering the `DataTable` component within an `async` Next.js page. It includes a `getData` function to simulate fetching payment data, which is then passed along with column definitions to the `DataTable` component for display.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/data-table.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
```

----------------------------------------

TITLE: Basic Accordion component usage in React/TypeScript
DESCRIPTION: This example illustrates a fundamental implementation of the Accordion component with a single collapsible item. It showcases the structure using `AccordionItem`, `AccordionTrigger`, and `AccordionContent` to create an interactive disclosure element.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/accordion.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

----------------------------------------

TITLE: Interactive configuration for Gatsby project setup
DESCRIPTION: Guides the user through configuring a new Gatsby project. This interactive prompt allows specifying the site name, folder, language (TypeScript), and styling system (Tailwind CSS).
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/gatsby.mdx#_snippet_1

LANGUAGE: txt
CODE:
```
✔ What would you like to call your site?
· your-app-name
✔ What would you like to name the folder where your site will be created?
· your-app-name
✔ Will you be using JavaScript or TypeScript?
· TypeScript
✔ Will you be using a CMS?
· Choose whatever you want
✔ Would you like to install a styling system?
· Tailwind CSS
✔ Would you like to install additional features with other plugins?
· Choose whatever you want
✔ Shall we do this? (Y/n) · Yes
```

----------------------------------------

TITLE: Authenticate with Fly.io CLI
DESCRIPTION: This command initiates the authentication process for the Fly.io command-line interface, allowing users to sign up or log in to their Fly.io account. It is a prerequisite for deploying applications to Fly.io.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/packages/shadcn/test/fixtures/frameworks/remix-indie-stack/README.md#_snippet_4

LANGUAGE: sh
CODE:
```
fly auth signup
```

----------------------------------------

TITLE: Define Custom CSS Animations for shadcn/ui Components
DESCRIPTION: This JSON configuration shows how to define custom CSS animations within a shadcn/ui registry item. It includes both the `@keyframes` definition for the 'wiggle' animation and its assignment to a CSS variable `--animate-wiggle` within the `theme` object, allowing components to easily apply the animation.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_14

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "cssVars": {
    "theme": {
      "--animate-wiggle": "wiggle 1s ease-in-out infinite"
    }
  },
  "css": {
    "@keyframes wiggle": {
      "0%, 100%": {
        "transform": "rotate(-3deg)"
      },
      "50%": {
        "transform": "rotate(3deg)"
      }
    }
  }
}
```

----------------------------------------

TITLE: List All Available shadcn UI Components
DESCRIPTION: Executes the `shadcn add` command without any arguments to display a comprehensive list of all available shadcn UI components that can be added to your project.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/packages/shadcn/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npx shadcn add
```

----------------------------------------

TITLE: Add custom animations to shadcn/ui components
DESCRIPTION: This JSON configuration defines a custom registry item named 'custom-component'. It demonstrates how to add custom CSS animations to shadcn/ui. It defines a `--animate-wiggle` CSS variable in `cssVars` that references a `wiggle` keyframe animation, which is defined in the `css` section. This allows for integrating custom visual effects.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/examples.mdx#_snippet_13

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "cssVars": {
    "theme": {
      "--animate-wiggle": "wiggle 1s ease-in-out infinite"
    }
  },
  "css": {
    "@keyframes wiggle": {
      "0%, 100%": {
        "transform": "rotate(-3deg)"
      },
      "50%": {
        "transform": "rotate(3deg)"
      }
    }
  }
}
```

----------------------------------------

TITLE: Create Collapsible Sidebar Menu
DESCRIPTION: This example demonstrates how to make a `SidebarMenu` component collapsible. By wrapping the `SidebarMenu` and its `SidebarMenuSub` components within a `Collapsible` component, you enable the expansion and collapse of menu sections.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/sidebar.mdx#_snippet_30

LANGUAGE: tsx
CODE:
```
<SidebarMenu>
  <Collapsible defaultOpen className="group/collapsible">
    <SidebarMenuItem>
      <CollapsibleTrigger asChild>
        <SidebarMenuButton />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem />
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  </Collapsible>
</SidebarMenu>
```

----------------------------------------

TITLE: Integrate ThemeProvider into React Root Layout
DESCRIPTION: This example shows how to wrap your main application component (`App.tsx`) with the custom `ThemeProvider`. It demonstrates setting an initial `defaultTheme` and specifying a `storageKey` for theme persistence across sessions.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/dark-mode/vite.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}

export default App
```

----------------------------------------

TITLE: Configure shadcn/ui components.json
DESCRIPTION: This JSON configuration file defines the setup for shadcn/ui components within a project. It specifies styling, RSC (React Server Components) usage, TypeScript support, Tailwind CSS integration details, path aliases for various project directories, and the icon library to be used.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/manual.mdx#_snippet_4

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

----------------------------------------

TITLE: Implement Input OTP with Alphanumeric Pattern
DESCRIPTION: Shows how to apply a custom pattern to the Input OTP component using the `pattern` prop. This example uses `REGEXP_ONLY_DIGITS_AND_CHARS` to restrict input to alphanumeric characters.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/input-otp.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

...

<InputOTP
  maxLength={6}
  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    {/* ... */}
  </InputOTPGroup>
</InputOTP>
```

----------------------------------------

TITLE: React Component for 'Open in v0' Button
DESCRIPTION: A reusable React component (`OpenInV0Button`) that renders a styled button to facilitate opening a given URL in v0.dev. It leverages shadcn/ui's Button component and constructs the appropriate API URL for integration.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/open-in-v0.mdx#_snippet_1

LANGUAGE: jsx
CODE:
```
import { Button } from "@/components/ui/button"

export function OpenInV0Button({ url }: { url: string }) {
  return (
    <Button
      aria-label="Open in v0"
      className="h-8 gap-1 rounded-[6px] bg-black px-3 text-xs text-white hover:bg-black hover:text-white dark:bg-white dark:text-black"
      asChild
    >
      <a
        href={`https://v0.dev/chat/api/open?url=${url}`}
        target="_blank"
        rel="noreferrer"
      >
        Open in{" "}
        <svg
          viewBox="0 0 40 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-current"
        >
          <path
            d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
            fill="currentColor"
          ></path>
          <path
            d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </Button>
  )
}
```

LANGUAGE: jsx
CODE:
```
<OpenInV0Button url="https://example.com/r/hello-world.json" />
```

----------------------------------------

TITLE: Display Loading Skeleton for Sidebar Menu
DESCRIPTION: Provides an example of using `SidebarMenuSkeleton` to render a loading state for the `SidebarMenu`. This is useful for React Server Components, SWR, or react-query to indicate data fetching in progress.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/sidebar.mdx#_snippet_31

LANGUAGE: tsx
CODE:
```
function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

----------------------------------------

TITLE: Configure shadcn-ui Components with components.json
DESCRIPTION: This JSON configuration file defines the styling, Tailwind CSS settings, and other options for shadcn-ui components. It allows opting out of TypeScript via the `tsx` flag and setting up import aliases for project paths.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/index.mdx#_snippet_1

LANGUAGE: JSON
CODE:
```
{
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "rsc": false,
  "tsx": false,
  "aliases": {
    "utils": "~/lib/utils",
    "components": "~/components"
  }
}
```

----------------------------------------

TITLE: Configure JavaScript import aliases with jsconfig.json
DESCRIPTION: This `jsconfig.json` file configures the JavaScript language service, specifically defining path aliases. The `"@/*": ["./*"]` alias maps any import starting with `@/` to the project's root directory, simplifying module imports and improving code readability.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/javascript.mdx#_snippet_1

LANGUAGE: JSON
CODE:
```
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

----------------------------------------

TITLE: Define Chart Data and Configuration for Tooltip
DESCRIPTION: Example TypeScript code defining sample chart data and a configuration object. The `chartConfig` maps data keys to display labels and colors, which are then referenced by chart components like tooltips for rendering.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/chart.mdx#_snippet_24

LANGUAGE: tsx
CODE:
```
const chartData = [
  { browser: "chrome", visitors: 187, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" }
]

const chartConfig = {
  visitors: {
    label: "Total Visitors"
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))"
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))"
  }
} satisfies ChartConfig
```

----------------------------------------

TITLE: Initialize shadcn/ui Project
DESCRIPTION: Runs the shadcn/ui CLI initialization command to create a `components.json` file in your project, setting up the basic configuration. This command is essential for projects using the CLI to add components.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/components-json.mdx#_snippet_0

LANGUAGE: Bash
CODE:
```
npx shadcn@latest init
```

----------------------------------------

TITLE: Basic Dropdown Menu component usage in React/TSX
DESCRIPTION: This example demonstrates the fundamental structure for implementing a `DropdownMenu` component. It includes the `DropdownMenuTrigger` to activate the menu, `DropdownMenuContent` to encapsulate the menu items, and various sub-components like `DropdownMenuLabel`, `DropdownMenuSeparator`, and `DropdownMenuItem` for content organization.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/dropdown-menu.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

----------------------------------------

TITLE: Configure shadcn/ui components.json
DESCRIPTION: This JSON configuration file defines the setup for shadcn/ui components within a project. It specifies styling, RSC (React Server Components) usage, TypeScript support, Tailwind CSS integration details, path aliases for various project directories, and the icon library to be used.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/manual.mdx#_snippet_4

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

----------------------------------------

TITLE: Configure shadcn/ui components.json setup questions
DESCRIPTION: Shows the interactive prompts for configuring `components.json` for shadcn/ui. This includes choices for TypeScript usage, styling preferences, global CSS file location, and import aliases for components and utilities.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/gatsby.mdx#_snippet_5

LANGUAGE: txt
CODE:
```
Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › ./src/styles/globals.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no
```

----------------------------------------

TITLE: Define Complex CSS Utility Class for shadcn/ui
DESCRIPTION: This JSON configuration illustrates defining a more complex CSS utility class, `scrollbar-hidden`, using the `@utility` directive within a shadcn/ui registry item. This utility hides the scrollbar for WebKit browsers, offering a reusable solution for custom scrollbar behavior and cleaner UI designs.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_11

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility scrollbar-hidden": {
      "scrollbar-hidden": {
        "&::-webkit-scrollbar": {
          "display": "none"
        }
      }
    }
  }
}
```

----------------------------------------

TITLE: Import shadcn/ui Components in TypeScript/React
DESCRIPTION: This TypeScript/React import statement demonstrates how to use components from the `ui` package within your application. Components are imported from their specific paths within the `@workspace/ui` alias, making them available for use in your UI.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/templates/monorepo-next/README.md#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Button } from "@workspace/ui/components/button"
```

----------------------------------------

TITLE: Customize Resizable Handle with `withHandle` Prop
DESCRIPTION: This example illustrates how to explicitly show a visual handle on the `ResizableHandle` component by setting the `withHandle` prop to `true`. This provides a clearer visual cue for users to interact with the resizer.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/resizable.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Example() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

----------------------------------------

TITLE: Adjust Sheet Component Size with CSS Classes
DESCRIPTION: Provides an example of how to customize the width of the Sheet component using Tailwind CSS classes applied to the SheetContent, allowing for responsive size adjustments.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/sheet.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent className="w-[400px] sm:w-[540px]">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

----------------------------------------

TITLE: Basic Menubar component structure in TSX
DESCRIPTION: This example illustrates the fundamental JSX structure for rendering a Menubar component. It includes a top-level menu, a trigger, content, individual items, separators, and a shortcut, showcasing a common desktop application menu pattern.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/menubar.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

----------------------------------------

TITLE: Render Label component in JSX
DESCRIPTION: This example demonstrates how to use the `Label` component in a React/JSX application. The `htmlFor` prop is used to associate the label with an input element, improving accessibility.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/label.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<Label htmlFor="email">Your email address</Label>
```

----------------------------------------

TITLE: Configure PostCSS for Tailwind CSS
DESCRIPTION: Creates a `postcss.config.ts` file at the root of the project. This configuration enables the `@tailwindcss/postcss` plugin, allowing PostCSS to process Tailwind CSS directives.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/tanstack.mdx#_snippet_1

LANGUAGE: ts
CODE:
```
export default {
  "plugins": {
    "@tailwindcss/postcss": {},
  },
}
```

----------------------------------------

TITLE: Define custom theme variables in shadcn/ui
DESCRIPTION: This JSON configuration defines a custom registry item named 'custom-theme'. It allows adding custom CSS variables like font families and box shadows to the theme object, which can then be used throughout the application to maintain a consistent design system.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/registry/examples.mdx#_snippet_6

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "font-heading": "Inter, sans-serif",
      "shadow-card": "0 0 0 1px rgba(0, 0, 0, 0.1)"
    }
  }
}
```

----------------------------------------

TITLE: Import Sheet Components in TypeScript/React
DESCRIPTION: Demonstrates how to import the necessary components for the Shadcn UI Sheet, including Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, and SheetTrigger, from the project's UI library.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/sheet.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
```

----------------------------------------

TITLE: Fork Repository with Git
DESCRIPTION: Clones the shadcn/ui repository to your local machine, preparing it for contributions.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/blocks.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
git clone https://github.com/shadcn-ui/ui.git
```

----------------------------------------

TITLE: Import and Use shadcn/ui Button in TanStack Router
DESCRIPTION: Demonstrates how to import and render a shadcn/ui `Button` component within a TanStack Router route file. This example shows the basic structure for defining a route using `createFileRoute` and embedding React components, including the newly added shadcn/ui button.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/tanstack-router.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { createFileRoute } from "@tanstack/react-router"

import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

----------------------------------------

TITLE: Initialize shadcn UI Project
DESCRIPTION: Initializes a new shadcn UI project. This command installs necessary dependencies, integrates the `cn` utility, configures `tailwind.config.js`, and sets up CSS variables, preparing the project for shadcn UI components.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/packages/shadcn/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn init
```

----------------------------------------

TITLE: Add Custom Colors to an Existing shadcn/ui Style
DESCRIPTION: This JSON configuration demonstrates how to add a custom `brand` color to an existing `shadcn/ui` style. It extends the default `shadcn/ui` settings and defines the `brand` CSS variable with `oklch` color values for both light and dark modes. This allows for targeted color customization without redefining the entire style.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/examples.mdx#_snippet_3

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-style",
  "type": "registry:style",
  "cssVars": {
    "light": {
      "brand": "oklch(0.99 0.00 0)"
    },
    "dark": {
      "brand": "oklch(0.14 0.00 286)"
    }
  }
}
```

----------------------------------------

TITLE: Import and Use shadcn/ui Button in TanStack Router
DESCRIPTION: Demonstrates how to import and render a shadcn/ui `Button` component within a TanStack Router route file. This example shows the basic structure for defining a route using `createFileRoute` and embedding React components, including the newly added shadcn/ui button.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/tanstack-router.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { createFileRoute } from "@tanstack/react-router"

import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

----------------------------------------

TITLE: Initialize a New shadcn/ui Monorepo Project
DESCRIPTION: This command initializes a new shadcn/ui monorepo project using the canary version of the CLI. It prompts the user to select 'Next.js (Monorepo)' to set up a project with 'web' and 'ui' workspaces and Turborepo.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/(root)/monorepo.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn@canary init
```

LANGUAGE: bash
CODE:
```
? Would you like to start a new project?
    Next.js
❯   Next.js (Monorepo)
```

----------------------------------------

TITLE: Import Tooltip Components for React/TypeScript
DESCRIPTION: This snippet shows the necessary import statements for using the Tooltip, TooltipContent, TooltipProvider, and TooltipTrigger components. These components are typically imported from a local UI library path, such as `@/components/ui/tooltip`.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/tooltip.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
```

----------------------------------------

TITLE: Import and use shadcn/ui Button component in React
DESCRIPTION: Shows how to import the `Button` component from `shadcn/ui` and integrate it into a React functional component. This example demonstrates basic usage within a Gatsby application's page or component file.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/installation/gatsby.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

----------------------------------------

TITLE: Implementing SidebarHeader with Dropdown Menu in React
DESCRIPTION: This example demonstrates how to use the `SidebarHeader` component to create a sticky header for the sidebar. It includes integration with a `DropdownMenu` for selecting a workspace, showcasing how to nest interactive elements within the header for enhanced UI functionality.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/www/content/docs/components/sidebar.mdx#_snippet_17

LANGUAGE: tsx
CODE:
```
<Sidebar>
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              Select Workspace
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
            <DropdownMenuItem>
              <span>Acme Inc</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Acme Corp.</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
</Sidebar>
```

----------------------------------------

TITLE: Implement a basic Combobox component with React and Shadcn UI
DESCRIPTION: This example demonstrates how to create a reusable Combobox component using React, TypeScript, and Shadcn UI's Popover and Command components. It allows users to select from a predefined list of frameworks, featuring search functionality and dynamic selection updates. The component manages its open state and selected value internally.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/combobox.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export function ExampleCombobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
```

----------------------------------------

TITLE: Define a Complex shadcn/ui Component Structure
DESCRIPTION: This JSON configuration defines a complex shadcn/ui registry item, illustrating how to bundle multiple file types like pages, components, hooks, utilities, and configuration files into a single installable unit. It specifies the `path` and `type` for each file, and optionally a `target` for installation location.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/registry/faq.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "hello-world",
  "title": "Hello World",
  "type": "registry:block",
  "description": "A complex hello world component",
  "files": [
    {
      "path": "registry/new-york/hello-world/page.tsx",
      "type": "registry:page",
      "target": "app/hello/page.tsx"
    },
    {
      "path": "registry/new-york/hello-world/components/hello-world.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/components/formatted-message.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/hooks/use-hello.ts",
      "type": "registry:hook"
    },
    {
      "path": "registry/new-york/hello-world/lib/format-date.ts",
      "type": "registry:utils"
    },
    {
      "path": "registry/new-york/hello-world/hello.config.ts",
      "type": "registry:file",
      "target": "~/hello.config.ts"
    }
  ]
}
```

----------------------------------------

TITLE: Render Content with AspectRatio Component in TypeScript/React
DESCRIPTION: This example illustrates how to wrap an `Image` component with `AspectRatio` to enforce a 16:9 ratio. It ensures that the enclosed content maintains its specified aspect ratio, which is crucial for consistent visual presentation in a React application.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/components/aspect-ratio.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
<AspectRatio ratio={16 / 9}>
  <Image src="..." alt="Image" className="rounded-md object-cover" />
</AspectRatio>
```

----------------------------------------

TITLE: Example React Router Home Route with shadcn/ui Button
DESCRIPTION: Illustrates the usage of the `shadcn/ui` Button component within a React Router application's home route. It includes importing the component, defining route metadata, and rendering the button within a functional component.
SOURCE: https://github.com/shadcn-ui/ui/blob/main/apps/v4/content/docs/installation/react-router.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
import { Button } from "~/components/ui/button"

import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" }
  ]
}

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}
```