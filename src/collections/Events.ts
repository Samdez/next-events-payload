import { CollectionConfig } from "payload/types";
import createEventHook from "../hooks/createEvent";
import deleteEventHook from "../hooks/deleteEvent";

const Events: CollectionConfig = {
	slug: "events",
	access: {
		read: () => true,
	},
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
			name: "rich_text_description",
			label: "Rich text description",
			type: "richText",
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
		{ name: "genre", type: "relationship", relationTo: "genres" },
		{ name: "price", type: "text" },
		{ name: "sold_out", type: "checkbox", label: "Sold out" },
		{ name: "ticketing_url", type: "text" },
	],
	hooks: {
		afterChange: [createEventHook],
		afterDelete: [deleteEventHook],
	},
};
export default Events;
