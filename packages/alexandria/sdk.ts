import { buildASTSchema } from "graphql";

import {
  TypeConditionError,
  NamedType,
  Field,
  InlineFragment,
  Argument,
  Variable,
  Selection,
  SelectionSet,
  SelectionBuilder,
  namedType,
  field,
  inlineFragment,
  argument,
  selectionSet,
} from "@timkendall/tql";

export { Result, Variables, $ } from "@timkendall/tql";

export const SCHEMA = buildASTSchema({
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ArrayTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "elementType" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "BindingPattern" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "CallSignatureDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ClassDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "members" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "Node" },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ComputedPropertyName" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ConditionalTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "checkType" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "extendsType" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "falseType" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "trueType" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ConstructSignatureDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ConstructorDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "MaybeOptional" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "asteriskToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "exclamationToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parameters" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "ParameterDeclaration" },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "questionToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeParameters" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "TypeParameterDeclaration" },
              },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ConstructorTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "UnionTypeDefinition",
      name: { kind: "Name", value: "DeclarationName" },
      directives: [],
      types: [
        { kind: "NamedType", name: { kind: "Name", value: "BindingPattern" } },
        {
          kind: "NamedType",
          name: { kind: "Name", value: "ComputedPropertyName" },
        },
        { kind: "NamedType", name: { kind: "Name", value: "Identifier" } },
        { kind: "NamedType", name: { kind: "Name", value: "NumericLiteral" } },
        { kind: "NamedType", name: { kind: "Name", value: "QualifiedName" } },
        {
          kind: "NamedType",
          name: { kind: "Name", value: "StringLiteralLike" },
        },
        { kind: "NamedType", name: { kind: "Name", value: "UnnamedNode" } },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "EnumDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "members" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "Node" },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ExportAssignment" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ExportDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "FunctionDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "MaybeOptional" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "asteriskToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "exclamationToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parameters" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "ParameterDeclaration" },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "questionToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeParameters" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "TypeParameterDeclaration" },
              },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "FunctionTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "GetAccessorDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "MaybeOptional" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "asteriskToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "exclamationToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parameters" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "ParameterDeclaration" },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "questionToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeParameters" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "TypeParameterDeclaration" },
              },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "InterfaceTypeDefinition",
      name: { kind: "Name", value: "HasJSDoc" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Identifier" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "text" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ImportDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ImportEqualsDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ImportTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "IndexSignatureDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "IndexedAccessTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "InferTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeParameter" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "InterfaceDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "IntersectionTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "types" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "Node" },
                },
              },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "JSDoc" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "comment" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDocTag" },
              },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "JSDocAugmentsTag" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "JSDocTag" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "comment" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tagName" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "JSDocClassTag" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "JSDocTag" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "comment" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tagName" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "JSDocEnumTag" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "JSDocTag" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "comment" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tagName" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "JSDocNamespaceDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "JSDocReturnTag" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "JSDocTag" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "comment" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tagName" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
      ],
    },
    {
      kind: "InterfaceTypeDefinition",
      name: { kind: "Name", value: "JSDocTag" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "comment" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tagName" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "JSDocTemplateTag" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "JSDocTag" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "comment" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tagName" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "JSDocThisTag" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "JSDocTag" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "comment" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tagName" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "JSDocTypeTag" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "JSDocTag" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "comment" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tagName" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "JSDocUnknownTag" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "JSDocTag" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "comment" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "tagName" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "KeywordTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "LiteralType" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "MappedTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "InterfaceTypeDefinition",
      name: { kind: "Name", value: "MaybeOptional" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "questionToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "MethodDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "MaybeOptional" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "asteriskToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "exclamationToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parameters" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "ParameterDeclaration" },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "questionToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeParameters" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "TypeParameterDeclaration" },
              },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "MissingDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ModuleDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "NamespaceDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "NamespaceExportDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "InterfaceTypeDefinition",
      name: { kind: "Name", value: "Node" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "NodeFlags" },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Ambient" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AwaitContext" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "BlockScoped" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Const" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ContainsThis" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ContextFlags" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "DecoratorContext" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Deprecated" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "DisallowInContext" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ExportContext" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "GlobalAugmentation" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "HasAggregatedChildData" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "HasAsyncFunctions" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "HasExplicitReturn" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "HasImplicitReturn" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "InWithStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDoc" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JavaScriptFile" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsonFile" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Let" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Namespace" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NestedNamespace" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "None" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "OptionalChain" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PermanentlySetIncrementalFlags" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PossiblyContainsDynamicImport" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PossiblyContainsImportMeta" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ReachabilityAndEmitFlags" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ReachabilityCheckFlags" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Synthesized" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ThisNodeHasError" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ThisNodeOrAnySubNodesHasError" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TypeCached" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TypeExcludesFlags" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "UNKNOWN" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "YieldContext" },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "NumericLiteral" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "OptionalTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ParameterDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ParenthesizedType" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "PropertyDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "MaybeOptional" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "questionToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "PropertyLikeDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "PropertySignature" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "MaybeOptional" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "questionToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "QualifiedName" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parseFile" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "file" },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "String" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SourceFile" },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "RestTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "SetAccessorDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "MaybeOptional" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "asteriskToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "exclamationToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parameters" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "ParameterDeclaration" },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "questionToken" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Token" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeParameters" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "TypeParameterDeclaration" },
              },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "SourceFile" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "statements" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "Node" },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "StringLiteral" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "StringLiteralLike" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "EnumTypeDefinition",
      name: { kind: "Name", value: "SyntaxKind" },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AbstractKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AmpersandAmpersandEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AmpersandAmpersandToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AmpersandEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AmpersandToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AnyKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ArrayBindingPattern" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ArrayLiteralExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ArrayType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ArrowFunction" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AsExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AsKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AssertClause" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AssertEntry" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AssertKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AssertsKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AsteriskAsteriskEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AsteriskAsteriskToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AsteriskEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AsteriskToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AsyncKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AtToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AwaitExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "AwaitKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "BacktickToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "BarBarEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "BarBarToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "BarEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "BarToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "BigIntKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "BigIntLiteral" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "BinaryExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "BindingElement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Block" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "BooleanKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "BreakKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "BreakStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Bundle" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CallExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CallSignature" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CaretEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CaretToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CaseBlock" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CaseClause" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CaseKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CatchClause" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CatchKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ClassDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ClassExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ClassKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ClassStaticBlockDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CloseBraceToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CloseBracketToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CloseParenToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ColonToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CommaListExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "CommaToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ComputedPropertyName" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ConditionalExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ConditionalType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ConflictMarkerTrivia" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ConstKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ConstructSignature" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Constructor" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ConstructorKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ConstructorType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ContinueKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ContinueStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Count" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "DebuggerKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "DebuggerStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "DeclareKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Decorator" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "DefaultClause" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "DefaultKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "DeleteExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "DeleteKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "DoKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "DoStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "DotDotDotToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "DotToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ElementAccessExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ElseKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "EmptyStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "EndOfDeclarationMarker" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "EndOfFileToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "EnumDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "EnumKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "EnumMember" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "EqualsEqualsEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "EqualsEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "EqualsGreaterThanToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "EqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ExclamationEqualsEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ExclamationEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ExclamationToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ExportAssignment" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ExportDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ExportKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ExportSpecifier" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ExpressionStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ExpressionWithTypeArguments" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ExtendsKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ExternalModuleReference" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FalseKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FinallyKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstAssignment" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstBinaryOperator" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstCompoundAssignment" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstContextualKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstFutureReservedWord" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstJSDocNode" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstJSDocTagNode" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstLiteralToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstNode" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstPunctuation" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstReservedWord" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstTemplateToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstTriviaToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FirstTypeNode" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ForInStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ForKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ForOfStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ForStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FromKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FunctionDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FunctionExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FunctionKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "FunctionType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "GetAccessor" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "GetKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "GlobalKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "GreaterThanEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "GreaterThanGreaterThanEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GreaterThanGreaterThanGreaterThanEqualsToken",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "GreaterThanGreaterThanGreaterThanToken",
          },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "GreaterThanGreaterThanToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "GreaterThanToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "HashToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "HeritageClause" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Identifier" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "IfKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "IfStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ImplementsKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ImportClause" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ImportDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ImportEqualsDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ImportKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ImportSpecifier" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ImportType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "InKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "IndexSignature" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "IndexedAccessType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "InferKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "InferType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "InputFiles" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "InstanceOfKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "InterfaceDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "InterfaceKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "IntersectionType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "IntrinsicKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "IsKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocAllType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocAugmentsTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocAuthorTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocCallbackTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocClassTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocComment" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocDeprecatedTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocEnumTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocFunctionType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocImplementsTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocLink" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocLinkCode" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocLinkPlain" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocMemberName" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocNameReference" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocNamepathType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocNonNullableType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocNullableType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocOptionalType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocOverrideTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocParameterTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocPrivateTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocPropertyTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocProtectedTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocPublicTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocReadonlyTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocReturnTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocSeeTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocSignature" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocTemplateTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocText" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocThisTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocTypeExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocTypeLiteral" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocTypeTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocTypedefTag" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocUnknownType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JSDocVariadicType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsxAttribute" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsxAttributes" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsxClosingElement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsxClosingFragment" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsxElement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsxExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsxFragment" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsxOpeningElement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsxOpeningFragment" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsxSelfClosingElement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsxSpreadAttribute" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsxText" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "JsxTextAllWhiteSpaces" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "KeyOfKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LabeledStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastAssignment" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastBinaryOperator" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastCompoundAssignment" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastContextualKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastFutureReservedWord" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastJSDocNode" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastJSDocTagNode" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastLiteralToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastPunctuation" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastReservedWord" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastTemplateToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastTriviaToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LastTypeNode" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LessThanEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LessThanLessThanEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LessThanLessThanToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LessThanSlashToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LessThanToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LetKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "LiteralType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "MappedType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "MergeDeclarationMarker" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "MetaProperty" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "MethodDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "MethodSignature" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "MinusEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "MinusMinusToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "MinusToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "MissingDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ModuleBlock" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ModuleDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ModuleKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "MultiLineCommentTrivia" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NamedExports" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NamedImports" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NamedTupleMember" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NamespaceExport" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NamespaceExportDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NamespaceImport" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NamespaceKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NeverKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NewExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NewKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NewLineTrivia" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NoSubstitutionTemplateLiteral" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NonNullExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NotEmittedStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NullKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NumberKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "NumericLiteral" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ObjectBindingPattern" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ObjectKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ObjectLiteralExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "OfKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "OmittedExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "OpenBraceToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "OpenBracketToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "OpenParenToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "OptionalType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "OverrideKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PackageKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Parameter" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ParenthesizedExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ParenthesizedType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PartiallyEmittedExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PercentEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PercentToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PlusEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PlusPlusToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PlusToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PostfixUnaryExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PrefixUnaryExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PrivateIdentifier" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PrivateKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PropertyAccessExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PropertyAssignment" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PropertyDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PropertySignature" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ProtectedKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "PublicKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "QualifiedName" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "QuestionDotToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "QuestionQuestionEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "QuestionQuestionToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "QuestionToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ReadonlyKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "RegularExpressionLiteral" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "RequireKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "RestType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ReturnKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ReturnStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SemicolonClassElement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SemicolonToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SetAccessor" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SetKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ShebangTrivia" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ShorthandPropertyAssignment" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SingleLineCommentTrivia" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SlashEqualsToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SlashToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SourceFile" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SpreadAssignment" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SpreadElement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "StaticKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "StringKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "StringLiteral" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SuperKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SwitchKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SwitchStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SymbolKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SyntaxList" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SyntheticExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "SyntheticReferenceExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TaggedTemplateExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TemplateExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TemplateHead" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TemplateLiteralType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TemplateLiteralTypeSpan" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TemplateMiddle" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TemplateSpan" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TemplateTail" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ThisKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ThisType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ThrowKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "ThrowStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TildeToken" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TrueKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TryKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TryStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TupleType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TypeAliasDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TypeAssertionExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TypeKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TypeLiteral" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TypeOfExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TypeOfKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TypeOperator" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TypeParameter" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TypePredicate" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TypeQuery" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "TypeReference" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "UndefinedKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "UnionType" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "UniqueKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "Unknown" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "UnknownKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "UnparsedInternalText" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "UnparsedPrepend" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "UnparsedPrologue" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "UnparsedSource" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "UnparsedSyntheticReference" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "UnparsedText" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "VarKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "VariableDeclaration" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "VariableDeclarationList" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "VariableStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "VoidExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "VoidKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "WhileKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "WhileStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "WhitespaceTrivia" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "WithKeyword" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "WithStatement" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "YieldExpression" },
          directives: [],
        },
        {
          kind: "EnumValueDefinition",
          name: { kind: "Name", value: "YieldKeyword" },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "ThisTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Token" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "TupleTypeNode" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "elementTypes" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "Node" },
                },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "TypeAliasDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "HasJSDoc" } },
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "jsDoc" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "JSDoc" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "type" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeParameters" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "TypeParameterDeclaration" },
              },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "TypeLiteral" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "TypeParameterDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "constraint" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "default" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "expression" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "TypeReference" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "text" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeArguments" },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Node" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "UNKNOWN_NODE" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "UnionType" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "types" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "Node" },
                },
              },
            },
          },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "UnnamedNode" },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "text" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
      ],
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "VariableDeclaration" },
      interfaces: [
        { kind: "NamedType", name: { kind: "Name", value: "Node" } },
      ],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "end" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "flags" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "NodeFlags" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kind" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "SyntaxKind" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "kindCode" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "modifiers" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Token" },
              },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "nameText" },
          arguments: [],
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "parent" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Node" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "pos" },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "rawText" },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "only" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "skip" },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "SyntaxKind" },
                },
              },
              directives: [],
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
          directives: [],
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "typeName" },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "DeclarationName" },
          },
          directives: [],
        },
      ],
    },
  ],
});

