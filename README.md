# Getting started with GatsbyJS (by kitconcept)

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

## Headroom

Add react-headroom to the dependencies:

```
  $ yarn add react-headroom
```

Replace existing header with react-headroom:

```
  import Headroom from 'react-headroom';

  const Header = () => (
    <Headroom style={{
      background: 'grey',
    }}>
      <h1>
        <Link
          to="/"
          style={{
            color: 'blue',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </Headroom>
  )
```

## Static Images

Download a SVG image:

```
  $ cd src/layouts
  $ wget https://kitconcept.com/logo.svg --no-check-certificate
```

Import that image and replace the string 'Gatsby' in the header with the image:

```
  import logo from './logo.svg';

  const Header = () => (
    <Headroom style={{
      background: 'grey'
    }}>
      <h1>
        <Link
          to="/"
          style={{
            color: 'blue',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Logo" />
        </Link>
      </h1>
    </Headroom>
  )
```

## Images

Install gatsby-remark-images:

```
  $ npm install --save gatsby-remark-images
```

Add image to blog post folder (e.g. 'my-image.png'), then include that image in the markdown file with:

```
  ![](my-image.png)
```

## Twitter

Install gastby-plugin-twitter:

```
  $ npm install --save gatsby-plugin-twitter
```

Add gatsby-plugin-twitter to plugins in your 'gatsby-config.js':

```
  plugins: [`gatsby-plugin-twitter`]
```
