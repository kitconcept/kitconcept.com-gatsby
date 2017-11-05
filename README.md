# gatsby-starter-default

Install Gatsby:

```
   $ npm install -g gatsby-cli
```

Create new Gatsby project:

```
  $ gatsby new kitconcept.com-gatsby
  $ cd kitconcept.com-gatsby
```

Run Development Server:

```
  $ gatsby develop
```

Add typography.js:

```
  $ yarn add typography
```


Add typography theme:

```
  $ yarn add typography-theme-moraga
```

Add typography theme to Gatsby site (src/layouts/index.js):

```
    import Typography from 'typography'
    import moragaTheme from 'typography-theme-moraga'

    const typography = new Typography(moragaTheme)

    // Output CSS as string.
    typography.toString()

    // Or insert styles directly into the <head> (works well for client-only
    // JS web apps.
    typography.injectStyles()
```
