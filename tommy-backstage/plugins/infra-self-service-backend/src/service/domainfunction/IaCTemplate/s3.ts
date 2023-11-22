export const s3 = (params: JSON, keyName: String) => {
  const { name } = params;

  return `
${keyName}:
  name: "${name}"
  versioning: 
    enabled: true 
`;
}
