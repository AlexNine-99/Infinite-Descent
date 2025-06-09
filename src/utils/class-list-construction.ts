export const classList = (
  constants: string,
  conditionals: [string, boolean][]
) =>
  conditionals.reduce(
    (acc, [name, present]) => acc + (present ? `${name}` : ''),
    constants
  )
