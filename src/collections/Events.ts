import { CollectionConfig } from "payload/types";
import { createEventHook } from "../hooks/createEvent";

const Events: CollectionConfig = {
	slug: "events",
	admin: {
		useAsTitle: "title",
		disableDuplicate: false,
	},
	fields: [
		{ name: "title", type: "text", required: true },
		{
			name: "description",
			type: "text",
		},
		{
			name: "date",
			type: "date",
			required: true,
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
			name: "location",
			type: "relationship",
			required: true,
			relationTo: "locations",
		},
		{ name: "price", type: "number" },
		{ name: "sold_out", type: "checkbox", label: "Sold out" },
		{ name: "ticketing_url", type: "text" },
	],
	hooks: {
		afterChange: [createEventHook],
	},
};
export default Events;
