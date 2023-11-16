import * as template from './IaCTemplate/s3';
import { createPR } from './gitAction';

export const genFile = (type: String, params: JSON, keyName: String) => {
  let iacTemplate: String = '';
  switch (type) {
    case 's3':
      iacTemplate = template.s3(params);
      break;
    default:
      console.log('No template found for ${type}');
  }
  createPR(iacTemplate, keyName);
};