export const ENUMS = Object.freeze({
  Ambient: true,
  AwaitContext: true,
  BlockScoped: true,
  Const: true,
  ContainsThis: true,
  ContextFlags: true,
  DecoratorContext: true,
  Deprecated: true,
  DisallowInContext: true,
  ExportContext: true,
  GlobalAugmentation: true,
  HasAggregatedChildData: true,
  HasAsyncFunctions: true,
  HasExplicitReturn: true,
  HasImplicitReturn: true,
  InWithStatement: true,
  JSDoc: true,
  JavaScriptFile: true,
  JsonFile: true,
  Let: true,
  Namespace: true,
  NestedNamespace: true,
  None: true,
  OptionalChain: true,
  PermanentlySetIncrementalFlags: true,
  PossiblyContainsDynamicImport: true,
  PossiblyContainsImportMeta: true,
  ReachabilityAndEmitFlags: true,
  ReachabilityCheckFlags: true,
  Synthesized: true,
  ThisNodeHasError: true,
  ThisNodeOrAnySubNodesHasError: true,
  TypeCached: true,
  TypeExcludesFlags: true,
  UNKNOWN: true,
  YieldContext: true,
  AbstractKeyword: true,
  AmpersandAmpersandEqualsToken: true,
  AmpersandAmpersandToken: true,
  AmpersandEqualsToken: true,
  AmpersandToken: true,
  AnyKeyword: true,
  ArrayBindingPattern: true,
  ArrayLiteralExpression: true,
  ArrayType: true,
  ArrowFunction: true,
  AsExpression: true,
  AsKeyword: true,
  AssertClause: true,
  AssertEntry: true,
  AssertKeyword: true,
  AssertsKeyword: true,
  AsteriskAsteriskEqualsToken: true,
  AsteriskAsteriskToken: true,
  AsteriskEqualsToken: true,
  AsteriskToken: true,
  AsyncKeyword: true,
  AtToken: true,
  AwaitExpression: true,
  AwaitKeyword: true,
  BacktickToken: true,
  BarBarEqualsToken: true,
  BarBarToken: true,
  BarEqualsToken: true,
  BarToken: true,
  BigIntKeyword: true,
  BigIntLiteral: true,
  BinaryExpression: true,
  BindingElement: true,
  Block: true,
  BooleanKeyword: true,
  BreakKeyword: true,
  BreakStatement: true,
  Bundle: true,
  CallExpression: true,
  CallSignature: true,
  CaretEqualsToken: true,
  CaretToken: true,
  CaseBlock: true,
  CaseClause: true,
  CaseKeyword: true,
  CatchClause: true,
  CatchKeyword: true,
  ClassDeclaration: true,
  ClassExpression: true,
  ClassKeyword: true,
  ClassStaticBlockDeclaration: true,
  CloseBraceToken: true,
  CloseBracketToken: true,
  CloseParenToken: true,
  ColonToken: true,
  CommaListExpression: true,
  CommaToken: true,
  ComputedPropertyName: true,
  ConditionalExpression: true,
  ConditionalType: true,
  ConflictMarkerTrivia: true,
  ConstKeyword: true,
  ConstructSignature: true,
  Constructor: true,
  ConstructorKeyword: true,
  ConstructorType: true,
  ContinueKeyword: true,
  ContinueStatement: true,
  Count: true,
  DebuggerKeyword: true,
  DebuggerStatement: true,
  DeclareKeyword: true,
  Decorator: true,
  DefaultClause: true,
  DefaultKeyword: true,
  DeleteExpression: true,
  DeleteKeyword: true,
  DoKeyword: true,
  DoStatement: true,
  DotDotDotToken: true,
  DotToken: true,
  ElementAccessExpression: true,
  ElseKeyword: true,
  EmptyStatement: true,
  EndOfDeclarationMarker: true,
  EndOfFileToken: true,
  EnumDeclaration: true,
  EnumKeyword: true,
  EnumMember: true,
  EqualsEqualsEqualsToken: true,
  EqualsEqualsToken: true,
  EqualsGreaterThanToken: true,
  EqualsToken: true,
  ExclamationEqualsEqualsToken: true,
  ExclamationEqualsToken: true,
  ExclamationToken: true,
  ExportAssignment: true,
  ExportDeclaration: true,
  ExportKeyword: true,
  ExportSpecifier: true,
  ExpressionStatement: true,
  ExpressionWithTypeArguments: true,
  ExtendsKeyword: true,
  ExternalModuleReference: true,
  FalseKeyword: true,
  FinallyKeyword: true,
  FirstAssignment: true,
  FirstBinaryOperator: true,
  FirstCompoundAssignment: true,
  FirstContextualKeyword: true,
  FirstFutureReservedWord: true,
  FirstJSDocNode: true,
  FirstJSDocTagNode: true,
  FirstKeyword: true,
  FirstLiteralToken: true,
  FirstNode: true,
  FirstPunctuation: true,
  FirstReservedWord: true,
  FirstStatement: true,
  FirstTemplateToken: true,
  FirstToken: true,
  FirstTriviaToken: true,
  FirstTypeNode: true,
  ForInStatement: true,
  ForKeyword: true,
  ForOfStatement: true,
  ForStatement: true,
  FromKeyword: true,
  FunctionDeclaration: true,
  FunctionExpression: true,
  FunctionKeyword: true,
  FunctionType: true,
  GetAccessor: true,
  GetKeyword: true,
  GlobalKeyword: true,
  GreaterThanEqualsToken: true,
  GreaterThanGreaterThanEqualsToken: true,
  GreaterThanGreaterThanGreaterThanEqualsToken: true,
  GreaterThanGreaterThanGreaterThanToken: true,
  GreaterThanGreaterThanToken: true,
  GreaterThanToken: true,
  HashToken: true,
  HeritageClause: true,
  Identifier: true,
  IfKeyword: true,
  IfStatement: true,
  ImplementsKeyword: true,
  ImportClause: true,
  ImportDeclaration: true,
  ImportEqualsDeclaration: true,
  ImportKeyword: true,
  ImportSpecifier: true,
  ImportType: true,
  InKeyword: true,
  IndexSignature: true,
  IndexedAccessType: true,
  InferKeyword: true,
  InferType: true,
  InputFiles: true,
  InstanceOfKeyword: true,
  InterfaceDeclaration: true,
  InterfaceKeyword: true,
  IntersectionType: true,
  IntrinsicKeyword: true,
  IsKeyword: true,
  JSDocAllType: true,
  JSDocAugmentsTag: true,
  JSDocAuthorTag: true,
  JSDocCallbackTag: true,
  JSDocClassTag: true,
  JSDocComment: true,
  JSDocDeprecatedTag: true,
  JSDocEnumTag: true,
  JSDocFunctionType: true,
  JSDocImplementsTag: true,
  JSDocLink: true,
  JSDocLinkCode: true,
  JSDocLinkPlain: true,
  JSDocMemberName: true,
  JSDocNameReference: true,
  JSDocNamepathType: true,
  JSDocNonNullableType: true,
  JSDocNullableType: true,
  JSDocOptionalType: true,
  JSDocOverrideTag: true,
  JSDocParameterTag: true,
  JSDocPrivateTag: true,
  JSDocPropertyTag: true,
  JSDocProtectedTag: true,
  JSDocPublicTag: true,
  JSDocReadonlyTag: true,
  JSDocReturnTag: true,
  JSDocSeeTag: true,
  JSDocSignature: true,
  JSDocTag: true,
  JSDocTemplateTag: true,
  JSDocText: true,
  JSDocThisTag: true,
  JSDocTypeExpression: true,
  JSDocTypeLiteral: true,
  JSDocTypeTag: true,
  JSDocTypedefTag: true,
  JSDocUnknownType: true,
  JSDocVariadicType: true,
  JsxAttribute: true,
  JsxAttributes: true,
  JsxClosingElement: true,
  JsxClosingFragment: true,
  JsxElement: true,
  JsxExpression: true,
  JsxFragment: true,
  JsxOpeningElement: true,
  JsxOpeningFragment: true,
  JsxSelfClosingElement: true,
  JsxSpreadAttribute: true,
  JsxText: true,
  JsxTextAllWhiteSpaces: true,
  KeyOfKeyword: true,
  LabeledStatement: true,
  LastAssignment: true,
  LastBinaryOperator: true,
  LastCompoundAssignment: true,
  LastContextualKeyword: true,
  LastFutureReservedWord: true,
  LastJSDocNode: true,
  LastJSDocTagNode: true,
  LastKeyword: true,
  LastLiteralToken: true,
  LastPunctuation: true,
  LastReservedWord: true,
  LastStatement: true,
  LastTemplateToken: true,
  LastToken: true,
  LastTriviaToken: true,
  LastTypeNode: true,
  LessThanEqualsToken: true,
  LessThanLessThanEqualsToken: true,
  LessThanLessThanToken: true,
  LessThanSlashToken: true,
  LessThanToken: true,
  LetKeyword: true,
  LiteralType: true,
  MappedType: true,
  MergeDeclarationMarker: true,
  MetaProperty: true,
  MethodDeclaration: true,
  MethodSignature: true,
  MinusEqualsToken: true,
  MinusMinusToken: true,
  MinusToken: true,
  MissingDeclaration: true,
  ModuleBlock: true,
  ModuleDeclaration: true,
  ModuleKeyword: true,
  MultiLineCommentTrivia: true,
  NamedExports: true,
  NamedImports: true,
  NamedTupleMember: true,
  NamespaceExport: true,
  NamespaceExportDeclaration: true,
  NamespaceImport: true,
  NamespaceKeyword: true,
  NeverKeyword: true,
  NewExpression: true,
  NewKeyword: true,
  NewLineTrivia: true,
  NoSubstitutionTemplateLiteral: true,
  NonNullExpression: true,
  NotEmittedStatement: true,
  NullKeyword: true,
  NumberKeyword: true,
  NumericLiteral: true,
  ObjectBindingPattern: true,
  ObjectKeyword: true,
  ObjectLiteralExpression: true,
  OfKeyword: true,
  OmittedExpression: true,
  OpenBraceToken: true,
  OpenBracketToken: true,
  OpenParenToken: true,
  OptionalType: true,
  OverrideKeyword: true,
  PackageKeyword: true,
  Parameter: true,
  ParenthesizedExpression: true,
  ParenthesizedType: true,
  PartiallyEmittedExpression: true,
  PercentEqualsToken: true,
  PercentToken: true,
  PlusEqualsToken: true,
  PlusPlusToken: true,
  PlusToken: true,
  PostfixUnaryExpression: true,
  PrefixUnaryExpression: true,
  PrivateIdentifier: true,
  PrivateKeyword: true,
  PropertyAccessExpression: true,
  PropertyAssignment: true,
  PropertyDeclaration: true,
  PropertySignature: true,
  ProtectedKeyword: true,
  PublicKeyword: true,
  QualifiedName: true,
  QuestionDotToken: true,
  QuestionQuestionEqualsToken: true,
  QuestionQuestionToken: true,
  QuestionToken: true,
  ReadonlyKeyword: true,
  RegularExpressionLiteral: true,
  RequireKeyword: true,
  RestType: true,
  ReturnKeyword: true,
  ReturnStatement: true,
  SemicolonClassElement: true,
  SemicolonToken: true,
  SetAccessor: true,
  SetKeyword: true,
  ShebangTrivia: true,
  ShorthandPropertyAssignment: true,
  SingleLineCommentTrivia: true,
  SlashEqualsToken: true,
  SlashToken: true,
  SourceFile: true,
  SpreadAssignment: true,
  SpreadElement: true,
  StaticKeyword: true,
  StringKeyword: true,
  StringLiteral: true,
  SuperKeyword: true,
  SwitchKeyword: true,
  SwitchStatement: true,
  SymbolKeyword: true,
  SyntaxList: true,
  SyntheticExpression: true,
  SyntheticReferenceExpression: true,
  TaggedTemplateExpression: true,
  TemplateExpression: true,
  TemplateHead: true,
  TemplateLiteralType: true,
  TemplateLiteralTypeSpan: true,
  TemplateMiddle: true,
  TemplateSpan: true,
  TemplateTail: true,
  ThisKeyword: true,
  ThisType: true,
  ThrowKeyword: true,
  ThrowStatement: true,
  TildeToken: true,
  TrueKeyword: true,
  TryKeyword: true,
  TryStatement: true,
  TupleType: true,
  TypeAliasDeclaration: true,
  TypeAssertionExpression: true,
  TypeKeyword: true,
  TypeLiteral: true,
  TypeOfExpression: true,
  TypeOfKeyword: true,
  TypeOperator: true,
  TypeParameter: true,
  TypePredicate: true,
  TypeQuery: true,
  TypeReference: true,
  UndefinedKeyword: true,
  UnionType: true,
  UniqueKeyword: true,
  Unknown: true,
  UnknownKeyword: true,
  UnparsedInternalText: true,
  UnparsedPrepend: true,
  UnparsedPrologue: true,
  UnparsedSource: true,
  UnparsedSyntheticReference: true,
  UnparsedText: true,
  VarKeyword: true,
  VariableDeclaration: true,
  VariableDeclarationList: true,
  VariableStatement: true,
  VoidExpression: true,
  VoidKeyword: true,
  WhileKeyword: true,
  WhileStatement: true,
  WhitespaceTrivia: true,
  WithKeyword: true,
  WithStatement: true,
  YieldExpression: true,
  YieldKeyword: true,
  SCALAR: true,
  OBJECT: true,
  INTERFACE: true,
  UNION: true,
  ENUM: true,
  INPUT_OBJECT: true,
  LIST: true,
  NON_NULL: true,
  QUERY: true,
  MUTATION: true,
  SUBSCRIPTION: true,
  FIELD: true,
  FRAGMENT_DEFINITION: true,
  FRAGMENT_SPREAD: true,
  INLINE_FRAGMENT: true,
  VARIABLE_DEFINITION: true,
  SCHEMA: true,
  FIELD_DEFINITION: true,
  ARGUMENT_DEFINITION: true,
  ENUM_VALUE: true,
  INPUT_FIELD_DEFINITION: true,
} as const);

export interface IArrayTypeNode extends INode {
  readonly __typename: "ArrayTypeNode";
  readonly elementType: INode;
}

export interface IBindingPattern extends INode {
  readonly __typename: "BindingPattern";
}

export interface ICallSignatureDeclaration extends INode {
  readonly __typename: "CallSignatureDeclaration";
}

export interface IClassDeclaration extends IHasJSDoc, INode {
  readonly __typename: "ClassDeclaration";
  members(variables: {
    only: SyntaxKind | undefined;
    skip: SyntaxKind | undefined;
  }): ReadonlyArray<INode>;
}

export interface IComputedPropertyName extends INode {
  readonly __typename: "ComputedPropertyName";
}

export interface IConditionalTypeNode extends INode {
  readonly __typename: "ConditionalTypeNode";
  readonly checkType: INode;
  readonly extendsType: INode;
  readonly falseType: INode;
  readonly trueType: INode;
}

export interface IConstructSignatureDeclaration extends INode {
  readonly __typename: "ConstructSignatureDeclaration";
}

export interface IConstructorDeclaration
  extends IHasJSDoc,
    IMaybeOptional,
    INode {
  readonly __typename: "ConstructorDeclaration";
  readonly asteriskToken: IToken | null;
  readonly exclamationToken: IToken | null;
  readonly parameters: ReadonlyArray<IParameterDeclaration>;
  readonly type: INode | null;
  readonly typeParameters: ReadonlyArray<ITypeParameterDeclaration> | null;
}

export interface IConstructorTypeNode extends INode {
  readonly __typename: "ConstructorTypeNode";
  readonly type: INode;
}

export type IDeclarationName =
  | IBindingPattern
  | IComputedPropertyName
  | IIdentifier
  | INumericLiteral
  | IQualifiedName
  | IStringLiteralLike
  | IUnnamedNode;

export interface IEnumDeclaration extends IHasJSDoc, INode {
  readonly __typename: "EnumDeclaration";
  readonly members: ReadonlyArray<INode>;
}

export interface IExportAssignment extends INode {
  readonly __typename: "ExportAssignment";
}

export interface IExportDeclaration extends INode {
  readonly __typename: "ExportDeclaration";
}

export interface IFunctionDeclaration extends IHasJSDoc, IMaybeOptional, INode {
  readonly __typename: "FunctionDeclaration";
  readonly asteriskToken: IToken | null;
  readonly exclamationToken: IToken | null;
  readonly parameters: ReadonlyArray<IParameterDeclaration>;
  readonly type: INode | null;
  readonly typeParameters: ReadonlyArray<ITypeParameterDeclaration> | null;
}

export interface IFunctionTypeNode extends INode {
  readonly __typename: "FunctionTypeNode";
  readonly type: INode;
}

export interface IGetAccessorDeclaration
  extends IHasJSDoc,
    IMaybeOptional,
    INode {
  readonly __typename: "GetAccessorDeclaration";
  readonly asteriskToken: IToken | null;
  readonly exclamationToken: IToken | null;
  readonly parameters: ReadonlyArray<IParameterDeclaration>;
  readonly type: INode | null;
  readonly typeParameters: ReadonlyArray<ITypeParameterDeclaration> | null;
}

export interface IHasJSDoc {
  readonly __typename:
    | "ClassDeclaration"
    | "ConstructorDeclaration"
    | "EnumDeclaration"
    | "FunctionDeclaration"
    | "GetAccessorDeclaration"
    | "IndexSignatureDeclaration"
    | "InterfaceDeclaration"
    | "MethodDeclaration"
    | "ModuleDeclaration"
    | "NamespaceDeclaration"
    | "ParameterDeclaration"
    | "PropertyDeclaration"
    | "PropertySignature"
    | "SetAccessorDeclaration"
    | "TypeAliasDeclaration";
  readonly jsDoc: ReadonlyArray<IJSDoc> | null;
}

export interface IIdentifier extends INode {
  readonly __typename: "Identifier";
  readonly text: string;
}

export interface IImportDeclaration extends INode {
  readonly __typename: "ImportDeclaration";
}

export interface IImportEqualsDeclaration extends INode {
  readonly __typename: "ImportEqualsDeclaration";
}

export interface IImportTypeNode extends INode {
  readonly __typename: "ImportTypeNode";
}

export interface IIndexSignatureDeclaration extends IHasJSDoc, INode {
  readonly __typename: "IndexSignatureDeclaration";
}

export interface IIndexedAccessTypeNode extends INode {
  readonly __typename: "IndexedAccessTypeNode";
}

export interface IInferTypeNode extends INode {
  readonly __typename: "InferTypeNode";
  readonly typeParameter: INode;
}

export interface IInterfaceDeclaration extends IHasJSDoc, INode {
  readonly __typename: "InterfaceDeclaration";
}

export interface IIntersectionTypeNode extends INode {
  readonly __typename: "IntersectionTypeNode";
  readonly types: ReadonlyArray<INode>;
}

