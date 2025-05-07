function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined) {
    return input.toLocaleUpperCase();
  } else if (toUpper === false) {
    return input.toLocaleLowerCase();
  }

  return input;
}
