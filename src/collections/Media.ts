import { CollectionConfig } from "payload/types";

const Medias: CollectionConfig = {
	slug: "medias",
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	upload: {
		staticURL: "/media",
		staticDir: "media",
		mimeTypes: ["image/*"],
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
	],
};

export default Medias;
