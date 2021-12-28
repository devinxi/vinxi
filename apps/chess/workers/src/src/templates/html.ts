export interface HTMLTemplateData {
  head?: any;
  body?: any;
  title?: string;
}

// A very basic HTML Template - do change or extend this.
export function htmlDocumentTemplate(data: HTMLTemplateData) {
  return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        ${data.title ? `<title>${data.title}</title>` : undefined}
        ${data.head}
    </head>
    <body>
        ${data.body}
    </body>
</html>`;
}