export interface IJSDoc {
  readonly __typename: "JSDoc";
  readonly comment: string | null;
  readonly tags: ReadonlyArray<IJSDocTag>;
}

export interface IJSDocAugmentsTag extends IJSDocTag {
  readonly __typename: "JSDocAugmentsTag";
}

export interface IJSDocClassTag extends IJSDocTag {
  readonly __typename: "JSDocClassTag";
}

export interface IJSDocEnumTag extends IJSDocTag {
  readonly __typename: "JSDocEnumTag";
}

export interface IJSDocNamespaceDeclaration extends INode {
  readonly __typename: "JSDocNamespaceDeclaration";
}

export interface IJSDocReturnTag extends IJSDocTag {
  readonly __typename: "JSDocReturnTag";
}

export interface IJSDocTag {
  readonly __typename:
    | "JSDocAugmentsTag"
    | "JSDocClassTag"
    | "JSDocEnumTag"
    | "JSDocReturnTag"
    | "JSDocTemplateTag"
    | "JSDocThisTag"
    | "JSDocTypeTag"
    | "JSDocUnknownTag";
  readonly comment: string | null;
  readonly tagName: string | null;
}

export interface IJSDocTemplateTag extends IJSDocTag {
  readonly __typename: "JSDocTemplateTag";
}

export interface IJSDocThisTag extends IJSDocTag {
  readonly __typename: "JSDocThisTag";
}

export interface IJSDocTypeTag extends IJSDocTag {
  readonly __typename: "JSDocTypeTag";
}

export interface IJSDocUnknownTag extends IJSDocTag {
  readonly __typename: "JSDocUnknownTag";
}

export interface IKeywordTypeNode extends INode {
  readonly __typename: "KeywordTypeNode";
}

export interface ILiteralType extends INode {
  readonly __typename: "LiteralType";
}

export interface IMappedTypeNode extends INode {
  readonly __typename: "MappedTypeNode";
}

export interface IMaybeOptional {
  readonly __typename:
    | "ConstructorDeclaration"
    | "FunctionDeclaration"
    | "GetAccessorDeclaration"
    | "MethodDeclaration"
    | "PropertyDeclaration"
    | "PropertySignature"
    | "SetAccessorDeclaration";
  readonly questionToken: IToken | null;
}

export interface IMethodDeclaration extends IHasJSDoc, IMaybeOptional, INode {
  readonly __typename: "MethodDeclaration";
  readonly asteriskToken: IToken | null;
  readonly exclamationToken: IToken | null;
  readonly parameters: ReadonlyArray<IParameterDeclaration>;
  readonly type: INode | null;
  readonly typeParameters: ReadonlyArray<ITypeParameterDeclaration> | null;
}

export interface IMissingDeclaration extends INode {
  readonly __typename: "MissingDeclaration";
}

export interface IModuleDeclaration extends IHasJSDoc, INode {
  readonly __typename: "ModuleDeclaration";
}

export interface INamespaceDeclaration extends IHasJSDoc, INode {
  readonly __typename: "NamespaceDeclaration";
}

export interface INamespaceExportDeclaration extends INode {
  readonly __typename: "NamespaceExportDeclaration";
}

export interface INode {
  readonly __typename:
    | "ArrayTypeNode"
    | "BindingPattern"
    | "CallSignatureDeclaration"
    | "ClassDeclaration"
    | "ComputedPropertyName"
    | "ConditionalTypeNode"
    | "ConstructSignatureDeclaration"
    | "ConstructorDeclaration"
    | "ConstructorTypeNode"
    | "EnumDeclaration"
    | "ExportAssignment"
    | "ExportDeclaration"
    | "FunctionDeclaration"
    | "FunctionTypeNode"
    | "GetAccessorDeclaration"
    | "Identifier"
    | "ImportDeclaration"
    | "ImportEqualsDeclaration"
    | "ImportTypeNode"
    | "IndexSignatureDeclaration"
    | "IndexedAccessTypeNode"
    | "InferTypeNode"
    | "InterfaceDeclaration"
    | "IntersectionTypeNode"
    | "JSDocNamespaceDeclaration"
    | "KeywordTypeNode"
    | "LiteralType"
    | "MappedTypeNode"
    | "MethodDeclaration"
    | "MissingDeclaration"
    | "ModuleDeclaration"
    | "NamespaceDeclaration"
    | "NamespaceExportDeclaration"
    | "NumericLiteral"
    | "OptionalTypeNode"
    | "ParameterDeclaration"
    | "ParenthesizedType"
    | "PropertyDeclaration"
    | "PropertyLikeDeclaration"
    | "PropertySignature"
    | "QualifiedName"
    | "RestTypeNode"
    | "SetAccessorDeclaration"
    | "SourceFile"
    | "StringLiteral"
    | "StringLiteralLike"
    | "ThisTypeNode"
    | "TupleTypeNode"
    | "TypeAliasDeclaration"
    | "TypeLiteral"
    | "TypeParameterDeclaration"
    | "TypeReference"
    | "UNKNOWN_NODE"
    | "UnionType"
    | "VariableDeclaration";
  readonly end: number;
  readonly flags: NodeFlags;
  readonly kind: SyntaxKind;
  readonly kindCode: number;
  modifiers(variables: {
    only: SyntaxKind | undefined;
    skip: SyntaxKind | undefined;
  }): ReadonlyArray<IToken> | null;
  readonly name: IDeclarationName | null;
  readonly nameText: string | null;
  readonly parent: INode;
  readonly pos: number;
  rawText(variables: {
    only: SyntaxKind | undefined;
    skip: SyntaxKind | undefined;
  }): string;
  readonly typeName: IDeclarationName | null;
}

export enum NodeFlags {
  Ambient = "Ambient",
  AwaitContext = "AwaitContext",
  BlockScoped = "BlockScoped",
  Const = "Const",
  ContainsThis = "ContainsThis",
  ContextFlags = "ContextFlags",
  DecoratorContext = "DecoratorContext",
  Deprecated = "Deprecated",
  DisallowInContext = "DisallowInContext",
  ExportContext = "ExportContext",
  GlobalAugmentation = "GlobalAugmentation",
  HasAggregatedChildData = "HasAggregatedChildData",
  HasAsyncFunctions = "HasAsyncFunctions",
  HasExplicitReturn = "HasExplicitReturn",
  HasImplicitReturn = "HasImplicitReturn",
  InWithStatement = "InWithStatement",
  JSDoc = "JSDoc",
  JavaScriptFile = "JavaScriptFile",
  JsonFile = "JsonFile",
  Let = "Let",
  Namespace = "Namespace",
  NestedNamespace = "NestedNamespace",
  None = "None",
  OptionalChain = "OptionalChain",
  PermanentlySetIncrementalFlags = "PermanentlySetIncrementalFlags",
  PossiblyContainsDynamicImport = "PossiblyContainsDynamicImport",
  PossiblyContainsImportMeta = "PossiblyContainsImportMeta",
  ReachabilityAndEmitFlags = "ReachabilityAndEmitFlags",
  ReachabilityCheckFlags = "ReachabilityCheckFlags",
  Synthesized = "Synthesized",
  ThisNodeHasError = "ThisNodeHasError",
  ThisNodeOrAnySubNodesHasError = "ThisNodeOrAnySubNodesHasError",
  TypeCached = "TypeCached",
  TypeExcludesFlags = "TypeExcludesFlags",
  UNKNOWN = "UNKNOWN",
  YieldContext = "YieldContext",
}

export interface INumericLiteral extends INode {
  readonly __typename: "NumericLiteral";
}

export interface IOptionalTypeNode extends INode {
  readonly __typename: "OptionalTypeNode";
  readonly type: INode;
}

export interface IParameterDeclaration extends IHasJSDoc, INode {
  readonly __typename: "ParameterDeclaration";
  readonly type: INode;
}

export interface IParenthesizedType extends INode {
  readonly __typename: "ParenthesizedType";
  readonly type: INode;
}

export interface IPropertyDeclaration extends IHasJSDoc, IMaybeOptional, INode {
  readonly __typename: "PropertyDeclaration";
}

export interface IPropertyLikeDeclaration extends INode {
  readonly __typename: "PropertyLikeDeclaration";
}

export interface IPropertySignature extends IHasJSDoc, IMaybeOptional, INode {
  readonly __typename: "PropertySignature";
  readonly type: INode | null;
}

export interface IQualifiedName extends INode {
  readonly __typename: "QualifiedName";
}

export interface IQuery {
  readonly __typename: "Query";
  parseFile(variables: { file: string }): ISourceFile;
}

export interface IRestTypeNode extends INode {
  readonly __typename: "RestTypeNode";
  readonly type: INode;
}

export interface ISetAccessorDeclaration
  extends IHasJSDoc,
    IMaybeOptional,
    INode {
  readonly __typename: "SetAccessorDeclaration";
  readonly asteriskToken: IToken | null;
  readonly exclamationToken: IToken | null;
  readonly parameters: ReadonlyArray<IParameterDeclaration>;
  readonly type: INode | null;
  readonly typeParameters: ReadonlyArray<ITypeParameterDeclaration> | null;
}

export interface ISourceFile extends INode {
  readonly __typename: "SourceFile";
  statements(variables: {
    only: SyntaxKind | undefined;
    skip: SyntaxKind | undefined;
  }): ReadonlyArray<INode>;
}

export interface IStringLiteral extends INode {
  readonly __typename: "StringLiteral";
}

export interface IStringLiteralLike extends INode {
  readonly __typename: "StringLiteralLike";
}

