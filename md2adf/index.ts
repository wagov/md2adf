import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { MarkdownTransformer } from '@atlaskit/editor-markdown-transformer';
import { JSONTransformer } from '@atlaskit/editor-json-transformer';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const transformer = new MarkdownTransformer(); // default schema
    const serializer = new JSONTransformer();

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: serializer.encode(transformer.parse(req.body)), // return parsed markdown converted to atlassian document format
        headers: { 'Content-Type': 'application/json' }
    };

};

export default httpTrigger;