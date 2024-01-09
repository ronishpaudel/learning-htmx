export function Layout(props: { children: string }) {
  const base = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script
        src="https://unpkg.com/htmx.org@1.9.10"
        integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
        crossorigin="anonymous"
      ></script>
  
      <script src="https://cdn.tailwindcss.com"></script>
      <title>HTMX TESTING</title>
    </head>
    <body>
      {{ .children }}
    </body>
  </html>`;

  return tR(base, props);
}

export function NewComponent(props: {
  children: string;
  name: string;
  age: string;
  height: string;
}) {
  const base = `
      <div>
          <h2>this is new layout h2</h2>
          <p>children goes here</p>
          {{ .children }}

          <p>{{ .name }}</p>
          <p>{{ .age }</p>
          <p class="px-2">{{ .height }}</p>
      </div>
  `;

  return tR(base, props);
}
const templReplacer = (val: string) => `{{ .${val} }}`;

export function tR(base: string, props: any) {
  const propsArr = Object.keys(props);
  let moded = base;
  for (let i = 0; i < propsArr?.length; i++) {
    moded = moded.replace(templReplacer(propsArr[i]), props[propsArr[i]]);
  }

  return moded;
}
