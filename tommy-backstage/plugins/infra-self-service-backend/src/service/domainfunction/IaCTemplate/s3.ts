export const s3 = (params: JSON) => {
  const { name } = params;

  return `
s3:
  name: "${name}"
  versioning: 
    enabled: true 
`;
}
