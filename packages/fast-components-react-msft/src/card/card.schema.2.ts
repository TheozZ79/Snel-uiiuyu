import { childrenSchema, ChildrenType } from "@microsoft/fast-tooling";

/**
 * Complies with FAST Tooling 2.0
 */
export default {
    $schema: "http://json-schema.org/schema#",
    title: "Card",
    description: "A card component's schema definition.",
    type: "object",
    id: "@microsoft/fast-components-react-msft/card",
    formPluginId: "@microsoft/fast-components-react-msft/card",
    properties: {
        tag: {
            title: "HTML tag",
            type: "string",
            enum: ["article", "div", "section"],
            default: "div",
        },
        children: {
            ...childrenSchema,
            formPluginId: "@microsoft/fast-components-react-msft/card/children",
            allowTypes: [ChildrenType.string, ChildrenType.component],
        },
    },
};
