import axios from 'axios';

const uploadFile = async (fileType, file, userId) => {
  const formData = new FormData();
  formData.append('fileType', fileType);
  formData.append('file', file);
  formData.append('userId', userId);

  try {
    const response = await axios.post('/your-api-endpoint', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default uploadFile;
