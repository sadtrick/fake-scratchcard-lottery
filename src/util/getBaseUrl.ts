export function getBaseUrl(url: string) {
    return import.meta.env.BASE_URL.concat(url === "/" ? "" : url);
}