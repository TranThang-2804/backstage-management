export const s3 = (params: s3) => {
  const { name } = params;

  return `
s3:
  name: "${name}"
  versioning: true 
`;
}
