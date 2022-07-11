import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { MarkdownTransformer } from '@atlaskit/editor-markdown-transformer';
import { WikiMarkupTransformer } from '@atlaskit/editor-wikimarkup-transformer';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const transformer = new MarkdownTransformer(); // default schema
    const serializer = new WikiMarkupTransformer();

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: serializer.encode(transformer.parse(req.body)), // return parsed markdown converted to wikimarkup
    };

};

export default httpTrigger;