export function GetDateFromString(dateString) {
  const Tokens = dateString.split("-");
  return new Date(
    Number(Tokens[0]),
    Number(Tokens[1]) - 1,
    Number(Tokens[2]),
    12
  );
}
