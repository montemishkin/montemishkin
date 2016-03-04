export default function renderTemplate({title, initialState, renderedComponent}) {
    return `<!DOCTYPE html>
<html>
  <head>
    ${title}
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/static/images/favicon.png" type="image/png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/static/styles.css">
    <script>window.__INITIAL_STATE__ = ${initialState};</script>
  </head>
  <body>
    <div id="app">${renderedComponent}</div>
    <script async src="/static/client.js"></script>
    <script async src="//www.google-analytics.com/analytics.js"></script>
  </body>
</html>`
}
