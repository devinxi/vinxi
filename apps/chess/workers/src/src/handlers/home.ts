import { Context } from "sunder";

import { htmlDocumentTemplate, HTMLTemplateData } from "../templates/html";
import { basicLayout } from "../templates/layout";

export async function homeHandler(ctx: Context) {
  const pageData: HTMLTemplateData = {
    title: "Beamer server",
    body: `
            <p>Welcome to the <strong>Beamer</strong> server.</p>

            <blockquote>
                <p>
                    There isn't much interesting going on here. This is a signalling server for my <a href="https://github.com/gzuidhof/LD49">LD49 game</a>.
                </p>
            </blockquote>

            <i>ok beamer.</i>
        `
  };
  const templateResult = htmlDocumentTemplate(basicLayout(pageData));
  ctx.response.body = pageData.body;
}