export enum SyntaxKind {
  AbstractKeyword = "AbstractKeyword",
  AmpersandAmpersandEqualsToken = "AmpersandAmpersandEqualsToken",
  AmpersandAmpersandToken = "AmpersandAmpersandToken",
  AmpersandEqualsToken = "AmpersandEqualsToken",
  AmpersandToken = "AmpersandToken",
  AnyKeyword = "AnyKeyword",
  ArrayBindingPattern = "ArrayBindingPattern",
  ArrayLiteralExpression = "ArrayLiteralExpression",
  ArrayType = "ArrayType",
  ArrowFunction = "ArrowFunction",
  AsExpression = "AsExpression",
  AsKeyword = "AsKeyword",
  AssertClause = "AssertClause",
  AssertEntry = "AssertEntry",
  AssertKeyword = "AssertKeyword",
  AssertsKeyword = "AssertsKeyword",
  AsteriskAsteriskEqualsToken = "AsteriskAsteriskEqualsToken",
  AsteriskAsteriskToken = "AsteriskAsteriskToken",
  AsteriskEqualsToken = "AsteriskEqualsToken",
  AsteriskToken = "AsteriskToken",
  AsyncKeyword = "AsyncKeyword",
  AtToken = "AtToken",
  AwaitExpression = "AwaitExpression",
  AwaitKeyword = "AwaitKeyword",
  BacktickToken = "BacktickToken",
  BarBarEqualsToken = "BarBarEqualsToken",
  BarBarToken = "BarBarToken",
  BarEqualsToken = "BarEqualsToken",
  BarToken = "BarToken",
  BigIntKeyword = "BigIntKeyword",
  BigIntLiteral = "BigIntLiteral",
  BinaryExpression = "BinaryExpression",
  BindingElement = "BindingElement",
  Block = "Block",
  BooleanKeyword = "BooleanKeyword",
  BreakKeyword = "BreakKeyword",
  BreakStatement = "BreakStatement",
  Bundle = "Bundle",
  CallExpression = "CallExpression",
  CallSignature = "CallSignature",
  CaretEqualsToken = "CaretEqualsToken",
  CaretToken = "CaretToken",
  CaseBlock = "CaseBlock",
  CaseClause = "CaseClause",
  CaseKeyword = "CaseKeyword",
  CatchClause = "CatchClause",
  CatchKeyword = "CatchKeyword",
  ClassDeclaration = "ClassDeclaration",
  ClassExpression = "ClassExpression",
  ClassKeyword = "ClassKeyword",
  ClassStaticBlockDeclaration = "ClassStaticBlockDeclaration",
  CloseBraceToken = "CloseBraceToken",
  CloseBracketToken = "CloseBracketToken",
  CloseParenToken = "CloseParenToken",
  ColonToken = "ColonToken",
  CommaListExpression = "CommaListExpression",
  CommaToken = "CommaToken",
  ComputedPropertyName = "ComputedPropertyName",
  ConditionalExpression = "ConditionalExpression",
  ConditionalType = "ConditionalType",
  ConflictMarkerTrivia = "ConflictMarkerTrivia",
  ConstKeyword = "ConstKeyword",
  ConstructSignature = "ConstructSignature",
  Constructor = "Constructor",
  ConstructorKeyword = "ConstructorKeyword",
  ConstructorType = "ConstructorType",
  ContinueKeyword = "ContinueKeyword",
  ContinueStatement = "ContinueStatement",
  Count = "Count",
  DebuggerKeyword = "DebuggerKeyword",
  DebuggerStatement = "DebuggerStatement",
  DeclareKeyword = "DeclareKeyword",
  Decorator = "Decorator",
  DefaultClause = "DefaultClause",
  DefaultKeyword = "DefaultKeyword",
  DeleteExpression = "DeleteExpression",
  DeleteKeyword = "DeleteKeyword",
  DoKeyword = "DoKeyword",
  DoStatement = "DoStatement",
  DotDotDotToken = "DotDotDotToken",
  DotToken = "DotToken",
  ElementAccessExpression = "ElementAccessExpression",
  ElseKeyword = "ElseKeyword",
  EmptyStatement = "EmptyStatement",
  EndOfDeclarationMarker = "EndOfDeclarationMarker",
  EndOfFileToken = "EndOfFileToken",
  EnumDeclaration = "EnumDeclaration",
  EnumKeyword = "EnumKeyword",
  EnumMember = "EnumMember",
  EqualsEqualsEqualsToken = "EqualsEqualsEqualsToken",
  EqualsEqualsToken = "EqualsEqualsToken",
  EqualsGreaterThanToken = "EqualsGreaterThanToken",
  EqualsToken = "EqualsToken",
  ExclamationEqualsEqualsToken = "ExclamationEqualsEqualsToken",
  ExclamationEqualsToken = "ExclamationEqualsToken",
  ExclamationToken = "ExclamationToken",
  ExportAssignment = "ExportAssignment",
  ExportDeclaration = "ExportDeclaration",
  ExportKeyword = "ExportKeyword",
  ExportSpecifier = "ExportSpecifier",
  ExpressionStatement = "ExpressionStatement",
  ExpressionWithTypeArguments = "ExpressionWithTypeArguments",
  ExtendsKeyword = "ExtendsKeyword",
  ExternalModuleReference = "ExternalModuleReference",
  FalseKeyword = "FalseKeyword",
  FinallyKeyword = "FinallyKeyword",
  FirstAssignment = "FirstAssignment",
  FirstBinaryOperator = "FirstBinaryOperator",
  FirstCompoundAssignment = "FirstCompoundAssignment",
  FirstContextualKeyword = "FirstContextualKeyword",
  FirstFutureReservedWord = "FirstFutureReservedWord",
  FirstJSDocNode = "FirstJSDocNode",
  FirstJSDocTagNode = "FirstJSDocTagNode",
  FirstKeyword = "FirstKeyword",
  FirstLiteralToken = "FirstLiteralToken",
  FirstNode = "FirstNode",
  FirstPunctuation = "FirstPunctuation",
  FirstReservedWord = "FirstReservedWord",
  FirstStatement = "FirstStatement",
  FirstTemplateToken = "FirstTemplateToken",
  FirstToken = "FirstToken",
  FirstTriviaToken = "FirstTriviaToken",
  FirstTypeNode = "FirstTypeNode",
  ForInStatement = "ForInStatement",
  ForKeyword = "ForKeyword",
  ForOfStatement = "ForOfStatement",
  ForStatement = "ForStatement",
  FromKeyword = "FromKeyword",
  FunctionDeclaration = "FunctionDeclaration",
  FunctionExpression = "FunctionExpression",
  FunctionKeyword = "FunctionKeyword",
  FunctionType = "FunctionType",
  GetAccessor = "GetAccessor",
  GetKeyword = "GetKeyword",
  GlobalKeyword = "GlobalKeyword",
  GreaterThanEqualsToken = "GreaterThanEqualsToken",
  GreaterThanGreaterThanEqualsToken = "GreaterThanGreaterThanEqualsToken",
  GreaterThanGreaterThanGreaterThanEqualsToken = "GreaterThanGreaterThanGreaterThanEqualsToken",
  GreaterThanGreaterThanGreaterThanToken = "GreaterThanGreaterThanGreaterThanToken",
  GreaterThanGreaterThanToken = "GreaterThanGreaterThanToken",
  GreaterThanToken = "GreaterThanToken",
  HashToken = "HashToken",
  HeritageClause = "HeritageClause",
  Identifier = "Identifier",
  IfKeyword = "IfKeyword",
  IfStatement = "IfStatement",
  ImplementsKeyword = "ImplementsKeyword",
  ImportClause = "ImportClause",
  ImportDeclaration = "ImportDeclaration",
  ImportEqualsDeclaration = "ImportEqualsDeclaration",
  ImportKeyword = "ImportKeyword",
  ImportSpecifier = "ImportSpecifier",
  ImportType = "ImportType",
  InKeyword = "InKeyword",
  IndexSignature = "IndexSignature",
  IndexedAccessType = "IndexedAccessType",
  InferKeyword = "InferKeyword",
  InferType = "InferType",
  InputFiles = "InputFiles",
  InstanceOfKeyword = "InstanceOfKeyword",
  InterfaceDeclaration = "InterfaceDeclaration",
  InterfaceKeyword = "InterfaceKeyword",
  IntersectionType = "IntersectionType",
  IntrinsicKeyword = "IntrinsicKeyword",
  IsKeyword = "IsKeyword",
  JSDocAllType = "JSDocAllType",
  JSDocAugmentsTag = "JSDocAugmentsTag",
  JSDocAuthorTag = "JSDocAuthorTag",
  JSDocCallbackTag = "JSDocCallbackTag",
  JSDocClassTag = "JSDocClassTag",
  JSDocComment = "JSDocComment",
  JSDocDeprecatedTag = "JSDocDeprecatedTag",
  JSDocEnumTag = "JSDocEnumTag",
  JSDocFunctionType = "JSDocFunctionType",
  JSDocImplementsTag = "JSDocImplementsTag",
  JSDocLink = "JSDocLink",
  JSDocLinkCode = "JSDocLinkCode",
  JSDocLinkPlain = "JSDocLinkPlain",
  JSDocMemberName = "JSDocMemberName",
  JSDocNameReference = "JSDocNameReference",
  JSDocNamepathType = "JSDocNamepathType",
  JSDocNonNullableType = "JSDocNonNullableType",
  JSDocNullableType = "JSDocNullableType",
  JSDocOptionalType = "JSDocOptionalType",
  JSDocOverrideTag = "JSDocOverrideTag",
  JSDocParameterTag = "JSDocParameterTag",
  JSDocPrivateTag = "JSDocPrivateTag",
  JSDocPropertyTag = "JSDocPropertyTag",
  JSDocProtectedTag = "JSDocProtectedTag",
  JSDocPublicTag = "JSDocPublicTag",
  JSDocReadonlyTag = "JSDocReadonlyTag",
  JSDocReturnTag = "JSDocReturnTag",
  JSDocSeeTag = "JSDocSeeTag",
  JSDocSignature = "JSDocSignature",
  JSDocTag = "JSDocTag",
  JSDocTemplateTag = "JSDocTemplateTag",
  JSDocText = "JSDocText",
  JSDocThisTag = "JSDocThisTag",
  JSDocTypeExpression = "JSDocTypeExpression",
  JSDocTypeLiteral = "JSDocTypeLiteral",
  JSDocTypeTag = "JSDocTypeTag",
  JSDocTypedefTag = "JSDocTypedefTag",
  JSDocUnknownType = "JSDocUnknownType",
  JSDocVariadicType = "JSDocVariadicType",
  JsxAttribute = "JsxAttribute",
  JsxAttributes = "JsxAttributes",
  JsxClosingElement = "JsxClosingElement",
  JsxClosingFragment = "JsxClosingFragment",
  JsxElement = "JsxElement",
  JsxExpression = "JsxExpression",
  JsxFragment = "JsxFragment",
  JsxOpeningElement = "JsxOpeningElement",
  JsxOpeningFragment = "JsxOpeningFragment",
  JsxSelfClosingElement = "JsxSelfClosingElement",
  JsxSpreadAttribute = "JsxSpreadAttribute",
  JsxText = "JsxText",
  JsxTextAllWhiteSpaces = "JsxTextAllWhiteSpaces",
  KeyOfKeyword = "KeyOfKeyword",
  LabeledStatement = "LabeledStatement",
  LastAssignment = "LastAssignment",
  LastBinaryOperator = "LastBinaryOperator",
  LastCompoundAssignment = "LastCompoundAssignment",
  LastContextualKeyword = "LastContextualKeyword",
  LastFutureReservedWord = "LastFutureReservedWord",
  LastJSDocNode = "LastJSDocNode",
  LastJSDocTagNode = "LastJSDocTagNode",
  LastKeyword = "LastKeyword",
  LastLiteralToken = "LastLiteralToken",
  LastPunctuation = "LastPunctuation",
  LastReservedWord = "LastReservedWord",
  LastStatement = "LastStatement",
  LastTemplateToken = "LastTemplateToken",
  LastToken = "LastToken",
  LastTriviaToken = "LastTriviaToken",
  LastTypeNode = "LastTypeNode",
  LessThanEqualsToken = "LessThanEqualsToken",
  LessThanLessThanEqualsToken = "LessThanLessThanEqualsToken",
  LessThanLessThanToken = "LessThanLessThanToken",
  LessThanSlashToken = "LessThanSlashToken",
  LessThanToken = "LessThanToken",
  LetKeyword = "LetKeyword",
  LiteralType = "LiteralType",
  MappedType = "MappedType",
  MergeDeclarationMarker = "MergeDeclarationMarker",
  MetaProperty = "MetaProperty",
  MethodDeclaration = "MethodDeclaration",
  MethodSignature = "MethodSignature",
  MinusEqualsToken = "MinusEqualsToken",
  MinusMinusToken = "MinusMinusToken",
  MinusToken = "MinusToken",
  MissingDeclaration = "MissingDeclaration",
  ModuleBlock = "ModuleBlock",
  ModuleDeclaration = "ModuleDeclaration",
  ModuleKeyword = "ModuleKeyword",
  MultiLineCommentTrivia = "MultiLineCommentTrivia",
  NamedExports = "NamedExports",
  NamedImports = "NamedImports",
  NamedTupleMember = "NamedTupleMember",
  NamespaceExport = "NamespaceExport",
  NamespaceExportDeclaration = "NamespaceExportDeclaration",
  NamespaceImport = "NamespaceImport",
  NamespaceKeyword = "NamespaceKeyword",
  NeverKeyword = "NeverKeyword",
  NewExpression = "NewExpression",
  NewKeyword = "NewKeyword",
  NewLineTrivia = "NewLineTrivia",
  NoSubstitutionTemplateLiteral = "NoSubstitutionTemplateLiteral",
  NonNullExpression = "NonNullExpression",
  NotEmittedStatement = "NotEmittedStatement",
  NullKeyword = "NullKeyword",
  NumberKeyword = "NumberKeyword",
  NumericLiteral = "NumericLiteral",
  ObjectBindingPattern = "ObjectBindingPattern",
  ObjectKeyword = "ObjectKeyword",
  ObjectLiteralExpression = "ObjectLiteralExpression",
  OfKeyword = "OfKeyword",
  OmittedExpression = "OmittedExpression",
  OpenBraceToken = "OpenBraceToken",
  OpenBracketToken = "OpenBracketToken",
  OpenParenToken = "OpenParenToken",
  OptionalType = "OptionalType",
  OverrideKeyword = "OverrideKeyword",
  PackageKeyword = "PackageKeyword",
  Parameter = "Parameter",
  ParenthesizedExpression = "ParenthesizedExpression",
  ParenthesizedType = "ParenthesizedType",
  PartiallyEmittedExpression = "PartiallyEmittedExpression",
  PercentEqualsToken = "PercentEqualsToken",
  PercentToken = "PercentToken",
  PlusEqualsToken = "PlusEqualsToken",
  PlusPlusToken = "PlusPlusToken",
  PlusToken = "PlusToken",
  PostfixUnaryExpression = "PostfixUnaryExpression",
  PrefixUnaryExpression = "PrefixUnaryExpression",
  PrivateIdentifier = "PrivateIdentifier",
  PrivateKeyword = "PrivateKeyword",
  PropertyAccessExpression = "PropertyAccessExpression",
  PropertyAssignment = "PropertyAssignment",
  PropertyDeclaration = "PropertyDeclaration",
  PropertySignature = "PropertySignature",
  ProtectedKeyword = "ProtectedKeyword",
  PublicKeyword = "PublicKeyword",
  QualifiedName = "QualifiedName",
  QuestionDotToken = "QuestionDotToken",
  QuestionQuestionEqualsToken = "QuestionQuestionEqualsToken",
  QuestionQuestionToken = "QuestionQuestionToken",
  QuestionToken = "QuestionToken",
  ReadonlyKeyword = "ReadonlyKeyword",
  RegularExpressionLiteral = "RegularExpressionLiteral",
  RequireKeyword = "RequireKeyword",
  RestType = "RestType",
  ReturnKeyword = "ReturnKeyword",
  ReturnStatement = "ReturnStatement",
  SemicolonClassElement = "SemicolonClassElement",
  SemicolonToken = "SemicolonToken",
  SetAccessor = "SetAccessor",
  SetKeyword = "SetKeyword",
  ShebangTrivia = "ShebangTrivia",
  ShorthandPropertyAssignment = "ShorthandPropertyAssignment",
  SingleLineCommentTrivia = "SingleLineCommentTrivia",
  SlashEqualsToken = "SlashEqualsToken",
  SlashToken = "SlashToken",
  SourceFile = "SourceFile",
  SpreadAssignment = "SpreadAssignment",
  SpreadElement = "SpreadElement",
  StaticKeyword = "StaticKeyword",
  StringKeyword = "StringKeyword",
  StringLiteral = "StringLiteral",
  SuperKeyword = "SuperKeyword",
  SwitchKeyword = "SwitchKeyword",
  SwitchStatement = "SwitchStatement",
  SymbolKeyword = "SymbolKeyword",
  SyntaxList = "SyntaxList",
  SyntheticExpression = "SyntheticExpression",
  SyntheticReferenceExpression = "SyntheticReferenceExpression",
  TaggedTemplateExpression = "TaggedTemplateExpression",
  TemplateExpression = "TemplateExpression",
  TemplateHead = "TemplateHead",
  TemplateLiteralType = "TemplateLiteralType",
  TemplateLiteralTypeSpan = "TemplateLiteralTypeSpan",
  TemplateMiddle = "TemplateMiddle",
  TemplateSpan = "TemplateSpan",
  TemplateTail = "TemplateTail",
  ThisKeyword = "ThisKeyword",
  ThisType = "ThisType",
  ThrowKeyword = "ThrowKeyword",
  ThrowStatement = "ThrowStatement",
  TildeToken = "TildeToken",
  TrueKeyword = "TrueKeyword",
  TryKeyword = "TryKeyword",
  TryStatement = "TryStatement",
  TupleType = "TupleType",
  TypeAliasDeclaration = "TypeAliasDeclaration",
  TypeAssertionExpression = "TypeAssertionExpression",
  TypeKeyword = "TypeKeyword",
  TypeLiteral = "TypeLiteral",
  TypeOfExpression = "TypeOfExpression",
  TypeOfKeyword = "TypeOfKeyword",
  TypeOperator = "TypeOperator",
  TypeParameter = "TypeParameter",
  TypePredicate = "TypePredicate",
  TypeQuery = "TypeQuery",
  TypeReference = "TypeReference",
  UndefinedKeyword = "UndefinedKeyword",
  UnionType = "UnionType",
  UniqueKeyword = "UniqueKeyword",
  Unknown = "Unknown",
  UnknownKeyword = "UnknownKeyword",
  UnparsedInternalText = "UnparsedInternalText",
  UnparsedPrepend = "UnparsedPrepend",
  UnparsedPrologue = "UnparsedPrologue",
  UnparsedSource = "UnparsedSource",
  UnparsedSyntheticReference = "UnparsedSyntheticReference",
  UnparsedText = "UnparsedText",
  VarKeyword = "VarKeyword",
  VariableDeclaration = "VariableDeclaration",
  VariableDeclarationList = "VariableDeclarationList",
  VariableStatement = "VariableStatement",
  VoidExpression = "VoidExpression",
  VoidKeyword = "VoidKeyword",
  WhileKeyword = "WhileKeyword",
  WhileStatement = "WhileStatement",
  WhitespaceTrivia = "WhitespaceTrivia",
  WithKeyword = "WithKeyword",
  WithStatement = "WithStatement",
  YieldExpression = "YieldExpression",
  YieldKeyword = "YieldKeyword",
}

export interface IThisTypeNode extends INode {
  readonly __typename: "ThisTypeNode";
}

export interface IToken {
  readonly __typename: "Token";
  readonly kind: SyntaxKind;
}

export interface ITupleTypeNode extends INode {
  readonly __typename: "TupleTypeNode";
  readonly elementTypes: ReadonlyArray<INode>;
}

export interface ITypeAliasDeclaration extends IHasJSDoc, INode {
  readonly __typename: "TypeAliasDeclaration";
  readonly type: INode | null;
  readonly typeParameters: ReadonlyArray<ITypeParameterDeclaration> | null;
}

export interface ITypeLiteral extends INode {
  readonly __typename: "TypeLiteral";
}

export interface ITypeParameterDeclaration extends INode {
  readonly __typename: "TypeParameterDeclaration";
  readonly constraint: INode;
  readonly default: INode;
  readonly expression: INode;
}

export interface ITypeReference extends INode {
  readonly __typename: "TypeReference";
  readonly text: string | null;
  readonly typeArguments: ReadonlyArray<INode> | null;
}

export interface IUNKNOWN_NODE extends INode {
  readonly __typename: "UNKNOWN_NODE";
}

export interface IUnionType extends INode {
  readonly __typename: "UnionType";
  readonly types: ReadonlyArray<INode>;
}

export interface IUnnamedNode {
  readonly __typename: "UnnamedNode";
  readonly text: string | null;
}

export interface IVariableDeclaration extends INode {
  readonly __typename: "VariableDeclaration";
}

interface IArrayTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly elementType: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"elementType", never, SelectionSet<T>>;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ArrayTypeNodeSelector: IArrayTypeNodeSelector = {
  __typename: () => field("__typename"),

  elementType: (select) =>
    field(
      "elementType",
      undefined as never,
      selectionSet(select(NodeSelector))
    ),

  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const arrayTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IArrayTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "ArrayTypeNode", T>(
    SCHEMA as any,
    "ArrayTypeNode",
    select(ArrayTypeNodeSelector)
  );

interface IBindingPatternSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const BindingPatternSelector: IBindingPatternSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const bindingPattern = <T extends ReadonlyArray<Selection>>(
  select: (t: IBindingPatternSelector) => T
) =>
  new SelectionBuilder<ISchema, "BindingPattern", T>(
    SCHEMA as any,
    "BindingPattern",
    select(BindingPatternSelector)
  );

interface ICallSignatureDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const CallSignatureDeclarationSelector: ICallSignatureDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const callSignatureDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: ICallSignatureDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "CallSignatureDeclaration", T>(
    SCHEMA as any,
    "CallSignatureDeclaration",
    select(CallSignatureDeclarationSelector)
  );

interface IClassDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly members: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: INodeSelector) => T
  ) => Field<
    "members",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ClassDeclarationSelector: IClassDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  members: (variables, select) =>
    field(
      "members",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(NodeSelector))
    ),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const classDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IClassDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "ClassDeclaration", T>(
    SCHEMA as any,
    "ClassDeclaration",
    select(ClassDeclarationSelector)
  );

interface IComputedPropertyNameSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ComputedPropertyNameSelector: IComputedPropertyNameSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const computedPropertyName = <T extends ReadonlyArray<Selection>>(
  select: (t: IComputedPropertyNameSelector) => T
) =>
  new SelectionBuilder<ISchema, "ComputedPropertyName", T>(
    SCHEMA as any,
    "ComputedPropertyName",
    select(ComputedPropertyNameSelector)
  );

