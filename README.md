# <center><u>Iron Markdown</u></center>

## Iron Markdown, a lightweight flavor of Markdown specifically designed for documenting components and functionalities within a React project.

- ### [Get started](#1-Get-started)
  - #### [Initialization](#11-Initialization)
  - #### [Features](#12-Features)
- ### [Examples](#2-Examples)
  - #### [Input Markdown Component](#21-Input-markdown-component)
  - #### [Output HTML Element](#22-Output-html-element)
- ### [Description](#3-Description)
  - #### [Configuration](#31-Configuration)
  - #### [Constants](#32-Constants)
  - #### [Hooks](#33-Hooks)
  - #### [Services](#34-Services)
  - #### [Modules](#35-Modules)
  - #### [Layouts](#36-Layouts)
  - #### [Components](#37-Components)
- ### [Next features](#4-Next-features)
- ### [Versioning](#5-Versioning)

## 1. Get started

### 1.1 Initialization

```
npm i @j0j0/iron-markdown
```

### 1.2 Features

- **Markdown to HTML Conversion**: Easily convert Markdown text into HTML, saving you time and effort.
- **Support for Standard Markdown Elements**: We support a wide range of standard Markdown elements including headers, lists, links, images, and more.
- **Input and Output Components**: Integration is made simple with dedicated Input and Output components. Input your Markdown text and instantly view the converted HTML output.
- **Customizable Appearance**: Tailor the look and feel of your HTML output with our customizable theme system, offering both pre-defined and personalized themes.
- **Retrieve Generated HTML**: Easily access the HTML generated from your Markdown text for seamless integration into other parts of your application.
- **Interactive Example Site**: Explore the library's features through our interactive example site, showcasing demonstrations of each component in action.
- **Visual Exploration with StoryBook**: Dive deep into our components with StoryBook, providing a comprehensive visual and interactive exploration experience.

## 2. Examples

This is a ready-to-use example to use input and output components from our library.

```js
import { NavbarComponent } from "../components/NavbarComponent.jsx";
import { MarkdownComponent } from "../components/MarkdownComponent.jsx";
import "../assets/renderer.layout.css";
import { useMarkdown } from "../hooks/useMarkdown.jsx";

export function RendererLayout() {
  const { markdown, setMarkdown, html, setHtml } = useMarkdown();
  return (
    <div className="containerLib">
      <div className="containerNavButtons">
        <NavbarComponent markdown={markdown} setMarkdown={setMarkdown} />
      </div>
      <div className="containerMarkdownHtml">
        <div>
          <MarkdownComponent
            markdown={markdown}
            setMarkdown={setMarkdown}
            html={html}
            setHtml={setHtml}
          />
        </div>
        <div className="overflow">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
}
```

### 2.1 Input Markdown Component

The input component consists of the following:

```js
import { useEffect } from "react";
import { useTheme } from "../hooks/useTheme.jsx";
import "../assets/markdown.component.css";
import { markdownToHtml } from "../services/markdownToHtml.js";

export function MarkdownComponent({ markdown, setMarkdown, setHtml, html }) {
  const { theme } = useTheme();

  useEffect(() => {
    setHtml(markdownToHtml(markdown));
  }, [markdown]);

  useEffect(() => {}, [html]);

  return (
    <textarea
      style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
      onChange={(e) => setMarkdown(e.target.value)}
      value={markdown}
    ></textarea>
  );
}
```

### 2.2 Output HTML Element

The output component consists of the following:

```js
<div dangerouslySetInnerHTML={{ __html: html }} />
```

## 3. Description

Comprehensive overview of the library, covering configuration, themes, features, components, and Markdown content manipulation.

### 3.1 Configuration

Sets the default theme for the library, as well as the properties that can be configured within that theme.

```jsx
// themes
defaultTheme: {
    backgroundColor: "string",
    textColor: "string",
    linkColor: "string",
    codeBackgroundColor: "string",
}
```

