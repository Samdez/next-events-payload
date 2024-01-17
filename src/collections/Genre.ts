import { CollectionConfig } from "payload/types";

const Genres: CollectionConfig = {
	slug: "genres",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
	],
};

export default Genres;
