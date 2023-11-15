import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableColumn, Progress, ResponseErrorPanel } from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';

import {
  Button,
} from "@mui/material";

export const serviceList = {
  "results": [
    {
      "name": "S3",
      "picture": "../../../asset/images/S3.png",
    }
  ]
}

const useStyles = makeStyles({
  avatar: {
    height: 42,
    width: 42,
    borderRadius: '50%',
  },
});

type Service = {
  name: string;
  picture: string; // "https://api.dicebear.com/6.x/open-peeps/svg?seed=Duane"
};

type DenseTableProps = {
  services: Service[];
};

export const DenseTable = ({ services: services }: DenseTableProps) => {
  const classes = useStyles();

  const columns: TableColumn[] = [
    { title: 'icon', field: 'image' },
    { title: 'Name', field: 'name' },
    { title: '', field: 'button' },
  ];

  const data = services.map(service => {
    return {
      image: (
        <img
          src={service.picture}
          className={classes.avatar}
          alt={service.name}
        />
      ),
      name: `${service.name}`,
      button:
        <Button
          type="submit"
          color="orangeFake"
          variant="contained"
          onClick={signin}
          fullWidth
        >
          Sign in
        </Button>
    };
  });

  return (
    <Table
      title="Infra Service List"
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

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