interface IConditionalTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly checkType: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"checkType", never, SelectionSet<T>>;

  readonly end: () => Field<"end">;

  readonly extendsType: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"extendsType", never, SelectionSet<T>>;

  readonly falseType: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"falseType", never, SelectionSet<T>>;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly trueType: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"trueType", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ConditionalTypeNodeSelector: IConditionalTypeNodeSelector = {
  __typename: () => field("__typename"),

  checkType: (select) =>
    field("checkType", undefined as never, selectionSet(select(NodeSelector))),

  end: () => field("end"),

  extendsType: (select) =>
    field(
      "extendsType",
      undefined as never,
      selectionSet(select(NodeSelector))
    ),

  falseType: (select) =>
    field("falseType", undefined as never, selectionSet(select(NodeSelector))),

  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  trueType: (select) =>
    field("trueType", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const conditionalTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IConditionalTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "ConditionalTypeNode", T>(
    SCHEMA as any,
    "ConditionalTypeNode",
    select(ConditionalTypeNodeSelector)
  );

interface IConstructSignatureDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ConstructSignatureDeclarationSelector: IConstructSignatureDeclarationSelector =
  {
    __typename: () => field("__typename"),
    end: () => field("end"),
    flags: () => field("flags"),
    kind: () => field("kind"),
    kindCode: () => field("kindCode"),

    modifiers: (variables, select) =>
      field(
        "modifiers",
        Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
        selectionSet(select(TokenSelector))
      ),

    name: (select) =>
      field(
        "name",
        undefined as never,
        selectionSet(select(DeclarationNameSelector))
      ),

    nameText: () => field("nameText"),

    parent: (select) =>
      field("parent", undefined as never, selectionSet(select(NodeSelector))),

    pos: () => field("pos"),
    rawText: (variables) =>
      field(
        "rawText",
        Object.entries(variables).map(([k, v]) => argument(k, v)) as any
      ),

    typeName: (select) =>
      field(
        "typeName",
        undefined as never,
        selectionSet(select(DeclarationNameSelector))
      ),
  };

export const constructSignatureDeclaration = <
  T extends ReadonlyArray<Selection>
>(
  select: (t: IConstructSignatureDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "ConstructSignatureDeclaration", T>(
    SCHEMA as any,
    "ConstructSignatureDeclaration",
    select(ConstructSignatureDeclarationSelector)
  );

interface IConstructorDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly asteriskToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"asteriskToken", never, SelectionSet<T>>;

  readonly end: () => Field<"end">;

  readonly exclamationToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"exclamationToken", never, SelectionSet<T>>;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parameters: <T extends ReadonlyArray<Selection>>(
    select: (t: IParameterDeclarationSelector) => T
  ) => Field<"parameters", never, SelectionSet<T>>;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly questionToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"questionToken", never, SelectionSet<T>>;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly type: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"type", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;

  readonly typeParameters: <T extends ReadonlyArray<Selection>>(
    select: (t: ITypeParameterDeclarationSelector) => T
  ) => Field<"typeParameters", never, SelectionSet<T>>;
}

const ConstructorDeclarationSelector: IConstructorDeclarationSelector = {
  __typename: () => field("__typename"),

  asteriskToken: (select) =>
    field(
      "asteriskToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  end: () => field("end"),

  exclamationToken: (select) =>
    field(
      "exclamationToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parameters: (select) =>
    field(
      "parameters",
      undefined as never,
      selectionSet(select(ParameterDeclarationSelector))
    ),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),

  questionToken: (select) =>
    field(
      "questionToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  type: (select) =>
    field("type", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  typeParameters: (select) =>
    field(
      "typeParameters",
      undefined as never,
      selectionSet(select(TypeParameterDeclarationSelector))
    ),
};

export const constructorDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IConstructorDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "ConstructorDeclaration", T>(
    SCHEMA as any,
    "ConstructorDeclaration",
    select(ConstructorDeclarationSelector)
  );

interface IConstructorTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly type: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"type", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ConstructorTypeNodeSelector: IConstructorTypeNodeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  type: (select) =>
    field("type", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const constructorTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IConstructorTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "ConstructorTypeNode", T>(
    SCHEMA as any,
    "ConstructorTypeNode",
    select(ConstructorTypeNodeSelector)
  );

interface IDeclarationNameSelector {
  readonly __typename: () => Field<"__typename">;

  readonly on: <
    T extends ReadonlyArray<Selection>,
    F extends
      | "BindingPattern"
      | "ComputedPropertyName"
      | "Identifier"
      | "NumericLiteral"
      | "QualifiedName"
      | "StringLiteralLike"
      | "UnnamedNode"
  >(
    type: F,
    select: (
      t: F extends "BindingPattern"
        ? IBindingPatternSelector
        : F extends "ComputedPropertyName"
        ? IComputedPropertyNameSelector
        : F extends "Identifier"
        ? IIdentifierSelector
        : F extends "NumericLiteral"
        ? INumericLiteralSelector
        : F extends "QualifiedName"
        ? IQualifiedNameSelector
        : F extends "StringLiteralLike"
        ? IStringLiteralLikeSelector
        : F extends "UnnamedNode"
        ? IUnnamedNodeSelector
        : never
    ) => T
  ) => InlineFragment<NamedType<F>, SelectionSet<T>>;
}

const DeclarationNameSelector: IDeclarationNameSelector = {
  __typename: () => field("__typename"),

  on: (type, select) => {
    switch (type) {
      case "BindingPattern": {
        return inlineFragment(
          namedType("BindingPattern"),
          selectionSet(
            select(BindingPatternSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ComputedPropertyName": {
        return inlineFragment(
          namedType("ComputedPropertyName"),
          selectionSet(
            select(ComputedPropertyNameSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "Identifier": {
        return inlineFragment(
          namedType("Identifier"),
          selectionSet(
            select(IdentifierSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "NumericLiteral": {
        return inlineFragment(
          namedType("NumericLiteral"),
          selectionSet(
            select(NumericLiteralSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "QualifiedName": {
        return inlineFragment(
          namedType("QualifiedName"),
          selectionSet(
            select(QualifiedNameSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "StringLiteralLike": {
        return inlineFragment(
          namedType("StringLiteralLike"),
          selectionSet(
            select(StringLiteralLikeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "UnnamedNode": {
        return inlineFragment(
          namedType("UnnamedNode"),
          selectionSet(
            select(UnnamedNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      default:
        throw new TypeConditionError({
          selectedType: type,
          abstractType: "DeclarationName",
        });
    }
  },
};

export const declarationName = <T extends ReadonlyArray<Selection>>(
  select: (t: IDeclarationNameSelector) => T
) =>
  new SelectionBuilder<ISchema, "DeclarationName", T>(
    SCHEMA as any,
    "DeclarationName",
    select(DeclarationNameSelector)
  );

interface IEnumDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly members: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"members", never, SelectionSet<T>>;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const EnumDeclarationSelector: IEnumDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  members: (select) =>
    field("members", undefined as never, selectionSet(select(NodeSelector))),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const enumDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IEnumDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "EnumDeclaration", T>(
    SCHEMA as any,
    "EnumDeclaration",
    select(EnumDeclarationSelector)
  );

interface IExportAssignmentSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ExportAssignmentSelector: IExportAssignmentSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const exportAssignment = <T extends ReadonlyArray<Selection>>(
  select: (t: IExportAssignmentSelector) => T
) =>
  new SelectionBuilder<ISchema, "ExportAssignment", T>(
    SCHEMA as any,
    "ExportAssignment",
    select(ExportAssignmentSelector)
  );

interface IExportDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ExportDeclarationSelector: IExportDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const exportDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IExportDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "ExportDeclaration", T>(
    SCHEMA as any,
    "ExportDeclaration",
    select(ExportDeclarationSelector)
  );

interface IFunctionDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly asteriskToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"asteriskToken", never, SelectionSet<T>>;

  readonly end: () => Field<"end">;

  readonly exclamationToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"exclamationToken", never, SelectionSet<T>>;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parameters: <T extends ReadonlyArray<Selection>>(
    select: (t: IParameterDeclarationSelector) => T
  ) => Field<"parameters", never, SelectionSet<T>>;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly questionToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"questionToken", never, SelectionSet<T>>;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly type: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"type", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;

  readonly typeParameters: <T extends ReadonlyArray<Selection>>(
    select: (t: ITypeParameterDeclarationSelector) => T
  ) => Field<"typeParameters", never, SelectionSet<T>>;
}

const FunctionDeclarationSelector: IFunctionDeclarationSelector = {
  __typename: () => field("__typename"),

  asteriskToken: (select) =>
    field(
      "asteriskToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  end: () => field("end"),

  exclamationToken: (select) =>
    field(
      "exclamationToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parameters: (select) =>
    field(
      "parameters",
      undefined as never,
      selectionSet(select(ParameterDeclarationSelector))
    ),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),

  questionToken: (select) =>
    field(
      "questionToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  type: (select) =>
    field("type", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  typeParameters: (select) =>
    field(
      "typeParameters",
      undefined as never,
      selectionSet(select(TypeParameterDeclarationSelector))
    ),
};

export const functionDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IFunctionDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "FunctionDeclaration", T>(
    SCHEMA as any,
    "FunctionDeclaration",
    select(FunctionDeclarationSelector)
  );

interface IFunctionTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly type: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"type", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const FunctionTypeNodeSelector: IFunctionTypeNodeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  type: (select) =>
    field("type", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const functionTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IFunctionTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "FunctionTypeNode", T>(
    SCHEMA as any,
    "FunctionTypeNode",
    select(FunctionTypeNodeSelector)
  );

interface IGetAccessorDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly asteriskToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"asteriskToken", never, SelectionSet<T>>;

  readonly end: () => Field<"end">;

  readonly exclamationToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"exclamationToken", never, SelectionSet<T>>;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parameters: <T extends ReadonlyArray<Selection>>(
    select: (t: IParameterDeclarationSelector) => T
  ) => Field<"parameters", never, SelectionSet<T>>;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly questionToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"questionToken", never, SelectionSet<T>>;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly type: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"type", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;

  readonly typeParameters: <T extends ReadonlyArray<Selection>>(
    select: (t: ITypeParameterDeclarationSelector) => T
  ) => Field<"typeParameters", never, SelectionSet<T>>;
}

const GetAccessorDeclarationSelector: IGetAccessorDeclarationSelector = {
  __typename: () => field("__typename"),

  asteriskToken: (select) =>
    field(
      "asteriskToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  end: () => field("end"),

  exclamationToken: (select) =>
    field(
      "exclamationToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parameters: (select) =>
    field(
      "parameters",
      undefined as never,
      selectionSet(select(ParameterDeclarationSelector))
    ),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),

  questionToken: (select) =>
    field(
      "questionToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  type: (select) =>
    field("type", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  typeParameters: (select) =>
    field(
      "typeParameters",
      undefined as never,
      selectionSet(select(TypeParameterDeclarationSelector))
    ),
};

export const getAccessorDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IGetAccessorDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "GetAccessorDeclaration", T>(
    SCHEMA as any,
    "GetAccessorDeclaration",
    select(GetAccessorDeclarationSelector)
  );

interface IHasJSDocSelector {
  readonly __typename: () => Field<"__typename">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly on: <
    T extends ReadonlyArray<Selection>,
    F extends
      | "ClassDeclaration"
      | "ConstructorDeclaration"
      | "EnumDeclaration"
      | "FunctionDeclaration"
      | "GetAccessorDeclaration"
      | "IndexSignatureDeclaration"
      | "InterfaceDeclaration"
      | "MethodDeclaration"
      | "ModuleDeclaration"
      | "NamespaceDeclaration"
      | "ParameterDeclaration"
      | "PropertyDeclaration"
      | "PropertySignature"
      | "SetAccessorDeclaration"
      | "TypeAliasDeclaration"
  >(
    type: F,
    select: (
      t: F extends "ClassDeclaration"
        ? IClassDeclarationSelector
        : F extends "ConstructorDeclaration"
        ? IConstructorDeclarationSelector
        : F extends "EnumDeclaration"
        ? IEnumDeclarationSelector
        : F extends "FunctionDeclaration"
        ? IFunctionDeclarationSelector
        : F extends "GetAccessorDeclaration"
        ? IGetAccessorDeclarationSelector
        : F extends "IndexSignatureDeclaration"
        ? IIndexSignatureDeclarationSelector
        : F extends "InterfaceDeclaration"
        ? IInterfaceDeclarationSelector
        : F extends "MethodDeclaration"
        ? IMethodDeclarationSelector
        : F extends "ModuleDeclaration"
        ? IModuleDeclarationSelector
        : F extends "NamespaceDeclaration"
        ? INamespaceDeclarationSelector
        : F extends "ParameterDeclaration"
        ? IParameterDeclarationSelector
        : F extends "PropertyDeclaration"
        ? IPropertyDeclarationSelector
        : F extends "PropertySignature"
        ? IPropertySignatureSelector
        : F extends "SetAccessorDeclaration"
        ? ISetAccessorDeclarationSelector
        : F extends "TypeAliasDeclaration"
        ? ITypeAliasDeclarationSelector
        : never
    ) => T
  ) => InlineFragment<NamedType<F>, SelectionSet<T>>;
}

const HasJSDocSelector: IHasJSDocSelector = {
  __typename: () => field("__typename"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  on: (type, select) => {
    switch (type) {
      case "ClassDeclaration": {
        return inlineFragment(
          namedType("ClassDeclaration"),
          selectionSet(
            select(ClassDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ConstructorDeclaration": {
        return inlineFragment(
          namedType("ConstructorDeclaration"),
          selectionSet(
            select(
              ConstructorDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "EnumDeclaration": {
        return inlineFragment(
          namedType("EnumDeclaration"),
          selectionSet(
            select(EnumDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "FunctionDeclaration": {
        return inlineFragment(
          namedType("FunctionDeclaration"),
          selectionSet(
            select(FunctionDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "GetAccessorDeclaration": {
        return inlineFragment(
          namedType("GetAccessorDeclaration"),
          selectionSet(
            select(
              GetAccessorDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "IndexSignatureDeclaration": {
        return inlineFragment(
          namedType("IndexSignatureDeclaration"),
          selectionSet(
            select(
              IndexSignatureDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "InterfaceDeclaration": {
        return inlineFragment(
          namedType("InterfaceDeclaration"),
          selectionSet(
            select(InterfaceDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "MethodDeclaration": {
        return inlineFragment(
          namedType("MethodDeclaration"),
          selectionSet(
            select(MethodDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ModuleDeclaration": {
        return inlineFragment(
          namedType("ModuleDeclaration"),
          selectionSet(
            select(ModuleDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "NamespaceDeclaration": {
        return inlineFragment(
          namedType("NamespaceDeclaration"),
          selectionSet(
            select(NamespaceDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ParameterDeclaration": {
        return inlineFragment(
          namedType("ParameterDeclaration"),
          selectionSet(
            select(ParameterDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "PropertyDeclaration": {
        return inlineFragment(
          namedType("PropertyDeclaration"),
          selectionSet(
            select(PropertyDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "PropertySignature": {
        return inlineFragment(
          namedType("PropertySignature"),
          selectionSet(
            select(PropertySignatureSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "SetAccessorDeclaration": {
        return inlineFragment(
          namedType("SetAccessorDeclaration"),
          selectionSet(
            select(
              SetAccessorDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "TypeAliasDeclaration": {
        return inlineFragment(
          namedType("TypeAliasDeclaration"),
          selectionSet(
            select(TypeAliasDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      default:
        throw new TypeConditionError({
          selectedType: type,
          abstractType: "HasJSDoc",
        });
    }
  },
};

export const hasJSDoc = <T extends ReadonlyArray<Selection>>(
  select: (t: IHasJSDocSelector) => T
) =>
  new SelectionBuilder<ISchema, "HasJSDoc", T>(
    SCHEMA as any,
    "HasJSDoc",
    select(HasJSDocSelector)
  );

interface IIdentifierSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly text: () => Field<"text">;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const IdentifierSelector: IIdentifierSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),
  text: () => field("text"),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const identifier = <T extends ReadonlyArray<Selection>>(
  select: (t: IIdentifierSelector) => T
) =>
  new SelectionBuilder<ISchema, "Identifier", T>(
    SCHEMA as any,
    "Identifier",
    select(IdentifierSelector)
  );

interface IImportDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ImportDeclarationSelector: IImportDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const importDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IImportDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "ImportDeclaration", T>(
    SCHEMA as any,
    "ImportDeclaration",
    select(ImportDeclarationSelector)
  );

interface IImportEqualsDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ImportEqualsDeclarationSelector: IImportEqualsDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const importEqualsDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IImportEqualsDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "ImportEqualsDeclaration", T>(
    SCHEMA as any,
    "ImportEqualsDeclaration",
    select(ImportEqualsDeclarationSelector)
  );

interface IImportTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ImportTypeNodeSelector: IImportTypeNodeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const importTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IImportTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "ImportTypeNode", T>(
    SCHEMA as any,
    "ImportTypeNode",
    select(ImportTypeNodeSelector)
  );

interface IIndexSignatureDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const IndexSignatureDeclarationSelector: IIndexSignatureDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const indexSignatureDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IIndexSignatureDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "IndexSignatureDeclaration", T>(
    SCHEMA as any,
    "IndexSignatureDeclaration",
    select(IndexSignatureDeclarationSelector)
  );

interface IIndexedAccessTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const IndexedAccessTypeNodeSelector: IIndexedAccessTypeNodeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const indexedAccessTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IIndexedAccessTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "IndexedAccessTypeNode", T>(
    SCHEMA as any,
    "IndexedAccessTypeNode",
    select(IndexedAccessTypeNodeSelector)
  );

interface IInferTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;

  readonly typeParameter: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"typeParameter", never, SelectionSet<T>>;
}

const InferTypeNodeSelector: IInferTypeNodeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  typeParameter: (select) =>
    field(
      "typeParameter",
      undefined as never,
      selectionSet(select(NodeSelector))
    ),
};

export const inferTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IInferTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "InferTypeNode", T>(
    SCHEMA as any,
    "InferTypeNode",
    select(InferTypeNodeSelector)
  );

interface IInterfaceDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const InterfaceDeclarationSelector: IInterfaceDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const interfaceDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IInterfaceDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "InterfaceDeclaration", T>(
    SCHEMA as any,
    "InterfaceDeclaration",
    select(InterfaceDeclarationSelector)
  );

interface IIntersectionTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;

  readonly types: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"types", never, SelectionSet<T>>;
}

const IntersectionTypeNodeSelector: IIntersectionTypeNodeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  types: (select) =>
    field("types", undefined as never, selectionSet(select(NodeSelector))),
};

export const intersectionTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IIntersectionTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "IntersectionTypeNode", T>(
    SCHEMA as any,
    "IntersectionTypeNode",
    select(IntersectionTypeNodeSelector)
  );

interface IJSDocSelector {
  readonly __typename: () => Field<"__typename">;

  readonly comment: () => Field<"comment">;

  readonly tags: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocTagSelector) => T
  ) => Field<"tags", never, SelectionSet<T>>;
}

const JSDocSelector: IJSDocSelector = {
  __typename: () => field("__typename"),
  comment: () => field("comment"),

  tags: (select) =>
    field("tags", undefined as never, selectionSet(select(JSDocTagSelector))),
};

export const jSDoc = <T extends ReadonlyArray<Selection>>(
  select: (t: IJSDocSelector) => T
) =>
  new SelectionBuilder<ISchema, "JSDoc", T>(
    SCHEMA as any,
    "JSDoc",
    select(JSDocSelector)
  );

interface IJSDocAugmentsTagSelector {
  readonly __typename: () => Field<"__typename">;

  readonly comment: () => Field<"comment">;

  readonly tagName: () => Field<"tagName">;
}

const JSDocAugmentsTagSelector: IJSDocAugmentsTagSelector = {
  __typename: () => field("__typename"),
  comment: () => field("comment"),
  tagName: () => field("tagName"),
};

export const jSDocAugmentsTag = <T extends ReadonlyArray<Selection>>(
  select: (t: IJSDocAugmentsTagSelector) => T
) =>
  new SelectionBuilder<ISchema, "JSDocAugmentsTag", T>(
    SCHEMA as any,
    "JSDocAugmentsTag",
    select(JSDocAugmentsTagSelector)
  );

interface IJSDocClassTagSelector {
  readonly __typename: () => Field<"__typename">;

  readonly comment: () => Field<"comment">;

  readonly tagName: () => Field<"tagName">;
}

const JSDocClassTagSelector: IJSDocClassTagSelector = {
  __typename: () => field("__typename"),
  comment: () => field("comment"),
  tagName: () => field("tagName"),
};

export const jSDocClassTag = <T extends ReadonlyArray<Selection>>(
  select: (t: IJSDocClassTagSelector) => T
) =>
  new SelectionBuilder<ISchema, "JSDocClassTag", T>(
    SCHEMA as any,
    "JSDocClassTag",
    select(JSDocClassTagSelector)
  );

interface IJSDocEnumTagSelector {
  readonly __typename: () => Field<"__typename">;

  readonly comment: () => Field<"comment">;

  readonly tagName: () => Field<"tagName">;
}

const JSDocEnumTagSelector: IJSDocEnumTagSelector = {
  __typename: () => field("__typename"),
  comment: () => field("comment"),
  tagName: () => field("tagName"),
};

export const jSDocEnumTag = <T extends ReadonlyArray<Selection>>(
  select: (t: IJSDocEnumTagSelector) => T
) =>
  new SelectionBuilder<ISchema, "JSDocEnumTag", T>(
    SCHEMA as any,
    "JSDocEnumTag",
    select(JSDocEnumTagSelector)
  );

interface IJSDocNamespaceDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const JSDocNamespaceDeclarationSelector: IJSDocNamespaceDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const jSDocNamespaceDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IJSDocNamespaceDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "JSDocNamespaceDeclaration", T>(
    SCHEMA as any,
    "JSDocNamespaceDeclaration",
    select(JSDocNamespaceDeclarationSelector)
  );

interface IJSDocReturnTagSelector {
  readonly __typename: () => Field<"__typename">;

  readonly comment: () => Field<"comment">;

  readonly tagName: () => Field<"tagName">;
}

const JSDocReturnTagSelector: IJSDocReturnTagSelector = {
  __typename: () => field("__typename"),
  comment: () => field("comment"),
  tagName: () => field("tagName"),
};

export const jSDocReturnTag = <T extends ReadonlyArray<Selection>>(
  select: (t: IJSDocReturnTagSelector) => T
) =>
  new SelectionBuilder<ISchema, "JSDocReturnTag", T>(
    SCHEMA as any,
    "JSDocReturnTag",
    select(JSDocReturnTagSelector)
  );

interface IJSDocTagSelector {
  readonly __typename: () => Field<"__typename">;

  readonly comment: () => Field<"comment">;

  readonly tagName: () => Field<"tagName">;

  readonly on: <
    T extends ReadonlyArray<Selection>,
    F extends
      | "JSDocAugmentsTag"
      | "JSDocClassTag"
      | "JSDocEnumTag"
      | "JSDocReturnTag"
      | "JSDocTemplateTag"
      | "JSDocThisTag"
      | "JSDocTypeTag"
      | "JSDocUnknownTag"
  >(
    type: F,
    select: (
      t: F extends "JSDocAugmentsTag"
        ? IJSDocAugmentsTagSelector
        : F extends "JSDocClassTag"
        ? IJSDocClassTagSelector
        : F extends "JSDocEnumTag"
        ? IJSDocEnumTagSelector
        : F extends "JSDocReturnTag"
        ? IJSDocReturnTagSelector
        : F extends "JSDocTemplateTag"
        ? IJSDocTemplateTagSelector
        : F extends "JSDocThisTag"
        ? IJSDocThisTagSelector
        : F extends "JSDocTypeTag"
        ? IJSDocTypeTagSelector
        : F extends "JSDocUnknownTag"
        ? IJSDocUnknownTagSelector
        : never
    ) => T
  ) => InlineFragment<NamedType<F>, SelectionSet<T>>;
}

const JSDocTagSelector: IJSDocTagSelector = {
  __typename: () => field("__typename"),

  comment: () => field("comment"),
  tagName: () => field("tagName"),

  on: (type, select) => {
    switch (type) {
      case "JSDocAugmentsTag": {
        return inlineFragment(
          namedType("JSDocAugmentsTag"),
          selectionSet(
            select(JSDocAugmentsTagSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "JSDocClassTag": {
        return inlineFragment(
          namedType("JSDocClassTag"),
          selectionSet(
            select(JSDocClassTagSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "JSDocEnumTag": {
        return inlineFragment(
          namedType("JSDocEnumTag"),
          selectionSet(
            select(JSDocEnumTagSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "JSDocReturnTag": {
        return inlineFragment(
          namedType("JSDocReturnTag"),
          selectionSet(
            select(JSDocReturnTagSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "JSDocTemplateTag": {
        return inlineFragment(
          namedType("JSDocTemplateTag"),
          selectionSet(
            select(JSDocTemplateTagSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "JSDocThisTag": {
        return inlineFragment(
          namedType("JSDocThisTag"),
          selectionSet(
            select(JSDocThisTagSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "JSDocTypeTag": {
        return inlineFragment(
          namedType("JSDocTypeTag"),
          selectionSet(
            select(JSDocTypeTagSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "JSDocUnknownTag": {
        return inlineFragment(
          namedType("JSDocUnknownTag"),
          selectionSet(
            select(JSDocUnknownTagSelector as Parameters<typeof select>[0])
          )
        );
      }

      default:
        throw new TypeConditionError({
          selectedType: type,
          abstractType: "JSDocTag",
        });
    }
  },
};

export const jSDocTag = <T extends ReadonlyArray<Selection>>(
  select: (t: IJSDocTagSelector) => T
) =>
  new SelectionBuilder<ISchema, "JSDocTag", T>(
    SCHEMA as any,
    "JSDocTag",
    select(JSDocTagSelector)
  );

interface IJSDocTemplateTagSelector {
  readonly __typename: () => Field<"__typename">;

  readonly comment: () => Field<"comment">;

  readonly tagName: () => Field<"tagName">;
}

const JSDocTemplateTagSelector: IJSDocTemplateTagSelector = {
  __typename: () => field("__typename"),
  comment: () => field("comment"),
  tagName: () => field("tagName"),
};

export const jSDocTemplateTag = <T extends ReadonlyArray<Selection>>(
  select: (t: IJSDocTemplateTagSelector) => T
) =>
  new SelectionBuilder<ISchema, "JSDocTemplateTag", T>(
    SCHEMA as any,
    "JSDocTemplateTag",
    select(JSDocTemplateTagSelector)
  );

interface IJSDocThisTagSelector {
  readonly __typename: () => Field<"__typename">;

  readonly comment: () => Field<"comment">;

  readonly tagName: () => Field<"tagName">;
}

const JSDocThisTagSelector: IJSDocThisTagSelector = {
  __typename: () => field("__typename"),
  comment: () => field("comment"),
  tagName: () => field("tagName"),
};

export const jSDocThisTag = <T extends ReadonlyArray<Selection>>(
  select: (t: IJSDocThisTagSelector) => T
) =>
  new SelectionBuilder<ISchema, "JSDocThisTag", T>(
    SCHEMA as any,
    "JSDocThisTag",
    select(JSDocThisTagSelector)
  );

interface IJSDocTypeTagSelector {
  readonly __typename: () => Field<"__typename">;

  readonly comment: () => Field<"comment">;

  readonly tagName: () => Field<"tagName">;
}

const JSDocTypeTagSelector: IJSDocTypeTagSelector = {
  __typename: () => field("__typename"),
  comment: () => field("comment"),
  tagName: () => field("tagName"),
};

export const jSDocTypeTag = <T extends ReadonlyArray<Selection>>(
  select: (t: IJSDocTypeTagSelector) => T
) =>
  new SelectionBuilder<ISchema, "JSDocTypeTag", T>(
    SCHEMA as any,
    "JSDocTypeTag",
    select(JSDocTypeTagSelector)
  );

interface IJSDocUnknownTagSelector {
  readonly __typename: () => Field<"__typename">;

  readonly comment: () => Field<"comment">;

  readonly tagName: () => Field<"tagName">;
}

const JSDocUnknownTagSelector: IJSDocUnknownTagSelector = {
  __typename: () => field("__typename"),
  comment: () => field("comment"),
  tagName: () => field("tagName"),
};

export const jSDocUnknownTag = <T extends ReadonlyArray<Selection>>(
  select: (t: IJSDocUnknownTagSelector) => T
) =>
  new SelectionBuilder<ISchema, "JSDocUnknownTag", T>(
    SCHEMA as any,
    "JSDocUnknownTag",
    select(JSDocUnknownTagSelector)
  );

interface IKeywordTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const KeywordTypeNodeSelector: IKeywordTypeNodeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const keywordTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IKeywordTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "KeywordTypeNode", T>(
    SCHEMA as any,
    "KeywordTypeNode",
    select(KeywordTypeNodeSelector)
  );

interface ILiteralTypeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const LiteralTypeSelector: ILiteralTypeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const literalType = <T extends ReadonlyArray<Selection>>(
  select: (t: ILiteralTypeSelector) => T
) =>
  new SelectionBuilder<ISchema, "LiteralType", T>(
    SCHEMA as any,
    "LiteralType",
    select(LiteralTypeSelector)
  );

interface IMappedTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const MappedTypeNodeSelector: IMappedTypeNodeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const mappedTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IMappedTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "MappedTypeNode", T>(
    SCHEMA as any,
    "MappedTypeNode",
    select(MappedTypeNodeSelector)
  );

interface IMaybeOptionalSelector {
  readonly __typename: () => Field<"__typename">;

  readonly questionToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"questionToken", never, SelectionSet<T>>;

  readonly on: <
    T extends ReadonlyArray<Selection>,
    F extends
      | "ConstructorDeclaration"
      | "FunctionDeclaration"
      | "GetAccessorDeclaration"
      | "MethodDeclaration"
      | "PropertyDeclaration"
      | "PropertySignature"
      | "SetAccessorDeclaration"
  >(
    type: F,
    select: (
      t: F extends "ConstructorDeclaration"
        ? IConstructorDeclarationSelector
        : F extends "FunctionDeclaration"
        ? IFunctionDeclarationSelector
        : F extends "GetAccessorDeclaration"
        ? IGetAccessorDeclarationSelector
        : F extends "MethodDeclaration"
        ? IMethodDeclarationSelector
        : F extends "PropertyDeclaration"
        ? IPropertyDeclarationSelector
        : F extends "PropertySignature"
        ? IPropertySignatureSelector
        : F extends "SetAccessorDeclaration"
        ? ISetAccessorDeclarationSelector
        : never
    ) => T
  ) => InlineFragment<NamedType<F>, SelectionSet<T>>;
}

const MaybeOptionalSelector: IMaybeOptionalSelector = {
  __typename: () => field("__typename"),

  questionToken: (select) =>
    field(
      "questionToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  on: (type, select) => {
    switch (type) {
      case "ConstructorDeclaration": {
        return inlineFragment(
          namedType("ConstructorDeclaration"),
          selectionSet(
            select(
              ConstructorDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "FunctionDeclaration": {
        return inlineFragment(
          namedType("FunctionDeclaration"),
          selectionSet(
            select(FunctionDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "GetAccessorDeclaration": {
        return inlineFragment(
          namedType("GetAccessorDeclaration"),
          selectionSet(
            select(
              GetAccessorDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "MethodDeclaration": {
        return inlineFragment(
          namedType("MethodDeclaration"),
          selectionSet(
            select(MethodDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "PropertyDeclaration": {
        return inlineFragment(
          namedType("PropertyDeclaration"),
          selectionSet(
            select(PropertyDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "PropertySignature": {
        return inlineFragment(
          namedType("PropertySignature"),
          selectionSet(
            select(PropertySignatureSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "SetAccessorDeclaration": {
        return inlineFragment(
          namedType("SetAccessorDeclaration"),
          selectionSet(
            select(
              SetAccessorDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      default:
        throw new TypeConditionError({
          selectedType: type,
          abstractType: "MaybeOptional",
        });
    }
  },
};

export const maybeOptional = <T extends ReadonlyArray<Selection>>(
  select: (t: IMaybeOptionalSelector) => T
) =>
  new SelectionBuilder<ISchema, "MaybeOptional", T>(
    SCHEMA as any,
    "MaybeOptional",
    select(MaybeOptionalSelector)
  );

interface IMethodDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly asteriskToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"asteriskToken", never, SelectionSet<T>>;

  readonly end: () => Field<"end">;

  readonly exclamationToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"exclamationToken", never, SelectionSet<T>>;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parameters: <T extends ReadonlyArray<Selection>>(
    select: (t: IParameterDeclarationSelector) => T
  ) => Field<"parameters", never, SelectionSet<T>>;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly questionToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"questionToken", never, SelectionSet<T>>;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly type: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"type", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;

  readonly typeParameters: <T extends ReadonlyArray<Selection>>(
    select: (t: ITypeParameterDeclarationSelector) => T
  ) => Field<"typeParameters", never, SelectionSet<T>>;
}

const MethodDeclarationSelector: IMethodDeclarationSelector = {
  __typename: () => field("__typename"),

  asteriskToken: (select) =>
    field(
      "asteriskToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  end: () => field("end"),

  exclamationToken: (select) =>
    field(
      "exclamationToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parameters: (select) =>
    field(
      "parameters",
      undefined as never,
      selectionSet(select(ParameterDeclarationSelector))
    ),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),

  questionToken: (select) =>
    field(
      "questionToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  type: (select) =>
    field("type", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  typeParameters: (select) =>
    field(
      "typeParameters",
      undefined as never,
      selectionSet(select(TypeParameterDeclarationSelector))
    ),
};

export const methodDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IMethodDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "MethodDeclaration", T>(
    SCHEMA as any,
    "MethodDeclaration",
    select(MethodDeclarationSelector)
  );

interface IMissingDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const MissingDeclarationSelector: IMissingDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const missingDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IMissingDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "MissingDeclaration", T>(
    SCHEMA as any,
    "MissingDeclaration",
    select(MissingDeclarationSelector)
  );

interface IModuleDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ModuleDeclarationSelector: IModuleDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const moduleDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IModuleDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "ModuleDeclaration", T>(
    SCHEMA as any,
    "ModuleDeclaration",
    select(ModuleDeclarationSelector)
  );

interface INamespaceDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const NamespaceDeclarationSelector: INamespaceDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const namespaceDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: INamespaceDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "NamespaceDeclaration", T>(
    SCHEMA as any,
    "NamespaceDeclaration",
    select(NamespaceDeclarationSelector)
  );

interface INamespaceExportDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const NamespaceExportDeclarationSelector: INamespaceExportDeclarationSelector =
  {
    __typename: () => field("__typename"),
    end: () => field("end"),
    flags: () => field("flags"),
    kind: () => field("kind"),
    kindCode: () => field("kindCode"),

    modifiers: (variables, select) =>
      field(
        "modifiers",
        Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
        selectionSet(select(TokenSelector))
      ),

    name: (select) =>
      field(
        "name",
        undefined as never,
        selectionSet(select(DeclarationNameSelector))
      ),

    nameText: () => field("nameText"),

    parent: (select) =>
      field("parent", undefined as never, selectionSet(select(NodeSelector))),

    pos: () => field("pos"),
    rawText: (variables) =>
      field(
        "rawText",
        Object.entries(variables).map(([k, v]) => argument(k, v)) as any
      ),

    typeName: (select) =>
      field(
        "typeName",
        undefined as never,
        selectionSet(select(DeclarationNameSelector))
      ),
  };

export const namespaceExportDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: INamespaceExportDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "NamespaceExportDeclaration", T>(
    SCHEMA as any,
    "NamespaceExportDeclaration",
    select(NamespaceExportDeclarationSelector)
  );

interface INodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;

  readonly on: <
    T extends ReadonlyArray<Selection>,
    F extends
      | "ArrayTypeNode"
      | "BindingPattern"
      | "CallSignatureDeclaration"
      | "ClassDeclaration"
      | "ComputedPropertyName"
      | "ConditionalTypeNode"
      | "ConstructSignatureDeclaration"
      | "ConstructorDeclaration"
      | "ConstructorTypeNode"
      | "EnumDeclaration"
      | "ExportAssignment"
      | "ExportDeclaration"
      | "FunctionDeclaration"
      | "FunctionTypeNode"
      | "GetAccessorDeclaration"
      | "Identifier"
      | "ImportDeclaration"
      | "ImportEqualsDeclaration"
      | "ImportTypeNode"
      | "IndexSignatureDeclaration"
      | "IndexedAccessTypeNode"
      | "InferTypeNode"
      | "InterfaceDeclaration"
      | "IntersectionTypeNode"
      | "JSDocNamespaceDeclaration"
      | "KeywordTypeNode"
      | "LiteralType"
      | "MappedTypeNode"
      | "MethodDeclaration"
      | "MissingDeclaration"
      | "ModuleDeclaration"
      | "NamespaceDeclaration"
      | "NamespaceExportDeclaration"
      | "NumericLiteral"
      | "OptionalTypeNode"
      | "ParameterDeclaration"
      | "ParenthesizedType"
      | "PropertyDeclaration"
      | "PropertyLikeDeclaration"
      | "PropertySignature"
      | "QualifiedName"
      | "RestTypeNode"
      | "SetAccessorDeclaration"
      | "SourceFile"
      | "StringLiteral"
      | "StringLiteralLike"
      | "ThisTypeNode"
      | "TupleTypeNode"
      | "TypeAliasDeclaration"
      | "TypeLiteral"
      | "TypeParameterDeclaration"
      | "TypeReference"
      | "UNKNOWN_NODE"
      | "UnionType"
      | "VariableDeclaration"
  >(
    type: F,
    select: (
      t: F extends "ArrayTypeNode"
        ? IArrayTypeNodeSelector
        : F extends "BindingPattern"
        ? IBindingPatternSelector
        : F extends "CallSignatureDeclaration"
        ? ICallSignatureDeclarationSelector
        : F extends "ClassDeclaration"
        ? IClassDeclarationSelector
        : F extends "ComputedPropertyName"
        ? IComputedPropertyNameSelector
        : F extends "ConditionalTypeNode"
        ? IConditionalTypeNodeSelector
        : F extends "ConstructSignatureDeclaration"
        ? IConstructSignatureDeclarationSelector
        : F extends "ConstructorDeclaration"
        ? IConstructorDeclarationSelector
        : F extends "ConstructorTypeNode"
        ? IConstructorTypeNodeSelector
        : F extends "EnumDeclaration"
        ? IEnumDeclarationSelector
        : F extends "ExportAssignment"
        ? IExportAssignmentSelector
        : F extends "ExportDeclaration"
        ? IExportDeclarationSelector
        : F extends "FunctionDeclaration"
        ? IFunctionDeclarationSelector
        : F extends "FunctionTypeNode"
        ? IFunctionTypeNodeSelector
        : F extends "GetAccessorDeclaration"
        ? IGetAccessorDeclarationSelector
        : F extends "Identifier"
        ? IIdentifierSelector
        : F extends "ImportDeclaration"
        ? IImportDeclarationSelector
        : F extends "ImportEqualsDeclaration"
        ? IImportEqualsDeclarationSelector
        : F extends "ImportTypeNode"
        ? IImportTypeNodeSelector
        : F extends "IndexSignatureDeclaration"
        ? IIndexSignatureDeclarationSelector
        : F extends "IndexedAccessTypeNode"
        ? IIndexedAccessTypeNodeSelector
        : F extends "InferTypeNode"
        ? IInferTypeNodeSelector
        : F extends "InterfaceDeclaration"
        ? IInterfaceDeclarationSelector
        : F extends "IntersectionTypeNode"
        ? IIntersectionTypeNodeSelector
        : F extends "JSDocNamespaceDeclaration"
        ? IJSDocNamespaceDeclarationSelector
        : F extends "KeywordTypeNode"
        ? IKeywordTypeNodeSelector
        : F extends "LiteralType"
        ? ILiteralTypeSelector
        : F extends "MappedTypeNode"
        ? IMappedTypeNodeSelector
        : F extends "MethodDeclaration"
        ? IMethodDeclarationSelector
        : F extends "MissingDeclaration"
        ? IMissingDeclarationSelector
        : F extends "ModuleDeclaration"
        ? IModuleDeclarationSelector
        : F extends "NamespaceDeclaration"
        ? INamespaceDeclarationSelector
        : F extends "NamespaceExportDeclaration"
        ? INamespaceExportDeclarationSelector
        : F extends "NumericLiteral"
        ? INumericLiteralSelector
        : F extends "OptionalTypeNode"
        ? IOptionalTypeNodeSelector
        : F extends "ParameterDeclaration"
        ? IParameterDeclarationSelector
        : F extends "ParenthesizedType"
        ? IParenthesizedTypeSelector
        : F extends "PropertyDeclaration"
        ? IPropertyDeclarationSelector
        : F extends "PropertyLikeDeclaration"
        ? IPropertyLikeDeclarationSelector
        : F extends "PropertySignature"
        ? IPropertySignatureSelector
        : F extends "QualifiedName"
        ? IQualifiedNameSelector
        : F extends "RestTypeNode"
        ? IRestTypeNodeSelector
        : F extends "SetAccessorDeclaration"
        ? ISetAccessorDeclarationSelector
        : F extends "SourceFile"
        ? ISourceFileSelector
        : F extends "StringLiteral"
        ? IStringLiteralSelector
        : F extends "StringLiteralLike"
        ? IStringLiteralLikeSelector
        : F extends "ThisTypeNode"
        ? IThisTypeNodeSelector
        : F extends "TupleTypeNode"
        ? ITupleTypeNodeSelector
        : F extends "TypeAliasDeclaration"
        ? ITypeAliasDeclarationSelector
        : F extends "TypeLiteral"
        ? ITypeLiteralSelector
        : F extends "TypeParameterDeclaration"
        ? ITypeParameterDeclarationSelector
        : F extends "TypeReference"
        ? ITypeReferenceSelector
        : F extends "UNKNOWN_NODE"
        ? IUNKNOWN_NODESelector
        : F extends "UnionType"
        ? IUnionTypeSelector
        : F extends "VariableDeclaration"
        ? IVariableDeclarationSelector
        : never
    ) => T
  ) => InlineFragment<NamedType<F>, SelectionSet<T>>;
}

const NodeSelector: INodeSelector = {
  __typename: () => field("__typename"),

  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  on: (type, select) => {
    switch (type) {
      case "ArrayTypeNode": {
        return inlineFragment(
          namedType("ArrayTypeNode"),
          selectionSet(
            select(ArrayTypeNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "BindingPattern": {
        return inlineFragment(
          namedType("BindingPattern"),
          selectionSet(
            select(BindingPatternSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "CallSignatureDeclaration": {
        return inlineFragment(
          namedType("CallSignatureDeclaration"),
          selectionSet(
            select(
              CallSignatureDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "ClassDeclaration": {
        return inlineFragment(
          namedType("ClassDeclaration"),
          selectionSet(
            select(ClassDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ComputedPropertyName": {
        return inlineFragment(
          namedType("ComputedPropertyName"),
          selectionSet(
            select(ComputedPropertyNameSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ConditionalTypeNode": {
        return inlineFragment(
          namedType("ConditionalTypeNode"),
          selectionSet(
            select(ConditionalTypeNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ConstructSignatureDeclaration": {
        return inlineFragment(
          namedType("ConstructSignatureDeclaration"),
          selectionSet(
            select(
              ConstructSignatureDeclarationSelector as Parameters<
                typeof select
              >[0]
            )
          )
        );
      }

      case "ConstructorDeclaration": {
        return inlineFragment(
          namedType("ConstructorDeclaration"),
          selectionSet(
            select(
              ConstructorDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "ConstructorTypeNode": {
        return inlineFragment(
          namedType("ConstructorTypeNode"),
          selectionSet(
            select(ConstructorTypeNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "EnumDeclaration": {
        return inlineFragment(
          namedType("EnumDeclaration"),
          selectionSet(
            select(EnumDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ExportAssignment": {
        return inlineFragment(
          namedType("ExportAssignment"),
          selectionSet(
            select(ExportAssignmentSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ExportDeclaration": {
        return inlineFragment(
          namedType("ExportDeclaration"),
          selectionSet(
            select(ExportDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "FunctionDeclaration": {
        return inlineFragment(
          namedType("FunctionDeclaration"),
          selectionSet(
            select(FunctionDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "FunctionTypeNode": {
        return inlineFragment(
          namedType("FunctionTypeNode"),
          selectionSet(
            select(FunctionTypeNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "GetAccessorDeclaration": {
        return inlineFragment(
          namedType("GetAccessorDeclaration"),
          selectionSet(
            select(
              GetAccessorDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "Identifier": {
        return inlineFragment(
          namedType("Identifier"),
          selectionSet(
            select(IdentifierSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ImportDeclaration": {
        return inlineFragment(
          namedType("ImportDeclaration"),
          selectionSet(
            select(ImportDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ImportEqualsDeclaration": {
        return inlineFragment(
          namedType("ImportEqualsDeclaration"),
          selectionSet(
            select(
              ImportEqualsDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "ImportTypeNode": {
        return inlineFragment(
          namedType("ImportTypeNode"),
          selectionSet(
            select(ImportTypeNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "IndexSignatureDeclaration": {
        return inlineFragment(
          namedType("IndexSignatureDeclaration"),
          selectionSet(
            select(
              IndexSignatureDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "IndexedAccessTypeNode": {
        return inlineFragment(
          namedType("IndexedAccessTypeNode"),
          selectionSet(
            select(
              IndexedAccessTypeNodeSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "InferTypeNode": {
        return inlineFragment(
          namedType("InferTypeNode"),
          selectionSet(
            select(InferTypeNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "InterfaceDeclaration": {
        return inlineFragment(
          namedType("InterfaceDeclaration"),
          selectionSet(
            select(InterfaceDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "IntersectionTypeNode": {
        return inlineFragment(
          namedType("IntersectionTypeNode"),
          selectionSet(
            select(IntersectionTypeNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "JSDocNamespaceDeclaration": {
        return inlineFragment(
          namedType("JSDocNamespaceDeclaration"),
          selectionSet(
            select(
              JSDocNamespaceDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "KeywordTypeNode": {
        return inlineFragment(
          namedType("KeywordTypeNode"),
          selectionSet(
            select(KeywordTypeNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "LiteralType": {
        return inlineFragment(
          namedType("LiteralType"),
          selectionSet(
            select(LiteralTypeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "MappedTypeNode": {
        return inlineFragment(
          namedType("MappedTypeNode"),
          selectionSet(
            select(MappedTypeNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "MethodDeclaration": {
        return inlineFragment(
          namedType("MethodDeclaration"),
          selectionSet(
            select(MethodDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "MissingDeclaration": {
        return inlineFragment(
          namedType("MissingDeclaration"),
          selectionSet(
            select(MissingDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ModuleDeclaration": {
        return inlineFragment(
          namedType("ModuleDeclaration"),
          selectionSet(
            select(ModuleDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "NamespaceDeclaration": {
        return inlineFragment(
          namedType("NamespaceDeclaration"),
          selectionSet(
            select(NamespaceDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "NamespaceExportDeclaration": {
        return inlineFragment(
          namedType("NamespaceExportDeclaration"),
          selectionSet(
            select(
              NamespaceExportDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "NumericLiteral": {
        return inlineFragment(
          namedType("NumericLiteral"),
          selectionSet(
            select(NumericLiteralSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "OptionalTypeNode": {
        return inlineFragment(
          namedType("OptionalTypeNode"),
          selectionSet(
            select(OptionalTypeNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ParameterDeclaration": {
        return inlineFragment(
          namedType("ParameterDeclaration"),
          selectionSet(
            select(ParameterDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ParenthesizedType": {
        return inlineFragment(
          namedType("ParenthesizedType"),
          selectionSet(
            select(ParenthesizedTypeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "PropertyDeclaration": {
        return inlineFragment(
          namedType("PropertyDeclaration"),
          selectionSet(
            select(PropertyDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "PropertyLikeDeclaration": {
        return inlineFragment(
          namedType("PropertyLikeDeclaration"),
          selectionSet(
            select(
              PropertyLikeDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "PropertySignature": {
        return inlineFragment(
          namedType("PropertySignature"),
          selectionSet(
            select(PropertySignatureSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "QualifiedName": {
        return inlineFragment(
          namedType("QualifiedName"),
          selectionSet(
            select(QualifiedNameSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "RestTypeNode": {
        return inlineFragment(
          namedType("RestTypeNode"),
          selectionSet(
            select(RestTypeNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "SetAccessorDeclaration": {
        return inlineFragment(
          namedType("SetAccessorDeclaration"),
          selectionSet(
            select(
              SetAccessorDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "SourceFile": {
        return inlineFragment(
          namedType("SourceFile"),
          selectionSet(
            select(SourceFileSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "StringLiteral": {
        return inlineFragment(
          namedType("StringLiteral"),
          selectionSet(
            select(StringLiteralSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "StringLiteralLike": {
        return inlineFragment(
          namedType("StringLiteralLike"),
          selectionSet(
            select(StringLiteralLikeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "ThisTypeNode": {
        return inlineFragment(
          namedType("ThisTypeNode"),
          selectionSet(
            select(ThisTypeNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "TupleTypeNode": {
        return inlineFragment(
          namedType("TupleTypeNode"),
          selectionSet(
            select(TupleTypeNodeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "TypeAliasDeclaration": {
        return inlineFragment(
          namedType("TypeAliasDeclaration"),
          selectionSet(
            select(TypeAliasDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "TypeLiteral": {
        return inlineFragment(
          namedType("TypeLiteral"),
          selectionSet(
            select(TypeLiteralSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "TypeParameterDeclaration": {
        return inlineFragment(
          namedType("TypeParameterDeclaration"),
          selectionSet(
            select(
              TypeParameterDeclarationSelector as Parameters<typeof select>[0]
            )
          )
        );
      }

      case "TypeReference": {
        return inlineFragment(
          namedType("TypeReference"),
          selectionSet(
            select(TypeReferenceSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "UNKNOWN_NODE": {
        return inlineFragment(
          namedType("UNKNOWN_NODE"),
          selectionSet(
            select(UNKNOWN_NODESelector as Parameters<typeof select>[0])
          )
        );
      }

      case "UnionType": {
        return inlineFragment(
          namedType("UnionType"),
          selectionSet(
            select(UnionTypeSelector as Parameters<typeof select>[0])
          )
        );
      }

      case "VariableDeclaration": {
        return inlineFragment(
          namedType("VariableDeclaration"),
          selectionSet(
            select(VariableDeclarationSelector as Parameters<typeof select>[0])
          )
        );
      }

      default:
        throw new TypeConditionError({
          selectedType: type,
          abstractType: "Node",
        });
    }
  },
};

export const node = <T extends ReadonlyArray<Selection>>(
  select: (t: INodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "Node", T>(
    SCHEMA as any,
    "Node",
    select(NodeSelector)
  );

interface INumericLiteralSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const NumericLiteralSelector: INumericLiteralSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const numericLiteral = <T extends ReadonlyArray<Selection>>(
  select: (t: INumericLiteralSelector) => T
) =>
  new SelectionBuilder<ISchema, "NumericLiteral", T>(
    SCHEMA as any,
    "NumericLiteral",
    select(NumericLiteralSelector)
  );

interface IOptionalTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly type: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"type", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const OptionalTypeNodeSelector: IOptionalTypeNodeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  type: (select) =>
    field("type", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const optionalTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IOptionalTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "OptionalTypeNode", T>(
    SCHEMA as any,
    "OptionalTypeNode",
    select(OptionalTypeNodeSelector)
  );

interface IParameterDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly type: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"type", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ParameterDeclarationSelector: IParameterDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  type: (select) =>
    field("type", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const parameterDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IParameterDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "ParameterDeclaration", T>(
    SCHEMA as any,
    "ParameterDeclaration",
    select(ParameterDeclarationSelector)
  );

interface IParenthesizedTypeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly type: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"type", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ParenthesizedTypeSelector: IParenthesizedTypeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  type: (select) =>
    field("type", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const parenthesizedType = <T extends ReadonlyArray<Selection>>(
  select: (t: IParenthesizedTypeSelector) => T
) =>
  new SelectionBuilder<ISchema, "ParenthesizedType", T>(
    SCHEMA as any,
    "ParenthesizedType",
    select(ParenthesizedTypeSelector)
  );

interface IPropertyDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly questionToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"questionToken", never, SelectionSet<T>>;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const PropertyDeclarationSelector: IPropertyDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),

  questionToken: (select) =>
    field(
      "questionToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const propertyDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IPropertyDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "PropertyDeclaration", T>(
    SCHEMA as any,
    "PropertyDeclaration",
    select(PropertyDeclarationSelector)
  );

interface IPropertyLikeDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const PropertyLikeDeclarationSelector: IPropertyLikeDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const propertyLikeDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IPropertyLikeDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "PropertyLikeDeclaration", T>(
    SCHEMA as any,
    "PropertyLikeDeclaration",
    select(PropertyLikeDeclarationSelector)
  );

interface IPropertySignatureSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly questionToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"questionToken", never, SelectionSet<T>>;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly type: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"type", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const PropertySignatureSelector: IPropertySignatureSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),

  questionToken: (select) =>
    field(
      "questionToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  type: (select) =>
    field("type", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const propertySignature = <T extends ReadonlyArray<Selection>>(
  select: (t: IPropertySignatureSelector) => T
) =>
  new SelectionBuilder<ISchema, "PropertySignature", T>(
    SCHEMA as any,
    "PropertySignature",
    select(PropertySignatureSelector)
  );

interface IQualifiedNameSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const QualifiedNameSelector: IQualifiedNameSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const qualifiedName = <T extends ReadonlyArray<Selection>>(
  select: (t: IQualifiedNameSelector) => T
) =>
  new SelectionBuilder<ISchema, "QualifiedName", T>(
    SCHEMA as any,
    "QualifiedName",
    select(QualifiedNameSelector)
  );

interface IQuerySelector {
  readonly __typename: () => Field<"__typename">;

  readonly parseFile: <
    V extends { file: Variable<string> | string },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ISourceFileSelector) => T
  ) => Field<"parseFile", [Argument<"file", V["file"]>], SelectionSet<T>>;
}

const QuerySelector: IQuerySelector = {
  __typename: () => field("__typename"),

  parseFile: (variables, select) =>
    field(
      "parseFile",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(SourceFileSelector))
    ),
};

export const query = <T extends ReadonlyArray<Selection>>(
  select: (t: IQuerySelector) => T
) =>
  new SelectionBuilder<ISchema, "Query", T>(
    SCHEMA as any,
    "Query",
    select(QuerySelector)
  );

interface IRestTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly type: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"type", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const RestTypeNodeSelector: IRestTypeNodeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  type: (select) =>
    field("type", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const restTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IRestTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "RestTypeNode", T>(
    SCHEMA as any,
    "RestTypeNode",
    select(RestTypeNodeSelector)
  );

interface ISetAccessorDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly asteriskToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"asteriskToken", never, SelectionSet<T>>;

  readonly end: () => Field<"end">;

  readonly exclamationToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"exclamationToken", never, SelectionSet<T>>;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parameters: <T extends ReadonlyArray<Selection>>(
    select: (t: IParameterDeclarationSelector) => T
  ) => Field<"parameters", never, SelectionSet<T>>;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly questionToken: <T extends ReadonlyArray<Selection>>(
    select: (t: ITokenSelector) => T
  ) => Field<"questionToken", never, SelectionSet<T>>;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly type: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"type", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;

  readonly typeParameters: <T extends ReadonlyArray<Selection>>(
    select: (t: ITypeParameterDeclarationSelector) => T
  ) => Field<"typeParameters", never, SelectionSet<T>>;
}

const SetAccessorDeclarationSelector: ISetAccessorDeclarationSelector = {
  __typename: () => field("__typename"),

  asteriskToken: (select) =>
    field(
      "asteriskToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  end: () => field("end"),

  exclamationToken: (select) =>
    field(
      "exclamationToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parameters: (select) =>
    field(
      "parameters",
      undefined as never,
      selectionSet(select(ParameterDeclarationSelector))
    ),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),

  questionToken: (select) =>
    field(
      "questionToken",
      undefined as never,
      selectionSet(select(TokenSelector))
    ),

  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  type: (select) =>
    field("type", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  typeParameters: (select) =>
    field(
      "typeParameters",
      undefined as never,
      selectionSet(select(TypeParameterDeclarationSelector))
    ),
};

export const setAccessorDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: ISetAccessorDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "SetAccessorDeclaration", T>(
    SCHEMA as any,
    "SetAccessorDeclaration",
    select(SetAccessorDeclarationSelector)
  );

interface ISourceFileSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly statements: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: INodeSelector) => T
  ) => Field<
    "statements",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const SourceFileSelector: ISourceFileSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  statements: (variables, select) =>
    field(
      "statements",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(NodeSelector))
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const sourceFile = <T extends ReadonlyArray<Selection>>(
  select: (t: ISourceFileSelector) => T
) =>
  new SelectionBuilder<ISchema, "SourceFile", T>(
    SCHEMA as any,
    "SourceFile",
    select(SourceFileSelector)
  );

interface IStringLiteralSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const StringLiteralSelector: IStringLiteralSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const stringLiteral = <T extends ReadonlyArray<Selection>>(
  select: (t: IStringLiteralSelector) => T
) =>
  new SelectionBuilder<ISchema, "StringLiteral", T>(
    SCHEMA as any,
    "StringLiteral",
    select(StringLiteralSelector)
  );

interface IStringLiteralLikeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const StringLiteralLikeSelector: IStringLiteralLikeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const stringLiteralLike = <T extends ReadonlyArray<Selection>>(
  select: (t: IStringLiteralLikeSelector) => T
) =>
  new SelectionBuilder<ISchema, "StringLiteralLike", T>(
    SCHEMA as any,
    "StringLiteralLike",
    select(StringLiteralLikeSelector)
  );

interface IThisTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const ThisTypeNodeSelector: IThisTypeNodeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const thisTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IThisTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "ThisTypeNode", T>(
    SCHEMA as any,
    "ThisTypeNode",
    select(ThisTypeNodeSelector)
  );

interface ITokenSelector {
  readonly __typename: () => Field<"__typename">;

  readonly kind: () => Field<"kind">;
}

const TokenSelector: ITokenSelector = {
  __typename: () => field("__typename"),
  kind: () => field("kind"),
};

export const token = <T extends ReadonlyArray<Selection>>(
  select: (t: ITokenSelector) => T
) =>
  new SelectionBuilder<ISchema, "Token", T>(
    SCHEMA as any,
    "Token",
    select(TokenSelector)
  );

interface ITupleTypeNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly elementTypes: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"elementTypes", never, SelectionSet<T>>;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const TupleTypeNodeSelector: ITupleTypeNodeSelector = {
  __typename: () => field("__typename"),

  elementTypes: (select) =>
    field(
      "elementTypes",
      undefined as never,
      selectionSet(select(NodeSelector))
    ),

  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const tupleTypeNode = <T extends ReadonlyArray<Selection>>(
  select: (t: ITupleTypeNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "TupleTypeNode", T>(
    SCHEMA as any,
    "TupleTypeNode",
    select(TupleTypeNodeSelector)
  );

interface ITypeAliasDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly jsDoc: <T extends ReadonlyArray<Selection>>(
    select: (t: IJSDocSelector) => T
  ) => Field<"jsDoc", never, SelectionSet<T>>;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly type: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"type", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;

  readonly typeParameters: <T extends ReadonlyArray<Selection>>(
    select: (t: ITypeParameterDeclarationSelector) => T
  ) => Field<"typeParameters", never, SelectionSet<T>>;
}

const TypeAliasDeclarationSelector: ITypeAliasDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),

  jsDoc: (select) =>
    field("jsDoc", undefined as never, selectionSet(select(JSDocSelector))),

  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  type: (select) =>
    field("type", undefined as never, selectionSet(select(NodeSelector))),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  typeParameters: (select) =>
    field(
      "typeParameters",
      undefined as never,
      selectionSet(select(TypeParameterDeclarationSelector))
    ),
};

export const typeAliasDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: ITypeAliasDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "TypeAliasDeclaration", T>(
    SCHEMA as any,
    "TypeAliasDeclaration",
    select(TypeAliasDeclarationSelector)
  );

interface ITypeLiteralSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const TypeLiteralSelector: ITypeLiteralSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const typeLiteral = <T extends ReadonlyArray<Selection>>(
  select: (t: ITypeLiteralSelector) => T
) =>
  new SelectionBuilder<ISchema, "TypeLiteral", T>(
    SCHEMA as any,
    "TypeLiteral",
    select(TypeLiteralSelector)
  );

interface ITypeParameterDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly constraint: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"constraint", never, SelectionSet<T>>;

  readonly default: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"default", never, SelectionSet<T>>;

  readonly end: () => Field<"end">;

  readonly expression: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"expression", never, SelectionSet<T>>;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const TypeParameterDeclarationSelector: ITypeParameterDeclarationSelector = {
  __typename: () => field("__typename"),

  constraint: (select) =>
    field("constraint", undefined as never, selectionSet(select(NodeSelector))),

  default: (select) =>
    field("default", undefined as never, selectionSet(select(NodeSelector))),

  end: () => field("end"),

  expression: (select) =>
    field("expression", undefined as never, selectionSet(select(NodeSelector))),

  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const typeParameterDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: ITypeParameterDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "TypeParameterDeclaration", T>(
    SCHEMA as any,
    "TypeParameterDeclaration",
    select(TypeParameterDeclarationSelector)
  );

interface ITypeReferenceSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly text: () => Field<"text">;

  readonly typeArguments: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"typeArguments", never, SelectionSet<T>>;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const TypeReferenceSelector: ITypeReferenceSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),
  text: () => field("text"),

  typeArguments: (select) =>
    field(
      "typeArguments",
      undefined as never,
      selectionSet(select(NodeSelector))
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const typeReference = <T extends ReadonlyArray<Selection>>(
  select: (t: ITypeReferenceSelector) => T
) =>
  new SelectionBuilder<ISchema, "TypeReference", T>(
    SCHEMA as any,
    "TypeReference",
    select(TypeReferenceSelector)
  );

interface IUNKNOWN_NODESelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const UNKNOWN_NODESelector: IUNKNOWN_NODESelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const uNKNOWN_NODE = <T extends ReadonlyArray<Selection>>(
  select: (t: IUNKNOWN_NODESelector) => T
) =>
  new SelectionBuilder<ISchema, "UNKNOWN_NODE", T>(
    SCHEMA as any,
    "UNKNOWN_NODE",
    select(UNKNOWN_NODESelector)
  );

interface IUnionTypeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;

  readonly types: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"types", never, SelectionSet<T>>;
}

const UnionTypeSelector: IUnionTypeSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  types: (select) =>
    field("types", undefined as never, selectionSet(select(NodeSelector))),
};

export const unionType = <T extends ReadonlyArray<Selection>>(
  select: (t: IUnionTypeSelector) => T
) =>
  new SelectionBuilder<ISchema, "UnionType", T>(
    SCHEMA as any,
    "UnionType",
    select(UnionTypeSelector)
  );

interface IUnnamedNodeSelector {
  readonly __typename: () => Field<"__typename">;

  readonly text: () => Field<"text">;
}

const UnnamedNodeSelector: IUnnamedNodeSelector = {
  __typename: () => field("__typename"),
  text: () => field("text"),
};

export const unnamedNode = <T extends ReadonlyArray<Selection>>(
  select: (t: IUnnamedNodeSelector) => T
) =>
  new SelectionBuilder<ISchema, "UnnamedNode", T>(
    SCHEMA as any,
    "UnnamedNode",
    select(UnnamedNodeSelector)
  );

interface IVariableDeclarationSelector {
  readonly __typename: () => Field<"__typename">;

  readonly end: () => Field<"end">;

  readonly flags: () => Field<"flags">;

  readonly kind: () => Field<"kind">;

  readonly kindCode: () => Field<"kindCode">;

  readonly modifiers: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    },
    T extends ReadonlyArray<Selection>
  >(
    variables: V,
    select: (t: ITokenSelector) => T
  ) => Field<
    "modifiers",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>],
    SelectionSet<T>
  >;

  readonly name: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"name", never, SelectionSet<T>>;

  readonly nameText: () => Field<"nameText">;

  readonly parent: <T extends ReadonlyArray<Selection>>(
    select: (t: INodeSelector) => T
  ) => Field<"parent", never, SelectionSet<T>>;

  readonly pos: () => Field<"pos">;

  readonly rawText: <
    V extends {
      only?: Variable<string> | SyntaxKind;
      skip?: Variable<string> | SyntaxKind;
    }
  >(
    variables: V
  ) => Field<
    "rawText",
    [Argument<"only", V["only"]>, Argument<"skip", V["skip"]>]
  >;

  readonly typeName: <T extends ReadonlyArray<Selection>>(
    select: (t: IDeclarationNameSelector) => T
  ) => Field<"typeName", never, SelectionSet<T>>;
}

const VariableDeclarationSelector: IVariableDeclarationSelector = {
  __typename: () => field("__typename"),
  end: () => field("end"),
  flags: () => field("flags"),
  kind: () => field("kind"),
  kindCode: () => field("kindCode"),

  modifiers: (variables, select) =>
    field(
      "modifiers",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any,
      selectionSet(select(TokenSelector))
    ),

  name: (select) =>
    field(
      "name",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),

  nameText: () => field("nameText"),

  parent: (select) =>
    field("parent", undefined as never, selectionSet(select(NodeSelector))),

  pos: () => field("pos"),
  rawText: (variables) =>
    field(
      "rawText",
      Object.entries(variables).map(([k, v]) => argument(k, v)) as any
    ),

  typeName: (select) =>
    field(
      "typeName",
      undefined as never,
      selectionSet(select(DeclarationNameSelector))
    ),
};

export const variableDeclaration = <T extends ReadonlyArray<Selection>>(
  select: (t: IVariableDeclarationSelector) => T
) =>
  new SelectionBuilder<ISchema, "VariableDeclaration", T>(
    SCHEMA as any,
    "VariableDeclaration",
    select(VariableDeclarationSelector)
  );
