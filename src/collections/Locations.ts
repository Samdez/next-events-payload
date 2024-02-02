import { Block, CollectionConfig } from "payload/types";
import { slugifyString } from "../utils";

const Locations: CollectionConfig = {
	slug: "locations",
	access: { read: () => true },
	admin: { useAsTitle: "name" },
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "description",
			type: "richText",
		},
		{
			name: "place_id",
			label: "place id",
			type: "text",
		},
		{
			name: "city",
			type: "text",
		},
		{
			name: "image",
			type: "upload",
			relationTo: "medias",
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "slug",
			type: "text",
			hooks: {
				beforeValidate: [
					({ req: { payload }, data }) => {
						if (payload) {
							return slugifyString(data.name);
						}
					},
				],
			},
		},
	],
};

export default Locations;
