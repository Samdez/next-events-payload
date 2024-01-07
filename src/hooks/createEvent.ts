import { CollectionAfterChangeHook } from "payload/types";
import { prisma } from "../db/client";

export const createEventHook: CollectionAfterChangeHook = async ({
	operation,
	doc,
}) => {
	if (!(operation === "create")) return;

	const res = await prisma.event.create({
		data: {
			id: doc.id,
		},
	});
	console.log("🚀 ~ file: Events.ts:20 ~ res:", res);
};
