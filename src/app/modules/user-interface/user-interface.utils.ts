export function createId(
  input: HTMLInputElement | undefined,
  id: string
): string {
  if (!input) return id;
  return input.id ? id = input.id : (input.id = id);
}