|      property       |  type  |                   description                   |
| :-----------------: | :----: | :---------------------------------------------: |
|   backgroundColor   | string |       Change the backgroundColor of body        |
|      textColor      | string |        Change the color of text element         |
|      linkColor      | string |        Change the color of link element         |
| codeBackgroundColor | string | Change the background-color of textarea element |

### 3.2 Constants

Providing customizable themes to the entire library, allowing users to easily change the appearance of the interface using different predefined configurations.

|     name     |                           description                           |
| :----------: | :-------------------------------------------------------------: |
| ThemeContext | Our theme context for library that contains defaultTheme config |

### 3.3 Hooks

These hooks are useful for managing the appearance and behavior of components in a React application, providing Markdown element manipulation and theme management functionality.

#### useMarkdown

|    name     |                        description                         |
| :---------: | :--------------------------------------------------------: |
| useMarkdown | Our markdown hooks edit state of html and markdown element |

#### useTheme

|         name         |                  parameters                  |                description                |
| :------------------: | :------------------------------------------: | :---------------------------------------: |
|       useTheme       |                     NONE                     |  Consume the context of the application   |
| ThemeContextProvider | { children: Enfant du ThemeContextProvider } | Contains the provider of our theme config |

### 3.4 Services

This section lists several services, each offering a specific functionality related to handling Markdown content.

|      name      |       parameters       |            description            |
| :------------: | :--------------------: | :-------------------------------: |
|    getBlocs    | { md: markdown value } | analyze blocs of markdown content |
|    getLine     | { md: markdown value } | analyze line of markdown content  |
| markdownToHtml | { md: markdown value } |     generate markdown content     |

### 3.5 Modules

This section introduces various modules, each offering functionalities related to text manipulation.

#### Text

|        name         |                 parameters                 |        description         |
| :-----------------: | :----------------------------------------: | :------------------------: |
|   createHeadings    |           { lines: lines value }           | create titles or subtitles |
|   createParagraph   |           { lines: lines value }           |      create paragraph      |
|   createListItems   |           { lines: lines value }           |     create list items      |
|  createOrderedList  | { lines: lines value, index: index value } |    create ordered list     |
| createUnorderedList | { lines: lines value, index: index value } |   create unordered list    |

### 3.6 Layouts

Load content written in markdown and convert it to HTML elements.

|      Name      | Paramètres |                                   Description                                    |
| :------------: | :--------: | :------------------------------------------------------------------------------: |
| RendererLayout |    NONE    | Contains our library that layout can load markdown and read it into html element |

### 3.7 Components

Allow you to write markdown and transform it into HTML, with features such as changing themes and integrating into a navigation bar.

|       name        |                                                                                                          props                                                                                                           |                                       description                                       |
| :---------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
|      Button       |                                                                                    { label: Button value, onClick: Button callback }                                                                                     | This component is for adding button inside navbar modules and change the markdown value |
|       Form        | {backgroundColor: Value of theme.backgroundColor, textColor: Value of theme.textColor, linkColor: Value of theme.linkColor, codeBackgroundColor: Value of theme.backgroundColor, toggleTheme: callback for change theme} |        This component change the theme of our library for select specific theme         |
| MarkdownComponent |             {val: Value of markdown, setMarkdown: CallBack for change the markdown variable of our useMarkdown(), setHtml: CallBack for change the html variable of our useMarkdown(), html: Value of html}              |                              This component write markdown                              |
|  NavbarComponent  |                                                                    {markdown: Value of markdown, setMarkdown: Callback for change value of markdown}                                                                     |                This component contains all button speed markdown writer                 |

## 4. Next features

|                      New features                      | Versions |
| :----------------------------------------------------: | :------: |
|                     Convert Emoji                      |  1.2.0   |
|        Convert style markdown to style element         |  1.2.0   |
| Convert blockquote markdown to blockquote html element |  1.2.0   |

## 5. Versioning

| Versions |   Status    |
| :------: | :---------: |
|  1.1.0   |   FINISH    |
|  1.2.0   | IN PROGRESS |
