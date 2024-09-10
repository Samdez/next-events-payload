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

import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import Categories from "./collections/Categories";
import { ExportComponent } from "./components/Export";

const adapter = s3Adapter({
	config: {
		credentials: {
			accessKeyId: process.env.S3_ACCESS_KEY_ID,
			secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
		},
		region: process.env.S3_REGION,
	},
	bucket: process.env.S3_BUCKET,
});

export default buildConfig({
	serverURL: process.env.PAYLOAD_URL,
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
		components: {
			afterDashboard: [ExportComponent],
		},
	},
	editor: slateEditor({}),
	collections: [Users, Events, Medias, Locations, Categories],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
	plugins: [
		payloadCloud(),
		cloudStorage({
			collections: {
				medias: {
					adapter,
				},
			},
		}),
	],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
});
