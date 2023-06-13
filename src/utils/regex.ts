export const removeHTMLTags = (str: string) => str.replace(/<[^>]*>?/gm, '');
