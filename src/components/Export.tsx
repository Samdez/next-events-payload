import * as React from "react";
import { startOfWeek, endOfWeek } from "date-fns";
import qs from "qs";
import type { Event } from "payload/generated-types";

function getDay(date: Date) {
	switch (date.getDay()) {
		case 0:
			return "Dimanche";
		case 1:
			return "Lundi";
		case 2:
			return "Mardi";
		case 3:
			return "Mercredi";
		case 4:
			return "Jeudi";
		case 5:
			return "Vendredi";
		case 6:
			return "Samedi";
	}
}

export const ExportComponent: React.FC = () => {
	const convertToCSV = (objArray: Event[]) => {
		let str = "";

		for (const event of objArray) {
			const location = event.location
				? typeof event.location === "string"
					? event.location
					: event.location.name
				: event.location_alt;

			str += `${event.title},${getDay(new Date(event.date))},${event.time},${location},${event.genres},${event.price === "0" ? "Gratuit" : event.price}\r\n`;
		}

		return str;
	};

	const fetchOptions = async () => {
		try {
			const query = {
				and: [
					{
						date: {
							greater_than_equal: startOfWeek(new Date(), { weekStartsOn: 1 }),
						},
					},
					{
						date: {
							less_than_equal: endOfWeek(new Date(), { weekStartsOn: 1 }),
						},
					},
				],
			};
			const stringifiedQuery = qs.stringify(
				{
					where: query,
				},
				{ addQueryPrefix: true }
			);

			const res = await fetch(
				`${process.env.PAYLOAD_URL}/api/events${stringifiedQuery}&sort=date`
			);
			const parsed = await res.json();
			const csvData = new Blob([convertToCSV(parsed.docs)], {
				type: "text/csv",
			});
			const csvURL = URL.createObjectURL(csvData);
			const link = document.createElement("a");
			link.href = csvURL;
			link.download = `events.csv`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	return (
		<div>
			<button onClick={() => fetchOptions()}>
				Download this week's events
			</button>
		</div>
	);
};
