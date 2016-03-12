export default function renderTemplate({
    title,
    initialState,
    renderedComponent,
    css,
    renderedClassNames,
}) {
    return `<!DOCTYPE html>
<html>
  <head>
    ${title}
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/static/images/favicon.png" type="image/png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700">
    <link rel="stylesheet" href="/static/build/styles.css">
    <style data-aphrodite>${css}</style>
    <script>
        window.__INITIAL_STATE__ = ${initialState};
        window.__RENDERED_CLASS_NAMES__ = ${renderedClassNames};
    </script>
  </head>
  <body>
    <div id="app">${renderedComponent}</div>
    <script async src="/static/build/client.js"></script>
    <script async src="//www.google-analytics.com/analytics.js"></script>
  </body>
</html>`
}
