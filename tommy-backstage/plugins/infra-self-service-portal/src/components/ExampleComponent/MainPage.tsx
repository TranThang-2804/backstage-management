import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { InfraOptionList } from '../InfraOptionList';

export const MainPage = () => (
  <Page themeId="tool">
    <Header title="Welcome to infra-self-service-portal!" subtitle="Optional subtitle">
      <HeaderLabel label="Owner" value="Tommy" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Infrastructure self service portal">
        <SupportButton>This is a portal for dev to create infrastructure resources with out requesting to DevOps team</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Description">
            <Typography variant="body1">
              This is a portal for dev to create infrastructure resources with out requesting to DevOps team. This will generate resource file based on your request and create a PR to IaC repository, finally this will ping DevOps to review the request. You also able to see the request process in this portal.
            </Typography>
          </InfoCard>
        </Grid>
        <Grid item>
          <InfraOptionList />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
