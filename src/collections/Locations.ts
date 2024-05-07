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
			type: "select",
			hasMany: false,
			// admin: { isClearable: true },
			options: [
				{ label: "Biarritz", value: "biarritz" },
				{ label: "Bayonne", value: "bayonne" },
				{ label: "Anglet", value: "anglet" },
				{ label: "Capbreton", value: "capbreton" },
				{ label: "Hossegor", value: "hossegor" },
				{ label: "Seignosse", value: "seignosse" },
				{ label: "Saint Jean de Luz", value: "saint_jean_de_luz" },
				{ label: "Hendaye", value: "hendaye" },
			],
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
