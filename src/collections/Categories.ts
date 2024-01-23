import { CollectionConfig } from "payload/types";
import { slugifyString } from "../utils";

const Categories: CollectionConfig = {
	slug: "categories",
	access: {
		read: () => true,
	},
	admin: { useAsTitle: "name" },
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
			unique: true,
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

export default Categories;
