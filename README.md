# P2-React-Markdown

Our Markdown to HTML Components Library provides a solution for converting Markdown text into HTML effortlessly.

- ### [1. Get started](#1-Get-started)
  - #### [Initialization](#11-Initialization)
  - #### [Features](#12-Features)
- ### [Description](#2-Description)
  - #### [Configuration](#21-Configuration)
  - #### [Constants](#22-Constants)
  - #### [Hooks](#23-Hooks)
  - #### [Services](#24-Services)
  - #### [Modules](#25-Modules)
  - #### [Layouts](#26-Layouts)
  - #### [Components](#27-Components)


[//]: # (
TODO 
    - GET STARTED
        - Initialization
        - Features
    - Description
        - Components
            - General presentation table name, type, description / Tableau presentation général nom, type, description
        - Modules
            - General presentation table name, type, description / Tableau presentation général nom, type, description
        - Services
            - General presentation table name, type, description / Tableau presentation général nom, type, description
        - Layouts
            - General presentation table name, type, description / Tableau presentation général nom, type, description
        - Hooks
            - General presentation table name, type, description / Tableau presentation général nom, type, description
        - Config
            - General presentation table name, type, description / Tableau presentation général nom, type, description
        - Constants
            - General presentation table name, type, description / Tableau presentation général nom, type, description
    - Benefits / Avantages
    - Next features / Prochaines fonctionnalités
    - Next released / Prochaine versions
)
## 1. Get started
## 1.1 Initialization
```
git clone https://github.com/WildCodeSchool-CDA-LYON-02-2024/P2-React-Markdown
```

### 1.2 Features

- **Markdown to HTML Conversion**: Easily convert Markdown text into HTML, saving you time and effort.
- **Support for Standard Markdown Elements**: We support a wide range of standard Markdown elements including headers, lists, links, images, and more.
- **Input and Output Components**: Integration is made simple with dedicated Input and Output components. Input your Markdown text and instantly view the converted HTML output.
- **Customizable Appearance**: Tailor the look and feel of your HTML output with our customizable theme system, offering both pre-defined and personalized themes.
- **Retrieve Generated HTML**: Easily access the HTML generated from your Markdown text for seamless integration into other parts of your application.
- **Interactive Example Site**: Explore the library's features through our interactive example site, showcasing demonstrations of each component in action.
- **Visual Exploration with StoryBook**: Dive deep into our components with StoryBook, providing a comprehensive visual and interactive exploration experience.

## 2. Description
### 2.1 Configuration
``` jsx 
// themes
defaultTheme: {
    backgroundColor: "string",
    textColor: "string",
    linkColor: "string",
    codeBackgroundColor: "string",
}
```
|      property       |  type  |                   description                   |
|:-------------------:|:------:|:-----------------------------------------------:|
|   backgroundColor   | string |       Change the backgroundColor of body        |
|      textColor      | string |      Change the color of paratext element       |
|      linkColor      | string |        Change the color of link element         |
| codeBackgroundColor | string | Change the background-color of textarea element |

### 2.2 Constants
### 2.3 Hooks
### 2.4 Services

This section lists several services, each offering a specific functionality related to handling Markdown content.
| name | parameters | description |
| :------------: | :--------------------: | :-------------------------------: |
| getBlocs | { md: markdown value } | analyze blocs of markdown content |
| getLine | { md: markdown value } | analyze line of markdown content |
| markdownToHtml | { md: markdown value } | generate markdown content |

### 2.5 Modules

#### Text

This section introduces various modules, each offering functionalities related to text manipulation.

|        name         |                 parameters                 |        description         |
| :-----------------: | :----------------------------------------: | :------------------------: |
|   createHeadings    |           { lines: lines value }           | create titles or subtitles |
|  createParagraphe   |           { lines: lines value }           |     create paragraphe      |
|   createListItems   |           { lines: lines value }           |     create list items      |
|  createOrderedList  | { lines: lines value, index: index value } |    create ordered list     |
| createUnorderedList | { lines: lines value, index: index value } |   create unordered list    |


### 2.6 Layouts

### 2.7 Components

|       name        |                                                                                                          props                                                                                                           |                                       description                                       |
|:-----------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------:|
|      Button       |                                                                                    { label: Button value, onClick: Button callback }                                                                                     | This component is for adding button inside navbar modules and change the markdown value |
|       Form        | {backgroundColor: Value of theme.backgroundColor, textColor: Value of theme.textColor, linkColor: Value of theme.linkColor, codeBackgroundColor: Value of theme.backgroundColor, toggleTheme: callback for change theme} |        This component change the theme of our library for select specific theme         |
| MarkdownComponent |             {val: Value of markdown, setMarkdown: CallBack for change the markdown variable of our useMarkdown(), setHtml: CallBack for change the html variable of our useMarkdown(), html: Value of html}              |                              This component write markdown                              |
|  NavbarComponent  |                                                                    {markdown: Value of markdown, setMarkdown: Callback for change value of markdown}                                                                     |                This component contains all button speed markdown writer                 |