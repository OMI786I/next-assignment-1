function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined) {
    return input.toLocaleUpperCase();
  } else if (toUpper === false) {
    return input.toLocaleLowerCase();
  }

  return input;
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filteredResult = items.filter((res) => res.rating >= 4);
  return filteredResult;
}
