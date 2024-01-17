import { CollectionConfig } from "payload/types";

const Genres: CollectionConfig = {
	slug: "genres",
	access: {
		read: () => true,
	},
	admin: { useAsTitle: "name" },
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
	],
};

export default Genres;
