import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Events from "./collections/Events";
import Medias from "./collections/Media";
import Locations from "./collections/Locations";

console.log("DIR", path.resolve(__dirname, "mocks/modules.js"));
console.log("DIR", path.resolve(__dirname, "hooks/createEvent"));

const mockModulePath = path.resolve(__dirname, "mocks/modules.js");
const fullFilePath = path.resolve(__dirname, "hooks/createEvent");

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
		webpack: config => {
			return {
				...config,
				resolve: {
					...config.resolve,
					alias: {
						...config.resolve.alias,
						[fullFilePath]: mockModulePath,
					},
				},
			};
		},
	},
	editor: slateEditor({}),
	collections: [Users, Events, Medias, Locations],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
	plugins: [payloadCloud()],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
});
