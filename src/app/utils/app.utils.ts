/*
  * Return the link to the user profile
*/
export function linkToProfileUtil(id: string): string {
  return `https://www.flickr.com/photos/${id}`;
}

/*
  * removes the unessesary junk form the description
*/
export function stripDescriptionUtil(description: string): string {
  const strippedDescription = description.substring(
    description.lastIndexOf('<p>') + 3,
    description.lastIndexOf('</p>')
  ).replace(/(<([^>]+)>)/ig, '');
  return strippedDescription ? `<p>${strippedDescription}</p>` : '<span class="small>No description</span>';
}

/*
  * Return the author substring
  * between double quotes
  * ie potato.author: `nobody@flickr.com ("username")`
*/
export function photoAuthorUtil(author: string): string {
   return author.match( /"(.*?)"/ )[1];
}
