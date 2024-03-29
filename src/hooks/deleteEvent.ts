import { CollectionAfterDeleteHook } from "payload/types";

const deleteEventHook: CollectionAfterDeleteHook = async ({ doc }) => {
	const res = await fetch(`${process.env.FRONTEND_URL}/api/webhooks/payload`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ eventId: doc.id }),
	});
	if (!res.ok) {
		throw new Error(`${res.status} ${res.statusText}`);
	}
};

export default deleteEventHook;
