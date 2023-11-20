import axios from 'axios';

// GitHub repository details
const owner = 'TranThang-2804';  // Replace with your GitHub username
const repo = 'terraform-common';  // Replace with your repository name
const branch = 'automation';          // Replace with your branch name

// GitHub Personal Access Token for authentication
const accessToken = ""  // Replace with your personal access token


const githubCreatePR = async (content: String) => {

  // GitHub API endpoint for creating a new file
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents`;

  // Create a base64-encoded content
  const contentBase64 = Buffer.from(content).toString('base64');

  // Create the request payload
  const data = {
    message: 'Added resource file by backstage',
    content: contentBase64,
    branch: branch,
  };

  // Make the API request to create a new file
  axios.put(apiUrl, data, {
    headers: {
      Authorization: `token ${accessToken}`,
      'Content-Type': 'application/json',
    },

  })
    .then((response) => {
      console.log('File added successfully:', response.data);
    })
    .catch((error) => {
      console.error('Error adding file:', error.response ? error.response.data : error.message);
    });

};

const githubPush = async (content: String, keyName: String) => {

  // File details
  const filePath = `resources/sit/s3/${keyName}.yaml`;  // Replace with the path to your file

  // GitHub API endpoint for creating a new file
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

  // Create a base64-encoded content
  const contentBase64 = Buffer.from(content).toString('base64');

  // Create the request payload
  const data = {
    message: 'Add a new file',
    content: contentBase64,
    branch: branch,
  };

  // Make the API request to create a new file
  axios.put(apiUrl, data, {
    headers: {
      Authorization: `token ${accessToken}`,
      'Content-Type': 'application/json',
    },

  })
    .then((response) => {
      console.log('File added successfully:', response.data);
      return true;
    })
    .catch((error) => {
      console.error('Error adding file:', error.response ? error.response.data : error.message);
      return false;
    });
  return false;
};

export const createPR = async (content: String, keyName: String) => {
  if (await githubPush(content, keyName)) {
    // await githubCreatePR(content);
    console.log('hihihi');
  }
  console.log(content);
};
