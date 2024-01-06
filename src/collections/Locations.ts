import { Block, CollectionConfig } from "payload/types";

const Locations: CollectionConfig = {
	slug: "locations",
	admin: { useAsTitle: "name" },
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
	],
};

export default Locations;
