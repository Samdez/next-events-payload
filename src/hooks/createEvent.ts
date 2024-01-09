import { CollectionAfterChangeHook } from "payload/types";

const createEventHook: CollectionAfterChangeHook = async ({
	operation,
	doc,
}) => {
	if (!(operation === "create")) return;
	const res = await fetch("http://localhost:3001/api/webhooks/payload", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ eventId: doc.id }),
	});
	if (!res.ok) {
		throw new Error(`${res.status} ${res.statusText}`);
	}
};

export default createEventHook;
