# md2adf
Markdown to Atlassian Document Format api

Exposes a single typescript function that receives markdown as a HTTP GET or POST body, and returns it converted to Atlassian Document Format (ADF) json.

Uses [MarkdownTransformer](https://atlaskit.atlassian.com/packages/editor/editor-markdown-transformer) and [JSONTransformer](https://atlaskit.atlassian.com/packages/editor/editor-json-transformer) from [Atlaskit](https://atlaskit.atlassian.com/).

[ProseMirror](https://prosemirror.net/) appears to be the underlying library that atlassian has used for their document format and the above transformers (ADF is a minor tweak to the prosemirror internal JSON structure).
