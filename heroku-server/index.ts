import { prisma } from "./generated/prisma-client";
import { GraphQLServer } from "graphql-yoga";

const resolvers = {
    Query: {
        luiism(root, args, context) {
            return context.prisma.luiism({ id: args.luiismId });
        },
        async randomLuiism(root, args, context) {
            const aggregate = await context.prisma
                .luiismsConnection()
                .aggregate();

            const randomIndex = Math.floor(Math.random() * aggregate.count);

            const luiism = await context.prisma.luiisms({
                skip: randomIndex,
                first: 1
            });

            return context.prisma.luiism({ id: luiism[0].id });
        }
    },
    Mutation: {
        createLuiism(root, args, context) {
            return context.prisma.createLuiism({
                data: {
                    value: args.value,
                    definition: args.definition,
                    submittedBy: {
                        connect: {
                            id: args.submittedById
                        }
                    }
                }
            });
        }
    },
    Luiism: {
        submittedBy(root, args, context) {
            return context.prisma
                .luiism({
                    id: root.id
                })
                .submittedBy();
        },
        favouritedBy(root, args, context) {
            return context.prisma
                .luiism({
                    id: root.id
                })
                .favouritedBy();
        }
    }
};

const server = new GraphQLServer({
    typeDefs: "./schema.graphql",
    resolvers,
    context: {
        prisma
    }
});
server.start(() => console.log("Server is running on http://localhost:4000"));
