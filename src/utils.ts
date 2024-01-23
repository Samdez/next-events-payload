import slugify from "slugify";

export function slugifyString(string: string) {
	const slug = string.replace("/", "_");
	return slugify(slug, { replacement: "_", lower: true, trim: true });
}
