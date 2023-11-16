import React from 'react';
import { Progress, ResponseErrorPanel } from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';
import { DenseTable, Service } from './DetailInputModal';

export const serviceList = {
  "results": [
    {
      "name": "S3",
      "picture": "../../../asset/images/S3.png",
    }
  ]
}

export const InfraOptionList = () => {

  const { value, loading, error } = useAsync(async (): Promise<Service[]> => {
    // Would use fetch in a real world example
    return serviceList.results;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  return <DenseTable services={value || []} />;
};
